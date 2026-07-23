// src/components/Problem.jsx

import graph from "@/assets/graph.jpg";

import {
  FiSearch,
  FiMonitor,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

export default function Problem() {
  const problems = [
    {
      icon: <FiSearch size={26} />,
      title: "Sua empresa não aparece",
      desc: "A maioria das pessoas pesquisa no Google antes de contratar um serviço. Se sua empresa não é encontrada, ela perde oportunidades diariamente.",
    },
    {
      icon: <FiMonitor size={26} />,
      title: "Seu concorrente transmite mais confiança",
      desc: "Mesmo oferecendo um serviço melhor, um site desatualizado ou a falta de presença digital faz outra empresa parecer mais preparada.",
    },
    {
      icon: <FiTrendingUp size={26} />,
      title: "Você deixa dinheiro na mesa",
      desc: "Sem uma estratégia digital, potenciais clientes visitam seu perfil, não encontram informações suficientes e escolhem outra empresa.",
    },
  ];

  const metrics = [
    {
      value: "97%",
      title: "Pesquisam empresas online",
      desc: "Consumidores pesquisam antes de comprar ou contratar um serviço.",
    },
    {
      value: "75%",
      title: "Confiança vem do site",
      desc: "A credibilidade de uma empresa é influenciada pela qualidade do seu site.",
    },
    {
      value: "53%",
      title: "Abandonam sites lentos",
      desc: "Páginas que demoram mais de 3 segundos perdem visitantes rapidamente.",
    },
    {
      value: "88%",
      title: "Esperam uma boa experiência",
      desc: "Consumidores têm menos chances de voltar a um site após uma experiência ruim de navegação.",
    },
  ];

  return (
    <section
      id="problema"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Esquerda */}

        <div>

          <span className="inline-flex rounded-full border border-[#FF3131]/30 bg-[#FF3131]/10 px-4 py-2 text-sm font-medium text-[#FF3131]">
            O desafio
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-white">
            Seu próximo cliente está procurando pela sua empresa...
            <span className="text-[#FF3131]">
              {" "}mas encontra o concorrente primeiro
            </span>.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Hoje, a primeira impressão acontece antes do primeiro contato.
            Quem possui uma presença digital profissional sai na frente.
          </p>

          <div className="mt-10 space-y-5">

            {problems.map((item, index) => (

              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 transition-all duration-300 hover:border-[#FF3131]/40 hover:bg-zinc-900"
              >

                <div className="flex gap-5">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF3131]/10 text-[#FF3131]">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-relaxed text-zinc-400">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Direita */}

        <div>

          <div className="pt-6">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950">

            <img
              src={graph}
              alt="Comportamento do consumidor digital"
              className="w-full border-b border-white/10"
            />

            <div className="p-8">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF3131]/10 text-[#FF3131]">
                  <FiUsers size={24} />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-white">
                    O comportamento do consumidor mudou
                  </h3>

                  <p className="text-sm text-zinc-400">
                    Entenda por que sua presença digital faz tanta diferença.
                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-6">

                {metrics.map((metric, index) => (
                  <Metric
                    key={index}
                    value={metric.value}
                    title={metric.title}
                    desc={metric.desc}
                  />
                ))}

              </div>

              <div className="mt-8 border-t border-white/10 pt-4">

                <p className="text-[11px] leading-relaxed text-zinc-500">
                  * Estatísticas baseadas em estudos e pesquisas publicados por
                  Google, Think with Google, Stanford Web Credibility Research,
                  Deloitte, Portent e PwC.
                </p>

              </div>

            </div>

          </div>

        </div>
          </div>

      </div>

      {/* CTA */}

      <div className="mt-24 rounded-[32px] border border-[#FF3131]/20 bg-gradient-to-r from-[#FF3131]/10 to-transparent p-8 text-center">

        <h3 className="text-2xl font-bold text-white">
          Uma boa notícia?
        </h3>

        <p className="mt-3  text-zinc-300 text-center">
          Um site profissional aliado a uma estratégia digital bem estruturada
          faz sua empresa ser encontrada, transmitir confiança e transformar
          visitantes em novos clientes.
        </p>

      </div>

    </section>
  );
}

function Metric({ value, title, desc }) {
  return (
    <div>

      <div className="flex items-center justify-between">

        <span className="font-semibold text-white">
          {title}
        </span>

        <span className="text-2xl font-black text-[#FF3131]">
          {value}
        </span>

      </div>

      <p className="mt-1 text-sm leading-relaxed text-zinc-400">
        {desc}
      </p>

    </div>
  );
}