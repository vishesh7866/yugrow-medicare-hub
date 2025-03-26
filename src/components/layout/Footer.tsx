
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Linkedin, Twitter, Instagram, Facebook, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#042652] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/ce07c564-627a-4570-a360-687d9ba52417.png" 
                alt="Yugrow Pharmacy Logo" 
                className="h-14 mb-2"
              />
            </Link>
            <p className="text-white/80 max-w-xs">
              Leading manufacturer of generic medicines, committed to affordable healthcare and quality products.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#FF7E3D] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#FF7E3D] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#FF7E3D] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#FF7E3D] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF7E3D]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#FF7E3D] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-white/80 hover:text-[#FF7E3D] transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-[#FF7E3D] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF7E3D]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-[#FF7E3D] mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">+91 80970 74455</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-[#FF7E3D] mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:admin@yugrowpharmacy.com" className="text-white/80 hover:text-[#FF7E3D] transition-colors">
                  admin@yugrowpharmacy.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-[#FF7E3D] mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  1346/14, Gala No. R-108, 1st Floor, Jai Matadi Compound, Kalher, Thane, Bhiwandi - 421 302, Maharashtra, India.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF7E3D]">Partner Login</h3>
            <Link 
              to="/login" 
              className="inline-block py-2 px-4 bg-white/10 border border-white/20 rounded-md text-white hover:bg-white/20 transition-colors"
            >
              Partner Dashboard
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Yugrow Pharmacy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-white/60 hover:text-[#FF7E3D] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#FF7E3D] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
