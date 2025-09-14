// Google Analytics utility functions
export const trackPageView = (path) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-FZTZPVTSJ2', {
      page_path: path,
    });
  }
};

export const trackEvent = (action, category, label, value) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined events for common actions
export const trackContactFormSubmit = () => {
  trackEvent('submit', 'contact', 'contact_form');
};

export const trackServiceView = (serviceName) => {
  trackEvent('view', 'service', serviceName);
};

export const trackGalleryImageView = (imageId) => {
  trackEvent('view', 'gallery', `image_${imageId}`);
};

export const trackInstagramClick = () => {
  trackEvent('click', 'social', 'instagram');
};