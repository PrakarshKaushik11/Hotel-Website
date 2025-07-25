import React, { useRef, useEffect, useState } from 'react';
import './AboutUs.css';
import aboutImage from '../assets/about-hotel.jpg';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  const section = sectionRef.current; // ✅ capture the current ref value

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    },
    { threshold: 0.3 }
  );

  if (section) observer.observe(section);

  return () => {
    if (section) observer.unobserve(section); // ✅ use the captured value
  };
}, []);

  return (
    <section
      ref={sectionRef}
      className={`about-section ${visible ? 'visible' : ''}`}
      id="about"
    >
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-heading">About Our Hotel</h2>
          <p className="about-paragraph">
            Experience unmatched luxury and comfort in the heart of the city. Our hotel offers
            world-class amenities, premium rooms, and exceptional service to make your stay
            unforgettable.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Hotel interior" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
