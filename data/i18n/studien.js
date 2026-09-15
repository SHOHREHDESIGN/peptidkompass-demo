/* ============================================================================
   PEPTIDKOMPASS · data/i18n/studien.js
   ============================================================================
   Seiten-Wörterbuch für studien.html. Schlüssel-Präfix "page.studien.<element>".
   Muss NACH data/i18n/global.js und VOR assets/js/site.js eingebunden werden.

   Studien-Hub (15.09.2026): aggregiert peptide.evidenz[] aller 31 Wirkstoffe
   zu einer filterbaren, durchsuchbaren Liste. Siehe wirkstoffe_ausbauplan.md
   IA v2 "Lernen".
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.studien.title": "Studien · Peptide Compass",
    "page.studien.metaDescription": "Alle Studienbelege zu unseren 31 Wirkstoffen an einem Ort: Art, Kurzfassung und Quelle mit PubMed-Link, wo verfügbar. Nur für Forschungszwecke.",
    "page.studien.ogTitle": "Studien · Peptide Compass",
    "page.studien.ogDescription": "Studienbelege zu 31 Wirkstoffen, filterbar nach Art und Kategorie.",

    "page.studien.eyebrow": "Lernen",
    "page.studien.h1": "Studien",
    "page.studien.lead": "{studien} Studienbelege zu {wirkstoffe} Wirkstoffen, kurz zusammengefasst und mit Quelle.",
    "page.studien.bandImgAlt": "Reinheit und wissenschaftliche Prüfung im Labor",

    "page.studien.hintEyebrow": "Hinweis",
    "page.studien.hintText": "Diese Übersicht zeigt den aktuellen Stand der wissenschaftlichen Literatur je Wirkstoff. Eine Studie ist kein Wirkversprechen: präklinische Ergebnisse aus Tiermodellen lassen sich nicht automatisch auf den Menschen übertragen, und auch klinische Studien beschreiben Beobachtungen, keine Garantien. Alle genannten Substanzen sind ausschließlich für Forschungszwecke (RUO) bestimmt, keine medizinische Beratung.",

    "page.studien.artFilterLabel": "Art",
    "page.studien.artFilterAriaLabel": "Nach Studienart filtern",
    "page.studien.categoryFilterLabel": "Kategorie",
    "page.studien.categoryFilterAriaLabel": "Nach Kategorie filtern",
    "page.studien.filterAll": "Alle",

    "page.studien.searchLabel": "Wirkstoff suchen",
    "page.studien.searchPlaceholder": "Wirkstoff suchen, z. B. BPC-157",
    "page.studien.searchAriaLabel": "Nach Wirkstoffname suchen",

    "page.studien.countAll": "{n} Studien",
    "page.studien.countFiltered": "{shown} von {total} Studien",
    "page.studien.emptyText": "Keine Studien gefunden. Filter oder Suche anpassen.",

    "page.studien.cardMoreLink": "Zum Wirkstoff"
  });

  i18n.merge("en", {
    "page.studien.title": "Studies · Peptide Compass",
    "page.studien.metaDescription": "Every study reference for our 31 peptides in one place: type, short summary, and source with a PubMed link where available. Research use only.",
    "page.studien.ogTitle": "Studies · Peptide Compass",
    "page.studien.ogDescription": "Study references for 31 peptides, filterable by type and category.",

    "page.studien.eyebrow": "Learn",
    "page.studien.h1": "Studies",
    "page.studien.lead": "{studien} study references across {wirkstoffe} peptides, summarized briefly with their source.",
    "page.studien.bandImgAlt": "Purity and scientific testing in the lab",

    "page.studien.hintEyebrow": "Note",
    "page.studien.hintText": "This overview shows the current state of the published literature for each peptide. A study is not a promise of effect: preclinical results from animal models do not automatically translate to humans, and clinical studies describe observations, not guarantees. All substances listed here are intended for research use only (RUO), not medical advice.",

    "page.studien.artFilterLabel": "Type",
    "page.studien.artFilterAriaLabel": "Filter by study type",
    "page.studien.categoryFilterLabel": "Category",
    "page.studien.categoryFilterAriaLabel": "Filter by category",
    "page.studien.filterAll": "All",

    "page.studien.searchLabel": "Search peptide",
    "page.studien.searchPlaceholder": "Search a peptide, e.g. BPC-157",
    "page.studien.searchAriaLabel": "Search by peptide name",

    "page.studien.countAll": "{n} studies",
    "page.studien.countFiltered": "{shown} of {total} studies",
    "page.studien.emptyText": "No studies found. Adjust filters or search.",

    "page.studien.cardMoreLink": "View peptide"
  });

})(window.PK.i18n);
