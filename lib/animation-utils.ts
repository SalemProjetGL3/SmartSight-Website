import { motion } from 'framer-motion'

// Predefined animations to reduce bundle size
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 }
}

export const slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 },
  transition: { duration: 0.2 }
}

// Optimized motion component with default animations
export const OptimizedMotion = motion.div

// Example usage:
// <OptimizedMotion
//   initial="initial"
//   animate="animate"
//   exit="exit"
//   variants={fadeIn}
// >
//   {children}
// </OptimizedMotion> 