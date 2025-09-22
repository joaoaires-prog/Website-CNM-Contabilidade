import Header from "./Components/Header"
import Hero from "./Components/Hero"
import About from "./Components/Sobre"
import Services from "./Components/Services"
import Footer from "./Components/Footer"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default App
