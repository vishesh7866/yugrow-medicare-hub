
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';
import { Helmet } from 'react-helmet-async';

const CSR = () => {
  // Organization schema with CSR initiatives
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yugrow Pharmacy",
    "url": "https://yugrowpharmacy.com",
    "logo": "https://yugrowpharmacy.com/lovable-uploads/newyugrowlogo.png",
    "sameAs": [
      "https://www.facebook.com/yugrowpharmacy",
      "https://twitter.com/yugrowpharmacy",
      "https://www.linkedin.com/company/yugrow-pharmacy"
    ],
    "knowsAbout": [
      "Healthcare Access",
      "Affordable Medicines",
      "Sustainable Practices",
      "Community Development"
    ],
    "ethicsPolicy": "https://yugrowpharmacy.com/csr",
    "actionableFeedbackPolicy": "https://yugrowpharmacy.com/contact"
  };
  
  // Webpage schema with CSR content
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Corporate Social Responsibility | Yugrow Pharmacy Initiatives",
    "description": "Discover Yugrow Pharmacy's corporate social responsibility initiatives in healthcare access, education, and sustainability to build a better future for all.",
    "url": "https://yugrowpharmacy.com/csr",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Yugrow Pharmacy",
      "url": "https://yugrowpharmacy.com"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2.text-3xl"]
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Corporate Social Responsibility at Yugrow Pharmacy",
      "description": "Yugrow Pharmacy's CSR initiatives in healthcare access, education, and sustainability",
      "articleBody": "At Yugrow Pharmacy, we believe in making healthcare accessible, supporting education, and protecting the environment. Our CSR initiatives focus on free medical camps, medicine donations, awareness programs, scholarships, training for healthcare professionals, student mentorship initiatives, eco-friendly packaging, recycling programs, and green initiatives to reduce our carbon footprint.",
      "publisher": {
        "@type": "Organization",
        "name": "Yugrow Pharmacy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yugrowpharmacy.com/lovable-uploads/newyugrowlogo.png"
        }
      }
    }
  };
  
  // Event schema for CSR initiatives
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Yugrow Pharmacy Free Medical Camp",
    "description": "Free medical consultation and medicines distribution for underserved communities",
    "startDate": "2025-06-15T09:00:00+05:30",
    "endDate": "2025-06-15T17:00:00+05:30",
    "location": {
      "@type": "Place",
      "name": "Community Health Center",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Yugrow Pharmacy",
      "url": "https://yugrowpharmacy.com"
    },
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>Corporate Social Responsibility | Yugrow Pharmacy Initiatives</title>
        <meta
          name="description"
          content="Discover Yugrow Pharmacy's corporate social responsibility initiatives in healthcare access, education, and sustainability to build a better future for all."
        />
        <meta name="keywords" content="Yugrow CSR, corporate social responsibility, healthcare initiatives, education support, sustainability, community welfare" />
        <link rel="canonical" href="https://yugrowpharmacy.com/csr" />
        <meta property="og:title" content="Corporate Social Responsibility | Yugrow Pharmacy Initiatives" />
        <meta property="og:description" content="Yugrow Pharmacy's initiatives in healthcare access, education, and sustainability." />
        <meta property="og:url" content="https://yugrowpharmacy.com/csr" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webpageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(eventSchema)}</script>
      </Helmet>
      <Header />
      
      {/* Breadcrumb Navigation */}
      <BreadcrumbNav title="Corporate Social Responsibility" />
      
      <main className="pt-20 min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Hero Section with Video */}
        <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
          <video 
            src="/lovable-uploads/csr.mov" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover"
            aria-label="Corporate Social Responsibility initiatives by Yugrow Pharmacy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Making an Impact Together</h1>
            <p className="text-lg max-w-3xl">
              Yugrow Pharmacy is dedicated to improving lives through healthcare, education, and sustainability.
            </p>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-white dark:bg-gray-900 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Commitment to Society
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              At Yugrow Pharmacy, we believe in making healthcare accessible, supporting education, and protecting the environment.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-[#042652] dark:text-[#FF7E3D] mb-3">Healthcare Access</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Free medical camps, medicine donations, and awareness programs to support underserved communities.
                </p>
              </div>
              {/* Pillar 2 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-[#042652] dark:text-[#FF7E3D] mb-3">Education Support</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Scholarships, training for healthcare professionals, and student mentorship initiatives.
                </p>
              </div>
              {/* Pillar 3 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-[#042652] dark:text-[#FF7E3D] mb-3">Sustainability</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Eco-friendly packaging, recycling programs, and green initiatives to reduce our carbon footprint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#042652] text-white py-12 text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-4">Partner With Us for Social Impact</h3>
            <p className="mb-6">
              We welcome collaborations with NGOs, healthcare institutions, and community organizations to expand our CSR initiatives.
            </p>
            <a href="/contact" className="bg-[#FF7E3D] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#FF7E3D]/80 transition inline-block">
              Contact Our CSR Team
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CSR;
