
import React from 'react';
import { ChevronRight, Leaf, Recycle, Users } from 'lucide-react';
import { CustomButton } from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-green-light via-white to-eco-blue-light z-0" />
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 opacity-20 animate-gentle-pulse">
        <Leaf className="w-56 h-56 text-eco-green-dark" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 animate-gentle-pulse" style={{ animationDelay: '1s' }}>
        <Recycle className="w-40 h-40 text-eco-blue-dark" />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="flex flex-col items-start space-y-6 animate-fade-up">
            <div className="bg-eco-green-dark/10 rounded-full px-4 py-1 inline-flex items-center text-eco-green-dark font-medium">
              <Leaf className="w-4 h-4 mr-2" />
              <span>Join the environmental movement</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-eco-text">
              Be the Voice of Nature
              <span className="block text-eco-green-dark"> – Join EVK Today!</span>
            </h1>
            
            <p className="text-xl text-eco-gray-dark max-w-lg">
              EcoVoice Kosova combines technology and civic activism to protect our environment. 
              We are building a community of engaged citizens fighting deforestation and waste pollution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CustomButton
                variant="primary"
                size="lg"
                icon={<ChevronRight className="w-5 h-5" />}
                iconPosition="right"
              >
                <Link to="/about">Learn More</Link>
              </CustomButton>
              
              <CustomButton
                variant="outline"
                size="lg"
                icon={<Users className="w-5 h-5" />}
                iconPosition="left"
              >
                <Link to="/contact">Get Involved</Link>
              </CustomButton>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 w-full">
              <div className="text-center">
                <p className="text-3xl font-bold text-eco-green-dark">500+</p>
                <p className="text-eco-gray-dark">Smart Bins Deployed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-eco-green-dark">15k+</p>
                <p className="text-eco-gray-dark">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-eco-green-dark">35+</p>
                <p className="text-eco-gray-dark">Forests Protected</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="absolute inset-0 bg-eco-green-dark/10 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
              alt="Forest with sunlight through trees" 
              className="w-full h-auto rounded-3xl shadow-elevated object-cover transform -rotate-3 hover:rotate-0 transition-all duration-500"
              style={{ maxHeight: '80vh' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
