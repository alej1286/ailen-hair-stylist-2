/**
 * SitemapAdmin Component - Administrative interface for sitemap management
 */

import { useSitemap } from '../hooks/useSitemap';
import { siteRoutes } from '../utils/sitemapGenerator';

const SitemapAdmin = () => {
  const { getSitemapContent, downloadSitemapFile } = useSitemap();

  const handleDownloadSitemap = () => {
    downloadSitemapFile();
  };

  const handleViewSitemap = () => {
    const content = getSitemapContent();
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<pre>${content}</pre>`);
    newWindow.document.close();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Sitemap Management</h2>
      
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
          </div>
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
          <li>• Robots.txt includes sitemap reference</li>
          <li>• All public routes are indexed with appropriate priorities</li>
          <li>• Private routes (login, admin) are excluded from sitemap</li>
        </ul>
      </div>
    </div>
  );
};

export default SitemapAdmin;