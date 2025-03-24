
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">About Yugrow Pharmacy</h2>
          <p className="text-lg text-gray-600">
            A division of Johnlee Pharmaceuticals Pvt. Ltd., committed to making healthcare affordable and accessible across India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <p className="text-gray-600">
              Yugrow Pharmacy LLP is a rapidly growing division of Johnlee Pharmaceuticals Pvt. Ltd., dedicated to providing affordable generic medicines without compromising on quality. Our mission is to make healthcare accessible to all Indians through our expansive network of outlets.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">WHO-GMP Certified:</span> All our manufacturing facilities meet the highest international standards.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">ISO 9001-2015 Certified:</span> We follow rigorous quality management systems.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">Commitment to Affordability:</span> Our generic medicines are priced 30-80% lower than branded alternatives.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">Rapid Expansion:</span> Growing network with 300+ successful outlets across India.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-300 to-primary-500 rounded-2xl blur opacity-30"></div>
            <div className="relative h-full">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Yugrow Pharmacy facility" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2">
                    <div className="bg-white/90 backdrop-blur-sm text-primary font-semibold px-4 py-2 rounded-full">
                      WHO-GMP Certified
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm text-primary font-semibold px-4 py-2 rounded-full">
                      ISO 9001-2015
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
