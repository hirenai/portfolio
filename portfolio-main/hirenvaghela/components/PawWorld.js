import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaPaw, 
  FaBirthdayCake, 
  FaGamepad, 
  FaCamera,
  FaPlay,
  FaPause
} from "react-icons/fa";
import { useClientOnly } from "@/hooks/useClientOnly";

export default function PawWorld() {
  const [isPlaying, setIsPlaying] = useState(false);
  const hasMounted = useClientOnly();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const catStats = [
    { label: "Age", value: "6 Months", icon: FaBirthdayCake, color: "text-pink-500" },
    { label: "Breed", value: "Persian Himalayan Mix", icon: FaPaw, color: "text-orange-500" },
    { label: "Favorite Toy", value: "Feather Wand", icon: FaGamepad, color: "text-blue-500" },
    { label: "Photos Taken", value: "1,247", icon: FaCamera, color: "text-purple-500" }
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
    <section id="paw-world" className="section-padding bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
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
              <span className="gradient-text">Paw World</span> 🐾
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet Nyra, my adorable feline companion who brings joy and chaos to my daily life
            </p>
          </motion.div>

          {/* Cat Introduction */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                <FaPaw className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-3xl font-mono-bold text-gray-900 dark:text-gray-100 mb-4">
                Meet Nyra! 🐱
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Nyra is my beloved Persian Himalayan Mix who has been my coding companion for the past 6 Months. 
                She's the perfect mix of playful, curious, and absolutely adorable. When I'm not debugging 
                code, I'm usually taking photos of her or playing with her favorite feather wand.
              </p>
            </div>
          </motion.div>

          {/* Cat Stats */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-mono-bold text-center text-gray-900 dark:text-gray-100 mb-8">
              Nyra's Stats 📊
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {catStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="card p-6 text-center"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-2xl font-mono-bold text-gray-900 dark:text-gray-100 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-mono-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>



          {/* Cat Cam Feature */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-mono-bold text-gray-900 dark:text-gray-100 mb-4">
                Live Cat Cam 🎥
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Check out Nyra's live feed (when she's not sleeping, that is!)
              </p>
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FaCamera className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      {isPlaying ? "Live Feed Active" : "Cat Cam Offline"}
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                      Nyra is probably napping 😴
                    </p>
                  </div>
                </div>
                {hasMounted && (
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute bottom-4 right-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {isPlaying ? <FaPause className="w-5 h-5" /> : <FaPlay className="w-5 h-5" />}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
