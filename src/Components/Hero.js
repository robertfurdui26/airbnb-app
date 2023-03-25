import React from "react";
import hero from "../images/do.jpg";

function Hero() {
  return (
    <section className="hero">
      <img src={hero} alt="hero" className="hero-photo" />
      <h1 id="hero--header">Online Experiences</h1>
      <p id="hero-text">
        "Join unique interactive activities led <br />
        by one-of-a-kind hosts—all without leaving home."
      </p>
    </section>
  );
}

export default Hero;
