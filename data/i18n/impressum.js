/* ============================================================================
   PEPTIDKOMPASS · data/i18n/impressum.js
   ============================================================================
   Seiten-Wörterbuch für impressum.html. Schlüssel-Präfix
   "page.impressum.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.

   EN bleibt eine Übersetzung der Platzhalter-Struktur, kein eigenes
   Rechtsdokument. placeholderBody trägt den Pflicht-Hinweis, dass
   deutsches Recht ein Impressum verlangt (siehe assets/css/README.md).
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.impressum.title": "Peptide Compass · Impressum",
    "page.impressum.metaDescription": "Angaben gemäß § 5 TMG. Struktur-Platzhalter, vor Veröffentlichung juristisch prüfen lassen.",
    "page.impressum.ogTitle": "Peptide Compass · Impressum",
    "page.impressum.ogDescription": "Angaben gemäß § 5 TMG. Struktur-Platzhalter, vor Veröffentlichung juristisch prüfen lassen.",

    "page.impressum.heroEyebrow": "Pflichtangaben",
    "page.impressum.h1": "Impressum",

    "page.impressum.placeholderPill": "Platzhalter",
    "page.impressum.placeholderBody": "Diese Seite enthält Struktur-Platzhalter, kein fertiges Impressum. Vor Veröffentlichung juristisch prüfen lassen.",

    "page.impressum.tmgH2": "Angaben gemäß § 5 TMG",
    "page.impressum.field1": "Name/Firma",
    "page.impressum.field2": "Anschrift",
    "page.impressum.field3": "Kontakt, E-Mail",
    "page.impressum.field4": "Telefon, falls angegeben",
    "page.impressum.field5": "Umsatzsteuer-ID, falls vorhanden",
    "page.impressum.field6": "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    "page.impressum.field7": "Dieser Abschnitt ist ein Struktur-Platzhalter, kein Rechtsrat. Vor Go-live von einem Anwalt prüfen lassen."
  });

  i18n.merge("en", {
    "page.impressum.title": "Peptide Compass · Legal notice",
    "page.impressum.metaDescription": "Information per § 5 TMG (German Telemedia Act). Structural placeholder, have this reviewed by a lawyer before publishing.",
    "page.impressum.ogTitle": "Peptide Compass · Legal notice",
    "page.impressum.ogDescription": "Information per § 5 TMG (German Telemedia Act). Structural placeholder, have this reviewed by a lawyer before publishing.",

    "page.impressum.heroEyebrow": "Mandatory information",
    "page.impressum.h1": "Legal notice",

    "page.impressum.placeholderPill": "Placeholder",
    "page.impressum.placeholderBody": "This page contains a structural placeholder, not a finished legal notice. German law requires an Impressum (legal notice) for a commercial website. Have this reviewed by a lawyer before publishing.",

    "page.impressum.tmgH2": "Information per § 5 TMG",
    "page.impressum.field1": "Name/company",
    "page.impressum.field2": "Address",
    "page.impressum.field3": "Contact, email",
    "page.impressum.field4": "Phone, if provided",
    "page.impressum.field5": "VAT ID, if available",
    "page.impressum.field6": "Person responsible for content per § 18 (2) MStV (German Interstate Media Treaty)",
    "page.impressum.field7": "This section is a structural placeholder, not legal advice. Have it reviewed by a lawyer before launch."
  });

})(window.PK.i18n);
