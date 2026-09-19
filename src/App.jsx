import { Routes, Route } from 'react-router-dom';
import Cursor from './Components/Cursor/Cursor';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ModelShowcase from './Components/ModelShowcase/ModelShowcase';
import About from './Components/About/About';
import Capabilities from './Components/Capabilities/Capabilities';
import System from './Components/System/System';
import Environments from './Components/Environments/Environments';
import Deployment from './Components/Deployment/Deployment';
import Conversation from './Components/Conversation/Conversation';
import FinalCTA from './Components/FinalCTA/FinalCTA';
import Footer from './Components/Footer/Footer';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './Pages/Terms/Terms';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <ModelShowcase />
      <About />
      <Capabilities />
      <System />
      <Environments />
      <Deployment />
      <Conversation />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="app">
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}
