/* ============================================================================
   PEPTIDKOMPASS · data/i18n/ratgeber-index.js
   ============================================================================
   Seiten-Wörterbuch für ratgeber/index.html. Schlüssel-Präfix
   "page.ratgeber-index.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.

   Ratgeber-Blog (15.09.2026): "Lernen"-Ausbau nach chemverify-Vorbild
   "Artikel", siehe tools/build_ratgeber.py.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.ratgeber-index.title": "Ratgeber · Peptide Compass",
    "page.ratgeber-index.metaDescription": "Artikel zu Prüfen, Preisen, Recht, Anbietern und Wirkstoffen rund um Peptide, sachlich erklärt und mit Quellen belegt.",
    "page.ratgeber-index.ogTitle": "Ratgeber · Peptide Compass",
    "page.ratgeber-index.ogDescription": "Artikel zu Prüfen, Preisen und Recht bei Peptid-Anbietern.",

    "page.ratgeber-index.eyebrow": "Lernen",
    "page.ratgeber-index.h1": "Ratgeber",
    "page.ratgeber-index.lead": "{n} Artikel zu Prüfen, Preisen, Recht, Anbietern und Wirkstoffen, sachlich erklärt.",
    "page.ratgeber-index.bandImgAlt": "Notizen und Recherche an einem hellen Arbeitsplatz",

    "page.ratgeber-index.hintEyebrow": "Hinweis",
    "page.ratgeber-index.hintText": "Diese Artikel ersetzen keine Rechts- oder medizinische Beratung. Alle genannten Substanzen sind ausschließlich für Forschungszwecke (RUO) bestimmt.",

    "page.ratgeber-index.categoryFilterLabel": "Kategorie",
    "page.ratgeber-index.categoryFilterAriaLabel": "Nach Kategorie filtern",
    "page.ratgeber-index.filterAll": "Alle",

    "page.ratgeber-index.countAll": "{n} Artikel",
    "page.ratgeber-index.countFiltered": "{shown} von {total} Artikeln",
    "page.ratgeber-index.emptyText": "Noch keine Artikel in dieser Kategorie.",
    "page.ratgeber-index.emptyAll": "In Kürze verfügbar: Der Ratgeber wird gerade mit den ersten Artikeln befüllt.",

    "page.ratgeber-index.readMore": "Weiterlesen",
    "page.ratgeber-index.minRead": "{min} Min. Lesezeit"
  });

  i18n.merge("en", {
    "page.ratgeber-index.title": "Guides · Peptide Compass",
    "page.ratgeber-index.metaDescription": "Articles on testing, prices, legal basics, vendors and peptides, explained plainly and backed by sources.",
    "page.ratgeber-index.ogTitle": "Guides · Peptide Compass",
    "page.ratgeber-index.ogDescription": "Articles on testing, prices and legal basics for peptide vendors.",

    "page.ratgeber-index.eyebrow": "Learn",
    "page.ratgeber-index.h1": "Guides",
    "page.ratgeber-index.lead": "{n} articles on testing, prices, legal basics, vendors and peptides, explained plainly.",
    "page.ratgeber-index.bandImgAlt": "Notes and research on a bright desk",

    "page.ratgeber-index.hintEyebrow": "Note",
    "page.ratgeber-index.hintText": "These articles do not replace legal or medical advice. All substances listed here are intended for research use only (RUO).",

    "page.ratgeber-index.categoryFilterLabel": "Category",
    "page.ratgeber-index.categoryFilterAriaLabel": "Filter by category",
    "page.ratgeber-index.filterAll": "All",

    "page.ratgeber-index.countAll": "{n} articles",
    "page.ratgeber-index.countFiltered": "{shown} of {total} articles",
    "page.ratgeber-index.emptyText": "No articles in this category yet.",
    "page.ratgeber-index.emptyAll": "Coming soon: the guides section is being filled with its first articles.",

    "page.ratgeber-index.readMore": "Read more",
    "page.ratgeber-index.minRead": "{min} min read"
  });

})(window.PK.i18n);
