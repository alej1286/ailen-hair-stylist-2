import { useEffect } from 'react';

const SitemapRedirect = () => {
  useEffect(() => {
    // Force redirect to the static sitemap.xml file
    window.location.href = '/sitemap.xml';
  }, []);

  // Show loading message while redirecting
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Redirecting to sitemap...</p>
    </div>
  );
};

export default SitemapRedirect;