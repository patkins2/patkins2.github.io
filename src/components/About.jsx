import React from 'react';

function About({ aboutText, personalInfo }) {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="tooltip">
        <a href={`/${personalInfo.resumeFile}`} target="_blank" rel="noopener noreferrer">
          <img 
            className="wiggle" 
            src="/images/headshot.jpg" 
            alt="Paul Atkins - Headshot" 
            style={{ width: '200px', height: 'auto', borderRadius: '50%', marginBottom: '20px' }}
          />
        </a>
        <span className="tooltiptext">Click here for a copy of my resume</span>
        <div className="cta-arrow left-arrow"></div>
      </div>
      <p>{aboutText}</p>
      
      <h2>Contact</h2>
      <p>Feel free to reach out to me via email or find me on social media.</p>

      {/* Social Media Icons */}
      <div>
        <a href={`mailto:${personalInfo.email}`}>
          <img src="/images/email_icon.png" alt="Email Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin_icon.png" alt="LinkedIn Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        </a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
          <img src="/images/github_icon.png" alt="Github Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        </a>
        <a href={personalInfo.artstation} target="_blank" rel="noopener noreferrer">
          <img src="/images/artstation_icon.png" alt="ArtStation Icon" style={{ width: '50px', height: '50px' }} />
        </a>
      </div>
    </section>
  );
}

export default About;
