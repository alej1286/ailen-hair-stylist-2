import { useEffect } from 'react';

/**
 * ElfsightWidget Component - Manages Elfsight Instagram widget
 */
const ElfsightWidget = () => {
  useEffect(() => {
    // Hide Elfsight branding links after widget loads
    const hideElfsightLinks = () => {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        if (link.href && link.href.match(/.*elfsight.*/)) {
          link.style.display = 'none';
        }
      });
    };

    // Initial cleanup
    setTimeout(hideElfsightLinks, 3000);
    
    // Periodic cleanup for dynamic content
    const interval = setInterval(hideElfsightLinks, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="elfsight-widget-container">
      <div 
        className="elfsight-app-4495d092-b640-4aa1-88ec-ab5fb0a2961a" 
        data-elfsight-app-lazy
      />
    </div>
  );
};

export default ElfsightWidget;