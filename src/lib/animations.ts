import { Variants } from "framer-motion";

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  },
};

export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardHoverVariant: Variants = {
  rest: { scale: 1, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" },
  hover: { 
    scale: 1.02, 
    boxShadow: "0px 10px 30px rgba(0, 90, 194, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    transition: { type: "spring", stiffness: 400, damping: 25 }
  }
};

export const listItemVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export const pageTransitionVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};
