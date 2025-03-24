
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Partner With Us', path: '/partner' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#042652]/90 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center"
          >
            <img 
              src="/public/lovable-uploads/ce07c564-627a-4570-a360-687d9ba52417.png" 
              alt="Yugrow Pharmacy Logo" 
              className="h-10 md:h-12 transform hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#FF7E3D] ${
                  location.pathname === item.path 
                    ? 'text-[#FF7E3D]' 
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-[#FF7E3D] hover:bg-[#FF7E3D]/80 text-white">Enquire Now</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#042652] z-40 pt-16 md:hidden animate-fade-in">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium transition-colors hover:text-[#FF7E3D] ${
                  location.pathname === item.path 
                    ? 'text-[#FF7E3D]' 
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="mt-4">
              <Button className="bg-[#FF7E3D] w-full hover:bg-[#FF7E3D]/80 text-white">Enquire Now</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
