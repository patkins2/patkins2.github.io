import React from 'react';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import ProjectGrid from './components/ProjectGrid';
import Education from './components/Education';
import { personalInfo, aboutText, workExperience, skills, projects, education } from './data/portfolioData';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header name={personalInfo.name} title={personalInfo.title} />
      <About aboutText={aboutText} personalInfo={personalInfo} />
      <WorkExperience experiences={workExperience} />
      <Skills skills={skills} />
      <ProjectGrid projects={projects} />
      <Education education={education} />
    </div>
  );
}

export default App;
