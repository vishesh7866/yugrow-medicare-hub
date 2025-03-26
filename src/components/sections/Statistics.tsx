
import React, { useState, useEffect } from 'react';
import { Users, Activity, Store, TrendingDown } from 'lucide-react';

const Statistics = () => {
  const [animatedValues, setAnimatedValues] = useState({
    outlets: 0,
    customers: 0,
    savings: 0,
    medicines: 0
  });

  const finalValues = {
    outlets: 300,
    customers: 500000,
    savings: 70,
    medicines: 1200
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
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
    }, { threshold: 0.1 });
    
    const statSection = document.getElementById('statistics-section');
    if (statSection) observer.observe(statSection);
    
    return () => {
      if (statSection) observer.unobserve(statSection);
    };
  }, []);

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

  return (
    <section id="statistics-section" className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See how we're making healthcare affordable and accessible across India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`${stat.color} p-8 relative z-10`}>
                <div className="absolute top-0 right-0 opacity-10">
                  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="75" cy="75" r="75" fill="white" />
                  </svg>
                </div>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
