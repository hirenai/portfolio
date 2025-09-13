import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaHeart,
  FaArrowUp,
  FaCode,
  FaRocket
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Reeds", href: "#reeds" },
    { name: "Paw World", href: "#paw-world" }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/hiren-2911",
      icon: FaGithub,
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hirenvaghela/",
      icon: FaLinkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      href: "mailto:hiren@Puzle",
      icon: FaEnvelope,
      color: "hover:text-red-500"
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-mono-bold gradient-text mb-4">
                  Hiren Vaghela
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  AI/ML Engineer, Data Scientist, and Founder of Puzle. 
                  Passionate about building intelligent solutions that make a difference.
                </p>
                <div className="flex items-center space-x-2 text-gray-400">
                  <FaCode className="w-4 h-4" />
                  <span className="text-sm">Built with Next.js, React, and Tailwind CSS</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg font-mono-bold mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 font-mono-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact & Social */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-mono-bold mb-4">Connect</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="w-4 h-4 text-gray-400" />
                    <a
                      href="mailto:hiren@Puzle"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      hiren@Puzle
                    </a>
                  </div>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} transition-colors duration-200`}
                        aria-label={social.name}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 text-gray-400 text-sm"
            >
              <span>© {currentYear} Hiren Vaghela. Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of coffee ☕</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-6"
            >
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                aria-label="Back to top"
              >
                <FaArrowUp size={14} />
                <span>Back to top</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Fun Footer Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center py-8 border-t border-gray-800"
        >
          <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
            <FaRocket className="w-4 h-4" />
            <span>Building the future, one line of code at a time</span>
            <FaRocket className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
