
import React from 'react';
import { Heart, Stethoscope, Brain, Pill, Beaker, Tablets, Baby, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Our Product Categories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our extensive range of quality generic medicines across therapeutic categories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{category.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Looking for a specific medicine? Contact us for information on our complete product range.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#FF7E3D] hover:bg-[#FF7E3D]/80 text-white">
              Inquire About Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
