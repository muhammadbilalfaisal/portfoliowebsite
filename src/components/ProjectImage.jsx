import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function ProjectImage({ project, number }) {
  const [missing, setMissing] = useState(false);
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className="case-image-wrap"
      variants={{
        hidden: { opacity: 0, scale: 0.97 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      {!missing && (
        <motion.img
          src={project.image}
          alt={`${project.title} website preview`}
          loading="lazy"
          onError={() => setMissing(true)}
          whileHover={reducedMotion ? undefined : { scale: 1.035 }}
          transition={{
            duration: reducedMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      )}
      {missing && (
        <div className="case-image-placeholder">
          <span>Screenshot placeholder</span>
          <strong>{project.title}</strong>
          <small>{project.image}</small>
        </div>
      )}
      <motion.span
        className="case-number"
        variants={{
          hidden: { opacity: 0, x: -15 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {number}
      </motion.span>
    </motion.div>
  );
}
