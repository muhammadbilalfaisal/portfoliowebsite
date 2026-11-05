import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";

export default function Interactive3DCard({
  children,
  intensity = 12,
  maxRotate = 5,
  depth = 35,
  scale = 1.02,
  perspective = 1000,
  disabled = false,
  className = "",
  cursorLabel = "EXPLORE",
}) {
  const ref = useRef(null);
  const boundsRef = useRef(null);
  const latestPointer = useRef(null);
  const { supportsFinePointer: finePointer, reducedMotion } =
    useMousePosition();
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const lift = useMotionValue(0);
  const cardScale = useMotionValue(1);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const localXValue = useMotionValue(0);
  const localYValue = useMotionValue(0);
  const shadowX = useMotionValue(8);
  const shadowY = useMotionValue(12);
  const frame = useRef();
  const rotateX = useSpring(rotateXValue, {
    stiffness: 150,
    damping: 22,
    mass: 0.65,
  });
  const rotateY = useSpring(rotateYValue, {
    stiffness: 150,
    damping: 22,
    mass: 0.65,
  });
  const z = useSpring(lift, { stiffness: 150, damping: 22, mass: 0.65 });
  const smoothScale = useSpring(cardScale, { stiffness: 180, damping: 24 });
  const localX = useSpring(localXValue, {
    stiffness: 125,
    damping: 24,
    mass: 0.7,
  });
  const localY = useSpring(localYValue, {
    stiffness: 125,
    damping: 24,
    mass: 0.7,
  });
  const smoothShadowX = useSpring(shadowX, {
    stiffness: 120,
    damping: 25,
    mass: 0.75,
  });
  const smoothShadowY = useSpring(shadowY, {
    stiffness: 120,
    damping: 25,
    mass: 0.75,
  });
  const boxShadow = useMotionTemplate`${smoothShadowX}px ${smoothShadowY}px 0 rgba(61, 72, 37, 0.16)`;
  const light = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,.105), transparent 48%)`;
  const enabled = finePointer && !reducedMotion && !disabled;

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const move = (event) => {
    if (!enabled || !ref.current) return;
    const bounds = boundsRef.current ?? ref.current.getBoundingClientRect();
    boundsRef.current = bounds;
    if (!bounds.width || !bounds.height) return;
    latestPointer.current = { clientX: event.clientX, clientY: event.clientY };
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = undefined;
      const pointer = latestPointer.current;
      if (!pointer) return;
      const px = Math.min(
        1,
        Math.max(0, (pointer.clientX - bounds.left) / bounds.width),
      );
      const py = Math.min(
        1,
        Math.max(0, (pointer.clientY - bounds.top) / bounds.height),
      );
      const normalizedX = px * 2 - 1;
      const normalizedY = py * 2 - 1;
      rotateXValue.set(normalizedY * -maxRotate);
      rotateYValue.set(normalizedX * maxRotate);
      localXValue.set(normalizedX);
      localYValue.set(normalizedY);
      mouseX.set(px * 100);
      mouseY.set(py * 100);
      shadowX.set(normalizedX * -intensity * 0.45 + 8);
      shadowY.set(normalizedY * -intensity * 0.35 + 12);
    });
  };
  const enter = (event) => {
    if (enabled) {
      boundsRef.current = ref.current?.getBoundingClientRect() ?? null;
      lift.set(depth);
      cardScale.set(scale);
      move(event);
    }
  };
  const reset = () => {
    cancelAnimationFrame(frame.current);
    frame.current = undefined;
    boundsRef.current = null;
    latestPointer.current = null;
    rotateXValue.set(0);
    rotateYValue.set(0);
    lift.set(0);
    cardScale.set(1);
    localXValue.set(0);
    localYValue.set(0);
    mouseX.set(50);
    mouseY.set(50);
    shadowX.set(8);
    shadowY.set(12);
  };
  return (
    <div className={`card-perspective ${className}`} style={{ perspective }}>
      <motion.div
        ref={ref}
        className="interactive-card"
        data-cursor={cursorLabel}
        onPointerMove={move}
        onPointerEnter={enter}
        onPointerLeave={reset}
        style={
          enabled
            ? {
                rotateX,
                rotateY,
                z,
                scale: smoothScale,
                boxShadow,
                "--card-light": light,
                "--card-x": localX,
                "--card-y": localY,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
