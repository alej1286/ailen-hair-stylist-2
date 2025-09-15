/**
 * WhatsApp Security Utilities
 * Anti-spam and bot protection for WhatsApp communications
 */

// Rate limiting storage
const rateLimitStorage = {
  attempts: new Map(),
  blocked: new Set(),
};

// Default security configuration
let SECURITY_CONFIG = {
  MAX_ATTEMPTS_PER_HOUR: 3,
  BLOCK_DURATION: 60 * 60 * 1000, // 1 hour in milliseconds
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 500,
  ENABLE_CHALLENGES: true,
  STRICT_MODE: false,
  SUSPICIOUS_PATTERNS: [
    /bot/i,
    /automated/i,
    /script/i,
    /spam/i,
    /promotion/i,
    /discount/i,
    /free/i,
    /click here/i,
    /visit our/i,
    /www\./i,
    /http/i,
    /\.com/i,
    /\.net/i,
    /\.org/i,
    /\$\d+/,
    /money/i,
    /earn/i,
    /investment/i,
    /crypto/i,
    /bitcoin/i,
    /loan/i,
    /credit/i,
    /casino/i,
    /gambling/i,
    /viagra/i,
    /pharmacy/i,
    /pills/i,
    /weight loss/i,
    /make money/i,
    /work from home/i,
  ],
  REQUIRED_KEYWORDS: [
    'hair',
    'appointment',
    'booking',
    'cut',
    'style',
    'color',
    'salon',
    'service',
    'schedule',
    'available',
    'time',
    'date',
  ],
};

// Load configuration from localStorage
function loadSecurityConfig() {
  try {
    const savedSettings = localStorage.getItem('whatsapp-security-settings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      SECURITY_CONFIG.MAX_ATTEMPTS_PER_HOUR = settings.maxAttemptsPerHour || 3;
      SECURITY_CONFIG.BLOCK_DURATION = (settings.blockDuration || 60) * 60 * 1000;
      SECURITY_CONFIG.MIN_MESSAGE_LENGTH = settings.minMessageLength || 10;
      SECURITY_CONFIG.MAX_MESSAGE_LENGTH = settings.maxMessageLength || 500;
      SECURITY_CONFIG.ENABLE_CHALLENGES = settings.enableChallenges !== false;
      SECURITY_CONFIG.STRICT_MODE = settings.strictMode || false;
    }
  } catch (error) {
    console.error('Error loading security config:', error);
  }
}

// Listen for configuration updates
if (typeof window !== 'undefined') {
  window.addEventListener('whatsapp-security-updated', (event) => {
    loadSecurityConfig();
  });
  
  // Load initial configuration
  loadSecurityConfig();
}

// Statistics tracking
function updateStats(type) {
  try {
    const stats = JSON.parse(localStorage.getItem('whatsapp-security-stats') || '{}');
    stats[type] = (stats[type] || 0) + 1;
    localStorage.setItem('whatsapp-security-stats', JSON.stringify(stats));
  } catch (error) {
    console.error('Error updating stats:', error);
  }
}

/**
 * Generate a unique identifier for rate limiting
 * Uses browser fingerprinting techniques
 */
function generateClientId() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.font = '14px Arial';
  ctx.fillText('Security check', 2, 2);
  
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    window.screen.width + 'x' + window.screen.height,
    new Date().getTimezoneOffset(),
    canvas.toDataURL(),
  ].join('|');
  
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  return Math.abs(hash).toString(36);
}

/**
 * Check if client is rate limited
 */
function isRateLimited(clientId) {
  const now = Date.now();
  const attempts = rateLimitStorage.attempts.get(clientId) || [];
  
  // Clean old attempts (older than 1 hour)
  const recentAttempts = attempts.filter(
    timestamp => now - timestamp < SECURITY_CONFIG.BLOCK_DURATION
  );
  
  rateLimitStorage.attempts.set(clientId, recentAttempts);
  
  return recentAttempts.length >= SECURITY_CONFIG.MAX_ATTEMPTS_PER_HOUR;
}

/**
 * Record an attempt
 */
function recordAttempt(clientId) {
  const attempts = rateLimitStorage.attempts.get(clientId) || [];
  attempts.push(Date.now());
  rateLimitStorage.attempts.set(clientId, attempts);
}

/**
 * Check if message contains suspicious patterns
 */
function containsSuspiciousPatterns(message) {
  const lowerMessage = message.toLowerCase();
  
  // Check for suspicious patterns
  const suspiciousCount = SECURITY_CONFIG.SUSPICIOUS_PATTERNS.filter(
    pattern => pattern.test(message)
  ).length;
  
  // If too many suspicious patterns, likely spam
  if (suspiciousCount >= 3) {
    return true;
  }
  
  // Check for required keywords (at least one should be present)
  const hasRequiredKeyword = SECURITY_CONFIG.REQUIRED_KEYWORDS.some(
    keyword => lowerMessage.includes(keyword)
  );
  
  // If no hair salon related keywords, might be spam
  if (!hasRequiredKeyword && suspiciousCount > 0) {
    return true;
  }
  
  return false;
}

