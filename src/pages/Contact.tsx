
import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-primary-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Get In Touch
              </div>
              <h1 className="heading-xl text-gray-900 mb-6">
                Contact <span className="text-primary">Yugrow Pharmacy</span>
              </h1>
              <p className="text-xl text-gray-600">
                Have questions about our products, franchise opportunities, or anything else? We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-primary-50 p-8 rounded-xl text-center animate-scale-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Phone</h3>
                <p className="text-gray-600 mb-4">Speak directly with our team</p>
                <a href="tel:+918097074455" className="text-lg font-medium text-primary hover:underline">
                  +91 80970 74455
                </a>
              </div>
              
              <div className="bg-primary-50 p-8 rounded-xl text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Email</h3>
                <p className="text-gray-600 mb-4">Send us your inquiries</p>
                <a href="mailto:admin@yugrowpharmacy.com" className="text-lg font-medium text-primary hover:underline">
                  admin@yugrowpharmacy.com
                </a>
              </div>
              
              <div className="bg-primary-50 p-8 rounded-xl text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Location</h3>
                <p className="text-gray-600 mb-4">Our headquarters</p>
                <p className="text-primary">
                  1346/14, Gala No. R-108, 1st Floor,<br />
                  Jai Matadi Compound, Kalher,<br />
                  Thane, Bhiwandi - 421 302,<br />
                  Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-primary-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2 animate-slide-in">
                  <h2 className="heading-lg text-gray-900 mb-6">Send Us a Message</h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form and our team will get back to you within 24 hours. We're looking forward to hearing from you!
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">+91 80970 74455</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">admin@yugrowpharmacy.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Website</p>
                        <p className="font-medium">www.yugrowpharmacy.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 animate-fade-in">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="+91 xxxxx xxxxx"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="How can we help you?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Your message..."
                          required
                        ></textarea>
                      </div>
                      
                      <Button icon={<Send size={18} />} iconPosition="right">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-gray-100">
          <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")' }}>
            <div className="w-full h-full flex items-center justify-center bg-primary/40">
              <div className="text-center text-white p-8">
                <h3 className="text-2xl font-bold mb-2">Visit Our Headquarters</h3>
                <p className="max-w-md">
                  We're located in Bhiwandi, Maharashtra. Contact us to schedule a visit or find the nearest Yugrow Pharmacy outlet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
