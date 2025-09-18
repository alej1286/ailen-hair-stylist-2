/**
 * SitemapAdmin Component - Administrative interface for sitemap management
 */

import { useState } from 'react';
import { useSitemap } from '../hooks/useSitemap';
import { siteRoutes } from '../utils/sitemapGenerator';
import { validateSitemapXML, testSitemapAccessibility } from '../utils/sitemapValidator';

const SitemapAdmin = () => {
  const { 
    getSitemapContent, 
    downloadSitemapFile, 
    updateSitemapFile, 
    copyToClipboard,
    isUpdating,
    lastUpdated 
  } = useSitemap();
  
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [validationResult, setValidationResult] = useState(null);
  const [isValidating, setIsValidating] = useState(false);

  const showMessage = (text, type = 'success') => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  };

  const handleDownloadSitemap = () => {
    downloadSitemapFile();
    showMessage('Sitemap downloaded successfully!');
  };

  const handleViewSitemap = () => {
    const content = getSitemapContent();
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<pre style="font-family: monospace; padding: 20px;">${content}</pre>`);
    newWindow.document.close();
  };

  const handleUpdateSitemap = async () => {
    const result = await updateSitemapFile();
    if (result.success) {
      showMessage('Sitemap updated successfully!');
    } else {
      showMessage(`Error updating sitemap: ${result.error}`, 'error');
    }
  };

  const handleCopyToClipboard = async () => {
    const result = await copyToClipboard();
    if (result.success) {
      showMessage('Sitemap copied to clipboard!');
    } else {
      showMessage(`Error copying to clipboard: ${result.error}`, 'error');
    }
  };

  const handleValidateSitemap = async () => {
    setIsValidating(true);
    try {
      const content = getSitemapContent();
      const validation = validateSitemapXML(content);
      
      // Test accessibility
      const accessibility = await testSitemapAccessibility('https://ailenhairstylist.com/sitemap.xml');
      
      setValidationResult({
        ...validation,
        accessibility
      });
      
      if (validation.isValid && accessibility.accessible) {
        showMessage('Sitemap validation passed!');
      } else {
        showMessage('Sitemap validation found issues', 'error');
      }
    } catch (error) {
      showMessage(`Validation error: ${error.message}`, 'error');
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Sitemap Management</h2>
      
      {message && (
        <div className={`mb-4 p-3 rounded-lg ${
          messageType === 'error' 
            ? 'bg-red-100 text-red-700 border border-red-300' 
            : 'bg-green-100 text-green-700 border border-green-300'
        }`}>
          {message}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Actions</h3>
          <div className="space-y-3">
            <button
              onClick={handleViewSitemap}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              View Sitemap
            </button>
            <button
              onClick={handleDownloadSitemap}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Download Sitemap
            </button>
            <button
              onClick={handleUpdateSitemap}
              disabled={isUpdating}
              className="w-full bg-purple-500 hover:bg-purple-600 disabled:bg-purple-300 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              {isUpdating ? 'Updating...' : 'Update Sitemap'}
            </button>
            <button
              onClick={handleCopyToClipboard}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Copy to Clipboard
            </button>
            <button
              onClick={handleValidateSitemap}
              disabled={isValidating}
              className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              {isValidating ? 'Validating...' : 'Validate Sitemap'}
            </button>
          </div>
          
          {lastUpdated && (
            <div className="mt-3 text-sm text-gray-600">
              Last updated: {lastUpdated.toLocaleString()}
            </div>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Site Routes</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {siteRoutes.map((route, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-600">{route.path}</span>
                <span className="text-gray-500">Priority: {route.priority}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">SEO Information</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Sitemap is available at: <code>/sitemap.xml</code></li>
          <li>• Dynamic sitemap route: <code>/sitemap-dynamic</code></li>
          <li>• Robots.txt includes sitemap reference</li>
          <li>• All public routes are indexed with appropriate priorities</li>
          <li>• Private routes (login, admin) are excluded from sitemap</li>
          <li>• Sitemap updates automatically with current date</li>
        </ul>
      </div>

      {validationResult && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-3">Validation Results</h4>
          
          <div className={`p-3 rounded mb-3 ${
            validationResult.isValid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            <strong>Status:</strong> {validationResult.isValid ? '✅ Valid' : '❌ Invalid'}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-gray-700 mb-2">XML Structure</h5>
              <ul className="text-sm space-y-1">
                <li>URLs found: {validationResult.urlCount}</li>
                <li>Errors: {validationResult.errors.length}</li>
                <li>Warnings: {validationResult.warnings.length}</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-gray-700 mb-2">Accessibility</h5>
              <ul className="text-sm space-y-1">
                <li>Status: {validationResult.accessibility.accessible ? '✅ Accessible' : '❌ Not accessible'}</li>
                {validationResult.accessibility.status && (
                  <li>HTTP Status: {validationResult.accessibility.status}</li>
                )}
                {validationResult.accessibility.contentType && (
                  <li>Content-Type: {validationResult.accessibility.contentType}</li>
                )}
              </ul>
            </div>
          </div>
          
          {validationResult.errors.length > 0 && (
            <div className="mt-3">
              <h5 className="font-medium text-red-700 mb-2">Errors:</h5>
              <ul className="text-sm text-red-600 space-y-1">
                {validationResult.errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}
          
          {validationResult.warnings.length > 0 && (
            <div className="mt-3">
              <h5 className="font-medium text-yellow-700 mb-2">Warnings:</h5>
              <ul className="text-sm text-yellow-600 space-y-1">
                {validationResult.warnings.map((warning, index) => (
                  <li key={index}>• {warning}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">Instructions</h4>
        <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
          <li>Click "Update Sitemap" to generate fresh content</li>
          <li>Click "Validate Sitemap" to check for errors</li>
          <li>Copy the generated XML content to clipboard</li>
          <li>Manually replace the content in <code>/public/sitemap.xml</code></li>
          <li>Deploy the changes to update the live sitemap</li>
        </ol>
      </div>
    </div>
  );
};

export default SitemapAdmin;