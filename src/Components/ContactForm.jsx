import React, { useState } from 'react';
import axios from 'axios';


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: "",
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Enviando...');

    try {
      const response = await axios.post('http://localhost:3001/send-email', formData);
      setMessage(response.data.message);
      setFormData({ name: '', email: '', phone: '' , message: ''});
    } catch (error) {
      setMessage('Erro ao enviar e-mail. Tente novamente.');
      console.error('Houve um erro!', error);
    }
  };

  // Aqui está a mágica: usamos as classes do Tailwind diretamente
  return (
    <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg text-center w-full max-w-md">
      <h3 className="text-xl font-bold mb-6">Entre em contato agora mesmo</h3>
      <form onSubmit={handleSubmit}>
        <div className="text-left mb-4">
          <label htmlFor="name" className="block mb-1 text-sm text-gray-600">
            Nome *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
        </div>
        <div className="text-left mb-4">
          <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
        </div>
        <div className="text-left mb-6">
          <label htmlFor="phone" className="block mb-1 text-sm text-gray-600">
            Telefone *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
        </div>
        <div className="text-left mb-6">
          <label htmlFor="message" className="block mb-1 text-sm text-gray-600">
            Como podemos ajudar?
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-800"
            rows="4" // Define uma altura inicial para o campo
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-4 border-none rounded-lg bg-[#0d2a57] text-white text-base font-bold cursor-pointer transition-colors hover:bg-[#1a4a9b]"
        >
          Falar com consultor
        </button>
      </form>
      {/* A mensagem de feedback também é estilizada com Tailwind */}
      {message && (
        <p className="mt-4 text-sm font-bold text-[#0d2a57]">{message}</p>
      )}
    </div>
  );
}

export default ContactForm;