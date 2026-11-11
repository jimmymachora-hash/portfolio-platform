
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Wordly Dictionary",
      category: "Web Development",
      description: "A modern dictionary application that allows users to search words, view meanings and listen to pronunciation.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/",
      demo: "https://github.com/",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      category: "API Integration",
      description: "A weather application that displays weather information using external APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
      technologies: ["JavaScript", "API", "CSS"],
      github: "https://github.com/",
      demo: "https://github.com/",
    },
    {
      id: 3,
      title: "Trivia Challenge",
      category: "JavaScript Application",
      description: "An interactive timed quiz application that challenges users with interesting questions.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      technologies: ["JavaScript", "Node.js"],
      github: "https://github.com/",
      demo: "https://github.com/",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function handleAddProject(newProject) {
    setProjects((previousProjects) => [
      newProject,
      ...previousProjects,
    ]);
  }

  const filteredProjects = projects.filter((project) => {
    const searchText = searchTerm.toLowerCase();

    return (
      project.title.toLowerCase().includes(searchText) ||
      project.category.toLowerCase().includes(searchText) ||
      project.description.toLowerCase().includes(searchText) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchText)
      )
    );
  });

  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="hero-tag">MY CREATIVE SPACE</span>

            <h1>
              Turning Ideas Into
              <span> Digital Experiences.</span>
            </h1>

            <p>
              Welcome to my portfolio. Explore my projects,
              discover my skills and see what I have been
              building with technology.
            </p>

            <a href="#projects" className="hero-button">
              Explore Projects
            </a>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div>
              <span className="section-tag">MY WORK</span>
              <h2>Featured Projects</h2>
              <p>
                A collection of projects I've created and
                technologies I've explored.
              </p>
            </div>

            <span className="project-count">
              {filteredProjects.length} Projects
            </span>
          </div>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <ProjectList projects={filteredProjects} />
        </section>

        <section className="add-project-section" id="add-project">
          <ProjectForm onAddProject={handleAddProject} />
        </section>

        <section className="about-section" id="about">
          <h2>About This Portfolio</h2>
          <p>
            This portfolio is built with React to showcase
            creative projects, demonstrate development skills
            and make it easy to discover new work.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} DevPortfolio. Built with React.
        </p>
      </footer>
    </div>
  );
}

export default App;
