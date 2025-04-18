import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './../assets/styles/about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className='about-container'>
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
      </div>
      <div className="about-content">
        <p className="about-text">{portfolioData.summary}</p>
      </div>
      </div>
    </section>
  );
};

export default About;