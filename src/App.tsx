
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import CSR from "./pages/CSR";
import FAQPage from "./pages/FAQPage";

const queryClient = new QueryClient();

// ScrollToTop component to ensure pages start from the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <Helmet>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Yugrow Pharmacy - Leading generic medicine manufacturer providing high-quality, affordable healthcare solutions across India." />
          </Helmet>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/csr" element={<CSR />} />
              <Route path="/faq" element={<FAQPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
