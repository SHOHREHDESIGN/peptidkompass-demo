/* ============================================================================
   PEPTIDKOMPASS · data/i18n/impressum.js
   ============================================================================
   Seiten-Wörterbuch für impressum.html. Schlüssel-Präfix
   "page.impressum.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.

   Stand 22.09.2026: Betreiberangaben von Vic eingetragen (Online Monkeys LLC,
   Wyoming). "§ 5 DDG" statt "§ 5 TMG": das Telemediengesetz wurde im Mai 2024
   durch das Digitale-Dienste-Gesetz abgelöst, die Impressumspflicht steht
   seitdem in § 5 DDG.

   NOCH OFFEN (von Renato/Sofia nachfordern, siehe _gate/): vertretungs-
   berechtigte Person, Registernummer + Registerbehörde, USt-IdNr. falls
   vorhanden, Verantwortliche(r) nach § 18 Abs. 2 MStV. Ohne diese Angaben
   ist das Impressum nach deutschem Recht unvollständig.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.impressum.title": "Peptide Compass · Impressum",
    "page.impressum.metaDescription": "Angaben gemäß § 5 DDG: Betreiber, Anschrift und Kontakt von Peptide Compass.",
    "page.impressum.ogTitle": "Peptide Compass · Impressum",
    "page.impressum.ogDescription": "Angaben gemäß § 5 DDG: Betreiber, Anschrift und Kontakt von Peptide Compass.",

    "page.impressum.heroEyebrow": "Pflichtangaben",
    "page.impressum.h1": "Impressum",

    "page.impressum.tmgH2": "Angaben gemäß § 5 DDG",
    "page.impressum.betreiberLabel": "Betreiber",
    "page.impressum.betreiberName": "Online Monkeys LLC",
    "page.impressum.anschriftLabel": "Anschrift",
    "page.impressum.anschriftZeile1": "1309 Coffeen Avenue STE 1200",
    "page.impressum.anschriftZeile2": "Sheridan, WY 82801, USA",
    "page.impressum.kontaktLabel": "Kontakt",
    "page.impressum.rechtsformLabel": "Rechtsform",
    "page.impressum.rechtsformWert": "Limited Liability Company (LLC) nach dem Recht des US-Bundesstaates Wyoming",
    "page.impressum.inhaltH2": "Inhalte dieser Seite",
    "page.impressum.inhaltBody": "Peptide Compass vergleicht Anbieter anhand dokumentierter Angaben. Die Seite verkauft nichts selbst und gibt keine medizinische Beratung. Externe Shop-Links sind als Anzeige gekennzeichnet und können zu einer Vergütung führen."
  });

  i18n.merge("en", {
    "page.impressum.title": "Peptide Compass · Legal notice",
    "page.impressum.metaDescription": "Information per § 5 DDG (German Digital Services Act): operator, address and contact for Peptide Compass.",
    "page.impressum.ogTitle": "Peptide Compass · Legal notice",
    "page.impressum.ogDescription": "Information per § 5 DDG (German Digital Services Act): operator, address and contact for Peptide Compass.",

    "page.impressum.heroEyebrow": "Mandatory information",
    "page.impressum.h1": "Legal notice",

    "page.impressum.tmgH2": "Information per § 5 DDG",
    "page.impressum.betreiberLabel": "Operator",
    "page.impressum.betreiberName": "Online Monkeys LLC",
    "page.impressum.anschriftLabel": "Address",
    "page.impressum.anschriftZeile1": "1309 Coffeen Avenue STE 1200",
    "page.impressum.anschriftZeile2": "Sheridan, WY 82801, USA",
    "page.impressum.kontaktLabel": "Contact",
    "page.impressum.rechtsformLabel": "Legal form",
    "page.impressum.rechtsformWert": "Limited Liability Company (LLC) under the laws of the State of Wyoming, USA",
    "page.impressum.inhaltH2": "About this site",
    "page.impressum.inhaltBody": "Peptide Compass compares vendors using documented information. The site sells nothing itself and gives no medical advice. External shop links are labelled as ads and may earn a commission."
  });

})(window.PK.i18n);
