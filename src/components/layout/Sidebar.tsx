
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetHeader,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Info, 
  Phone, 
  Heart, 
  Users, 
  Briefcase,
  HelpCircle,
  Menu,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const { theme } = useTheme();
  
  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="h-5 w-5" />
    },
    {
      label: "About Us",
      href: "/about",
      icon: <Info className="h-5 w-5" />
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <Phone className="h-5 w-5" />
    },
    {
      label: "Partner With Us",
      href: "/partner",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      label: "CSR",
      href: "/csr",
      icon: <Heart className="h-5 w-5" />
    },
    {
      label: "Careers",
      href: "/careers",
      icon: <Briefcase className="h-5 w-5" />
    },
    // {
    //   label: "Our Team",
    //   href: "/our-team",
    //   icon: <Users className="h-5 w-5" />
    // },
    {
      label: "FAQ",
      href: "/faq",
      icon: <HelpCircle className="h-5 w-5" />
    }
  ];

  const isHighlighted = (href: string) => location.pathname === href;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={`md:hidden ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-full sm:w-[320px] bg-background border-l border-border p-0"
      >
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="text-xl font-bold">Yugrow Pharmacy</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <nav className="space-y-1 px-2">
            {navItems.map((item) => (
              <SheetClose asChild key={item.href}>
                <Link 
                  to={item.href} 
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium transition-all",
                    isHighlighted(item.href)
                      ? theme === 'light' 
                        ? "bg-[#FF7E3D]/10 text-[#FF7E3D]" 
                        : "bg-[#FF7E3D]/10 text-[#FF7E3D]"
                      : theme === 'light'
                        ? "hover:bg-gray-100 text-gray-800"
                        : "hover:bg-muted text-white"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <ChevronRight className="ml-auto h-4 w-4" />
                </Link>
              </SheetClose>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-6 left-0 right-0 px-6">
          <a href="http://brainyug.com/">
            <Button className="w-full bg-[#FF7E3D] hover:bg-[#FF7E3D]/80 text-white">
              Login Now
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
