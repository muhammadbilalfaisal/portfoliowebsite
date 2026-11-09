import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { createSectionClickHandler } from "../utils/scrollToSection";
import MouseParallax from "./effects/MouseParallax";
import MagneticButton from "./ui/MagneticButton";

const title = "PORTFOLIO";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const completedProjects = projects.length;

  return (
    <section className="hero editorial-cover" id="home">
      <div className="cover-meta cover-meta-left">
        <span>Creative Developer</span>
        <span>Portfolio / 2026</span>
      </div>
      <div className="cover-meta cover-meta-right">
        <span>Karachi, Pakistan</span>
        <span>PKT / UTC+5</span>
      </div>

      <h1 className="cover-title" aria-label="Portfolio">
        {title.split("").map((letter, index) => (
          <span className="headline-mask" key={`${letter}-${index}`}>
            <motion.span
              initial={reducedMotion ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: reducedMotion ? 0 : 0.9,
                delay: reducedMotion ? 0 : 0.08 + index * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter}
            </motion.span>
          </span>
        ))}
      </h1>

      <div className="cover-portrait-anchor">
        <MouseParallax
          intensity={14}
          depth={36}
          maxRotateX={2}
          maxRotateY={3}
          spring={{ stiffness: 90, damping: 22, mass: 0.8 }}
          className="cover-portrait-wrap"
        >
          <motion.div
            className="cover-portrait"
            initial={reducedMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: reducedMotion ? 0 : 1,
              delay: reducedMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            data-cursor="EXPLORE"
          >
            <img
              src="/images/profile-optimized.jpg"
              alt="Muhammad Bilal Faisal, Web and Business Systems Developer"
              width="1254"
              height="1254"
              fetchPriority="high"
            />
          </motion.div>
        </MouseParallax>
      </div>

      <motion.div
        className="cover-note cover-note-left"
        initial={reducedMotion ? false : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: reducedMotion ? 0 : 0.65 }}
      >
        <span className="micro-label">What I build</span>
        <p>Websites, business systems, AI automation, and digital products.</p>
      </motion.div>

      <motion.div
        className="cover-note cover-note-right"
        initial={reducedMotion ? false : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: reducedMotion ? 0 : 0.72 }}
      >
        <p>
          I design and develop practical digital experiences for businesses and
          organizations.
        </p>
        <span className="cover-signature">Bilal Faisal</span>
      </motion.div>

      <div className="cover-actions">
        <MagneticButton>
          <a
            className="button cover-primary"
            href="#work"
            data-cursor="OPEN"
            onClick={createSectionClickHandler("work")}
          >
            View selected work <ArrowDown size={16} />
          </a>
        </MagneticButton>
        <MagneticButton>
          <a
            className="button cover-secondary"
            href="#contact"
            data-cursor="OPEN"
            onClick={createSectionClickHandler("contact")}
          >
            Start a project <ArrowUpRight size={16} />
          </a>
        </MagneticButton>
      </div>

      <div className="cover-index" aria-label="Portfolio facts">
        <span>Web &amp; Business Systems Developer</span>
        <span>
          {String(completedProjects).padStart(2, "0")} completed projects
        </span>
        <span>Available for freelance projects</span>
      </div>
    </section>
  );
}
