import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Why from '../components/Why.jsx';
import CTA from '../components/CTA.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Why/>
    <CTA/>
    <Contact/>
    <Footer/>
    </>
  )
}