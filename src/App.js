import React, { useRef, useState, useEffect } from "react";
import "./App.css";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    details: "Here is a longer explanation of Project One, what you built, and what technologies you used.",
    link: "https://github.com/yourusername/project-one",
    images: [
      "https://via.placeholder.com/300x180?text=Project+One+Image+1",
      "https://via.placeholder.com/300x180?text=Project+One+Image+2"
    ]
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    details: "Here is a longer explanation of Project Two, what you built, and what technologies you used.",
    link: "https://github.com/yourusername/project-two",
    images: [
      "https://via.placeholder.com/300x180?text=Project+Two+Image+1"
    ]
  }
];


function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);
  const [expanded, setExpanded] = useState(null); // Track expanded project

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDarkMode(saved === "true");
  }, []);
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleExpand = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <span className="navbar-title">Your Name</span>
          <div className="navbar-links">
            <button onClick={() => scrollToSection(aboutRef)}>About</button>
            <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
            <button onClick={() => scrollToSection(contactRef)}>Contact</button>
            <button
              className="theme-toggle"
              onClick={() => setDarkMode((m) => !m)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>
      </nav>

      <div className="container">
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="Your Avatar"
            className="avatar"
          />
          <h1>Your Name</h1>
          <p>Web Developer | Designer | Creator</p>
        </header>

        <section id="about" ref={aboutRef}>
          <h2>About Me</h2>
          <p>
            Write a short bio about yourself here. Mention your skills, experience, and what you're passionate about.
          </p>
        </section>

        <div className="projects">
          {projects.map((project, idx) => (
            <div
              className={`project-card ${expanded === idx ? "expanded" : ""}`}
              key={project.title}
              onClick={() => handleExpand(idx)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                className="project-thumbnail"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {expanded === idx && (
                <div className="project-details">
                  <p>{project.details}</p>
                  <div className="project-images">
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="project-image"
                      />
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>


        <section id="contact" ref={contactRef}>
          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <p>
            LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a>
          </p>
        </section>

        <footer>
          <p>&copy; {new Date().getFullYear()} Your Name</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
