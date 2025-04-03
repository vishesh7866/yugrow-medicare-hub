import React, { useEffect, useState } from 'react';
import { CheckCircle, Store, ArrowRight, BarChart3, Calendar, UserPlus, MapPin, CreditCard, Briefcase, Award, Building, Phone, Mail, Users, FileCheck, LayoutDashboard, Settings, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useTheme } from '@/components/theme-provider';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Partner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useTheme();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase
        .from('franchise_inquiries')
        .insert({
          full_name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          message: formData.message
        });
        
      if (error) throw error;
      
      toast({
        title: "Inquiry Submitted!",
        description: "We'll contact you soon to discuss franchise opportunities.",
      });
      
      // Reset the form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        location: '',
        message: ''
      });
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Something went wrong. Please try again.",
      });
      console.error("Error submitting franchise inquiry:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <Building className="h-10 w-10 text-primary-200" />,
      title: "300+ Successful Outlets",
      description: "Join our network of over 300 thriving pharmacy outlets across India"
    },
    {
      icon: <Award className="h-10 w-10 text-primary-200" />,
      title: "Quality Assurance",
      description: "We maintain the highest standards with WHO-GMP certified manufacturing"
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary-200" />,
      title: "Low Investment, High ROI",
      description: "Start your pharmacy with minimal capital and see returns quickly"
    },
    {
      icon: <FileCheck className="h-10 w-10 text-primary-200" />,
      title: "Comprehensive Training",
      description: "Get thorough training on all aspects of pharmacy management"
    },
    {
      icon: <LayoutDashboard className="h-10 w-10 text-primary-200" />,
      title: "Inventory Management",
      description: "Access to cutting-edge inventory management systems"
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary-200" />,
      title: "Brand Recognition",
      description: "Leverage our established brand with growing market presence"
    },
    {
      icon: <UserPlus className="h-10 w-10 text-primary-200" />,
      title: "Marketing Support",
      description: "Receive extensive marketing and promotional assistance"
    },
    {
      icon: <Settings className="h-10 w-10 text-primary-200" />,
      title: "Operational Support",
      description: "Ongoing operational support to ensure smooth functioning"
    }
  ];

  const steps = [
    {
      number: "01",
      icon: <UserPlus className="h-8 w-8 text-primary" />,
      title: "Application Submission",
      description: "Fill out our simple enquiry form with your details and location preferences to begin the journey."
    },
    {
      number: "02",
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Initial Consultation",
      description: "Our team will verify your details and schedule a call to discuss the partnership opportunity."
    },
    {
      number: "03",
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Location Assessment",
      description: "We'll visit the proposed location to assess its feasibility, foot traffic, and commercial potential."
    },
    {
      number: "04",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Business Planning",
      description: "Develop a customized business plan including investment details, projected returns, and timeline."
    },
    {
      number: "05",
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Agreement & Training",
      description: "Sign the franchise agreement and begin comprehensive training on pharmacy operations."
    },
    {
      number: "06",
      icon: <Store className="h-8 w-8 text-primary" />,
      title: "Store Setup & Launch",
      description: "Set up your store with our guidance and officially launch your Yugrow Pharmacy franchise."
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Mumbai, Maharashtra",
      quote: "Partnering with Yugrow Pharmacy has been transformative for my business. The support and training they provide is unmatched.",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Priya Patel",
      location: "Pune, Maharashtra",
      quote: "The low investment model and high-quality products have helped me establish a profitable pharmacy in just 6 months.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Suresh Kumar",
      location: "Mumbai, Maharashtra",
      quote: "The inventory management system and marketing support from Yugrow have been key to my franchise's success.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ];

  const certifications = [
    {
      name: "ISO Certified",
      image: "/lovable-uploads/6c44e735-aeee-42f4-8b84-5dfc06749806.png",
      description: "ISO 9001:2015 certification for quality management systems"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-[#042652] to-[#0a4a8c] dark:from-[#021633] dark:to-[#063561] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
              >
                Franchise Opportunity
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="heading-xl mb-6"
              >
                Partner With Yugrow <span className="text-[#FF7E3D]">Pharmacy</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white/80 mb-8"
              >
                Join our successful network of 1500+ pharmacy outlets across India and be part of our mission to make healthcare affordable.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button 
  size="lg" 
  className="bg-[#FF7E3D] hover:bg-[#FF7E3D]/80 text-white flex items-center gap-2"
  onClick={() => window.location.href = '/contact'}
>
  Apply for Franchise <ArrowRight size={18} />
</Button>

              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl"
              >
                <h3 className="text-3xl font-bold text-primary dark:text-primary-200 mb-2">300+</h3>
                <p className="text-gray-700 dark:text-gray-300">Stores Nationwide</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl"
              >
                <h3 className="text-3xl font-bold text-primary dark:text-primary-200 mb-2">15+</h3>
                <p className="text-gray-700 dark:text-gray-300">Years Experience</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl"
              >
                <h3 className="text-3xl font-bold text-primary dark:text-primary-200 mb-2">₹5L+</h3>
                <p className="text-gray-700 dark:text-gray-300">Avg. Monthly Revenue</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-primary-50 dark:bg-gray-700 p-6 rounded-xl"
              >
                <h3 className="text-3xl font-bold text-primary dark:text-primary-200 mb-2">30-70%</h3>
                <p className="text-gray-700 dark:text-gray-300">Profit Margin</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading-lg text-gray-900 dark:text-white mb-4"
              >
                Our Pharmacy Store & Franchise Model
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                Modern, professional, and customer-friendly store layout combined with a successful FOFO business model.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-lg text-gray-900 dark:text-white mb-6">Franchise Owned, Franchise Operated Model</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At Yugrow Pharmacy, we operate on the FOFO (Franchise Owned, Franchise Operated) model, which has proven successful across our network of 300+ outlets in India. This model offers the perfect balance of support and independence.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  As a franchise partner, you'll own and operate your store while benefiting from our established brand, extensive supply chain, training, and ongoing support.
                </p>
                <div className="flex items-center p-4 bg-primary-50 dark:bg-gray-800 rounded-xl mb-6">
                  <div className="mr-4 p-3 bg-primary-100 dark:bg-gray-700 rounded-full">
                    <Store className="h-6 w-6 text-primary dark:text-primary-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">FOFO Business Model</h3>
                    <p className="text-gray-600 dark:text-gray-300">Own your business while leveraging our expertise</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-primary-50 dark:bg-gray-800 rounded-xl">
                  <div className="mr-4 p-3 bg-primary-100 dark:bg-gray-700 rounded-full">
                    <BarChart3 className="h-6 w-6 text-primary dark:text-primary-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Proven Growth Model</h3>
                    <p className="text-gray-600 dark:text-gray-300">15+ years of successful business operations</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative max-w-4xl rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/lovable-uploads/0efd825b-4918-433a-810b-413c44d46ab4.png" 
                  alt="Yugrow Pharmacy Store Design" 
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="section-padding bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading-lg text-gray-900 dark:text-white mb-4"
              >
                Quality Certifications
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                Our operations and products meet the highest industry standards
              </motion.p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <img 
                  src="/lovable-uploads/6c44e735-aeee-42f4-8b84-5dfc06749806.png" 
                  alt="Certification Badges" 
                  className="h-auto max-w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-primary-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading-lg text-gray-900 dark:text-white mb-4"
              >
                Exclusive Partner Benefits
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                Partner with Yugrow Pharmacy and enjoy these exclusive advantages to grow your business.
              </motion.p>
            </div>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md transition-transform hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-padding bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading-lg text-gray-900 dark:text-white mb-4"
              >
                The Partnership Journey
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                A comprehensive six-step process to become a Yugrow Pharmacy franchise partner.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-300 to-primary-500 rounded-2xl blur opacity-30"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 border border-primary-100 dark:border-gray-700 h-full">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        {step.icon}
                      </div>
                      <div className="text-4xl font-bold text-primary-200 dark:text-primary-300">{step.number}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-primary-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading-lg text-gray-900 dark:text-white mb-4"
              >
                Success Stories
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                Hear from our franchise partners about their experience with Yugrow Pharmacy.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <svg className="absolute top-0 left-0 w-8 h-8 text-primary-200 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative pl-10 text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <section className="section-padding bg-gradient-to-br from-[#042652] to-[#0a4a8c] dark:from-[#021633] dark:to-[#063561] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-lg mb-6">Start Your Journey With Yugrow Pharmacy</h2>
                <p className="text-lg text-white/80 mb-6">
                  Fill out this simple form, and our team will contact you to discuss franchise opportunities in your area.
                </p>
                <div className="flex items-center mb-8">
                  <Store className="h-12 w-12 text-[#FF7E3D] mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">FOFO Model</h3>
                    <p className="text-white/80">Franchise Owned, Franchise Operated</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-[#FF7E3D] mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-white/90">Initial investment starting from ₹1.5-2 lakhs only</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#FF7E3D] mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-white/90">Expected ROI within 6-12 months</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#FF7E3D] mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-white/90">Access to our wide range of generic medicines</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-[#FF7E3D] mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-white/90">Comprehensive marketing and operational support</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-semibold mb-6">Enquire Now</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-white/80">
