export const WHATSAPP_PHONE = "5511985888874";

/**
 * Gera a URL do WhatsApp com a mensagem codificada.
 */
export function waUrl(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Monta o bloco de UTMs somente quando existir pelo menos uma.
 */
function formatUTMs(utm = {}) {
  const lines = [];

  if (utm.utm_source) lines.push(`• Source: ${utm.utm_source}`);
  if (utm.utm_medium) lines.push(`• Medium: ${utm.utm_medium}`);
  if (utm.utm_campaign) lines.push(`• Campaign: ${utm.utm_campaign}`);
  if (utm.utm_term) lines.push(`• Term: ${utm.utm_term}`);
  if (utm.utm_content) lines.push(`• Content: ${utm.utm_content}`);

  if (!lines.length) return [];

  return [
    "",
    "*UTMs*",
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
    `*Página:* ${payload.page}`,
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