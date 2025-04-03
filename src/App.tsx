
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import ContactForm from "./pages/Contact";
import CSR from "./pages/CSR";
import Partner from "./pages/Partner";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import FAQPage from "./pages/FAQPage";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#042652" />
          <link rel="canonical" href="https://yugrowpharmacy.com" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
