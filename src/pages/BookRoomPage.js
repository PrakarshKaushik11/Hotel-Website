// src/pages/BookRoomPage.js
import React from 'react';
import BookingForm from '../components/BookingForm';
import './BookRoomPage.css';

const BookRoomPage = () => {
  return (
    <div className="book-room-page">
      <h2 className="book-title">Book Your Stay</h2>
      <BookingForm />

      <div className="book-contact-section">
        <h3>Need Help? Contact Us</h3>
        <div className="book-contact-wrapper">
          <div className="book-contact-info">
            <p><strong>Phone:</strong> +91 1234567890</p>
            <p><strong>Email:</strong> info@hotelparadise.com</p>
            <p><strong>Address:</strong> 123 Luxury Ave, Mumbai, India</p>
          </div>
          <div className="book-map">
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019471362619!2d-122.41941568468305!3d37.77492977975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b82f6f4db%3A0xa444acb00b57e2e6!2sHotel!5e0!3m2!1sen!2sus!4v1615591414929!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRoomPage;
