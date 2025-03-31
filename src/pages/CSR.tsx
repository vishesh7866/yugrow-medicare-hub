
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';

const CSR = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Social Responsibility - Yugrow Pharmacy</title>
        <meta name="description" content="Learn about Yugrow Pharmacy's corporate social responsibility initiatives and how we give back to the community." />
      </Helmet>
      <Header />
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#042652] to-[#021633] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Corporate Social Responsibility</h1>
              <p className="text-lg text-gray-300">
                Making a positive impact beyond affordable healthcare
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Our Commitment to Society
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
                  At Yugrow Pharmacy, our mission extends beyond providing affordable medicines. We believe in creating a sustainable impact on the communities we serve through meaningful corporate social responsibility initiatives.
                </p>
                
                <div className="bg-[#F5F7FA] dark:bg-gray-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700 mb-12">
                  <h3 className="text-xl font-bold text-[#042652] dark:text-[#FF7E3D] mb-6 text-center">
                    Our CSR Pillars
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#FF7E3D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FF7E3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.32.84-4.5 2.14C10.82 3.84 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Health Access</h4>
                      <p className="text-gray-700 dark:text-gray-300">Free medical camps in underserved areas, medication donations, and health awareness programs</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#FF7E3D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FF7E3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21v-8m0 0V7m0 6h.01M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Education</h4>
                      <p className="text-gray-700 dark:text-gray-300">Scholarships for pharmacy students, health education in schools, and training for healthcare workers</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#FF7E3D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FF7E3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Environment</h4>
                      <p className="text-gray-700 dark:text-gray-300">Sustainable packaging initiatives, medication disposal programs, and reducing carbon footprint</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-16">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Recent CSR Initiatives
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 bg-gray-200 dark:bg-gray-700 h-48 rounded-lg"></div>
                      <div className="md:w-2/3">
                        <h4 className="text-lg font-bold text-[#042652] dark:text-[#FF7E3D] mb-2">
                          Rural Health Camps
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          In partnership with local healthcare providers, we organized 25 health camps across rural Maharashtra, providing free health checkups and medications to over 5,000 individuals.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          January - March 2023
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 bg-gray-200 dark:bg-gray-700 h-48 rounded-lg"></div>
                      <div className="md:w-2/3">
                        <h4 className="text-lg font-bold text-[#042652] dark:text-[#FF7E3D] mb-2">
                          Pharmacy Education Scholarships
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          We awarded scholarships to 50 deserving students from economically disadvantaged backgrounds to pursue pharmacy education at leading institutions across India.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          April - June 2023
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 bg-gray-200 dark:bg-gray-700 h-48 rounded-lg"></div>
                      <div className="md:w-2/3">
                        <h4 className="text-lg font-bold text-[#042652] dark:text-[#FF7E3D] mb-2">
                          Sustainable Packaging Initiative
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Launched our eco-friendly packaging program, reducing plastic usage by 30% and implementing a medication packaging recycling program across all Yugrow franchise locations.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          July - September 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#042652] text-white p-8 rounded-xl text-center">
                  <h3 className="text-xl font-bold mb-4">Partner With Us for Social Impact</h3>
                  <p className="mb-6">
                    We welcome collaborations with NGOs, healthcare institutions, and community organizations to expand our CSR initiatives.
                  </p>
                  <button className="bg-[#FF7E3D] text-white py-2 px-6 rounded-md hover:bg-[#FF7E3D]/80 transition-colors">
                    Contact Our CSR Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CSR;
