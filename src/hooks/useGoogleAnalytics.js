import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_TRACKING_ID = 'G-FZTZPVTSJ2';

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  const trackEvent = (action, category, label, value) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  return { trackEvent };
};