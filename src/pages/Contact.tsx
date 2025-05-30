import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, MessageSquare, Phone, MapPin, Users, Send, AlertCircle } from 'lucide-react';
import { CustomButton } from '@/components/ui/CustomButton';

const Contact = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Contact Us | EcoVoice Kosova";
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interests: [] as string[]
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter(interest => interest !== value) };
      }
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError(true);
      return;
    }
    
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormError(false);
    setFormSubmitted(true);
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      interests: []
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-eco-green-light to-eco-blue-light py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white text-eco-green-dark font-medium mb-4">
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>We'd Love to Hear From You</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-eco-gray-dark">
                Have questions about our work? Want to get involved? Reach out to our team and we'll 
                be happy to connect with you about EcoVoice Kosova.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info + Form */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-eco-green-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <Mail className="w-6 h-6 text-eco-green-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-eco-gray-dark mb-1">General Inquiries:</p>
                      <a href="mailto:kryesiashkolle@mileniumi3.net" className="text-eco-green-dark hover:underline">
                        kryesiashkolle@mileniumi3.net
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-eco-green-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <Phone className="w-6 h-6 text-eco-green-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">KONTAKT</h3>
                      <a href="tel:+38344260606" className="text-eco-green-dark hover:underline block">
                        +383 44 260 606
                      </a>
                      <a href="tel:+38338244258" className="text-eco-green-dark hover:underline block">
                        +383 38 244 258
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-eco-green-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <MapPin className="w-6 h-6 text-eco-green-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">ADRESA</h3>
                      <p className="text-eco-gray-dark">
                        Rr. "Sokol Sopi", nr. 107<br />
                        Matiçan, 10000 Prishtinë, Kosovë
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-eco-green-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <Users className="w-6 h-6 text-eco-green-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-eco-gray-light rounded-full flex items-center justify-center text-eco-gray-dark hover:bg-eco-green-light hover:text-eco-green-dark transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-eco-gray-light rounded-full flex items-center justify-center text-eco-gray-dark hover:bg-eco-green-light hover:text-eco-green-dark transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-eco-gray-light rounded-full flex items-center justify-center text-eco-gray-dark hover:bg-eco-green-light hover:text-eco-green-dark transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-eco-gray-light rounded-full flex items-center justify-center text-eco-gray-dark hover:bg-eco-green-light hover:text-eco-green-dark transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                            <path d="m10 15 5-3-5-3z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Office Hours */}
                <div className="bg-eco-gray-light rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">ORARI</h3>
                  <div className="grid grid-cols-2 gap-2 text-eco-gray-dark">
                    <div>E Hënë - E Premte:</div>
                    <div>08:00-16:00</div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                
                {formSubmitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p>Thank you for reaching out. We'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                
                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6 flex items-start">
                    <AlertCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Error</p>
                      <p>Please fill out all required fields.</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-eco-gray-dark mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-eco-gray rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green-dark/30 focus:border-eco-green-dark"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-eco-gray-dark mb-1">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-eco-gray rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green-dark/30 focus:border-eco-green-dark"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-eco-gray-dark mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-eco-gray rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green-dark/30 focus:border-eco-green-dark"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-eco-gray-dark mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-eco-gray rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green-dark/30 focus:border-eco-green-dark"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <p className="block text-sm font-medium text-eco-gray-dark mb-2">
                      I'm interested in: (select all that apply)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        { id: 'volunteer', label: 'Volunteering' },
                        { id: 'donate', label: 'Donating' },
                        { id: 'partner', label: 'Becoming a Partner' },
                        { id: 'report', label: 'Reporting Environmental Issues' },
                        { id: 'bins', label: 'Smart Bins Program' },
                        { id: 'other', label: 'Other Information' },
                      ].map((option) => (
                        <div key={option.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={option.id}
                            name="interests"
                            value={option.id}
                            checked={formData.interests.includes(option.id)}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-eco-green-dark border-eco-gray rounded focus:ring-eco-green-dark/30"
                          />
                          <label htmlFor={option.id} className="ml-2 text-sm text-eco-gray-dark">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <CustomButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Send className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    Send Message
                  </CustomButton>
                  
                  <p className="text-sm text-eco-gray-dark text-center mt-4">
                    By submitting this form, you agree to our <a href="#" className="text-eco-green-dark hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="py-16 bg-eco-gray-light">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Find Us</h2>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-elevated">
              {/* Replace with actual map embed in production */}
              <div className="absolute inset-0 bg-eco-gray-light">
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-eco-gray-dark">
                    Map placeholder - In a real application, an interactive map would be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Volunteer Call to Action */}
        <section className="py-16 bg-eco-green-dark text-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join our volunteer network and be a part of the environmental solution in Kosovo.
              Every action counts, no matter how small.
            </p>
            <CustomButton
              variant="subtle"
              size="lg"
              className="bg-white text-eco-green-dark hover:bg-opacity-90"
            >
              Sign Up as a Volunteer
            </CustomButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
