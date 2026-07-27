// src/components/About.jsx

import bgHero from "@/assets/bg.png";
import {
  FiUsers,
  FiShield,
  FiTarget,
  FiZap,
  FiArrowRight,
} from "react-icons/fi";
import { trackGoogleAdsConversion } from "@/utils/googleAds";

export default function About() {
  const cards = [
    {
      icon: <FiUsers size={20} />,
      title: "O que fazemos",
      desc: "Nascemos para ajudar empresas a fortalecerem sua presença digital através de soluções estratégicas e focadas em resultados.",
      items: [
        "Sites Profissionais",
        "Landing Pages",
        "Sistemas",
        "Marketing Digital",
      ],
    },
    {
      icon: <FiShield size={20} />,
      title: "Compromisso DotSpot",
      desc: "Cada projeto é desenvolvido com atenção aos detalhes, performance e foco em gerar oportunidades reais para nossos clientes.",
      items: [
        "Transparência",
        "Qualidade",
        "Suporte",
        "Parceria",
      ],
    },
    {
      icon: <FiTarget size={20} />,
      title: "Por que escolher?",
      desc: "Você fala diretamente com quem desenvolve seu projeto. Sem intermediários, com atendimento próximo e decisões rápidas.",
      items: [
        "Contato direto",
        "Projetos personalizados",
        "SEO",
        "Alta Performance",
      ],
    },
    {
      icon: <FiZap size={20} />,
      title: "Nossa Filosofia",
      desc: "Não criamos apenas sites. Construímos uma presença digital preparada para crescer junto com a sua empresa.",
      items: [
        "Estratégia",
        "Conversão",
        "Escalabilidade",
        "Resultados",
      ],
    },
  ];

  const benefits = [
    "Projetos totalmente personalizados",
    "Sites rápidos e preparados para SEO",
    "Landing Pages de alta conversão",
    "Sistemas web sob medida",
    "Estratégias de Google Ads e Meta Ads",
    "Atendimento próximo durante todo o projeto",
  ];

  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative mx-auto max-w-7xl px-5 py-24">

        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-[#FF3131]/30 bg-[#FF3131]/10 px-4 py-2 text-sm font-medium text-[#FF3131]">
            Quem Somos
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Mais do que criar sites, criamos empresas preparadas para{" "}
            <span className="text-[#FF3131]">
              crescer no digital
            </span>.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            A DotSpot une tecnologia, estratégia e marketing para desenvolver
            soluções digitais que aumentam a credibilidade da sua empresa,
            geram oportunidades e ajudam você a conquistar novos clientes.
          </p>

        </div>

        {/* Cards - formato lista, mais discreto */}

        <div
          className="
            rounded-[32px]
            border
            border-white/10
            bg-zinc-950/70
            backdrop-blur-lg
            divide-y
            divide-white/10
            overflow-hidden
          "
        >

          {cards.map((card, index) => (

            <div
              key={index}
              className="
                group
                grid
                gap-6
                p-8
                transition-colors
                duration-300
                hover:bg-white/[0.03]
                lg:grid-cols-[auto_1fr_1fr]
                lg:items-center
              "
            >

              {/* Ícone + título */}

              <div className="flex items-center gap-4 lg:w-52">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#FF3131]/10
                    text-[#FF3131]
                    transition-colors
                    duration-300
                    group-hover:bg-[#FF3131]
                    group-hover:text-white
                  "
                >
                  {card.icon}
                </div>

                <h3 className="text-lg font-bold text-white">
                  {card.title}
                </h3>

              </div>

              {/* Descrição */}

              <p className="text-sm leading-relaxed text-zinc-400">
                {card.desc}
              </p>

              {/* Items como pills */}

              <div className="flex flex-wrap gap-2 lg:justify-end">

                {card.items.map((item) => (

                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-2
                      py-1
                      text-xs
                      text-zinc-300
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Autoridade */}

        <div
          className="
            mt-16
            rounded-[32px]
            border
            border-[#FF3131]/20
            bg-zinc-950/70
            backdrop-blur-lg
            p-10
          "
        >

          <div className="text-center">

            <h3 className="mt-4 text-3xl font-bold text-white">
              Empresas que confiaram na DotSpot
            </h3>

            <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-zinc-300">
              Nosso compromisso é entregar projetos que transmitam confiança,
              valorizem a marca e gerem resultados reais. Cada cliente recebe
              uma solução personalizada, construída para crescer junto com o
              seu negócio.
            </p>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {benefits.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/60 p-4"
              >
                <div className="h-2 w-2 shrink-0 rounded-full bg-[#FF3131]" />

                <span className="text-sm text-zinc-300">
                  {item}
                </span>

              </div>

            ))}

          </div>

          {/* Estatísticas */}

          <div className="mt-14 grid gap-8 md:grid-cols-4 text-center">

            <div>
              <div className="text-5xl font-black text-[#FF3131]">
                20+
              </div>

              <p className="mt-2 text-sm text-zinc-400">
                Projetos desenvolvidos
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-[#FF3131]">
                100%
              </div>

              <p className="mt-2 text-sm text-zinc-400">
                Projetos personalizados
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-[#FF3131]">
                ★★★★★
              </div>

              <p className="mt-2 text-sm text-zinc-400">
                Compromisso com qualidade
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-[#FF3131]">
                BR
              </div>

              <p className="mt-2 text-sm text-zinc-400">
                Atendimento em todo o Brasil
              </p>
            </div>

          </div>

        </div>

        {/* CTA */}

        <div
          className="
            mt-16
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
            Seu projeto merece mais do que um site.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-zinc-300">
            Merece uma estratégia completa para fortalecer sua marca,
            conquistar novos clientes e transformar sua presença digital em um
            verdadeiro ativo para o crescimento da empresa.
          </p>

          <a
            href="#form"
            onClick={trackGoogleAdsConversion}
            className="
              mt-8
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
            Quero conversar com a DotSpot
            <FiArrowRight />
          </a>

        </div>

      </div>
    </section>
  );
}