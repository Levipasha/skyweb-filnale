import React, { useState, useEffect, useCallback } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const isClickableElement = useCallback((target) => {
    if (!target || typeof target.tagName !== 'string') return false;
    
    // Check if it's a clickable tag
    if (target.tagName === 'A' || target.tagName === 'BUTTON') return true;
    
    // Check if it has the email-card class
    if (target.classList && target.classList.contains('email-card')) return true;
    
    // Check if it's inside an email-card
    if (target.closest && target.closest('.email-card')) return true;
    
    // Check nav items
    if (target.classList && target.classList.contains('nav-item')) return true;
    
    return false;
  }, []);

  useEffect(() => {
    let animationFrame;
    
    const updateMousePosition = (e) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = (e) => {
      if (isClickableElement(e.target)) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (isClickableElement(e.target)) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [isClickableElement]);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    />
  );
};

export default CustomCursor;
