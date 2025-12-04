import React, { useEffect, useState } from "react";
import "../styles/ComingSoon.css";
import logo from "../assets/logo.png";

export default function ComingSoon() {
  // --- COUNTDOWN LOGIC ---
  const targetDate = new Date("2025-12-14T00:00:00").getTime(); // <-- change la date ici
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="vw-coming-container">

      {/* LOGO */}
      <img src={logo} className="vw-logo" alt="VWA Logo" />

      {/* TEXT */}
      <h2 className="vw-title">
        Le site est en cours de <span className="vw-gradient">développement</span>
      </h2>

      <p className="vw-subtitle">
        Nous préparons une plateforme moderne, élégante et performante.
      </p>

      {/* CONTACT */}
      <div className="vw-contact-box">
        <p className="vw-contact-text">Vous pouvez déjà nous contacter :</p>
        <a href="mailto:contact@vibewebagency.fr" className="vw-mail">
          contact@vibewebagency.fr
        </a>
        <br />
        ou au <br />
        <a href="tel:+33651483757" className="vw-mail">+33 6 51 48 37 57</a>
      </div>

      {/* CTA */}
      <a href="mailto:contact@vibewebagency.fr" className="vw-cta">
        Prendre contact
      </a>


      {/* COUNTDOWN */}
      <div className="vw-countdown">
        <p className="vw-countdown-title">Ouverture du site dans :</p>

        <div className="vw-countdown-grid">
          <div className="vw-countdown-box">
            <span className="vw-count-number">{timeLeft.days}</span>
            <span className="vw-count-label">Jours</span>
          </div>
          <div className="vw-countdown-box">
            <span className="vw-count-number">{timeLeft.hours}</span>
            <span className="vw-count-label">Heures</span>
          </div>
          <div className="vw-countdown-box">
            <span className="vw-count-number">{timeLeft.minutes}</span>
            <span className="vw-count-label">Minutes</span>
          </div>
          <div className="vw-countdown-box">
            <span className="vw-count-number">{timeLeft.seconds}</span>
            <span className="vw-count-label">Secondes</span>
          </div>
        </div>
      </div>


    </div>
  );
}
