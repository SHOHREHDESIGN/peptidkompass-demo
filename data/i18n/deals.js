/* ============================================================================
   PEPTIDKOMPASS · data/i18n/deals.js
   ============================================================================
   Seiten-Wörterbuch für deals.html. Schlüssel-Präfix "page.deals.<element>".
   Muss NACH data/i18n/global.js und VOR assets/js/site.js eingebunden werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.deals.title": "Deals · PeptidKompass",
    "page.deals.metaDescription": "Alle Rabattcodes der geprüften Peptid-Anbieter im Überblick. Code kopieren, beim Anbieter einlösen.",
    "page.deals.ogTitle": "Deals · PeptidKompass",
    "page.deals.ogDescription": "Alle Rabattcodes im Überblick. Code kopieren, beim Anbieter einlösen.",

    "page.deals.eyebrow": "Rabattcodes",
    "page.deals.h1": "Alle Rabattcodes im Überblick",
    "page.deals.lead": "Code kopieren, beim Anbieter einlösen.",
    "page.deals.emptyState": "Aktuell sind keine Rabattcodes hinterlegt. Schau später wieder vorbei.",

    "page.deals.howTitle": "So funktionieren die Codes",
    "page.deals.howBody": "Codes können jederzeit vom Anbieter geändert oder beendet werden. Wir aktualisieren die Demo-Daten regelmäßig, eine Garantie für Gültigkeit im Einzelfall geben wir nicht. Beim Anbieter selbst siehst du den aktuellen Stand vor dem Kauf.",
    "page.deals.affiliateHint": "Links mit dem Hinweis \"Anzeige\" sind Affiliate-Links. Kaufst du darüber, erhalten wir unter Umständen eine Provision, für dich bleibt der Preis gleich.",

    "page.deals.copyButton": "Code kopieren",
    "page.deals.cardHint": "Gültigkeit ohne Gewähr. Der Anbieter kann Codes jederzeit ändern oder beenden.",
    "page.deals.profileLink": "Profil ansehen",
    "page.deals.actionVisitVendor": "Zum Anbieter"
  });

  i18n.merge("en", {
    "page.deals.title": "Deals · PeptidKompass",
    "page.deals.metaDescription": "All discount codes from vetted peptide vendors in one place. Copy a code, redeem it at the vendor.",
    "page.deals.ogTitle": "Deals · PeptidKompass",
    "page.deals.ogDescription": "All discount codes in one place. Copy a code, redeem it at the vendor.",

    "page.deals.eyebrow": "Discount codes",
    "page.deals.h1": "All discount codes in one place",
    "page.deals.lead": "Copy a code, redeem it at the vendor.",
    "page.deals.emptyState": "No discount codes right now. Check back later.",

    "page.deals.howTitle": "How the codes work",
    "page.deals.howBody": "Vendors can change or end a code at any time. We update the demo data regularly, but we cannot guarantee validity in any single case. Check the current status at the vendor before you buy.",
    "page.deals.affiliateHint": "Links marked \"Ad\" are affiliate links. If you buy through one, we may earn a commission at no extra cost to you.",

    "page.deals.copyButton": "Copy code",
    "page.deals.cardHint": "Validity not guaranteed. The vendor can change or end codes at any time.",
    "page.deals.profileLink": "View profile",
    "page.deals.actionVisitVendor": "Visit vendor"
  });

})(window.PK.i18n);
