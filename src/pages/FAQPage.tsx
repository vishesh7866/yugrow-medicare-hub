
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';
import { Helmet } from 'react-helmet-async';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "What are generic medicines?",
      answer: "Generic medicines are bioequivalent to their branded counterparts but are sold at a much lower price. They contain the same active ingredients, dosage, safety, strength, quality, performance, and intended use as branded medicines. At Yugrow Pharmacy, all our generic medicines are WHO-GMP certified, ensuring the highest quality and efficacy."
    },
    {
      question: "How do Yugrow Pharmacy's medicines compare to branded ones?",
      answer: "All our medicines are WHO-GMP certified and manufactured under stringent quality control. They contain the same active ingredients as branded medicines, but are priced 30-80% lower, making them a cost-effective alternative without compromising on quality. Our products undergo rigorous testing to ensure they meet the same standards as branded medicines."
    },
    {
      question: "How can I become a Yugrow franchise partner?",
      answer: "You can apply for a franchise partnership by visiting our 'Partner With Us' page or by contacting us directly. We offer comprehensive support including location selection, store setup, inventory management, marketing, and ongoing operational assistance. Our FOFO (Franchise Owned Franchise Operated) model provides a proven business format with minimal investment and maximum returns."
    },
    {
      question: "What is the investment required for a Yugrow franchise?",
      answer: "The investment varies based on location and store size, but typically ranges from ₹5-10 lakhs. This includes franchise fee, store setup, initial inventory, and marketing costs. We offer flexible payment options and support to help you get started. Our business model is designed to ensure quick returns on investment, with most franchisees achieving break-even within 8-12 months."
    },
    {
      question: "Does Yugrow Pharmacy provide medicines for all health conditions?",
      answer: "Yes, we offer a comprehensive range of generic medicines covering most therapeutic categories including cardiovascular, diabetic, neurological, gastrointestinal, antibiotics, antivirals, and many more. We're continuously expanding our product range to meet diverse healthcare needs across different medical specialties and conditions."
    },
    {
      question: "What training and support do franchise partners receive?",
      answer: "We provide comprehensive training and ongoing support to all franchise partners. This includes initial business setup training, inventory management systems, staff training, marketing support, regular business reviews, and continued operational guidance. Our dedicated support team is always available to assist with any questions or challenges."
    },
    {
      question: "Are Yugrow's generic medicines safe and effective?",
      answer: "Absolutely. All our medicines are manufactured in WHO-GMP certified facilities under strict quality control standards. They contain the same active ingredients as branded medicines and undergo rigorous testing to ensure safety, efficacy, and bioequivalence. We only partner with reputable manufacturers who adhere to international quality standards."
    },
    {
      question: "How does Yugrow ensure the quality of its medicines?",
      answer: "We implement a multi-tier quality assurance system that includes sourcing from WHO-GMP certified manufacturers, conducting regular quality audits, batch testing before distribution, and maintaining proper storage and handling throughout our supply chain. We also maintain all necessary certifications and comply with all regulatory requirements governing pharmaceutical products."
    },
    {
      question: "Can I open multiple Yugrow franchise stores?",
      answer: "Yes, we offer multi-store franchise opportunities for interested partners. Many of our successful franchise owners operate multiple locations. We provide special support packages and incentives for multi-store operators, including territory rights, bulk inventory discounts, and dedicated operational support."
    },
    {
      question: "What locations are best suited for a Yugrow Pharmacy franchise?",
      answer: "Ideal locations include areas with high foot traffic such as main markets, near hospitals and clinics, residential neighborhoods, and commercial complexes. Our team works with you to identify and evaluate potential locations based on demographic data, competition analysis, and growth potential to ensure the best chance of success."
    },
    {
      question: "How long does it take to open a Yugrow franchise after signing up?",
      answer: "Typically, it takes 30-45 days from signing the franchise agreement to opening your store. This timeline includes location finalization, store setup, inventory procurement, staff recruitment and training, and pre-launch marketing activities. Our operations team works closely with you throughout this process to ensure a smooth and timely launch."
    },
    {
      question: "What marketing support does Yugrow provide to franchisees?",
      answer: "We provide comprehensive marketing support including branded materials, local marketing strategies, social media templates, promotional campaigns, and seasonal offers. We also conduct regular marketing workshops and provide franchisees with customized marketing plans based on their specific location and target audience."
    }
  ];

  // Generate the structured data for the FAQs
  const generateFaqsStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  };

  // Additional structured data for the webpage
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Frequently Asked Questions - Yugrow Pharmacy",
    "description": "Get answers to commonly asked questions about Yugrow Pharmacy's generic medicines, franchise opportunities, and business model.",
    "url": "https://yugrowpharmacy.com/faq",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Yugrow Pharmacy",
      "url": "https://yugrowpharmacy.com"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2.text-3xl"]
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
          "name": "Frequently Asked Questions"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Yugrow Pharmacy - Generic Medicines</title>
        <meta name="description" content="Get answers to common questions about Yugrow Pharmacy's generic medicines, franchise opportunities, quality standards, and business model." />
        <meta name="keywords" content="Yugrow Pharmacy FAQ, generic medicine questions, franchise FAQ, medicine quality standards, pharmacy franchise investment" />
        <link rel="canonical" href="https://yugrowpharmacy.com/faq" />
        <meta property="og:title" content="Frequently Asked Questions | Yugrow Pharmacy" />
        <meta property="og:description" content="Answers to common questions about Yugrow Pharmacy's generic medicines and franchise opportunities." />
        <meta property="og:url" content="https://yugrowpharmacy.com/faq" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(generateFaqsStructuredData())}</script>
        <script type="application/ld+json">{JSON.stringify(webpageSchema)}</script>
      </Helmet>
      <Header />
      
      {/* Breadcrumb Navigation */}
      <BreadcrumbNav title="Frequently Asked Questions" />
      
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#042652] to-[#021633] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-lg text-gray-300">
                Everything you need to know about Yugrow Pharmacy and our services
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-16">
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Common Questions About Yugrow Pharmacy
                </h2>
                
                <div className="bg-[#F5F7FA] dark:bg-gray-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700" data-faq-item>
                        <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 dark:text-gray-300 pt-2 pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Contact our support team and we'll get back to you as soon as possible
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="mailto:prm@yugrowpharmacy.com" className="bg-[#FF7E3D] text-white py-2 px-6 rounded-md hover:bg-[#FF7E3D]/80 transition-colors inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                  <a href="/contact" className="bg-[#042652] text-white py-2 px-6 rounded-md hover:bg-[#042652]/80 transition-colors inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
