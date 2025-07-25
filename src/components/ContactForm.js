// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
    acceptPolicy: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptPolicy) {
      alert("Please accept the Privacy Policy to proceed.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xdkdggao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contactNumber: formData.contactNumber,
          message: formData.message,
          acceptPolicy: formData.acceptPolicy ? "Accepted" : "Not Accepted",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          message: '',
          acceptPolicy: false,
        });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <div className="contact-form">
      {submitted ? (
        <div className="form-submitted">Thank you! Your message has been sent.</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <label className="checkbox-label">
            <input type="checkbox" name="acceptPolicy" checked={formData.acceptPolicy} onChange={handleChange} required />
            I accept the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </label>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
