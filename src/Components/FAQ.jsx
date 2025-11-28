import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Instale se não tiver: npm install lucide-react

const faqs = [
  { question: "Como faço para abrir minha empresa?", answer: "O processo envolve definir o tipo jurídico, regime tributário e registro na Junta Comercial. Nós cuidamos de tudo isso para você." },
  { question: "Vocês atendem quais tipos de empresa?", answer: "Atendemos prestadores de serviços, comércio e, especialmente, profissionais da área da saúde." },
  { question: "Como funciona a recuperação tributária?", answer: "Analisamos seus pagamentos passados para identificar impostos pagos a mais e solicitamos a restituição." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-[#0d2a57] mb-8">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-[#0d2a57]" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}