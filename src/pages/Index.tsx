
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Statistics from '../components/sections/Statistics';
import ProductCategories from '../components/sections/ProductCategories';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BreadcrumbNav from '../components/layout/BreadcrumbNav';
import { useTheme } from '@/components/theme-provider';
import { useOptimizedMouseTracking } from '@/hooks/use-animation';
import { setupLazyLoading } from '@/lib/performance';

const Index = () => {
  const { theme, setTheme } = useTheme();
  
  // Use optimized mouse tracking for better performance
  useOptimizedMouseTracking();

  useEffect(() => {
    // Force dark mode only if not already set
    const userPref = localStorage.getItem('theme');
    if (!userPref) {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
    
    // Set up lazy loading for images
    setupLazyLoading();
    
    // Mark page as loaded after initial render
    // This triggers CSS animations for better perceived performance
    requestIdleCallback(() => {
      document.documentElement.classList.add('js-loaded');
    });
  }, [setTheme]);

  // Enhanced structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yugrow Pharmacy",
    "url": "https://yugrowpharmacy.com",
    "logo": "https://yugrowpharmacy.com/lovable-uploads/newyugrowlogo.png",
    "description": "Leading manufacturer of affordable generic medicines with over 3,500 products and WHO-GMP certification, enhancing healthcare accessibility across India.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1346/14, Gala No. R-108, 1st Floor, Jai Matadi Compound, Kalher",
      "addressLocality": "Bhiwandi",
      "addressRegion": "Maharashtra",
      "postalCode": "421302",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+918097074455",
        "contactType": "customer service",
        "email": "prm@yugrowpharmacy.com",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+918097074455",
        "contactType": "sales",
        "email": "sales@yugrowpharmacy.com",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/yugrowpharmacy",
      "https://twitter.com/yugrowpharmacy",
      "https://www.linkedin.com/company/yugrow-pharmacy",
      "https://www.instagram.com/yugrowpharmacy"
    ],
    "founder": {
      "@type": "Person",
      "name": "Yugrow Pharmacy Founder"
    },
    "foundingDate": "2010",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": ">100"
    },
    "slogan": "Quality Healthcare for All",
    "award": "WHO-GMP Certified",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Yugrow Product Catalog",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Generic Medicines",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Antibiotics"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Cardiovascular Medicines"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Diabetes Medicines"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-white to-primary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Helmet>
        <title>Yugrow Pharmacy - Leading Generic Medicine Manufacturer | Affordable Healthcare</title>
        <meta name="description" content="Yugrow Pharmacy manufactures high-quality, affordable generic medicines with 3,500+ products and WHO-GMP certification, enhancing healthcare accessibility across India." />
        <meta name="keywords" content="generic medicines, affordable healthcare, WHO-GMP certified, pharmaceutical manufacturer, medicine supplier, healthcare accessibility, medicine franchise" />
        <link rel="canonical" href="https://yugrowpharmacy.com/" />
        <meta property="og:title" content="Yugrow Pharmacy - Leading Generic Medicine Manufacturer | Affordable Healthcare" />
        <meta property="og:description" content="WHO-GMP certified manufacturer of 3,500+ affordable generic medicines enhancing healthcare accessibility throughout India." />
        <meta property="og:image" content="https://yugrowpharmacy.com/lovable-uploads/newyugrowlogo.png" />
        <meta property="og:url" content="https://yugrowpharmacy.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yugrow Pharmacy - Leading Generic Medicine Manufacturer" />
        <meta name="twitter:description" content="WHO-GMP certified manufacturer of 3,500+ affordable generic medicines." />
        <meta name="twitter:image" content="https://yugrowpharmacy.com/lovable-uploads/newyugrowlogo.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Background animation - optimized for performance */}
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#042652]/10 dark:bg-[#076FD8]/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#FF7E3D]/10 dark:bg-[#FF7E3D]/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header />
      <main>
        <Hero />
        {/* Add content-visibility to off-screen sections for better paint performance */}
        <div className="off-screen">
          <About />
          <Statistics />
          <ProductCategories />
          <Testimonials />
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Polyfill requestIdleCallback for browsers that don't support it
if (!('requestIdleCallback' in window)) {
  (window as any).requestIdleCallback = (callback: Function) => {
    return setTimeout(() => callback(), 1);
  };
  (window as any).cancelIdleCallback = (id: number) => {
    clearTimeout(id);
  };
}

export default Index;
