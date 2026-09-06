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
    "page.anbieter-detail.title": "Anbieter-Detail · PeptidKompass",
    "page.anbieter-detail.metaDescription": "Volle Entscheidungsgrundlage zu einem Peptid-Anbieter: Score-Breakdown, Labor-Nachweise, Rechtsrahmen, Versand und Produkte.",
    "page.anbieter-detail.ogTitle": "Anbieter-Detail · PeptidKompass",

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
    "page.anbieter-detail.coaBodyTemplate": "Extern verifiziert: {status}. Prüflabor: {labor}.",
    "page.anbieter-detail.yes": "Ja",
    "page.anbieter-detail.no": "Nein",

    "page.anbieter-detail.versandEyebrow": "Versand",
    "page.anbieter-detail.versandCardLabel": "Versand",
    "page.anbieter-detail.versandTemplate": "{min}–{max} Tage, Lieferung nach {laender}.",
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

    "page.anbieter-detail.staerkenTitle": "Stärken",
    "page.anbieter-detail.schwaechenTitle": "Schwächen",

    "page.anbieter-detail.chargenEyebrow": "Prüfhistorie",
    "page.anbieter-detail.chargenTitle": "Zugehörige Chargen",
    "page.anbieter-detail.chargenHeadCharge": "Charge",
    "page.anbieter-detail.chargenHeadPeptid": "Peptid",
    "page.anbieter-detail.chargenHeadPruefdatum": "Prüfdatum",
    "page.anbieter-detail.chargenHeadReinheit": "Reinheit",
    "page.anbieter-detail.chargenHeadLabor": "Labor",
    "page.anbieter-detail.chargenHeadStatus": "Status",
    "page.anbieter-detail.chargenEmpty": "Für diesen Anbieter liegen noch keine Chargen in unserer Demo-Datenbank vor."
  });

  i18n.merge("en", {
    "page.anbieter-detail.title": "Vendor detail · PeptidKompass",
    "page.anbieter-detail.metaDescription": "Everything you need to evaluate a peptide vendor: score breakdown, lab evidence, legal framework, shipping, and products.",
    "page.anbieter-detail.ogTitle": "Vendor detail · PeptidKompass",

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
    "page.anbieter-detail.coaBodyTemplate": "Third-party verified: {status}. Testing lab: {labor}.",
    "page.anbieter-detail.yes": "Yes",
    "page.anbieter-detail.no": "No",

    "page.anbieter-detail.versandEyebrow": "Shipping",
    "page.anbieter-detail.versandCardLabel": "Shipping",
    "page.anbieter-detail.versandTemplate": "{min}–{max} days, delivery to {laender}.",
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

    "page.anbieter-detail.staerkenTitle": "Strengths",
    "page.anbieter-detail.schwaechenTitle": "Weaknesses",

    "page.anbieter-detail.chargenEyebrow": "Test history",
    "page.anbieter-detail.chargenTitle": "Related batches",
    "page.anbieter-detail.chargenHeadCharge": "Batch",
    "page.anbieter-detail.chargenHeadPeptid": "Peptide",
    "page.anbieter-detail.chargenHeadPruefdatum": "Test date",
    "page.anbieter-detail.chargenHeadReinheit": "Purity",
    "page.anbieter-detail.chargenHeadLabor": "Lab",
    "page.anbieter-detail.chargenHeadStatus": "Status",
    "page.anbieter-detail.chargenEmpty": "No batches for this vendor yet in our demo database."
  });

})(window.PK.i18n);
