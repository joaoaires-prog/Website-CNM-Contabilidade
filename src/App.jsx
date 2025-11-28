import React from 'react';
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/Sobre.jsx";
import Services from "./Components/Services.jsx";
import Footer from "./Components/Footer.jsx";
import WhatsAppButton from "./Components/WhatsAppButton.jsx";
import FloatingInstagram from "./Components/FloatingInstagram.jsx";
import { FAQ } from './Components/FAQ.jsx'; 

// AQUI MUDOU: Importamos do arquivo 'LocationMap.jsx'
import LocationMap from './Components/LocationMap.jsx'; 

import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <FAQ />

      {/* Usamos o componente aqui */}
      <LocationMap />

      <Footer />
      
      <FloatingInstagram />
      <WhatsAppButton />
    </div>
  );
}

export default App;