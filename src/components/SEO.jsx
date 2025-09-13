import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateMetaTags } from '../utils/seoHelpers';

/**
 * SEO Component - Dynamic meta tags and structured data
 * Usage: <SEO page="home" />
 */
const SEO = ({ page = 'home', customTitle }) => {
  const seoData = generateMetaTags(page);
  
  // Override with custom data if provided
  const title = customTitle || seoData.title;

  return (
    <Helmet>
      <title>{title}</title>
      
      {/* Meta tags */}
      {seoData.meta.map((meta, index) => {
        if (meta.name) {
          return <meta key={index} name={meta.name} content={meta.content} />;
        }
        if (meta.property) {
          return <meta key={index} property={meta.property} content={meta.content} />;
        }
        return null;
      })}
      
      {/* Link tags */}
      {seoData.link.map((link, index) => (
        <link key={index} {...link} />
      ))}
      
      {/* Structured data */}
      {seoData.script.map((script, index) => (
        <script key={index} type={script.type}>
          {script.innerHTML}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;