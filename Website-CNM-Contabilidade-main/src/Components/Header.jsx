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
    <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-sm">CNM</span>
            </div>
            <span className="font-bold text-xl">CNM</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-300 transition-colors">
              Home
            </a>
            <a href="#servicos" className="hover:text-blue-300 transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-blue-300 transition-colors">
              Sobre
            </a>
            <a href="#contato" className="hover:text-blue-300 transition-colors">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <span className="text-sm">Menu</span>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden py-4 border-t border-blue-700">
          <div className="flex flex-col space-y-2">
            <a href="#home" className="py-2 hover:text-blue-300 transition-colors">
              Home
            </a>
            <a href="#servicos" className="py-2 hover:text-blue-300 transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="py-2 hover:text-blue-300 transition-colors">
              Sobre
            </a>
            <a href="#contato" className="py-2 hover:text-blue-300 transition-colors">
              Contato
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
