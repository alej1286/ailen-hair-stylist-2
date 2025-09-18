/**
 * Complete sitemap deployment script
 * Updates, validates, and prepares sitemap for deployment
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting complete sitemap deployment process...\n');

// Step 1: Update sitemap
console.log('📝 Step 1: Updating sitemap...');
try {
  execSync('npm run update-sitemap', { stdio: 'inherit' });
  console.log('✅ Sitemap updated successfully\n');
} catch (error) {
  console.error('❌ Failed to update sitemap:', error.message);
  process.exit(1);
}

// Step 2: Validate sitemap
console.log('🔍 Step 2: Validating sitemap...');
try {
  execSync('npm run test-sitemap', { stdio: 'inherit' });
  console.log('✅ Sitemap validation passed\n');
} catch (error) {
  console.error('❌ Sitemap validation failed:', error.message);
  process.exit(1);
}

// Step 3: Build project
console.log('🏗️ Step 3: Building project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Project built successfully\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 4: Final verification
console.log('🔎 Step 4: Final verification...');
const sitemapPath = path.join(__dirname, '..', 'build', 'sitemap.xml');
const publicSitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

if (fs.existsSync(sitemapPath) && fs.existsSync(publicSitemapPath)) {
  const buildContent = fs.readFileSync(sitemapPath, 'utf8');
  const publicContent = fs.readFileSync(publicSitemapPath, 'utf8');
  
  if (buildContent === publicContent) {
    console.log('✅ Build and public sitemaps match');
  } else {
    console.log('⚠️ Build and public sitemaps differ');
  }
  
  // Show sitemap info
  const urlCount = (buildContent.match(/<url>/g) || []).length;
  const lastMod = buildContent.match(/<lastmod>(.*?)<\/lastmod>/)?.[1] || 'Unknown';
  
  console.log(`📊 Sitemap contains ${urlCount} URLs`);
  console.log(`📅 Last modified: ${lastMod}`);
} else {
  console.log('❌ Sitemap files not found');
  process.exit(1);
}

console.log('\n🎉 Deployment preparation complete!');
console.log('\n📋 Next steps:');
console.log('1. Deploy the build folder to your hosting service');
console.log('2. Verify https://ailenhairstylist.com/sitemap.xml serves XML (not HTML)');
console.log('3. Resubmit sitemap to Google Search Console');
console.log('4. Monitor Google Search Console for indexing improvements');

console.log('\n🔗 Important URLs to test after deployment:');
console.log('• https://ailenhairstylist.com/sitemap.xml');
console.log('• https://ailenhairstylist.com/robots.txt');

console.log('\n💡 Pro tip: Use curl to test the sitemap:');
console.log('curl -H "Accept: application/xml" https://ailenhairstylist.com/sitemap.xml');