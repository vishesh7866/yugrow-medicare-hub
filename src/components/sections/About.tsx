
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">About Yugrow Pharmacy</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A division of Johnlee Pharmaceuticals Pvt. Ltd., committed to making healthcare affordable and accessible across India.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AboutContent />
          <AboutImage />
        </div>
      </div>
    </section>
  );
};

const AboutContent = () => {
  const checkListVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const checkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    }
  };

  const features = [
    {
      text: "All our manufacturing facilities meet the highest international standards.",
      label: "WHO-GMP Certified:"
    },
    {
      text: "We follow rigorous quality management systems.",
      label: "ISO 9001-2015 Certified:"
    },
    {
      text: "Our generic medicines are priced 30-80% lower than branded alternatives.",
      label: "Commitment to Affordability:"
    },
    {
      text: "Growing network with 300+ successful outlets across India.",
      label: "Rapid Expansion:"
    }
  ];

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.p 
        className="text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Yugrow Pharmacy LLP is a rapidly growing division of Johnlee Pharmaceuticals Pvt. Ltd., dedicated to providing affordable generic medicines without compromising on quality. Our mission is to make healthcare accessible to all Indians through our expansive network of outlets.
      </motion.p>
      
      <motion.div 
        className="space-y-4"
        variants={checkListVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="flex items-start"
            variants={checkItemVariants}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              whileHover={{ 
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            >
              <CheckCircle className="text-primary dark:text-[#FF7E3D] mr-2 mt-1 flex-shrink-0" size={20} />
            </motion.div>
            <p className="text-gray-700 dark:text-gray-200">
              <span className="font-semibold">{feature.label}</span> {feature.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const AboutImage = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
    >
      <motion.div 
        className="absolute -inset-0.5 bg-gradient-to-r from-primary-300 to-primary-500 dark:from-[#FF7E3D] dark:to-[#FF570A] rounded-2xl blur opacity-30"
        animate={{
          opacity: [0.2, 0.3, 0.2],
          scale: [0.98, 1.01, 0.98],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <div className="relative h-full">
        <motion.div 
          className="aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
            transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`
          }}
        >
          <motion.img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
            alt="Yugrow Pharmacy facility" 
            className="w-full h-full object-cover"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(20px) scale(1.05)`,
            }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(40px)`,
            }}
          >
            <div className="flex items-center space-x-2">
              <motion.div 
                className="bg-white/90 dark:bg-black/60 backdrop-blur-sm text-primary dark:text-[#FF7E3D] font-semibold px-4 py-2 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
              >
                WHO-GMP Certified
              </motion.div>
              <motion.div 
                className="bg-white/90 dark:bg-black/60 backdrop-blur-sm text-primary dark:text-[#FF7E3D] font-semibold px-4 py-2 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
              >
                ISO 9001-2015
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
