/* ============================================================================
   PEPTIDKOMPASS · data/i18n/anbieter-detail.js
   ============================================================================
   Seiten-Wörterbuch für anbieter/detail.html (Anbieter-Detail). Schlüssel-
   Präfix "page.anbieter-detail.<element>". Muss NACH data/i18n/global.js und
   VOR assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.anbieter-detail.title": "Anbieter-Detail · Peptide Compass",
    "page.anbieter-detail.metaDescription": "Volle Entscheidungsgrundlage zu einem Peptid-Anbieter: Score-Breakdown, Labor-Nachweise, Rechtsrahmen, Versand und Produkte.",
    "page.anbieter-detail.ogTitle": "Anbieter-Detail · Peptide Compass",

    "page.anbieter-detail.notFoundEyebrow": "Anbieter nicht gefunden",
    "page.anbieter-detail.notFoundH1": "Diesen Anbieter kennen wir nicht",
    "page.anbieter-detail.notFoundLead": "Der Link scheint falsch oder veraltet zu sein. Vielleicht wurde der Anbieter entfernt oder die Adresse falsch eingegeben.",
    "page.anbieter-detail.notFoundCta": "Zur Anbieterliste",

    "page.anbieter-detail.breadcrumb": "← Zurück zu Anbieter",
    "page.anbieter-detail.demoPill": "Demo-Daten",
    "page.anbieter-detail.ctaZumAnbieter": "Zum Anbieter",
    "page.anbieter-detail.subheadTemplate": "{land} · Score {score}/100",
    "page.anbieter-detail.bannerAlt": "Wirkstoff-Visual: {name}",

    "page.anbieter-detail.scoreEyebrow": "So bewerten wir",
    "page.anbieter-detail.scoreTitle": "Score im Detail",
    "page.anbieter-detail.scoreLead": "Fünf Kriterien, einzeln gewichtet.",
    "page.anbieter-detail.scoreLabelLabor": "Labor",
    "page.anbieter-detail.scoreLabelRecht": "Rechtsrahmen",
    "page.anbieter-detail.scoreLabelLieferung": "Lieferung",
    "page.anbieter-detail.scoreLabelSortiment": "Sortiment",
    "page.anbieter-detail.scoreLabelPreis": "Preis",
    "page.anbieter-detail.methodikLink": "Ganze Methodik lesen",

    "page.anbieter-detail.trustEyebrow": "Vertrauens-Check",
    "page.anbieter-detail.trustTitle": "Rechtsrahmen",
    "page.anbieter-detail.pillAltersgateYes": "Altersgate",
    "page.anbieter-detail.pillAltersgateNo": "Kein Altersgate",
    "page.anbieter-detail.pillRuoYes": "RUO gekennzeichnet",
    "page.anbieter-detail.pillRuoNo": "RUO fehlt",
    "page.anbieter-detail.pillImpressumYes": "Impressum vorhanden",
    "page.anbieter-detail.pillImpressumNo": "Impressum fehlt",
    "page.anbieter-detail.pillHeilversprechenYes": "Heilversprechen gefunden",
    "page.anbieter-detail.pillHeilversprechenNo": "Kein Heilversprechen",

    "page.anbieter-detail.coaEyebrow": "Labor-Nachweise",
    "page.anbieter-detail.coaHeadlineTemplate": "{n} CoAs, zuletzt geprüft am {datum}",
    "page.anbieter-detail.coaHeadlinePublicExtern": "CoAs öffentlich einsehbar, extern geprüft",
    "page.anbieter-detail.coaHeadlinePublic": "CoAs öffentlich einsehbar",
    "page.anbieter-detail.coaHeadlineNone": "Keine öffentlich einsehbaren CoAs gefunden",
    "page.anbieter-detail.coaHeadlineUnknown": "CoA-Status nicht ermittelbar",
    "page.anbieter-detail.coaBodyTemplate": "Extern verifiziert: {status}. Prüflabor: {labor}.",
    "page.anbieter-detail.yes": "Ja",
    "page.anbieter-detail.no": "Nein",

    "page.anbieter-detail.versandEyebrow": "Versand",
    "page.anbieter-detail.versandCardLabel": "Versand",
    "page.anbieter-detail.versandTemplate": "{min}–{max} Tage, Lieferung nach {laender}.",
    "page.anbieter-detail.versandUnknownTemplate": "Versandzeit nicht ermittelbar. Regionen laut Website: {laender}.",
    "page.anbieter-detail.versandKostenlosAb": " Kostenlos ab {betrag} €.",
    "page.anbieter-detail.zahlungLabel": "Zahlung",

    "page.anbieter-detail.rabattEyebrow": "Rabattcode",
    "page.anbieter-detail.copyCodeButton": "Code kopieren",

    "page.anbieter-detail.sortimentEyebrow": "Sortiment",
    "page.anbieter-detail.sortimentTitle": "Produkte",
    "page.anbieter-detail.tableHeadPeptid": "Peptid",
    "page.anbieter-detail.tableHeadMg": "mg",
    "page.anbieter-detail.tableHeadPreis": "Preis",
    "page.anbieter-detail.tableHeadPreisProMg": "Preis/mg",
    "page.anbieter-detail.tableHeadAktion": "Aktion",
    "page.anbieter-detail.produkteEmpty": "Produktdaten folgen. Wir haben für diesen Anbieter noch kein Sortiment mit Preisen erfasst.",

    "page.anbieter-detail.staerkenTitle": "Stärken",
    "page.anbieter-detail.schwaechenTitle": "Schwächen",

    "page.anbieter-detail.flagsEyebrow": "Sorgfaltspflicht",
    "page.anbieter-detail.flagsEmpty": "Keine Auffälligkeiten in unserer Recherche vom 06.09.2026 festgestellt.",

    "page.anbieter-detail.chargenEyebrow": "Prüfhistorie",
    "page.anbieter-detail.chargenTitle": "Zugehörige Chargen",
    "page.anbieter-detail.chargenHeadCharge": "Charge",
    "page.anbieter-detail.chargenHeadPeptid": "Peptid",
    "page.anbieter-detail.chargenHeadPruefdatum": "Prüfdatum",
    "page.anbieter-detail.chargenHeadReinheit": "Reinheit",
    "page.anbieter-detail.chargenHeadLabor": "Labor",
    "page.anbieter-detail.chargenHeadStatus": "Status",
    "page.anbieter-detail.chargenEmpty": "Für diesen Anbieter liegen noch keine Chargen in unserer Datenbank vor.",

    /* Runde "Leben und Conversion" (06.09.) */
    "page.anbieter-detail.proofEyebrow": "Erfahrungen",
    "page.anbieter-detail.proofTitle": "Was Kunden über {name} sagen",
    "page.anbieter-detail.proofDemoNote": "Diese Zitate sind Platzhalter für die Demo, echte Bewertungen trägt Vic vor dem Live-Gang ein.",
    "page.anbieter-detail.stickyClose": "Leiste schließen",
    "page.anbieter-detail.stickyCopyButton": "Kopieren"
  });

  i18n.merge("en", {
    "page.anbieter-detail.title": "Vendor detail · Peptide Compass",
    "page.anbieter-detail.metaDescription": "Everything you need to evaluate a peptide vendor: score breakdown, lab evidence, legal framework, shipping, and products.",
    "page.anbieter-detail.ogTitle": "Vendor detail · Peptide Compass",

    "page.anbieter-detail.notFoundEyebrow": "Vendor not found",
    "page.anbieter-detail.notFoundH1": "We don't know this vendor",
    "page.anbieter-detail.notFoundLead": "This link looks wrong or outdated. The vendor may have been removed, or the address was mistyped.",
    "page.anbieter-detail.notFoundCta": "Back to vendor list",

    "page.anbieter-detail.breadcrumb": "← Back to vendors",
    "page.anbieter-detail.demoPill": "Demo data",
    "page.anbieter-detail.ctaZumAnbieter": "Visit vendor",
    "page.anbieter-detail.subheadTemplate": "{land} · Score {score}/100",
    "page.anbieter-detail.bannerAlt": "Peptide visual: {name}",

    "page.anbieter-detail.scoreEyebrow": "How we score",
    "page.anbieter-detail.scoreTitle": "Score breakdown",
    "page.anbieter-detail.scoreLead": "Five criteria, individually weighted.",
    "page.anbieter-detail.scoreLabelLabor": "Lab quality",
    "page.anbieter-detail.scoreLabelRecht": "Legal framework",
    "page.anbieter-detail.scoreLabelLieferung": "Shipping",
    "page.anbieter-detail.scoreLabelSortiment": "Range",
    "page.anbieter-detail.scoreLabelPreis": "Price",
    "page.anbieter-detail.methodikLink": "Read the full methodology",

    "page.anbieter-detail.trustEyebrow": "Trust check",
    "page.anbieter-detail.trustTitle": "Legal framework",
    "page.anbieter-detail.pillAltersgateYes": "Age gate",
    "page.anbieter-detail.pillAltersgateNo": "No age gate",
    "page.anbieter-detail.pillRuoYes": "RUO labeled",
    "page.anbieter-detail.pillRuoNo": "RUO missing",
    "page.anbieter-detail.pillImpressumYes": "Legal notice present",
    "page.anbieter-detail.pillImpressumNo": "Legal notice missing",
    "page.anbieter-detail.pillHeilversprechenYes": "Health claims found",
    "page.anbieter-detail.pillHeilversprechenNo": "No health claims",

    "page.anbieter-detail.coaEyebrow": "Lab evidence",
    "page.anbieter-detail.coaHeadlineTemplate": "{n} CoAs, last checked on {datum}",
    "page.anbieter-detail.coaHeadlinePublicExtern": "CoAs publicly available, third-party tested",
    "page.anbieter-detail.coaHeadlinePublic": "CoAs publicly available",
    "page.anbieter-detail.coaHeadlineNone": "No publicly available CoAs found",
    "page.anbieter-detail.coaHeadlineUnknown": "CoA status not ascertainable",
    "page.anbieter-detail.coaBodyTemplate": "Third-party verified: {status}. Testing lab: {labor}.",
    "page.anbieter-detail.yes": "Yes",
    "page.anbieter-detail.no": "No",

    "page.anbieter-detail.versandEyebrow": "Shipping",
    "page.anbieter-detail.versandCardLabel": "Shipping",
    "page.anbieter-detail.versandTemplate": "{min}–{max} days, delivery to {laender}.",
    "page.anbieter-detail.versandUnknownTemplate": "Delivery time not ascertainable. Regions per the website: {laender}.",
    "page.anbieter-detail.versandKostenlosAb": " Free from €{betrag}.",
    "page.anbieter-detail.zahlungLabel": "Payment",

    "page.anbieter-detail.rabattEyebrow": "Discount code",
    "page.anbieter-detail.copyCodeButton": "Copy code",

    "page.anbieter-detail.sortimentEyebrow": "Range",
    "page.anbieter-detail.sortimentTitle": "Products",
    "page.anbieter-detail.tableHeadPeptid": "Peptide",
    "page.anbieter-detail.tableHeadMg": "mg",
    "page.anbieter-detail.tableHeadPreis": "Price",
    "page.anbieter-detail.tableHeadPreisProMg": "Price/mg",
    "page.anbieter-detail.tableHeadAktion": "Action",
    "page.anbieter-detail.produkteEmpty": "Product data coming soon. We haven't recorded a priced product range for this vendor yet.",

    "page.anbieter-detail.staerkenTitle": "Strengths",
    "page.anbieter-detail.schwaechenTitle": "Weaknesses",

    "page.anbieter-detail.flagsEyebrow": "Due diligence",
    "page.anbieter-detail.flagsEmpty": "No notable items found in our review as of Sep 6, 2026.",

    "page.anbieter-detail.chargenEyebrow": "Test history",
    "page.anbieter-detail.chargenTitle": "Related batches",
    "page.anbieter-detail.chargenHeadCharge": "Batch",
    "page.anbieter-detail.chargenHeadPeptid": "Peptide",
    "page.anbieter-detail.chargenHeadPruefdatum": "Test date",
    "page.anbieter-detail.chargenHeadReinheit": "Purity",
    "page.anbieter-detail.chargenHeadLabor": "Lab",
    "page.anbieter-detail.chargenHeadStatus": "Status",
    "page.anbieter-detail.chargenEmpty": "No batches for this vendor yet in our database.",

    "page.anbieter-detail.proofEyebrow": "Experiences",
    "page.anbieter-detail.proofTitle": "What customers say about {name}",
    "page.anbieter-detail.proofDemoNote": "These quotes are placeholders for the demo, Vic adds real reviews before launch.",
    "page.anbieter-detail.stickyClose": "Close bar",
    "page.anbieter-detail.stickyCopyButton": "Copy"
  });

})(window.PK.i18n);
