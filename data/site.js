window.PK = window.PK || {};

window.PK.site = {
  name: "Peptide Compass",
  claim: "",
  claim_en: "",
  demo: true,
  // launchMode ("preview"|"live"): steuert NUR den Vorabversion-Banner
  // (PK.initDemoBanner). Default "preview" (Banner sichtbar), auf "live"
  // setzen erst nach Vic-Freigabe zum Go-Live -> Banner verschwindet
  // komplett, unabhängig von site.demo (Auftrag Teil B7, 14.09.).
  launchMode: "preview",
  // domain: einzige Quelle für canonical/og:url/sitemap/robots (kein
  // Hardcoding mehr in den Seiten). Angenommene Domain, siehe Executor-
  // Report vom 14.09. an den Orchestrator (BRAUCHT-VIC: Domain bestätigen).
  domain: "https://peptidkompass.com",
  disclaimer: "Alle genannten Substanzen sind ausschließlich für Forschungszwecke bestimmt. Keine medizinische Beratung, keine Empfehlung zur Anwendung am Menschen. Nur für Personen ab 18 Jahren.",
  disclaimer_en: "All substances listed here are intended for research purposes only. This is not medical advice, and none of these products are recommended for human use. For persons 18 and older only.",
  affiliateNote: "Anzeige",
  affiliateNote_en: "Ad",
  updated: "2026-09-15"
};
