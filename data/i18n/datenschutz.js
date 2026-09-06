/* ============================================================================
   PEPTIDKOMPASS · data/i18n/datenschutz.js
   ============================================================================
   Seiten-Wörterbuch für datenschutz.html. Schlüssel-Präfix
   "page.datenschutz.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.datenschutz.title": "Peptide Compass · Datenschutz",
    "page.datenschutz.metaDescription": "Datenschutzerklärung. Struktur-Platzhalter, vor Veröffentlichung juristisch prüfen lassen.",
    "page.datenschutz.ogTitle": "Peptide Compass · Datenschutz",
    "page.datenschutz.ogDescription": "Datenschutzerklärung. Struktur-Platzhalter, vor Veröffentlichung juristisch prüfen lassen.",

    "page.datenschutz.heroEyebrow": "Pflichtangaben",
    "page.datenschutz.h1": "Datenschutz",

    "page.datenschutz.placeholderPill": "Platzhalter",
    "page.datenschutz.placeholderBody": "Diese Seite enthält Struktur-Platzhalter, keine fertige Datenschutzerklärung. Vor Veröffentlichung juristisch prüfen lassen.",

    "page.datenschutz.dsgvoH2": "Datenschutzerklärung",
    "page.datenschutz.field1": "Verantwortlicher gemäß Art. 4 Nr. 7 DSGVO",
    "page.datenschutz.field2": "Welche Daten werden erhoben, aktuell laut Plan-Annahme 11 kein Tracking, hier bestätigen oder ergänzen",
    "page.datenschutz.field3": "Cookies/Analyse-Tools, falls später eingebaut",
    "page.datenschutz.field4": "Rechte der betroffenen Person: Auskunft, Löschung, Widerspruch",
    "page.datenschutz.field5": "Kontakt für Datenschutzanfragen",
    "page.datenschutz.field6": "Dieser Abschnitt ist ein Struktur-Platzhalter, kein Rechtsrat. Vor Go-live von einem Anwalt prüfen lassen."
  });

  i18n.merge("en", {
    "page.datenschutz.title": "Peptide Compass · Privacy",
    "page.datenschutz.metaDescription": "Privacy policy. Structural placeholder, have this reviewed by a lawyer before publishing.",
    "page.datenschutz.ogTitle": "Peptide Compass · Privacy",
    "page.datenschutz.ogDescription": "Privacy policy. Structural placeholder, have this reviewed by a lawyer before publishing.",

    "page.datenschutz.heroEyebrow": "Mandatory information",
    "page.datenschutz.h1": "Privacy",

    "page.datenschutz.placeholderPill": "Placeholder",
    "page.datenschutz.placeholderBody": "This page contains a structural placeholder, not a finished privacy policy. Have this reviewed by a lawyer before publishing.",

    "page.datenschutz.dsgvoH2": "Privacy policy",
    "page.datenschutz.field1": "Controller per Art. 4 No. 7 GDPR",
    "page.datenschutz.field2": "What data is collected. Per plan assumption 11, currently no tracking. Confirm or add details here",
    "page.datenschutz.field3": "Cookies/analytics tools, if added later",
    "page.datenschutz.field4": "Rights of the data subject: access, deletion, objection",
    "page.datenschutz.field5": "Contact for privacy inquiries",
    "page.datenschutz.field6": "This section is a structural placeholder, not legal advice. Have it reviewed by a lawyer before launch."
  });

})(window.PK.i18n);
