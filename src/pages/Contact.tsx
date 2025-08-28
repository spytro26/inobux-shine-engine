import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MessageCircle, Clock, CheckCircle, HelpCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (frontend only as requested)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  const faqs = [
    {
      question: 'Do you work with startups?',
      answer: 'Yes! We love working with startups and understand the unique challenges they face. We offer flexible pricing and can adapt to rapid changes and tight deadlines.'
    },
    {
      question: 'Do you have testimonials?',
      answer: 'Not yet - we\'re still building our public testimonial collection. However, we\'re happy to provide references from recent clients upon request.'
    },
    {
      question: 'What\'s your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most web projects take 2-8 weeks, mobile apps 4-12 weeks, and data science projects 3-10 weeks.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Absolutely! We offer maintenance packages and ongoing support to ensure your project continues to perform optimally after launch.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Yes, we\'re experienced in collaborating with in-house teams and can integrate seamlessly into your existing workflows and processes.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in React/Next.js, React Native, Node.js, Python, TypeScript, and modern cloud platforms like Vercel, Netlify, and AWS.'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Android Development',
    'React Native App',
    'Data Science/Analytics',
    'UI/UX Design',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    '$50,000+',
    'Let\'s discuss'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Start Your Project Today | InoBux Freelance</title>
        <meta name="description" content="Ready to start your project? Contact InoBux Freelance for professional web development, mobile apps, and data science solutions. Quick response within 24 hours." />
        <meta name="keywords" content="contact inobux, hire developers, web development quote, mobile app development contact, freelance developers contact" />
        <link rel="canonical" href="https://inobux.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact InoBux Freelance",
            "description": "Get in touch with our development team",
            "url": "https://inobux.com/contact",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@inobox.com",
              "contactType": "customer service"
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
              Let's build something <span className="gradient-text text-glow">bold</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Ready to turn your idea into reality? Get in touch and let's create something amazing together.
            </p>

            {/* Big Email CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <a
                href="mailto:info@inobox.com"
                className="inline-flex items-center space-x-4 bg-gradient-primary text-primary-foreground px-12 py-6 rounded-3xl font-bold text-2xl md:text-3xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-long animate-glow"
              >
                <Mail className="w-8 h-8" />
                <span>info@inobox.com</span>
              </a>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-8 text-muted-foreground"
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Response within 24 hours</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>Free consultation included</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8">
                Tell us about your <span className="gradient-text">project</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-hero"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours. For urgent inquiries, 
                  email us directly at <a href="mailto:info@inobox.com" className="text-primary hover:text-primary-glow">info@inobox.com</a>
                </p>
              </form>
            </motion.div>

            {/* Contact Info & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="card-glow">
                <h3 className="text-2xl font-poppins font-semibold mb-6">Why choose InoBux?</h3>
                <div className="space-y-4">
                  {[
                    'Fast delivery without compromising quality',
                    'Clean, maintainable code architecture',
                    'Transparent communication throughout',
                    'Scalable solutions that grow with you',
                    'SEO-optimized and performance-focused',
                    '24/7 support during development'
                  ].map((benefit, index) => (
                    <div key={benefit} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-glow">
                <h3 className="text-2xl font-poppins font-semibold mb-6">What happens next?</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Quick Response</h4>
                      <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours to discuss your project</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">We'll schedule a call to understand your requirements in detail</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Proposal & Timeline</h4>
                      <p className="text-sm text-muted-foreground">You'll receive a detailed proposal with timeline and pricing</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-glow"
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <h3 className="font-poppins font-semibold text-lg">{faq.question}</h3>
                  </div>
                  <p className="text-muted-foreground ml-9">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;