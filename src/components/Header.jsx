import React from 'react';

function Header({ name, title }) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{title}</p>
    </header>
  );
}

export default Header;
