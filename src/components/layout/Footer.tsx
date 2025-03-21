
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter, ExternalLink } from 'lucide-react';
import { CustomButton } from '@/components/ui/CustomButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-eco-gray-light border-t border-eco-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="w-6 h-6 text-eco-green-dark" />
              <span className="text-lg font-display font-bold">EcoVoice Kosova</span>
            </Link>
            
            <p className="text-eco-gray-dark mb-4">
              Combining technology and civic activism to protect Kosovo's environment through innovation and community engagement.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-eco-gray-dark hover:text-eco-green-dark transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-eco-gray-dark hover:text-eco-green-dark transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-eco-gray-dark hover:text-eco-green-dark transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Points System', path: '/points' },
                { name: 'Our Team', path: '/team' },
                { name: 'Timeline', path: '/timeline' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-eco-gray-dark hover:text-eco-green-dark transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-eco-green-dark mr-2 mt-0.5" />
                <span className="text-eco-gray-dark">Pristina, Kosovo</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-eco-green-dark mr-2" />
                <a href="mailto:info@ecovoicekosova.org" className="text-eco-gray-dark hover:text-eco-green-dark transition-colors">
                  info@ecovoicekosova.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-eco-green-dark mr-2" />
                <a href="tel:+38344123456" className="text-eco-gray-dark hover:text-eco-green-dark transition-colors">
                  +383 44 123 456
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-eco-gray-dark mb-4">
              Subscribe to our newsletter for the latest updates on events, projects, and how you can get involved.
            </p>
            
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md border border-eco-gray focus:border-eco-green-dark focus:outline-none focus:ring-1 focus:ring-eco-green-dark/30"
                required
              />
              <CustomButton
                variant="primary"
                type="submit"
                size="sm"
                fullWidth
              >
                Subscribe
              </CustomButton>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-eco-gray flex flex-col md:flex-row justify-between items-center">
          <p className="text-eco-gray-dark text-sm mb-4 md:mb-0">
            &copy; {currentYear} EcoVoice Kosova. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-eco-gray-dark hover:text-eco-green-dark transition-colors">Privacy Policy</a>
            <a href="#" className="text-eco-gray-dark hover:text-eco-green-dark transition-colors">Terms of Service</a>
            <a href="#" className="text-eco-gray-dark hover:text-eco-green-dark transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
