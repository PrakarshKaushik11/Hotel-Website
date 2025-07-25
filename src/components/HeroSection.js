import React from 'react';
import HeroSlider from './HeroSlider';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <HeroSlider />
      <div className="hero-content">
        <h1>Welcome to Hotel Paradise</h1>
        <p>Experience luxury and comfort like never before.</p>
        <div className="hero-buttons">
          <a href="../rooms" className="btn primary">Book Now</a>
          <a href="../services" className="btn secondary">Explore</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
