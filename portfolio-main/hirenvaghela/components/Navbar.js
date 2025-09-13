import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaSun, 
  FaMoon,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { useClientOnly } from "@/hooks/useClientOnly";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const hasMounted = useClientOnly();

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Publications", href: "/#publications" },
    { name: "Reeds", href: "/#reeds" },
    { name: "Paw World", href: "/#paw-world" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (typeof window !== "undefined") {
      if (isDark) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    }
  };

  const scrollToSection = (href) => {
    if (typeof window !== "undefined") {
      if (href.startsWith("/#")) {
        const sectionId = href.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(href);
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar-fixed transition-all duration-300 ${
        scrolled
          ? "shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="text-2xl font-mono-bold gradient-text">
              Hiren
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/hiren-2911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/hirenvaghela/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={20} />
            </motion.a>
            {hasMounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors p-2"
              >
                {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 p-2"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium py-2"
              >
                {item.name}
              </motion.button>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href="https://github.com/hiren-2911"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hirenvaghela/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              {hasMounted && (
                <button
                  onClick={toggleTheme}
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors p-2"
                >
                  {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
