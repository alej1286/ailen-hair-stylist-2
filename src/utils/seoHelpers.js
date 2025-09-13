/**
 * SEO Helpers - Meta tags and structured data utilities
 * Optimized for Ailen Hair Stylist Florida
 */

// Base SEO configuration
export const baseSEO = {
  siteName: "Ailen Hair Stylist",
  siteUrl: "https://ailenhairstylist.com",
  defaultTitle: "Ailen Hair Stylist | Professional Hair Salon Services in Florida, USA",
  defaultDescription: "Expert hair styling services in Florida. Specializing in cuts, color, highlights, extensions, and bridal styling. Book your appointment today with Ailen Hair Stylist.",
  defaultImage: "https://ailenhairstylistweb.s3.amazonaws.com/salon-preview.jpg",
  twitterHandle: "@ailenhairstylist",
  fbAppId: "",
  themeColor: "#4F46E5"
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: "Professional Hair Stylist in Florida | Ailen Hair Stylist",
    description: "Transform your look with expert hair styling in Florida. Specializing in cuts, color, highlights, extensions & bridal hair. Book your appointment today!",
    keywords: "hair stylist Florida, professional hair salon, hair cuts Florida, hair color highlights, bridal hair styling, beauty salon Florida",
    canonical: "/",
    schema: {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      "name": "Ailen Hair Stylist",
      "description": "Professional hair styling and beauty services in Florida",
      "url": "https://ailenhairstylist.com",
      "telephone": "+1-786-794-9162",
      "email": "ailenmejiastravieso@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "FL",
        "addressCountry": "US",
        "addressLocality": "Florida"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "27.7663",
        "longitude": "-82.6404"
      },
      "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
      "priceRange": "$50-$200",
      "serviceArea": {
        "@type": "State",
        "name": "Florida"
      }
    }
  },
  
  services: {
    title: "Hair Salon Services in Florida | Cuts, Color, Extensions | Ailen Hair Stylist",
    description: "Professional hair services in Florida: precision cuts, color transformations, highlights, extensions, and bridal styling. View our complete service menu.",
    keywords: "hair salon services Florida, hair cuts, hair color, highlights, hair extensions, bridal hair, professional hairstylist services",
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
    title: "About Ailen Hair Stylist | Professional Hair Stylist in Florida",
    description: "Meet Ailen Mejias Travieso, master hair stylist with 10+ years experience in Florida. Specializing in color, cuts, and bridal styling.",
    keywords: "Ailen hair stylist, professional hair stylist Florida, experienced hair colorist, bridal hair specialist",
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
    title: "Contact Ailen Hair Stylist | Book Appointment in Florida",
    description: "Contact Ailen Hair Stylist in Florida. Call +1-786-794-9162 or book online. Professional hair styling services with convenient scheduling.",
    keywords: "contact hair stylist Florida, book hair appointment, hair salon contact, Florida hair stylist phone",
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
    title: "Hair Transformation Gallery | Before & After | Ailen Hair Stylist Florida",
    description: "View stunning hair transformations by Ailen Hair Stylist in Florida. Before and after photos of cuts, color, highlights, and styling work.",
    keywords: "hair transformation gallery, before after hair Florida, hair stylist portfolio, hair color results, hair cut gallery",
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
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "geo.region", content: "US-FL" },
      { name: "geo.placename", content: "Florida" },
      { name: "geo.position", content: "27.7663;-82.6404" },
      { name: "ICBM", content: "27.7663, -82.6404" },
      
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