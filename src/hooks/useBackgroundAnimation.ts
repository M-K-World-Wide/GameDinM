import { useAnimation } from 'framer-motion';

interface BackgroundAnimationOptions {
  delay?: number;
  duration?: number;
  ease?: string;
}

export const useBackgroundAnimation = (options: BackgroundAnimationOptions = {}) => {
  const { delay = 0, duration = 0.6, ease = 'easeOut' } = options;
  const controls = useAnimation();

  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease,
      },
    },
  };

  const gradientVariants = {
    hidden: {
      opacity: 0,
      scale: 1.2,
    },
    visible: {
      opacity: 0.5,
      scale: 1,
      transition: {
        duration: duration * 1.5,
        delay: delay + 0.2,
        ease,
      },
    },
  };

  const startAnimation = async () => {
    await controls.start('visible');
  };

  return {
    controls,
    backgroundVariants,
    gradientVariants,
    startAnimation,
  };
}; 