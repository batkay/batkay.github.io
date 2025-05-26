import React, { useRef, useState, useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Badge from "./Badge";
import "./App.css";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);

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
              {darkMode ? "🌙" : "☀️"}
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
        <Badge/>
        <About sectionRef={aboutRef} />
        <div ref={projectsRef}>
          <Projects />
        </div>
        <Contact sectionRef={contactRef} />

        <footer>
          <p>&copy; {new Date().getFullYear()} Your Name</p>
        </footer>
      </div>
    </div>
  );
}

export default App;