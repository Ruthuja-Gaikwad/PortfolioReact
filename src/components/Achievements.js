import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './../assets/styles/achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-header">
        <h2 className="section-title">Achievements & Certifications</h2>
        <div className="section-divider"></div>
      </div>
      <div className="achievements-container">
        <div className="achievements-list">
          <h3 className="achievements-subtitle">Achievements</h3>
          <ul>
            {portfolioData.achievements.map((achievement, index) => (
              <li key={index} className="achievement-item">{achievement}</li>
            ))}
          </ul>
        </div>
        <div className="certifications-list">
          <h3 className="achievements-subtitle">Certifications</h3>
          <ul>
            {portfolioData.certifications.map((cert, index) => (
              <li key={index} className="certification-item">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.name} – {cert.issuer} ({cert.date})
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="extracurricular">
        <h3 className="achievements-subtitle">Extra-Curricular Activities</h3>
        <ul>
          {portfolioData.extracurricular.map((item, index) => (
            <li key={index} className="extracurricular-item">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;