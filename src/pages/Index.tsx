
import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import OurApproach from '../components/sections/OurApproach';
import VisionMission from '../components/sections/VisionMission';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <OurApproach />
        <VisionMission />
      </main>
      <Footer />
    </>
  );
};

export default Index;
