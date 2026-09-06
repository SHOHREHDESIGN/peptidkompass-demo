/* ============================================================================
   PEPTIDKOMPASS · data/i18n/conversion.js
   ============================================================================
   Wörterbuch für die Runde "Leben und Conversion" (Logos, Podium, Gewichtung,
   Social Proof, Aktualität). Schlüssel-Präfix "page.index.<element>" bzw.
   "global.brand.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.index.logosEyebrow": "Anbieter",
    "page.index.logosTitle": "Die Marken, die wir laufend prüfen",

    "page.index.podiumEyebrow": "Rangliste",
    "page.index.podiumTitle": "Die drei stärksten Anbieter, heute",
    "page.index.podiumLead": "Die drei Anbieter mit dem höchsten Gesamtscore aus Labor, Recht, Lieferung, Sortiment und Preis.",
    "page.index.podiumRank1": "Platz 1",
    "page.index.podiumRank2": "Platz 2",
    "page.index.podiumRank3": "Platz 3",
    "page.index.podiumSaves": "Spart {p} %",
    "page.index.podiumCta": "Zum Anbieter",
    "page.index.podiumCode": "Code",

    "page.index.weightsEyebrow": "Deine Gewichtung",
    "page.index.weightsTitle": "Stell dein eigenes Ranking zusammen",
    "page.index.weightsLead": "Verschieb die Regler, das Ranking passt sich sofort an deine Prioritäten an.",
    "page.index.weightsLabor": "Labor",
    "page.index.weightsRecht": "Rechtsrahmen",
    "page.index.weightsLieferung": "Lieferung",
    "page.index.weightsSortiment": "Sortiment",
    "page.index.weightsPreis": "Preis",
    "page.index.weightsReset": "Zurücksetzen",
    "page.index.weightsResultTitle": "Dein Ranking",
    "page.index.weightsHint": "Die Regler ergeben zusammen immer 100 Prozent",

    "page.index.proofEyebrow": "Erfahrungen",
    "page.index.proofTitle": "Was andere über die Anbieter sagen",
    "page.index.proofLead": "Kurze Einschätzungen zu Service, Lieferung und CoA-Verfügbarkeit, direkt von Kunden.",
    "page.index.proofDemoNote": "Diese Zitate sind Platzhalter für die Demo, echte Bewertungen trägt Vic vor dem Live-Gang ein.",
    "page.index.proofAllLink": "Alle Erfahrungen ansehen",

    "page.index.freshEyebrow": "Aktualität",
    "page.index.freshTitle": "Immer frisch geprüft",
    "page.index.freshVerified": "Charge {nr} verifiziert",
    "page.index.freshDaysAgo": "vor {n} Tagen",
    "page.index.freshToday": "heute",
    "page.index.freshCoasWeek": "CoA-Prüfungen diese Woche",
    "page.index.freshVendorsChecked": "Anbieter im Vergleich",
    "page.index.freshAvg": "Score-Durchschnitt",

    "global.brand.logoAlt": "Logo {name}"
  });

  i18n.merge("en", {
    "page.index.logosEyebrow": "Vendors",
    "page.index.logosTitle": "The brands we check continuously",

    "page.index.podiumEyebrow": "Rankings",
    "page.index.podiumTitle": "The three strongest vendors, today",
    "page.index.podiumLead": "The three vendors with the highest overall score across lab quality, legal framework, shipping, range, and price.",
    "page.index.podiumRank1": "Rank 1",
    "page.index.podiumRank2": "Rank 2",
    "page.index.podiumRank3": "Rank 3",
    "page.index.podiumSaves": "Save {p}%",
    "page.index.podiumCta": "Go to vendor",
    "page.index.podiumCode": "Code",

    "page.index.weightsEyebrow": "Your weighting",
    "page.index.weightsTitle": "Build your own ranking",
    "page.index.weightsLead": "Move the sliders, the ranking adjusts to your priorities right away.",
    "page.index.weightsLabor": "Lab quality",
    "page.index.weightsRecht": "Legal framework",
    "page.index.weightsLieferung": "Shipping",
    "page.index.weightsSortiment": "Range",
    "page.index.weightsPreis": "Price",
    "page.index.weightsReset": "Reset",
    "page.index.weightsResultTitle": "Your ranking",
    "page.index.weightsHint": "The sliders always add up to 100 percent",

    "page.index.proofEyebrow": "Experiences",
    "page.index.proofTitle": "What others say about the vendors",
    "page.index.proofLead": "Short notes on service, shipping, and CoA availability, straight from customers.",
    "page.index.proofDemoNote": "These quotes are placeholders for the demo, Vic adds real reviews before launch.",
    "page.index.proofAllLink": "See all experiences",

    "page.index.freshEyebrow": "Freshness",
    "page.index.freshTitle": "Checked and current",
    "page.index.freshVerified": "Batch {nr} verified",
    "page.index.freshDaysAgo": "{n} days ago",
    "page.index.freshToday": "today",
    "page.index.freshCoasWeek": "CoA checks this week",
    "page.index.freshVendorsChecked": "vendors compared",
    "page.index.freshAvg": "average score",

    "global.brand.logoAlt": "{name} logo"
  });

})(window.PK.i18n);
