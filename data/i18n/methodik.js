/* ============================================================================
   PEPTIDKOMPASS · data/i18n/methodik.js
   ============================================================================
   Seiten-Wörterbuch für methodik.html. Schlüssel-Präfix
   "page.methodik.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.methodik.title": "Peptide Compass · Wie wir bewerten",
    "page.methodik.metaDescription": "Fünf Kriterien, offen gelegt: wie Peptide Compass Labor, Rechtsrahmen, Lieferung, Sortiment und Preis pro mg zu einem Score verrechnet.",
    "page.methodik.ogTitle": "Peptide Compass · Wie wir bewerten",
    "page.methodik.ogDescription": "Fünf Kriterien, offen gelegt: wie Peptide Compass Labor, Rechtsrahmen, Lieferung, Sortiment und Preis pro mg zu einem Score verrechnet.",

    "page.methodik.heroEyebrow": "So bewerten wir",
    "page.methodik.h1": "Wie wir bewerten",
    "page.methodik.heroLead": "Fünf Kriterien, offen gelegt.",

    "page.methodik.scoreH2": "Ein Score aus fünf Kriterien",
    "page.methodik.scoreLead": "Der Gesamt-Score verrechnet alle fünf Werte nach der jeweiligen Gewichtung zu einer Zahl zwischen 0 und 100.",
    "page.methodik.formulaLaborPct": "25 %",
    "page.methodik.formulaLaborTitle": "Labor",
    "page.methodik.formulaLaborBody": "Wie oft ein Anbieter seine Produkte extern prüfen lässt, wie aktuell die CoAs sind und wie zugänglich er sie veröffentlicht.",
    "page.methodik.formulaRechtPct": "25 %",
    "page.methodik.formulaRechtTitle": "Rechtsrahmen",
    "page.methodik.formulaRechtBody": "Altersgate vorhanden, RUO-Kennzeichnung sichtbar, vollständiges Impressum, kein Heilversprechen auf der Shop-Seite.",
    "page.methodik.formulaLieferungPct": "15 %",
    "page.methodik.formulaLieferungTitle": "Lieferung",
    "page.methodik.formulaLieferungBody": "Lieferzeit und Anzahl der belieferten Länder.",
    "page.methodik.formulaSortimentPct": "15 %",
    "page.methodik.formulaSortimentTitle": "Sortiment",
    "page.methodik.formulaSortimentBody": "Breite und Tiefe des Produktangebots.",
    "page.methodik.formulaPreisPct": "20 %",
    "page.methodik.formulaPreisTitle": "Preis",
    "page.methodik.formulaPreisBody": "Preis pro Milligramm im Marktvergleich.",

    "page.methodik.coaH2": "So prüfen wir CoAs",
    "page.methodik.coaLead": "Wir sehen uns an, ob ein CoA von einem unabhängigen Labor stammt, ob die Chargennummer zum Produkt passt und ob das Prüfdatum aktuell ist. Fehlt ein CoA oder stammt es nur vom Shop selbst ohne externe Prüfung, sinkt der Labor-Score entsprechend.",

    "page.methodik.dataH2": "Wie wir Daten erheben",
    "page.methodik.dataLead": "Wir werten öffentlich zugängliche Angaben aus: Shop-Seite, Impressum, veröffentlichte CoAs und Versandbedingungen. Alle Werte in dieser Demo-Version sind Platzhalter, die Erhebung echter Daten folgt vor dem Go-live.",

    "page.methodik.notH2": "Was wir nicht tun",
    "page.methodik.notLead": "Wir bewerten keine Wirksamkeit einzelner Substanzen. Wir geben keine Dosierungsempfehlung. Wir sprechen kein Heilversprechen aus. Wir prüfen keine medizinische Eignung für Einzelpersonen.",

    "page.methodik.monetH2": "Monetarisierung",
    "page.methodik.monetLeadPre": "Links mit dem Hinweis \"Anzeige\" sind Affiliate-Links. Kaufst du darüber, erhalten wir unter Umständen eine Provision, für dich bleibt der Preis gleich. Details dazu im ",
    "page.methodik.monetLeadLink": "Affiliate-Hinweis",
    "page.methodik.monetLeadPost": ".",

    "page.methodik.faqTitle": "Häufige Fragen",
    "page.methodik.faq1Q": "Was ist Peptide Compass?",
    "page.methodik.faq1A": "Peptide Compass vergleicht Peptid-Anbieter nach Labor, Rechtsrahmen, Lieferung, Sortiment und Preis. Du siehst auf einen Blick, welcher Anbieter zu deinen Kriterien passt. Alle Bewertungen sind transparent nach unserer Methodik berechnet.",
    "page.methodik.faq2Q": "Woher kommen die Bewertungen?",
    "page.methodik.faq2A": "Wir werten öffentlich zugängliche Angaben aus: Impressum, veröffentlichte CoAs, Versandbedingungen und Shop-Seite. Die genaue Gewichtung der fünf Kriterien steht auf der Methodik-Seite. Aktuell sind alle Werte Demo-Daten, echte Erhebung folgt vor dem Go-live.",
    "page.methodik.faq3Q": "Sind das echte Anbieter?",
    "page.methodik.faq3A": "Nein, aktuell zeigt Peptide Compass acht fiktive Demo-Anbieter. Namen, Scores, Rabattcodes und Chargen sind Platzhalter. Echte Anbieter-Daten trägt Vic vor dem Live-Gang ein, klar als DEMO markiert bis dahin."
  });

  i18n.merge("en", {
    "page.methodik.title": "Peptide Compass · How we score",
    "page.methodik.metaDescription": "Five criteria, fully disclosed: how Peptide Compass combines lab quality, legal framework, shipping, range, and price per mg into one score.",
    "page.methodik.ogTitle": "Peptide Compass · How we score",
    "page.methodik.ogDescription": "Five criteria, fully disclosed: how Peptide Compass combines lab quality, legal framework, shipping, range, and price per mg into one score.",

    "page.methodik.heroEyebrow": "How we score",
    "page.methodik.h1": "How we score",
    "page.methodik.heroLead": "Five criteria, fully disclosed.",

    "page.methodik.scoreH2": "One score, five criteria",
    "page.methodik.scoreLead": "The overall score combines all five values by their weighting into a number between 0 and 100.",
    "page.methodik.formulaLaborPct": "25%",
    "page.methodik.formulaLaborTitle": "Lab quality",
    "page.methodik.formulaLaborBody": "How often a vendor has its products tested independently, how current the CoAs are, and how accessible it makes them.",
    "page.methodik.formulaRechtPct": "25%",
    "page.methodik.formulaRechtTitle": "Legal framework",
    "page.methodik.formulaRechtBody": "Age gate in place, RUO labeling visible, a complete legal notice, no health claims on the vendor's site.",
    "page.methodik.formulaLieferungPct": "15%",
    "page.methodik.formulaLieferungTitle": "Shipping",
    "page.methodik.formulaLieferungBody": "Delivery time and number of countries served.",
    "page.methodik.formulaSortimentPct": "15%",
    "page.methodik.formulaSortimentTitle": "Range",
    "page.methodik.formulaSortimentBody": "Breadth and depth of the product range.",
    "page.methodik.formulaPreisPct": "20%",
    "page.methodik.formulaPreisTitle": "Price",
    "page.methodik.formulaPreisBody": "Price per milligram against the market.",

    "page.methodik.coaH2": "How we check CoAs",
    "page.methodik.coaLead": "We check whether a CoA comes from an independent lab, whether the batch number matches the product, and whether the test date is current. If a CoA is missing, or comes only from the vendor itself with no independent testing, the lab score drops accordingly.",

    "page.methodik.dataH2": "How we collect data",
    "page.methodik.dataLead": "We evaluate publicly available information: the vendor's site, the legal notice, published CoAs, and shipping terms. Every value in this demo version is a placeholder; real data collection follows before launch.",

    "page.methodik.notH2": "What we don't do",
    "page.methodik.notLead": "We don't assess the efficacy of individual substances. We don't give dosing recommendations. We make no health claims. We don't assess medical suitability for any individual.",

    "page.methodik.monetH2": "Monetization",
    "page.methodik.monetLeadPre": "Links marked \"Ad\" are affiliate links. If you buy through one, we may earn a commission, and the price stays the same for you. Details are in the ",
    "page.methodik.monetLeadLink": "affiliate disclosure",
    "page.methodik.monetLeadPost": ".",

    "page.methodik.faqTitle": "Frequently asked questions",
    "page.methodik.faq1Q": "What is Peptide Compass?",
    "page.methodik.faq1A": "Peptide Compass compares peptide vendors by lab quality, legal framework, shipping, range, and price. You see at a glance which vendor matches your criteria. Every rating is calculated transparently per our methodology.",
    "page.methodik.faq2Q": "Where do the ratings come from?",
    "page.methodik.faq2A": "We evaluate publicly available information: the legal notice, published CoAs, shipping terms, and the vendor's site. The exact weighting of the five criteria is on this page. Every value is currently demo data; real data collection follows before launch.",
    "page.methodik.faq3Q": "Are these real vendors?",
    "page.methodik.faq3A": "No, Peptide Compass currently shows eight fictional demo vendors. Names, scores, discount codes, and batches are placeholders. Vic will enter real vendor data before launch, clearly marked as DEMO until then."
  });

})(window.PK.i18n);
