// src/pages/TermsAndConditions.js
import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h2>Terms and Conditions</h2>

      <section>
        <h3>1. Introduction</h3>
        <p>
          By accessing and using the Luxe Hotel website, you accept and agree to be bound by these Terms and Conditions.
        </p>
      </section>

      <section>
        <h3>2. Bookings & Cancellations</h3>
        <p>
          All bookings are subject to availability. Cancellations must be made at least 48 hours prior to arrival for a full refund.
        </p>
      </section>

      <section>
        <h3>3. Check-In & Check-Out</h3>
        <p>
          Check-in is from 2:00 PM. Check-out is by 11:00 AM. Early check-in or late check-out may incur additional charges.
        </p>
      </section>

      <section>
        <h3>4. Payments</h3>
        <p>
          Payments can be made online via credit/debit card. All rates are inclusive of applicable taxes unless stated otherwise.
        </p>
      </section>

      <section>
        <h3>5. Guest Responsibilities</h3>
        <p>
          Guests are responsible for any damage caused during their stay. Management reserves the right to charge for damages.
        </p>
      </section>

      <section>
        <h3>6. Liability Disclaimer</h3>
        <p>
          Luxe Hotel is not liable for any loss, damage, or injury to guests or their property during their stay.
        </p>
      </section>

      <section>
        <h3>7. Privacy</h3>
        <p>
          Please refer to our <a href="/privacy-policy">Privacy Policy</a> to understand how we handle your personal information.
        </p>
      </section>

      <section>
        <h3>8. Changes to Terms</h3>
        <p>
          Luxe Hotel reserves the right to update these terms at any time without prior notice.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
