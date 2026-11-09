import { motion, useReducedMotion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}) {
  const reduced = useReducedMotion();
  const compactViewport = useMediaQuery("(max-width: 800px)");
  const skipMotion = reduced || compactViewport;
  return (
    <motion.div
      className={className}
      initial={skipMotion ? false : { opacity: 0, y }}
      whileInView={skipMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: skipMotion ? 0 : 0.65,
        delay: skipMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
