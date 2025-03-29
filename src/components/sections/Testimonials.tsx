
import React from 'react';
import { QuoteIcon } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Yugrow Pharmacy's generic medicines have made my regular medication affordable. I save almost 70% on my monthly expenses.",
      name: "Rahul Sharma",
      title: "Regular Customer",
      location: "Mumbai"
    },
    {
      id: 2,
      quote: "As a franchise partner, the support from Yugrow has been exceptional. The FOFO model is truly profitable and well-structured.",
      name: "Priya Patel",
      title: "Franchise Owner",
      location: "Pune"
    },
    {
      id: 3,
      quote: "The quality of generic medicines from Yugrow is on par with branded alternatives. I've been recommending them to all my patients.",
      name: "Dr. Vikram Singh",
      title: "General Physician",
      location: "Mumbai"
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover how Yugrow Pharmacy is making a difference in people's lives across India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <QuoteIcon className="h-10 w-10 text-[#FF7E3D]/30 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-[#FF7E3D] to-[#FF570A] flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.title}, {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
