import Reveal from "./Reveal";
import ProfileImage from "./ProfileImage";
const capabilities = [
  "Web Development",
  "Portal Development",
  "Admin Dashboards",
  "Business Systems",
  "IT Automation",
  "System Workflows",
  "Responsive UI",
  "Server & Deployment Support",
];
export default function About() {
  return (
    <section id="about" className="section about">
      <Reveal>
        <div className="section-kicker">
          <span>01</span> About / Approach
        </div>
      </Reveal>
      <div className="about-grid">
        <Reveal>
          <h2>
            BUILT AROUND
            <br />
            <em>REAL PROBLEMS.</em>
          </h2>
          <ProfileImage />
        </Reveal>
        <Reveal className="about-copy" delay={0.1}>
          <p className="lead">
            I build business systems that turn complex operations into clear,
            reliable digital workflows—from customer-facing websites to internal
            portals and automation tools.
          </p>
          <p>
            My focus is solving the business problem behind the interface:
            reducing manual work, improving visibility, and helping teams make
            better use of their information.
          </p>
          <p>
            I combine responsive development, internal system design, AI-powered
            workflows, and practical automation to support meaningful digital
            transformation without unnecessary complexity.
          </p>
        </Reveal>
        <Reveal className="capability-index">
          <span className="micro-label">Core capabilities</span>
          {capabilities.map((x, i) => (
            <div key={x}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              <span>{x}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
