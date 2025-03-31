
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

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
    { name: 'Partner With Us', path: '/partner', dropdown: true },
    { name: 'Contact', path: '/contact' },
  ];

  const partnerDropdownItems = [
    { name: 'Partner With Us', path: '/partner' },
    { name: 'Careers', path: '/careers' },
    { name: 'CSR', path: '/csr' },
    { name: 'FAQ', path: '/faq' },
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
              item.dropdown ? (
                <NavigationMenu key={item.name}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={`bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-sm font-medium transition-colors hover:text-[#FF7E3D] ${
                        location.pathname === item.path || 
                        location.pathname === '/careers' || 
                        location.pathname === '/csr' || 
                        location.pathname === '/faq'
                          ? 'text-[#FF7E3D]' 
                          : 'text-white'
                      }`}>
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-2 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                          {partnerDropdownItems.map((dropdownItem) => (
                            <li key={dropdownItem.path}>
                              <Link
                                to={dropdownItem.path}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  location.pathname === dropdownItem.path 
                                    ? "bg-accent text-accent-foreground" 
                                    : "text-gray-700 dark:text-gray-200"
                                )}
                              >
                                <div className="text-sm font-medium leading-none">{dropdownItem.name}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
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
              )
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
            <Link
              to="/"
              className={`text-lg font-medium transition-colors hover:text-[#FF7E3D] ${
                location.pathname === "/" 
                  ? 'text-[#FF7E3D]' 
                  : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-lg font-medium transition-colors hover:text-[#FF7E3D] ${
                location.pathname === "/about" 
                  ? 'text-[#FF7E3D]' 
                  : 'text-white'
              }`}
            >
              About Us
            </Link>
            
            {/* Mobile Partner With Us Dropdown */}
            <div className="space-y-2">
              <div
                className={`text-lg font-medium transition-colors hover:text-[#FF7E3D] flex items-center justify-between ${
                  location.pathname === "/partner" || 
                  location.pathname === '/careers' || 
                  location.pathname === '/csr' || 
                  location.pathname === '/faq'
                    ? 'text-[#FF7E3D]' 
                    : 'text-white'
                }`}
              >
                <span>Partner With Us</span>
                <ChevronDown size={20} />
              </div>
              <div className="pl-4 space-y-2 border-l-2 border-[#FF7E3D]/30">
                {partnerDropdownItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block text-base font-medium transition-colors hover:text-[#FF7E3D] ${
                      location.pathname === item.path 
                        ? 'text-[#FF7E3D]' 
                        : 'text-white/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/contact"
              className={`text-lg font-medium transition-colors hover:text-[#FF7E3D] ${
                location.pathname === "/contact" 
                  ? 'text-[#FF7E3D]' 
                  : 'text-white'
              }`}
            >
              Contact
            </Link>
            
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
