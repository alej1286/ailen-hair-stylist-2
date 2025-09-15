import { useState, useEffect } from 'react';

const PWAStatus = () => {
  const [, setIsOnline] = useState(navigator.onLine);
  const [, setSwRegistered] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check if service worker is registered
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then((registration) => {
        setSwRegistered(!!registration);
      });
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Hidden in all environments to avoid UI clutter
  return null;
};

export default PWAStatus;