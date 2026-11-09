import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import useMediaQuery from "../hooks/useMediaQuery";
import { createSectionClickHandler } from "../utils/scrollToSection";
import MouseParallax from "./effects/MouseParallax";
import MagneticButton from "./ui/MagneticButton";

const title = "PORTFOLIO";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const compactViewport = useMediaQuery("(max-width: 800px)");
  const skipEntranceMotion = reducedMotion || compactViewport;

  return (
    <section className="hero editorial-cover" id="home">
      <div className="cover-meta cover-meta-left">
        <span>Creative Developer</span>
        <span>Portfolio / 2026</span>
      </div>
      <div className="cover-meta cover-meta-right">
        <span>Pakistan</span>
        <span>PKT / UTC+5</span>
      </div>

      <h1 className="cover-title" aria-label="Portfolio">
        {title.split("").map((letter, index) => (
          <span className="headline-mask" key={`${letter}-${index}`}>
            <motion.span
              initial={skipEntranceMotion ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: skipEntranceMotion ? 0 : 0.9,
                delay: skipEntranceMotion ? 0 : 0.08 + index * 0.045,
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
            initial={skipEntranceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: skipEntranceMotion ? 0 : 1,
              delay: skipEntranceMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            data-cursor="EXPLORE"
          >
            <img
              src="/images/profile-960.jpg"
              srcSet="/images/profile-480.jpg 480w, /images/profile-960.jpg 960w"
              sizes="(max-width: 768px) 76vw, 680px"
              alt="Muhammad Bilal Faisal, Web and Business Systems Developer"
              width="960"
              height="960"
              fetchPriority="high"
            />
          </motion.div>
        </MouseParallax>
      </div>

      <motion.div
        className="cover-note cover-note-left"
        initial={skipEntranceMotion ? false : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: skipEntranceMotion ? 0 : 0.65 }}
      >
        <span className="micro-label">What I build</span>
        <p>Websites, Business Systems, AI Automation, and Digital Products.</p>
      </motion.div>

      <motion.div
        className="cover-note cover-note-right"
        initial={skipEntranceMotion ? false : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: skipEntranceMotion ? 0 : 0.72 }}
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
          50+ completed projects
        </span>
        <span>Building ventures · Open to strategic collaborations</span>
      </div>
    </section>
  );
}
