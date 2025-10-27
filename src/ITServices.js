import React, { useEffect } from 'react';
import './ITServices.css';

function ITServices({ onNavigate }) {
  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.it-content, .service-card, .solution-card, .pricing-card, .support-item');
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
    <div className="it-services-page">
      {/* Hero Section */}
      <section className="it-hero">
        <div className="it-hero-content">
          <div className="hero-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h1 className="it-hero-title">IT Services</h1>
          <p className="it-hero-subtitle">
            Comprehensive IT solutions including consulting, maintenance, cloud services, and technical support
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <div className="it-content">
            <h2 className="section-title">Complete IT Solutions</h2>
            <p className="section-description">
              We provide comprehensive IT services to help businesses optimize their technology infrastructure. 
              From cloud migration to system maintenance, our expert team ensures your IT systems run smoothly, 
              securely, and efficiently. Partner with us for reliable technical support and strategic IT consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our IT Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3>Cloud Services</h3>
              <p>AWS, Azure, and Google Cloud migration, setup, and optimization</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <h3>System Maintenance</h3>
              <p>Regular updates, security patches, and performance optimization</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Cybersecurity</h3>
              <p>Security audits, firewall setup, and data protection strategies</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>IT Consulting</h3>
              <p>Strategic planning and technology roadmap development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <h2 className="section-title">IT Solutions We Provide</h2>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>Network Setup</h3>
              <p>Complete network infrastructure design, installation, and configuration</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>Cloud Migration</h3>
              <p>Seamless migration of applications and data to cloud platforms</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                </svg>
              </div>
              <h3>Database Management</h3>
              <p>Database design, optimization, and maintenance services</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <h3>DevOps Solutions</h3>
              <p>CI/CD pipeline setup, automation, and deployment strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="support-section">
        <div className="container">
          <h2 className="section-title">Technical Support</h2>
          <div className="support-grid">
            <div className="support-item">
              <h4>24/7 Monitoring</h4>
              <p>Round-the-clock system monitoring and alert management</p>
            </div>
            <div className="support-item">
              <h4>Remote Support</h4>
              <p>Quick remote assistance for immediate issue resolution</p>
            </div>
            <div className="support-item">
              <h4>On-site Service</h4>
              <p>Physical support when remote solutions aren't sufficient</p>
            </div>
            <div className="support-item">
              <h4>Preventive Maintenance</h4>
              <p>Regular checkups to prevent system failures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section removed as requested */}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Need IT Support?</h2>
            <p className="cta-text">
              Let's discuss your IT requirements and find the best solution
            </p>
            <button 
              className="cta-btn"
              onClick={() => onNavigate && onNavigate('Contact')}
            >
              Get IT Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ITServices;
