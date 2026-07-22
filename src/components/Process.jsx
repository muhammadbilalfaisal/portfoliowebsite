import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  ["Discovery", "Understand the business, users, and workflow."],
  ["Planning", "Define architecture, scope, and implementation strategy."],
  ["Development", "Build responsive, maintainable, and scalable solutions."],
  ["Delivery", "Deploy, optimize, and provide ongoing support when required."],
];

export default function Process() {
  const timelineRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="process" className="section process">
      <Reveal>
        <div className="section-kicker">
          <span>04</span> Process / Method
        </div>
        <h2>HOW I WORK</h2>
      </Reveal>
      <div className="process-grid">
        <div className="process-intro">
          A clear, practical path from problem to working system.
        </div>
        <div className="process-steps" ref={timelineRef}>
          <motion.div
            className="process-progress"
            style={{ scaleY: reducedMotion ? scrollYProgress : progress }}
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <Reveal key={step[0]} delay={reducedMotion ? 0 : index * 0.05}>
              <article>
                <motion.div
                  className="step-marker"
                  whileInView={
                    reducedMotion ? undefined : { scale: [1, 1.08, 1] }
                  }
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span>0{index + 1}</span>
                </motion.div>
                <h3>{step[0]}</h3>
                <p>{step[1]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
