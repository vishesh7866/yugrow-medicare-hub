
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#042652] dark:bg-[#021633] text-white py-12 md:py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/5a42e2fd-b7db-48a3-b0d1-4830ef06db0f.png"
              alt="Yugrow Pharmacy Logo"
              className="h-12 md:h-16 mb-4 transform hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error("Logo failed to load");
                target.src = "https://placehold.co/200x80/042652/FF7E3D?text=Yugrow+Pharmacy";
              }}
            />
            <p className="text-sm text-gray-300">
              Yugrow Pharmacy is a leading generic medicine manufacturer, committed to providing affordable and high-quality healthcare solutions.
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-300 text-sm flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                1346/14, Gala No. R-108, 1st Floor, Jai Matadi Compound, Kalher, Thane, Bhiwandi - 421 302, Maharashtra, India
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +91 80970 74455
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                prm@yugrowpharmacy.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FF7E3D] transition-colors duration-300 block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FF7E3D] transition-colors duration-300 block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-gray-300 hover:text-[#FF7E3D] transition-colors duration-300 block">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FF7E3D] transition-colors duration-300 block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF7E3D] transition-colors duration-300 block">
                  Tablets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF7E3D] transition-colors duration-300 block">
                  Capsules
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF7E3D] transition-colors duration-300 block">
                  Syrups
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF7E3D] transition-colors duration-300 block">
                  Injections
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-300 text-sm">
              Have questions? Reach out to us for any inquiries or support.
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-300 text-sm flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <a href="mailto:prm@yugrowpharmacy.com" className="hover:text-[#FF7E3D] transition-colors duration-300">prm@yugrowpharmacy.com</a>
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +91 80970 74455
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61573660053420" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-[#1877F2] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/yugrow_pharmacy/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-[#E4405F] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Yugrow Pharmacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
