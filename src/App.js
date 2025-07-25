// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Loader from './components/Loader';
import AboutUs from './components/AboutUs';
import RatingsSection from './components/RatingsSection';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';
import RoomsPage from './pages/RoomsPage';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import BookRoomPage from './pages/BookRoomPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading && <Loader />}

      {!isLoading && (
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutUs />
                  <RatingsSection />
                </>
              }
            />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/book" element={<BookRoomPage />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
