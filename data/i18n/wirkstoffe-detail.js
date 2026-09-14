/* ============================================================================
   PEPTIDKOMPASS · data/i18n/wirkstoffe-detail.js
   ============================================================================
   Seiten-Wörterbuch für wirkstoffe/detail.html. Schlüssel-Präfix
   "page.wirkstoffe-detail.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.

   v2 (14.09.2026): Wirkstoff-Seiten-Erweiterung. Neue Keys für Mechanismus,
   Evidenz, Sicherheit, Rechtsstatus, Rekonstitution/Lagerung, FAQ. Die alte
   "Studienlage"-Platzhalter-Sektion (studienlageText/-Placeholder) entfällt,
   Evidenz + Rechtsstatus liefern jetzt echten Inhalt statt Platzhalter.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.wirkstoffe-detail.title": "Wirkstoff · Peptide Compass",
    "page.wirkstoffe-detail.metaDescription": "Einzelinfo zu einem Peptid: Kategorie, Studienlage, Evidenz, Sicherheit und Anbieter, die dieses Peptid im Sortiment führen. Nur für Forschungszwecke.",
    "page.wirkstoffe-detail.ogTitle": "Wirkstoff · Peptide Compass",
    "page.wirkstoffe-detail.ogDescription": "Kategorie, Studienlage, Evidenz und Sicherheit im Überblick.",
    "page.wirkstoffe-detail.titleFallback": "Wirkstoff",
    "page.wirkstoffe-detail.titleSuffix": " · Peptide Compass",

    "page.wirkstoffe-detail.backLink": "← Zurück zu Wirkstoffe",

    "page.wirkstoffe-detail.errorTitle": "Wirkstoff nicht gefunden",
    "page.wirkstoffe-detail.errorBody": "Für diesen Link liegt kein Wirkstoff in unserer Demo-Datenbank vor.",
    "page.wirkstoffe-detail.errorLink": "Zur Wirkstoffe-Übersicht",

    "page.wirkstoffe-detail.mechanismusTitle": "Wie es wirkt",
    "page.wirkstoffe-detail.evidenzTitle": "Evidenz",
    "page.wirkstoffe-detail.sicherheitTitle": "Sicherheit",
    "page.wirkstoffe-detail.rechtsstatusTitle": "Rechtsstatus",
    "page.wirkstoffe-detail.rekonstitutionTitle": "Rekonstitution und Lagerung",
    "page.wirkstoffe-detail.faqTitle": "Häufige Fragen",

    "page.wirkstoffe-detail.hinweiseTitle": "Hinweise",
    "page.wirkstoffe-detail.lagerungText": "Lagerung: {lagerung}. Diese Angaben sind keine Dosierungsempfehlung.",

    "page.wirkstoffe-detail.vendorTableTitle": "Anbieter mit diesem Wirkstoff",
    "page.wirkstoffe-detail.thMg": "mg",
    "page.wirkstoffe-detail.thPreis": "Preis",
    "page.wirkstoffe-detail.thPreisProMg": "Preis/mg",
    "page.wirkstoffe-detail.thGesamtscore": "Gesamtscore",
    "page.wirkstoffe-detail.thAktion": "Aktion",
    "page.wirkstoffe-detail.ctaZumAnbieter": "Zum Anbieter",
    "page.wirkstoffe-detail.cheapestBadge": "Günstigster Preis/mg",
    "page.wirkstoffe-detail.vendorEmpty": "Aktuell führt kein geprüfter Anbieter dieses Peptid.",

    "page.wirkstoffe-detail.batchTableTitle": "Geprüfte Chargen",
    "page.wirkstoffe-detail.thChargennummer": "Chargennummer",
    "page.wirkstoffe-detail.thReinheit": "Reinheit",
    "page.wirkstoffe-detail.thCoaStatus": "CoA-Status",
    "page.wirkstoffe-detail.batchEmpty": "Für diesen Wirkstoff liegen aktuell keine geprüften Chargen vor.",

    "page.wirkstoffe-detail.ctaEyebrow": "Nächster Schritt",
    "page.wirkstoffe-detail.ctaTitle": "Anbieter mit diesem Wirkstoff anzeigen"
  });

  i18n.merge("en", {
    "page.wirkstoffe-detail.title": "Peptide · Peptide Compass",
    "page.wirkstoffe-detail.metaDescription": "A single peptide, explained: category, research stage, evidence, safety, and the vendors that carry it. Research use only.",
    "page.wirkstoffe-detail.ogTitle": "Peptide · Peptide Compass",
    "page.wirkstoffe-detail.ogDescription": "Category, research stage, evidence, and safety at a glance.",
    "page.wirkstoffe-detail.titleFallback": "Peptide",
    "page.wirkstoffe-detail.titleSuffix": " · Peptide Compass",

    "page.wirkstoffe-detail.backLink": "← Back to Peptides",

    "page.wirkstoffe-detail.errorTitle": "Peptide not found",
    "page.wirkstoffe-detail.errorBody": "This link doesn't match a peptide in our demo database.",
    "page.wirkstoffe-detail.errorLink": "View all peptides",

    "page.wirkstoffe-detail.mechanismusTitle": "How it works",
    "page.wirkstoffe-detail.evidenzTitle": "Evidence",
    "page.wirkstoffe-detail.sicherheitTitle": "Safety",
    "page.wirkstoffe-detail.rechtsstatusTitle": "Legal status",
    "page.wirkstoffe-detail.rekonstitutionTitle": "Reconstitution and storage",
    "page.wirkstoffe-detail.faqTitle": "Frequently asked questions",

    "page.wirkstoffe-detail.hinweiseTitle": "Notes",
    "page.wirkstoffe-detail.lagerungText": "Storage: {lagerung}. This information is not a dosing recommendation.",

    "page.wirkstoffe-detail.vendorTableTitle": "Vendors carrying this peptide",
    "page.wirkstoffe-detail.thMg": "mg",
    "page.wirkstoffe-detail.thPreis": "Price",
    "page.wirkstoffe-detail.thPreisProMg": "Price/mg",
    "page.wirkstoffe-detail.thGesamtscore": "Total score",
    "page.wirkstoffe-detail.thAktion": "Action",
    "page.wirkstoffe-detail.ctaZumAnbieter": "Visit vendor",
    "page.wirkstoffe-detail.cheapestBadge": "Lowest price/mg",
    "page.wirkstoffe-detail.vendorEmpty": "No verified vendor currently carries this peptide.",

    "page.wirkstoffe-detail.batchTableTitle": "Verified batches",
    "page.wirkstoffe-detail.thChargennummer": "Batch number",
    "page.wirkstoffe-detail.thReinheit": "Purity",
    "page.wirkstoffe-detail.thCoaStatus": "CoA status",
    "page.wirkstoffe-detail.batchEmpty": "No verified batches are currently available for this peptide.",

    "page.wirkstoffe-detail.ctaEyebrow": "Next step",
    "page.wirkstoffe-detail.ctaTitle": "View vendors carrying this peptide"
  });

})(window.PK.i18n);
