/**
 * Error Suppression Utilities
 * Suppress development warnings and errors that don't affect functionality
 */

// Suppress specific console warnings in development
export const suppressDevelopmentWarnings = () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const originalError = console.error;
  const originalWarn = console.warn;

  console.error = (...args) => {
    const message = args.join(' ');
    
    // Suppress specific development errors
    if (
      message.includes('Download the React DevTools') ||
      message.includes('WebSocket connection') ||
      message.includes('chrome-extension') ||
      message.includes('Failed to execute') ||
      message.includes('Request scheme')
    ) {
      return;
    }
    
    originalError.apply(console, args);
  };

  console.warn = (...args) => {
    const message = args.join(' ');
    
    // Suppress specific development warnings
    if (
      message.includes('DataStore') ||
      message.includes('syncCandidates') ||
      message.includes('Unauthorized') ||
      message.includes('onCreateCandidate') ||
      message.includes('onUpdateCandidate') ||
      message.includes('onDeleteCandidate') ||
      message.includes('React DevTools')
    ) {
      return;
    }
    
    originalWarn.apply(console, args);
  };
};

// Initialize error suppression
suppressDevelopmentWarnings();