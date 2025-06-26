
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Heart, Users, Award, Globe } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';

const OrganizationVideo = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "10,000+", label: "Happy Customers" },
    { icon: <Award className="h-6 w-6" />, value: "500+", label: "Products Available" },
    { icon: <Globe className="h-6 w-6" />, value: "50+", label: "Cities Served" },
    { icon: <Heart className="h-6 w-6" />, value: "24/7", label: "Customer Support" }
  ];

  const features = [
    {
      title: "Quality Assurance",
      description: "Every product goes through rigorous quality checks to ensure safety and efficacy.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Expert Guidance",
      description: "Our team of qualified pharmacists provides professional healthcare advice.",
      gradient: "from-green-400 to-green-600"
    },
    {
      title: "Nationwide Delivery",
      description: "Fast and reliable delivery to your doorstep across India.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      title: "Affordable Healthcare",
      description: "Making quality healthcare accessible and affordable for everyone.",
      gradient: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Story - Yugrow Pharmacy Video</title>
        <meta name="description" content="Watch our story - Learn about Yugrow Pharmacy's mission, vision, and commitment to accessible healthcare for all." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-[#042652] via-[#076FD8] to-[#021633] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#FF7E3D] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-white rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-40 w-28 h-28 bg-[#FF7E3D] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <Header />
        
        <main className="pt-20 pb-16 relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="heading-xl text-white mb-6 animate-slide-up">
                  Our Story
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Discover Yugrow Pharmacy's journey, mission, and commitment to making 
                  quality healthcare accessible to everyone across India.
                </p>
              </div>

              {/* Video Section */}
              <div className="mb-16 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-3xl text-white text-center flex items-center justify-center gap-3">
                      <Play className="h-8 w-8 text-[#FF7E3D]" />
                      Welcome to Yugrow Pharmacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="aspect-video bg-black/20 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                      <video 
                        controls 
                        className="w-full h-full rounded-xl"
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23042652;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23FF7E3D;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3EYugrow Pharmacy%3C/text%3E%3C/svg%3E"
                      >
                        <source src="/lovable-uploads/67f0f5bc64.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Stats Section */}
              <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <Card 
                      key={index} 
                      className="bg-white/10 backdrop-blur-lg border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slide-up"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="text-[#FF7E3D] mb-3 flex justify-center">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-white/80 text-sm">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Features Grid */}
              <div className="mb-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Yugrow?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <Card 
                      key={index}
                      className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 animate-slide-up group"
                      style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                    >
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-8 h-8 bg-white rounded-full"></div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                        <p className="text-white/80 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center animate-scale-in" style={{ animationDelay: '1.8s' }}>
                <Card className="bg-gradient-to-r from-[#FF7E3D] to-[#FF6B2C] border-none shadow-2xl">
                  <CardContent className="p-12">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Ready to Join Our Healthcare Revolution?
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                      Partner with us and become part of India's fastest-growing pharmacy network. 
                      Together, we can make quality healthcare accessible to everyone.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        asChild 
                        className="bg-white text-[#FF7E3D] hover:bg-white/90 text-lg px-8 py-3 hover:scale-105 transition-all duration-300"
                      >
                        <a href="/partner">
                          Become a Partner
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </a>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-[#FF7E3D] text-lg px-8 py-3 hover:scale-105 transition-all duration-300"
                      >
                        <a href="/contact">Contact Us</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OrganizationVideo;
