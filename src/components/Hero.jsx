import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { createSectionClickHandler } from "../utils/scrollToSection";
import MouseParallax from "./effects/MouseParallax";
import ScrollParallax from "./effects/ScrollParallax";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="hero editorial-hero" id="home">
      <MouseParallax
        intensity={2.5}
        invert
        depth={-12}
        spring={{ stiffness: 68, damping: 25, mass: 0.95 }}
        className="hero-meta"
      >
        <span>Web &amp; Business Systems Developer</span>
        <span>Karachi · PKT / UTC+5</span>
      </MouseParallax>
      <MouseParallax
        intensity={7}
        depth={8}
        spring={{ stiffness: 82, damping: 23, mass: 0.85 }}
        className="hero-title-wrap"
      >
        <p className="eyebrow">
          Web development · Business systems · Automation
        </p>
        <h1 aria-label="Bilal">
          {["B", "I", "L", "A", "L"].map((letter, index) => (
            <span className="headline-mask" key={`${letter}-${index}`}>
              <motion.span
                initial={reduced ? false : { y: "110%", rotate: 2 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{
                  duration: 0.85,
                  delay: reduced ? 0 : 0.12 + index * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter}
              </motion.span>
            </span>
          ))}
        </h1>
      </MouseParallax>
      <ScrollParallax distance={44} className="hero-portrait-scroll">
        <MouseParallax
          intensity={19}
          depth={48}
          maxRotateX={3.5}
          maxRotateY={5.5}
          spring={{ stiffness: 92, damping: 21, mass: 0.78 }}
          className="hero-portrait-wrap"
        >
          <motion.div
            className="hero-portrait"
            initial={
              reduced ? false : { opacity: 0, clipPath: "inset(100% 0 0 0)" }
            }
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
            transition={{
              duration: 1,
              delay: reduced ? 0 : 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            data-cursor="EXPLORE"
          >
            <img
              src="/images/profile.jpg"
              alt="Bilal, Web and Business Systems Developer"
              width="1254"
              height="1254"
              fetchPriority="high"
            />
          </motion.div>
          <span className="portrait-stamp">
            BUILD
            <br />
            AUTOMATE
            <br />
            GROW
          </span>
        </MouseParallax>
      </ScrollParallax>
      <motion.div
        className="hero-intro"
        initial={reduced ? false : { opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: reduced ? 0 : 0.7 }}
      >
        <p>
          I build responsive business websites, internal portals, admin
          dashboards, and practical IT automation for organizations that need
          clearer, more reliable workflows.
        </p>
      </motion.div>
      <motion.div
        className="hero-actions"
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduced ? 0 : 0.78 }}
      >
        <MagneticButton>
          <a
            className="button primary"
            data-cursor="OPEN"
            href="#work"
            onClick={createSectionClickHandler("work")}
          >
            Selected work <ArrowDown size={17} />
          </a>
        </MagneticButton>
        <MagneticButton>
          <a
            className="button text-button"
            data-cursor="OPEN"
            href="#contact"
            onClick={createSectionClickHandler("contact")}
          >
            Start a project <ArrowUpRight size={17} />
          </a>
        </MagneticButton>
      </motion.div>
      <MouseParallax
        intensity={3.5}
        axis="x"
        invert
        depth={-6}
        spring={{ stiffness: 65, damping: 25, mass: 1 }}
        className="hero-disciplines"
      >
        <span>01 Business Websites</span>
        <span>02 Internal Portals</span>
        <span>03 IT Automation</span>
      </MouseParallax>
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
