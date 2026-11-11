
import { useState } from "react";
import { Plus } from "lucide-react";

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    technologies: "",
    github: "",
    demo: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newProject = {
      id: Date.now(),
      ...formData,
      technologies: formData.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
    };

    onAddProject(newProject);

    setFormData({
      title: "",
      category: "",
      description: "",
      image: "",
      technologies: "",
      github: "",
      demo: "",
    });
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add a New Project</h2>

      <input
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        name="category"
        placeholder="Category (e.g. Web Development)"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <input
        name="image"
        type="url"
        placeholder="Project Image URL"
        value={formData.image}
        onChange={handleChange}
        required
      />

      <input
        name="technologies"
        placeholder="Technologies (React, CSS, JavaScript)"
        value={formData.technologies}
        onChange={handleChange}
        required
      />

      <input
        name="github"
        type="url"
        placeholder="GitHub Repository URL"
        value={formData.github}
        onChange={handleChange}
        required
      />

      <input
        name="demo"
        type="url"
        placeholder="Live Demo URL"
        value={formData.demo}
        onChange={handleChange}
        required
      />

      <button type="submit">
        <Plus size={18} />
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;
