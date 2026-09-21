import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Cursor from './Components/Cursor/Cursor';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ModelShowcase from './Components/ModelShowcase/ModelShowcase';
import About from './Components/About/About';

import System from './Components/System/System';
import Environments from './Components/Environments/Environments';
import Deployment from './Components/Deployment/Deployment';
import Conversation from './Components/Conversation/Conversation';
import FinalCTA from './Components/FinalCTA/FinalCTA';
import Footer from './Components/Footer/Footer';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPage.jsx';
import Terms from './Pages/Terms/Terms';
import SIYA from './Components/SIYA/Siya';
import './App.css';
import HomeEnvironment from './Pages/Environments/Home';
import Office from './Pages/Environments/Office';
import Travel from './Pages/Environments/Travel';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.getElementById(
        location.hash.substring(1)
      );

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
  }, [location]);

  return null;
}
function Home() {
  return (
    <>
      <Hero />
      <ModelShowcase />
      <About />
     
      <System />
      <Environments />
      <Deployment />
      <Conversation />
      <FinalCTA />
      <Footer />
      <SIYA />
    </>
  );
}

export default function App() {
  return (
    <div className="app">
      <Cursor />
      <Navbar />

      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/environments/home" element={<HomeEnvironment />} />
        <Route path="/environments/office" element={<Office />} />
        <Route path="/environments/travel" element={<Travel />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}
