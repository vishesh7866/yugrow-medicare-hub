import React, { useState, useEffect } from 'react';
import { Users, Activity, Store, TrendingDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Statistics = () => {
  const [animatedValues, setAnimatedValues] = useState({
    outlets: 0,
    customers: 0,
    savings: 0,
    medicines: 0
  });

  const finalValues = {
    outlets: 1500,
    customers: 500000,
    savings: 70,
    medicines: 3000
  };

  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // Animation duration in ms
      const startTime = Date.now();
      
      const animate = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        setAnimatedValues({
          outlets: Math.floor(progress * finalValues.outlets),
          customers: Math.floor(progress * finalValues.customers),
          savings: Math.floor(progress * finalValues.savings),
          medicines: Math.floor(progress * finalValues.medicines)
        });
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }
  }, [isInView]);

  const stats = [
    {
      icon: <Store className="h-10 w-10 text-white" />,
      value: animatedValues.outlets,
      suffix: "+",
      label: "Outlets Across India",
      color: "bg-[#076FD8] dark:bg-[#0557A5]"
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      value: animatedValues.customers,
      suffix: "+",
      label: "Happy Customers",
      color: "bg-[#FF7E3D] dark:bg-[#FF570A]"
    },
    {
      icon: <TrendingDown className="h-10 w-10 text-white" />,
      value: animatedValues.savings,
      suffix: "%",
      label: "Avg. Cost Savings",
      color: "bg-[#076FD8] dark:bg-[#0557A5]"
    },
    {
      icon: <Activity className="h-10 w-10 text-white" />,
      value: animatedValues.medicines,
      suffix: "+",
      label: "Generic Medicines",
      color: "bg-[#FF7E3D] dark:bg-[#FF570A]"
    }
  ];

  // Card variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="statistics-section" className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6" ref={containerRef}>
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See how we're making healthcare affordable and accessible across India.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="relative overflow-hidden rounded-xl shadow-lg"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className={`${stat.color} p-8 relative z-10`}
                whileHover={{
                  backgroundPosition: ["0% 0%", "100% 100%"]
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="absolute top-0 right-0 opacity-10"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="75" cy="75" r="75" fill="white" />
                  </svg>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm mb-4"
                  whileHover={{ rotate: 10 }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-white mb-2"
                  key={stat.value} // Re-render when value changes
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  {stat.value.toLocaleString()}{stat.suffix}
                </motion.div>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
