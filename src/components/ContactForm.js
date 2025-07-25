// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.acceptPolicy) {
      // You could send the form data to a server here
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-form">
      {submitted ? (
        <div className="form-submitted">Thank you! Your message has been sent.</div>
      ) : (
        <form onSubmit={handleSubmit} action="https://formspree.io/f/xdkdggao" method="POST"
>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="acceptPolicy"
              checked={formData.acceptPolicy}
              onChange={handleChange}
              required
            />
            I accept the <a href="/privacy-policy" target="_blank">Privacy Policy</a>
          </label>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
