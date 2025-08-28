import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Layers, 
  BarChart3, 
  Palette,
  CheckCircle,
  Code,
  Zap,
  Shield,
  Rocket
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Build modern, responsive websites and web applications that deliver exceptional user experiences and drive business growth.',
      features: [
        'Next.js & React Development',
        'Server-Side Rendering (SSR)',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'API Integration & Development',
        'Performance Optimization',
        'SEO Implementation',
        'Responsive Design'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80'
    },
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Create powerful, user-friendly Android applications with clean architecture and exceptional performance.',
      features: [
        'Native Android Apps',
        'Material Design Implementation',
        'Clean Architecture (MVVM)',
        'Offline-First Design',
        'Push Notifications',
        'In-App Purchases',
        'Play Store Optimization',
        'Performance Monitoring'
      ],
      technologies: ['Kotlin', 'Java', 'Android Studio', 'Jetpack Compose', 'Room Database', 'Retrofit'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: Layers,
      title: 'React Native Cross-Platform Apps',
      description: 'Develop high-quality mobile applications for both iOS and Android platforms with a single codebase.',
      features: [
        'Cross-Platform Development',
        'Native Performance',
        'Code Reusability (90%+)',
        'Hot Reloading',
        'Third-Party Integrations',
        'App Store Deployment',
        'Continuous Integration',
        'Maintenance & Updates'
      ],
      technologies: ['React Native', 'Expo', 'Redux', 'React Navigation', 'AsyncStorage', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: BarChart3,
      title: 'Data Science & Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics, machine learning, and data visualization.',
      features: [
        'Data Analysis & Modeling',
        'Machine Learning Solutions',
        'Predictive Analytics',
        'Data Visualization',
        'Business Intelligence',
        'ETL Pipeline Development',
        'Real-time Analytics',
        'Custom Dashboards'
      ],
      technologies: ['Python', 'R', 'Pandas', 'TensorFlow', 'Tableau', 'Power BI', 'SQL', 'Apache Spark'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create beautiful, intuitive user interfaces and experiences that delight users and drive conversions.',
      features: [
        'User Experience Research',
        'Information Architecture',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems',
        'Usability Testing',
        'Accessibility Design',
        'Brand Integration'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80'
    }
  ];

  const processSteps = [
    {
      icon: Code,
      title: 'Discovery & Planning',
      description: 'We start by understanding your goals, requirements, and target audience to create a detailed project roadmap.'
    },
    {
      icon: Zap,
      title: 'Design & Development',
      description: 'Our team creates intuitive designs and develops robust solutions using industry best practices and cutting-edge technologies.'
    },
    {
      icon: Shield,
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing ensures your product is bug-free, secure, and performs optimally across all platforms.'
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We handle deployment and provide ongoing support to ensure your project continues to succeed post-launch.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Development Services | InoBux Freelance</title>
        <meta name="description" content="Expert web development, Android apps, React Native cross-platform solutions, Data Science & Analytics, and UI/UX design services. Professional team delivering scalable solutions." />
        <meta name="keywords" content="web development services, android app development, react native development, data science consulting, UI UX design services, professional development team" />
        <link rel="canonical" href="https://inobux.com/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "provider": {
              "@type": "Organization",
              "name": "InoBux Freelance"
            },
            "serviceType": "Software Development Services",
            "description": "Professional web development, mobile app development, data science, and UI/UX design services",
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark relative overflow-hidden">
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
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              Professional <span className="gradient-text">Development Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We deliver end-to-end solutions with cutting-edge technology, clean architecture, and exceptional user experiences.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 max-w-md mx-auto">
              <p className="text-primary font-medium">📝 Testimonials coming soon...</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-poppins font-bold">
                    {service.title}
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-glow max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. 
              Get in touch for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-hero">
                Get Free Consultation
              </a>
              <a href="mailto:info@inobox.com" className="btn-outline-cyan">
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;