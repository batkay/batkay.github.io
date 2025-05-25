import React from "react";

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
    link: "https://github.com/yourusername/project-two",
    thumbnail: "https://via.placeholder.com/300x180?text=Project+Two+Thumb",
    images: [
      "https://via.placeholder.com/300x180?text=Project+Two+Image+1"
    ]
  }
];


function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
