import React from 'react';
import './../assets/styles/glassmorphism.css';

const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`glass-card ${className}`}>
      <div className="glass-card-inner">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;