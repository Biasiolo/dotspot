// src/components/Solution.jsx

import bgHero from "@/assets/bg.png";
import {
  FiClipboard,
  FiPenTool,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

export default function Solution() {
  const steps = [
    {
      icon: <FiClipboard size={24} />,
      title: "Conhecemos sua empresa",
      desc: "Entendemos o negócio, objetivos e cliente ideal para construir um processo personalizado.",
      items: [
        "Briefing",
        "Análise de mercado",
        "Planejamento",
        "Objetivos",
      ],
    },
    {
      icon: <FiPenTool size={24} />,
      title: "Criamos sua presença digital",
      desc: "Desenvolvemos um site ou landing page moderna, rápida e preparada para gerar resultados.",
      items: [
        "Design exclusivo",
        "Responsivo",
        "SEO",
        "Performance",
      ],
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: "Atraímos novos clientes",
      desc: "Sua empresa na frente das pessoas certas com campanhas e estratégias inteligentes.",
      items: [
        "Google Ads",
        "Meta Ads",
        "Remarketing",
        "Otimização",
      ],
    },
    {
      icon: <FiCheckCircle size={24} />,
      title: "Acompanhamos seu crescimento",
      desc: "Analisamos os resultados continuamente para gerar mais contatos, vendas e oportunidades.",
      items: [
        "Relatórios",
        "Leads",
        "Melhorias",
        "Escalabilidade",
      ],
    },
  ];

  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative mx-auto max-w-7xl px-5 py-24">

        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-[#FF3131]/30 bg-[#FF3131]/10 px-4 py-2 text-sm font-medium text-[#FF3131]">
            Como trabalhamos
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Um processo simples para colocar sua empresa ou serviço em <span className="text-[#FF3131]">
              {" "}destaque
            </span>.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            Da estratégia ao crescimento, cuidamos de todas as etapas para que
            sua empresa conquiste mais clientes e fortaleça sua presença digital.
          </p>

        </div>

        {/* Timeline Desktop */}

        <div className="relative hidden lg:block mb-10">

          <div className="absolute left-20 right-20 top-7 h-px bg-gradient-to-r from-transparent via-[#FF3131]/40 to-transparent" />

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-4">

          {steps.map((step, index) => (

            <div
              key={index}
              className="
                group
                relative
                rounded-[30px]
                border
                border-white/10
                bg-zinc-950/80
                backdrop-blur-lg
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#FF3131]/50
                hover:shadow-[0_0_40px_rgba(255,49,49,.15)]
              "
            >

              {/* Número */}

              <div className="absolute right-6 top-6 text-5xl font-black text-white/5">
                0{index + 1}
              </div>

              {/* Ícone */}

              <div
                className="
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#FF3131]/10
                  text-[#FF3131]
                  transition-all
                  duration-300
                  group-hover:bg-[#FF3131]
                  group-hover:text-white
                "
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                {step.desc}
              </p>

              <div className="mt-6 space-y-3">

                {step.items.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#FF3131]" />

                    {item}
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div
          className="
            mt-20
            rounded-[32px]
            border
            border-[#FF3131]/20
            bg-zinc-950/70
            backdrop-blur-lg
            p-10
            text-center
          "
        >

          <h3 className="text-3xl font-bold text-white">
            Seu próximo cliente pode estar procurando pelo seu serviço ou empresa agora.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-zinc-300">
            A diferença entre ele encontrar você ou seu concorrente está na sua
            presença digital. Nós criamos experiências que geram confiança,
            atraem visitantes e transformam acessos em novos negócios.
          </p>

          <a
            href="#form"
            className="
              mt-8
              inline-flex
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
            Começar a vender mais
          </a>

        </div>

      </div>
    </section>
  );
}