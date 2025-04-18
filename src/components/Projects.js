import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './../assets/styles/projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <div className="section-divider"></div>
      </div>
      <div className="projects-container">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-duration">{project.duration}</span>
            </div>
            <div className="project-tech">{project.tech}</div>
            <ul className="project-points">
              {project.points.map((point, i) => (
                <li key={i} className="project-point">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;