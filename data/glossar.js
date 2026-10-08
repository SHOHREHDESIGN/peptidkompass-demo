/* ============================================================================
   PEPTIDKOMPASS · data/glossar.js
   ============================================================================
   GENERIERT von tools/build_glossar.py aus data/glossar_draft/*.json + den 31
   Wirkstoffen (data/peptides.js). Nicht von Hand editieren - Änderungen gehen
   beim nächsten Lauf verloren. Quelle für glossar.html/en/glossar.html sowie
   für künftige clientseitige Nutzung (aktuell rendert glossar.html den Inhalt
   bereits vollständig statisch, siehe Kopfkommentar in tools/build_glossar.py).
   ============================================================================ */
window.PK = window.PK || {};
window.PK.glossar = [
 {
  "slug": "5-amino-1mq",
  "begriff": "5-Amino-1MQ",
  "begriff_en": "5-Amino-1MQ",
  "kategorie": "wirkstoff",
  "kurz": "Kleines Molekül, in präklinischen Modellen als NNMT-Hemmstoff untersucht. Kein Peptid.",
  "kurz_en": "Small molecule investigated as an NNMT inhibitor in preclinical models. Not a peptide.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 29155147",
    "titel_en": "PubMed: Research publication, PMID 29155147",
    "url": "https://pubmed.ncbi.nlm.nih.gov/29155147/"
   }
  ],
  "text": "Die verlinkte Originalarbeit untersucht kleine NNMT-Hemmstoffe in Zelltests und einem ernährungsbedingten Adipositasmodell bei Mäusen. Sie liefert keine klinischen Daten zur Anwendung von Shopprodukten.",
  "text_en": "The linked original paper investigates small-molecule NNMT inhibitors in cellular assays and a diet-induced obesity model in mice. It does not provide clinical evidence for the use of shop products.",
  "synonyme": [
   "5-Amino 1MQ",
   "5A1MQ",
   "NNMT-Inhibitor"
  ],
  "synonyme_en": [
   "5-Amino 1MQ",
   "5A1MQ",
   "NNMT inhibitor"
  ],
  "link": "wirkstoffe/5-amino-1mq.html"
 },
 {
  "slug": "affiliate-link",
  "begriff": "Affiliate-Link",
  "begriff_en": "Affiliate link",
  "kategorie": "vergleich",
  "kurz": "Ein Affiliate-Link führt zu einem externen Shop und kann bei einem Kauf eine Provision auslösen.",
  "kurz_en": "An affiliate link leads to an external shop and may trigger a commission on a purchase.",
  "quellen": [
   {
    "titel": "Peptide Compass: Eigener Affiliate-Hinweis",
    "titel_en": "Peptide Compass: Our affiliate disclosure",
    "url": "https://peptidkompass.com/affiliate-hinweis.html"
   }
  ],
  "text": "Affiliate-Links sind direkt am Link mit dem Hinweis Anzeige gekennzeichnet und tragen zusätzlich das Attribut sponsored nofollow. Die Kennzeichnung gilt auch für Shoplinks ohne bestätigte Partnerschaft. Partnerstatus und eine mögliche Provision verändern die Bewertung eines Anbieters nicht.",
  "text_en": "Affiliate links carry an Ad label directly at the link and additionally use the sponsored nofollow attribute. The label applies even to shop links without a confirmed partnership. Partner status and a possible commission do not change how a vendor is evaluated.",
  "siehe": [
   "partnercode"
  ],
  "seiten": [
   "affiliate-hinweis.html"
  ]
 },
 {
  "slug": "agonist",
  "begriff": "Agonist",
  "begriff_en": "Agonist",
  "kategorie": "grundlagen",
  "kurz": "Ein Molekül, das an einen Rezeptor bindet und dessen Signalkette auslöst. Gegenteil: Antagonist.",
  "kurz_en": "A molecule that binds a receptor and triggers its signalling chain. Opposite: antagonist.",
  "quellen": [
   {
    "titel": "NCI: agonist",
    "titel_en": "NCI: agonist",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/agonist"
   }
  ],
  "text": "Ein Agonist bindet an einen Rezeptor und aktiviert die daran gekoppelte Signalkette in der Zelle, vergleichbar mit einem Schlüssel, der ein Schloss aufschließt. Das Gegenstück ist der Antagonist: Er bindet zwar ebenfalls an den Rezeptor, löst aber keine Signalkette aus und blockiert dadurch den Platz für einen Agonisten. In Studien werden beide Rollen genutzt, um Rezeptor-Signalwege gezielt zu untersuchen.",
  "text_en": "An agonist binds to a receptor and activates the signalling chain linked to it, similar to a key unlocking a lock. The counterpart is an antagonist: it also binds the receptor but does not trigger a signalling chain, instead occupying the site and blocking an agonist from binding. Studies use both roles to probe receptor signalling pathways in a targeted way.",
  "siehe": [
   "rezeptor",
   "analogon"
  ]
 },
 {
  "slug": "aliquot",
  "begriff": "Aliquot",
  "begriff_en": "Aliquot",
  "kategorie": "handhabung",
  "kurz": "Ein Aliquot ist eine kleine, abgemessene Teilmenge aus einer größeren Laborlösung, meist zur getrennten Aufbewahrung.",
  "kurz_en": "An aliquot is a small, measured portion taken from a larger laboratory solution, usually stored separately.",
  "quellen": [
   {
    "titel": "Hoofnagle et al. (2016): Peptidanalytik und Laborhandhabung",
    "titel_en": "Hoofnagle et al. (2016): Peptide analysis and laboratory handling",
    "url": "https://pubmed.ncbi.nlm.nih.gov/26719571/"
   }
  ],
  "text": "Ein Aliquot ist eine abgeteilte Probe. Getrennte Portionen können wiederholte Temperaturwechsel des gesamten Vorrats vermeiden.",
  "text_en": "An aliquot is a separated sample portion. Separate portions can avoid repeated temperature cycling of the whole stock.",
  "siehe": [
   "vial",
   "konzentration",
   "sterilitaet"
  ]
 },
 {
  "slug": "aminosaeure",
  "begriff": "Aminosäure",
  "begriff_en": "Amino acid",
  "kategorie": "grundlagen",
  "kurz": "Der Grundbaustein, aus dem Peptide und Proteine über Peptidbindungen aufgebaut sind.",
  "kurz_en": "The basic building block that peptides and proteins are assembled from via peptide bonds.",
  "quellen": [
   {
    "titel": "NCI: amino acid",
    "titel_en": "NCI: amino acid",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/amino-acid"
   }
  ],
  "text": "Aminosäuren enthalten eine Amino- und eine Carboxylgruppe. Für Proteine werden gewöhnlich 20 Standardaminosäuren beschrieben. Über Peptidbindungen entstehen Ketten; ihre Reihenfolge heißt Sequenz.",
  "text_en": "Amino acids contain an amino group and a carboxyl group. Proteins are commonly described using 20 standard amino acids. Peptide bonds join them into chains; their order is called the sequence.",
  "synonyme": [
   "Aminosäuren"
  ],
  "synonyme_en": [
   "Amino acids"
  ],
  "siehe": [
   "peptid",
   "peptidbindung",
   "sequenz"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "analogon",
  "begriff": "Analogon",
  "begriff_en": "Analogue",
  "kategorie": "grundlagen",
  "kurz": "Eine synthetisch veränderte Variante eines körpereigenen Peptids mit leicht abweichender Struktur.",
  "kurz_en": "A synthetically modified variant of an endogenous peptide with a slightly altered structure.",
  "quellen": [
   {
    "titel": "EMA: Semaglutid als GLP-1-Analogon",
    "titel_en": "EMA: Semaglutide as a GLP-1 analogue",
    "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/ozempic"
   }
  ],
  "text": "Ein Analogon ist eine im Labor hergestellte Variante eines natürlich vorkommenden Peptids, bei der einzelne Aminosäuren ausgetauscht, ergänzt oder entfernt wurden. Solche strukturellen Anpassungen werden in der Forschung genutzt, um Eigenschaften wie Stabilität oder Bindungsverhalten am Rezeptor gezielt zu untersuchen. Ein Beispiel ist Semaglutid als Analogon des körpereigenen Hormons GLP-1.",
  "text_en": "An analogue is a lab-made variant of a naturally occurring peptide in which individual amino acids have been swapped, added or removed. Researchers use such structural changes to study properties like stability or receptor binding behaviour in a targeted way. One example is semaglutide, an analogue of the endogenous hormone GLP-1.",
  "synonyme": [
   "Analoga"
  ],
  "synonyme_en": [
   "Analogues"
  ],
  "siehe": [
   "peptid",
   "fragment",
   "agonist"
  ]
 },
 {
  "slug": "antimikrobielles-peptid",
  "begriff": "Antimikrobielle Peptide",
  "begriff_en": "Antimicrobial peptides",
  "kategorie": "klassen",
  "kurz": "Antimikrobielle Peptide sind Teil der angeborenen Immunabwehr und entstehen auf Haut und Schleimhäuten.",
  "kurz_en": "Antimicrobial peptides are part of innate immune defence, produced in skin and mucous membranes.",
  "quellen": [
   {
    "titel": "NCBI Bookshelf: Angeborene Immunabwehr",
    "titel_en": "NCBI Bookshelf: Innate immune system",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK459455/"
   }
  ],
  "text": "Antimikrobielle Peptide, auch AMPs oder Wirtsabwehrpeptide genannt, sind Teil der angeborenen Immunabwehr. Sie entstehen in Haut- und Schleimhautzellen sowie in Immunzellen und lagern sich in Zellmembranen von Bakterien, Pilzen oder Viren ein. Die bekannteste menschliche Gruppe sind die Cathelicidine, deren einzig aktive Form beim Menschen LL-37 ist. Neben diesem direkten Mechanismus an der Zellmembran werden AMPs auch als Botenstoffe des Immunsystems untersucht.",
  "text_en": "Antimicrobial peptides, also called AMPs or host defence peptides, are part of innate immune defence. They are produced by skin and mucosal cells as well as immune cells and insert into the membranes of bacteria, fungi or viruses. The best-known human group is the cathelicidins, whose only active human form is LL-37. Beyond this direct membrane mechanism, AMPs are also studied as immune system signalling molecules.",
  "synonyme": [
   "AMPs",
   "Wirtsabwehrpeptide"
  ],
  "synonyme_en": [
   "AMPs",
   "Host defence peptides"
  ],
  "siehe": [
   "protein",
   "peptid"
  ],
  "wirkstoffe": [
   "ll-37"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "aod-9604",
  "begriff": "AOD-9604",
  "begriff_en": "AOD-9604",
  "kategorie": "wirkstoff",
  "kurz": "Modifiziertes Fragment des Wachstumshormons, in Stoffwechselstudien untersucht.",
  "kurz_en": "Modified growth hormone fragment investigated in metabolic studies.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 11146367",
    "titel_en": "PubMed: Research publication, PMID 11146367",
    "url": "https://pubmed.ncbi.nlm.nih.gov/11146367/"
   }
  ],
  "text": "Die angeführte Originalarbeit untersucht AOD-9604 an Zucker-Ratten. Aussagen zu diesem Tiermodell lassen sich nicht unmittelbar auf Menschen oder auf Produkte aus dem Forschungshandel übertragen.",
  "text_en": "The cited original paper investigates AOD-9604 in Zucker rats. Findings from this animal model cannot be directly transferred to humans or products sold by research suppliers.",
  "synonyme": [
   "Anti-Obesity Drug 9604",
   "Tyr-hGH Frag 177-191"
  ],
  "synonyme_en": [
   "Anti-Obesity Drug 9604",
   "Tyr-hGH Frag 177-191"
  ],
  "link": "wirkstoffe/aod-9604.html"
 },
 {
  "slug": "arzneimittel",
  "begriff": "Arzneimittel",
  "begriff_en": "Medicinal product",
  "kategorie": "recht",
  "kurz": "Arzneimittel sind gesetzlich als Stoffe definiert, die zur Behandlung oder Vorbeugung von Krankheiten am Menschen bestimmt sind.",
  "kurz_en": "A medicinal product is legally defined as a substance intended to treat or prevent disease in humans.",
  "quellen": [
   {
    "titel": "AMG § 2: Arzneimittelbegriff",
    "titel_en": "German Medicines Act, section 2: Definition of medicines",
    "url": "https://www.gesetze-im-internet.de/amg_1976/__2.html"
   }
  ],
  "text": "§ 2 AMG erfasst unter anderem Stoffe nach ihrer Bestimmung zur Behandlung oder Vorbeugung von Krankheiten sowie nach bestimmten pharmakologischen, immunologischen oder metabolischen Funktionen. Die Einstufung ist von einer erteilten Zulassung zu unterscheiden. Eine RUO-Kennzeichnung schließt die Einstufung nicht automatisch aus.",
  "text_en": "Section 2 of Germany’s Medicines Act covers substances based on their intended disease-related use and certain pharmacological, immunological or metabolic functions. Classification is distinct from marketing authorisation. An RUO label does not automatically exclude medicinal-product status.",
  "synonyme": [
   "Medikament"
  ],
  "synonyme_en": [
   "Medicine"
  ],
  "siehe": [
   "ruo",
   "zulassung",
   "rezeptpflicht"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "bakteriostatisches-wasser",
  "begriff": "Bakteriostatisches Wasser",
  "begriff_en": "Bacteriostatic Water",
  "kategorie": "handhabung",
  "kurz": "Bakteriostatisches Wasser ist steriles Wasser mit einem Konservierungsstoff, meist Benzylalkohol, für mehrfach nutzbare Lösungen.",
  "kurz_en": "Bacteriostatic water is sterile water with a preservative, usually benzyl alcohol, for solutions used more than once.",
  "quellen": [
   {
    "titel": "DailyMed: Bakteriostatisches Wasser, Zusammensetzung",
    "titel_en": "DailyMed: Bacteriostatic water, composition",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87d6e9dc-fe3b-4593-ac9a-d7493d1959c7"
   }
  ],
  "text": "Bakteriostatisch bedeutet, dass Bakterienwachstum gehemmt wird. Die Zusammensetzung ist produktabhängig; entsprechende Arzneimittel können Benzylalkohol enthalten. Eine solche Bezeichnung bestätigt weder die Verträglichkeit mit einem bestimmten Peptid noch die Sicherheit eines Shopprodukts.",
  "text_en": "Bacteriostatic means that bacterial growth is inhibited. Composition is product-specific; medicinal preparations can contain benzyl alcohol. This description verifies neither compatibility with a particular peptide nor the safety of a shop product.",
  "synonyme": [
   "BAC-Wasser"
  ],
  "synonyme_en": [
   "BAC water"
  ],
  "siehe": [
   "steriles-wasser",
   "rekonstitution",
   "sterilitaet"
  ]
 },
 {
  "slug": "bioregulator",
  "begriff": "Bioregulatoren",
  "begriff_en": "Bioregulators",
  "kategorie": "klassen",
  "kurz": "Bioregulatoren sind sehr kurze synthetische Peptide aus zwei bis vier Aminosäuren, die an Organsystemen erforscht werden.",
  "kurz_en": "Bioregulators are very short synthetic peptides of two to four amino acids studied at organ systems.",
  "quellen": [
   {
    "titel": "Khavinson et al. (2003): Hypothese zur Genregulation",
    "titel_en": "Khavinson et al. (2003): Gene regulation hypothesis",
    "url": "https://pubmed.ncbi.nlm.nih.gov/14666197/"
   }
  ],
  "text": "In Teilen der Peptidforschung bezeichnet der Begriff kurze Sequenzen, für die eine Beteiligung an der Genregulation untersucht wird. Das ist keine behördlich definierte Wirksamkeitsklasse. Einzelne Zellbefunde belegen weder organspezifische Vorteile noch eine Verlängerung der menschlichen Lebensspanne.",
  "text_en": "In parts of peptide research, this term describes short sequences investigated for involvement in gene regulation. It is not a regulatory category establishing efficacy. Individual cellular findings establish neither organ-specific benefits nor extension of human lifespan.",
  "synonyme": [
   "Peptid-Bioregulatoren",
   "Khavinson-Peptide"
  ],
  "synonyme_en": [
   "Peptide bioregulators",
   "Khavinson peptides"
  ],
  "siehe": [
   "oligopeptid",
   "peptid"
  ],
  "wirkstoffe": [
   "epitalon"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "bioverfuegbarkeit",
  "begriff": "Bioverfügbarkeit",
  "begriff_en": "Bioavailability",
  "kategorie": "grundlagen",
  "kurz": "Der Anteil eines Stoffs, der unverändert im Blutkreislauf ankommt und dort messbar ist.",
  "kurz_en": "The proportion of a substance that reaches the bloodstream unchanged and can be measured there.",
  "quellen": [
   {
    "titel": "NCBI Bookshelf: Bioverfügbarkeit",
    "titel_en": "NCBI Bookshelf: Drug bioavailability",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK557852/"
   }
  ],
  "text": "Die Bioverfügbarkeit gibt an, welcher Anteil eines verabreichten Stoffs am Ende tatsächlich unverändert im systemischen Kreislauf ankommt, gemessen in Prozent. Sie hängt unter anderem davon ab, wie stark eine Substanz auf ihrem Weg durch den Körper von Enzymen wie bei der Proteolyse abgebaut wird. In pharmakokinetischen Studien wird die Bioverfügbarkeit für verschiedene Verabreichungswege einzeln bestimmt.",
  "text_en": "Bioavailability indicates what proportion of an administered substance ultimately reaches systemic circulation unchanged, measured as a percentage. It depends partly on how much the substance is broken down by enzymes, such as through proteolysis, on its way through the body. Pharmacokinetic studies determine bioavailability separately for different routes of administration.",
  "siehe": [
   "halbwertszeit",
   "proteolyse"
  ]
 },
 {
  "slug": "blindtest",
  "begriff": "Blindtest",
  "begriff_en": "Blind test",
  "kategorie": "labor",
  "kurz": "Verblindete Prüfung: Beteiligte kennen relevante Angaben zur Probe nicht.",
  "kurz_en": "Blinded test: people involved do not know relevant details about the sample.",
  "quellen": [
   {
    "titel": "Karanicolas et al. (2010): Verblindung und ihre Grenzen",
    "titel_en": "Karanicolas et al. (2010): Blinding and its limitations",
    "url": "https://pubmed.ncbi.nlm.nih.gov/20858381/"
   },
   {
    "titel": "Peptide Compass: Methodik und Grenzen der Prüfung",
    "titel_en": "Peptide Compass: Methodology and verification limits",
    "url": "https://peptidkompass.com/methodik.html"
   }
  ],
  "text": "Beim verblindeten Labortest werden Angaben zur Herkunft der Probe vor der Auswertung zurückgehalten. Das kann Erwartungseinflüsse verringern, schließt Fehler oder Verzerrung aber nicht aus. Entscheidend bleiben Probenahme, Methode und dokumentierte Zuordnung. Peptide Compass führt keine eigenen Blindtests durch.",
  "text_en": "In a blinded laboratory test, information about a sample’s origin is withheld before analysis. This can reduce expectation bias but cannot rule out error or bias. Sampling, methods and documented traceability still matter. Peptide Compass does not conduct its own blinded tests.",
  "siehe": [
   "drittlabor",
   "coa"
  ],
  "seiten": [
   "methodik.html"
  ]
 },
 {
  "slug": "bpc-157",
  "begriff": "BPC-157",
  "begriff_en": "BPC-157",
  "kategorie": "wirkstoff",
  "kurz": "Synthetisches Peptid, in präklinischen Modellen untersucht.",
  "kurz_en": "Synthetic peptide investigated in preclinical models.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 27847966",
    "titel_en": "PubMed: Research publication, PMID 27847966",
    "url": "https://pubmed.ncbi.nlm.nih.gov/27847966/"
   }
  ],
  "text": "Die verlinkte Zell- und Tierarbeit untersucht Gefäßneubildung und den VEGFR2-Signalweg. Solche präklinischen Befunde sind keine Bestätigung einer Wirkung oder sicheren Anwendung beim Menschen.",
  "text_en": "The linked cellular and animal study investigates blood-vessel formation and VEGFR2 signalling. Such preclinical findings do not establish efficacy or safe use in humans.",
  "synonyme": [
   "Body Protection Compound 157",
   "PL 14736"
  ],
  "synonyme_en": [
   "Body Protection Compound 157",
   "PL 14736"
  ],
  "link": "wirkstoffe/bpc-157.html"
 },
 {
  "slug": "cagrilintid",
  "begriff": "Cagrilintid",
  "begriff_en": "Cagrilintide",
  "kategorie": "wirkstoff",
  "kurz": "Synthetisches Amylin-Analogon, in der Stoffwechselforschung untersucht.",
  "kurz_en": "Synthetic amylin analogue investigated in metabolic research.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 34288673",
    "titel_en": "PubMed: Research publication, PMID 34288673",
    "url": "https://pubmed.ncbi.nlm.nih.gov/34288673/"
   }
  ],
  "text": "Die angeführte Entwicklungsarbeit beschreibt die Struktur und Auswahl eines lang wirksamen Amylin-Analogons. Ein Studienwirkstoff ist von einer unter gleichem Namen angebotenen Forschungschemikalie zu unterscheiden.",
  "text_en": "The cited development paper describes the structure and selection of a long-acting amylin analogue. An investigational medicine must be distinguished from a research chemical sold under the same name.",
  "synonyme": [
   "AM833",
   "NN9838"
  ],
  "synonyme_en": [
   "AM833",
   "NN9838"
  ],
  "link": "wirkstoffe/cagrilintid.html"
 },
 {
  "slug": "charge",
  "begriff": "Charge",
  "begriff_en": "Batch",
  "kategorie": "labor",
  "kurz": "Eine Charge ist eine einzelne Produktionsmenge mit eigener Chargennummer, auf die sich ein CoA konkret bezieht.",
  "kurz_en": "A batch is a single production run with its own batch number, the one a CoA actually refers to.",
  "quellen": [
   {
    "titel": "ICH Q7: Herstellung, Chargen und Analysenzertifikate",
    "titel_en": "ICH Q7: Manufacturing, batches and certificates of analysis",
    "url": "https://www.fda.gov/media/71518/download"
   }
  ],
  "text": "Die Chargennummer verbindet ein bestimmtes Fläschchen mit dem passenden Prüfbericht und macht das Ergebnis nachvollziehbar. Ein CoA ohne erkennbaren Chargenbezug lässt sich keinem konkreten Produkt zuordnen und sagt entsprechend wenig aus.",
  "text_en": "The batch number links one particular vial to the matching report, which is what makes a result traceable. A CoA with no clear batch reference cannot be tied to an actual product and says correspondingly little.",
  "synonyme": [
   "Batch",
   "Los"
  ],
  "synonyme_en": [
   "Batch",
   "Lot"
  ],
  "siehe": [
   "coa",
   "drittlabor"
  ],
  "seiten": [
   "charge-pruefen.html"
  ]
 },
 {
  "slug": "chromatogramm",
  "begriff": "Chromatogramm",
  "begriff_en": "Chromatogram",
  "kategorie": "labor",
  "kurz": "Grafische Darstellung einer chromatographischen Trennung, etwa bei einer HPLC-Messung.",
  "kurz_en": "A graphical record of chromatographic separation, for example in HPLC.",
  "quellen": [
   {
    "titel": "IUPAC Gold Book: Chromatogramm",
    "titel_en": "IUPAC Gold Book: Chromatogram",
    "url": "https://goldbook.iupac.org/terms/view/C01071"
   }
  ],
  "text": "Ein Chromatogramm zeigt das Detektorsignal im Verlauf einer chromatographischen Trennung. Peaks können sich überlagern. Flächenanteile hängen von Methode und Detektor ab und sind nicht automatisch Gewichtsanteile. Ein Chromatogramm allein bestätigt die Identität eines Peptids nicht.",
  "text_en": "A chromatogram shows the detector signal during chromatographic separation. Peaks can overlap. Area percentages depend on the method and detector and are not automatically mass percentages. A chromatogram alone does not confirm peptide identity.",
  "siehe": [
   "hplc",
   "reinheit"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "cjc-1295",
  "begriff": "CJC-1295",
  "begriff_en": "CJC-1295",
  "kategorie": "wirkstoff",
  "kurz": "Synthetisches GHRH-Analogon, in der endokrinologischen Forschung untersucht.",
  "kurz_en": "Synthetic GHRH analogue investigated in endocrine research.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 16352683",
    "titel_en": "PubMed: Research publication, PMID 16352683",
    "url": "https://pubmed.ncbi.nlm.nih.gov/16352683/"
   }
  ],
  "text": "Die verlinkte Arbeit untersucht ein lang wirksames GHRH-Analogon bei gesunden Erwachsenen. Die untersuchte Verbindung ist von anders modifizierten Formen zu unterscheiden, die unter ähnlichen Handelsnamen angeboten werden.",
  "text_en": "The linked paper investigates a long-acting GHRH analogue in healthy adults. The studied compound must be distinguished from differently modified forms offered under similar trade names.",
  "synonyme": [
   "CJC-1295 mit DAC",
   "DAC:GRF"
  ],
  "synonyme_en": [
   "CJC-1295 with DAC",
   "DAC:GRF"
  ],
  "link": "wirkstoffe/cjc-1295.html"
 },
 {
  "slug": "coa",
  "begriff": "CoA",
  "begriff_en": "CoA",
  "kategorie": "labor",
  "kurz": "Ein CoA ist ein Prüfbericht zu einer bestimmten Charge, mit Chargennummer, Prüfmethode und Messwerten wie Reinheit oder Identität.",
  "kurz_en": "A CoA is a report tied to a specific batch, listing batch number, test method and values such as purity or identity.",
  "quellen": [
   {
    "titel": "ICH Q7: Herstellung, Chargen und Analysenzertifikate",
    "titel_en": "ICH Q7: Manufacturing, batches and certificates of analysis",
    "url": "https://www.fda.gov/media/71518/download"
   }
  ],
  "langform": "Certificate of Analysis",
  "langform_en": "Certificate of Analysis",
  "text": "Der Wert eines CoA hängt an der Chargennummer, denn nur so lässt sich ein Prüfbericht einem bestimmten Fläschchen zuordnen. Ein generisches Muster-CoA ohne Bezug zu einer echten Charge sagt wenig über das konkrete Produkt aus. Üblich sind Angaben zu Reinheit, Identität und teilweise zum Endotoxin-Wert.",
  "text_en": "The value of a CoA depends on the batch number, since only that ties a report to one particular vial. A generic sample CoA with no link to a real batch says little about the actual product. Common entries include purity, identity and sometimes an endotoxin value.",
  "synonyme": [
   "Analysezertifikat",
   "Prüfbericht"
  ],
  "synonyme_en": [
   "Certificate of analysis",
   "Test report"
  ],
  "siehe": [
   "charge",
   "reinheit",
   "identitaet",
   "drittlabor"
  ],
  "seiten": [
   "charge-pruefen.html",
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "datenbasis",
  "begriff": "Datenbasis",
  "begriff_en": "Evidence coverage",
  "kategorie": "vergleich",
  "kurz": "Datenbasis zeigt, wie viele der fünf Scorekriterien für einen Anbieter belegt sind.",
  "kurz_en": "Evidence coverage shows how many of the five score criteria are documented for a vendor.",
  "quellen": [
   {
    "titel": "Peptide Compass: Eigene Vergleichsmethodik",
    "titel_en": "Peptide Compass: Our comparison methodology",
    "url": "https://peptidkompass.com/methodik.html"
   }
  ],
  "text": "Weil fehlende Kriterien bei der Score-Berechnung ausgelassen und die übrigen Gewichte neu verteilt werden, kann bereits ein einziges belegtes Kriterium einen hohen Wert ergeben. Anbieter mit unterschiedlicher Datenbasis sind deshalb nur eingeschränkt vergleichbar. Die Zahl der belegten Kriterien steht neben dem Score.",
  "text_en": "Because missing criteria are omitted from the score calculation and the remaining weights redistributed, a single documented criterion alone can already produce a high value. Vendors with different evidence coverage are therefore only partly comparable. The number of documented criteria is shown next to the score.",
  "siehe": [
   "dokumentationsscore"
  ],
  "seiten": [
   "methodik.html"
  ]
 },
 {
  "slug": "dihexa",
  "begriff": "Dihexa",
  "begriff_en": "Dihexa",
  "kategorie": "wirkstoff",
  "kurz": "Synthetisches Angiotensin-IV-Analogon, in präklinischen Modellen untersucht.",
  "kurz_en": "Synthetic angiotensin IV analogue investigated in preclinical models.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 38489193",
    "titel_en": "PubMed: Research publication, PMID 38489193",
    "url": "https://pubmed.ncbi.nlm.nih.gov/38489193/"
   },
   {
    "titel": "PubMed: Redaktioneller Warnhinweis zur frühen Arbeit",
    "titel_en": "PubMed: Editorial expression of concern on the early paper",
    "url": "https://pubmed.ncbi.nlm.nih.gov/34551989/"
   }
  ],
  "text": "Dihexa wird in Tiermodellen untersucht. Zur frühen Veröffentlichung mit PMID 23055539 besteht ein redaktioneller Warnhinweis (Expression of Concern); sie wird hier nicht als gesicherter Beleg verwendet. Die verlinkte weitere Arbeit beschreibt ein Rattenmodell und belegt keine Anwendung beim Menschen.",
  "text_en": "Dihexa is investigated in animal models. The early paper with PMID 23055539 carries an Expression of Concern and is not treated here as secure evidence. The additional linked paper describes a rat model and does not establish human use.",
  "synonyme": [
   "PNB-0408",
   "N-Hexanoyl-Tyr-Ile-(6)aminohexanamid"
  ],
  "synonyme_en": [
   "PNB-0408",
   "N-Hexanoyl-Tyr-Ile-(6)aminohexanamide"
  ],
  "link": "wirkstoffe/dihexa.html"
 },
 {
  "slug": "dokumentationsscore",
  "begriff": "Dokumentationsscore",
  "begriff_en": "Documentation score",
  "kategorie": "vergleich",
  "kurz": "Der Dokumentationsscore zeigt, wie viele geprüfte Angaben zu einem Anbieter tatsächlich belegt sind.",
  "kurz_en": "The documentation score shows how many verified vendor claims are actually documented.",
  "quellen": [
   {
    "titel": "Peptide Compass: Eigene Vergleichsmethodik",
    "titel_en": "Peptide Compass: Our comparison methodology",
    "url": "https://peptidkompass.com/methodik.html"
   }
  ],
  "text": "Die Methodik sieht fünf gewichtete Kriterien vor. Aktuell werden Labor-Dokumentation, Rechtsangaben und Lieferung berücksichtigt; Preis und Sortiment bleiben unbewertet. Fehlende Kriterien werden ausgelassen und die übrigen Gewichte neu verteilt. Der Wert ist kein Gütesiegel und keine Prüfung der Produktsicherheit.",
  "text_en": "The methodology defines five weighted criteria. Currently, laboratory documentation, legal information and shipping contribute; price and range remain unscored. Missing criteria are omitted and the remaining weights are normalised. The score is not a quality seal or a product safety assessment.",
  "siehe": [
   "datenbasis",
   "coa"
  ],
  "seiten": [
   "methodik.html"
  ]
 },
 {
  "slug": "doppelblind",
  "begriff": "Doppelblindstudie",
  "begriff_en": "Double-blind trial",
  "kategorie": "studien",
  "kurz": "Studiendesign, bei dem weder Teilnehmer noch Studienpersonal wissen, wer Wirkstoff oder Placebo erhält. Reduziert unbewusste Verzerrung.",
  "kurz_en": "A study design where neither participants nor staff know who gets the active substance or placebo. Reduces unconscious bias.",
  "quellen": [
   {
    "titel": "NCI: double blind study",
    "titel_en": "NCI: double blind study",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/double-blind-study"
   }
  ],
  "text": "Teilnehmer und die entsprechend verblindeten Mitglieder des Studienpersonals kennen die Gruppenzuteilung nicht. Das kann Erwartungs- und Bewertungsverzerrungen verringern. Verblindung ist ein Qualitätsmerkmal, schließt andere methodische Fehler aber nicht aus.",
  "text_en": "Participants and the blinded members of the study team do not know group assignments. This can reduce expectation and assessment bias. Blinding is a quality feature but does not rule out other methodological errors.",
  "synonyme": [
   "Doppelverblindung",
   "doppelblind"
  ],
  "synonyme_en": [
   "Double blinding",
   "Double blind"
  ],
  "siehe": [
   "rct",
   "placebo"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "drittlabor",
  "begriff": "Drittlabor",
  "begriff_en": "Third-party laboratory",
  "kategorie": "labor",
  "kurz": "Ein Drittlabor ist ein externes Labor, das unabhängig vom Hersteller oder Shop eine Probe prüft und dokumentiert.",
  "kurz_en": "A third-party laboratory is an external lab that tests and documents a sample independently of the manufacturer or shop.",
  "quellen": [
   {
    "titel": "ISO/IEC 17025:2017: Kompetenz von Prüflaboren",
    "titel_en": "ISO/IEC 17025:2017: Competence of testing laboratories",
    "url": "https://www.iso.org/standard/66912.html"
   }
  ],
  "text": "Nennt ein CoA ein externes Labor, lohnt sich ein Blick, ob der Name überhaupt nachprüfbar ist und ob eine Akkreditierung wie ISO 17025 vorliegt. Ein Blindtest ist eine Möglichkeit, ein Ergebnis zusätzlich unabhängig zu prüfen.",
  "text_en": "If a CoA names an external lab, it is worth checking whether the name is verifiable at all and whether it holds accreditation such as ISO 17025. A blind test is one way to check a result independently on top of that.",
  "synonyme": [
   "Externes Labor"
  ],
  "synonyme_en": [
   "External laboratory"
  ],
  "siehe": [
   "coa",
   "iso-17025",
   "blindtest"
  ],
  "seiten": [
   "methodik.html",
   "charge-pruefen.html"
  ]
 },
 {
  "slug": "dsip",
  "begriff": "DSIP",
  "begriff_en": "DSIP",
  "kategorie": "wirkstoff",
  "kurz": "Delta Sleep-Inducing Peptide, ursprünglich in tierexperimentellen Untersuchungen beschrieben.",
  "kurz_en": "Delta sleep-inducing peptide, originally described in animal experiments.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 265572",
    "titel_en": "PubMed: Research publication, PMID 265572",
    "url": "https://pubmed.ncbi.nlm.nih.gov/265572/"
   }
  ],
  "text": "DSIP wurde in einer frühen Arbeit an Kaninchen isoliert und experimentell untersucht. Der Name beschreibt die damalige Forschungshypothese. Er ist kein Beleg für eine verlässliche Schlafwirkung beim Menschen.",
  "text_en": "DSIP was isolated and experimentally investigated in an early rabbit study. Its name reflects the research hypothesis at that time. It does not establish a reliable sleep effect in humans.",
  "synonyme": [
   "Delta Sleep Inducing Peptide",
   "Delta Sleep Peptide"
  ],
  "synonyme_en": [
   "Delta Sleep Inducing Peptide",
   "Delta Sleep Peptide"
  ],
  "link": "wirkstoffe/dsip.html"
 },
 {
  "slug": "ema",
  "begriff": "EMA",
  "begriff_en": "EMA",
  "kategorie": "recht",
  "kurz": "Die EMA ist die EU-Behörde, die zentrale Zulassungsverfahren für Arzneimittel koordiniert und bewertet.",
  "kurz_en": "The EMA is the EU agency that coordinates and assesses centralised marketing authorisation procedures.",
  "quellen": [
   {
    "titel": "EMA: Bewertung und Zulassungsentscheidung",
    "titel_en": "EMA: Evaluation and authorisation decisions",
    "url": "https://www.ema.europa.eu/en/about-us/what-we-do/authorisation-medicines/how-ema-evaluates-medicines-human-use"
   }
  ],
  "langform": "Europäische Arzneimittel-Agentur",
  "langform_en": "European Medicines Agency",
  "text": "Die Europäische Arzneimittel-Agentur koordiniert die wissenschaftliche Bewertung im zentralen EU-Zulassungsverfahren und veröffentlicht Bewertungsberichte. Die Zulassungsentscheidung trifft die Europäische Kommission. Ein EMA-Bericht ist kein Prüfzertifikat für Produkte eines Forschungsshops.",
  "text_en": "The European Medicines Agency coordinates scientific assessment in the centralised EU authorisation procedure and publishes assessment reports. The European Commission makes the authorisation decision. An EMA report is not a testing certificate for products sold by a research supplier.",
  "siehe": [
   "zulassung",
   "fda"
  ]
 },
 {
  "slug": "endotoxin",
  "begriff": "Endotoxin",
  "begriff_en": "Endotoxin",
  "kategorie": "labor",
  "kurz": "Endotoxine sind Zellwandbestandteile von Bakterien, deren Menge in einer Probe meist in Einheiten pro Milligramm angegeben wird.",
  "kurz_en": "Endotoxins are bacterial cell wall components, with the amount in a sample usually stated in units per milligram.",
  "quellen": [
   {
    "titel": "FDA: Pyrogen- und Endotoxintests",
    "titel_en": "FDA: Pyrogen and endotoxins testing",
    "url": "https://www.fda.gov/media/83477/download"
   }
  ],
  "text": "Bakterielle Endotoxine sind Bestandteile gramnegativer Bakterien. Der Messwert wird in Endotoxineinheiten mit Bezugsgröße angegeben. Neben klassischen LAL-Verfahren gibt es Tests mit rekombinanten Reagenzien. Endotoxinprüfung, Sterilitätsprüfung und chemische Reinheit sind unterschiedliche Prüfungen.",
  "text_en": "Bacterial endotoxins are components of Gram-negative bacteria. Results use endotoxin units with a stated reference quantity. Tests include conventional LAL methods and recombinant reagents. Endotoxin testing, sterility testing and chemical purity testing answer different questions.",
  "siehe": [
   "sterilitaet",
   "coa"
  ],
  "seiten": [
   "methodik.html"
  ]
 },
 {
  "slug": "epitalon",
  "begriff": "Epitalon",
  "begriff_en": "Epitalon",
  "kategorie": "wirkstoff",
  "kurz": "Synthetisches Tetrapeptid, in Zellkulturen zur Telomerase-Aktivität untersucht.",
  "kurz_en": "Synthetic tetrapeptide investigated in cell cultures for telomerase activity.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 12937682",
    "titel_en": "PubMed: Research publication, PMID 12937682",
    "url": "https://pubmed.ncbi.nlm.nih.gov/12937682/"
   }
  ],
  "text": "Die angeführte Arbeit untersucht Epithalon in humanen Fibroblasten-Zellkulturen. Beobachtungen zur Telomerase in isolierten Zellen belegen keine Verlängerung der Lebensspanne beim Menschen.",
  "text_en": "The cited paper investigates epithalon in human fibroblast cell cultures. Observations of telomerase in isolated cells do not establish extension of human lifespan.",
  "synonyme": [
   "Epithalon",
   "AEDG-Tetrapeptid"
  ],
  "synonyme_en": [
   "Epithalon",
   "AEDG tetrapeptide"
  ],
  "link": "wirkstoffe/epitalon.html"
 },
 {
  "slug": "fallbericht",
  "begriff": "Fallbericht",
  "begriff_en": "Case report",
  "kategorie": "studien",
  "kurz": "Ausführliche Beschreibung eines einzelnen, oft ungewöhnlichen Falls. Liefert einen ersten Hinweis, aber keinen statistischen Beleg.",
  "kurz_en": "A detailed account of a single, often unusual case. Provides an early lead but no statistical evidence.",
  "quellen": [
   {
    "titel": "NCI: case report",
    "titel_en": "NCI: case report",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/case-report"
   }
  ],
  "text": "Ein Fallbericht schildert Beobachtungen bei einer einzelnen Person oder einer kleinen Fallgruppe, häufig zu einer ungewöhnlichen Reaktion oder einem seltenen Ereignis. Er kann Anstoß für weitere Forschung sein, enthält aber keine Kontrollgruppe und keine statistische Auswertung. Ein Fallbericht allein belegt keine allgemeine Wirkung.",
  "text_en": "A case report describes observations in a single person or a small group of cases, often an unusual reaction or a rare event. It can prompt further research, but it has no control group and no statistical analysis. A case report alone does not prove a general effect.",
  "synonyme": [
   "Case Report"
  ],
  "synonyme_en": [
   "Case Report"
  ],
  "siehe": [
   "klinische-studie",
   "peer-review"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "fda",
  "begriff": "FDA",
  "begriff_en": "FDA",
  "kategorie": "recht",
  "kurz": "US-Behörde mit Aufgaben zur Regulierung unter anderem von Arzneimitteln, Lebensmitteln und Medizinprodukten.",
  "kurz_en": "US agency responsible for regulating medicines, food and medical devices, among other products.",
  "quellen": [
   {
    "titel": "FDA: Was die Behörde zulässt",
    "titel_en": "FDA: What the agency does and does not approve",
    "url": "https://www.fda.gov/consumers/consumer-updates/10-facts-about-what-fda-does-and-does-not-approve"
   }
  ],
  "langform": "Food and Drug Administration (US-Behörde)",
  "langform_en": "Food and Drug Administration",
  "text": "Die Food and Drug Administration reguliert in den USA unter anderem Arzneimittel, Lebensmittel und Medizinprodukte. Nicht jede regulierte Produktart erhält eine vorherige Zulassung. Eine FDA-Zulassung gilt für ein konkretes Produkt und ist keine EU-Zulassung.",
  "text_en": "The Food and Drug Administration regulates medicines, food and medical devices, among other products, in the United States. Not every regulated product category receives premarket approval. FDA approval concerns a specific product and is not EU authorisation.",
  "siehe": [
   "zulassung",
   "ema"
  ]
 },
 {
  "slug": "fragment",
  "begriff": "Fragment",
  "begriff_en": "Fragment",
  "kategorie": "grundlagen",
  "kurz": "Ein kurzes Teilstück eines größeren körpereigenen Peptids oder Proteins, synthetisch nachgebaut.",
  "kurz_en": "A short section of a larger endogenous peptide or protein, synthetically reproduced.",
  "quellen": [
   {
    "titel": "Purves et al.: Peptid-Botenstoffe",
    "titel_en": "Purves et al.: Peptide neurotransmitters",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK10873/"
   }
  ],
  "text": "Ein Fragment umfasst nur einen Teilabschnitt der ursprünglichen Aminosäurekette eines Peptids oder Proteins, nicht die vollständige Sequenz. Solche Teilstücke werden synthetisch hergestellt, um zu untersuchen, welcher Bereich einer Kette für bestimmte Eigenschaften wie Rezeptorbindung verantwortlich ist. Ein bekanntes Beispiel ist Thymosin Alpha-1 als Fragment eines größeren Vorläuferproteins.",
  "text_en": "A fragment covers only a section of the original amino acid chain of a peptide or protein, not the full sequence. Such partial sequences are synthesised to study which part of a chain is responsible for particular properties, such as receptor binding. One known example is thymosin alpha-1, a fragment of a larger precursor protein.",
  "siehe": [
   "peptid",
   "analogon",
   "sequenz"
  ]
 },
 {
  "slug": "gegenion",
  "begriff": "Gegenion",
  "begriff_en": "Counter ion",
  "kategorie": "labor",
  "kurz": "Ein Gegenion ist der Salzpartner eines Peptids, meist Trifluoracetat (TFA) oder Acetat, aus der Herstellung.",
  "kurz_en": "A counter ion is a peptide's salt partner, usually trifluoroacetate (TFA) or acetate, left over from manufacturing.",
  "quellen": [
   {
    "titel": "Hoofnagle et al. (2016): Peptidanalytik und Laborhandhabung",
    "titel_en": "Hoofnagle et al. (2016): Peptide analysis and laboratory handling",
    "url": "https://pubmed.ncbi.nlm.nih.gov/26719571/"
   }
  ],
  "text": "Ein Gegenion gleicht die elektrische Ladung aus. Gegenionen können zum Gewicht einer Peptidprobe beitragen, ohne Bestandteil ihrer Aminosäuresequenz zu sein.",
  "text_en": "A counterion balances electrical charge. Counterions can contribute to sample weight without being part of the peptide’s amino acid sequence.",
  "siehe": [
   "peptidgehalt",
   "reinheit"
  ],
  "seiten": [
   "methodik.html"
  ]
 },
 {
  "slug": "ghk-cu",
  "begriff": "GHK-Cu",
  "begriff_en": "GHK-Cu",
  "kategorie": "wirkstoff",
  "kurz": "Komplex aus dem Tripeptid GHK und Kupfer, in verschiedenen präklinischen Modellen untersucht.",
  "kurz_en": "Complex of the tripeptide GHK and copper investigated in various preclinical models.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 40672369",
    "titel_en": "PubMed: Research publication, PMID 40672369",
    "url": "https://pubmed.ncbi.nlm.nih.gov/40672369/"
   }
  ],
  "text": "GHK steht für Glycyl-Histidyl-Lysin. Die verlinkte Arbeit untersucht den Kupferkomplex in einem experimentellen Colitis-Modell und ergänzenden Zellversuchen. Sie ist kein klinischer Nachweis für Hautpflege oder andere Anwendungen.",
  "text_en": "GHK stands for glycyl-histidyl-lysine. The linked study investigates the copper complex in an experimental colitis model and cellular assays. It is not clinical evidence for skin care or other uses.",
  "synonyme": [
   "Glycyl-L-Histidyl-L-Lysin-Kupfer",
   "Kupfertripeptid-1"
  ],
  "synonyme_en": [
   "Glycyl-L-histidyl-L-lysine copper",
   "Copper tripeptide-1"
  ],
  "link": "wirkstoffe/ghk-cu.html"
 },
 {
  "slug": "ghrh",
  "begriff": "GHRH",
  "begriff_en": "GHRH",
  "kategorie": "klassen",
  "kurz": "GHRH ist ein körpereigenes Hormon aus dem Hypothalamus, das die Hirnanhangdrüse zur Ausschüttung von Wachstumshormon anregt.",
  "kurz_en": "GHRH is a hypothalamic hormone that triggers the pituitary gland to release growth hormone.",
  "quellen": [
   {
    "titel": "Teichman et al. (2006): GHRH-Analogon in der Forschung",
    "titel_en": "Teichman et al. (2006): Research on a GHRH analogue",
    "url": "https://pubmed.ncbi.nlm.nih.gov/16352683/"
   }
  ],
  "langform": "Growth Hormone-Releasing Hormone",
  "langform_en": "Growth hormone-releasing hormone",
  "text": "Growth Hormone-Releasing Hormone ist ein Hypothalamus-Peptid, das über die Hypophysenpfortader zur Hirnanhangdrüse gelangt und dort die Ausschüttung von Wachstumshormon aus somatotropen Zellen auslöst. Es zählt zur Wachstumshormon-Achse und ist der Gegenspieler des körpereigenen Hemmstoffs Somatostatin. Mehrere synthetische GHRH-Analoga binden an denselben Rezeptor und werden in diesem Zusammenhang untersucht oder eingesetzt.",
  "text_en": "Growth hormone-releasing hormone is a hypothalamic peptide that travels via the pituitary portal system to the pituitary gland, where it triggers growth hormone release from somatotroph cells. It is part of the growth hormone axis and is the counterpart to the body's own inhibitor, somatostatin. Several synthetic GHRH analogues bind the same receptor and are studied or used in this context.",
  "synonyme": [
   "Somatoliberin"
  ],
  "synonyme_en": [
   "Somatoliberin"
  ],
  "siehe": [
   "ghrp",
   "wachstumshormon",
   "rezeptor"
  ],
  "wirkstoffe": [
   "cjc-1295",
   "tesamorelin",
   "sermorelin"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "ghrp",
  "begriff": "GHRP",
  "begriff_en": "GHRP",
  "kategorie": "klassen",
  "kurz": "GHRPs sind eine Klasse synthetischer Peptide, die über den Ghrelin-Rezeptor die Ausschüttung von Wachstumshormon auslösen.",
  "kurz_en": "GHRPs are synthetic peptides that trigger growth hormone release through the ghrelin receptor.",
  "quellen": [
   {
    "titel": "Raun et al. (1998): Rezeptorbezug von GHRPs",
    "titel_en": "Raun et al. (1998): Receptor involvement in GHRPs",
    "url": "https://pubmed.ncbi.nlm.nih.gov/9849822/"
   }
  ],
  "langform": "Growth Hormone-Releasing Peptide",
  "langform_en": "Growth hormone-releasing peptide",
  "text": "Growth Hormone-Releasing Peptides sind eine Klasse künstlich entwickelter Peptide, die an den Ghrelin-Rezeptor (GHS-R) binden und darüber die Ausschüttung von Wachstumshormon aus der Hirnanhangdrüse auslösen. Anders als GHRH-Analoga nutzen sie einen eigenständigen Signalweg und werden in der Forschung häufig mit GHRH-Analoga kombiniert. Der Ghrelin-Rezeptor ist zugleich an der Regulation von Hunger und Appetit beteiligt.",
  "text_en": "Growth hormone-releasing peptides are a class of synthetic peptides that bind the ghrelin receptor (GHS-R) to trigger growth hormone release from the pituitary gland. Unlike GHRH analogues, they use a separate signalling pathway and are often combined with GHRH analogues in research. The ghrelin receptor is also involved in regulating hunger and appetite.",
  "synonyme": [
   "GH-Sekretagoga",
   "Wachstumshormon-Sekretagoga"
  ],
  "synonyme_en": [
   "GH secretagogues",
   "Growth hormone secretagogues"
  ],
  "siehe": [
   "ghrh",
   "wachstumshormon",
   "rezeptor"
  ],
  "wirkstoffe": [
   "ipamorelin",
   "hexarelin"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "gip",
  "begriff": "GIP",
  "begriff_en": "GIP",
  "kategorie": "klassen",
  "kurz": "GIP ist ein körpereigenes Darmhormon, das die Insulinausschüttung nach kohlenhydratreichen Mahlzeiten reguliert.",
  "kurz_en": "GIP is a gut hormone that regulates insulin release after carbohydrate-rich meals.",
  "quellen": [
   {
    "titel": "NIDDK: Grundlagen der Inkretinforschung",
    "titel_en": "NIDDK: Foundations of incretin research",
    "url": "https://www.niddk.nih.gov/news/archive/2021/story-discovery-medications-diabetes-obesity-emerged-research-pancreatic-hormone"
   }
  ],
  "langform": "Glucose-dependent Insulinotropic Polypeptide",
  "langform_en": "Glucose-dependent insulinotropic polypeptide",
  "text": "Glucose-dependent Insulinotropic Polypeptide ist neben GLP-1 das zweite wichtige Inkretinhormon. K-Zellen im oberen Dünndarm schütten es nach der Nahrungsaufnahme aus, es bindet an den GIP-Rezeptor und reguliert dort die Insulinausschüttung. Zusätzlich ist es am Fettstoffwechsel beteiligt. Mehrere neuere Diabetes- und Adipositas-Wirkstoffe kombinieren einen GIP- mit einem GLP-1-Rezeptor-Agonismus.",
  "text_en": "Glucose-dependent insulinotropic polypeptide is the second major incretin hormone alongside GLP-1. K cells in the upper small intestine release it after eating, and it binds the GIP receptor to regulate insulin release. It is also involved in fat metabolism. Several newer diabetes and obesity compounds combine GIP with GLP-1 receptor agonism.",
  "siehe": [
   "glp-1",
   "inkretin",
   "rezeptor"
  ],
  "wirkstoffe": [
   "tirzepatid",
   "retatrutid"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "glp-1",
  "begriff": "GLP-1",
  "begriff_en": "GLP-1",
  "kategorie": "klassen",
  "kurz": "GLP-1 ist ein körpereigenes Darmhormon, das nach dem Essen die Insulinausschüttung reguliert.",
  "kurz_en": "GLP-1 is a gut hormone released after eating that regulates insulin release.",
  "quellen": [
   {
    "titel": "NIDDK: Grundlagen der Inkretinforschung",
    "titel_en": "NIDDK: Foundations of incretin research",
    "url": "https://www.niddk.nih.gov/news/archive/2021/story-discovery-medications-diabetes-obesity-emerged-research-pancreatic-hormone"
   }
  ],
  "langform": "Glucagon-like Peptide 1",
  "langform_en": "Glucagon-like peptide 1",
  "text": "Glucagon-like Peptide 1 ist ein Inkretinhormon, das L-Zellen im Dünndarm nach der Nahrungsaufnahme ausschütten. Es bindet an den GLP-1-Rezeptor, reguliert die Insulinausschüttung, verlangsamt die Magenentleerung und ist an der Sättigungsregulation im Gehirn beteiligt. Mehrere synthetische GLP-1-Rezeptor-Agonisten setzen an diesem System an und sind teils als Arzneimittel zugelassen.",
  "text_en": "Glucagon-like peptide 1 is an incretin hormone released by L cells in the small intestine after eating. It binds the GLP-1 receptor, regulates insulin release, slows gastric emptying and is involved in satiety signalling in the brain. Several synthetic GLP-1 receptor agonists target this system, and some are approved as medicines.",
  "synonyme": [
   "Glucagon-ähnliches Peptid 1"
  ],
  "synonyme_en": [
   "Glucagon-like peptide-1"
  ],
  "siehe": [
   "gip",
   "inkretin",
   "rezeptor",
   "agonist"
  ],
  "wirkstoffe": [
   "semaglutid",
   "tirzepatid",
   "retatrutid",
   "survodutid"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "gmp",
  "begriff": "GMP",
  "begriff_en": "GMP",
  "kategorie": "recht",
  "kurz": "GMP ist ein anerkannter Qualitätsstandard für die Herstellung von Arzneimitteln und ähnlichen Produkten.",
  "kurz_en": "GMP is a recognised quality standard for manufacturing medicinal products and similar goods.",
  "quellen": [
   {
    "titel": "ICH Q7: Herstellung, Chargen und Analysenzertifikate",
    "titel_en": "ICH Q7: Manufacturing, batches and certificates of analysis",
    "url": "https://www.fda.gov/media/71518/download"
   }
  ],
  "langform": "Gute Herstellungspraxis",
  "langform_en": "Good Manufacturing Practice",
  "text": "Good Manufacturing Practice umfasst Vorgaben zu Räumen, Prozessen, Dokumentation und Rückverfolgbarkeit in der Herstellung. Verpflichtend ist GMP vor allem für zugelassene Arzneimittel. Eine Herstellerangabe zu GMP ersetzt keinen unabhängigen Nachweis wie ein öffentliches CoA und gilt nur, soweit sie belegt ist.",
  "text_en": "Good Manufacturing Practice covers requirements for facilities, processes, documentation and traceability in production. GMP is mandatory mainly for authorised medicinal products. A manufacturer's GMP claim does not replace independent evidence such as a public CoA and applies only insofar as it is documented.",
  "siehe": [
   "zulassung",
   "coa"
  ],
  "seiten": [
   "methodik.html"
  ]
 },
 {
  "slug": "halbwertszeit",
  "begriff": "Halbwertszeit",
  "begriff_en": "Half-life",
  "kategorie": "grundlagen",
  "kurz": "Die Zeitspanne, in der die Konzentration eines Stoffs im Körper auf die Hälfte sinkt.",
  "kurz_en": "The time it takes for a substance's concentration in the body to drop by half.",
  "quellen": [
   {
    "titel": "NCBI Bookshelf: Pharmakokinetik",
    "titel_en": "NCBI Bookshelf: Pharmacokinetics",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK557744/"
   }
  ],
  "text": "Die Halbwertszeit beschreibt, wie lange es dauert, bis die Konzentration eines Peptids im Blut auf die Hälfte des Ausgangswerts abgebaut ist. Sie wird in pharmakokinetischen Studien gemessen und unterscheidet sich stark zwischen einzelnen Peptiden, unter anderem abhängig davon, wie schnell körpereigene Enzyme die Kette per Proteolyse abbauen. Kürzere Halbwertszeiten bedeuten einen schnelleren Abbau im Vergleich zu längeren.",
  "text_en": "Half-life describes how long it takes for a peptide's blood concentration to fall to half its starting value. It is measured in pharmacokinetic studies and varies considerably between individual peptides, partly depending on how quickly endogenous enzymes break down the chain through proteolysis. A shorter half-life means faster breakdown compared with a longer one.",
  "siehe": [
   "proteolyse",
   "bioverfuegbarkeit"
  ]
 },
 {
  "slug": "hexarelin",
  "begriff": "Hexarelin",
  "begriff_en": "Hexarelin",
  "kategorie": "wirkstoff",
  "kurz": "Synthetisches Peptid, in Studien zur Wachstumshormon-Achse untersucht.",
  "kurz_en": "Synthetic peptide investigated in studies of the growth hormone axis.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 7910650",
    "titel_en": "PubMed: Research publication, PMID 7910650",
    "url": "https://pubmed.ncbi.nlm.nih.gov/7910650/"
   }
  ],
  "text": "Die angeführte Originalarbeit beschreibt Hexarelin als synthetisches Peptid und untersucht die Wachstumshormon-Ausschüttung bei Ratten. Solche Modellbefunde sind kein Beleg für eine sichere Anwendung beim Menschen.",
  "text_en": "The cited original paper describes hexarelin as a synthetic peptide and investigates growth hormone release in rats. Such model findings do not establish safe human use.",
  "link": "wirkstoffe/hexarelin.html"
 },
 {
  "slug": "hplc",
  "begriff": "HPLC",
  "begriff_en": "HPLC",
  "kategorie": "labor",
  "kurz": "HPLC ist die gängige Analysemethode, um den Reinheitswert einer Peptidprobe als Prozentzahl zu bestimmen.",
  "kurz_en": "HPLC is the standard analytical method used to determine a peptide sample's purity as a percentage.",
  "quellen": [
   {
    "titel": "FDA: Analytik komplexer Gemische und Peptide",
    "titel_en": "FDA: Analysis of complex mixtures and peptides",
    "url": "https://www.fda.gov/industry/generic-drug-user-fee-amendments/fys-2013-2017-regulatory-science-report-complex-mixtures-and-peptides"
   }
  ],
  "langform": "Hochleistungsflüssigchromatographie",
  "langform_en": "High-performance liquid chromatography",
  "text": "Die Methode trennt die Bestandteile einer Probe auf und misst sie einzeln, das Ergebnis ist ein Chromatogramm mit einem Peak pro Bestandteil. Der Flächenanteil des Hauptpeaks ergibt den angegebenen Reinheitswert. Allein sagt HPLC nichts über die Identität des Moleküls aus, dafür braucht es zusätzlich Massenspektrometrie.",
  "text_en": "The method separates a sample into its components and measures each one, producing a chromatogram with one peak per component. The area of the main peak gives the stated purity value. HPLC alone says nothing about identity, that requires mass spectrometry as well.",
  "synonyme": [
   "Hochleistungsflüssigchromatografie"
  ],
  "synonyme_en": [
   "High-performance liquid chromatography"
  ],
  "siehe": [
   "reinheit",
   "chromatogramm",
   "massenspektrometrie"
  ],
  "seiten": [
   "methodik.html",
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "hwg",
  "begriff": "HWG",
  "begriff_en": "HWG",
  "kategorie": "recht",
  "kurz": "Das HWG regelt in Deutschland die Werbung für Arzneimittel und Heilmethoden gegenüber der Öffentlichkeit.",
  "kurz_en": "The HWG regulates advertising of medicinal products and therapeutic methods to the public in Germany.",
  "quellen": [
   {
    "titel": "Heilmittelwerbegesetz, amtlicher Gesetzestext",
    "titel_en": "German Act on Advertising in the Healthcare System, official text",
    "url": "https://www.gesetze-im-internet.de/heilmwerbg/"
   }
  ],
  "langform": "Heilmittelwerbegesetz",
  "langform_en": "Therapeutic Products Advertising Act",
  "text": "Das Heilmittelwerbegesetz schränkt ein, wie über Arzneimittel und Behandlungsmethoden gesprochen werden darf, etwa bei Aussagen zu Krankheiten oder zur Anwendung am Menschen. Deshalb beschreibt Peptide Compass Substanzen nur mit dem Stand der Forschung und formuliert keine Aussagen über eine Wirkung im Körper der Leserin oder des Lesers.",
  "text_en": "The German Therapeutic Products Advertising Act restricts how medicinal products and treatment methods may be described publicly, including claims about disease or human use. This is why Peptide Compass describes substances only in terms of research findings and makes no statements about an effect in the reader's body.",
  "siehe": [
   "arzneimittel"
  ],
  "seiten": [
   "methodik.html"
  ]
 },
 {
  "slug": "identitaet",
  "begriff": "Identität",
  "begriff_en": "Identity",
  "kategorie": "labor",
  "kurz": "Identität bestätigt per Massenspektrometrie, dass eine Probe tatsächlich das angegebene Peptid enthält.",
  "kurz_en": "Identity, confirmed by mass spectrometry, verifies that a sample actually contains the stated peptide.",
  "quellen": [
   {
    "titel": "FDA: Analytik komplexer Gemische und Peptide",
    "titel_en": "FDA: Analysis of complex mixtures and peptides",
    "url": "https://www.fda.gov/industry/generic-drug-user-fee-amendments/fys-2013-2017-regulatory-science-report-complex-mixtures-and-peptides"
   }
  ],
  "text": "Der Nachweis erfolgt meist über LC-MS, eine Kombination aus Flüssigchromatographie und Massenspektrometrie, die das Molekulargewicht misst. Reinheit und Identität sind zwei getrennte Angaben, ein vollständiger CoA enthält beide. Ein hoher Reinheitswert allein belegt nicht, welches Molekül tatsächlich vorliegt.",
  "text_en": "It is usually shown via LC-MS, a combination of liquid chromatography and mass spectrometry that measures molecular weight. Purity and identity are two separate figures, and a complete CoA lists both. Purity alone does not prove which molecule is actually present.",
  "siehe": [
   "massenspektrometrie",
   "reinheit",
   "coa"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "igf-1",
  "begriff": "IGF-1",
  "begriff_en": "IGF-1",
  "kategorie": "klassen",
  "kurz": "IGF-1 ist ein körpereigenes Hormon, das größtenteils in der Leber als Reaktion auf Wachstumshormon gebildet wird.",
  "kurz_en": "IGF-1 is a hormone produced mostly in the liver in response to growth hormone.",
  "quellen": [
   {
    "titel": "NIDDK: Wachstumshormon und IGF-1",
    "titel_en": "NIDDK: Growth hormone and IGF-1",
    "url": "https://www.niddk.nih.gov/health-information/endocrine-diseases/acromegaly"
   }
  ],
  "langform": "Insulin-like Growth Factor 1",
  "langform_en": "Insulin-like growth factor 1",
  "text": "Insulin-like Growth Factor 1 entsteht überwiegend in der Leber, ausgelöst durch die Bindung von Wachstumshormon an Leberzellen, und zirkuliert größtenteils an Bindeproteine gekoppelt im Blut. Es bindet an den IGF-1-Rezeptor und vermittelt darüber einen Großteil der wachstumsbezogenen Effekte von Wachstumshormon auf Muskel-, Knochen- und Bindegewebe. Ein IGF-1-Analogon mit verlängerter Halbwertszeit wird in der Forschung als eigenständiges Werkzeug eingesetzt, unabhängig von der körpereigenen Regulation über Wachstumshormon.",
  "text_en": "Insulin-like growth factor 1 is produced mainly in the liver, triggered by growth hormone binding to liver cells, and circulates in the blood largely bound to carrier proteins. It binds the IGF-1 receptor and mediates much of growth hormone's effect on muscle, bone and connective tissue. An IGF-1 analogue with an extended half-life is used in research as a standalone tool, independent of the body's own regulation via growth hormone.",
  "synonyme": [
   "Somatomedin C"
  ],
  "synonyme_en": [
   "Somatomedin C"
  ],
  "siehe": [
   "wachstumshormon",
   "ghrh",
   "rezeptor"
  ],
  "wirkstoffe": [
   "igf-1-lr3"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "igf-1-lr3",
  "begriff": "IGF-1 LR3",
  "begriff_en": "IGF-1 LR3",
  "kategorie": "wirkstoff",
  "kurz": "Verändertes IGF-1-Analogon, in präklinischen Modellen untersucht.",
  "kurz_en": "Modified IGF-1 analogue investigated in preclinical models.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 7561636",
    "titel_en": "PubMed: Research publication, PMID 7561636",
    "url": "https://pubmed.ncbi.nlm.nih.gov/7561636/"
   }
  ],
  "text": "Die angeführte Arbeit untersucht Long R3 IGF-I im Meerschweinchenmodell und beschreibt eine geringere Bindung an IGF-Bindeproteine. Ergebnisse zu dieser veränderten Form sind nicht mit Befunden zum körpereigenen IGF-1 gleichzusetzen.",
  "text_en": "The cited paper investigates Long R3 IGF-I in guinea pigs and describes reduced affinity for IGF-binding proteins. Findings for this modified form are not interchangeable with findings for endogenous IGF-1.",
  "synonyme": [
   "Long R3 IGF-1",
   "LR3-IGF-1",
   "IGF-1 Long R3"
  ],
  "synonyme_en": [
   "Long R3 IGF-1",
   "LR3-IGF-1",
   "IGF-1 Long R3"
  ],
  "link": "wirkstoffe/igf-1-lr3.html"
 },
 {
  "slug": "in-vitro",
  "begriff": "In-vitro",
  "begriff_en": "In vitro",
  "kategorie": "studien",
  "kurz": "Versuch außerhalb eines lebenden Organismus, meist an Zellkulturen. Sagt nichts über eine Wirkung beim Menschen aus.",
  "kurz_en": "A test outside a living organism, usually on cell cultures. It says nothing about an effect in humans.",
  "quellen": [
   {
    "titel": "NCI: in vitro",
    "titel_en": "NCI: in vitro",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/in-vitro"
   }
  ],
  "text": "In-vitro-Studien untersuchen isolierte Zellen oder Moleküle in einer kontrollierten Umgebung wie einer Petrischale. Sie zeigen erste biochemische Effekte, aber der Zellkontext ersetzt keinen ganzen Organismus. Solche Daten gelten als reine Laborforschung und lassen keine Rückschlüsse auf Menschen zu.",
  "text_en": "In vitro studies examine isolated cells or molecules in a controlled setting such as a petri dish. They can show early biochemical effects, but the cell context does not replace a whole organism. This kind of data counts as lab research only and does not translate to humans.",
  "synonyme": [
   "in vitro"
  ],
  "synonyme_en": [
   "in vitro"
  ],
  "siehe": [
   "in-vivo",
   "praeklinisch",
   "tiermodell"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "in-vivo",
  "begriff": "In-vivo",
  "begriff_en": "In vivo",
  "kategorie": "studien",
  "kurz": "Untersuchung in einem lebenden Organismus. Der Begriff allein sagt nicht, ob Tier- oder Humandaten vorliegen.",
  "kurz_en": "An investigation in a living organism. The term alone does not distinguish animal from human data.",
  "quellen": [
   {
    "titel": "NCI: in vivo",
    "titel_en": "NCI: in vivo",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/in-vivo"
   }
  ],
  "text": "In vivo bedeutet, dass eine Untersuchung in einem lebenden Organismus stattfindet. Das kann ein Tier oder ein Mensch sein. Bei einem Forschungsergebnis muss deshalb immer das untersuchte Modell genannt werden. Ergebnisse aus Tieren lassen sich nicht unmittelbar auf Menschen übertragen.",
  "text_en": "In vivo means that an investigation takes place in a living organism. This may be an animal or a human. Research findings must therefore identify the model studied. Animal results cannot be directly transferred to humans.",
  "synonyme": [
   "in vivo"
  ],
  "synonyme_en": [
   "in vivo"
  ],
  "siehe": [
   "in-vitro",
   "tiermodell",
   "praeklinisch"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "inkretin",
  "begriff": "Inkretin",
  "begriff_en": "Incretin",
  "kategorie": "klassen",
  "kurz": "Inkretine sind Darmhormone, die nach dem Essen ausgeschüttet werden und an der Regulation der Insulinausschüttung beteiligt sind.",
  "kurz_en": "Incretins are gut hormones released after eating that are involved in regulating insulin release.",
  "quellen": [
   {
    "titel": "NIDDK: Grundlagen der Inkretinforschung",
    "titel_en": "NIDDK: Foundations of incretin research",
    "url": "https://www.niddk.nih.gov/news/archive/2021/story-discovery-medications-diabetes-obesity-emerged-research-pancreatic-hormone"
   }
  ],
  "text": "Inkretine sind eine Hormonklasse aus dem Darm, zu der GLP-1 und GIP zählen. Sie werden nach der Nahrungsaufnahme aus spezialisierten Darmzellen ausgeschüttet und binden an eigene Rezeptoren auf den Betazellen der Bauchspeicheldrüse. Über diesen Mechanismus ist die Insulinausschüttung nach oralem Zuckerkonsum stärker als nach intravenöser Gabe derselben Menge, ein Effekt, der als Inkretineffekt bezeichnet wird. Mehrere zugelassene und in Entwicklung befindliche Arzneimittel ahmen diesen Signalweg nach.",
  "text_en": "Incretins are a hormone class from the gut that includes GLP-1 and GIP. They are released from specialised gut cells after eating and bind their own receptors on pancreatic beta cells. Through this mechanism, insulin release after oral glucose intake is higher than after an intravenous dose of the same amount, an effect known as the incretin effect. Several approved and investigational medicines mimic this pathway.",
  "synonyme": [
   "Inkretinhormone"
  ],
  "synonyme_en": [
   "Incretin hormones"
  ],
  "siehe": [
   "glp-1",
   "gip",
   "peptidhormon",
   "rezeptor"
  ],
  "wirkstoffe": [
   "semaglutid",
   "tirzepatid",
   "retatrutid",
   "survodutid"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "ipamorelin",
  "begriff": "Ipamorelin",
  "begriff_en": "Ipamorelin",
  "kategorie": "wirkstoff",
  "kurz": "Synthetisches Pentapeptid, in Studien zur Wachstumshormon-Ausschüttung untersucht.",
  "kurz_en": "Synthetic pentapeptide investigated in studies of growth hormone release.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 9849822",
    "titel_en": "PubMed: Research publication, PMID 9849822",
    "url": "https://pubmed.ncbi.nlm.nih.gov/9849822/"
   }
  ],
  "text": "Die Entwicklungsarbeit beschreibt ein Pentapeptid und untersucht Rezeptorbezug sowie Hormonausschüttung in Zell- und Tiermodellen. Die dortigen Befunde lassen sich nicht pauschal auf Menschen übertragen.",
  "text_en": "The development paper describes a pentapeptide and investigates receptor involvement and hormone release in cellular and animal models. Those findings cannot be generally transferred to humans.",
  "synonyme": [
   "NNC 26-0161"
  ],
  "synonyme_en": [
   "NNC 26-0161"
  ],
  "link": "wirkstoffe/ipamorelin.html"
 },
 {
  "slug": "iso-17025",
  "begriff": "ISO 17025",
  "begriff_en": "ISO 17025",
  "kategorie": "labor",
  "kurz": "ISO 17025 ist die internationale Norm für die fachliche Kompetenz von Prüf- und Kalibrierlaboren.",
  "kurz_en": "ISO 17025 is the international standard for the technical competence of testing and calibration laboratories.",
  "quellen": [
   {
    "titel": "ISO/IEC 17025:2017: Kompetenz von Prüflaboren",
    "titel_en": "ISO/IEC 17025:2017: Competence of testing laboratories",
    "url": "https://www.iso.org/standard/66912.html"
   }
  ],
  "langform": "ISO/IEC 17025",
  "langform_en": "ISO/IEC 17025",
  "text": "Eine Akkreditierung nach dieser Norm bedeutet, dass Verfahren, Geräte und Personal eines Labors unabhängig bewertet wurden. Sie ist ein Qualitätsmerkmal des jeweiligen Labors, aber keine Garantie für ein bestimmtes CoA-Ergebnis.",
  "text_en": "Accreditation under this standard means a lab's procedures, equipment and staff were independently assessed. It is a quality marker for the laboratory itself, not a guarantee for any one specific CoA result.",
  "siehe": [
   "drittlabor",
   "coa"
  ],
  "seiten": [
   "methodik.html"
  ]
 },
 {
  "slug": "internationale-einheit",
  "begriff": "IU",
  "begriff_en": "IU",
  "kategorie": "handhabung",
  "kurz": "Die Internationale Einheit misst die biologische Wirkstärke eines Stoffes gegenüber einem Referenzstandard, nicht sein Gewicht.",
  "kurz_en": "The International Unit measures a substance's biological potency against a reference standard, not its weight.",
  "quellen": [
   {
    "titel": "WHO: Biologische Referenzstandards",
    "titel_en": "WHO: Biological reference standards",
    "url": "https://www.who.int/activities/providing-international-biological-reference-standards"
   }
  ],
  "langform": "Internationale Einheit",
  "langform_en": "International Unit",
  "text": "Bei Stoffen wie Wachstumshormon lässt sich die Menge nicht allein über das Gewicht sinnvoll angeben, weil unterschiedliche Chargen bei gleichem Gewicht unterschiedlich rein sein können. Die Internationale Einheit setzt die Menge stattdessen in Bezug zu einem festgelegten Referenzpräparat der WHO. Ein Milligramm eines Hormons entspricht deshalb nicht automatisch derselben Zahl an Einheiten wie ein Milligramm eines anderen Präparats.",
  "text_en": "For substances such as growth hormone, weight alone does not describe the amount meaningfully, because different batches can vary in purity at the same weight. The International Unit instead sets the amount in relation to a defined WHO reference preparation. One milligram of one hormone therefore does not automatically equal the same number of units as one milligram of a different preparation.",
  "synonyme": [
   "IE"
  ],
  "synonyme_en": [
   "IU"
  ],
  "siehe": [
   "milligramm-mikrogramm",
   "wachstumshormon"
  ]
 },
 {
  "slug": "kisspeptin",
  "begriff": "Kisspeptin-10",
  "begriff_en": "Kisspeptin-10",
  "kategorie": "wirkstoff",
  "kurz": "Peptidfamilie in der endokrinologischen Forschung; hier steht Kisspeptin-10 im Mittelpunkt.",
  "kurz_en": "Peptide family investigated in endocrine research; this catalogue focuses on kisspeptin-10.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 21632807",
    "titel_en": "PubMed: Research publication, PMID 21632807",
    "url": "https://pubmed.ncbi.nlm.nih.gov/21632807/"
   }
  ],
  "text": "Die angeführte Studie untersucht Kisspeptin-10 bei Männern. Andere Isoformen wie Kisspeptin-54 müssen getrennt betrachtet werden. Der Sammelname Kisspeptin allein beschreibt die untersuchte Form nicht vollständig.",
  "text_en": "The cited study investigates kisspeptin-10 in men. Other isoforms such as kisspeptin-54 must be considered separately. The umbrella term kisspeptin does not fully specify the form studied.",
  "synonyme": [
   "Metastin (45-54)",
   "KP-10"
  ],
  "synonyme_en": [
   "Metastin (45-54)",
   "KP-10"
  ],
  "link": "wirkstoffe/kisspeptin.html"
 },
 {
  "slug": "klinische-studie",
  "begriff": "Klinische Studie",
  "begriff_en": "Clinical trial",
  "kategorie": "studien",
  "kurz": "Studie an menschlichen Teilnehmern, meist in Phasen I bis III gegliedert. Die aussagekräftigste Studienart für den Menschen.",
  "kurz_en": "A study in human participants, usually structured in phases I to III. The most informative study type for humans.",
  "quellen": [
   {
    "titel": "NCI: clinical trial",
    "titel_en": "NCI: clinical trial",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/clinical-trial"
   }
  ],
  "text": "Eine klinische Studie untersucht eine medizinische Fragestellung mit Menschen. Studien unterscheiden sich unter anderem durch Größe, Vergleichsgruppe, Verblindung und untersuchte Endpunkte. Diese Merkmale bestimmen mit, wie belastbar ein Ergebnis ist. Eine registrierte oder veröffentlichte Studie allein belegt weder eine Zulassung noch die Qualität eines Shopprodukts.",
  "text_en": "A clinical study investigates a medical question involving people. Studies differ in size, comparison groups, blinding and outcomes measured. These features help determine how reliable a result is. Registration or publication of a study alone does not establish approval or the quality of a shop product.",
  "synonyme": [
   "klinische Prüfung"
  ],
  "synonyme_en": [
   "Clinical study"
  ],
  "siehe": [
   "studienphasen",
   "rct",
   "placebo",
   "doppelblind"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "konzentration",
  "begriff": "Konzentration",
  "begriff_en": "Concentration",
  "kategorie": "handhabung",
  "kurz": "Konzentration gibt an, wie viel eines Stoffes in einem bestimmten Flüssigkeitsvolumen gelöst ist, meist in mg pro ml.",
  "kurz_en": "Concentration states how much of a substance is dissolved in a given volume of liquid, usually in mg per ml.",
  "quellen": [
   {
    "titel": "IUPAC Gold Book: Massenkonzentration",
    "titel_en": "IUPAC Gold Book: Mass concentration",
    "url": "https://goldbook.iupac.org/terms/view/M03713"
   }
  ],
  "text": "Bei der Massenkonzentration wird die Masse eines bestimmten Stoffes auf das Volumen der fertigen Lösung bezogen, etwa in mg/ml. Pulvergewicht und tatsächliche Peptidmasse können sich unterscheiden. Die Angabe beschreibt eine Zusammensetzung, keine Anwendung.",
  "text_en": "Mass concentration relates the mass of a specified substance to the final solution volume, for example in mg/ml. Powder weight and actual peptide mass can differ. This value describes composition, not an application.",
  "siehe": [
   "rekonstitution",
   "milligramm-mikrogramm",
   "aliquot"
  ]
 },
 {
  "slug": "kpv",
  "begriff": "KPV",
  "begriff_en": "KPV",
  "kategorie": "wirkstoff",
  "kurz": "Aus Melanocortin abgeleitetes Tripeptid, in präklinischen Entzündungsmodellen untersucht.",
  "kurz_en": "Melanocortin-derived tripeptide investigated in preclinical inflammation models.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 18092346",
    "titel_en": "PubMed: Research publication, PMID 18092346",
    "url": "https://pubmed.ncbi.nlm.nih.gov/18092346/"
   }
  ],
  "text": "KPV steht für Lysin-Prolin-Valin, ein kurzes Fragment aus dem Melanocortin-Kontext. Die angeführte Arbeit untersucht es in Mausmodellen entzündlicher Darmerkrankungen. Das ist kein klinischer Anwendungsnachweis.",
  "text_en": "KPV stands for lysine-proline-valine, a short fragment in the melanocortin context. The cited paper investigates it in mouse models of inflammatory bowel disease. This is not clinical evidence of use.",
  "synonyme": [
   "Lys-Pro-Val",
   "alpha-MSH(11-13)"
  ],
  "synonyme_en": [
   "Lys-Pro-Val",
   "alpha-MSH(11-13)"
  ],
  "link": "wirkstoffe/kpv.html"
 },
 {
  "slug": "kupferpeptid",
  "begriff": "Kupferpeptide",
  "begriff_en": "Copper peptides",
  "kategorie": "klassen",
  "kurz": "Kupferpeptide sind Komplexe aus einem kleinen Peptid und einem Kupferion, am bekanntesten ist GHK-Cu.",
  "kurz_en": "Copper peptides are complexes of a small peptide and a copper ion, the best known being GHK-Cu.",
  "quellen": [
   {
    "titel": "GHK als Kupfer-bindendes Peptid in der Kristallographie",
    "titel_en": "GHK as a copper-binding peptide in crystallography",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7709198/"
   }
  ],
  "text": "Kupferpeptide sind Verbindungen, bei denen ein kleines Peptid ein Kupferion koordiniert bindet. Das bekannteste Beispiel ist GHK, ein aus drei Aminosäuren bestehendes Peptid, das im menschlichen Blutplasma, Speichel und Urin vorkommt und dort natürlicherweise an Kupfer gebunden ist. In seiner Kupfer-Komplexform wird GHK-Cu vor allem in der Hautforschung untersucht, mit ergänzenden präklinischen Daten zu Bindegewebe und Wundheilung.",
  "text_en": "Copper peptides are compounds in which a small peptide coordinates a copper ion. The best-known example is GHK, a three-amino-acid peptide found in human blood plasma, saliva and urine, where it naturally occurs bound to copper. In its copper-complex form, GHK-Cu is studied mainly in skin research, with additional preclinical data on connective tissue and wound healing.",
  "synonyme": [
   "GHK-Cu-Komplexe"
  ],
  "synonyme_en": [
   "GHK-Cu complexes"
  ],
  "siehe": [
   "aminosaeure",
   "peptid"
  ],
  "wirkstoffe": [
   "ghk-cu"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "lagerung",
  "begriff": "Lagerung",
  "begriff_en": "Storage",
  "kategorie": "handhabung",
  "kurz": "Lagerung beschreibt, wie ein Peptid vor Gebrauch aufbewahrt wird, je nach Zustand meist kühl, trocken und dunkel.",
  "kurz_en": "Storage describes how a peptide is kept before use, usually cool, dry and dark depending on its state.",
  "quellen": [
   {
    "titel": "Hoofnagle et al. (2016): Peptidanalytik und Laborhandhabung",
    "titel_en": "Hoofnagle et al. (2016): Peptide analysis and laboratory handling",
    "url": "https://pubmed.ncbi.nlm.nih.gov/26719571/"
   }
  ],
  "text": "Stabilität hängt unter anderem von Sequenz, Formulierung und Bedingungen ab. Maßgeblich sind die Spezifikation und belastbare Stabilitätsdaten des konkreten Materials.",
  "text_en": "Stability depends on sequence, formulation and conditions, among other factors. The material’s specification and substantiated stability data are decisive.",
  "siehe": [
   "lyophilisat",
   "lichtschutz",
   "rekonstitution"
  ]
 },
 {
  "slug": "lichtschutz",
  "begriff": "Lichtschutz",
  "begriff_en": "Light Protection",
  "kategorie": "handhabung",
  "kurz": "Lichtschutz bezeichnet Maßnahmen, die eine Probe vor Lichteinwirkung bewahren, etwa dunkle Fläschchen oder Lagerung im Dunkeln.",
  "kurz_en": "Light protection covers measures that shield a sample from light exposure, such as amber vials or storage in the dark.",
  "quellen": [
   {
    "titel": "ICH Q1B: Photostabilitätsprüfung",
    "titel_en": "ICH Q1B: Photostability testing",
    "url": "https://www.ema.europa.eu/en/scientific-guidelines/ich-q1b-photostability-testing-new-active-substances-medicinal-products"
   }
  ],
  "text": "Photostabilitätsprüfungen untersuchen, ob Licht eine Substanz oder Formulierung verändert. Geeignete Verpackung kann die Exposition begrenzen. Die benötigten Bedingungen sind produktspezifisch; Lichtschutz allein belegt keine bestimmte Haltbarkeit.",
  "text_en": "Photostability tests investigate whether light changes a substance or formulation. Suitable packaging can limit exposure. Required conditions are product-specific; light protection alone does not establish a particular shelf life.",
  "siehe": [
   "lagerung",
   "lyophilisat"
  ]
 },
 {
  "slug": "ll-37",
  "begriff": "LL-37",
  "begriff_en": "LL-37",
  "kategorie": "wirkstoff",
  "kurz": "Körpereigenes antimikrobielles Peptid, auch Gegenstand klinischer Wundforschung.",
  "kurz_en": "Endogenous antimicrobial peptide also investigated in clinical wound research.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 25041740",
    "titel_en": "PubMed: Research publication, PMID 25041740",
    "url": "https://pubmed.ncbi.nlm.nih.gov/25041740/"
   }
  ],
  "text": "Die verlinkte randomisierte Studie untersucht LL-37 bei schwer heilenden venösen Beingeschwüren. Ihre Ergebnisse betreffen das konkrete Studienpräparat und Studiendesign, nicht jedes Produkt mit der Bezeichnung LL-37.",
  "text_en": "The linked randomised trial investigates LL-37 in hard-to-heal venous leg ulcers. Its findings concern the specific study preparation and design, not every product labelled LL-37.",
  "synonyme": [
   "Cathelicidin",
   "hCAP18(134-170)",
   "Human Cathelicidin"
  ],
  "synonyme_en": [
   "Cathelicidin",
   "hCAP18(134-170)",
   "Human Cathelicidin"
  ],
  "link": "wirkstoffe/ll-37.html"
 },
 {
  "slug": "lyophilisat",
  "begriff": "Lyophilisat",
  "begriff_en": "Lyophilisate",
  "kategorie": "handhabung",
  "kurz": "Ein durch Gefriertrocknung erhaltenes Material, beispielsweise ein Pulver im Laborfläschchen.",
  "kurz_en": "Material obtained by freeze-drying, such as a powder in a laboratory vial.",
  "quellen": [
   {
    "titel": "FDA: Lyophilisation",
    "titel_en": "FDA: Lyophilization",
    "url": "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/lyophilization-parenteral-793"
   }
  ],
  "text": "Bei der Gefriertrocknung wird Wasser aus einer gefrorenen Probe unter Vakuum entfernt. Zurück bleibt ein trockenes Pulver oder ein poröser Kuchen. Stabilität und Haltbarkeit hängen von Substanz, Formulierung und Verpackung ab; die Form allein garantiert sie nicht.",
  "text_en": "Freeze-drying removes water from a frozen sample under vacuum. It leaves a dry powder or porous cake. Stability and shelf life depend on the substance, formulation and packaging; the physical form alone does not guarantee them.",
  "siehe": [
   "rekonstitution",
   "lagerung",
   "lichtschutz",
   "charge"
  ]
 },
 {
  "slug": "massenspektrometrie",
  "begriff": "Massenspektrometrie",
  "begriff_en": "Mass spectrometry",
  "kategorie": "labor",
  "kurz": "Massenspektrometrie bestimmt das Molekulargewicht einer Probe und bestätigt damit, um welches Molekül es sich handelt.",
  "kurz_en": "Mass spectrometry determines a sample's molecular weight and so confirms which molecule is actually present.",
  "quellen": [
   {
    "titel": "FDA: Analytik komplexer Gemische und Peptide",
    "titel_en": "FDA: Analysis of complex mixtures and peptides",
    "url": "https://www.fda.gov/industry/generic-drug-user-fee-amendments/fys-2013-2017-regulatory-science-report-complex-mixtures-and-peptides"
   }
  ],
  "text": "In Kombination mit Flüssigchromatographie (LC-MS) lässt sich so die Identität eines Peptids prüfen, unabhängig vom Reinheitswert. Ein hoher Reinheitswert ohne diese Prüfung sagt nichts darüber aus, ob überhaupt das richtige Molekül vorliegt.",
  "text_en": "Combined with liquid chromatography (LC-MS), it verifies a peptide's identity independently of its purity value. A high purity value without this check says nothing about whether the correct molecule is present at all.",
  "synonyme": [
   "MS"
  ],
  "synonyme_en": [
   "MS"
  ],
  "siehe": [
   "identitaet",
   "hplc",
   "coa"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "melanocortin",
  "begriff": "Melanocortine",
  "begriff_en": "Melanocortins",
  "kategorie": "klassen",
  "kurz": "Melanocortine sind körpereigene Peptidhormone aus POMC, die über fünf Rezeptoren Haut, Appetit und Sexualfunktion regulieren.",
  "kurz_en": "Melanocortins are peptide hormones derived from POMC that bind five receptor types regulating skin, appetite and sexual response.",
  "quellen": [
   {
    "titel": "NCBI Endotext: Melanocortin-Rezeptoren",
    "titel_en": "NCBI Endotext: Melanocortin receptors",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK279118/"
   }
  ],
  "text": "Melanocortine sind eine Familie körpereigener Peptidhormone, die aus dem Vorläuferprotein Proopiomelanocortin (POMC) entstehen, darunter alpha-MSH und ACTH. Sie binden an fünf verschiedene Melanocortin-Rezeptoren (MC1R bis MC5R), die unter anderem Hautpigmentierung, Appetit, Energiehaushalt, Entzündungsprozesse und sexuelle Reaktion regulieren. Synthetische Melanocortin-Rezeptor-Agonisten setzen gezielt an einzelnen dieser Rezeptoren an.",
  "text_en": "Melanocortins are a family of peptide hormones derived from the precursor protein proopiomelanocortin (POMC), including alpha-MSH and ACTH. They bind five distinct melanocortin receptors (MC1R to MC5R) that regulate skin pigmentation, appetite, energy balance, inflammatory processes and sexual response, among other functions. Synthetic melanocortin receptor agonists target individual receptors within this system.",
  "synonyme": [
   "Melanocortin-System"
  ],
  "synonyme_en": [
   "Melanocortin system"
  ],
  "siehe": [
   "rezeptor",
   "agonist",
   "peptidhormon"
  ],
  "wirkstoffe": [
   "melanotan-2",
   "pt-141"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "melanotan-2",
  "begriff": "Melanotan II",
  "begriff_en": "Melanotan II",
  "kategorie": "wirkstoff",
  "kurz": "Synthetisches Melanocortin-Analogon, in frühen klinischen Studien untersucht.",
  "kurz_en": "Synthetic melanocortin analogue investigated in early clinical studies.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 8637402",
    "titel_en": "PubMed: Research publication, PMID 8637402",
    "url": "https://pubmed.ncbi.nlm.nih.gov/8637402/"
   }
  ],
  "text": "Die angeführte frühe Phase-I-Arbeit untersucht Melanotan-II in einer kleinen Pilotstudie. Daraus lässt sich keine gesicherte Nutzen-Risiko-Bewertung für eine allgemeine Anwendung ableiten.",
  "text_en": "The cited early phase I paper investigates melanotan II in a small pilot study. It does not establish a reliable benefit-risk assessment for general use.",
  "synonyme": [
   "MT-2",
   "MT2"
  ],
  "synonyme_en": [
   "MT-2",
   "MT2"
  ],
  "link": "wirkstoffe/melanotan-2.html"
 },
 {
  "slug": "metaanalyse",
  "begriff": "Metaanalyse",
  "begriff_en": "Meta-analysis",
  "kategorie": "studien",
  "kurz": "Statistische Zusammenfassung mehrerer Studien zu einer gemeinsamen Fragestellung.",
  "kurz_en": "A statistical synthesis of multiple studies addressing a shared question.",
  "quellen": [
   {
    "titel": "NCI: meta analysis",
    "titel_en": "NCI: meta analysis",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/meta-analysis"
   }
  ],
  "text": "Eine Metaanalyse führt vergleichbare Ergebnisse mehrerer Studien statistisch zusammen. Sie kann präzisere Schätzungen liefern. Ihre Aussagekraft hängt von der Qualität, Vergleichbarkeit und vollständigen Erfassung der eingeschlossenen Studien ab.",
  "text_en": "A meta-analysis statistically combines comparable results from multiple studies. It can provide more precise estimates. Its strength depends on the quality, comparability and completeness of the included evidence.",
  "siehe": [
   "klinische-studie",
   "peer-review"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "milligramm-mikrogramm",
  "begriff": "Milligramm / Mikrogramm",
  "begriff_en": "Milligram / Microgram",
  "kategorie": "handhabung",
  "kurz": "Ein Milligramm entspricht 1000 Mikrogramm, die gängige Masseneinheit für kleine Peptidmengen auf Etiketten und CoAs.",
  "kurz_en": "One milligram equals 1000 micrograms, the standard mass unit for small peptide amounts on labels and CoAs.",
  "quellen": [
   {
    "titel": "BIPM: SI-Präfixe",
    "titel_en": "BIPM: SI prefixes",
    "url": "https://www.bipm.org/en/committees/cg/cgpm/11-1960/resolution-12"
   }
  ],
  "text": "Milligramm (mg) und Mikrogramm (µg) sind beides Untereinheiten von Gramm und unterscheiden sich um den Faktor 1000. Auf Vial-Etiketten und in CoAs wird die Peptidmenge meist in Milligramm angegeben, während einzelne Bestandteilsangaben teils in Mikrogramm erscheinen. Der Rechner auf dieser Seite rechnet zwischen Gramm, Milligramm und Mikrogramm rein mathematisch um.",
  "text_en": "Milligrams (mg) and micrograms (µg) are both subunits of the gram and differ by a factor of 1000. Vial labels and CoAs usually state the peptide amount in milligrams, while individual component figures sometimes appear in micrograms. The calculator on this page converts between grams, milligrams and micrograms on a purely mathematical basis.",
  "siehe": [
   "konzentration",
   "internationale-einheit"
  ],
  "seiten": [
   "rechner.html"
  ]
 },
 {
  "slug": "mitochondriales-peptid",
  "begriff": "Mitochondriale Peptide",
  "begriff_en": "Mitochondrial peptides",
  "kategorie": "klassen",
  "kurz": "Mitochondriale Peptide setzen an der Energieproduktion der Zelle an oder stammen aus mitochondrialer DNA.",
  "kurz_en": "Mitochondrial peptides target cellular energy production or originate from mitochondrial DNA.",
  "quellen": [
   {
    "titel": "Lee et al. (2015): MOTS-c, präklinische Forschung",
    "titel_en": "Lee et al. (2015): MOTS-c, preclinical research",
    "url": "https://doi.org/10.1016/j.cmet.2015.02.009"
   },
   {
    "titel": "Cho et al. (2007): Mitochondriale Zielstrukturen im Rattenmodell",
    "titel_en": "Cho et al. (2007): Mitochondrial targets in a rat model",
    "url": "https://pubmed.ncbi.nlm.nih.gov/17429296/"
   }
  ],
  "text": "Mitochondriale Peptide sind keine einheitliche Substanzklasse im klassischen Sinn. Der Begriff fasst Peptide zusammen, die entweder an der inneren Mitochondrienmembran binden oder aus mitochondrialer statt aus Zellkern-DNA kodiert werden. Zur zweiten Gruppe zählt ein kurzes, aus dem mitochondrialen 12S-rRNA-Gen abgeleitetes Peptid, das in Stoffwechselstudien untersucht wird. Ein weiteres Beispiel bindet an Cardiolipin in der inneren Membran und wird in der Forschung zu Zellalterung und Energiestoffwechsel eingesetzt.",
  "text_en": "Mitochondrial peptides are not a single substance class in the classical sense. The term groups together peptides that either bind at the inner mitochondrial membrane or are encoded by mitochondrial rather than nuclear DNA. The second group includes a short peptide derived from the mitochondrial 12S rRNA gene, studied in metabolic research. Another example binds cardiolipin in the inner membrane and is used in research on cellular ageing and energy metabolism.",
  "synonyme": [
   "Mitochondrien-Peptide"
  ],
  "synonyme_en": [
   "Mitochondrial peptides"
  ],
  "siehe": [
   "praeklinisch",
   "in-vitro"
  ],
  "wirkstoffe": [
   "mots-c",
   "ss-31"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "mots-c",
  "begriff": "MOTS-c",
  "begriff_en": "MOTS-c",
  "kategorie": "wirkstoff",
  "kurz": "Aus mitochondrialer DNA abgeleitetes Peptid, in präklinischen Stoffwechselmodellen untersucht.",
  "kurz_en": "Mitochondrial DNA-derived peptide investigated in preclinical metabolic models.",
  "quellen": [
   {
    "titel": "Lee et al. (2015): MOTS-c, präklinische Forschung",
    "titel_en": "Lee et al. (2015): MOTS-c, preclinical research",
    "url": "https://doi.org/10.1016/j.cmet.2015.02.009"
   }
  ],
  "text": "Die Entdeckungsarbeit beschreibt eine kurze Sequenz aus der mitochondrialen DNA und untersucht sie in Zell- und Tiermodellen. Die Zuordnung zur mitochondrialen Forschung belegt keinen Nutzen eines angebotenen Produkts.",
  "text_en": "The discovery paper describes a short sequence encoded in mitochondrial DNA and investigates it in cellular and animal models. Its role in mitochondrial research does not establish a benefit of a marketed product.",
  "synonyme": [
   "Mitochondrial-Derived Peptide MOTS-c",
   "Mitochondrial Open Reading Frame of the 12S rRNA Type-c"
  ],
  "synonyme_en": [
   "Mitochondrial-Derived Peptide MOTS-c",
   "Mitochondrial Open Reading Frame of the 12S rRNA Type-c"
  ],
  "link": "wirkstoffe/mots-c.html"
 },
 {
  "slug": "neuropeptid",
  "begriff": "Neuropeptid",
  "begriff_en": "Neuropeptide",
  "kategorie": "grundlagen",
  "kurz": "Ein Peptid, das im Nervensystem als Signalmolekül zwischen Zellen dient.",
  "kurz_en": "A peptide that acts as a signalling molecule between cells in the nervous system.",
  "quellen": [
   {
    "titel": "Purves et al.: Peptid-Botenstoffe",
    "titel_en": "Purves et al.: Peptide neurotransmitters",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK10873/"
   }
  ],
  "text": "Neuropeptide sind Peptide, die von Nervenzellen freigesetzt werden und dort als Botenstoffe wirken. Sie unterscheiden sich von klassischen Neurotransmittern durch ihre größere Molekülstruktur und binden ebenfalls an spezifische Rezeptoren auf Zielzellen. In der Forschung dienen Neuropeptide unter anderem dazu, Signalwege im zentralen Nervensystem zu kartieren.",
  "text_en": "Neuropeptides are peptides released by nerve cells that act as signalling molecules within the nervous system. They differ from classic neurotransmitters in their larger molecular structure and also bind to specific receptors on target cells. In research, neuropeptides are used among other things to map signalling pathways in the central nervous system.",
  "siehe": [
   "peptid",
   "peptidhormon",
   "rezeptor"
  ]
 },
 {
  "slug": "nootropikum",
  "begriff": "Nootropika",
  "begriff_en": "Nootropics",
  "kategorie": "klassen",
  "kurz": "Nootropika sind eine breite Substanzklasse, die im Zusammenhang mit Gedächtnis, Lernen oder Stressverarbeitung untersucht wird.",
  "kurz_en": "Nootropics are a broad substance class studied in relation to memory, learning or stress processing.",
  "quellen": [
   {
    "titel": "Giurgea (1972): Ursprung des Nootropika-Begriffs",
    "titel_en": "Giurgea (1972): Origin of the nootropic concept",
    "url": "https://pubmed.ncbi.nlm.nih.gov/4541214/"
   }
  ],
  "text": "Der von Giurgea 1972 geprägte Begriff bezeichnet Substanzen, die im Zusammenhang mit kognitiven Funktionen untersucht werden. Die Bezeichnung allein belegt weder Nutzen noch Sicherheit. Unterschiedliche Stoffe und Studiendesigns müssen einzeln beurteilt werden.",
  "text_en": "Coined by Giurgea in 1972, the term describes substances investigated in relation to cognitive functions. The label alone establishes neither benefit nor safety. Different substances and study designs require separate assessment.",
  "synonyme": [
   "Smart Drugs"
  ],
  "synonyme_en": [
   "Smart Drugs"
  ],
  "siehe": [
   "neuropeptid",
   "rezeptor"
  ],
  "wirkstoffe": [
   "semax",
   "selank",
   "dihexa"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "oligopeptid",
  "begriff": "Oligopeptid",
  "begriff_en": "Oligopeptide",
  "kategorie": "grundlagen",
  "kurz": "Eine kurze Aminosäurekette, eingeteilt nach Länge in Di-, Tri- und Oligopeptid.",
  "kurz_en": "A short amino acid chain, classified by length as di-, tri- or oligopeptide.",
  "quellen": [
   {
    "titel": "Alberts et al.: Proteinstruktur",
    "titel_en": "Alberts et al.: Protein structure",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK26830/"
   }
  ],
  "langform": "Di-, Tri- und Oligopeptid",
  "langform_en": "Di-, tri- and oligopeptide",
  "text": "Oligopeptide bestehen aus wenigen Aminosäuren. Zwei ergeben ein Dipeptid, drei ein Tripeptid. Die Grenze zu längeren Polypeptiden ist eine Benennungskonvention, kein eindeutiger Wechsel der Molekülart.",
  "text_en": "Oligopeptides contain a small number of amino acids. Two form a dipeptide and three a tripeptide. The boundary with longer polypeptides is a naming convention, not a distinct change in molecular type.",
  "synonyme": [
   "Dipeptid",
   "Tripeptid"
  ],
  "synonyme_en": [
   "Dipeptide",
   "Tripeptide"
  ],
  "siehe": [
   "peptid",
   "aminosaeure",
   "protein"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "oxytocin",
  "begriff": "Oxytocin",
  "begriff_en": "Oxytocin",
  "kategorie": "wirkstoff",
  "kurz": "Körpereigenes Peptidhormon, auch in Studien zu sozialem Verhalten untersucht.",
  "kurz_en": "Endogenous peptide hormone also investigated in studies of social behaviour.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 15931222",
    "titel_en": "PubMed: Research publication, PMID 15931222",
    "url": "https://pubmed.ncbi.nlm.nih.gov/15931222/"
   }
  ],
  "text": "Die verlinkte Verhaltensstudie untersucht Entscheidungen in einem experimentellen Vertrauensspiel. Derartige Ergebnisse belegen weder allgemein bessere soziale Beziehungen noch die Sicherheit frei angebotener Produkte.",
  "text_en": "The linked behavioural study investigates decisions in an experimental trust game. Such findings establish neither generally improved social relationships nor the safety of freely marketed products.",
  "synonyme": [
   "OXT",
   "Pitocin"
  ],
  "synonyme_en": [
   "OXT",
   "Pitocin"
  ],
  "link": "wirkstoffe/oxytocin.html"
 },
 {
  "slug": "partnercode",
  "begriff": "Partnercode",
  "begriff_en": "Partner code",
  "kategorie": "vergleich",
  "kurz": "Ein einem Partnerprogramm zugeordneter Code, dessen Bedingungen der jeweilige Anbieter festlegt.",
  "kurz_en": "A code associated with an affiliate programme, subject to the supplier’s terms.",
  "quellen": [
   {
    "titel": "Peptide Compass: Eigener Affiliate-Hinweis",
    "titel_en": "Peptide Compass: Our affiliate disclosure",
    "url": "https://peptidkompass.com/affiliate-hinweis.html"
   }
  ],
  "text": "Ein Partnercode wird einem Partnerprogramm zugeordnet. Ob ein Rabatt oder eine Provision entsteht, hängt von den jeweiligen Bedingungen ab. Die aktuell dokumentierten Partnerschaften und Codes stehen im Affiliate-Hinweis; sie verändern den Dokumentationsscore nicht.",
  "text_en": "A partner code is associated with an affiliate programme. Whether it generates a discount or commission depends on the applicable terms. Currently documented partnerships and codes are listed in our affiliate disclosure; they do not change the documentation score.",
  "siehe": [
   "affiliate-link"
  ],
  "seiten": [
   "affiliate-hinweis.html",
   "deals.html"
  ]
 },
 {
  "slug": "peer-review",
  "begriff": "Peer-Review",
  "begriff_en": "Peer review",
  "kategorie": "studien",
  "kurz": "Fachliche Begutachtung eines Studienmanuskripts durch unabhängige Experten vor der Veröffentlichung.",
  "kurz_en": "Expert review of a study manuscript by independent specialists before publication.",
  "quellen": [
   {
    "titel": "NIH: Regeln wissenschaftlicher Begutachtung",
    "titel_en": "NIH: Guidelines for scientific peer review",
    "url": "https://oir.nih.gov/system/files/media/file/2026-01/guidelines-conduct_research.pdf"
   }
  ],
  "text": "Beim Peer-Review prüfen unabhängige Fachleute vor der Veröffentlichung Methodik, Datenauswertung und Schlussfolgerungen eines Manuskripts. Sie können Korrekturen verlangen oder die Arbeit ablehnen. Eine begutachtete Veröffentlichung gilt als vertrauenswürdiger als ein unbegutachteter Text, ist aber kein Garant für Fehlerfreiheit.",
  "text_en": "In peer review, independent experts check the methodology, data analysis and conclusions of a manuscript before publication. They can request corrections or reject the work. A peer-reviewed publication is considered more trustworthy than an unreviewed text, though it is no guarantee against error.",
  "siehe": [
   "preprint",
   "pubmed"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "pentadeca-arginate",
  "begriff": "Pentadeca Arginat (PDA)",
  "begriff_en": "Pentadeca Arginate",
  "kategorie": "wirkstoff",
  "kurz": "Handelsbezeichnung für eine als Arginin-Salz von BPC-157 angebotene Form.",
  "kurz_en": "Trade designation for a form marketed as an arginine salt of BPC-157.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 27847966",
    "titel_en": "PubMed: Research publication, PMID 27847966",
    "url": "https://pubmed.ncbi.nlm.nih.gov/27847966/"
   }
  ],
  "text": "Die angeführte Primärarbeit untersucht BPC-157. Sie bestätigt keine besonderen Eigenschaften einer als Pentadeca Arginat verkauften Salzform. Ein eigener belastbarer Nachweis für bessere Löslichkeit oder Stabilität dieser Handelsform ist hier nicht ermittelt.",
  "text_en": "The cited original study investigates BPC-157. It does not establish special properties of a salt form sold as pentadeca arginate. A reliable, dedicated source demonstrating superior solubility or stability of this marketed form has not been established here.",
  "synonyme": [
   "PDA",
   "BPC-157 Arginat-Salz"
  ],
  "synonyme_en": [
   "PDA",
   "BPC-157 arginate salt"
  ],
  "link": "wirkstoffe/pentadeca-arginate.html"
 },
 {
  "slug": "peptid",
  "begriff": "Peptid",
  "begriff_en": "Peptide",
  "kategorie": "grundlagen",
  "kurz": "Eine kurze Kette aus Aminosäuren, verbunden über Peptidbindungen.",
  "kurz_en": "A short chain of amino acids linked by peptide bonds.",
  "quellen": [
   {
    "titel": "NCI: peptide",
    "titel_en": "NCI: peptide",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/peptide"
   }
  ],
  "text": "Zwei verknüpfte Aminosäuren bilden ein Dipeptid, drei ein Tripeptid. Bei längeren Ketten spricht man auch von Polypeptiden. Eine feste Grenze von 50 Aminosäuren trennt Peptide und Proteine nicht in jedem Fachgebiet.",
  "text_en": "Two linked amino acids form a dipeptide; three form a tripeptide. Longer chains are also called polypeptides. A fixed boundary of 50 amino acids does not distinguish peptides from proteins in every field.",
  "synonyme": [
   "Peptide"
  ],
  "synonyme_en": [
   "Peptides"
  ],
  "siehe": [
   "aminosaeure",
   "peptidbindung",
   "oligopeptid",
   "protein"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "peptidbindung",
  "begriff": "Peptidbindung",
  "begriff_en": "Peptide bond",
  "kategorie": "grundlagen",
  "kurz": "Die chemische Verbindung, die zwei Aminosäuren zu einer Kette verknüpft.",
  "kurz_en": "The chemical link that joins two amino acids into a chain.",
  "quellen": [
   {
    "titel": "Alberts et al.: Proteinstruktur",
    "titel_en": "Alberts et al.: Protein structure",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK26830/"
   }
  ],
  "text": "Eine Peptidbindung entsteht, wenn die Carboxylgruppe einer Aminosäure mit der Aminogruppe der nächsten reagiert und dabei ein Wassermolekül abspaltet. Diese Verbindung wiederholt sich entlang der gesamten Kette und bildet das Rückgrat von Peptiden und Proteinen. Die Reihenfolge der so verknüpften Aminosäuren legt die Sequenz fest.",
  "text_en": "A peptide bond forms when the carboxyl group of one amino acid reacts with the amino group of the next, releasing a water molecule in the process. This link repeats along the entire chain and forms the backbone of peptides and proteins. The order of the amino acids joined this way sets the sequence.",
  "siehe": [
   "aminosaeure",
   "peptid",
   "sequenz"
  ]
 },
 {
  "slug": "peptidgehalt",
  "begriff": "Peptidgehalt",
  "begriff_en": "Net Peptide Content",
  "kategorie": "labor",
  "kurz": "Peptidgehalt (Net Peptide Content) gibt an, welcher Massenanteil eines Pulvers tatsächlich aus dem Peptid selbst besteht.",
  "kurz_en": "Net peptide content states what share of a powder's mass is actually the peptide itself.",
  "quellen": [
   {
    "titel": "Hoofnagle et al. (2016): Peptidanalytik und Laborhandhabung",
    "titel_en": "Hoofnagle et al. (2016): Peptide analysis and laboratory handling",
    "url": "https://pubmed.ncbi.nlm.nih.gov/26719571/"
   }
  ],
  "text": "Peptidgehalt bezeichnet den tatsächlichen Peptidanteil einer Probe. Wasser und andere Bestandteile können Pulvermasse und Peptidmasse auseinanderfallen lassen.",
  "text_en": "Peptide content is the actual peptide fraction of a sample. Water and other constituents can make powder mass differ from peptide mass.",
  "siehe": [
   "reinheit",
   "gegenion",
   "coa"
  ],
  "seiten": [
   "methodik.html"
  ]
 },
 {
  "slug": "peptidhormon",
  "begriff": "Peptidhormon",
  "begriff_en": "Peptide hormone",
  "kategorie": "grundlagen",
  "kurz": "Ein körpereigenes Hormon, das chemisch aus einer Aminosäurekette besteht.",
  "kurz_en": "A hormone the body produces that is chemically an amino acid chain.",
  "quellen": [
   {
    "titel": "Purves et al.: Peptid-Botenstoffe",
    "titel_en": "Purves et al.: Peptide neurotransmitters",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK10873/"
   }
  ],
  "text": "Ein Peptidhormon ist ein Botenstoff, der aus einer Kette von Aminosäuren aufgebaut ist, im Unterschied zu Steroidhormonen, die auf Cholesterin basieren. Peptidhormone werden in Drüsen oder spezialisierten Zellen gebildet und binden an Rezeptoren auf Zielzellen. Insulin ist ein bekanntes Beispiel für ein körpereigenes Peptidhormon.",
  "text_en": "A peptide hormone is a signalling molecule built from a chain of amino acids, unlike steroid hormones, which are based on cholesterol. Peptide hormones are produced in glands or specialised cells and bind to receptors on target cells. Insulin is a well-known example of an endogenous peptide hormone.",
  "siehe": [
   "peptid",
   "rezeptor",
   "neuropeptid"
  ]
 },
 {
  "slug": "placebo",
  "begriff": "Placebo",
  "begriff_en": "Placebo",
  "kategorie": "studien",
  "kurz": "Scheinpräparat ohne Wirkstoff, mit dem eine echte Substanz in Studien verglichen wird. Trennt echte von erwarteten Effekten.",
  "kurz_en": "A dummy preparation with no active ingredient, used to compare against a real substance in a trial. Separates real from expected effects.",
  "quellen": [
   {
    "titel": "NCI: placebo",
    "titel_en": "NCI: placebo",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/placebo"
   }
  ],
  "text": "Ein Placebo sieht aus wie das geprüfte Präparat, enthält aber keinen Wirkstoff. Im Studiendesign dient es als Vergleichsgruppe, um zu zeigen, welcher Anteil einer Reaktion auf die Erwartung der Teilnehmer zurückgeht statt auf die Substanz selbst. Placebokontrolle ist ein zentrales Merkmal aussagekräftiger klinischer Studien, oft kombiniert mit Verblindung.",
  "text_en": "A placebo looks like the tested preparation but contains no active ingredient. In a study design it serves as the comparison group, showing how much of a response comes from participant expectation rather than the substance itself. Placebo control is a core feature of informative clinical trials, often combined with blinding.",
  "synonyme": [
   "Scheinpräparat"
  ],
  "synonyme_en": [
   "Inactive preparation"
  ],
  "siehe": [
   "rct",
   "doppelblind"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "praeklinisch",
  "begriff": "Präklinisch",
  "begriff_en": "Preclinical",
  "kategorie": "studien",
  "kurz": "Forschungsstufe vor dem Einsatz am Menschen: Zellkultur und Tiermodell. Klinische Studien folgen erst danach.",
  "kurz_en": "The research stage before any human use: cell culture and animal model. Clinical trials follow only after this stage.",
  "quellen": [
   {
    "titel": "NCI: preclinical study",
    "titel_en": "NCI: preclinical study",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/preclinical-study"
   }
  ],
  "text": "Präklinische Forschung umfasst In-vitro- und In-vivo-Versuche, mit denen erste Effekte und die Sicherheit geprüft werden, bevor eine Substanz je an Menschen getestet wird. Sie liefert die Datenbasis für eine mögliche spätere klinische Studie. Ein präklinisches Ergebnis allein begründet keine Aussage über Menschen.",
  "text_en": "Preclinical research covers in vitro and in vivo experiments that check early effects and safety before a substance is ever tested in humans. It provides the data basis for a possible later clinical trial. A preclinical result alone does not support a claim about humans.",
  "synonyme": [
   "Präklinik"
  ],
  "synonyme_en": [
   "Preclinical research"
  ],
  "siehe": [
   "in-vitro",
   "in-vivo",
   "tiermodell",
   "klinische-studie"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "preis-pro-mg",
  "begriff": "Preis pro Milligramm",
  "begriff_en": "Price per milligram",
  "kategorie": "vergleich",
  "kurz": "Preis pro Milligramm macht Angebote unterschiedlicher Packungsgrößen direkt vergleichbar.",
  "kurz_en": "Price per milligram makes offers with different pack sizes directly comparable.",
  "quellen": [
   {
    "titel": "Peptide Compass: Eigene Vergleichsmethodik",
    "titel_en": "Peptide Compass: Our comparison methodology",
    "url": "https://peptidkompass.com/methodik.html"
   }
  ],
  "text": "Der Wert entsteht aus dem Listenpreis geteilt durch den Milligrammgehalt eines Produkts, verglichen für denselben Wirkstoff und dieselbe Währung. Versand, Verfügbarkeit und Rabattbedingungen fließen nur ein, wenn sie ausdrücklich belegt sind. Ein niedrigerer Wert sagt nichts über Reinheit oder Dokumentation aus.",
  "text_en": "The figure is the list price divided by the milligram content of a product, compared for the same active substance and currency. Shipping, availability and discount terms are included only when explicitly documented. A lower figure says nothing about purity or documentation.",
  "siehe": [
   "dokumentationsscore"
  ],
  "seiten": [
   "vergleich.html",
   "rechner.html"
  ]
 },
 {
  "slug": "preprint",
  "begriff": "Preprint",
  "begriff_en": "Preprint",
  "kategorie": "studien",
  "kurz": "Studienmanuskript, das vor dem Peer-Review veröffentlicht wird. Ergebnisse gelten als vorläufig, noch nicht unabhängig geprüft.",
  "kurz_en": "A study manuscript published before peer review. Results count as preliminary, not yet independently checked.",
  "quellen": [
   {
    "titel": "NLM: Grenzen von PubMed und Preprints",
    "titel_en": "NLM: Limitations of PubMed and preprints",
    "url": "https://pubmed.ncbi.nlm.nih.gov/disclaimer/"
   }
  ],
  "text": "Ein Preprint wird auf einer offenen Plattform veröffentlicht, bevor eine Fachzeitschrift ihn begutachtet hat. Ergebnisse stehen so früher öffentlich, bedeuten aber, dass Methodik und Schlussfolgerungen noch nicht unabhängig geprüft wurden. Inhalte aus einem Preprint sollten vorsichtiger bewertet werden als eine begutachtete Publikation.",
  "text_en": "A preprint is published on an open platform before a journal has reviewed it. This speeds up the exchange of results but means the methodology and conclusions have not yet been independently checked. Content from a preprint should be judged more cautiously than a peer-reviewed publication.",
  "siehe": [
   "peer-review",
   "pubmed"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "protein",
  "begriff": "Protein",
  "begriff_en": "Protein",
  "kategorie": "grundlagen",
  "kurz": "Ein aus Aminosäureketten aufgebautes Molekül mit vielfältigen biologischen Aufgaben.",
  "kurz_en": "A molecule made of amino acid chains with diverse biological roles.",
  "quellen": [
   {
    "titel": "NCI: protein",
    "titel_en": "NCI: protein",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/protein"
   }
  ],
  "text": "Proteine bestehen aus einer oder mehreren Aminosäureketten. Ihre Sequenz und räumliche Struktur bestimmen ihre Eigenschaften. Die Abgrenzung zum Begriff Peptid ist nicht allein durch eine feste Kettenlänge definiert.",
  "text_en": "Proteins consist of one or more amino acid chains. Their sequence and spatial structure determine their properties. A fixed chain length alone does not define the distinction from peptides.",
  "synonyme": [
   "Eiweiß"
  ],
  "synonyme_en": [
   "Protein"
  ],
  "siehe": [
   "peptid",
   "aminosaeure",
   "oligopeptid"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "proteolyse",
  "begriff": "Proteolyse",
  "begriff_en": "Proteolysis",
  "kategorie": "grundlagen",
  "kurz": "Der enzymatische Abbau einer Aminosäurekette in kleinere Bruchstücke.",
  "kurz_en": "The enzymatic breakdown of an amino acid chain into smaller fragments.",
  "quellen": [
   {
    "titel": "Alberts et al.: Proteinsynthese und Proteinabbau",
    "titel_en": "Alberts et al.: Protein synthesis and degradation",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK26829/"
   }
  ],
  "text": "Proteolyse bezeichnet den Prozess, bei dem Enzyme, sogenannte Proteasen, die Peptidbindungen einer Aminosäurekette spalten und sie so in kleinere Bruchstücke zerlegen. Dieser Abbau findet im Körper fortlaufend statt und beeinflusst, wie lange ein Peptid intakt bleibt, also seine Halbwertszeit. In Studien wird die Proteolyse-Stabilität eines Peptids häufig als Kennzahl für seine Beständigkeit angegeben.",
  "text_en": "Proteolysis is the process by which enzymes called proteases cleave the peptide bonds in an amino acid chain, breaking it into smaller fragments. This breakdown happens continuously in the body and affects how long a peptide stays intact, in other words its half-life. Studies often report proteolytic stability as a measure of a peptide's durability.",
  "siehe": [
   "halbwertszeit",
   "peptidbindung",
   "bioverfuegbarkeit"
  ]
 },
 {
  "slug": "pt-141",
  "begriff": "PT-141 (Bremelanotide)",
  "begriff_en": "PT-141 (Bremelanotide)",
  "kategorie": "wirkstoff",
  "kurz": "Bremelanotid, ein synthetischer Melanocortin-Rezeptoragonist, in klinischen Studien untersucht.",
  "kurz_en": "Bremelanotide, a synthetic melanocortin receptor agonist investigated in clinical trials.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 31599840",
    "titel_en": "PubMed: Research publication, PMID 31599840",
    "url": "https://pubmed.ncbi.nlm.nih.gov/31599840/"
   }
  ],
  "text": "PT-141 ist eine weitere Bezeichnung für Bremelanotid. Die verlinkte Publikation beschreibt zwei randomisierte Phase-III-Studien in einer definierten Patientengruppe. Ein Forschungsprodukt aus einem Shop ist nicht mit dem Studienpräparat gleichzusetzen.",
  "text_en": "PT-141 is another name for bremelanotide. The linked publication describes two randomised phase III trials in a defined patient population. A research product sold by a shop is not equivalent to the study preparation.",
  "synonyme": [
   "Bremelanotide",
   "Vyleesi"
  ],
  "synonyme_en": [
   "Bremelanotide",
   "Vyleesi"
  ],
  "link": "wirkstoffe/pt-141.html"
 },
 {
  "slug": "pubmed",
  "begriff": "PubMed",
  "begriff_en": "PubMed",
  "kategorie": "studien",
  "kurz": "Kostenlose Datenbank der US-amerikanischen National Library of Medicine für biomedizinische Fachliteratur.",
  "kurz_en": "A free database run by the US National Library of Medicine for biomedical literature.",
  "quellen": [
   {
    "titel": "NLM: Grenzen von PubMed und Preprints",
    "titel_en": "NLM: Limitations of PubMed and preprints",
    "url": "https://pubmed.ncbi.nlm.nih.gov/disclaimer/"
   }
  ],
  "text": "PubMed indexiert Millionen Fachartikel aus Medizin und Lebenswissenschaften und zeigt meist eine kostenlose Zusammenfassung direkt an. Der Volltext liegt oft hinter der Bezahlschranke der jeweiligen Fachzeitschrift. Ein PubMed-Eintrag bestätigt, dass eine Arbeit indexiert ist, sagt aber nichts über die Qualität der einzelnen Studie aus.",
  "text_en": "PubMed indexes millions of articles from medicine and life sciences and usually shows a free abstract directly. The full text often sits behind the respective journal's paywall. A PubMed listing confirms that a paper is indexed, but it says nothing about the quality of that individual study.",
  "siehe": [
   "peer-review",
   "preprint"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "rct",
  "begriff": "RCT",
  "begriff_en": "RCT",
  "kategorie": "studien",
  "kurz": "Studiendesign mit Zufallszuteilung zu Test- und Kontrollgruppe. Gilt als Goldstandard für den Nachweis einer Wirkung.",
  "kurz_en": "A study design with random assignment to a treatment and a control group. Considered the gold standard for proving an effect.",
  "quellen": [
   {
    "titel": "NCI: Randomisierte klinische Studien",
    "titel_en": "NCI: Randomised clinical trials",
    "url": "https://www.cancer.gov/publications/patient-education/crs.pdf"
   }
  ],
  "langform": "Randomisiert-kontrollierte Studie",
  "langform_en": "Randomised controlled trial",
  "text": "Bei einer randomisiert-kontrollierten Studie werden Teilnehmer per Zufall einer Test- oder einer Kontrollgruppe zugeteilt, oft zusätzlich verblindet. Das reduziert Verzerrungen durch Erwartung oder Auswahl. RCTs gelten in der klinischen Forschung als methodischer Goldstandard, besonders in Kombination mit Placebokontrolle.",
  "text_en": "In a randomised controlled trial, participants are assigned by chance to a treatment or a control group, often blinded as well. This reduces bias from expectation or selection. RCTs are considered the methodological gold standard in clinical research, especially combined with placebo control.",
  "siehe": [
   "placebo",
   "doppelblind",
   "klinische-studie"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "reinheit",
  "begriff": "Reinheit",
  "begriff_en": "Purity",
  "kategorie": "labor",
  "kurz": "Reinheit gibt an, welcher Anteil einer Probe im Chromatogramm auf das Hauptmolekül entfällt, meist als Prozentwert per HPLC.",
  "kurz_en": "Purity states how much of a sample's chromatogram peak area belongs to the main molecule, usually as a percentage from HPLC.",
  "quellen": [
   {
    "titel": "Hoofnagle et al. (2016): Peptidanalytik und Laborhandhabung",
    "titel_en": "Hoofnagle et al. (2016): Peptide analysis and laboratory handling",
    "url": "https://pubmed.ncbi.nlm.nih.gov/26719571/"
   }
  ],
  "text": "Reinheit beschreibt den Anteil der Zielsubstanz innerhalb der angegebenen Messmethode. Ein HPLC-Flächenanteil ist kein vollständiger Nachweis der Zusammensetzung.",
  "text_en": "Purity describes the proportion of the target substance within a stated method. An HPLC area percentage does not fully establish composition.",
  "siehe": [
   "hplc",
   "identitaet",
   "peptidgehalt"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "rekonstitution",
  "begriff": "Rekonstitution",
  "begriff_en": "Reconstitution",
  "kategorie": "handhabung",
  "kurz": "Rekonstitution ist das Lösen eines lyophilisierten Peptids in einer Flüssigkeit für Laborzwecke.",
  "kurz_en": "Reconstitution is dissolving a lyophilised peptide in a liquid to prepare a solution for laboratory use.",
  "quellen": [
   {
    "titel": "FDA: Lyophilisation",
    "titel_en": "FDA: Lyophilization",
    "url": "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/lyophilization-parenteral-793"
   }
  ],
  "text": "Der Begriff bezeichnet das Wiederherstellen einer Flüssigform aus einem trockenen Präparat. Welche Flüssigkeit dafür geeignet ist, hängt vom jeweiligen Stoff und Prüfverfahren ab. Aus dem Begriff folgt keine allgemeine Anleitung zur Zubereitung oder Anwendung.",
  "text_en": "The term means restoring a liquid form from a dry preparation. The suitable liquid depends on the substance and analytical procedure. The term does not imply a general preparation or administration method.",
  "siehe": [
   "lyophilisat",
   "bakteriostatisches-wasser",
   "steriles-wasser",
   "konzentration"
  ],
  "seiten": [
   "rechner.html"
  ]
 },
 {
  "slug": "retatrutid",
  "begriff": "Retatrutid",
  "begriff_en": "Retatrutide",
  "kategorie": "wirkstoff",
  "kurz": "Peptidischer Dreifach-Rezeptoragonist, in klinischen Studien untersucht.",
  "kurz_en": "Peptide triple-receptor agonist investigated in clinical trials.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 37366315",
    "titel_en": "PubMed: Research publication, PMID 37366315",
    "url": "https://pubmed.ncbi.nlm.nih.gov/37366315/"
   }
  ],
  "text": "Die verlinkte Phase-II-Studie untersucht einen Agonisten an GIP-, GLP-1- und Glucagon-Rezeptoren. Ergebnisse aus dieser klinischen Prüfung bestätigen keine Gleichwertigkeit eines unter gleichem Namen verkauften Shopprodukts.",
  "text_en": "The linked phase II trial investigates an agonist at GIP, GLP-1 and glucagon receptors. Results from that trial do not establish equivalence of a shop product sold under the same name.",
  "synonyme": [
   "LY3437943"
  ],
  "synonyme_en": [
   "LY3437943"
  ],
  "link": "wirkstoffe/retatrutid.html"
 },
 {
  "slug": "rezeptor",
  "begriff": "Rezeptor",
  "begriff_en": "Receptor",
  "kategorie": "grundlagen",
  "kurz": "Ein Protein auf oder in einer Zelle, an das ein Peptid spezifisch bindet.",
  "kurz_en": "A protein on or inside a cell that a peptide binds to specifically.",
  "quellen": [
   {
    "titel": "NCI: receptor",
    "titel_en": "NCI: receptor",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/receptor"
   }
  ],
  "text": "Ein Rezeptor ist ein Protein, das ein passendes Molekül, etwa ein Peptid, spezifisch erkennt und bindet, ähnlich einem Schlüssel-Schloss-Prinzip. Diese Bindung löst in der Zelle eine Signalkette aus. In der Forschung wird die Bindungsstärke eines Peptids an einen bestimmten Rezeptor als Affinität bezeichnet und häufig im Labor an Zellkulturen untersucht.",
  "text_en": "A receptor is a protein that specifically recognises and binds a matching molecule, such as a peptide, similar to a lock and key. This binding triggers a signalling chain inside the cell. In research, how strongly a peptide binds to a given receptor is called affinity and is often studied in the lab using cell cultures.",
  "siehe": [
   "agonist",
   "peptidhormon",
   "neuropeptid"
  ]
 },
 {
  "slug": "rezeptpflicht",
  "begriff": "Rezeptpflicht",
  "begriff_en": "Prescription requirement",
  "kategorie": "recht",
  "kurz": "Rezeptpflicht heißt, dass ein Arzneimittel nur gegen ärztliche Verschreibung abgegeben werden darf.",
  "kurz_en": "A prescription requirement means a medicinal product may only be dispensed against a doctor's prescription.",
  "quellen": [
   {
    "titel": "AMG § 48: Verschreibungspflicht",
    "titel_en": "German Medicines Act, section 48: Prescription requirements",
    "url": "https://www.gesetze-im-internet.de/amg_1976/__48.html"
   }
  ],
  "text": "In Deutschland sind insbesondere § 48 AMG und die Arzneimittelverschreibungsverordnung maßgeblich. Verschreibungspflicht, Arzneimitteleigenschaft und Zulassung sind unterschiedliche Fragen. Aus einem Verkauf als Forschungschemikalie lässt sich keine pauschale Ausnahme ableiten.",
  "text_en": "In Germany, section 48 of the Medicines Act and the prescription medicines regulation are particularly relevant. Prescription requirements, medicinal-product status and authorisation are separate questions. Sale as a research chemical does not establish a blanket exemption.",
  "siehe": [
   "arzneimittel",
   "zulassung"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "ruo",
  "begriff": "RUO",
  "begriff_en": "RUO",
  "kategorie": "recht",
  "kurz": "Research Use Only bedeutet „nur für Forschungszwecke“. Das Kürzel allein klärt den Rechtsstatus eines Produkts nicht.",
  "kurz_en": "Research Use Only describes a research purpose. The abbreviation alone does not establish a product’s legal status.",
  "quellen": [
   {
    "titel": "AMG § 2: Arzneimittelbegriff",
    "titel_en": "German Medicines Act, section 2: Definition of medicines",
    "url": "https://www.gesetze-im-internet.de/amg_1976/__2.html"
   },
   {
    "titel": "FDA (24.08.2026): RUO-Kennzeichnung und Zweckbestimmung, USA",
    "titel_en": "FDA (24 August 2026): RUO labelling and intended use, USA",
    "url": "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/txp-innovations-llc-dba-tex-peptides-735067-08242026"
   }
  ],
  "langform": "Nur für Forschungszwecke",
  "langform_en": "Research Use Only",
  "text": "Die Kennzeichnung beschreibt die vom Anbieter angegebene Zweckbestimmung. Sie ist weder eine Zulassung noch ein Nachweis für Reinheit oder Sicherheit. Ob ein Produkt rechtlich als Arzneimittel gilt, richtet sich nach den gesetzlichen Kriterien und seiner tatsächlichen Präsentation, nicht allein nach dem Kürzel.",
  "text_en": "The label describes the supplier’s stated intended purpose. It is neither an authorisation nor evidence of purity or safety. Whether a product legally qualifies as a medicine depends on statutory criteria and its actual presentation, not solely on this abbreviation.",
  "siehe": [
   "arzneimittel",
   "zulassung"
  ],
  "seiten": [
   "methodik.html"
  ]
 },
 {
  "slug": "selank",
  "begriff": "Selank",
  "begriff_en": "Selank",
  "kategorie": "wirkstoff",
  "kurz": "Synthetisches Peptid, in Studien zu Angststörungen untersucht.",
  "kurz_en": "Synthetic peptide investigated in studies of anxiety disorders.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 18454096",
    "titel_en": "PubMed: Research publication, PMID 18454096",
    "url": "https://pubmed.ncbi.nlm.nih.gov/18454096/"
   }
  ],
  "text": "Die verlinkte klinische Arbeit vergleicht Selank mit Medazepam bei Angststörungen und Neurasthenie. Eine einzelne Veröffentlichung ersetzt weder eine umfassende Evidenzbewertung noch einen Qualitätsnachweis für angebotene Produkte.",
  "text_en": "The linked clinical paper compares selank with medazepam in anxiety disorders and neurasthenia. A single publication replaces neither a comprehensive evidence assessment nor quality verification of marketed products.",
  "link": "wirkstoffe/selank.html"
 },
 {
  "slug": "semaglutid",
  "begriff": "Semaglutid",
  "begriff_en": "Semaglutide",
  "kategorie": "wirkstoff",
  "kurz": "GLP-1-Analogon, zu dem klinische Studien und zugelassene Arzneimittel vorliegen.",
  "kurz_en": "GLP-1 analogue with clinical research and authorised medicinal products.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 33567185",
    "titel_en": "PubMed: Research publication, PMID 33567185",
    "url": "https://pubmed.ncbi.nlm.nih.gov/33567185/"
   },
   {
    "titel": "EMA: Produktbezogene Zulassung von Ozempic",
    "titel_en": "EMA: Product-specific authorisation of Ozempic",
    "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/ozempic"
   }
  ],
  "text": "Die verlinkte klinische Arbeit untersucht Semaglutid bei Erwachsenen mit Übergewicht oder Adipositas. Der EMA-Bericht betrifft das konkrete Arzneimittel Ozempic. Weder Studie noch Zulassung bestätigen ein gleichnamiges Produkt eines Forschungsshops.",
  "text_en": "The linked clinical paper investigates semaglutide in adults with overweight or obesity. The EMA assessment concerns the specific medicinal product Ozempic. Neither the trial nor the authorisation verifies a similarly named research-shop product.",
  "link": "wirkstoffe/semaglutid.html"
 },
 {
  "slug": "semax",
  "begriff": "Semax",
  "begriff_en": "Semax",
  "kategorie": "wirkstoff",
  "kurz": "Synthetisches Heptapeptid, unter anderem in Rattenmodellen untersucht.",
  "kurz_en": "Synthetic heptapeptide investigated in rat models, among other research.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 14556513",
    "titel_en": "PubMed: Research publication, PMID 14556513",
    "url": "https://pubmed.ncbi.nlm.nih.gov/14556513/"
   }
  ],
  "text": "Die angeführte Veröffentlichung untersucht BDNF in verschiedenen Hirnregionen von Ratten. Solche Daten sind präklinisch. Sie erlauben keine Aussage über eine gesicherte Verbesserung der Kognition beim Menschen.",
  "text_en": "The cited publication investigates BDNF in different brain regions of rats. These are preclinical data. They do not establish cognitive improvement in humans.",
  "link": "wirkstoffe/semax.html"
 },
 {
  "slug": "sequenz",
  "begriff": "Sequenz",
  "begriff_en": "Sequence",
  "kategorie": "grundlagen",
  "kurz": "Die festgelegte Reihenfolge der Aminosäuren in einer Peptid- oder Proteinkette.",
  "kurz_en": "The fixed order of amino acids in a peptide or protein chain.",
  "quellen": [
   {
    "titel": "Alberts et al.: Proteinstruktur",
    "titel_en": "Alberts et al.: Protein structure",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK26830/"
   }
  ],
  "text": "Die Sequenz beschreibt, in welcher Reihenfolge die einzelnen Aminosäuren über Peptidbindungen aneinandergereiht sind. Sie wird meist mit standardisierten Ein- oder Drei-Buchstaben-Codes je Aminosäure notiert. Zwei Peptide mit denselben Aminosäuren, aber unterschiedlicher Reihenfolge, gelten als verschiedene Moleküle, die Sequenz ist damit ein zentrales Identitätsmerkmal.",
  "text_en": "The sequence describes the order in which the individual amino acids are strung together via peptide bonds. It is usually written using standardised one- or three-letter codes per amino acid. Two peptides made of the same amino acids but in a different order count as different molecules, which makes the sequence a key identity marker.",
  "synonyme": [
   "Aminosäuresequenz"
  ],
  "synonyme_en": [
   "Amino acid sequence"
  ],
  "siehe": [
   "aminosaeure",
   "peptidbindung",
   "identitaet"
  ]
 },
 {
  "slug": "sermorelin",
  "begriff": "Sermorelin",
  "begriff_en": "Sermorelin",
  "kategorie": "wirkstoff",
  "kurz": "GHRH-abgeleitetes Peptid, in der endokrinologischen Forschung untersucht.",
  "kurz_en": "GHRH-derived peptide investigated in endocrine research.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 18031173",
    "titel_en": "PubMed: Research publication, PMID 18031173",
    "url": "https://pubmed.ncbi.nlm.nih.gov/18031173/"
   }
  ],
  "text": "Die verlinkte Übersicht ordnet Sermorelin in die damalige Forschung zu Wachstumshormonmangel bei Kindern ein. Historische medizinische Literatur belegt weder den heutigen Zulassungsstatus noch die Qualität eines Shopprodukts.",
  "text_en": "The linked review places sermorelin in the historical research on childhood growth hormone deficiency. Historical medical literature establishes neither current authorisation status nor the quality of a shop product.",
  "synonyme": [
   "GRF 1-29",
   "GHRH(1-29)",
   "Geref (historischer Markenname)"
  ],
  "synonyme_en": [
   "GRF 1-29",
   "GHRH(1-29)",
   "Geref (historical brand name)"
  ],
  "link": "wirkstoffe/sermorelin.html"
 },
 {
  "slug": "ss-31",
  "begriff": "SS-31 (Elamipretid)",
  "begriff_en": "SS-31 (Elamipretide)",
  "kategorie": "wirkstoff",
  "kurz": "Elamipretid, ein synthetisches Peptid, das in Studien zu mitochondrialen Erkrankungen untersucht wird.",
  "kurz_en": "Elamipretide, a synthetic peptide investigated in studies of mitochondrial disorders.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 37268435",
    "titel_en": "PubMed: Research publication, PMID 37268435",
    "url": "https://pubmed.ncbi.nlm.nih.gov/37268435/"
   },
   {
    "titel": "FDA: Forzinity, Zulassung vom 19.09.2025",
    "titel_en": "FDA: Forzinity, approved 19 September 2025",
    "url": "https://www.fda.gov/drugs/drug-trials-snapshots/drug-trials-snapshots-forzinity"
   }
  ],
  "text": "Die FDA erteilte Forzinity mit dem Wirkstoff Elamipretid am 19.09.2025 eine beschleunigte Zulassung für eine definierte Patientengruppe mit Barth-Syndrom. Diese produktbezogene US-Zulassung gilt nicht für als SS-31 verkaufte Forschungschemikalien.",
  "text_en": "On 19 September 2025, FDA granted accelerated approval to Forzinity, containing elamipretide, for a defined patient group with Barth syndrome. This US product approval does not apply to research chemicals sold as SS-31.",
  "synonyme": [
   "Elamipretide",
   "MTP-131",
   "Bendavia"
  ],
  "synonyme_en": [
   "Elamipretide",
   "MTP-131",
   "Bendavia"
  ],
  "link": "wirkstoffe/ss-31.html"
 },
 {
  "slug": "steriles-wasser",
  "begriff": "Steriles Wasser",
  "begriff_en": "Sterile Water",
  "kategorie": "handhabung",
  "kurz": "Wasser, dessen Sterilität eine spezifizierte Produkteigenschaft ist.",
  "kurz_en": "Water for which sterility is a specified product characteristic.",
  "quellen": [
   {
    "titel": "FDA: Sterilität und Endotoxine",
    "titel_en": "FDA: Sterility and endotoxins",
    "url": "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-technical-guides/bacterial-endotoxinspyrogens"
   }
  ],
  "text": "Sterilität und Endotoxinfreiheit sind unterschiedliche Eigenschaften. Ein Produkt muss anhand seiner Spezifikation beurteilt werden; aus dem Wort „steril“ folgen weder eine universelle Eignung als Lösungsmittel noch eine bestimmte Haltbarkeit nach dem Öffnen.",
  "text_en": "Sterility and freedom from endotoxins are different properties. Products must be assessed against their specifications; the word “sterile” implies neither universal suitability as a solvent nor a particular shelf life after opening.",
  "siehe": [
   "bakteriostatisches-wasser",
   "rekonstitution",
   "sterilitaet"
  ]
 },
 {
  "slug": "sterilitaet",
  "begriff": "Sterilität",
  "begriff_en": "Sterility",
  "kategorie": "labor",
  "kurz": "Sterilität beschreibt die Abwesenheit lebensfähiger Mikroorganismen in einer Probe, geprüft über einen eigenen Labortest.",
  "kurz_en": "Sterility describes the absence of viable microorganisms in a sample, checked through its own dedicated lab test.",
  "quellen": [
   {
    "titel": "FDA: Sterilitätsprüfung und Prozesskontrolle",
    "titel_en": "FDA: Sterility testing and process controls",
    "url": "https://www.fda.gov/drugs/guidances-drugs/questions-and-answers-current-good-manufacturing-practice-regulations-production-and-process"
   }
  ],
  "text": "Der Test steht unabhängig neben Reinheit, Identität und Endotoxin-Wert und wird gesondert dokumentiert. Relevanz hat er vor allem für lyophilisierte Peptide, die im Labor gelöst und weiterverarbeitet werden.",
  "text_en": "The test is independent of purity, identity and endotoxin value, and is documented separately. It matters mainly for lyophilised peptides that are dissolved and handled further in a laboratory setting.",
  "siehe": [
   "endotoxin",
   "coa"
  ]
 },
 {
  "slug": "studienphasen",
  "begriff": "Studienphasen",
  "begriff_en": "Trial phases",
  "kategorie": "studien",
  "kurz": "Die vier Stufen klinischer Prüfung: Phase I bis III vor der Zulassung, Phase IV danach im Praxiseinsatz.",
  "kurz_en": "The four stages of clinical testing: phases I to III before approval, phase IV afterwards in everyday use.",
  "quellen": [
   {
    "titel": "FDA: Phasen klinischer Forschung",
    "titel_en": "FDA: Phases of clinical research",
    "url": "https://www.fda.gov/patients/drug-development-process/step-3-clinical-research"
   }
  ],
  "text": "Klinische Entwicklung wird häufig in vier Phasen beschrieben: Phase I untersucht vor allem Sicherheit und Verträglichkeit bei gesunden Freiwilligen oder Patienten. Phase II untersucht erste Hinweise auf Wirksamkeit und weitere Sicherheitsfragen. Phase III prüft dies in größeren Gruppen. Phase IV umfasst Untersuchungen nach der Zulassung. Die Einteilung allein sagt nichts über die Qualität einer einzelnen Studie aus.",
  "text_en": "Clinical development is often described in four phases: Phase I mainly investigates safety and tolerability in healthy volunteers or patients. Phase II examines initial evidence of efficacy and further safety questions. Phase III investigates these in larger groups. Phase IV covers studies after approval. The phase alone does not establish the quality of an individual study.",
  "synonyme": [
   "Phase I bis IV"
  ],
  "synonyme_en": [
   "Phases I to IV"
  ],
  "siehe": [
   "klinische-studie",
   "rct"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "survodutid",
  "begriff": "Survodutid",
  "begriff_en": "Survodutide",
  "kategorie": "wirkstoff",
  "kurz": "Dualer Glucagon- und GLP-1-Rezeptoragonist, in klinischen Studien untersucht.",
  "kurz_en": "Dual glucagon and GLP-1 receptor agonist investigated in clinical trials.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 38330987",
    "titel_en": "PubMed: Research publication, PMID 38330987",
    "url": "https://pubmed.ncbi.nlm.nih.gov/38330987/"
   }
  ],
  "text": "Die verlinkte Phase-II-Studie untersucht Survodutid als dualen Rezeptoragonisten. Studiendaten gelten für die geprüfte Formulierung und Population und sind keine Qualitätsprüfung von Forschungschemikalien.",
  "text_en": "The linked phase II trial investigates survodutide as a dual receptor agonist. Trial data concern the tested formulation and population and do not verify the quality of research chemicals.",
  "synonyme": [
   "BI 456906"
  ],
  "synonyme_en": [
   "BI 456906"
  ],
  "link": "wirkstoffe/survodutid.html"
 },
 {
  "slug": "tb-500",
  "begriff": "TB-500",
  "begriff_en": "TB-500",
  "kategorie": "wirkstoff",
  "kurz": "Bezeichnung, die in einer analytischen Originalarbeit für ein acetyliertes Fragment von Thymosin Beta-4 verwendet wird.",
  "kurz_en": "A name used in an original analytical paper for an acetylated fragment of thymosin beta-4.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 23084823",
    "titel_en": "PubMed: Research publication, PMID 23084823",
    "url": "https://pubmed.ncbi.nlm.nih.gov/23084823/"
   }
  ],
  "text": "Die verlinkte analytische Arbeit identifiziert ein acetyliertes Fragment in einem als TB-500 bezeichneten Produkt. Befunde zum vollständigen Thymosin Beta-4 sind damit nicht automatisch auf dieses Fragment oder andere Handelsprodukte übertragbar.",
  "text_en": "The linked analytical paper identifies an acetylated fragment in a product labelled TB-500. Findings for full-length thymosin beta-4 do not automatically apply to this fragment or other marketed products.",
  "synonyme": [
   "Thymosin-Beta-4-Fragment",
   "TB4 Frag"
  ],
  "synonyme_en": [
   "Thymosin beta-4 fragment",
   "TB4 Frag"
  ],
  "link": "wirkstoffe/tb-500.html"
 },
 {
  "slug": "tesamorelin",
  "begriff": "Tesamorelin",
  "begriff_en": "Tesamorelin",
  "kategorie": "wirkstoff",
  "kurz": "Synthetisches Analogon des Growth Hormone-Releasing Factor, in klinischen Studien untersucht.",
  "kurz_en": "Synthetic growth hormone-releasing factor analogue investigated in clinical trials.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 18057338",
    "titel_en": "PubMed: Research publication, PMID 18057338",
    "url": "https://pubmed.ncbi.nlm.nih.gov/18057338/"
   }
  ],
  "text": "Die angeführte klinische Arbeit untersucht einen Wachstumshormon-Releasing-Factor bei Menschen mit HIV. Der untersuchte Krankheitskontext und das Studienpräparat begrenzen die Übertragbarkeit der Ergebnisse.",
  "text_en": "The cited clinical paper investigates a growth hormone-releasing factor in people with HIV. The clinical context and study preparation limit how findings can be generalised.",
  "synonyme": [
   "Egrifta",
   "TH9507",
   "Egrifta WR"
  ],
  "synonyme_en": [
   "Egrifta",
   "TH9507",
   "Egrifta WR"
  ],
  "link": "wirkstoffe/tesamorelin.html"
 },
 {
  "slug": "thymosin-alpha-1",
  "begriff": "Thymosin Alpha 1",
  "begriff_en": "Thymosin Alpha 1",
  "kategorie": "wirkstoff",
  "kurz": "Peptid aus dem Thymosin-System, in klinischen und präklinischen Studien untersucht.",
  "kurz_en": "Peptide from the thymosin system investigated in clinical and preclinical studies.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 3998766",
    "titel_en": "PubMed: Research publication, PMID 3998766",
    "url": "https://pubmed.ncbi.nlm.nih.gov/3998766/"
   }
  ],
  "text": "Die verlinkte randomisierte Studie untersucht synthetisches Thymosin Alpha-1 in einem bestimmten onkologischen Kontext. Ein solcher Befund ist kein pauschaler Nachweis einer Immunstärkung und bestätigt keine frei verkauften Forschungsprodukte.",
  "text_en": "The linked randomised trial investigates synthetic thymosin alpha-1 in a particular oncology context. Such a finding is not general evidence of immune enhancement and does not verify freely marketed research products.",
  "synonyme": [
   "Tα1",
   "Zadaxin (Handelsname)"
  ],
  "synonyme_en": [
   "Tα1",
   "Zadaxin (brand name)"
  ],
  "link": "wirkstoffe/thymosin-alpha-1.html"
 },
 {
  "slug": "thymosine",
  "begriff": "Thymosine",
  "begriff_en": "Thymosins",
  "kategorie": "klassen",
  "kurz": "Thymosine sind eine Familie körpereigener Peptide, die ursprünglich aus der Thymusdrüse isoliert wurden.",
  "kurz_en": "Thymosins are a family of peptides originally isolated from the thymus gland.",
  "quellen": [
   {
    "titel": "NCI: Thymosine",
    "titel_en": "NCI: Thymosins",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-drug/def/recombinant-thymosin"
   }
  ],
  "text": "Unter dem Namen werden unterschiedliche Peptide zusammengefasst, die ursprünglich aus Thymusmaterial isoliert wurden. Alpha- und Beta-Thymosine unterscheiden sich in Struktur und Forschungsbezug. Befunde zu einem einzelnen Thymosin sind nicht automatisch auf andere übertragbar.",
  "text_en": "The name covers different peptides originally isolated from thymus material. Alpha and beta thymosins differ in structure and research context. Findings for one thymosin do not automatically apply to others.",
  "synonyme": [
   "Thymosinpeptide"
  ],
  "synonyme_en": [
   "Thymosin peptides"
  ],
  "siehe": [
   "peptidhormon",
   "protein"
  ],
  "wirkstoffe": [
   "thymosin-alpha-1",
   "tb-500"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "tiermodell",
  "begriff": "Tiermodell",
  "begriff_en": "Animal model",
  "kategorie": "studien",
  "kurz": "Versuchstier, an dem eine Substanz im In-vivo-Versuch untersucht wird, etwa Maus oder Ratte. Kein direkter Beleg für Menschen.",
  "kurz_en": "A laboratory animal, such as a mouse or rat, used to study a substance in vivo. Not direct proof for humans.",
  "quellen": [
   {
    "titel": "NCI: animal model",
    "titel_en": "NCI: animal model",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/animal-model"
   }
  ],
  "text": "Ein Tiermodell ist ein Versuchstier wie Maus, Ratte oder Zebrafisch, an dem Stoffwechsel, Verhalten oder Gewebe unter kontrollierten Bedingungen untersucht werden. Es dient der präklinischen Forschung vor einer möglichen klinischen Studie. Unterschiede in Genetik und Physiologie bedeuten, dass ein Effekt im Tiermodell kein Beleg für eine Wirkung beim Menschen ist.",
  "text_en": "An animal model is a laboratory animal such as a mouse, rat or zebrafish in which metabolism, behaviour or tissue is studied under controlled conditions. It serves preclinical research before a possible clinical trial. Because genetics and physiology differ, an effect in an animal model is not proof of an effect in humans.",
  "siehe": [
   "in-vivo",
   "praeklinisch"
  ],
  "seiten": [
   "studien.html"
  ]
 },
 {
  "slug": "tirzepatid",
  "begriff": "Tirzepatid",
  "begriff_en": "Tirzepatide",
  "kategorie": "wirkstoff",
  "kurz": "Dualer GIP- und GLP-1-Rezeptoragonist, zu dem klinische Studien vorliegen.",
  "kurz_en": "Dual GIP and GLP-1 receptor agonist studied in clinical trials.",
  "quellen": [
   {
    "titel": "PubMed: Forschungsarbeit, PMID 35658024",
    "titel_en": "PubMed: Research publication, PMID 35658024",
    "url": "https://pubmed.ncbi.nlm.nih.gov/35658024/"
   }
  ],
  "text": "Die verlinkte randomisierte klinische Studie untersucht Tirzepatid bei Adipositas. Die untersuchte Formulierung und ihre Qualitätskontrolle sind von frei angebotenen Forschungschemikalien zu unterscheiden.",
  "text_en": "The linked randomised clinical trial investigates tirzepatide in obesity. Its study formulation and quality controls must be distinguished from freely marketed research chemicals.",
  "synonyme": [
   "LY3298176"
  ],
  "synonyme_en": [
   "LY3298176"
  ],
  "link": "wirkstoffe/tirzepatid.html"
 },
 {
  "slug": "u-100",
  "begriff": "U-100",
  "begriff_en": "U-100",
  "kategorie": "handhabung",
  "kurz": "Bezeichnung für Insulin mit 100 Einheiten pro Milliliter, keine allgemeine Peptideinheit.",
  "kurz_en": "A designation for insulin containing 100 units per millilitre, not a general peptide unit.",
  "quellen": [
   {
    "titel": "DailyMed: Bedeutung der Bezeichnung U-100",
    "titel_en": "DailyMed: Meaning of the U-100 designation",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c8ecbd7a-0e22-4fc7-a503-faa58c1b6f3f"
   }
  ],
  "text": "U-100 ist eine Konzentrationsangabe für Insulinprodukte. Sie ist keine allgemeine Masseneinheit für Peptide. Eine entsprechend beschriftete Skala lässt sich deshalb nicht ohne Kenntnis der Substanz und ihrer Spezifikation als Peptidmenge interpretieren.",
  "text_en": "U-100 is a concentration designation for insulin products. It is not a general unit of peptide mass. A scale labelled this way cannot be interpreted as a peptide quantity without knowing the substance and its specification.",
  "siehe": [
   "internationale-einheit",
   "konzentration"
  ]
 },
 {
  "slug": "vial",
  "begriff": "Vial",
  "begriff_en": "Vial",
  "kategorie": "handhabung",
  "kurz": "Ein Vial ist ein kleines, meist mit Gummistopfen verschlossenes Glasfläschchen für Peptide als Pulver oder Lösung.",
  "kurz_en": "A vial is a small glass container, usually sealed with a rubber stopper, holding a peptide as powder or solution.",
  "quellen": [
   {
    "titel": "ICH Q7: Herstellung, Chargen und Analysenzertifikate",
    "titel_en": "ICH Q7: Manufacturing, batches and certificates of analysis",
    "url": "https://www.fda.gov/media/71518/download"
   }
  ],
  "text": "Vials sind die Standardverpackung für lyophilisierte Peptide im Forschungshandel. Der Gummistopfen erlaubt eine geschlossene Entnahme, das aufgedruckte Etikett trägt in der Regel Chargennummer und Menge. Ein einzelnes Vial lässt sich einem CoA zuordnen, sofern die Chargennummer übereinstimmt.",
  "text_en": "Vials are the standard packaging for lyophilised peptides in the research trade. The rubber stopper allows a closed withdrawal, and the printed label usually carries the batch number and amount. A single vial can be matched to a CoA as long as the batch number lines up.",
  "synonyme": [
   "Fläschchen"
  ],
  "synonyme_en": [
   "Small bottle"
  ],
  "siehe": [
   "charge",
   "lyophilisat",
   "aliquot"
  ]
 },
 {
  "slug": "wachstumshormon",
  "begriff": "Wachstumshormon",
  "begriff_en": "Growth hormone",
  "kategorie": "klassen",
  "kurz": "Wachstumshormon ist ein körpereigenes Hypophysenhormon, das Wachstum, Stoffwechsel und Körperzusammensetzung reguliert.",
  "kurz_en": "Growth hormone is a pituitary hormone that regulates growth, metabolism and body composition.",
  "quellen": [
   {
    "titel": "NIDDK: Wachstumshormon und IGF-1",
    "titel_en": "NIDDK: Growth hormone and IGF-1",
    "url": "https://www.niddk.nih.gov/health-information/endocrine-diseases/acromegaly"
   }
  ],
  "langform": "Somatotropin",
  "langform_en": "Somatotropin",
  "text": "Wachstumshormon, auch Somatotropin oder GH genannt, wird in den somatotropen Zellen der Hirnanhangdrüse gebildet und pulsatil ins Blut abgegeben, gesteuert durch GHRH, Somatostatin und Ghrelin. Es reguliert direkt und über IGF-1 aus der Leber Längenwachstum, Muskel- und Fettstoffwechsel sowie Knochendichte. Mehrere Peptidklassen setzen an unterschiedlichen Stellen dieser Achse an, etwa an der Ausschüttung im Hypophysenvorderlappen.",
  "text_en": "Growth hormone, also called somatotropin or GH, is produced by somatotroph cells in the pituitary gland and released into the blood in pulses, controlled by GHRH, somatostatin and ghrelin. It regulates longitudinal growth, muscle and fat metabolism and bone density, both directly and via IGF-1 from the liver. Several peptide classes target different points along this axis, including release from the anterior pituitary.",
  "synonyme": [
   "GH",
   "HGH",
   "Somatotropin"
  ],
  "synonyme_en": [
   "GH",
   "HGH",
   "Somatotropin"
  ],
  "siehe": [
   "ghrh",
   "ghrp",
   "igf-1"
  ],
  "wirkstoffe": [
   "cjc-1295",
   "tesamorelin",
   "sermorelin",
   "ipamorelin",
   "hexarelin"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 },
 {
  "slug": "wada",
  "begriff": "WADA",
  "begriff_en": "WADA",
  "kategorie": "recht",
  "kurz": "Die WADA veröffentlicht jährlich eine Verbotsliste für den Sport, auf der auch Peptide stehen.",
  "kurz_en": "WADA publishes an annual prohibited list for sport that also includes peptides.",
  "quellen": [
   {
    "titel": "WADA: Aktuelle Verbotsliste",
    "titel_en": "WADA: Current prohibited list",
    "url": "https://www.wada-ama.org/en/prohibited-list"
   }
  ],
  "langform": "Welt-Anti-Doping-Agentur",
  "langform_en": "World Anti-Doping Agency",
  "text": "Die Welt-Anti-Doping-Agentur koordiniert die Anti-Doping-Regeln im organisierten Sport und aktualisiert jährlich ihre Verbotsliste. Mehrere Kategorien betreffen Peptidhormone und verwandte Substanzen, unabhängig vom Rechtsstatus außerhalb des Sports. Welche Substanz konkret erfasst ist, steht ausschließlich in der aktuellen WADA-Liste selbst.",
  "text_en": "The World Anti-Doping Agency coordinates anti-doping rules in organised sport and updates its prohibited list annually. Several categories cover peptide hormones and related substances, independent of their legal status outside sport. Which specific substance is covered is set out only in the current WADA list itself.",
  "seiten": [
   "faq.html"
  ]
 },
 {
  "slug": "zulassung",
  "begriff": "Zulassung",
  "begriff_en": "Marketing authorisation",
  "kategorie": "recht",
  "kurz": "Zulassung bezeichnet die behördliche Genehmigung, ein Arzneimittel in einem Markt zu vertreiben.",
  "kurz_en": "Marketing authorisation is the regulatory approval required to sell a medicinal product in a market.",
  "quellen": [
   {
    "titel": "EMA: Bewertung und Zulassungsentscheidung",
    "titel_en": "EMA: Evaluation and authorisation decisions",
    "url": "https://www.ema.europa.eu/en/about-us/what-we-do/authorisation-medicines/how-ema-evaluates-medicines-human-use"
   }
  ],
  "text": "Im zentralen EU-Verfahren bewertet die EMA die wissenschaftlichen Unterlagen. Die Europäische Kommission erteilt die Zulassung. Eine Zulassung bezieht sich auf ein bestimmtes Arzneimittel und seine festgelegten Bedingungen, nicht pauschal auf jedes Produkt mit demselben Stoffnamen.",
  "text_en": "In the centralised EU procedure, EMA evaluates the scientific dossier. The European Commission grants marketing authorisation. Authorisation applies to a particular medicinal product under specified conditions, not to every product bearing the same substance name.",
  "synonyme": [
   "Marktzulassung"
  ],
  "synonyme_en": [
   "Marketing authorisation"
  ],
  "siehe": [
   "ema",
   "fda",
   "arzneimittel"
  ],
  "seiten": [
   "peptid-1x1.html"
  ]
 }
];
