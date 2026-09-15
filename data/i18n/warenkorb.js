/* ============================================================================
   PEPTIDKOMPASS · data/i18n/warenkorb.js
   ============================================================================
   Seiten-Wörterbuch für warenkorb.html (Warenkorb-Optimierer: bis zu 6
   Positionen, "Günstigste Kombination" + "Alles bei einem Anbieter", rein
   rechnerisch aus Listenpreisen, Auftrag 15.09.2026). Schlüssel-Präfix
   "page.warenkorb.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden (siehe assets/css/README.md).
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.warenkorb.title": "Warenkorb-Optimierer · Peptide Compass",
    "page.warenkorb.metaDescription": "Bis zu 6 Wirkstoffe mit Vial-Größe und Anzahl wählen: die günstigste Kombination über alle geprüften Anbieter und die besten Ein-Anbieter-Komplettpakete, rein rechnerisch aus Listenpreisen.",
    "page.warenkorb.ogTitle": "Warenkorb-Optimierer · Peptide Compass",
    "page.warenkorb.ogDescription": "Die günstigste Kombination über alle Anbieter oder das beste Ein-Anbieter-Komplettpaket, rein rechnerisch aus Listenpreisen.",

    "page.warenkorb.eyebrow": "Prüfen",
    "page.warenkorb.h1": "Warenkorb-Optimierer",
    "page.warenkorb.lead": "Rechnet Listenpreise über Anbieter hinweg zusammen, mehr nicht.",
    "page.warenkorb.intro": "Wähle bis zu 6 Wirkstoffe mit Vial-Größe und Anzahl. Der Optimierer vergleicht ausschließlich die hinterlegten Listenpreise in Euro. Keine Dosierungsangabe, keine Stack-Empfehlung, keine Wirkaussage.",

    "page.warenkorb.builderTitle": "Deine Positionen",
    "page.warenkorb.addLabel": "Wirkstoff hinzufügen",
    "page.warenkorb.addPlaceholder": "Wirkstoff wählen…",
    "page.warenkorb.exampleButton": "Beispiel: BPC-157 10 mg + TB-500 5 mg",
    "page.warenkorb.resetButton": "Zurücksetzen",
    "page.warenkorb.emptyState": "Noch keine Positionen ausgewählt. Wähle oben einen Wirkstoff oder starte mit dem Beispiel.",
    "page.warenkorb.limitHint": "Maximal 6 Positionen. Entferne eine Position, um einen anderen Wirkstoff hinzuzufügen.",
    "page.warenkorb.mgLabel": "Vial-Größe",
    "page.warenkorb.qtyLabel": "Anzahl",
    "page.warenkorb.removeAriaLabel": "{name} entfernen",
    "page.warenkorb.noPriceHint": "Für {name} {mg} mg ist bei geprüften Anbietern aktuell kein Euro-Preis hinterlegt. Position wird bei der Berechnung übersprungen.",

    "page.warenkorb.resultATitle": "Günstigste Kombination",
    "page.warenkorb.resultALead": "Je Position der günstigste Euro-Preis über alle aktiven bzw. noch geprüften Anbieter, gruppiert nach Shop.",
    "page.warenkorb.resultAEmpty": "Füge mindestens eine Position hinzu, um die günstigste Kombination zu sehen.",
    "page.warenkorb.subtotalLabel": "Zwischensumme",
    "page.warenkorb.totalLabel": "Gesamtsumme",
    "page.warenkorb.orderCountLabel": "Anzahl Bestellungen",
    "page.warenkorb.skippedNote": "{count} Position(en) übersprungen, kein Euro-Preis vorhanden: {names}",

    "page.warenkorb.resultBTitle": "Alles bei einem Anbieter",
    "page.warenkorb.resultBLead": "Anbieter, die alle gewählten Positionen in genau diesen Vial-Größen führen, sortiert nach Gesamtsumme. Top 3.",
    "page.warenkorb.resultBEmpty": "Kein einzelner Anbieter führt aktuell alle gewählten Positionen in genau diesen Vial-Größen.",
    "page.warenkorb.sumLabel": "Gesamtsumme",
    "page.warenkorb.scoreLabel": "Score",
    "page.warenkorb.ctaButton": "Zum Anbieter",
    "page.warenkorb.rankLabel": "Platz {rank}",

    "page.warenkorb.noteTitle": "Zu beachten",
    "page.warenkorb.noteBody": "Versandkosten und Aktionsrabatte sind in beiden Ergebnissen nicht enthalten. Preise Stand {date}, ohne Gewähr.",

    "page.warenkorb.peptideAriaLabel": "Wirkstoff",
    "page.warenkorb.mgUnit": "mg"
  });

  i18n.merge("en", {
    "page.warenkorb.title": "Cart optimizer · Peptide Compass",
    "page.warenkorb.metaDescription": "Pick up to 6 peptides with vial size and quantity: the cheapest combination across all reviewed vendors, and the best single-vendor bundles, calculated purely from listed prices.",
    "page.warenkorb.ogTitle": "Cart optimizer · Peptide Compass",
    "page.warenkorb.ogDescription": "The cheapest combination across vendors, or the best single-vendor bundle, calculated purely from listed prices.",

    "page.warenkorb.eyebrow": "Verify",
    "page.warenkorb.h1": "Cart optimizer",
    "page.warenkorb.lead": "Adds up listed prices across vendors, nothing more.",
    "page.warenkorb.intro": "Pick up to 6 peptides with vial size and quantity. The optimizer compares only the listed euro prices we have on file. No dosing guidance, no stack recommendation, no efficacy claims.",

    "page.warenkorb.builderTitle": "Your items",
    "page.warenkorb.addLabel": "Add a peptide",
    "page.warenkorb.addPlaceholder": "Choose a peptide…",
    "page.warenkorb.exampleButton": "Example: BPC-157 10 mg + TB-500 5 mg",
    "page.warenkorb.resetButton": "Reset",
    "page.warenkorb.emptyState": "No items yet. Pick a peptide above, or start with the example.",
    "page.warenkorb.limitHint": "Up to 6 items. Remove one to add a different peptide.",
    "page.warenkorb.mgLabel": "Vial size",
    "page.warenkorb.qtyLabel": "Quantity",
    "page.warenkorb.removeAriaLabel": "Remove {name}",
    "page.warenkorb.noPriceHint": "No euro price on file for {name} {mg} mg from a reviewed vendor. This item is skipped in the calculation.",

    "page.warenkorb.resultATitle": "Cheapest combination",
    "page.warenkorb.resultALead": "For each item, the cheapest euro price across active or under-review vendors, grouped by shop.",
    "page.warenkorb.resultAEmpty": "Add at least one item to see the cheapest combination.",
    "page.warenkorb.subtotalLabel": "Subtotal",
    "page.warenkorb.totalLabel": "Total",
    "page.warenkorb.orderCountLabel": "Number of orders",
    "page.warenkorb.skippedNote": "{count} item(s) skipped, no euro price available: {names}",

    "page.warenkorb.resultBTitle": "Everything from one vendor",
    "page.warenkorb.resultBLead": "Vendors that carry every selected item in exactly these vial sizes, sorted by total. Top 3.",
    "page.warenkorb.resultBEmpty": "No single vendor currently carries all selected items in exactly these vial sizes.",
    "page.warenkorb.sumLabel": "Total",
    "page.warenkorb.scoreLabel": "Score",
    "page.warenkorb.ctaButton": "Go to vendor",
    "page.warenkorb.rankLabel": "Rank {rank}",

    "page.warenkorb.noteTitle": "Keep in mind",
    "page.warenkorb.noteBody": "Shipping costs and promotional discounts are not included in either result. Prices as of {date}, provided without guarantee.",

    "page.warenkorb.peptideAriaLabel": "Peptide",
    "page.warenkorb.mgUnit": "mg"
  });
})(window.PK.i18n);
