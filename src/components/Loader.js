import React from 'react';
import './Loader.css';
import loadingGif from '../assets/loading.gif'; // Replace with your actual gif

const Loader = () => {
  return (
    <div className="loader-overlay">
      <img src={loadingGif} alt="Loading..." className="loader-gif" />
      <h1 className="loader-title">Hotel Paradise</h1>
    </div>
  );
};

export default Loader;
