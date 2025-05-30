import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Points', path: '/points' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Contact', path: '/contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMobile]);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-subtle py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-eco-text transition-all duration-300 hover:text-eco-green-dark"
            aria-label="EcoVoice Kosova"
          >
            <Leaf className="w-8 h-8 text-eco-green-dark" />
            <span className="text-xl font-display font-bold">EcoVoice Kosova</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'nav-link',
                  location.pathname === link.path && 'nav-link-active'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-eco-gray-dark hover:text-eco-green-dark focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'py-3 px-4 text-lg font-medium rounded-md transition-colors',
                location.pathname === link.path 
                  ? 'bg-eco-green-light text-eco-green-dark' 
                  : 'text-eco-gray-dark hover:bg-eco-gray-light'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
