import React from 'react';
import './SkeletonLoader.css';

export const TeamSkeleton = ({ count = 6 }) => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="team-skeleton-card">
          <div className="skeleton skeleton-image team-skeleton-image"></div>
          <div className="skeleton skeleton-title team-skeleton-name"></div>
          <div className="skeleton skeleton-text team-skeleton-role"></div>
          <div className="team-skeleton-skills">
            <div className="skeleton team-skeleton-skill"></div>
            <div className="skeleton team-skeleton-skill"></div>
            <div className="skeleton team-skeleton-skill"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ProjectSkeleton = ({ count = 6 }) => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="project-skeleton-card">
          <div className="skeleton skeleton-image project-skeleton-image"></div>
          <div className="project-skeleton-content">
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text-short"></div>
            <div className="project-skeleton-tags">
              <div className="skeleton project-skeleton-tag"></div>
              <div className="skeleton project-skeleton-tag"></div>
              <div className="skeleton project-skeleton-tag"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const PricingSkeleton = ({ count = 4 }) => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="pricing-skeleton-card">
          <div className="skeleton skeleton-image pricing-skeleton-image"></div>
          <div className="skeleton skeleton-title pricing-skeleton-name"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton pricing-skeleton-price"></div>
          <div className="skeleton pricing-skeleton-feature"></div>
          <div className="skeleton pricing-skeleton-feature"></div>
          <div className="skeleton pricing-skeleton-feature"></div>
          <div className="skeleton pricing-skeleton-feature"></div>
          <div className="skeleton pricing-skeleton-button"></div>
        </div>
      ))}
    </div>
  );
};

export const GenericSkeleton = ({ lines = 5 }) => {
  return (
    <div className="skeleton-card">
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className={`skeleton skeleton-text ${index === lines - 1 ? 'skeleton-text-short' : ''}`}></div>
      ))}
    </div>
  );
};

export default {
  TeamSkeleton,
  ProjectSkeleton,
  PricingSkeleton,
  GenericSkeleton
};

