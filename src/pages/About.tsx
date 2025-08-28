import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Zap, Eye, Target, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Speed with Quality',
      description: 'We deliver fast without compromising on quality. Clean code, optimal performance, and rapid iteration are at the core of everything we do.'
    },
    {
      icon: Eye,
      title: 'Clarity',
      description: 'Clear communication, transparent processes, and straightforward solutions. No technical jargon, no hidden complexities - just honest work.'
    },
    {
      icon: Target,
      title: 'Performance',
      description: 'Every line of code is written with performance in mind. We build solutions that scale, load fast, and deliver exceptional user experiences.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24h', label: 'Average Response Time' },
    { number: '3+', label: 'Years Experience' }
  ];

  const teamMembers = [
    {
      name: 'Development Team',
      role: 'Full-Stack Engineers',
      description: 'Experienced developers specializing in modern web technologies, mobile development, and data science.',
      skills: ['React/Next.js', 'React Native', 'Node.js', 'Python', 'TypeScript', 'Cloud Architecture']
    },
    {
      name: 'Design Team',
      role: 'UI/UX Specialists',
      description: 'Creative professionals focused on user-centered design and creating beautiful, functional interfaces.',
      skills: ['User Research', 'Prototyping', 'Visual Design', 'Design Systems', 'Usability Testing', 'Branding']
    }
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Foundation',
      description: 'Started as a solo freelancer with a vision to deliver exceptional digital solutions.'
    },
    {
      year: '2022',
      title: 'Growth',
      description: 'Expanded services to include mobile development and data science consulting.'
    },
    {
      year: '2023',
      title: 'Team Building',
      description: 'Assembled a small but mighty team of specialized developers and designers.'
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'Focused on cutting-edge technologies and building scalable solutions for growing businesses.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Meet the InoBux Team | Professional Development Services</title>
        <meta name="description" content="Learn about InoBux Freelance - a small, fast team of engineers and designers focused on real outcomes. We marry clean engineering with crisp design to deliver exceptional results." />
        <meta name="keywords" content="about inobux, development team, freelance developers, web development company, mobile app developers, data science team" />
        <link rel="canonical" href="https://inobux.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About InoBux Freelance",
            "description": "Learn about our team of professional developers and designers",
            "url": "https://inobux.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "InoBux Freelance",
              "description": "Professional development services specializing in web, mobile, and data solutions"
            }
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
              <span className="gradient-text">Engineers</span> who ship.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              We're a small, fast team focused on <span className="text-primary font-semibold">real outcomes</span>. 
              We marry clean engineering with crisp design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from code architecture to client communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-glow text-center group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow mx-auto mb-6 group-hover:animate-glow">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-poppins font-semibold mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse group of specialists working together to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-glow"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {member.description}
                </p>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to a trusted development partner.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8 mb-12 md:mb-16"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-16 h-16 bg-gradient-primary rounded-2xl items-center justify-center shadow-glow flex-shrink-0 relative z-10">
                    <span className="text-primary-foreground font-bold text-lg">{item.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card-glow">
                    <div className="md:hidden mb-4">
                      <span className="inline-block px-4 py-2 bg-gradient-primary text-primary-foreground rounded-xl font-bold text-lg shadow-glow">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-poppins font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with clean code, 
              exceptional design, and reliable delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-white text-primary font-semibold rounded-2xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-long">
                Start a Conversation
              </a>
              <a href="/portfolio" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300">
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;