import React from "react";

function About({ sectionRef }) {
  return (
    <section id="about" ref={sectionRef}>
      <h2>About Me</h2>
      <p>
        Write a short bio about yourself here. Mention your skills, experience, and what you're passionate about.
      </p>
    </section>
  );
}

export default About;