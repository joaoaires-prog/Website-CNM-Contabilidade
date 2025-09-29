"use client"

import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aqui você adicionaria a lógica para enviar o formulário

    // Reinicia o formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    // Mostra alerta
    alert("Solicitação enviada com sucesso!")
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md">
      <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">Entre em contato agora mesmo!</h3>
      <p className="text-gray-600 text-center mb-6">Solicite uma consultoria gratuita</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            required
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Seu telefone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Como podemos ajudar?"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg"
        >
          Falar com consultor
        </button>
      </form>
    </div>
  )
}

export default ContactForm
