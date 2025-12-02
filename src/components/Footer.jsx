import React from "react";
import "../styles/Footer.css";
import { FiMail, FiPhone, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO + DESCRIPTION */}
        <div className="footer-col">
          <h2 className="footer-logo">VWA</h2>
          <p className="footer-desc">
            Agence web moderne spécialisée en sites performants, automatisations,
            solutions digitales et intégrations intelligentes.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#pourquoi">Pourquoi VWA ?</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Gestion de cookies</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li><FiMail /> contact@vibewebagency.fr</li>
            <li><FiPhone /> +33 6 51 48 37 57</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h3>Réseaux</h3>
          <div className="footer-socials">
            <a href="#"><FiInstagram /></a>
            <a href="#"><FiLinkedin /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Vibe Web Agency — Tous droits réservés.
      </div>
    </footer>
  );
}
