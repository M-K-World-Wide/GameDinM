import { motion } from 'framer-motion';

const LoadingState = () => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="text-center transform-perspective"
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative w-16 h-16 mb-4"
        >
          <div className="absolute inset-0 border-4 border-accent/30 border-t-transparent rounded-full animate-glow" />
          <div className="absolute inset-0 border-4 border-accent border-t-transparent rounded-full animate-pulse-subtle" />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1],
            }}
            transition={{
              rotate: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute inset-2 border-2 border-accent/20 border-t-transparent rounded-full"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-lg font-display animate-pulse-subtle"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingState; 