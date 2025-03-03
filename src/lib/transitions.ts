
import { motion } from 'framer-motion';

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
