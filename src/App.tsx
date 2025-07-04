
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import ContactForm from "./pages/Contact";
import CSR from "./pages/CSR";
import Partner from "./pages/Partner";
import Careers from "./pages/Careers";
import OurTeam from "./pages/OurTeam";
import NotFound from "./pages/NotFound";
import FAQPage from "./pages/FAQPage";
import OrganizationVideo from "./pages/OrganizationVideo";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <CookieConsentProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/csr" element={<CSR />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/our-story" element={<OrganizationVideo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <WhatsAppButton />
            <ChatBot />
            <CookieConsent />
            <Toaster />
          </BrowserRouter>
        </CookieConsentProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
