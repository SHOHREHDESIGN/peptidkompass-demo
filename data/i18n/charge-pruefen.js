/* ============================================================================
   PEPTIDKOMPASS · data/i18n/charge-pruefen.js
   ============================================================================
   Seiten-Wörterbuch für charge-pruefen.html. Schlüssel-Präfix
   "page.charge-pruefen.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.charge-pruefen.title": "Charge prüfen · PeptidKompass",
    "page.charge-pruefen.metaDescription": "Chargennummer eingeben und gegen unsere Demo-Datenbank prüfen: Anbieter, Prüfdatum, Reinheit, CoA-Status. Plus Anleitung zur echten externen Prüfung.",
    "page.charge-pruefen.ogTitle": "Charge prüfen · PeptidKompass",
    "page.charge-pruefen.ogDescription": "Chargennummer eingeben, Ergebnis in Sekunden sehen, gegen unsere Demo-Datenbank geprüft.",

    "page.charge-pruefen.eyebrow": "Vertrauen prüfen",
    "page.charge-pruefen.h1": "Charge prüfen",
    "page.charge-pruefen.lead": "Chargennummer eingeben, Ergebnis in Sekunden sehen.",

    "page.charge-pruefen.searchPlaceholder": "Chargennummer eingeben",
    "page.charge-pruefen.searchAriaLabel": "Chargennummer",
    "page.charge-pruefen.searchButton": "Prüfen",

    "page.charge-pruefen.stepsEyebrow": "Anleitung",
    "page.charge-pruefen.stepsTitle": "So prüfst du eine Charge extern",
    "page.charge-pruefen.stepsLead": "Unabhängig von unserer Demo-Datenbank, in fünf Schritten.",
    "page.charge-pruefen.stepLabel": "Schritt {n}",
    "page.charge-pruefen.step1": "Chargennummer und Produktname vom Etikett oder der Verpackung notieren",
    "page.charge-pruefen.step2": "CoA (Certificate of Analysis) direkt beim Anbieter anfragen, meist per E-Mail oder im Kundenkonto",
    "page.charge-pruefen.step3": "Prüfen, ob das ausstellende Labor akkreditiert ist, zum Beispiel nach ISO 17025",
    "page.charge-pruefen.step4": "Chargennummer auf dem CoA mit der Nummer auf der Verpackung abgleichen",
    "page.charge-pruefen.step5": "Bei Abweichungen oder fehlendem CoA vor dem Kauf direkt beim Anbieter nachfragen",

    "page.charge-pruefen.hitEyebrow": "Treffer gefunden",
    "page.charge-pruefen.labelVendor": "Anbieter",
    "page.charge-pruefen.labelPeptide": "Wirkstoff",
    "page.charge-pruefen.labelCheckedOn": "Geprüft am",
    "page.charge-pruefen.labelPurity": "Reinheit",
    "page.charge-pruefen.labelLab": "Labor",
    "page.charge-pruefen.unknown": "unbekannt",

    "page.charge-pruefen.coaVerified": "Verifiziert",
    "page.charge-pruefen.coaShopOwned": "Shop-eigen",
    "page.charge-pruefen.coaMissing": "Kein CoA",
    "page.charge-pruefen.externChecked": "Extern geprüft",
    "page.charge-pruefen.internChecked": "Intern geprüft",

    "page.charge-pruefen.coaButton": "CoA ansehen",
    "page.charge-pruefen.noCoa": "Kein CoA verfügbar.",
    "page.charge-pruefen.hitDisclaimer": "Dieses Ergebnis bestätigt nur die Prüfung in unserer Demo-Datenbank, keine medizinische Freigabe.",

    "page.charge-pruefen.missEyebrow": "Kein Treffer",
    "page.charge-pruefen.missBody1": "Diese Charge steht nicht in unserer Demo-Datenbank. Das sagt nichts über ihre Echtheit aus.",
    "page.charge-pruefen.missBody2": "Wende dich für eine echte Prüfung direkt an den Anbieter.",
    "page.charge-pruefen.missLink": "Wie die Prüfung wirklich funktioniert",
    "page.charge-pruefen.examplesLabel": "Beispiele"
  });

  i18n.merge("en", {
    "page.charge-pruefen.title": "Check batch · PeptidKompass",
    "page.charge-pruefen.metaDescription": "Enter a batch number and check it against our demo database: vendor, check date, purity, CoA status. Plus a guide to real external verification.",
    "page.charge-pruefen.ogTitle": "Check batch · PeptidKompass",
    "page.charge-pruefen.ogDescription": "Enter a batch number, see the result in seconds, checked against our demo database.",

    "page.charge-pruefen.eyebrow": "Check trust",
    "page.charge-pruefen.h1": "Check batch",
    "page.charge-pruefen.lead": "Enter a batch number, see the result in seconds.",

    "page.charge-pruefen.searchPlaceholder": "Enter batch number",
    "page.charge-pruefen.searchAriaLabel": "Batch number",
    "page.charge-pruefen.searchButton": "Check",

    "page.charge-pruefen.stepsEyebrow": "Guide",
    "page.charge-pruefen.stepsTitle": "How to verify a batch externally",
    "page.charge-pruefen.stepsLead": "Independent of our demo database, in five steps.",
    "page.charge-pruefen.stepLabel": "Step {n}",
    "page.charge-pruefen.step1": "Write down the batch number and product name from the label or packaging",
    "page.charge-pruefen.step2": "Request the CoA (Certificate of Analysis) directly from the vendor, usually by email or in your account",
    "page.charge-pruefen.step3": "Check whether the issuing lab is accredited, for example under ISO 17025",
    "page.charge-pruefen.step4": "Match the batch number on the CoA against the number on the packaging",
    "page.charge-pruefen.step5": "If there's a mismatch or no CoA, ask the vendor directly before you buy",

    "page.charge-pruefen.hitEyebrow": "Match found",
    "page.charge-pruefen.labelVendor": "Vendor",
    "page.charge-pruefen.labelPeptide": "Peptide",
    "page.charge-pruefen.labelCheckedOn": "Checked on",
    "page.charge-pruefen.labelPurity": "Purity",
    "page.charge-pruefen.labelLab": "Lab",
    "page.charge-pruefen.unknown": "unknown",

    "page.charge-pruefen.coaVerified": "Verified",
    "page.charge-pruefen.coaShopOwned": "Vendor-supplied",
    "page.charge-pruefen.coaMissing": "No CoA",
    "page.charge-pruefen.externChecked": "Externally verified",
    "page.charge-pruefen.internChecked": "Internally verified",

    "page.charge-pruefen.coaButton": "View CoA",
    "page.charge-pruefen.noCoa": "No CoA available.",
    "page.charge-pruefen.hitDisclaimer": "This result only confirms a match in our demo database, not medical approval.",

    "page.charge-pruefen.missEyebrow": "No match",
    "page.charge-pruefen.missBody1": "This batch isn't in our demo database. That says nothing about its authenticity.",
    "page.charge-pruefen.missBody2": "For a real check, contact the vendor directly.",
    "page.charge-pruefen.missLink": "How verification really works",
    "page.charge-pruefen.examplesLabel": "Examples"
  });

})(window.PK.i18n);
