import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface IntersectionAnimationOptions {
  threshold?: number;
  once?: boolean;
  amount?: number;
  delay?: number;
  duration?: number;
  ease?: string;
}

export const useIntersectionAnimation = (options: IntersectionAnimationOptions = {}) => {
  const { threshold = 0.1, once = true, amount = 0.5, delay = 0, duration = 0.6, ease = 'easeOut' } = options;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount,
    once,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
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

  return {
    ref,
    isInView,
    variants,
  };
}; 