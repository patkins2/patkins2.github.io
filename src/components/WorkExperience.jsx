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
    <section id="work-experience" className="section-card">
      <div className="section-heading">
        <h2>Work Experience</h2>
      </div>
      <ul className="experience-list">
        {experiences.map((job) => (
          <li key={job.id} className="experience-item">
            <button
              type="button"
              onClick={() => toggleJob(job.id)}
              className="experience-toggle"
              aria-expanded={Boolean(expandedJobs[job.id])}
            >
              <span className="experience-chevron" aria-hidden="true">{expandedJobs[job.id] ? '▼' : '▶'}</span>
              <span>{job.title}</span>
            </button>
            <p className="experience-meta">{job.company} | {job.location} | {job.dates}</p>
            {expandedJobs[job.id] && (
              <ul className="bullet-list">
                {Array.isArray(job.description) ? (
                  job.description.map((item, index) => (
                    <li key={index}>{item}</li>
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
