import React from 'react';
import './EmailCard.css';

const EmailCard = () => {
  return (
    <div className="email-card">
      <div className="email-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </div>
      <h3 className="email-heading">Email Us</h3>
      <p className="email-subtext">Send us an email anytime</p>
      <a href="mailto:skywebdevelopers123@gmail.com" className="email-link">
        skywebdevelopers123@gmail.com
      </a>
    </div>
  );
};

export default EmailCard;
