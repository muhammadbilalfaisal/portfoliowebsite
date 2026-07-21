import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
const services = [
  {
    title: "Business Websites",
    desc: "Professional, responsive websites designed to strengthen business credibility, clearly present services, and make it easier for customers to connect.",
    caps: [
      "Business Websites",
      "Landing Pages",
      "Website Redesign",
      "Responsive Development",
      "Inquiry Workflows",
    ],
  },
  {
    title: "Internal Portals & Dashboards",
    desc: "Structured internal web systems for organizations that need better control over users, departments, workflows, data, and administrative processes.",
    caps: [
      "Admin Dashboards",
      "Role-Based Systems",
      "Staff Portals",
      "Management Workflows",
      "Internal Tools",
    ],
  },
  {
    title: "IT Automation & System Solutions",
    desc: "Practical automation and system solutions focused on reducing repetitive IT work and improving how technical information and processes are managed.",
    caps: [
      "IT Asset Workflows",
      "PC Inventory Automation",
      "Windows Environment Tasks",
      "Data Collection Automation",
      "Process Automation",
    ],
  },
];
export default function Services() {
  return (
    <section id="services" className="section services">
      <Reveal>
        <div className="section-kicker">
          <span>02</span> Services / Expertise
        </div>
        <div className="section-title-row">
          <h2>WHAT I BUILD</h2>
          <p>
            Focused digital solutions for the parts of a business that need to
            work better.
          </p>
        </div>
      </Reveal>
      <div className="service-list">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <article className="service">
              <div className="service-no">0{i + 1}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <ul>
                {s.caps.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <ArrowUpRight className="service-arrow" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
