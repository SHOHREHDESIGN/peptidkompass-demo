/* ============================================================================
   PEPTIDKOMPASS · data/i18n/glossar.js
   ============================================================================
   GENERIERT von tools/build_glossar.py (Kategorienamen + Seiten-Wörterbuch
   für glossar.html, ein Ort statt Textduplikat - siehe dortiger Kopfkommentar).
   Schlüssel-Präfix "page.glossar.<element>" bzw. "page.glossar.kat.<gruppe>"
   für die 8 Glossar-Kategorien (7 Draft-Gruppen + "wirkstoff").
   Muss NACH data/i18n/global.js und VOR assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.glossar.title": "Glossar · Peptide Compass",
    "page.glossar.metaDescription": "Fachbegriffe zu Labor, Recht, Handhabung und Studienarten sowie unseren 31 Wirkstoffen, kurz erklärt und alphabetisch sortiert.",
    "page.glossar.ogTitle": "Glossar · Peptide Compass",
    "page.glossar.ogDescription": "Alle Fachbegriffe von Peptide Compass an einem Ort, durchsuchbar und nach Kategorie filterbar.",
    "page.glossar.eyebrow": "Lernen",
    "page.glossar.h1": "Glossar",
    "page.glossar.highlightEyebrow": "Vier Begriffe zum Einstieg",
    "page.glossar.highlightLink": "Im Glossar nachlesen",
    "page.glossar.azLabel": "Alphabet",
    "page.glossar.categoryFilterLabel": "Kategorie",
    "page.glossar.categoryFilterAriaLabel": "Nach Kategorie filtern",
    "page.glossar.filterAll": "Alle",
    "page.glossar.searchPlaceholder": "Begriff suchen, z. B. HPLC",
    "page.glossar.searchAriaLabel": "Glossar durchsuchen",
    "page.glossar.countAll": "{n} Begriffe",
    "page.glossar.countFiltered": "{shown} von {total} Begriffen",
    "page.glossar.emptyText": "Keine Begriffe gefunden. Filter oder Suche anpassen.",
    "page.glossar.seeAlsoLabel": "Siehe auch",
    "page.glossar.wirkstoffeLabel": "Wirkstoffe",
    "page.glossar.seitenLabel": "Mehr dazu",
    "page.glossar.wirkstoffLinkLabel": "Zur Wirkstoff-Seite",
    "page.glossar.synonymsPrefix": "Auch:",
    "page.glossar.kat.grundlagen": "Grundlagen",
    "page.glossar.kat.labor": "Labor",
    "page.glossar.kat.handhabung": "Handhabung",
    "page.glossar.kat.recht": "Recht",
    "page.glossar.kat.vergleich": "Vergleich",
    "page.glossar.kat.studien": "Studien",
    "page.glossar.kat.klassen": "Wirkstoffklassen",
    "page.glossar.kat.wirkstoff": "Wirkstoff",
  });

  i18n.merge("en", {
    "page.glossar.title": "Glossary · Peptide Compass",
    "page.glossar.metaDescription": "Technical terms on lab testing, legal status, handling and study types, plus our 31 peptides, explained briefly and sorted alphabetically.",
    "page.glossar.ogTitle": "Glossary · Peptide Compass",
    "page.glossar.ogDescription": "Every Peptide Compass term in one place, searchable and filterable by category.",
    "page.glossar.eyebrow": "Learn",
    "page.glossar.h1": "Glossary",
    "page.glossar.highlightEyebrow": "Four terms to start with",
    "page.glossar.highlightLink": "Read in the glossary",
    "page.glossar.azLabel": "Alphabet",
    "page.glossar.categoryFilterLabel": "Category",
    "page.glossar.categoryFilterAriaLabel": "Filter by category",
    "page.glossar.filterAll": "All",
    "page.glossar.searchPlaceholder": "Search a term, e.g. HPLC",
    "page.glossar.searchAriaLabel": "Search the glossary",
    "page.glossar.countAll": "{n} terms",
    "page.glossar.countFiltered": "{shown} of {total} terms",
    "page.glossar.emptyText": "No terms found. Adjust filters or search.",
    "page.glossar.seeAlsoLabel": "See also",
    "page.glossar.wirkstoffeLabel": "Compounds",
    "page.glossar.seitenLabel": "More on this",
    "page.glossar.wirkstoffLinkLabel": "Compound page",
    "page.glossar.synonymsPrefix": "Also:",
    "page.glossar.kat.grundlagen": "Basics",
    "page.glossar.kat.labor": "Laboratory",
    "page.glossar.kat.handhabung": "Handling",
    "page.glossar.kat.recht": "Legal",
    "page.glossar.kat.vergleich": "Comparison",
    "page.glossar.kat.studien": "Studies",
    "page.glossar.kat.klassen": "Compound classes",
    "page.glossar.kat.wirkstoff": "Compound",
  });

})(window.PK.i18n);
