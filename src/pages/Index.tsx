
import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import OurApproach from '../components/sections/OurApproach';
import VisionMission from '../components/sections/VisionMission';
import Statistics from '../components/sections/Statistics';
import ProductCategories from '../components/sections/ProductCategories';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import CallToAction from '../components/sections/CallToAction';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useTheme } from '@/components/theme-provider';

const Index = () => {
  const { setTheme } = useTheme();
  
  useEffect(() => {
    // Set theme to dark on initial load
    setTheme('dark');
    
    // Add a dynamic background animation
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [setTheme]);

  return (
    <div className="relative bg-gradient-to-br from-white to-primary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Animated background elements */}
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
        <WhyChooseUs />
        <OurApproach />
        <Testimonials />
        <VisionMission />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
