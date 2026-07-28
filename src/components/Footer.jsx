import logoFooter from "@/assets/logo.png";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaReact,
  FaGoogle,
} from "react-icons/fa";

import {
  FiMapPin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

import {
  SiNextdotjs,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGoogleads,
  SiMeta,
  SiVite,
} from "react-icons/si";

import { trackGoogleAdsConversion } from "@/utils/googleAds";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const technologies = [
    { icon: <FaReact />, label: "React" },
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <SiVite />, label: "Vite" },
    { icon: <SiGoogleads />, label: "Google Ads" },
    { icon: <SiMeta />, label: "Meta Ads" },
    { icon: <FaGoogle />, label: "SEO" },
    { icon: <SiGoogleanalytics />, label: "Analytics" },
    { icon: <SiGoogletagmanager />, label: "Tag Manager" },
  ];

  return (
    <footer className="border-t border-white/10 bg-zinc-950/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Grid Principal */}

        <div className="mb-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Marca */}

          <div className="lg:col-span-2">

            <div className="mb-6 flex items-center">

              <a
                href="/"
                className="group inline-flex items-center"
                aria-label="DotSpot - Página Inicial"
              >
                <img
                  src={logoFooter}
                  alt="DotSpot"
                  className="h-12 w-auto transition-opacity duration-300 group-hover:opacity-90 md:h-14"
                />
              </a>

            </div>

            <p className="max-w-md text-zinc-400 leading-relaxed">
              Transformamos visitantes em clientes através do desenvolvimento
              de sites profissionais, landing pages de alta conversão,
              sistemas web personalizados e estratégias de marketing digital.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://www.instagram.com/dotspot_mkt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:border-[#FF3131]/50 hover:bg-[#FF3131]/10 hover:text-[#FF3131]"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/dotspot-mkt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:border-[#FF3131]/50 hover:bg-[#FF3131]/10 hover:text-[#FF3131]"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61592382301691"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:border-[#FF3131]/50 hover:bg-[#FF3131]/10 hover:text-[#FF3131]"
              >
                <FaFacebook />
              </a>

            </div>

          </div>

          {/* Serviços */}

          <div>

            <h4 className="mb-4 font-semibold text-white">
              Serviços
            </h4>

            <ul className="space-y-3 text-sm text-zinc-400">

              <li>
                <a
                  href="#como-funciona"
                  className="transition-colors hover:text-[#FF3131]"
                >
                  Sites Profissionais
                </a>
              </li>

              <li>
                <a
                  href="#como-funciona"
                  className="transition-colors hover:text-[#FF3131]"
                >
                  Landing Pages
                </a>
              </li>

              <li>
                <a
                  href="#como-funciona"
                  className="transition-colors hover:text-[#FF3131]"
                >
                  Sistemas Web
                </a>
              </li>

              <li>
                <a
                  href="#como-funciona"
                  className="transition-colors hover:text-[#FF3131]"
                >
                  Gestão de Tráfego Pago
                </a>
              </li>

              <li>
                <a
                  href="#como-funciona"
                  className="transition-colors hover:text-[#FF3131]"
                >
                  SEO
                </a>
              </li>

              <li>
                <a
                  href="#sobre"
                  className="transition-colors hover:text-[#FF3131]"
                >
                  Sobre
                </a>
              </li>

              <li>
                <a
                  href="#form"
                  className="transition-colors hover:text-[#FF3131]"
                >
                  Diagnóstico Estratégico Gratuito
                </a>
              </li>

            </ul>

          </div>

          {/* Contato */}

          <div>

            <h4 className="mb-4 font-semibold text-white">
              Contato
            </h4>

            <div className="space-y-4 text-sm text-zinc-400">

              <div className="flex items-center gap-2">

                <FiMail className="text-[#FF3131]" />

                <a
                  href="mailto:dotspot-mkt@gmail.com"
                  onClick={trackGoogleAdsConversion}
                  className="transition-colors hover:text-white"
                >
                  dotspot-mkt@gmail.com
                </a>

              </div>

              <div className="flex items-center gap-2">

                <FiPhone className="text-[#FF3131]" />

                <a
                  href="https://wa.me/5511985888874"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackGoogleAdsConversion}
                  className="transition-colors hover:text-white"
                >
                  (11) 98588-8874
                </a>

              </div>

              <div className="flex items-start gap-2 leading-relaxed">

                <FiMapPin className="mt-1 text-[#FF3131]" />

                <span>
                  
                  Vila Harmonia – Araraquara - SP
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Tecnologias */}

        <div className="border-t border-white/10 pt-10">

          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Tecnologias e Plataformas
          </p>

          <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-zinc-400">
            Especialistas em desenvolvimento web, SEO e campanhas de Google Ads
            e Meta Ads utilizando tecnologias modernas para entregar projetos
            rápidos, seguros e preparados para crescer.
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            {technologies.map((item) => (

              <div
                key={item.label}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  text-sm
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#FF3131]/40
                  hover:bg-[#FF3131]/10
                  hover:text-white
                "
              >

                <span className="text-lg text-[#FF3131]">
                  {item.icon}
                </span>

                {item.label}

              </div>

            ))}

          </div>

        </div>

        {/* Rodapé */}

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © {currentYear} DotSpot. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="transition-colors hover:text-zinc-300"
            >
              Política de Privacidade
            </a>

            <a
              href="#"
              className="transition-colors hover:text-zinc-300"
            >
              Termos de Uso
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}