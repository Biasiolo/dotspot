import logoFooter from "@/assets/logo.png";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6 py-16">
        
        {/* Grid Principal */}
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Coluna 1: Marca e Redes */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <a
                href="/"
                className="inline-flex items-center group"
                aria-label="DotSpot - Página Inicial"
              >
                <img
                  src={logoFooter}
                  alt="DotSpot"
                  className="h-12 md:h-14 w-auto transition-opacity group-hover:opacity-90"
                />
              </a>
            </div>

            <p className="mb-6 max-w-md text-zinc-400">
              Transformamos visitantes em clientes. Desenvolvimento de sites profissionais, 
              landing pages de alta conversão e gestão de tráfego pago.
            </p>

            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/dotspot_mkt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da DotSpot"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:border-[#FF3131]/50 hover:bg-[#FF3131]/10 hover:text-[#FF3131]"
                title="@dotspot_mkt no Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/company/dotspot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da DotSpot"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:border-[#FF3131]/50 hover:bg-[#FF3131]/10 hover:text-[#FF3131]"
                title="DotSpot no LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="https://facebook.com/dotspot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da DotSpot"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:border-[#FF3131]/50 hover:bg-[#FF3131]/10 hover:text-[#FF3131]"
                title="DotSpot no Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Serviços</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a href="#como-funciona" className="transition-colors hover:text-[#FF3131]">
                  Sites Profissionais
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="transition-colors hover:text-[#FF3131]">
                  Landing Pages de Alta Conversão
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="transition-colors hover:text-[#FF3131]">
                  Gestão de Tráfego Pago
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="transition-colors hover:text-[#FF3131]">
                  Otimização de SEO
                </a>
              </li>
              <li>
                <a href="#form" className="transition-colors hover:text-[#FF3131]">
                  Diagnóstico Digital Gratuito
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato e Endereço */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contato</h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <FiMail className="h-4 w-4 shrink-0 text-[#FF3131]" />
                <a 
                  href="mailto:dotspot-mkt@gmail.com" 
                  className="transition-colors hover:text-white"
                >
                  dotspot-mkt@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FiPhone className="h-4 w-4 shrink-0 text-[#FF3131]" />
                <a 
                  href="https://wa.me/5511985888874" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  (11) 98588-8874
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1 leading-relaxed">
                <FiMapPin className="mt-1 h-4 w-4 shrink-0 text-[#FF3131]" />
                <span>
                  Avenida Bruno Arctico, 300<br />
                  Vila Harmonia – Araraquara/SP
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>© {currentYear} DotSpot. Todos os direitos reservados.</p>
          
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-zinc-300">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-zinc-300">
              Termos de Uso
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}