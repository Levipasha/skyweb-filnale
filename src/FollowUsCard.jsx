import React from 'react';
import './FollowUsCard.css';

const FollowUsCard = () => {
  return (
    <div className="follow-card">
      <div className="follow-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      </div>
      <h3 className="follow-heading">Follow Us</h3>
      <p className="follow-subtext">Stay updated with our latest</p>
      <a href="https://instagram.com/skyweb_dev" className="follow-link" target="_blank" rel="noopener noreferrer">
        @skyweb_dev
      </a>
    </div>
  );
};

export default FollowUsCard;
