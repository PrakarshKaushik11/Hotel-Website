// src/pages/ContactPage.js
import React from 'react';
import './ContactPage.css';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Phone:</strong> +91 1234567890</p>
          <p><strong>Email:</strong> info@hotelparadise.com</p>
          <p><strong>Address:</strong> 123 Luxury Ave, Mumbai, India</p>
          <div className="map-container">
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.096160984102!2d-122.41941568468156!3d37.77492977975916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d6edc6cd%3A0x60bb3fc2ad0c841b!2s123%20Luxury%20Ave%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="contact-form-section">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
