import { motion } from "framer-motion";

export default function LoadingSpinner({ size = "md" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-2 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
