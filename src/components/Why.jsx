import React from "react";
import "../styles/Why.css";
import { FiZap, FiAward, FiCpu, FiClock } from "react-icons/fi";

export default function Why() {
  const raisons = [
    {
      icon: <FiZap />,
      title: "Rapidité & efficacité",
      desc: "Livraison rapide grâce à des process modernes et une expertise technique solide."
    },
    {
      icon: <FiCpu />,
      title: "Technologies modernes",
      desc: "React, Next.js, APIs, IA, automatisations : nous utilisons le meilleur du web actuel."
    },
    {
      icon: <FiAward />,
      title: "Qualité premium",
      desc: "Design propre, code propre, optimisation SEO et performance optimale."
    },
    {
      icon: <FiClock />,
      title: "Disponibilité & suivi",
      desc: "Support continu, maintenance proactive et accompagnement sur mesure."
    },
  ];

  return (
    <section className="pourquoi">
      <div className="pourquoi-container">

        <h2 className="pourquoi-title">
          Pourquoi <span className="gradient-text">VWA ?</span>
        </h2>
        <p className="pourquoi-subtitle">
          Une agence moderne, rapide et orientée résultats.
        </p>

        <div className="pourquoi-grid">
          {raisons.map((r, i) => (
            <div className="pourquoi-card" key={i}>
              <div className="pq-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
