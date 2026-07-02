import React from 'react';

function Header({ name, title }) {
  return (
    <header className="hero">
      <div className="hero-inner">
        <h1>{name}</h1>
        <p className="hero-title">{title}</p>
        <a className="hero-cta" href="#projects">View Projects</a>
      </div>
    </header>
  );
}

export default Header;
