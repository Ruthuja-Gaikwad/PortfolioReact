import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './../assets/styles/education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <div className="section-divider"></div>
      </div>
      <div className="education-container">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h3 className="education-degree">{edu.degree}</h3>
              <span className="education-duration">{edu.duration}</span>
            </div>
            <div className="education-institution">{edu.institution}</div>
            <div className="education-details">{edu.details}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;