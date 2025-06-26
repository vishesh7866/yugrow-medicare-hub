
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Partner With Us', path: '/partner', dropdown: true },
    { name: 'Contact', path: '/contact' },
  ];

  const partnerDropdownItems = [
    { name: 'Partner With Us', path: '/partner' },
    // { name: 'Our Team', path: '/our-team' },
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
              src="/lovable-uploads/5a42e2fd-b7db-48a3-b0d1-4830ef06db0f.png" 
              alt="Yugrow Pharmacy Logo"
              className="h-12 md:h-16 transform hover:scale-110 transition-transform duration-300"
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
                <div key={item.name} className="relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-1 bg-transparent focus:outline-none focus:ring-0">
                      <span className={`text-sm font-medium transition-colors hover:text-[#FF7E3D] ${
                        location.pathname === item.path || 
                        location.pathname === '/careers' || 
                        location.pathname === '/csr' || 
                        location.pathname === '/faq' ||
                        location.pathname === '/our-team'
                          ? 'text-[#FF7E3D]' 
                          : 'text-white'
                      }`}>
                        {item.name}
                      </span>
                      <ChevronDown className="h-4 w-4 text-white" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white dark:bg-gray-800 p-2 rounded-md shadow-lg">
                      {partnerDropdownItems.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.path} asChild>
                          <Link
                            to={dropdownItem.path}
                            className={cn(
                              "w-full px-2 py-2 text-sm rounded-md transition-colors",
                              location.pathname === dropdownItem.path 
                                ? "bg-accent text-accent-foreground" 
                                : "text-gray-700 dark:text-gray-200 hover:bg-accent hover:text-accent-foreground"
                            )}
                          >
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
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
            
            <a href="http://brainyug.com/">
              <Button 
                className="bg-[#FF7E3D] hover:bg-[#FF7E3D]/80 text-white"
              >
                Login Now
              </Button>
            </a>

            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Sidebar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
