
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BreadcrumbNav from '../components/layout/BreadcrumbNav';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import OurApproach from '../components/sections/OurApproach';
import VisionMission from '../components/sections/VisionMission';
import FAQ from '../components/sections/FAQ';
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Award, 
  PackageOpen, 
  MapPin, 
  Shield, 
  Clock 
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  // Enhanced organizational schema for About page
  const companySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://yugrowpharmacy.com/#organization",
    "name": "Yugrow Pharmacy",
    "url": "https://yugrowpharmacy.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yugrowpharmacy.com/lovable-uploads/newyugrowlogo.png",
      "width": "180",
      "height": "60"
    },
    "description": "Leader in generic medicine manufacturing with 3,500+ products and WHO-GMP certification, committed to enhancing healthcare accessibility across India.",
    "foundingDate": "2010",
    "foundingLocation": "Maharashtra, India",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": ">100"
    },
    "award": "WHO-GMP Certified",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1346/14, Gala No. R-108, 1st Floor, Jai Matadi Compound, Kalher",
      "addressLocality": "Bhiwandi",
      "addressRegion": "Maharashtra",
      "postalCode": "421302",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+918097074455",
        "contactType": "customer service",
        "email": "prm@yugrowpharmacy.com",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    ]
  };

  // Webpage schema
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Yugrow Pharmacy",
    "description": "Learn about Yugrow Pharmacy's mission to provide affordable generic medicines across India.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Yugrow Pharmacy",
      "url": "https://yugrowpharmacy.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://yugrowpharmacy.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us"
        }
      ]
    },
    "mainEntity": {
      "@id": "https://yugrowpharmacy.com/#organization"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".text-lg"]
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>About Yugrow Pharmacy | Leading Generic Medicine Manufacturer</title>
        <meta name="description" content="Learn about Yugrow Pharmacy's mission to provide affordable generic medicines. WHO-GMP certified with 3,500+ products and expanding to 5,000 products." />
        <meta name="keywords" content="about Yugrow Pharmacy, generic medicine manufacturer, WHO-GMP certified, pharmaceutical company India, medicine franchise, affordable healthcare" />
        <link rel="canonical" href="https://yugrowpharmacy.com/about" />
        <meta property="og:title" content="About Yugrow Pharmacy | Leading Generic Medicine Manufacturer" />
        <meta property="og:description" content="Learn about Yugrow Pharmacy's mission to provide affordable generic medicines. WHO-GMP certified with 3,500+ products." />
        <meta property="og:url" content="https://yugrowpharmacy.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yugrowpharmacy.com/lovable-uploads/newyugrowlogo.png" />
        <script type="application/ld+json">{JSON.stringify(companySchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webpageSchema)}</script>
      </Helmet>
      
      <Header />
      
      {/* Breadcrumbs */}
      <BreadcrumbNav title="About Us" />

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-24 bg-gradient-to-br from-[#042652] to-[#021633] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Welcome to Yugrow Pharmacy</h1>
            <div className="w-24 h-1 bg-[#FF7E3D] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              A leader in generic medicine manufacturing and distribution, offering high-quality pharmaceutical products across India.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Us Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-[#042652] dark:text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  Yugrow Pharmacy is a leader in generic medicine manufacturing and distribution, offering a vast range of high-quality pharmaceutical products. Our uniqueness lies in our product monopoly, with an extensive portfolio of 900 monopoly products and a total of 3,500 products. We are expanding our range to 5,000 products, ensuring a comprehensive selection for our customers.
                </p>
                <p className="leading-relaxed">
                  Our state-of-the-art warehousing facilities across PAN India and our WHO-GMP certified plants uphold the highest industry standards, guaranteeing quality and safety.
                </p>
                <p className="leading-relaxed">
                  Our FOFO (Franchise Owned, Franchise Operated) model provides complete franchise management support, from shop selection to continuous medicine supply. We utilize a cloud-based online software for seamless supply chain management, ensuring smooth operations.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#042652] dark:text-white mb-5">Our Commitment</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-[#FF7E3D]/10 p-2 rounded-md mr-3 text-[#FF7E3D]">
                      <Shield size={20} />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Quality Assurance</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Rigorous quality control for all products</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#FF7E3D]/10 p-2 rounded-md mr-3 text-[#FF7E3D]">
                      <PackageOpen size={20} />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Extensive Range</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive product portfolio</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#FF7E3D]/10 p-2 rounded-md mr-3 text-[#FF7E3D]">
                      <Clock size={20} />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Timely Delivery</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Efficient distribution network</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section (Moved from Index) */}
      <WhyChooseUs />
      
      {/* Our Approach Section (Moved from Index) */}
      <OurApproach />
      
      {/* Vision Mission Section (Moved from Index) */}
      <VisionMission />
      
      {/* FAQ Section (Moved from Index) */}
      <FAQ />
      
      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#FF7E3D]/20 text-[#FF7E3D] mb-3">Our Strengths</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#042652] dark:text-white">Who We Are</h2>
            <div className="w-24 h-1 bg-[#FF7E3D] mx-auto mt-4 mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-[#042652]/10 dark:bg-[#042652]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#042652] dark:text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg text-[#042652] dark:text-white mb-2">Years of Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">Decades of experience in delivering high-quality generic medicines.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-[#042652]/10 dark:bg-[#042652]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PackageOpen className="text-[#042652] dark:text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg text-[#042652] dark:text-white mb-2">Vast Product Portfolio</h3>
              <p className="text-gray-600 dark:text-gray-300">Offering 3,500+ medicines with a vision to expand to 5,000+ products.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-[#042652]/10 dark:bg-[#042652]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[#042652] dark:text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg text-[#042652] dark:text-white mb-2">Nationwide Presence</h3>
              <p className="text-gray-600 dark:text-gray-300">State-of-the-art warehouses ensuring smooth distribution across India.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-[#042652]/10 dark:bg-[#042652]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-[#042652] dark:text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg text-[#042652] dark:text-white mb-2">WHO-GMP Certified</h3>
              <p className="text-gray-600 dark:text-gray-300">Internationally recognized manufacturing standards for high-quality medicine.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Directors Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#FF7E3D]/20 text-[#FF7E3D] mb-3">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#042652] dark:text-white">Our Directors</h2>
            <div className="w-24 h-1 bg-[#FF7E3D] mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300">Meet the visionaries leading Yugrow Pharmacy towards excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/952cd23d-98d0-47d1-8671-467817c3da76.png" 
                  alt="Directors of Yugrow Pharmacy" 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x800/042652/FF7E3D?text=Director+Photo";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#042652] dark:text-white">Management Team</h3>
                <p className="text-[#FF7E3D] mb-4">Founders & Directors</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Our visionary leaders with extensive experience in the pharmaceutical industry, committed to making quality healthcare accessible to all.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="h-80 overflow-hidden">
                <img 
                  src="/lovable-uploads/952cd23d-98d0-47d1-8671-467817c3da76.png" 
                  alt="Directors of Yugrow Pharmacy" 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x800/042652/FF7E3D?text=Director+Photo";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#042652] dark:text-white">Executive Team</h3>
                <p className="text-[#FF7E3D] mb-4">Chief Operations</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Bringing strategic insights and operational excellence to Yugrow Pharmacy, dedicated to sustainable growth and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
