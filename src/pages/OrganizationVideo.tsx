
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';

interface VideoData {
  video_id: string;
  status: string;
  download_url?: string;
  landing_page_url?: string;
}

const OrganizationVideo = () => {
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVideo = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://tavusapi.com/v2/videos', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "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"
        },
        body: JSON.stringify({
          "replica_id": "r9d30b0e55ac",
          "script": "Welcome to Yugrow Pharmacy—India's emerging healthcare destination where trust, quality, and accessibility come together to create a healthier tomorrow.\n\nAt Yugrow, we believe that healthcare should be simple, reliable, and within reach for everyone. That belief drives our mission to provide genuine medicines, wellness essentials, and personalized healthcare support to individuals and families across the country. Every order we fulfill is backed by professional expertise, strict quality control, and a deep understanding of what our customers truly need. Our commitment is not just to deliver medicines—but to deliver confidence, care, and convenience.\n\nYugrow Pharmacy was founded on a vision to reshape the way people access essential healthcare. In today's fast-paced world, we understand that timely delivery, affordability, and trust matter more than ever. With a growing network and a customer-first mindset, we're enabling seamless access to prescription medications, healthcare products, and expert advice—all from the comfort of your home.\n\nBut our mission doesn't end with retail. We are proud to invite ambitious individuals and entrepreneurs to grow with us. Through the Yugrow Franchise Program, we are building a network of health-focused business partners who share our passion for community wellness and sustainable impact.\n\nWhether you are an experienced pharmacy operator or someone looking to step into the world of healthcare entrepreneurship, Yugrow offers a unique opportunity. Our franchise model is designed to empower partners with full support—covering product sourcing, operational guidance, marketing, logistics, and technology. With low investment requirements and high growth potential, we ensure our franchisees are equipped for success from day one.\n\nAs a Yugrow franchisee, you don't just open a store—you become a vital part of our healthcare mission. Together, we're building a future where quality healthcare is not a privilege but a standard for all.\n\nJoin hands with us. Become a partner in care. And let's grow—together.\n\nYugrow Pharmacy. Your Health, Our Priority."
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Video API Response:', data);
      setVideoData(data);
    } catch (err) {
      console.error('Error fetching video:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  const renderVideoContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-12 w-12 animate-spin text-[#FF7E3D] mb-4" />
          <p className="text-lg text-muted-foreground">Generating your video...</p>
          <p className="text-sm text-muted-foreground mt-2">This may take a few moments</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
          <p className="text-lg text-red-600 mb-4">Error loading video</p>
          <p className="text-sm text-muted-foreground mb-4">{error}</p>
          <Button onClick={fetchVideo} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </div>
      );
    }

    if (!videoData) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-lg text-muted-foreground">No video data available</p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Video Status: {videoData.status}</h3>
          <p className="text-sm text-muted-foreground">Video ID: {videoData.video_id}</p>
        </div>

        {videoData.status === 'completed' && videoData.download_url && (
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <video 
              controls 
              className="w-full h-full"
              src={videoData.download_url}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {videoData.status === 'completed' && videoData.landing_page_url && (
          <div className="text-center">
            <Button asChild className="bg-[#FF7E3D] hover:bg-[#FF7E3D]/80">
              <a href={videoData.landing_page_url} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4 mr-2" />
                View on Tavus
              </a>
            </Button>
          </div>
        )}

        {videoData.status === 'processing' && (
          <div className="text-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-[#FF7E3D] mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">Video is being processed...</p>
            <Button onClick={fetchVideo} variant="outline" className="mt-4">
              <RefreshCw className="h-4 w-4 mr-2" />
              Check Status
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Our Story - Yugrow Pharmacy Video</title>
        <meta name="description" content="Watch our story - Learn about Yugrow Pharmacy's mission, vision, and commitment to accessible healthcare for all." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-[#042652] via-[#076FD8] to-[#021633]">
        <Header />
        
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h1 className="heading-xl text-white mb-6">
                  Our Story
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Discover Yugrow Pharmacy's journey, mission, and commitment to making 
                  quality healthcare accessible to everyone across India.
                </p>
              </div>

              {/* Video Card */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white text-center">
                    Welcome to Yugrow Pharmacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {renderVideoContent()}
                </CardContent>
              </Card>

              {/* Additional Content */}
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90">
                      To provide genuine medicines, wellness essentials, and personalized 
                      healthcare support to individuals and families across India with 
                      trust, quality, and accessibility at the core.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Join Our Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 mb-4">
                      Become part of our healthcare mission through the Yugrow Franchise Program. 
                      Together, we're building a future where quality healthcare is accessible to all.
                    </p>
                    <Button asChild className="bg-[#FF7E3D] hover:bg-[#FF7E3D]/80">
                      <a href="/partner">Learn More</a>
                    </Button>
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
