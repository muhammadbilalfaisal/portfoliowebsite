import Reveal from "./Reveal";
const groups = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Responsive Development",
  ],
  "Systems & Portals": [
    "Admin Dashboards",
    "Role-Based Interfaces",
    "Internal Portals",
    "Workflow Design",
    "Business Systems",
  ],
  "IT & Infrastructure": [
    "Windows Environments",
    "IT Support",
    "PC & Asset Workflows",
    "Networking Fundamentals",
    "Server Deployment",
  ],
  "Development Direction": [
    "AI Automation",
    "Document Automation",
    "API Integration",
    "Business Process Automation",
  ],
};
export default function Capabilities() {
  return (
    <section id="capabilities" className="section skills">
      <Reveal>
        <div className="section-kicker">
          <span>05</span> Technical / Capabilities
        </div>
        <h2>
          TOOLS FOR
          <br />
          <em>USEFUL OUTCOMES.</em>
        </h2>
      </Reveal>
      <div className="skill-groups">
        {Object.entries(groups).map(([name, items], i) => (
          <Reveal key={name} delay={i * 0.05}>
            <div className="skill-group">
              <span className="skill-no">0{i + 1}</span>
              <h3>{name}</h3>
              <div>
                {items.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
