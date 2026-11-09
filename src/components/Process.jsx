import Reveal from "./Reveal";

const focusAreas = [
  "Business websites and landing pages",
  "Administrative portals and dashboards",
  "AI-assisted workflows and API integrations",
  "IT asset and operational automation",
];

const projectExperience = [
  [
    "Digital platforms",
    "Professional networks, SaaS products, and internal systems.",
  ],
  [
    "Commerce",
    "Responsive product discovery, merchandising, cart, and checkout.",
  ],
  [
    "Business presence",
    "Editorial websites built around authority and conversion.",
  ],
];

const steps = [
  ["Discover", "Understand the business, users, and current workflow."],
  ["Define", "Set scope, information structure, and technical direction."],
  ["Design", "Shape the interface, hierarchy, and responsive behavior."],
  ["Build", "Develop maintainable components and connected workflows."],
  [
    "Validate",
    "Test usability, responsiveness, performance, and accessibility.",
  ],
  ["Deliver", "Deploy, document, and support the working solution."],
];

export default function Process() {
  return (
    <section id="process" className="section professional-background">
      <Reveal>
        <div className="background-heading">
          <span className="micro-label">Professional background / 04</span>
          <h2>TECHNICAL PRACTICE, APPLIED TO BUSINESS.</h2>
        </div>
      </Reveal>

      <div className="background-columns">
        <Reveal>
          <article className="background-column">
            <span className="column-number">01</span>
            <h3>Professional focus</h3>
            <p>
              Web development, AI automation, and IT systems work centered on
              practical business outcomes.
            </p>
            <ul>
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="background-column">
            <span className="column-number">02</span>
            <h3>Applied experience</h3>
            {projectExperience.map(([title, description]) => (
              <div className="experience-entry" key={title}>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            ))}
          </article>
        </Reveal>

        <Reveal delay={0.16}>
          <article className="background-column process-column">
            <span className="column-number">03</span>
            <h3>Development process</h3>
            <ol>
              {steps.map(([title, description], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
