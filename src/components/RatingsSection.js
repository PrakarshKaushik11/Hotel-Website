import React, { useEffect, useRef, useState } from 'react';
import './RatingsSection.css';
import bookingLogo from '../assets/booking-logo.png';
import tripadvisorLogo from '../assets/tripadvisor-logo.png';
import googleLogo from '../assets/google-logo.png';

const RatingsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  const currentRef = sectionRef.current;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    },
    { threshold: 0.2 }
  );

  if (currentRef) observer.observe(currentRef);

  return () => {
    if (currentRef) observer.unobserve(currentRef);
  };
}, []);


  return (
    <section
      className={`ratings-section ${visible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <h2 className="ratings-title">What People Say</h2>
      <div className="ratings-logos">
        <div className="rating-card">
          <img src={bookingLogo} alt="Booking.com" className="rating-logo" />
          <p className="rating-text">4.8/5 on Booking.com</p>
        </div>
        <div className="rating-card">
          <img src={tripadvisorLogo} alt="TripAdvisor" className="rating-logo" />
          <p className="rating-text">4.7/5 on TripAdvisor</p>
        </div>
        <div className="rating-card">
          <img src={googleLogo} alt="Google Reviews" className="rating-logo" />
          <p className="rating-text">4.9/5 on Google</p>
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;
