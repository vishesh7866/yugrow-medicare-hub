
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-[#042652] to-[#0a4a8c] dark:from-[#021633] dark:to-[#063561] text-white overflow-hidden relative">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              height: Math.random() * 300 + 100,
              width: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.05, scale: 0.8 }}
            animate={{ 
              opacity: [0.05, 0.1, 0.05], 
              scale: [0.8, 1.2, 0.8],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 2
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <CTAContent />
          <CTACallout />
        </div>
      </div>
    </section>
  );
};

const CTAContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Ready to Join the Yugrow Family?
      </motion.h2>
      <motion.p 
        className="text-white/80 text-lg mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Whether you're looking to start a profitable pharmacy franchise or seeking affordable medicines, 
        Yugrow Pharmacy is your trusted partner in healthcare.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <CTACard 
          title="For Franchise Partners"
          description="Start your own pharmacy business with our proven FOFO model and comprehensive support."
          link="/partner"
          delay={0.5}
        />
        <CTACard 
          title="For Customers"
          description="Get high-quality, affordable medicines and expert guidance at your local Yugrow Pharmacy."
          link="/contact"
          delay={0.7}
        />
      </div>
    </motion.div>
  );
};

const CTACard = ({ title, description, link, delay }) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.15)"
      }}
    >
      <motion.h3 
        className="text-xl font-semibold mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-white/70 mb-4 flex-grow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3 }}
      >
        {description}
      </motion.p>
      <Link to={link}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="outline" className="w-full text-white border-white/30 hover:bg-white/10 flex items-center justify-center group">
            Learn More 
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="ml-1"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          </Button>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const CTACallout = () => {
  const checkListVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  const checkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring"
      }
    }
  };

  const features = [
    "Low investment, high returns",
    "Comprehensive training and support",
    "Proven business model",
    "Marketing and branding assistance",
    "Cloud-based inventory management"
  ];

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="absolute -inset-0.5 bg-gradient-to-r from-[#FF7E3D] to-[#FF570A] rounded-2xl blur opacity-30"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="relative bg-gradient-to-br from-[#0A4A8C] to-[#042652] dark:from-[#063561] dark:to-[#021633] rounded-2xl p-8 border border-white/10"
        whileHover={{ 
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
          y: -5
        }}
      >
        <motion.h3 
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Join Our 300+ Successful Outlets Across India
        </motion.h3>
        <motion.ul 
          className="space-y-3 mb-6"
          variants={checkListVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              variants={checkItemVariants}
            >
              <motion.div
                className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FF7E3D] flex items-center justify-center text-white text-sm mr-3"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                ✓
              </motion.div>
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
        <Link to="/partner">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button size="lg" className="w-full bg-[#FF7E3D] hover:bg-[#FF7E3D]/80 text-white">
              Become Our Partner
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CallToAction;
