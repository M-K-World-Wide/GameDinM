import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollTriggerOptions {
  threshold?: number;
  once?: boolean;
  amount?: number;
}

export const useScrollTrigger = (options: ScrollTriggerOptions = {}) => {
  const { threshold = 0.1, once = true, amount = 0.5 } = options;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once,
    margin: `${amount * 100}%`,
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return {
    ref,
    isInView,
    variants,
  };
}; 