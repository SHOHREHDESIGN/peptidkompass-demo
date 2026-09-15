/* ============================================================================
   PEPTIDKOMPASS · data/i18n/faq.js
   ============================================================================
   Seiten-Wörterbuch für faq.html. Schlüssel-Präfix "page.faq.<element>".
   Muss NACH data/i18n/global.js und VOR assets/js/site.js eingebunden werden.

   FAQ-Hub (15.09.2026): aggregiert 7 allgemeine Fragen (4 aus index.html,
   3 aus methodik.html, referenziert über ihre bestehenden i18n-Keys statt
   dupliziert) + peptide.faq[] aller 31 Wirkstoffe (93 Einträge) zu einer
   filterbaren, durchsuchbaren Akkordeon-Liste. Siehe faq.html Bootstrap-
   Script für die Key-Liste GENERAL_FAQ_KEYS.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.faq.title": "Fragen und Antworten · Peptide Compass",
    "page.faq.metaDescription": "Alle Fragen und Antworten zu Peptide Compass und unseren 31 Wirkstoffen an einem Ort, durchsuchbar und nach Kategorie filterbar.",
    "page.faq.ogTitle": "Fragen und Antworten · Peptide Compass",
    "page.faq.ogDescription": "Häufige Fragen zu Peptide Compass und zu 31 Wirkstoffen, filterbar nach Kategorie.",

    "page.faq.eyebrow": "Lernen",
    "page.faq.h1": "Fragen und Antworten",
    "page.faq.lead": "{n} Fragen und Antworten zu Peptide Compass und {wirkstoffe} Wirkstoffen, kurz beantwortet.",
    "page.faq.bandImgAlt": "Vertrauen durch wissenschaftliche Prüfung im Labor",

    "page.faq.hintEyebrow": "Hinweis",
    "page.faq.hintText": "Diese Antworten ersetzen keine medizinische Beratung. Alle genannten Substanzen sind ausschließlich für Forschungszwecke (RUO) bestimmt, es gibt keine Empfehlung zur Anwendung am Menschen.",

    "page.faq.categoryFilterLabel": "Kategorie",
    "page.faq.categoryFilterAriaLabel": "Nach Kategorie filtern",
    "page.faq.filterAll": "Alle",
    "page.faq.generalLabel": "Allgemein",

    "page.faq.searchLabel": "Frage suchen",
    "page.faq.searchPlaceholder": "Frage oder Wirkstoff suchen, z. B. BPC-157",
    "page.faq.searchAriaLabel": "Fragen und Antworten durchsuchen",

    "page.faq.countAll": "{n} Fragen",
    "page.faq.countFiltered": "{shown} von {total} Fragen",
    "page.faq.emptyText": "Keine Fragen gefunden. Filter oder Suche anpassen.",

    "page.faq.studienLink": "Studien"
  });

  i18n.merge("en", {
    "page.faq.title": "FAQ · Peptide Compass",
    "page.faq.metaDescription": "Every question and answer about Peptide Compass and our 31 peptides in one place, searchable and filterable by category.",
    "page.faq.ogTitle": "FAQ · Peptide Compass",
    "page.faq.ogDescription": "Frequently asked questions about Peptide Compass and 31 peptides, filterable by category.",

    "page.faq.eyebrow": "Learn",
    "page.faq.h1": "FAQ",
    "page.faq.lead": "{n} questions and answers about Peptide Compass and {wirkstoffe} peptides, answered briefly.",
    "page.faq.bandImgAlt": "Trust through scientific testing in the lab",

    "page.faq.hintEyebrow": "Note",
    "page.faq.hintText": "These answers do not replace medical advice. All substances listed here are intended for research use only (RUO); there is no recommendation for human use.",

    "page.faq.categoryFilterLabel": "Category",
    "page.faq.categoryFilterAriaLabel": "Filter by category",
    "page.faq.filterAll": "All",
    "page.faq.generalLabel": "General",

    "page.faq.searchLabel": "Search a question",
    "page.faq.searchPlaceholder": "Search a question or peptide, e.g. BPC-157",
    "page.faq.searchAriaLabel": "Search questions and answers",

    "page.faq.countAll": "{n} questions",
    "page.faq.countFiltered": "{shown} of {total} questions",
    "page.faq.emptyText": "No questions found. Adjust filters or search.",

    "page.faq.studienLink": "Studies"
  });

})(window.PK.i18n);
