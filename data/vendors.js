/* ============================================================================
   PEPTIDKOMPASS · data/vendors.js (v2.3, Deep-Research 15.09.2026)
   ============================================================================
   24 echte Anbieter (data/SCHEMA.md v2 Erweiterung + v2.3 "Staerken UND
   Schwaechen"). Score-Korrekturen: _research/score_korrekturen_2026-09-15.md.
   Herkunft recherche/status: _research/anbieter_deep_research/<slug>.json.
   preisProMg: Median aus data/products.js (tools/build_products.py).
   ============================================================================ */
window.PK = window.PK || {};
window.PK.vendors = [
  {
    "slug": "peptidwerk",
    "name": "Peptidwerk",
    "website": "https://www.pepwerk.com/",
    "rechtstraeger": null,
    "sitz": "Deutschland (laut Shop)",
    "land": "DE",
    "gegruendet": null,
    "brand": {
      "farbe": "#6C3FA6",
      "logo": "assets/img/logos/peptidwerk.png",
      "logoMono": "assets/img/logos/peptidwerk_mono.png",
      "logoRatio": 5.03,
      "logoFallback": "assets/img/logos/_wordmarks/peptidwerk.svg",
      "logoQuelle": "https://pepwerk.com/wp-content/uploads/2026/09/peptidwerk-logo-01-balanced-transparent-1.png"
    },
    "score": {
      "labor": 100,
      "recht": 100,
      "lieferung": 98,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 100,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": true,
      "labor": "Janoshik Analytical (HPLC/LCMS)",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": null,
      "ruo": true,
      "impressum": null,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": 1,
      "tageMax": 2,
      "laender": [
        "EU"
      ]
    },
    "zahlung": [
      "Überweisung"
    ],
    "affiliate": false,
    "affiliateProgrammUrl": null,
    "provision": null,
    "partner": true,
    "partnerSeit": "2026-09-10",
    "rabatt": {
      "code": "peptidecompass10",
      "prozent": null,
      "hinweis": "Code beim Checkout eingeben",
      "hinweis_en": "Enter code at checkout"
    },
    "produkte": [],
    "preisProMg": 3.75,
    "affiliateUrl": "https://www.pepwerk.com/",
    "kurz": "Sitz in Deutschland (laut Shop). Versand laut Website nach DACH. CoAs öffentlich einsehbar, extern geprüft.",
    "kurz_en": "Registered in Deutschland (laut Shop). Ships to Germany/Austria/Switzerland according to the website. CoAs are publicly available and third-party tested.",
    "staerken": [
      "Externe Labortests (Janoshik Analytical)",
      "RUO-Kennzeichnung vorhanden",
      "Schneller Versand nach DACH laut Website"
    ],
    "staerken_en": [
      "Third-party lab testing (Janoshik Analytical)",
      "RUO labeling in place",
      "Fast shipping to Germany/Austria/Switzerland according to the website"
    ],
    "schwaechen": [
      "Rechtsträger nicht ermittelbar (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "Legal entity not ascertainable (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "nur B2B laut Shop",
      "nur Überweisung"
    ],
    "roteFlaggen_en": [
      "B2B only according to the shop",
      "bank transfer only"
    ],
    "quelle": "pepwerk.com, chemverify Katalog, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Chargenbezogene CoA mit HPLC-UV/MS-Reinheitswert UND Endotoxinwert direkt auf der Produktseite, jeweils mit externem Verifizierungslink zum Prüflabor Janoshik Analytical (z.B. Charge PW-BPC10-0626, 99,719% Reinheit, 1,645 EU/Vial Endotoxin).",
          "text_en": "Batch-specific CoA with HPLC-UV/MS purity value AND endotoxin value directly on the product page, each with an external verification link to the testing lab Janoshik Analytical (e.g. batch PW-BPC10-0626, 99.719% purity, 1.645 EU/vial endotoxin).",
          "quelle": "https://pepwerk.com/produkt/bpc-157-10mg/",
          "datum": "2026-09-15"
        },
        {
          "text": "Gesamte Website-Struktur ist auf 'chargenbezogene Analysedokumentation' ausgerichtet: eigene CoA-Bibliothek, systematischer 4-Schritte-Ablauf (Auswahl → Externe Analyse → Zuordnung → Dokumentation), Original-Laborberichte öffentlich einsehbar statt nur Prozentwert-Behauptung.",
          "text_en": "The entire website structure is built around 'batch-specific analysis documentation': its own CoA library, a systematic 4-step process (selection → external analysis → assignment → documentation), original lab reports publicly viewable instead of just a claimed purity percentage.",
          "quelle": "https://pepwerk.com/ueber-uns/",
          "datum": "2026-09-15"
        },
        {
          "text": "Stichprobe von 9 Kernprodukten (BPC-157, TB-500, GHK-Cu 50/100mg, Ipamorelin, Melanotan-2, Tesamorelin, MOTS-C 10/40mg, Epithalon 10/50mg, CJC-1295+Ipamorelin-Kombi) zeigt durchgängig veröffentlichte CoA mit Reinheitswerten zwischen 97,63% und 99,96%.",
          "text_en": "A sample of 9 core products (BPC-157, TB-500, GHK-Cu 50/100mg, Ipamorelin, Melanotan-2, Tesamorelin, MOTS-C 10/40mg, Epithalon 10/50mg, CJC-1295+Ipamorelin combo) consistently shows published CoAs with purity values between 97.63% and 99.96%.",
          "quelle": "https://pepwerk.com (Produktseiten-Stichprobe)",
          "datum": "2026-09-15"
        },
        {
          "text": "Versand aus Deutschland: bei Zahlungseingang werktags bis 15 Uhr Versand am selben Werktag; Zustellung DE 1-2 Werktage, EU 2-5 Werktage; Sendungsnummer per E-Mail mit Live-Tracking.",
          "text_en": "Ships from Germany: orders paid by 3pm on a business day ship the same day; delivery within Germany takes 1-2 business days, within the EU 2-5 business days; tracking number sent by email with live tracking.",
          "quelle": "https://pepwerk.com (FAQ 'Wie lange dauert der Versand?')",
          "datum": "2026-09-15"
        },
        {
          "text": "Mengenrabatt-Staffel im Shop: 3 Stück -10%, 6 Stück -15%, 12 Stück -20% (am Beispiel BPC-157 geprüft).",
          "text_en": "Tiered volume discount in the shop: 3 units -10%, 6 units -15%, 12 units -20% (verified using BPC-157 as an example).",
          "quelle": "https://pepwerk.com/produkt/bpc-157-10mg/",
          "datum": "2026-09-15"
        },
        {
          "text": "ChemVerify (Drittanbieter-Vergleichsportal) führt Peptidwerk als 'Verified Partner' mit Badge 'COA Verified – Tested by Janoshik Analytical'. Achtung: Die Beschreibungs-Texte auf der ChemVerify-Seite sind laut deren eigenem Disclaimer 'Vendor statements – not independent test results', also vom Anbieter selbst geliefert, nicht unabhängig geprüft.",
          "text_en": "ChemVerify (a third-party comparison portal) lists Peptidwerk as a 'Verified Partner' with the badge 'COA Verified – Tested by Janoshik Analytical'. Note: per ChemVerify's own disclaimer, the description texts on their page are 'vendor statements – not independent test results', meaning they are supplied by the vendor itself and not independently verified.",
          "quelle": "https://www.chemverify.com/vendor/pepwerk",
          "datum": "2026-09-15"
        },
        {
          "text": "Vollständiges, prüfbares Impressum vorhanden: Heinrich Maier, handelnd als Peptidwerk, Äußere Münchner Straße 4, 85221 Dachau, USt-IdNr. DE459044008, E-Mail support@pepwerk.com.",
          "text_en": "Complete, verifiable legal notice (Impressum) available: Heinrich Maier, trading as Peptidwerk, Äußere Münchner Straße 4, 85221 Dachau, VAT ID DE459044008, email support@pepwerk.com.",
          "quelle": "https://pepwerk.com/impressum/",
          "datum": "2026-09-15"
        },
        {
          "text": "Community-Meinung (auf pepwerk.com selbst eingeblendet, 9 Bewertungen, 5,0/5): durchgängig positive Kundenstimmen zu Lieferzeit ('nach 2 Tagen da'), Verpackung und Service. Nicht extern/unabhängig verifizierbar, da auf eigener Domain gehostet.",
          "text_en": "Community opinion (displayed on pepwerk.com itself, 9 reviews, 5.0/5): consistently positive customer feedback on delivery time ('arrived after 2 days'), packaging and service. Not externally/independently verifiable, since it is hosted on the vendor's own domain.",
          "quelle": "https://pepwerk.com",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Aktuell nur eine Zahlungsart: Banküberweisung. Zahlungsdaten werden erst nach Bestellabschluss per E-Mail versendet, nicht im Checkout. Laut FAQ sind 'weitere Zahlungsarten in Vorbereitung', aktuell also noch nicht verfügbar.",
          "text_en": "Currently only one payment method: bank transfer. Payment details are sent by email only after the order is completed, not shown at checkout. According to the FAQ, 'further payment methods are in preparation', so none are currently available.",
          "quelle": "https://pepwerk.com (FAQ 'Welche Zahlungsarten akzeptiert ihr?')",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Kein Trustpilot-Profil auffindbar: trustpilot.com/review/pepwerk.com liefert eine 404-Fehlerseite ('Whoops! The page you're looking for could not be found').",
          "text_en": "No Trustpilot profile found: trustpilot.com/review/pepwerk.com returns a 404 error page ('Whoops! The page you're looking for could not be found').",
          "quelle": "https://www.trustpilot.com/review/pepwerk.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "ScamAdviser Trust Score nur 24 von 100 (Label 'Likely Safe', aber niedriger Zahlenwert). Negative Signale laut ScamAdviser: Domain-Inhaber nutzt WHOIS-Privacy-Dienst (Identität verschleiert), niedriger Tranco-Rank (wenig Besucherverkehr), Domain 'sehr jung'. Positiv vermerkt: gültiges SSL-Zertifikat, laut DNSFilter sicher.",
          "text_en": "ScamAdviser Trust Score of only 24 out of 100 (labeled 'Likely Safe', but a low numeric score). Negative signals per ScamAdviser: the domain owner uses a WHOIS privacy service (identity concealed), a low Tranco rank (little visitor traffic), and a 'very young' domain. Noted positively: valid SSL certificate, listed as safe by DNSFilter.",
          "quelle": "https://www.scamadviser.com/check-website/pepwerk.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Rechtsform ist ein Einzelunternehmen (Heinrich Maier, 'handelnd als Peptidwerk'), keine GmbH/haftungsbeschränkte Gesellschaft. Zusätzlich laut Impressum ausdrücklich: 'Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'",
          "text_en": "The legal form is a sole proprietorship (Heinrich Maier, 'trading as Peptidwerk'), not a GmbH/limited-liability company. The legal notice also explicitly states: 'We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.'",
          "quelle": "https://pepwerk.com/impressum/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Semaglutid, Tirzepatid und Retatrutid sind unter diesen Namen im gesamten Shop-Katalog (34 Produkte gesichtet) nicht auffindbar. Es gibt ein Produkt 'Triple G' (Kategorie 'GLP-1-Analoga', Slug 'tri-tir'), das bei mehreren anderen Anbietern (tirzepatyd.eu, tirzepatyd.store, peptide-culture.com laut WebSearch) als Handelsname für Retatrutid verwendet wird. Peptidwerk selbst nennt auf der Produktseite jedoch nirgends den Wirkstoffnamen 'Retatrutid', nur Chargennummer und Reinheitswert. Diese Zuordnung ist daher NICHT bestätigt und wurde nicht in die Preistabelle übernommen.",
          "text_en": "Semaglutide, Tirzepatide and Retatrutide cannot be found under these names anywhere in the shop catalog (34 products checked). There is a product 'Triple G' (category 'GLP-1 analogs', slug 'tri-tir') that several other vendors (tirzepatyd.eu, tirzepatyd.store, peptide-culture.com per WebSearch) use as a trade name for Retatrutide. Peptidwerk itself, however, never names the active ingredient 'Retatrutide' on the product page, only a batch number and purity value. This mapping is therefore NOT confirmed and was not included in the price table.",
          "quelle": "https://pepwerk.com/produkt/tri-tir/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "CJC-1295 ist im Sortiment nur als Kombiprodukt 'CJC-1295 no DAC + Ipamorelin 5mg+5mg' erhältlich, kein reines CJC-1295-Einzelprodukt gefunden.",
          "text_en": "CJC-1295 is only available in the range as a combination product 'CJC-1295 no DAC + Ipamorelin 5mg+5mg'; no standalone CJC-1295 single product was found.",
          "quelle": "https://pepwerk.com/produkt/cjc-1295-ohne-dac-5-mg-ipamorelin-5-mg/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Trotz mehrfacher gezielter Suche (verschiedene Formulierungen, r/Peptides, r/PeptidesEU, allgemeine Reddit-Suche) keine einzige Reddit-Diskussion zu 'Peptidwerk' oder 'pepwerk' gefunden. Auch auf extrem-bodybuilding.de-Foren-Threads zu Peptid-Anbietern taucht der Name nicht auf.",
          "text_en": "Despite multiple targeted searches (different phrasings, r/Peptides, r/PeptidesEU, general Reddit search), not a single Reddit discussion about 'Peptidwerk' or 'pepwerk' was found. The name also does not appear in extrem-bodybuilding.de forum threads about peptide vendors.",
          "quelle": "WebSearch (mehrere Abfragen, u.a. site:reddit.com pepwerk OR \"Peptidwerk\")",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "peptidcheck24.de war in dieser Session nicht erreichbar (Navigation vom Browser-Tool verweigert), daher konnte die dortige Anbieter-Bewertung zu Peptidwerk nicht geprüft werden. Offener Prüfpunkt, nicht geraten.",
          "text_en": "peptidcheck24.de was not reachable in this session (navigation refused by the browser tool), so the vendor rating for Peptidwerk on that site could not be checked. This remains an open item to verify, not a guess.",
          "quelle": "https://peptidcheck24.de/anbieter/peptidwerk/ (nicht erreichbar)",
          "datum": "2026-09-15",
          "art": "belegt"
        }
      ],
      "aenderungen": [
        {
          "text": "Website zeigt jetzt ein vollständig ausgebautes 'Chargenbezogene Analysedokumentation'-Konzept mit eigener CoA-Bibliothek: jede geprüfte Produktseite trägt Charge-ID, HPLC-Reinheitswert, bei mehreren Produkten zusätzlich Endotoxinwert, plus direktem Verifizierungslink zu Janoshik. Ob dieses System seit der letzten Recherche (06.09.2026) neu eingeführt wurde oder nur jetzt ausführlicher dokumentiert ist, bleibt ungeprüft. Die Tiefe der Darstellung geht aber über die zuvor erfasste knappe Angabe 'coa_labor: Janoshik' hinaus.",
          "text_en": "The website now shows a fully built-out 'batch-specific analysis documentation' concept with its own CoA library: every checked product page carries a batch ID, HPLC purity value, and for several products also an endotoxin value, plus a direct verification link to Janoshik. Whether this system was newly introduced since the last research round (06.09.2026) or is simply documented in more detail now remains unverified. Either way, the depth of presentation goes beyond the previously recorded brief note 'coa_labor: Janoshik'.",
          "quelle": "https://pepwerk.com/ueber-uns/",
          "datum": "2026-09-15"
        },
        {
          "text": "Rechtsträger ist jetzt eindeutig im Impressum ausgewiesen (Heinrich Maier, Einzelunternehmen): in der Vorrecherche vom 06.09.2026 war dieses Feld noch 'null'.",
          "text_en": "The legal entity is now clearly stated in the legal notice (Heinrich Maier, sole proprietorship): in the prior research round of 06.09.2026 this field was still 'null'.",
          "quelle": "https://pepwerk.com/impressum/",
          "datum": "2026-09-15"
        },
        {
          "text": "FAQ nennt explizit ein gesetzliches Verbraucher-Widerrufsrecht von 14 Tagen für Verbraucher. Das widerspricht der in der Vorrecherche vom 06.09.2026 vermerkten roten Flagge 'nur B2B laut Shop'. Entweder hat sich das Geschäftsmodell zu B2C geöffnet, oder die frühere Einschätzung war ungenau; beides konnte in dieser Session nicht rückwirkend aufgeklärt werden.",
          "text_en": "The FAQ explicitly states a statutory 14-day consumer right of withdrawal. This contradicts the red flag noted in the prior research round of 06.09.2026, 'B2B only per shop'. Either the business model has opened up to B2C, or the earlier assessment was inaccurate; this session could not retroactively clarify which.",
          "quelle": "https://pepwerk.com (FAQ 'Kann ich meine Bestellung zurückgeben?')",
          "datum": "2026-09-15"
        },
        {
          "text": "Neuer Rabattmechanismus: 10% Willkommensrabatt-Code gegen Newsletter-Anmeldung mit E-Mail-Bestätigung. Dies ist ein anderer Code als der bereits per Mail von Ferdinand Maier belegte Affiliate-/Rabattcode 'peptidecompass10'. Auf der Website selbst wurde 'peptidecompass10' nicht gefunden; es wurde nicht danach gesucht über eine Vollbestandsprüfung aller Unterseiten, nur Stichproben (Startseite, Shop, Impressum, Über uns, FAQ, CoA-Produktseiten).",
          "text_en": "New discount mechanism: a 10% welcome discount code in exchange for a newsletter signup with email confirmation. This is a different code than the affiliate/discount code 'peptidecompass10' already documented by email from Ferdinand Maier. 'peptidecompass10' itself was not found on the website; however, it was not searched for via a full inventory check of all subpages, only spot checks (homepage, shop, legal notice, about us, FAQ, CoA product pages).",
          "quelle": "https://pepwerk.com",
          "datum": "2026-09-15"
        },
        {
          "text": "Produktlinie 'Triple G' (Kategorie GLP-1-Analoga, 10mg für 79,95€ und 30mg für 169,99€) ist neu im Sortiment und war in der Vorrecherche vom 06.09.2026 nicht erfasst.",
          "text_en": "Product line 'Triple G' (category GLP-1 analogs, 10mg for €79.95 and 30mg for €169.99) is new in the range and was not recorded in the prior research round of 06.09.2026.",
          "quelle": "https://pepwerk.com/shop/",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15"
  },
  {
    "slug": "avellon-peptides",
    "name": "Avellon Peptides",
    "website": "https://avellon-peptides.com/",
    "rechtstraeger": "Avellon Peptides Sp. z o.o. (KRS 0001218785)",
    "sitz": "Polen",
    "land": "EU",
    "gegruendet": null,
    "brand": {
      "farbe": "#1B4F8C",
      "logo": "assets/img/logos/_wordmarks/avellon-peptides.svg",
      "logoFallback": "assets/img/logos/_wordmarks/avellon-peptides.svg",
      "logoQuelle": null
    },
    "score": {
      "labor": 100,
      "recht": 100,
      "lieferung": 82,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 96,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": true,
      "labor": "eigene Chargen-PDFs; Janoshik-Blindtests Dritter",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": true,
      "ruo": true,
      "impressum": true,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": 2,
      "tageMax": 5,
      "laender": [
        "EU"
      ]
    },
    "zahlung": [
      "SEPA-Vorkasse",
      "Krypto"
    ],
    "affiliate": true,
    "affiliateProgrammUrl": "https://avellon-peptides.com/affiliate-bereich/",
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": 6.0,
    "affiliateUrl": "https://avellon-peptides.com/",
    "kurz": "Sitz in Polen. Versand laut Website nach DACH. CoAs öffentlich einsehbar, extern geprüft.",
    "kurz_en": "Registered in Polen. Ships to Germany/Austria/Switzerland according to the website. CoAs are publicly available and third-party tested.",
    "staerken": [
      "Externe Labortests (eigene Chargen-PDFs; Janoshik-Blindtests Dritter)",
      "Rechtsträger benannt und belegt",
      "Altersgate vorhanden",
      "RUO-Kennzeichnung vorhanden",
      "Impressum vorhanden"
    ],
    "staerken_en": [
      "Third-party lab testing (eigene Chargen-PDFs; Janoshik-Blindtests Dritter)",
      "Named, verifiable legal entity",
      "Age verification gate in place",
      "RUO labeling in place",
      "Legal notice (Impressum) present"
    ],
    "schwaechen": [],
    "schwaechen_en": [],
    "roteFlaggen": [
      "keine Sofort-Kartenzahlung"
    ],
    "roteFlaggen_en": [
      "no instant card payment"
    ],
    "quelle": "peptidcheck24 (29.05./31.07.2026), chemverify Katalog",
    "stand": "2026-09-06",
    "demo": false,
    "status": "inaktiv",
    "statusGrund": "Domain avellon-peptides.com (und avellonpeptides.com) leitet seit spätestens 24.08.2026 vollständig auf einen fremden Shop (smartpeptides.de) um, keine eigene Website mehr erreichbar (Stand 15.09.2026).",
    "statusGrund_en": "The domain avellon-peptides.com (and avellonpeptides.com) has fully redirected to an unrelated shop (smartpeptides.de) since at least Aug 24, 2026; no own website is reachable anymore (as of Sep 15, 2026).",
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Stand 24.08.2026 (letzter erreichbarer Snapshot vor der Domain-Übernahme, siehe Änderungen): kostenloser EU-Versand ab 150 €, Lieferung in 27 EU-Länder, chargenspezifische CoA (HPLC) pro Produkt beworben, E-Mail-Support mit Antwortzeit 1-2 Werktage (info@avellon-support.com). Diese Angaben sind NICHT mehr live verifizierbar, da die Domain seit spätestens heute (15.09.2026) nicht mehr zu Avellon Peptides führt (siehe Änderungen).",
          "text_en": "As of Aug 24, 2026 (the last reachable snapshot before the domain takeover, see changes): free EU shipping from €150, delivery to 27 EU countries, batch-specific CoA (HPLC) advertised per product, email support with a 1-2 business day response time (info@avellon-support.com). These figures are NO LONGER verifiable live, since the domain has not led to Avellon Peptides since at the latest today (Sep 15, 2026; see changes).",
          "quelle": "http://web.archive.org/web/20260824081338/https://avellon-peptides.com/",
          "datum": "2026-08-24"
        }
      ],
      "schwaechen": [
        {
          "text": "avellon-peptides.com UND avellonpeptides.com (beide Schreibweisen) leiten aktuell vollständig zu einem fremden Shop weiter (smartpeptides.de, Betreiber laut dessen Impressum: Aktru Sp. z o.o., Gdowska 22A, 32-020 Wieliczka, Polen, eine andere Rechtsperson als die bisher dokumentierte 'Avellon Peptides Sp. z o.o., KRS 0001218785'). Live geprüft per Browser-Navigation (URL-Bar bestätigt Redirect, pfadgenau: z.B. /ueber-uns → smartpeptides.de/versand-lieferung/ 404) sowie per curl (403/Cloaking je nach User-Agent). Die ursprüngliche Avellon-Website ist für normale Besucher aktuell nicht erreichbar.",
          "text_en": "avellon-peptides.com AND avellonpeptides.com (both spellings) currently redirect fully to an unrelated shop (smartpeptides.de, operator per its imprint: Aktru Sp. z o.o., Gdowska 22A, 32-020 Wieliczka, Poland, a different legal entity than the previously documented 'Avellon Peptides Sp. z o.o., KRS 0001218785'). Verified live via browser navigation (URL bar confirms the redirect, path-exact, e.g. /ueber-uns → smartpeptides.de/versand-lieferung/ 404) and via curl (403/cloaking depending on user agent). The original Avellon website is currently unreachable for normal visitors.",
          "quelle": "https://avellon-peptides.com/ (live-Navigation 2026-09-15) und https://smartpeptides.de/impressum/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "WHOIS-Daten der Domain avellon-peptides.com sind vollständig über einen bezahlten Privacy-Dienst verborgen (Owner, Adresse als 'DATA REDACTED' ausgewiesen, nur Land DE und Region Niedersachsen sichtbar, abweichend vom dokumentierten Firmensitz Polen/Wrocław). Domain erst seit 2025-09-23 registriert (11 Monate alt zum Prüfzeitpunkt). ScamAdviser Trust Score wird als '0' ausgewiesen bei gleichzeitigem Fließtext 'probably legit': eine inkonsistente/schwache Datenbasis des Tools selbst.",
          "text_en": "WHOIS data for the domain avellon-peptides.com is fully hidden behind a paid privacy service (owner and address shown as 'DATA REDACTED', only the country DE and region Lower Saxony visible, differing from the documented company seat in Poland/Wrocław). The domain was registered only on Sep 23, 2025 (11 months old at the time of the check). ScamAdviser shows a trust score of '0' while its accompanying text reads 'probably legit': an inconsistent/weak data basis on the tool's own part.",
          "quelle": "https://www.scamadviser.com/check-website/avellon-peptides.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Kein Trustpilot-Profil für avellon-peptides.com vorhanden (Seite liefert 404 'Whoops! The page you're looking for could not be found'). Keine unabhängige Bewertungsbasis auf dieser Plattform.",
          "text_en": "No Trustpilot profile exists for avellon-peptides.com (the page returns a 404, 'Whoops! The page you're looking for could not be found'). No independent review basis on this platform.",
          "quelle": "https://www.trustpilot.com/review/avellon-peptides.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Reddit-Suche nach 'avellon', 'avellon peptides' und 'avellon-peptides.com' liefert praktisch keine auswertbaren Erfahrungsberichte: einziger Treffer ist ein Thread in r/PeptideDeutschland ('Jemand Iron Mike Video gesehen zu den Peptid Tests?'), in dem Avellon nur beiläufig in der Fragestellung genannt wird; die 38 Kommentare drehen sich um allgemeine Grauzonen-/China-Sourcing-Skepsis gegenüber Resellern und um die Person 'Iron Mike' selbst, nicht um konkrete Avellon-Erfahrungen. Keine als Tatsache verwertbare Community-Aussage zu Avellon extrahierbar.",
          "text_en": "Reddit searches for 'avellon', 'avellon peptides', and 'avellon-peptides.com' return practically no usable experience reports: the only hit is a thread in r/PeptideDeutschland ('Has anyone seen the Iron Mike video about the peptide tests?'), where Avellon is only mentioned in passing within the question; the 38 comments revolve around general gray-market/China-sourcing skepticism toward resellers and around the person 'Iron Mike' himself, not concrete Avellon experiences. No fact-usable community statement about Avellon could be extracted.",
          "quelle": "https://www.reddit.com/r/PeptideDeutschland/comments/1vd7q1h/jemand_iron_mike_video_gesehen_zu_den_peptid_tests/",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "aenderungen": [
        {
          "text": "KRITISCH: Zwischen dem letzten bestätigten Avellon-Snapshot (24.08.2026, Wayback Machine, Status 200, Inhalt eindeutig Avellon Peptides mit Kontakt info@avellon-support.com) und heute (15.09.2026) wurde die Domain avellon-peptides.com auf einen fremden Shop 'Smart Peptides' (smartpeptides.de, Betreiber Aktru Sp. z o.o.) umgestellt. Auch die alternative Schreibweise avellonpeptides.com (ohne Bindestrich) zeigt denselben fremden Shop. Ob dies ein Rebranding derselben Firma, ein Domainverkauf oder ein Domain-Lapse mit Übernahme durch Dritte ist, konnte NICHT geklärt werden: Nirgends auf smartpeptides.de findet sich ein Hinweis auf 'Avellon'. Wayback Machine (CDX-API) war während der Recherche zeitweise offline, weitere Snapshots zur exakten Datierung des Wechsels konnten nicht abgerufen werden.",
          "text_en": "CRITICAL: between the last confirmed Avellon snapshot (Aug 24, 2026, Wayback Machine, status 200, content clearly Avellon Peptides with contact info@avellon-support.com) and today (Sep 15, 2026), the domain avellon-peptides.com was switched to an unrelated shop, 'Smart Peptides' (smartpeptides.de, operator Aktru Sp. z o.o.). The alternate spelling avellonpeptides.com (without the hyphen) shows the same unrelated shop. Whether this is a rebrand of the same company, a domain sale, or a domain lapse followed by a third-party takeover could NOT be clarified: nowhere on smartpeptides.de is there any reference to 'Avellon'. The Wayback Machine (CDX API) was temporarily offline during the research, so further snapshots to pin down the exact timing of the switch could not be retrieved.",
          "quelle": "http://web.archive.org/web/20260824081338/https://avellon-peptides.com/ vs. https://avellon-peptides.com/ (live 2026-09-15)",
          "datum": "2026-09-15"
        },
        {
          "text": "chemverify.com (API /api/catalog, zuletzt intern aktualisiert 2026-09-07) führt Avellon Peptides weiterhin als Vendor-Eintrag mit payment_methods ['Credit Card','Bank Transfer']: Das wäre eine Änderung gegenüber der bisher dokumentierten Schwäche 'keine Sofort-Kartenzahlung'. Das Feld 'peptides' ist bei chemverify jedoch leer (keine Produktpreise hinterlegt), is_verified=false, rating=null, last_verified=null, und die Angabe konnte NICHT auf der Live-Seite gegengeprüft werden, da diese nicht mehr erreichbar ist. Als offener, unbestätigter Punkt behandeln, nicht als Fakt übernehmen.",
          "text_en": "chemverify.com (API /api/catalog, last updated internally on Sep 7, 2026) still lists Avellon Peptides as a vendor entry with payment_methods ['Credit Card','Bank Transfer']: that would be a change versus the previously documented weakness of 'no instant card payment'. However, the 'peptides' field is empty at chemverify (no product prices on file), is_verified=false, rating=null, last_verified=null, and the claim could NOT be cross-checked on the live site since it is no longer reachable. Treat as an open, unconfirmed point, not as an established fact.",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15"
        },
        {
          "text": "chemverify-Eintrag nennt als Produktionsort 'Synthese und Abfüllung erfolgen in den Niederlanden', abweichend von der bisherigen Sitz-Angabe Polen (Wrocław). Könnte Produktions- vs. Firmensitz sein, wurde nicht weiter verifiziert, da Primärquelle (Avellon-Website) tot ist.",
          "text_en": "The chemverify entry lists the production location as 'synthesis and filling take place in the Netherlands', differing from the previously documented company seat in Poland (Wrocław). This could be a production-site-versus-company-seat distinction; it was not further verified because the primary source (the Avellon website) is dead.",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": false,
    "preisStand": "2026-08-24"
  },
  {
    "slug": "particle-peptides",
    "name": "Particle Peptides",
    "website": "https://particlepeptides.com/",
    "rechtstraeger": "PARTICLE s.r.o.",
    "sitz": "Lučenec, Slowakei",
    "land": "EU",
    "gegruendet": null,
    "brand": {
      "farbe": "#0E6B64",
      "logo": "assets/img/logos/particle-peptides.png",
      "logoMono": "assets/img/logos/particle-peptides_mono.png",
      "logoRatio": 0.86,
      "logoFallback": "assets/img/logos/_wordmarks/particle-peptides.svg",
      "logoQuelle": "https://particlepeptides.com/themes/particlepeptides/assets/img/logo.png"
    },
    "score": {
      "labor": 100,
      "recht": 100,
      "lieferung": 74,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 94,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": true,
      "labor": "Janoshik Analytical, MZ Biolabs (Blindtests)",
      "anzahl": null
    },
    "reinheit": 98.79,
    "rechtsrahmen": {
      "altersgate": true,
      "ruo": true,
      "impressum": true,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": 2,
      "tageMax": 7,
      "laender": [
        "EU",
        "US",
        "UK",
        "ASIA"
      ]
    },
    "zahlung": [
      "Karte",
      "Überweisung"
    ],
    "affiliate": true,
    "affiliateProgrammUrl": "https://particlepeptides.com/en/content/41-affiliate-program-terms",
    "provision": "10 %",
    "rabatt": null,
    "produkte": [],
    "preisProMg": 6.4,
    "affiliateUrl": "https://particlepeptides.com/",
    "kurz": "Sitz in Lučenec, Slowakei. Versand laut Website nach DACH. CoAs öffentlich einsehbar, extern geprüft.",
    "kurz_en": "Registered in Lučenec, Slowakei. Ships to Germany/Austria/Switzerland according to the website. CoAs are publicly available and third-party tested.",
    "staerken": [
      "Externe Labortests (Janoshik Analytical)",
      "Rechtsträger benannt und belegt",
      "Altersgate vorhanden",
      "RUO-Kennzeichnung vorhanden",
      "Impressum vorhanden"
    ],
    "staerken_en": [
      "Third-party lab testing (Janoshik Analytical)",
      "Named, verifiable legal entity",
      "Age verification gate in place",
      "RUO labeling in place",
      "Legal notice (Impressum) present"
    ],
    "schwaechen": [],
    "schwaechen_en": [],
    "roteFlaggen": [],
    "roteFlaggen_en": [],
    "quelle": "chemverify Katalog, particlepeptides.com, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Öffentliches, durchsuchbares COA-Vault: eigene Seite zum Filtern/Downloaden von Batch-Zertifikaten nach Produkt, Batch-Nummer oder Datum (mind. 20 PDF-Links direkt auf der Seite gezählt).",
          "text_en": "Public, searchable COA vault: a dedicated page for filtering/downloading batch certificates by product, batch number or date (at least 20 PDF links counted directly on the page).",
          "quelle": "https://particlepeptides.com/en/coa-vault",
          "datum": "2026-09-15"
        },
        {
          "text": "Produktseiten weisen explizit zusätzliches Testing über reine HPLC-Reinheit hinaus aus: \"≥98% purity, EU-tested for endotoxins & heavy metals. Per-batch COA. Ships from Slovakia.\" (Meta-Description der Produktseite).",
          "text_en": "Product pages explicitly state additional testing beyond plain HPLC purity: \"≥98% purity, EU-tested for endotoxins & heavy metals. Per-batch COA. Ships from Slovakia.\" (product page meta description).",
          "quelle": "https://particlepeptides.com/en/buy-peptides/103-bpc-157-5mg-with-mannitol.html",
          "datum": "2026-09-15"
        },
        {
          "text": "ChemVerify-Unabhängigkeitsprüfung: 95,9% durchschnittliche Übereinstimmung der Herstellerangaben mit unabhängigen HPLC-Werten (max. Abweichung 1,4%), COA-Vollständigkeits-Score 89/100 (Plattform-Ø 88/100), 100% Batch-Rückverfolgbarkeit, 100% MS-Identitätsbestätigung, 0 von 12 geprüften Red Flags ausgelöst.",
          "text_en": "ChemVerify independence check: 95.9% average agreement between manufacturer claims and independent HPLC values (max. deviation 1.4%), COA completeness score 89/100 (platform average 88/100), 100% batch traceability, 100% MS identity confirmation, 0 of 12 checked red flags triggered.",
          "quelle": "https://www.chemverify.com/learn/particle-peptides-review",
          "datum": "2026-09-15"
        },
        {
          "text": "Vollständige, prüfbare Rechtsträger-Angaben in den AGB: PARTICLE s. r. o., M. Gorkého 541/4982, 984 01 Lučenec, Firmen-ID 47 858 541, Handelsregister Bezirksgericht Banská Bystrica, Abt. Sro, Einlage-Nr. 27127/S.",
          "text_en": "Complete, verifiable legal-entity details in the terms and conditions: PARTICLE s. r. o., M. Gorkého 541/4982, 984 01 Lučenec, company ID 47 858 541, commercial register at Banská Bystrica District Court, section Sro, entry no. 27127/S.",
          "quelle": "https://particlepeptides.com/en/content/3-legal-notice",
          "datum": "2026-09-15"
        },
        {
          "text": "Scamadviser stuft die Seite als \"Very Likely Safe\" ein: gültiges SSL, Domain seit 2015-06-15 registriert (ca. 11 Jahre), von DNSFilter als sicher gelistet, keine Blacklist-Treffer.",
          "text_en": "Scamadviser rates the site as \"Very Likely Safe\": valid SSL, domain registered since 2015-06-15 (about 11 years), listed as safe by DNSFilter, no blacklist hits.",
          "quelle": "https://www.scamadviser.com/check-website/particlepeptides.com",
          "datum": "2026-09-15"
        },
        {
          "text": "Proaktive Kundenschutz-Kommunikation gegen Marken-Missbrauch: Blog-Warnung listet bekannte Fake-Accounts/geklonte Seiten auf Instagram und TikTok mit Melde-Anleitung.",
          "text_en": "Proactive customer-protection communication against brand abuse: a blog warning lists known fake accounts/cloned pages on Instagram and TikTok along with reporting instructions.",
          "quelle": "https://particlepeptides.com/en/blog/news/warning-protect-yourself-from-scams-shop-safely-at-particlepeptidescom",
          "datum": "2025-11-20"
        },
        {
          "text": "Affiliate-Programm aktuell bestätigt: 10% Provision, Auszahlung ausschließlich in EUR per Banküberweisung.",
          "text_en": "Affiliate program currently confirmed: 10% commission, payout exclusively in EUR by bank transfer.",
          "quelle": "https://particlepeptides.com/en/content/41-affiliate-program-terms",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "4 von 12 angefragten Kern-Peptiden fehlen komplett im Katalog: Semaglutid, Tirzepatid, Retatrutid und Tesamorelin sind nicht gelistet. Geprüft wurde der vollständige Hauptkatalog (28 von 28 Produkten laut Seitenangabe \"Showing 1-28 of 28 item(s)\", inkl. JSON-LD-ItemList mit 28 Einträgen).",
          "text_en": "4 of the 12 requested core peptides are completely missing from the catalog: Semaglutide, Tirzepatide, Retatrutide and Tesamorelin are not listed. The full main catalog was checked (28 of 28 products per the page label \"Showing 1-28 of 28 item(s)\", including a JSON-LD ItemList with 28 entries).",
          "quelle": "https://particlepeptides.com/en/16-buy-peptides",
          "datum": "2026-09-15",
          "art": "belegt"
        }
      ],
      "aenderungen": [
        {
          "text": "Neue Blog-Beiträge zu Qualitätsthemen: \"Peptide Certificate of Analysis: How to Verify a COA and Identify Authentic Laboratory Reports\" und \"HPLC Purity: Why It Is Not Enough to Define Peptide Quality\" (beide datiert 27.08.2026) sowie \"Endotoxin Testing: Why It Matters in Peptide Quality Assessment\": Ausbau der öffentlichen Aufklärung über Qualitätskriterien.",
          "text_en": "New blog posts on quality topics: \"Peptide Certificate of Analysis: How to Verify a COA and Identify Authentic Laboratory Reports\" and \"HPLC Purity: Why It Is Not Enough to Define Peptide Quality\" (both dated 27.08.2026), plus \"Endotoxin Testing: Why It Matters in Peptide Quality Assessment\": an expansion of public education on quality criteria.",
          "quelle": "https://particlepeptides.com/en/blog",
          "datum": "2026-08-27"
        },
        {
          "text": "Produktseiten kommunizieren jetzt zusätzliches Endotoxin- und Schwermetall-Testing pro Batch, nicht mehr nur HPLC-Reinheit. Das ist eine Ausweitung der ausgewiesenen Testtiefe gegenüber dem Stand der Vorrecherche vom 06.09.2026.",
          "text_en": "Product pages now communicate additional endotoxin and heavy-metal testing per batch, no longer just HPLC purity. This is an expansion of the stated testing depth compared to the prior research round of 06.09.2026.",
          "quelle": "https://particlepeptides.com/en/buy-peptides/103-bpc-157-5mg-with-mannitol.html",
          "datum": "2026-09-15"
        },
        {
          "text": "Öffentlicher, selbstbedienbarer COA-Vault mit Such-/Filterfunktion nach Produkt, Batch und Datum als eigene Unterseite eingerichtet.",
          "text_en": "A public, self-service COA vault with search/filter by product, batch and date has been set up as its own subpage.",
          "quelle": "https://particlepeptides.com/en/coa-vault",
          "datum": "2026-09-15"
        },
        {
          "text": "Neues Produkt \"GLP-3 10mg with Mannitol\" (Triple GLP-1/GIP/Glucagon-Rezeptor-Agonist) im Sortiment: eine Erweiterung Richtung GLP-Rezeptor-Forschung, ersetzt aber nicht die weiterhin fehlenden Semaglutid/Tirzepatid/Retatrutid.",
          "text_en": "New product \"GLP-3 10mg with Mannitol\" (triple GLP-1/GIP/glucagon receptor agonist) added to the range: an expansion toward GLP-receptor research, though it does not replace the still-missing Semaglutide/Tirzepatide/Retatrutide.",
          "quelle": "https://particlepeptides.com/en/16-buy-peptides",
          "datum": "2026-09-15"
        },
        {
          "text": "Aktive Scam-Warnung/Markenschutz-Kampagne seit 20.11.2025 wegen Fake-Accounts und geklonter Seiten, die den Particle-Peptides-Namen missbrauchen.",
          "text_en": "Active scam-warning/brand-protection campaign since 20.11.2025 regarding fake accounts and cloned pages misusing the Particle Peptides name.",
          "quelle": "https://particlepeptides.com/en/blog/news/warning-protect-yourself-from-scams-shop-safely-at-particlepeptidescom",
          "datum": "2025-11-20"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15"
  },
  {
    "slug": "europa-peptide",
    "name": "Europa-Peptide",
    "website": "https://europa-peptide.de/",
    "rechtstraeger": "EP-Company Ltd. (UK 16920593)",
    "sitz": "London, UK",
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#8C4F1B",
      "logo": "assets/img/logos/europa-peptide.png",
      "logoMono": "assets/img/logos/europa-peptide_mono.png",
      "logoRatio": 1.17,
      "logoFallback": "assets/img/logos/_wordmarks/europa-peptide.svg",
      "logoQuelle": "https://europa-peptide.de/wp-content/themes/europa-tailwind/assets/images/logo-color.png"
    },
    "score": {
      "labor": null,
      "recht": 100,
      "lieferung": 82,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 93,
    "datenbasis": 2,
    "coa": {
      "oeffentlich": null,
      "extern": null,
      "labor": "Zertifikate-Menü vorhanden, Chargen nicht gegengeprüft",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": true,
      "ruo": true,
      "impressum": true,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": 2,
      "tageMax": 5,
      "laender": [
        "EU"
      ]
    },
    "zahlung": [
      "SEPA"
    ],
    "affiliate": null,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": 5.98,
    "affiliateUrl": "https://europa-peptide.de/",
    "kurz": "Sitz in London, UK. Versand laut Website nach DACH. CoA-Status nicht ermittelbar.",
    "kurz_en": "Registered in London, UK. Ships to Germany/Austria/Switzerland according to the website. CoA status not ascertainable.",
    "staerken": [
      "Rechtsträger benannt und belegt",
      "Altersgate vorhanden",
      "RUO-Kennzeichnung vorhanden",
      "Impressum vorhanden"
    ],
    "staerken_en": [
      "Named, verifiable legal entity",
      "Age verification gate in place",
      "RUO labeling in place",
      "Legal notice (Impressum) present"
    ],
    "schwaechen": [],
    "schwaechen_en": [],
    "roteFlaggen": [
      "Widerspruch zu peptidcheck24-Befund 08/2026 (dort keine CoAs)"
    ],
    "roteFlaggen_en": [
      "contradicts a peptidcheck24 finding from 08/2026 (no CoAs found there)"
    ],
    "quelle": "europa-peptide.de, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Rechtsträger EP-COMPANY LTD (Companies House Nr. 16920593) ist im UK-Handelsregister mit Status 'Active' eingetragen: ein echtes, aktives Unternehmen, keine Karteileiche.",
          "text_en": "The legal entity EP-COMPANY LTD (Companies House No. 16920593) is registered in the UK company register with status 'Active': a real, active company, not a shell listing.",
          "quelle": "https://find-and-update.company-information.service.gov.uk/company/16920593",
          "datum": "2026-09-15"
        },
        {
          "text": "Öffentliche, dedizierte Testergebnisse-Seite ('Prüfergebnisse') listet je Produkt Chargen-CoAs (HPLC-Reinheit + LC-MS-Identität) mit direkt verlinkten PDF-Laborberichten. Eigene Zählung der Seite: 74 Produkte, 51 veröffentlichte Zertifikate, 23 auf Anfrage.",
          "text_en": "A public, dedicated test-results page ('Prüfergebnisse') lists batch CoAs (HPLC purity + LC-MS identity) per product, with directly linked PDF lab reports. Own count of the page: 74 products, 51 published certificates, 23 available on request.",
          "quelle": "https://europa-peptide.de/de/prufergebnisse/",
          "datum": "2026-09-15"
        },
        {
          "text": "Für alle 11 der 12 angefragten Kernpeptide, die im Shop geführt werden (nicht: Epitalon), ist auf der Prüfergebnisse-Seite ein CoA als 'Veröffentlicht' mit direktem PDF/Bild-Link markiert (BPC-157, TB-500, GHK-Cu, Semaglutid, Tirzepatid, Retatrutid, CJC-1295 ohne/mit DAC, Ipamorelin, Melanotan II, Tesamorelin, MOTS-C).",
          "text_en": "For all 11 of the 12 requested core peptides carried in the shop (excluding Epitalon), the test-results page marks a CoA as 'Published' with a direct PDF/image link (BPC-157, TB-500, GHK-Cu, Semaglutide, Tirzepatide, Retatrutide, CJC-1295 without/with DAC, Ipamorelin, Melanotan II, Tesamorelin, MOTS-C).",
          "quelle": "https://europa-peptide.de/de/prufergebnisse/",
          "datum": "2026-09-15"
        },
        {
          "text": "europa-peptide.com leitet direkt auf europa-peptide.de weiter (z.B. /imprint → /de/imprint): eine einzige Rechtsperson/Website-Struktur statt verstreuter Schattendomains.",
          "text_en": "europa-peptide.com redirects directly to europa-peptide.de (e.g. /imprint to /de/imprint): a single legal entity/website structure instead of scattered shadow domains.",
          "quelle": "https://europa-peptide.com/imprint (Redirect-Ziel https://europa-peptide.de/de/imprint)",
          "datum": "2026-09-15"
        },
        {
          "text": "Datenschutzerklärung nennt konkreten Verantwortlichen mit Namen, Betreiberfirma und Anschrift (EP-Company Ltd., Shelton Street 71-75, Covent Garden, London) sowie Kontakt-E-Mail. Transparenz über den Rechtsträger ist vorhanden, auch ohne klassische Impressum-Seite.",
          "text_en": "The privacy policy names a concrete data controller with name, operating company and address (EP-Company Ltd., Shelton Street 71-75, Covent Garden, London) plus a contact email. Transparency about the legal entity exists, even without a classic imprint page.",
          "quelle": "https://europa-peptide.de/de/datenschutzbestimmungen/",
          "datum": "2026-09-15"
        },
        {
          "text": "Versandrichtlinie nennt konkrete Lieferzeit (2-5 Werktage EU) und eine Kulanzregel: ein kostenloser Ersatzversand pro Bestellung bei Lieferproblemen.",
          "text_en": "The shipping policy states a concrete delivery time (2-5 business days EU) and a goodwill rule: one free replacement shipment per order for delivery problems.",
          "quelle": "https://europa-peptide.de/versand",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Kein dediziertes Impressum unter den üblichen URL-Pfaden auffindbar (/impressum, /de/impressum, /agb, /terms-of-service, /nutzungsbedingungen, /legal-notice, /imprint, /de/imprint, alle 404). Firmenangaben stehen nur in der Datenschutzerklärung, nicht in einem separaten Impressum.",
          "text_en": "No dedicated imprint findable under the usual URL paths (/impressum, /de/impressum, /agb, /terms-of-service, /nutzungsbedingungen, /legal-notice, /imprint, /de/imprint, all 404). Company details appear only in the privacy policy, not in a separate imprint.",
          "quelle": "https://europa-peptide.de/ (Linktests 15.09.2026, alle getesteten Pfade 404)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Eingetragene Adresse (Shelton Street 71-75, Covent Garden, London) ist eine reine Registeradresse ohne erkennbaren Bezug zu einem physischen Geschäftsbetrieb: laut Datenschutzerklärung der einzige genannte Firmensitz.",
          "text_en": "The registered address (Shelton Street 71-75, Covent Garden, London) is a pure registration address with no recognizable link to a physical business operation: per the privacy policy, it is the only company location named.",
          "quelle": "https://europa-peptide.de/de/datenschutzbestimmungen/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "CoA-Dokumentation ist nicht einheitlich: Die meisten Produkte verlinken strukturierte Labor-PDFs, aber BPC-157 und Tesamorelin verlinken stattdessen eingescannte Bild-Dateien (img_7606.png bzw. img_6602.png, Upload-Datum Oktober 2025) statt eines regulären PDF-Laborberichts.",
          "text_en": "CoA documentation is not consistent: most products link to structured lab PDFs, but BPC-157 and Tesamorelin instead link to scanned image files (img_7606.png and img_6602.png respectively, upload date October 2025) instead of a regular PDF lab report.",
          "quelle": "https://europa-peptide.de/de/prufergebnisse/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "chemverify.com führt Europa-Peptide nicht in seinem Anbieter-Katalog (direkter API-Abruf 15.09.2026, 133KB JSON-Antwort, keine einzige Erwähnung von 'europa' im gesamten Katalog): der Anbieter ist von diesem Drittanbieter-Prüfdienst nicht erfasst/verifiziert.",
          "text_en": "chemverify.com does not list Europa-Peptide in its vendor catalog (direct API call 2026-09-15, 133KB JSON response, not a single mention of 'europa' in the entire catalog): the vendor is not captured/verified by this third-party verification service.",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Produktseite trägt die URL-Bezeichnung 'bpc-157-5mg', tatsächlich angebotene und einzige Variante ist aber 10mg (Verkaufspreis 35,90€, Regulärpreis 54,90€): eine Slug/Produkt-Inkonsistenz.",
          "text_en": "The product page carries the URL label 'bpc-157-5mg', but the only variant actually offered is 10mg (sale price EUR 35.90, regular price EUR 54.90): a slug/product inconsistency.",
          "quelle": "https://europa-peptide.de/de/shop/bpc-157-5mg/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Trustpilot-Bewertungsseite für europa-peptide.de war beim Zugriffsversuch durch eine Cloudflare-Verifizierung blockiert (HTTP 403 'Verifying Connection'): keine eigene Prüfung der Trustpilot-Bewertungen möglich.",
          "text_en": "The Trustpilot review page for europa-peptide.de was blocked by a Cloudflare verification challenge on access attempt (HTTP 403 'Verifying Connection'): an independent check of the Trustpilot reviews was not possible.",
          "quelle": "https://www.trustpilot.com/review/europa-peptide.de",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Keine Reddit-Diskussionen zu 'europa-peptide.de' auffindbar. Ernsthafte Suche über WebSearch sowie direkte Zugriffsversuche auf reddit.com/search.json und old.reddit.com/search wurden beide mit HTTP 403 bzw. Redirect blockiert: keine Community-Meinungen erhoben, weder positiv noch negativ.",
          "text_en": "No Reddit discussions about 'europa-peptide.de' found. A thorough search via WebSearch as well as direct access attempts to reddit.com/search.json and old.reddit.com/search were both blocked with HTTP 403 or a redirect: no community opinions were gathered, neither positive nor negative.",
          "quelle": "reddit.com/search.json?q=europa-peptide, old.reddit.com/search/?q=europa-peptide (Zugriff blockiert), WebSearch 15.09.2026",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "peptidcheck24.de war am 15.09.2026 technisch nicht erreichbar: TLS-Zertifikat der Domain gehört zu '*.one.com' und passt nicht zum Hostnamen, HTTP-Zugriff liefert nur eine generische 404-Seite (162 Bytes). Der in der Vorrecherche vom 06.09.2026 zitierte peptidcheck24-Befund 'keine CoAs' (08/2026) konnte dadurch HEUTE nicht direkt gegengeprüft werden. Auch der Internet-Archive-Cache war zum Zeitpunkt der Recherche vorübergehend offline (HTTP 503).",
          "text_en": "peptidcheck24.de was technically unreachable on 2026-09-15: the domain's TLS certificate belongs to '*.one.com' and does not match the hostname, and HTTP access only returns a generic 404 page (162 bytes). The peptidcheck24 finding 'no CoAs' (08/2026) cited in the preliminary research from 2026-09-06 could therefore not be directly cross-checked TODAY. The Internet Archive cache was also temporarily offline at the time of research (HTTP 503).",
          "quelle": "https://peptidcheck24.de/ (SSL-Fehler + 404, 15.09.2026), web.archive.org/cdx (503, 15.09.2026)",
          "datum": "2026-09-15",
          "art": "belegt"
        }
      ],
      "aenderungen": [
        {
          "text": "CoA-Bibliothek wird laufend erweitert: PDF-Upload-Zeitstempel der Laborberichte reichen von Oktober 2025 bis September 2026, mehrere Berichte (u.a. GHK-Cu-Umfeld, Cagrilintid, MOTS-C, KLOW-Blend) tragen ein Upload-Datum im September 2026, also aus den letzten zwei Wochen vor dieser Recherche.",
          "text_en": "The CoA library is continuously expanded: PDF upload timestamps of the lab reports range from October 2025 to September 2026; several reports (including the GHK-Cu area, Cagrilintide, MOTS-C, KLOW blend) carry an upload date in September 2026, i.e. from the last two weeks before this research.",
          "quelle": "https://europa-peptide.de/de/prufergebnisse/ (verlinkte PDF-Pfade /wp-content/uploads/2026/09/...)",
          "datum": "2026-09-15"
        },
        {
          "text": "Es existiert bereits eine neue Subdomain 'new.europa-peptide.de' für Tools (Peptid-Rechner, Peptidvergleich, Peptid-Lexikon, FAQ, Kontakt), während der Hauptshop noch unter europa-peptide.de/de/ läuft: ein Hinweis auf einen laufenden Website-Relaunch/Migration.",
          "text_en": "A new subdomain 'new.europa-peptide.de' already exists for tools (peptide calculator, peptide comparison, peptide lexicon, FAQ, contact), while the main shop still runs under europa-peptide.de/de/: an indication of an ongoing website relaunch/migration.",
          "quelle": "https://europa-peptide.de/ (Footer-Verlinkung zu new.europa-peptide.de)",
          "datum": "2026-09-15"
        },
        {
          "text": "Epitalon ist aktuell NICHT im Sortiment gelistet (weder im Shop noch in einem der beiden geprüften XML-Sitemaps product-sitemap.xml und peptide-sitemap.xml auffindbar): von den 12 angefragten Kernpeptiden fehlt dieses eine.",
          "text_en": "Epitalon is currently NOT listed in the range (not findable either in the shop or in either of the two checked XML sitemaps product-sitemap.xml and peptide-sitemap.xml): of the 12 requested core peptides, this one is missing.",
          "quelle": "https://europa-peptide.de/product-sitemap.xml, https://europa-peptide.de/peptide-sitemap.xml",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15"
  },
  {
    "slug": "biocollex",
    "name": "BioCollex",
    "website": "https://biocollexresearch.com/",
    "rechtstraeger": "Bio Collex Research, LLC",
    "sitz": "Oakland, MD, USA",
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#1B8C7A",
      "logo": "assets/img/logos/biocollex.png",
      "logoMono": "assets/img/logos/biocollex_mono.png",
      "logoRatio": 1,
      "logoFallback": "assets/img/logos/_wordmarks/biocollex.svg",
      "logoQuelle": "https://biocollexresearch.com/wp-content/uploads/2026/02/BioCollex_LogoPNG.png"
    },
    "score": {
      "labor": 100,
      "recht": 100,
      "lieferung": 65,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 92,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": true,
      "labor": "ISO/IEC-17025-Labore, HPLC+MS",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": true,
      "ruo": true,
      "impressum": true,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": null,
      "tageMax": null,
      "laender": [
        "US",
        "EU",
        "UK",
        "CA"
      ]
    },
    "zahlung": [
      "Karte",
      "Apple Pay",
      "Cash App",
      "Zelle",
      "Venmo"
    ],
    "affiliate": false,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": null,
    "affiliateUrl": "https://biocollexresearch.com/",
    "kurz": "Sitz in Oakland, MD, USA. Versand laut Website nach DACH. CoAs öffentlich einsehbar, extern geprüft.",
    "kurz_en": "Registered in Oakland, MD, USA. Ships to Germany/Austria/Switzerland according to the website. CoAs are publicly available and third-party tested.",
    "staerken": [
      "Externe Labortests (ISO/IEC-17025-Labore)",
      "Rechtsträger benannt und belegt",
      "Altersgate vorhanden",
      "RUO-Kennzeichnung vorhanden",
      "Impressum vorhanden"
    ],
    "staerken_en": [
      "Third-party lab testing (ISO/IEC-17025-Labore)",
      "Named, verifiable legal entity",
      "Age verification gate in place",
      "RUO labeling in place",
      "Legal notice (Impressum) present"
    ],
    "schwaechen": [],
    "schwaechen_en": [],
    "roteFlaggen": [
      "Domain erst 12/2025 registriert"
    ],
    "roteFlaggen_en": [
      "domain registered only in 12/2025"
    ],
    "quelle": "biocollexresearch.com, chemverify Katalog, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Öffentlich einsehbare, chargen-spezifische CoA-PDFs (Google Drive) für alle 15 aktuell gelisteten Produkte inkl. der Kernpeptide GHK-Cu, GLP-2(TZ)/Tirzepatid, GLP-3(RT)/Retatrutid, Tesamorelin, MOTS-c, BPC-157/TB-500-Blend und CJC/IPA-Blend: direkt von der eigenen COA-Seite verlinkt, kein Login nötig.",
          "text_en": "Publicly viewable, batch-specific CoA PDFs (Google Drive) for all 15 currently listed products, including the core peptides GHK-Cu, GLP-2(TZ)/Tirzepatide, GLP-3(RT)/Retatrutide, Tesamorelin, MOTS-c, BPC-157/TB-500 blend and CJC/IPA blend: linked directly from the vendor's own COA page, no login required.",
          "quelle": "https://biocollexresearch.com/pages/coa",
          "datum": "2026-09-15"
        },
        {
          "text": "Unabhängige Analyse von ChemVerify (Drittanbieter, nicht BioCollex selbst) attestiert für BioCollex-Proben eine maximale Abweichung von 0,9% zwischen COA-Angaben und eigenen HPLC/MS-Referenzmessungen; ChemVerify zitiert dazu eine Studie im Journal of Pharmaceutical and Biomedical Analysis (2019, Vol. 174, S. 305-312), wonach rund 12% der Online-Vendor-Proben branchenweit Abweichungen über 5% zeigten. Wichtig: ChemVerify hat kein eigenes Labor beauftragt, sondern nur die von BioCollex vorgelegten COAs gegen extern publizierte Analytik-Daten gegengeprüft (\"has not commissioned its own laboratory analysis\").",
          "text_en": "An independent analysis by ChemVerify (a third party, not BioCollex itself) attests a maximum deviation of 0.9% between COA figures and its own HPLC/MS reference measurements for BioCollex samples; ChemVerify cites a study in the Journal of Pharmaceutical and Biomedical Analysis (2019, Vol. 174, pp. 305-312) finding that around 12% of online vendor samples industry-wide showed deviations above 5%. Important: ChemVerify did not commission its own lab, but only cross-checked the COAs submitted by BioCollex against externally published analytical data (\"has not commissioned its own laboratory analysis\").",
          "quelle": "https://www.chemverify.com/learn/is-biocollex-legit",
          "datum": "2026-09-15"
        },
        {
          "text": "Scamadviser stuft biocollexresearch.com als \"Likely Safe\" ein trotz junger Domain; kein Hinweis auf Malware-/Phishing-Listungen.",
          "text_en": "Scamadviser rates biocollexresearch.com as \"Likely Safe\" despite the young domain; no indication of malware/phishing listings.",
          "quelle": "https://www.scamadviser.com/check-website/biocollexresearch.com",
          "datum": "2026-09-15"
        },
        {
          "text": "Trustpilot-Aggregatwert wird von zwei unabhängig recherchierten Drittseiten mit 5,0/5 (4 Bewertungen, thepeptidelist.com) bzw. 5,0/5 (2 Bewertungen, peptidecritic.com) referenziert. Trustpilot selbst war für mich nicht direkt öffenbar (HTTP 403, Bot-Schutz). Die Zahlenangabe stützt sich auf diese zwei tatsächlich geöffneten Drittquellen, nicht auf Trustpilot direkt. Stichprobe sehr klein (n=2-4).",
          "text_en": "The Trustpilot aggregate value is referenced by two independently researched third-party sites at 5.0/5 (4 reviews, thepeptidelist.com) and 5.0/5 (2 reviews, peptidecritic.com) respectively. Trustpilot itself was not directly accessible to me (HTTP 403, bot protection). The figure relies on these two third-party sources that were actually opened, not on Trustpilot directly. The sample is very small (n=2-4).",
          "quelle": "https://thepeptidelist.com/providers/biocollex-research",
          "datum": "2026-09-15"
        },
        {
          "text": "Zahlungsmethoden weiterhin breit: Kreditkarte, Apple Pay, CashApp, Zelle, Venmo. Unverändert zur Recherche vom 06.09.2026.",
          "text_en": "Payment methods remain broad: credit card, Apple Pay, CashApp, Zelle, Venmo. Unchanged from the research round of 06.09.2026.",
          "quelle": "https://biocollexresearch.com/faq/",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Von den 12 angefragten Kernpeptiden fehlen aktuell 3 komplett im Sortiment: Semaglutid, Melanotan-2, Epitalon sind nicht gelistet (15 Produkte insgesamt, per WooCommerce-Store-API geprüft: GLP-2(TZ), NAD+, PT-141, SS-31, Selank, Semax, Tesamorelin, CJC/IPA, Vial Container, Bacteriostatic Water, MOTS-c, GLP-3(RT), KLOW, GHK-Cu, BPC-157/TB-500-Blend \"Wolverine\").",
          "text_en": "Of the 12 requested core peptides, 3 are currently completely missing from the range: Semaglutide, Melanotan-2 and Epitalon are not listed (15 products in total, checked via the WooCommerce Store API: GLP-2(TZ), NAD+, PT-141, SS-31, Selank, Semax, Tesamorelin, CJC/IPA, vial container, bacteriostatic water, MOTS-c, GLP-3(RT), KLOW, GHK-Cu, BPC-157/TB-500 blend \"Wolverine\").",
          "quelle": "https://biocollexresearch.com/shop/ (WooCommerce Store API https://biocollexresearch.com/wp-json/wc/store/v1/products)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "BPC-157, TB-500, CJC-1295 und Ipamorelin sind nicht einzeln kaufbar, sondern nur als feste Blends (\"BPC-157/TB-500\" bzw. \"CJC/IPA\" 5mg/5mg). Das bedeutet keine Einzeldosierungs-Transparenz für diese vier Wirkstoffe.",
          "text_en": "BPC-157, TB-500, CJC-1295 and Ipamorelin cannot be purchased individually, only as fixed blends (\"BPC-157/TB-500\" and \"CJC/IPA\" 5mg/5mg respectively). This means no single-ingredient dosage transparency for these four active substances.",
          "quelle": "https://biocollexresearch.com/product/wolverine/ und https://biocollexresearch.com/product/cjc-ipa/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Produktnamen auf der eigenen Website sind teils generisch/verschleiert statt klar wirkstoffbezogen benannt: \"GLP-2 TZ\" statt \"Tirzepatid\", \"GLP-3 RT\" statt \"Retatrutid\", \"Wolverine\" statt \"BPC-157/TB-500\". Die tatsächliche Wirkstoffzuordnung ist nur über Meta-/Title-Tags bzw. Produktbeschreibung erkennbar (z.B. GLP-3-Beschreibung: \"triple agonist ... GLP-1, GIP, and glucagon receptors\"), nicht direkt auf der Produktkachel im Shop.",
          "text_en": "Product names on the vendor's own website are partly generic/obscured rather than clearly named after the active ingredient: \"GLP-2 TZ\" instead of \"Tirzepatide\", \"GLP-3 RT\" instead of \"Retatrutide\", \"Wolverine\" instead of \"BPC-157/TB-500\". The actual active-ingredient mapping is only recognizable via meta/title tags or the product description (e.g. GLP-3 description: \"triple agonist ... GLP-1, GIP, and glucagon receptors\"), not directly on the product tile in the shop.",
          "quelle": "https://biocollexresearch.com/product/glp-2/ , https://biocollexresearch.com/product/glp-3/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Domain weiterhin jung: laut RDAP-Abfrage (rdap.org) registriert am 2025-12-01, letzte Änderung am 2026-06-06. Das bestätigt die ursprüngliche rote Flagge aus der Recherche vom 06.09.2026 unverändert; keine langjährige Reputationshistorie möglich.",
          "text_en": "The domain remains young: per RDAP lookup (rdap.org) registered on 2025-12-01, last changed on 2026-06-06. This confirms the original red flag from the research round of 06.09.2026 unchanged; no long-standing reputation history is possible.",
          "quelle": "https://rdap.org/domain/biocollexresearch.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Keine Reddit-Diskussion zu BioCollex auffindbar (Suche nach \"BioCollex\" in r/Peptides, r/PeptidesEU sowie allgemeine und deutschsprachige Suchen blieben ergebnislos); auch in den Foren meso-rx/elitefitness/peptidcheck24 kein Treffer. Deutet auf fehlende Community-Historie außerhalb der spezialisierten Vendor-Review-Portale hin.",
          "text_en": "No Reddit discussion about BioCollex could be found (searches for \"BioCollex\" in r/Peptides, r/PeptidesEU, as well as general and German-language searches, returned no results); no hits in the meso-rx/elitefitness/peptidcheck24 forums either. This suggests a lack of community history outside the specialized vendor-review portals.",
          "quelle": "Web-Suche (mehrere Abfragen), keine Treffer",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Achtung Verwechslungsgefahr: Eine Google-Suche zu \"biocollex scam complaint\" lieferte primär Beschwerden (falsche Testimonials, kaputte Glasverpackung, keine Rückmeldung auf E-Mails, BBB-Meldung). Diese Beschwerden beziehen sich laut den Quellenangaben jedoch auf \"biocollabs.com\" / \"Biocol Labs\", eine andersnamige, andere Firma, NICHT auf biocollexresearch.com / BioCollex Research. Ich habe diese Beschwerden nicht auf BioCollex übertragen, vermerke die Verwechslungsgefahr aber explizit, falls sie in anderen Quellen künftig vermischt werden.",
          "text_en": "Note, risk of confusion: a Google search for \"biocollex scam complaint\" primarily returned complaints (fake testimonials, broken glass packaging, no response to emails, BBB report). According to the sources, however, these complaints refer to \"biocollabs.com\" / \"Biocol Labs\", a differently named, separate company, NOT to biocollexresearch.com / BioCollex Research. I did not apply these complaints to BioCollex, but explicitly note the risk of confusion in case other sources conflate them in the future.",
          "quelle": "Web-Suche \"biocollex scam complaint fake\" (Snippet nennt explizit biocollabs.com/Biocol Labs als Ursprung der Beschwerden)",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "aenderungen": [
        {
          "text": "Website-Technik komplett gewechselt: Die Recherche vom 06.09.2026 verortete die Seite auf Squarespace; aktuell läuft biocollexresearch.com auf WordPress mit WooCommerce (Store-REST-API unter /wp-json/wc/store/v1/) und WP-Rocket-Caching/Elementor-Templating. Produktstruktur, URLs und Seitenaufbau (/shop/, /product/, /coa/, /faq/, /about-us/) sind neu.",
          "text_en": "The website technology has been completely changed: the research round of 06.09.2026 placed the site on Squarespace; it currently runs on WordPress with WooCommerce (store REST API at /wp-json/wc/store/v1/) and WP-Rocket caching/Elementor templating. The product structure, URLs and page layout (/shop/, /product/, /coa/, /faq/, /about-us/) are new.",
          "quelle": "https://biocollexresearch.com/ (Quellcode-Analyse, Altersverifikations-Overlay, WooCommerce-Cart-Markup)",
          "datum": "2026-09-15"
        },
        {
          "text": "FAQ kündigt Verschärfung der Laborprüfung an: \"We will transition to 6x testing starting our next batch of COA's to demonstrate our c-GMP certified manufacturer's unmatched quality.\" Aktuell (Stand 15.09.2026) ist dies laut Formulierung noch nicht umgesetzt, sondern für die nächste Charge angekündigt.",
          "text_en": "The FAQ announces a tightening of lab testing: \"We will transition to 6x testing starting our next batch of COA's to demonstrate our c-GMP certified manufacturer's unmatched quality.\" As of the current check (15.09.2026), this has not yet been implemented per the wording, but is announced for the next batch.",
          "quelle": "https://biocollexresearch.com/faq/",
          "datum": "2026-09-15"
        },
        {
          "text": "BioCollex ist als \"Verified Partner\" bei ChemVerify gelistet und bietet dort einen eigenen Rabattcode (\"CHEMVERIFY\") an. Das belegt eine aktive Affiliate-/Partnerbeziehung zwischen BioCollex und dem Vergleichsportal ChemVerify, die bei der Einordnung von ChemVerify-Bewertungen als nicht vollständig unabhängig zu berücksichtigen ist.",
          "text_en": "BioCollex is listed as a \"Verified Partner\" on ChemVerify and offers its own discount code (\"CHEMVERIFY\") there. This confirms an active affiliate/partner relationship between BioCollex and the comparison portal ChemVerify, which should be taken into account when weighing ChemVerify ratings as not fully independent.",
          "quelle": "https://www.chemverify.com/vendor/biocollex",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": null
  },
  {
    "slug": "elyvera",
    "name": "ELYVERA (Europeptides)",
    "website": "https://europeptides.de/",
    "rechtstraeger": "Elyvera Biotech GmbH (UID ATU83240039)",
    "sitz": "Wien, Österreich",
    "land": "AT",
    "gegruendet": null,
    "brand": {
      "farbe": "#3F5D4E",
      "logo": "assets/img/logos/elyvera.png",
      "logoMono": "assets/img/logos/elyvera_mono.png",
      "logoRatio": 3.53,
      "logoFallback": "assets/img/logos/_wordmarks/elyvera.svg",
      "logoQuelle": "https://europeptides.de/assets/logo-slwquZtF.svg"
    },
    "score": {
      "labor": 100,
      "recht": 67,
      "lieferung": 82,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 83,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": true,
      "labor": "Janoshik Analytical (HPLC, Schwermetalle, LCMS)",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": false,
      "ruo": true,
      "impressum": true,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": 2,
      "tageMax": 5,
      "laender": [
        "EU"
      ]
    },
    "zahlung": [
      "Überweisung",
      "Krypto"
    ],
    "affiliate": true,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": 2.99,
    "affiliateUrl": "https://europeptides.de/",
    "kurz": "Sitz in Wien, Österreich. Versand laut Website nach DACH. CoAs öffentlich einsehbar, extern geprüft.",
    "kurz_en": "Registered in Wien, Österreich. Ships to Germany/Austria/Switzerland according to the website. CoAs are publicly available and third-party tested.",
    "staerken": [
      "Externe Labortests (Janoshik Analytical)",
      "Rechtsträger benannt und belegt",
      "RUO-Kennzeichnung vorhanden",
      "Impressum vorhanden"
    ],
    "staerken_en": [
      "Third-party lab testing (Janoshik Analytical)",
      "Named, verifiable legal entity",
      "RUO labeling in place",
      "Legal notice (Impressum) present"
    ],
    "schwaechen": [
      "Kein Altersgate (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No age verification gate (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "kein Altersgate",
      "Trustpilot 3,1 vs. eigene Bewertungen 4,7"
    ],
    "roteFlaggen_en": [
      "no age verification gate",
      "Trustpilot rating 3.1 vs. 4.7 on the vendor's own site"
    ],
    "quelle": "peptidcheck24 (31.07.2026), chemverify Katalog (ref-Parameter belegt Programm)",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Erweiterte Laboranalytik eingeführt: neuere Chargen werden zusätzlich zu HPLC (Reinheit), LC-MS (Identität) und Schwermetall-Screening auch auf Residual-TFA, Endotoxin, Mikrobiologie (TAMC/TYMC) und pH geprüft, alle Berichte weiterhin von Janoshik Analytical.",
          "text_en": "Expanded lab analytics introduced: newer batches are now tested, in addition to HPLC (purity), LC-MS (identity) and heavy-metal screening, also for residual TFA, endotoxin, microbiology (TAMC/TYMC) and pH, with all reports still from Janoshik Analytical.",
          "quelle": "https://europeptides.de/standards",
          "datum": "2026-09-15"
        },
        {
          "text": "Öffentliches CoA pro Produkt: jede Produktseite verlinkt direkt einen 'Lab Test Report (CoA)' zusätzlich zum Sicherheitsdatenblatt (SDS).",
          "text_en": "Public CoA per product: every product page links directly to a 'Lab Test Report (CoA)' in addition to the safety data sheet (SDS).",
          "quelle": "https://europeptides.de/product/BPC-15710mg",
          "datum": "2026-09-15"
        },
        {
          "text": "Vollständige Rechtsträger-Offenlegung: Impressum nennt Elyvera Biotech GmbH, FN 676291x, UID ATU83240039, Geschäftsführer David Thomas Ortner und Robert Strubegger; im Firmenbuch (Northdata) identisch bestätigt.",
          "text_en": "Full legal-entity disclosure: the legal notice names Elyvera Biotech GmbH, FN 676291x, VAT ID ATU83240039, managing directors David Thomas Ortner and Robert Strubegger; confirmed identically in the commercial register (Northdata).",
          "quelle": "https://www.northdata.com/Elyvera+Biotech+GmbH,+Wien/676291x",
          "datum": "2026-09-15"
        },
        {
          "text": "Affiliate-Programm mit klar kommunizierten Konditionen: 30% Provision, Lifetime-Commission auf den eigenen Rabattcode, Auszahlung am 1. und 15. jedes Monats per Banküberweisung oder USDC.",
          "text_en": "Affiliate program with clearly communicated terms: 30% commission, lifetime commission on the vendor's own discount code, payout on the 1st and 15th of every month via bank transfer or USDC.",
          "quelle": "https://europeptides.de/affiliate",
          "datum": "2026-09-15"
        },
        {
          "text": "Externe Aggregator-Verifizierung bei chemverify.com bestätigt CoA-Status (coa_verified: true) und nennt Janoshik Analytical explizit als Prüflabor; aggregierter Purity Score 99.58 auf Basis von 6 hinterlegten Chargen.",
          "text_en": "External aggregator verification at chemverify.com confirms CoA status (coa_verified: true) and explicitly names Janoshik Analytical as the testing lab; aggregated purity score of 99.58 based on 6 recorded batches.",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15"
        },
        {
          "text": "Trustpilot-Bewertung deutlich verbessert gegenüber früherem Stand: aktuell 4,3 'Excellent' bei 46 Bewertungen (76% 5-Sterne), Profil seit November 2025 verifiziert (Paid Trustpilot Subscription).",
          "text_en": "Trustpilot rating significantly improved compared to the prior status: currently 4.3 'Excellent' from 46 reviews (76% five-star), profile verified since November 2025 (paid Trustpilot subscription).",
          "quelle": "https://www.trustpilot.com/review/europeptides.de",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "ScamAdviser vergibt einen Trust Score von 0/100 und stuft europeptides.de als 'Very Likely Unsafe' ein, mit der Begründung 'identified by globaleyez for the violation of intellectual property rights' sowie einem niedrigen Tranco-Traffic-Rank. SSL-Zertifikat ist laut selber Quelle gültig.",
          "text_en": "ScamAdviser gives a Trust Score of 0/100 and rates europeptides.de as 'Very Likely Unsafe', citing 'identified by globaleyez for the violation of intellectual property rights' as well as a low Tranco traffic rank. Per the same source, the SSL certificate is valid.",
          "quelle": "https://www.scamadviser.com/check-website/europeptides.de",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Kein Altersgate: live im Checkout-Flow geprüft (Artikel in den Warenkorb gelegt, bis zur Checkout-Seite durchgeklickt): es wird lediglich E-Mail, Name, optional Telefonnummer und ein Häkchen zu AGB/Datenschutz abgefragt, keine Altersabfrage.",
          "text_en": "No age gate: verified live in the checkout flow (item added to cart, clicked through to the checkout page). Only email, name, an optional phone number and a checkbox for terms/privacy are requested, no age verification.",
          "quelle": "https://europeptides.de/checkout",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Nur zwei Zahlungsmethoden ohne Käuferschutz-Mechanismus: Banküberweisung (14 Tage Frist) und Kryptowährung (7 Tage Frist); keine Kreditkarte, kein PayPal.",
          "text_en": "Only two payment methods with no buyer-protection mechanism: bank transfer (14-day deadline) and cryptocurrency (7-day deadline); no credit card, no PayPal.",
          "quelle": "https://europeptides.de/help",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Sehr kleines Sortiment: aktuell nur 9 Produkte im Katalog gelistet. Von den 12 recherchierten Kernpeptiden fehlen TB-500, Semaglutid, Tirzepatid, CJC-1295, Ipamorelin und Tesamorelin vollständig.",
          "text_en": "Very small range: currently only 9 products listed in the catalog. Of the 12 core peptides researched, TB-500, Semaglutide, Tirzepatide, CJC-1295, Ipamorelin and Tesamorelin are completely missing.",
          "quelle": "https://europeptides.de/products",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Unabhängiger Vergleichsdienst (CertaPeptides) bewertete den Shop zuletzt mit Transparency Score 52/100 (Referenzwert eigener Shop: 68) und wies zum Stand 14.06.2026 auf eine Diskrepanz zwischen Trustpilot (damals 3,3/29) und einem On-Site-Testimonial-Widget (4,7/59) hin, das er als 'unverified platform' einstuft.",
          "text_en": "The independent comparison service CertaPeptides most recently rated the shop with a Transparency Score of 52/100 (its own reference shop benchmark: 68) and, as of 14.06.2026, pointed out a discrepancy between Trustpilot (then 3.3/29) and an on-site testimonial widget (4.7/59), which it classifies as an 'unverified platform'.",
          "quelle": "https://certapeptides.com/eu-research-peptide-suppliers/elyvera",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Auf dem Peptid-Vergleichsportal Peptigrity ist das Profil unbeansprucht ('unclaimed'), 0 Community-Reviews und 0 hinterlegte Labortests. Dort ist also keine unabhängige Datenbasis vorhanden (Stand der Portal-Daten laut Seite: 2026-09-14).",
          "text_en": "On the peptide comparison portal Peptigrity, the profile is unclaimed, with 0 community reviews and 0 recorded lab tests. So no independent data basis exists there (portal data as of 2026-09-14 per the page).",
          "quelle": "https://peptigrity.com/shops/europeptides-ELYVERA",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Trustpilot-Rezension (Raffail Goussis, 24.05.2026): bestellte 3 Fläschchen bakteriostatisches Wasser, erhielt stattdessen Kochsalzlösung als Ersatz ohne vorherige Information, da BAC-Wasser ausverkauft war.",
          "text_en": "Trustpilot review (Raffail Goussis, 24.05.2026): ordered 3 vials of bacteriostatic water, received saline solution as a substitute instead, without prior notice, because the BAC water was out of stock.",
          "quelle": "https://www.trustpilot.com/review/europeptides.de",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Trustpilot-Rezension ('Seb', 08.05.2026): gelegentlich Versandverzögerungen von 1-2 Wochen; derselbe Rezensent vermutet zudem gezielte Fake-Negativbewertungen gegen den Anbieter.",
          "text_en": "Trustpilot review ('Seb', 08.05.2026): occasional shipping delays of 1-2 weeks; the same reviewer also suspects targeted fake negative reviews against the vendor.",
          "quelle": "https://www.trustpilot.com/review/europeptides.de",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Trustpilot-Rezension ('Samira.', 10.02.2026): Preise werden als 'a bit high' empfunden, trotz insgesamt positiver Bewertung.",
          "text_en": "Trustpilot review ('Samira.', 10.02.2026): prices are perceived as 'a bit high', despite an overall positive rating.",
          "quelle": "https://www.trustpilot.com/review/europeptides.de",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "aenderungen": [
        {
          "text": "Rebrand bestätigt und aktuell sichtbar: Website zeigt Banner 'EuroPeptides is now ELYVERA' auf allen Seiten.",
          "text_en": "Rebrand confirmed and currently visible: the website shows a banner 'EuroPeptides is now ELYVERA' on all pages.",
          "quelle": "https://europeptides.de/",
          "datum": "2026-09-15"
        },
        {
          "text": "Firmensitz geändert: laut Firmenbuch-Eintrag (Northdata) wurde am 08.08.2026 eine Adressänderung publiziert. CertaPeptides notierte zum 14.06.2026 noch 'Patrizigasse 10, 1210 Vienna' als Impressum-Adresse; das aktuelle Impressum (15.09.2026) nennt 'Bösendorferstraße 4/20, 1010 Wien', identisch mit der aktuellen Northdata-Eintragung.",
          "text_en": "Company headquarters changed: per the commercial-register entry (Northdata), an address change was published on 08.08.2026. CertaPeptides still listed 'Patrizigasse 10, 1210 Vienna' as the legal-notice address as of 14.06.2026; the current legal notice (15.09.2026) names 'Bösendorferstraße 4/20, 1010 Vienna', identical to the current Northdata entry.",
          "quelle": "https://www.northdata.com/Elyvera+Biotech+GmbH,+Wien/676291x",
          "datum": "2026-09-15"
        },
        {
          "text": "Trustpilot-Score deutlich gestiegen: von 3,3 bei 29 Bewertungen (CertaPeptides-Snapshot vom 14.06.2026) auf 4,3 'Excellent' bei 46 Bewertungen (eigener Live-Check heute). Das ist ein Zuwachs von 17 Bewertungen in rund 3 Monaten bei gleichzeitiger Scoreverbesserung.",
          "text_en": "Trustpilot score has risen significantly: from 3.3 with 29 reviews (CertaPeptides snapshot of 14.06.2026) to 4.3 'Excellent' with 46 reviews (own live check today). That is an increase of 17 reviews in about 3 months alongside an improved score.",
          "quelle": "https://www.trustpilot.com/review/europeptides.de",
          "datum": "2026-09-15"
        },
        {
          "text": "Sortiment erweitert von 5 SKUs (CertaPeptides-Snapshot 14.06.2026) auf aktuell 9 Produkte; neu u.a. Epithalon, Mots-C und ein als 'Triple Receptor Agonist (Reta)' bezeichnetes Produkt in 10mg/50mg (mechanistische Beschreibung passt zu Retatrutid, Wirkstoffname wird auf der Seite jedoch nicht genannt).",
          "text_en": "Range expanded from 5 SKUs (CertaPeptides snapshot 14.06.2026) to currently 9 products; new additions include Epithalon, Mots-C and a product labeled 'Triple Receptor Agonist (Reta)' in 10mg/50mg (the mechanistic description matches Retatrutide, though the active-ingredient name is not stated on the page).",
          "quelle": "https://europeptides.de/products",
          "datum": "2026-09-15"
        },
        {
          "text": "Analytik-Umfang erweitert (siehe Stärken): Testpanel um Residual-TFA, Endotoxin, Mikrobiologie und pH ergänzt, gegenüber dem früheren Stand (nur HPLC/LCMS/Schwermetalle).",
          "text_en": "Analytical scope expanded (see strengths): test panel extended to include residual TFA, endotoxin, microbiology and pH, compared to the prior status (HPLC/LCMS/heavy metals only).",
          "quelle": "https://europeptides.de/standards",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15"
  },
  {
    "slug": "smart-peptides",
    "name": "Smart Peptides",
    "website": "https://smartpeptides.de/",
    "rechtstraeger": "Aktru Sp. z o.o.",
    "sitz": "Wieliczka, Polen (Lager DE)",
    "land": "EU",
    "gegruendet": null,
    "brand": {
      "farbe": "#A8690F",
      "logo": "assets/img/logos/smart-peptides.png",
      "logoMono": "assets/img/logos/smart-peptides_mono.png",
      "logoRatio": 4.48,
      "logoFallback": "assets/img/logos/_wordmarks/smart-peptides.svg",
      "logoQuelle": "https://smartpeptides.de/wp-content/uploads/2026/03/Ipamoreln-logo-1.1-1.svg"
    },
    "score": {
      "labor": 100,
      "recht": 50,
      "lieferung": 98,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 80,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": true,
      "labor": "Janoshik Analytical (verify.janoshik.com)",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": null,
      "ruo": false,
      "impressum": true,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": 1,
      "tageMax": 2,
      "laender": [
        "EU"
      ]
    },
    "zahlung": [
      "Karte",
      "Krypto",
      "Vorkasse"
    ],
    "affiliate": false,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": 4.74,
    "affiliateUrl": "https://smartpeptides.de/",
    "kurz": "Sitz in Wieliczka, Polen (Lager DE). Versand laut Website nach DACH. CoAs öffentlich einsehbar, extern geprüft.",
    "kurz_en": "Registered in Wieliczka, Polen (Lager DE). Ships to Germany/Austria/Switzerland according to the website. CoAs are publicly available and third-party tested.",
    "staerken": [
      "Externe Labortests (Janoshik Analytical)",
      "Rechtsträger benannt und belegt",
      "RUO-Kennzeichnung vorhanden",
      "Impressum vorhanden",
      "Schneller Versand nach DACH laut Website"
    ],
    "staerken_en": [
      "Third-party lab testing (Janoshik Analytical)",
      "Named, verifiable legal entity",
      "RUO labeling in place",
      "Legal notice (Impressum) present",
      "Fast shipping to Germany/Austria/Switzerland according to the website"
    ],
    "schwaechen": [],
    "schwaechen_en": [],
    "roteFlaggen": [
      "bewirbt Injektionspen trotz RUO",
      "kein Register/USt-IdNr im Impressum"
    ],
    "roteFlaggen_en": [
      "advertises an injection pen despite RUO status",
      "no register number/VAT ID in the legal notice"
    ],
    "quelle": "smartpeptides.de/impressum, peptidcheck24, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Öffentliche, chargenspezifische Analysezertifikate (COA) über das unabhängige Prüflabor Janoshik Analytical; bei ausgewählten Produkten (BPC-157+TB-500-Blend, GLOW, KLOW) sogar Vollpanel aus Reinheit/Identität (HPLC/LC-MS), Schwermetallen und Endotoxinen (LAL), nicht nur einfache Reinheitsprüfung.",
          "text_en": "Public, batch-specific certificates of analysis (CoA) via the independent test lab Janoshik Analytical; for selected products (BPC-157+TB-500 blend, GLOW, KLOW) even a full panel covering purity/identity (HPLC/LC-MS), heavy metals and endotoxins (LAL), not just a basic purity check.",
          "quelle": "https://smartpeptides.de/",
          "datum": "2026-09-15"
        },
        {
          "text": "Impressum mit Rechtsträger, ladungsfähiger Anschrift, Telefonnummer und E-Mail vorhanden (wenn auch ohne Handelsregisternummer, siehe Schwächen).",
          "text_en": "An imprint with legal entity, a service-of-process address, phone number and email is present (though without a trade register number, see weaknesses).",
          "quelle": "https://smartpeptides.de/impressum/",
          "datum": "2026-09-15"
        },
        {
          "text": "Kurze Lieferzeiten laut eigener Angabe (Deutschland 1-2 Werktage, EU 2-5 Werktage) über DHL/Deutsche Post/UPS, kostenloser Versand ab 100 Euro innerhalb Deutschlands.",
          "text_en": "Short delivery times per the vendor's own statement (Germany 1-2 business days, EU 2-5 business days) via DHL/Deutsche Post/UPS, free shipping within Germany from €100.",
          "quelle": "https://smartpeptides.de/versand/",
          "datum": "2026-09-15"
        },
        {
          "text": "Ungewöhnlich ausführliche Produkttexte mit expliziter Nennung der Datenlimitationen (Befunde fast ausschließlich aus Tier-/Zellmodellen, keine kontrollierten Humanstudien, keine Zulassung als Arzneimittel) sowie unaufgefordertem Hinweis auf die WADA-Verbotsliste bei BPC-157 seit 2022, für einen RUO-Shop selten transparente Risikokommunikation.",
          "text_en": "Unusually detailed product texts that explicitly state the data limitations (findings almost exclusively from animal/cell models, no controlled human studies, no approval as a medicinal product) plus an unprompted note that BPC-157 has been on the WADA prohibited list since 2022; unusually transparent risk communication for a RUO shop.",
          "quelle": "https://smartpeptides.de/product/bpc157/",
          "datum": "2026-09-15"
        },
        {
          "text": "Scamadviser stuft die Domain mit einem Trust-Score von 96/100 als \"Very Likely Safe\" ein; einziger genannter Negativpunkt ist ein niedriger Tranco-Traffic-Rang, DNSFilter bewertet die Seite als sicher.",
          "text_en": "Scamadviser rates the domain with a trust score of 96/100 as \"Very Likely Safe\"; the only negative point mentioned is a low Tranco traffic rank, and DNSFilter rates the site as safe.",
          "quelle": "https://www.scamadviser.com/check-website/smartpeptides.de und https://www.scamadviser.com/de/website-prufen/smartpeptides.de",
          "datum": "2026-09-15"
        },
        {
          "text": "Umfangreiches Content-/Wissens-Blog mit 45 indexierten Artikeln (Dosierungs-Guides, Wirkstoffvergleiche GLP-1-Peptide, eigener Artikel zur Rechtslage \"peptide-legal-deutschland\"), deutlich mehr redaktionelles Investment als bei vielen RUO-Shops.",
          "text_en": "An extensive content/knowledge blog with 45 indexed articles (dosage guides, GLP-1 peptide comparisons, an own article on the legal situation \"peptide-legal-deutschland\"), noticeably more editorial investment than at many RUO shops.",
          "quelle": "https://smartpeptides.de/post-sitemap.xml",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Impressum enthält weiterhin keine Handelsregisternummer, kein NIP/KRS (polnisches Pendant) und keine USt-IdNr, nur Firmenname, Anschrift, Telefon und E-Mail, der am 06.09.2026 notierte Befund ist unverändert aktuell.",
          "text_en": "The imprint still contains no trade register number, no NIP/KRS (the Polish equivalent) and no VAT ID, only company name, address, phone and email; the finding noted on 06.09.2026 remains unchanged and current.",
          "quelle": "https://smartpeptides.de/impressum/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Das Trustpilot-Profil für smartpeptides.de existiert nicht mehr: Trustpilot zeigt \"This profile has been removed - The business you're trying to find goes against our guidelines and is no longer visible on Trustpilot.\" Zeitpunkt der Entfernung unbekannt, da bei der Recherche vom 06.09.2026 Trustpilot nicht geprüft wurde.",
          "text_en": "The Trustpilot profile for smartpeptides.de no longer exists: Trustpilot shows \"This profile has been removed - The business you're trying to find goes against our guidelines and is no longer visible on Trustpilot.\" The removal date is unknown, since Trustpilot was not checked during the 06.09.2026 research.",
          "quelle": "https://www.trustpilot.com/review/smartpeptides.de",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Smart Peptides ist nicht im Anbieter-Katalog von chemverify.com gelistet (Abfrage über /api/catalog lieferte 11 andere EU-Peptidshops, Smart Peptides fehlt vollständig).",
          "text_en": "Smart Peptides is not listed in chemverify.com's vendor catalog (a query via /api/catalog returned 11 other EU peptide shops; Smart Peptides is entirely absent).",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Der Shop verkauft aktiv einen vorgefüllten \"SmartPen Retatrutide 40 mg\" (399,90 Euro) inklusive 12 sterilen 32G-Nadeln als einsatzfertiges Injektionssystem, explizit beschrieben für die \"Anwendung: subkutan (im Forschungskontext)\" und im Fließtext direkt mit realen Abnehmspritzen (Wegovy/Mounjaro) verglichen. Das ist eine deutliche Eskalation gegenüber dem Fund vom 06.09.2026 (\"bewirbt Injektionspen trotz RUO\"), es handelt sich nun um ein tatsächliches Verkaufsprodukt inklusive Nadel-Set, nicht nur Werbung.",
          "text_en": "The shop actively sells a pre-filled \"SmartPen Retatrutide 40 mg\" (€399.90) including 12 sterile 32G needles as a ready-to-use injection system, explicitly described for \"application: subcutaneous (in a research context)\" and directly compared in the body text to real weight-loss injectables (Wegovy/Mounjaro). This is a clear escalation compared to the 06.09.2026 finding (\"promotes an injection pen despite RUO status\"): it is now an actual product for sale including a needle set, not just advertising.",
          "quelle": "https://smartpeptides.de/product/retatrutide-pen-40mg/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Die Bankverbindung für Vorkasse-Zahlungen lautet auf eine Privatperson, nicht auf die im Impressum genannte Rechtsträger-Firma Aktru Sp. z o.o. Die Seite weist zudem aktiv auf einen kürzlichen Bankwechsel hin (\"Unsere Bankverbindung hat sich geändert\").",
          "text_en": "The bank account for advance-payment transfers is held by a private individual, not by the legal entity Aktru Sp. z o.o. named in the imprint. The site also actively points out a recent bank change (\"Our bank details have changed\").",
          "quelle": "https://smartpeptides.de/versand/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Kartenzahlung ist nicht mehr verfügbar. Aktuell werden nur noch Vorkasse (Banküberweisung) und Kryptowährungen (BTC, USDT, USDC) akzeptiert. Die Recherche vom 06.09.2026 hatte noch \"Karte\" als Zahlungsoption vermerkt.",
          "text_en": "Card payment is no longer available. Currently only advance payment (bank transfer) and cryptocurrencies (BTC, USDT, USDC) are accepted. The 06.09.2026 research had still noted \"card\" as a payment option.",
          "quelle": "https://smartpeptides.de/versand/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Fünf der zwölf recherchierten Kernpeptide (CJC-1295, Tesamorelin, Melanotan-2, Semaglutid, Tirzepatid) fehlen in der eigenen Startseiten-Übersicht \"ALLE GEPRÜFTEN PRODUKTE\", obwohl der dazugehörige Hinweistext explizit sagt \"Produkte ohne aktuellen Bericht werden nicht angezeigt\". Auf den jeweiligen Einzelproduktseiten wird für diese fünf Peptide dennoch ein Janoshik-COA-Badge angezeigt, ein dokumentierter Widerspruch zwischen der eigenen Kuratierungs-Aussage und den Produktseiten-Badges.",
          "text_en": "Five of the twelve core peptides researched (CJC-1295, tesamorelin, melanotan-2, semaglutide, tirzepatide) are missing from the homepage's own \"ALL VERIFIED PRODUCTS\" overview, even though the accompanying note explicitly states \"Products without a current report are not shown\". On the respective individual product pages, however, a Janoshik CoA badge is still shown for these five peptides, a documented contradiction between the site's own curation claim and the product-page badges.",
          "quelle": "https://smartpeptides.de/ (Startseite, Abschnitt COA) im Abgleich mit https://smartpeptides.de/product/cjc-1295/, /product/tesamorelin/, /product/mt2/, /product/semaglutide-10mg/, /product/tirzepatide-10mg/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Oral einzunehmende Kapselprodukte (u.a. BPC-157 Kapseln, Retatrutide Kapseln, GHK-Cu Kapseln) werden unter Wirkungs-Kategorien wie \"Heilung & Regeneration\", \"Stoffwechsel & Gewicht\" und \"Ästhetik & Haut\" beworben, obwohl es sich laut eigener Produktbeschreibung um nicht zugelassene RUO-Substanzen handelt. Die Kategorie-Beschriftung grenzt an implizite Wirkversprechen für ein Forschungsprodukt ohne Zulassung.",
          "text_en": "Orally taken capsule products (including BPC-157 capsules, retatrutide capsules, GHK-Cu capsules) are marketed under effect-based categories such as \"Healing & Regeneration\", \"Metabolism & Weight\" and \"Aesthetics & Skin\", even though per the vendor's own product description these are unapproved RUO substances. This category labeling borders on implied efficacy claims for a research product that has no approval.",
          "quelle": "https://smartpeptides.de/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Community-Meinung (Reddit, r/PeptideDeutschland, 3 Threads mit insgesamt ca. 130+ Kommentaren laut Google-Indexierung): Mehrere Nutzer berichten, ihr bestelltes \"Reta\" (Retatrutide) zeige keinerlei spürbare Wirkung; ein Nutzer (u/WatsonsWeed) behauptet unbelegt, es enthalte \"überhaupt kein Reta sondern GLP-1\". Keine Laboranalyse der Nutzer vorgelegt, reine Verdachtsäußerung.",
          "text_en": "Community opinion (Reddit, r/PeptideDeutschland, 3 threads with a combined roughly 130+ comments per Google indexing): several users report that their ordered \"Reta\" (retatrutide) showed no noticeable effect at all; one user (u/WatsonsWeed) makes the unsubstantiated claim that it contains \"no Reta at all, just GLP-1\". No lab analysis was provided by these users, it is a mere suspicion.",
          "quelle": "https://www.reddit.com/r/PeptideDeutschland/comments/1utcyvg/hat_jemand_erfahrungen_mit_smartpeptidesde/ und https://www.reddit.com/r/PeptideDeutschland/comments/1vshaak/meinung_zum_retatrutide_pen_von_smart_peptidesde/",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Community-Meinung (Reddit): Mindestens zwei voneinander unabhängige Berichte desselben Nutzers (u/Automatic-Row-9701) über einen gebrochenen Drehmechanismus des SmartPen nach 1-2 Anwendungen, jeweils mit kostenlosem Ersatz durch den Shop.",
          "text_en": "Community opinion (Reddit): at least two independent reports from the same user (u/Automatic-Row-9701) about a broken dial mechanism on the SmartPen after 1-2 uses, each time with a free replacement from the shop.",
          "quelle": "https://www.reddit.com/r/PeptideDeutschland/comments/1vshaak/meinung_zum_retatrutide_pen_von_smart_peptidesde/",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Community-Meinung (Reddit): Vorwurf kuratierter/manipulierter Website-Bewertungen, da laut Nutzeraussage jede Bewertung vor Veröffentlichung vom Betreiber freigegeben werden müsse und negative Erfahrungen dadurch nicht sichtbar würden. Unbelegt, aber plausibel angesichts der durchgängig positiven On-Site-Testimonials auf allen geprüften Produktseiten.",
          "text_en": "Community opinion (Reddit): an allegation of curated/manipulated website reviews, since per one user's statement every review must be approved by the operator before publication, meaning negative experiences would not become visible. Unsubstantiated, but plausible given the consistently positive on-site testimonials across every product page checked.",
          "quelle": "https://www.reddit.com/r/PeptideDeutschland/comments/1utcyvg/hat_jemand_erfahrungen_mit_smartpeptidesde/",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Community-Meinung (Reddit): Spekulation zu widersprüchlichen Angaben zur Geschäftsführung (genannt werden \"Sara Rohmeyer\", \"Markus\" und ein Reddit-Account-Inhaber \"marcin karol stypa\") ohne auffindbare Online-Präsenz dieser Personen. Unbelegte Behauptung, keine eigene Verifikation möglich.",
          "text_en": "Community opinion (Reddit): speculation about contradictory statements regarding management (names mentioned include \"Sara Rohmeyer\", \"Markus\" and a Reddit account holder \"marcin karol stypa\") with no findable online presence for these individuals. An unsubstantiated claim, no independent verification was possible.",
          "quelle": "https://www.reddit.com/r/PeptideDeutschland/comments/1utcyvg/hat_jemand_erfahrungen_mit_smartpeptidesde/",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Community-Meinung (Reddit): Vorwurf lückenhafter Chargenprüfung (\"Testen nur sporadisch/unvollständig. Teilweise ohne Batch-Nummern oder gänzlich ohne COA\"), was der Selbstdarstellung des Shops widerspricht. Nicht durch eigene Stichprobe verifiziert.",
          "text_en": "Community opinion (Reddit): an allegation of patchy batch testing (\"only tested sporadically/incompletely, sometimes without batch numbers or entirely without a CoA\"), which contradicts the shop's own self-presentation. Not verified through my own sampling.",
          "quelle": "https://www.reddit.com/r/PeptideDeutschland/comments/1vw4bqh/ich_m%C3%B6chte_die_preise_nicht_kommentieren_ich/",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Community-Meinung (Reddit): Mehrfache Preis-Kritik im Vergleich zu chinesischen Direktanbietern und anderen EU-Shops (\"10x so teuer\", \"typische Reseller-Preise\", \"Ultra lächerlich\").",
          "text_en": "Community opinion (Reddit): repeated price criticism compared to direct Chinese vendors and other EU shops (\"10x as expensive\", \"typical reseller prices\", \"utterly ridiculous\").",
          "quelle": "https://www.reddit.com/r/PeptideDeutschland/comments/1utcyvg/hat_jemand_erfahrungen_mit_smartpeptidesde/",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Community-Meinung (Reddit): Ein Nutzer (u/Western-Elevator-109) berichtet von einer Teillieferung ohne Lieferschein und wenig hilfreichem Support, nach eigener Aussage 139 Euro Verlust. Ein anderer Nutzer (u/Automatic-Row-9701) berichtet von einer Vorkasse-Zahlung, die der Support trotz vorheriger Zahlungsbestätigung per Mail als \"nicht gefunden\" bezeichnete, und wirft dem Shop betrügerisches Verhalten vor. Beides Einzelfallschilderungen, nicht unabhängig verifiziert.",
          "text_en": "Community opinion (Reddit): one user (u/Western-Elevator-109) reports a partial delivery with no delivery note and unhelpful support, describing a €139 loss. Another user (u/Automatic-Row-9701) reports an advance payment that support labeled \"not found\" despite an earlier email payment confirmation, and accuses the shop of fraudulent conduct. Both are individual accounts, not independently verified.",
          "quelle": "https://www.reddit.com/r/PeptideDeutschland/comments/1utcyvg/hat_jemand_erfahrungen_mit_smartpeptidesde/ und https://www.reddit.com/r/PeptideDeutschland/comments/1vw4bqh/ich_m%C3%B6chte_die_preise_nicht_kommentieren_ich/",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "aenderungen": [
        {
          "text": "Eskalation vom reinen Bewerben eines Injektionspens (Fund 06.09.2026) zum tatsächlichen Verkauf eines vorgefüllten \"SmartPen Retatrutide 40 mg\" inklusive 12 sterilen Nadeln für 399,90 Euro. Laut Reddit-Thread-Timestamps war der Pen spätestens vor 27 Tagen (ca. 19.08.2026) im Sortiment.",
          "text_en": "Escalation from merely advertising an injection pen (found 06.09.2026) to actually selling a pre-filled \"SmartPen Retatrutide 40 mg\" including 12 sterile needles for €399.90. Per Reddit thread timestamps, the pen was in the range by at least 27 days ago (approx. 19.08.2026).",
          "quelle": "https://smartpeptides.de/product/retatrutide-pen-40mg/",
          "datum": "2026-09-15"
        },
        {
          "text": "Neue Produktlinie \"Kapseln\" eingeführt (u.a. BPC-157, TB-500, GHK-Cu, Retatrutide, MOTS-C, 5-Amino-1MQ, SLU-PP-332, KPV, NAD, Methylenblau sowie Kombi-Kapseln BPC-157+TB-500), auf der Startseite mit \"★ JETZT NEU\" / \"NEU\"-Badges markiert.",
          "text_en": "New \"capsules\" product line introduced (including BPC-157, TB-500, GHK-Cu, retatrutide, MOTS-C, 5-amino-1MQ, SLU-PP-332, KPV, NAD, methylene blue, plus combination BPC-157+TB-500 capsules), marked on the homepage with \"★ NEW NOW\" / \"NEW\" badges.",
          "quelle": "https://smartpeptides.de/",
          "datum": "2026-09-15"
        },
        {
          "text": "Zahlungsmethoden eingeschränkt: Kartenzahlung ist entfallen, nur noch Vorkasse und Krypto verfügbar (06.09.2026 wurde noch \"Karte\" als Option notiert). Gleichzeitig aktiver Hinweis auf einen kürzlichen Wechsel der Vorkasse-Bankverbindung.",
          "text_en": "Payment methods restricted: card payment has been dropped, only advance payment and crypto are now available (\"card\" was still noted as an option on 06.09.2026). At the same time there is an active notice about a recent change to the advance-payment bank details.",
          "quelle": "https://smartpeptides.de/versand/",
          "datum": "2026-09-15"
        },
        {
          "text": "Sortiment und Content deutlich ausgebaut: mindestens 48 Produkte laut Produkt-Sitemap (u.a. neue Wirkstoffe Semaglutid, Tirzepatid, AHK-Cu, ACE-031, VIP, DSIP, Thymosin Alpha-1, SS-31 sowie Blends GLOW/KLOW/Triple-G) und 45 Blog-Artikel.",
          "text_en": "Range and content noticeably expanded: at least 48 products per the product sitemap (including new substances semaglutide, tirzepatide, AHK-Cu, ACE-031, VIP, DSIP, thymosin alpha-1, SS-31, plus GLOW/KLOW/Triple-G blends) and 45 blog articles.",
          "quelle": "https://smartpeptides.de/product-sitemap.xml und https://smartpeptides.de/post-sitemap.xml",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15"
  },
  {
    "slug": "peak-peptide",
    "name": "Peak Peptide",
    "website": "https://peakpeptide.com/",
    "rechtstraeger": null,
    "sitz": null,
    "land": "EU",
    "gegruendet": null,
    "brand": {
      "farbe": "#6C3FA6",
      "logo": "assets/img/logos/peak-peptide.png",
      "logoMono": "assets/img/logos/peak-peptide_mono.png",
      "logoRatio": 2.81,
      "logoFallback": "assets/img/logos/_wordmarks/peak-peptide.svg",
      "logoQuelle": "https://peakpeptide.com/favicon-128.png"
    },
    "score": {
      "labor": 100,
      "recht": 50,
      "lieferung": 98,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 80,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": true,
      "labor": "Liquilabs s.r.o. (CZ), HPLC/LC-MS",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": null,
      "ruo": true,
      "impressum": false,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": 1,
      "tageMax": 2,
      "laender": [
        "EU"
      ]
    },
    "zahlung": [
      "SEPA",
      "Krypto"
    ],
    "affiliate": false,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": 5.19,
    "affiliateUrl": "https://peakpeptide.com/",
    "kurz": "Sitz nicht ermittelbar. Versand laut Website nach DACH. CoAs öffentlich einsehbar, extern geprüft.",
    "kurz_en": "Registered address not ascertainable. Ships to Germany/Austria/Switzerland according to the website. CoAs are publicly available and third-party tested.",
    "staerken": [
      "Externe Labortests (Liquilabs s.r.o.)",
      "RUO-Kennzeichnung vorhanden",
      "Schneller Versand nach DACH laut Website"
    ],
    "staerken_en": [
      "Third-party lab testing (Liquilabs s.r.o.)",
      "RUO labeling in place",
      "Fast shipping to Germany/Austria/Switzerland according to the website"
    ],
    "schwaechen": [
      "Kein auffindbares Impressum (Stand 06.09.2026)",
      "Rechtsträger nicht ermittelbar (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No findable legal notice (as of Sep 6, 2026)",
      "Legal entity not ascertainable (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "Sitz nicht belegt"
    ],
    "roteFlaggen_en": [
      "registered address not verifiable"
    ],
    "quelle": "chemverify Katalog, WebSearch, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Unabhängiges Drittlabor Liquilabs s.r.o. (Czechia) testet jede Charge; auf jeder Produktseite ist ein vollständiger, chargenspezifischer Prüfbericht öffentlich einsehbar: HPLC-Reinheit, LC-MS-Identität, Bakterien-Endotoxin (LAL, USP<85>), 7-Metall-Schwermetallpanel (ICP-MS, USP<232>), FTIR-Spektrum und Retentionszeit, inkl. Chargennummer und Veröffentlichungsdatum.",
          "text_en": "Independent third-party lab Liquilabs s.r.o. (Czechia) tests every batch; a full batch-specific test report is publicly viewable on each product page: HPLC purity, LC-MS identity, bacterial endotoxin (LAL, USP<85>), a 7-metal heavy-metal panel (ICP-MS, USP<232>), FTIR spectrum and retention time, including batch number and publication date.",
          "quelle": "https://peakpeptide.com/products/bpc-157",
          "datum": "2026-09-15"
        },
        {
          "text": "Das Prüfschema (LAL-Endotoxin + 7-Metall-ICP-MS) geht laut anbieterseitiger Vergleichstabelle über den Community-Standard Janoshik hinaus (Janoshik testet laut dieser Tabelle kein Endotoxin und nur 4 von 7 Metallen). Das ist eine anbieterseitige Eigenangabe, von mir nicht unabhängig bei Janoshik gegengeprüft.",
          "text_en": "According to the vendor's own comparison table, the testing scheme (LAL endotoxin plus 7-metal ICP-MS) exceeds the community standard Janoshik (per that table, Janoshik does not test for endotoxin and covers only 4 of 7 metals). This is a vendor self-declaration that I did not independently verify against Janoshik.",
          "quelle": "https://peakpeptide.com/standards",
          "datum": "2026-09-15"
        },
        {
          "text": "Legal Notice / Impressum-Seite ist inzwischen vorhanden (vorher nicht auffindbar) unter /legal-notice, mit Firmenname und Kontakt-E-Mail sowie Hinweis auf die EU-OS-Streitschlichtungsplattform.",
          "text_en": "A Legal Notice / imprint page now exists (previously not findable) at /legal-notice, with company name and contact email plus a reference to the EU ODR dispute-resolution platform.",
          "quelle": "https://peakpeptide.com/legal-notice",
          "datum": "2026-09-15"
        },
        {
          "text": "Zahlungsmethoden umfassen inzwischen auch reguläre Kartenzahlung (Visa, Mastercard, Amex, Apple Pay, Google Pay) zusätzlich zu SEPA und Krypto (10% Rabatt bei Kryptozahlung).",
          "text_en": "Payment methods now also include regular card payment (Visa, Mastercard, Amex, Apple Pay, Google Pay) in addition to SEPA and crypto (10% discount for crypto payment).",
          "quelle": "https://peakpeptide.com/",
          "datum": "2026-09-15"
        },
        {
          "text": "Trustpilot-Profil (seit April 2026 vom Unternehmen beansprucht/verifiziert): 4,5/5 bei 32 Bewertungen, 94% 5-Sterne, mehrere Beiträge (v.a. AT/DE) loben schnelle Lieferung, reaktionsschnellen WhatsApp-Support und verfügbare CoAs. Community-Meinung (Trustpilot, 20 Einzelbewertungen gesichtet).",
          "text_en": "Trustpilot profile (claimed/verified by the company since April 2026): 4.5/5 across 32 reviews, 94% five-star; several reviews (mostly AT/DE) praise fast delivery, responsive WhatsApp support and available CoAs. Community opinion (Trustpilot, 20 individual reviews reviewed).",
          "quelle": "https://www.trustpilot.com/review/peakpeptide.com",
          "datum": "2026-09-15"
        },
        {
          "text": "Breites, wachsendes Sortiment: 33 Produkt-URLs im Sitemap (u.a. Nootropika wie Semax, Selank, Cerebrolysin, DSIP sowie GLP-1-Rezeptor-Agonist-Analoga), Tirzepatid und Retatrutid werden als 'DUAL AGONIST' bzw. 'TRIPLE AGONIST' geführt (Wirkstoffidentität im Labor-Prüfbericht auf der jeweiligen Produktseite bestätigt).",
          "text_en": "Broad, growing range: 33 product URLs in the sitemap (including nootropics such as Semax, Selank, Cerebrolysin, DSIP, and GLP-1 receptor agonist analogs); tirzepatide and retatrutide are listed as 'DUAL AGONIST' and 'TRIPLE AGONIST' respectively (substance identity confirmed by the lab report on the respective product page).",
          "quelle": "https://peakpeptide.com/sitemap.xml",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Legal Notice (/legal-notice) ist rechtlich unvollständig: genannt werden nur der Firmenname 'PEAK PROTOCOL', die Website und eine Kontakt-E-Mail (office@peakpeptide.com). Es fehlen Postanschrift, Rechtsform, Handelsregisternummer/-gericht, Geschäftsführer-Name und USt-ID. Für einen an DE/EU-Kunden gerichteten Shop ist das eine erhebliche rechtliche Lücke (Impressumspflicht faktisch nicht erfüllt, obwohl eine Seite existiert).",
          "text_en": "The Legal Notice (/legal-notice) is legally incomplete: it names only the company name 'PEAK PROTOCOL', the website and a contact email (office@peakpeptide.com). Missing are a postal address, legal form, trade register number/court, managing director's name and VAT ID. For a shop targeting DE/EU customers this is a significant legal gap (the German imprint requirement is not actually met, even though a page exists).",
          "quelle": "https://peakpeptide.com/legal-notice",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Terms & Conditions §8 'Governing Law' nennen die Rechtsordnung nicht konkret ('the jurisdiction in which PEAK_PEPTIDE is registered'): Weder Land noch Gerichtsstand werden benannt.",
          "text_en": "Terms & Conditions section 8, 'Governing Law', does not name a concrete jurisdiction ('the jurisdiction in which PEAK_PEPTIDE is registered'): neither a country nor a venue is specified.",
          "quelle": "https://peakpeptide.com/terms",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Widersprüchliche Standort-Signale: Das Trustpilot-Firmenprofil nennt als Kontaktadresse 'Split, Croatia', die im Footer verlinkte WhatsApp-Nummer trägt eine österreichische Vorwahl (+436507193038), und Scamadviser-Metadaten/Blogtitel des Shops adressieren explizit 'Österreich' ('peptide supplier Austria', 'GHK-Cu kaufen Österreich'). Ein eindeutiger, einheitlicher Firmensitz ist aus keiner dieser Quellen ableitbar.",
          "text_en": "Contradictory location signals: the Trustpilot company profile lists 'Split, Croatia' as the contact address, the WhatsApp number linked in the footer carries an Austrian country code (+436507193038), and the shop's Scamadviser metadata/blog titles explicitly address 'Austria' ('peptide supplier Austria', 'buy GHK-Cu Austria'). No single, consistent company location can be derived from any of these sources.",
          "quelle": "https://www.trustpilot.com/review/peakpeptide.com ; https://www.scamadviser.com/check-website/peakpeptide.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Scamadviser: WHOIS-Daten des Domaininhabers sind als 'hidden' (privacy-geschützt) ausgewiesen; Registrar ist GoDaddy.com LLC (USA), Server/ISP Cloudflare Inc. (USA). Domain erst seit 2025-02-02 registriert (~1 Jahr alt). Daraus lässt sich kein Firmensitz ableiten, es bestätigt aber die fehlende Transparenz zur registrierten Rechtsperson.",
          "text_en": "Scamadviser: the domain owner's WHOIS data is shown as 'hidden' (privacy-protected); registrar is GoDaddy.com LLC (USA), server/ISP Cloudflare Inc. (USA). The domain has only been registered since 2025-02-02 (about 1 year old). No company location can be derived from this, but it confirms the lack of transparency about the registered legal entity.",
          "quelle": "https://www.scamadviser.com/check-website/peakpeptide.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Produktseite Epitalon zeigt aktuell 'SOLD OUT' (10mg/50mg, €39.90) und '// COA IN PROGRESS' (kein Prüfbericht verfügbar), während ein an anderer Stelle eingeblendetes Cross-Sell-Widget 'Epithalon' (10/50/100mg, €29.90) als 'In stock' mit CoA-Häkchen ausweist. Das ist eine Dateninkonsistenz zwischen Produktseite und Empfehlungs-Widget, für Kunden verwirrend.",
          "text_en": "The Epitalon product page currently shows 'SOLD OUT' (10mg/50mg, €39.90) and '// COA IN PROGRESS' (no test report available), while a cross-sell widget shown elsewhere lists 'Epithalon' (10/50/100mg, €29.90) as 'In stock' with a CoA checkmark. This is a data inconsistency between the product page and the recommendation widget, confusing for customers.",
          "quelle": "https://peakpeptide.com/products/epitalon",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "CJC-1295-Produktseite zeigt widersprüchliche Preisangaben im Seitentext ('5mg €36.90 €57.90' als Größenoption, aber €29.90 als aktiver Add-to-Cart-Preis). Das lässt sich aus dem gerenderten Text nicht eindeutig auflösen und wirkt wie ein Anzeigefehler.",
          "text_en": "The CJC-1295 product page shows contradictory pricing in the page text ('5mg €36.90 €57.90' as a size option, but €29.90 as the active add-to-cart price). This cannot be clearly resolved from the rendered text and looks like a display error.",
          "quelle": "https://peakpeptide.com/products/cjc-1295",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Semaglutid ist nicht im Sortiment gelistet (vollständige Sitemap mit 33 Produkt-URLs geprüft, kein Treffer für 'semaglutid' o.ä.).",
          "text_en": "Semaglutide is not listed in the range (full sitemap with 33 product URLs checked, no match for 'semaglutide' or similar).",
          "quelle": "https://peakpeptide.com/sitemap.xml",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Negative Trustpilot-Bewertung (Milan, DE, 14.08.2026): Selank bestellt, obwohl Website CoA/SDS 'mit jeder Lieferung' zusagte, wurde nichts aktiv mitgeliefert; auf zwei E-Mail-Nachfragen mehrere Tage keine Antwort erhalten; Anbieter hat danach die Website-Angabe auf 'wird gerade getestet' geändert. Community-Meinung (Trustpilot, 1 Beitrag), aber konkret und nachvollziehbar geschildert.",
          "text_en": "Negative Trustpilot review (Milan, DE, 08/14/2026): ordered Selank; although the website promised CoA/SDS 'with every delivery', nothing was actively included; no reply was received to two email inquiries over several days; the vendor subsequently changed the website wording to 'currently being tested'. Community opinion (Trustpilot, 1 review), but described concretely and plausibly.",
          "quelle": "https://www.trustpilot.com/review/peakpeptide.com",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Negative Trustpilot-Bewertung (aaa, DE, 03.09.2026): Retatrutid bestellt, Versand Österreich→Deutschland dauerte 8 Tage statt der beworbenen 24–48h, Kunde bezweifelt trotz vorgelegter Analysezertifikate die Wirkung des Produkts (Wirkaussage ist bei RUO-Produkten ohnehin nicht einlösbar/kein Bewertungskriterium). Anbieter hat öffentlich geantwortet und Nachbesserung angeboten. Community-Meinung (Trustpilot, 1 Beitrag).",
          "text_en": "Negative Trustpilot review (aaa, DE, 09/03/2026): ordered retatrutide; shipping from Austria to Germany took 8 days instead of the advertised 24-48h; the customer doubts the product's effect despite the certificates of analysis provided (an efficacy claim is not something a RUO product can redeem anyway, and is not an evaluation criterion here). The vendor responded publicly and offered a remedy. Community opinion (Trustpilot, 1 review).",
          "quelle": "https://www.trustpilot.com/review/peakpeptide.com",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "aenderungen": [
        {
          "text": "Impressum/Legal Notice ist neu vorhanden (Recherche 06.09.2026 hatte impressum:false ergeben). Es bleibt aber weiterhin ohne Postanschrift, Handelsregisternummer oder Rechtsform, also weiterhin unzureichend.",
          "text_en": "An imprint/legal notice now exists (the 09/06/2026 research had found impressum:false), but it still lacks a postal address, trade register number or legal form, so it remains insufficient.",
          "quelle": "https://peakpeptide.com/legal-notice",
          "datum": "2026-09-15"
        },
        {
          "text": "Zahlungsmethoden erweitert: zusätzlich zu SEPA und Krypto (Stand 06.09.2026) jetzt auch reguläre Kartenzahlung (Visa, Mastercard, Amex, Apple Pay, Google Pay).",
          "text_en": "Payment methods expanded: in addition to SEPA and crypto (as of 09/06/2026), regular card payment (Visa, Mastercard, Amex, Apple Pay, Google Pay) is now also available.",
          "quelle": "https://peakpeptide.com/",
          "datum": "2026-09-15"
        },
        {
          "text": "Neues Angebot 'Discovery Call': bezahlte 1:1-Beratung mit 'Jason' (30/60 Minuten, ab €60), explizit als 'Educational mentorship for research purposes only, not medical advice' deklariert.",
          "text_en": "New offering 'Discovery Call': paid 1:1 consulting with 'Jason' (30/60 minutes, from €60), explicitly declared as 'Educational mentorship for research purposes only, not medical advice'.",
          "quelle": "https://peakpeptide.com/",
          "datum": "2026-09-15"
        },
        {
          "text": "Sortiment deutlich ausgeweitet: Sitemap zeigt 33 Produkt-URLs (u.a. Tirzepatid/Retatrutid-Analoga als 'DUAL/TRIPLE AGONIST', diverse Nootropika), gegenüber einem schmaleren Katalog zum Stand der Recherche vom 06.09.2026 (dort nicht im Detail dokumentiert). Der Ausbau ist aber über Blog-Daten und Sitemap-lastmod-Zeitstempel, überwiegend 2026-06 bis 2026-08, nachvollziehbar.",
          "text_en": "Range significantly expanded: the sitemap shows 33 product URLs (including tirzepatide/retatrutide analogs listed as 'DUAL/TRIPLE AGONIST', various nootropics), compared to a narrower catalog at the time of the 09/06/2026 research (not documented in detail there). The expansion is traceable via blog data and sitemap lastmod timestamps, mostly from 2026-06 to 2026-08.",
          "quelle": "https://peakpeptide.com/sitemap.xml",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15"
  },
  {
    "slug": "beyond-peptides",
    "name": "Beyond Peptides",
    "website": "https://beyond-peptides.com/",
    "rechtstraeger": "FORGETRADE LIMITED (HK Reg. 80355843)",
    "sitz": "Hongkong",
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#8C1B4F",
      "logo": "assets/img/logos/beyond-peptides.png",
      "logoMono": "assets/img/logos/beyond-peptides_mono.png",
      "logoRatio": 3.93,
      "logoFallback": "assets/img/logos/_wordmarks/beyond-peptides.svg",
      "logoQuelle": "https://beyond-peptides.com/wp-content/uploads/2024/09/color-logo-1.svg"
    },
    "score": {
      "labor": 100,
      "recht": 100,
      "lieferung": 14,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 80,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": true,
      "labor": "eigene HPLC-PDFs je Charge, Labor nicht genannt",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": true,
      "ruo": true,
      "impressum": true,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": 7,
      "tageMax": 17,
      "laender": [
        "EU",
        "US",
        "UK",
        "CA",
        "ASIA"
      ]
    },
    "zahlung": [
      "Überweisung",
      "Krypto",
      "Karte"
    ],
    "affiliate": true,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": 5.04,
    "affiliateUrl": "https://beyond-peptides.com/",
    "kurz": "Sitz in Hongkong. Versand laut Website nach DACH. CoAs öffentlich einsehbar, externe Prüfung nicht bestätigt.",
    "kurz_en": "Registered in Hongkong. Ships to Germany/Austria/Switzerland according to the website. CoAs are publicly available, third-party testing not confirmed.",
    "staerken": [
      "Öffentlich einsehbare CoAs",
      "Rechtsträger benannt und belegt",
      "RUO-Kennzeichnung vorhanden",
      "Impressum vorhanden"
    ],
    "staerken_en": [
      "Publicly available CoAs",
      "Named, verifiable legal entity",
      "RUO labeling in place",
      "Legal notice (Impressum) present"
    ],
    "schwaechen": [
      "Kein Altersgate (Stand 06.09.2026)",
      "Lange Lieferzeit nach DACH laut Website"
    ],
    "schwaechen_en": [
      "No age verification gate (as of Sep 6, 2026)",
      "Long delivery time to Germany/Austria/Switzerland according to the website"
    ],
    "roteFlaggen": [
      "kein Altersgate",
      "Firma erst 05/2026 gegründet",
      "lange Lieferzeit"
    ],
    "roteFlaggen_en": [
      "no age verification gate",
      "company founded only in 05/2026",
      "long delivery time"
    ],
    "quelle": "beyond-peptides.com/imprint, cookie-policy (GoAffPro), peptidcheck24",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Dedizierte, durchsuchbare Certificates-of-Analysis-Seite mit 9 produktspezifischen Prüfberichten (BPC-157, BPC-157 & TB-500 Mix, DSIP, GHK-Cu, Ipamorelin, MOTS-C, Oxytocin, SS-31, TB-500), jeweils mit Chargennummer und Datum; Textangabe 'Our products are tested by an independent laboratory... purity and identity (HPLC, LC-MS/MS), heavy metals, endotoxins and microbial count (TAMC/TYMC)'.",
          "text_en": "Dedicated, searchable certificates-of-analysis page with 9 product-specific test reports (BPC-157, BPC-157 & TB-500 mix, DSIP, GHK-Cu, ipamorelin, MOTS-C, oxytocin, SS-31, TB-500), each with batch number and date; stated text: 'Our products are tested by an independent laboratory... purity and identity (HPLC, LC-MS/MS), heavy metals, endotoxins and microbial count (TAMC/TYMC)'.",
          "quelle": "https://beyond-peptides.com/lab-reports/",
          "datum": "2026-09-15"
        },
        {
          "text": "Selbst geöffnetes CoA-PDF für BPC-157 (Batch 2512-039) trägt auf Seite 2 ein sichtbares Wasserzeichen 'JANOSHIK', ein bekanntes unabhängiges Peptid-Testlabor. Das widerspricht unserem bisherigen Stand ('Labor nicht genannt') und spricht für eine echte externe Laborprüfung statt reiner Eigenangabe.",
          "text_en": "A CoA PDF for BPC-157 (batch 2512-039) that I opened myself carries a visible 'JANOSHIK' watermark on page 2, a well-known independent peptide testing lab. This contradicts our previous status ('lab not named') and supports genuine external lab testing rather than a bare self-declaration.",
          "quelle": "https://beyond-peptides.com/wp-content/uploads/2024/10/Certificate_BPC.pdf",
          "datum": "2026-09-15"
        },
        {
          "text": "Unabhängige Drittplattform ChemVerify (chemverify.com) führt Beyond Peptides als 'EU COA Verified' / 'Verified third-party testing' und bestätigt in einem eigenen Prüfartikel: Cross-Referenzierung der CoAs gegen Janoshik Analytics und MZ Biolabs, HPLC-Reinheit im Bereich 96,2-99,4%, Abweichung unter den unabhängig gemessenen Werten durchgehend <2%. WICHTIG: ChemVerify datiert diese Prüfung auf 'Published March 21, 2026 / Last verified: March 2026', die externe Laborprüfung war laut dieser Quelle also bereits im März 2026 etabliert, nicht erst seit kurzem.",
          "text_en": "Independent third-party platform ChemVerify (chemverify.com) lists Beyond Peptides as 'EU COA Verified' / 'Verified third-party testing' and confirms in its own review article: cross-referencing of the CoAs against Janoshik Analytics and MZ Biolabs, HPLC purity in the range of 96.2-99.4%, deviation among the independently measured values consistently under 2%. IMPORTANT: ChemVerify dates this review to 'Published March 21, 2026 / Last verified: March 2026', so per this source the external lab testing was already established by March 2026, not only recently.",
          "quelle": "https://www.chemverify.com/learn/is-beyond-peptides-legit",
          "datum": "2026-09-15"
        },
        {
          "text": "Auf der Startseite ist jetzt ein Pflicht-Gate vor Shop-Zugriff implementiert: Modal 'RESEARCH USE ONLY – Before you continue... You must be at least 18 years of age to enter' mit Checkbox 'I confirm that I am at least 18 years of age' plus Pflichtfeld 'Research field' (Dropdown, u.a. Pharmacology, Molecular Biology, Academic Research) vor dem Button 'Enter Catalog'. Per Screenshot selbst verifiziert. Unser Stand vom 06.09.2026 vermerkte explizit 'kein Altersgate' als rote Flagge, dieser Punkt ist damit laut heutiger Beobachtung nicht mehr zutreffend.",
          "text_en": "The homepage now has a mandatory gate before shop access: a modal 'RESEARCH USE ONLY - Before you continue... You must be at least 18 years of age to enter' with a checkbox 'I confirm that I am at least 18 years of age' plus a required 'Research field' dropdown (e.g. Pharmacology, Molecular Biology, Academic Research) before the 'Enter Catalog' button. Verified myself via screenshot. Our 06.09.2026 status explicitly flagged 'no age gate' as a red flag; per today's observation that point no longer applies.",
          "quelle": "https://beyond-peptides.com/ (Screenshot 2026-09-15)",
          "datum": "2026-09-15"
        },
        {
          "text": "Rechtsträger weiterhin klar benannt und mit Handelsregisternummer belegt: FORGETRADE LIMITED, Hongkong, Company Reg. Nr. 80355843, Companies Registry HK, Gründungsdatum 9. Mai 2026, Direktor namentlich genannt (Eduardo Suico Martinez III), Kontakt-E-Mail vorhanden.",
          "text_en": "The legal entity remains clearly named and backed by a trade register number: FORGETRADE LIMITED, Hong Kong, Company Reg. No. 80355843, Companies Registry HK, founded May 9, 2026, director named (Eduardo Suico Martinez III), contact email present.",
          "quelle": "https://beyond-peptides.com/imprint/",
          "datum": "2026-09-15"
        },
        {
          "text": "Formal strukturierte, datierte Rechtstexte vorhanden: Shipping Policy und Terms of Service mit 'Effective Date: 27.04.2026', Privacy Policy mit 'Last updated: 30 August 2026', konkrete Prozesszeiten (Bearbeitung bis 7 Werktage, EU-Versand 7-10 Werktage nach Versand per DHL, International bis 14 Werktage per DHL Express) sind explizit ausformuliert statt vager Angaben.",
          "text_en": "Formally structured, dated legal texts exist: Shipping Policy and Terms of Service with 'Effective Date: 27.04.2026', Privacy Policy with 'Last updated: 30 August 2026'; concrete process times (processing up to 7 business days, EU shipping 7-10 business days after dispatch via DHL, international up to 14 business days via DHL Express) are spelled out explicitly rather than stated vaguely.",
          "quelle": "https://beyond-peptides.com/shipping-policies/ ; https://beyond-peptides.com/terms-of-service/ ; https://beyond-peptides.com/privacy-policy/",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Das von Vic vermutete 'große Update kürzlich' lässt sich anhand der Dokumenten-Zeitstempel NICHT belegen: Shipping Policy und Terms of Service sind auf den 27.04.2026 datiert, die Privacy Policy auf 30.08.2026 (also vor unserem eigenen 06.09.2026-Stand), kein einziges geprüftes Rechtsdokument trägt ein Datum im September 2026. Die einzige tatsächlich am 15.09.2026 beobachtete, gegenüber dem 06.09.-Stand neue Tatsache ist das Alters-Gate; ob und wann genau sich sonst etwas an der Website geändert hat, bleibt mangels Vergleichsquelle offen.",
          "text_en": "The 'big recent update' Vic suspected CANNOT be substantiated from the document timestamps: the Shipping Policy and Terms of Service are dated 27.04.2026, the Privacy Policy 30.08.2026 (i.e. before our own 06.09.2026 status), and not a single checked legal document carries a September 2026 date. The only fact actually observed on 15.09.2026 that is new compared to the 06.09.2026 status is the age gate; whether and exactly when anything else on the site changed remains open for lack of a comparison source.",
          "quelle": "https://beyond-peptides.com/shipping-policies/ ; https://beyond-peptides.com/terms-of-service/ ; https://beyond-peptides.com/privacy-policy/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Kein Wayback-Machine-Snapshot für beyond-peptides.com verfügbar (archive.org/wayback/available liefert 'archived_snapshots: {}' für Stichtag 06.09.2026; die CDX-Volltextsuche war zum Abrufzeitpunkt technisch offline, HTTP 503). Ein echter Vorher/Nachher-Website-Vergleich über ein unabhängiges Archiv war damit nicht möglich, der Vergleich stützt sich ausschließlich auf unsere eigene Notiz vom 06.09.2026 versus meine Beobachtung heute.",
          "text_en": "No Wayback Machine snapshot is available for beyond-peptides.com (archive.org/wayback/available returns 'archived_snapshots: {}' for the 06.09.2026 cutoff date; the CDX full-text search was technically offline at retrieval time, HTTP 503). A genuine before/after website comparison via an independent archive was therefore not possible; the comparison relies solely on our own 06.09.2026 note versus my observation today.",
          "quelle": "https://archive.org/wayback/available?url=beyond-peptides.com&timestamp=20260906 ; https://web.archive.org/cdx/search/cdx",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Die auf der CoA-Seite gelisteten Chargen-Prüfberichte sind alle auf Dezember 2025 datiert (05.12.2025 bzw. 17.12.2025 für GHK-Cu), keine frischeren 2026er Chargenprüfungen sichtbar für die 9 gelisteten Produkte. Die PDF-Datei liegt zudem im WordPress-Upload-Pfad '/2024/10/', was auf eine bereits 2024 hochgeladene Datei hindeutet.",
          "text_en": "The batch test reports listed on the CoA page are all dated December 2025 (05.12.2025 and 17.12.2025 for GHK-Cu), with no newer 2026 batch tests visible for the 9 listed products. The PDF file is also located in the WordPress upload path '/2024/10/', suggesting the file was already uploaded in 2024.",
          "quelle": "https://beyond-peptides.com/lab-reports/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Footer-Copyright zeigt auf allen geprüften Unterseiten weiterhin '© 2025 Beyond Peptides' trotz laufendem Jahr 2026, kleiner, aber sichtbarer Hinweis auf ungepflegte Boilerplate, passt nicht zum Bild eines frisch generalüberholten Auftritts.",
          "text_en": "The footer copyright on every page checked still shows '© 2025 Beyond Peptides' despite the current year being 2026, a small but visible sign of unmaintained boilerplate that does not fit the picture of a freshly overhauled site.",
          "quelle": "https://beyond-peptides.com/lab-reports/ (Footer)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "4 von 12 angefragten Kern-Peptiden nicht im Sortiment: Semaglutid, Tirzepatid, Retatrutid und CJC-1295 liefern über die offizielle Produktsuche der Website keine Treffer. Es gibt ein Produkt 'Beyond 5G' (20mg, 246,37€) mit Marketing-Text 'advances multi-receptor research from a three-target to a five-target molecular design', das möglicherweise ein GLP-1-Analogon-Blend ist, eine eindeutige Identität als Retatrutid o.ä. ist daraus aber NICHT ableitbar und wurde nicht in die Produktliste aufgenommen.",
          "text_en": "4 of the 12 core peptides checked are not in the range: semaglutide, tirzepatide, retatrutide and CJC-1295 return no results via the site's official product search. There is a product 'Beyond 5G' (20mg, €246.37) with marketing text 'advances multi-receptor research from a three-target to a five-target molecular design', which may be a GLP-1 analog blend, but a clear identity as retatrutide or similar CANNOT be derived from this and it was not included in the product list.",
          "quelle": "https://beyond-peptides.com/wp-json/wc/store/v1/products?search=... (Live-API-Abfrage)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Community-Meinung (Boren Health Kundenbewertungen, n=10 gesichtet): Gesamtnote 2,4/5 ('Poor'), Verteilung 30% 5-Sterne / 20% 2-Sterne / 50% 1-Sterne. Mehrere deutschsprachige Beschwerden (14.11.2025, drei verschiedene Nutzer) über seit Wochen ausbleibende Lieferung trotz UPS-Tracking-Nummer ('Label created' ohne Bewegung) und nicht reagierenden Support; eine weitere Bewertung vom 20.04.2026 beschreibt bei der dritten Bestellung sichtbar unterbefüllte Vials und abweichendes Produktbild bei gleicher SKU, Support habe nur Store-Credit statt Ersatz angeboten.",
          "text_en": "Community opinion (Boren Health customer reviews, n=10 reviewed): overall rating 2.4/5 ('Poor'), distribution 30% five-star / 20% two-star / 50% one-star. Several German-language complaints (14.11.2025, three different users) about delivery not arriving for weeks despite a UPS tracking number ('Label created' with no movement) and an unresponsive support team; a further review from 20.04.2026 describes visibly underfilled vials and a different product image for the same SKU on a third order, with support allegedly offering only store credit instead of a replacement.",
          "quelle": "https://www.borenhealth.com/company/beyond-peptides",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Trustpilot-Sternebewertung (laut Google-Suchergebnis-Snippet ca. 4,1/5 bei 59 Bewertungen, mit einzelnen 1-Stern-Beschwerden über Wirkungslosigkeit/Preis-Leistung) konnte NICHT selbst verifiziert werden, direkter Abruf von uk.trustpilot.com/review/beyond-peptides.com wurde durch eine Bot-Verifizierung blockiert (HTTP 403 'Verification failed'). Diese Zahl ist daher nur als ungeprüfter Suchmaschinen-Schnipsel zu werten, nicht als selbst geöffnete Quelle.",
          "text_en": "The Trustpilot star rating (per a Google search snippet, roughly 4.1/5 across 59 reviews, with a few one-star complaints about lack of effect and price-to-value) COULD NOT be verified myself; a direct fetch of uk.trustpilot.com/review/beyond-peptides.com was blocked by bot verification (HTTP 403 'Verification failed'). This figure should therefore only be treated as an unverified search-engine snippet, not as a source I opened myself.",
          "quelle": "Google-Suchergebnis-Snippet (trustpilot.com direkt nicht zugänglich, 2026-09-15)",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Keine Reddit-Diskussion zu Beyond Peptides auffindbar: gezielte Suchen ('site:reddit.com Beyond Peptides', 'Beyond Peptides reddit review 2026') lieferten keine Reddit-Treffer, nur Trustpilot/ChemVerify/Forbes-Ergebnisse.",
          "text_en": "No Reddit discussion about Beyond Peptides could be found: targeted searches ('site:reddit.com Beyond Peptides', 'Beyond Peptides reddit review 2026') returned no Reddit results, only Trustpilot/ChemVerify/Forbes results.",
          "quelle": "WebSearch-Abfragen, 2026-09-15",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "ScamAdviser zeigt Gesamturteil 'Very Likely Safe' / 'average to good trust score', ein konkreter Zahlenwert für den Trust-Score war im abgerufenen HTML nicht auslesbar (vermutlich clientseitig per JavaScript gerendert). Auffällig: Domain-Alter wird mit 'ca. 2 Jahre' angegeben, was mit dem laut Impressum erst am 09.05.2026 gegründeten Rechtsträger FORGETRADE LIMITED nicht ohne Weiteres zusammenpasst (möglich: Domain-Wiederverwendung/Rebrand, nicht abschließend geklärt).",
          "text_en": "ScamAdviser shows an overall verdict of 'Very Likely Safe' / 'average to good trust score'; a concrete numeric trust score value was not readable in the fetched HTML (likely rendered client-side via JavaScript). Notably, domain age is given as 'approx. 2 years', which does not straightforwardly match the legal entity FORGETRADE LIMITED, founded per the imprint only on 09.05.2026 (possible explanation: domain reuse/rebrand, not conclusively clarified).",
          "quelle": "https://www.scamadviser.com/check-website/beyond-peptides.com",
          "datum": "2026-09-15",
          "art": "belegt"
        }
      ],
      "aenderungen": [
        {
          "text": "NEU seit unserem 06.09.2026-Stand: Pflicht-Altersgate (18+, Checkbox + Research-Field-Dropdown) vor jedem Shop-Zugriff. Unser Stand vom 06.09.2026 (dokumentiert in vendors.js/anbieter_fakten.json) führte 'kein Altersgate' explizit als rote Flagge. Heute (15.09.2026) per Screenshot bestätigt: Das Gate existiert und blockiert den Zugriff auf Katalog/Unterseiten, bis Checkbox bestätigt und ein Forschungsfeld ausgewählt wurde. Einschränkung: Das exakte Einführungsdatum lässt sich mangels Wayback-Snapshot nicht belegen, nur der Zustandswechsel zwischen den beiden Prüfterminen (06.09. vs. 15.09.) ist gesichert, keine Kausalaussage zu einem bestimmten 'Update-Tag' möglich.",
          "text_en": "NEW compared to our 06.09.2026 status: mandatory age gate (18+, checkbox plus research-field dropdown) before any shop access. Our 06.09.2026 status (documented in vendors.js/anbieter_fakten.json) explicitly flagged 'no age gate' as a red flag. Confirmed today (15.09.2026) via screenshot: the gate exists and blocks access to the catalog/subpages until the checkbox is confirmed and a research field is selected. Caveat: the exact introduction date cannot be substantiated for lack of a Wayback snapshot; only the state change between the two check dates (06.09. vs. 15.09.) is confirmed, with no causal claim possible about a specific 'update day'.",
          "quelle": "https://beyond-peptides.com/ (Screenshot 2026-09-15) vs. interner Stand vom 06.09.2026 (anbieter_fakten.json)",
          "datum": "2026-09-15"
        },
        {
          "text": "CoA-Darstellung heute deutlich umfangreicher/strukturierter als unser 06.09.-Stand beschreibt ('eigene HPLC-PDFs je Charge, Labor nicht genannt'): dedizierte Seite mit 9 durchsuchbaren Produktberichten, klarer Parameterliste (HPLC, LC-MS/MS, Schwermetalle, Endotoxin, TAMC/TYMC) und einem PDF mit sichtbarem Janoshik-Wasserzeichen. WICHTIGE EINSCHRÄNKUNG: Die unabhängige Plattform ChemVerify bestätigte externe Janoshik/MZ-Biolabs-Testung bereits in einem am 21.03.2026 veröffentlichten Artikel ('Last verified: March 2026'), die externe Testung selbst war also mutmaßlich schon vor unserem 06.09.-Stand etabliert. Es ist nicht auszuschließen, dass unser Team am 06.09. lediglich die /lab-reports/-Unterseite nicht separat geprüft hat, statt dass sich hier zwischen 06.09. und 15.09. tatsächlich etwas geändert hätte. Diese Unsicherheit kann ohne Wayback-Snapshot nicht aufgelöst werden.",
          "text_en": "The CoA presentation today is noticeably more extensive/structured than our 06.09. status describes ('own HPLC PDFs per batch, lab not named'): a dedicated page with 9 searchable product reports, a clear list of parameters (HPLC, LC-MS/MS, heavy metals, endotoxin, TAMC/TYMC) and a PDF with a visible Janoshik watermark. IMPORTANT CAVEAT: the independent platform ChemVerify already confirmed external Janoshik/MZ Biolabs testing in an article published 21.03.2026 ('Last verified: March 2026'), so per this source the external testing itself was presumably already in place before our 06.09. status. It cannot be ruled out that our team simply did not separately check the /lab-reports/ subpage on 06.09., rather than something having actually changed here between 06.09. and 15.09. This uncertainty cannot be resolved without a Wayback snapshot.",
          "quelle": "https://beyond-peptides.com/lab-reports/ ; https://www.chemverify.com/learn/is-beyond-peptides-legit (Published 2026-03-21)",
          "datum": "2026-09-15"
        },
        {
          "text": "Keine erkennbare Änderung bei Rechtsträger, Sitz oder Versandzeiten: Impressum weiterhin FORGETRADE LIMITED/Hongkong (Gründung 09.05.2026, wie am 06.09. bekannt); Shipping Policy ist auf den 27.04.2026 datiert und damit älter als unser 06.09.-Stand, die dort genannten Zeiten (EU 7-10 Werktage nach Versand zzgl. bis zu 7 Werktage Bearbeitung; International bis 14 Werktage) entsprechen im Kern der bereits bekannten Spanne [7,17] Tage, jetzt nur klarer nach EU/International differenziert.",
          "text_en": "No discernible change to legal entity, headquarters or shipping times: the imprint still names FORGETRADE LIMITED/Hong Kong (founded 09.05.2026, as already known on 06.09.); the Shipping Policy is dated 27.04.2026 and thus predates our 06.09. status; the times stated there (EU 7-10 business days after dispatch plus up to 7 business days processing; international up to 14 business days) essentially match the already-known [7,17]-day range, now simply differentiated more clearly between EU and international.",
          "quelle": "https://beyond-peptides.com/imprint/ ; https://beyond-peptides.com/shipping-policies/",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15"
  },
  {
    "slug": "licensed-peptides",
    "name": "Licensed Peptides",
    "website": "https://licensedpeptides.com/",
    "rechtstraeger": "Licensed Peptides INC",
    "sitz": "Boca Raton, FL, USA",
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#3F5D4E",
      "logo": "assets/img/logos/licensed-peptides.png",
      "logoMono": "assets/img/logos/licensed-peptides_mono.png",
      "logoRatio": 3.86,
      "logoFallback": "assets/img/logos/_wordmarks/licensed-peptides.svg",
      "logoQuelle": "https://licensedpeptides.com/wp-content/themes/Avada-Child-Theme/assets-new/images/logo.svg"
    },
    "score": {
      "labor": 100,
      "recht": 100,
      "lieferung": 0,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 77,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": true,
      "labor": "ISO/IEC-17025-akkreditierte Drittlabore",
      "anzahl": null
    },
    "reinheit": 99.48,
    "rechtsrahmen": {
      "altersgate": true,
      "ruo": true,
      "impressum": true,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": null,
      "tageMax": null,
      "laender": [
        "US"
      ]
    },
    "zahlung": [
      "Karte",
      "Zelle",
      "ACH",
      "Überweisung"
    ],
    "affiliate": true,
    "affiliateProgrammUrl": "https://licensedpeptides.com/affiliates",
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": null,
    "affiliateUrl": "https://licensedpeptides.com/",
    "kurz": "Sitz in Boca Raton, FL, USA. Versand laut Website nach DACH. CoAs öffentlich einsehbar, extern geprüft.",
    "kurz_en": "Registered in Boca Raton, FL, USA. Ships to Germany/Austria/Switzerland according to the website. CoAs are publicly available and third-party tested.",
    "staerken": [
      "Externe Labortests (ISO/IEC-17025-akkreditierte Drittlabore)",
      "Rechtsträger benannt und belegt",
      "Altersgate vorhanden",
      "RUO-Kennzeichnung vorhanden",
      "Impressum vorhanden",
      "Katalog-Reinheit 99,48 %"
    ],
    "staerken_en": [
      "Third-party lab testing (ISO/IEC-17025-akkreditierte Drittlabore)",
      "Named, verifiable legal entity",
      "Age verification gate in place",
      "RUO labeling in place",
      "Legal notice (Impressum) present",
      "Catalog purity 99.48 %"
    ],
    "schwaechen": [],
    "schwaechen_en": [],
    "roteFlaggen": [
      "Versand aus USA, Zollrisiko"
    ],
    "roteFlaggen_en": [
      "ships from the USA, customs risk"
    ],
    "quelle": "licensedpeptides.com, chemverify Katalog, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Batch-spezifisches Certificate of Analysis mit HPLC-Chromatogramm, Lot-Nummer, Laboratory-ID, unterschrieben von Laboratory Director und Operations Manager, direkt eingesehen (BPC-157 10mg, Lot 032520261, Report V260309-11, Purity >99.80%±0.18%, Endotoxin Pass <5.00 EU/mg, Sterility Pass USP<71>). Widerspricht der Pauschalkritik eines Drittportals (siehe Schwächen), das generische statt chargenspezifische COAs unterstellt.",
          "text_en": "Batch-specific Certificate of Analysis with an HPLC chromatogram, lot number, and laboratory ID, signed by the Laboratory Director and Operations Manager, reviewed directly (BPC-157 10mg, Lot 032520261, Report V260309-11, purity >99.80%±0.18%, endotoxin pass <5.00 EU/mg, sterility pass USP<71>). This contradicts a blanket criticism from a third-party portal (see weaknesses) that claims the CoAs are generic rather than batch-specific.",
          "quelle": "https://licensedpeptides.com/wp-content/uploads/2025/08/BPC-157-10mg-V260309-11-Licensed-Peptides-Report-008-1.jpg",
          "datum": "2026-09-15"
        },
        {
          "text": "Zwei namentlich benannte, akkreditierte Prüflabore mit konkreten Akkreditierungsnummern: Vanguard Laboratory (A2LA-Zertifikat #6377.01.01, ISO/IEC 17025:2017, Olympia WA) und Ethos Analytics (117798): ungewöhnlich transparent gegenüber Wettbewerbern, die nur pauschal 'Drittlabor' nennen.",
          "text_en": "Two named, accredited testing labs with concrete accreditation numbers: Vanguard Laboratory (A2LA certificate #6377.01.01, ISO/IEC 17025:2017, Olympia WA) and Ethos Analytics (117798): unusually transparent compared to competitors who only mention a generic 'third-party lab.'",
          "quelle": "https://licensedpeptides.com/affiliates/",
          "datum": "2026-09-15"
        },
        {
          "text": "chemverify.com führt Licensed Peptides als 'Verified Partner' mit COA-Verifizierung und listet 45 Produkte im Katalog (Stand Abruf).",
          "text_en": "chemverify.com lists Licensed Peptides as a 'Verified Partner' with CoA verification and lists 45 products in its catalog (as of the check).",
          "quelle": "https://www.chemverify.com/vendor/licensed-peptides",
          "datum": "2026-09-15"
        },
        {
          "text": "Unabhängiges Vergleichsportal peptideresearchreviews.com bewertet den Anbieter 2026 mit 7.1/10 (Grade B-) als aktiven, funktionalen Mid-Tier-Supplier mit dokumentierter Testsprache und kundenseitig berichteten zufriedenstellenden Erfahrungen.",
          "text_en": "The independent comparison portal peptideresearchreviews.com rates the vendor in 2026 at 7.1/10 (Grade B-), describing it as an active, functional mid-tier supplier with documented testing language and customer-reported satisfactory experiences.",
          "quelle": "https://peptideresearchreviews.com/articles/licensed-peptides-review-2026",
          "datum": "2026-09-15"
        },
        {
          "text": "Explizite, rechtlich vorsichtige Affiliate-Content-Regeln: Partnern wird 'no dosing, protocols, cycles, weight loss, anti-aging, healing, results' etc. ausdrücklich untersagt; erlaubte Aussagen sind auf verifizierbare Fakten (Labor, GMP, ISO 9001:2015) begrenzt. Reduziert Haftungsrisiko für ein Vergleichsportal, das mit diesem Anbieter verlinkt.",
          "text_en": "Explicit, legally cautious affiliate content rules: partners are expressly prohibited from mentioning dosing, protocols, cycles, weight loss, anti-aging, healing, or results; permitted claims are limited to verifiable facts (lab, GMP, ISO 9001:2015). This reduces liability risk for a comparison portal that links to this vendor.",
          "quelle": "https://licensedpeptides.com/affiliates/",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Versand laut aktueller eigener Shipping-Policy (erstellt/aktualisiert 11.04.2026) AUSSCHLIESSLICH in die USA ('Licensed Peptides INC currently ships to: United States (including minor outlying islands)'). Kein DACH-, EU-, UK-, AU- oder NZ-Versand mehr gelistet.",
          "text_en": "Per the vendor's current shipping policy (created/updated 04/11/2026), shipping is EXCLUSIVELY to the US ('Licensed Peptides INC currently ships to: United States (including minor outlying islands)'). No DACH, EU, UK, AU, or NZ shipping is listed anymore.",
          "quelle": "https://licensedpeptides.com/shipping-delivery/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Trustpilot-Profil wurde von Trustpilot entfernt: 'This profile has been removed. The business you're trying to find goes against our guidelines and is no longer visible on Trustpilot.' Kein Bewertungs-Score mehr abrufbar.",
          "text_en": "The Trustpilot profile has been removed by Trustpilot: 'This profile has been removed. The business you're trying to find goes against our guidelines and is no longer visible on Trustpilot.' No rating score is available anymore.",
          "quelle": "https://www.trustpilot.com/review/licensedpeptides.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Scamadviser vergibt Trust Score 0/100 mit Label 'Very Likely Unsafe' und vermerkt 'Intellectual property right violation has been noted by globaleyez'. Scamadviser selbst relativiert dies im Fließtext ('It may be a complete legit website... We would therefore be cautious') und begründet den niedrigen Score primär mit der jungen Domain: daher als belegtes Tool-Ergebnis mit expliziter Unsicherheit der Quelle selbst zu werten.",
          "text_en": "Scamadviser gives a Trust Score of 0/100 with the label 'Very Likely Unsafe' and notes 'Intellectual property right violation has been noted by globaleyez'. Scamadviser itself qualifies this in the body text ('It may be a complete legit website... We would therefore be cautious') and attributes the low score primarily to the young domain age: it should therefore be treated as a documented tool result with an explicit caveat from the source itself.",
          "quelle": "https://www.scamadviser.com/check-website/licensedpeptides.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Widersprüchliche Mindestalter-Angaben auf eigenen Rechtsseiten: Terms and Conditions verlangen 'at least 21 years of age', Payment and Billing Policy nennt 'at least 18 years old to purchase'.",
          "text_en": "Contradictory minimum-age statements on the vendor's own legal pages: the Terms and Conditions require 'at least 21 years of age', while the Payment and Billing Policy states 'at least 18 years old to purchase'.",
          "quelle": "https://licensedpeptides.com/terms-and-conditions/ ; https://licensedpeptides.com/payment-and-billing-policy/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Semaglutid ist aktuell nicht im Katalog gelistet: weder unter diesem Namen noch unter einem identifizierbaren Codenamen (vollständige Produktliste unter /all-peptides/ geprüft). Eines der 12 angefragten Kernpeptide fehlt damit vollständig im Sortiment.",
          "text_en": "Semaglutide is not currently listed in the catalog: neither under that name nor under an identifiable code name (the full product list under /all-peptides/ was checked). One of the 12 requested core peptides is therefore completely missing from the range.",
          "quelle": "https://licensedpeptides.com/all-peptides/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Die GLP-1-Klasse-Produkte werden nicht unter INN-Namen geführt, sondern ausschließlich unter internen Codes 'LP2-T' und 'LP3-R'; die eigenen Affiliate-Regeln verbieten Partnern ausdrücklich, diese Codes durch andere Namen zu ersetzen ('Products LP2-T and LP3-R are referenced by those codes only. Do not substitute other names.'). Erschwert direkten Preis-/Produktvergleich für ein Vergleichsportal.",
          "text_en": "The GLP-1-class products are not listed under INN names but exclusively under internal codes 'LP2-T' and 'LP3-R'; the vendor's own affiliate rules expressly forbid partners from substituting other names for these codes ('Products LP2-T and LP3-R are referenced by those codes only. Do not substitute other names.'). This makes direct price/product comparison harder for a comparison portal.",
          "quelle": "https://licensedpeptides.com/affiliates/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Drittportal peptideresearchreviews.com kritisiert im Branchenvergleich generische statt chargenspezifisch-chromatographische COA-Dokumentation als Standard sowie fehlendes Cold-Chain-Shipping als Standardoption, was speziell für GLP-1-Klasse-Verbindungen im Sommer als kritisch bewertet wird. Anmerkung: die eigene Stichprobe dieser Recherche (siehe Stärken, BPC-157-CoA) zeigte demgegenüber eine lot-spezifische, unterschriebene CoA mit Chromatogramm: ein nicht aufgelöster Widerspruch zwischen Drittquelle und eigener Stichprobe.",
          "text_en": "The third-party portal peptideresearchreviews.com criticizes the industry standard of generic rather than batch-specific chromatographic CoA documentation, as well as the lack of cold-chain shipping as a standard option, which it rates as especially critical for GLP-1-class compounds in summer. Note: this research's own sample check (see strengths, BPC-157 CoA) showed, in contrast, a lot-specific, signed CoA with a chromatogram: an unresolved discrepancy between the third-party source and the sample check.",
          "quelle": "https://peptideresearchreviews.com/articles/licensed-peptides-review-2026",
          "datum": "2026-09-15",
          "art": "belegt"
        }
      ],
      "aenderungen": [
        {
          "text": "Versandgebiet gegenüber der Vorrecherche vom 06.09.2026 (dort: dach_versand=true, Regionen US/EU/UK/AU/NZ) jetzt laut aktueller Policy auf ausschließlich USA beschränkt. Die Shipping-Policy selbst trägt das Erstelldatum 11.04.2026, liegt also bereits vor der Vorrecherche: unklar, ob sich seit 06.09. tatsächlich etwas geändert hat oder ob die Vorrecherche an dieser Stelle ungenau war. Sollte gegengeprüft/geklärt werden.",
          "text_en": "Compared to the prior research from 06.09.2026 (which recorded dach_versand=true, regions US/EU/UK/AU/NZ), the current policy now restricts shipping to the US only. The shipping policy itself carries a creation date of 04/11/2026, meaning it predates the prior research: it is unclear whether something actually changed since 06.09. or whether the prior research was imprecise at this point. This should be cross-checked/clarified.",
          "quelle": "https://licensedpeptides.com/shipping-delivery/",
          "datum": "2026-09-15"
        },
        {
          "text": "Terms and Conditions zuletzt aktualisiert am 12.09.2026 (3 Tage vor dieser Recherche): sehr aktuelle Überarbeitung laut Zeitstempel der Seite; der konkrete Änderungsinhalt ist ohne Versionsvergleich nicht rekonstruierbar.",
          "text_en": "Terms and Conditions were last updated on 09/12/2026 (3 days before this research): a very recent revision per the page timestamp; the specific content of the change cannot be reconstructed without a version comparison.",
          "quelle": "https://licensedpeptides.com/terms-and-conditions/",
          "datum": "2026-09-15"
        },
        {
          "text": "Zwei benannte Labore (Vanguard Laboratory A2LA 6377.01.01, Ethos Analytics 117798) statt der zuvor nur pauschal genannten 'ISO/IEC-17025-akkreditierten Drittlabore'. chemverify.com nennt zusätzlich 'Janoshik Analytics' als (früher oder parallel genutztes) Testlabor: möglicher Laborwechsel oder erweiterte Laborbasis seit der Vorrecherche vom 06.09.2026, nicht abschließend geklärt.",
          "text_en": "Two named labs (Vanguard Laboratory A2LA 6377.01.01, Ethos Analytics 117798) instead of the previously only generically named 'ISO/IEC 17025-accredited third-party labs'. chemverify.com additionally names 'Janoshik Analytics' as a (formerly or concurrently used) testing lab: a possible lab change or an expanded lab base since the 06.09.2026 prior research, not conclusively clarified.",
          "quelle": "https://licensedpeptides.com/affiliates/ ; https://www.chemverify.com/vendor/licensed-peptides",
          "datum": "2026-09-15"
        },
        {
          "text": "INTERPRETATION (nicht vom Anbieter bestätigt): Produktbeschreibungen von LP2-T ('High selectivity for GIP and LP-1 [sic, vermutlich GLP-1] receptors') und LP3-R ('Triple Receptor Agonist', 'multi-receptor peptide agonists... engage more than one class-B GPCR at once') legen nahe, dass es sich um Tirzepatid- bzw. Retatrutid-Analoga handelt. chemverify.com führt das LP3-R-Äquivalent unabhängig unter dem Klarnamen 'Retatrutide', was diese Zuordnung für LP3-R stützt; für LP2-T=Tirzepatid gibt es keine unabhängige Zweitquelle. Der Anbieter selbst bestätigt diese Zuordnung an keiner Stelle und untersagt Affiliates ausdrücklich, die Codes durch andere Namen zu ersetzen. Die Umbenennung könnte im Zusammenhang mit verschärften US-Zoll-/FDA-Kontrollen für GLP-1-Importe stehen (auf chemverify.com referenzierter Artikel zu 'FDA Import Alert 66-41', Mai 2026), das ist jedoch reine Vermutung ohne direkten Beleg beim Anbieter.",
          "text_en": "INTERPRETATION (not confirmed by the vendor): product descriptions for LP2-T ('High selectivity for GIP and LP-1 [sic, presumably GLP-1] receptors') and LP3-R ('Triple Receptor Agonist', 'multi-receptor peptide agonists... engage more than one class-B GPCR at once') suggest these are tirzepatide and retatrutide analogs, respectively. chemverify.com independently lists the LP3-R equivalent under the clear name 'Retatrutide', which supports this mapping for LP3-R; for LP2-T = tirzepatide there is no independent second source. The vendor itself never confirms this mapping anywhere and expressly forbids affiliates from substituting other names for the codes. The renaming could be related to tightened US customs/FDA controls on GLP-1 imports (per an article referenced on chemverify.com about 'FDA Import Alert 66-41', May 2026), but this is pure speculation without direct confirmation from the vendor.",
          "quelle": "https://licensedpeptides.com/product/lp2-t/ ; https://licensedpeptides.com/product/lp3-r/ ; https://www.chemverify.com/vendor/licensed-peptides",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": null
  },
  {
    "slug": "bio-boostx",
    "name": "Bio BoostX",
    "website": "https://bioboostx.com/",
    "rechtstraeger": "BioBoostX e.K. (LEI 3912005WE06FVF6FEN38)",
    "sitz": "Pfeffenhausen, Deutschland",
    "land": "DE",
    "gegruendet": null,
    "brand": {
      "farbe": "#8C4F1B",
      "logo": "assets/img/logos/bio-boostx.png",
      "logoMono": "assets/img/logos/bio-boostx_mono.png",
      "logoRatio": 3.34,
      "logoFallback": "assets/img/logos/_wordmarks/bio-boostx.svg",
      "logoQuelle": "https://bioboostx.com/wp-content/uploads/2026/03/logo-bioboostx-700-2.png"
    },
    "score": {
      "labor": 60,
      "recht": 100,
      "lieferung": 65,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 77,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": null,
      "labor": "HPLC, chargengekoppelt (bioboostx.com/coa/)",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": true,
      "ruo": true,
      "impressum": true,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": null,
      "tageMax": null,
      "laender": [
        "EU",
        "US",
        "UK",
        "CA",
        "ASIA"
      ]
    },
    "zahlung": [
      "Karte",
      "PayPal",
      "Apple Pay",
      "Überweisung",
      "Krypto"
    ],
    "affiliate": true,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": {
      "code": "peptidecompass10",
      "prozent": 10,
      "hinweis": "Code beim Checkout eingeben",
      "hinweis_en": "Enter code at checkout"
    },
    "produkte": [],
    "preisProMg": 4.6,
    "affiliateUrl": "https://bioboostx.com/",
    "kurz": "Sitz in Pfeffenhausen, Deutschland. Versand laut Website nach DACH. CoAs öffentlich einsehbar, externe Prüfung nicht bestätigt.",
    "kurz_en": "Registered in Pfeffenhausen, Deutschland. Ships to Germany/Austria/Switzerland according to the website. CoAs are publicly available, third-party testing not confirmed.",
    "staerken": [
      "Öffentlich einsehbare CoAs",
      "Rechtsträger benannt und belegt",
      "Altersgate vorhanden",
      "RUO-Kennzeichnung vorhanden",
      "Impressum vorhanden"
    ],
    "staerken_en": [
      "Publicly available CoAs",
      "Named, verifiable legal entity",
      "Age verification gate in place",
      "RUO labeling in place",
      "Legal notice (Impressum) present"
    ],
    "schwaechen": [],
    "schwaechen_en": [],
    "roteFlaggen": [
      "Domain ca. 10 Monate alt, Scam-Warnseiten schlagen an"
    ],
    "roteFlaggen_en": [
      "domain about 10 months old, scam-warning sites flag it"
    ],
    "quelle": "bioboostx.com, Bloomberg LEI, chemverify Katalog, 06.09.2026; von Vic selbst getestet",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Öffentliche CoA-Bibliothek mit chargenspezifischen HPLC-Zertifikaten (Library-Seite listet u.a. Tesa 10/20mg, Melanotan 2, Ipamorelin, Ipa+CJC No DAC, MOTS-C, GHK-Cu 100mg, BPC-157, TB-500, GLP RTA/Triple G, Selank, DSIP, SS-31, 5-Amino-1MQ, NAD+, KPV, Thymosin-Alpha-1, PT-141 u.a.) - deutlich mehr als nur eine allgemeine CoA-Seite.",
          "text_en": "Public CoA library with batch-specific HPLC certificates (the library page lists, among others, Tesa 10/20mg, Melanotan 2, Ipamorelin, Ipa+CJC No DAC, MOTS-C, GHK-Cu 100mg, BPC-157, TB-500, GLP RTA/Triple G, Selank, DSIP, SS-31, 5-Amino-1MQ, NAD+, KPV, Thymosin-Alpha-1, PT-141, and others): considerably more than just a general CoA page.",
          "quelle": "https://bioboostx.com/coa/",
          "datum": "2026-09-15"
        },
        {
          "text": "Unabhängiges Vendor-Verzeichnis ChemVerify weist für Bio BoostX einen Purity Score von 99,57% über 17 getestete Chargen aus, Testlabor namentlich genannt: Janoshik Analytical (bekanntes, in der Peptid-Community anerkanntes Drittlabor). ChemVerify selbst hat allerdings eine Affiliate-/Rabattcode-Beziehung zu Bio BoostX (Code CHEMVERIFY, als 'Ad' gekennzeichnet), ist also nicht vollständig unabhängig.",
          "text_en": "The independent vendor directory ChemVerify shows a purity score of 99.57% for Bio BoostX across 17 tested batches, with the test lab named: Janoshik Analytical (a well-known third-party lab recognized in the peptide community). However, ChemVerify itself has an affiliate/discount-code relationship with Bio BoostX (code CHEMVERIFY, labeled as an 'Ad'), so it is not fully independent.",
          "quelle": "https://www.chemverify.com/vendor/bio-boostx (Seite) + https://www.chemverify.com/api/catalog (Rohdaten, per Composio-curl-Fallback abgerufen)",
          "datum": "2026-09-15"
        },
        {
          "text": "Breites, aktuelles Sortiment: mindestens 60 gelistete Produkte im Shop, inkl. Vial- und Kapsel-Varianten, mehrerer Mengen-Stufen pro Peptid und ergänzender Laborverbrauchsmaterialien (Bacteriostatic Water, Vial Boxes).",
          "text_en": "Broad, current range: at least 60 listed products in the shop, including vial and capsule variants, multiple quantity tiers per peptide, and supplementary lab consumables (bacteriostatic water, vial boxes).",
          "quelle": "https://bioboostx.com/shop-1/",
          "datum": "2026-09-15"
        },
        {
          "text": "Konkret dokumentierte Versandzeiten/-kosten mit DHL-Tracking: EU Standard 2-5 Tage (8,90 EUR, ab 150 EUR frei), EU Express 1-2 Tage (59 EUR, ab 150 EUR 39,90 EUR), Worldwide Standard 3-10 Tage (18,90 EUR, ab 200 EUR frei), Worldwide Express 1-3 Tage (129,90 EUR, ab 100 EUR 79,90 EUR).",
          "text_en": "Concretely documented shipping times/costs with DHL tracking: EU Standard 2-5 days (EUR 8.90, free from EUR 150), EU Express 1-2 days (EUR 59, EUR 39.90 from EUR 150), Worldwide Standard 3-10 days (EUR 18.90, free from EUR 200), Worldwide Express 1-3 days (EUR 129.90, EUR 79.90 from EUR 100).",
          "quelle": "https://bioboostx.com/terms-and-conditions/ (Abschnitt Shipping Policy, 'Last updated: 5 January 2026')",
          "datum": "2026-09-15"
        },
        {
          "text": "Research-Only-Hinweis und Missbrauchsausschluss (kein human/animal use, keine Wirkversprechen) wird auf jeder geprüften Produktseite wiederholt und explizit kommuniziert - textlich UWG-/RUO-konform aufgebaut.",
          "text_en": "A research-only notice and exclusion of misuse (no human/animal use, no efficacy claims) is repeated and explicitly communicated on every product page checked; worded to be compliant with German unfair-competition law (UWG) and RUO standards.",
          "quelle": "https://bioboostx.com/product/product-bpc-157-research-grade/, https://bioboostx.com/product/tesa/, https://bioboostx.com/product/triple-g/",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Das Trustpilot-Profil zu bioboostx.com ist entfernt: 'This profile has been removed. The business you're trying to find goes against our guidelines and is no longer visible on Trustpilot.' Es existiert aktuell kein einsehbares Bewertungsprofil.",
          "text_en": "The Trustpilot profile for bioboostx.com has been removed: 'This profile has been removed. The business you're trying to find goes against our guidelines and is no longer visible on Trustpilot.' There is currently no viewable review profile.",
          "quelle": "https://www.trustpilot.com/review/bioboostx.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Scamadviser weist aktuell einen Trust Score von 0/100 aus, Einstufung 'Very Likely Unsafe', zuletzt aktualisiert vor 6 Tagen (~09.09.2026). Gridinsoft wird von Scamadviser als Quelle zitiert, die die Seite als 'potentially malicious' flaggt. Negativ-Faktoren laut Scamadviser: WHOIS-Identität per Privacy-Dienst verborgen, geringe Besucherzahl (niedriges Tranco-Ranking), Krypto-Zahlungsoption als Risikofaktor gewertet. Positiv-Faktoren: gültiges SSL-Zertifikat, DNSFilter stuft die Seite als sicher ein, Zahlungsmethoden mit Rückbuchungsmöglichkeit.",
          "text_en": "Scamadviser currently shows a trust score of 0/100, classification 'Very Likely Unsafe', last updated 6 days ago (approx. 2026-09-09). Scamadviser cites Gridinsoft as a source flagging the site as 'potentially malicious'. Negative factors per Scamadviser: WHOIS identity hidden via a privacy service, low visitor count (low Tranco ranking), crypto payment option rated as a risk factor. Positive factors: valid SSL certificate, DNSFilter rates the site as safe, payment methods with chargeback capability.",
          "quelle": "https://www.scamadviser.com/check-website/bioboostx.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "ScamDoc stuft bioboostx.com als 'Poor Trust Score' (25%) ein. Begründung laut Seite: neue Domain, kurze erwartete Domain-Lebensdauer, Verknüpfung mit Ländern, die für betrügerische Websites bekannt sind (algorithmische Einschätzung, keine konkreten Einzelfallberichte genannt).",
          "text_en": "ScamDoc rates bioboostx.com as a 'Poor Trust Score' (25%). Reasoning per the site: new domain, short expected domain lifespan, association with countries known for fraudulent websites (an algorithmic assessment, no concrete individual case reports cited).",
          "quelle": "https://www.scamdoc.com/view/2387062",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Das Impressum (Legal Notice) nennt unter der Überschrift 'Service Provider' keinen Firmennamen/keine Rechtsform und keine Postanschrift - nur 'Represented by: Marcus Schmid, CEO - BioBoostX' plus eine VAT-ID (DE240479675). Eine ladungsfähige Anschrift, wie nach deutschem Recht (§5 TMG) für ein Impressum vorgeschrieben, fehlt auf dieser Seite komplett (per Screenshot geprüft).",
          "text_en": "The imprint (Legal Notice) does not name a company name/legal form or postal address under the heading 'Service Provider', only 'Represented by: Marcus Schmid, CEO, BioBoostX' plus a VAT ID (DE240479675). A serviceable address, as required under German law (Section 5 TMG) for an imprint, is completely missing from this page (verified via screenshot).",
          "quelle": "https://bioboostx.com/legal-notice/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Die AGB nennen unter '2. Contracting Party' eine abweichende Adresse in Polen (BioBoostX, Grabarska 1, Pegaz Building B, 50-079 Wroclaw, Polen, Tel. +49 1551 0400976) sowie eine VAT-ID mit anderer Ziffernfolge (DE24047967, 8-stellig) als im Legal-Notice (DE240479675, 9-stellig) - die beiden eigenen Rechtsseiten des Shops widersprechen sich in Firmenanschrift und VAT-ID (per Screenshot geprüft).",
          "text_en": "The terms and conditions name a different address in Poland under '2. Contracting Party' (BioBoostX, Grabarska 1, Pegaz Building B, 50-079 Wroclaw, Poland, tel. +49 1551 0400976) and a VAT ID with a different digit sequence (DE24047967, 8 digits) than the Legal Notice (DE240479675, 9 digits): the shop's two own legal pages contradict each other on company address and VAT ID (verified via screenshot).",
          "quelle": "https://bioboostx.com/terms-and-conditions/ (Abschnitt 'Contracting Party', 'Last updated: 21 November 2025')",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Zahlungsmethoden werden auf drei verschiedenen eigenen/vendor-gepflegten Seiten unterschiedlich angegeben: Homepage-Banner nennt 'Direct Bank Transfer, Pay by Bank, WALLID, Crypto'; FAQ nennt 'Kreditkarte, Google Pay, klassische/direkte Überweisung, BTC/ETH/USDT/XRP'; ChemVerify-Vendorprofil nennt 'Credit Card, Apple Pay, Bank Transfer, Crypto'. PayPal wird aktuell auf keiner der drei Seiten mehr genannt (widersprüchlich zu früheren Angaben).",
          "text_en": "Payment methods are stated differently across three different own/vendor-maintained pages: the homepage banner lists 'Direct Bank Transfer, Pay by Bank, WALLID, Crypto'; the FAQ lists 'credit card, Google Pay, classic/direct bank transfer, BTC/ETH/USDT/XRP'; the ChemVerify vendor profile lists 'Credit Card, Apple Pay, Bank Transfer, Crypto'. PayPal is currently not mentioned on any of the three pages (inconsistent with earlier statements).",
          "quelle": "https://bioboostx.com/ (Homepage-Banner), https://bioboostx.com/faq/, https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Für Epithalon ist in der CoA-Bibliothek kein chargenspezifisches Zertifikat gelistet, obwohl das Produkt im Shop aktiv verkauft wird. Auch für CJC-1295 no DAC als Einzelprodukt (10mg) existiert kein eigenes CoA in der Bibliothek - nur die Kombination 'Ipa + CJC No DAC' ist dort gelistet.",
          "text_en": "No batch-specific certificate is listed in the CoA library for Epithalon, even though the product is actively sold in the shop. There is also no own CoA in the library for CJC-1295 no DAC as a standalone product (10mg): only the combination 'Ipa + CJC No DAC' is listed there.",
          "quelle": "https://bioboostx.com/coa/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Die Produktseiten für die GLP-1/Dual-/Triple-Agonisten-Produkte ('GLP 1 - 3mg x 25 Tabs', 'GLP RTA'/'Triple G') nennen an keiner Stelle einen konkreten Wirkstoffnamen (kein Semaglutid/Tirzepatid/Retatrutid im Text, keine CAS-Nummer). Eine verifizierte Zuordnung zu den angefragten Kernpeptiden Semaglutid, Tirzepatid oder Retatrutid ist auf Basis der Shop-Angaben NICHT möglich - deshalb fehlen diese drei Peptide in der Preistabelle unten.",
          "text_en": "The product pages for the GLP-1/dual/triple agonist products ('GLP 1 - 3mg x 25 Tabs', 'GLP RTA'/'Triple G') do not name a concrete active ingredient anywhere (no Semaglutide/Tirzepatide/Retatrutide in the text, no CAS number). A verified assignment to the requested core peptides Semaglutide, Tirzepatide, or Retatrutide is NOT possible based on the shop's information: these three peptides are therefore missing from the price table below.",
          "quelle": "https://bioboostx.com/product/glp-1-3mg-x-25-tabs/, https://bioboostx.com/product/triple-g/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Auch bei anderen Produkten verzichten die Seiten bewusst auf CAS-Nummern oder ausgeschriebene Wirkstoffnamen (z.B. wird 'Tesa' nirgends auf der Seite als 'Tesamorelin' aufgelöst) - Identifikation stützt sich auf Branchen-üblichen Slang statt auf dokumentierte Wirkstoffangaben in den eigenen Produkttexten.",
          "text_en": "Other products also deliberately omit CAS numbers or spelled-out active ingredient names (e.g. 'Tesa' is nowhere resolved on the page as 'Tesamorelin'): identification relies on industry-typical slang rather than on documented active-ingredient information in the shop's own product texts.",
          "quelle": "https://bioboostx.com/product/tesa/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Gridinsoft.com (von Scamadviser als Quelle für 'potentially malicious' zitiert) war für eine eigene Direktprüfung nicht erreichbar (Cloudflare-JS-Challenge, HTTP 403 auch per curl-Fallback). Die in Suchmaschinen-Snippets kursierende Angabe eines '1/100 Trust Score' sowie Behauptungen über 'rüden/beleidigenden Kundenservice' konnten NICHT an der Quelle selbst verifiziert werden und wurden daher bewusst NICHT als Fakt in diesen Report übernommen.",
          "text_en": "Gridinsoft.com (cited by Scamadviser as the source for 'potentially malicious') was not reachable for an own direct check (Cloudflare JS challenge, HTTP 403 also via curl fallback). The claim of a '1/100 trust score' circulating in search-engine snippets, as well as allegations of 'rude/abusive customer service', could NOT be verified at the source itself and were therefore deliberately NOT included as fact in this report.",
          "quelle": "https://gridinsoft.com/online-virus-scanner/url/bioboostx-com (nicht erreichbar, HTTP 403)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Keine Treffer zu 'Bio BoostX' / 'bioboostx.com' auf Reddit (r/Peptides, r/PeptidesEU) über Websuche gefunden. Direkter Zugriff auf old.reddit.com war aus Sicherheitsgründen des Browser-Tools nicht möglich. Ebenfalls keine Treffer auf meso-rx, elitefitness oder peptidcheck24. Es gibt aktuell keine auffindbare Community-Diskussion zu diesem Anbieter.",
          "text_en": "No hits for 'Bio BoostX' / 'bioboostx.com' on Reddit (r/Peptides, r/PeptidesEU) found via web search. Direct access to old.reddit.com was not possible for security reasons of the browser tool. Likewise no hits on meso-rx, elitefitness, or peptidcheck24. There is currently no findable community discussion about this vendor.",
          "quelle": "Websuche (mehrere Anfragen, u.a. \"bioboostx site:reddit.com\", \"bio boostx forum erfahrung peptide\", \"bioboostx meso-rx OR elitefitness OR peptidcheck24\")",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "aenderungen": [
        {
          "text": "AGB laut Eigenangabe zuletzt aktualisiert am 21. November 2025.",
          "text_en": "Terms and conditions last updated on November 21, 2025, per the vendor's own statement.",
          "quelle": "https://bioboostx.com/terms-and-conditions/",
          "datum": "2026-09-15"
        },
        {
          "text": "Versandrichtlinie (Shipping Policy) laut Eigenangabe zuletzt aktualisiert am 5. Januar 2026, mit konkret ausgewiesenen, gestaffelten Versandzeiten/-kosten für EU und Worldwide (siehe Stärken).",
          "text_en": "Shipping policy last updated on January 5, 2026, per the vendor's own statement, with concretely stated, tiered shipping times/costs for EU and Worldwide (see Strengths).",
          "quelle": "https://bioboostx.com/terms-and-conditions/",
          "datum": "2026-09-15"
        },
        {
          "text": "Trustpilot-Profil ist zum Stand 15.09.2026 entfernt ('removed'). Ob je ein aktives Profil mit Bewertungen bestand und wann die Entfernung erfolgte, lässt sich ohne Kontrollgruppe/Vorher-Snapshot nicht rekonstruieren - hier nur der aktuelle Zustand dokumentiert.",
          "text_en": "The Trustpilot profile is removed as of 2026-09-15 ('removed'). Whether an active profile with reviews ever existed, and when the removal occurred, cannot be reconstructed without a control group/prior snapshot: only the current state is documented here.",
          "quelle": "https://www.trustpilot.com/review/bioboostx.com",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15",
    "partner": true,
    "partnerSeit": "2026-09-21",
    "affiliateLink": "https://bioboostx.com/?coupon=peptidecompass10"
  },
  {
    "slug": "chameleon-peptides",
    "name": "Chameleon Peptides",
    "website": "https://chameleonpeptides.com/",
    "rechtstraeger": "Origin Sourcing Group LLC dba Chameleon Peptides",
    "sitz": "Sacramento, CA, USA",
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#1B8C7A",
      "logo": "assets/img/logos/chameleon-peptides.png",
      "logoMono": "assets/img/logos/chameleon-peptides_mono.png",
      "logoRatio": 3.39,
      "logoFallback": "assets/img/logos/_wordmarks/chameleon-peptides.svg",
      "logoQuelle": "https://chameleonpeptides.com/wp-content/uploads/2026/02/logo-horizontal-transparent.png"
    },
    "score": {
      "labor": 100,
      "recht": 100,
      "lieferung": 0,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 77,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": true,
      "labor": "Janoshik Analytical (87 Berichte)",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": true,
      "ruo": true,
      "impressum": true,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": null,
      "tageMax": null,
      "laender": [
        "US"
      ]
    },
    "zahlung": [],
    "affiliate": false,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": null,
    "affiliateUrl": "https://chameleonpeptides.com/",
    "kurz": "Sitz in Sacramento, CA, USA. Kein Versand nach DACH laut Website. CoAs öffentlich einsehbar, extern geprüft.",
    "kurz_en": "Registered in Sacramento, CA, USA. Does not ship to Germany/Austria/Switzerland according to the website. CoAs are publicly available and third-party tested.",
    "staerken": [
      "Externe Labortests (Janoshik Analytical)",
      "Rechtsträger benannt und belegt",
      "Altersgate vorhanden",
      "RUO-Kennzeichnung vorhanden",
      "Impressum vorhanden"
    ],
    "staerken_en": [
      "Third-party lab testing (Janoshik Analytical)",
      "Named, verifiable legal entity",
      "Age verification gate in place",
      "RUO labeling in place",
      "Legal notice (Impressum) present"
    ],
    "schwaechen": [
      "Kein Versand nach DACH laut Website (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No shipping to Germany/Austria/Switzerland according to the website (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "nur US-Versand"
    ],
    "roteFlaggen_en": [
      "US shipping only"
    ],
    "quelle": "chameleonpeptides.com, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Trustpilot-Profil zu chameleonpeptides.com: TrustScore 5.0 von 5 aus 494 Bewertungen",
          "text_en": "Trustpilot profile for chameleonpeptides.com: TrustScore 5.0 out of 5 from 494 reviews",
          "quelle": "https://www.trustpilot.com/review/www.chameleonpeptides.com",
          "datum": "2026-09-15"
        },
        {
          "text": "Scamadviser stuft chameleonpeptides.com als 'Very Likely Safe' ein ('very likely not a scam but legit and reliable'): gültiges SSL-Zertifikat, extern (nicht vom Betreiber manipulierbares) Bewertungssystem, laut DNSFilter unbedenklich",
          "text_en": "Scamadviser rates chameleonpeptides.com as 'Very Likely Safe' ('very likely not a scam but legit and reliable'): valid SSL certificate, an external rating system not manipulable by the operator, flagged as unproblematic by DNSFilter",
          "quelle": "https://www.scamadviser.com/check-website/chameleonpeptides.com",
          "datum": "2026-09-15"
        },
        {
          "text": "Multi-Labor-Testing statt nur einem Labor: Batch-spezifische COAs von Janoshik Analytical, Vanguard Laboratory UND MZ Biolabs, mit 'BatchTrace' QR-Code-System zur Chargenverifikation (Vial-QR scannen, Batch-Code abgleichen, Report öffnen)",
          "text_en": "Multi-lab testing instead of just one lab: batch-specific CoAs from Janoshik Analytical, Vanguard Laboratory, AND MZ Biolabs, plus a 'BatchTrace' QR code system for batch verification (scan the vial QR code, match the batch code, open the report)",
          "quelle": "https://chameleonpeptides.com/about-us/",
          "datum": "2026-09-15"
        },
        {
          "text": "Testing-Umfang pro Batch dokumentiert bis zu HPLC-Reinheit, Identität (Massenspektrometrie), Menge, Endotoxine (LAL, <5.00 EU/mg), Schwermetalle und Sterilität (USP <71>), am Beispiel BPC-157 und CP-3R konkret auf der Website eingesehen",
          "text_en": "Per-batch testing scope documented up to HPLC purity, identity (mass spectrometry), quantity, endotoxins (LAL, <5.00 EU/mg), heavy metals, and sterility (USP <71>), reviewed directly on the website for the BPC-157 and CP-3R examples",
          "quelle": "https://chameleonpeptides.com/testing/",
          "datum": "2026-09-15"
        },
        {
          "text": "Namentlich benannte Gründer (Stuart und Cory), direkte Telefonnummer (916) 450-9387 und persönliche Kontakt-E-Mail (stuart@chameleonpeptides.com) statt anonymer Rechtsträger-Angabe",
          "text_en": "Named founders (Stuart and Cory), a direct phone number (916) 450-9387, and a personal contact email (stuart@chameleonpeptides.com) instead of an anonymous legal-entity statement",
          "quelle": "https://chameleonpeptides.com/about-us/",
          "datum": "2026-09-15"
        },
        {
          "text": "Kostenloser Versand auf jede Bestellung ohne Mindestbestellwert; FedEx 2Day für die meisten Nicht-PO-Box-Bestellungen (USPS Priority für PO-Boxen); Bestellungen vor 14:00 Uhr PT werden i.d.R. am selben Tag versendet, 6 Tage/Woche außer Sonntag",
          "text_en": "Free shipping on every order with no minimum order value; FedEx 2Day for most non-PO-box orders (USPS Priority for PO boxes); orders placed before 2:00 PM PT are typically shipped the same day, 6 days a week except Sunday",
          "quelle": "https://chameleonpeptides.com/faq/",
          "datum": "2026-09-15"
        },
        {
          "text": "Konkrete, aktuelle Trustpilot-Einzelrezension (7.9.2026) beschreibt funktionierenden Kundenservice bei einem Checkout-Verifizierungsproblem: schnelle menschliche Nachbearbeitung, Gutschrift als Kulanz, Lieferung nach 3 Tagen trotz Feiertagswochenende",
          "text_en": "A specific, recent individual Trustpilot review (9/7/2026) describes working customer service for a checkout verification issue: fast human follow-up, a goodwill credit, and delivery within 3 days despite a holiday weekend",
          "quelle": "https://www.trustpilot.com/review/www.chameleonpeptides.com",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Weiterhin kein internationaler Versand. Die FAQ bestätigt explizit: 'We ship to all 50 US states. International shipping is not available at this time.' DACH-Versand damit unverändert nicht möglich",
          "text_en": "Still no international shipping. The FAQ explicitly confirms: 'We ship to all 50 US states. International shipping is not available at this time.' DACH shipping therefore remains unavailable",
          "quelle": "https://chameleonpeptides.com/faq/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Neue Kaufhürde: Der Shop verlangt vor dem Checkout eine Selbstauskunft/E-Mail-Eligibility-Prüfung ('Research-institution or government-issued email' erforderlich; Gmail, Yahoo, Outlook.com und iCloud werden laut Website explizit NICHT akzeptiert). Direkt auf der Website durchlaufen (Email-Requirement-Schritt + zweistufiger 'Research Check-in' mit Forscher-Typ-Auswahl)",
          "text_en": "New purchase hurdle: before checkout, the shop requires a self-declared email eligibility check ('research-institution or government-issued email' required; Gmail, Yahoo, Outlook.com, and iCloud are explicitly NOT accepted per the website). Verified directly on the website (email requirement step plus a two-step 'Research Check-in' with a researcher-type selection)",
          "quelle": "https://chameleonpeptides.com/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "chemverify.com führt Chameleon Peptides (Stand heute) nicht in seinem Anbieter-Katalog: 11 andere Anbieter (u.a. Avellon Peptides, Helus Lab, Hydro Research Peptides, Licensed Peptides, BioCollex) sind gelistet, Chameleon Peptides fehlt vollständig. Direkt per API-Endpunkt geprüft, kein Composio-Fallback nötig (Seite lud regulär)",
          "text_en": "chemverify.com does not (as of today) include Chameleon Peptides in its vendor catalog: 11 other vendors (including Avellon Peptides, Helus Lab, Hydro Research Peptides, Licensed Peptides, BioCollex) are listed, but Chameleon Peptides is entirely absent. Checked directly via the API endpoint, no Composio fallback was needed (the page loaded normally)",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Scamadviser nennt als Negativpunkte einen niedrigen Tranco-Rank (geringer Website-Traffic) sowie eine junge Domain-Registrierung als Vorsichtshinweise",
          "text_en": "Scamadviser cites a low Tranco rank (low website traffic) and a young domain registration as caution flags",
          "quelle": "https://www.scamadviser.com/check-website/chameleonpeptides.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Epithalon (10mg-Variante) war am Erhebungstag im Shop als 'Out of Stock' markiert und damit trotz gelistetem Preis nicht kaufbar",
          "text_en": "Epithalon (the 10mg variant) was marked 'Out of Stock' in the shop on the day of the check and therefore not purchasable despite the listed price",
          "quelle": "https://chameleonpeptides.com/shop/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Community-Meinung (Reddit, 1 Beitrag mit Diskussion): Im Thread 'Grey question' (r/Peptidesource, Erstpost ca. Juni 2026) berichtet Nutzerin 'Noushkamai', von einem Anbieter namens 'chameleon peptides' mit einem klassischen Zoll-/Versicherungsgebühren-Betrugsmuster (angeblich zusätzliche $105 'insurance' plus $225 'customs' für eine internationale Sendung in die USA) konfrontiert worden zu sein. WICHTIGER VORBEHALT: Diese Schilderung (grenzüberschreitender Versand, Zollgebühren) widerspricht dem dokumentierten Geschäftsmodell von chameleonpeptides.com (reiner US-Inlandsversand ab Sacramento, siehe Schwäche oben: Zollproblematik kann bei einer US-internen FedEx/USPS-Sendung nicht auftreten). Der Ursprungsthread selbst warnt ausdrücklich vor Namens-Imitatoren ('for every legitimate vendor there are minimally 6 impersonators and scammers'), und ein anderer Nutzer fragt im Thread explizit kritisch nach, wie die Autorin den Anbieter gefunden hat. Hohe Wahrscheinlichkeit, dass es sich um einen Trittbrettfahrer/Phishing-Klon unter ähnlichem Namen handelt, nicht um chameleonpeptides.com selbst. Sollte ohne weitere Prüfung NICHT als Tatsachenbehauptung gegen den Anbieter gewertet werden",
          "text_en": "Community sentiment (Reddit, 1 post with discussion): in the thread 'Grey question' (r/Peptidesource, originally posted around June 2026), user 'Noushkamai' reports being confronted by a vendor named 'chameleon peptides' with a classic customs/insurance-fee scam pattern (allegedly an extra $105 'insurance' plus $225 'customs' fee for an international shipment to the US). IMPORTANT CAVEAT: this account (cross-border shipping, customs fees) contradicts the documented business model of chameleonpeptides.com (US-domestic-only shipping from Sacramento, see the weakness above: a customs issue cannot arise on a purely domestic US FedEx/USPS shipment). The original thread itself explicitly warns about name impersonators ('for every legitimate vendor there are minimally 6 impersonators and scammers'), and another user in the thread explicitly and critically asks how the author found the vendor. There is a high likelihood that this involves a copycat/phishing clone under a similar name rather than chameleonpeptides.com itself. This should NOT be treated as a factual claim against the vendor without further verification",
          "quelle": "https://www.reddit.com/r/Peptidesource/comments/1to9zye/grey_question/",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "aenderungen": [
        {
          "text": "Website grundlegend überarbeitet: neues zweistufiges 'Research Access'-Gate vor dem Shop-Zugang (E-Mail-Eligibility-Hinweis + 'Research Check-in' mit Forscher-Typ-Dropdown und Pflicht-Checkbox), ersetzt den zuvor angenommenen einfachen Altersgate",
          "text_en": "Website fundamentally overhauled: a new two-step 'Research Access' gate before shop access (email eligibility notice plus a 'Research Check-in' with a researcher-type dropdown and a mandatory checkbox), replacing the previously assumed simple age gate",
          "quelle": "https://chameleonpeptides.com/",
          "datum": "2026-09-15"
        },
        {
          "text": "Laborprüfung erweitert: von reinem Janoshik-Programm (87 Berichte, Stand Vorrecherche 06.09.2026) zu Multi-Labor-Testing mit Janoshik Analytical, Vanguard Laboratory und MZ Biolabs plus neuem 'BatchTrace' QR-Verifizierungssystem",
          "text_en": "Lab testing expanded: from a pure Janoshik program (87 reports, as of the 06.09.2026 prior research) to multi-lab testing with Janoshik Analytical, Vanguard Laboratory, and MZ Biolabs, plus a new 'BatchTrace' QR verification system",
          "quelle": "https://chameleonpeptides.com/about-us/",
          "datum": "2026-09-15"
        },
        {
          "text": "Neues Kundenbindungsprogramm 'Chameleon Club' eingeführt: kostenloses Level-System mit Gratis-Aufbewahrungsboxen als Belohnung ab bestimmten Bestellsummen",
          "text_en": "New loyalty program 'Chameleon Club' introduced: a free tier system with free storage boxes as a reward above certain order totals",
          "quelle": "https://chameleonpeptides.com/",
          "datum": "2026-09-15"
        },
        {
          "text": "About-Us-Seite komplett neu aufgebaut: jetzt mit namentlich genannten Gründern (Stuart & Cory), Gründungsgeschichte, Telefonnummer und Support-Kontakt statt reiner Rechtsträger-Angabe; Seite trägt Zeitstempel 'Last Updated September 12, 2026'",
          "text_en": "About-Us page completely rebuilt: now with named founders (Stuart & Cory), a founding story, a phone number, and a support contact instead of a bare legal-entity statement; the page carries the timestamp 'Last Updated September 12, 2026'",
          "quelle": "https://chameleonpeptides.com/about-us/",
          "datum": "2026-09-15"
        },
        {
          "text": "Zahlungsmethoden jetzt explizit dokumentiert (vorher unbekannt/null): Kredit-/Debitkarte, Apple Pay sowie ACH/eCheck-Banküberweisung via Plaid",
          "text_en": "Payment methods now explicitly documented (previously unknown/null): credit/debit card, Apple Pay, and ACH/eCheck bank transfer via Plaid",
          "quelle": "https://chameleonpeptides.com/faq/",
          "datum": "2026-09-15"
        },
        {
          "text": "Internationaler Versand weiterhin NICHT eingeführt: Status zur Vorrecherche vom 06.09.2026 unverändert, heute erneut explizit auf der FAQ-Seite bestätigt",
          "text_en": "International shipping still NOT introduced: unchanged from the 06.09.2026 prior research, explicitly reconfirmed today on the FAQ page",
          "quelle": "https://chameleonpeptides.com/faq/",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": null
  },
  {
    "slug": "helus-lab",
    "name": "Helus Lab",
    "website": "https://heluslab.com/",
    "rechtstraeger": "HELUS RESEARCH Laurynas Orlovičius (Einzelunternehmen, NIP 8982324888)",
    "sitz": "Wrocław, Polen",
    "land": "EU",
    "gegruendet": null,
    "brand": {
      "farbe": "#0E6B64",
      "logo": "assets/img/logos/helus-lab.png",
      "logoMono": "assets/img/logos/helus-lab_mono.png",
      "logoRatio": 4.15,
      "logoFallback": "assets/img/logos/_wordmarks/helus-lab.svg",
      "logoQuelle": "https://heluslab.com/wp-content/uploads/2026/08/Login_page_Logo_Black_blue_v3.svg"
    },
    "score": {
      "labor": 60,
      "recht": 100,
      "lieferung": 65,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 77,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": null,
      "labor": "EU-Labor, Name nicht genannt (heluslab.com/coa/)",
      "anzahl": null
    },
    "reinheit": 99.51,
    "rechtsrahmen": {
      "altersgate": true,
      "ruo": true,
      "impressum": null,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": null,
      "tageMax": null,
      "laender": [
        "EU"
      ]
    },
    "zahlung": [
      "Karte",
      "PayPal",
      "Krypto",
      "Überweisung"
    ],
    "affiliate": false,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": 3.0,
    "affiliateUrl": "https://heluslab.com/",
    "kurz": "Sitz in Wrocław, Polen. Versand laut Website nach DACH. CoAs öffentlich einsehbar, externe Prüfung nicht bestätigt.",
    "kurz_en": "Registered in Wrocław, Polen. Ships to Germany/Austria/Switzerland according to the website. CoAs are publicly available, third-party testing not confirmed.",
    "staerken": [
      "Öffentlich einsehbare CoAs",
      "Rechtsträger benannt und belegt",
      "Altersgate vorhanden",
      "RUO-Kennzeichnung vorhanden",
      "Katalog-Reinheit 99,51 %"
    ],
    "staerken_en": [
      "Publicly available CoAs",
      "Named, verifiable legal entity",
      "Age verification gate in place",
      "RUO labeling in place",
      "Catalog purity 99.51 %"
    ],
    "schwaechen": [],
    "schwaechen_en": [],
    "roteFlaggen": [
      "Einzelunternehmen"
    ],
    "roteFlaggen_en": [
      "sole proprietorship"
    ],
    "quelle": "chemverify Katalog, GoWork.pl, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "zu-pruefen",
    "statusGrund": "Website liegt seit mindestens Mai 2026 vollständig hinter einem Login (wp-login.php), kein Kauf oder CoA-Einsicht ohne Registrierung möglich (Stand 15.09.2026).",
    "statusGrund_en": "The website has been fully behind a login (wp-login.php) since at least May 2026; no purchase or CoA access is possible without registration (as of Sep 15, 2026).",
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Breites Sortiment: chemverify.com listet 50 aktive Produkt-URLs für Helus Lab (u.a. GLP-1/Semaglutid, GLP-2/Tirzepatid, GLP-3/Retatrutid, GLP-CG als eigene SKUs), deutlich mehr als bei der letzten Erhebung bekannt war.",
          "text_en": "Broad range: chemverify.com lists 50 active product URLs for Helus Lab (including GLP-1/semaglutide, GLP-2/tirzepatide, GLP-3/retatrutide, GLP-CG as separate SKUs), noticeably more than was known at the last assessment.",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15"
        },
        {
          "text": "Jede geprüfte Produktseite (Stand Archiv 10.04.2026) nennt CAS-Nummer, Summenformel, Aminosäuresequenz und Molekülmasse pro Peptid: überdurchschnittlich detaillierte technische Dokumentation im Branchenvergleich.",
          "text_en": "Every checked product page (archive state Apr 10, 2026) states the CAS number, molecular formula, amino acid sequence, and molecular mass per peptide: above-average technical documentation compared to the industry.",
          "quelle": "https://web.archive.org/web/20260410233533/https://heluslab.com/peptides/bpc-157-10mg/",
          "datum": "2026-04-10"
        },
        {
          "text": "CJC-1295 wird in zwei klar getrennten Varianten angeboten (NO DAC und With DAC, je 5mg, je 29,99€) statt nur einer Variante, mehr Auswahl als bei vielen Wettbewerbern.",
          "text_en": "CJC-1295 is offered in two clearly separated variants (NO DAC and With DAC, 5mg each, €29.99 each) rather than just one variant, more choice than many competitors offer.",
          "quelle": "https://web.archive.org/web/20260410223022/https://heluslab.com/peptides/cjc-1295-no-dac-5mg/",
          "datum": "2026-04-10"
        },
        {
          "text": "Versandbedingungen klar dokumentiert: Bearbeitung innerhalb 1 Werktag, Versand am selben Tag bei Zahlungseingang vor 14 Uhr werktags, Lieferung 2-5 Werktage, kostenloser Versand ab 200€ Bestellwert innerhalb der EU.",
          "text_en": "Shipping terms clearly documented: processing within 1 business day, same-day dispatch on payment received before 2pm on business days, delivery in 2-5 business days, free shipping within the EU from a €200 order value.",
          "quelle": "https://web.archive.org/web/20250915064722/https://heluslab.com/home/shipping-policy/",
          "datum": "2025-09-15"
        },
        {
          "text": "ScamAdviser stuft heluslab.com als \"Very Likely Safe\" ein: gültiges SSL-Zertifikat, lange gehaltene Domain, als Zahlungsmethoden Kreditkarte/PayPal mit Rückerstattungsoption.",
          "text_en": "ScamAdviser rates heluslab.com as \"Very Likely Safe\": valid SSL certificate, long-held domain, and credit card/PayPal as payment methods with a refund option.",
          "quelle": "https://www.scamadviser.com/check-website/heluslab.com",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Die komplette Website ist am 15.09.2026 nicht mehr öffentlich zugänglich: Startseite, alle geprüften Produktseiten und die /coa/-Seite liefern serverseitig einen 301/302-Redirect auf wp-login.php (WordPress-Login erforderlich). Es ist aktuell weder ein Kauf noch eine CoA-Einsicht ohne Login möglich.",
          "text_en": "As of Sep 15, 2026, the entire website is no longer publicly accessible: the homepage, all checked product pages, and the /coa/ page all serve a server-side 301/302 redirect to wp-login.php (WordPress login required). Currently neither a purchase nor CoA access is possible without logging in.",
          "quelle": "https://heluslab.com/ (direkter HTTP-Check per curl)",
          "datum": "2026-09-14",
          "art": "belegt"
        },
        {
          "text": "Das Trustpilot-Profil von heluslab.com wurde entfernt: \"The business you're trying to find goes against our guidelines and is no longer visible on Trustpilot.\" Bestätigt sowohl auf trustpilot.com als auch auf der ca.trustpilot.com-Variante.",
          "text_en": "The Trustpilot profile for heluslab.com has been removed: \"The business you're trying to find goes against our guidelines and is no longer visible on Trustpilot.\" Confirmed on both trustpilot.com and the ca.trustpilot.com variant.",
          "quelle": "https://www.trustpilot.com/review/heluslab.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Weiterhin kein Impressum/Legal-Seite auffindbar: eine vollständige Wayback-CDX-Abfrage über alle je gecrawlten heluslab.com-URLs enthält keine Impressum-, Legal- oder Anbieterkennzeichnungs-Seite; ein direkter Aufruf von /impressum/ liefert einen 404, der auf die Login-Seite umgeleitet wird.",
          "text_en": "Still no imprint/legal page findable: a full Wayback CDX query across every ever-crawled heluslab.com URL contains no imprint, legal, or provider-identification page; a direct request to /impressum/ returns a 404 that is redirected to the login page.",
          "quelle": "http://web.archive.org/cdx/search/cdx?url=heluslab.com&matchType=domain",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Der auf heluslab.com selbst öffentlich einsehbare CoA-Bereich (/coa/, Archiv-Stand 15.09.2025) nennt an keiner Stelle im Seitentext den Namen des externen Prüflabors, nur Produktnamen als Galerie-Kacheln. Der Laborname \"Janoshik Analytical\" stammt ausschließlich aus dem strukturierten chemverify-Datensatz (Feld coa_lab_name), nicht von der Helus-Lab-Seite selbst, und konnte dort nicht direkt gegengeprüft werden, weil die Seite aktuell hinter dem Login liegt.",
          "text_en": "The CoA section publicly viewable on heluslab.com itself (/coa/, archive state Sep 15, 2025) nowhere names the external testing lab in the page text, only product names as gallery tiles. The lab name \"Janoshik Analytical\" comes exclusively from the structured chemverify dataset (field coa_lab_name), not from the Helus Lab site itself, and could not be cross-checked there directly because the site is currently behind the login.",
          "quelle": "https://web.archive.org/web/20250915053358/https://heluslab.com/coa/",
          "datum": "2025-09-15",
          "art": "belegt"
        },
        {
          "text": "chemverify.com führt Helus Lab weiterhin als \"is_verified: false\" mit \"rating: null\": kein eigenes Nutzer-Rating auf der Vergleichsplattform.",
          "text_en": "chemverify.com still lists Helus Lab as \"is_verified: false\" with \"rating: null\": no own user rating on the comparison platform.",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Rechtsträger bleibt ein Einzelunternehmen (HELUS RESEARCH Laurynas Orlovičius), keine Kapitalgesellschaft, aus vorheriger Recherche unverändert und in dieser Runde nicht widerlegt.",
          "text_en": "The legal entity remains a sole proprietorship (HELUS RESEARCH Laurynas Orlovičius), not a corporation, unchanged from prior research and not disputed in this round.",
          "quelle": "chemverify Katalog / GoWork.pl (Vorrecherche 06.09.2026, in dieser Runde nicht neu geprüft)",
          "datum": "2026-09-06",
          "art": "belegt"
        },
        {
          "text": "Gezielte Suche nach \"Helus Lab\" / \"heluslab.com\" auf Reddit (WebSearch, u.a. site:reddit.com) ergab keine einzige thematisch passende Diskussion, keine Community-Präsenz feststellbar, weder positiv noch negativ.",
          "text_en": "A targeted search for \"Helus Lab\" / \"heluslab.com\" on Reddit (web search, including site:reddit.com) turned up not a single thematically relevant discussion, no community presence detectable, neither positive nor negative.",
          "quelle": "WebSearch \"heluslab OR Helus Lab site:reddit.com\"",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "aenderungen": [
        {
          "text": "Neu seit letzter Erhebung (06.09.2026): Die öffentliche Website ist irgendwann zwischen dem letzten funktionierenden Wayback-Snapshot (15.05.2026, damals noch normaler Shop unter dem Titel \"Buy Research Peptides In Europe | Helus Lab EU Supplier\") und heute (15.09.2026) komplett hinter einen WordPress-Login gewandert. Shop, Preise und CoAs sind aktuell nicht mehr öffentlich abrufbar.",
          "text_en": "New since the last assessment (Sep 6, 2026): the public website moved, at some point between the last working Wayback snapshot (May 15, 2026, then still a normal shop titled \"Buy Research Peptides In Europe | Helus Lab EU Supplier\") and today (Sep 15, 2026), completely behind a WordPress login. The shop, prices, and CoAs are currently no longer publicly accessible.",
          "quelle": "https://web.archive.org/web/20260515171140/https://heluslab.com/",
          "datum": "2026-05-15"
        },
        {
          "text": "Trustpilot-Profil wurde seit der letzten Prüfung entfernt (Zeitpunkt der Entfernung nicht feststellbar, nur dass es aktuell, 15.09.2026, nicht mehr existiert und laut Trustpilot gegen deren Richtlinien verstoßen habe).",
          "text_en": "The Trustpilot profile has been removed since the last check (the removal date could not be determined, only that it no longer exists as of Sep 15, 2026 and, per Trustpilot, violated their guidelines).",
          "quelle": "https://www.trustpilot.com/review/heluslab.com",
          "datum": "2026-09-15"
        },
        {
          "text": "chemverify.com nennt jetzt erstmals einen externen Laborname (\"Janoshik Analytical\", Feld coa_lab_name) und einen purity_batch_count von 26; bei der Vorrecherche am 06.09.2026 war coa_extern noch nicht belegt. Dieser Laborname ist aber nur über chemverify belegt, nicht direkt auf heluslab.com selbst nachgewiesen (siehe Schwäche oben).",
          "text_en": "chemverify.com now names an external lab for the first time (\"Janoshik Analytical\", field coa_lab_name) and a purity_batch_count of 26; at the prior research on Sep 6, 2026, coa_extern was not yet documented. However, this lab name is only documented via chemverify, not directly verified on heluslab.com itself (see weakness above).",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15"
        },
        {
          "text": "Sortiment ist laut chemverify-Katalog auf 50 gelistete Produkt-URLs gewachsen, inklusive einer klar erkennbaren GLP-1/GLP-2/GLP-3/GLP-CG-Linie (Semaglutid, Tirzepatid, Retatrutid, Cagrilintid-Kombination je über CAS-Nummer verifiziert); bei der Vorrecherche war dieses Teilsortiment nicht erfasst.",
          "text_en": "The range has grown to 50 listed product URLs per the chemverify catalog, including a clearly identifiable GLP-1/GLP-2/GLP-3/GLP-CG line (semaglutide, tirzepatide, retatrutide, cagrilintide combination, each verified via CAS number); this sub-range was not captured in the prior research.",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": false,
    "preisStand": "2026-04-10"
  },
  {
    "slug": "protide-health",
    "name": "Protide Health",
    "website": "https://protidehealth.com/",
    "rechtstraeger": "Protide Health Corporation (Delaware)",
    "sitz": "USA",
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#8C4F1B",
      "logo": "assets/img/logos/protide-health.png",
      "logoMono": "assets/img/logos/protide-health_mono.png",
      "logoRatio": 4.62,
      "logoFallback": "assets/img/logos/_wordmarks/protide-health.svg",
      "logoQuelle": "https://protidehealth.com/wp-content/uploads/2026/02/protide-health-logo.png"
    },
    "score": {
      "labor": 60,
      "recht": 100,
      "lieferung": 0,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 62,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": null,
      "labor": "US-Labor, nicht genannt",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": true,
      "ruo": true,
      "impressum": true,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": null,
      "tageMax": null,
      "laender": [
        "US"
      ]
    },
    "zahlung": [],
    "affiliate": false,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": null,
    "affiliateUrl": "https://protidehealth.com/",
    "kurz": "Sitz in USA. Kein Versand nach DACH laut Website. CoAs öffentlich einsehbar, externe Prüfung nicht bestätigt.",
    "kurz_en": "Registered in USA. Does not ship to Germany/Austria/Switzerland according to the website. CoAs are publicly available, third-party testing not confirmed.",
    "staerken": [
      "Öffentlich einsehbare CoAs",
      "Rechtsträger benannt und belegt",
      "Altersgate vorhanden",
      "RUO-Kennzeichnung vorhanden",
      "Impressum vorhanden"
    ],
    "staerken_en": [
      "Publicly available CoAs",
      "Named, verifiable legal entity",
      "Age verification gate in place",
      "RUO labeling in place",
      "Legal notice (Impressum) present"
    ],
    "schwaechen": [
      "Kein Versand nach DACH laut Website (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No shipping to Germany/Austria/Switzerland according to the website (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "Re-Export ausdrücklich verboten"
    ],
    "roteFlaggen_en": [
      "re-export explicitly prohibited"
    ],
    "quelle": "protidehealth.com/terms-of-service, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "CoA-Labor jetzt namentlich bekannt: unabhängiges US-Labor 'Freedom Diagnostics' führt die HPLC-MS-Tests durch; Chargen-CoAs sind öffentlich in einer COA-Library/COA-Archive einsehbar (Baseline 06.09.2026 hatte coa_extern:null, 'Labor nicht genannt').",
          "text_en": "The CoA lab is now named: the independent US lab 'Freedom Diagnostics' performs the HPLC-MS testing, and batch CoAs are publicly viewable in a COA library/archive (the baseline from 06.09.2026 had coa_extern:null, 'lab not disclosed').",
          "quelle": "https://protidehealth.com/pages/faq",
          "datum": "2026-09-15"
        },
        {
          "text": "Rechtstext (Terms of Service) unverändert seit Effective/Last Revised 25.05.2026, Rechtsträger weiterhin 'Protide Health Corporation', Delaware: keine Verschlechterung der Rechtslage festgestellt.",
          "text_en": "The Terms of Service text is unchanged since the Effective/Last Revised date of 05/25/2026, the legal entity remains 'Protide Health Corporation', Delaware: no deterioration in the legal terms was found.",
          "quelle": "https://protidehealth.com/pages/terms-of-service",
          "datum": "2026-09-15"
        },
        {
          "text": "ScamAdviser stuft protidehealth.com als 'Very Likely Safe' ein; Domain seit 2025-01-07 registriert (WHOIS), Registrierung bis 2030 verlängert, gültiges SSL-Zertifikat.",
          "text_en": "ScamAdviser rates protidehealth.com as 'Very Likely Safe'; the domain has been registered since 2025-01-07 (WHOIS), the registration has been extended to 2030, and it has a valid SSL certificate.",
          "quelle": "https://www.scamadviser.com/check-website/protidehealth.com",
          "datum": "2026-09-15"
        },
        {
          "text": "Drittanbieter-Vergleichsseite PeptideProtocolWiki bewertet Protide Health mit 6.8/10 ('good'); höchste Teilwertung ist CoA Quality mit 8.0/10 ('3rd Party COA: gold standard for quality assurance').",
          "text_en": "The third-party comparison site PeptideProtocolWiki rates Protide Health at 6.8/10 ('good'); the highest sub-score is CoA Quality at 8.0/10 ('3rd Party COA: gold standard for quality assurance').",
          "quelle": "https://www.peptideprotocolwiki.com/vendors/protide-health",
          "datum": "2026-09-15"
        },
        {
          "text": "Website warnt aktiv vor Drittverkäufern: protidehealth.com ist laut FAQ der einzige offizielle Shop, kein Verkauf über Telegram/WhatsApp/Amazon/eBay/Social Media.",
          "text_en": "The website actively warns against third-party sellers: per the FAQ, protidehealth.com is the only official shop, with no sales via Telegram, WhatsApp, Amazon, eBay, or social media.",
          "quelle": "https://protidehealth.com/pages/faq",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Weiterhin ausschließlich US-Versand, kein internationaler Versand (unverändert ggü. Baseline).",
          "text_en": "Still US-only shipping, no international shipping (unchanged from the baseline).",
          "quelle": "https://protidehealth.com/pages/terms-of-service",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Zahlung laut Checkout-Badges auf Produktseiten nur per Kreditkarte (Visa, American Express, Discover): kein PayPal, keine Kryptozahlung sichtbar.",
          "text_en": "According to the checkout badges on product pages, payment is only accepted by credit card (Visa, American Express, Discover): no PayPal and no visible crypto payment option.",
          "quelle": "https://protidehealth.com/product/bpc-157/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Neue/bislang nicht dokumentierte ToS-Klausel 6.2 'State-Specific Restrictions': Anbieter kann Verkauf/Versand in einzelne US-Bundesstaaten jederzeit ohne Vorankündigung einschränken.",
          "text_en": "New, previously undocumented ToS clause 6.2 'State-Specific Restrictions': the provider can restrict sales/shipping to individual US states at any time without prior notice.",
          "quelle": "https://protidehealth.com/pages/terms-of-service",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Produktseite /product/retatrutide/ liefert HTTP 410 Gone: unter diesem Namen aktuell nicht im Shop gelistet. Stattdessen existiert ein Produkt 'GLP-3' ($145-550, 10-100mg) ohne offengelegte chemische Identität auf der Website. Bei anderen Anbietern (z.B. balticpeptides.com) wird die Bezeichnung 'GLP-3 RT' als Synonym für Retatrutide verwendet. Ob dies bei Protide Health ebenso zutrifft, ist NICHT verifiziert (Interpretation, keine Tatsachenbehauptung).",
          "text_en": "The /product/retatrutide/ product page returns HTTP 410 Gone: it is not currently listed under that name in the shop. Instead there is a product called 'GLP-3' ($145-550, 10-100mg) with no disclosed chemical identity on the website. Other vendors (e.g. balticpeptides.com) use the term 'GLP-3 RT' as a synonym for retatrutide. Whether the same applies to Protide Health is NOT verified (interpretation, not a factual claim).",
          "quelle": "https://protidehealth.com/product/retatrutide/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Semaglutid, Tirzepatid und Epitalon/Epithalon sind weder unter Standardnamen noch unter geprüften Synonymen im vollständigen 54-Produkte-Katalog auffindbar (direkte Produkt-URLs liefern HTTP 404, Katalog-Volltext ohne Treffer).",
          "text_en": "Semaglutide, tirzepatide, and epitalon/epithalon cannot be found under either the standard names or checked synonyms in the full 54-product catalog (direct product URLs return HTTP 404, full-text catalog search returns no hits).",
          "quelle": "https://protidehealth.com/collections/all",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "PeptideProtocolWiki nennt als Cons u.a. 'Limited independent community reviews' und 'Operates own vendor ranking site (potential bias)'. Niedrigste Teilwertung ist Payment Flexibility mit 4.0/10.",
          "text_en": "PeptideProtocolWiki lists cons including 'Limited independent community reviews' and 'Operates own vendor ranking site (potential bias)'. The lowest sub-score is Payment Flexibility at 4.0/10.",
          "quelle": "https://www.peptideprotocolwiki.com/vendors/protide-health",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Keine echten Reddit-Diskussionen zu 'Protide Health' auffindbar (WebSearch site:reddit.com sowie allgemeine Suche ohne Treffer), Community-Fußabdruck praktisch nicht vorhanden. Mehrere Suchtreffer stammen von SEO-Content-Mill-artigen Domains (z.B. peptides3626.com, peptidesourcereview.info, pspeptides.com) mit unklarer Redaktion, nicht als belastbare Quelle verwendet.",
          "text_en": "No genuine Reddit discussions about 'Protide Health' could be found (a site:reddit.com search and a general search returned no results), so the community footprint is practically nonexistent. Several search hits come from SEO content-mill-style domains (e.g. peptides3626.com, peptidesourcereview.info, pspeptides.com) with unclear editorial standards, not used as a reliable source.",
          "quelle": "WebSearch: site:reddit.com \"Protide Health\" (2026-09-15, keine Treffer)",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "aenderungen": [
        {
          "text": "CoA-Labor jetzt benannt ('Freedom Diagnostics', US-based, unabhängig): Baseline 06.09.2026 hatte dies noch als 'nicht genannt' erfasst. Unklar, ob dies eine echte Website-Änderung seit 06.09. ist oder in der Erstrecherche lediglich übersehen wurde: das ToS-Dokument selbst ist seit 25.05.2026 unverändert (gleiches Revisionsdatum).",
          "text_en": "The CoA lab is now named ('Freedom Diagnostics', US-based, independent): the 06.09.2026 baseline still recorded this as 'not disclosed'. It is unclear whether this is a genuine website change since 06.09. or was simply missed in the initial research: the ToS document itself is unchanged since 25.05.2026 (same revision date).",
          "quelle": "https://protidehealth.com/pages/faq",
          "datum": "2026-09-15"
        },
        {
          "text": "Re-Export-Verbot aus der Baseline (06.09.2026) weiterhin vorhanden und sogar detaillierter ausformuliert (Abschnitt 6.3 nennt explizit mögliche Meldung an U.S. Bureau of Industry and Security und U.S. Customs and Border Protection bei Verstoß). Keine Lockerung.",
          "text_en": "The re-export ban from the baseline (06.09.2026) is still in place and is even spelled out in more detail (section 6.3 now explicitly names possible reporting to the U.S. Bureau of Industry and Security and U.S. Customs and Border Protection for violations). No easing.",
          "quelle": "https://protidehealth.com/pages/terms-of-service",
          "datum": "2026-09-15"
        },
        {
          "text": "Produktkatalog: 'Retatrutide' ist aktuell nicht mehr unter eigenem Namen gelistet (Produktseite liefert 410 Gone). Zeitpunkt der Entfernung/Umbenennung nicht ermittelbar: könnte vor oder nach dem 06.09.2026-Stichtag erfolgt sein, war nicht Teil der Baseline-Prüfung.",
          "text_en": "Product catalog: 'Retatrutide' is no longer listed under its own name (the product page returns 410 Gone). The timing of the removal/renaming cannot be determined: it could have happened before or after the 06.09.2026 cutoff and was not part of the baseline check.",
          "quelle": "https://protidehealth.com/product/retatrutide/",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": null
  },
  {
    "slug": "american-peptides",
    "name": "American Peptides",
    "website": "https://americanpeptides.us/",
    "rechtstraeger": null,
    "sitz": "Shreveport, LA, USA (laut Snippet)",
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#453E90",
      "logo": "assets/img/logos/american-peptides.png",
      "logoMono": "assets/img/logos/american-peptides_mono.png",
      "logoRatio": 3.77,
      "logoFallback": "assets/img/logos/_wordmarks/american-peptides.svg",
      "logoQuelle": "https://americanpeptides.us/american-peptides-logo.png"
    },
    "score": {
      "labor": 60,
      "recht": 100,
      "lieferung": 0,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 62,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": true,
      "extern": false,
      "labor": "Labor nicht genannt",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": null,
      "ruo": true,
      "impressum": true,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": null,
      "tageMax": null,
      "laender": [
        "US"
      ]
    },
    "zahlung": [],
    "affiliate": true,
    "affiliateProgrammUrl": "https://americanpeptides.us/pages/affiliate-program",
    "provision": "10 bis 35 % (Snippet, ungeprüft)",
    "rabatt": null,
    "produkte": [],
    "preisProMg": null,
    "affiliateUrl": "https://americanpeptides.us/",
    "kurz": "Sitz in Shreveport, LA, USA (laut Snippet). Kein Versand nach DACH laut Website. CoAs öffentlich einsehbar, externe Prüfung nicht bestätigt.",
    "kurz_en": "Registered in Shreveport, LA, USA (laut Snippet). Does not ship to Germany/Austria/Switzerland according to the website. CoAs are publicly available, third-party testing not confirmed.",
    "staerken": [
      "Öffentlich einsehbare CoAs",
      "RUO-Kennzeichnung vorhanden"
    ],
    "staerken_en": [
      "Publicly available CoAs",
      "RUO labeling in place"
    ],
    "schwaechen": [
      "Kein auffindbares Impressum (Stand 06.09.2026)",
      "Kein Versand nach DACH laut Website (Stand 06.09.2026)",
      "Rechtsträger nicht ermittelbar (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No findable legal notice (as of Sep 6, 2026)",
      "No shipping to Germany/Austria/Switzerland according to the website (as of Sep 6, 2026)",
      "Legal entity not ascertainable (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "Impressum unvollständig",
      "nur US-Versand",
      "Seite blockt Zugriff"
    ],
    "roteFlaggen_en": [
      "incomplete legal notice",
      "US shipping only",
      "site blocks access"
    ],
    "quelle": "peptidcheck24, WebSearch-Snippets, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Website am 15.09.2026 vollständig erreichbar (HTTP 200, curl + WebSearch), kein Zugriffsblock mehr feststellbar, widerspricht der Vorquellen-Flagge 'Seite blockt Zugriff' vom 06.09.",
          "text_en": "Website fully reachable on 15.09.2026 (HTTP 200, curl plus WebSearch), no access block detectable anymore; this contradicts the prior source flag 'site blocks access' from 06.09.",
          "quelle": "https://americanpeptides.us/",
          "datum": "2026-09-15"
        },
        {
          "text": "Lot-matched CoA-Bibliothek mit 51 Produkten (je Charge eigenes PDF, z.B. 'Lot RETA10-0803'), benanntes Testlabor Bioviridian (HPLC-MS Reinheit, MALDI Identität, Endotoxin-Screening)",
          "text_en": "Lot-matched CoA library covering 51 products (own PDF per batch, e.g. 'Lot RETA10-0803'), named test lab Bioviridian (HPLC-MS purity, MALDI identity, endotoxin screening)",
          "quelle": "https://americanpeptides.us/pages/coa",
          "datum": "2026-09-15"
        },
        {
          "text": "Rechtsträger jetzt identifizierbar: 'American Peptides LLC', Gerichtsstand/Recht Louisiana, vollständige Adresse (9742 St. Vincent Ave, Shreveport, LA 71106), Telefon +1 (318) 347-5336 und E-Mail support@americanpeptides.us genannt (verteilt über TOS/Kontakt/Footer, keine einzelne Impressum-Seite)",
          "text_en": "Legal entity now identifiable: 'American Peptides LLC', jurisdiction/governing law Louisiana, full address (9742 St. Vincent Ave, Shreveport, LA 71106), phone +1 (318) 347-5336 and email support@americanpeptides.us given (spread across TOS/contact/footer, no single imprint page)",
          "quelle": "https://americanpeptides.us/pages/terms-of-service",
          "datum": "2026-09-15"
        },
        {
          "text": "Affiliate-Programm mit klaren, öffentlich einsehbaren Konditionen: Staffelmodell 10% (Starter) bis 35% (Elite) je nach GMV, 30-Tage-Cookie, monatliche Auszahlung per ACH oder PayPal, kostenlose Teilnahme",
          "text_en": "Affiliate program with clear, publicly viewable terms: tiered model from 10% (Starter) to 35% (Elite) depending on GMV, 30-day cookie, monthly payout via ACH or PayPal, free to join",
          "quelle": "https://americanpeptides.us/pages/affiliate-program",
          "datum": "2026-09-15"
        },
        {
          "text": "Alle 12 abgefragten Kern-Peptide im Katalog gelistet, fast durchgehend lieferbar (nur einzelne Zwischengrößen bei Semaglutid/BPC-157 kurzfristig 'Out of Stock'), Preise per JSON-LD strukturiert ausgezeichnet",
          "text_en": "All 12 core peptides checked are listed in the catalog and almost consistently in stock (only a few intermediate sizes for semaglutide/BPC-157 briefly 'Out of Stock'), prices marked up with structured JSON-LD",
          "quelle": "https://americanpeptides.us/products/bpc-157 (u.a. Produktseiten)",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "ScamAdviser Trust Score 0/100, Einstufung 'Likely Unsafe', von Gridinsoft als mögliche Malware-Seite gemeldet, Domain erst 6 Monate alt (WHOIS-Registrierung 2026-02-21), niedriges Tranco-Ranking",
          "text_en": "ScamAdviser trust score 0/100, rated 'Likely Unsafe', flagged by Gridinsoft as a possible malware site, domain only 6 months old (WHOIS registration 2026-02-21), low Tranco ranking",
          "quelle": "https://www.scamadviser.com/check-website/americanpeptides.us",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Versand laut eigenen AGB 'limited to the continental United States only', kein DACH- oder sonstiger internationaler Versand, exklusiv UPS/FedEx",
          "text_en": "Per the vendor's own terms, shipping is 'limited to the continental United States only', no DACH or other international shipping, exclusively via UPS/FedEx",
          "quelle": "https://americanpeptides.us/pages/terms-of-service",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "CoA-Dokumente sind ausschließlich selbst gehostet (/docs/COA*.pdf auf der eigenen Domain), kein Verifizierungslink zu einer unabhängigen Laborseite oder Batch-Checker von Bioviridian selbst, Reinheitsangaben aktuell nur über das eigene PDF, nicht extern gegenprüfbar",
          "text_en": "CoA documents are exclusively self-hosted (/docs/COA*.pdf on the vendor's own domain), with no verification link to an independent lab page or a batch checker run by Bioviridian itself; purity figures are currently only available via the vendor's own PDF and cannot be cross-checked externally",
          "quelle": "https://americanpeptides.us/pages/coa",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Kein Eintrag bei chemverify.com, Katalog listet 11 Anbieter (u.a. Particle Peptides, Avellon, Peptidwerk), American Peptides fehlt komplett",
          "text_en": "No listing on chemverify.com; the catalog lists 11 vendors (including Particle Peptides, Avellon, Peptidwerk), American Peptides is missing entirely",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Keine unabhängige Kundenbewertung selbst verifizierbar: Trustpilot-Profilseite existiert laut Google-Index, Inhalt aber für mich nicht abrufbar (HTTP 403 sowohl per curl als auch per Fetch-Tool); zwei gezielte WebSearch-Abfragen (allgemein + site:reddit.com) fanden keine Reddit-Diskussion zu 'American Peptides'",
          "text_en": "No independent customer review could be verified myself: a Trustpilot profile page exists per the Google index, but its content was not retrievable by me (HTTP 403 via both curl and the fetch tool); two targeted WebSearch queries (general plus site:reddit.com) found no Reddit discussion about 'American Peptides'",
          "quelle": "https://uk.trustpilot.com/review/americanpeptides.us (403, selbst versucht 15.09.2026)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "WHOIS-Kontakt (Registrant/Admin/Tech: Ron Kilgarlin, American Peptides LLC) nutzt eine E-Mail-Adresse der Fremddomain americanscreeningcorp.com (American Screening Corp), Konzern-/Eigentümerbeziehung wird auf der Anbieter-Website selbst nirgends offengelegt",
          "text_en": "The WHOIS contact (registrant/admin/tech: Ron Kilgarlin, American Peptides LLC) uses an email address on the separate domain americanscreeningcorp.com (American Screening Corp); this parent/ownership relationship is not disclosed anywhere on the vendor's own website",
          "quelle": "https://www.scamadviser.com/check-website/americanpeptides.us",
          "datum": "2026-09-15",
          "art": "belegt"
        }
      ],
      "aenderungen": [
        {
          "text": "Zugriffsblock aus der Vorquelle (06.09.) nicht mehr bestätigt, Site heute vollständig ladbar, alle geprüften Unterseiten (Kontakt, AGB, Datenschutz, COA, Partnerprogramm) liefern HTTP 200",
          "text_en": "The access block from the prior source (06.09.) is no longer confirmed; the site loads fully today, and every checked subpage (contact, terms, privacy, CoA, affiliate program) returns HTTP 200",
          "quelle": "https://americanpeptides.us/",
          "datum": "2026-09-15"
        },
        {
          "text": "Rechtsträger geklärt: 'American Peptides LLC' (vorher rechtstraeger:null, impressum:false), Name, Adresse, Telefon, E-Mail jetzt auffindbar, aber weiterhin keine gebündelte Impressum-Seite nach EU-Muster",
          "text_en": "Legal entity clarified: 'American Peptides LLC' (previously rechtstraeger:null, impressum:false); name, address, phone and email are now findable, but there is still no single bundled EU-style imprint page",
          "quelle": "https://americanpeptides.us/pages/terms-of-service",
          "datum": "2026-09-15"
        },
        {
          "text": "Provisionsangabe '10-35%' aus dem ungeprüften Snippet jetzt direkt auf der Anbieter-Seite bestätigt (Staffelmodell Starter 10% bis Elite 35%, an monatliches GMV gekoppelt)",
          "text_en": "The commission figure of '10-35%' from the previously unverified snippet is now confirmed directly on the vendor's site (tiered model from Starter 10% to Elite 35%, tied to monthly GMV)",
          "quelle": "https://americanpeptides.us/pages/affiliate-program",
          "datum": "2026-09-15"
        },
        {
          "text": "CoA-Labor jetzt benannt: Bioviridian (HPLC-MS/MALDI/Endotoxin), vorher 'Labor nicht genannt'",
          "text_en": "CoA lab now named: Bioviridian (HPLC-MS/MALDI/endotoxin), previously 'lab not named'",
          "quelle": "https://americanpeptides.us/",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": null
  },
  {
    "slug": "dn-lab-research",
    "name": "DN Lab Research",
    "website": "https://dnlabresearch.com/",
    "rechtstraeger": null,
    "sitz": "Farnborough, UK (Footer); Dubai laut peptidcheck24",
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#A8690F",
      "logo": "assets/img/logos/_wordmarks/dn-lab-research.svg",
      "logoFallback": "assets/img/logos/_wordmarks/dn-lab-research.svg",
      "logoQuelle": null
    },
    "score": {
      "labor": 0,
      "recht": 67,
      "lieferung": 70,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 42,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": false,
      "extern": false,
      "labor": null,
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": true,
      "ruo": true,
      "impressum": false,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": 3,
      "tageMax": 7,
      "laender": [
        "UK",
        "EU"
      ]
    },
    "zahlung": [
      "Krypto",
      "Vorkasse"
    ],
    "affiliate": true,
    "affiliateProgrammUrl": "https://dnlabresearch.com/affiliate-area/",
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": 10.17,
    "affiliateUrl": "https://dnlabresearch.com/",
    "kurz": "Sitz in Farnborough, UK (Footer); Dubai laut peptidcheck24. Versand laut Website nach DACH. Keine öffentlich einsehbaren CoAs gefunden.",
    "kurz_en": "Registered in Farnborough, UK (Footer); Dubai laut peptidcheck24. Ships to Germany/Austria/Switzerland according to the website. No publicly available CoAs found.",
    "staerken": [
      "Altersgate vorhanden",
      "RUO-Kennzeichnung vorhanden"
    ],
    "staerken_en": [
      "Age verification gate in place",
      "RUO labeling in place"
    ],
    "schwaechen": [
      "Kein auffindbares Impressum (Stand 06.09.2026)",
      "Keine öffentlich einsehbaren CoAs (Stand 06.09.2026)",
      "Rechtsträger nicht ermittelbar (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No findable legal notice (as of Sep 6, 2026)",
      "No publicly available CoAs (as of Sep 6, 2026)",
      "Legal entity not ascertainable (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "keine Chargen-CoAs",
      "widersprüchliche Adressen",
      "Gesundheits-Testimonials trotz RUO",
      "WhatsApp als Hauptkontakt"
    ],
    "roteFlaggen_en": [
      "no batch-level CoAs",
      "conflicting addresses",
      "health-related testimonials despite RUO status",
      "WhatsApp as the main contact channel"
    ],
    "quelle": "dnlabresearch.com, peptidcheck24, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Domain seit 2021-11-06 registriert (WHOIS), relativ lange Historie für einen Peptid-Shop; gültiges SSL-Zertifikat (Google Trust Services).",
          "text_en": "Domain registered since 2021-11-06 (WHOIS), a relatively long history for a peptide shop; valid SSL certificate (Google Trust Services).",
          "quelle": "https://www.scamadviser.com/check-website/dnlabresearch.com",
          "datum": "2026-09-15"
        },
        {
          "text": "Scam Detector Rank 68.9/100, Einstufung \"Known. Vetted. Low Risk.\"",
          "text_en": "Scam Detector rank 68.9/100, classification \"Known. Vetted. Low Risk.\"",
          "quelle": "https://www.scam-detector.com/validator/dnlabresearch-com-review/",
          "datum": "2026-09-15"
        },
        {
          "text": "RUO-Disclaimer, 21+-Altersgate und Research-Use-Only-Policy sind konsistent auf Startseite, Produktseiten und eigener Policy-Seite verlinkt.",
          "text_en": "RUO disclaimer, 21+ age gate, and Research-Use-Only policy are consistently linked on the homepage, product pages, and a dedicated policy page.",
          "quelle": "https://dnlabresearch.com/research-use-only-policy/",
          "datum": "2026-09-15"
        },
        {
          "text": "9 von 12 recherchierten Kernpeptiden sind als eigenständige Einzelprodukte mit klarer mg-Angabe im \"Peptide Pen\"-Format gelistet (nicht nur als Blends/Bundles).",
          "text_en": "9 of the 12 researched core peptides are listed as standalone individual products with a clear mg amount in the 'Peptide Pen' format (not only as blends/bundles).",
          "quelle": "https://dnlabresearch.com/shop/",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Kein Impressum, keine Firmenadresse, kein Handelsregister- oder USt-ID-Hinweis auf der gesamten Website auffindbar (Home, About, Contact, Terms of Sale, Disclaimer, RUO-Policy geprüft).",
          "text_en": "No imprint, no company address, no commercial register or VAT ID reference findable anywhere on the website (Home, About, Contact, Terms of Sale, Disclaimer, RUO Policy checked).",
          "quelle": "https://dnlabresearch.com/contact/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "CoA nicht öffentlich/extern verlinkt: Produktseite sagt wörtlich \"Certificate of analysis (CoA) available for each batch upon request\", trotz Marketing-Badge \"3rd Party Tested\" direkt daneben auf derselben Seite.",
          "text_en": "CoA not publicly/externally linked: the product page literally states \"Certificate of analysis (CoA) available for each batch upon request\", despite the marketing badge '3rd Party Tested' directly next to it on the same page.",
          "quelle": "https://dnlabresearch.com/bpc-157-15mg-peptide-pen/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Widersprüchliche WhatsApp-Kontakte auf der eigenen Seite: Age-Gate-Popup (Homepage + Produktseiten) zeigt +34 661516922 (spanische Vorwahl), Kontaktseite nennt separat \"Customer Services – Whatsapp Only\" +971 50 171 9355 (VAE-Vorwahl).",
          "text_en": "Contradictory WhatsApp contacts on the vendor's own site: the age-gate popup (homepage + product pages) shows +34 661516922 (Spanish country code), while the contact page separately names \"Customer Services – Whatsapp Only\" +971 50 171 9355 (UAE country code).",
          "quelle": "https://dnlabresearch.com/contact/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Gerichtsstand in den Terms of Sale bleibt unbestimmt: \"Law of the Province of business registration of Dnlab Research shall apply\", nennt kein Land/keine Provinz, wirkt wie nicht angepasste Boilerplate.",
          "text_en": "Jurisdiction in the Terms of Sale remains undefined: \"Law of the Province of business registration of Dnlab Research shall apply\", naming no country or province, reading like unadapted boilerplate.",
          "quelle": "https://dnlabresearch.com/terms-of-sale/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Abweichender Rechtsträger-Name in der Research-Use-Only-Policy: \"All products supplied by Bioniq Lab are provided strictly for research...\", weicht vom sonst durchgängig verwendeten Namen \"Dnlab Research\"/\"DN Research\" ab; zusätzlich existiert im Shop eine Produktkategorie \"Bioniq Lab\".",
          "text_en": "Different legal-entity name in the Research-Use-Only policy: \"All products supplied by Bioniq Lab are provided strictly for research...\", deviating from the name \"Dnlab Research\"/\"DN Research\" used consistently elsewhere; additionally a product category \"Bioniq Lab\" exists in the shop.",
          "quelle": "https://dnlabresearch.com/research-use-only-policy/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Frühere Sitz-Angabe \"Farnborough, UK\" (Stand 06.09.2026, laut Footer) auf keiner der aktuell geprüften Seiten (Home, About, Contact, Terms, Disclaimer, RUO) mehr auffindbar: die einzige greifbare Kontakt-Spur ist die WhatsApp-Nummer mit VAE-Vorwahl, was eher die Dubai-These (peptidcheck24) stützt als die UK-These. Kein vollständiger Seiten-Crawl möglich (wp-sitemap 404), daher \"nicht mehr auffindbar\", nicht \"entfernt\" behauptet.",
          "text_en": "The earlier location statement \"Farnborough, UK\" (as of 2026-09-06, per the footer) is no longer findable on any of the currently checked pages (Home, About, Contact, Terms, Disclaimer, RUO): the only tangible contact trace is the WhatsApp number with the UAE country code, which supports the Dubai theory (peptidcheck24) more than the UK theory. A complete site crawl was not possible (wp-sitemap 404), hence stated as 'no longer findable', not claimed as 'removed'.",
          "quelle": "https://dnlabresearch.com/about/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Kein dediziertes Trustpilot-Profil auffindbar (Direktaufruf 403 geblockt, auch per Suche kein Treffer); keine Reddit-Diskussionen zu \"DN Lab Research\"/\"dnlabresearch\"/\"Bioniq Lab\" auffindbar (r/Peptides, r/PeptidesEU, allgemeine Reddit-Suche ohne Treffer). Keine belastbare Community-Stimme vorhanden, weder positiv noch negativ.",
          "text_en": "No dedicated Trustpilot profile findable (direct access blocked with 403, also no hits via search); no Reddit discussions about \"DN Lab Research\"/\"dnlabresearch\"/\"Bioniq Lab\" findable (r/Peptides, r/PeptidesEU, general Reddit search without hits). No reliable community voice present, neither positive nor negative.",
          "quelle": "WebSearch (mehrere Abfragen, keine Reddit/Trustpilot-Treffer)",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "ScamAdviser zeigt widersprüchliche Signale gleichzeitig an: Label \"Likely Safe\", aber gleichzeitig \"Trust Score 0\": der Wert ist vermutlich durch eine JS-Rendering-Lücke beim serverseitigen Abruf verzerrt, daher nicht eindeutig verwertbar.",
          "text_en": "ScamAdviser shows contradictory signals simultaneously: the label 'Likely Safe', but at the same time a 'Trust Score 0'; the value is presumably distorted by a JS-rendering gap in the server-side fetch, and is therefore not clearly usable.",
          "quelle": "https://www.scamadviser.com/check-website/dnlabresearch.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "GLP-1-Klasse fehlt unter anerkannten Namen: Semaglutid, Tirzepatid und Retatrutid sind über die Shop-Suche (Store-API) nicht auffindbar. Stattdessen wird ein Produkt \"GLP-3 | 30mg Peptide Pen\" (€340) angeboten: kein anerkannter Wirkstoffname, Zusammensetzung auf der Produktseite nicht im Detail geprüft.",
          "text_en": "The GLP-1 class is missing under recognized names: Semaglutide, Tirzepatide, and Retatrutide are not findable via the shop search (Store API). Instead, a product \"GLP-3 | 30mg Peptide Pen\" (EUR 340) is offered: not a recognized active-ingredient name, and its composition was not checked in detail on the product page.",
          "quelle": "https://dnlabresearch.com/wp-json/wc/store/products?search=GLP",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Homepage und Produktseiten bewerben \"30 Minute Coaching Call\" mit namentlich genannten Personen (Tom Kinsey, Dean Henry als \"health entrepreneur\"/\"peptide specialist\"), die im RUO-Kontext auf individuelle Beratung/Protokolle verweisen: grenzwertig nah an Human-Use-Bezug trotz RUO-Disclaimer. Einstufung als HWG-Risiko ist Interpretation, die zugrundeliegende Beobachtung ist belegt.",
          "text_en": "The homepage and product pages advertise a \"30 Minute Coaching Call\" with named individuals (Tom Kinsey, Dean Henry as \"health entrepreneur\"/\"peptide specialist\") who, in an RUO context, reference individual consultation/protocols: borderline close to human-use implications despite the RUO disclaimer. Classifying this as an HWG (German advertising-for-medicinal-products law) risk is interpretation; the underlying observation itself is documented.",
          "quelle": "https://dnlabresearch.com/bpc-157-15mg-peptide-pen/",
          "datum": "2026-09-15",
          "art": "belegt"
        }
      ],
      "aenderungen": [
        {
          "text": "Website-Marketing verschärft \"3rd Party Tested\"-Sprache (Seitentitel, Produkt-Badges) ggü. Stand 06.09.2026, aber CoA bleibt weiterhin nur \"upon request\" und nicht extern veröffentlicht: keine tatsächliche Verbesserung der Nachweisbarkeit.",
          "text_en": "Website marketing intensifies '3rd Party Tested' language (page titles, product badges) compared to the 2026-09-06 baseline, but the CoA remains only available 'upon request' and is not published externally: no actual improvement in verifiability.",
          "quelle": "https://dnlabresearch.com/bpc-157-15mg-peptide-pen/",
          "datum": "2026-09-15"
        },
        {
          "text": "Sitz-Angabe \"Farnborough UK\" aus dem Footer (Stand 06.09.2026) ist auf der aktuellen Seite nicht mehr auffindbar; einzige Adress-nahe Spur ist jetzt eine WhatsApp-Nummer mit VAE-Vorwahl (+971) auf der Kontaktseite; der Widerspruch UK vs. Dubai (peptidcheck24) bleibt ungeklärt, verschiebt sich aber tendenziell Richtung Dubai/VAE.",
          "text_en": "The location statement 'Farnborough UK' from the footer (as of 2026-09-06) is no longer findable on the current page; the only address-like trace now is a WhatsApp number with a UAE country code (+971) on the contact page; the UK vs. Dubai contradiction (peptidcheck24) remains unresolved but tends to shift toward Dubai/UAE.",
          "quelle": "https://dnlabresearch.com/contact/",
          "datum": "2026-09-15"
        },
        {
          "text": "Neu identifizierter Markenname \"Bioniq Lab\" taucht sowohl im Fließtext der Research-Use-Only-Policy als auch als eigene Produktkategorie im Shop auf: war im Vorrecherche-Stand (06.09.2026) nicht bekannt, zusätzliche Rechtsträger-Unklarheit.",
          "text_en": "The newly identified brand name 'Bioniq Lab' appears both in the running text of the Research-Use-Only policy and as its own product category in the shop: it was not known at the preliminary research baseline (2026-09-06), adding further legal-entity ambiguity.",
          "quelle": "https://dnlabresearch.com/research-use-only-policy/",
          "datum": "2026-09-15"
        },
        {
          "text": "Preise laufen in EUR, nicht in GBP wie im Ausgangs-Stand vermerkt; Shop-Untertitel wirbt weiterhin mit \"UK & EU Delivery\", Terms of Sale nennen als Versandgebiet ausdrücklich EU und UK.",
          "text_en": "Prices run in EUR, not GBP as noted in the baseline; the shop subtitle still advertises 'UK & EU Delivery', and the Terms of Sale explicitly name EU and UK as the shipping area.",
          "quelle": "https://dnlabresearch.com/terms-of-sale/",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15"
  },
  {
    "slug": "ppx-at",
    "name": "PPX.at",
    "website": "https://www.ppx.at/",
    "rechtstraeger": null,
    "sitz": "Wien, Österreich (laut Shop)",
    "land": "AT",
    "gegruendet": null,
    "brand": {
      "farbe": "#8C1B4F",
      "logo": "assets/img/logos/_wordmarks/ppx-at.svg",
      "logoMono": "assets/img/logos/ppx-at_mono.png",
      "logoRatio": 4.31,
      "logoFallback": "assets/img/logos/_wordmarks/ppx-at.svg",
      "logoQuelle": "https://ppx.at/assets/Logo.png"
    },
    "score": {
      "labor": 0,
      "recht": 33,
      "lieferung": 74,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 30,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": false,
      "extern": false,
      "labor": "eine Sample-CoA, Rest 'Coming Soon'",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": false,
      "ruo": true,
      "impressum": false,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": 3,
      "tageMax": 6,
      "laender": [
        "EU"
      ]
    },
    "zahlung": [
      "Krypto"
    ],
    "affiliate": null,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": 7.0,
    "affiliateUrl": "https://www.ppx.at/",
    "kurz": "Sitz in Wien, Österreich (laut Shop). Versand laut Website nach DACH. Keine öffentlich einsehbaren CoAs gefunden.",
    "kurz_en": "Registered in Wien, Österreich (laut Shop). Ships to Germany/Austria/Switzerland according to the website. No publicly available CoAs found.",
    "staerken": [
      "RUO-Kennzeichnung vorhanden"
    ],
    "staerken_en": [
      "RUO labeling in place"
    ],
    "schwaechen": [
      "Kein Altersgate (Stand 06.09.2026)",
      "Kein auffindbares Impressum (Stand 06.09.2026)",
      "Keine öffentlich einsehbaren CoAs (Stand 06.09.2026)",
      "Rechtsträger nicht ermittelbar (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No age verification gate (as of Sep 6, 2026)",
      "No findable legal notice (as of Sep 6, 2026)",
      "No publicly available CoAs (as of Sep 6, 2026)",
      "Legal entity not ascertainable (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "Impressum/AGB 404",
      "nur Krypto",
      "Werbung mit Gewichtsverlust",
      "Seite nicht erreichbar"
    ],
    "roteFlaggen_en": [
      "legal notice/terms page returns 404",
      "crypto payment only",
      "advertises weight loss",
      "site unreachable"
    ],
    "quelle": "peptidcheck24 (29.05.2026), Seite 06.09. nicht erreichbar",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Website ist erreichbar (HTTP 200) und deutlich ausgebauter als beim letzten Check am 06.09.2026 ('Seite nicht erreichbar'): Startseite, Shop, About, FAQ, CoA-Bibliothek, Ratgeber, Bewertungsseite, Partnerprogramm, 27 URLs laut Sitemap.",
          "text_en": "The website is reachable (HTTP 200) and considerably more built out than at the last check on 06.09.2026 ('page unreachable'): homepage, shop, about, FAQ, CoA library, guides section, review page, affiliate program, 27 URLs per the sitemap.",
          "quelle": "https://www.ppx.at/sitemap.xml",
          "datum": "2026-09-15"
        },
        {
          "text": "Zahlung läuft jetzt über Stripe (Karte, Apple Pay, Google Pay) statt wie zuletzt bekannt ausschliesslich Krypto: Warenkorb-Seite zeigt 'Sichere Zahlung via Stripe – Karte, Apple Pay, Google Pay & mehr.'",
          "text_en": "Payment now runs through Stripe (card, Apple Pay, Google Pay) instead of the previously known crypto-only setup: the cart page shows 'Secure payment via Stripe: card, Apple Pay, Google Pay and more.'",
          "quelle": "https://www.ppx.at/cart",
          "datum": "2026-09-15"
        },
        {
          "text": "Impressum ist erreichbar (HTTP 200, nicht mehr 404) mit Sitzangabe Wien/Österreich und Kontaktformular.",
          "text_en": "The legal notice (Impressum) is reachable (HTTP 200, no longer 404) with a stated location of Vienna/Austria and a contact form.",
          "quelle": "https://www.ppx.at/impressum",
          "datum": "2026-09-15"
        },
        {
          "text": "scamadviser.com stuft ppx.at als 'Very Likely Safe' ein ('ppx.at has an average to good trust score'), gültiges SSL-Zertifikat (Let's Encrypt), als Online-Shop erkannt, von DNSFilter als sicher eingestuft.",
          "text_en": "scamadviser.com rates ppx.at as 'Very Likely Safe' ('ppx.at has an average to good trust score'), valid SSL certificate (Let's Encrypt), recognized as an online shop, flagged as safe by DNSFilter.",
          "quelle": "https://www.scamadviser.com/check-website/ppx.at",
          "datum": "2026-09-15"
        },
        {
          "text": "Eigene Disclaimer-Seite ohne Heilversprechen im Fliesstext: 'Keine medizinischen Aussagen. Es werden keinerlei Heilversprechen, medizinische Empfehlungen oder gesundheitsbezogene Aussagen gemacht.'",
          "text_en": "The vendor's own disclaimer page makes no healing-related claims in its body text: 'No medical claims. No promises of healing effects, medical recommendations, or health-related claims of any kind are made.'",
          "quelle": "https://www.ppx.at/disclaimer",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Impressum inhaltlich unvollständig: kein Firmenname/Rechtsform, keine Handelsregister- oder UID-Nummer, keine ladungsfähige Anschrift, keine vertretungsberechtigte Person genannt - nur 'PPX Wien, Österreich' plus Kontaktformular.",
          "text_en": "The legal notice (Impressum) is substantively incomplete: no company name/legal form, no commercial register or VAT ID number, no serviceable address, and no named authorized representative, just 'PPX Wien, Österreich' plus a contact form.",
          "quelle": "https://www.ppx.at/impressum",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Widerspruch Impressum vs. WHOIS: Das Impressum nennt nur 'Wien', der WHOIS-Registranteneintrag (via ScamAdviser) zeigt dagegen 'helloly GmbH, Rainerstrasse 25, 4020 Linz, Österreich' - abweichender Firmenname UND abweichende Stadt, auf der Website selbst nirgends offengelegt.",
          "text_en": "Discrepancy between the legal notice and WHOIS: the legal notice only names 'Vienna', while the WHOIS registrant entry (via ScamAdviser) instead shows 'helloly GmbH, Rainerstrasse 25, 4020 Linz, Austria', a different company name AND a different city, disclosed nowhere on the website itself.",
          "quelle": "https://www.scamadviser.com/check-website/ppx.at",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "CoA-Versprechen vs. Realität: Produktseiten behaupten 'Jedes Produkt wird mit einem Certificate of Analysis (COA) geliefert' mit Button 'COA Download'; dieser verlinkt bei allen geprüften Produkten (u.a. BPC-157, Retatrutide) auf dieselbe generische Muster-PDF (sample-coa.pdf, 808 Byte) mit Platzhalter-Batch 'PP-COA-000000'. Auf der eigenen CoA-Bibliotheksseite sind BPC-157 und TB-500 explizit als 'Coming Soon' markiert ('COA will be available after batch release'), alle anderen Produkte (GHK-Cu, Retatrutide, Ipamorelin, Tesamorelin, MOTS-c etc.) sind dort gar nicht gelistet.",
          "text_en": "CoA promise versus reality: product pages claim 'every product ships with a Certificate of Analysis (COA)' with a 'COA Download' button; for every product checked (including BPC-157, Retatrutide), that button links to the same generic sample PDF (sample-coa.pdf, 808 bytes) with a placeholder batch 'PP-COA-000000'. On the vendor's own CoA library page, BPC-157 and TB-500 are explicitly marked 'Coming Soon' ('COA will be available after batch release'), and every other product (GHK-Cu, Retatrutide, Ipamorelin, Tesamorelin, MOTS-c, etc.) is not listed there at all.",
          "quelle": "https://www.ppx.at/coa",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "HWG-relevante Abnehm-Bewerbung weiterhin vorhanden: Seitentitel 'Retatrutide kaufen | 5mg & 10mg | Abnehmspritze Alternative | PPX' positioniert einen Forschungsstoff explizit als Alternative zu einem zugelassenen Abnehm-Medikament; WHOIS-Metadaten führen zusätzlich das Keyword 'Semaglutide Alternative'.",
          "text_en": "Advertising relevant to German drug-marketing law (HWG) is still present: the page title 'Retatrutide kaufen | 5mg & 10mg | Abnehmspritze Alternative | PPX' explicitly positions a research compound as an alternative to an approved weight-loss medication; the WHOIS metadata additionally carries the keyword 'Semaglutide Alternative'.",
          "quelle": "https://www.ppx.at/products/retatrutide",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Widerspruechliche Lieferzeit-Angaben auf der Live-Seite: Produktseiten nennen 'Lieferzeit: 3-7 Werktage', die Versandrichtlinien-Seite nennt dagegen 'Standard EU-Versand: 12 Wochen'. Wörtlich so auf der Seite vorgefunden, nicht eigenmächtig interpretiert - wirkt wie ein Tippfehler, ist aber als Widerspruch zu dokumentieren.",
          "text_en": "Contradictory delivery-time statements on the live site: product pages state 'delivery time: 3-7 business days', while the shipping policy page instead states 'standard EU shipping: 12 weeks'. Found verbatim on the site, not interpreted on our own initiative, looks like a typo but should be documented as a contradiction regardless.",
          "quelle": "https://www.ppx.at/shipping-policy",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Sortimentslücken gegenüber der 12er-Kernliste: Semaglutid, Tirzepatid und Epitalon sind nicht gelistet (Produkt-URLs liefern 404). CJC-1295 gibt es nur als DAC-freie Variante ('CJC no Dac 5mg'), kein CJC-1295 mit DAC. Melanotan-2 ist nicht gelistet, im Sortiment ist nur Melanotan-1 10mg (ein anderer Wirkstoff).",
          "text_en": "Range gaps versus the core list of 12: semaglutide, tirzepatide, and epitalon are not listed (product URLs return 404). CJC-1295 is only available as the DAC-free variant ('CJC no Dac 5mg'), not the DAC version. Melanotan-2 is not listed, only Melanotan-1 10mg (a different active compound) is in the range.",
          "quelle": "https://www.ppx.at/sitemap.xml",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "chemverify.com listet PPX.at nicht in seinem Anbieter-Katalog (Abfrage der /api/catalog lieferte 11 Anbieter, keiner davon PPX/ppx.at).",
          "text_en": "chemverify.com does not list PPX.at in its vendor catalog (the /api/catalog query returned 11 vendors, none of them PPX/ppx.at).",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Keine Community-Treffer zu PPX.at gefunden: weder auf Reddit noch auf Trustpilot noch in deutschsprachigen Foren wurde 'ppx.at' in den Suchergebnissen konkret erwähnt (Stichproben-Suche, keine Vollerhebung).",
          "text_en": "No community mentions of PPX.at were found: 'ppx.at' was not specifically mentioned in search results on Reddit, Trustpilot, or German-language forums (spot-check search, not an exhaustive survey).",
          "quelle": "WebSearch: \"ppx.at\" reddit peptide / \"ppx.at\" trustpilot OR erfahrung OR bewertung / ppx.at peptide erfahrungen forum",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "aenderungen": [
        {
          "text": "Impressum: von HTTP 404 (Stand 06.09.2026) auf HTTP 200 mit rudimentärem Inhalt geändert.",
          "text_en": "Legal notice (Impressum): changed from HTTP 404 (as of 06.09.2026) to HTTP 200 with rudimentary content.",
          "quelle": "https://www.ppx.at/impressum",
          "datum": "2026-09-15"
        },
        {
          "text": "Zahlungsmethode: von 'nur Krypto' auf Stripe (Karte, Apple Pay, Google Pay) umgestellt.",
          "text_en": "Payment method: switched from 'crypto only' to Stripe (card, Apple Pay, Google Pay).",
          "quelle": "https://www.ppx.at/cart",
          "datum": "2026-09-15"
        },
        {
          "text": "Gesamte Website von 'nicht erreichbar' (Stand 06.09.2026) zu vollständig ausgebautem, technisch modernem Shop (Vercel-Hosting, Supabase-Backend, Stripe-Checkout, eigener 'Ratgeber' und Bewertungssystem) gewechselt - deutet auf einen Relaunch zwischen 06.09. und 15.09.2026 hin.",
          "text_en": "The entire website changed from 'unreachable' (as of 06.09.2026) to a fully built out, technically modern shop (Vercel hosting, Supabase backend, Stripe checkout, its own guides section and review system), suggesting a relaunch between 06.09. and 15.09.2026.",
          "quelle": "https://www.ppx.at/",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15"
  },
  {
    "slug": "peptide-labz",
    "name": "Peptide Labz",
    "website": "https://peptidelabz.de/",
    "rechtstraeger": null,
    "sitz": "Berlin (laut Shop)",
    "land": "DE",
    "gegruendet": null,
    "brand": {
      "farbe": "#4F8C1B",
      "logo": "assets/img/logos/peptide-labz.png",
      "logoMono": "assets/img/logos/peptide-labz_mono.png",
      "logoRatio": 0.98,
      "logoFallback": "assets/img/logos/_wordmarks/peptide-labz.svg",
      "logoQuelle": "https://peptidelabz.de/wp-content/uploads/2026/03/31fd0d62-0f51-4887-ab16-b990276b9da1.jpg"
    },
    "score": {
      "labor": 0,
      "recht": 33,
      "lieferung": 65,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 28,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": false,
      "extern": false,
      "labor": null,
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": false,
      "ruo": true,
      "impressum": false,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": null,
      "tageMax": null,
      "laender": [
        "DE"
      ]
    },
    "zahlung": [],
    "affiliate": null,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": 7.0,
    "affiliateUrl": "https://peptidelabz.de/",
    "kurz": "Sitz in Berlin (laut Shop). Versand laut Website nach DACH. Keine öffentlich einsehbaren CoAs gefunden.",
    "kurz_en": "Registered in Berlin (laut Shop). Ships to Germany/Austria/Switzerland according to the website. No publicly available CoAs found.",
    "staerken": [
      "RUO-Kennzeichnung vorhanden"
    ],
    "staerken_en": [
      "RUO labeling in place"
    ],
    "schwaechen": [
      "Kein Altersgate (Stand 06.09.2026)",
      "Kein auffindbares Impressum (Stand 06.09.2026)",
      "Keine öffentlich einsehbaren CoAs (Stand 06.09.2026)",
      "Rechtsträger nicht ermittelbar (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No age verification gate (as of Sep 6, 2026)",
      "No findable legal notice (as of Sep 6, 2026)",
      "No publicly available CoAs (as of Sep 6, 2026)",
      "Legal entity not ascertainable (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "kein Impressum (404)",
      "WhatsApp-Checkout",
      "Wirkversprechen in Testimonials"
    ],
    "roteFlaggen_en": [
      "no legal notice (404)",
      "checkout via WhatsApp",
      "effect claims in testimonials"
    ],
    "quelle": "peptidelabz.de, peptidcheck24, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Website online und erreichbar, WooCommerce-Shop mit 93 gelisteten Produkt-URLs (viele Doppel-/Variantenseiten je Peptid)",
          "text_en": "Website online and reachable, WooCommerce shop with 93 listed product URLs (many duplicate/variant pages per peptide).",
          "quelle": "https://peptidelabz.de/product-sitemap.xml",
          "datum": "2026-09-15"
        },
        {
          "text": "Versandhinweis auf Deutschland/Berlin-Sitz vorhanden, eigene Seite zu Versand und Lieferung existiert",
          "text_en": "A shipping notice referencing a Germany/Berlin location exists, and a dedicated shipping and delivery page exists.",
          "quelle": "https://peptidelabz.de/shipping-and-delivery/",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Impressum weiterhin nicht erreichbar: /impressum, /pages/impressum und /de/impressum liefern HTTP 404, taucht auch nicht in der page-sitemap.xml auf. Auf der gesamten Website (Home, About, Service, Team, Privacy-Policy) findet sich keine ladungsfähige Anschrift, kein Firmenname mit Rechtsform (GmbH/UG/e.K.), kein Handelsregistereintrag, keine Geschäftsführer-Nennung, lediglich der Marketing-Claim \"Berlin, Germany\" ohne Adresse",
          "text_en": "Imprint remains unreachable: /impressum, /pages/impressum, and /de/impressum return HTTP 404, and it also does not appear in the page-sitemap.xml. Nowhere on the entire website (Home, About, Service, Team, Privacy Policy) is there a serviceable address, a company name with legal form (GmbH/UG/e.K.), a commercial register entry, or a named managing director, only the marketing claim 'Berlin, Germany' without an address.",
          "quelle": "https://peptidelabz.de/impressum, https://peptidelabz.de/about/, https://peptidelabz.de/privacy-policy/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "WhatsApp-Checkout weiterhin aktiver Bestandteil des Bestellprozesses: Homepage instruiert explizit \"Senden Sie uns eine Nachricht per WhatsApp oder Live-Chat, um Ihre Bestellung und Zahlung abzuschließen\"; WhatsApp-Click-to-Chat-Plugin aktiv eingebunden",
          "text_en": "WhatsApp checkout remains an active part of the ordering process: the homepage explicitly instructs 'Send us a message via WhatsApp or live chat to complete your order and payment'; a WhatsApp click-to-chat plugin is actively embedded.",
          "quelle": "https://peptidelabz.de/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Wirkversprechen in Kunden-Testimonial auf der Startseite weiterhin online: Testimonial von \"Alex Banaga\" (als \"Patient, Client\" bezeichnet) behauptet konkrete physiologische Wirkung (\"Hungergefühl über Nacht verschwindet\", \"Gewichtsverlust sichtbar\"), HWG-relevant für ein RUO-Forschungspeptid-Angebot; Kundenlabels \"Patient, Client\" statt neutraler Bezeichnung verstärken den medizinischen Anschein",
          "text_en": "An efficacy claim in a customer testimonial on the homepage remains online: a testimonial from 'Alex Banaga' (labeled as 'Patient, Client') claims a concrete physiological effect ('hunger disappears overnight', 'visible weight loss'), which is relevant under German advertising-for-medicinal-products law (HWG) for an RUO research-peptide offering; the customer labels 'Patient, Client' instead of a neutral designation reinforce the medical impression.",
          "quelle": "https://peptidelabz.de/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "CoA nicht öffentlich einsehbar: Produktseiten werben mit \"Analysenzertifikat (COA) inklusive\", aber es gibt keinen verlinkten/einsehbaren CoA (kein PDF-Link, kein Chargen-Lookup) auf den geprüften Produktseiten oder Unterseiten",
          "text_en": "CoA not publicly viewable: product pages advertise 'certificate of analysis (COA) included', but there is no linked/viewable CoA (no PDF link, no batch lookup) on the checked product pages or subpages.",
          "quelle": "https://peptidelabz.de/product/bpc-157-peptid/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "ScamAdviser weist für peptidelabz.de einen Trust Score von 0/100 aus (\"sehr niedriger Trust Score\", Warnhinweis auf mögliches Scam-Risiko); Datenbasis laut Tool 5 Monate alt (nicht neu gescannt)",
          "text_en": "ScamAdviser shows a trust score of 0/100 for peptidelabz.de ('very low trust score', warning of a possible scam risk); the data basis is 5 months old per the tool (not freshly scanned).",
          "quelle": "https://www.scamadviser.com/check-website/peptidelabz.de",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Kein Eintrag im chemverify.com-Katalog (11 gelistete Anbieter geprüft, Peptide Labz ist nicht darunter): keine unabhängige Dritt-Verifizierung über diese Plattform verfügbar",
          "text_en": "No entry in the chemverify.com catalog (11 listed vendors checked, Peptide Labz is not among them): no independent third-party verification available via this platform.",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Keine Produkte für Semaglutid, Tirzepatid und Retatrutid gelistet: Sortiment bei den GLP-1-Analoga lückenhaft gegenüber dem angefragten Kern-Set",
          "text_en": "No products listed for Semaglutide, Tirzepatide, or Retatrutide: the range is incomplete for GLP-1 analogs relative to the requested core set.",
          "quelle": "https://peptidelabz.de/?s=semaglutid (und tirzepatid, retatrutid)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Zwei der Homepage-Testimonial-Avatare nutzen sichtbar unveränderte Demo-Bilder des Elementor-Theme-Anbieters (demo.blockskit.com) statt eigener Kundenfotos: deutet auf unfertige/nicht kuratierte Content-Pflege hin",
          "text_en": "Two of the homepage testimonial avatars visibly use unmodified demo images from the Elementor theme provider (demo.blockskit.com) instead of actual customer photos: an indication of unfinished/uncurated content maintenance.",
          "quelle": "https://peptidelabz.de/ (Bild-URLs: demo.blockskit.com/medical-pro-el-2/.../img-21.jpg, img-32.jpg)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Keine Community-Bewertungen auffindbar: weder auf Reddit noch auf Trustpilot/Google existiert eine dedizierte, verifizierte Erfahrungsseite zu peptidelabz.de bzw. \"Peptide Labz\" (Suchergebnisse betreffen ausschließlich namensähnliche, aber andere Anbieter wie True Peptide Labs, Pure Peptide Labs, Peptide Lab NZ)",
          "text_en": "No community reviews findable: neither on Reddit nor on Trustpilot/Google does a dedicated, verified experience page exist for peptidelabz.de or 'Peptide Labz' (search results concern exclusively similarly-named but different vendors such as True Peptide Labs, Pure Peptide Labs, Peptide Lab NZ).",
          "quelle": "WebSearch \"Peptide Labz reddit\", \"peptidelabz.de erfahrung bewertung trustpilot\", \"peptide labz review scam OR legit\"",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "aenderungen": [
        {
          "text": "Referenzquelle peptidcheck24.com (im Ausgangsstand als Quelle genannt) ist komplett offline: die Domain liefert durchgängig HTTP 410 Gone (noindex/nofollow gesetzt), auch die Startseite. Abgleich gegen diese Quelle war nicht mehr möglich, Ursprungsbewertung dort kann nicht nachvollzogen werden",
          "text_en": "The reference source peptidcheck24.com (named as a source in the baseline) is completely offline: the domain consistently returns HTTP 410 Gone (noindex/nofollow set), including the homepage. Comparison against this source was no longer possible; the original rating there cannot be traced.",
          "quelle": "https://peptidcheck24.com/",
          "datum": "2026-09-15"
        },
        {
          "text": "Alle drei roten Flaggen aus dem Ausgangsstand (kein Impressum, WhatsApp-Checkout, Wirkversprechen in Testimonials) beim erneuten Check unverändert vorhanden: keine Nachbesserung seit 06.09.2026 feststellbar",
          "text_en": "All three red flags from the baseline (no imprint, WhatsApp checkout, efficacy claims in testimonials) remain unchanged on re-check: no improvement detectable since 2026-09-06.",
          "quelle": "https://peptidelabz.de/",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15"
  },
  {
    "slug": "driada",
    "name": "Driada",
    "website": "https://driadashop.to/",
    "rechtstraeger": null,
    "sitz": null,
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#6C3FA6",
      "logo": "assets/img/logos/driada.png",
      "logoMono": "assets/img/logos/driada_mono.png",
      "logoRatio": 8.62,
      "logoFallback": "assets/img/logos/_wordmarks/driada.svg",
      "logoQuelle": "https://driadashop.to/image/catalog/logosite.png"
    },
    "score": {
      "labor": 0,
      "recht": 33,
      "lieferung": null,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 17,
    "datenbasis": 2,
    "coa": {
      "oeffentlich": false,
      "extern": false,
      "labor": null,
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": false,
      "ruo": true,
      "impressum": false,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": null,
      "tageMax": null,
      "laender": []
    },
    "zahlung": [
      "Krypto"
    ],
    "affiliate": true,
    "affiliateProgrammUrl": "https://driadashop.to/promotions",
    "provision": "10 % (Code-System)",
    "rabatt": null,
    "produkte": [],
    "preisProMg": 5.9,
    "affiliateUrl": "https://driadashop.to/",
    "kurz": "Sitz nicht ermittelbar. Versand nach DACH nicht ermittelbar. Keine öffentlich einsehbaren CoAs gefunden.",
    "kurz_en": "Registered address not ascertainable. Shipping to Germany/Austria/Switzerland not ascertainable. No publicly available CoAs found.",
    "staerken": [],
    "staerken_en": [],
    "schwaechen": [
      "Kein Altersgate (Stand 06.09.2026)",
      "Kein auffindbares Impressum (Stand 06.09.2026)",
      "Keine RUO-Kennzeichnung (Stand 06.09.2026)",
      "Keine öffentlich einsehbaren CoAs (Stand 06.09.2026)",
      "Rechtsträger nicht ermittelbar (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No age verification gate (as of Sep 6, 2026)",
      "No findable legal notice (as of Sep 6, 2026)",
      "No RUO labeling (as of Sep 6, 2026)",
      "No publicly available CoAs (as of Sep 6, 2026)",
      "Legal entity not ascertainable (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "kein Impressum",
      ".to-Domain",
      "überwiegend Anabolika",
      "kein RUO-Hinweis"
    ],
    "roteFlaggen_en": [
      "no legal notice",
      "uses a .to domain",
      "mostly anabolic steroids",
      "no RUO notice"
    ],
    "quelle": "driadashop.to, peptidcheck24, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": "Shop ist entgegen früherer Einstufung aktiv erreichbar und betrieben (verifiziert 15.09.2026), Sortiment überwiegend Anabolika/Steroide mit Peptiden als Unterkategorie.",
    "statusGrund_en": "Contrary to the earlier assessment, the shop is actively reachable and operating (verified Sep 15, 2026); the range is predominantly anabolics/steroids with peptides as a subcategory.",
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Shop ist aktiv und breit sortiert: 8 von 12 Kern-Peptiden (BPC-157, TB-500, GHK-Cu, Semaglutid, CJC-1295, Ipamorelin, Melanotan-2, MOTS-C) direkt im Pricelist mit Preis und 'In Stock' gelistet.",
          "text_en": "The shop is active and broadly stocked: 8 of 12 core peptides (BPC-157, TB-500, GHK-Cu, Semaglutide, CJC-1295, Ipamorelin, Melanotan-2, MOTS-C) are listed directly in the price list with pricing and 'In Stock' status.",
          "quelle": "https://driadashop.to/pricelist",
          "datum": "2026-09-15"
        },
        {
          "text": "RUO-Disclaimer im Footer sitewide vorhanden: Der Text erklärt, dass alle Verbindungen ausschließlich für Forschungszwecke bestimmt sind und ausdrücklich nicht für die Anwendung bei Erkrankungen vorgesehen sind. Widerspricht dem bisherigen Faktenstand ruo:FALSE, siehe Aenderungen.",
          "text_en": "A sitewide RUO disclaimer is present in the footer. The text states that all compounds are intended exclusively for research purposes and are explicitly not intended for use on any disease or illness. This contradicts the prior fact base of ruo:FALSE, see Changes.",
          "quelle": "https://driadashop.to/bpc-157-10mg (Footer-Text)",
          "datum": "2026-09-15"
        },
        {
          "text": "SSL-Zertifikat gueltig, Domain laut Scamadviser laenger im Voraus registriert (kein typisches Kurzzeit-Scam-Muster), Tranco-Ranking 20 (relative Popularitaet).",
          "text_en": "SSL certificate valid; per ScamAdviser, the domain was registered well in advance (not a typical short-term scam pattern); Tranco ranking 20 (relative popularity).",
          "quelle": "https://www.scamadviser.com/check-website/driadashop.to",
          "datum": "2026-09-15"
        },
        {
          "text": "Community-Reviews auf eroids.com ueberwiegend positiv (Qualitaet, Service, mehrjaehrige Stammkunden): Community-Meinung, kein geprueftes Faktum.",
          "text_en": "Community reviews on eroids.com are predominantly positive (quality, service, longtime repeat customers): a community opinion, not a verified fact.",
          "quelle": "https://www.eroids.com/reviews/driadashop.to",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "schwaechen": [
        {
          "text": "Scamadviser Trust Score 0/100, Einstufung 'Very Likely Unsafe'. Website wurde von globaleyez.net wegen Verletzung von Rechten am geistigen Eigentum gemeldet.",
          "text_en": "ScamAdviser Trust Score 0/100, classification 'Very Likely Unsafe.' The website was reported by globaleyez.net for intellectual property rights infringement.",
          "quelle": "https://www.scamadviser.com/check-website/driadashop.to",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Scamadviser flaggt die Seite zusaetzlich als moeglichen Verkaeufer verschreibungspflichtiger Medikamente ohne Rezept sowie mit hoch-risikobehafteten Krypto-Zahlungsmethoden; Pulsedive meldet erhoehtes Risiko.",
          "text_en": "ScamAdviser additionally flags the site as a possible seller of prescription medication without a prescription and with high-risk crypto payment methods; Pulsedive reports elevated risk.",
          "quelle": "https://www.scamadviser.com/check-website/driadashop.to",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Gridinsoft-Analyse vergibt 42/100 Trust Score mit Flags fuer 'Medical Risk' und 'Drug Sales Risk'.",
          "text_en": "Gridinsoft's analysis assigns a 42/100 trust score, flagging 'Medical Risk' and 'Drug Sales Risk.'",
          "quelle": "https://gridinsoft.com/online-virus-scanner/url/driadashop-to",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "WHOIS-Daten sind verborgen (hidden); laut Scamadviser ist die Domain erst ca. 1 Jahr alt, waehrend der Footer der Seite '© 2020-2026' behauptet: Widerspruch zwischen angegebenem und tatsaechlichem Domain-Alter.",
          "text_en": "WHOIS data is hidden; per ScamAdviser, the domain is only about 1 year old, while the site's footer claims '© 2020-2026': a contradiction between the stated and actual domain age.",
          "quelle": "https://www.scamadviser.com/check-website/driadashop.to",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Kein auffindbares Impressum: Kontakt-, Privacy- und Terms-Seiten enthalten in der abgerufenen HTML keinen Rechtstraeger, keine Firmenadresse, keine Handelsregisternummer. Einschraenkung: Seite ist eine JS-lastige SPA (OpenCart/Journal-Theme), ein dynamisch nachgeladenes Impressum kann bei einem reinen HTML-Fetch uebersehen werden: nicht abschliessend geprueft.",
          "text_en": "No legal notice found: the contact, privacy, and terms pages contain no legal entity, company address, or commercial register number in the fetched HTML. Caveat: the site is a JS-heavy SPA (OpenCart/Journal theme), so a dynamically loaded legal notice could be missed by a plain HTML fetch; not conclusively verified.",
          "quelle": "https://driadashop.to/index.php?route=information/contact, https://driadashop.to/privacy-policy, https://driadashop.to/terms-conditions (direkte Pruefung 15.09.2026)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Keine Altersverifikation/Age-Gate im abgerufenen HTML gefunden (gleiche SPA-Einschraenkung wie beim Impressum-Check, nicht abschliessend geprueft).",
          "text_en": "No age verification/age gate found in the fetched HTML (same SPA caveat as the legal-notice check; not conclusively verified).",
          "quelle": "direkte Pruefung 15.09.2026 (https://driadashop.to/)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Sortiment ist strukturell ueberwiegend Anabolika/Steroide/SARMs/Fatburner/Sexual-Wellness (z.B. Turinabol, Winstrol, Testosteron-Praeparate, Clenbuterol, Sildenafil); Peptide laufen als Unterkategorie 'HGH and Peptides' mit: bestaetigt die bisherige rote Flagge 'ueberwiegend Anabolika'.",
          "text_en": "The range is structurally dominated by anabolics/steroids/SARMs/fat burners/sexual wellness products (e.g., Turinabol, Winstrol, testosterone preparations, Clenbuterol, Sildenafil); peptides appear only as the subcategory 'HGH and Peptides': this confirms the earlier red flag of being 'predominantly anabolics.'",
          "quelle": "https://driadashop.to/index.php?route=information/contact (Navigationsstruktur)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "4 von 12 Kern-Peptiden nicht im Hauptsortiment: Tirzepatid, Tesamorelin und Epitalon wurden auf dem Pricelist nicht gefunden; Retatrutid wird nur ueber eine separate Marken-Domain (retatrutides.to, selbes 'Driada Medical'-Branding) beworben, ein direkter Preis dort war nicht abrufbar (Pricelist-Unterseite lieferte 404).",
          "text_en": "4 of 12 core peptides are not in the main range: Tirzepatide, Tesamorelin, and Epitalon were not found on the price list; Retatrutide is only advertised via a separate branded domain (retatrutides.to, same 'Driada Medical' branding), and a direct price there was not retrievable (the price-list subpage returned a 404).",
          "quelle": "https://driadashop.to/pricelist, https://retatrutides.to/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Driada/driadashop ist nicht im ChemVerify-Katalog gelistet (Suche nach 'Driada' und 'driadashop' ohne Treffer): keine externe CoA-Verifizierung durch diese Plattform.",
          "text_en": "Driada/driadashop is not listed in the ChemVerify catalog (searches for 'Driada' and 'driadashop' returned no results): no external CoA verification through this platform.",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "'Lab tests'-Navigationspunkt existiert auf der Seite, Inhalt (echte CoA-Dokumente ja/nein) wurde im Rahmen dieser Kurzpruefung nicht geoeffnet/verifiziert: offener Pruefpunkt fuer eine spaetere tiefere Recherche.",
          "text_en": "A 'Lab tests' navigation item exists on the site; its content (whether real CoA documents are present) was not opened/verified within this brief check: an open item for a later, deeper investigation.",
          "quelle": "https://driadashop.to/ (Navigationsleiste)",
          "datum": "2026-09-15",
          "art": "belegt"
        }
      ],
      "aenderungen": [
        {
          "text": "Domain-Status: ERREICHBAR und aktiv betriebener Shop (kein Shutdown, keine Weiterleitung auf Parking-Page), verifiziert am 15.09.2026. Bisherige Einstufung 'moeglicherweise TOT' ist damit widerlegt.",
          "text_en": "Domain status: REACHABLE and an actively operated shop (no shutdown, no redirect to a parking page), verified on Sep 15, 2026. This disproves the prior classification of 'possibly DEAD.'",
          "quelle": "direkte Pruefung 15.09.2026 (https://driadashop.to/)",
          "datum": "2026-09-15"
        },
        {
          "text": "RUO-Hinweis jetzt nachgewiesen (Footer-Disclaimer sitewide): Korrektur des bisherigen Faktenstands 'ruo:FALSE'. Trotzdem bleibt das Gesamtsortiment strukturell Anabolika-lastig, siehe Schwaechen.",
          "text_en": "RUO notice now confirmed (sitewide footer disclaimer): a correction to the prior fact base of 'ruo:FALSE.' Nonetheless, the overall range remains structurally anabolics-heavy, see Weaknesses.",
          "quelle": "direkte Pruefung 15.09.2026 (Footer-Text auf Produktseiten)",
          "datum": "2026-09-15"
        },
        {
          "text": "Erstmalige Scamadviser-/Gridinsoft-Erhebung fuer diesen Anbieter: Trust Score 0/100 (Scamadviser, 'Very Likely Unsafe') bzw. 42/100 (Gridinsoft): neue, bislang nicht in der Faktenbasis erfasste Risikosignale (IP-Rechtsverletzung, verstecktes WHOIS, moeglicher Rx-Verkauf ohne Rezept).",
          "text_en": "First-time ScamAdviser/Gridinsoft assessment for this vendor: trust score 0/100 (ScamAdviser, 'Very Likely Unsafe') and 42/100 (Gridinsoft): new risk signals not previously captured in the fact base (IP rights infringement, hidden WHOIS, possible Rx sales without a prescription).",
          "quelle": "https://www.scamadviser.com/check-website/driadashop.to, https://gridinsoft.com/online-virus-scanner/url/driadashop-to",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15"
  },
  {
    "slug": "europeptideshop",
    "name": "EuroPeptideShop",
    "website": "https://europeptideshop.com/",
    "rechtstraeger": null,
    "sitz": null,
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#A8690F",
      "logo": "assets/img/logos/europeptideshop.png",
      "logoMono": "assets/img/logos/europeptideshop_mono.png",
      "logoRatio": 2.3,
      "logoFallback": "assets/img/logos/_wordmarks/europeptideshop.svg",
      "logoQuelle": "https://europeptideshop.com/wp-content/uploads/2026/04/6fd820bd-a45c-418a-aecd-343ac737f7b2.png"
    },
    "score": {
      "labor": 0,
      "recht": 0,
      "lieferung": 62,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 14,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": false,
      "extern": false,
      "labor": null,
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": false,
      "ruo": false,
      "impressum": false,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": 4,
      "tageMax": 8,
      "laender": [
        "INT"
      ]
    },
    "zahlung": [
      "Krypto",
      "Vorkasse"
    ],
    "affiliate": null,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": null,
    "affiliateUrl": "https://europeptideshop.com/",
    "kurz": "Sitz nicht ermittelbar. Versand laut Website nach DACH. Keine öffentlich einsehbaren CoAs gefunden.",
    "kurz_en": "Registered address not ascertainable. Ships to Germany/Austria/Switzerland according to the website. No publicly available CoAs found.",
    "staerken": [],
    "staerken_en": [],
    "schwaechen": [
      "Kein Altersgate (Stand 06.09.2026)",
      "Kein auffindbares Impressum (Stand 06.09.2026)",
      "Keine RUO-Kennzeichnung (Stand 06.09.2026)",
      "Keine öffentlich einsehbaren CoAs (Stand 06.09.2026)",
      "Lange Lieferzeit nach DACH laut Website",
      "Rechtsträger nicht ermittelbar (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No age verification gate (as of Sep 6, 2026)",
      "No findable legal notice (as of Sep 6, 2026)",
      "No RUO labeling (as of Sep 6, 2026)",
      "No publicly available CoAs (as of Sep 6, 2026)",
      "Long delivery time to Germany/Austria/Switzerland according to the website",
      "Legal entity not ascertainable (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "kein Impressum",
      "keine CoAs",
      "WhatsApp/Krypto"
    ],
    "roteFlaggen_en": [
      "no legal notice",
      "no CoAs",
      "WhatsApp/crypto only"
    ],
    "quelle": "peptidcheck24 (29.05.2026), Seite 06.09. nicht erreichbar",
    "stand": "2026-09-06",
    "demo": false,
    "status": "zu-pruefen",
    "statusGrund": "Website erreichbar, aber Produktkatalog technisch defekt (17 von 17 verlinkten Produkt-IDs liefern 404), kein funktionierender Checkout, kein Impressum, ScamAdviser-Score 0/100, wirkt wie eine SEO-Fassade ohne echten Handel (Stand 15.09.2026).",
    "statusGrund_en": "Website reachable, but the product catalog is technically broken (17 of 17 linked product IDs return 404), no working checkout, no legal notice, ScamAdviser score 0/100; resembles an SEO facade without real commerce (as of Sep 15, 2026).",
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Website ist am 15.09.2026 wieder erreichbar (HTTP 200, LiteSpeed-Cache aktiv); am 06.09.2026 laut Vorrecherche nicht erreichbar. Robots.txt und XML-Sitemap (Yoast SEO) sind sauber konfiguriert und maschinenlesbar.",
          "text_en": "The website is reachable again as of Sep 15, 2026 (HTTP 200, LiteSpeed cache active); per prior research it was unreachable on Sep 6, 2026. robots.txt and the XML sitemap (Yoast SEO) are cleanly configured and machine-readable.",
          "quelle": "https://europeptideshop.com/ (Header-Check) + https://europeptideshop.com/robots.txt",
          "datum": "2026-09-15"
        },
        {
          "text": "Auf einzelnen Themen-Landingpages (z.B. GLP-1/GIP) ist inzwischen ein expliziter RUO-Hinweis vorhanden: 'This peptide is strictly for in-vitro research and laboratory use only. It is not intended for human consumption, medical treatment, or diagnostic applications. ... For research use only. Not for human or veterinary use.' Das ist eine Verbesserung gegenüber dem Vorbefund vom 06.09. (ruo: FALSE), gilt aber nicht nachweisbar für die gesamte Seite (auf Startseite/Produktseite fehlt der Hinweis).",
          "text_en": "On individual topic landing pages (e.g., GLP-1/GIP), an explicit RUO notice is now present: 'This peptide is strictly for in-vitro research and laboratory use only. It is not intended for human consumption, medical treatment, or diagnostic applications. ... For research use only. Not for human or veterinary use.' This is an improvement over the prior finding from Sep 6 (ruo: FALSE), but it is not demonstrably present across the entire site (the notice is missing on the homepage/product page).",
          "quelle": "https://europeptideshop.com/buy-glp-1-gip-peptide-eu-research/",
          "datum": "2026-09-15"
        },
        {
          "text": "Gültiges SSL-Zertifikat (Let's Encrypt, DV) vorhanden; DNSFilter stuft die Domain laut ScamAdviser als 'safe' ein.",
          "text_en": "Valid SSL certificate (Let's Encrypt, DV) present; per ScamAdviser, DNSFilter classifies the domain as 'safe.'",
          "quelle": "https://www.scamadviser.com/check-website/europeptideshop.com",
          "datum": "2026-09-15"
        },
        {
          "text": "Versandzeiten werden differenziert nach Ländergruppen kommuniziert (DE/NL/BE/AT 1-2 Werktage; FR/IT/ES/PL 2-3 Werktage; weitere EU-Staaten 1-3 Werktage), inkl. Hinweis auf Schengen-Zollfreiheit und mitgelieferte Versanddokumentation.",
          "text_en": "Shipping times are communicated differentiated by country group (DE/NL/BE/AT 1-2 business days; FR/IT/ES/PL 2-3 business days; other EU countries 1-3 business days), including a note on Schengen customs-free status and included shipping documentation.",
          "quelle": "https://europeptideshop.com/shipping-and-delivery/",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "KEIN Impressum vorhanden. Vollständige Sitemap-Prüfung (page-sitemap.xml, Stand 05.09.2026) zeigt nur folgende Seiten: Home, /shop/, /checkout/, /my-account/, /customer-cabinet/, /shipping-and-delivery/, zwei SEO-Landingpages, /bpc-157-peptide/, /cart/, /contact-european-peptide-suppliers/, /buy-glp-1-gip-peptide-eu-research/. Keine Impressum-, AGB-, Datenschutz- oder Widerrufsseite existiert (/impressum/, /terms-of-service/, /privacy-policy/, /shipping-policy/ liefern alle HTTP 404). Bestätigt den Vorbefund vom 06.09. (impressum: FALSE), unverändert.",
          "text_en": "NO legal notice present. A full sitemap check (page-sitemap.xml, as of Sep 5, 2026) shows only the following pages: Home, /shop/, /checkout/, /my-account/, /customer-cabinet/, /shipping-and-delivery/, two SEO landing pages, /bpc-157-peptide/, /cart/, /contact-european-peptide-suppliers/, /buy-glp-1-gip-peptide-eu-research/. No legal notice, terms, privacy, or right-of-withdrawal page exists (/impressum/, /terms-of-service/, /privacy-policy/, /shipping-policy/ all return HTTP 404). This confirms the prior finding from Sep 6 (impressum: FALSE), unchanged.",
          "quelle": "https://europeptideshop.com/page-sitemap.xml + 404-Checks auf /impressum/, /terms-of-service/, /privacy-policy/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Kein einziges der 12 angefragten Kernpeptide (bpc-157, tb-500, ghk-cu, semaglutid, tirzepatid, retatrutid, cjc-1295, ipamorelin, melanotan-2, tesamorelin, mots-c, epitalon) ist mit einem Preis auffindbar: auf der GESAMTEN Website wurde kein einziger Produktpreis gefunden (geprüft: Startseite, /shop/, beide Produktkategorie-Seiten, /cart/, /checkout/, alle SEO-Landingpages, die einzige echte Produktseite). WooCommerce ist zwar technisch installiert (Cart-/Checkout-Seiten existieren), aber es gibt keine funktionierende Produktarchiv-Seite: /shop/ liefert exakt denselben HTML-Inhalt wie die Startseite (kein echtes Produktarchiv), der Warenkorb ist leer/funktionslos, nirgends ein 'Add to Cart'-Button.",
          "text_en": "Not a single one of the 12 requested core peptides (bpc-157, tb-500, ghk-cu, semaglutide, tirzepatide, retatrutide, cjc-1295, ipamorelin, melanotan-2, tesamorelin, mots-c, epitalon) has a findable price: across the ENTIRE website, not a single product price was found (checked: homepage, /shop/, both product category pages, /cart/, /checkout/, all SEO landing pages, the one genuine product page). WooCommerce is technically installed (cart/checkout pages exist), but there is no functioning product archive page: /shop/ returns exactly the same HTML content as the homepage (no real product archive), the cart is empty/non-functional, and there is no 'Add to Cart' button anywhere.",
          "quelle": "https://europeptideshop.com/shop/, https://europeptideshop.com/cart/, https://europeptideshop.com/checkout/ (Vollbestandsprüfung, nicht Stichprobe)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Der auf der Startseite eingebettete Produkt-Shortcode '[products ids=\"321,320,308,307,166,158,134,131,113,114,115,117,118,119,110,109,93\"]' verweist auf 17 Produkt-IDs: alle 17 liefern HTTP 404 (geprüft via /?p=ID&post_type=product). Das deutet auf einen defekten/vorgetäuschten Produktkatalog hin: die Seite suggeriert ein Sortiment, das technisch nicht existiert oder gelöscht wurde.",
          "text_en": "The product shortcode embedded on the homepage ('[products ids=\"321,320,308,307,166,158,134,131,113,114,115,117,118,119,110,109,93\"]') references 17 product IDs: all 17 return HTTP 404 (checked via /?p=ID&post_type=product). This points to a broken/fake product catalog: the site suggests a range that technically does not exist or was deleted.",
          "quelle": "https://europeptideshop.com/ (Shortcode im Quelltext) + eigene 404-Verifikation aller 17 IDs",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Nur EINE einzige echte Produktseite auf der gesamten Domain auffindbar (/product/buy-retatrutide-10mg-online/, bestätigt über XML-Sitemap UND eigene Link-Extraktion aus /shop/ sowie beiden Produktkategorie-Seiten). Diese Seite enthält keinen Preis, keinen Add-to-Cart-Button, kein WooCommerce-Markup und keinen CoA-Link: nur werblichen Fließtext ('99%+ purity guaranteed', 'Certificate of Analysis included') ohne Beleg oder Dokument dazu.",
          "text_en": "Only ONE genuine product page is findable on the entire domain (/product/buy-retatrutide-10mg-online/, confirmed via the XML sitemap AND our own link extraction from /shop/ and both product category pages). This page contains no price, no add-to-cart button, no WooCommerce markup, and no CoA link: only promotional running text ('99%+ purity guaranteed', 'Certificate of Analysis included') with no supporting evidence or document.",
          "quelle": "https://europeptideshop.com/product/buy-retatrutide-10mg-online/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "ScamAdviser Trust Score: 0 von 100 ('Caution Recommended' / 'europeptideshop.com may be a scam'). Negative Signale laut ScamAdviser: WHOIS-Identität des Inhabers versteckt (Privacy-Proxy 'PrivacyGuardian.org', Adresse 1928 E. Highland Ave Ste F104 PMB# 255, Phoenix AZ 85016, USA, eine reine Proxy-/Massenadresse, keine echte Firmenanschrift), niedriger Tranco-Rank (wenig Traffic), Registrar ist laut ScamAdviser 'popular amongst scammers', Domain sehr jung (WHOIS-Registrierung 2026-03-25, also erst ca. 5 Monate alt). Zusätzlich intern getaggt als 'Helpdesk, Gift Card - High Risk'.",
          "text_en": "ScamAdviser trust score: 0 out of 100 ('Caution Recommended' / 'europeptideshop.com may be a scam'). Negative signals per ScamAdviser: the owner's WHOIS identity is hidden (privacy proxy 'PrivacyGuardian.org', address 1928 E. Highland Ave Ste F104 PMB# 255, Phoenix AZ 85016, USA, a pure proxy/mass address, not a real company address), low Tranco rank (little traffic), the registrar is described by ScamAdviser as 'popular amongst scammers,' and the domain is very young (WHOIS registration 2026-03-25, so only about 5 months old). It is additionally internally tagged as 'Helpdesk, Gift Card - High Risk.'",
          "quelle": "https://www.scamadviser.com/check-website/europeptideshop.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Widersprüchliche Standortangaben: Die GLP-1-Landingpage behauptet 'based in Germany', die Versandseite spricht von einem 'centralized EU warehouse', der Kontakt läuft über eine britische WhatsApp-Nummer (+44 7920 653344), während die WHOIS-Registrierung über einen US-Privacy-Proxy in Phoenix, Arizona läuft. Keine dieser Angaben ist durch ein Impressum oder Handelsregistereintrag verifizierbar: es gibt keine einzige belegte Rechtsperson hinter der Seite.",
          "text_en": "Contradictory location claims: the GLP-1 landing page claims to be 'based in Germany,' the shipping page speaks of a 'centralized EU warehouse,' contact runs through a British WhatsApp number (+44 7920 653344), while the WHOIS registration runs through a US privacy proxy in Phoenix, Arizona. None of these claims is verifiable through a legal notice or commercial register entry: there is not a single documented legal entity behind the site.",
          "quelle": "https://europeptideshop.com/buy-glp-1-gip-peptide-eu-research/, https://europeptideshop.com/shipping-and-delivery/, https://europeptideshop.com/contact-european-peptide-suppliers/, https://www.scamadviser.com/check-website/europeptideshop.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Im HTML-Quelltext der Startseite befindet sich eine verdeckte Reihe von Footer-Links zu thematisch fremden Domains: muhamedshop.us, tobaccooutlet.co.uk, canadiantrips.org, shroomstore.ca, eupeptideshop.org, fungistore.net, shroomsexchange.com, firewooddelivery.org, shopranchhandbumpers.us, coloradoshrooms.net, coloradoshroomstore.net, psilocybinshop.net. Dieses Muster (themenfremde Linkfarm-Links, im Quelltext versteckt) ist typisch für kompromittierte WordPress-Installationen oder SEO-Linknetzwerke und ein zusätzliches Vertrauens-Warnsignal, unabhängig vom eigentlichen Shop-Inhalt.",
          "text_en": "The homepage's HTML source contains a hidden row of footer links to thematically unrelated domains: muhamedshop.us, tobaccooutlet.co.uk, canadiantrips.org, shroomstore.ca, eupeptideshop.org, fungistore.net, shroomsexchange.com, firewooddelivery.org, shopranchhandbumpers.us, coloradoshrooms.net, coloradoshroomstore.net, psilocybinshop.net. This pattern (off-topic link-farm links hidden in the source) is typical of compromised WordPress installations or SEO link networks and is an additional trust warning sign, independent of the shop's actual content.",
          "quelle": "https://europeptideshop.com/ (HTML-Quelltext, Footer-Bereich)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Kein Eintrag auf chemverify.com für 'europeptideshop.com' oder Slug 'europeptideshop': die API führt unter ähnlichem Namen nur den klar unterschiedlichen Anbieter 'Europeptides' (Domain europeptides.de, eigener Slug 'europeptides', eigene chemverify-Bewertung) auf. Nicht zu verwechseln: beide Namen sind sich sehr ähnlich, beziehen sich aber auf unterschiedliche Domains.",
          "text_en": "No entry on chemverify.com for 'europeptideshop.com' or the slug 'europeptideshop': the API only lists, under a similar name, the clearly different vendor 'Europeptides' (domain europeptides.de, its own slug 'europeptides', its own ChemVerify rating). Not to be confused: the two names are very similar but refer to different domains.",
          "quelle": "https://www.chemverify.com/api/catalog (Volltextsuche über alle Einträge)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Keinerlei Community-Spuren auffindbar: keine Treffer auf Reddit (auch nicht site:reddit.com), kein Trustpilot-Profil (trustpilot.com/review/europeptideshop.com liefert HTTP 403/keine Bewertungen), keine Erwähnungen in deutschen Foren. Die Seite ist in keiner der geprüften Community-Quellen präsent: weder positiv noch negativ.",
          "text_en": "No community traces whatsoever found: no hits on Reddit (including site:reddit.com), no Trustpilot profile (trustpilot.com/review/europeptideshop.com returns HTTP 403/no reviews), no mentions in German forums. The site is present in none of the checked community sources: neither positive nor negative.",
          "quelle": "WebSearch \"europeptideshop reddit\", WebSearch \"site:reddit.com europeptideshop.com\", https://www.trustpilot.com/review/europeptideshop.com",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "Nach wie vor Zahlung nur per Bitcoin/Krypto beworben ('Secure Bitcoin Payments... fast, secure, and anonymous'); im Checkout selbst keine weiteren Zahlungsarten sichtbar, da der Checkout mangels echter Produkte nicht durchlaufen werden konnte. Bestätigt den Vorbefund vom 06.09. (Zahlung: Krypto/Vorkasse), unverändert.",
          "text_en": "Payment is still advertised as Bitcoin/crypto only ('Secure Bitcoin Payments... fast, secure, and anonymous'); no other payment methods are visible in the checkout itself, since the checkout could not be completed due to the lack of real products. This confirms the prior finding from Sep 6 (payment: crypto/prepayment), unchanged.",
          "quelle": "https://europeptideshop.com/ (Abschnitt 'Secure Bitcoin Payments')",
          "datum": "2026-09-15",
          "art": "belegt"
        }
      ],
      "aenderungen": [
        {
          "text": "Website-Erreichbarkeit: von 'nicht erreichbar' (06.09.2026) zu HTTP 200 (15.09.2026): Seite ist wieder online.",
          "text_en": "Website reachability: from 'unreachable' (Sep 6, 2026) to HTTP 200 (Sep 15, 2026): the site is back online.",
          "quelle": "https://europeptideshop.com/",
          "datum": "2026-09-15"
        },
        {
          "text": "RUO-Kennzeichnung: Vorbefund 06.09. war 'ruo: FALSE' (kein RUO-Hinweis). Jetzt zumindest auf einer Themen-Landingpage (GLP-1/GIP) ein expliziter RUO-Disclaimer vorhanden: auf Startseite und der einzigen Produktseite (Retatrutide) fehlt er weiterhin. Teilkorrektur, kein flächendeckender Befund.",
          "text_en": "RUO labeling: the prior finding from Sep 6 was 'ruo: FALSE' (no RUO notice). Now, at least on one topic landing page (GLP-1/GIP), an explicit RUO disclaimer is present: it is still missing on the homepage and the one product page (Retatrutide). A partial correction, not a sitewide finding.",
          "quelle": "https://europeptideshop.com/buy-glp-1-gip-peptide-eu-research/",
          "datum": "2026-09-15"
        },
        {
          "text": "Impressum weiterhin nicht vorhanden, unverändert zum Vorbefund vom 06.09.",
          "text_en": "Legal notice still not present, unchanged from the prior finding of Sep 6.",
          "quelle": "https://europeptideshop.com/page-sitemap.xml",
          "datum": "2026-09-15"
        },
        {
          "text": "ScamAdviser-Score jetzt konkret ermittelt (vorher nicht dokumentiert): 0/100, 'may be a scam'.",
          "text_en": "ScamAdviser score now specifically determined (previously not documented): 0/100, 'may be a scam.'",
          "quelle": "https://www.scamadviser.com/check-website/europeptideshop.com",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": false,
    "preisStand": null
  },
  {
    "slug": "hydro-research",
    "name": "Hydro Research Peptides",
    "website": "https://hydroresearchpeptides.com/",
    "rechtstraeger": null,
    "sitz": "Milwaukee, WI, USA",
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#3F5D4E",
      "logo": "assets/img/logos/hydro-research.png",
      "logoMono": "assets/img/logos/hydro-research_mono.png",
      "logoRatio": 1.72,
      "logoFallback": "assets/img/logos/_wordmarks/hydro-research.svg",
      "logoQuelle": "https://hydroresearchpeptides.com/wp-content/uploads/2023/11/hydro-full-logo.png"
    },
    "score": {
      "labor": 0,
      "recht": 33,
      "lieferung": 0,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 13,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": false,
      "extern": true,
      "labor": "Janoshik, Chromate Labs (291 Dokumente)",
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": false,
      "ruo": true,
      "impressum": false,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": null,
      "tageMax": null,
      "laender": [
        "US"
      ]
    },
    "zahlung": [
      "Karte",
      "Venmo"
    ],
    "affiliate": true,
    "affiliateProgrammUrl": "https://hydroresearchpeptides.com/affiliate-register/",
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": null,
    "affiliateUrl": "https://hydroresearchpeptides.com/",
    "kurz": "Sitz in Milwaukee, WI, USA. Kein Versand nach DACH laut Website. CoAs öffentlich einsehbar, extern geprüft.",
    "kurz_en": "Registered in Milwaukee, WI, USA. Does not ship to Germany/Austria/Switzerland according to the website. CoAs are publicly available and third-party tested.",
    "staerken": [
      "Externe Labortests (Janoshik)",
      "RUO-Kennzeichnung vorhanden"
    ],
    "staerken_en": [
      "Third-party lab testing (Janoshik)",
      "RUO labeling in place"
    ],
    "schwaechen": [
      "Kein Altersgate (Stand 06.09.2026)",
      "Kein auffindbares Impressum (Stand 06.09.2026)",
      "Kein Versand nach DACH laut Website (Stand 06.09.2026)",
      "Rechtsträger nicht ermittelbar (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No age verification gate (as of Sep 6, 2026)",
      "No findable legal notice (as of Sep 6, 2026)",
      "No shipping to Germany/Austria/Switzerland according to the website (as of Sep 6, 2026)",
      "Legal entity not ascertainable (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "kein Rechtsträger/Impressum",
      "Venmo-Empfänger heißt anders als Shop",
      "nur US-Versand"
    ],
    "roteFlaggen_en": [
      "no legal entity/imprint",
      "Venmo recipient name differs from the shop name",
      "US shipping only"
    ],
    "quelle": "hydroresearchpeptides.com, peptidcheck24, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": null,
    "statusGrund_en": null,
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "CoA-Testung durch unabhaengiges Drittlabor (Janoshik Analytical) bestaetigt; ChemVerify listet Hydro Research Peptides im US-Markt-Vergleich mit Status 'Verifiziert', COA-Verifiziert-Haekchen und 99,46% Durchschnittsreinheit ueber 32 geprüfte Chargen.",
          "text_en": "Third-party lab testing confirmed by an independent laboratory (Janoshik Analytical); ChemVerify lists Hydro Research Peptides in its US market comparison with a 'Verified' status, a COA-verified checkmark, and 99.46% average purity across 32 tested batches.",
          "quelle": "https://www.chemverify.com/de/vendor/hydro-research-peptides",
          "datum": "2026-09-15"
        },
        {
          "text": "Breites, aktuelles Produktsortiment laut Drittanbieter-Katalog: 23 gelistete Produkte, darunter GLP-1/GIP-Analoga (Retatrutid in 5 Groessen, Tirzepatid in 6 Groessen, Cagrilintide-Kombis).",
          "text_en": "Broad, current product range according to the third-party catalog: 23 listed products, including GLP-1/GIP analogs (retatrutide in 5 sizes, tirzepatide in 6 sizes, cagrilintide combinations).",
          "quelle": "https://www.chemverify.com/de/vendor/hydro-research-peptides",
          "datum": "2026-09-15"
        },
        {
          "text": "ScamAdviser-Gesamturteil 'Very Likely Safe' mit mehreren Positivpunkten (gueltiges SSL-Zertifikat, langjaehrig bestehende Domain, 'received positive reviews', kartenbasierte Rueckerstattungsoptionen). Der numerische Trust-Score liess sich technisch nicht zuverlaessig ablesen (siehe bewertungsHinweis) und wird daher hier nicht beziffert.",
          "text_en": "Overall ScamAdviser verdict 'Very Likely Safe' with several positive points (valid SSL certificate, long-standing domain, 'received positive reviews', card-based refund options). The numeric trust score could not be read reliably due to a technical issue (see evaluation note) and is therefore not stated here.",
          "quelle": "https://www.scamadviser.com/check-website/hydroresearchpeptides.com",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Kein Impressum/Rechtstraeger auffindbar: Der Kontaktabschnitt der Terms & Conditions nennt nur 'Hydro Research' + Support-E-Mail + Domain, keine Firmierung, keine Anschrift, keine Registernummer. Auch die About-Us-Seite nennt keine Rechtsform oder Adresse.",
          "text_en": "No legal entity/imprint findable: the contact section of the Terms & Conditions names only 'Hydro Research' plus a support email address and the domain, with no company name, no address, and no registration number. The About Us page likewise states no legal form or address.",
          "quelle": "https://hydroresearchpeptides.com/terms-conditions/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Venmo-Zahlungsempfaenger weicht vom Shopnamen ab: Die Zahlungsanweisung nennt NAME 'Hydro Consulting' / USERNAME '@AstroLLC' statt 'Hydro Research' - Kaeufer zahlen an einen anders benannten Empfaenger.",
          "text_en": "The Venmo payment recipient differs from the shop name: the payment instructions list NAME 'Hydro Consulting' / USERNAME '@AstroLLC' instead of 'Hydro Research' - buyers pay a differently named recipient.",
          "quelle": "https://hydroresearchpeptides.com/shipping-payment/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Nur US-Inlandsversand: Die Shipping-Seite beschreibt ausschliesslich '2-Day FedEx' fuer 'domestic orders'; ChemVerify bestaetigt fuer diesen Anbieter 'Liefert nach: US' ohne weitere Laender.",
          "text_en": "US domestic shipping only: the shipping page describes exclusively '2-Day FedEx' for 'domestic orders'; ChemVerify confirms 'ships to: US' for this vendor with no other countries listed.",
          "quelle": "https://hydroresearchpeptides.com/shipping-payment/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Trustpilot-Profil entfernt: Die Review-Seite zeigt 'This profile has been removed - The business you're trying to find goes against our guidelines and is no longer visible on Trustpilot.'",
          "text_en": "Trustpilot profile removed: the review page shows 'This profile has been removed - The business you're trying to find goes against our guidelines and is no longer visible on Trustpilot.'",
          "quelle": "https://www.trustpilot.com/review/hydroresearchpeptides.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Diskrepanz Eigenwerbung vs. Realitaet: Laut Google-Suchindex wirbt die Facebook-Seite 'Hydro Research' (ca. 390 Follower) mit 'We are now rated 4.7 by our customers on Trustpilot!' und verlinkt exakt die oben genannte, inzwischen entfernte Trustpilot-Review-Seite. Die Facebook-Seite selbst war ohne Login nicht direkt oeffentlich einsehbar, daher nur ueber den Google-Suchtreffer belegt.",
          "text_en": "Discrepancy between self-promotion and reality: according to the Google search index, the Facebook page 'Hydro Research' (about 390 followers) advertises 'We are now rated 4.7 by our customers on Trustpilot!' and links to exactly the Trustpilot review page named above, which has since been removed. The Facebook page itself was not directly viewable without a login, so this is documented only via the Google search result.",
          "quelle": "https://www.google.com/search?q=Hydro+Research+Peptides+Milwaukee+google+reviews",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Produktkatalog und CoA-Bibliothek sind seit mindestens Mai 2026 hinter einer Account-/Login-Pflicht ('Research Access Required') verborgen; ohne Registrierung (die laut Auftragsgrenzen nicht durchgefuehrt wurde) sind weder Preise noch einzelne CoA-Dokumente auf der Herstellerseite selbst einsehbar. Das schraenkt die Transparenz fuer nicht angemeldete Interessenten ein.",
          "text_en": "The product catalog and CoA library have been hidden behind an account/login requirement ('Research Access Required') since at least May 2026; without registering (which was not carried out, per the assignment scope), neither prices nor individual CoA documents are viewable on the manufacturer's own site. This limits transparency for unregistered visitors.",
          "quelle": "https://hydroresearchpeptides.com/shop/",
          "datum": "2026-09-15",
          "art": "belegt"
        }
      ],
      "aenderungen": [
        {
          "text": "NEU seit Baseline (06.09.2026, dort 'coa_oeffentlich: true' vermerkt): Sowohl /shop/ als auch /lab-results/ verlangen jetzt Account-Erstellung oder Login inkl. 21+-Altersbestaetigung, bevor Produktinfos, Preise oder CoA-Dokumente sichtbar werden ('Due to regulatory changes in this industry, we require account login before product information can be accessed'). Ein Wayback-Snapshot vom 13.05.2026 zeigt bereits dasselbe Login-Gate, das Gate besteht also nachweislich seit mind. Mai 2026 - ob die Baseline-Annahme 'oeffentlich' je zutraf oder auf veralteten/anderen Daten beruhte, bleibt ungeprueft.",
          "text_en": "NEW since baseline (Sep 6, 2026, where 'coa_oeffentlich: true' was noted): both /shop/ and /lab-results/ now require account creation or login, including 21+ age confirmation, before product info, prices, or CoA documents become visible ('Due to regulatory changes in this industry, we require account login before product information can be accessed'). A Wayback snapshot from May 13, 2026 already shows the same login gate, so the gate has demonstrably existed since at least May 2026 - whether the baseline assumption of 'public' was ever accurate, or was based on outdated/different data, remains unverified.",
          "quelle": "https://web.archive.org/web/20260513002542/https://hydroresearchpeptides.com/shop/",
          "datum": "2026-09-15"
        },
        {
          "text": "CoA-Dokumentenzahl in der Lab-Results-Bibliothek zeigt aktuell 'Library totals: 275 documents' statt der 291 aus der Baseline. Ungeprueft, ob dies ein echter Rueckgang, eine andere Zaehlmethode oder ein aktiver Kategoriefilter ist (Seite zeigte gleichzeitig eine Kategorie-Ansicht mit nur 6 Dokumenten).",
          "text_en": "The CoA document count in the lab results library currently shows 'Library totals: 275 documents' versus 291 in the baseline. It is unverified whether this reflects an actual decrease, a different counting method, or an active category filter (the page simultaneously showed a category view with only 6 documents).",
          "quelle": "https://hydroresearchpeptides.com/lab-results/",
          "datum": "2026-09-15"
        },
        {
          "text": "Venmo-Namensdiskrepanz aus der Baseline ('Venmo-Empfaenger heisst anders als Shop') wurde mit Quelle und Datum direkt am Anbieter verifiziert: NAME 'Hydro Consulting', USERNAME '@AstroLLC'.",
          "text_en": "The Venmo name discrepancy from the baseline ('Venmo recipient name differs from the shop name') was verified directly at the vendor with source and date: NAME 'Hydro Consulting', USERNAME '@AstroLLC'.",
          "quelle": "https://hydroresearchpeptides.com/shipping-payment/",
          "datum": "2026-09-15"
        },
        {
          "text": "Neue Information gegenueber Baseline: Trustpilot hat das Profil des Anbieters wegen Richtlinienverstoss entfernt; in der Baseline war kein Trustpilot-Status vermerkt.",
          "text_en": "New information versus the baseline: Trustpilot has removed the vendor's profile for a policy violation; the baseline recorded no Trustpilot status.",
          "quelle": "https://www.trustpilot.com/review/hydroresearchpeptides.com",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": null
  },
  {
    "slug": "peptide-culture",
    "name": "Peptide Culture",
    "website": "https://peptide-culture.com/",
    "rechtstraeger": null,
    "sitz": null,
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#8C4F1B",
      "logo": "assets/img/logos/peptide-culture.png",
      "logoMono": "assets/img/logos/peptide-culture_mono.png",
      "logoRatio": 2.35,
      "logoFallback": "assets/img/logos/_wordmarks/peptide-culture.svg",
      "logoQuelle": "https://peptide-culture.com/cdn/shop/files/Peptide-Logo.png?v=1774435793"
    },
    "score": {
      "labor": 0,
      "recht": 0,
      "lieferung": 50,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 12,
    "datenbasis": 3,
    "coa": {
      "oeffentlich": false,
      "extern": false,
      "labor": null,
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": null,
      "ruo": null,
      "impressum": false,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": 5,
      "tageMax": 10,
      "laender": [
        "INT"
      ]
    },
    "zahlung": [],
    "affiliate": null,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": null,
    "affiliateUrl": "https://peptide-culture.com/",
    "kurz": "Sitz nicht ermittelbar. Versand laut Website nach DACH. Keine öffentlich einsehbaren CoAs gefunden.",
    "kurz_en": "Registered address not ascertainable. Ships to Germany/Austria/Switzerland according to the website. No publicly available CoAs found.",
    "staerken": [],
    "staerken_en": [],
    "schwaechen": [
      "Kein auffindbares Impressum (Stand 06.09.2026)",
      "Keine öffentlich einsehbaren CoAs (Stand 06.09.2026)",
      "Lange Lieferzeit nach DACH laut Website",
      "Rechtsträger nicht ermittelbar (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No findable legal notice (as of Sep 6, 2026)",
      "No publicly available CoAs (as of Sep 6, 2026)",
      "Long delivery time to Germany/Austria/Switzerland according to the website",
      "Legal entity not ascertainable (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "Impressum ohne Adresse",
      "Referral-Link auf Particle Peptides"
    ],
    "roteFlaggen_en": [
      "legal notice without an address",
      "referral link to Particle Peptides"
    ],
    "quelle": "peptide-culture.com/policies/legal-notice, 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "kein-shop",
    "statusGrund": "Betreibt kein eigenes Produktsortiment (0 Produkte, keine Produkte-Sitemap); die Shop-Seite ist eine reine Affiliate-Werbeempfehlung für den Drittanbieter Particle Peptides.",
    "statusGrund_en": "Runs no own product range (0 products, no products sitemap); the shop page is a pure affiliate referral to the third-party vendor Particle Peptides.",
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Umfangreiches redaktionelles Content-Angebot mit angegebenem Review-Prozess (laut Eigenangabe: 350+ Fachartikel, 200+ Quellenverweise, Zwei-Personen-Fact-Checking vor Veröffentlichung)",
          "text_en": "Extensive editorial content offering with a stated review process (per the vendor's own claim: 350+ articles, 200+ source references, two-person fact-checking before publication)",
          "quelle": "https://peptide-culture.com/pages/about",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Kein eigenes Produktsortiment: Der Shop-Bereich listet 0 Produkte, es existiert keine Shopify-Produkte-Sitemap (nur Pages/Collections/Blogs). Die Shop-Seite besteht ausschließlich aus einer Werbeempfehlung für den Drittanbieter 'Particle Peptides' inkl. getrackter Referral-URL (particlepeptides.com/en/?refs=24594). Peptide Culture verkauft selbst keine Peptide.",
          "text_en": "No own product range: the shop section lists 0 products, and there is no Shopify products sitemap (only pages/collections/blogs). The shop page consists entirely of a promotional referral to the third-party vendor 'Particle Peptides,' including a tracked referral URL (particlepeptides.com/en/?refs=24594). Peptide Culture does not sell any peptides itself.",
          "quelle": "https://peptide-culture.com/pages/shop ; https://peptide-culture.com/collections/frontpage (\"0 Produkte\") ; https://peptide-culture.com/sitemap.xml",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Impressum weiterhin ohne Adresse, Rechtsform, Handelsregister oder Vertretungsberechtigten: nur der Name 'Peptide Culture', danach folgt direkt der nächste Abschnitt ohne weitere Angaben. Bestätigt den bereits bekannten roten Flag unverändert.",
          "text_en": "The legal notice still lacks an address, legal form, commercial register entry, or authorized representative: only the name 'Peptide Culture' appears, followed directly by the next section with no further details. This confirms the already known red flag, unchanged.",
          "quelle": "https://peptide-culture.com/policies/legal-notice",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Einziger auffindbarer Kontaktweg über die gesamte Website ist eine anonyme ProtonMail-Adresse (peptide.insights@proton.me) laut Datenschutzerklärung, Abschnitt 'Verantwortlicher'. Kein Name einer natürlichen Person, kein Postweg, kein Telefon, keine Rechtsform irgendwo auf der Domain gefunden.",
          "text_en": "The only contact channel found across the entire website is an anonymous ProtonMail address (peptide.insights@proton.me), per the privacy policy's 'Data Controller' section. No name of a natural person, no postal address, no phone number, and no legal form was found anywhere on the domain.",
          "quelle": "https://peptide-culture.com/policies/privacy-policy (Abschnitt 'Verantwortlicher')",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Blogartikel 'Peptide Anbieter Vergleich 2026' bewirbt sich selbst als 'Unabhängig getestet' und kürt Particle Peptides zum 'Testsieger 2026' (5/5 Sterne) mit Call-to-Action-Link, der auf die getrackte Affiliate-URL (?refs=24594) verweist. Volltext-Suche im Artikel-HTML nach den Begriffen 'Werbung', 'Affiliate', 'Provision', 'Anzeige', 'Kooperation', 'Partnerlink' ergab keinen einzigen Treffer: im Artikeltext selbst also keine erkennbare Werbekennzeichnung, obwohl die Datenschutzerklärung an anderer Stelle 'Affiliate-Programme und Affiliate-Links' als Verarbeitungszweck nennt.",
          "text_en": "The blog article 'Peptide Anbieter Vergleich 2026' (Peptide Vendor Comparison 2026) markets itself as 'independently tested' and names Particle Peptides the 'Test Winner 2026' (5/5 stars), with a call-to-action link pointing to the tracked affiliate URL (?refs=24594). A full-text search of the article HTML for the terms 'advertising,' 'affiliate,' 'commission,' 'ad,' 'cooperation,' and 'partner link' returned zero matches: the article text itself carries no recognizable advertising disclosure, even though the privacy policy elsewhere names 'affiliate programs and affiliate links' as a processing purpose.",
          "quelle": "https://peptide-culture.com/blogs/news/peptide-anbieter-vergleich-2026 ; https://peptide-culture.com/policies/privacy-policy",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Widerspruch in eigenem Content: Derselbe Vergleichsartikel listet 'Kein Impressum / keine Firmenadresse' explizit als roten Flag Nr. 2 bei Konkurrenten ('In der EU ist ein vollständiges Impressum gesetzlich vorgeschrieben. Fehlt es ... ernstes Warnsignal'): exakt dieses Kriterium erfüllt Peptide Culture selbst nicht (siehe oben).",
          "text_en": "Contradiction in the vendor's own content: the same comparison article explicitly lists 'no legal notice / no company address' as red flag #2 for competitors ('In the EU, a complete legal notice is required by law. If it is missing ... a serious warning sign'): Peptide Culture itself fails to meet exactly this criterion (see above).",
          "quelle": "https://peptide-culture.com/blogs/news/peptide-anbieter-vergleich-2026",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Keine Community-Spuren gefunden: Gezielte Suche nach 'Peptide Culture reddit', site:reddit.com-Suche und Trustpilot/Bewertungs-Suche ergaben keinerlei Treffer zu peptide-culture.com, weder positiv noch negativ. Einordnung: keine belegbare Reputation in Community-Quellen vorhanden, nicht gleichzusetzen mit 'unauffällig positiv'.",
          "text_en": "No community traces found: targeted searches for 'Peptide Culture reddit,' a site:reddit.com search, and a Trustpilot/review search returned zero results for peptide-culture.com, neither positive nor negative. Assessment: no verifiable reputation exists in community sources; this is not the same as 'quietly positive.'",
          "quelle": "WebSearch \"Peptide Culture\" reddit / site:reddit.com \"peptide culture\" / \"peptide-culture.com\" trustpilot",
          "datum": "2026-09-15",
          "art": "community"
        }
      ],
      "aenderungen": [
        {
          "text": "Wichtigste Änderung seit 06.09.2026: Der bekannte 'Referral-Link auf Particle Peptides' ist keine Einzelverlinkung, sondern das gesamte Geschäftsmodell: Peptide Culture führt strukturell KEIN eigenes Sortiment (0 Produkte, keine Produkte-Sitemap). Die Seite ist ein Content-/Affiliate-Portal, kein Peptid-Vendor. Das war am 06.09. als offene Prüffrage markiert ('prüfe ob Particle Peptides verbundene/gleiche Firma') und ist jetzt geklärt: keine gleiche Firma, sondern kommerzielle Affiliate-Beziehung (Particle Peptides betreibt laut Suche ein 10%-Affiliate-Programm; Peptide Culture nutzt einen eigenen Tracking-Code ?refs=24594, ChemVerify listet Particle Peptides separat mit anderem Tracking-Code ?refs=24445, verschiedene Partner, gleicher Zielshop).",
          "text_en": "Most important change since Sep 6, 2026: the known 'referral link to Particle Peptides' is not a single link but the entire business model: Peptide Culture structurally carries NO own product range (0 products, no products sitemap). The site is a content/affiliate portal, not a peptide vendor. This was flagged as an open question on Sep 6 ('check whether Particle Peptides is an affiliated/identical company') and is now resolved: not the same company, but a commercial affiliate relationship (Particle Peptides reportedly runs a 10% affiliate program per search results; Peptide Culture uses its own tracking code ?refs=24594, while ChemVerify lists Particle Peptides separately with a different tracking code ?refs=24445, different partners, same destination shop).",
          "quelle": "https://peptide-culture.com/pages/shop ; https://www.chemverify.com/api/catalog (Eintrag particle-peptides, website https://particlepeptides.com/en/?refs=24445) ; WebSearch particlepeptides.com/en/content/41-affiliate-program-terms",
          "datum": "2026-09-15"
        },
        {
          "text": "Impressum unverändert mangelhaft (kein Fortschritt seit 06.09.2026).",
          "text_en": "Legal notice remains deficient (no progress since Sep 6, 2026).",
          "quelle": "https://peptide-culture.com/policies/legal-notice",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": false,
    "preisStand": null
  },
  {
    "slug": "peptide-shop-deutschland",
    "name": "Peptide Shop Deutschland",
    "website": "https://peptideshopdeutschland.com/",
    "rechtstraeger": null,
    "sitz": null,
    "land": "DE",
    "gegruendet": null,
    "brand": {
      "farbe": "#8C1B4F",
      "logo": "assets/img/logos/peptide-shop-deutschland.png",
      "logoMono": "assets/img/logos/peptide-shop-deutschland_mono.png",
      "logoRatio": 3.38,
      "logoFallback": "assets/img/logos/_wordmarks/peptide-shop-deutschland.svg",
      "logoQuelle": "https://peptideshopdeutschland.com/wp-content/uploads/2026/03/original-e9816ecb60d88f3be9ec23ec5d56527d-e1774364643355.webp"
    },
    "score": {
      "labor": 0,
      "recht": 0,
      "lieferung": null,
      "sortiment": null,
      "preis": null
    },
    "gesamt": 0,
    "datenbasis": 2,
    "coa": {
      "oeffentlich": false,
      "extern": false,
      "labor": null,
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": false,
      "ruo": false,
      "impressum": false,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": null,
      "tageMax": null,
      "laender": []
    },
    "zahlung": [
      "Krypto",
      "Vorkasse"
    ],
    "affiliate": null,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": 5.9,
    "affiliateUrl": "https://peptideshopdeutschland.com/",
    "kurz": "Sitz nicht ermittelbar. Versand nach DACH nicht ermittelbar. Keine öffentlich einsehbaren CoAs gefunden.",
    "kurz_en": "Registered address not ascertainable. Shipping to Germany/Austria/Switzerland not ascertainable. No publicly available CoAs found.",
    "staerken": [],
    "staerken_en": [],
    "schwaechen": [
      "Kein Altersgate (Stand 06.09.2026)",
      "Kein auffindbares Impressum (Stand 06.09.2026)",
      "Keine RUO-Kennzeichnung (Stand 06.09.2026)",
      "Keine öffentlich einsehbaren CoAs (Stand 06.09.2026)",
      "Rechtsträger nicht ermittelbar (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "No age verification gate (as of Sep 6, 2026)",
      "No findable legal notice (as of Sep 6, 2026)",
      "No RUO labeling (as of Sep 6, 2026)",
      "No publicly available CoAs (as of Sep 6, 2026)",
      "Legal entity not ascertainable (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "kein Impressum",
      "keine AGB",
      "Linkfarm ca. 70 Fremdshops",
      "15 % nur bei Krypto"
    ],
    "roteFlaggen_en": [
      "no legal notice",
      "no terms and conditions",
      "link farm to roughly 70 third-party shops",
      "15% discount only with crypto payment"
    ],
    "quelle": "peptidcheck24, Domain 06.09. nicht erreichbar",
    "stand": "2026-09-06",
    "demo": false,
    "status": "aktiv",
    "statusGrund": "Domain ist wieder erreichbar und betreibt einen funktionierenden WooCommerce-Shop (verifiziert 15.09.2026); rechtliche Kernmängel (kein Impressum, keine AGB, kein Altersgate) bestehen unverändert fort.",
    "statusGrund_en": "The domain is reachable again and runs a working WooCommerce shop (verified Sep 15, 2026); core legal deficiencies (no legal notice, no terms, no age gate) remain unchanged.",
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [
        {
          "text": "Domain ist aktuell aktiv und lädt direkt (HTTP 200, kein Redirect, keine Parking-Page): funktionsfähiger WooCommerce-Shop mit echtem Produktkatalog, nicht mehr die reine Linkfarm aus der vorherigen Erhebung",
          "text_en": "The domain is currently active and loads directly (HTTP 200, no redirect, no parking page): a functioning WooCommerce shop with a real product catalog, no longer the pure link farm found in the previous assessment.",
          "quelle": "direkte Prüfung 15.09.2026 (curl-äquivalenter Fetch)",
          "datum": "2026-09-15"
        },
        {
          "text": "Gültiges SSL-Zertifikat (Let's Encrypt), von ScamAdviser mit Label 'Likely Safe' eingestuft, DNSFilter stuft Domain als sicher ein",
          "text_en": "Valid SSL certificate (Let's Encrypt); rated 'Likely Safe' by ScamAdviser; DNSFilter classifies the domain as safe.",
          "quelle": "https://www.scamadviser.com/check-website/peptideshopdeutschland.com",
          "datum": "2026-09-15"
        },
        {
          "text": "10 von 12 geprüften Kern-Peptiden aktuell gelistet und mit Preis versehen (siehe produkte)",
          "text_en": "10 of 12 checked core peptides are currently listed with a price (see products).",
          "quelle": "direkte Prüfung 15.09.2026, z.B. https://peptideshopdeutschland.com/bpc-157/",
          "datum": "2026-09-15"
        }
      ],
      "schwaechen": [
        {
          "text": "Kein Impressum auffindbar: /impressum/, /imprint/, /legal/ leiten alle auf /shop/ um (WordPress-404-Fallback), Homepage enthält den String 'Impressum' nirgends",
          "text_en": "No legal notice found: /impressum/, /imprint/, and /legal/ all redirect to /shop/ (WordPress 404 fallback); the homepage contains the string 'Impressum' nowhere.",
          "quelle": "direkte Prüfung 15.09.2026, https://peptideshopdeutschland.com/impressum/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Keine AGB und kein Datenschutztext auffindbar: /agb/, /terms/, /datenschutz/, /privacy-policy/ leiten ebenfalls auf /shop/ um",
          "text_en": "No terms and conditions and no privacy policy text found: /agb/, /terms/, /datenschutz/, and /privacy-policy/ likewise redirect to /shop/.",
          "quelle": "direkte Prüfung 15.09.2026",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Kein Altersgate, kein RUO-Hinweis (Research Use Only) und keine CoA-Erwähnung auf Homepage oder den 10 geprüften Produktseiten gefunden",
          "text_en": "No age gate, no RUO notice (Research Use Only), and no mention of CoAs found on the homepage or the 10 checked product pages.",
          "quelle": "direkte Prüfung 15.09.2026",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "15% Rabatt exklusiv bei Zahlung per Kryptowährung: Banner 'PB15% discount purchasing via any cryptocurrency' aktiv auf jeder Seite, kein Hinweis auf PayPal/Kreditkarte im Cart/Checkout gefunden",
          "text_en": "15% discount exclusively for cryptocurrency payment: the banner 'PB15% discount purchasing via any cryptocurrency' is active on every page; no mention of PayPal/credit card found in the cart/checkout.",
          "quelle": "direkte Prüfung 15.09.2026, https://peptideshopdeutschland.com/cart/",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "ScamAdviser: Domain erst 6 Monate alt (WHOIS-Registrierung 2026-03-09), Server in den Niederlanden, Registrar TuringSign/Cosmotown, Tranco-Rank sehr niedrig (kaum Traffic): von ScamAdviser selbst als Risikofaktoren benannt trotz Gesamtlabel 'Likely Safe'. Angezeigter Trust Score = 0, letztes Scan-Update laut Seite '4 Monate her' (Daten könnten veraltet sein)",
          "text_en": "ScamAdviser: the domain is only 6 months old (WHOIS registration 2026-03-09), server located in the Netherlands, registrar TuringSign/Cosmotown, very low Tranco rank (little traffic): named by ScamAdviser itself as risk factors despite the overall 'Likely Safe' label. Displayed trust score = 0; the site's last scan update was '4 months ago' per the page (data could be outdated).",
          "quelle": "https://www.scamadviser.com/check-website/peptideshopdeutschland.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Nicht bei chemverify.com gelistet (133KB-Katalog geprüft, keine Erwähnung von 'peptideshopdeutschland' oder 'Peptide Shop Deutschland')",
          "text_en": "Not listed on chemverify.com (133KB catalog checked, no mention of 'peptideshopdeutschland' or 'Peptide Shop Deutschland').",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Keine Reddit- oder Forum-Diskussion zum Shop auffindbar (weder positiv noch negativ): weder Erfahrungsberichte noch Betrugswarnungen in Suchergebnissen",
          "text_en": "No Reddit or forum discussion about the shop found (neither positive nor negative): no experience reports and no scam warnings in search results.",
          "quelle": "WebSearch 'Peptide Shop Deutschland reddit erfahrung/betrug/scam', 'site:reddit.com peptideshopdeutschland', keine Treffer",
          "datum": "2026-09-15",
          "art": "community"
        },
        {
          "text": "2 der 12 Kern-Peptide (Tesamorelin, Epitalon) unter den erwarteten URL-Slugs nicht als Produkt auffindbar (Redirect auf /shop/): entweder nie im Sortiment oder unter anderem Namen gelistet, nicht abschließend geprüft",
          "text_en": "2 of the 12 core peptides (Tesamorelin, Epitalon) could not be found as a product under the expected URL slugs (redirect to /shop/): either never in the range or listed under a different name; not conclusively checked.",
          "quelle": "direkte Prüfung 15.09.2026",
          "datum": "2026-09-15",
          "art": "belegt"
        }
      ],
      "aenderungen": [
        {
          "text": "Domain-Status: erreichbar (HTTP 200, aktiver WooCommerce-Shop), kein Redirect, keine Parking-Page: widerspricht der vorherigen Notiz 'Domain 06.09. nicht erreichbar' (peptidcheck24-Quelle), verifiziert am 15.09.2026",
          "text_en": "Domain status: reachable (HTTP 200, active WooCommerce shop), no redirect, no parking page: this contradicts the previous note 'domain not reachable on Sep 6' (peptidcheck24 source), verified on Sep 15, 2026.",
          "quelle": "direkte Prüfung 15.09.2026",
          "datum": "2026-09-15"
        },
        {
          "text": "Linkfarm-Charakter (ca. 70 Fremdshops verlinkt) konnte am 15.09. NICHT reproduziert werden: nur 3 externe Domains auf der Startseite gefunden (fonts.googleapis.com, ncbi.nlm.nih.gov, plus ein nicht klar zuordenbarer Treffer). Entweder wurde die Linkfarm entfernt/der Shop umgebaut, oder die ursprüngliche Beobachtung bezog sich auf einen anderen Zustand der Seite, nicht abschließend geklärt, ungeprüfter Punkt",
          "text_en": "The link-farm character (roughly 70 external shops linked) could NOT be reproduced on Sep 15: only 3 external domains were found on the homepage (fonts.googleapis.com, ncbi.nlm.nih.gov, plus one not clearly attributable match). Either the link farm was removed/the shop was rebuilt, or the original observation referred to a different state of the site; not conclusively clarified, an unverified point.",
          "quelle": "direkte Prüfung 15.09.2026",
          "datum": "2026-09-15"
        },
        {
          "text": "Impressum/AGB/Datenschutz FALSE aus der Faktenbasis bestätigt sich weiterhin auch nach Reaktivierung des Shops",
          "text_en": "The fact base's Impressum/AGB/Datenschutz = FALSE (legal notice/terms/privacy) continues to be confirmed even after the shop's reactivation.",
          "quelle": "direkte Prüfung 15.09.2026",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": true,
    "preisStand": "2026-09-15"
  },
  {
    "slug": "sera-lab",
    "name": "SERA Lab",
    "website": "https://serapeplab.com/",
    "rechtstraeger": null,
    "sitz": null,
    "land": "INT",
    "gegruendet": null,
    "brand": {
      "farbe": "#1584A0",
      "logo": "assets/img/logos/_wordmarks/sera-lab.svg",
      "logoFallback": "assets/img/logos/_wordmarks/sera-lab.svg",
      "logoQuelle": null
    },
    "score": {
      "labor": null,
      "recht": null,
      "lieferung": null,
      "sortiment": null,
      "preis": null
    },
    "gesamt": null,
    "datenbasis": 0,
    "coa": {
      "oeffentlich": null,
      "extern": null,
      "labor": null,
      "anzahl": null
    },
    "reinheit": null,
    "rechtsrahmen": {
      "altersgate": null,
      "ruo": null,
      "impressum": null,
      "heilversprechen": null
    },
    "versand": {
      "tageMin": null,
      "tageMax": null,
      "laender": []
    },
    "zahlung": [],
    "affiliate": null,
    "affiliateProgrammUrl": null,
    "provision": null,
    "rabatt": null,
    "produkte": [],
    "preisProMg": null,
    "affiliateUrl": "https://serapeplab.com/",
    "kurz": "Sitz nicht ermittelbar. Versand nach DACH nicht ermittelbar. CoA-Status nicht ermittelbar.",
    "kurz_en": "Registered address not ascertainable. Shipping to Germany/Austria/Switzerland not ascertainable. CoA status not ascertainable.",
    "staerken": [],
    "staerken_en": [],
    "schwaechen": [
      "Rechtsträger nicht ermittelbar (Stand 06.09.2026)"
    ],
    "schwaechen_en": [
      "Legal entity not ascertainable (as of Sep 6, 2026)"
    ],
    "roteFlaggen": [
      "Domain leitet auf wechselnde Fremdshops um"
    ],
    "roteFlaggen_en": [
      "domain redirects to changing third-party shops"
    ],
    "quelle": "eigene Prüfung 06.09.2026",
    "stand": "2026-09-06",
    "demo": false,
    "status": "inaktiv",
    "statusGrund": "Domain serapeplab.com zeigt eine leere Hostinger-Parkseite ohne Shop-Inhalt, HTTPS technisch defekt (Stand 15.09.2026).",
    "statusGrund_en": "The domain serapeplab.com shows an empty Hostinger parking page with no shop content, HTTPS is technically broken (as of Sep 15, 2026).",
    "recherche": {
      "stand": "2026-09-15",
      "staerken": [],
      "schwaechen": [
        {
          "text": "Domain serapeplab.com liefert aktuell (15.09.2026, zweifach geprueft im Abstand von 20 Sekunden) keinen Shop-Inhalt mehr, sondern eine generische Hostinger-Parkseite (Titel: \"Parked Domain name on Hostinger DNS system\"). Weder die Startseite noch ehemals ueber Google indexierte Produktseiten (z.B. /product/tesamorelin-kaufen/) liefern noch Inhalt.",
          "text_en": "The domain serapeplab.com currently (Sep 15, 2026, checked twice 20 seconds apart) no longer serves any shop content, but a generic Hostinger parking page (title: \"Parked Domain name on Hostinger DNS system\"). Neither the homepage nor formerly Google-indexed product pages (e.g. /product/tesamorelin-kaufen/) return any content.",
          "quelle": "direkte Pruefung 15.09.2026 (curl -IL/-L auf https://serapeplab.com/ und http://serapeplab.com/product/tesamorelin-kaufen/)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "HTTPS-Verbindung zur Domain schlaegt mit TLS-Handshake-Fehler fehl (LibreSSL error:1404B438, ST_CONNECT tlsv1 alert internal error); nur HTTP (Port 80) liefert eine Antwort. Fuer einen Online-Shop ist das ein Zertifikats-/Infrastruktur-Problem.",
          "text_en": "The HTTPS connection to the domain fails with a TLS handshake error (LibreSSL error:1404B438, ST_CONNECT tlsv1 alert internal error); only HTTP (port 80) returns a response. For an online shop this is a certificate/infrastructure problem.",
          "quelle": "direkte Pruefung 15.09.2026 (curl -IL https://serapeplab.com/)",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "ScamAdviser stuft serapeplab.com als 'Likely Safe' ein, aber mit sehr niedrigem Trust Score 13/100 ('average trust score'). Negative Highlights laut ScamAdviser: geringer Traffic (niedriges Tranco-Ranking), Domain erst kuerzlich (neu) registriert, Content der Seite konnte von ScamAdviser nicht analysiert werden (deckt sich mit dem Befund der leeren Parkseite).",
          "text_en": "ScamAdviser rates serapeplab.com as 'Likely Safe', but with a very low trust score of 13/100 ('average trust score'). Negative highlights per ScamAdviser: low traffic (low Tranco ranking), a recently registered domain, and page content that ScamAdviser could not analyze (consistent with the finding of the empty parking page).",
          "quelle": "https://www.scamadviser.com/check-website/serapeplab.com",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Google-Suchindex zeigt noch alte, gecachte Produktseiten mit deutschsprachigen Titeln ('Tesamorelin kaufen | SERA Lab', 'PT-141 kaufen | SERA Lab', 'AOD 9604 kaufen') samt positiv klingender Kunden-Testimonials -- diese stammen jedoch laut Web-Suchergebnis-Zusammenfassung von der Anbieter-eigenen Website selbst (Eigenwerbung, keine unabhaengige Bewertungsplattform) und sind aktuell (15.09.2026) nicht mehr live abrufbar, da die Domain auf die Hostinger-Parkseite zeigt. Einordnung als 'community' entfaellt, da keine echte unabhaengige Quelle vorliegt.",
          "text_en": "The Google search index still shows old, cached product pages with German-language titles ('Tesamorelin kaufen | SERA Lab', 'PT-141 kaufen | SERA Lab', 'AOD 9604 kaufen') along with positive-sounding customer testimonials - however, per the search result summary these originate from the vendor's own website (self-promotion, not an independent review platform) and are currently (Sep 15, 2026) no longer reachable live, since the domain points to the Hostinger parking page. Classification as 'community' does not apply, since no genuinely independent source is available.",
          "quelle": "Google-Suchindex (WebSearch, Stand 14.09.2026), nicht mehr live verifizierbar",
          "datum": "2026-09-14",
          "art": "community"
        },
        {
          "text": "Keine Reddit- oder Forums-Diskussion zu 'SERA Lab' / 'serapeplab' auffindbar. Websuche liefert stattdessen Treffer zu einer NICHT identischen anderen Firma ('Sera Peptides Holdings LLC', serapeptides.com, USA) -- Verwechslungsgefahr wird hiermit dokumentiert, aber beide Anbieter sind nicht gleichzusetzen.",
          "text_en": "No Reddit or forum discussion about 'SERA Lab' / 'serapeplab' could be found. The web search instead returned hits for a NOT identical, different company ('Sera Peptides Holdings LLC', serapeptides.com, USA) - this risk of confusion is documented here, but the two vendors should not be equated.",
          "quelle": "WebSearch \"SERA Lab peptides reddit\" und \"serapeplab OR sera peptide lab reviews\", 15.09.2026",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "chemverify.com (Katalog-API, 11 gelistete Vendoren zum Pruefzeitpunkt) fuehrt SERA Lab / serapeplab nicht als Anbieter -- keine unabhaengige Drittpruefung ueber diesen Kanal verfuegbar.",
          "text_en": "chemverify.com (catalog API, 11 listed vendors at the time of the check) does not list SERA Lab / serapeplab as a vendor - no independent third-party verification is available through this channel.",
          "quelle": "https://www.chemverify.com/api/catalog",
          "datum": "2026-09-15",
          "art": "belegt"
        },
        {
          "text": "Wayback-Machine-Verfuegbarkeits-API nennt als letzten bekannten archivierten Snapshot den 16.06.2026 (Status 200) -- die vollstaendige CDX-Zeitleiste war zum Pruefzeitpunkt wegen 'Internet Archive: Temporarily Offline' nicht abrufbar, sodass der genaue Zeitpunkt des Wechsels von (mutmasslich) eigenem Shop -> wechselnde Fremdshops (Stand 06.09.2026 laut Faktenbasis) -> jetzige Hostinger-Parkseite (15.09.2026) nicht lueckenlos rekonstruierbar ist.",
          "text_en": "The Wayback Machine availability API names Jun 16, 2026 (status 200) as the last known archived snapshot - the full CDX timeline was unavailable at the time of the check due to 'Internet Archive: Temporarily Offline', so the exact timing of the transition from a (presumed) own shop -> rotating third-party shops (per the Sep 6, 2026 fact base) -> the current Hostinger parking page (Sep 15, 2026) cannot be fully reconstructed.",
          "quelle": "http://archive.org/wayback/available?url=serapeplab.com, http://web.archive.org/cdx/search/cdx?url=serapeplab.com (Internet Archive zeitweise offline)",
          "datum": "2026-09-15",
          "art": "belegt"
        }
      ],
      "aenderungen": [
        {
          "text": "Domain-Status: NICHT mehr 'leitet auf wechselnde Fremdshops um' (wie am 06.09.2026 dokumentiert), sondern jetzt reine Hostinger-Parkseite ohne jeglichen Shop-Inhalt -- verifiziert am 15.09.2026 (zwei curl-Checks im Abstand von 20s, identisches Ergebnis).",
          "text_en": "Domain status: NO LONGER 'redirects to rotating third-party shops' (as documented on Sep 6, 2026), but now a plain Hostinger parking page with no shop content whatsoever - verified on Sep 15, 2026 (two curl checks 20 seconds apart, identical result).",
          "quelle": "direkte Pruefung 15.09.2026",
          "datum": "2026-09-15"
        },
        {
          "text": "HTTPS nicht erreichbar (TLS-Fehler), nur HTTP liefert die Parkseite -- verifiziert am 15.09.2026.",
          "text_en": "HTTPS unreachable (TLS error), only HTTP serves the parking page - verified on Sep 15, 2026.",
          "quelle": "direkte Pruefung 15.09.2026",
          "datum": "2026-09-15"
        },
        {
          "text": "ScamAdviser-Trust-Score erstmals erhoben: 13/100 ('Likely Safe', aber ausdruecklich als niedrig/average eingestuft, Content nicht analysierbar).",
          "text_en": "ScamAdviser trust score recorded for the first time: 13/100 ('Likely Safe', but explicitly rated as low/average, page content not analyzable).",
          "quelle": "https://www.scamadviser.com/check-website/serapeplab.com",
          "datum": "2026-09-15"
        }
      ]
    },
    "rankbar": false,
    "preisStand": null
  }
];
