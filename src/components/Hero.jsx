import React from "react";
import "../styles/Hero.css";
import logo from '../assets/logo.png'
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <h1>
            Propulsez votre présence en ligne avec
            <span className="gradient-text"> Vibe Web Agency</span>
          </h1>

          <p>
            Création de sites web modernes, automatisations intelligentes,
            solutions IA et systèmes digitaux sur mesure. Nous transformons 
            votre business en une machine performante et connectée.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="btn-primary">Découvrir nos services</a>
            <a href="#contact" className="btn-secondary">Demander un devis</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow-circle"></div>
          <img 
            src={logo} 
            alt="VWA Logo" 
            className="hero-logo"
          />
        </div>

      </div>
    </section>
  );
}
