import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found - InoBux Freelance</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to InoBux Freelance homepage to explore our professional development services." />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-8xl md:text-9xl font-poppins font-bold gradient-text text-glow mb-6">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Oops! The page you're looking for seems to have wandered off into the digital void. 
              Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/" className="btn-hero flex items-center space-x-3">
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </Link>
              <button 
                onClick={() => window.history.back()} 
                className="btn-outline-cyan flex items-center space-x-3"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 card-glow max-w-md mx-auto"
            >
              <h3 className="text-lg font-semibold text-primary mb-3">Looking for something specific?</h3>
              <div className="space-y-2 text-sm">
                <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  → Explore Our Services
                </Link>
                <Link to="/portfolio" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  → View Our Portfolio
                </Link>
                <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  → Read Our Blog
                </Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  → Get In Touch
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
