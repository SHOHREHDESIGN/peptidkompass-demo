/* ============================================================================
   PEPTIDKOMPASS · data/i18n/index.js
   ============================================================================
   Seiten-Wörterbuch für index.html (Startseite). Schlüssel-Präfix
   "page.index.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.index.title": "Peptide Compass · Peptid-Anbieter transparent vergleichen",
    "page.index.metaDescription": "Peptid-Anbieter transparent vergleichen: Peptide Compass prüft Labor, Rechtsrahmen, Lieferung, Sortiment und Preis. Demo-Projekt, keine medizinische Beratung.",
    "page.index.ogTitle": "Peptide Compass · Peptid-Anbieter transparent vergleichen",
    "page.index.ogDescription": "Labor, Rechtsrahmen, Lieferung, Sortiment und Preis pro mg: ein Score, fünf Kriterien, volle Transparenz.",

    "page.index.heroEyebrow": "Peptid-Anbieter transparent vergleichen",
    "page.index.heroH1": "Peptid-Anbieter, klar verglichen",
    "page.index.heroH1a": "Peptid-Anbieter,",
    "page.index.heroH1b": "klar verglichen",
    "page.index.heroLead": "Peptide Compass prüft Labor, Rechtsrahmen, Lieferung, Sortiment und Preis, damit du in Ruhe entscheidest.",
    "page.index.searchPlaceholder": "Anbieter oder Wirkstoff suchen",
    "page.index.searchAriaLabel": "Suche",
    "page.index.searchButton": "Suchen",

    "page.index.statVendorsLabel": "Anbieter geprüft",
    "page.index.statCoasLabel": "CoAs geprüft",
    "page.index.statScoreLabel": "Score-Durchschnitt",

    "page.index.featuredEyebrow": "Empfehlung",
    "page.index.featuredTitle": "Anbieter des Monats",

    "page.index.scoreEyebrow": "Methodik",
    "page.index.scoreTitle": "Wie wir bewerten",
    "page.index.scoreLead": "Fünf Kriterien, transparent gewichtet.",
    "page.index.criteriaLaborTitle": "Labor",
    "page.index.criteriaLaborBody": "Unabhängige Prüfung, CoA-Qualität",
    "page.index.criteriaRechtTitle": "Rechtsrahmen",
    "page.index.criteriaRechtBody": "Altersgate, Impressum, RUO-Kennzeichnung",
    "page.index.criteriaLieferungTitle": "Lieferung",
    "page.index.criteriaLieferungBody": "Lieferzeit, Länder, Zuverlässigkeit",
    "page.index.criteriaSortimentTitle": "Sortiment",
    "page.index.criteriaSortimentBody": "Breite und Tiefe des Angebots",
    "page.index.criteriaPreisTitle": "Preis/mg",
    "page.index.criteriaPreisBody": "Durchschnittspreis über alle Produkte",
    "page.index.methodikLink": "Ganze Methodik lesen",

    "page.index.topEyebrow": "Top bewertet",
    "page.index.topTitle": "Top-Anbieter im Vergleich",
    "page.index.allVendorsLink": "Alle Anbieter ansehen",

    "page.index.peptideEyebrow": "Wirkstoff-Wissen",
    "page.index.peptideTitle": "Wirkstoffe verstehen",
    "page.index.allPeptidesLink": "Alle Wirkstoffe ansehen",

    "page.index.calcEyebrow": "Anmisch-Rechner",
    "page.index.calcTitle": "Rechnet mg und ml sauber um, ganz ohne Dosierungsempfehlung.",
    "page.index.calcBody": "Reine Rechenhilfe, keine Dosierungsempfehlung.",
    "page.index.calcCta": "Zum Rechner",

    "page.index.chargeEyebrow": "Vertrauen prüfen",
    "page.index.chargeTitle": "Ist deine Charge geprüft",
    "page.index.chargeCta": "Charge prüfen",

    /* Runde "Leben und Conversion" (06.09.), Ergänzungen zu data/i18n/conversion.js:
       Strings, die im Vertrag (data/SCHEMA.md) nicht einzeln aufgeführt sind
       (Button-Label, aria-label), aber "keine harten Strings" gilt auch hier. */
    "page.index.podiumCopyButton": "Code kopieren",
    "page.index.logosAriaLabel": "Anbieter, die wir laufend prüfen",

    "page.index.faqTitle": "Häufige Fragen",
    "page.index.faq1Q": "Was ist Peptide Compass?",
    "page.index.faq1A": "Peptide Compass vergleicht Peptid-Anbieter nach Labor, Rechtsrahmen, Lieferung, Sortiment und Preis. Du siehst auf einen Blick, welcher Anbieter zu deinen Kriterien passt. Alle Bewertungen sind transparent nach unserer Methodik berechnet.",
    "page.index.faq2Q": "Sind das echte Anbieter?",
    "page.index.faq2A": "Nein, aktuell zeigt Peptide Compass acht fiktive Demo-Anbieter. Namen, Scores, Rabattcodes und Chargen sind Platzhalter. Echte Anbieter-Daten trägt Vic vor dem Live-Gang ein, klar als DEMO markiert bis dahin.",
    "page.index.faq3Q": "Was bedeutet das Label Anzeige?",
    "page.index.faq3A": "Jeder Link mit dem Hinweis \"Anzeige\" ist ein Affiliate-Link. Klickst du drauf und kaufst, erhalten wir unter Umständen eine Provision, ohne Mehrkosten für dich. Details dazu stehen auf der Affiliate-Hinweis-Seite.",
    "page.index.faq4Q": "Sind die Substanzen für Menschen zugelassen?",
    "page.index.faq4A": "Nein. Alle auf Peptide Compass genannten Substanzen sind ausschließlich für Forschungszwecke bestimmt. Es gibt keine Empfehlung zur Anwendung am Menschen und keine medizinische Beratung auf dieser Seite. Nur für Personen ab 18 Jahren."
  });

  i18n.merge("en", {
    "page.index.title": "Peptide Compass · Compare peptide vendors clearly",
    "page.index.metaDescription": "Compare peptide vendors clearly: Peptide Compass checks lab quality, legal framework, shipping, range, and price. Demo project, not medical advice.",
    "page.index.ogTitle": "Peptide Compass · Compare peptide vendors clearly",
    "page.index.ogDescription": "Lab quality, legal framework, shipping, range, and price per mg: one score, five criteria, full transparency.",

    "page.index.heroEyebrow": "Compare peptide vendors clearly",
    "page.index.heroH1": "Peptide vendors, clearly compared",
    "page.index.heroH1a": "Peptide vendors,",
    "page.index.heroH1b": "clearly compared",
    "page.index.heroLead": "Peptide Compass checks lab quality, legal framework, shipping, range, and price, so you can decide with confidence.",
    "page.index.searchPlaceholder": "Search vendor or peptide",
    "page.index.searchAriaLabel": "Search",
    "page.index.searchButton": "Search",

    "page.index.statVendorsLabel": "vendors checked",
    "page.index.statCoasLabel": "CoAs verified",
    "page.index.statScoreLabel": "average score",

    "page.index.featuredEyebrow": "Featured",
    "page.index.featuredTitle": "Vendor of the month",

    "page.index.scoreEyebrow": "Methodology",
    "page.index.scoreTitle": "How we score",
    "page.index.scoreLead": "Five criteria, weighted transparently.",
    "page.index.criteriaLaborTitle": "Lab quality",
    "page.index.criteriaLaborBody": "Independent testing, CoA quality",
    "page.index.criteriaRechtTitle": "Legal framework",
    "page.index.criteriaRechtBody": "Age gate, legal notice, RUO labeling",
    "page.index.criteriaLieferungTitle": "Shipping",
    "page.index.criteriaLieferungBody": "Delivery time, countries, reliability",
    "page.index.criteriaSortimentTitle": "Range",
    "page.index.criteriaSortimentBody": "Breadth and depth of the product range",
    "page.index.criteriaPreisTitle": "Price/mg",
    "page.index.criteriaPreisBody": "Average price across all products",
    "page.index.methodikLink": "Read the full methodology",

    "page.index.topEyebrow": "Top rated",
    "page.index.topTitle": "Top vendors compared",
    "page.index.allVendorsLink": "View all vendors",

    "page.index.peptideEyebrow": "Peptide knowledge",
    "page.index.peptideTitle": "Understand peptides",
    "page.index.allPeptidesLink": "View all peptides",

    "page.index.calcEyebrow": "Mixing calculator",
    "page.index.calcTitle": "Converts mg and ml cleanly, with no dosing recommendation.",
    "page.index.calcBody": "A pure calculation aid, not a dosing recommendation.",
    "page.index.calcCta": "Open calculator",

    "page.index.chargeEyebrow": "Check trust",
    "page.index.chargeTitle": "Is your batch verified",
    "page.index.chargeCta": "Check batch",

    "page.index.podiumCopyButton": "Copy code",
    "page.index.logosAriaLabel": "Vendors we check continuously",

    "page.index.faqTitle": "Frequently asked questions",
    "page.index.faq1Q": "What is Peptide Compass?",
    "page.index.faq1A": "Peptide Compass compares peptide vendors by lab quality, legal framework, shipping, range, and price. You see at a glance which vendor matches your criteria. Every rating is calculated transparently per our methodology.",
    "page.index.faq2Q": "Are these real vendors?",
    "page.index.faq2A": "No, Peptide Compass currently shows eight fictional demo vendors. Names, scores, discount codes, and batches are placeholders. Vic will enter real vendor data before launch, clearly marked as DEMO until then.",
    "page.index.faq3Q": "What does the Ad label mean?",
    "page.index.faq3A": "Any link marked \"Ad\" is an affiliate link. If you click it and buy, we may earn a commission at no extra cost to you. Details are on the affiliate disclosure page.",
    "page.index.faq4Q": "Are these substances approved for human use?",
    "page.index.faq4A": "No. Every substance mentioned on Peptide Compass is intended for research use only. This page makes no recommendation for human use and offers no medical advice. For adults 18 and over only."
  });

})(window.PK.i18n);
