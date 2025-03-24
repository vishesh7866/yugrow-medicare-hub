
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#042652] to-[#0a4a8c] dark:from-[#021633] dark:to-[#063561] pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 md:pr-8 animate-slide-in">
            <div className="flex items-center mb-2">
              <img 
                src="/lovable-uploads/ce07c564-627a-4570-a360-687d9ba52417.png" 
                alt="Yugrow Pharmacy Logo" 
                className="h-14 md:h-16 animate-pulse"
              />
            </div>
            
            <div className="inline-block bg-white/10 dark:bg-white/5 text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
              Leading Generic Medicine Manufacturer
            </div>
            
            <h1 className="heading-xl text-white">
              Affordable Healthcare
              <span className="block text-[#FF7E3D] dark:text-[#FF9C60] mt-2 animate-pulse">Quality Medicines for All</span>
            </h1>
            
            <p className="text-lg text-white/90 max-w-lg">
              Providing high-quality, affordable generic medicines to enhance healthcare accessibility across India. WHO-GMP certified manufacturing with a commitment to excellence.
            </p>
            
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
          </div>
          
          <div className="mt-12 md:mt-0 md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF7E3D] to-[#FF7E3D]/50 rounded-2xl blur opacity-30 animate-glow"></div>
              <div className="relative bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full h-80 md:h-96 object-cover opacity-90"
                >
                  <source src="https://static.videezy.com/system/resources/previews/000/046/642/original/Lab18.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <p className="text-white text-lg font-medium">Advanced pharmaceutical manufacturing and research</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FF7E3D] dark:bg-[#FF570A] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <div className="text-white text-center">
                  <div className="text-xl font-bold">30-80%</div>
                  <div className="text-xs">Lower Prices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Pharmacy Image Gallery */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="rounded-xl overflow-hidden h-48 relative group">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
              alt="Modern pharmaceutical laboratory" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <p className="text-white font-medium">Research & Development</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-48 relative group">
            <img 
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
              alt="Medicine production" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <p className="text-white font-medium">Quality Manufacturing</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-48 relative group">
            <img 
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
              alt="Medicine distribution" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <p className="text-white font-medium">Nationwide Distribution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
