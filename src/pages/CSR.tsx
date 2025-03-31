import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';

const CSR = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Social Responsibility - Yugrow Pharmacy</title>
        <meta
          name="description"
          content="Learn about Yugrow Pharmacy's corporate social responsibility initiatives and how we give back to the community."
        />
      </Helmet>
      <Header />
      
      <main className="pt-20 min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Hero Section with Video */}
        <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
          <video 
            src="/lovable-uploads/csr.mov" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Making an Impact Together</h1>
            <p className="text-lg max-w-3xl">
              Yugrow Pharmacy is dedicated to improving lives through healthcare, education, and sustainability.
            </p>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-white dark:bg-gray-900 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Commitment to Society
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              At Yugrow Pharmacy, we believe in making healthcare accessible, supporting education, and protecting the environment.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-[#042652] dark:text-[#FF7E3D] mb-3">Healthcare Access</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Free medical camps, medicine donations, and awareness programs to support underserved communities.
                </p>
              </div>
              {/* Pillar 2 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-[#042652] dark:text-[#FF7E3D] mb-3">Education Support</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Scholarships, training for healthcare professionals, and student mentorship initiatives.
                </p>
              </div>
              {/* Pillar 3 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-[#042652] dark:text-[#FF7E3D] mb-3">Sustainability</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Eco-friendly packaging, recycling programs, and green initiatives to reduce our carbon footprint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#042652] text-white py-12 text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-4">Partner With Us for Social Impact</h3>
            <p className="mb-6">
              We welcome collaborations with NGOs, healthcare institutions, and community organizations to expand our CSR initiatives.
            </p>
            <button className="bg-[#FF7E3D] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#FF7E3D]/80 transition">
              Contact Our CSR Team
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CSR;
