import React from 'react';

function Header({ name, title }) {
  const smoothScrollTo = (targetY, duration = 700) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t) => {
      if (t < 0.5) {
        return 4 * t * t * t;
      }
      return 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleProjectsClick = (event) => {
    event.preventDefault();

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const y = projectsSection.getBoundingClientRect().top + window.scrollY - 16;
      smoothScrollTo(y);
      window.history.replaceState(null, '', '#projects');
      return;
    }

    window.location.hash = 'projects';
  };

  return (
    <header className="hero">
      <div className="hero-inner">
        <h1>{name}</h1>
        <p className="hero-title">{title}</p>
        <a className="hero-cta" href="#projects" onClick={handleProjectsClick}>View Projects</a>
      </div>
    </header>
  );
}

export default Header;
