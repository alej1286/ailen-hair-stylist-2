/**
 * Sitemap Updater - Updates static sitemap.xml file
 */

import { generateSitemap } from './sitemapGenerator';

// Update the static sitemap file
export const updateStaticSitemap = async () => {
  try {
    const xmlContent = generateSitemap();
    
    // In a real application, this would make an API call to update the file
    // For now, we'll use a different approach
    console.log('Generated sitemap content:', xmlContent);
    
    // Create a downloadable version
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    return {
      success: true,
      content: xmlContent,
      downloadUrl: url
    };
  } catch (error) {
    console.error('Error updating sitemap:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Generate sitemap and copy to clipboard
export const copySitemapToClipboard = async () => {
  try {
    const xmlContent = generateSitemap();
    await navigator.clipboard.writeText(xmlContent);
    return { success: true, message: 'Sitemap copied to clipboard!' };
  } catch (error) {
    console.error('Error copying to clipboard:', error);
    return { success: false, error: error.message };
  }
};