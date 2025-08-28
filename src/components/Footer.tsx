import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Web Development', path: '/services' },
    { name: 'Android Development', path: '/services' },
    { name: 'React Native Apps', path: '/services' },
    { name: 'Data Science', path: '/services' },
    { name: 'UI/UX Design', path: '/services' },
  ];

  const resources = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-xl">I</span>
              </div>
              <span className="text-xl font-poppins font-bold gradient-text">
                InoBux
              </span>
            </div>
            <p className="text-muted-foreground">
              Professional development services specializing in web, mobile, and data solutions. 
              Engineered for performance.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <Mail size={18} />
              <a 
                href="mailto:info@inobox.com" 
                className="hover:text-primary-glow transition-colors duration-300"
              >
                info@inobox.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-primary">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-primary">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} InoBux Freelance. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Built with ❤️ and cutting-edge technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;