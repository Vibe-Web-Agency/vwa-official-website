import React from "react";
import "../styles/Contact.css";
import { FiMail, FiUser, FiMessageCircle, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <h2 className="contact-title">
          Contactez <span className="gradient-text">VWA</span>
        </h2>
        <p className="contact-subtitle">
          Une question, un projet, une idée ? Nous vous répondons en moins de 24h.
        </p>

        <div className="contact-content">

          <form className="contact-form">

            <div className="input-group">
              <FiUser />
              <input type="text" placeholder="Votre nom" required />
            </div>

            <div className="input-group">
              <FiMail />
              <input type="email" placeholder="Votre email" required />
            </div>

            <div className="input-group textarea">
              <FiMessageCircle className="textarea-icon" />
              <textarea placeholder="Décrivez votre projet..." required></textarea>
            </div>

            <button type="submit" className="contact-button">
              <FiSend /> Envoyer la demande
            </button>

          </form>

          <div className="contact-side">
            <h3>Ou contactez-nous directement</h3>

            <a 
              className="whatsapp-button" 
              href="https://wa.me/33651483757"
              target="_blank"
            >
              💬 WhatsApp — Réponse rapide
            </a>

            <p className="contact-info">
              Vous pouvez aussi envoyer un email à :<br />
              <span>contact@vibewebagency.fr</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
