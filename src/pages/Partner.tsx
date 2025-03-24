
import React, { useEffect } from 'react';
import { CheckCircle, Store, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Partner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "300+ successful outlets across India",
    "Largest warehousing setup in the industry",
    "Low investment, high returns business model",
    "Comprehensive training and ongoing support",
    "Cutting-edge inventory management system",
    "Established brand with growing recognition",
    "Wide range of generic and branded medicines",
    "Marketing and promotional assistance"
  ];

  const steps = [
    {
      number: "01",
      title: "Application Submission",
      description: "Fill out our simple enquiry form with your details and location preferences."
    },
    {
      number: "02",
      title: "Verification & Contact",
      description: "Our team will verify your details and reach out to discuss the partnership."
    },
    {
      number: "03",
      title: "Location Visit & Feasibility",
      description: "We'll visit the proposed location to assess its feasibility and potential."
    },
    {
      number: "04",
      title: "Approval & Business Start",
      description: "Once approved, we'll help you set up and launch your Yugrow Pharmacy franchise."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-primary-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Franchise Opportunity
              </div>
              <h1 className="heading-xl text-gray-900 mb-6">
                Partner With Yugrow <span className="text-primary">Pharmacy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our successful network of 300+ pharmacy outlets across India and be part of our mission to make healthcare affordable.
              </p>
              <Button size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                Apply for Franchise
              </Button>
            </div>
          </div>
        </section>

        {/* FOFO Model Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <h2 className="heading-lg text-gray-900 mb-6">Franchise Owned, Franchise Operated Model</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Yugrow Pharmacy, we operate on the FOFO (Franchise Owned, Franchise Operated) model, which has proven successful across our network of 300+ outlets in India. This model offers the perfect balance of support and independence.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  As a franchise partner, you'll own and operate your store while benefiting from our established brand, extensive supply chain, training, and ongoing support.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-primary-50 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-primary mb-2">300+</h3>
                    <p className="text-gray-700">Successful outlets across India</p>
                  </div>
                  <div className="bg-primary-50 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
                    <p className="text-gray-700">Years of industry experience</p>
                  </div>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-300 to-primary-500 rounded-2xl blur opacity-30"></div>
                <div className="relative h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                    alt="Yugrow Pharmacy store" 
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-primary-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="heading-lg text-gray-900 mb-4">Exclusive Benefits</h2>
              <p className="text-lg text-gray-600">
                Partner with Yugrow Pharmacy and enjoy these exclusive advantages to grow your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-md flex items-start animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="text-primary mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="heading-lg text-gray-900 mb-4">How It Works</h2>
              <p className="text-lg text-gray-600">
                A simple four-step process to become a Yugrow Pharmacy franchise partner.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-300 to-primary-500 rounded-2xl blur opacity-30"></div>
                  <div className="relative bg-white rounded-xl p-8 border border-primary-100 h-full">
                    <div className="text-4xl font-bold text-primary-200 mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <h2 className="heading-lg mb-6">Start Your Journey With Yugrow Pharmacy</h2>
                <p className="text-lg text-white/80 mb-6">
                  Fill out this simple form, and our team will contact you to discuss franchise opportunities in your area.
                </p>
                <div className="flex items-center mb-8">
                  <Store className="h-12 w-12 text-primary-200 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">FOFO Model</h3>
                    <p className="text-white/80">Franchise Owned, Franchise Operated</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-primary-200 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-white/90">Comprehensive training and support</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-primary-200 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-white/90">Access to our wide range of generic medicines</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-primary-200 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-white/90">Marketing and operational assistance</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 animate-fade-in">
                <h3 className="text-2xl font-semibold mb-6">Enquiry Form</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="+91 xxxxx xxxxx"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Tell us about your location and any questions you may have"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-white text-primary hover:bg-white/90">
                    Submit Enquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Partner;
