import React from "react";
import "../styles/Services.css";
import { FiArrowRight, FiCode, FiCpu, FiZap, FiLayers, FiMonitor, FiMessageSquare } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: <FiMonitor />,
      title: "Création de sites web",
      desc: "Sites modernes, rapides et optimisés. Design sur mesure et expérience utilisateur fluide."
    },
    {
      icon: <FiLayers />,
      title: "Maintenance & Support",
      desc: "Mises à jour, corrections, sauvegardes, optimisation SEO et assistance continue."
    },
    {
      icon: <FiZap />,
      title: "Automatisations & API",
      desc: "Intégration API, automatisation des processus et solutions digitales intelligentes."
    },
    {
      icon: <FiCpu />,
      title: "Solutions IA",
      desc: "Outils IA personnalisés : génération de contenu, analyse, optimisation et assistants intelligents."
    },
    {
      icon: <FiMessageSquare />,
      title: "Chatbots personnalisés",
      desc: "Chatbots IA intégrés à votre site, automatisation des réponses, collecte de leads et support client."
    },
    {
      icon: <FiCode />,
      title: "Déploiement & Hébergement",
      desc: "Mise en ligne optimisée, infrastructure scalable et sécurité renforcée."
    },
  ];

  return (
    <section className="services">
      <div className="services-container">

        <h2 className="services-title">
          Nos Services
        </h2>
        <p className="services-subtitle">
          Des solutions modernes et performantes pour propulser votre business.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-footer">
          <a href="#services" className="card-arrow">
            <FiArrowRight />
          </a>
        </div>
            </div>
          ))}
        </div>

        


      </div>
    </section>
  );
}
