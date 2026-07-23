// src/components/Hero.jsx
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logoHero from "@/assets/logo.png";

import video1 from "@/assets/video1.webm";
import { IMaskInput } from "react-imask";
import { useUTM } from "@/hooks/useUTM";
import { formatQuickMessage, formatLeadMessage } from "@/utils/whatsapp";

const WHATSAPP_PHONE = "5511985888874";
const waUrl = (message) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export default function Hero() {
  const utmHero = useUTM();

  return (
  <section
    id="hero"
    className="relative overflow-hidden bg-black min-h-screen flex items-center"
  >
    {/* Vídeo */}
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src={video1}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/75" />

    {/* Glow */}
    <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF3131]/10 blur-[140px]" />

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />

    <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 py-28 lg:grid-cols-2">

      {/* Conteúdo */}
      <div className="-mt-10">


        

        {/* Logo */}
        <img
          src={logoHero}
          alt="DotSpot"
          className="mb-4 h-40 w-auto justify-self-center"
        />

        {/* Headline */}
        <h1 className="max-w-2xl text-5xl font-black leading-tight text-white">
          Estratégias e processos que transformam visitantes em clientes.
        </h1>

        {/* Texto */}
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-300">
          Desenvolvemos sites profissionais, landing pages de alta conversão
          e estratégias de tráfego pago para empresas que querem crescer com
          previsibilidade e segurança.
        </p>

        {/* Benefícios */}
        <div className="mt-10 grid gap-4 text-zinc-200 sm:grid-cols-2">

          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF3131]" />
            Sites modernos e responsivos
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF3131]" />
            Landing Pages de alta conversão
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF3131]" />
            Gestão de Tráfego Meta & Google
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF3131]" />
            Estratégias para geração de clientes
          </div>

        </div>

        {/* Botões */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <a
            href={waUrl(formatQuickMessage("Hero", utmHero))}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#FF3131] px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-[0_0_35px_rgba(255,49,49,.35)]"
          >
            Diagnóstico do seu Problema
          </a>

          <a
            href="#provas"
            className="rounded-full border border-zinc-700 px-8 py-4 text-center text-white transition-all duration-300 hover:border-[#FF3131] hover:bg-white/5"
          >
            Conheça nossos projetos
          </a>

        </div>

      </div>

      {/* Formulário */}
      <div className="relative">
        <LeadForm />
      </div>

    </div>
  </section>
);
}


