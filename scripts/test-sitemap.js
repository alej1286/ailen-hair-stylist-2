/**
 * Test sitemap accessibility and format
 */

const fs = require('fs');
const path = require('path');

// Test local sitemap file
const testLocalSitemap = () => {
  console.log('🔍 Testing local sitemap...');
  
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ Sitemap file not found!');
    return false;
  }
  
  const content = fs.readFileSync(sitemapPath, 'utf8');
  
  // Basic XML validation
  const checks = [
    {
      name: 'XML Declaration',
      test: content.includes('<?xml version="1.0" encoding="UTF-8"?>'),
      required: true
    },
    {
      name: 'Sitemap Namespace',
      test: content.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'),
      required: true
    },
    {
      name: 'URL Entries',
      test: content.includes('<url>') && content.includes('<loc>'),
      required: true
    },
    {
      name: 'Current Date',
      test: content.includes(new Date().toISOString().split('T')[0]),
      required: false
    },
    {
      name: 'HTTPS URLs',
      test: content.includes('https://ailenhairstylist.com'),
      required: true
    }
  ];
  
  let passed = 0;
  let failed = 0;
  
  checks.forEach(check => {
    if (check.test) {
      console.log(`✅ ${check.name}: PASS`);
      passed++;
    } else {
      console.log(`${check.required ? '❌' : '⚠️'} ${check.name}: ${check.required ? 'FAIL' : 'WARNING'}`);
      if (check.required) failed++;
    }
  });
  
  console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
  
  if (failed === 0) {
    console.log('🎉 Local sitemap test PASSED!');
    return true;
  } else {
    console.log('💥 Local sitemap test FAILED!');
    return false;
  }
};

// Test build sitemap
const testBuildSitemap = () => {
  console.log('\n🔍 Testing build sitemap...');
  
  const buildSitemapPath = path.join(__dirname, '..', 'build', 'sitemap.xml');
  
  if (!fs.existsSync(buildSitemapPath)) {
    console.log('⚠️ Build sitemap not found (run npm run build first)');
    return false;
  }
  
  const content = fs.readFileSync(buildSitemapPath, 'utf8');
  const publicContent = fs.readFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), 'utf8');
  
  if (content === publicContent) {
    console.log('✅ Build sitemap matches public sitemap');
    return true;
  } else {
    console.log('❌ Build sitemap differs from public sitemap');
    return false;
  }
};

// Run tests
console.log('🚀 Starting sitemap tests...\n');

const localTest = testLocalSitemap();
const buildTest = testBuildSitemap();

console.log('\n📋 Summary:');
console.log(`Local sitemap: ${localTest ? '✅ PASS' : '❌ FAIL'}`);
console.log(`Build sitemap: ${buildTest ? '✅ PASS' : '⚠️ SKIP'}`);

if (localTest) {
  console.log('\n🎯 Next steps:');
  console.log('1. Deploy your changes');
  console.log('2. Test https://ailenhairstylist.com/sitemap.xml');
  console.log('3. Resubmit sitemap to Google Search Console');
} else {
  console.log('\n🔧 Fix the issues above and run the test again');
  process.exit(1);
}