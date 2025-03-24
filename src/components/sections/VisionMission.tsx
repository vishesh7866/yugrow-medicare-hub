
import React from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">Our Vision & Mission</h2>
          <p className="text-lg text-white/80">
            Guided by a clear vision and mission to transform healthcare accessibility in India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 mr-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-white/80 mb-6">
              To significantly reduce healthcare costs in India by providing affordable generic medicines, becoming the most trusted name in the pharmacy sector.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mr-3 flex-shrink-0 text-sm">
                  1
                </span>
                <span>Expand our presence across India with 10,000+ stores</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mr-3 flex-shrink-0 text-sm">
                  2
                </span>
                <span>Ensure every Indian has access to affordable medicine</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mr-3 flex-shrink-0 text-sm">
                  3
                </span>
                <span>Reduce out-of-pocket healthcare expenses</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 mr-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-white/80 mb-6">
              To become the leading national drugstore chain offering quality, affordable generic medicines, making healthcare accessible to all Indians.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mr-3 flex-shrink-0 text-sm">
                  1
                </span>
                <span>Maintain highest quality standards in all our products</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mr-3 flex-shrink-0 text-sm">
                  2
                </span>
                <span>Continuously expand our range of generic medicines</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mr-3 flex-shrink-0 text-sm">
                  3
                </span>
                <span>Empower entrepreneurs through our FOFO franchise model</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mr-3 flex-shrink-0 text-sm">
                  4
                </span>
                <span>Provide exceptional service to customers and partners</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
