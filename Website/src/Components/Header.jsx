"use client"

import { useState } from "react"

const Menu = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white text-blue-900 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
      
            <img 
              src="/images/logo-cnm-transparente.png" 
              alt="Logo da CNM Contabilidade" 
              className="h-18 w-auto" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-semibold">
            <a href="#home" className="hover:text-blue-500 transition-colors">
              Home
            </a>
            <a href="#servicos" className="hover:text-blue-500 transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-blue-500 transition-colors">
              Sobre
            </a>
            <a href="#contato" className="hover:text-blue-500 transition-colors">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="py-2 hover:text-blue-500 transition-colors">
                Home
              </a>
              <a href="#servicos" className="py-2 hover:text-blue-500 transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="py-2 hover:text-blue-500 transition-colors">
                Sobre
              </a>
              <a href="#contato" className="py-2 hover:text-blue-500 transition-colors">
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header