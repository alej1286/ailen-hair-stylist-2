/**
 * SitemapXML Component - Serves XML sitemap content
 */

import { useEffect } from 'react';
import { generateSitemap } from '../utils/sitemapGenerator';

const SitemapXML = () => {
  useEffect(() => {
    // Generate XML content
    const xmlContent = generateSitemap();
    
    // Create a blob with XML content
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Redirect to the blob URL to serve XML
    window.location.replace(url);
    
    // Cleanup
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', padding: '20px' }}>
      {generateSitemap()}
    </div>
  );
};

export default SitemapXML;