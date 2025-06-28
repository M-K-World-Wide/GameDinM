import { useScroll, useTransform } from 'framer-motion';

interface ParallaxOptions {
  inputRange?: [number, number];
  outputRange?: [number, number];
  clamp?: boolean;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { inputRange = [0, 1], outputRange = [0, 100], clamp = true } = options;
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, inputRange, outputRange, { clamp });
  const opacity = useTransform(scrollYProgress, inputRange, [1, 0], { clamp });
  const scale = useTransform(scrollYProgress, inputRange, [1, 0.8], { clamp });

  return {
    y,
    opacity,
    scale,
  };
}; 