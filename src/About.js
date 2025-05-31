import React from "react";

function About({ sectionRef }) {
  return (
    <section id="about" ref={sectionRef}>
      <h2>About Me</h2>
      <p>
        Hi, I'm Thomas and I'm currently an Electrical Engineer for Ford Motor Company interested in Embedded Systems and hardware design. I graduated from Washington University in St. Louis (WashU) in May of 2025 with a B.S. in Electrical Engineering and Computer Science. During my time in undergraduate studies, I completed a Co-op for Emerson Electric's Professional Tools teams, working for brands like Greenlee and Ridgid. I also programmed FPGAs for the school's Physics department. Currently, I'm working to contribute to open source projects such as the Zephyr RTOS. Outside of my professional interests, I'm an avid runner and practice Chinese Yoyo (Diabolo).      </p>
    </section>
  );
}

export default About;