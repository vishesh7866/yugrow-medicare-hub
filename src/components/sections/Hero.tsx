
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-primary-50 pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQTdBRTYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 md:pr-8 animate-slide-in">
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-medium">
              Leading Generic Medicine Manufacturer
            </div>
            
            <h1 className="heading-xl text-gray-900">
              Yugrow Pharmacy
              <span className="block text-primary mt-2">Affordable Healthcare, Quality Medicines</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Providing high-quality, affordable generic medicines to enhance healthcare accessibility across India. WHO-GMP certified manufacturing with a commitment to excellence.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact">
                <Button size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  Enquire Now
                </Button>
              </Link>
              <Link to="/partner">
                <Button size="lg" variant="outline">
                  Become Our Partner
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-300 to-primary-500 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Yugrow Pharmacy medicines" 
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <div className="text-white text-center">
                  <div className="text-xl font-bold">30-80%</div>
                  <div className="text-xs">Lower Prices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
