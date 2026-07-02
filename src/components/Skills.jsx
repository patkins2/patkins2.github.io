import React from 'react';

function Skills({ skills }) {
  return (
    <section id="skills" className="section-card">
      <div className="section-heading">
        <h2>Skills</h2>
      </div>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
