import React from "react";

function Contact({ sectionRef }) {
  return (
    <section id="contact" ref={sectionRef}>
      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:your.email@example.com">your.email@example.com</a>
      </p>
      <p>
        LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a>
      </p>
    </section>
  );
}

export default Contact;