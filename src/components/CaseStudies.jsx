import Reveal from "./Reveal";
import CaseStudy from "./CaseStudy";
import { projects } from "../data/projects";

export default function CaseStudies() {
  return (
    <section id="work" className="section work case-studies">
      <Reveal>
        <div className="section-kicker">
          <span>03</span> Featured projects
        </div>
        <div className="section-title-row">
          <h2>CASE STUDIES</h2>
          <p>
            A selection of real projects focused on business growth, digital
            experiences, internal systems, and SaaS products.
          </p>
        </div>
      </Reveal>
      <div className="case-list">
        {projects
          .filter((project) => project.featured)
          .map((project, index) => (
            <CaseStudy key={project.id} project={project} index={index} />
          ))}
      </div>
    </section>
  );
}
