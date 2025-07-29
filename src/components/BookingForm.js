// src/components/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const prefilledRoomType = queryParams.get('roomType') || '';

  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: prefilledRoomType,
    acceptPolicy: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'checkIn' && formData.checkOut && value > formData.checkOut) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        checkOut: ''
      }));
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptPolicy) {
      alert('Please accept the Privacy Policy to continue.');
      return;
    }

    if (formData.checkOut <= formData.checkIn) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xkgzrrgk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone, 
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          guests: formData.guests,
          roomType: formData.roomType,
          acceptPolicy: formData.acceptPolicy ? "Accepted" : "Not Accepted",
        }),
      });

      if (response.ok) {
        console.log('Form successfully submitted!');
        setFormSubmitted(true);
        setShowToast(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '',
          roomType: prefilledRoomType,
          acceptPolicy: false,
        });
        setTimeout(() => setShowToast(false), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error. Please try again.");
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Stay</h2>
      {showToast && <div className="toast-message">Booking submitted successfully!</div>}

      <form onSubmit={handleSubmit} className="booking-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} required onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Your Contact Number" value={formData.phone} required onChange={handleChange} /> {/* ✅ Added */}

        <label htmlFor="checkIn" className="date-label">Booking From (Check-In Date)</label>
        <input
          type="date"
          id="checkIn"
          name="checkIn"
          value={formData.checkIn}
          required
          onChange={handleChange}
          min={today}
        />

        <label htmlFor="checkOut" className="date-label">Till (Check-Out Date)</label>
        <input
          type="date"
          id="checkOut"
          name="checkOut"
          value={formData.checkOut}
          required
          onChange={handleChange}
          min={formData.checkIn || today}
        />

        <input type="number" name="guests" placeholder="No. of Guests" value={formData.guests} required onChange={handleChange} min="1" />
        <input type="text" name="roomType" value={formData.roomType} readOnly className="locked-input"
/>


        <div className="policy-checkbox">
          <input type="checkbox" name="acceptPolicy" checked={formData.acceptPolicy} onChange={handleChange} />
          <label>I accept the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></label>
        </div>

        <button type="submit">Submit Booking</button>
      </form>

      {formSubmitted && (
        <div className="thank-you-message">
          <h4>Thank you for booking with us!</h4>
          <p>We’ll get back to you shortly with your confirmation.</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
