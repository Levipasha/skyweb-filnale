import React, { useEffect } from 'react';
import './Apps.css';

function Apps({ onNavigate }) {
  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.app-content, .feature-card, .platform-card, .pricing-card, .tech-item');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="apps-page">
      {/* Hero Section */}
      <section className="apps-hero">
        <div className="apps-hero-content">
          <div className="hero-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
          </div>
          <h1 className="apps-hero-title">We Build Apps</h1>
          <p className="apps-hero-subtitle">
            Intuitive mobile and web applications designed for seamless user experiences
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <div className="app-content">
            <h2 className="section-title">Mobile & Web App Development</h2>
            <p className="section-description">
              We create powerful, user-friendly applications that work seamlessly across all platforms. 
              Whether you need a mobile app for iOS and Android, a progressive web app, or a cross-platform 
              solution, we deliver exceptional user experiences with modern technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="platform-section">
        <div className="container">
          <h2 className="section-title">Our Platform Expertise</h2>
          <div className="platform-grid">
            <div className="platform-card">
              <div className="platform-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3>Mobile Apps</h3>
              <p>Native iOS and Android apps with React Native for cross-platform development</p>
            </div>
            <div className="platform-card">
              <div className="platform-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>Web Applications</h3>
              <p>Progressive web apps and responsive web applications with modern frameworks</p>
            </div>
            <div className="platform-card">
              <div className="platform-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Cross-Platform</h3>
              <p>Single codebase solutions that work across multiple platforms seamlessly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">App Features We Build</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <h3>User Authentication</h3>
              <p>Secure login systems with social media integration and biometric authentication</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                </svg>
              </div>
              <h3>Real-time Updates</h3>
              <p>Live data synchronization and real-time notifications</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3>Cloud Integration</h3>
              <p>Seamless cloud storage and database integration</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16,8 20,8 23,11 23,16 16,16"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <h3>E-commerce Features</h3>
              <p>Payment processing, inventory management, and order tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology-section">
        <div className="container">
          <h2 className="section-title">Technologies We Use</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>Frontend</h4>
              <p>React Native, Flutter, React, Vue.js, TypeScript</p>
            </div>
            <div className="tech-item">
              <h4>Backend</h4>
              <p>Node.js, Express.js, Firebase, MongoDB, PostgreSQL</p>
            </div>
            <div className="tech-item">
              <h4>Cloud & APIs</h4>
              <p>AWS, Google Cloud, REST APIs, GraphQL</p>
            </div>
            <div className="tech-item">
              <h4>Mobile</h4>
              <p>iOS (Swift), Android (Kotlin), React Native</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section removed as requested */}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build Your App?</h2>
            <p className="cta-text">
              Let's create an app that your users will love
            </p>
            <button 
              className="cta-btn"
              onClick={() => onNavigate && onNavigate('Contact')}
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Apps;
