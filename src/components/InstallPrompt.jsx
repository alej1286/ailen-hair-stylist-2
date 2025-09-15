import React from 'react';
import { usePWA } from '../hooks/usePWA';

const InstallPrompt = () => {
  const { isInstallable, isInstalled, installApp } = usePWA();

  if (isInstalled || !isInstallable) {
    return null;
  }

  const handleInstall = async () => {
    const success = await installApp();
    if (success) {
      console.log('App installed successfully');
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-purple-600 text-white p-4 rounded-lg shadow-lg z-50 md:left-auto md:right-4 md:max-w-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-sm">Install Ailen Hair Stylist</h3>
          <p className="text-xs opacity-90 mt-1">
            Get quick access to our services and book appointments easily
          </p>
        </div>
        <div className="ml-4 flex space-x-2">
          <button
            onClick={handleInstall}
            className="bg-white text-purple-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;