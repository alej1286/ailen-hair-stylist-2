/**
 * Sitemap Validator - Validates XML sitemap format and content
 */

// Validate XML structure
export const validateSitemapXML = (xmlContent) => {
  const errors = [];
  const warnings = [];

  try {
    // Check XML declaration
    if (!xmlContent.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
      errors.push('Missing or incorrect XML declaration');
    }

    // Check urlset namespace
    if (!xmlContent.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
      errors.push('Missing or incorrect sitemap namespace');
    }

    // Check for required elements
    const urlMatches = xmlContent.match(/<url>/g);
    const locMatches = xmlContent.match(/<loc>/g);
    
    if (!urlMatches || urlMatches.length === 0) {
      errors.push('No URL entries found');
    } else if (!locMatches || locMatches.length !== urlMatches.length) {
      errors.push('Mismatch between URL entries and location tags');
    }

    // Validate URLs
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    let match;
    const urls = [];
    
    while ((match = urlRegex.exec(xmlContent)) !== null) {
      const url = match[1];
      urls.push(url);
      
      // Check URL format
      try {
        new URL(url);
      } catch (e) {
        errors.push(`Invalid URL format: ${url}`);
      }
      
      // Check HTTPS
      if (!url.startsWith('https://')) {
        warnings.push(`URL should use HTTPS: ${url}`);
      }
    }

    // Check for duplicates
    const uniqueUrls = [...new Set(urls)];
    if (uniqueUrls.length !== urls.length) {
      warnings.push('Duplicate URLs found in sitemap');
    }

    // Validate dates
    const dateRegex = /<lastmod>(.*?)<\/lastmod>/g;
    while ((match = dateRegex.exec(xmlContent)) !== null) {
      const dateStr = match[1];
      const date = new Date(dateStr);
      
      if (isNaN(date.getTime())) {
        errors.push(`Invalid date format: ${dateStr}`);
      }
      
      // Check if date is in the future
      if (date > new Date()) {
        warnings.push(`Future date found: ${dateStr}`);
      }
    }

    // Validate priorities
    const priorityRegex = /<priority>(.*?)<\/priority>/g;
    while ((match = priorityRegex.exec(xmlContent)) !== null) {
      const priority = parseFloat(match[1]);
      
      if (isNaN(priority) || priority < 0 || priority > 1) {
        errors.push(`Invalid priority value: ${match[1]} (must be between 0.0 and 1.0)`);
      }
    }

    // Validate changefreq
    const validFreqs = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
    const freqRegex = /<changefreq>(.*?)<\/changefreq>/g;
    while ((match = freqRegex.exec(xmlContent)) !== null) {
      const freq = match[1];
      
      if (!validFreqs.includes(freq)) {
        errors.push(`Invalid changefreq value: ${freq}`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      urlCount: urls.length,
      urls: uniqueUrls
    };

  } catch (error) {
    return {
      isValid: false,
      errors: [`XML parsing error: ${error.message}`],
      warnings: [],
      urlCount: 0,
      urls: []
    };
  }
};

// Test sitemap accessibility
export const testSitemapAccessibility = async (sitemapUrl) => {
  try {
    const response = await fetch(sitemapUrl);
    
    return {
      accessible: response.ok,
      status: response.status,
      contentType: response.headers.get('content-type'),
      size: response.headers.get('content-length')
    };
  } catch (error) {
    return {
      accessible: false,
      error: error.message
    };
  }
};