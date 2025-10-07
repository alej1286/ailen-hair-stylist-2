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

// Generate XML content with proper line breaks
const generateSitemapXML = () => {
  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  
  routes.forEach(route => {
    const fullUrl = `${siteUrl}${route.path}`;
    lines.push('  <url>');
    lines.push(`    <loc>${fullUrl}</loc>`);
    lines.push(`    <lastmod>${currentDate}</lastmod>`);
    lines.push(`    <changefreq>${route.changefreq}</changefreq>`);
    lines.push(`    <priority>${route.priority}</priority>`);
    lines.push('  </url>');
  });
  
  lines.push('</urlset>');
  return lines.join('\n');
};

// Update sitemap file
const updateSitemap = () => {
  try {
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    const xmlContent = generateSitemapXML();
    
    // Write with explicit UTF-8 encoding and no BOM
    fs.writeFileSync(sitemapPath, xmlContent, { encoding: 'utf8', flag: 'w' });
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