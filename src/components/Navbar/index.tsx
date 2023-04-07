import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import { routes } from '../../routes';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar_links ${isOpen ? 'active' : ''}`}>
        {routes.map((e, i) => <Link to={e.link} className="navbar_link hover_3" key={i} onClick={toggleNavbar}>{e.name}</Link>)}
      </div>
      <div className={`navbar_burger ${isOpen ? 'active' : ''} hover_3`} onClick={toggleNavbar}>
        <span className="navbar_burger-line"></span>
        <span className="navbar_burger-line"></span>
        <span className="navbar_burger-line"></span>
      </div>
    </nav>
  );
};
