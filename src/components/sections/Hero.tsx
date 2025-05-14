
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#042652] to-[#0a4a8c] dark:from-[#021633] dark:to-[#063561] pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
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
const HeroBanner = () => (
  <div className="md:w-1/2 space-y-6 md:pr-8 animate-slide-in">
    <div className="inline-block bg-white/10 dark:bg-white/5 text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
      #1 Bharat's Leading Generic Medicine Manufacturer
    </div>

    <h1 className="heading-xl text-white">
      Affordable Healthcare
      <span className="block text-[#FF7E3D] dark:text-[#FF9C60] mt-2 animate-pulse">
        Quality Medicines for All
      </span>
    </h1>

    <p className="text-lg text-white/90 max-w-lg">
      Providing high-quality, affordable generic medicines to enhance healthcare accessibility across India. WHO-GMP certified manufacturing with a commitment to excellence.
    </p>

    <CTAButtons />
  </div>
);

// Call-to-action buttons
const CTAButtons = () => (
  <div className="flex flex-wrap gap-4 pt-2">
    <Link to="/contact">
      <Button size="lg" className="bg-[#FF7E3D] hover:bg-[#FF7E3D]/80 text-white flex items-center gap-2">
        Enquire Now <ArrowRight size={18} />
      </Button>
    </Link>
    <Link to="/partner">
      <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
        Become Our Partner
      </Button>
    </Link>
  </div>
);

// Hero Image with animation and overlay - Optimized for performance
const HeroImage = () => (
  <div className="mt-12 md:mt-0 md:w-1/2 animate-fade-in">
    <div className="relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF7E3D] to-[#FF7E3D]/50 rounded-2xl blur opacity-30 animate-glow"></div>
      <div className="relative bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
        {/* Video optimizations: 
           1. Added poster image to show immediately while video loads
           2. Added preload="metadata" to only fetch video metadata initially
           3. Added fetchpriority="low" for non-blocking loading 
           4. Added width/height to prevent layout shifts
           5. Added type attribute for better browser handling
        */}
        <video
          src="/lovable-uploads/Final%20Render_1.mp4"
          poster="/lovable-uploads/video-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          fetchpriority="low"
          width="640"
          height="360"
          type="video/mp4"
          className="w-full h-80 md:h-96 object-cover opacity-90"
          aria-label="Yugrow Pharmacy pharmaceutical manufacturing video"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6"></div>
      </div>

      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FF7E3D] dark:bg-[#FF570A] rounded-full flex items-center justify-center shadow-lg animate-bounce">
        <div className="text-white text-center">
          <div className="text-xl font-bold">30-80%</div>
          <div className="text-xs">Lower Prices</div>
        </div>
      </div>
    </div>
  </div>
);

// Reusable Image Card - Optimized for performance
const ImageCard = ({ src, alt, caption }) => (
  <div className="rounded-xl overflow-hidden h-48 relative group">
    {/* Optimized image loading:
       1. Replaced unsplash URLs with optimized WebP format
       2. Added width/height to prevent layout shift
       3. Added loading="lazy" for below-fold images
       4. Added srcset for responsive images
    */}
    <picture>
      <source type="image/webp" srcSet={`${src}.webp`} />
      <img 
        src={src} 
        alt={alt}
        width="600" 
        height="400"
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
    </picture>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
      <p className="text-white font-medium">{caption}</p>
    </div>
  </div>
);

// Image Gallery - Optimized image paths
const ImageGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/research-lab",
      alt: "Modern pharmaceutical laboratory",
      caption: "Research & Development",
    },
    {
      src: "/lovable-uploads/manufacturing",
      alt: "Medicine production",
      caption: "Quality Manufacturing",
    },
    {
      src: "/lovable-uploads/distribution",
      alt: "Medicine distribution",
      caption: "Nationwide Distribution",
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-up delay-300">
      {images.map((img, index) => (
        <ImageCard key={index} {...img} />
      ))}
    </div>
  );
};

export default Hero;
