import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Next.js SEO Playbook for 2025',
      excerpt: 'Complete guide to optimizing your Next.js applications for search engines with the latest best practices and techniques.',
      content: 'Learn everything you need to know about implementing SEO in Next.js applications, from meta tags to structured data.',
      readTime: '8 min read',
      publishDate: '2024-12-15',
      tags: ['Next.js', 'SEO', 'Web Development'],
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Long-Shadow UI Design Trends',
      excerpt: 'Exploring the comeback of long shadows in modern interface design and how to implement them effectively.',
      content: 'Discover how long shadows are making a comeback in UI design and learn practical implementation techniques.',
      readTime: '5 min read',
      publishDate: '2024-12-12',
      tags: ['Design', 'UI/UX', 'Trends'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
      featured: true
    },
    {
      id: 3,
      title: 'React Native Production Lessons',
      excerpt: 'Key insights from deploying React Native apps to millions of users and the challenges we overcame.',
      content: 'Real-world lessons learned from scaling React Native applications in production environments.',
      readTime: '12 min read',
      publishDate: '2024-12-10',
      tags: ['React Native', 'Mobile', 'Production'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true
    },
    {
      id: 4,
      title: 'Android App Performance Quick Wins',
      excerpt: 'Simple yet effective techniques to dramatically improve your Android app performance and user experience.',
      content: 'Practical tips and techniques for optimizing Android application performance.',
      readTime: '6 min read',
      publishDate: '2024-12-08',
      tags: ['Android', 'Performance', 'Mobile'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: false
    },
    {
      id: 5,
      title: 'Data Pipelines 101 for Startups',
      excerpt: 'Building efficient data pipelines without breaking the bank - a startup-friendly approach to data engineering.',
      content: 'Learn how to build cost-effective data pipelines that scale with your startup growth.',
      readTime: '10 min read',
      publishDate: '2024-12-05',
      tags: ['Data Science', 'Startups', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'UX Heuristics You Can Apply Tomorrow',
      excerpt: 'Practical UX principles that you can implement immediately to improve your product\'s user experience.',
      content: 'Actionable UX heuristics that can be applied to any digital product for immediate improvements.',
      readTime: '7 min read',
      publishDate: '2024-12-03',
      tags: ['UX', 'Design', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
      featured: false
    },
    {
      id: 7,
      title: 'Core Web Vitals Checklist',
      excerpt: 'Essential checklist for optimizing your website\'s Core Web Vitals and improving search rankings.',
      content: 'Complete guide to understanding and optimizing Core Web Vitals for better SEO performance.',
      readTime: '9 min read',
      publishDate: '2024-12-01',
      tags: ['SEO', 'Performance', 'Web Development'],
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      featured: false
    },
    {
      id: 8,
      title: 'Choosing SSR, SSG, or ISR in Next.js',
      excerpt: 'Comprehensive guide to understanding when to use Server-Side Rendering, Static Generation, or Incremental Static Regeneration.',
      content: 'Deep dive into Next.js rendering strategies and how to choose the right one for your use case.',
      readTime: '11 min read',
      publishDate: '2024-11-28',
      tags: ['Next.js', 'Architecture', 'Performance'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      featured: false
    },
    {
      id: 9,
      title: 'Design Systems for Small Teams',
      excerpt: 'How to create and maintain effective design systems when you have limited resources and team members.',
      content: 'Practical approach to building scalable design systems with small development teams.',
      readTime: '8 min read',
      publishDate: '2024-11-25',
      tags: ['Design Systems', 'Team Management', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
      featured: false
    },
    {
      id: 10,
      title: 'Freelance Project Scoping Template',
      excerpt: 'Ready-to-use template for scoping freelance projects effectively and avoiding scope creep.',
      content: 'Complete template and methodology for scoping freelance development projects successfully.',
      readTime: '6 min read',
      publishDate: '2024-11-22',
      tags: ['Freelancing', 'Business', 'Project Management'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: false
    }
  ];

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Development Insights & Tutorials | InoBux Freelance</title>
        <meta name="description" content="Stay updated with the latest web development, mobile app development, and data science trends. Expert insights, tutorials, and best practices from our development team." />
        <meta name="keywords" content="web development blog, mobile development tutorials, data science insights, programming best practices, tech articles" />
        <link rel="canonical" href="https://inobux.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "InoBux Development Blog",
            "description": "Expert insights and tutorials on web development, mobile apps, and data science",
            "url": "https://inobux.com/blog",
            "author": {
              "@type": "Organization",
              "name": "InoBux Freelance"
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
              Development <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert insights, tutorials, and best practices in web development, 
              mobile applications, and data science.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 bg-background-secondary border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Featured <span className="gradient-text">Articles</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-glow group"
              >
                <div className="aspect-video overflow-hidden rounded-xl mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <span>•</span>
                  <span>{formatDate(post.publishDate)}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-poppins font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <button className="text-primary font-medium hover:text-primary-glow transition-colors duration-300">
                    Read More
                  </button>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Tags Filter */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Filter by Topic:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-glow">
                All Articles
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 bg-background-tertiary text-muted-foreground rounded-full text-sm font-medium hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              All <span className="gradient-text">Articles</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index % 6) * 0.1 }}
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

                <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <span>•</span>
                  <span>{formatDate(post.publishDate)}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-poppins font-semibold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <button className="text-primary font-medium text-sm hover:text-primary-glow transition-colors duration-300">
                    Read Article
                  </button>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-foreground mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new articles about development, design, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
              />
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-long">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;