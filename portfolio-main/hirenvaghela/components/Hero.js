import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { useClientOnly } from "@/hooks/useClientOnly";

export default function Hero() {
  const hasMounted = useClientOnly();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent-200 dark:bg-accent-800 rounded-full opacity-30 animate-bounce-slow" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 dark:bg-primary-700 rounded-full opacity-25 animate-pulse-slow" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src="/images/profile.jpg"
                    alt="Hiren Vaghela - AI/ML Engineer"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center text-4xl md:text-5xl font-mono-bold gradient-text" style={{display: 'none'}}>
                    HV
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-mono-bold mb-6"
          >
            <span className="gradient-text">Hiren Vaghela</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
          >
            <span className="font-mono-medium">AI/ML Engineer</span>
            <span className="mx-4 text-primary-500">•</span>
            <span className="font-mono-medium">Data Scientist</span>
            <span className="mx-4 text-primary-500">•</span>
            <span className="font-mono-medium">Software Developer</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about applying deep learning and machine learning techniques to solve real-world problems. 
            Building scalable solutions and exploring the intersection of AI and entrepreneurship.
          </motion.p>

          {/* Fun Fact */}
          <motion.div
            variants={itemVariants}
            className="mb-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 max-w-md mx-auto"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              💡 Fun fact: I once trained a model to detect numbers written in front of a camera in real-time!
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Explore My Work</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <FaDownload size={16} />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/hiren-2911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/hirenvaghela/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {hasMounted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
