
import React, { useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import useAnimationOnScroll from '@/hooks/use-animation';

const About = () => {
  const [contentRef, isContentVisible] = useAnimationOnScroll<HTMLDivElement>();
  const [imageRef, isImageVisible] = useAnimationOnScroll<HTMLDivElement>({ delay: 200 });

  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">About Yugrow Pharmacy</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A division of Johnlee Pharmaceuticals Pvt. Ltd., committed to making healthcare affordable and accessible across India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content side with optimized animation */}
          <div 
            ref={contentRef}
            className={`space-y-6 ${isContentVisible ? 'opacity-100' : 'opacity-0 translate-y-8'} transition-all duration-700`}
          >
            <p className="text-gray-600 dark:text-gray-300">
              Yugrow Pharmacy LLP is a rapidly growing division of Johnlee Pharmaceuticals Pvt. Ltd., dedicated to providing affordable generic medicines without compromising on quality. Our mission is to make healthcare accessible to all Indians through our expansive network of outlets.
            </p>
            
            <div className="space-y-4">
              <AboutPoint text="WHO-GMP Certified: All our manufacturing facilities meet the highest international standards." />
              <AboutPoint text="ISO 9001-2015 Certified: We follow rigorous quality management systems." />
              <AboutPoint text="Commitment to Affordability: Our generic medicines are priced 30-80% lower than branded alternatives." />
              <AboutPoint text="Rapid Expansion: Growing network with 300+ successful outlets across India." />
            </div>
          </div>
          
          {/* Image side with optimized loading & animation */}
          <div 
            ref={imageRef}
            className={`relative ${isImageVisible ? 'opacity-100' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-300`}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-300 to-primary-500 dark:from-[#FF7E3D] dark:to-[#FF570A] rounded-2xl blur opacity-30"></div>
            <div className="relative h-full">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg relative">
                <picture>
                  <source
                    type="image/webp" 
                    srcSet="/lovable-uploads/pharmacy-facility.webp"
                  />
                  <img 
                    src="/lovable-uploads/pharmacy-facility.jpg" 
                    alt="Yugrow Pharmacy facility"
                    width="800"
                    height="450"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2">
                    <div className="bg-white/90 dark:bg-black/60 backdrop-blur-sm text-primary dark:text-[#FF7E3D] font-semibold px-4 py-2 rounded-full">
                      WHO-GMP Certified
                    </div>
                    <div className="bg-white/90 dark:bg-black/60 backdrop-blur-sm text-primary dark:text-[#FF7E3D] font-semibold px-4 py-2 rounded-full">
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

// Extracted AboutPoint component for better maintenance
const AboutPoint = ({ text }: { text: string }) => (
  <div className="flex items-start">
    <CheckCircle className="text-primary dark:text-[#FF7E3D] mr-2 mt-1 flex-shrink-0" size={20} />
    <p className="text-gray-700 dark:text-gray-200">{text}</p>
  </div>
);

export default About;
