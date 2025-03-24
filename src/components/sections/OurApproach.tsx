
import React from 'react';
import { TrendingDown, Award, Package, BarChart4, HeartHandshake } from 'lucide-react';

const OurApproach = () => {
  const approaches = [
    {
      icon: <TrendingDown className="h-10 w-10 text-white" />,
      title: "Affordable Medicines",
      description: "Our generic medicines are priced 30-80% lower under PM Janaushadhi Yojana, making healthcare accessible to all.",
      color: "bg-primary"
    },
    {
      icon: <Award className="h-10 w-10 text-white" />,
      title: "WHO-GMP Certified Manufacturing",
      description: "All our products are manufactured in facilities adhering to WHO-GMP standards, ensuring highest quality.",
      color: "bg-primary-600"
    },
    {
      icon: <Package className="h-10 w-10 text-white" />,
      title: "Expansion of Generic Range",
      description: "Continuously expanding our portfolio to cover more therapeutic areas and healthcare needs.",
      color: "bg-primary-700"
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-white" />,
      title: "Focus on Quality",
      description: "Rigorous quality control at every stage, from raw materials to finished products, with regular testing.",
      color: "bg-primary-600"
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-white" />,
      title: "Superior Customer Service",
      description: "Dedicated support for both customers and franchise partners to ensure satisfaction and success.",
      color: "bg-primary"
    }
  ];

  return (
    <section className="section-padding bg-white" id="our-approach">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">Our Approach</h2>
          <p className="text-lg text-gray-600">
            We're transforming healthcare accessibility through a methodical approach focused on quality and affordability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${approach.color} p-6`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
                  {approach.icon}
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
