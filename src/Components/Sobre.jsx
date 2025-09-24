const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-500 font-semibold uppercase tracking-wide">
                ESCRITÓRIO DE CONTABILIDADE EM BRASÍLIA
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">CUIDAMOS DA SUA EMPRESA PARA VOCÊ!</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Especialistas em BPO Financeiro</strong> - Terceirização completa do seu departamento
                  financeiro
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Recuperação tributária</strong> - Identificamos e recuperamos tributos pagos indevidamente
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:justify-self-end">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
              <img
                src="/images/profissionais-qualificados.png"
                alt="Profissionais qualificados da CNM Contabilidade"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Profissionais Qualificados</h3>
                <p className="text-gray-600">
                  Nossa equipe está pronta para cuidar da sua empresa com excelência e dedicação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About