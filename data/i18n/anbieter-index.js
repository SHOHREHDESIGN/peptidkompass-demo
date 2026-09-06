/* ============================================================================
   PEPTIDKOMPASS · data/i18n/anbieter-index.js
   ============================================================================
   Seiten-Wörterbuch für anbieter/index.html (Anbieter-Liste). Schlüssel-Präfix
   "page.anbieter-index.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.anbieter-index.title": "Alle Anbieter im Überblick · Peptide Compass",
    "page.anbieter-index.metaDescription": "Acht geprüfte Peptid-Anbieter nach Labor, Rechtsrahmen, Lieferung, Sortiment und Preis pro mg vergleichen. Nach Land und Prüf-Status filtern, nach Score, Name, Preis/mg oder Versandzeit sortieren.",
    "page.anbieter-index.ogTitle": "Alle Anbieter im Überblick · Peptide Compass",
    "page.anbieter-index.ogDescription": "Acht geprüfte Anbieter, ein Blick genügt.",

    "page.anbieter-index.h1": "Alle Anbieter im Überblick",
    "page.anbieter-index.lead": "Acht geprüfte Anbieter, ein Blick genügt.",

    "page.anbieter-index.filterLandLabel": "Land",
    "page.anbieter-index.landAlle": "Alle",

    "page.anbieter-index.filterLabStatusLabel": "Lab-Status",
    "page.anbieter-index.filterLabExtern": "Extern geprüft",
    "page.anbieter-index.filterRabatt": "Rabatt vorhanden",

    "page.anbieter-index.sortLabel": "Sortierung",
    "page.anbieter-index.sortScore": "Score",
    "page.anbieter-index.sortName": "Name",
    "page.anbieter-index.sortPreisProMg": "Preis/mg",
    "page.anbieter-index.sortVersand": "Versandzeit",

    "page.anbieter-index.resultCountSingular": "{n} Anbieter gefunden",
    "page.anbieter-index.resultCountPlural": "{n} Anbieter gefunden",

    "page.anbieter-index.emptyTitle": "Kein Anbieter passt",
    "page.anbieter-index.emptyBody": "Versuch es mit weniger Filtern oder setze sie zurück.",
    "page.anbieter-index.resetButton": "Filter zurücksetzen"
  });

  i18n.merge("en", {
    "page.anbieter-index.title": "All vendors overview · Peptide Compass",
    "page.anbieter-index.metaDescription": "Compare eight vetted peptide vendors by lab quality, legal framework, shipping, range, and price per mg. Filter by country and verification status, sort by score, name, price per mg, or shipping time.",
    "page.anbieter-index.ogTitle": "All vendors overview · Peptide Compass",
    "page.anbieter-index.ogDescription": "Eight vetted vendors, one clear view.",

    "page.anbieter-index.h1": "All vendors overview",
    "page.anbieter-index.lead": "Eight vetted vendors, one clear view.",

    "page.anbieter-index.filterLandLabel": "Country",
    "page.anbieter-index.landAlle": "All",

    "page.anbieter-index.filterLabStatusLabel": "Lab status",
    "page.anbieter-index.filterLabExtern": "Third-party tested",
    "page.anbieter-index.filterRabatt": "Discount available",

    "page.anbieter-index.sortLabel": "Sort by",
    "page.anbieter-index.sortScore": "Score",
    "page.anbieter-index.sortName": "Name",
    "page.anbieter-index.sortPreisProMg": "Price/mg",
    "page.anbieter-index.sortVersand": "Shipping time",

    "page.anbieter-index.resultCountSingular": "{n} vendor found",
    "page.anbieter-index.resultCountPlural": "{n} vendors found",

    "page.anbieter-index.emptyTitle": "No vendor matches",
    "page.anbieter-index.emptyBody": "Try fewer filters or reset them.",
    "page.anbieter-index.resetButton": "Reset filters"
  });

})(window.PK.i18n);
