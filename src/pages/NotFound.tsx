
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#042652] dark:bg-[#021633] text-white">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#FF7E3D] to-[#076FD8] opacity-75 blur-lg"></div>
            <div className="relative bg-[#042652]/90 dark:bg-[#021633]/90 p-8 rounded-lg border border-white/10">
              <h1 className="text-7xl font-bold mb-2 text-[#FF7E3D]">404</h1>
              <p className="text-xl text-white/80 mb-6">Oops! Page not found</p>
              <p className="text-white/60 mb-6">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <Link to="/">
                <Button className="bg-[#FF7E3D] hover:bg-[#FF7E3D]/80 text-white group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
