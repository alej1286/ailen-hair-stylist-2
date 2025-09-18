/**
 * useSitemap Hook - Sitemap management utilities
 */

import { useCallback, useState } from 'react';
import { generateSitemap, downloadSitemap } from '../utils/sitemapGenerator';
import { updateStaticSitemap, copySitemapToClipboard } from '../utils/sitemapUpdater';

export const useSitemap = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const getSitemapContent = useCallback(() => {
    return generateSitemap();
  }, []);

  const downloadSitemapFile = useCallback(() => {
    downloadSitemap();
  }, []);

  const updateSitemapFile = useCallback(async () => {
    setIsUpdating(true);
    try {
      const result = await updateStaticSitemap();
      if (result.success) {
        setLastUpdated(new Date());
      }
      return result;
    } finally {
      setIsUpdating(false);
    }
  }, []);

  const copyToClipboard = useCallback(async () => {
    return await copySitemapToClipboard();
  }, []);

  return {
    getSitemapContent,
    downloadSitemapFile,
    updateSitemapFile,
    copyToClipboard,
    isUpdating,
    lastUpdated
  };
};}