import { useEffect } from 'react';
import { generateSitemap } from '../utils/sitemapGenerator';

/**
 * Sitemap Component - Serves XML sitemap
 * Route: /sitemap.xml
 */
const Sitemap = () => {
  useEffect(() => {
    // Redirect to static sitemap.xml file
    window.location.href = '/sitemap.xml';
  }, []);

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
      {generateSitemap()}
    </div>
  );
};

export default Sitemap;