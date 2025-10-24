import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyImage - A component that lazy loads images using Intersection Observer
 * Only loads the image when it's about to enter the viewport
 * 
 * Props:
 * - src: Image source URL
 * - alt: Alt text for accessibility
 * - className: CSS classes to apply
 * - style: Inline styles
 * - placeholder: Optional placeholder color/image while loading
 */
const LazyImage = ({ 
  src, 
  alt = '', 
  className = '', 
  style = {}, 
  placeholder = '#e5e7eb',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      // Fallback: load image immediately
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Stop observing once image is in view
            observer.disconnect();
          }
        });
      },
      {
        // Start loading slightly before image enters viewport
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : undefined}
      alt={alt}
      className={className}
      style={{
        ...style,
        backgroundColor: isLoaded ? 'transparent' : placeholder,
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.7
      }}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
      {...props}
    />
  );
};

export default LazyImage;

