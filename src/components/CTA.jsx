import React from "react";
import "../styles/CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">

        <h2>
          Prêt à faire passer votre business<br />
          au niveau supérieur ?
        </h2>

        <p className="subtext-cta">
          Créons ensemble un site moderne, rapide, optimisé, et adapté à vos besoins. 
          Contactez-nous pour un devis personnalisé en moins de 24h.
        </p>

        <div className="cta-buttons">
          <a href="#contact" className="btn-cta-primary">Demander un devis</a>
          <a href="#contact" className="btn-cta-secondary">Nous contacter</a>
        </div>

      </div>
    </section>
  );
}
