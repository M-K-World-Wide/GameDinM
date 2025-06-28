import { useAnimation } from 'framer-motion';

interface TextAnimationOptions {
  delay?: number;
  duration?: number;
  ease?: string;
}

export const useTextAnimation = (options: TextAnimationOptions = {}) => {
  const { delay = 0, duration = 0.6, ease = 'easeOut' } = options;
  const controls = useAnimation();

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay: delay + i * 0.05,
        ease,
      },
    }),
  };

  const startAnimation = async () => {
    await controls.start('visible');
  };

  return {
    controls,
    textVariants,
    letterVariants,
    startAnimation,
  };
}; 