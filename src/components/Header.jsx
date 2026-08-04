import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import logoHeader from "@/assets/logoheader.png";
import { useUTM } from "@/hooks/useUTM";
import { waUrl, formatQuickMessage } from "@/utils/whatsapp";
import { trackGoogleAdsConversion } from "@/utils/googleAds";

const menuItems = [
  { label: "Serviços", href: "#faq" },
  { label: "Processo", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#provas" },
  { label: "Contato", href: "#form" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const utmHeader = useUTM();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-black/80 shadow-2xl backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}

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

          {/* Desktop */}

          <nav className="hidden items-center gap-10 text-sm font-medium lg:flex">

            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-zinc-300 transition hover:text-[#FF3131]"
              >
                {item.label}
              </a>
            ))}

            <a
              href={waUrl(formatQuickMessage("Header", utmHeader))}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackGoogleAdsConversion}
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
              Fale Conosco
            </a>

          </nav>

          {/* Botão Mobile */}

          <button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
            className="relative z-[70] text-white lg:hidden"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: .25 }}
            >
              {menuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </motion.div>
          </button>

        </div>
      </header>

      {/* Drawer Mobile */}

      <AnimatePresence>

        {menuOpen && (

          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
              className="
                fixed
                right-0
                top-0
                z-[65]
                flex
                h-screen
                w-[82%]
                max-w-[360px]
                flex-col
                border-l
                border-white/10
                bg-zinc-950
                shadow-2xl
                lg:hidden
              "
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">

                <img
                  src={logoHeader}
                  alt="DotSpot"
                  className="h-10"
                />

                <button
                  onClick={closeMenu}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white/5
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

              </div>

              {/* Links */}

              <nav className="flex-1 overflow-y-auto px-6 py-8">

                <div className="space-y-2">

                  {menuItems.map((item, index) => (

                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * .05,
                      }}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-transparent
                        px-5
                        py-4
                        text-zinc-200
                        transition-all
                        duration-300
                        hover:border-[#FF3131]/30
                        hover:bg-[#FF3131]/10
                        hover:text-white
                      "
                    >
                      {item.label}

                      <span className="text-[#FF3131]">
                        →
                      </span>

                    </motion.a>

                  ))}

                </div>

              </nav>

              {/* CTA */}

              <div className="border-t border-white/10 p-6">

                <div className="mb-5 rounded-2xl border border-[#FF3131]/20 bg-[#FF3131]/10 p-4">

                  <p className="text-sm leading-relaxed text-zinc-300">
                    Vamos conversar sobre o seu projeto e encontrar a melhor solução para sua empresa.
                  </p>

                </div>

                <a
                  href={waUrl(formatQuickMessage("Menu Mobile", utmHeader))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackGoogleAdsConversion();
                    closeMenu();
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FF3131]
                    px-6
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-red-600
                    hover:shadow-[0_0_30px_rgba(255,49,49,.35)]
                  "
                >
                  Solicitar Orçamento
                </a>

              </div>

            </motion.aside>
          </>

        )}

      </AnimatePresence>
    </>
  );
}