/**
 * Validate message content
 */
function validateMessage(message) {
  const errors = [];
  
  // Length validation
  if (message.length < SECURITY_CONFIG.MIN_MESSAGE_LENGTH) {
    errors.push('Message too short. Please provide more details about your hair service needs.');
  }
  
  if (message.length > SECURITY_CONFIG.MAX_MESSAGE_LENGTH) {
    errors.push('Message too long. Please keep your message concise.');
  }
  
  // Suspicious content check
  if (containsSuspiciousPatterns(message)) {
    errors.push('Message appears to be spam or automated. Please write a genuine message about hair services.');
  }
  
  // Check for excessive repetition
  const words = message.toLowerCase().split(/\s+/);
  const wordCount = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  const maxRepeats = Math.max(...Object.values(wordCount));
  if (maxRepeats > 5) {
    errors.push('Message contains too much repetition. Please write naturally.');
  }
  
  return errors;
}

/**
 * Human verification challenge
 */
function createHumanChallenge() {
  const challenges = [
    {
      question: "What service are you interested in? (Type: hair)",
      answer: "hair",
      hint: "We are a professional hair salon"
    },
    {
      question: "Complete this: Hair _____ (Type: cut)",
      answer: "cut",
      hint: "A basic hair service"
    },
    {
      question: "What tool is used to style hair? (Type: brush)",
      answer: "brush",
      hint: "Common styling tool"
    },
    {
      question: "What do you call a hair professional? (Type: stylist)",
      answer: "stylist",
      hint: "Someone who cuts and styles hair"
    },
    {
      question: "What do you apply to change hair color? (Type: dye)",
      answer: "dye",
      hint: "Chemical used for coloring"
    }
  ];
  
  return challenges[Math.floor(Math.random() * challenges.length)];
}

/**
 * Main security check function
 */
export function validateWhatsAppMessage(message, skipRateLimit = false) {
  const clientId = generateClientId();
  const result = {
    isValid: false,
    errors: [],
    requiresChallenge: false,
    challenge: null,
    clientId,
  };
  
  // Check if client is blocked
  if (rateLimitStorage.blocked.has(clientId)) {
    result.errors.push('You have been temporarily blocked due to suspicious activity. Please try again later.');
    return result;
  }
  
  // Rate limiting check
  if (!skipRateLimit && isRateLimited(clientId)) {
    result.errors.push('Too many attempts. Please wait before sending another message.');
    rateLimitStorage.blocked.add(clientId);
    
    // Auto-unblock after block duration
    setTimeout(() => {
      rateLimitStorage.blocked.delete(clientId);
    }, SECURITY_CONFIG.BLOCK_DURATION);
    
    return result;
  }
  
  // Validate message content
  const messageErrors = validateMessage(message);
  result.errors.push(...messageErrors);
  
  // If message has issues, might need human verification
  if (messageErrors.length > 0 && SECURITY_CONFIG.ENABLE_CHALLENGES) {
    result.requiresChallenge = true;
    result.challenge = createHumanChallenge();
  }
  
  // Record attempt if not skipping rate limit
  if (!skipRateLimit) {
    recordAttempt(clientId);
    updateStats('totalAttempts');
  }
  
  // Update statistics
  if (result.errors.length > 0) {
    updateStats('blockedAttempts');
  }
  if (messageErrors.length > 0) {
    updateStats('spamDetected');
  }
  
  result.isValid = result.errors.length === 0;
  
  return result;
}

/**
 * Verify human challenge response
 */
export function verifyChallenge(userAnswer, expectedAnswer) {
  const isCorrect = userAnswer.toLowerCase().trim() === expectedAnswer.toLowerCase().trim();
  if (isCorrect) {
    updateStats('challengesSolved');
  }
  return isCorrect;
}

/**
 * Clean up old data (call periodically)
 */
export function cleanupSecurityData() {
  const now = Date.now();
  
  // Clean rate limit data
  for (const [clientId, attempts] of rateLimitStorage.attempts.entries()) {
    const recentAttempts = attempts.filter(
      timestamp => now - timestamp < SECURITY_CONFIG.BLOCK_DURATION
    );
    
    if (recentAttempts.length === 0) {
      rateLimitStorage.attempts.delete(clientId);
    } else {
      rateLimitStorage.attempts.set(clientId, recentAttempts);
    }
  }
}

// Auto cleanup every 30 minutes
setInterval(cleanupSecurityData, 30 * 60 * 1000);