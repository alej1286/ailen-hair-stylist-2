/**
 * SitemapXML Component - Serves XML sitemap content
 */

import { useEffect } from 'react';
import { generateSitemap } from '../utils/sitemapGenerator';

const SitemapXML = () => {
  useEffect(() => {
    // Set document content type
    document.contentType = 'application/xml';
    
    // Generate and serve XML
    const xmlContent = generateSitemap();
    
    // Replace entire page with XML
    document.open();
    document.write(xmlContent);
    document.close();
  }, []);

  // Fallback display
  return (
    <pre style={{ 
      fontFamily: 'monospace', 
      whiteSpace: 'pre-wrap', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      border: '1px solid #ddd',
      borderRadius: '4px'
    }}>
      {generateSitemap()}
    </pre>
  );
};

export default SitemapXML;