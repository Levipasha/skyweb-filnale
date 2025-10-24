import React, { useEffect } from 'react';
import './ManyMore.css';

function ManyMore({ onNavigate }) {
  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.many-more-content, .service-card, .solution-card, .pricing-card, .industry-item');
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
    <div className="many-more-page">
      {/* Hero Section */}
      <section className="many-more-hero">
        <div className="many-more-hero-content">
          <div className="hero-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h1 className="many-more-hero-title">And Many More</h1>
          <p className="many-more-hero-subtitle">
            Custom solutions tailored to your unique needs. From e-commerce to enterprise systems, we've got you covered.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <div className="many-more-content">
            <h2 className="section-title">Custom Solutions for Every Need</h2>
            <p className="section-description">
              Beyond our core services, we specialize in creating custom solutions that address unique business challenges. 
              Our team combines creativity with technical expertise to deliver innovative solutions that drive growth and 
              efficiency. Whether you need a specialized system or a complex enterprise solution, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Specialized Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16,8 20,8 23,11 23,16 16,16"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <h3>E-commerce Solutions</h3>
              <p>Complete online stores with payment gateways, inventory management, and admin panels</p>
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
              <h3>CRM Systems</h3>
              <p>Customer relationship management systems tailored to your business processes</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <h3>API Development</h3>
              <p>RESTful APIs, GraphQL endpoints, and third-party integrations</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                </svg>
              </div>
              <h3>Data Analytics</h3>
              <p>Business intelligence dashboards and data visualization solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <h2 className="section-title">Enterprise Solutions</h2>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>Enterprise Software</h3>
              <p>Large-scale applications designed for enterprise-level operations</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>Cloud Architecture</h3>
              <p>Scalable cloud solutions and microservices architecture</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>System Integration</h3>
              <p>Seamless integration of multiple systems and platforms</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <h3>Quality Assurance</h3>
              <p>Comprehensive testing and quality assurance services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="industries-grid">
            <div className="industry-item">
              <h4>Healthcare</h4>
              <p>HIPAA-compliant systems and medical management solutions</p>
            </div>
            <div className="industry-item">
              <h4>Finance</h4>
              <p>Secure financial applications and banking solutions</p>
            </div>
            <div className="industry-item">
              <h4>Education</h4>
              <p>Learning management systems and educational platforms</p>
            </div>
            <div className="industry-item">
              <h4>Retail</h4>
              <p>Point-of-sale systems and inventory management</p>
            </div>
            <div className="industry-item">
              <h4>Manufacturing</h4>
              <p>Production management and supply chain solutions</p>
            </div>
            <div className="industry-item">
              <h4>Real Estate</h4>
              <p>Property management and listing platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Have a Unique Project?</h2>
            <p className="cta-text">
              Let's discuss your specific requirements and create a custom solution
            </p>
            <button 
              className="cta-btn"
              onClick={() => onNavigate && onNavigate('Contact')}
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ManyMore;
