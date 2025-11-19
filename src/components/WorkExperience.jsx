import React from 'react';

function WorkExperience({ experiences }) {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>
      <ul>
        {experiences.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location} | {job.dates}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkExperience;
