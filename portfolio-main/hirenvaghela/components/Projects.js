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
      icon: FaBrain
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
      icon: FaBrain
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
      icon: FaBrain
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
      icon: FaBrain
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
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
              <FaCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A curated collection of AI/ML and computer vision projects showcasing innovative solutions and technical expertise
            </p>
          </motion.div>


          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Project Header with Icon */}
                <div className="relative h-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-purple-900/20 dark:to-pink-900/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10" />
                  <div className="relative z-10">
                    <project.icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                      aria-label="View GitHub Repository"
                    >
                      <FaGithub size={16} className="text-gray-700 dark:text-gray-300" />
                    </motion.a>
                    {project.demo && project.demo !== "#" && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                        aria-label="View Live Demo"
                      >
                        <FaExternalLinkAlt size={16} className="text-gray-700 dark:text-gray-300" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>AI/ML Project</span>
                    </div>
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                      >
                        <FaGithub size={14} />
                        <span>Code</span>
                      </motion.a>
                      {project.demo && project.demo !== "#" && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
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
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
