
import React from 'react';
import { ArrowRight, Users, ExternalLink } from 'lucide-react';
import { CustomButton } from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-eco-green-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-eco-green/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-eco-green/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Movement for a Cleaner Kosovo</h2>
          <p className="text-xl text-eco-gray-dark mb-10">
            Your voice matters. Let's clean up Kosovo – one step at a time. Join our community of 
            environmentally conscious citizens making a difference today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-subtle transition-all hover:shadow-elevated">
              <div className="w-12 h-12 bg-eco-green-light rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-eco-green-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Volunteer</h3>
              <p className="text-eco-gray-dark mb-4">Join our volunteer community and participate in events and initiatives.</p>
              <Link to="/contact">
                <CustomButton
                  variant="subtle"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  fullWidth
                >
                  Sign Up
                </CustomButton>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-subtle transition-all hover:shadow-elevated">
              <div className="w-12 h-12 bg-eco-green-light rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-eco-green-dark">
                  <path d="M12 13V2l8 4-8 4" />
                  <path d="M20.55 10.23A9 9 0 1 1 8 4.94" />
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M12 13h8.53a3 3 0 1 1 0 6H15" />
                  <path d="M17 22H3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Donate</h3>
              <p className="text-eco-gray-dark mb-4">Support our projects through donations that directly fund our initiatives.</p>
              <Link to="/contact">
                <CustomButton
                  variant="subtle"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  fullWidth
                >
                  Contribute
                </CustomButton>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-subtle transition-all hover:shadow-elevated">
              <div className="w-12 h-12 bg-eco-green-light rounded-full flex items-center justify-center mb-4 mx-auto">
                <ExternalLink className="w-6 h-6 text-eco-green-dark" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Spread the Word</h3>
              <p className="text-eco-gray-dark mb-4">Share our mission on social media and help us reach more people.</p>
              <Link to="/contact">
                <CustomButton
                  variant="subtle"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  fullWidth
                >
                  Share
                </CustomButton>
              </Link>
            </div>
          </div>
          
          <div className="inline-block rounded-xl bg-white p-6 md:p-8 shadow-elevated">
            <h3 className="text-2xl font-semibold mb-3">Ready to make a difference?</h3>
            <p className="text-eco-gray-dark mb-6">
              Join our growing community of environmental advocates and help build a cleaner future for Kosovo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CustomButton
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Get Involved
                </CustomButton>
              </Link>
              <Link to="/points">
                <CustomButton
                  variant="outline"
                  size="lg"
                >
                  Learn About Points
                </CustomButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
