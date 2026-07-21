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
            I focus on developing practical digital solutions for businesses and
            organizations. My work combines web development, internal system
            design, IT operations, and automation.
          </p>
          <p>
            I am particularly interested in projects where a manual, complex, or
            inefficient workflow can be transformed into a clear digital system.
          </p>
          <p>
            My experience includes business websites, administrative portals,
            dashboard interfaces, IT asset workflows, Windows environments, and
            automation-focused development.
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
