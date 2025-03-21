
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CalendarDays, Leaf, Flag, ArrowRight } from 'lucide-react';
import { CustomButton } from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  image?: string;
  highlights?: string[];
  isEven: boolean;
}

const TimelineItem = ({ date, title, description, image, highlights, isEven }: TimelineItemProps) => (
  <div className={`relative mb-12 md:mb-0 ${isEven ? 'md:text-right' : ''}`}>
    {/* Desktop connector */}
    <div className="hidden md:block absolute top-0 bottom-0 w-px bg-eco-green-dark left-1/2 transform -translate-x-1/2"></div>
    
    {/* Desktop timeline point */}
    <div className="hidden md:block absolute w-6 h-6 rounded-full bg-eco-green-dark left-1/2 transform -translate-x-1/2 top-0">
      <div className="w-3 h-3 rounded-full bg-white absolute top-1.5 left-1.5"></div>
    </div>
    
    <div className={`md:w-5/12 ${isEven ? 'md:ml-auto' : ''} relative`}>
      {/* Mobile timeline point - shown only on mobile */}
      <div className="md:hidden absolute w-6 h-6 rounded-full bg-eco-green-dark left-0 top-0 -translate-x-1/2">
        <div className="w-3 h-3 rounded-full bg-white absolute top-1.5 left-1.5"></div>
      </div>
      
      {/* Content */}
      <div className="bg-white rounded-xl shadow-subtle transition-all hover:shadow-elevated overflow-hidden">
        {image && (
          <div className="w-full aspect-w-16 aspect-h-9">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="p-6">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-eco-green-light text-eco-green-dark font-medium mb-3">
            <CalendarDays className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-eco-gray-dark mb-4">{description}</p>
          
          {highlights && highlights.length > 0 && (
            <ul className={`space-y-2 text-eco-gray-dark ${isEven ? 'md:list-inside' : ''}`}>
              {highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                    <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Timeline = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Our Journey | EcoVoice Kosova";
  }, []);

  const timelineItems = [
    {
      date: "2018",
      title: "The Beginning",
      description: "A group of environmental science students from the University of Pristina came together to address deforestation in Kosovo.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Initial team of 5 students formed",
        "First meetings held at University of Pristina",
        "Research on deforestation began"
      ]
    },
    {
      date: "2019",
      title: "First EcoVoice App",
      description: "We launched the first version of our mobile app, allowing citizens to report illegal logging and waste dumping.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Beta version released with basic reporting features",
        "Over 200 downloads in the first month",
        "First successful intervention based on citizen reports"
      ]
    },
    {
      date: "2020",
      title: "Smart Bin Pilot Program",
      description: "We introduced our first smart bins in Pristina with integrated technology to track usage and optimize waste collection.",
      image: "https://images.unsplash.com/photo-1610830776504-acb45119ca5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "20 smart bins installed across Pristina",
        "Partnership with Pristina Municipality formalized",
        "Initial data collection on waste patterns began"
      ]
    },
    {
      date: "2021",
      title: "Points System Launch",
      description: "We introduced our innovative points system to reward environmental actions and increase community engagement.",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Points system integrated into the EcoVoice app",
        "Partnerships with local businesses for rewards",
        "User base grew to over 5,000 active users"
      ]
    },
    {
      date: "2022",
      title: "Expansion Across Kosovo",
      description: "We expanded our smart bin network to five additional cities and enhanced our deforestation monitoring system.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Expanded to Prizren, Peja, Gjakova, and Mitrovica",
        "Total of 200 smart bins deployed",
        "Advanced monitoring system covering 30 forest areas"
      ]
    },
    {
      date: "2023",
      title: "National Recognition",
      description: "EcoVoice Kosova received national recognition for environmental innovation and impact across the country.",
      image: "https://images.unsplash.com/photo-1552071379-e219ef79c02e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Awarded the Kosovo Environmental Innovation Prize",
        "Featured in national and international media",
        "Reached 15,000 active users"
      ]
    },
    {
      date: "Today",
      title: "Growing Movement",
      description: "Today, EcoVoice Kosova is a thriving movement with nationwide impact on environmental protection.",
      image: "https://images.unsplash.com/photo-1541543969587-9071c80af0ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Over 500 smart bins across Kosovo",
        "15,000+ active users on the platform",
        "35+ protected forest areas"
      ]
    }
  ];

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-eco-blue-light py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white text-eco-blue-dark font-medium mb-4">
                <Flag className="w-4 h-4 mr-2" />
                <span>Our Environmental Journey</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Timeline</h1>
              <p className="text-xl text-eco-gray-dark">
                Explore the journey of EcoVoice Kosova from a student initiative to a 
                nationwide environmental movement transforming Kosovo.
              </p>
            </div>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold mb-6">From Idea to Impact</h2>
              <p className="text-lg text-eco-gray-dark max-w-3xl mx-auto">
                Since our founding in 2018, we've grown from a small student initiative into a major 
                environmental movement. Here are the key milestones in our journey.
              </p>
            </div>
            
            <div className="pl-4 md:pl-0 border-l md:border-l-0 border-eco-green-dark/30">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  highlights={item.highlights}
                  isEven={index % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Future Roadmap */}
        <section className="py-20 bg-eco-gray-light">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Future Roadmap</h2>
              <p className="text-lg text-eco-gray-dark">
                We're just getting started. Here's a look at our plans for continued growth and impact 
                in environmental protection across Kosovo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-subtle p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-eco-green-light rounded-full flex items-center justify-center">
                    <span className="font-bold text-eco-green-dark">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Next 12 Months</h3>
                </div>
                <ul className="space-y-3 text-eco-gray-dark">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Expand to additional 5 municipalities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Deploy 200 more smart bins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Launch enhanced mobile app with AI features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Create educational program for schools</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-subtle p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-eco-green-light rounded-full flex items-center justify-center">
                    <span className="font-bold text-eco-green-dark">2</span>
                  </div>
                  <h3 className="text-xl font-bold">2-3 Year Goals</h3>
                </div>
                <ul className="space-y-3 text-eco-gray-dark">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Advanced forest monitoring with drone technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Smart bins in every Kosovo municipality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Develop comprehensive environmental curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Expand points system to include local businesses</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-subtle p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-eco-green-light rounded-full flex items-center justify-center">
                    <span className="font-bold text-eco-green-dark">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Long-Term Vision</h3>
                </div>
                <ul className="space-y-3 text-eco-gray-dark">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Expand model to neighboring Balkan countries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Establish research center for environmental technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Create circular economy model for waste management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-eco-green-light rounded-full flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-eco-green-dark rounded-full"></span>
                    </span>
                    <span>Achieve measurable improvement in Kosovo's environmental metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Impact Stats */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-eco-blue-light text-eco-blue-dark font-medium mb-4">
                  <Leaf className="w-4 h-4 mr-2" />
                  <span>Our Impact So Far</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">Measurable Environmental Change</h2>
                <p className="text-lg text-eco-gray-dark mb-8">
                  Since our founding, we've achieved significant environmental impact throughout Kosovo.
                  These metrics represent real change in our communities and ecosystems.
                </p>
                <Link to="/about">
                  <CustomButton 
                    variant="primary"
                    icon={<ArrowRight className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    Learn More About Our Work
                  </CustomButton>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-eco-green-light rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-eco-green-dark mb-2">500+</div>
                  <p className="text-eco-gray-dark">Smart bins deployed</p>
                </div>
                
                <div className="bg-eco-green-light rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-eco-green-dark mb-2">35+</div>
                  <p className="text-eco-gray-dark">Forest areas protected</p>
                </div>
                
                <div className="bg-eco-green-light rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-eco-green-dark mb-2">15k+</div>
                  <p className="text-eco-gray-dark">Active platform users</p>
                </div>
                
                <div className="bg-eco-green-light rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-eco-green-dark mb-2">500+</div>
                  <p className="text-eco-gray-dark">Tons of waste properly managed</p>
                </div>
                
                <div className="bg-eco-green-light rounded-xl p-6 text-center col-span-2">
                  <div className="text-4xl font-bold text-eco-green-dark mb-2">120+</div>
                  <p className="text-eco-gray-dark">Successful interventions against illegal logging</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-eco-green-dark text-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Be Part of Our Journey</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join us as we continue to expand our impact across Kosovo and beyond.
              Together, we can create a cleaner, more sustainable future.
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
                  Download Our App
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

export default Timeline;
