/* ============================================================================
   PEPTIDKOMPASS · data/i18n/global.js
   ============================================================================
   Übersetzungswörterbuch für ALLE Strings, die site.js selbst erzeugt
   (Nav, Demo-Banner, Anbieter-Karte, Copy-Button, Footer, Scroll-Hinweis,
   Sprachumschalter, Enum-Werte aus data/SCHEMA.md). Seiten-spezifische Texte
   gehören NICHT hierher, sondern in data/i18n/<seitenname>.js.

   Schlüssel-Konvention: "global.<bereich>.<element>" als FLACHER String-Key
   (kein verschachteltes Objekt) : siehe assets/css/README.md Abschnitt
   "i18n: So tagst du eine Seite" für die volle Doku.

   Einbindung: VOR data/i18n/<seitenname>.js und VOR assets/js/site.js.
   Muss window.PK.i18n = { de:{...}, en:{...} } per Merge ergänzen, nie
   überschreiben (mehrere i18n-Dateien laufen nacheinander).
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";

  /**
   * PK.i18n.merge(lang, dict)
   * Ergänzt window.PK.i18n[lang] um weitere Schlüssel, ohne bereits
   * vorhandene zu löschen. Jede <seitenname>.js-Datei ruft das für "de"
   * und "en" auf. Wird hier definiert, weil global.js immer zuerst lädt.
   */
  i18n.merge = function (lang, dict) {
    if (!dict) return;
    i18n[lang] = i18n[lang] || {};
    Object.keys(dict).forEach(function (key) {
      i18n[lang][key] = dict[key];
    });
  };

  i18n.merge("de", {
    /* Barrierefreiheit */
    "global.a11y.skipToContent": "Zum Inhalt springen",

    /* Hauptnavigation (.nav-links / .nav-menu-links) */
    "global.nav.anbieter": "Anbieter",
    "global.nav.vergleich": "Vergleich",
    "global.nav.wirkstoffe": "Wirkstoffe",
    "global.nav.rechner": "Rechner",
    "global.nav.chargePruefen": "Charge prüfen",
    "global.nav.deals": "Deals",
    "global.nav.anbieterFinden": "Anbieter finden",
    "global.nav.menuOeffnen": "Menü öffnen",

    /* Trust-Gruppe (Nav-Menü unten + Footer) */
    "global.nav.methodik": "Methodik",
    "global.nav.affiliateHinweis": "Affiliate-Hinweis",
    "global.nav.impressum": "Impressum",
    "global.nav.datenschutz": "Datenschutz",

    /* Sprachumschalter */
    "global.langToggle.ariaLabel": "Sprache wählen",

    /* Demo-Banner (PK.initDemoBanner) : v2 "echte Anbieter" (06.09.) -
       site.demo bleibt true bis Vic freigibt, Text macht klar, dass die
       ANBIETER real sind (keine Demo-Daten), aber Stand/Vollständigkeit
       vorläufig ist. */
    "global.demoBanner.label": "Vorabversion",
    "global.demoBanner.text": "Vorabversion: Daten Stand 06.09.2026, Angaben ohne Gewähr.",

    /* Anbieter-Karte (PK.renderVendorCard) */
    "global.vendorCard.details": "Details",
    "global.vendorCard.shopLink": "Zum Anbieter",
    "global.vendorCard.ruo": "RUO",
    "global.vendorCard.coaChecked": "{n} CoAs geprüft",
    "global.vendorCard.coaPublic": "CoA öffentlich",
    "global.vendorCard.datenbasis": "Score aus {n} von 5 Kriterien",
    "global.badge.ad": "Anzeige",

    /* Nicht ermittelbare Werte (data/SCHEMA.md v2): NIE als 0, NIE als
       schlechter Score, immer dieser neutrale Platzhalter. */
    "global.na": "nicht ermittelbar",
    "global.legal.notChecked": "nicht geprüft",
    "global.produkte.pending": "Produktdaten folgen",
    "global.flags.title": "Auffälligkeiten (Stand 06.09.2026)",

    /* Vendor-Brand-Logo (PK.renderLogo, Runde "Leben und Conversion" 06.09.):
       hier zusätzlich zu data/i18n/conversion.js definiert (Vertrag,
       data/SCHEMA.md), weil global.js auf JEDER Seite geladen wird -
       PK.renderLogo läuft aber auch auf Seiten ohne conversion.js
       (vergleich.html, anbieter/index.html, deals.html). Gleicher Wert,
       kein Konflikt beim Merge. */
    "global.brand.logoAlt": "Logo {name}",

    /* Tabellen (Scroll-Hinweis, PK.sortTable-Umgebung) */
    "global.table.scrollHint": "Wischen für mehr →",

    /* Copy-Button-Zustände (PK.copyCode) */
    "global.codeBox.copied": "Kopiert",
    "global.codeBox.error": "Fehler",

    /* Footer */
    "global.footer.metaDemo": "© Peptide Compass · Demo-Projekt",

    /* Enum: vendor.land (data/SCHEMA.md) */
    "global.enum.land.DE": "DE",
    "global.enum.land.AT": "AT",
    "global.enum.land.CH": "CH",
    "global.enum.land.EU": "EU",
    "global.enum.land.INT": "INT",

    /* Enum: peptide.kategorie (data/SCHEMA.md, 6 Werte) */
    "global.enum.kategorie.Regeneration": "Regeneration",
    "global.enum.kategorie.Stoffwechsel": "Stoffwechsel",
    "global.enum.kategorie.Wachstumshormon-Achse": "Wachstumshormon-Achse",
    "global.enum.kategorie.Haut & Kosmetik": "Haut & Kosmetik",
    "global.enum.kategorie.Kognition": "Kognition",
    "global.enum.kategorie.Sonstige": "Sonstige",

    /* Enum: peptide.studienlage (data/SCHEMA.md, 3 Werte) */
    "global.enum.studienlage.präklinisch": "präklinisch",
    "global.enum.studienlage.frühe klinische Studien": "frühe klinische Studien",
    "global.enum.studienlage.klinisch untersucht": "klinisch untersucht",

    /* Enum: batch.coaStatus (data/SCHEMA.md, 3 Werte) */
    "global.enum.coaStatus.verifiziert": "verifiziert",
    "global.enum.coaStatus.shop-eigen": "shop-eigen",
    "global.enum.coaStatus.fehlt": "fehlt",

    /* Enum: vendor.zahlung (data/SCHEMA.md v1, 4 Werte + v2-Ergänzungen aus
       der echten Faktenbasis, 06.09.) */
    "global.enum.zahlung.Karte": "Karte",
    "global.enum.zahlung.SEPA": "SEPA",
    "global.enum.zahlung.PayPal": "PayPal",
    "global.enum.zahlung.Krypto": "Krypto",
    "global.enum.zahlung.Überweisung": "Überweisung",
    "global.enum.zahlung.SEPA-Vorkasse": "SEPA-Vorkasse",
    "global.enum.zahlung.Vorkasse": "Vorkasse",
    "global.enum.zahlung.Zelle": "Zelle",
    "global.enum.zahlung.ACH": "ACH",
    "global.enum.zahlung.Apple Pay": "Apple Pay",
    "global.enum.zahlung.Cash App": "Cash App",
    "global.enum.zahlung.Venmo": "Venmo",

    /* Enum: vendor.versand.laender v2 - zusätzliche Versand-Regionen aus der
       echten Faktenbasis (eigene Werteliste, siehe data/SCHEMA.md v2), über
       denselben "land"-Enum-Namespace gelesen (PK.tEnum("land", x)) */
    "global.enum.land.US": "US",
    "global.enum.land.UK": "UK",
    "global.enum.land.CA": "CA",
    "global.enum.land.AU": "AU",
    "global.enum.land.NZ": "NZ",
    "global.enum.land.ASIA": "Asien"
  });

  i18n.merge("en", {
    "global.a11y.skipToContent": "Skip to content",

    "global.nav.anbieter": "Vendors",
    "global.nav.vergleich": "Compare",
    "global.nav.wirkstoffe": "Peptides",
    "global.nav.rechner": "Calculator",
    "global.nav.chargePruefen": "Check batch",
    "global.nav.deals": "Deals",
    "global.nav.anbieterFinden": "Find a vendor",
    "global.nav.menuOeffnen": "Open menu",

    "global.nav.methodik": "Methodology",
    "global.nav.affiliateHinweis": "Affiliate disclosure",
    "global.nav.impressum": "Legal notice",
    "global.nav.datenschutz": "Privacy",

    "global.langToggle.ariaLabel": "Choose language",

    "global.demoBanner.label": "Preview",
    "global.demoBanner.text": "Preview version: data as of Sep 6, 2026, provided without guarantee.",

    "global.vendorCard.details": "Details",
    "global.vendorCard.shopLink": "Visit vendor",
    "global.vendorCard.ruo": "RUO",
    "global.vendorCard.coaChecked": "{n} CoAs verified",
    "global.vendorCard.coaPublic": "Public CoA",
    "global.vendorCard.datenbasis": "Score from {n} of 5 criteria",
    "global.badge.ad": "Ad",

    "global.na": "not available",
    "global.legal.notChecked": "not checked",
    "global.produkte.pending": "Product data coming soon",
    "global.flags.title": "Notable items (as of Sep 6, 2026)",

    "global.brand.logoAlt": "{name} logo",

    "global.table.scrollHint": "Swipe for more →",

    "global.codeBox.copied": "Copied",
    "global.codeBox.error": "Error",

    "global.footer.metaDemo": "© Peptide Compass · Demo project",

    "global.enum.land.DE": "DE",
    "global.enum.land.AT": "AT",
    "global.enum.land.CH": "CH",
    "global.enum.land.EU": "EU",
    "global.enum.land.INT": "INT",

    "global.enum.kategorie.Regeneration": "Regeneration",
    "global.enum.kategorie.Stoffwechsel": "Metabolism",
    "global.enum.kategorie.Wachstumshormon-Achse": "Growth hormone axis",
    "global.enum.kategorie.Haut & Kosmetik": "Skin & cosmetic",
    "global.enum.kategorie.Kognition": "Cognition",
    "global.enum.kategorie.Sonstige": "Other",

    "global.enum.studienlage.präklinisch": "preclinical",
    "global.enum.studienlage.frühe klinische Studien": "early clinical studies",
    "global.enum.studienlage.klinisch untersucht": "clinically studied",

    "global.enum.coaStatus.verifiziert": "verified",
    "global.enum.coaStatus.shop-eigen": "vendor-supplied",
    "global.enum.coaStatus.fehlt": "missing",

    "global.enum.zahlung.Karte": "Card",
    "global.enum.zahlung.SEPA": "SEPA",
    "global.enum.zahlung.PayPal": "PayPal",
    "global.enum.zahlung.Krypto": "Crypto",
    "global.enum.zahlung.Überweisung": "Bank transfer",
    "global.enum.zahlung.SEPA-Vorkasse": "SEPA prepayment",
    "global.enum.zahlung.Vorkasse": "Prepayment",
    "global.enum.zahlung.Zelle": "Zelle",
    "global.enum.zahlung.ACH": "ACH",
    "global.enum.zahlung.Apple Pay": "Apple Pay",
    "global.enum.zahlung.Cash App": "Cash App",
    "global.enum.zahlung.Venmo": "Venmo",

    "global.enum.land.US": "US",
    "global.enum.land.UK": "UK",
    "global.enum.land.CA": "CA",
    "global.enum.land.AU": "AU",
    "global.enum.land.NZ": "NZ",
    "global.enum.land.ASIA": "Asia"
  });

})(window.PK.i18n);
