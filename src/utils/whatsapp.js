export const WHATSAPP_PHONE = "5511985888874";

/**
 * Gera a URL do WhatsApp com a mensagem codificada.
 */
export function waUrl(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Formata a página de origem removendo parâmetros de rastreamento.
 */
function formatPage(url = "") {
  try {
    const parsed = new URL(url);

    const path =
      parsed.pathname === "/"
        ? ""
        : parsed.pathname;

    return `${parsed.hostname}${path}`;
  } catch {
    return "Não identificado";
  }
}

/**
 * Deixa valores de UTM mais legíveis.
 */
function formatUTMValue(value = "") {
  return value
    .replaceAll("_", " ")
    .replaceAll("+", " ")
    .trim();
}

/**
 * Monta o bloco de UTMs somente quando existir pelo menos uma.
 */
function formatUTMs(utm = {}) {
  const lines = [];

  const sources = {
    google: "Google Ads",
    facebook: "Facebook Ads",
    instagram: "Instagram",
    organic: "Busca orgânica",
  };

  const mediums = {
    cpc: "Anúncio pago",
    organic: "Orgânico",
    social: "Rede social",
  };

  if (utm.utm_source) {
    lines.push(
      `• Origem: ${
        sources[utm.utm_source] ||
        formatUTMValue(utm.utm_source)
      }`
    );
  }

  if (utm.utm_medium) {
    lines.push(
      `• Mídia: ${
        mediums[utm.utm_medium] ||
        formatUTMValue(utm.utm_medium)
      }`
    );
  }

  if (utm.utm_campaign) {
    lines.push(
      `• Campanha: ${formatUTMValue(utm.utm_campaign)}`
    );
  }

  if (utm.utm_term) {
    lines.push(
      `• Busca: ${formatUTMValue(utm.utm_term)}`
    );
  }

  if (utm.utm_content) {
    lines.push(
      `• Anúncio: ${formatUTMValue(utm.utm_content)}`
    );
  }

  if (!lines.length) return [];

  return [
    "",
    "*Origem do Lead*",
    ...lines,
  ];
}

/**
 * Mensagem enviada pelo formulário principal.
 */
export function formatLeadMessage(payload) {
  return [
    "*Olá, equipe DotSpot!*",
    "",
    "Tenho interesse em desenvolver um projeto e gostaria de receber um orçamento.",
    "",
    "━━━━━━━━━━━━━━━━━━",
    "",
    `*Nome:* ${payload.nome}`,
    `*Empresa:* ${payload.empresa || "-"}`,
    `*E-mail:* ${payload.email}`,
    `*WhatsApp:* ${payload.whatsapp}`,
    `*Serviço:* ${payload.servico || "-"}`,
    "",
    "*Projeto:*",
    payload.projeto || "-",
    "",
    "━━━━━━━━━━━━━━━━━━",
    "",
    `*Origem:* ${payload.origem}`,
    `*Página:* ${formatPage(payload.page)}`,
    ...formatUTMs(payload),
    "",
    `*Data:* ${new Date().toLocaleString("pt-BR")}`,
  ].join("\n");
}

/**
 * Mensagem para CTAs rápidos (Header, Hero, Botões etc.)
 */
export function formatQuickMessage(origin, utm = {}) {
  return [
    "*Olá, equipe DotSpot!*",
    "",
    "Gostaria de conversar sobre um projeto para minha empresa.",
    "",
    `*Origem:* ${origin}`,
    ...formatUTMs(utm),
  ].join("\n");
}