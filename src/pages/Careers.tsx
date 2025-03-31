
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Yugrow Pharmacy</title>
        <meta name="description" content="Join Yugrow Pharmacy's team and build your career in the pharmaceutical industry. Find job opportunities and growth paths." />
      </Helmet>
      <Header />
      <main className="pt-20 min-h-screen">
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#042652] to-[#021633] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-lg text-gray-300">
                Be part of our mission to make quality healthcare accessible to everyone
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Why Work With Us?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-[#042652] dark:text-[#FF7E3D] mb-4">
                    Meaningful Impact
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Every day, your work will directly contribute to making healthcare more accessible to people across India. Be part of a company that puts purpose before profit.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-[#042652] dark:text-[#FF7E3D] mb-4">
                    Growth & Development
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We invest in our team's professional growth with continuous learning opportunities, mentoring programs, and clear career advancement paths.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-[#042652] dark:text-[#FF7E3D] mb-4">
                    Inclusive Culture
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Join a diverse and supportive team where your voice matters. We celebrate different perspectives and create an environment where everyone can thrive.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-[#042652] dark:text-[#FF7E3D] mb-4">
                    Comprehensive Benefits
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We offer competitive compensation, health benefits, work-life balance initiatives, and other perks to support your overall wellbeing.
                  </p>
                </div>
              </div>
              
              <div className="bg-[#F5F7FA] dark:bg-gray-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700 mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Current Openings
                </h2>
                
                <div className="space-y-6">
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h3 className="text-xl font-bold text-[#042652] dark:text-[#FF7E3D] mb-2">
                      Pharmacy Manager
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Mumbai, Maharashtra | Full-Time
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We're looking for an experienced Pharmacy Manager to oversee daily operations, maintain inventory, and ensure regulatory compliance while providing exceptional customer service.
                    </p>
                    <button className="bg-[#FF7E3D] text-white py-2 px-6 rounded-md hover:bg-[#FF7E3D]/80 transition-colors">
                      Apply Now
                    </button>
                  </div>
                  
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h3 className="text-xl font-bold text-[#042652] dark:text-[#FF7E3D] mb-2">
                      Marketing Specialist
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Pune, Maharashtra | Full-Time
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Join our marketing team to develop and implement strategies that raise awareness about generic medicines and grow our franchise network across India.
                    </p>
                    <button className="bg-[#FF7E3D] text-white py-2 px-6 rounded-md hover:bg-[#FF7E3D]/80 transition-colors">
                      Apply Now
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#042652] dark:text-[#FF7E3D] mb-2">
                      Supply Chain Coordinator
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Delhi NCR | Full-Time
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We're seeking a detail-oriented Supply Chain Coordinator to optimize our distribution network, manage relationships with suppliers, and ensure timely delivery to all franchise locations.
                    </p>
                    <button className="bg-[#FF7E3D] text-white py-2 px-6 rounded-md hover:bg-[#FF7E3D]/80 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Don't see a suitable position?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  We're always looking for talented individuals to join our team. Send your resume to <span className="text-[#FF7E3D]">careers@yugrowpharmacy.com</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
