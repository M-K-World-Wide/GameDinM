import { useAnimation } from 'framer-motion';

interface FormAnimationOptions {
  initialDelay?: number;
  staggerDelay?: number;
}

export const useFormAnimation = (options: FormAnimationOptions = {}) => {
  const { initialDelay = 0, staggerDelay = 0.1 } = options;
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    });
  };

  const getStaggeredDelay = (index: number) => initialDelay + index * staggerDelay;

  return {
    controls,
    startAnimation,
    getStaggeredDelay,
  };
}; 