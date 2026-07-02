import React from 'react';

function About({ aboutText, personalInfo }) {
  return (
    <section id="about" className="section-card about-section">
      <div className="section-heading">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="profile-wrap tooltip">
          <a href={`/${personalInfo.resumeFile}`} target="_blank" rel="noopener noreferrer" aria-label="Open resume">
            <img
              className="profile-photo"
              src="/images/headshot.jpg"
              alt="Paul Atkins headshot"
            />
          </a>
          <span className="tooltiptext">Click to open resume</span>
        </div>
        <div className="about-copy">
          <p>{aboutText}</p>
          <h3>Contact</h3>
          <p>Feel free to reach out by email or connect with me on social platforms.</p>
          <div className="social-links" aria-label="Social links">
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <img src="/images/email_icon.png" alt="Email" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/images/linkedin_icon.png" alt="LinkedIn" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="Github">
              <img src="/images/github_icon.png" alt="Github" />
            </a>
            <a href={personalInfo.artstation} target="_blank" rel="noopener noreferrer" aria-label="ArtStation">
              <img src="/images/artstation_icon.png" alt="ArtStation" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
