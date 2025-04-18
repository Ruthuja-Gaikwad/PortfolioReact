import React from 'react';
import './../assets/styles/skillDial.css';

const SkillDial = ({ name, level, color }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div className="skill-dial">
      <svg className="skill-dial-svg" viewBox="0 0 100 100">
        <circle
          className="skill-dial-bg"
          cx="50"
          cy="50"
          r="45"
          strokeWidth="8"
        />
        <circle
          className="skill-dial-fill"
          cx="50"
          cy="50"
          r="45"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          stroke={color}
        />
      </svg>
      <div className="skill-dial-text">
        <span className="skill-dial-percent">{level}%</span>
        <span className="skill-dial-name">{name}</span>
      </div>
    </div>
  );
};

export default SkillDial;