import React, { useEffect } from 'react';
import './Terms.css';

function CookiePolicy() {
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll('.terms-section').forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="terms-hero-content">
          <h1 className="terms-hero-title">Cookie Policy</h1>
          <p className="terms-hero-subtitle">How and why we use cookies</p>
        </div>
      </section>

      <div className="terms-container">
        <div className="terms-content">
          <section className="terms-section visible">
            <div className="section-header">
              <div className="section-number">1</div>
              <h2 className="section-title">What Are Cookies?</h2>
            </div>
            <p className="section-text">
              Cookies are small text files stored on your device to help the site work properly,
              remember preferences, and improve performance.
            </p>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">2</div>
              <h2 className="section-title">How We Use Cookies</h2>
            </div>
            <ul className="section-list">
              <li>Essential cookies for basic functionality</li>
              <li>Analytics to understand usage and improve UX</li>
              <li>Security-related cookies to prevent abuse</li>
            </ul>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">3</div>
              <h2 className="section-title">Managing Cookies</h2>
            </div>
            <p className="section-text">
              You can disable cookies via your browser settings. Doing so may affect site functionality.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;


