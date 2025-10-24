import React from 'react';
import './VisitUsCard.css';

const VisitUsCard = () => {
  return (
    <div className="visit-card">
      <div className="visit-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
      <h3 className="visit-heading">Visit Us</h3>
      <p className="visit-subtext">Come say hello</p>
      <div className="visit-address">
        Uppal, Hyderabad Telangana, India
      </div>
    </div>
  );
};

export default VisitUsCard;
