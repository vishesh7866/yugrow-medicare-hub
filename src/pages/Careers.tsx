
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';

const Careers = () => {
  const { toast } = useToast();
  const [activeJob, setActiveJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null,
    coverLetter: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobOpenings = [
    { id: 1, title: 'Pharmacy Manager', location: 'Mumbai, Maharashtra', desc: 'Oversee daily operations and ensure compliance.' },
    { id: 2, title: 'Marketing Specialist', location: 'Pune, Maharashtra', desc: 'Develop marketing strategies for brand awareness.' },
    { id: 3, title: 'Supply Chain Coordinator', location: 'Delhi NCR', desc: 'Optimize supply chain operations and distribution.' },
  ];

  const handleApplyClick = (jobId: number, jobTitle: string) => {
    setActiveJob(activeJob === jobId ? null : jobId);
    setFormData({ ...formData, position: jobTitle });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. We'll review your application and get back to you.",
      });
      
      // Reset form and close it
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        resume: null,
        coverLetter: ''
      });
      setActiveJob(null);
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
      });
      console.error("Error submitting job application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Career Opportunities at Yugrow Pharmacy | Join Our Team</title>
        <meta name="description" content="Explore career opportunities at Yugrow Pharmacy. Join our dynamic team and build your career in the pharmaceutical industry with a WHO-GMP certified company." />
        <meta name="keywords" content="Yugrow Pharmacy careers, pharmaceutical jobs, job opportunities, employment, pharmacy jobs, healthcare careers" />
        <link rel="canonical" href="https://yugrowpharmacy.com/careers" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Multiple Positions at Yugrow Pharmacy",
            "description": "Yugrow Pharmacy is hiring for multiple positions including Pharmacy Manager, Marketing Specialist, and Supply Chain Coordinator.",
            "identifier": {
              "@type": "PropertyValue",
              "name": "Yugrow Pharmacy",
              "value": "YUGROW-CAREERS"
            },
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Yugrow Pharmacy",
              "sameAs": "https://yugrowpharmacy.com",
              "logo": "https://yugrowpharmacy.com/lovable-uploads/newyugrowlogo.png"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Multiple Locations",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              }
            },
            "employmentType": "FULL_TIME",
            "workHours": "40 hours per week",
            "applicationContact": {
              "@type": "ContactPoint",
              "email": "careers@yugrowpharmacy.com"
            }
          }
        `}
        </script>
      </Helmet>
      <Header />
      <main className="pt-20 min-h-screen">
        <section className="py-16 min-h-[40vh] bg-gradient-to-b from-[#042652] to-[#021633] text-white text-center flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-lg text-gray-300">Be part of our mission to make quality healthcare accessible to everyone.</p>
          </div>
        </section>
        
        <section className="py-16 bg-[#F5F7FA] dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">Current Openings</h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-xl font-bold text-[#042652] dark:text-[#FF7E3D] mb-2">{job.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{job.location} | Full-Time</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{job.desc}</p>
                  <button
                    onClick={() => handleApplyClick(job.id, job.title)}
                    className="bg-[#FF7E3D] text-white py-2 px-6 rounded-md hover:bg-[#FF7E3D]/80 transition"
                  >
                    {activeJob === job.id ? 'Cancel' : 'Apply Now'}
                  </button>

                  {activeJob === job.id && (
                    <form onSubmit={handleSubmit} className="mt-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Apply for {job.title}</h3>
                      <div className="grid grid-cols-1 gap-4">
                        <input 
                          type="text" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="Full Name" 
                          required 
                          className="p-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600" 
                        />
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="Email Address" 
                          required 
                          className="p-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600" 
                        />
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          placeholder="Phone Number" 
                          required 
                          className="p-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600" 
                        />
                        <input 
                          type="file" 
                          name="resume" 
                          onChange={handleFileChange} 
                          required 
                          className="p-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600" 
                        />
                        <textarea 
                          name="coverLetter" 
                          value={formData.coverLetter} 
                          onChange={handleChange} 
                          placeholder="Cover Letter (Optional)" 
                          rows={4} 
                          className="p-3 border rounded-lg w-full dark:bg-gray-700 dark:border-gray-600" 
                        />
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="bg-[#FF7E3D] text-white py-3 px-6 rounded-md hover:bg-[#FF7E3D]/80 transition"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
