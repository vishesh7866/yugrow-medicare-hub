
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
import { useTheme } from '@/components/theme-provider';

const Index = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Force dark mode only if not already set
    const userPref = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;

    if (!userPref) {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [setTheme]);

  return (
    <div className="relative bg-gradient-to-br from-white to-primary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Helmet>
        <title>Yugrow Pharmacy - Leading Generic Medicine Manufacturer | Affordable Healthcare</title>
        <meta name="description" content="Yugrow Pharmacy manufactures high-quality, affordable generic medicines..." />
        <meta name="keywords" content="generic medicines, affordable healthcare, WHO-GMP certified..." />
        <link rel="canonical" href="https://yugrowpharmacy.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Yugrow Pharmacy",
            "url": "https://yugrowpharmacy.com",
            "logo": "https://yugrowpharmacy.com/lovable-uploads/newyugrowlogo.png",
            "description": "Leading manufacturer of affordable generic medicines...",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1346/14, Gala No. R-108...",
              "addressLocality": "Bhiwandi",
              "addressRegion": "Maharashtra",
              "postalCode": "421302",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+918097074455",
              "contactType": "customer service",
              "email": "prm@yugrowpharmacy.com"
            }
          }
        `}</script>
      </Helmet>

      {/* Background animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#042652]/10 dark:bg-[#076FD8]/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#FF7E3D]/10 dark:bg-[#FF7E3D]/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Statistics />
        <ProductCategories />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
