import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './../assets/styles/header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="hero" smooth={true} duration={500} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="experience" smooth={true} duration={500} className="nav-link">Experience</Link>
          </li>
          <li className="nav-item">
            <Link to="education" smooth={true} duration={500} className="nav-link">Education</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;