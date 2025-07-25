import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo-link">
          <img src={logo} alt="Hotel Logo" className="navbar-logo" />
        </a>

        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="../rooms">Rooms</a></li>
          <li><a href="../services">Services</a></li>
          <li><a href="../gallery">Gallery</a></li>
          <li><a href="../contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
