import { motion, useSpring } from "framer-motion";
import useMousePosition, { useCursorState } from "../../hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y, supportsFinePointer, reducedMotion } = useMousePosition();
  const { cursorLabel, cursorVisible } = useCursorState();
  const dotX = useSpring(x, { stiffness: 900, damping: 48, mass: 0.15 });
  const dotY = useSpring(y, { stiffness: 900, damping: 48, mass: 0.15 });
  const ringX = useSpring(x, { stiffness: 170, damping: 22, mass: 0.7 });
  const ringY = useSpring(y, { stiffness: 170, damping: 22, mass: 0.7 });
  if (!supportsFinePointer || reducedMotion) return null;
  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY, opacity: cursorVisible ? 1 : 0 }}
        aria-hidden="true"
      />
      <motion.div
        className={`custom-cursor ${cursorLabel ? "is-active" : ""}`}
        style={{ x: ringX, y: ringY, opacity: cursorVisible ? 1 : 0 }}
        aria-hidden="true"
      >
        <span>{cursorLabel}</span>
      </motion.div>
    </>
  );
}
