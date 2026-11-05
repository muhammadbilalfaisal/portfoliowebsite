import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";

export default function MagneticButton({ children, className = "" }) {
  const boundsRef = useRef(null);
  const { supportsFinePointer: finePointer, reducedMotion } =
    useMousePosition();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 180, damping: 18, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 180, damping: 18, mass: 0.6 });
  const move = (event) => {
    if (!finePointer || reducedMotion) return;
    const bounds = boundsRef.current;
    if (!bounds?.width || !bounds?.height) return;
    rawX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
    rawY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
  };
  const reset = () => {
    boundsRef.current = null;
    rawX.set(0);
    rawY.set(0);
  };
  const enter = (event) => {
    if (!finePointer || reducedMotion) return;
    boundsRef.current = event.currentTarget.getBoundingClientRect();
    move(event);
  };
  return (
    <motion.span
      className={`magnetic-button ${className}`}
      onPointerEnter={enter}
      onPointerMove={move}
      onPointerLeave={reset}
      style={{ x, y }}
    >
      {children}
    </motion.span>
  );
}
