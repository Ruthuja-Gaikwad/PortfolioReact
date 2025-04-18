import React, { useState } from 'react';
import GlassCard from './GlassCard';
import './../assets/styles/projectShowcase.css';

const ProjectShowcase = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="project-showcase">
      <div className="project-showcase-main">
        <GlassCard className="project-featured">
          <h3>{projects[activeIndex].title}</h3>
          <p className="project-tech">{projects[activeIndex].tech}</p>
          <ul className="project-points">
            {projects[activeIndex].points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </GlassCard>
      </div>
      
      <div className="project-showcase-thumbnails">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`project-thumbnail ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <h4>{project.title}</h4>
            <p>{project.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;