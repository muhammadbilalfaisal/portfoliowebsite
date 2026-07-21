import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Building2,
  Check,
  Globe2,
  LayoutDashboard,
  MonitorSmartphone,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Wrench,
  Workflow,
} from "lucide-react";
import Reveal from "./Reveal";

const solutions = [
  [
    Globe2,
    "Business Websites",
    "Credible websites that clearly communicate your services.",
  ],
  [
    PanelsTopLeft,
    "Landing Pages",
    "Focused pages designed around campaigns and conversions.",
  ],
  [
    Workflow,
    "Internal Web Portals",
    "Structured portals for teams, users, and daily workflows.",
  ],
  [
    LayoutDashboard,
    "Admin Dashboards",
    "Clear interfaces for managing operations and information.",
  ],
  [
    Building2,
    "University Management Systems",
    "Practical systems for academic and administrative workflows.",
  ],
  [
    ShieldCheck,
    "IT Asset Management Systems",
    "Organized tools for devices, inventory, and IT processes.",
  ],
  [
    Wrench,
    "Business Automation Tools",
    "Automation that reduces repetitive operational work.",
  ],
  [
    Bot,
    "AI-powered Web Applications",
    "Useful AI features integrated into focused web products.",
  ],
  [
    MonitorSmartphone,
    "Responsive Web Applications",
    "Reliable experiences across desktop, tablet, and mobile.",
  ],
];

const trustSignals = [
  "Responsive Development",
  "Clean Maintainable Code",
  "Business-focused Solutions",
  "Modern UI/UX",
  "Performance Optimized",
  "Ongoing Support",
];

export default function Solutions() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="solutions" className="section solutions">
      <Reveal>
        <div className="section-kicker">
          <span>06</span> Solutions / Business Value
        </div>
        <div className="section-title-row">
          <h2>
            WHAT I CAN
            <br />
            HELP YOU BUILD
          </h2>
          <p>
            Practical digital solutions focused on business growth, internal
            workflows, and automation.
          </p>
        </div>
      </Reveal>
      <div className="solutions-grid">
        {solutions.map(([Icon, title, description], index) => (
          <Reveal key={title} delay={reducedMotion ? 0 : index * 0.035}>
            <motion.article
              className="solution-item"
              whileHover={reducedMotion ? undefined : { y: -5 }}
            >
              <Icon size={20} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <Reveal className="trust-strip">
        <div className="trust-heading">
          <Sparkles size={17} aria-hidden="true" />
          <span>Built with professional standards</span>
        </div>
        <ul>
          {trustSignals.map((signal) => (
            <li key={signal}>
              <Check size={15} aria-hidden="true" />
              {signal}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
