
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Instagram, ArrowDown, Volume, VolumeOff, Users, Heart } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@/components/theme-provider';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

const OrganizationVideo = () => {
  const { theme } = useTheme();
  const [isMuted, setIsMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Video event handlers
  const handleVideoProgress = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const progress = (video.currentTime / video.duration) * 100;
    setVideoProgress(progress);
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Stats with animations
  const stats = [
    { 
      icon: <Users className="h-6 w-6" />, 
      value: "10,000+", 
      label: "Happy Customers",
      color: "bg-blue-500"
    },
    { 
      icon: <Heart className="h-6 w-6" />, 
      value: "500+", 
      label: "Products Available",
      color: "bg-red-500"
    },
    { 
      icon: <Instagram className="h-6 w-6" />, 
      value: "50K+", 
      label: "Instagram Followers",
      color: "bg-pink-500"
    },
    { 
      icon: <Play className="h-6 w-6" />, 
      value: "24/7", 
      label: "Customer Support",
      color: "bg-green-500"
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      type: 'reel',
      url: 'https://www.instagram.com/reel/DKwhrjVN8HC/',
      embedUrl: 'https://www.instagram.com/reel/DKwhrjVN8HC/embed',
      title: 'Healthcare Innovation',
      description: 'Discover our latest healthcare innovations and technologies'
    },
    {
      id: 2,
      type: 'reel',
      url: 'https://www.instagram.com/reel/DK9cM44thNk/',
      embedUrl: 'https://www.instagram.com/reel/DK9cM44thNk/embed',
      title: 'Pharmacy Excellence',
      description: 'Behind the scenes of our pharmacy operations'
    },
    {
      id: 3,
      type: 'post',
      url: 'https://www.instagram.com/p/DKj0aBNNjLt/',
      embedUrl: 'https://www.instagram.com/p/DKj0aBNNjLt/embed',
      title: 'Our Mission',
      description: 'Learn about our commitment to accessible healthcare'
    },
    {
      id: 4,
      type: 'reel',
      url: 'https://www.instagram.com/reel/DKraDVjNCUH/',
      embedUrl: 'https://www.instagram.com/reel/DKraDVjNCUH/embed',
      title: 'Community Care',
      description: 'How we serve our community with dedication'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Story - Yugrow Pharmacy Video</title>
        <meta name="description" content="Watch our story - Learn about Yugrow Pharmacy's mission, vision, and commitment to accessible healthcare for all." />
      </Helmet>
      
      <div className={cn(
        "min-h-screen relative overflow-hidden transition-colors duration-300",
        theme === 'dark' 
          ? "bg-gradient-to-br from-[#042652] via-[#076FD8] to-[#021633]" 
          : "bg-gradient-to-br from-blue-50 via-blue-100 to-white"
      )}>
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: backgroundY }}
        >
          <motion.div 
            className={cn(
              "absolute top-20 left-10 w-32 h-32 rounded-full animate-float",
              theme === 'dark' ? "bg-white" : "bg-blue-400"
            )}
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-24 h-24 bg-[#FF7E3D] rounded-full"
            animate={{ 
              y: [0, 20, 0],
              x: [0, -10, 0]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className={cn(
              "absolute bottom-40 left-20 w-20 h-20 rounded-full",
              theme === 'dark' ? "bg-white" : "bg-blue-400"
            )}
            animate={{ 
              y: [0, -15, 0],
              x: [0, 15, 0]
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-40 w-28 h-28 bg-[#FF7E3D] rounded-full"
            animate={{ 
              y: [0, 25, 0],
              x: [0, -15, 0]
            }}
            transition={{ 
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>

        <Header />
        
        <main className="pt-20 pb-16 relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Hero Section */}
              <motion.div 
                className="text-center mb-16"
                style={{ opacity: headerOpacity }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 
                  className={cn(
                    "heading-xl mb-6",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}
                  variants={itemVariants}
                >
                  Our Story
                </motion.h1>
                <motion.p 
                  className={cn(
                    "text-xl max-w-3xl mx-auto",
                    theme === 'dark' ? "text-white/90" : "text-gray-700"
                  )}
                  variants={itemVariants}
                >
                  Discover Yugrow Pharmacy's journey through our story video and connect with us on social media 
                  to stay updated with our latest healthcare initiatives.
                </motion.p>
                <motion.div 
                  className="mt-8 flex justify-center"
                  variants={itemVariants}
                >
                  <ArrowDown className={cn(
                    "h-6 w-6 animate-bounce",
                    theme === 'dark' ? "text-white/70" : "text-gray-500"
                  )} />
                </motion.div>
              </motion.div>

              {/* Enhanced Video Section */}
              <motion.div 
                className="mb-16"
                variants={scaleVariants}
                initial="hidden"
                animate="visible"
              >
                <Card className={cn(
                  "shadow-2xl border-0 overflow-hidden transition-all duration-500 hover:scale-[1.02]",
                  theme === 'dark' 
                    ? "bg-white/10 backdrop-blur-lg" 
                    : "bg-white/80 backdrop-blur-sm"
                )}>
                  <CardHeader className="pb-4">
                    <CardTitle className={cn(
                      "text-3xl text-center flex items-center justify-center gap-3",
                      theme === 'dark' ? "text-white" : "text-gray-900"
                    )}>
                      <Play className="h-8 w-8 text-[#FF7E3D]" />
                      Welcome to Yugrow Pharmacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="relative aspect-video bg-black/20 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                      <video 
                        autoPlay
                        loop
                        controls
                        playsInline
                        muted={isMuted}
                        onLoadedData={handleVideoLoad}
                        onTimeUpdate={handleVideoProgress}
                        className="w-full h-full rounded-xl object-cover"
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23042652;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23FF7E3D;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3EYugrow Pharmacy%3C/text%3E%3C/svg%3E"
                      >
                        <source src="/lovable-uploads/67f0f5bc64.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Video Controls Overlay */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setIsMuted(!isMuted)}
                          className={cn(
                            "bg-black/20 backdrop-blur-sm border-white/20 hover:bg-black/40",
                            theme === 'dark' ? "text-white" : "text-white"
                          )}
                        >
                          {isMuted ? <VolumeOff className="h-4 w-4" /> : <Volume className="h-4 w-4" />}
                        </Button>
                      </div>
                      
                      {/* Video Progress Bar */}
                      {isVideoLoaded && (
                        <div className="absolute bottom-4 left-4 right-4">
                          <Progress value={videoProgress} className="h-1 bg-white/20" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enhanced Stats Section */}
              <motion.div 
                className="mb-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className={cn(
                        "text-center transition-all duration-300 hover:shadow-xl border-0",
                        theme === 'dark' 
                          ? "bg-white/10 backdrop-blur-lg hover:bg-white/20" 
                          : "bg-white/80 backdrop-blur-sm hover:bg-white/90"
                      )}>
                        <CardContent className="p-6">
                          <div className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto",
                            stat.color
                          )}>
                            <div className="text-white">
                              {stat.icon}
                            </div>
                          </div>
                          <div className={cn(
                            "text-2xl font-bold mb-1",
                            theme === 'dark' ? "text-white" : "text-gray-900"
                          )}>
                            {stat.value}
                          </div>
                          <div className={cn(
                            "text-sm",
                            theme === 'dark' ? "text-white/80" : "text-gray-600"
                          )}>
                            {stat.label}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Instagram Section */}
              <motion.div 
                className="mb-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="text-center mb-12">
                  <motion.h2 
                    className={cn(
                      "text-3xl font-bold mb-4 flex items-center justify-center gap-3",
                      theme === 'dark' ? "text-white" : "text-gray-900"
                    )}
                    variants={itemVariants}
                  >
                    <Instagram className="h-8 w-8 text-[#FF7E3D]" />
                    Follow Us on Instagram
                  </motion.h2>
                  <motion.p 
                    className={cn(
                      "text-lg max-w-2xl mx-auto mb-6",
                      theme === 'dark' ? "text-white/80" : "text-gray-600"
                    )}
                    variants={itemVariants}
                  >
                    Stay connected with our daily updates, health tips, and behind-the-scenes content
                  </motion.p>
                  <motion.div variants={itemVariants}>
                    <Button 
                      asChild 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-300"
                    >
                      <a 
                        href="https://www.instagram.com/yugrow_pharmacy/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Instagram className="h-5 w-5" />
                        @yugrow_pharmacy
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Instagram Posts Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {instagramPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className={cn(
                        "group overflow-hidden border-0 transition-all duration-500 hover:shadow-2xl",
                        theme === 'dark' 
                          ? "bg-white/10 backdrop-blur-lg hover:bg-white/20" 
                          : "bg-white/80 backdrop-blur-sm hover:bg-white/90"
                      )}>
                        <CardContent className="p-0">
                          <div className="aspect-square relative overflow-hidden">
                            <iframe
                              src={post.embedUrl}
                              className="w-full h-full border-none rounded-t-lg"
                              scrolling="no"
                              allowTransparency={true}
                              title={post.title}
                              loading="lazy"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className={cn(
                                "text-lg font-semibold",
                                theme === 'dark' ? "text-white" : "text-gray-900"
                              )}>
                                {post.title}
                              </h3>
                              <Badge 
                                variant="outline" 
                                className={cn(
                                  "capitalize",
                                  theme === 'dark' 
                                    ? "border-white/20 text-white/70" 
                                    : "border-gray-300 text-gray-600"
                                )}
                              >
                                {post.type}
                              </Badge>
                            </div>
                            <p className={cn(
                              "text-sm mb-4",
                              theme === 'dark' ? "text-white/70" : "text-gray-600"
                            )}>
                              {post.description}
                            </p>
                            <Button 
                              asChild 
                              size="sm" 
                              variant="outline"
                              className={cn(
                                "w-full transition-all duration-300",
                                theme === 'dark' 
                                  ? "border-white/20 text-white hover:bg-white/10" 
                                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
                              )}
                            >
                              <a 
                                href={post.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                View on Instagram
                                <Instagram className="h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Social Media CTA */}
              <motion.div 
                className="text-center"
                variants={scaleVariants}
                initial="hidden"
                animate="visible"
              >
                <Card className="bg-gradient-to-r from-[#FF7E3D] to-[#FF6B2C] border-none shadow-2xl overflow-hidden">
                  <CardContent className="p-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF7E3D]/90 to-[#FF6B2C]/90" />
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold text-white mb-6">
                        Connect With Us
                      </h2>
                      <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Follow us on social media for daily health tips, product updates, and behind-the-scenes content 
                        from India's most trusted pharmacy network.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                          asChild 
                          className="bg-white text-[#FF7E3D] hover:bg-white/90 text-lg px-8 py-3 hover:scale-105 transition-all duration-300"
                        >
                          <a 
                            href="https://www.instagram.com/yugrow_pharmacy/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Instagram className="h-5 w-5" />
                            Follow on Instagram
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
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OrganizationVideo;
