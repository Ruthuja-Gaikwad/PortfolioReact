import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './../assets/styles/social.css';

const SocialLinks = () => {
  const { email, github, linkedin, portfolio } = portfolioData;

  return (
    <div className="social-links">
      {email && (
        <a href={`mailto:${email}`} className="social-link" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
      )}
      {portfolio && (
        <a href={portfolio} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Portfolio Website">
          <i className="fas fa-globe"></i>
        </a>
      )}
    </div>
  );
};

export default SocialLinks;