import React, { useState } from 'react';

function WorkExperience({ experiences }) {
  const [expandedJobs, setExpandedJobs] = useState({});

  const toggleJob = (jobId) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [jobId]: !prev[jobId],
    }));
  };

  return (
    <section id="work-experience" className="section-card">
      <div className="section-heading">
        <h2>Work Experience</h2>
      </div>
      <ul className="experience-list">
        {experiences.map((job) => (
          <li key={job.id} className={`experience-item ${expandedJobs[job.id] ? 'is-open' : ''}`}>
            <button
              type="button"
              className="experience-toggle"
              onClick={() => toggleJob(job.id)}
              aria-expanded={Boolean(expandedJobs[job.id])}
            >
              <span className="experience-chevron">▸</span>
              <span>{job.title}</span>
            </button>
            <p className="experience-meta">{job.company} | {job.location} | {job.dates}</p>
            <div className="experience-details">
              <ul className="bullet-list">
                {Array.isArray(job.description) ? (
                  job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                ) : (
                  <li>{job.description}</li>
                )}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkExperience;
