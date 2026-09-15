/* ============================================================================
   PEPTIDKOMPASS · data/i18n/ratgeber-detail.js
   ============================================================================
   Gemeinsames Wörterbuch für ALLE Ratgeber-Artikelseiten (ratgeber/<slug>.html).
   Schlüssel-Präfix "page.ratgeber-detail.<element>". Artikelspezifische Texte
   (Titel/Teaser/Meta) leben in der pro Artikel generierten Datei
   data/i18n/ratgeber-<slug>.js. Muss NACH data/i18n/global.js und VOR der
   artikelspezifischen Datei sowie assets/js/site.js eingebunden werden.

   Generiert/gepflegt von tools/build_ratgeber.py-Vorlage
   tools/ratgeber_template.html : manuell editierbar, da seitenübergreifend
   (kein pro-Artikel-Duplikat wie bei den anderen i18n-Dateien).
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.ratgeber-detail.backLink": "← Zurück zum Ratgeber",
    "page.ratgeber-detail.metaLine": "{datum} · {min} Min. Lesezeit",
    "page.ratgeber-detail.quellenTitle": "Quellen",
    "page.ratgeber-detail.faqTitle": "Häufige Fragen",
    "page.ratgeber-detail.hintEyebrow": "Hinweis",
    "page.ratgeber-detail.hintText": "Dieser Artikel ersetzt keine Rechts- oder medizinische Beratung. Alle genannten Substanzen sind ausschließlich für Forschungszwecke (RUO) bestimmt, keine Empfehlung zur Anwendung am Menschen.",
    "page.ratgeber-detail.verwandtTitle": "Weitere Artikel"
  });

  i18n.merge("en", {
    "page.ratgeber-detail.backLink": "← Back to Guides",
    "page.ratgeber-detail.metaLine": "{datum} · {min} min read",
    "page.ratgeber-detail.quellenTitle": "Sources",
    "page.ratgeber-detail.faqTitle": "Frequently asked questions",
    "page.ratgeber-detail.hintEyebrow": "Note",
    "page.ratgeber-detail.hintText": "This article does not replace legal or medical advice. All substances listed here are intended for research use only (RUO), not for human use.",
    "page.ratgeber-detail.verwandtTitle": "More articles"
  });

})(window.PK.i18n);
