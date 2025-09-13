import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getBooks } from '../utils/portfolioData';
import { BookCoverImage } from './ResizedImage';
import { 
  FaStar, 
  FaFilter, 
  FaSearch, 
  FaBookOpen, 
  FaCalendarAlt,
  FaUser,
  FaSortAmountDown,
  FaSortAmountUp
} from "react-icons/fa";

export default function Reeds() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("year");
  const [sortOrder, setSortOrder] = useState("desc");
  const [filterGenre, setFilterGenre] = useState("all");
  const [activeCategory, setActiveCategory] = useState("novels");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const booksData = getBooks();
  const novels = booksData.novels || [];
  const growth = booksData.growth || [];
  const books = activeCategory === "novels" ? novels : growth;

  const genres = ["all", "Fiction", "Romance", "Psychological Thriller", "Mythological Fiction", "Psychology", "Self-Help", "Biography", "Technical"];

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

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = filterGenre === "all" || book.genre === filterGenre;
    return matchesSearch && matchesGenre;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];
    
    if (sortBy === "rating") {
      aValue = a.rating;
      bValue = b.rating;
    }
    
    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reeds" className="section-padding bg-gray-50 dark:bg-gray-800">
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
              My <span className="gradient-text">Reading Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Books that have shaped my thinking, inspired my work, and enriched my life
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setActiveCategory("novels")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeCategory === "novels"
                    ? "bg-primary-500 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary-500"
                }`}
              >
                Novels
              </button>
              <button
                onClick={() => setActiveCategory("growth")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeCategory === "growth"
                    ? "bg-primary-500 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary-500"
                }`}
              >
                Growth
              </button>
            </div>
          </motion.div>

          {/* Search and Filter Controls */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Search ${activeCategory}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* Sort and Filter */}
              <div className="flex gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                  <option value="year">Year</option>
                  <option value="rating">Rating</option>
                  <option value="title">Title</option>
                </select>

                <button
                  onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                  className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  {sortOrder === "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />}
                </button>

                <select
                  value={filterGenre}
                  onChange={(e) => setFilterGenre(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                  {genres.map(genre => (
                    <option key={genre} value={genre}>
                      {genre === "all" ? "All Genres" : genre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedBooks.map((book) => (
              <motion.div
                key={book.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card p-6 hover:shadow-2xl transition-all duration-300"
              >
                {/* Book Cover */}
                <div className="mb-4">
                  <div className="w-full h-64 rounded-lg overflow-hidden relative bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <BookCoverImage
                      src={book.cover}
                      alt={`${book.title} cover`}
                      className="w-full h-full transition-transform duration-300 hover:scale-105"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%'
                      }}
                    />
                  </div>
                </div>

                {/* Book Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-mono-bold text-gray-900 dark:text-gray-100 line-clamp-2">
                    {book.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                    <FaUser className="w-4 h-4" />
                    {book.author}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="w-4 h-4" />
                      {book.year}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                      {book.genre}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {renderStars(book.rating)}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {book.rating}/5
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                    {book.summary}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono-bold text-primary-600 dark:text-primary-400 mb-2">
                  {novels.length + growth.length}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-mono-medium">
                  Total Books
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono-bold text-accent-600 dark:text-accent-400 mb-2">
                  {novels.length}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-mono-medium">
                  Novels
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono-bold text-green-600 dark:text-green-400 mb-2">
                  {growth.length}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-mono-medium">
                  Growth Books
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono-bold text-purple-600 dark:text-purple-400 mb-2">
                  {Math.round((novels.filter(b => b.featured).length + growth.filter(b => b.featured).length) / (novels.length + growth.length) * 100)}%
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-mono-medium">
                  Featured
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}