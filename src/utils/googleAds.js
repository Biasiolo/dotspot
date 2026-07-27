/**
 * Dispara uma conversão do Google Ads.
 */
export function trackGoogleAdsConversion() {
  if (
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: "AW-18325761418/elx_CMKPhNYcEIrbs6JE",
  });
}