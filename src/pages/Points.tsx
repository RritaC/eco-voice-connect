
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CustomButton } from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';
import { Award, AlertTriangle, Recycle, Calendar, Gift, Trophy, ChevronRight } from 'lucide-react';

const PointsCard = ({ icon, title, points, description }: { icon: React.ReactNode, title: string, points: string, description: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-subtle transition-all hover:shadow-elevated">
    <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
      <div className="w-14 h-14 bg-eco-green-light rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <div className="text-eco-green-dark font-bold mb-2">{points}</div>
        <p className="text-eco-gray-dark">{description}</p>
      </div>
    </div>
  </div>
);

const RewardCard = ({ icon, title, points, description }: { icon: React.ReactNode, title: string, points: string, description: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-subtle transition-all hover:shadow-elevated">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-eco-blue-light rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-eco-blue-dark font-medium">{points}</div>
      </div>
    </div>
    <p className="text-eco-gray-dark">{description}</p>
  </div>
);

const Points = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Points System | EcoVoice Kosova";
  }, []);

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-eco-green-light to-eco-blue-light py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white text-eco-green-dark font-medium mb-4">
                <Award className="w-4 h-4 mr-2" />
                <span>Rewards For Environmental Action</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">EVK Points System</h1>
              <p className="text-xl text-eco-gray-dark mb-8">
                Our innovative points system rewards users for environmental actions. Report issues, use smart bins, 
                and join events to earn points you can redeem for exciting rewards.
              </p>
              <CustomButton
                variant="primary"
                size="lg"
                icon={<ChevronRight className="w-5 h-5" />}
                iconPosition="right"
              >
                <Link to="/contact">Get Started Today</Link>
              </CustomButton>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">How The Points System Works</h2>
              <p className="text-lg text-eco-gray-dark">
                Our points system is designed to reward you for environmental actions large and small. 
                Here's how you can earn and use points through the EcoVoice Kosova platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-xl p-6 border border-eco-gray shadow-subtle text-center">
                <div className="w-16 h-16 bg-eco-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-eco-green-dark text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Take Action</h3>
                <p className="text-eco-gray-dark">
                  Report environmental issues, use smart bins, or participate in clean-up events throughout Kosovo.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-eco-gray shadow-subtle text-center">
                <div className="w-16 h-16 bg-eco-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-eco-green-dark text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Earn Points</h3>
                <p className="text-eco-gray-dark">
                  Each action earns you points based on its environmental impact. Points are automatically added to your account.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-eco-gray shadow-subtle text-center">
                <div className="w-16 h-16 bg-eco-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-eco-green-dark text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Rewards</h3>
                <p className="text-eco-gray-dark">
                  Redeem your points for rewards like public transport tickets, eco-friendly products, or local business discounts.
                </p>
              </div>
            </div>
            
            <div className="bg-eco-gray-light rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Download Our App</h3>
              <p className="text-lg text-eco-gray-dark max-w-2xl mx-auto mb-6">
                Track your points, report issues, and find the nearest smart bins all from our mobile app.
                Available for both iOS and Android.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton variant="primary">
                  <span>Download for iOS</span>
                </CustomButton>
                <CustomButton variant="primary">
                  <span>Download for Android</span>
                </CustomButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ways to Earn Points */}
        <section className="py-20 bg-eco-gray-light">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Ways to Earn Points</h2>
              <p className="text-lg text-eco-gray-dark">
                There are multiple ways to earn points through the EcoVoice Kosova platform. 
                Here are the main activities that will help you collect points while helping the environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <PointsCard 
                icon={<AlertTriangle className="w-6 h-6 text-eco-green-dark" />}
                title="Report Illegal Dumping"
                points="50-100 points per verified report"
                description="Use our app to report illegal waste dumping or deforestation. Include photos and location data for faster verification."
              />
              
              <PointsCard 
                icon={<Recycle className="w-6 h-6 text-eco-green-dark" />}
                title="Use Smart Bins"
                points="5-20 points per use"
                description="Recycle using our smart bins located throughout Kosovo. Different materials earn different point values."
              />
              
              <PointsCard 
                icon={<Calendar className="w-6 h-6 text-eco-green-dark" />}
                title="Attend Clean-up Events"
                points="100-300 points per event"
                description="Join our organized clean-up events and earn points based on participation and duration."
              />
              
              <PointsCard 
                icon={<Users className="w-6 h-6 text-eco-green-dark" />}
                title="Refer Friends"
                points="50 points per active referral"
                description="Invite friends to join EcoVoice Kosova. Earn points when they sign up and complete their first action."
              />
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-subtle">
              <h3 className="text-2xl font-semibold mb-6 text-center">Point Multipliers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-eco-green-light/50 rounded-lg p-4">
                  <div className="font-bold text-eco-green-dark text-lg mb-2">Streak Bonuses</div>
                  <p>Earn 1.5x points when you maintain activity for 7 consecutive days.</p>
                </div>
                
                <div className="bg-eco-green-light/50 rounded-lg p-4">
                  <div className="font-bold text-eco-green-dark text-lg mb-2">Critical Areas</div>
                  <p>Reports from high-priority environmental areas earn 2x points.</p>
                </div>
                
                <div className="bg-eco-green-light/50 rounded-lg p-4">
                  <div className="font-bold text-eco-green-dark text-lg mb-2">Special Events</div>
                  <p>Earn bonus points during special environmental awareness days and campaigns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Rewards */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Redeem Your Points</h2>
              <p className="text-lg text-eco-gray-dark">
                Your environmental actions translate to real rewards. Here's what you can get with your hard-earned points.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <RewardCard 
                icon={<Gift className="w-6 h-6 text-eco-blue-dark" />}
                title="Eco-Friendly Products"
                points="200-1000 points"
                description="Redeem points for sustainable products like reusable water bottles, bamboo utensils, and cloth shopping bags."
              />
              
              <RewardCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-eco-blue-dark">
                  <path d="M8 6h12" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="M8 18h12" />
                  <path d="M2 6h4" />
                  <circle cx="8" cy="6" r="2" />
                  <circle cx="8" cy="18" r="2" />
                  <path d="M12 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8z" />
                </svg>}
                title="Transport Tickets"
                points="100-300 points"
                description="Exchange points for public transportation tickets, promoting sustainable commuting options."
              />
              
              <RewardCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-eco-blue-dark">
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>}
                title="Local Discounts"
                points="300-500 points"
                description="Get discounts at participating local eco-friendly businesses and restaurants."
              />
              
              <RewardCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-eco-blue-dark">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.2 7.4 11.6 7.7 11.9.2.2.5.2.7 0 .3-.3 7.7-6.7 7.7-11.9a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>}
                title="Nature Experiences"
                points="500-1000 points"
                description="Redeem for guided tours of Kosovo's natural areas and environmental education experiences."
              />
              
              <RewardCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-eco-blue-dark">
                  <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                  <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                  <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                  <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
                </svg>}
                title="Workshops & Events"
                points="300-700 points"
                description="Access exclusive environmental workshops, seminars, and special EVK events."
              />
              
              <RewardCard 
                icon={<Trophy className="w-6 h-6 text-eco-blue-dark" />}
                title="Recognition Awards"
                points="1000+ points"
                description="Earn special recognition badges, certificates, and features in our community spotlights."
              />
            </div>
            
            {/* Leaderboard Preview */}
            <div className="bg-eco-blue-light/30 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Community Leaderboard</h3>
              <p className="text-center text-eco-gray-dark mb-8">
                Our top environmental contributors are recognized on our leaderboard. Join them by taking action today!
              </p>
              
              <div className="bg-white rounded-lg shadow-subtle overflow-hidden max-w-3xl mx-auto">
                <div className="bg-eco-blue-dark text-white py-3 px-4 font-semibold">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-1">Rank</div>
                    <div className="col-span-7">User</div>
                    <div className="col-span-4 text-right">Points</div>
                  </div>
                </div>
                
                <div className="divide-y divide-eco-gray">
                  {[
                    { rank: 1, name: "Arben K.", points: "12,450", city: "Pristina" },
                    { rank: 2, name: "Vjosa M.", points: "10,275", city: "Prizren" },
                    { rank: 3, name: "Liridon H.", points: "9,780", city: "Peja" },
                    { rank: 4, name: "Drita B.", points: "8,350", city: "Gjakova" },
                    { rank: 5, name: "Fatmir G.", points: "7,125", city: "Mitrovica" },
                  ].map((user) => (
                    <div key={user.rank} className="py-3 px-4">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-1 font-bold">{user.rank}</div>
                        <div className="col-span-7">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-eco-gray-dark">{user.city}</div>
                        </div>
                        <div className="col-span-4 text-right font-bold text-eco-green-dark">{user.points}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-eco-gray-light py-3 px-4 text-center">
                  <Link to="/contact" className="text-eco-blue-dark hover:underline font-medium">
                    Join Now to Get on the Leaderboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-eco-green-dark text-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Earning Points Today</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Download the EcoVoice Kosova app, create an account, and begin your environmental journey.
              Every action counts!
            </p>
            <CustomButton
              variant="subtle"
              size="lg"
              className="bg-white text-eco-green-dark hover:bg-opacity-90"
            >
              <Link to="/contact">Get Started</Link>
            </CustomButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Points;
