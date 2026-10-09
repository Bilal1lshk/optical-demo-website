/**
 * Motion System Design Tokens & Reusable Variants
 * Built for Lumina Optical — Clean, Modern, Minimal, High-Performance
 */

// Smooth, cinematic cubic-bezier easing curves
export const EASING = {
  // Apple / Linear-style smooth deceleration
  smoothOut: [0.16, 1, 0.3, 1],
  // Snappy for interactive elements (cards, buttons)
  snappy: [0.22, 1, 0.36, 1],
  // Soft bouncy spring for indicators
  spring: { type: "spring", stiffness: 380, damping: 28 },
};

// Section Header / Standard Reveal Variant
export const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: EASING.smoothOut,
    },
  }),
};

// Container that staggers its direct motion children
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Card entrance variant (used inside staggered containers or whileInView)
export const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASING.smoothOut,
    },
  },
};

// Subtle interactive card hover state
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    transition: { duration: 0.25, ease: EASING.snappy },
  },
  tap: {
    scale: 0.985,
    y: -1,
    transition: { duration: 0.12, ease: "easeOut" },
  },
};

// Micro-interaction button hover/tap feedback
export const buttonInteraction = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: EASING.snappy },
  },
  tap: {
    scale: 0.97,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};

// Modal entrance & exit animation
export const modalDialogVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 14 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: EASING.smoothOut,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 10,
    transition: {
      duration: 0.22,
      ease: "easeInOut",
    },
  },
};

export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.28, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};
