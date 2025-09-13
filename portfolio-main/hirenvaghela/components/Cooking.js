import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaRocket, 
  FaBrain, 
  FaUsers, 
  FaCode, 
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLightbulb,
  FaCog,
  FaChartLine,
  FaShieldAlt,
  FaMobile,
  FaGlobe
} from "react-icons/fa";

export default function Cooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: FaBrain,
      title: "AI-Powered Solutions",
      description: "Advanced machine learning algorithms that adapt to user behavior and provide personalized puzzle experiences.",
      color: "text-slate-600"
    },
    {
      icon: FaCog,
      title: "Custom Puzzle Generation",
      description: "Generate unique puzzles tailored to specific difficulty levels, topics, and learning objectives.",
      color: "text-accent-600"
    },
    {
      icon: FaChartLine,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics to track user progress, identify patterns, and optimize learning outcomes.",
      color: "text-neutral-600"
    },
    {
      icon: FaShieldAlt,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance with industry standards.",
      color: "text-slate-700"
    },
    {
      icon: FaMobile,
      title: "Cross-Platform",
      description: "Seamless experience across web, mobile, and desktop platforms with real-time synchronization.",
      color: "text-neutral-700"
    },
    {
      icon: FaUsers,
      title: "Collaborative Learning",
      description: "Team-based puzzle solving with real-time collaboration and competitive elements.",
      color: "text-accent-500"
    }
  ];

  const techStack = [
    { name: "Python", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "Redis", category: "Caching" },
    { name: "TensorFlow", category: "AI/ML" }
  ];

  const milestones = [
    {
      date: "Q4 2023",
      title: "Company Founded",
      description: "Started Puzle with a vision to revolutionize puzzle-based learning"
    },
    {
      date: "Q1 2024",
      title: "MVP Development",
      description: "Built and launched the first version of our AI-powered puzzle platform"
    },
    {
      date: "Q2 2024",
      title: "Seed Funding",
      description: "Raised $500K in seed funding to accelerate product development"
    },
    {
      date: "Q3 2024",
      title: "Beta Launch",
      description: "Launched beta version with 1000+ early adopters and 95% satisfaction rate"
    },
    {
      date: "Q4 2024",
      title: "Public Launch",
      description: "Public launch with enterprise features and mobile applications"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", company: "", message: "" });
    alert("Thank you for your interest! We'll get back to you soon.");
  };

  return (
    <section id="cooking" className="section-padding bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-pink-900/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-mono-bold mb-4">
              <span className="gradient-text">Puzle</span> 🧩
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My entrepreneurial journey building an AI-powered puzzle platform that's transforming how people learn and think
            </p>
          </motion.div>

          {/* Company Introduction */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="card p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <FaRocket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-mono-bold text-gray-900 dark:text-gray-100 mb-6">
                    Building the Future of Learning
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Puzle is an innovative platform that combines artificial intelligence with puzzle-based learning 
                    to create engaging, personalized educational experiences. Our mission is to make learning fun, 
                    effective, and accessible to everyone.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://Puzle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Visit Website</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://github.com/puzzles-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center space-x-2"
                    >
                      <FaGithub size={16} />
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/20 dark:to-pink-900/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl font-mono-bold text-white">🧩</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 font-mono-medium">
                        AI-Powered Puzzle Platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8">
                <FaLightbulb className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-mono-bold text-gray-900 dark:text-gray-100 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To democratize learning through intelligent puzzle-based experiences that adapt to each 
                  individual's learning style and pace, making education more engaging and effective.
                </p>
              </div>
              <div className="card p-8">
                <FaGlobe className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-mono-bold text-gray-900 dark:text-gray-100 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  A world where learning is personalized, interactive, and enjoyable for everyone, 
                  regardless of age, background, or learning preferences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-mono-bold text-center text-gray-900 dark:text-gray-100 mb-12">
              Key Features 🚀
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="card p-6 text-center group"
                >
                  <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`} />
                  <h4 className="text-xl font-mono-bold text-gray-900 dark:text-gray-100 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-mono-bold text-center text-gray-900 dark:text-gray-100 mb-12">
              Technology Stack 💻
            </h3>
            <div className="card p-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center group hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    <div className="font-mono-medium text-gray-900 dark:text-gray-100 mb-1">
                      {tech.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {tech.category}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Milestones */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-mono-bold text-center text-gray-900 dark:text-gray-100 mb-12">
              Our Journey 📈
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-pink-500"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="relative flex items-start gap-6"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-mono-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div className="card p-6 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h4 className="text-xl font-mono-bold text-gray-900 dark:text-gray-100">
                          {milestone.title}
                        </h4>
                        <span className="text-primary-600 dark:text-primary-400 font-mono-medium">
                          {milestone.date}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="card p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-mono-bold text-gray-900 dark:text-gray-100 mb-4">
                  Let's Collaborate! 🤝
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Interested in working together or learning more about Puzle? 
                  I'd love to hear from you!
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-mono-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-mono-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-mono-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-mono-bold text-gray-900 dark:text-gray-100 mb-6">
              Connect With Me
            </h3>
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/hiren-2911"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={32} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/hirenvaghela/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:hiren@Puzle"
                className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={32} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
