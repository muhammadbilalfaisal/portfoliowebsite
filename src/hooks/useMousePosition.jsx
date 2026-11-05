import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useMotionValue } from "framer-motion";
import useMediaQuery from "./useMediaQuery";
import useReducedMotion from "./useReducedMotion";

const MouseContext = createContext(null);
const CursorContext = createContext(null);

export function MousePositionProvider({ children }) {
  const supportsFinePointer = useMediaQuery(
    "(pointer: fine) and (hover: hover)",
  );
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(-40);
  const y = useMotionValue(-40);
  const normalizedX = useMotionValue(0);
  const normalizedY = useMotionValue(0);
  const [cursorLabel, setCursorLabel] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);
  const frame = useRef();
  const latestPointer = useRef(null);
  const lastLabel = useRef("");
  const visibleRef = useRef(false);

  useEffect(() => {
    if (!supportsFinePointer || reducedMotion) return undefined;
    const move = (event) => {
      latestPointer.current = {
        clientX: event.clientX,
        clientY: event.clientY,
        target: event.target,
      };
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = undefined;
        const pointer = latestPointer.current;
        if (!pointer) return;
        x.set(pointer.clientX);
        y.set(pointer.clientY);
        normalizedX.set((pointer.clientX / window.innerWidth) * 2 - 1);
        normalizedY.set((pointer.clientY / window.innerHeight) * 2 - 1);
        const interactive =
          pointer.target instanceof Element
            ? pointer.target.closest("[data-cursor], a, button")
            : null;
        const nextLabel =
          interactive?.dataset.cursor || (interactive ? "OPEN" : "");
        if (nextLabel !== lastLabel.current) {
          lastLabel.current = nextLabel;
          setCursorLabel(nextLabel);
        }
        if (!visibleRef.current) {
          visibleRef.current = true;
          setCursorVisible(true);
        }
      });
    };
    const leave = () => {
      visibleRef.current = false;
      setCursorVisible(false);
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [normalizedX, normalizedY, reducedMotion, supportsFinePointer, x, y]);

  const mouseValue = useMemo(
    () => ({
      x,
      y,
      normalizedX,
      normalizedY,
      supportsFinePointer,
      reducedMotion,
    }),
    [normalizedX, normalizedY, reducedMotion, supportsFinePointer, x, y],
  );
  const cursorValue = useMemo(
    () => ({ cursorLabel, cursorVisible }),
    [cursorLabel, cursorVisible],
  );

  return (
    <MouseContext.Provider value={mouseValue}>
      <CursorContext.Provider value={cursorValue}>
        {children}
      </CursorContext.Provider>
    </MouseContext.Provider>
  );
}

export function useCursorState() {
  const context = useContext(CursorContext);
  if (!context)
    throw new Error("useCursorState must be used within MousePositionProvider");
  return context;
}

export default function useMousePosition() {
  const context = useContext(MouseContext);
  if (!context)
    throw new Error(
      "useMousePosition must be used within MousePositionProvider",
    );
  return context;
}
