import { useEffect } from 'react';

/**
 * UICleanup Component - Removes unwanted floating elements and UI clutter
 */
const UICleanup = () => {
  useEffect(() => {
    const cleanupUnwantedElements = () => {
      // Remove PWA-related elements in top-right corner
      const pwaSelectors = [
        '[class*="pwa"]',
        '[class*="PWA"]',
        '[id*="pwa"]',
        '[id*="PWA"]',
        '[data-pwa]',
        '[style*="position: fixed"][style*="top"][style*="right"]',
        '[style*="position:fixed"][style*="top"][style*="right"]'
      ];
      
      pwaSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          if (!element.classList.contains('fixed-element-whatsapp') && 
              !element.classList.contains('fixed-element-install-prompt')) {
            element.style.display = 'none !important';
            element.remove();
          }
        });
      });
      
      // Remove any elements in top-right corner
      const topRightElements = document.querySelectorAll('*');
      topRightElements.forEach(element => {
        const style = window.getComputedStyle(element);
        if (style.position === 'fixed' && 
            (style.top === '0px' || parseInt(style.top) < 50) &&
            (style.right === '0px' || parseInt(style.right) < 50) &&
            !element.classList.contains('fixed-element-whatsapp') &&
            !element.classList.contains('fixed-element-install-prompt')) {
          element.style.display = 'none !important';
          element.remove();
        }
      });
      
      // Clean up Elfsight floating elements
      const elfsightFloating = document.querySelectorAll('[class*="elfsight"][style*="position: fixed"]');
      elfsightFloating.forEach(element => {
        element.style.display = 'none !important';
        element.remove();
      });
    };

    // Initial cleanup
    setTimeout(cleanupUnwantedElements, 1000);
    
    // Periodic cleanup
    const interval = setInterval(cleanupUnwantedElements, 3000);
    
    // Cleanup on DOM mutations
    const observer = new MutationObserver(cleanupUnwantedElements);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default UICleanup;