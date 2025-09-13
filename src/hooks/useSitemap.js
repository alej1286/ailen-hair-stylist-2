/**
 * useSitemap Hook - Sitemap management utilities
 */

import { useCallback } from 'react';
import { generateSitemap, downloadSitemap } from '../utils/sitemapGenerator';

export const useSitemap = () => {
  const getSitemapContent = useCallback(() => {
    return generateSitemap();
  }, []);

  const downloadSitemapFile = useCallback(() => {
    downloadSitemap();
  }, []);

  const updateSitemapFile = useCallback(async () => {
    // This would be used to update the static sitemap.xml file
    // In a real application, this would make an API call to update the file
    const content = generateSitemap();
    console.log('Sitemap content generated:', content);
    return content;
  }, []);

  return {
    getSitemapContent,
    downloadSitemapFile,
    updateSitemapFile
  };
};