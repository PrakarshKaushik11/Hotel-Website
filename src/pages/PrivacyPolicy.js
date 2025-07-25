import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h2>Privacy Policy</h2>
      <p>
        At Luxe Hotel, we value your privacy. This policy outlines how we collect, use, and protect your personal information.
      </p>
      <h3>Information We Collect</h3>
      <ul>
        <li>Your name, email, and contact details via the booking/contact form.</li>
        <li>Booking details (check-in/out dates, room type).</li>
        <li>Technical info like IP address and browser data for analytics.</li>
      </ul>
      <h3>How We Use Your Data</h3>
      <ul>
        <li>To process bookings and respond to inquiries.</li>
        <li>To improve our services and website experience.</li>
        <li>To comply with legal obligations.</li>
      </ul>
      <h3>GDPR & CCPA Compliance</h3>
      <p>
        We adhere to GDPR and CCPA regulations. You have the right to access, modify, or delete your data. You may also opt out of data collection at any time.
      </p>
      <h3>Data Security</h3>
      <p>
        We implement appropriate measures to protect your data from unauthorized access or disclosure.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have questions about this policy, email us at <a href="mailto:privacy@hotelparadise.com">privacy@luxehotel.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
