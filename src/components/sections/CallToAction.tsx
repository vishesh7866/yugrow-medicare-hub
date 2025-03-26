
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-[#042652] to-[#0a4a8c] dark:from-[#021633] dark:to-[#063561] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Yugrow Family?</h2>
            <p className="text-white/80 text-lg mb-8">
              Whether you're looking to start a profitable pharmacy franchise or seeking affordable medicines, 
              Yugrow Pharmacy is your trusted partner in healthcare.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold mb-2">For Franchise Partners</h3>
                <p className="text-white/70 mb-4">Start your own pharmacy business with our proven FOFO model and comprehensive support.</p>
                <Link to="/partner">
                  <Button variant="outline" className="w-full text-white border-white/30 hover:bg-white/10 flex items-center justify-center">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold mb-2">For Customers</h3>
                <p className="text-white/70 mb-4">Get high-quality, affordable medicines and expert guidance at your local Yugrow Pharmacy.</p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full text-white border-white/30 hover:bg-white/10 flex items-center justify-center">
                    Contact Us <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF7E3D] to-[#FF570A] rounded-2xl blur opacity-30 animate-glow"></div>
            <div className="relative bg-gradient-to-br from-[#0A4A8C] to-[#042652] dark:from-[#063561] dark:to-[#021633] rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Join Our 300+ Successful Outlets Across India</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FF7E3D] flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span>Low investment, high returns</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FF7E3D] flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span>Comprehensive training and support</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FF7E3D] flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span>Proven business model</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FF7E3D] flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span>Marketing and branding assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FF7E3D] flex items-center justify-center text-white text-sm mr-3">✓</div>
                  <span>Cloud-based inventory management</span>
                </li>
              </ul>
              <Link to="/partner">
                <Button size="lg" className="w-full bg-[#FF7E3D] hover:bg-[#FF7E3D]/80 text-white">
                  Become Our Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
