import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import skywebLogo from './images 1/skyweb-removebg-preview (1).png';
import skywebStylizedLogo from './images/skyweb-stylized-logo.png';
import Loader from './Loader';
import LazyImage from './LazyImage';
import { TeamSkeleton, ProjectSkeleton, PricingSkeleton } from './SkeletonLoader';
import './ScrollLottie.css';

// Lazy load heavy components
const DotLottieReact = lazy(() => 
  import('@lottiefiles/dotlottie-react').then(module => ({ 
    default: module.DotLottieReact 
  }))
);
const ScrollLottie = lazy(() => import('./ScrollLottie'));
const Contact = lazy(() => import('./Contact'));
const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Team = lazy(() => import('./Team'));
const Footer = lazy(() => import('./Footer'));
const Internship = lazy(() => import('./Internship'));
const Terms = lazy(() => import('./Terms'));
const Websites = lazy(() => import('./Websites'));
const Apps = lazy(() => import('./Apps'));
const CollegeProjects = lazy(() => import('./CollegeProjects'));
const ITServices = lazy(() => import('./ITServices'));
const ManyMore = lazy(() => import('./ManyMore'));
const Pricing = lazy(() => import('./Pricing'));
const ChatBot = lazy(() => import('./ChatBot'));

// Skeleton fallback components for instant loading
const TeamLoadingFallback = () => (
  <div className="app">
    <div style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', color: '#1e3a8a' }}>
        Our Team
      </h2>
      <TeamSkeleton count={9} />
    </div>
  </div>
);

const ProjectsLoadingFallback = () => (
  <div className="app">
    <div style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', color: '#1e3a8a' }}>
        Our Projects
      </h2>
      <ProjectSkeleton count={6} />
    </div>
  </div>
);

const PricingLoadingFallback = () => (
  <div className="app">
    <div style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', color: '#1e3a8a' }}>
        Our Pricing
      </h2>
      <PricingSkeleton count={6} />
    </div>
  </div>
);

// Generic loading fallback
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: '#1e3a8a'
  }}>
    <div>Loading...</div>
  </div>
);

