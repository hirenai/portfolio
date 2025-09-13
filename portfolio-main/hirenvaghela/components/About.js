import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getBio, getSkills, getAchievements } from '../utils/portfolioData';
import { 
  FaPython, 
  FaDocker, 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaGitAlt,
  FaBrain,
  FaCode,
  FaRocket,
  FaGraduationCap
} from "react-icons/fa";
import { 
  SiTensorflow, 
  SiPytorch, 
  SiFastapi, 
  SiMongodb, 
  SiPostgresql,
  SiKubernetes,
  SiJupyter
} from "react-icons/si";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bio = getBio();
  const skills = getSkills();
  const achievements = getAchievements();

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

  // Icon mapping for dynamic icon loading
  const iconMap = {
    FaPython, FaDocker, FaReact, FaNodeJs, FaAws, FaGitAlt,
    FaBrain, FaCode, FaRocket, FaGraduationCap,
    SiTensorflow, SiPytorch, SiFastapi, SiMongodb, SiPostgresql,
    SiKubernetes, SiJupyter
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/20 dark:bg-pink-400/10 rounded-full blur-2xl" />
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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <FaBrain className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-mono-bold mb-4">
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              A passionate Data Scientist and Software Engineer with a love for AI/ML and building impactful solutions
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div 
                className="prose prose-lg dark:prose-invert max-w-none bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {bio.introduction}
                </motion.p>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {bio.experience}
                </motion.p>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  {bio.entrepreneurship}
                </motion.p>
              </motion.div>

              {/* Achievements */}
              <motion.div 
                className="grid grid-cols-2 gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                {achievements.map((achievement, index) => {
                  const IconComponent = iconMap[achievement.icon];
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      className="group p-6 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                    >
                      <motion.div
                        className="flex items-center space-x-3 mb-3"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {IconComponent && (
                          <motion.div
                            className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30"
                            whileHover={{ rotate: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                          </motion.div>
                        )}
                        <h4 className="font-mono-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {achievement.title}
                        </h4>
                      </motion.div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.div
                  className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-2xl font-mono-bold text-gray-900 dark:text-gray-100">
                  Technical Skills
                </h3>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      className="group p-6 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        {IconComponent && (
                          <motion.div
                            className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30"
                            whileHover={{ rotate: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <IconComponent className={`w-6 h-6 ${skill.color}`} />
                          </motion.div>
                        )}
                        <span className="font-mono-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 1.1 + index * 0.1, ease: "easeOut" }}
                          className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1.5 + index * 0.1 }}
                          />
                        </motion.div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                        <motion.div
                          className="text-xs text-blue-600 dark:text-blue-400 font-medium"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 1.3 + index * 0.1 }}
                        >
                          Expert
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
