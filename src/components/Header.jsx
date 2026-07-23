import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logoHeader from "@/assets/logoheader.png";
import { useUTM } from "@/hooks/useUTM";
import { waUrlFromMessage, formatQuickMessage } from "@/utils/whatsapp";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const utmHeader = useUTM();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="flex items-center"
        >
          <img
            src={logoHeader}
            alt="DotSpot - Presença Digital que Converte"
            className="h-11 w-auto"
          />
        </motion.a>

        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">

          <a
            href="#servicos"
            className="text-zinc-300 transition hover:text-[#FF3131]"
          >
            Serviços
          </a>

          <a
            href="#processo"
            className="text-zinc-300 transition hover:text-[#FF3131]"
          >
            Processo
          </a>

          <a
            href="#portfolio"
            className="text-zinc-300 transition hover:text-[#FF3131]"
          >
            Portfólio
          </a>

          <a
            href="#faq"
            className="text-zinc-300 transition hover:text-[#FF3131]"
          >
            FAQ
          </a>

          <a
            href={waUrlFromMessage(
              formatQuickMessage("Header", utmHeader)
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              bg-[#FF3131]
              px-7
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-red-600
              hover:shadow-[0_0_30px_rgba(255,49,49,.35)]
            "
          >
            Solicitar Orçamento
          </a>

        </nav>

        <button
          aria-label="Abrir menu"
          className="lg:hidden text-white"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>
    </header>
  );
}