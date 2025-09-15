import { useEffect } from 'react';

const GlobalCleanup = () => {
  useEffect(() => {
    const cleanup = () => {
      // Remove all fixed positioned elements except our components
      const fixedElements = document.querySelectorAll('[style*="position: fixed"], [style*="position:fixed"]');
      fixedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // If element is in top area and right area, hide it
        if (rect.top < 100 && rect.right > window.innerWidth - 100) {
          el.style.display = 'none';
          el.remove();
        }
      });

      // Remove purple install prompts
      const purpleElements = document.querySelectorAll('[style*="background-color: rgb(139, 92, 246)"], [style*="background: rgb(139, 92, 246)"]');
      purpleElements.forEach(el => {
        if (!el.closest('.fixed.bottom-6.left-6')) {
          el.style.display = 'none';
          el.remove();
        }
      });
    };

    // Run immediately
    cleanup();
    
    // Run every second
    const interval = setInterval(cleanup, 1000);
    
    // Run on DOM changes
    const observer = new MutationObserver(cleanup);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default GlobalCleanup;