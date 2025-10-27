import React, { useEffect } from 'react';
import './CollegeProjects.css';

function CollegeProjects({ onNavigate }) {
  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.college-content, .service-card, .project-card, .pricing-card, .process-step');
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
    <div className="college-projects-page">
      {/* Hero Section */}
      <section className="college-hero">
        <div className="college-hero-content">
          <div className="hero-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h1 className="college-hero-title">College Projects</h1>
          <p className="college-hero-subtitle">
            Expert assistance with academic projects, from concept to completion
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <div className="college-content">
            <h2 className="section-title">Academic Project Support</h2>
            <p className="section-description">
              We understand the challenges students face with academic projects. Our team provides comprehensive 
              support for college projects across various domains including computer science, engineering, 
              and technology. From concept development to final implementation, we help students achieve 
              academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">What We Help With</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>Web Development</h3>
              <p>Full-stack web applications, e-commerce sites, and interactive web projects</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3>Mobile Apps</h3>
              <p>iOS, Android, and cross-platform mobile applications for academic projects</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <h3>Software Development</h3>
              <p>Desktop applications, system software, and programming projects</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>AI & Machine Learning</h3>
              <p>Machine learning models, AI algorithms, and data science projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="project-types-section">
        <div className="container">
          <h2 className="section-title">Popular Project Types</h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>E-commerce Platform</h3>
              <p>Complete online shopping systems with payment integration and admin panels</p>
            </div>
            <div className="project-card">
              <div className="project-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Student Management System</h3>
              <p>Comprehensive systems for managing student data, grades, and academic records</p>
            </div>
            <div className="project-card">
              <div className="project-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                </svg>
              </div>
              <h3>Real-time Chat Application</h3>
              <p>Instant messaging apps with real-time communication features</p>
            </div>
            <div className="project-card">
              <div className="project-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3zM9 9h6v6H9z"/>
                </svg>
              </div>
              <h3>Game Development</h3>
              <p>Interactive games using modern game development frameworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">How We Help</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Project Discussion</h3>
              <p>We discuss your requirements, timeline, and academic guidelines</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning & Design</h3>
              <p>Create project structure, wireframes, and technical documentation</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p>Build your project with clean, well-commented code</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Documentation</h3>
              <p>Provide comprehensive documentation and presentation materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section removed as requested */}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Need Help with Your Project?</h2>
            <p className="cta-text">
              Let's discuss your academic project requirements
            </p>
            <button 
              className="cta-btn"
              onClick={() => onNavigate && onNavigate('Contact')}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CollegeProjects;
