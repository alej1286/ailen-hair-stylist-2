import React, { useState } from 'react';
import { usePWA } from '../hooks/usePWA';

const InstallPrompt = () => {
  const { isInstallable, isInstalled, installApp } = usePWA();
  const [dismissed, setDismissed] = useState(false);

  if (isInstalled || !isInstallable || dismissed) {
    return null;
  }

  const handleInstall = async () => {
    const success = await installApp();
    if (success) {
      setDismissed(true);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 bg-blue-600 text-white p-2 rounded shadow-lg z-[1000] max-w-[200px]">
      <div className="flex items-center gap-2">
        <span className="text-xs">Install App</span>
        <button
          onClick={handleInstall}
          className="bg-white text-blue-600 px-2 py-1 rounded text-xs hover:bg-gray-100"
        >
          Install
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="text-white hover:text-gray-200 text-sm"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt;