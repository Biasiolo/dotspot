import { LeadForm } from "@/components/Hero";
import bgHero from "@/assets/bg.png";
import { FiCheckCircle } from "react-icons/fi";

export default function CTA() {
  const benefits = [
    "Auditoria completa da sua presença digital atual",
    "Análise de concorrência e posicionamento de mercado",
    "Mapeamento de oportunidades para acelerar conversões",
    "Plano de ação estratégico e personalizado para o seu negócio",
    "Projeção de resultados com sites, landing pages ou tráfego pago",
  ];

  return (
    <section
      id="form"
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Overlay escuro para alto contraste */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Conteúdo */}
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Lado Esquerdo: Textos e Benefícios */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-[#FF3131]/30 bg-[#FF3131]/10 px-4 py-2 text-sm font-medium text-[#FF3131]">
                Diagnóstico Gratuito
              </span>

              <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                Descubra o potencial real da sua empresa no <span className="text-[#FF3131]">
              {" "}digital
            </span>.
              </h2>

              <p className="text-lg leading-relaxed text-zinc-300">
                Analisamos sua presença digital e desenvolvemos um plano de ação 
                exclusivo para atrair mais clientes, criar autoridade e escalar suas vendas. 
                Gratuito e sem compromisso.
              </p>
            </div>

            {/* Lista de Entregáveis */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                O que você recebe no seu diagnóstico:
              </h3>

              <div className="space-y-3">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FiCheckCircle className="h-5 w-5 shrink-0 text-[#FF3131]" />
                    <span className="text-sm text-zinc-300 lg:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card de Compromisso DotSpot */}
            <div className="rounded-[24px] border border-[#FF3131]/20 bg-zinc-950/80 p-6 backdrop-blur-lg">
              <p className="text-sm leading-relaxed text-zinc-300 lg:text-base">
                <strong className="text-[#FF3131]">Compromisso DotSpot:</strong>{" "}
                Se não identificarmos pelo menos 3 oportunidades claras e acionáveis para aumentar suas conversões, nós indicaremos as melhores ferramentas do mercado para você sem cobrar nada por isso.
              </p>
            </div>
          </div>

          {/* Lado Direito: Formulário com Glassmorphism */}
          <div className="relative">
            {/* Glow de fundo para destacar o formulário */}
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#FF3131]/30 to-transparent blur-xl opacity-50" />

            <div className="relative rounded-[30px] border border-white/10 bg-zinc-950/90 p-8 backdrop-blur-lg shadow-2xl">
              <LeadForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}