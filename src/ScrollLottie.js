import React, { useEffect, useRef, useState } from 'react';
import './ScrollLottie.css';

const ScrollLottie = ({ onChatToggle }) => {
  const lottieRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Load the dotlottie web component
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.1/dist/dotlottie-wc.js';
    script.type = 'module';
    document.head.appendChild(script);

    // Scroll event listener
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`scroll-lottie-container ${isScrolling ? 'visible' : 'hidden'}`}
      onClick={onChatToggle}
      style={{ cursor: 'pointer' }}
    >
      <dotlottie-wc 
        ref={lottieRef}
        src="https://lottie.host/a9afa0a7-fe2f-478e-9695-a714f6a88d9b/MCSk6Zx8vW.lottie" 
        style={{width: '400px', height: '400px'}} 
        autoplay 
        loop
        className="scroll-lottie"
      />
      <div className="scroll-lottie-hint">
        <span>Click me to chat!</span>
      </div>
    </div>
  );
};

export default ScrollLottie;
