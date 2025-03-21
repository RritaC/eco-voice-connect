
import React, { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import FeatureHighlight from '@/components/sections/FeatureHighlight';
import CallToAction from '@/components/sections/CallToAction';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "EcoVoice Kosova | Be the Voice of Nature";
  }, []);

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <FeatureHighlight />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
