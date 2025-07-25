import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to Paradise Hotel</h1>
        <p>Experience luxury, comfort, and world-class service.</p>
        <a href="#rooms" className="btn-primary">Book Now</a>
      </div>
    </section>
  );
}

export default Home;
