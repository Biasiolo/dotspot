// src/components/TrustBar.jsx

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function TrustBar() {
  const metrics = [
    {
      value: 97,
      suffix: "%",
      label: "Pesquisam antes",
      desc: "Consumidores pesquisam empresas online antes de tomar uma decisão de compra.",
    },
    {
      value: 75,
      suffix: "%",
      label: "Confiança pelo site",
      desc: "A credibilidade de uma empresa é influenciada pela qualidade do seu site.",
    },
    {
      value: 53,
      suffix: "%",
      label: "Abandonam sites lentos",
      desc: "Usuários deixam páginas que demoram mais de 3 segundos para carregar.",
    },
    {
      value: 63,
      suffix: "%",
      label: "Buscas pelo celular",
      desc: "Grande parte das pesquisas no Google já acontece em dispositivos móveis.",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[.25em] text-[#FF3131]">
            Por que investir no digital?
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Sua presença online influencia diretamente suas vendas.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {metrics.map((metric, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FF3131]/40"
            >

              <div className="mb-4 text-5xl font-black text-[#FF3131]">

                <CountUpWithVisibility
                  start={0}
                  end={metric.value}
                  suffix={metric.suffix}
                />

              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                {metric.label}
              </h3>

              <p className="text-sm leading-relaxed text-zinc-400">
                {metric.desc}
              </p>

            </div>
          ))}

        </div>
<div className="mt-10 border-t border-white/5 pt-4 text-left ps-20">
  <p className="text-[11px] leading-relaxed text-zinc-500">
    * Estatísticas baseadas em estudos e pesquisas publicados por Google, Think with Google,
    Stanford Web Credibility Research, Deloitte e Portent.
  </p>
</div>
      </div>
      
    </section>
  );
}

function CountUpWithVisibility({ start, end, ...props }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      {inView && (
        <CountUp
          start={start}
          end={end}
          duration={2}
          {...props}
        />
      )}
    </div>
  );
}