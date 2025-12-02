import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Why from './components/Why.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
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
  );
}

export default App;
