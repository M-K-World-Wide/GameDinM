import { useScroll, useTransform } from 'framer-motion';

interface ScrollProgressOptions {
  inputRange?: [number, number];
  outputRange?: [number, number];
  clamp?: boolean;
}

export const useScrollProgress = (options: ScrollProgressOptions = {}) => {
  const { inputRange = [0, 1], outputRange = [0, 100], clamp = true } = options;
  const { scrollYProgress } = useScroll();

  const progress = useTransform(scrollYProgress, inputRange, outputRange, { clamp });
  const opacity = useTransform(scrollYProgress, inputRange, [1, 0], { clamp });
  const scale = useTransform(scrollYProgress, inputRange, [1, 0.8], { clamp });

  return {
    scrollYProgress,
    progress,
    opacity,
    scale,
  };
}; 