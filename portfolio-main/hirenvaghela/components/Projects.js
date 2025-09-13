import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaEye,
  FaCode,
  FaBrain,
  FaMobile,
  FaServer
} from "react-icons/fa";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Number Detection using Color Segmentation",
      description: "Real-time number detection system using computer vision and color segmentation techniques. Detects numbers written in front of a camera with high accuracy.",
      image: "/images/projects/number-detection.jpg",
      technologies: ["Python", "OpenCV", "Computer Vision", "Color Segmentation"],
      category: "ai-ml",
      github: "https://github.com/hiren-2911/Number_detection_using_color_segmentation",
      demo: "#",
      featured: true,
      icon: FaBrain,
      status: "completed"
    },
    {
      id: 2,
      title: "Image Super Resolution of Wireless Capsule Endoscopy Images",
      description: "Advanced super-resolution techniques for enhancing wireless capsule endoscopy images using deep learning and medical image processing.",
      image: "/images/projects/super-resolution.jpg",
      technologies: ["Python", "PyTorch", "Deep Learning", "Medical Imaging", "Super Resolution"],
      category: "ai-ml",
      github: "#",
      demo: "#",
      featured: true,
      icon: FaBrain,
      status: "completed"
    },
    {
      id: 3,
      title: "Computer Vision based Column Detector for Tables",
      description: "Intelligent table structure analysis system that detects and identifies columns in documents using computer vision and machine learning techniques.",
      image: "/images/projects/column-detector.jpg",
      technologies: ["Python", "OpenCV", "Computer Vision", "Document Analysis", "Table Detection"],
      category: "ai-ml",
      github: "#",
      demo: "#",
      featured: true,
      icon: FaBrain,
      status: "completed"
    },
    {
      id: 4,
      title: "Vision Vault for KYC Document Processing",
      description: "Automated KYC document processing system using computer vision and OCR technologies for identity verification and document validation.",
      image: "/images/projects/vision-vault.jpg",
      technologies: ["Python", "OpenCV", "OCR", "Document Processing", "KYC", "Computer Vision"],
      category: "ai-ml",
      github: "#",
      demo: "#",
      featured: true,
      icon: FaBrain,
      status: "completed"
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

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white via-indigo-50/30 to-rose-50/30 dark:from-slate-900 dark:via-indigo-900/20 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200/20 dark:bg-indigo-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-rose-200/20 dark:bg-rose-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-100 to-rose-100 dark:from-indigo-900/30 dark:to-rose-900/30 rounded-full mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <FaCode className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-indigo-600 via-rose-600 to-amber-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              
            </motion.p>
          </motion.div>



          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50"
              >
                {/* Project Header with Icon */}
                <div className="relative h-40 bg-gradient-to-br from-slate-50 via-neutral-50 to-slate-100 dark:from-slate-800 dark:via-neutral-800/20 dark:to-slate-700/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-accent-500/10 dark:from-slate-400/10 dark:to-accent-400/10" />
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" />
                  </div>
                  
                  <motion.div 
                    className="relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <project.icon className="w-16 h-16 text-slate-600 dark:text-slate-400" />
                  </motion.div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <motion.span 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
                      {project.status}
                    </motion.span>
                  </div>
                  
                  {/* Floating Action Buttons */}
                  <motion.div 
                    className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ y: -10 }}
                    whileHover={{ y: 0 }}
                  >
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm"
                      aria-label="View GitHub Repository"
                    >
                      <FaGithub size={16} className="text-gray-700 dark:text-gray-300" />
                    </motion.a>
                    {project.demo && project.demo !== "#" && (
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm"
                        aria-label="View Live Demo"
                      >
                        <FaExternalLinkAlt size={16} className="text-gray-700 dark:text-gray-300" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                        <motion.h3 
                          className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-rose-50 dark:from-indigo-900/30 dark:to-rose-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full border border-indigo-200 dark:border-indigo-700 hover:scale-105 transition-transform duration-200"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <motion.div 
                        className="w-2 h-2 bg-emerald-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span>AI/ML Project</span>
                    </div>
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
                      >
                        <FaGithub size={14} />
                        <span>Code</span>
                      </motion.a>
                      {project.demo && project.demo !== "#" && (
                        <motion.a
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-rose-600 text-white rounded-lg hover:from-indigo-700 hover:to-rose-700 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
                        >
                          <FaExternalLinkAlt size={14} />
                          <span>Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/hiren-2911"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-rose-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaGithub size={20} />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
