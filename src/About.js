import React from 'react';
import './About.css';

function About({ onNavigate }) {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About SkyWeb</h1>
          <p className="about-subtitle">
            We are passionate developers creating digital solutions that matter
          </p>
        </div>

        <div className="about-content fade-in-scroll">
          <div className="about-section fade-in-scroll">
            <h2>Our Story</h2>
            <p>
              SkyWeb was founded with a simple yet powerful vision: to help businesses 
              scale their digital presence through innovative web solutions. We believe 
              that every great idea deserves a powerful digital platform to reach its 
              full potential.
            </p>
          </div>

          <div className="about-section fade-in-scroll">
            <h2>Our Mission</h2>
            <p>
              To deliver smart, high-performance web applications that blend technology 
              with creativity. We help businesses transform their digital presence with 
              innovation, precision, and style.
            </p>
          </div>

          <div className="about-section fade-in-scroll">
            <h2>What We Do</h2>
            <div className="services-list">
              <div className="service-item">
                <div className="service-content">
                  <h3>Web Development</h3>
                  <p>Modern, responsive websites built with cutting-edge technologies</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-content">
                  <h3>UI/UX Design</h3>
                  <p>Beautiful, intuitive user experiences that engage and convert</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-content">
                  <h3>Custom Software</h3>
                  <p>Tailored solutions designed specifically for your business needs</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-content">
                  <h3>Mobile Apps</h3>
                  <p>Cross-platform mobile applications for iOS and Android</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section fade-in-scroll">
            <h2>Our Approach</h2>
            <p>
              We combine technical expertise with creative vision to deliver solutions 
              that not only meet your requirements but exceed your expectations. Our 
              team stays updated with the latest technologies and best practices to 
              ensure your project is built with the most modern and efficient tools.
            </p>
          </div>

          <div className="about-section fade-in-scroll">
            <h2>Why Choose SkyWeb?</h2>
            <ul className="features-list">
              <li>Expert team with years of experience</li>
              <li>Modern tech stack (MERN, React, Node.js)</li>
              <li>Scalable and maintainable code</li>
              <li>Responsive design for all devices</li>
              <li>Ongoing support and maintenance</li>
              <li>Competitive pricing and transparent communication</li>
            </ul>
          </div>

          <div className="about-cta fade-in-scroll">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-text">Let's discuss how we can help bring your ideas to life.</p>
              <div className="cta-buttons">
                <button 
                  className="cta-btn primary-btn"
                  onClick={() => onNavigate('Contact')}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
