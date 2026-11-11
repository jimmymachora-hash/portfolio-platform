
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <h3>No projects found</h3>
        <p>Try another search or add a new project.</p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectList;
