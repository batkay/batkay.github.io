import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    details: "Here is a longer explanation of Project One, what you built, and what technologies you used.",
    link: "https://github.com/yourusername/project-one",
    thumbnail: "https://via.placeholder.com/300x180?text=Project+One+Thumb",
    images: [
      "https://via.placeholder.com/300x180?text=Project+One+Image+1",
      "https://via.placeholder.com/300x180?text=Project+One+Image+2"
    ]
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    details: "Here is a longer explanation of Project Two, what you built, and what technologies you used.",
    thumbnail: "https://via.placeholder.com/300x180?text=Project+Two+Thumb",
    images: [
      "https://via.placeholder.com/300x180?text=Project+Two+Image+1"
    ]
  }
];

function Projects() {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, idx) => (
          <div
            className={`project-card${expanded === idx ? " expanded" : ""}`}
            key={project.title}
            onClick={() => handleExpand(idx)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              className="project-thumbnail"
            />
            <h3>
              {project.title}
              <span className="expand-arrow" aria-hidden="true">
                ▼
              </span>
            </h3>
            <div className={`project-details-animated${expanded === idx ? " expanded" : ""}`}>
                <>
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
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on GitHub
                      </a>
                    )}
                </>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;