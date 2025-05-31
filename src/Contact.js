import React from "react";

function Contact({ sectionRef }) {
  return (
    <section id="contact" ref={sectionRef}>
      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:thomaslang2003@icloud.com">thomaslang2003@icloud.com</a>
      </p>
      <p>
        Resume: <a href="/august_2024_resume.pdf" target="_blank" rel="noreferrer">august_2024_resume.pdf</a>
      </p>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/thlang03/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/thlang03/</a>
      </p>
      <p>
        GitHub: <a href="https://github.com/batkay" target="_blank" rel="noreferrer">https://github.com/batkay</a>
      </p>
    </section>
  );
}

export default Contact;