export function LeadForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [whatsapp, setWhatsapp] = useState("");
  const utm = useUTM();

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (data.company_website) return;

    // Garantimos que o valor do whatsapp venha do state atualizado
    if (!data.nome || !data.email || !whatsapp) {
      setStatus({
        state: "error",
        message: "Preencha Nome, E-mail e WhatsApp.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(String(data.email).trim())) {
      setStatus({
        state: "error",
        message: "Informe um e-mail válido.",
      });
      return;
    }

    setStatus({
      state: "loading",
      message: "Abrindo WhatsApp...",
    });

    try {
      const payload = {
        ...data,
        whatsapp, // Inclui o número já mascarado do state
        ...utm,
        origem: "Site DotSpot",
        page: window.location.href,
        userAgent: navigator.userAgent,
        consentLGPD: !!data.lgpd,
        timestamp: new Date().toISOString(),
      };

      const message = formatLeadMessage(payload);
      const url = waUrl(message);

      const win = window.open(url, "_blank");

      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = url;
      }

      setStatus({
        state: "success",
        message: "Perfeito! Vamos continuar pelo WhatsApp.",
      });

      form.reset();
      setWhatsapp(""); // Limpa o campo do WhatsApp após o envio
    } catch {
      setStatus({
        state: "error",
        message: "Não foi possível abrir o WhatsApp.",
      });
    }
  }

  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute inset-0 rounded-[32px] bg-[#FF3131]/8 blur-3xl" />

      <form
        onSubmit={handleSubmit}
        className="relative rounded-[32px] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl backdrop-blur-xl"
      >
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#FF3131]/30 bg-[#FF3131]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#FF3131]">
            Orçamento Gratuito
          </span>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Vamos conversar?
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Responderemos pelo WhatsApp com a melhor solução para sua empresa.
          </p>
        </div>

        {/* Campos */}
        <div className="mt-6 grid gap-4">
          <Input
            name="nome"
            label="Nome"
            placeholder="Seu nome"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              name="empresa"
              label="Empresa"
              placeholder="Sua empresa"
              
            />

            {/* Campo do WhatsApp com IMaskInput */}
            <div>
              <Label>WhatsApp</Label>
              <IMaskInput
                mask="(00) 00000-0000"
                value={whatsapp}
                onAccept={(value) => setWhatsapp(value)}
                name="whatsapp"
                placeholder="(11) 99999-9999"
                required
                className="mt-1 h-11 w-full rounded-xl border border-zinc-700  px-4 text-sm text-white outline-none transition focus:border-[#FF3131] focus:ring-2 focus:ring-[#FF3131]/20"
              />
            </div>
          </div>

          <Input
            type="email"
            name="email"
            label="E-mail"
            placeholder="voce@empresa.com"
            required
            
          />

          <div>
            <Label>Serviço</Label>
            <select
              name="servico"
              className="mt-1 h-11 w-full rounded-xl border border-zinc-700 bg-zinc-950  px-4 text-sm text-white outline-none transition focus:border-[#FF3131] focus:ring-2 focus:ring-[#FF3131]/20"
            >
              <option>Site Institucional</option>
              <option>Landing Page</option>
              <option>Loja Virtual</option>
              <option>Gestão de Tráfego</option>
              <option>Site + Tráfego</option>
            </select>
          </div>

          <div>
            <Label>Projeto</Label>
            <textarea
              name="projeto"
              rows={3}
              placeholder="Conte rapidamente o que você precisa..."
              className="mt-1 w-full resize-none rounded-xl border border-zinc-700  px-4 py-3 text-sm text-white outline-none transition focus:border-[#FF3131] focus:ring-2 focus:ring-[#FF3131]/20"
            />
          </div>
        </div>

        {/* LGPD */}
        <div className="mt-5 flex gap-3 text-[11px] leading-relaxed text-zinc-500">
          <input
            id="lgpd"
            name="lgpd"
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4"
          />
          <label htmlFor="lgpd">
            Concordo com o tratamento dos meus dados para contato da DotSpot.
          </label>
        </div>

        {/* Honeypot */}
        <input
          type="text"
          name="company_website"
          autoComplete="off"
          tabIndex="-1"
          className="hidden"
        />

        {/* Botão */}
        <button
          type="submit"
          disabled={status.state === "loading"}
          className="mt-6 w-full rounded-full bg-[#FF3131] py-3.5 cursor-pointer font-semibold text-white transition hover:bg-red-600 hover:shadow-[0_0_25px_rgba(255,49,49,.35)] disabled:opacity-60"
        >
          {status.state === "loading"
            ? "Abrindo WhatsApp..."
            : "Solicitar orçamento"}
        </button>

        {status.state !== "idle" && (
          <p
            className={`mt-3 text-center text-sm ${
              status.state === "success"
                ? "text-green-400"
                : status.state === "error"
                ? "text-red-400"
                : "text-zinc-400"
            }`}
          >
            {status.message}
          </p>
        )}

        {/* UTM */}
        <input type="hidden" name="utm_source" value={utm.utm_source || ""} />
        <input type="hidden" name="utm_medium" value={utm.utm_medium || ""} />
        <input type="hidden" name="utm_campaign" value={utm.utm_campaign || ""} />
        <input type="hidden" name="utm_term" value={utm.utm_term || ""} />
        <input type="hidden" name="utm_content" value={utm.utm_content || ""} />
      </form>
    </div>
  );
}

export function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
      <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

/* Helpers locais do formulário */
function Input({ label, name, type = "text", placeholder, required = false }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1 h-11 w-full rounded-xl border border-zinc-700  px-4 text-sm text-white outline-none transition focus:border-[#FF3131] focus:ring-2 focus:ring-[#FF3131]/20"
      />
    </div>
  );
}

function Label({ children }) {
  return <label className="block text-xs font-medium text-zinc-400 mb-1">{children}</label>;
}
