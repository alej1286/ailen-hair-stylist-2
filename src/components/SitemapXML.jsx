/**
 * SitemapXML Component - Displays XML sitemap content
 */

import { generateSitemap } from '../utils/sitemapGenerator';

const SitemapXML = () => {
  const xmlContent = generateSitemap();
  
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <pre style={{ 
        fontFamily: 'monospace', 
        whiteSpace: 'pre-wrap', 
        margin: 0,
        padding: '20px',
        backgroundColor: '#ffffff',
        fontSize: '14px',
        lineHeight: '1.4'
      }}>
        {xmlContent}
      </pre>
    </div>
  );
};

export default SitemapXML;