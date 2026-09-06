window.PK = window.PK || {};

window.PK.vendors = [
  {
    slug: "nordlicht-research",
    name: "Nordlicht Research",
    land: "DE",
    gegruendet: 2019,
    score: { labor: 95, recht: 92, lieferung: 88, sortiment: 85, preis: 78 },
    gesamt: 88,
    coa: { anzahl: 42, extern: true, letztesDatum: "2026-08-15", labor: "LabCheck Nord GmbH (DEMO)" },
    reinheit: 99.4,
    rechtsrahmen: { altersgate: true, ruo: true, impressum: true, heilversprechen: false },
    versand: { tageMin: 2, tageMax: 4, laender: ["DE", "AT", "CH", "EU"], kostenlosAb: 100 },
    zahlung: ["Karte", "SEPA", "PayPal"],
    rabatt: { code: "NORD10", prozent: 10 },
    produkte: [
      { peptideSlug: "bpc-157", mg: 5, preisEur: 34.90 },
      { peptideSlug: "tb-500", mg: 5, preisEur: 38.90 },
      { peptideSlug: "cjc-1295", mg: 5, preisEur: 44.90 },
      { peptideSlug: "ghk-cu", mg: 50, preisEur: 29.90 },
      { peptideSlug: "epitalon", mg: 10, preisEur: 32.90 }
    ],
    preisProMg: 5.53,
    affiliateUrl: "#DEMO",
    kurz: "Norddeutscher Anbieter mit eigenem Prüflabor und schnellem Versand.",
    kurz_en: "A northern German vendor with its own testing lab and fast shipping.",
    staerken: [
      "Externe Laborprüfung für fast alle Chargen",
      "Schneller Versand innerhalb Europas",
      "Breites Sortiment an Forschungspeptiden"
    ],
    staerken_en: [
      "Third-party lab testing for nearly every batch",
      "Fast shipping within Europe",
      "Wide range of research peptides"
    ],
    schwaechen: [
      "Kein Versand außerhalb Europas",
      "Höherer Preis pro mg als der Durchschnitt"
    ],
    schwaechen_en: [
      "No shipping outside Europe",
      "Higher price per mg than average"
    ],
    demo: true
  },
  {
    slug: "helix-labs-demo",
    name: "Helix Labs Demo",
    land: "DE",
    gegruendet: 2021,
    score: { labor: 90, recht: 85, lieferung: 80, sortiment: 90, preis: 70 },
    gesamt: 83,
    coa: { anzahl: 35, extern: true, letztesDatum: "2026-07-28", labor: "Helix Analytik Labor (DEMO)" },
    reinheit: 99.1,
    rechtsrahmen: { altersgate: true, ruo: true, impressum: true, heilversprechen: false },
    versand: { tageMin: 3, tageMax: 5, laender: ["DE", "AT", "CH", "EU", "INT"], kostenlosAb: 80 },
    zahlung: ["Karte", "SEPA", "PayPal", "Krypto"],
    rabatt: { code: "HELIX15", prozent: 15 },
    produkte: [
      { peptideSlug: "bpc-157", mg: 10, preisEur: 39.90 },
      { peptideSlug: "tb-500", mg: 10, preisEur: 42.90 },
      { peptideSlug: "semaglutid", mg: 5, preisEur: 89.90 },
      { peptideSlug: "cjc-1295", mg: 10, preisEur: 54.90 },
      { peptideSlug: "ghk-cu", mg: 100, preisEur: 44.90 },
      { peptideSlug: "epitalon", mg: 20, preisEur: 49.90 }
    ],
    preisProMg: 5.78,
    affiliateUrl: "#DEMO",
    kurz: "Breitestes Sortiment im Vergleich, inklusive Semaglutid-Linie.",
    kurz_en: "The widest product range in this comparison, including a semaglutide line.",
    staerken: [
      "Größtes Sortiment aller geprüften Anbieter",
      "Kryptozahlung möglich",
      "Internationaler Versand"
    ],
    staerken_en: [
      "Largest range among all vendors reviewed",
      "Crypto payment accepted",
      "International shipping"
    ],
    schwaechen: [
      "Etwas längere Lieferzeit",
      "Sortiment wächst schneller als die Laborkapazität"
    ],
    schwaechen_en: [
      "Slightly longer delivery time",
      "Catalog growing faster than lab testing capacity"
    ],
    demo: true
  },
  {
    slug: "aurora-peptide-supply",
    name: "Aurora Peptide Supply",
    land: "AT",
    gegruendet: 2020,
    score: { labor: 80, recht: 75, lieferung: 70, sortiment: 65, preis: 60 },
    gesamt: 71,
    coa: { anzahl: 20, extern: true, letztesDatum: "2026-06-10", labor: "Aurora QC Labor (DEMO)" },
    reinheit: 98.6,
    rechtsrahmen: { altersgate: true, ruo: true, impressum: true, heilversprechen: false },
    versand: { tageMin: 4, tageMax: 7, laender: ["AT", "DE", "CH"], kostenlosAb: 120 },
    zahlung: ["Karte", "SEPA"],
    rabatt: null,
    produkte: [
      { peptideSlug: "bpc-157", mg: 5, preisEur: 36.90 },
      { peptideSlug: "tb-500", mg: 5, preisEur: 39.90 },
      { peptideSlug: "ghk-cu", mg: 50, preisEur: 31.90 },
      { peptideSlug: "epitalon", mg: 10, preisEur: 34.90 }
    ],
    preisProMg: 4.87,
    affiliateUrl: "#DEMO",
    kurz: "Kleiner österreichischer Anbieter mit Fokus auf Regenerationspeptide.",
    kurz_en: "A small Austrian vendor focused on regeneration peptides.",
    staerken: [
      "Übersichtliches, fokussiertes Sortiment",
      "Verifizierte CoAs für alle Chargen",
      "Klare Rechtstexte auf der Seite"
    ],
    staerken_en: [
      "Clear, focused product range",
      "Verified CoAs for every batch",
      "Clear legal disclosures on the site"
    ],
    schwaechen: [
      "Längere Lieferzeit als der Durchschnitt",
      "Kein Rabattcode aktuell verfügbar"
    ],
    schwaechen_en: [
      "Longer delivery time than average",
      "No discount code currently available"
    ],
    demo: true
  },
  {
    slug: "quantum-bio-labs",
    name: "Quantum Bio Labs",
    land: "CH",
    gegruendet: 2022,
    score: { labor: 70, recht: 68, lieferung: 60, sortiment: 72, preis: 55 },
    gesamt: 65,
    coa: { anzahl: 15, extern: false, letztesDatum: "2026-05-22", labor: "DEMO-Labor" },
    reinheit: 97.9,
    rechtsrahmen: { altersgate: true, ruo: true, impressum: true, heilversprechen: true },
    versand: { tageMin: 5, tageMax: 9, laender: ["CH", "DE", "AT", "EU"], kostenlosAb: null },
    zahlung: ["Karte", "PayPal", "Krypto"],
    rabatt: { code: "QUANTUM20", prozent: 20 },
    produkte: [
      { peptideSlug: "bpc-157", mg: 5, preisEur: 29.90 },
      { peptideSlug: "tb-500", mg: 5, preisEur: 32.90 },
      { peptideSlug: "semaglutid", mg: 5, preisEur: 74.90 },
      { peptideSlug: "cjc-1295", mg: 5, preisEur: 37.90 },
      { peptideSlug: "ghk-cu", mg: 50, preisEur: 24.90 }
    ],
    preisProMg: 7.12,
    affiliateUrl: "#DEMO",
    kurz: "Schweizer Anbieter mit auffällig werblicher Produktbeschreibung.",
    kurz_en: "A Swiss vendor with noticeably promotional product descriptions.",
    staerken: [
      "Günstige Einstiegspreise",
      "Breites Zahlungsangebot inklusive Krypto",
      "Schnelle Reaktionszeit im Support"
    ],
    staerken_en: [
      "Low entry prices",
      "Wide range of payment options, including crypto",
      "Fast support response time"
    ],
    schwaechen: [
      "Werbeaussagen im Shop grenzwertig formuliert",
      "CoAs stammen ausschließlich aus shop-eigener Prüfung"
    ],
    schwaechen_en: [
      "Some marketing claims on the site push close to the line",
      "CoAs come only from in-house testing"
    ],
    demo: true
  },
  {
    slug: "vertex-research-chemicals",
    name: "Vertex Research Chemicals",
    land: "EU",
    gegruendet: 2023,
    score: { labor: 60, recht: 58, lieferung: 55, sortiment: 60, preis: 62 },
    gesamt: 59,
    coa: { anzahl: 10, extern: false, letztesDatum: "2026-04-30", labor: "DEMO-Labor" },
    reinheit: 97.2,
    rechtsrahmen: { altersgate: true, ruo: true, impressum: true, heilversprechen: true },
    versand: { tageMin: 5, tageMax: 10, laender: ["EU"], kostenlosAb: null },
    zahlung: ["Karte", "PayPal"],
    rabatt: null,
    produkte: [
      { peptideSlug: "bpc-157", mg: 5, preisEur: 27.90 },
      { peptideSlug: "tb-500", mg: 5, preisEur: 30.90 },
      { peptideSlug: "cjc-1295", mg: 5, preisEur: 35.90 },
      { peptideSlug: "epitalon", mg: 10, preisEur: 28.90 }
    ],
    preisProMg: 5.45,
    affiliateUrl: "#DEMO",
    kurz: "Junger EU-Anbieter mit noch dünner Prüfhistorie.",
    kurz_en: "A young EU vendor with a still-thin testing history.",
    staerken: [
      "Niedrige Einstiegspreise",
      "Einfacher Bestellprozess",
      "Übersichtlicher Shop-Aufbau"
    ],
    staerken_en: [
      "Low entry prices",
      "Simple ordering process",
      "Clean, easy-to-navigate site"
    ],
    schwaechen: [
      "Kein externes Labor bislang eingebunden",
      "Werbeaussagen teils grenzwertig formuliert"
    ],
    schwaechen_en: [
      "No third-party lab involved so far",
      "Some marketing claims push close to the line"
    ],
    demo: true
  },
  {
    slug: "blauwal-peptides",
    name: "Blauwal Peptides",
    land: "DE",
    gegruendet: 2018,
    score: { labor: 85, recht: 80, lieferung: 75, sortiment: 70, preis: 65 },
    gesamt: 76,
    coa: { anzahl: 28, extern: true, letztesDatum: "2026-08-02", labor: "Blauwal Prüfinstitut (DEMO)" },
    reinheit: 98.9,
    rechtsrahmen: { altersgate: true, ruo: true, impressum: true, heilversprechen: false },
    versand: { tageMin: 3, tageMax: 6, laender: ["DE", "AT", "CH", "EU"], kostenlosAb: 90 },
    zahlung: ["Karte", "SEPA", "PayPal"],
    rabatt: { code: "BLAU12", prozent: 12 },
    produkte: [
      { peptideSlug: "bpc-157", mg: 5, preisEur: 33.90 },
      { peptideSlug: "tb-500", mg: 5, preisEur: 36.90 },
      { peptideSlug: "semaglutid", mg: 5, preisEur: 82.90 },
      { peptideSlug: "ghk-cu", mg: 50, preisEur: 27.90 },
      { peptideSlug: "epitalon", mg: 10, preisEur: 30.90 }
    ],
    preisProMg: 6.88,
    affiliateUrl: "#DEMO",
    kurz: "Etablierter deutscher Anbieter mit langer Marktpräsenz.",
    kurz_en: "An established German vendor with a long track record.",
    staerken: [
      "Seit über 7 Jahren am Markt",
      "Regelmäßige externe Laborprüfung",
      "Solide Rechtstexte und Altersgate"
    ],
    staerken_en: [
      "On the market for more than 7 years",
      "Regular third-party lab testing",
      "Solid legal disclosures and age verification"
    ],
    schwaechen: [
      "Sortiment kleiner als bei jüngeren Anbietern",
      "Keine Kryptozahlung möglich"
    ],
    schwaechen_en: [
      "Smaller range than newer vendors",
      "No crypto payment option"
    ],
    demo: true
  },
  {
    slug: "terra-nova-labs",
    name: "Terra Nova Labs",
    land: "INT",
    gegruendet: 2017,
    score: { labor: 92, recht: 95, lieferung: 90, sortiment: 80, preis: 85 },
    gesamt: 89,
    coa: { anzahl: 50, extern: true, letztesDatum: "2026-08-30", labor: "Terra Nova Analytics (DEMO)" },
    reinheit: 99.6,
    rechtsrahmen: { altersgate: true, ruo: true, impressum: true, heilversprechen: false },
    versand: { tageMin: 2, tageMax: 5, laender: ["DE", "AT", "CH", "EU", "INT"], kostenlosAb: 60 },
    zahlung: ["Karte", "SEPA", "PayPal", "Krypto"],
    rabatt: { code: "TERRA25", prozent: 25 },
    produkte: [
      { peptideSlug: "bpc-157", mg: 5, preisEur: 31.90 },
      { peptideSlug: "tb-500", mg: 5, preisEur: 34.90 },
      { peptideSlug: "semaglutid", mg: 5, preisEur: 79.90 },
      { peptideSlug: "cjc-1295", mg: 5, preisEur: 39.90 },
      { peptideSlug: "ghk-cu", mg: 50, preisEur: 26.90 },
      { peptideSlug: "epitalon", mg: 10, preisEur: 29.90 }
    ],
    preisProMg: 6.81,
    affiliateUrl: "#DEMO",
    kurz: "International aufgestellter Anbieter mit dem größten CoA-Bestand.",
    kurz_en: "An internationally active vendor with the largest CoA archive.",
    staerken: [
      "Meiste extern geprüfte Chargen im Vergleich",
      "Weltweiter Versand",
      "Höchster Score aller 8 Anbieter"
    ],
    staerken_en: [
      "Most third-party tested batches in this comparison",
      "Worldwide shipping",
      "Highest score among all 8 vendors"
    ],
    schwaechen: [
      "Kein separates Bulk-Rabatt-Programm",
      "Versand außerhalb Europas dauert spürbar länger"
    ],
    schwaechen_en: [
      "No separate bulk discount program",
      "Shipping outside Europe takes noticeably longer"
    ],
    demo: true
  },
  {
    slug: "kristall-biolab",
    name: "Kristall Biolab",
    land: "CH",
    gegruendet: 2020,
    score: { labor: 75, recht: 70, lieferung: 65, sortiment: 68, preis: 58 },
    gesamt: 68,
    coa: { anzahl: 18, extern: true, letztesDatum: "2026-05-15", labor: "Kristall Diagnostik (DEMO)" },
    reinheit: 98.3,
    rechtsrahmen: { altersgate: true, ruo: true, impressum: true, heilversprechen: false },
    versand: { tageMin: 4, tageMax: 8, laender: ["CH", "DE", "AT"], kostenlosAb: 100 },
    zahlung: ["Karte", "SEPA"],
    rabatt: null,
    produkte: [
      { peptideSlug: "bpc-157", mg: 5, preisEur: 35.90 },
      { peptideSlug: "tb-500", mg: 5, preisEur: 38.90 },
      { peptideSlug: "cjc-1295", mg: 5, preisEur: 42.90 },
      { peptideSlug: "epitalon", mg: 10, preisEur: 33.90 }
    ],
    preisProMg: 6.73,
    affiliateUrl: "#DEMO",
    kurz: "Schweizer Nischenanbieter mit solider, aber kleiner Auswahl.",
    kurz_en: "A Swiss niche vendor with a solid but small selection.",
    staerken: [
      "Vollständige Rechtstexte und Altersgate",
      "Externe Prüfung für alle Chargen",
      "Klare, schnörkellose Shop-Struktur"
    ],
    staerken_en: [
      "Complete legal disclosures and age verification",
      "Third-party testing for every batch",
      "Clean, no-frills site structure"
    ],
    schwaechen: [
      "Kleinstes Sortiment im Vergleich",
      "Kein Rabattcode aktuell"
    ],
    schwaechen_en: [
      "Smallest product range in this comparison",
      "No discount code currently"
    ],
    demo: true
  }
];
