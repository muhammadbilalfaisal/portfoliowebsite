import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

function ProjectCard({ project, index }) {
  const content = (
    <article className="editorial-project-card">
      <div className="editorial-project-image">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          width={project.imageWidth ?? 1919}
          height={project.imageHeight ?? 1079}
          loading="lazy"
          decoding="async"
        />
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="editorial-project-meta">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <time>{project.year}</time>
        {project.projectUrl && <ArrowUpRight aria-hidden="true" />}
      </div>
    </article>
  );

  return project.projectUrl ? (
    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

export default function CaseStudies() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="work" className="section editorial-work">
      <Reveal>
        <div className="work-heading">
          <div>
            <span className="micro-label">Selected work / 03</span>
            <h2>PROJECTS BUILT FOR REAL USE</h2>
          </div>
          <p>
            Websites, platforms, and commerce experiences developed around clear
            communication, useful workflows, and responsive execution.
          </p>
        </div>
      </Reveal>

      <div className="editorial-project-grid">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.045}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
