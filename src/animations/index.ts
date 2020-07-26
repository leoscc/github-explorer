export const titleAnimation = {
  hidden: {
    opacity: 0,
    y: -32,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  out: {
    opacity: 0,
    y: -24,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

export const formAnimation = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.85,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.2, duration: 0.2, ease: 'easeOut' },
  },
  out: {
    opacity: 0,
    y: -16,
    scale: 0.85,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

export const listAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  out: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

export const listItemAnimation = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -24 },
};

// repository page
export const imageAnimation = {
  hidden: {
    width: 60,
    height: 60,
    transition: {
      ease: 'easeIn',
    },
  },
  show: {
    width: 120,
    height: 120,
    transition: {
      ease: 'easeOut',
    },
  },
  out: {
    width: 60,
    height: 60,
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
};

export const infoAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
    x: -12,
    transition: {
      ease: 'easeIn',
    },
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: 0.2,
      ease: 'easeOut',
    },
  },
  out: {
    opacity: 0,
    y: -24,
    x: -12,
    transition: {
      ease: 'easeInOut',
    },
  },
};
