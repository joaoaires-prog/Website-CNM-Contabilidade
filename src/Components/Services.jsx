import ServiceCard from "./ServiceCard"

const Calculator = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="16" y2="14" />
    <line x1="8" y1="18" x2="16" y2="18" />
  </svg>
)

const TrendingUp = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)

const FileText = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const BarChart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
)

const Services = () => {
  const mainServices = [
    {
      icon: <Calculator className="w-12 h-12" />,
      title: "BPO Financeiro",
      description: "Terceirização completa do seu departamento financeiro com profissionais especializados.",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Recuperação Tributária",
      description: "Identificamos e recuperamos tributos pagos indevidamente pela sua empresa.",
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Consultoria Contábil",
      description: "Orientação especializada para otimizar a gestão contábil da sua empresa.",
    },
  ]

  const detailedServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Auditoria Interna",
      description: "Análise detalhada dos processos internos para garantir conformidade e eficiência.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Departamento Pessoal",
      description: "Gestão completa de folha de pagamento, benefícios e obrigações trabalhistas.",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Planejamento Tributário",
      description: "Estratégias para redução legal da carga tributária da sua empresa.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Abertura de Empresas",
      description: "Processo completo de abertura e regularização de empresas.",
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Contabilidade Digital",
      description: "Modernização dos processos contábeis com tecnologia de ponta.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Análise Financeira",
      description: "Relatórios detalhados para tomada de decisões estratégicas.",
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nossos Principais Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em contabilidade para impulsionar o crescimento da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} {...service} variant="large" />
          ))}
        </div>

        {/* Detailed Services Section */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Foque nos seus pacientes. A contabilidade é por nossa conta.
            </h2>
            <p className="text-xl text-blue-100">
              Serviços especializados para profissionais da saúde e empresas de todos os segmentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map((service, index) => (
              <ServiceCard key={index} {...service} variant="compact" isDark />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
