import React from 'react';

function Education({ education }) {
  return (
    <section id="education">
      <h2>Education</h2>
      <ul>
        {education.map((edu) => (
          <li key={edu.id}>
            <h3>{edu.degree}</h3>
            <p>{edu.school} - {edu.location} | {edu.dates}</p>
            {edu.minors && <p>Minors: {edu.minors}</p>}
            <p>GPA: {edu.gpa}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
