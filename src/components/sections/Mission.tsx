
import React from 'react';
import { Shield, Leaf, TreeDeciduous } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MissionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const MissionCard = ({ icon, title, description, className }: MissionCardProps) => (
  <div className={cn(
    "glass-panel p-8 rounded-xl feature-card-hover", 
    className
  )}>
    <div className="bg-eco-green-light/50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-eco-gray-dark">{description}</p>
  </div>
);

const Mission = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-eco-green-light rounded-full opacity-30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-eco-blue-light rounded-full opacity-30 blur-3xl" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
          <p className="text-xl text-eco-gray-dark">
            At EcoVoice Kosova, we're committed to creating innovative environmental solutions through technology, 
            education, and community engagement.
          </p>
        </div>
        
        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MissionCard 
            icon={<Shield className="w-8 h-8 text-eco-green-dark" />}
            title="Environmental Protection"
            description="Leading the fight against deforestation and waste pollution through smart technology and community-driven approaches."
            className="transform hover:-translate-y-2 transition-transform"
          />
          
          <MissionCard 
            icon={<Leaf className="w-8 h-8 text-eco-green-dark" />}
            title="Sustainable Innovation"
            description="Developing and deploying smart bins, monitoring systems, and digital tools to make environmental protection more effective."
            className="transform hover:-translate-y-2 transition-transform md:translate-y-6"
          />
          
          <MissionCard 
            icon={<TreeDeciduous className="w-8 h-8 text-eco-green-dark" />}
            title="Community Engagement"
            description="Building a network of environmentally conscious citizens who take action and earn rewards through our points system."
            className="transform hover:-translate-y-2 transition-transform"
          />
        </div>
        
        {/* Vision Statement */}
        <div className="mt-16 p-8 rounded-xl bg-eco-green-light/30 border border-eco-green/20 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-lg">
            A Kosovo where technology empowers citizens to protect and preserve the natural environment 
            for future generations, creating a sustainable and cleaner country through collective action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
