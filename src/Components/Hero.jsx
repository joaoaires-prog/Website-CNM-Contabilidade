import ContactForm from "./ContactForm"

const Hero = () => {
  return (
    <section
      id="home"
      className="text-white py-20 relative overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/team-background.png)", 
        
      }}
    >
      {/* Background Overlay for text readability */}
      *<div className="absolute inset-0 bg-black/40"></div>

      {console.log("[v0] Hero component rendered with background image: /images/team-background.png")}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              A HORA DE INVESTIR NO SUCESSO DA SUA EMPRESA É AGORA!
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Transforme sua gestão financeira com nossos serviços especializados em contabilidade empresarial.
            </p>
          </div>

          {/* Right Content - Contact Form */}
          <div className="lg:justify-self-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
