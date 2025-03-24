
import React from 'react';
import { Users, ShieldCheck, Package, BarChart, Store, Cloud } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Expert Consultation Available",
      description: "Access to professional pharmacists and healthcare experts for personalized guidance."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Certified & Safe Medicines",
      description: "All medicines are WHO-GMP certified and manufactured under strict quality controls."
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: "Brand & Generic Options",
      description: "Wide range of both branded and affordable generic alternatives to suit every need."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Largest Range of Generics",
      description: "We offer one of the most extensive selections of generic medicines in India."
    },
    {
      icon: <Store className="h-10 w-10 text-primary" />,
      title: "FOFO Franchise Model",
      description: "Successful Franchise Owned, Franchise Operated business model with proven results."
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Cloud-based Supply Chain",
      description: "Advanced supply chain management ensuring consistent stock availability."
    }
  ];

  return (
    <section className="section-padding bg-primary-50" id="why-choose-us">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">Why Choose Yugrow Pharmacy?</h2>
          <p className="text-lg text-gray-600">
            We combine affordability with quality, ensuring the best healthcare solutions for our customers and partners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
