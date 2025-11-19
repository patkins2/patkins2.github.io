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
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {Array.isArray(job.description) ? (
                job.description.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                ))
              ) : (
                <li>{job.description}</li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkExperience;
