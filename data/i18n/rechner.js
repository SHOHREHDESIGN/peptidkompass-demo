/* ============================================================================
   PEPTIDKOMPASS · data/i18n/rechner.js
   ============================================================================
   Seiten-Wörterbuch für rechner.html (Anmisch-Rechner). Schlüssel-Präfix
   "page.rechner.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.rechner.title": "Anmisch-Rechner · Peptide Compass",
    "page.rechner.metaDescription": "Anmisch-Rechner für Peptide: mg Wirkstoff und ml bakteriostatisches Wasser eingeben, Konzentration in mg/ml und je 0,1 ml berechnen. Keine Dosierungsempfehlung.",
    "page.rechner.ogTitle": "Anmisch-Rechner · Peptide Compass",
    "page.rechner.ogDescription": "mg Wirkstoff und ml bakteriostatisches Wasser eingeben, Konzentration in mg/ml und je 0,1 ml berechnen.",

    "page.rechner.eyebrow": "Rechner",
    "page.rechner.h1": "Anmisch-Rechner",
    "page.rechner.lead": "Rechnet mg und ml sauber um, mehr nicht.",
    "page.rechner.intro": "Dieser Rechner berechnet ausschließlich eine rechnerische Konzentration aus deiner eigenen Eingabe. Er ist keine Dosierungsempfehlung und ersetzt keine fachliche Beratung.",

    "page.rechner.mgLabel": "Menge Wirkstoff (mg)",
    "page.rechner.mgPlaceholder": "z. B. 5",
    "page.rechner.mlLabel": "Bakteriostatisches Wasser (ml)",
    "page.rechner.mlPlaceholder": "z. B. 2",

    "page.rechner.calcButton": "Berechnen",
    "page.rechner.exampleButton": "Beispiel 5 mg / 2 ml",
    "page.rechner.hintInvalid": "Bitte gib eine Wirkstoffmenge und eine Wassermenge größer als 0 ein.",

    "page.rechner.resultMgMlLabel": "Konzentration (mg/ml)",
    "page.rechner.result01Label": "mg je 0,1 ml",
    "page.rechner.unitMgMl": "mg/ml",
    "page.rechner.unitMg": "mg",

    "page.rechner.explainText": "Der Anmisch-Rechner teilt die eingegebene Wirkstoffmenge in Milligramm durch das zugegebene Volumen an bakteriostatischem Wasser in Millilitern. Das Ergebnis zeigt, wie viel Wirkstoff rein rechnerisch in 0,1 ml der fertigen Lösung steckt, allein aus deinen beiden Eingaben. Beispiel: 5 mg Wirkstoff in 2 ml Wasser ergeben 0,25 mg je 0,1 ml.",

    "page.rechner.dosingTitle": "Dosierungsrechner",
    "page.rechner.dosingPill": "In Vorbereitung",
    "page.rechner.dosingBody": "Dieser Bereich ist noch nicht aktiv. Keine Dosierungsempfehlung, auch nach dem Start zeigt er nur Information, keine Anleitung.",

    "page.rechner.safetyTitle": "Wichtiger Hinweis",
    "page.rechner.safetyBody": "Alle Berechnungen auf dieser Seite sind rein rechnerisch. Sie sind keine medizinische Beratung und keine Empfehlung zur Anwendung am Menschen."
  });

  i18n.merge("en", {
    "page.rechner.title": "Mixing calculator · Peptide Compass",
    "page.rechner.metaDescription": "Peptide mixing calculator: enter mg of peptide and ml of bacteriostatic water to calculate concentration in mg/ml and per 0.1 ml. No dosing recommendation.",
    "page.rechner.ogTitle": "Mixing calculator · Peptide Compass",
    "page.rechner.ogDescription": "Enter mg of peptide and ml of bacteriostatic water to calculate concentration in mg/ml and per 0.1 ml.",

    "page.rechner.eyebrow": "Calculator",
    "page.rechner.h1": "Mixing calculator",
    "page.rechner.lead": "Converts mg and ml cleanly, nothing more.",
    "page.rechner.intro": "This calculator only works out a mathematical concentration from your own input. It is not a dosing recommendation and does not replace professional advice.",

    "page.rechner.mgLabel": "Amount of peptide (mg)",
    "page.rechner.mgPlaceholder": "e.g. 5",
    "page.rechner.mlLabel": "Bacteriostatic water (ml)",
    "page.rechner.mlPlaceholder": "e.g. 2",

    "page.rechner.calcButton": "Calculate",
    "page.rechner.exampleButton": "Example 5 mg / 2 ml",
    "page.rechner.hintInvalid": "Enter a peptide amount and a water amount greater than 0.",

    "page.rechner.resultMgMlLabel": "Concentration (mg/ml)",
    "page.rechner.result01Label": "mg per 0.1 ml",
    "page.rechner.unitMgMl": "mg/ml",
    "page.rechner.unitMg": "mg",

    "page.rechner.explainText": "The mixing calculator divides the entered peptide amount in milligrams by the added volume of bacteriostatic water in milliliters. The result shows how much peptide, purely by calculation, sits in 0.1 ml of the finished solution, based only on your two inputs. Example: 5 mg of peptide in 2 ml of water gives 0.25 mg per 0.1 ml.",

    "page.rechner.dosingTitle": "Dosing calculator",
    "page.rechner.dosingPill": "Coming soon",
    "page.rechner.dosingBody": "This section isn't active yet. No dosing recommendation, information only, even after launch, no instructions.",

    "page.rechner.safetyTitle": "Important note",
    "page.rechner.safetyBody": "All calculations on this page are purely mathematical. They are not medical advice and not a recommendation for human use."
  });

})(window.PK.i18n);
