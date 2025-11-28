import React, { useState } from 'react';
import axios from 'axios'; 

function ContactForm() {
  
  const URL_DO_BACKEND = "https://website-cnm-contabilidade.onrender.com/api/enviar-email";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: "",
  });

  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    try {
      
      const response = await axios.post(URL_DO_BACKEND, formData);

      setMessage(response.data.message);
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      
      if (error.response && error.response.data && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage('Erro ao enviar e-mail. Tente novamente.');
      }
      console.error('Houve um erro!', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-blue-800 p-8 rounded-2xl shadow-lg text-center w-full max-w-md">
      <h3 className="text-xl font-bold mb-6">Entre em contato agora mesmo</h3>
      <form onSubmit={handleSubmit}>
        <div className="text-left mb-4">
          <label htmlFor="name" className="block mb-1 text-sm text-blue-800">
            Nome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
        </div>
        <div className="text-left mb-4">
          <label htmlFor="email" className="block mb-1 text-sm text-blue-800">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
        </div>
        <div className="text-left mb-6">
          <label htmlFor="phone" className="block mb-1 text-sm text-blue-800">
            Telefone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
        </div>
        <div className="text-left mb-6">
          <label htmlFor="message" className="block mb-1 text-sm text-blue-800">
            Como podemos ajudar?
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-800"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-4 border-none rounded-lg bg-[#0d2a57] text-white text-base font-bold cursor-pointer transition-colors hover:bg-[#1a4a9b] disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Falar com consultor'}
        </button>
      </form>
      {message && (
        <p className="mt-4 text-sm font-bold text-[#0d2a57]">{message}</p>
      )}
    </div>
  );
}

export default ContactForm;