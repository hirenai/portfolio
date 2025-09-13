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
import { getCatInfo } from "../utils/portfolioData";

export default function PawWorld() {
  const [isPlaying, setIsPlaying] = useState(false);
  const hasMounted = useClientOnly();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get cat data from portfolio.json
  const catInfo = getCatInfo();

  const catStats = [
    { label: "Age", value: catInfo.age, icon: FaBirthdayCake, color: "text-slate-600" },
    { label: "Breed", value: catInfo.breed, icon: FaPaw, color: "text-neutral-600" },
    { label: "Favorite Toy", value: catInfo.favoriteToys[0], icon: FaGamepad, color: "text-accent-600" },
    { label: "Favorite Spot", value: catInfo.stats.favoriteSpot, icon: FaCamera, color: "text-slate-700" }
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
    <section id="paw-world" className="section-padding bg-gradient-to-br from-neutral-50 via-slate-50 to-neutral-100 dark:from-neutral-900 dark:via-slate-900/20 dark:to-neutral-800/20">
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
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Meet {catInfo.name}, my adorable feline companion who brings joy and chaos to my daily life
            </p>
          </motion.div>

          {/* Cat Introduction */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <img 
                  src="/images/nyra.jpg" 
                  alt="Nyra the cat" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-mono-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Meet {catInfo.name}! 🐱
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                {catInfo.story}
              </p>
            </div>
          </motion.div>

          {/* Cat Stats */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-mono-bold text-center text-gray-900 dark:text-gray-100 mb-8">
              {catInfo.name}'s Stats 📊
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
                Check out {catInfo.name}'s live feed (when she's not sleeping, that is!)
              </p>
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FaCamera className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      {isPlaying ? "Live Feed Active" : "Cat Cam Offline"}
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                      {catInfo.name} is probably napping 😴
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
