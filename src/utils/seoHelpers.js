/**
 * SEO Helpers - Meta tags and structured data utilities
 * Optimized for Ailen Hair Stylist Florida
 */

// Base SEO configuration
export const baseSEO = {
  siteName: "Ailen Hair Stylist",
  siteUrl: "https://ailenhairstylist.com",
  defaultTitle: "Ailen Hair Stylist | Top Miami Hair Stylist | Brickell & South Beach",
  defaultDescription: "Ailen Hair Stylist - Premier hair styling services in Miami, Florida. Specializing in cuts, color, highlights, extensions, and bridal styling in Brickell, South Beach, and Coral Gables. Book today!",
  defaultImage: "https://ailenhairstylistweb.s3.amazonaws.com/salon-preview.jpg",
  twitterHandle: "@ailenhairstylist",
  fbAppId: "",
  themeColor: "#4F46E5"
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: "Ailen Hair Stylist Miami | Best Hair Stylist Brickell & South Beach",
    description: "Transform your look with Ailen Hair Stylist. Expert cuts, color, highlights & extensions in Miami, Brickell, South Beach, Coral Gables. Book your appointment today!",
    keywords: "Ailen Hair Stylist, Miami hair stylist, Brickell hair stylist, South Beach hair stylist, Coral Gables hair stylist, Miami hair color, Miami hair cuts, Miami bridal hair, hair stylist near me Miami",
    canonical: "/",
    schema: {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      "name": "Ailen Hair Stylist",
      "description": "Premier hair styling and beauty services in Miami, Brickell, South Beach, and Coral Gables",
      "url": "https://ailenhairstylist.com",
      "telephone": "+1-786-794-9162",
      "email": "ailenmejiastravieso@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "FL",
        "addressCountry": "US",
        "addressLocality": "Miami",
        "streetAddress": "Serving Brickell, South Beach, Coral Gables"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.7617",
        "longitude": "-80.1918"
      },
      "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
      "priceRange": "$50-$200",
      "serviceArea": [
        {
          "@type": "City",
          "name": "Miami"
        },
        {
          "@type": "Neighborhood",
          "name": "Brickell"
        },
        {
          "@type": "Neighborhood",
          "name": "South Beach"
        },
        {
          "@type": "Neighborhood",
          "name": "Coral Gables"
        }
      ]
    }
  },
  
  services: {
    title: "Ailen Hair Stylist Services | Cuts, Color, Extensions | Miami Brickell & South Beach",
    description: "Professional hair services by Ailen Hair Stylist in Miami: precision cuts, color transformations, highlights, extensions, and bridal styling in Brickell, South Beach, Coral Gables.",
    keywords: "Ailen Hair Stylist services, Miami hair stylist services, Brickell hair cuts, South Beach hair color, Miami highlights, Coral Gables hair extensions, Miami bridal hair, professional Miami hairstylist",
    canonical: "/services",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Hair Styling Services",
      "provider": {
        "@type": "HairSalon",
        "name": "Ailen Hair Stylist"
      }
    }
  },
  
  about: {
    title: "About Ailen Hair Stylist | Miami's Premier Hair Stylist | Brickell & South Beach",
    description: "Meet Ailen Mejias Travieso of Ailen Hair Stylist, Miami's premier hair stylist with 10+ years experience. Specializing in color, cuts, and bridal styling in Brickell and South Beach.",
    keywords: "Ailen Hair Stylist, Ailen Mejias Travieso, Miami hair stylist, professional Miami hair stylist, experienced Miami hair colorist, Miami bridal hair specialist, Brickell hair stylist",
    canonical: "/about",
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ailen Mejias Travieso",
      "jobTitle": "Professional Hair Stylist",
      "worksFor": {
        "@type": "HairSalon",
        "name": "Ailen Hair Stylist"
      }
    }
  },
  
  contact: {
    title: "Contact Ailen Hair Stylist | Book Miami Appointment | Brickell & South Beach",
    description: "Contact Ailen Hair Stylist in Miami. Call +1-786-794-9162 or book online. Professional hair styling in Brickell, South Beach, Coral Gables.",
    keywords: "contact Ailen Hair Stylist, book Miami hair appointment, Brickell hair stylist contact, South Beach hair stylist phone, Miami hair booking",
    canonical: "/contact",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "HairSalon",
        "name": "Ailen Hair Stylist",
        "telephone": "+1-786-794-9162",
        "email": "ailenmejiastravieso@gmail.com"
      }
    }
  },
  
  gallery: {
    title: "Ailen Hair Stylist Gallery | Miami Hair Transformations | Before & After",
    description: "View stunning hair transformations by Ailen Hair Stylist. Before and after photos of cuts, color, highlights in Miami, Brickell, South Beach, Coral Gables.",
    keywords: "Ailen Hair Stylist gallery, Miami hair transformation gallery, before after hair Miami, Brickell hair stylist portfolio, South Beach hair color results, Miami hair cut gallery",
    canonical: "/gallery",
    schema: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Hair Transformation Gallery"
    }
  }
};

// Generate structured data script
export const generateStructuredData = (pageData) => {
  return JSON.stringify(pageData.schema);
};

// Generate meta tags object
export const generateMetaTags = (pageKey) => {
  const pageData = pageSEO[pageKey] || pageSEO.home;
  const fullTitle = pageData.title;
  const description = pageData.description;
  const canonical = `${baseSEO.siteUrl}${pageData.canonical}`;
  const image = baseSEO.defaultImage;
  
  return {
    title: fullTitle,
    meta: [
      { name: "description", content: description },
      { name: "keywords", content: pageData.keywords },
      { name: "author", content: baseSEO.siteName },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "language", content: "English" },
      { name: "geo.region", content: "US-FL" },
      { name: "geo.placename", content: "Miami, Florida" },
      { name: "geo.position", content: "25.7617;-80.1918" },
      { name: "ICBM", content: "25.7617, -80.1918" },
      
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: baseSEO.siteName },
      { property: "og:locale", content: "en_US" },
      
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:url", content: canonical },
      
      // Mobile
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: baseSEO.themeColor }
    ],
    link: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", href: canonical, hreflang: "en" },
      { rel: "alternate", href: canonical, hreflang: "x-default" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: generateStructuredData(pageData)
      }
    ]
  };
};