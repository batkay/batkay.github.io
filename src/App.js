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
  const [menuOpen, setMenuOpen] = useState(false);

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
          <button
            className={`navbar-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            >
            {/* Simple hamburger icon */}
            <span />
            <span />
            <span />
          </button>
          <div className={`navbar-links${menuOpen ? " open" : ""}`}>
            <div className="navbar-links-center">

              <button onClick={() => { scrollToSection(aboutRef); setMenuOpen(false); }}>About</button>
              <button onClick={() => { scrollToSection(projectsRef); setMenuOpen(false); }}>Projects</button>
              <button onClick={() => { scrollToSection(contactRef); setMenuOpen(false); }}>Contact</button>
            </div>
            <div className="navbar-links-right">
              <button
                className="theme-toggle"
                onClick={() => setDarkMode((m) => !m)}
                aria-label="Toggle dark mode"
              >
                {darkMode ? "🌙" : "☀️"}
              </button>
            </div>
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
        <section id="about" ref={aboutRef} className="section-about">
          <About/>
        </section>
        <section id="projects" ref={projectsRef} className="section-projects">
          <Projects/>
        </section>

        <section id="contact" ref={contactRef} className="section-contact">
          <Contact sectionRef={contactRef} className="section-contact"/>
        </section>

        <footer>
          <p>&copy; {new Date().getFullYear()} Your Name</p>
        </footer>
      </div>
    </div>
  );
}

export default App;