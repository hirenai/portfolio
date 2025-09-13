import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getPersonalInfo } from '../utils/portfolioData';
import { ProfileImage } from './ResizedImage';

export default function SimpleHero() {
  const personalInfo = getPersonalInfo();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="hero-section relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-white dark:bg-black" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-black/20 dark:bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-black/3 dark:bg-white/3 rounded-full blur-2xl"
          style={{
            right: mousePosition.x - 100,
            bottom: mousePosition.y - 100,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="hero-content text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Profile Image */}
          <motion.div className="profile-container" variants={itemVariants}>
            <motion.div 
              className="profile-image relative"
              variants={floatingVariants}
              animate="animate"
            >
              <motion.div 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-black/20 to-black/40 dark:from-white/20 dark:to-white/40 p-1 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-black flex items-center justify-center relative overflow-hidden">
                  <ProfileImage
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - ${personalInfo.title}`}
                    className="w-full h-full rounded-full"
                    maxWidth={160}
                    maxHeight={160}
                  />
                  
                  {/* Animated Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-black/30 dark:border-white/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
              
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <motion.span 
              className="gradient-text"
            >
              {personalInfo.name}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div 
            className="text-xl md:text-2xl text-black/80 dark:text-white/80 mb-4"
            variants={itemVariants}
          >
            {personalInfo.subtitle.split(' • ').map((item, index, array) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <span className="font-medium">{item}</span>
                {index < array.length - 1 && (
                  <motion.span 
                    className="mx-4 text-black/60 dark:text-white/60"
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    •
                  </motion.span>
                )}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {personalInfo.description}
          </motion.p>


          {/* CTA Buttons */}
          <motion.div 
            className="btn-group mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="#about"
              className="group relative bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 text-black dark:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black inline-flex items-center space-x-3 shadow-lg hover:shadow-xl border border-black/20 dark:border-white/20"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore My Work</span>
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
              <div className="absolute inset-0 rounded-xl bg-black/10 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href={personalInfo.resumeUrl}
              download
              className="group relative bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-gray-900 dark:text-gray-100 px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </motion.svg>
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="social-icons"
            variants={itemVariants}
          >
            <motion.a
              href={personalInfo.social?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 group"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 group-hover:bg-white dark:group-hover:bg-gray-800 group-hover:shadow-lg transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </motion.a>
            <motion.a
              href={personalInfo.social?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-all duration-300 group"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 group-hover:bg-white dark:group-hover:bg-gray-800 group-hover:shadow-lg transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </motion.a>
          </motion.div>

          {/* Fun Fact - Moved to top right */}
          <motion.div 
            className="absolute top-8 right-8 max-w-xs p-4 bg-black/10 dark:bg-white/10 rounded-lg backdrop-blur-sm border border-black/20 dark:border-white/20 shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-sm text-black/70 dark:text-white/70 italic">
              {personalInfo.funFact}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
