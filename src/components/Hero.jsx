import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { createSectionClickHandler } from "../utils/scrollToSection";

const lines = ["WEBSITES,", "PORTALS & SYSTEMS", "FOR REAL WORKFLOWS."];
export default function Hero() {
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24 });
  const parallaxX = useTransform(smoothX, [0, 100], [-6, 6]);
  const parallaxY = useTransform(smoothY, [0, 100], [-5, 5]);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(53, 120, 246, 0.12), transparent 38%)`;

  const trackPointer = (event) => {
    if (reduced) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };
  return (
    <section className="hero" id="home">
      <div className="hero-main">
        <motion.p
          className="eyebrow"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduced ? 0 : 0.2 }}
        >
          Web & Business Systems Developer
        </motion.p>
        <h1>
          {lines.map((line, i) => (
            <span className="headline-mask" key={line}>
              <motion.span
                initial={reduced ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: reduced ? 0 : 0.8,
                  delay: reduced ? 0 : 0.18 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <div className="availability-badge">
          <i /> Available for Freelance Projects
        </div>
        <motion.div
          className="hero-bottom"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduced ? 0 : 0.75 }}
        >
          <p>
            I design and develop responsive business websites, internal web
            portals, admin dashboards, and practical IT automation solutions.
          </p>
          <div className="hero-actions">
            <a
              className="button primary"
              href="#work"
              onClick={createSectionClickHandler("work")}
            >
              View My Work <ArrowDown size={17} />
            </a>
            <a
              className="button text-button"
              href="#contact"
              onClick={createSectionClickHandler("contact")}
            >
              Discuss a Project <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="system-visual"
        initial={reduced ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: reduced ? 0 : 0.65, duration: reduced ? 0 : 0.8 }}
        onPointerMove={trackPointer}
        onPointerLeave={() => {
          pointerX.set(50);
          pointerY.set(50);
        }}
        style={{ backgroundImage: reduced ? undefined : spotlight }}
        aria-hidden="true"
      >
        <div className="visual-top">
          <span>SYS / 01</span>
          <span className="online">
            <i /> OPERATIONAL
          </span>
        </div>
        <motion.div
          className="visual-core"
          style={reduced ? undefined : { x: parallaxX, y: parallaxY }}
        >
          <span className="visual-particle particle-a" />
          <span className="visual-particle particle-b" />
          <span className="visual-particle particle-c" />
          <span className="blueprint-node node-a">INPUT</span>
          <span className="blueprint-node node-b">PROCESS</span>
          <span className="blueprint-node node-c">OUTPUT</span>
          <span className="data-flow flow-a" />
          <span className="data-flow flow-b" />
          <div className="orbit o1" />
          <div className="orbit o2" />
          <div className="core-point">
            <span>BUILD</span>
          </div>
          <span className="axis-label x">WORKFLOW</span>
          <span className="axis-label y">SYSTEM LOGIC</span>
        </motion.div>
        <div className="visual-list">
          <span>01 WEB SYSTEMS</span>
          <span>02 INTERNAL PORTALS</span>
          <span>03 IT AUTOMATION</span>
          <span>04 RESPONSIVE UI</span>
        </div>
      </motion.div>
      <a
        href="#about"
        className="scroll-cue"
        onClick={createSectionClickHandler("about")}
      >
        <span>Scroll to explore</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}
