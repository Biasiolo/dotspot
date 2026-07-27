/**
 * Dispara uma conversão do Google Ads.
 *
 * @param {Function} [callback] Função executada após o envio da conversão.
 */
export function trackGoogleAdsConversion(callback) {
  if (
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    callback?.();
    return;
  }

  let called = false;

  const done = () => {
    if (called) return;
    called = true;
    callback?.();
  };

  window.gtag("event", "conversion", {
    send_to: "AW-18325761418/elx_CMKPhNYcEIrbs6JE",
    event_callback: done,
  });

  // Fallback caso o callback do Google não seja executado
  setTimeout(done, 1000);
}