import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { useClientOnly } from "@/hooks/useClientOnly";
import { ProfileImage } from './ResizedImage';
import Snow from './Snow';

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Snow Animation */}
      <Snow />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full opacity-20 animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full opacity-30 animate-bounce-slow" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full opacity-25 animate-pulse-slow" />

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
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-white/20 to-white/40 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <ProfileImage
                    src="/images/profile.jpg"
                    alt="Hiren Vaghela - AI/ML Engineer"
                    className="w-full h-full rounded-full"
                    maxWidth={160}
                    maxHeight={160}
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
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
            className="text-xl md:text-2xl text-white/80 mb-4"
          >
            <span className="font-mono-medium">AI/ML Engineer</span>
            <span className="mx-4 text-white/60">•</span>
            <span className="font-mono-medium">Data Scientist</span>
            <span className="mx-4 text-white/60">•</span>
            <span className="font-mono-medium">Software Developer</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about applying deep learning and machine learning techniques to solve real-world problems. 
            Building scalable solutions and exploring the intersection of AI and entrepreneurship.
          </motion.p>

          {/* Fun Fact */}
          <motion.div
            variants={itemVariants}
            className="mb-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 max-w-md mx-auto"
          >
            <p className="text-sm text-white/80 italic">
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
              className="text-white/60 hover:text-white transition-colors duration-200"
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
              className="text-white/60 hover:text-white transition-colors duration-200"
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
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
