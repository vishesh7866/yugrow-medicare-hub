
import React from 'react';
import { Heart, Stethoscope, Brain, Pill, Beaker, Tablets, Baby, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCategories = () => {
  const categories = [
    {
      icon: <Heart className="h-10 w-10" />,
      name: "Cardiovascular",
      description: "Generic medicines for heart health and blood pressure management",
      color: "bg-red-100 dark:bg-red-900/20 text-red-500 dark:text-red-400"
    },
    {
      icon: <Beaker className="h-10 w-10" />,
      name: "Diabetic Care",
      description: "Affordable options for diabetes management and blood sugar control",
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400"
    },
    {
      icon: <Brain className="h-10 w-10" />,
      name: "Neurological",
      description: "Treatments for neurological conditions and pain management",
      color: "bg-purple-100 dark:bg-purple-900/20 text-purple-500 dark:text-purple-400"
    },
    {
      icon: <Tablets className="h-10 w-10" />,
      name: "Antibiotics",
      description: "Broad spectrum antibiotics for various infections at lower costs",
      color: "bg-green-100 dark:bg-green-900/20 text-green-500 dark:text-green-400"
    },
    {
      icon: <Stethoscope className="h-10 w-10" />,
      name: "Respiratory",
      description: "Medicines for asthma, COPD, and other respiratory conditions",
      color: "bg-teal-100 dark:bg-teal-900/20 text-teal-500 dark:text-teal-400"
    },
    {
      icon: <Pill className="h-10 w-10" />,
      name: "Gastrointestinal",
      description: "Treatments for digestive disorders and gastrointestinal health",
      color: "bg-amber-100 dark:bg-amber-900/20 text-amber-500 dark:text-amber-400"
    },
    {
      icon: <Baby className="h-10 w-10" />,
      name: "Pediatric Care",
      description: "Safe and affordable medicines formulated for children",
      color: "bg-pink-100 dark:bg-pink-900/20 text-pink-500 dark:text-pink-400"
    },
    {
      icon: <Eye className="h-10 w-10" />,
      name: "Ophthalmics",
      description: "Eye care medicines and treatments at significant savings",
      color: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-500 dark:text-indigo-400"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70
      }
    }
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Our Product Categories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our extensive range of quality generic medicines across therapeutic categories.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} variants={item} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Looking for a specific medicine? Contact us for information on our complete product range.
          </p>
          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-[#FF7E3D] hover:bg-[#FF7E3D]/80 text-white">
                Inquire About Products
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// 3D tilt effect category card
const CategoryCard = ({ category, variants }) => {
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);
  
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      variants={variants}
      className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      style={{
        perspective: "1000px",
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-6 relative h-full">
        <motion.div 
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} mb-4`}
          initial={{ scale: 0.8, rotate: -5 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20 
          }}
          whileHover={{ 
            rotate: 5,
            scale: 1.1,
          }}
        >
          {category.icon}
        </motion.div>
        <motion.h3 
          className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
          style={{ transform: "translateZ(20px)" }}
        >
          {category.name}
        </motion.h3>
        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-4"
          style={{ transform: "translateZ(10px)" }}
        >
          {category.description}
        </motion.p>
        
        {/* Dynamic gradient effect on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 mix-blend-overlay"
          initial={false}
          animate={{ opacity: rotateX || rotateY ? 0.7 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            transform: `translateX(${rotateY * 2}px) translateY(${-rotateX * 2}px)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default ProductCategories;
