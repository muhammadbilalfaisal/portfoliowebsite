import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";

export default function ScrollParallax({
  children,
  distance = 40,
  className = "",
}) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [distance * -0.5, distance * 0.5],
  );
  return (
    <motion.div
      ref={ref}
      className={className}
      style={reducedMotion ? undefined : { y }}
    >
      {children}
    </motion.div>
  );
}
