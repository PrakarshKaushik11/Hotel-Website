// src/pages/ServicesPage.js
import React from 'react';
import './ServicesPage.css';
import { useNavigate } from 'react-router-dom';
import {
  FaConciergeBell,
  FaWifi,
  FaSpa,
  FaShuttleVan,
  FaDumbbell,
  FaHandsHelping,
  FaTshirt,
  FaClock,
} from 'react-icons/fa';

const services = [
  { icon: <FaConciergeBell />, title: 'Room Service', description: 'Enjoy 24/7 room service with gourmet dining delivered to your door.' },
  { icon: <FaWifi />, title: 'Free Wi-Fi', description: 'High-speed internet access available throughout the hotel.' },
  { icon: <FaSpa />, title: 'Spa & Wellness', description: 'Relax and rejuvenate at our luxury spa with professional therapists.' },
  { icon: <FaShuttleVan />, title: 'Airport Shuttle', description: 'Complimentary airport pickup and drop-off service.' },
  { icon: <FaTshirt />, title: 'Laundry Service', description: 'Efficient laundry and dry-cleaning services for your convenience.' },
  { icon: <FaDumbbell />, title: 'Fitness Center', description: 'Fully-equipped gym open 24/7 for all guests.' },
  { icon: <FaHandsHelping />, title: 'Concierge', description: 'Personalized assistance with bookings, recommendations, and more.' },
  { icon: <FaClock />, title: '24/7 Front Desk', description: 'Always available to assist you anytime, day or night.' },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/rooms');
  };

  return (
    <div className="services-page">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="book-room-container">
        <button className="book-room-btn" onClick={handleBookNow}>
          Book a Room
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
