/* ============================================================================
   PEPTIDKOMPASS · data/i18n/vergleich.js
   ============================================================================
   Seiten-Wörterbuch für vergleich.html. Schlüssel-Präfix
   "page.vergleich.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.vergleich.title": "Vergleich · Peptide Compass",
    "page.vergleich.metaDescription": "Alle 24 Peptid-Anbieter im direkten Vergleich: Score, Preis pro Milligramm, Lieferzeit und Rabattcodes, sortierbar nach jeder Spalte.",
    "page.vergleich.ogTitle": "Vergleich · Peptide Compass",
    "page.vergleich.ogDescription": "Alle Anbieter im Vergleich: Score, Preis pro mg, Lieferzeit, Rabatt.",

    "page.vergleich.eyebrow": "Alle Anbieter im Vergleich",
    "page.vergleich.h1": "Alle Anbieter im Vergleich",
    "page.vergleich.lead": "Preis pro Milligramm, sortierbar nach jeder Spalte.",
    "page.vergleich.intro": "Preis pro Milligramm zeigt, was ein Milligramm Wirkstoff bei jedem Anbieter tatsächlich kostet, unabhängig von Packungsgröße. So vergleichst du Anbieter unabhängig von der Verpackungsgröße.",

    "page.vergleich.colAnbieter": "Anbieter",
    "page.vergleich.colLand": "Land",
    "page.vergleich.colGesamtscore": "Gesamtscore",
    "page.vergleich.colLabor": "Labor",
    "page.vergleich.colRecht": "Rechtsrahmen",
    "page.vergleich.colLieferung": "Lieferung",
    "page.vergleich.colSortiment": "Sortiment",
    "page.vergleich.colPreis": "Preis",
    "page.vergleich.colPreisMg": "Preis/mg",
    "page.vergleich.colCoas": "CoAs",
    "page.vergleich.colVersand": "Versand",
    "page.vergleich.colRabatt": "Rabatt",
    "page.vergleich.colAktion": "Aktion",
    "page.vergleich.colZahlung": "Zahlung",

    "page.vergleich.tableIntro": "Standardansicht zeigt die Kernkriterien, alle Details per Klick.",
    "page.vergleich.showAllCriteria": "Alle Kriterien anzeigen",
    "page.vergleich.showCoreCriteria": "Nur Kernkriterien",

    "page.vergleich.legendTitle": "So setzt sich der Gesamtscore zusammen",
    "page.vergleich.methodikLink": "Ganze Methodik lesen",
    "page.vergleich.footnote": "Preis/mg bezieht sich auf das günstigste Produkt je Anbieter, Stand {updated}.",

    "page.vergleich.coaExtern": "Extern",
    "page.vergleich.coaIntern": "Intern",
    "page.vergleich.coaNone": "Keine öffentlichen CoAs",
    "page.vergleich.versandRange": "{min}–{max} Tage",
    "page.vergleich.rabattNone": "keiner",
    "page.vergleich.actionVisitVendor": "Zum Anbieter"
  });

  i18n.merge("en", {
    "page.vergleich.title": "Compare · Peptide Compass",
    "page.vergleich.metaDescription": "All 24 peptide vendors compared side by side: score, price per milligram, delivery time, and discount codes, sortable by any column.",
    "page.vergleich.ogTitle": "Compare · Peptide Compass",
    "page.vergleich.ogDescription": "All vendors compared: score, price per mg, delivery time, discount.",

    "page.vergleich.eyebrow": "All vendors compared",
    "page.vergleich.h1": "All vendors compared",
    "page.vergleich.lead": "Price per milligram, sortable by any column.",
    "page.vergleich.intro": "Price per milligram shows what one milligram of peptide actually costs at each vendor, regardless of package size. It lets you compare vendors independent of package size.",

    "page.vergleich.colAnbieter": "Vendor",
    "page.vergleich.colLand": "Country",
    "page.vergleich.colGesamtscore": "Overall score",
    "page.vergleich.colLabor": "Lab quality",
    "page.vergleich.colRecht": "Legal framework",
    "page.vergleich.colLieferung": "Shipping",
    "page.vergleich.colSortiment": "Range",
    "page.vergleich.colPreis": "Price",
    "page.vergleich.colPreisMg": "Price/mg",
    "page.vergleich.colCoas": "CoAs",
    "page.vergleich.colVersand": "Delivery",
    "page.vergleich.colRabatt": "Discount",
    "page.vergleich.colAktion": "Action",
    "page.vergleich.colZahlung": "Payment",

    "page.vergleich.tableIntro": "The default view shows the core criteria, every detail is one click away.",
    "page.vergleich.showAllCriteria": "Show all criteria",
    "page.vergleich.showCoreCriteria": "Core criteria only",

    "page.vergleich.legendTitle": "How the overall score is built",
    "page.vergleich.methodikLink": "Read the full methodology",
    "page.vergleich.footnote": "Price/mg refers to the cheapest product per vendor, as of {updated}.",

    "page.vergleich.coaExtern": "External",
    "page.vergleich.coaIntern": "In-house",
    "page.vergleich.coaNone": "No public CoAs",
    "page.vergleich.versandRange": "{min}–{max} days",
    "page.vergleich.rabattNone": "none",
    "page.vergleich.actionVisitVendor": "Visit vendor"
  });

})(window.PK.i18n);
