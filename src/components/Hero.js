import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SocialLinks from './SocialLinks';
import AnimatedBackground from './AnimatedBackground';
import './../assets/styles/hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <AnimatedBackground />
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">{portfolioData.name}</span>
        </h1>
        <h2 className="hero-subtitle">
          Computer Science & <span className="gradient-text">AI</span> Student
        </h2>
        <p className="hero-text">
          Solving real-world problems through <span className="gradient-text">technology</span>
        </p>
        <div className="hero-links">
          <SocialLinks />
          <a href="#projects" className="hero-cta">
            View My Work
            <svg className="cta-arrow" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;