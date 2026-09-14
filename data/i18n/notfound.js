/* ============================================================================
   PEPTIDKOMPASS · data/i18n/notfound.js
   ============================================================================
   Seiten-Wörterbuch für 404.html. Schlüssel-Präfix "page.notfound.<element>".
   Muss NACH data/i18n/global.js und VOR assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.notfound.title": "Seite nicht gefunden · Peptide Compass",
    "page.notfound.metaDescription": "Diese Seite existiert nicht oder wurde verschoben.",
    "page.notfound.ogTitle": "Seite nicht gefunden · Peptide Compass",
    "page.notfound.ogDescription": "Diese Seite existiert nicht oder wurde verschoben.",

    "page.notfound.eyebrow": "Fehler 404",
    "page.notfound.h1": "Diese Seite gibt es nicht",
    "page.notfound.lead": "Der Link scheint falsch oder veraltet zu sein. Vielleicht wurde die Seite verschoben oder die Adresse falsch eingegeben.",
    "page.notfound.cta": "Zur Startseite"
  });

  i18n.merge("en", {
    "page.notfound.title": "Page not found · Peptide Compass",
    "page.notfound.metaDescription": "This page does not exist or has moved.",
    "page.notfound.ogTitle": "Page not found · Peptide Compass",
    "page.notfound.ogDescription": "This page does not exist or has moved.",

    "page.notfound.eyebrow": "404 error",
    "page.notfound.h1": "This page does not exist",
    "page.notfound.lead": "The link looks wrong or out of date. The page may have moved, or the address was mistyped.",
    "page.notfound.cta": "Back to the homepage"
  });

})(window.PK.i18n);
