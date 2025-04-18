import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './../assets/styles/skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-divider"></div>
      </div>
      <div className="skills-container">
        <div className="skill-category">
          <h3 className="skill-category-title">Languages</h3>
          <ul className="skill-list">
            {portfolioData.skills.languages.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3 className="skill-category-title">Web Development</h3>
          <ul className="skill-list">
            {portfolioData.skills.web.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3 className="skill-category-title">Mobile Development</h3>
          <ul className="skill-list">
            {portfolioData.skills.mobile.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3 className="skill-category-title">ML/DL Tools</h3>
          <ul className="skill-list">
            {portfolioData.skills.ml.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3 className="skill-category-title">Cloud</h3>
          <ul className="skill-list">
            {portfolioData.skills.cloud.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3 className="skill-category-title">Tools</h3>
          <ul className="skill-list">
            {portfolioData.skills.tools.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3 className="skill-category-title">Areas of Interest</h3>
          <ul className="skill-list">
            {portfolioData.skills.interests.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;