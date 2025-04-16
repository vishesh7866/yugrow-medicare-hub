
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
import { motion } from 'framer-motion';

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

  // Cursor follower state
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Scroll progress state
  const [scrollProgress, setScrollProgress] = React.useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative bg-gradient-to-br from-white to-primary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
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

      {/* Custom cursor follower */}
      <motion.div
        className="hidden md:block fixed w-6 h-6 rounded-full bg-[#FF7E3D]/50 z-50 pointer-events-none"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />

      {/* Scroll progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF7E3D] z-50"
        style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
      />

      {/* Background animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#042652]/10 dark:bg-[#076FD8]/20 rounded-full filter blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#FF7E3D]/10 dark:bg-[#FF7E3D]/20 rounded-full filter blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 2
          }}
        />
        
        {/* Adding floating particles */}
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className={`absolute opacity-30 rounded-full ${index % 2 === 0 ? 'bg-[#FF7E3D]' : 'bg-[#076FD8]'}`}
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
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
    </motion.div>
  );
};

export default Index;
