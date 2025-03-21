
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/CustomButton";
import { Leaf, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Set page title
    document.title = "Page Not Found | EcoVoice Kosova";
  }, [location.pathname]);

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Leaf className="w-16 h-16 mx-auto text-eco-green-dark mb-4 opacity-50" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">404</h1>
          <p className="text-2xl text-eco-gray-dark mb-8">Oops! We couldn't find that page</p>
          <p className="text-lg text-eco-gray-dark mb-10 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track to protect Kosovo's environment.
          </p>
          
          <Link to="/">
            <CustomButton
              variant="primary"
              size="lg"
              icon={<Home className="w-5 h-5" />}
              iconPosition="left"
            >
              Return to Homepage
            </CustomButton>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
