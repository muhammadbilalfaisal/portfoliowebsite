import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    title: "Business Websites",
    description:
      "Responsive websites and landing pages that establish credibility, explain services clearly, and create direct inquiry pathways.",
    capabilities: "React · Responsive UI · Landing Pages · Redesign",
  },
  {
    title: "Portals & Dashboards",
    description:
      "Structured internal interfaces for users, teams, departments, data, and administrative workflows.",
    capabilities: "Admin UI · Role-Based Systems · Internal Tools",
  },
  {
    title: "Automation & Systems",
    description:
      "Practical technical workflows that reduce repetitive work and improve how operational information is managed.",
    capabilities: "AI Workflows · APIs · IT Automation · Data Collection",
  },
];

export default function Services() {
  return (
    <section id="services" className="section service-index-section">
      <Reveal>
        <div className="editorial-heading-row">
          <div>
            <span className="micro-label">Services / 02</span>
            <h2>WHAT I BUILD</h2>
          </div>
          <p>
            Focused digital systems for the parts of a business that need to
            communicate, operate, and scale more clearly.
          </p>
        </div>
      </Reveal>

      <div className="service-index">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.06}>
            <article>
              <span className="service-index-no">0{index + 1}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <small>{service.capabilities}</small>
              <ArrowUpRight aria-hidden="true" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
