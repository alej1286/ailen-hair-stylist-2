import { useEffect } from 'react';

const SitemapRedirect = () => {
  useEffect(() => {
    // Redirect to the static sitemap.xml file
    window.location.replace('/sitemap.xml');
  }, []);

  return null;
};

export default SitemapRedirect;