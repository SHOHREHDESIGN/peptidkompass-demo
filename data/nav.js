/* ============================================================================
   PEPTIDKOMPASS · data/nav.js (GENERIERT, siehe tools/build_nav.py)
   ============================================================================
   Schlanker Datensatz nur fuer die Nav-Dropdowns (PK.initNavDropdowns(),
   assets/js/site.js): 31 Wirkstoffe (slug/name/kategorie) aus
   data/peptides_draft/*.json, Anbieter fuer die Nav (Partner zuerst, dann
   nach Score; slug/name/gesamt/partner)
   aus data/vendors.js. NICHT von Hand editieren - neu erzeugen mit:
     python3 tools/build_nav.py
   Einbindung: nach data/batches.js, vor data/i18n/global.js (siehe
   assets/css/README.md, Abschnitt i18n Script-Reihenfolge).
   ============================================================================ */
window.PK = window.PK || {};
window.PK.nav = {
  "peptides": [
    {
      "slug": "bpc-157",
      "name": "BPC-157",
      "kategorie": "Regeneration"
    },
    {
      "slug": "pentadeca-arginate",
      "name": "Pentadeca Arginat (PDA)",
      "kategorie": "Regeneration"
    },
    {
      "slug": "tb-500",
      "name": "TB-500",
      "kategorie": "Regeneration"
    },
    {
      "slug": "5-amino-1mq",
      "name": "5-Amino-1MQ",
      "kategorie": "Stoffwechsel"
    },
    {
      "slug": "aod-9604",
      "name": "AOD-9604",
      "kategorie": "Stoffwechsel"
    },
    {
      "slug": "cagrilintid",
      "name": "Cagrilintid",
      "kategorie": "Stoffwechsel"
    },
    {
      "slug": "mots-c",
      "name": "MOTS-c",
      "kategorie": "Stoffwechsel"
    },
    {
      "slug": "retatrutid",
      "name": "Retatrutid",
      "kategorie": "Stoffwechsel"
    },
    {
      "slug": "semaglutid",
      "name": "Semaglutid",
      "kategorie": "Stoffwechsel"
    },
    {
      "slug": "survodutid",
      "name": "Survodutid",
      "kategorie": "Stoffwechsel"
    },
    {
      "slug": "tirzepatid",
      "name": "Tirzepatid",
      "kategorie": "Stoffwechsel"
    },
    {
      "slug": "cjc-1295",
      "name": "CJC-1295",
      "kategorie": "Wachstumshormon-Achse"
    },
    {
      "slug": "hexarelin",
      "name": "Hexarelin",
      "kategorie": "Wachstumshormon-Achse"
    },
    {
      "slug": "igf-1-lr3",
      "name": "IGF-1 LR3",
      "kategorie": "Wachstumshormon-Achse"
    },
    {
      "slug": "ipamorelin",
      "name": "Ipamorelin",
      "kategorie": "Wachstumshormon-Achse"
    },
    {
      "slug": "sermorelin",
      "name": "Sermorelin",
      "kategorie": "Wachstumshormon-Achse"
    },
    {
      "slug": "tesamorelin",
      "name": "Tesamorelin",
      "kategorie": "Wachstumshormon-Achse"
    },
    {
      "slug": "ghk-cu",
      "name": "GHK-Cu",
      "kategorie": "Haut & Kosmetik"
    },
    {
      "slug": "dihexa",
      "name": "Dihexa",
      "kategorie": "Kognition"
    },
    {
      "slug": "dsip",
      "name": "DSIP",
      "kategorie": "Kognition"
    },
    {
      "slug": "selank",
      "name": "Selank",
      "kategorie": "Kognition"
    },
    {
      "slug": "semax",
      "name": "Semax",
      "kategorie": "Kognition"
    },
    {
      "slug": "kpv",
      "name": "KPV",
      "kategorie": "Immunsystem"
    },
    {
      "slug": "ll-37",
      "name": "LL-37",
      "kategorie": "Immunsystem"
    },
    {
      "slug": "thymosin-alpha-1",
      "name": "Thymosin Alpha 1",
      "kategorie": "Immunsystem"
    },
    {
      "slug": "epitalon",
      "name": "Epitalon",
      "kategorie": "Sonstige"
    },
    {
      "slug": "kisspeptin",
      "name": "Kisspeptin-10",
      "kategorie": "Sonstige"
    },
    {
      "slug": "melanotan-2",
      "name": "Melanotan II",
      "kategorie": "Sonstige"
    },
    {
      "slug": "oxytocin",
      "name": "Oxytocin",
      "kategorie": "Sonstige"
    },
    {
      "slug": "pt-141",
      "name": "PT-141 (Bremelanotide)",
      "kategorie": "Sonstige"
    },
    {
      "slug": "ss-31",
      "name": "SS-31 (Elamipretid)",
      "kategorie": "Sonstige"
    }
  ],
  "vendors": [
    {
      "slug": "peptidwerk",
      "name": "Peptidwerk",
      "gesamt": 100,
      "partner": true
    },
    {
      "slug": "bio-boostx",
      "name": "Bio BoostX",
      "gesamt": 77,
      "partner": true
    },
    {
      "slug": "particle-peptides",
      "name": "Particle Peptides",
      "gesamt": 94,
      "partner": false
    },
    {
      "slug": "europa-peptide",
      "name": "Europa-Peptide",
      "gesamt": 93,
      "partner": false
    },
    {
      "slug": "biocollex",
      "name": "BioCollex",
      "gesamt": 92,
      "partner": false
    },
    {
      "slug": "elyvera",
      "name": "ELYVERA (Europeptides)",
      "gesamt": 83,
      "partner": false
    }
  ]
};
