import { motion, useSpring, useTransform } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";

export default function MouseParallax({
  children,
  intensity = 10,
  axis = "both",
  invert = false,
  spring = {},
  className = "",
  depth = 0,
  maxRotateX = 0,
  maxRotateY = 0,
}) {
  const { normalizedX, normalizedY, supportsFinePointer, reducedMotion } =
    useMousePosition();
  const direction = invert ? -1 : 1;
  const rawX = useTransform(normalizedX, (value) =>
    axis === "y" ? 0 : value * intensity * direction,
  );
  const rawY = useTransform(normalizedY, (value) =>
    axis === "x" ? 0 : value * intensity * direction,
  );
  const x = useSpring(rawX, {
    stiffness: 100,
    damping: 22,
    mass: 0.7,
    ...spring,
  });
  const y = useSpring(rawY, {
    stiffness: 100,
    damping: 22,
    mass: 0.7,
    ...spring,
  });
  const rawRotateX = useTransform(normalizedY, (value) => value * -maxRotateX);
  const rawRotateY = useTransform(normalizedX, (value) => value * maxRotateY);
  const rotateX = useSpring(rawRotateX, {
    stiffness: 110,
    damping: 22,
    mass: 0.75,
    ...spring,
  });
  const rotateY = useSpring(rawRotateY, {
    stiffness: 110,
    damping: 22,
    mass: 0.75,
    ...spring,
  });
  const enabled = supportsFinePointer && !reducedMotion;
  return (
    <motion.div
      className={className}
      style={
        enabled
          ? { x, y, z: depth, rotateX, rotateY, transformStyle: "preserve-3d" }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
