import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { Helmet } from 'react-helmet-async';
import ReCaptcha from "@/components/ReCaptcha";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRecaptchaChange = (token: string) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      toast({
        variant: "destructive",
        title: "reCAPTCHA Required",
        description: "Please complete the reCAPTCHA verification.",
        duration: 5000,
      });
      return;
    }
    
    setLoading(true);
    console.log("Form submission started...");

    try {
      // Try to submit to Express backend first
      try {
        console.log("Attempting to submit to Express backend...");
        const response = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
          ...formData,
          recaptchaToken
        });
        console.log("Backend response:", response.data);
        
        if (response.data && response.data.success) {
          console.log("Express submission successful");
        } else {
          console.log("Express submission failed, falling back to Supabase");
          throw new Error("Backend submission failed");
        }
      } catch (backendError) {
        // If backend fails, try Supabase as fallback
        console.log("Falling back to Supabase submission...", backendError);
        const { data, error } = await supabase
          .from('contact_inquiries')
          .insert({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            recaptcha_verified: !!recaptchaToken
          });

        if (error) throw error;
        console.log("Supabase submission successful:", data);
      }
      
      // If we reach here, at least one submission method worked
      console.log("Showing success toast");
      
      // Force the toast to appear 
      setTimeout(() => {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. We'll get back to you soon.",
          duration: 5000, // Show for 5 seconds
        });
      }, 100);
      
      // Reset the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setRecaptchaToken("");
      
      // Reset reCAPTCHA
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
      
    } catch (error) {
      console.error("Error submitting contact form:", error);
      
      // Force the toast to appear
      setTimeout(() => {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: error.message || "Something went wrong. Please try again.",
          duration: 5000, // Show for 5 seconds
        });
      }, 100);
    } finally {
      setLoading(false);
      console.log("Form submission completed");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Yugrow Pharmacy | Get In Touch With Our Team</title>
        <meta name="description" content="Contact Yugrow Pharmacy for inquiries about generic medicines, franchise opportunities, or partnerships. Our team is ready to assist you." />
        <meta name="keywords" content="contact Yugrow Pharmacy, pharmacy contact, generic medicine inquiry, franchise contact, pharmaceutical company contact" />
        <link rel="canonical" href="https://yugrowpharmacy.com/contact" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Yugrow Pharmacy",
              "telephone": "+918097074455",
              "email": "prm@yugrowpharmacy.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1346/14, Gala No. R-108, 1st Floor, Jai Matadi Compound, Kalher",
                "addressLocality": "Bhiwandi",
                "addressRegion": "Maharashtra",
                "postalCode": "421302",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+918097074455",
                "contactType": "customer service"
              }
            }
          }
        `}
        </script>
      </Helmet>
      <Header />
      <main className="transition-colors duration-300">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-primary-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Get In Touch
              </div>
              <h1 className="heading-xl text-gray-900 dark:text-white mb-6">
                Contact <span className="text-primary dark:text-[#FF7E3D]">Yugrow Pharmacy</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Have questions about our products, franchise opportunities, or anything else? We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-xl text-center animate-scale-in transition-colors duration-300 hover:shadow-lg dark:hover:shadow-primary-900/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary dark:bg-[#FF7E3D] mb-6">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Speak directly with our team</p>
                <a href="tel:+918097074455" className="text-lg font-medium text-primary dark:text-[#FF7E3D] hover:underline">
                  +91 80970 74455
                </a>
              </div>
              
              <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-xl text-center animate-scale-in transition-colors duration-300 hover:shadow-lg dark:hover:shadow-primary-900/20" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary dark:bg-[#FF7E3D] mb-6">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Send us your inquiries</p>
                <a href="mailto:prm@yugrowpharmacy.com" className="text-lg font-medium text-primary dark:text-[#FF7E3D] hover:underline">
                  prm@yugrowpharmacy.com
                </a>
              </div>
              
              <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-xl text-center animate-scale-in transition-colors duration-300 hover:shadow-lg dark:hover:shadow-primary-900/20" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary dark:bg-[#FF7E3D] mb-6">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Our headquarters</p>
                <p className="text-primary dark:text-[#FF7E3D]">
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
        <section className="section-padding bg-primary-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2 animate-slide-in">
                  <h2 className="heading-lg text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Fill out the form and our team will get back to you within 24 hours. We're looking forward to hearing from you!
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-[#FF7E3D]/20 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-primary dark:text-[#FF7E3D]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                        <p className="font-medium dark:text-white">+91 80970 74455</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-[#FF7E3D]/20 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-primary dark:text-[#FF7E3D]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <p className="font-medium dark:text-white">prm@yugrowpharmacy.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-[#FF7E3D]/20 flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-primary dark:text-[#FF7E3D]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Website</p>
                        <p className="font-medium dark:text-white">www.yugrowpharmacy.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 animate-fade-in">
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transition-colors duration-300">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-[#FF7E3D]/50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-[#FF7E3D]/50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-[#FF7E3D]/50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-[#FF7E3D]/50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                            placeholder="+91 xxxxx xxxxx"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-[#FF7E3D]/50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                          placeholder="How can we help you?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-[#FF7E3D]/50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                          placeholder="Your message..."
                          required
                        ></textarea>
                      </div>
                      
                      {/* Add reCAPTCHA component with updated site key */}
                      <div className="mt-4">
                        <ReCaptcha 
                          sitekey="6LdmGxMrAAAAAFR7bdzwdXHF6QdYGNTdEPBpvQDw"
                          onChange={handleRecaptchaChange}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={loading || !recaptchaToken}
                        className="flex items-center gap-2 bg-primary hover:bg-primary-600 dark:bg-[#FF7E3D] dark:hover:bg-[#FF570A] transition-colors duration-300"
                      >
                        {loading ? "Sending..." : "Send Message"} <Send size={18} />
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")' }}>
            <div className="w-full h-full flex items-center justify-center bg-primary/40 dark:bg-primary/60 transition-colors duration-300">
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

export default ContactForm;
