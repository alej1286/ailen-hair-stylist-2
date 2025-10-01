/**
 * Copy static files that should not be processed by React
 */

const fs = require('fs');
const path = require('path');

const copyFile = (src, dest) => {
  try {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${src} to ${dest}`);
  } catch (error) {
    console.error(`❌ Error copying ${src}:`, error);
  }
};

// Copy sitemap.xml to build directory
const publicDir = path.join(__dirname, '..', 'public');
const buildDir = path.join(__dirname, '..', 'build');

// Ensure build directory exists
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy static files directly to build root
copyFile(
  path.join(publicDir, 'sitemap.xml'),
  path.join(buildDir, 'sitemap.xml')
);

copyFile(
  path.join(publicDir, 'robots.txt'),
  path.join(buildDir, 'robots.txt')
);

console.log('✅ Static files copied successfully!');
console.log('📍 sitemap.xml will be available at: /sitemap.xml');