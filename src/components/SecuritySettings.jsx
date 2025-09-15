import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaCog, FaEye, FaEyeSlash, FaCheck, FaTimes } from 'react-icons/fa';

/**
 * Security Settings Component
 * Admin panel for managing WhatsApp security configurations
 * Only visible to administrators
 */
const SecuritySettings = ({ isVisible, onClose }) => {
  const [settings, setSettings] = useState({
    maxAttemptsPerHour: 3,
    blockDuration: 60, // minutes
    minMessageLength: 10,
    maxMessageLength: 500,
    enableChallenges: true,
    strictMode: false,
  });

  const [stats, setStats] = useState({
    totalAttempts: 0,
    blockedAttempts: 0,
    challengesSolved: 0,
    spamDetected: 0,
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('whatsapp-security-settings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.error('Error loading security settings:', error);
      }
    }

    // Load stats
    const savedStats = localStorage.getItem('whatsapp-security-stats');
    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats));
      } catch (error) {
        console.error('Error loading security stats:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  const saveSettings = () => {
    localStorage.setItem('whatsapp-security-settings', JSON.stringify(settings));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('whatsapp-security-updated', {
      detail: settings
    }));
    
    alert('Security settings saved successfully!');
  };

  // Reset stats
  const resetStats = () => {
    const emptyStats = {
      totalAttempts: 0,
      blockedAttempts: 0,
      challengesSolved: 0,
      spamDetected: 0,
    };
    setStats(emptyStats);
    localStorage.setItem('whatsapp-security-stats', JSON.stringify(emptyStats));
    
    // Clear rate limiting data
    localStorage.removeItem('whatsapp-rate-limit');
    localStorage.removeItem('whatsapp-blocked-clients');
    
    alert('Security statistics reset successfully!');
  };

  // Handle setting changes
  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaShieldAlt className="mr-3" size={24} />
              <div>
                <h2 className="text-xl font-bold">WhatsApp Security Settings</h2>
                <p className="text-blue-100 text-sm">Configure spam protection and security measures</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-red-200 transition-colors"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Security Statistics */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FaEye className="mr-2 text-blue-600" />
              Security Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.totalAttempts}</div>
                <div className="text-sm text-blue-800">Total Attempts</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-red-600">{stats.blockedAttempts}</div>
                <div className="text-sm text-red-800">Blocked</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">{stats.challengesSolved}</div>
                <div className="text-sm text-green-800">Challenges Solved</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">{stats.spamDetected}</div>
                <div className="text-sm text-orange-800">Spam Detected</div>
              </div>
            </div>
          </div>

          {/* Basic Settings */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FaCog className="mr-2 text-gray-600" />
              Basic Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Attempts Per Hour
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={settings.maxAttemptsPerHour}
                  onChange={(e) => handleSettingChange('maxAttemptsPerHour', parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">Number of messages allowed per hour per user</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Block Duration (minutes)
                </label>
                <input
                  type="number"
                  min="5"
                  max="1440"
                  value={settings.blockDuration}
                  onChange={(e) => handleSettingChange('blockDuration', parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">How long to block users who exceed limits</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Enable Security Challenges
                  </label>
                  <p className="text-xs text-gray-500">Show human verification for suspicious messages</p>
                </div>
                <button
                  onClick={() => handleSettingChange('enableChallenges', !settings.enableChallenges)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.enableChallenges ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.enableChallenges ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="mb-6">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-4"
            >
              {showAdvanced ? <FaEyeSlash className="mr-2" /> : <FaEye className="mr-2" />}
              {showAdvanced ? 'Hide' : 'Show'} Advanced Settings
            </button>

            {showAdvanced && (
              <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Message Length
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="50"
                    value={settings.minMessageLength}
                    onChange={(e) => handleSettingChange('minMessageLength', parseInt(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Message Length
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="1000"
                    value={settings.maxMessageLength}
                    onChange={(e) => handleSettingChange('maxMessageLength', parseInt(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Strict Mode
                    </label>
                    <p className="text-xs text-gray-500">More aggressive spam detection</p>
                  </div>
                  <button
                    onClick={() => handleSettingChange('strictMode', !settings.strictMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.strictMode ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.strictMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={saveSettings}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              <FaCheck className="mr-2" />
              Save Settings
            </button>
            <button
              onClick={resetStats}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg transition-colors"
            >
              Reset Statistics
            </button>
          </div>

          {/* Security Tips */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">Security Tips:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Keep max attempts low (3-5) to prevent spam</li>
              <li>• Enable challenges for better bot protection</li>
              <li>• Monitor statistics regularly for unusual activity</li>
              <li>• Use strict mode if you receive too much spam</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;