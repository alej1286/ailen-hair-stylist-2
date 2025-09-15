// PWA Helper functions

export const isPWAInstalled = () => {
  // Check if running in standalone mode
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  // Check if running as iOS PWA
  const isInWebAppiOS = window.navigator.standalone === true;
  
  return isStandalone || isInWebAppiOS;
};

export const canInstallPWA = () => {
  return 'serviceWorker' in navigator && 'PushManager' in window;
};

export const registerSW = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered: ', registration);
      
      // Listen for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New content is available, show update notification
            if (window.confirm('New version available! Reload to update?')) {
              window.location.reload();
            }
          }
        });
      });
      
      return registration;
    } catch (error) {
      console.log('SW registration failed: ', error);
      return null;
    }
  }
  return null;
};

export const unregisterSW = async () => {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      return registration.unregister();
    }
  }
  return false;
};