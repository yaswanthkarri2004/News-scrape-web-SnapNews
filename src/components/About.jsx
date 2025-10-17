import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <img
          className="profile-img"
          src="data:image/jpeg;base64,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" // Replace with your real profile picture if you want
          alt="Yaswanth Karri"
        />
      </div>

      <p>
        Hi, I'm <strong>Yaswanth Karri</strong>, a 21-year-old Computer Science
        Engineering student. I love building projects with React, React Native,
        Node.js, and AI/ML technologies.
      </p>

      <p>
        I have hands-on experience working on multiple projects:
        <ul>
          <li>AI-powered music player app using ML for personalized suggestions</li>
          <li>Malaria and pneumonia detection using YOLO and CvT models</li>
          <li>Time zone converter app and versioned PDF viewer apps in React Native</li>
        </ul>
      </p>

      <p>
        I’ve interned as a Python and App Development intern, learning web
        development, front-end UI/UX design, and backend development with Node.js.
        Currently, I’m exploring NLP and Java backend development.
      </p>

      <h2>Connect with me:</h2>
      <div className="social-links">
        <a
          href="https://github.com/yaswanthkarri2004"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yaswanthkarri2004/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/yaswanthkarri2004/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default About;
