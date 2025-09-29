import Header from "./Components/Header.jsx"
import Hero from "./Components/Hero.jsx"
import About from "./Components/Sobre.jsx"
import Services from "./Components/Services.jsx"
import Footer from "./Components/Footer.jsx"
import Whatsapp from "./Components/WhatsAppButton.jsx"
import WhatsAppButton from "./Components/WhatsAppButton.jsx"
import FloatingInstagram from "./Components/FloatingInstagram"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
      <Whatsapp />
      <FloatingInstagram />



      {/* Botão WhatsApp detectando mobile/desktop */}
      <WhatsAppButton />

    </div>
  )
}

export default App
