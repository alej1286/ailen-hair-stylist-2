import React, { useState, useEffect, useCallback } from 'react';
import { FaWhatsapp, FaTimes, FaShieldAlt, FaExclamationTriangle } from 'react-icons/fa';
import { useWhatsAppSecurity } from '../hooks/useWhatsAppSecurity';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  
  const {
    securityState,
    validateMessage,
    setChallengeAnswer,
    verifyChallengeAnswer,
    resetSecurityState,
  } = useWhatsAppSecurity();

  // WhatsApp business number
  const whatsappNumber = '+17867949162';
  
  const defaultMessage = 'Hello! I would like to schedule an appointment for hair services. Could you please let me know your availability?';



  // Security validation callback
  const validateAndSend = useCallback(async () => {
    const finalMessage = message.trim() || defaultMessage;
    
    const validation = await validateMessage(finalMessage);
    
    if (validation.isValid) {
      // Message is valid, send it
      const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(finalMessage)}`;
      window.open(whatsappUrl, '_blank');
      setIsOpen(false);
      setMessage('');
      resetSecurityState();
    }
  }, [message, defaultMessage, whatsappNumber, validateMessage, resetSecurityState]);

  // Handle challenge verification
  const handleChallengeSubmit = useCallback(() => {
    if (!securityState.challenge) return;
    
    const isCorrect = verifyChallengeAnswer();
    
    if (isCorrect) {
      // Challenge passed, send message
      const finalMessage = message.trim() || defaultMessage;
      const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(finalMessage)}`;
      window.open(whatsappUrl, '_blank');
      setIsOpen(false);
      setMessage('');
      resetSecurityState();
    }
  }, [securityState.challenge, verifyChallengeAnswer, message, defaultMessage, whatsappNumber, resetSecurityState]);

  const handleSendMessage = validateAndSend;

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed right-6 bottom-6 z-[9999]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
          aria-label="WhatsApp Chat"
        >
          {isOpen ? <FaTimes size={24} /> : <FaWhatsapp size={24} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed right-6 bottom-24 w-80 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-xl border z-[9998]">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaWhatsapp className="mr-2" size={20} />
                <div>
                  <h3 className="font-semibold">WhatsApp Chat</h3>
                  <p className="text-sm opacity-90">Quick Response</p>
                </div>
              </div>
              <FaShieldAlt className="text-green-200" size={16} title="Spam Protected" />
            </div>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 p-3 rounded-lg mb-3">
                <p className="text-sm text-gray-700">
                  Hello! 👋 Welcome to Ailen Hair Stylist. How can we help you today?
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  We're here to help you look your best!
                </p>
              </div>
            </div>

            {/* Security Errors */}
            {securityState.errors.length > 0 && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start">
                  <FaExclamationTriangle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <div className="text-sm">
                    {securityState.errors.map((error, index) => (
                      <p key={index} className="text-red-700 mb-1 last:mb-0">
                        {error}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Human Challenge */}
            {securityState.requiresChallenge && securityState.challenge && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start">
                  <FaShieldAlt className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                  <div className="text-sm">
                    <p className="text-blue-700 font-medium mb-2">Quick Verification</p>
                    <p className="text-blue-600 mb-2">{securityState.challenge.question}</p>
                    <input
                      type="text"
                      value={securityState.challengeAnswer}
                      onChange={(e) => setChallengeAnswer(e.target.value)}
                      placeholder="Your answer"
                      className="w-full p-2 border border-blue-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                    />
                    <p className="text-xs text-blue-500">Hint: {securityState.challenge.hint}</p>
                    <button
                      onClick={handleChallengeSubmit}
                      className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
                    >
                      Verify & Send
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Message Input */}
            {!securityState.isBlocked && (
              <div className="space-y-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={defaultMessage}
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  rows="3"
                  disabled={securityState.isValidating}
                />
                
                {!securityState.requiresChallenge && (
                  <button
                    onClick={handleSendMessage}
                    disabled={securityState.isValidating || securityState.isBlocked}
                    className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm font-medium"
                  >
                    {securityState.isValidating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Validating...
                      </>
                    ) : (
                      <>
                        <FaWhatsapp className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                )}
              </div>
            )}

            {/* Blocked State */}
            {securityState.isBlocked && (
              <div className="text-center py-4">
                <FaShieldAlt className="mx-auto text-red-500 mb-2" size={24} />
                <p className="text-sm text-red-600 font-medium">Temporarily Blocked</p>
                <p className="text-xs text-red-500 mt-1">Please try again later</p>
              </div>
            )}

            {/* Security Notice */}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center flex items-center justify-center">
                <FaShieldAlt className="mr-1" size={10} />
                Spam protected • Secure messaging
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;