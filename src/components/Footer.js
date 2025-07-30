// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Hotel<span>Paradise</span></h2>
          <p>Stay. Relax. Rejuvenate.</p>
        </div>

        <ul className="footer-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/rooms">Rooms</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Hotel Paradise. All rights reserved.</p>
        <p className="made-by">
          Made by <span>
            <a
              href="https://www.linkedin.com/in/prakarsh-kaushik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prakarsh Kaushik
            </a>
          </span>
        </p>
        <div className="footer-policies">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms-and-conditions">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