function App() {
  // Load active page from localStorage or default to 'Home'
  const [activePage, setActivePage] = useState(() => {
    return localStorage.getItem('activePage') || 'Home';
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const menuItems = ['Home', 'Projects', 'Pricing', 'Internship', 'Team', 'Contact', 'About', 'Terms'];

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  const handleNavClick = (item) => {
    setActivePage(item);
    // Save to localStorage
    localStorage.setItem('activePage', item);
    setIsMenuOpen(false);
    try {
      const hash = `#${item.toLowerCase().replace(/\s+/g, '-')}`;
      window.history.pushState({ page: item }, '', hash);
    } catch (_) {
      // no-op if history isn't available
    }
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Initialize from URL and wire up browser back/forward buttons
  useEffect(() => {
    const getPageFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return null;
      const normalized = hash.replace(/-/g, ' ');
      // Capitalize words to match menu labels
      const page = normalized
        .split(' ')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      return page;
    };

    const initialFromHash = getPageFromHash();
    if (initialFromHash) {
      setActivePage(initialFromHash);
      localStorage.setItem('activePage', initialFromHash);
    } else {
      // push initial state for current page so back works from first navigation
      try {
        const hash = `#${activePage.toLowerCase().replace(/\s+/g, '-')}`;
        window.history.replaceState({ page: activePage }, '', hash);
      } catch (_) {
        // ignore
      }
    }

    const onPopState = (event) => {
      const page = event.state?.page || getPageFromHash() || 'Home';
      setActivePage(page);
      localStorage.setItem('activePage', page);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Save active page to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  const renderNavigation = () => (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleNavClick('Home')}>
          <LazyImage src={skywebLogo} alt="SkyWeb Logo" className="nav-logo-img" />
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${activePage === item ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="hamburger" aria-label="Toggle menu" onClick={() => setIsMenuOpen((prev) => !prev)}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>
      {isMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)} />}
      {isMenuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-menu-header">
            <span className="mobile-menu-title">Menu</span>
            <button className="mobile-close" aria-label="Close menu" onClick={() => setIsMenuOpen(false)}>×</button>
          </div>
          <div className="mobile-menu-list">
            {menuItems.map((item) => (
              <button
                key={`m-${item}`}
                className={`mobile-menu-item ${activePage === item ? 'active' : ''}`}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-scroll');
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
  }, [activePage]);

  // Ensure each page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [activePage]);

  // Close mobile menu when page changes or on resize to desktop
  useEffect(() => {
    setIsMenuOpen(false);
  }, [activePage]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  if (isLoading) {
    return <Loader onLoadComplete={handleLoadComplete} />;
  }

  // Render About page separately
  if (activePage === 'About') {
    return (
      <div className="app">
        {renderNavigation()}
        <Suspense fallback={<LoadingFallback />}>
          <About onNavigate={handleNavClick} />
          <Footer />
          <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
        </Suspense>
      </div>
    );
  }

  // Render Team page separately with instant skeleton
  if (activePage === 'Team') {
    return (
      <div className="app">
        {renderNavigation()}
        <Suspense fallback={<TeamLoadingFallback />}>
          <Team />
          <Footer />
          <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
        </Suspense>
      </div>
    );
  }

  // Render Projects page separately with instant skeleton
  if (activePage === 'Projects') {
    return (
      <div className="app">
        {renderNavigation()}
        <Suspense fallback={<ProjectsLoadingFallback />}>
          <Projects />
          <Footer />
          <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
        </Suspense>
      </div>
    );
  }

  // Render Pricing page separately with instant skeleton
  if (activePage === 'Pricing') {
    return (
      <div className="app">
        {renderNavigation()}
        <Suspense fallback={<PricingLoadingFallback />}>
          <Pricing />
          <Footer />
          <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
        </Suspense>
      </div>
    );
  }

  // Render Contact page separately
  if (activePage === 'Contact') {
    return (
      <div className="app">
        {renderNavigation()}
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
          <Footer />
          <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
        </Suspense>
      </div>
    );
  }


  // Render Internship page separately
  if (activePage === 'Internship') {
    return (
      <div className="app">
        {renderNavigation()}
        <Suspense fallback={<LoadingFallback />}>
          <Internship />
          <Footer />
          <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
        </Suspense>
      </div>
    );
  }

  // Render Terms page separately
  if (activePage === 'Terms') {
    return (
      <div className="app">
        {renderNavigation()}
        <Suspense fallback={<LoadingFallback />}>
          <Terms />
          <Footer />
          <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
        </Suspense>
      </div>
    );
  }

  // Render Websites page separately
  if (activePage === 'Websites') {
    return (
      <div className="app">
        {renderNavigation()}
        <Suspense fallback={<LoadingFallback />}>
          <Websites onNavigate={handleNavClick} />
          <Footer />
          <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
        </Suspense>
      </div>
    );
  }

  // Render Apps page separately
  if (activePage === 'Apps') {
    return (
      <div className="app">
        {renderNavigation()}
        <Suspense fallback={<LoadingFallback />}>
          <Apps onNavigate={handleNavClick} />
          <Footer />
          <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
        </Suspense>
      </div>
    );
  }

  // Render College Projects page separately
  if (activePage === 'College Projects') {
    return (
      <div className="app">
        {renderNavigation()}
        <Suspense fallback={<LoadingFallback />}>
          <CollegeProjects onNavigate={handleNavClick} />
          <Footer />
          <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
        </Suspense>
      </div>
    );
  }

  // Render IT Services page separately
  if (activePage === 'IT Services') {
    return (
      <div className="app">
        {renderNavigation()}
        <Suspense fallback={<LoadingFallback />}>
          <ITServices onNavigate={handleNavClick} />
          <Footer />
          <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
        </Suspense>
      </div>
    );
  }

  // Render Many More page separately
  if (activePage === 'Many More') {
    return (
      <div className="app">
        {renderNavigation()}
        <Suspense fallback={<LoadingFallback />}>
          <ManyMore onNavigate={handleNavClick} />
          <Footer />
          <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Scroll-triggered Lottie Animation */}
      <Suspense fallback={null}>
        <ScrollLottie onChatToggle={handleChatToggle} />
      </Suspense>
      
      {/* Navigation Bar */}
      {renderNavigation()}

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <div className="lottie-container">
              <Suspense fallback={<div style={{ minHeight: '300px' }}></div>}>
                <DotLottieReact
                  src="https://lottie.host/f196ba50-2af8-425e-bd9d-cf9a096d5742/pzry9Z8ils.lottie"
                  loop
                  autoplay
                  className="lottie-animation"
                />
              </Suspense>
            </div>
            <h1 className="hero-title">
              <span className="title-line1">SkyWeb</span>
              <span className="title-line2">We scale what others only dream of.</span>
              </h1>
              
            <div className="welcome-text">
              <p>
              At SkyWeb, we build creative, powerful, and scalable web solutions designed to help businesses grow online.
We specialize in MERN stack development, modern UI/UX design, and custom software solutions that bring ideas to life.

Our mission is to deliver smart, high-performance web applications that blend technology with creativity. From startups to enterprises, we help you transform your digital presence with innovation, precision, and style.              </p>
            </div>
            </div>

          <div className="hero-center">
            <div className="center-logo">
              <LazyImage src={skywebStylizedLogo} alt="SkyWeb Logo" className="center-logo-img" />
            </div>
          </div>

        </div>
      </main>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-header fade-in-scroll">
            <h2 className="services-title">SERVICES</h2>
            <p className="services-subtitle">
              Web Development • UI/UX Design • Software Solutions • Digital Presence & Marketing • 
              Cloud & Hosting • Mobile App Development • API Integration • E-Commerce Solutions • 
              Branding & Design • Maintenance & Support
            </p>
          </div>

          <div className="services-grid">
            <div 
              className="service-card fade-in-scroll" 
              onClick={() => handleNavClick('Websites')}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>We Build Sites</h3>
              <p>Modern, responsive websites that captivate your audience and drive results. From landing pages to complex web applications.</p>
            </div>

            <div 
              className="service-card fade-in-scroll"
              onClick={() => handleNavClick('Apps')}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3>We Build Apps</h3>
              <p>Intuitive mobile and web applications designed for seamless user experiences across all platforms and devices.</p>
            </div>

            <div 
              className="service-card fade-in-scroll"
              onClick={() => handleNavClick('College Projects')}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>College Projects</h3>
              <p>Expert assistance with academic projects, from concept to completion. We help students bring their ideas to life.</p>
            </div>

            <div 
              className="service-card fade-in-scroll"
              onClick={() => handleNavClick('IT Services')}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>IT Services</h3>
              <p>Comprehensive IT solutions including consulting, maintenance, cloud services, and technical support for your business.</p>
            </div>

            <div 
              className="service-card fade-in-scroll"
              onClick={() => handleNavClick('Many More')}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>And Many More</h3>
              <p>Custom solutions tailored to your unique needs. From e-commerce to enterprise systems, we've got you covered.</p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      {/* ChatBot */}
      <Suspense fallback={null}>
        <ChatBot isOpen={isChatOpen} onToggle={handleChatToggle} />
      </Suspense>
    </div>
  );
}

export default App;
