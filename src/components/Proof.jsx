import {
  FiTrendingUp,
  FiGlobe,
  FiTarget,
  FiAward,
  FiExternalLink,
} from "react-icons/fi";

export default function Proof() {
  const stats = [
    {
      icon: <FiGlobe />,
      title: "Sites profissionais",
      desc: "Projetos modernos desenvolvidos para transmitir credibilidade e converter visitantes em clientes.",
    },
    {
      icon: <FiTarget />,
      title: "Estratégias personalizadas",
      desc: "Cada empresa possui um objetivo diferente e desenvolvemos soluções sob medida.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Foco em crescimento",
      desc: "Sites e campanhas pensados para gerar oportunidades reais de negócio.",
    },
    {
      icon: <FiAward />,
      title: "Qualidade e performance",
      desc: "Design, velocidade e experiência do usuário como prioridade em todos os projetos.",
    },
  ];

  const cases = [
    {
      company: "Academia Attività",
      category: "Academia • Website Institucional",
      description:
        "Desenvolvimento de site moderno para fortalecer a presença digital da academia, facilitar o contato com novos alunos e apresentar serviços de forma profissional.",
    },
    {
      company: "Cantarola",
      category: "Marca de Meias • Branding + Website",
      description:
        "Projeto voltado ao fortalecimento da marca e apresentação do catálogo de produtos, valorizando identidade visual e posicionamento digital.",
    },
    {
      company: "Fisner Design",
      category: "Design • Website Institucional",
      description:
        "Criação e desenvolvimento de uma presença digital alinhada ao posicionamento da empresa, destacando serviços, portfólio e canais de contato.",
    },
  ];

  return (
    <section
      id="provas"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Header */}

      <div className="text-center max-w-3xl mx-auto">

        <span className="inline-flex rounded-full border border-[#FF3131]/30 bg-[#FF3131]/10 px-4 py-2 text-sm font-medium text-[#FF3131]">
          Projetos desenvolvidos
        </span>

        <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white">
          Experiência construída em projetos reais.
        </h2>

        <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
          Cada empresa possui desafios diferentes. Nosso trabalho é criar
          soluções digitais que comuniquem valor, transmitam confiança e
          aproximem marcas de seus clientes.
        </p>

      </div>

      {/* Diferenciais */}

      <div className="grid lg:grid-cols-4 gap-6 mt-16">

        {stats.map((item, index) => (

          <div
            key={index}
            className="
              rounded-3xl
              border
              border-white/10
              bg-zinc-950
              p-6
              transition-all
              duration-300
              hover:border-[#FF3131]/40
              hover:-translate-y-1
            "
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF3131]/10 text-[#FF3131] text-2xl">
              {item.icon}
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

      {/* Cases */}

      <div className="grid lg:grid-cols-3 gap-8 mt-20">

        {cases.map((item) => (

          <article
            key={item.company}
            className="
              rounded-[30px]
              border
              border-white/10
              bg-zinc-950
              p-8
              transition-all
              duration-300
              hover:border-[#FF3131]/40
              hover:-translate-y-2
            "
          >

            <span className="inline-flex rounded-full bg-[#FF3131]/10 px-3 py-1 text-xs font-medium text-[#FF3131]">
              Case
            </span>

            <h3 className="mt-5 text-2xl font-bold text-white">
              {item.company}
            </h3>

            <p className="mt-2 text-sm text-[#FF3131]">
              {item.category}
            </p>

            <p className="mt-6 leading-relaxed text-zinc-400">
              {item.description}
            </p>

            <button
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-white
                transition-colors
                hover:text-[#FF3131]
              "
            >
              Ver projeto

              <FiExternalLink />

            </button>

          </article>

        ))}

      </div>

      {/* CTA */}

      <div
        className="
          mt-20
          rounded-[32px]
          border
          border-[#FF3131]/20
          bg-gradient-to-r
          from-[#FF3131]/10
          to-transparent
          p-10
          text-center
        "
      >

        <h3 className="text-3xl font-bold text-white">
          O próximo case de sucesso pode ser o da sua empresa.
        </h3>

        <p className="mt-4 max-w-3xl mx-auto text-zinc-300 leading-relaxed">
          Criamos sites, landing pages e estratégias digitais que ajudam
          empresas a serem encontradas, transmitirem confiança e conquistarem
          novos clientes.
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
            hover:bg-red-600
            hover:shadow-[0_0_35px_rgba(255,49,49,.35)]
          "
        >
          Marcar uma conversa
        </a>

      </div>
    </section>
  );
}