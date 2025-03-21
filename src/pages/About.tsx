
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Leaf, Globe, Shield, Award } from 'lucide-react';
import { CustomButton } from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "About Us | EcoVoice Kosova";
  }, []);

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-eco-green-light py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
                <p className="text-xl text-eco-gray-dark mb-6">
                  EcoVoice Kosova was born from a simple yet powerful idea: what if we could use technology to 
                  help protect Kosovo's beautiful natural environment?
                </p>
                <div className="flex space-x-4">
                  <div className="w-1 bg-eco-green-dark"></div>
                  <p className="text-lg italic text-eco-gray-dark">
                    "We wanted to empower every citizen to become a guardian of nature,
                    using the devices already in their pockets."
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-elevated animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Kosovo landscape" 
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Beginning */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">How It All Began</h2>
              <div className="prose prose-lg">
                <p>
                  In 2018, a group of environmental science students from the University of Pristina were frustrated by the 
                  increasing deforestation they witnessed in Kosovo's forests. They wanted to do something more than just document 
                  the problem—they wanted to solve it.
                </p>
                <p>
                  The idea for EcoVoice Kosova emerged during a hackathon focused on environmental solutions. The team 
                  proposed a mobile app that would allow citizens to report illegal logging and waste dumping, with a points 
                  system to encourage participation.
                </p>
                <p>
                  What started as a student project quickly gained support from local environmental organizations, tech 
                  companies, and eventually government institutions. By 2019, the first version of the EcoVoice app was launched, 
                  and the smart bin program began with a pilot of 20 bins in Pristina.
                </p>
                <p>
                  Today, EcoVoice Kosova has grown into a nationwide movement with thousands of active users, hundreds of 
                  smart bins, and successful interventions against illegal deforestation throughout the country.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-20 bg-eco-gray-light">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Mission, Vision & Values</h2>
              <p className="text-lg text-eco-gray-dark">
                At the core of everything we do are our foundational principles that guide our 
                approach to environmental protection in Kosovo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Mission */}
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <div className="w-12 h-12 bg-eco-green-light rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-eco-green-dark" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-eco-gray-dark">
                  To protect Kosovo's environment through innovative technology, community engagement, 
                  and partnerships with local authorities, creating sustainable solutions to deforestation and waste management.
                </p>
              </div>
              
              {/* Vision */}
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <div className="w-12 h-12 bg-eco-green-light rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-eco-green-dark" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-eco-gray-dark">
                  A Kosovo where technology empowers citizens to protect and preserve the natural environment 
                  for future generations, creating a sustainable and cleaner country through collective action.
                </p>
              </div>
              
              {/* Values */}
              <div className="bg-white p-8 rounded-xl shadow-subtle">
                <div className="w-12 h-12 bg-eco-green-light rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-eco-green-dark" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <ul className="text-eco-gray-dark space-y-2">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Innovation in environmental protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Community and youth empowerment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Collaboration with all stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Transparency in all operations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Kosovo's Environmental Challenges */}
            <div className="bg-white p-8 rounded-xl shadow-subtle">
              <h3 className="text-2xl font-bold mb-6">Kosovo's Environmental Challenges</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Deforestation</h4>
                  <p className="text-eco-gray-dark mb-4">
                    Kosovo faces significant deforestation challenges, with illegal logging affecting over 40% of forested areas.
                    This has led to soil erosion, biodiversity loss, and increased landslide risks.
                  </p>
                  <p className="text-eco-gray-dark">
                    Our tracking system and community reporting network help authorities identify and address 
                    deforestation hotspots in real-time, leading to a 15% reduction in illegal logging where implemented.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Waste Management</h4>
                  <p className="text-eco-gray-dark mb-4">
                    Improper waste disposal is a major environmental challenge in Kosovo, with illegal dumps polluting 
                    water sources and natural areas throughout the country.
                  </p>
                  <p className="text-eco-gray-dark">
                    Our smart bins and waste reporting system are creating a more efficient and environmentally 
                    friendly waste management approach, with over 500 tons of waste properly processed through our system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-eco-green-dark text-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Together, we can protect Kosovo's natural beauty and create a sustainable future for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CustomButton
                  variant="subtle"
                  size="lg"
                  className="bg-white text-eco-green-dark hover:bg-opacity-90"
                >
                  Get Involved
                </CustomButton>
              </Link>
              <Link to="/points">
                <CustomButton
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Explore Points System
                </CustomButton>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
