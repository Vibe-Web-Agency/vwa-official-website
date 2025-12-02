import React, { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="vwa-navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <span className="logo-icon">Vibe Web Agency</span>
        </div>

        {/* MENU DESKTOP */}
        <ul className="navbar-menu">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#services">Services</a></li>
          {/* <li><a href="#ai">Solutions IA</a></li> */}
          {/* <li><a href="#portfolio">Portfolio</a></li> */}
          <li><a href="#blog">Blog</a></li>
          <li><a href="#services">Pourquoi VWA ?</a></li>
        </ul>

        {/* CTA */}
        <a href="#contact" className="navbar-cta">Contact</a>

        {/* BURGER MOBILE */}
        <div className="navbar-burger" onClick={() => setOpen(!open)}>
          <span className={open ? "open" : ""}></span>
          <span className={open ? "open" : ""}></span>
          <span className={open ? "open" : ""}></span>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Accueil</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#ai" onClick={() => setOpen(false)}>Solutions IA</a>
        <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
        <a href="#blog" onClick={() => setOpen(false)}>Blog</a>
        <a href="#contact" className="mobile-cta" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}
