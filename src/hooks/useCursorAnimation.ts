import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface CursorAnimationOptions {
  size?: number;
  color?: string;
  mixBlendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
}

export const useCursorAnimation = (options: CursorAnimationOptions = {}) => {
  const { size = 20, color = 'rgba(255, 255, 255, 0.5)', mixBlendMode = 'difference' } = options;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const cursorVariants = {
    default: {
      x: cursorX.get(),
      y: cursorY.get(),
      scale: 1,
    },
    hover: {
      x: cursorX.get(),
      y: cursorY.get(),
      scale: 1.5,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [size]);

  return {
    cursorVariants,
    style: {
      width: size,
      height: size,
      backgroundColor: color,
      mixBlendMode,
    },
  };
}; 