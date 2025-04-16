
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#042652] to-[#0a4a8c] dark:from-[#021633] dark:to-[#063561] pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"
        style={{ y: 0 }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.6, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <HeroBanner />
          <HeroImage />
        </div>
        <ImageGallery />
      </div>
    </section>
  );
};

// Reusable Hero Banner
const HeroBanner = () => {
  const textContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  
  const textChild = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div 
      className="md:w-1/2 space-y-6 md:pr-8"
      initial="hidden"
      animate="visible"
      variants={textContainer}
    >
      <motion.div 
        className="inline-block bg-white/10 dark:bg-white/5 text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
        variants={textChild}
        whileHover={{ scale: 1.05 }}
      >
        #1 Bharat's Leading Generic Medicine Manufacturer
      </motion.div>

      <motion.h1 className="heading-xl text-white" variants={textContainer}>
        <motion.span variants={textChild}>Affordable Healthcare</motion.span>
        <motion.span 
          className="block text-[#FF7E3D] dark:text-[#FF9C60] mt-2"
          variants={textChild}
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          Quality Medicines for All
        </motion.span>
      </motion.h1>

      <motion.p 
        className="text-lg text-white/90 max-w-lg"
        variants={textChild}
      >
        Providing high-quality, affordable generic medicines to enhance healthcare accessibility across India. WHO-GMP certified manufacturing with a commitment to excellence.
      </motion.p>

      <CTAButtons />
    </motion.div>
  );
};

// Call-to-action buttons
const CTAButtons = () => (
  <motion.div 
    className="flex flex-wrap gap-4 pt-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.5 }}
  >
    <Link to="/contact">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button size="lg" className="bg-[#FF7E3D] hover:bg-[#FF7E3D]/80 text-white flex items-center gap-2">
          Enquire Now 
          <motion.div
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <ArrowRight size={18} />
          </motion.div>
        </Button>
      </motion.div>
    </Link>
    <Link to="/partner">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
          Become Our Partner
        </Button>
      </motion.div>
    </Link>
  </motion.div>
);

// Hero Image with animation and overlay
const HeroImage = () => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <motion.div 
      className="mt-12 md:mt-0 md:w-1/2"
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="relative">
        <motion.div 
          className="absolute -inset-0.5 bg-gradient-to-r from-[#FF7E3D] to-[#FF7E3D]/50 rounded-2xl blur opacity-30"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="relative bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <video
            src="/lovable-uploads/Final%20Render_1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-80 md:h-96 object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            {/* <p className="text-white text-lg font-medium">
              Generic Pharmaceutical Manufacturing and Research
            </p> */}
          </div>
        </motion.div>

        <motion.div 
          className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FF7E3D] dark:bg-[#FF570A] rounded-full flex items-center justify-center shadow-lg"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="text-white text-center">
            <div className="text-xl font-bold">30-80%</div>
            <div className="text-xs">Lower Prices</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Reusable Image Card with hover effect
const ImageCard = ({ src, alt, caption }) => (
  <motion.div 
    className="rounded-xl overflow-hidden h-48 relative group"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
      <motion.p
        className="text-white font-medium"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {caption}
      </motion.p>
    </div>
  </motion.div>
);

// Image Gallery with staggered animations
const ImageGallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      alt: "Modern pharmaceutical laboratory",
      caption: "Research & Development",
    },
    {
      src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      alt: "Medicine production",
      caption: "Quality Manufacturing",
    },
    {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      alt: "Medicine distribution",
      caption: "Nationwide Distribution",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {images.map((img, index) => (
        <motion.div key={index} variants={item}>
          <ImageCard {...img} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Hero;
