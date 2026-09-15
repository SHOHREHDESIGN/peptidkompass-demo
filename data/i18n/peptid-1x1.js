/* ============================================================================
   PEPTIDKOMPASS · data/i18n/peptid-1x1.js
   ============================================================================
   Seiten-Wörterbuch für peptid-1x1.html. Schlüssel-Präfix
   "page.peptid-1x1.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.

   Lernen-Hub (15.09.2026): neutrale Grundlagenseite für Einsteiger, 9
   Abschnitte + Glossar. Siehe methodik.html (Sektions-/Tint-Muster) und
   studien.html (Kopf-/visual-band-Muster) als Vorlage.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.peptid-1x1.title": "Peptid 1x1 · Peptide Compass",
    "page.peptid-1x1.metaDescription": "Die Grundlagen zu Peptiden für den Einstieg: was ein Peptid ist, was RUO bedeutet, wie du Reinheit und CoA liest und worauf du bei einem Anbieter achtest. Nur für Forschungszwecke.",
    "page.peptid-1x1.ogTitle": "Peptid 1x1 · Peptide Compass",
    "page.peptid-1x1.ogDescription": "Die Grundlagen zu Peptiden für Einsteiger: Reinheit, CoA, Chargen und Anbieter-Check einfach erklärt.",

    "page.peptid-1x1.eyebrow": "Lernen",
    "page.peptid-1x1.h1": "Peptid 1x1",
    "page.peptid-1x1.lead": "Die Grundlagen für den Einstieg: was ein Peptid ist, was RUO bedeutet und worauf du bei Reinheit, CoA und Anbietern achtest.",
    "page.peptid-1x1.bandImgAlt": "Kristalline Struktur unter wissenschaftlicher Prüfung",

    "page.peptid-1x1.s1H2": "Was Peptide sind",
    "page.peptid-1x1.s1Body": "Ein Peptid ist eine kurze Kette aus Aminosäuren, verbunden über eine Peptidbindung. Die Länge entscheidet über die Einordnung: Zwei Aminosäuren ergeben ein Dipeptid, bis zu etwa 50 ein Polypeptid. Ab mehr als 50 Aminosäuren und einer festen dreidimensionalen Struktur sprechen Forscher von einem Protein. Peptide sind also die kleinere, oft noch ungefaltete Vorstufe auf derselben Skala. Davon zu unterscheiden sind kleine Moleküle: Substanzen ohne Aminosäurekette, chemisch anders aufgebaut und meist deutlich leichter. Diese drei Kategorien, Aminosäure, Peptid, Protein, bilden das Grundgerüst, mit dem die gesamte Forschung an diesen Molekülen arbeitet.",

    "page.peptid-1x1.s2H2": "Forschungschemikalien und der Rechtsrahmen",
    "page.peptid-1x1.s2Body": "Die meisten Peptide auf dieser Seite tragen die Kennzeichnung RUO, research use only. Das bedeutet: Der Hersteller stellt sie ausschließlich für Labor- und Forschungszwecke her, nicht als Arzneimittel und nicht zur Anwendung am Menschen. In Deutschland und der EU sind diese Substanzen entsprechend nicht als Medikament zugelassen, eine pharmazeutische Prüfung wie bei zugelassenen Wirkstoffen hat nicht stattgefunden. Seriöse Anbieter machen das sichtbar: RUO-Hinweis auf jeder Produktseite, kein Verkauf an Minderjährige, ein vollständiges Impressum. Peptide Compass listet ausschließlich Anbieter mit Altersgate ab 18 Jahren und ohne Heilversprechen auf der Shop-Seite, das prüfen wir als Teil unserer Methodik.",

    "page.peptid-1x1.s3H2": "Reinheit verstehen",
    "page.peptid-1x1.s3Body": "Reinheit ist die zentrale Qualitätskennzahl bei Peptiden und wird meist per HPLC ermittelt, einer Analysemethode, die die Bestandteile einer Probe auftrennt und ihren Anteil misst. Eine Angabe von 98 % Reinheit bedeutet: 98 % der gemessenen Substanz entsprechen dem erwarteten Peptid, der Rest sind Verunreinigungen oder Abbauprodukte. Wichtig ist der Unterschied zwischen Reinheit und Identität. Reinheit sagt, wie sauber eine Probe ist, Identität sagt, ob es überhaupt das richtige Molekül ist. Für die Identität kommt oft LC-MS zum Einsatz, eine Kombination aus Flüssigchromatographie und Massenspektrometrie, die das Molekulargewicht bestätigt. Ein hoher Reinheitswert ohne Identitätsnachweis sagt am Ende wenig aus, beides gehört zusammen.",

    "page.peptid-1x1.s4H2": "Was ein CoA ist",
    "page.peptid-1x1.s4Body": "Ein CoA, Certificate of Analysis, ist der Prüfbericht zu einer bestimmten Charge. Fünf Angaben lohnen einen zweiten Blick. Die Chargennummer muss zum Produkt passen, das du in der Hand hast. Der Name des Labors zeigt, ob unabhängig getestet wurde oder shop-intern. Das Prüfdatum sagt, wie aktuell der Bericht ist, ein CoA von vor zwei Jahren sagt nichts über die aktuelle Charge. Der Endotoxin-Wert misst bakterielle Rückstände aus der Herstellung, ein niedriger Wert spricht für eine saubere Produktion. Die Schwermetall-Werte (Blei, Arsen, Cadmium) zeigen, ob Rückstände aus dem Herstellungsprozess in der Probe stecken. Fehlen diese Angaben komplett, ist das selbst schon eine Information.",

    "page.peptid-1x1.s5H2": "Externe vs. interne Labore",
    "page.peptid-1x1.s5Body": "Ein CoA kann von zwei Seiten kommen. Interne Tests führt der Anbieter selbst durch oder lässt sie im eigenen Auftrag ohne unabhängige Kontrolle erstellen. Externe Tests kommen von einem Labor, das keine geschäftliche Beziehung zum Hersteller hat und die Probe unabhängig prüft. Der Unterschied liegt im Anreiz: Ein unabhängiges Labor hat kein Interesse an einem bestimmten Ergebnis. In der Szene taucht dabei häufig der Name Janoshik auf, ein slowakisches Labor, das viele Anbieter für externe Prüfungen nennen. Das ist keine Empfehlung unsererseits, nur eine Einordnung: Wenn ein CoA ein externes Labor nennt, lohnt sich ein Blick, ob der Name überhaupt nachprüfbar existiert.",

    "page.peptid-1x1.s6H2": "Chargen und Rückverfolgbarkeit",
    "page.peptid-1x1.s6Pre": "Jede seriöse Produktion vergibt eine Chargennummer, meist aufgedruckt auf dem Vial-Etikett. Sie verbindet ein einzelnes Fläschchen mit einem bestimmten Herstellungslauf und dem dazugehörigen CoA. Damit lässt sich im Zweifel zurückverfolgen, wann und mit welchem Ergebnis eine Charge geprüft wurde. Ohne Chargennummer ist ein CoA wertlos, du kannst nicht mehr zuordnen, ob der Prüfbericht überhaupt zu deinem Produkt gehört. Mit unserem ",
    "page.peptid-1x1.s6Link": "Chargen-Check",
    "page.peptid-1x1.s6Post": " kannst du eine Chargennummer gegen die von uns erfassten CoAs abgleichen und siehst auf einen Blick, ob eine Prüfung dazu vorliegt.",

    "page.peptid-1x1.s7H2": "Lagerung und Haltbarkeit",
    "page.peptid-1x1.s7Body": "Die meisten Peptide werden lyophilisiert geliefert, also gefriergetrocknet als Pulver. In dieser Form sind sie deutlich stabiler als in flüssiger Lösung. Zwei Faktoren wirken sich besonders aus: Wärme und Licht. Ungeöffnet und kühl gelagert bleibt ein lyophilisiertes Peptid über längere Zeit stabil, direkte Sonneneinstrahlung und Temperaturschwankungen beschleunigen dagegen den Abbau. Sobald ein Peptid rekonstituiert, also in Flüssigkeit gelöst wurde, ändert sich das Bild: Die Haltbarkeit sinkt spürbar, und Temperaturschwankungen wirken sich stärker aus als im Pulverzustand. Seriöse Anbieter nennen konkrete Lagerhinweise auf dem Etikett oder im Produktdatenblatt, das lohnt sich vor dem Kauf zu prüfen.",

    "page.peptid-1x1.s8H2": "Preise vergleichen",
    "page.peptid-1x1.s8Pre": "Der Vial-Aufdruck zeigt oft nur die Gesamtmenge, zum Beispiel 5 mg oder 10 mg, nicht den eigentlichen Preis. Aussagekräftig wird ein Angebot erst im Preis pro Milligramm, denn nur so lassen sich unterschiedliche Vial-Größen und Anbieter direkt vergleichen. Der Listenpreis ist zudem selten der tatsächliche Preis: Rabattcodes und Aktionen verschieben das Bild oft deutlich, ein vermeintlich teurer Anbieter kann mit Code günstiger sein als ein billig wirkender ohne. Und Versandkosten gehören mit in die Rechnung, gerade bei kleinen Bestellmengen können sie den Preisvorteil auffressen. Unser ",
    "page.peptid-1x1.s8Link": "Anbietervergleich",
    "page.peptid-1x1.s8Post": " rechnet Preis pro mg für dich durch, inklusive aktueller Codes.",

    "page.peptid-1x1.s9H2": "Anbieter bewerten",
    "page.peptid-1x1.s9Pre": "Bevor du einem Anbieter vertraust, lohnen sich ein paar schnelle Checks. Steht ein vollständiges Impressum auf der Seite, mit ladungsfähiger Anschrift? Gibt es ein Altersgate, das den Zugang auf 18 Jahre und älter beschränkt? Welche Zahlungsarten werden akzeptiert, seriöse Anbieter bieten meist mehr als nur Krypto? Und: Was sagen andere über den Shop, in Foren oder Bewertungen, und lässt sich das mit echten CoAs belegen, oder bleibt es bei der reinen Meinung? Eine gute Bewertung ohne Beleg wiegt wenig, ein CoA mit nachprüfbarer Chargennummer dagegen viel. Genau diese Fragen fließen in unsere fünf Kriterien ein: Labor, Rechtsrahmen, Lieferung, Sortiment und Preis. Die genaue Gewichtung erklären wir in unserer ",
    "page.peptid-1x1.s9Link": "Methodik",
    "page.peptid-1x1.s9Post": ".",

    "page.peptid-1x1.glossaryEyebrow": "Glossar",
    "page.peptid-1x1.glossaryH2": "Die wichtigsten Begriffe",
    "page.peptid-1x1.gRuoTerm": "RUO",
    "page.peptid-1x1.gRuoDef": "Research Use Only, die Kennzeichnung für Substanzen, die ausschließlich für Labor- und Forschungszwecke bestimmt sind.",
    "page.peptid-1x1.gCoaTerm": "CoA",
    "page.peptid-1x1.gCoaDef": "Certificate of Analysis, der Prüfbericht zu einer bestimmten Charge.",
    "page.peptid-1x1.gHplcTerm": "HPLC",
    "page.peptid-1x1.gHplcDef": "Hochleistungsflüssigchromatographie, die Analysemethode zur Bestimmung der Reinheit einer Probe.",
    "page.peptid-1x1.gLcmsTerm": "LC-MS",
    "page.peptid-1x1.gLcmsDef": "Kombination aus Flüssigchromatographie und Massenspektrometrie, bestätigt die Identität eines Moleküls über sein Molekulargewicht.",
    "page.peptid-1x1.gChargeTerm": "Charge (Batch)",
    "page.peptid-1x1.gChargeDef": "Eine einzelne Produktionsmenge, gekennzeichnet durch eine eigene Chargennummer.",
    "page.peptid-1x1.gLyoTerm": "Lyophilisiert",
    "page.peptid-1x1.gLyoDef": "Gefriergetrocknet, die haltbarste Lagerform eines Peptids als Pulver.",
    "page.peptid-1x1.gRekoTerm": "Rekonstituiert",
    "page.peptid-1x1.gRekoDef": "In Flüssigkeit gelöst, ab diesem Zeitpunkt sinkt die Haltbarkeit spürbar.",
    "page.peptid-1x1.gEndoTerm": "Endotoxin",
    "page.peptid-1x1.gEndoDef": "Bakterielles Rückstandsprodukt aus der Herstellung, im CoA als eigener Wert ausgewiesen.",
    "page.peptid-1x1.gAsTerm": "Aminosäurekette",
    "page.peptid-1x1.gAsDef": "Die Grundstruktur eines Peptids, verbunden über Peptidbindungen.",
    "page.peptid-1x1.gPurIdTerm": "Reinheit vs. Identität",
    "page.peptid-1x1.gPurIdDef": "Reinheit misst, wie sauber eine Probe ist, Identität, ob es überhaupt das richtige Molekül ist."
  });

  i18n.merge("en", {
    "page.peptid-1x1.title": "Peptides 101 · Peptide Compass",
    "page.peptid-1x1.metaDescription": "The basics for getting started with peptides: what a peptide is, what RUO means, how to read purity and CoAs, and what to check before choosing a vendor. Research use only.",
    "page.peptid-1x1.ogTitle": "Peptides 101 · Peptide Compass",
    "page.peptid-1x1.ogDescription": "The basics of peptides for beginners: purity, CoAs, batches, and vendor checks explained plainly.",

    "page.peptid-1x1.eyebrow": "Learn",
    "page.peptid-1x1.h1": "Peptides 101",
    "page.peptid-1x1.lead": "The basics for getting started: what a peptide is, what RUO means, and what to look for in purity, CoAs, and vendors.",
    "page.peptid-1x1.bandImgAlt": "Crystalline structure under scientific review",

    "page.peptid-1x1.s1H2": "What peptides are",
    "page.peptid-1x1.s1Body": "A peptide is a short chain of amino acids linked by a peptide bond. Chain length determines how it's classified: two amino acids form a dipeptide, up to roughly 50 a polypeptide. Above 50 amino acids, once the chain folds into a fixed three-dimensional shape, researchers call it a protein. Peptides sit on the same scale as proteins, just smaller and often still unfolded. Small molecules are a different category altogether: no amino acid chain, a different chemical structure, and usually far lighter. Amino acid, peptide, protein: these three categories form the basic framework the entire field works with.",

    "page.peptid-1x1.s2H2": "Research chemicals and the legal framework",
    "page.peptid-1x1.s2Body": "Most peptides on this site carry an RUO label, research use only. That means the manufacturer makes them strictly for laboratory and research purposes, not as a drug and not for use in humans. In Germany and the EU, these substances are correspondingly not approved as medication; they haven't gone through the pharmaceutical review that approved drugs undergo. Reputable vendors make that visible: an RUO notice on every product page, no sales to minors, a complete legal notice. Peptide Compass only lists vendors that gate access at 18 and make no health claims on their shop page, that's part of what we check.",

    "page.peptid-1x1.s3H2": "Understanding purity",
    "page.peptid-1x1.s3Body": "Purity is the key quality metric for peptides and is usually measured by HPLC, an analytical method that separates the components of a sample and quantifies each one. A 98% purity figure means 98% of the measured substance matches the expected peptide, with the rest being impurities or degradation products. There's an important distinction between purity and identity. Purity tells you how clean a sample is; identity tells you whether it's the right molecule at all. Identity is often confirmed with LC-MS, a combination of liquid chromatography and mass spectrometry that verifies molecular weight. A high purity figure without an identity check doesn't tell you much on its own, you need both.",

    "page.peptid-1x1.s4H2": "What a CoA is",
    "page.peptid-1x1.s4Body": "A CoA, Certificate of Analysis, is the test report for a specific batch. Five details are worth a second look. The batch number needs to match the product you're actually holding. The lab name shows whether testing was independent or done in-house. The test date tells you how current the report is, a CoA from two years ago says nothing about today's batch. The endotoxin value measures bacterial residue from manufacturing, a low number points to clean production. Heavy metal values (lead, arsenic, cadmium) show whether manufacturing residue made it into the sample. If these details are missing entirely, that's already telling you something.",

    "page.peptid-1x1.s5H2": "Third-party vs. in-house labs",
    "page.peptid-1x1.s5Body": "A CoA can come from two directions. In-house tests are run by the vendor itself, or commissioned by them without independent oversight. Third-party tests come from a lab with no business relationship to the manufacturer, testing the sample independently. The difference is in the incentive: an independent lab has no stake in a particular result. One name that comes up often in this space is Janoshik, a Slovak lab many vendors cite for third-party testing. That's not a recommendation from us, just context: when a CoA names an external lab, it's worth checking whether that name actually exists and can be verified.",

    "page.peptid-1x1.s6H2": "Batches and traceability",
    "page.peptid-1x1.s6Pre": "Legitimate production runs assign a batch number, usually printed on the vial label. It links a single vial to a specific manufacturing run and the CoA that belongs to it. That makes it possible to trace back when a batch was tested and what the result was. Without a batch number, a CoA is worthless, you can no longer confirm the report actually belongs to your product. Our ",
    "page.peptid-1x1.s6Link": "batch check",
    "page.peptid-1x1.s6Post": " lets you match a batch number against the CoAs we've recorded, so you can see at a glance whether a test exists for it.",

    "page.peptid-1x1.s7H2": "Storage and shelf life",
    "page.peptid-1x1.s7Body": "Most peptides ship lyophilized, meaning freeze-dried into a powder. In that form, they're substantially more stable than in liquid solution. Two factors matter most: heat and light. Kept sealed and cool, a lyophilized peptide stays stable for a good while; direct sunlight and temperature swings speed up degradation. Once a peptide is reconstituted, dissolved into liquid, the picture changes: shelf life drops noticeably, and temperature swings affect it more than they do in powder form. Reputable vendors state specific storage details on the label or product sheet, worth checking before you buy.",

    "page.peptid-1x1.s8H2": "Comparing prices",
    "page.peptid-1x1.s8Pre": "The vial label often shows only the total amount, say 5 mg or 10 mg, not the actual price. A listing only becomes meaningful once you look at price per milligram, since that's the only way to compare different vial sizes and vendors directly. The list price is rarely the real price either: discount codes and promotions shift the picture substantially, a vendor that looks expensive can end up cheaper with a code than one that looks cheap without. And shipping costs belong in the math too, especially on small orders where they can eat up the price advantage. Our ",
    "page.peptid-1x1.s8Link": "vendor comparison",
    "page.peptid-1x1.s8Post": " runs the price-per-mg math for you, current codes included.",

    "page.peptid-1x1.s9H2": "Evaluating vendors",
    "page.peptid-1x1.s9Pre": "Before trusting a vendor, a few quick checks are worth your time. Is there a complete legal notice on the site, with a real, serviceable address? Is there an age gate that limits access to 18 and older? What payment methods are accepted, reputable vendors usually offer more than just crypto? And: what do others say about the shop, in forums or reviews, and can that be backed up with real CoAs, or does it stay at opinion? A good review with no evidence behind it carries little weight; a CoA with a verifiable batch number carries a lot. These are exactly the questions behind our five criteria: lab quality, legal framework, shipping, range, and price. The exact weighting is explained in our ",
    "page.peptid-1x1.s9Link": "methodology",
    "page.peptid-1x1.s9Post": ".",

    "page.peptid-1x1.glossaryEyebrow": "Glossary",
    "page.peptid-1x1.glossaryH2": "The key terms",
    "page.peptid-1x1.gRuoTerm": "RUO",
    "page.peptid-1x1.gRuoDef": "Research Use Only, the label for substances intended strictly for laboratory and research purposes.",
    "page.peptid-1x1.gCoaTerm": "CoA",
    "page.peptid-1x1.gCoaDef": "Certificate of Analysis, the test report for a specific batch.",
    "page.peptid-1x1.gHplcTerm": "HPLC",
    "page.peptid-1x1.gHplcDef": "High-performance liquid chromatography, the analytical method used to determine a sample's purity.",
    "page.peptid-1x1.gLcmsTerm": "LC-MS",
    "page.peptid-1x1.gLcmsDef": "A combination of liquid chromatography and mass spectrometry that confirms a molecule's identity via its molecular weight.",
    "page.peptid-1x1.gChargeTerm": "Batch",
    "page.peptid-1x1.gChargeDef": "A single production run, identified by its own batch number.",
    "page.peptid-1x1.gLyoTerm": "Lyophilized",
    "page.peptid-1x1.gLyoDef": "Freeze-dried, the most stable storage form for a peptide as a powder.",
    "page.peptid-1x1.gRekoTerm": "Reconstituted",
    "page.peptid-1x1.gRekoDef": "Dissolved into liquid, the point at which shelf life starts dropping noticeably.",
    "page.peptid-1x1.gEndoTerm": "Endotoxin",
    "page.peptid-1x1.gEndoDef": "A bacterial residue from manufacturing, listed as its own value on a CoA.",
    "page.peptid-1x1.gAsTerm": "Amino acid chain",
    "page.peptid-1x1.gAsDef": "The basic structure of a peptide, linked together by peptide bonds.",
    "page.peptid-1x1.gPurIdTerm": "Purity vs. identity",
    "page.peptid-1x1.gPurIdDef": "Purity measures how clean a sample is; identity, whether it's the right molecule at all."
  });

})(window.PK.i18n);
