/* ============================================================================
   PEPTIDKOMPASS · data/batches.js
   ============================================================================
   window.PK.batches (Array). Leer seit der Umstellung auf echte Anbieter (v2,
   06.09.2026): keine erfundenen Chargennummern/Prüfdaten für reale Firmen.
   charge-pruefen.html zeigt dafür den Hinweis "Noch keine Chargen erfasst"
   (data/i18n/charge-pruefen.js, Key page.charge-pruefen.noBatchesYet).
   ============================================================================ */
window.PK = window.PK || {};

window.PK.batches = [];
