import { useAnimation } from 'framer-motion';

interface HoverAnimationOptions {
  scale?: number;
  duration?: number;
  ease?: string;
}

export const useHoverAnimation = (options: HoverAnimationOptions = {}) => {
  const { scale = 1.05, duration = 0.2, ease = 'easeOut' } = options;
  const controls = useAnimation();

  const hoverVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale,
      transition: {
        duration,
        ease,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: duration / 2,
        ease,
      },
    },
  };

  const handleHoverStart = () => {
    controls.start('hover');
  };

  const handleHoverEnd = () => {
    controls.start('initial');
  };

  const handleTapStart = () => {
    controls.start('tap');
  };

  const handleTapEnd = () => {
    controls.start('hover');
  };

  return {
    controls,
    hoverVariants,
    handleHoverStart,
    handleHoverEnd,
    handleTapStart,
    handleTapEnd,
  };
}; 