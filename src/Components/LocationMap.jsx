import React from 'react';

function LocationMap() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0d2a57] mb-8">Nossa Localização</h2>
        
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.30486323105!2d-48.04728982401144!3d-15.840566384806259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a287dcdaf53%3A0x58a69ccfce6e8d3f!2sCNM%20Contabilidade%20e%20Assessoria!5e0!3m2!1spt-BR!2sbr!4v1763592984680!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da Localização"
          ></iframe>
        </div>
        
        <div className="text-center mt-6 text-gray-600">
          <p className="font-semibold">QS 1 RUA 212 LOTE 19/21/23 BL D SALA 1915</p>
          <p>Águas Claras, Brasília - DF, 71950-550</p>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
