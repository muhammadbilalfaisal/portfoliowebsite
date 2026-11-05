import { ArrowUpRight, Code2, PanelsTopLeft, Workflow } from "lucide-react";
import Reveal from "./Reveal";
import Interactive3DCard from "./ui/Interactive3DCard";

const services = [
  {
    icon: Code2,
    title: "Business Websites",
    desc: "Professional, responsive websites that strengthen business credibility, present services clearly, and make it easier for customers to connect.",
    caps: [
      "Business Websites",
      "Landing Pages",
      "Website Redesign",
      "Responsive Development",
      "Inquiry Workflows",
    ],
    angle: "-1.4deg",
  },
  {
    icon: PanelsTopLeft,
    title: "Internal Portals & Dashboards",
    desc: "Structured internal web systems for organizations that need better control over users, departments, workflows, data, and administrative processes.",
    caps: [
      "Admin Dashboards",
      "Role-Based Systems",
      "Staff Portals",
      "Management Workflows",
      "Internal Tools",
    ],
    angle: "1deg",
  },
  {
    icon: Workflow,
    title: "IT Automation & System Solutions",
    desc: "Practical automation and system solutions that reduce repetitive IT work and improve how technical information and processes are managed.",
    caps: [
      "IT Asset Workflows",
      "PC Inventory Automation",
      "Windows Environment Tasks",
      "Data Collection Automation",
      "Process Automation",
    ],
    angle: "-0.7deg",
  },
];

export default function Services() {
  return (
    <section id="services" className="section services editorial-services">
      <Reveal>
        <div className="section-kicker">
          <span>02</span> Services / Expertise
        </div>
        <div className="section-title-row">
          <h2>
            IDEAS INTO
            <br />
            <em>WORKING SYSTEMS.</em>
          </h2>
          <p>
            Focused digital solutions for the parts of a business that need to
            work better.
          </p>
        </div>
      </Reveal>
      <div className="editorial-service-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 0.055}>
              <Interactive3DCard
                className="service-card"
                intensity={9}
                maxRotate={3.5}
                depth={18}
                scale={1.015}
                cursorLabel="EXPLORE"
              >
                <article style={{ "--card-angle": service.angle }}>
                  <Icon aria-hidden="true" />
                  <span className="service-no">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ul>
                    {service.caps.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                  <ArrowUpRight className="service-arrow" />
                </article>
              </Interactive3DCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
