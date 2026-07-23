import { FiHelpCircle, FiArrowRight } from "react-icons/fi";
import { waUrl, formatQuickMessage } from "@/utils/whatsapp";
import { useUTM } from "@/hooks/useUTM";

export default function FAQ() {
  const utm = useUTM();

  const items = [
    {
      q: "Quais serviços a DotSpot oferece?",
      a: "Desenvolvemos soluções completas para empresas que desejam crescer no digital. Criamos sites institucionais, landing pages de alta conversão, sistemas web sob medida, gestão de tráfego pago, estratégias de SEO, identidade visual e prestamos suporte contínuo para evolução da presença digital.",
    },
    {
      q: "Vocês desenvolvem sistemas personalizados?",
      a: "Sim. Além de sites, desenvolvemos sistemas web personalizados para automatizar processos, organizar informações e facilitar a rotina da sua empresa. Cada projeto é construído conforme a necessidade do negócio.",
    },
    {
      q: "Como funciona a gestão de tráfego pago?",
      a: "Planejamos, criamos e otimizamos campanhas no Google Ads e Meta Ads para atrair pessoas realmente interessadas no seu produto ou serviço. O objetivo é gerar mais oportunidades de negócio com o melhor aproveitamento do investimento.",
    },
    {
      q: "O que é SEO e por que minha empresa precisa dele?",
      a: "SEO é o conjunto de técnicas que melhora o posicionamento do seu site no Google. Isso aumenta a visibilidade da sua empresa, gera visitas de forma orgânica e reduz a dependência de anúncios pagos no longo prazo.",
    },
    {
      q: "Qual a diferença entre um site e uma landing page?",
      a: "O site apresenta sua empresa, seus serviços e fortalece sua credibilidade. Já a landing page é focada em uma única oferta, com objetivo de gerar contatos, vendas ou agendamentos através de campanhas de marketing.",
    },
    {
      q: "Posso contratar apenas um serviço?",
      a: "Claro. Você pode contratar apenas um site, apenas tráfego pago, SEO ou um sistema personalizado. Também oferecemos soluções completas para empresas que desejam centralizar toda a estratégia digital em um único parceiro.",
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
            Respostas para as principais dúvidas sobre nossos serviços,
            metodologia e como podemos ajudar sua empresa a crescer.
          </p>
        </div>

        {/* Cards */}
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
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF3131]/10 text-[#FF3131] transition-all duration-300 group-hover:bg-[#FF3131] group-hover:text-white">
                  <FiHelpCircle size={24} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {item.q}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={waUrl(formatQuickMessage("FAQ CTA", utm))}
            target="_blank"
            rel="noopener noreferrer"
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

          <p className="mt-4 text-sm text-zinc-500">
            Receba uma orientação personalizada para o seu
            projeto.
          </p>
        </div>
      </div>
    </section>
  );
}