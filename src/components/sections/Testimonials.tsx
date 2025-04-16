
import React from 'react';
import { QuoteIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Yugrow Pharmacy's generic medicines have made my regular medication affordable. I save almost 70% on my monthly expenses.",
      name: "Vishesh Sanghvi",
      title: "Regular Customer",
      location: "Mumbai"
    },
    {
      id: 2,
      quote: "As a franchise partner, the support from Yugrow has been exceptional. The FOFO model is truly profitable and well-structured.",
      name: "Gaurav Mishra",
      title: "Regular Customer",
      location: "Mumbai"
    },
    {
      id: 3,
      quote: "The quality of generic medicines from Yugrow is on par with branded alternatives. I've been recommending them to all my patients.",
      name: "Ravi Maurya",
      title: "Regular Customer",
      location: "Mumbai"
    }
  ];

  // Text animation staggered characters
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.02
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const titleAnimation = "What Our Customers Say".split("");
  
  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="heading-lg text-gray-900 dark:text-white mb-4 overflow-hidden"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {titleAnimation.map((char, index) => (
              <motion.span
                key={index}
                variants={letter}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Discover how Yugrow Pharmacy is making a difference in people's lives across India.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div 
      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      {/* Animated quote background */}
      <motion.div
        className="absolute -right-4 -top-4 text-[#FF7E3D]/5 dark:text-[#FF7E3D]/10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.3 }}
      >
        <QuoteIcon className="h-24 w-24" />
      </motion.div>
      
      {/* Animated quote icon */}
      <motion.div
        initial={{ rotate: -20, scale: 0.5, opacity: 0 }}
        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.2, 
          type: "spring",
          stiffness: 200, 
          damping: 15 
        }}
      >
        <QuoteIcon className="h-10 w-10 text-[#FF7E3D]/30 mb-4" />
      </motion.div>
      
      {/* Animated quote text */}
      <motion.p 
        className="text-gray-700 dark:text-gray-300 mb-6 italic relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.2 }}
      >
        "{testimonial.quote}"
      </motion.p>
      
      <div className="flex items-center mt-auto">
        <motion.div 
          className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-[#FF7E3D] to-[#FF570A] flex items-center justify-center text-white font-bold"
          initial={{ scale: 0, borderRadius: "50%" }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            delay: index * 0.2 + 0.3,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            scale: 1.2,
            transition: { 
              type: "spring", 
              stiffness: 300 
            }
          }}
        >
          {testimonial.name.charAt(0)}
        </motion.div>
        <motion.div 
          className="ml-3"
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.4 }}
        >
          <p className="text-sm font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.title}, {testimonial.location}</p>
        </motion.div>
      </div>
      
      {/* Animated gradient border on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={false}
        whileHover={{
          boxShadow: "inset 0 0 0 2px rgba(255, 126, 61, 0.5)",
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default Testimonials;
