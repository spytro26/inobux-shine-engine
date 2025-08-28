import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Layers, 
  BarChart3, 
  Palette, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
      features: ['Next.js & React', 'SEO Optimized', 'Performance First']
    },
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Native Android apps with clean architecture and smooth UX',
      features: ['Kotlin & Java', 'Material Design', 'Play Store Ready']
    },
    {
      icon: Layers,
      title: 'React Native Apps',
      description: 'Cross-platform mobile solutions for iOS and Android',
      features: ['Single Codebase', 'Native Performance', 'Rapid Development']
    },
    {
      icon: BarChart3,
      title: 'Data Science & Analytics',
      description: 'Transform data into actionable insights and predictive models',
      features: ['Python & R', 'Machine Learning', 'Data Visualization']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that convert and engage',
      features: ['User Research', 'Prototyping', 'Design Systems']
    }
  ];

  const portfolioItems = [
    {
      title: 'Nearbux.com',
      description: 'Next.js website with SEO-first approach and lightning-fast search functionality',
      tech: 'Next.js, TypeScript, Tailwind',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80'
    },
    {
      title: 'EnzoCoolCalc',
      description: 'React Native cross-platform calculator app with advanced mathematical functions',
      tech: 'React Native, Expo, Redux',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const trustFactors = [
    'Fast delivery',
    'Clean code',
    'Scalable architecture',
    'SEO-ready'
  ];

  const blogPosts = [
    {
      title: 'Next.js SEO Playbook for 2025',
      excerpt: 'Complete guide to optimizing your Next.js applications for search engines',
      readTime: '8 min read',
      tags: ['Next.js', 'SEO', 'Web Development'],
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
    },
    {
      title: 'Long-Shadow UI Design Trends',
      excerpt: 'Exploring the comeback of long shadows in modern interface design',
      readTime: '5 min read',
      tags: ['Design', 'UI/UX', 'Trends'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80'
    },
    {
      title: 'React Native Production Lessons',
      excerpt: 'Key insights from deploying React Native apps to millions of users',
      readTime: '12 min read',
      tags: ['React Native', 'Mobile', 'Production'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <>
      <Helmet>
        <title>InoBux Freelance - Web & Android Development | React Native | Data Science</title>
        <meta name="description" content="Professional web development, Android apps, React Native cross-platform solutions, Data Science & Analytics, and UI/UX design. Fast delivery, clean code, scalable architecture." />
        <meta name="keywords" content="web development, android development, react native, data science, analytics, UI UX design, freelance developer" />
        <link rel="canonical" href="https://inobux.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "InoBux Freelance",
            "description": "Professional development services specializing in web, mobile, and data solutions",
            "url": "https://inobux.com",
            "email": "info@inobox.com",
            "sameAs": [],
            "offers": {
              "@type": "Offer",
              "description": "Web Development, Android Development, React Native Apps, Data Science & Analytics, UI/UX Design"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold mb-6">
              <span className="gradient-text text-glow">Build.</span>{' '}
              <span className="gradient-text text-glow">Ship.</span>{' '}
              <span className="gradient-text text-glow">Shine.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto"
          >
            Web & Android dev, React Native apps, Data Science/Analytics, and UI/UX design — 
            <span className="text-primary font-semibold"> engineered for performance</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link to="/contact" className="btn-hero">
              Get a Free Quote
            </Link>
            <Link to="/portfolio" className="btn-outline-cyan">
              See Our Work
            </Link>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground"
          >
            {trustFactors.map((factor, index) => (
              <div key={factor} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">{factor}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver end-to-end solutions with cutting-edge technology and clean architecture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-glow group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:animate-glow">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real projects delivering real results for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-glow group"
              >
                <div className="aspect-video overflow-hidden rounded-xl mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-poppins font-semibold">{item.title}</h3>
                  <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-primary font-medium">{item.tech}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/portfolio" className="btn-outline-cyan">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-foreground mb-6">
              Have a project in mind?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us — we reply within 24 hours.
            </p>
            <a
              href="mailto:info@inobox.com"
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-long"
            >
              <span className="text-2xl">✉️</span>
              <span>info@inobox.com</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
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
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends and best practices in development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-glow group"
              >
                <div className="aspect-video overflow-hidden rounded-xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/blog" className="btn-outline-cyan">
              Read More Articles
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;