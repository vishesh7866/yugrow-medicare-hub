
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

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
    { name: 'About Us', path: '/about' },
    { name: 'Partner With Us', path: '/partner' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#042652]/90 backdrop-blur shadow-lg' 
          : 'bg-[#042652]/70 backdrop-blur-sm dark:bg-[#021633]/80'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center"
          >
            <img 
              src="/lovable-uploads/YUGROW_LOGO_PNG-removebg.png" 
              alt="Yugrow Pharmacy Logo"
              className="h-10 md:h-12 transform hover:scale-105 transition-transform"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error("Logo failed to load");
                target.src = "https://placehold.co/200x80/042652/FF7E3D?text=Yugrow+Pharmacy";
              }}
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
  <Button 
    className="bg-[#FF7E3D] hover:bg-[#FF7E3D]/80 text-white"
    onClick={() => window.location.href = "http://brainyug.com/"}
  >
    Login Now
  </Button>
</Link>

            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-white"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#042652] dark:bg-[#021633] z-40 pt-16 md:hidden animate-fade-in">
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
            <a href="http://brainyug.com/" className="mt-4">
            <Button className="bg-[#FF7E3D] w-full hover:bg-[#FF7E3D]/80 text-white">Login Now</Button>
            </a>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
