import React, { useState, useEffect } from 'react';
import SEO from './components/SEO';
import LazyImage from './LazyImage';
import { fetchPricingPackages as fetchPricingPackagesAPI } from './utils/api';
import { PricingSkeleton } from './SkeletonLoader';
import './Pricing.css';

function Pricing() {
  const [pricingPackages, setPricingPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Fetch pricing packages from API with caching
  useEffect(() => {
    const loadPricingPackages = async () => {
      try {
        setError(null);
        const data = await fetchPricingPackagesAPI(true);
        setPricingPackages(data);
      } catch (error) {
        console.error('Error fetching pricing packages:', error);
        setError('Failed to load pricing packages. Please try refreshing the page.');
      } finally {
        setLoading(false);
      }
    };

    loadPricingPackages();
  }, []);

  // Scroll animation for pricing cards - runs AFTER packages are loaded
  useEffect(() => {
    // Only run if we have pricing packages loaded
    if (pricingPackages.length === 0) return;

    const handleScroll = () => {
      const cards = document.querySelectorAll('.pricing-card');
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // More generous threshold to show cards that are just below the fold
        if (cardTop < windowHeight * 1.2) {
          card.classList.add('visible');
        }
      });
    };

    // Initial call - show all cards immediately on page load
    setTimeout(() => {
      const allCards = document.querySelectorAll('.pricing-card');
      allCards.forEach((card) => {
        card.classList.add('visible');
      });
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pricingPackages]);

  // Get unique categories
  const categories = ['all', ...new Set(pricingPackages.map(pkg => pkg.category))];

  // Filter packages by category
  const filteredPackages = selectedCategory === 'all' 
    ? pricingPackages 
    : pricingPackages.filter(pkg => pkg.category === selectedCategory);

  // Format currency symbol
  const getCurrencySymbol = (currency) => {
    const symbols = {
      USD: '$',
      EUR: '€',
      INR: '₹',
      GBP: '£'
    };
    return symbols[currency] || '$';
  };

  // Format category for display
  const formatCategory = (category) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  if (loading) {
    return (
      <div className="pricing-page">
        <SEO 
          title="Pricing - Affordable Web Development Packages"
          description="Transparent pricing for professional web development services"
          keywords="web development pricing, MERN stack cost"
          url="/pricing"
          type="website"
        />
        <section className="pricing-hero">
          <div className="pricing-hero-content">
            <h1 className="pricing-hero-title">Simple, Transparent Pricing</h1>
            <p className="pricing-hero-subtitle">Choose the perfect package for your project</p>
          </div>
        </section>
        <section className="pricing-section">
          <div className="pricing-container">
            <PricingSkeleton count={6} />
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pricing-page">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2 style={{ color: '#e74c3c' }}>{error}</h2>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#1e3a8a',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pricing-page">
      <SEO 
        title="Pricing - Affordable Web Development Packages"
        description="Transparent pricing for professional web development services. Choose from our flexible packages for MERN stack development, mobile apps, e-commerce solutions, and custom software. Competitive rates, no hidden fees."
        keywords="web development pricing, MERN stack cost, web development packages, affordable web development, custom software pricing, mobile app development cost, e-commerce pricing"
        url="/pricing"
        type="website"
      />
      
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <h1 className="pricing-hero-title">
            Simple, Transparent Pricing
          </h1>
          <p className="pricing-hero-subtitle">
            Choose the perfect package for your project. All packages include premium support and lifetime updates.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      {categories.length > 2 && (
        <section className="category-filter">
          <div className="filter-container">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {formatCategory(category)}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Pricing Cards */}
      <section className="pricing-section">
        <div className="pricing-container">
          {filteredPackages.length === 0 ? (
            <div className="no-packages">
              <p>No packages available in this category.</p>
            </div>
          ) : (
            <div className="pricing-grid">
              {filteredPackages.map((pkg) => (
                <div 
                  key={pkg._id} 
                  className={`pricing-card ${pkg.popular ? 'popular' : ''}`}
                >
                  {pkg.popular && (
                    <div className="popular-badge">
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div className="card-header">
                    <div className="card-image">
                      <LazyImage src={pkg.image.url} alt={pkg.name} />
                    </div>
                    <h3 className="package-name">{pkg.name}</h3>
                    <p className="package-description">{pkg.description}</p>
                  </div>

                  <div className="card-pricing">
                    <div className="price-wrapper">
                      <span className="currency">{getCurrencySymbol(pkg.currency)}</span>
                      <span className="amount">{pkg.price.toLocaleString()}</span>
                      {pkg.duration !== 'one-time' && (
                        <span className="duration">
                          /{pkg.duration === 'monthly' ? 'month' : 'year'}
                        </span>
                      )}
                    </div>
                    {pkg.duration === 'one-time' && (
                      <p className="price-note">One-time payment</p>
                    )}
                  </div>

                  <div className="card-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {pkg.features.map((feature, index) => {
                        // Handle both old string format and new object format
                        let isIncluded = true;
                        let featureText = '';
                        
                        if (typeof feature === 'string') {
                          // Old format - check for symbols
                          const isNotIncluded = /^[❌✗Xx]\s/.test(feature) || feature.startsWith('❌') || feature.startsWith('✗');
                          featureText = feature.replace(/^[❌✗Xx]\s*/, '');
                          isIncluded = !isNotIncluded;
                        } else {
                          // New object format
                          featureText = feature.text;
                          isIncluded = feature.included;
                        }
                        
                        return (
                          <li key={index} className={!isIncluded ? 'not-included' : ''}>
                            {isIncluded ? (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            ) : (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                            <span>{featureText}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {pkg.stack && pkg.stack.length > 0 && (
                    <div className="card-stack">
                      <h4>Technology Stack:</h4>
                      <div className="stack-tags">
                        {pkg.stack.map((tech, index) => (
                          <span key={index} className="stack-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="card-action">
                    <button 
                      className="cta-button"
                      onClick={() => window.location.href = '/contact'}
                    >
                      {pkg.buttonText || 'Get Started'}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="pricing-cta">
        <div className="cta-content">
          <h2>Need a Custom Solution?</h2>
          <p>
            Can't find the perfect package? We offer custom solutions tailored to your specific needs.
            Get in touch with our team to discuss your requirements.
          </p>
          <a href="/contact" className="cta-contact-button">
            Contact Us
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and bank transfers for enterprise clients.</p>
            </div>
            <div className="faq-item">
              <h3>Can I upgrade my plan later?</h3>
              <p>Yes! You can upgrade your plan at any time. We'll prorate the difference for you.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer refunds?</h3>
              <p>We offer a 30-day money-back guarantee if you're not satisfied with our services.</p>
            </div>
            <div className="faq-item">
              <h3>Is support included?</h3>
              <p>Yes, all packages include premium support and regular updates throughout the development process.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;

