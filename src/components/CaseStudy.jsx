import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectImage from "./ProjectImage";
import TechnologyBadge from "./TechnologyBadge";

const reveal = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function CaseStudy({ project, index }) {
  const reducedMotion = useReducedMotion();
  const number = String(index + 1).padStart(2, "0");
  return (
    <motion.article
      className={`case-study ${index % 2 ? "case-reverse" : ""}`}
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ staggerChildren: reducedMotion ? 0 : 0.09 }}
    >
      <ProjectImage project={project} number={number} />
      <motion.div className="case-content" variants={reveal}>
        <div className="case-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <motion.h3 variants={reveal}>{project.title}</motion.h3>
        <motion.p className="case-summary" variants={reveal}>
          {project.description}
        </motion.p>
        <div className="case-details">
          <motion.div variants={reveal}>
            <span className="micro-label">Challenge</span>
            <p>{project.challenge}</p>
          </motion.div>
          <motion.div variants={reveal}>
            <span className="micro-label">Solution</span>
            <p>{project.solution}</p>
          </motion.div>
        </div>
        <motion.div className="case-outcomes" variants={reveal}>
          <div>
            <span className="micro-label">Business impact</span>
            <p>{project.impact}</p>
          </div>
          <div>
            <span className="micro-label">Result</span>
            <p>{project.result}</p>
          </div>
          <div>
            <span className="micro-label">Performance</span>
            <p>{project.performance}</p>
          </div>
          <div>
            <span className="micro-label">Key achievements</span>
            <ul>
              {project.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.ul
          className="case-tech"
          variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
        >
          {project.technologies.map((technology) => (
            <TechnologyBadge key={technology}>{technology}</TechnologyBadge>
          ))}
        </motion.ul>
        <motion.div className="case-actions" variants={reveal}>
          {project.projectUrl && (
            <a
              className="case-button primary"
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Project <ArrowUpRight size={16} />
            </a>
          )}
        </motion.div>
      </motion.div>
      <motion.div
        className="case-progress"
        initial={reducedMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: reducedMotion ? 0 : 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.article>
  );
}
