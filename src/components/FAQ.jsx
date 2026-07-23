import { FiHelpCircle, FiArrowRight } from "react-icons/fi";

export default function FAQ() {
  const items = [
    {
      q: "Quanto tempo para ver os primeiros resultados?",
      a: "Para Landing Pages e campanhas de tráfego pago, os primeiros leads começam a entrar nas primeiras semanas. Em projetos completou ou SEO, a consolidação ocorre entre 30 e 90 dias.",
    },
    {
      q: "O que exatamente está incluso no diagnóstico gratuito?",
      a: "Auditoria completa da sua presença digital atual, análise da concorrência do seu setor e um plano de ação estratégico com as melhores oportunidades de crescimento.",
    },
    {
      q: "Atendem empresas de quais regiões?",
      a: "Atendemos empresas em todo o Brasil. Toda a nossa comunicação e alinhamento podem ser feitos de forma 100% online com agilidade e proximidade.",
    },
    {
      q: "Qual o investimento necessário para começar?",
      a: "O investimento varia de acordo com os objetivos e escopo do seu projeto. Durante o diagnóstico, apresentamos propostas sob medida para a realidade da sua empresa.",
    },
    {
      q: "Como acompanho a evolução e os resultados?",
      a: "Trabalhamos com transparência total. Você terá relatórios e acompanhamento constante dos principais indicadores (leads gerados, acessos e taxa de conversão).",
    },
    {
      q: "Preciso ter um site pronto para investir em tráfego pago?",
      a: "Não necessariamente. Nós criamos landing pages e sites focados em conversão do zero para garantir que cada centavo investido em anúncios traga o melhor retorno possível.",
    },
  ];

  return (
    <section id="faq" className="relative w-full bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF3131]/30 bg-[#FF3131]/10 px-4 py-2 text-sm font-medium text-[#FF3131]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF3131]" />
            Dúvidas frequentes
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Tudo o que você precisa saber
          </h2>

          <div className="mx-auto my-6 h-1 w-20 rounded-full bg-[#FF3131]" />

          <p className="text-lg leading-relaxed text-zinc-300">
            Respostas para as principais dúvidas sobre nossa metodologia, criação de sites e estratégias de crescimento.
          </p>
        </div>

        {/* Grid de Cards FAQ */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                rounded-[30px]
                border
                border-white/10
                bg-zinc-950/80
                p-8
                backdrop-blur-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#FF3131]/50
                hover:shadow-[0_0_40px_rgba(255,49,49,.15)]
              "
            >
              <div>
                {/* Ícone */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF3131]/10 text-[#FF3131] transition-colors duration-300 group-hover:bg-[#FF3131] group-hover:text-white">
                  <FiHelpCircle size={24} />
                </div>

                {/* Pergunta */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.q}
                </h3>

                {/* Resposta */}
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA no Rodapé */}
        <div className="mt-16 text-center">
          <a
            href="#form"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#FF3131]
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-red-600
              hover:shadow-[0_0_35px_rgba(255,49,49,.35)]
            "
          >
            Ainda ficou com dúvida? Fale com a gente
            <FiArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}