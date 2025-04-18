import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './../assets/styles/experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <div className="section-divider"></div>
      </div>
      <div className="experience-container">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3 className="experience-role">{exp.role} – {exp.organization}</h3>
              <span className="experience-duration">{exp.duration}</span>
            </div>
            <div className="experience-project">{exp.project}</div>
            <ul className="experience-points">
              {exp.points.map((point, i) => (
                <li key={i} className="experience-point">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;