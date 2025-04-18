import React from 'react';
import './../assets/styles/timeline.css'; // Import your CSS file for styling

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h4>{event.title}</h4>
            <p className="timeline-date">{event.date}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;