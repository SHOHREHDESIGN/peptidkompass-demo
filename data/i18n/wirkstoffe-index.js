/* ============================================================================
   PEPTIDKOMPASS · data/i18n/wirkstoffe-index.js
   ============================================================================
   Seiten-Wörterbuch für wirkstoffe/index.html. Schlüssel-Präfix
   "page.wirkstoffe-index.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.wirkstoffe-index.title": "Wirkstoffe · PeptidKompass",
    "page.wirkstoffe-index.metaDescription": "Sechs Peptide im Überblick: Kategorie, Studienlage und Kurzbeschreibung, neutral erklärt. Nur für Forschungszwecke, keine medizinische Beratung.",
    "page.wirkstoffe-index.ogTitle": "Wirkstoffe · PeptidKompass",
    "page.wirkstoffe-index.ogDescription": "Sechs Substanzen, kurz und sachlich erklärt.",

    "page.wirkstoffe-index.eyebrow": "Wirkstoff-Wissen",
    "page.wirkstoffe-index.h1": "Wirkstoffe im Überblick",
    "page.wirkstoffe-index.lead": "Sechs Substanzen, kurz und sachlich erklärt.",

    "page.wirkstoffe-index.disclaimerEyebrow": "Hinweis",
    "page.wirkstoffe-index.disclaimerFallback": "Alle genannten Substanzen sind ausschließlich für Forschungszwecke bestimmt. Keine medizinische Beratung, keine Empfehlung zur Anwendung am Menschen. Nur für Personen ab 18 Jahren.",

    "page.wirkstoffe-index.categoryFilterAriaLabel": "Nach Kategorie filtern",

    "page.wirkstoffe-index.vendorCount": "{n} Anbieter im Sortiment",
    "page.wirkstoffe-index.moreLink": "Mehr erfahren",
    "page.wirkstoffe-index.emptyCategory": "Keine Wirkstoffe in dieser Kategorie."
  });

  i18n.merge("en", {
    "page.wirkstoffe-index.title": "Peptides · PeptidKompass",
    "page.wirkstoffe-index.metaDescription": "Six peptides at a glance: category, research stage, and a short description, explained neutrally. Research use only, not medical advice.",
    "page.wirkstoffe-index.ogTitle": "Peptides · PeptidKompass",
    "page.wirkstoffe-index.ogDescription": "Six substances, explained briefly and factually.",

    "page.wirkstoffe-index.eyebrow": "Peptide knowledge",
    "page.wirkstoffe-index.h1": "Peptides at a glance",
    "page.wirkstoffe-index.lead": "Six substances, explained briefly and factually.",

    "page.wirkstoffe-index.disclaimerEyebrow": "Note",
    "page.wirkstoffe-index.disclaimerFallback": "All substances listed here are intended for research purposes only. This is not medical advice, and none of these products are recommended for human use. For persons 18 and older only.",

    "page.wirkstoffe-index.categoryFilterAriaLabel": "Filter by category",

    "page.wirkstoffe-index.vendorCount": "{n} vendors carry this peptide",
    "page.wirkstoffe-index.moreLink": "Learn more",
    "page.wirkstoffe-index.emptyCategory": "No peptides in this category."
  });

})(window.PK.i18n);
