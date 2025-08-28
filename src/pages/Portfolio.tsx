import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Nearbux.com',
      description: 'A Next.js-powered website focused on SEO-first development with lightning-fast search functionality and exceptional user experience.',
      longDescription: 'Nearbux.com showcases modern web development best practices with server-side rendering, optimized search functionality, and comprehensive SEO implementation. Built with performance and scalability in mind.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'SEO'],
      category: 'Web Development',
      highlights: [
        '98+ PageSpeed Insights Score',
        'SEO-first architecture',
        'Lightning-fast search',
        'Responsive design',
        'Modern UI/UX'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'EnzoCoolCalc',
      description: 'A feature-rich React Native calculator app with advanced mathematical functions, clean UI, and cross-platform compatibility.',
      longDescription: 'EnzoCoolCalc demonstrates the power of React Native in creating sophisticated mobile applications. Features advanced calculations, history tracking, and a beautiful user interface that works seamlessly on both iOS and Android.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['React Native', 'Expo', 'Redux', 'TypeScript', 'AsyncStorage'],
      category: 'Mobile Development',
      highlights: [
        'Cross-platform compatibility',
        'Advanced mathematical functions',
        'Calculation history',
        'Intuitive user interface',
        'Offline functionality'
      ],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Data Science', 'UI/UX Design'];

  return (
    <>
      <Helmet>
        <title>Portfolio - Our Best Work | InoBux Freelance</title>
        <meta name="description" content="Explore our portfolio of successful web development, mobile app development, and data science projects. Real solutions for real clients with proven results." />
        <meta name="keywords" content="portfolio, web development projects, mobile app portfolio, react native apps, data science projects, client work examples" />
        <link rel="canonical" href="https://inobux.com/portfolio" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "InoBux Portfolio",
            "description": "Portfolio of successful development projects",
            "url": "https://inobux.com/portfolio"
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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the projects that showcase our expertise in web development, 
              mobile applications, and data-driven solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-primary text-primary-foreground shadow-glow' 
                    : 'bg-background-tertiary text-muted-foreground hover:text-primary hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-glow group"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden rounded-xl mb-6 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                        <ExternalLink size={20} />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                        <Github size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      {project.category}
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform duration-300" />
                  </div>

                  <h3 className="text-2xl font-poppins font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {project.description}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {project.longDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-background-tertiary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <button className="flex-1 btn-outline-cyan">
                      View Details
                    </button>
                    <button className="p-3 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/10 transition-all duration-300">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects Coming Soon */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              More <span className="gradient-text">Projects Coming Soon</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We're constantly working on exciting new projects. Stay tuned for more 
              innovative solutions and case studies.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 max-w-md mx-auto">
              <p className="text-primary font-medium mb-4">🚀 Currently in development:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• E-commerce platform with AI recommendations</li>
                <li>• Real-time data analytics dashboard</li>
                <li>• Cross-platform fitness tracking app</li>
              </ul>
            </div>
          </motion.div>
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
              Let's Create Your <span className="gradient-text">Success Story</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to see your project featured in our portfolio? Let's discuss how we can 
              bring your vision to life with cutting-edge technology and exceptional design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-hero">
                Start Your Project
              </a>
              <a href="/services" className="btn-outline-cyan">
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;