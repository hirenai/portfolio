import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getWorkExperience } from '../utils/portfolioData';
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaCode,
  FaTrophy,
  FaBuilding,
  FaFilter,
  FaSortAmountDown,
  FaSortAmountUp
} from "react-icons/fa";

export default function WorkExperience() {
  const [sortBy, setSortBy] = useState("duration");
  const [sortOrder, setSortOrder] = useState("desc");
  const [filterType, setFilterType] = useState("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workExperience = getWorkExperience();
  const types = ["all", "Full-time", "Internship", "Contract", "Freelance"];

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

  const filteredExperience = workExperience.filter(exp => {
    const matchesType = filterType === "all" || exp.type === filterType;
    return matchesType;
  });

  const sortedExperience = [...filteredExperience].sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case "duration":
        // Sort by start year for better chronological ordering
        aValue = parseInt(a.duration.split(" - ")[0].split(" ").pop());
        bValue = parseInt(b.duration.split(" - ")[0].split(" ").pop());
        break;
      case "company":
        aValue = a.company.toLowerCase();
        bValue = b.company.toLowerCase();
        break;
      case "position":
        aValue = a.position.toLowerCase();
        bValue = b.position.toLowerCase();
        break;
      default:
        aValue = a.id;
        bValue = b.id;
    }
    
    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const getTypeColor = (type) => {
    switch (type) {
      case "Full-time":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
      case "Internship":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "Contract":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200";
      case "Freelance":
        return "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-4">
              <FaBriefcase className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-mono-bold text-gray-900 dark:text-gray-100 mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey in AI/ML engineering, from internships to senior roles
            </p>
          </motion.div>
        </motion.div>

        {/* Filters and Sorting */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {/* Type Filter */}
          <div className="flex items-center gap-2">
            <FaFilter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type === "all" ? "All Types" : type}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="duration">Sort by Duration</option>
              <option value="company">Sort by Company</option>
              <option value="position">Sort by Position</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {sortOrder === "asc" ? <FaSortAmountUp className="w-4 h-4" /> : <FaSortAmountDown className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          className="space-y-8"
        >
          {sortedExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`card p-8 hover:shadow-2xl transition-all duration-300 ${
                exp.featured ? "ring-2 ring-primary-500 dark:ring-primary-400" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Logo/Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-lg flex items-center justify-center">
                    <FaBuilding className="w-8 h-8 text-primary-500 dark:text-primary-400" />
                  </div>
                </div>

                {/* Experience Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-mono-bold text-gray-900 dark:text-gray-100 mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt size={14} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt size={14} />
                          {exp.duration}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-mono-medium ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                        {exp.featured && (
                          <span className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                            <FaTrophy size={14} />
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-mono-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                      <FaTrophy className="w-5 h-5 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-mono-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                      <FaCode className="w-5 h-5 text-primary-500" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-mono-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
