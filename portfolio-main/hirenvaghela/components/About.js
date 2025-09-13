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
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A passionate Data Scientist and Software Engineer with a love for AI/ML and building impactful solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {bio.introduction}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {bio.experience}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {bio.entrepreneurship}
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {achievements.map((achievement, index) => {
                  const IconComponent = iconMap[achievement.icon];
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      {IconComponent && <IconComponent className={`w-8 h-8 ${achievement.color} mb-2`} />}
                      <h4 className="font-mono-medium text-gray-900 dark:text-gray-100">{achievement.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-mono-bold text-gray-900 dark:text-gray-100 mb-6">
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        {IconComponent && <IconComponent className={`w-6 h-6 ${skill.color}`} />}
                        <span className="font-mono-medium text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500`}
                        />
                      </div>
                      <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {skill.level}%
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
