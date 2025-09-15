import { useState, useCallback } from 'react';
import { validateWhatsAppMessage, verifyChallenge } from '../utils/whatsappSecurity';

/**
 * Custom hook for WhatsApp security management
 * Handles validation, challenges, and security state
 */
export const useWhatsAppSecurity = () => {
  const [securityState, setSecurityState] = useState({
    isValidating: false,
    errors: [],
    requiresChallenge: false,
    challenge: null,
    challengeAnswer: '',
    isBlocked: false,
  });

  // Reset security state
  const resetSecurityState = useCallback(() => {
    setSecurityState({
      isValidating: false,
      errors: [],
      requiresChallenge: false,
      challenge: null,
      challengeAnswer: '',
      isBlocked: false,
    });
  }, []);

  // Validate message with security checks
  const validateMessage = useCallback(async (message) => {
    setSecurityState(prev => ({ ...prev, isValidating: true, errors: [] }));
    
    try {
      const validation = validateWhatsAppMessage(message);
      
      setSecurityState(prev => ({
        ...prev,
        isValidating: false,
        errors: validation.errors,
        requiresChallenge: validation.requiresChallenge,
        challenge: validation.challenge,
        isBlocked: validation.errors.some(error => error.includes('blocked')),
      }));
      
      return validation;
    } catch (error) {
      console.error('Security validation error:', error);
      setSecurityState(prev => ({
        ...prev,
        isValidating: false,
        errors: ['Security check failed. Please try again.'],
      }));
      
      return { isValid: false, errors: ['Security check failed. Please try again.'] };
    }
  }, []);

  // Handle challenge answer
  const setChallengeAnswer = useCallback((answer) => {
    setSecurityState(prev => ({ ...prev, challengeAnswer: answer }));
  }, []);

  // Verify challenge
  const verifyChallengeAnswer = useCallback(() => {
    if (!securityState.challenge) return false;
    
    const isCorrect = verifyChallenge(
      securityState.challengeAnswer,
      securityState.challenge.answer
    );
    
    if (!isCorrect) {
      setSecurityState(prev => ({
        ...prev,
        errors: ['Incorrect answer. Please try again.'],
      }));
    }
    
    return isCorrect;
  }, [securityState.challenge, securityState.challengeAnswer]);

  // Clear errors
  const clearErrors = useCallback(() => {
    setSecurityState(prev => ({ ...prev, errors: [] }));
  }, []);

  // Check if message can be sent
  const canSendMessage = useCallback(() => {
    return !securityState.isValidating && 
           !securityState.isBlocked && 
           securityState.errors.length === 0;
  }, [securityState]);

  return {
    securityState,
    validateMessage,
    setChallengeAnswer,
    verifyChallengeAnswer,
    resetSecurityState,
    clearErrors,
    canSendMessage,
  };
};

export default useWhatsAppSecurity;