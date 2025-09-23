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

// Copy static files
copyFile(
  path.join(publicDir, 'sitemap.xml'),
  path.join(buildDir, 'sitemap.xml')
);

// Ensure api directory exists in build
const apiBuildDir = path.join(buildDir, 'api');
if (!fs.existsSync(apiBuildDir)) {
  fs.mkdirSync(apiBuildDir, { recursive: true });
}

copyFile(
  path.join(publicDir, 'sitemap.xml'),
  path.join(apiBuildDir, 'sitemap.xml')
);

copyFile(
  path.join(publicDir, 'robots.txt'),
  path.join(buildDir, 'robots.txt')
);

console.log('✅ Static files copied successfully!');