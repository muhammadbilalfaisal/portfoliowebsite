import { MapPin, MonitorCog, Workflow } from "lucide-react";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section identity-section">
      <Reveal>
        <div className="identity-panel">
          <div className="identity-name">
            <span className="micro-label">Profile / 01</span>
            <h2>
              MUHAMMAD
              <br />
              <em>BILAL FAISAL</em>
            </h2>
            <p>
              Web Developer · AI Automation Developer · IT Systems Professional
            </p>
          </div>

          <div className="identity-copy">
            <p className="identity-lead">
              I develop practical digital solutions for businesses and
              organizations—combining web development, internal system design,
              IT operations, and automation.
            </p>
            <p>
              My focus is the business problem behind the interface: reducing
              manual work, improving visibility, and building systems that
              remain clear and useful in day-to-day operation.
            </p>
          </div>

          <dl className="identity-facts">
            <div>
              <MapPin aria-hidden="true" />
              <dt>Location</dt>
              <dd>Karachi, Pakistan</dd>
            </div>
            <div>
              <MonitorCog aria-hidden="true" />
              <dt>Completed work</dt>
              <dd>
                {String(projects.length).padStart(2, "0")} featured projects
              </dd>
            </div>
            <div>
              <Workflow aria-hidden="true" />
              <dt>Primary focus</dt>
              <dd>Web, systems &amp; automation</dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
