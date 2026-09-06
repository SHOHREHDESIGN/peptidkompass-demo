/* ============================================================================
   PEPTIDKOMPASS · data/i18n/affiliate-hinweis.js
   ============================================================================
   Seiten-Wörterbuch für affiliate-hinweis.html. Schlüssel-Präfix
   "page.affiliate-hinweis.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.affiliate-hinweis.title": "PeptidKompass · Affiliate-Hinweis",
    "page.affiliate-hinweis.metaDescription": "Wie PeptidKompass sich finanziert: was das Label Anzeige bedeutet und warum die Bewertung unabhängig von Provisionen bleibt.",
    "page.affiliate-hinweis.ogTitle": "PeptidKompass · Affiliate-Hinweis",
    "page.affiliate-hinweis.ogDescription": "Wie PeptidKompass sich finanziert: was das Label Anzeige bedeutet und warum die Bewertung unabhängig von Provisionen bleibt.",

    "page.affiliate-hinweis.heroEyebrow": "Transparenz",
    "page.affiliate-hinweis.h1": "Affiliate-Hinweis",

    "page.affiliate-hinweis.intro": "PeptidKompass finanziert sich über Affiliate-Links. Klickst du auf einen Link, der mit \"Anzeige\" gekennzeichnet ist, und kaufst beim jeweiligen Anbieter, erhalten wir unter Umständen eine Provision. Für dich ändert sich am Preis nichts.",

    "page.affiliate-hinweis.labelH2": "Wie das Label \"Anzeige\" funktioniert",
    "page.affiliate-hinweis.labelLeadPre": "Die Kennzeichnung \"Anzeige\" steht direkt am Link, nicht nur einmal am Seitenanfang. So erkennst du auf jeder Seite sofort, welcher Klick zu einem externen Shop führt. Technisch tragen diese Links außerdem ",
    "page.affiliate-hinweis.labelLeadPost": ", damit auch Suchmaschinen die Werbe-Beziehung erkennen.",

    "page.affiliate-hinweis.independentH2": "Bewertung unabhängig von Provision",
    "page.affiliate-hinweis.independentLeadPre": "Die Bewertung der Anbieter, siehe ",
    "page.affiliate-hinweis.independentLeadLink": "Methodik",
    "page.affiliate-hinweis.independentLeadPost": ", ist von dieser Provision unabhängig.",

    "page.affiliate-hinweis.vicNote": "Bei Bedarf um konkrete Partnerprogramm-Namen ergänzen, sobald echte Partnerschaften bestehen. Vor Go-live juristisch prüfen lassen."
  });

  i18n.merge("en", {
    "page.affiliate-hinweis.title": "PeptidKompass · Affiliate disclosure",
    "page.affiliate-hinweis.metaDescription": "How PeptidKompass is funded: what the Ad label means and why ratings stay independent of commission.",
    "page.affiliate-hinweis.ogTitle": "PeptidKompass · Affiliate disclosure",
    "page.affiliate-hinweis.ogDescription": "How PeptidKompass is funded: what the Ad label means and why ratings stay independent of commission.",

    "page.affiliate-hinweis.heroEyebrow": "Transparency",
    "page.affiliate-hinweis.h1": "Affiliate disclosure",

    "page.affiliate-hinweis.intro": "PeptidKompass is funded through affiliate links. If you click a link marked \"Ad\" and buy from that vendor, we may earn a commission. The price stays the same for you.",

    "page.affiliate-hinweis.labelH2": "How the \"Ad\" label works",
    "page.affiliate-hinweis.labelLeadPre": "The \"Ad\" label sits directly on the link, not just once at the top of the page. That way you can tell on every page which click leads to an external vendor. Technically, these links also carry ",
    "page.affiliate-hinweis.labelLeadPost": ", so search engines recognize the advertising relationship too.",

    "page.affiliate-hinweis.independentH2": "Ratings independent of commission",
    "page.affiliate-hinweis.independentLeadPre": "Vendor ratings, see ",
    "page.affiliate-hinweis.independentLeadLink": "Methodology",
    "page.affiliate-hinweis.independentLeadPost": ", are independent of this commission.",

    "page.affiliate-hinweis.vicNote": "Add concrete partner program names once real partnerships exist. Have this reviewed by a lawyer before launch."
  });

})(window.PK.i18n);
