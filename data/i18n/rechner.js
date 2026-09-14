/* ============================================================================
   PEPTIDKOMPASS · data/i18n/rechner.js
   ============================================================================
   Seiten-Wörterbuch für rechner.html (Peptid-Rechner: "Auflösen" +
   "Menge umrechnen", Segmented Control, Auftrag Vic 15.09.). Schlüssel-Präfix
   "page.rechner.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.rechner.title": "Peptid-Rechner · Peptide Compass",
    "page.rechner.metaDescription": "Peptid-Rechner: mg Wirkstoff und ml bakteriostatisches Wasser auflösen, Konzentration in mg/ml und µg berechnen, oder eine Zielmenge in Volumen und Einheiten (U-100) umrechnen. Keine Dosierungsempfehlung.",
    "page.rechner.ogTitle": "Peptid-Rechner · Peptide Compass",
    "page.rechner.ogDescription": "mg Wirkstoff auflösen oder eine Zielmenge in Volumen und Einheiten (U-100) umrechnen, rein rechnerisch.",

    "page.rechner.eyebrow": "Rechner",
    "page.rechner.h1": "Peptid-Rechner",
    "page.rechner.lead": "Rechnet mg, ml und Einheiten sauber um, mehr nicht.",
    "page.rechner.intro": "Dieser Rechner berechnet ausschließlich eine rechnerische Konzentration aus deiner eigenen Eingabe. Er ist keine Dosierungsempfehlung und ersetzt keine fachliche Beratung.",

    "page.rechner.switchAriaLabel": "Rechner-Bereich wählen",
    "page.rechner.tabAufloesen": "Auflösen",
    "page.rechner.tabUmrechnen": "Menge umrechnen",

    "page.rechner.mgLabel": "Menge Wirkstoff (mg)",
    "page.rechner.mgPlaceholder": "z. B. 5",
    "page.rechner.mlLabel": "Bakteriostatisches Wasser (ml)",
    "page.rechner.mlPlaceholder": "z. B. 2",

    "page.rechner.calcButton": "Berechnen",
    "page.rechner.exampleButton": "Beispiel 5 mg / 2 ml",
    "page.rechner.hintInvalid": "Bitte gib eine Wirkstoffmenge und eine Wassermenge größer als 0 ein.",

    "page.rechner.resultMgMlLabel": "Konzentration (mg/ml)",
    "page.rechner.result01Label": "µg je 0,1 ml",
    "page.rechner.resultUgUnitLabel": "µg je Einheit",
    "page.rechner.resultUnitsPer01Label": "Einheiten je 0,1 ml (U-100)",
    "page.rechner.unitMgMl": "mg/ml",
    "page.rechner.unitUg": "µg",
    "page.rechner.unitUnits": "Einheiten",

    "page.rechner.unitsNote": "„Einheiten“ meint hier ausschließlich die Skala einer U-100-Insulinspritze (100 Einheiten = 1 ml). Das ist nicht dasselbe wie internationale Einheiten (IE/IU): IE/IU beschreiben biologische Aktivität und lassen sich rechnerisch nicht aus einer Masse in mg herleiten.",

    "page.rechner.explainText": "Der Rechner teilt die eingegebene Wirkstoffmenge in Milligramm durch das zugegebene Volumen an bakteriostatischem Wasser in Millilitern. So entsteht die Konzentration in mg/ml, daraus rein rechnerisch die Menge je 0,1 ml sowie die Menge je Einheit auf der Skala einer U-100-Insulinspritze (100 Einheiten = 1 ml). Beispiel: 5 mg Wirkstoff in 2 ml Wasser ergeben 250 µg je 0,1 ml und 25 µg je Einheit.",

    "page.rechner.targetLabel": "Zielmenge",
    "page.rechner.targetPlaceholder": "z. B. 250",
    "page.rechner.targetUnitAriaLabel": "Einheit der Zielmenge",
    "page.rechner.targetUnitUg": "µg",
    "page.rechner.targetUnitMg": "mg",

    "page.rechner.modeLegend": "Konzentration und Vialmenge",
    "page.rechner.modeTaken": "Aus „Auflösen“ übernehmen",
    "page.rechner.modeManual": "Manuell eingeben",
    "page.rechner.sourceConcLabel": "Konzentration",
    "page.rechner.sourceVialLabel": "Vialmenge",
    "page.rechner.sourceEmptyHint": "Bitte zuerst den Bereich „Auflösen“ ausfüllen.",

    "page.rechner.concLabel": "Konzentration (mg/ml)",
    "page.rechner.concPlaceholder": "z. B. 2,5",
    "page.rechner.vialLabel": "Vialmenge (mg), optional für Entnahmen",
    "page.rechner.vialPlaceholder": "z. B. 5",
    "page.rechner.hintInvalid2": "Bitte gib eine Zielmenge größer als 0 und eine Konzentration größer als 0 ein.",

    "page.rechner.resultVolumeLabel": "Volumen",
    "page.rechner.resultUnitsLabel": "Einheiten (U-100)",
    "page.rechner.resultWithdrawalsLabel": "Entnahmen aus diesem Vial",
    "page.rechner.unitMl": "ml",

    "page.rechner.explainText2": "„Menge umrechnen“ rechnet eine Zielmenge in Volumen und Einheiten auf der U-100-Skala um, ausschließlich auf Basis der eingegebenen Konzentration. Die Entnahmen aus dem Vial ergeben sich aus Vialmenge geteilt durch Zielmenge, abgerundet auf ganze Entnahmen, rein rechnerisch aus deinen Eingaben.",

    "page.rechner.safetyTitle": "Wichtiger Hinweis",
    "page.rechner.safetyBody": "Alle Berechnungen auf dieser Seite sind rein rechnerisch. Sie sind keine medizinische Beratung und keine Empfehlung zur Anwendung am Menschen."
  });

  i18n.merge("en", {
    "page.rechner.title": "Peptide calculator · Peptide Compass",
    "page.rechner.metaDescription": "Peptide calculator: dissolve mg of peptide in ml of bacteriostatic water to get concentration in mg/ml and µg, or convert a target amount into volume and units (U-100). No dosing recommendation.",
    "page.rechner.ogTitle": "Peptide calculator · Peptide Compass",
    "page.rechner.ogDescription": "Dissolve mg of peptide, or convert a target amount into volume and units (U-100), purely by calculation.",

    "page.rechner.eyebrow": "Calculator",
    "page.rechner.h1": "Peptide calculator",
    "page.rechner.lead": "Converts mg, ml and units cleanly, nothing more.",
    "page.rechner.intro": "This calculator only works out a mathematical concentration from your own input. It is not a dosing recommendation and does not replace professional advice.",

    "page.rechner.switchAriaLabel": "Choose calculator section",
    "page.rechner.tabAufloesen": "Reconstitute",
    "page.rechner.tabUmrechnen": "Convert amount",

    "page.rechner.mgLabel": "Amount of peptide (mg)",
    "page.rechner.mgPlaceholder": "e.g. 5",
    "page.rechner.mlLabel": "Bacteriostatic water (ml)",
    "page.rechner.mlPlaceholder": "e.g. 2",

    "page.rechner.calcButton": "Calculate",
    "page.rechner.exampleButton": "Example 5 mg / 2 ml",
    "page.rechner.hintInvalid": "Enter a peptide amount and a water amount greater than 0.",

    "page.rechner.resultMgMlLabel": "Concentration (mg/ml)",
    "page.rechner.result01Label": "µg per 0.1 ml",
    "page.rechner.resultUgUnitLabel": "µg per unit",
    "page.rechner.resultUnitsPer01Label": "Units per 0.1 ml (U-100)",
    "page.rechner.unitMgMl": "mg/ml",
    "page.rechner.unitUg": "µg",
    "page.rechner.unitUnits": "units",

    "page.rechner.unitsNote": "\"Units\" here refers only to the scale on a U-100 insulin syringe (100 units = 1 ml). This is not the same as international units (IU): IU describe biological activity and cannot be derived mathematically from a mass in mg.",

    "page.rechner.explainText": "The calculator divides the entered peptide amount in milligrams by the added volume of bacteriostatic water in milliliters. That gives the concentration in mg/ml, and from it, purely by calculation, the amount per 0.1 ml and the amount per unit on the scale of a U-100 insulin syringe (100 units = 1 ml). Example: 5 mg of peptide in 2 ml of water gives 250 µg per 0.1 ml and 25 µg per unit.",

    "page.rechner.targetLabel": "Target amount",
    "page.rechner.targetPlaceholder": "e.g. 250",
    "page.rechner.targetUnitAriaLabel": "Unit of the target amount",
    "page.rechner.targetUnitUg": "µg",
    "page.rechner.targetUnitMg": "mg",

    "page.rechner.modeLegend": "Concentration and vial amount",
    "page.rechner.modeTaken": "Use values from \"Reconstitute\"",
    "page.rechner.modeManual": "Enter manually",
    "page.rechner.sourceConcLabel": "Concentration",
    "page.rechner.sourceVialLabel": "Vial amount",
    "page.rechner.sourceEmptyHint": "Fill in the \"Reconstitute\" section first.",

    "page.rechner.concLabel": "Concentration (mg/ml)",
    "page.rechner.concPlaceholder": "e.g. 2.5",
    "page.rechner.vialLabel": "Vial amount (mg), optional for withdrawals",
    "page.rechner.vialPlaceholder": "e.g. 5",
    "page.rechner.hintInvalid2": "Enter a target amount greater than 0 and a concentration greater than 0.",

    "page.rechner.resultVolumeLabel": "Volume",
    "page.rechner.resultUnitsLabel": "Units (U-100)",
    "page.rechner.resultWithdrawalsLabel": "Withdrawals from this vial",
    "page.rechner.unitMl": "ml",

    "page.rechner.explainText2": "\"Convert amount\" converts a target amount into volume and units on the U-100 scale, based only on the entered concentration. Withdrawals from the vial come from vial amount divided by target amount, rounded down to whole withdrawals, purely by calculation from your own input.",

    "page.rechner.safetyTitle": "Important note",
    "page.rechner.safetyBody": "All calculations on this page are purely mathematical. They are not medical advice and not a recommendation for human use."
  });

})(window.PK.i18n);
