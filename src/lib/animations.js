export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay,
    ease: "easeOut",
  },
});

export const staggerChildren = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const slideIn = (direction, delay = 0) => {
  const x = direction === "left" ? -50 : direction === "right" ? 50 : 0;
  const y = direction === "up" ? -50 : direction === "down" ? 50 : 0;

  return {
    initial: { opacity: 0, x, y },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  };
};

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.5,
    delay,
    ease: "easeOut",
  },
});

export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.4, 0, 0.2, 1],
  },
});

export const hover = {
  scale: 1.05,
  transition: { duration: 0.3 },
};
