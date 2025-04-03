import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Partner from "./pages/Partner";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
