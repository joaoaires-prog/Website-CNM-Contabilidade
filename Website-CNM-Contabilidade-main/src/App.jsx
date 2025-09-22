import Header from "./Components/Header"
import Hero from "./Components/Hero"
import About from "./Components/Sobre"
import Services from "./Components/Services"
import Footer from "./Components/Footer"
import Whatsapp from "./Components/WhatsAppButton.jsx"
import WhatsAppButton from "./Components/WhatsAppButton"
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



      {/* Botão WhatsApp detectando mobile/desktop */}
      <WhatsAppButton />

    </div>
  )
}

export default App
