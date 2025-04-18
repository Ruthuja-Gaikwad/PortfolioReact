import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SocialLinks from './SocialLinks';
import './../assets/styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <p>
            <a href={`mailto:${portfolioData.email}`} className="footer-link">
              {portfolioData.email}
            </a>
          </p>
          <p>
            <a href={`tel:${portfolioData.phone}`} className="footer-link">
              {portfolioData.phone}
            </a>
          </p>
        </div>
        <div className="footer-social">
          <SocialLinks />
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} <strong>{portfolioData.name}</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;