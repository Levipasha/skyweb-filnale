import React, { useEffect } from 'react';
import './Internship.css';

function Internship() {
  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.coming-soon-section, .feature-card');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="internship-page">
      {/* Hero Section */}
      <section className="internship-hero">
        <div className="internship-hero-content">
          <h1 className="internship-hero-title">Internship Program</h1>
          <p className="internship-hero-subtitle">Join SkyWeb and kickstart your career in web development</p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="coming-soon-section">
        <div className="coming-soon-container">
          <div className="coming-soon-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
            </svg>
          </div>
          <h1 className="coming-soon-title">Coming Soon</h1>
          <p className="coming-soon-subtitle">This feature will be available soon</p>
          <p className="coming-soon-description">
            We're working hard to bring you the best internship experience. Stay tuned!
          </p>
        </div>
      </section>

      {/* Features Preview */}
      <section className="features-preview">
        <div className="features-container">
          <h2 className="features-title">What to Expect</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Hands-on Learning</h3>
              <p>Work on real-world projects and gain practical experience with modern web technologies.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Expert Mentorship</h3>
              <p>Learn from experienced developers and get guidance throughout your internship journey.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Skill Development</h3>
              <p>Enhance your technical skills and build a strong foundation for your career in tech.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notify Section */}
      <section className="notify-section">
        <div className="notify-container">
          <h2 className="notify-title">Stay Updated</h2>
          <p className="notify-text">Get notified when our internship program launches!</p>
          <form className="notify-form">
            <input 
              type="email" 
              className="notify-input" 
              placeholder="Enter your email address"
            />
            <button type="submit" className="notify-btn">Notify Me</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Internship;


