
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Linkedin, Twitter, Globe, Users } from 'lucide-react';
import { CustomButton } from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const TeamMember = ({ name, role, bio, image, social }: TeamMemberProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-subtle transition-all hover:shadow-elevated">
    <div className="aspect-w-3 aspect-h-4">
      <img src={image} alt={name} className="w-full h-full object-cover object-center" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-eco-green-dark font-medium mb-4">{role}</p>
      <p className="text-eco-gray-dark mb-6">{bio}</p>
      
      {social && (
        <div className="flex space-x-3">
          {social.email && (
            <a 
              href={`mailto:${social.email}`} 
              className="text-eco-gray-dark hover:text-eco-green-dark transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
          {social.linkedin && (
            <a 
              href={social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-eco-gray-dark hover:text-eco-green-dark transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {social.twitter && (
            <a 
              href={social.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-eco-gray-dark hover:text-eco-green-dark transition-colors"
              aria-label={`${name}'s Twitter`}
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {social.website && (
            <a 
              href={social.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-eco-gray-dark hover:text-eco-green-dark transition-colors"
              aria-label={`${name}'s Website`}
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

const Team = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Our Team | EcoVoice Kosova";
  }, []);

  const coreTeam: TeamMemberProps[] = [
    {
      name: "Arta Kastrati",
      role: "Founder & Executive Director",
      bio: "Environmental scientist with a passion for technology and community engagement. Founded EVK after witnessing deforestation in her hometown.",
      image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        email: "arta@ecovoicekosova.org",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Besnik Hoxha",
      role: "Technical Director",
      bio: "Software engineer specializing in IoT solutions. Leads the development of our smart bin technology and EcoVoice app.",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        email: "besnik@ecovoicekosova.org",
        linkedin: "https://linkedin.com",
        website: "https://example.com"
      }
    },
    {
      name: "Edona Berisha",
      role: "Community Engagement Manager",
      bio: "Social activist with experience in grassroots organizing. Coordinates our volunteer network and community outreach programs.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        email: "edona@ecovoicekosova.org",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Leutrim Gashi",
      role: "Environmental Specialist",
      bio: "Forest management expert who leads our deforestation monitoring programs and environmental assessment initiatives.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        email: "leutrim@ecovoicekosova.org",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Donika Krasniqi",
      role: "Marketing & Communications Director",
      bio: "Former journalist with a passion for environmental storytelling. Leads our media strategy and public awareness campaigns.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        email: "donika@ecovoicekosova.org",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Valon Ahmeti",
      role: "Partnerships & Development Manager",
      bio: "Relationship builder who connects EVK with government agencies, donors, and corporate partners to expand our impact.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        email: "valon@ecovoicekosova.org",
        linkedin: "https://linkedin.com"
      }
    }
  ];
  
  const advisors: TeamMemberProps[] = [
    {
      name: "Dr. Azra Kajtazi",
      role: "Environmental Policy Advisor",
      bio: "Professor of Environmental Science at the University of Pristina with expertise in sustainable development policy.",
      image: "https://images.unsplash.com/photo-1581535729115-1a587b39740a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "https://linkedin.com",
        website: "https://example.com"
      }
    },
    {
      name: "Burim Hasani",
      role: "Technology Advisor",
      bio: "CTO of a leading tech company with experience in scaling environmental technology solutions across the Balkans.",
      image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Rina Thaçi",
      role: "Youth Engagement Advisor",
      bio: "Youth activist who founded several successful environmental initiatives focusing on student engagement and education.",
      image: "https://images.unsplash.com/photo-1496439786094-e697ca3584d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "https://twitter.com",
        website: "https://example.com"
      }
    }
  ];

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-eco-gray-light py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-eco-green-light text-eco-green-dark font-medium mb-4">
                <Users className="w-4 h-4 mr-2" />
                <span>The People Behind EVK</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
              <p className="text-xl text-eco-gray-dark">
                We're a diverse group of environmental scientists, technologists, and community organizers 
                united by a passion for protecting Kosovo's natural environment.
              </p>
            </div>
          </div>
        </section>
        
        {/* Core Team */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Core Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeam.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Advisors */}
        <section className="py-20 bg-eco-gray-light">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Advisors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {advisors.map((advisor) => (
                <TeamMember key={advisor.name} {...advisor} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Community & Volunteers */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-eco-green-light text-eco-green-dark font-medium mb-4">
                  <span>The Heart of Our Mission</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Volunteer Community</h2>
                <p className="text-lg text-eco-gray-dark mb-6">
                  Beyond our core team, EcoVoice Kosova is powered by a network of over 200 dedicated volunteers 
                  across Kosovo. From students to retirees, our volunteers contribute their time, energy, and 
                  passion to protecting our environment.
                </p>
                <p className="text-lg text-eco-gray-dark mb-8">
                  Volunteers assist with clean-up events, smart bin maintenance, community education, 
                  and environmental monitoring activities. Their commitment and enthusiasm drive our 
                  movement forward every day.
                </p>
                <Link to="/contact">
                  <CustomButton variant="primary">
                    Join Our Volunteer Network
                  </CustomButton>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Volunteers cleaning a park" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden transform translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Volunteers planting trees" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden transform translate-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Team meeting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Team discussion" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Our Team */}
        <section className="py-16 bg-eco-green-dark text-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              We're always looking for passionate individuals to join our mission. 
              Check our current openings or reach out to discuss volunteer opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CustomButton
                  variant="subtle"
                  size="lg"
                  className="bg-white text-eco-green-dark hover:bg-opacity-90"
                >
                  View Open Positions
                </CustomButton>
              </Link>
              <Link to="/contact">
                <CustomButton
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Us
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

export default Team;
