import React, { useState } from 'react';

function WorkExperience({ experiences }) {
  const [expandedJobs, setExpandedJobs] = useState({});

  const toggleJob = (jobId) => {
    setExpandedJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  return (
    <section id="work-experience">
      <h2>Work Experience</h2>
      <ul>
        {experiences.map((job) => (
          <li key={job.id}>
            <h3 
              onClick={() => toggleJob(job.id)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              {expandedJobs[job.id] ? '▼' : '▶'} {job.title}
            </h3>
            <p>{job.company} - {job.location} | {job.dates}</p>
            {expandedJobs[job.id] && (
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                {Array.isArray(job.description) ? (
                  job.description.map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                  ))
                ) : (
                  <li>{job.description}</li>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkExperience;
