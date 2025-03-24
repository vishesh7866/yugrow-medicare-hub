
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Linkedin, Twitter, Instagram, Facebook, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-50 border-t border-primary-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold">
                <span className="text-primary-700">Yugrow</span> Pharmacy
              </h2>
            </Link>
            <p className="text-gray-600 max-w-xs">
              Leading manufacturer of generic medicines, committed to affordable healthcare and quality products.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-gray-600 hover:text-primary transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">+91 80970 74455</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:admin@yugrowpharmacy.com" className="text-gray-600 hover:text-primary transition-colors">
                  admin@yugrowpharmacy.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  1346/14, Gala No. R-108, 1st Floor, Jai Matadi Compound, Kalher, Thane, Bhiwandi - 421 302, Maharashtra, India.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Partner Login</h3>
            <Link 
              to="/login" 
              className="inline-block py-2 px-4 bg-white border border-primary-200 rounded-md text-primary hover:bg-primary-50 transition-colors"
            >
              Partner Dashboard
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-100 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Yugrow. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
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
