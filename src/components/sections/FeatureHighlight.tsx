
import React from 'react';
import { TreeDeciduous, Trash2, Award } from 'lucide-react';
import { CustomButton } from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';

const FeatureHighlight = () => {
  return (
    <section className="py-20 bg-eco-gray-light">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-eco-blue/30 text-eco-blue-dark font-medium mb-4">
            <span>Key Environmental Challenges</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Addressing Kosovo's Key Environmental Issues</h2>
          <p className="text-lg text-eco-gray-dark">
            Through innovative technology and community engagement, we're tackling the most pressing 
            environmental challenges facing Kosovo today.
          </p>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Deforestation */}
          <div className="rounded-2xl overflow-hidden shadow-elevated transition-all hover:shadow-glass bg-white">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                alt="Forest conservation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center bg-eco-green-dark/80 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                    <TreeDeciduous className="w-4 h-4 text-white mr-2" />
                    <span className="text-white text-sm font-medium">Forest Protection</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold">Combating Deforestation</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-eco-gray-dark mb-6">
                Illegal logging threatens Kosovo's forests. Our tracking system and community reporting 
                helps authorities identify and address deforestation hotspots in real-time.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                    <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                  </span>
                  <span>Real-time monitoring of forest areas</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                    <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                  </span>
                  <span>Community-driven illegal logging reports</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                    <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                  </span>
                  <span>Coordination with local authorities</span>
                </li>
              </ul>
              <Link to="/about">
                <CustomButton
                  variant="outline"
                  size="sm"
                  className="w-full md:w-auto"
                >
                  Learn More About Our Approach
                </CustomButton>
              </Link>
            </div>
          </div>
          
          {/* Waste Management */}
          <div className="rounded-2xl overflow-hidden shadow-elevated transition-all hover:shadow-glass bg-white">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" 
                alt="Smart waste bins" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center bg-eco-blue-dark/80 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                    <Trash2 className="w-4 h-4 text-white mr-2" />
                    <span className="text-white text-sm font-medium">Waste Innovation</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold">Smart Bin Revolution</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-eco-gray-dark mb-6">
                Our smart bins are revolutionizing waste management in Kosovo, providing a tech-driven approach to 
                recycling and proper waste disposal throughout the country.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-eco-blue-light rounded-full flex items-center justify-center mr-2 mt-1">
                    <span className="w-2 h-2 bg-eco-blue-dark rounded-full"></span>
                  </span>
                  <span>Solar-powered smart bins with fill-level sensors</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-eco-blue-light rounded-full flex items-center justify-center mr-2 mt-1">
                    <span className="w-2 h-2 bg-eco-blue-dark rounded-full"></span>
                  </span>
                  <span>Points system for using smart bins to recycle</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-eco-blue-light rounded-full flex items-center justify-center mr-2 mt-1">
                    <span className="w-2 h-2 bg-eco-blue-dark rounded-full"></span>
                  </span>
                  <span>Optimized waste collection routes</span>
                </li>
              </ul>
              <Link to="/points">
                <CustomButton
                  variant="outline"
                  size="sm"
                  className="w-full md:w-auto"
                >
                  Explore Our Points System
                </CustomButton>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Points System Highlight */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-elevated p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-eco-green-light text-eco-green-dark font-medium mb-4">
                <Award className="w-4 h-4 mr-2" />
                <span>Points &amp; Rewards</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Earn Points for Taking Environmental Action</h2>
              <p className="text-eco-gray-dark mb-6">
                Our innovative points system rewards citizens for their environmental contributions. 
                Report illegal waste dumps, use smart bins, and participate in clean-up events to earn points 
                that can be redeemed for rewards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/points">
                  <CustomButton variant="primary">
                    Learn About Points
                  </CustomButton>
                </Link>
                <Link to="/contact">
                  <CustomButton variant="outline">
                    Get Involved
                  </CustomButton>
                </Link>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
                alt="Community engagement" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
