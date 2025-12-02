import React from "react";
import "../styles/ComingSoon.css";

export default function ComingSoon() {
  return (
    <div className="vw-coming-container">

      {/* LOGO */}
      <h1 className="vw-logo">VWA</h1>

      {/* TEXT */}
      <h2 className="vw-title">
        Le site est en cours de <span className="vw-gradient">développement</span>
      </h2>

      <p className="vw-subtitle">
        Nous préparons une plateforme moderne, élégante et performante.
      </p>

      {/* CONTACT */}
      <div className="vw-contact-box">
        <p className="vw-contact-text">
          Vous pouvez déjà nous contacter :
        </p>
        <a href="mailto:contact@vibewebagency.fr" className="vw-mail">
          contact@vibewebagency.fr
        </a><br />ou au <br /> <a className="vw-mail">+33 6 51 48 37 57</a>
      </div>

      {/* CTA */}
      <a href="mailto:contact@vibewebagency.fr" className="vw-cta">
        Prendre contact
      </a>

    </div>
  );
}
