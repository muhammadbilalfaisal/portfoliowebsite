import { motion, useReducedMotion } from "framer-motion";

export default function TechnologyBadge({ children }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.li
      variants={
        reducedMotion
          ? undefined
          : { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }
      }
    >
      {children}
    </motion.li>
  );
}
