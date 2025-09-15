import React, { useState } from 'react';
import { FaCog, FaShieldAlt, FaChartBar, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import SecuritySettings from './SecuritySettings';
import { useRolReposStore } from '../store/RolRepo';

/**
 * Admin Panel Component
 * Central dashboard for administrative functions
 * Only accessible to administrators
 */
const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showSecuritySettings, setShowSecuritySettings] = useState(false);
  const { rol } = useRolReposStore();

  // Check if user is admin
  if (rol !== 'Administrator') {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <FaShieldAlt className="mx-auto text-red-500 mb-4" size={48} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
          <p className="text-gray-600">You don't have permission to access this area.</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaChartBar },
    { id: 'security', label: 'Security', icon: FaShieldAlt },
    { id: 'appointments', label: 'Appointments', icon: FaCalendarAlt },
    { id: 'users', label: 'Users', icon: FaUsers },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
          <p className="text-gray-600">Manage your hair salon business settings and security</p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="mr-2" size={16} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Business Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-blue-600 mr-3" size={24} />
                    <div>
                      <p className="text-sm text-blue-600 font-medium">Today's Appointments</p>
                      <p className="text-2xl font-bold text-blue-800">12</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <FaUsers className="text-green-600 mr-3" size={24} />
                    <div>
                      <p className="text-sm text-green-600 font-medium">Active Clients</p>
                      <p className="text-2xl font-bold text-green-800">248</p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <FaChartBar className="text-purple-600 mr-3" size={24} />
                    <div>
                      <p className="text-sm text-purple-600 font-medium">Monthly Revenue</p>
                      <p className="text-2xl font-bold text-purple-800">$12,450</p>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center">
                    <FaShieldAlt className="text-orange-600 mr-3" size={24} />
                    <div>
                      <p className="text-sm text-orange-600 font-medium">Security Status</p>
                      <p className="text-2xl font-bold text-orange-800">Active</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">New appointment booked</span>
                      <span className="text-xs text-gray-500">2 min ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Service updated</span>
                      <span className="text-xs text-gray-500">15 min ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Security scan completed</span>
                      <span className="text-xs text-gray-500">1 hour ago</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setShowSecuritySettings(true)}
                      className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors flex items-center"
                    >
                      <FaShieldAlt className="text-blue-600 mr-3" />
                      <span>Configure Security Settings</span>
                    </button>
                    <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors flex items-center">
                      <FaCog className="text-gray-600 mr-3" />
                      <span>General Settings</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Security Management</h2>
                  <p className="text-gray-600 mt-1">Configure spam protection and security measures</p>
                </div>
                <button
                  onClick={() => setShowSecuritySettings(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                >
                  <FaCog className="mr-2" />
                  Configure Settings
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <FaShieldAlt className="text-green-600 mr-3" size={24} />
                    <h3 className="text-lg font-semibold text-green-800">WhatsApp Protection</h3>
                  </div>
                  <p className="text-green-700 mb-4">
                    Advanced spam filtering and bot protection is active for WhatsApp communications.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-600">Rate Limiting:</span>
                      <span className="font-medium text-green-800">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600">Human Verification:</span>
                      <span className="font-medium text-green-800">Enabled</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600">Spam Detection:</span>
                      <span className="font-medium text-green-800">Advanced</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <FaChartBar className="text-blue-600 mr-3" size={24} />
                    <h3 className="text-lg font-semibold text-blue-800">Security Statistics</h3>
                  </div>
                  <p className="text-blue-700 mb-4">
                    Monitor security events and blocked attempts in real-time.
                  </p>
                  <button
                    onClick={() => setShowSecuritySettings(true)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    View Detailed Statistics →
                  </button>
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Security Recommendations</h3>
                <ul className="text-yellow-700 space-y-2">
                  <li>• Regularly monitor security statistics for unusual patterns</li>
                  <li>• Keep rate limiting settings conservative to prevent spam</li>
                  <li>• Enable human verification challenges for better bot protection</li>
                  <li>• Review blocked messages periodically to ensure legitimate clients aren't affected</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Appointment Management</h2>
              <p className="text-gray-600">Appointment management features coming soon...</p>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">User Management</h2>
              <p className="text-gray-600">User management features coming soon...</p>
            </div>
          )}
        </div>
      </div>

      {/* Security Settings Modal */}
      <SecuritySettings
        isVisible={showSecuritySettings}
        onClose={() => setShowSecuritySettings(false)}
      />
    </div>
  );
};

export default AdminPanel;