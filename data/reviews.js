/* ============================================================================
   PEPTIDKOMPASS · data/reviews.js
   ============================================================================
   window.PK.reviews (Array). Leer seit der Umstellung auf echte Anbieter
   (v2, 06.09.2026): keine erfundenen Kundenstimmen für reale Firmen. Echte
   Reviews trägt Vic erst nach eigener Prüfung ein. PK.renderProof() versteckt
   die Proof-Sektion automatisch selbst, solange dieses Array leer ist
   (assets/js/site.js, siehe data/SCHEMA.md).
   ============================================================================ */
window.PK = window.PK || {};

window.PK.reviews = [];
