
import { ExternalLink, Code2 } from "lucide-react";
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">
        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">
            <Code2 size={18} />
            Source Code
          </a>

          <a href={project.demo} target="_blank" rel="noreferrer">
            <ExternalLink size={17} />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
