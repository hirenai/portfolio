import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getPublications, getPortfolioStats } from '../utils/portfolioData';
import { 
  FaFilePdf, 
  FaExternalLinkAlt, 
  FaQuoteLeft,
  FaCalendarAlt,
  FaUsers,
  FaBookOpen,
  FaDownload,
  FaEye
} from "react-icons/fa";

export default function Publications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const publications = getPublications();
  const stats = getPortfolioStats();

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

  const getTypeColor = (type) => {
    switch (type) {
      case "Journal":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
      case "Conference":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "Workshop":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
    }
  };

  return (
    <section id="publications" className="section-padding bg-gray-50 dark:bg-gray-800">
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
              Research <span className="gradient-text">Publications</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My contributions to the scientific community through research papers and publications
            </p>
          </motion.div>

          {/* Publications List */}
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                variants={itemVariants}
                className={`card p-8 hover:shadow-2xl transition-all duration-300 ${
                  publication.featured ? "ring-2 ring-primary-500 dark:ring-primary-400" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Publication Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-mono-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight">
                          {publication.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {publication.authors}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <FaBookOpen size={14} />
                            {publication.journal}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt size={14} />
                            {publication.year}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-mono-medium ${getTypeColor(publication.type)}`}>
                            {publication.type}
                          </span>
                        </div>
                      </div>
                      
                      {/* Citation Count */}
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                        <FaUsers size={16} />
                        <span className="font-mono-medium">{publication.citations} citations</span>
                      </div>
                    </div>

                    {/* Abstract */}
                    <div className="mb-6">
                      <h4 className="font-mono-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                        <FaQuoteLeft size={14} />
                        Abstract
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {publication.abstract}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {publication.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-mono-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* DOI */}
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <strong>DOI:</strong> {publication.doi}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={publication.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center space-x-2"
                      >
                        <FaExternalLinkAlt size={16} />
                        <span>View on Google Scholar</span>
                      </motion.a>
                      
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://scholar.google.com/citations?user=5QvrkCEAAAAJ&hl=en&authuser=1`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center space-x-2"
                      >
                        <FaEye size={16} />
                        <span>View All Publications</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stats.totalPublications}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-mono-medium">
                  Publications
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono-bold text-accent-600 dark:text-accent-400 mb-2">
                  {stats.totalCitations}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-mono-medium">
                  Total Citations
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono-bold text-green-600 dark:text-green-400 mb-2">
                  {stats.hIndex}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-mono-medium">
                  h-index
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono-bold text-purple-600 dark:text-purple-400 mb-2">
                  {publications.filter(pub => pub.type === "Conference").length}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-mono-medium">
                  Conference Papers
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
