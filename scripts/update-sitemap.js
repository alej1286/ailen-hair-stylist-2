/**
 * Build-time sitemap updater
 * Updates sitemap.xml during build process
 */

const fs = require('fs');
const path = require('path');

// Site configuration
const siteUrl = 'https://ailenhairstylist.com';
const currentDate = new Date().toISOString().split('T')[0];

const routes = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/gallery', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/instagram', priority: '0.7', changefreq: 'daily' },
  { path: '/privacypolicy', priority: '0.3', changefreq: 'yearly' }
];

// Generate XML content
const generateSitemapXML = () => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">';
  const urlsetClose = '</urlset>';

  const urls = routes.map(route => {
    const fullUrl = `${siteUrl}${route.path}`;
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `${xmlHeader}
${urlsetOpen}
${urls}
${urlsetClose}`;
};

// Update sitemap file
const updateSitemap = () => {
  try {
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    const xmlContent = generateSitemapXML();
    
    fs.writeFileSync(sitemapPath, xmlContent, 'utf8');
    console.log('✅ Sitemap updated successfully!');
    console.log(`📅 Last modified: ${currentDate}`);
    console.log(`📍 Location: ${sitemapPath}`);
  } catch (error) {
    console.error('❌ Error updating sitemap:', error);
    process.exit(1);
  }
};

// Run the update
updateSitemap();