import { useAnimation } from 'framer-motion';

interface StaggerAnimationOptions {
  staggerDelay?: number;
  duration?: number;
  ease?: string;
}

export const useStaggerAnimation = (options: StaggerAnimationOptions = {}) => {
  const { staggerDelay = 0.1, duration = 0.6, ease = 'easeOut' } = options;
  const controls = useAnimation();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease,
      },
    },
  };

  const startAnimation = async () => {
    await controls.start('visible');
  };

  return {
    controls,
    containerVariants,
    itemVariants,
    startAnimation,
  };
}; 