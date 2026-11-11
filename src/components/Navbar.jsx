
import { Code2, Menu, ExternalLink } from "lucide-react";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Code2 size={28} />
        <span>DevPortfolio</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </div>

      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="github-link"
      >
        <ExternalLink size={18} />
        GitHub
      </a>

      <Menu className="mobile-menu" size={25} />
    </nav>
  );
}

export default Navbar;
