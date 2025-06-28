import { useScroll, useTransform } from 'framer-motion';

interface ScrollAnimationOptions {
  inputRange?: [number, number];
  outputRange?: [number, number];
  clamp?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { inputRange = [0, 1], outputRange = [0, 1], clamp = true } = options;
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, inputRange, outputRange, { clamp });
  const scale = useTransform(scrollYProgress, inputRange, outputRange, { clamp });
  const y = useTransform(scrollYProgress, inputRange, outputRange, { clamp });

  return {
    scrollYProgress,
    opacity,
    scale,
    y,
  };
};

export type ScrollAnimation = ReturnType<typeof useScrollAnimation>; 