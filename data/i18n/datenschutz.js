/* ============================================================================
   PEPTIDKOMPASS · data/i18n/datenschutz.js
   ============================================================================
   Seiten-Wörterbuch für datenschutz.html. Schlüssel-Präfix
   "page.datenschutz.<element>". Muss NACH data/i18n/global.js und VOR
   assets/js/site.js eingebunden werden.

   Stand 27.09.2026: vollständige Erklärung statt Platzhalter. Grundlage ist
   der technische Befund vom selben Tag: keine Cookies, kein Tracking, keine
   extern geladenen Ressourcen; Hosting GitHub Pages; einzige Browser-
   Speicherung ist "pk_warenkorb_items" (localStorage) im Warenkorb-Optimierer.
   Kommt Tracking, eine Einbettung oder ein Formular hinzu, MUSS dieser Text
   nachgezogen werden.
   ============================================================================ */
window.PK = window.PK || {};
window.PK.i18n = window.PK.i18n || { de: {}, en: {} };

(function (i18n) {
  "use strict";
  if (typeof i18n.merge !== "function") return; // global.js fehlt/nicht geladen

  i18n.merge("de", {
    "page.datenschutz.title": "Peptide Compass · Datenschutz",
    "page.datenschutz.metaDescription": "Datenschutzerklärung von Peptide Compass: keine Cookies, kein Tracking. Welche Daten beim Hosting anfallen und welche Rechte du hast.",
    "page.datenschutz.heroEyebrow": "Pflichtangaben",
    "page.datenschutz.h1": "Datenschutz",
    "page.datenschutz.verantwortlicherLabel": "Verantwortlicher gemäß Art. 4 Nr. 7 DSGVO",
    "page.datenschutz.kurzH2": "Kurz gesagt",
    "page.datenschutz.kurzBody": "Peptide Compass setzt keine Cookies, nutzt keine Analyse- oder Tracking-Werkzeuge und lädt keine Inhalte von fremden Servern, also keine externen Schriftarten, Videos oder Werbenetzwerke. Personenbezogene Daten fallen nur dort an, wo es technisch nicht anders geht: beim Aufruf der Seite über unseren Hosting-Anbieter und wenn du uns eine E-Mail schreibst.",
    "page.datenschutz.hostingH2": "Hosting und Server-Protokolle",
    "page.datenschutz.hostingBody1": "Die Seite liegt bei GitHub Pages, einem Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf jeder Seite übermittelt dein Browser technisch notwendige Daten an die Server von GitHub: deine IP-Adresse, Datum und Uhrzeit, die aufgerufene Adresse, die zuvor besuchte Seite und die Kennung deines Browsers.",
    "page.datenschutz.hostingBody2": "GitHub verarbeitet diese Daten, um die Seite auszuliefern und Angriffe abzuwehren. Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren, funktionierenden Website (Art. 6 Abs. 1 lit. f DSGVO). Wir selbst haben keinen Zugriff auf diese Protokolle. Die Übermittlung in die USA stützt sich auf das EU-US Data Privacy Framework, unter dem GitHub zertifiziert ist.",
    "page.datenschutz.hostingLink": "Datenschutzerklärung von GitHub",
    "page.datenschutz.speicherH2": "Warenkorb-Optimierer",
    "page.datenschutz.speicherBody": "Wenn du im Warenkorb-Optimierer Produkte auswählst, speichert dein Browser diese Auswahl lokal auf deinem Gerät (localStorage). Die Auswahl wird weder an uns noch an Dritte übertragen und sorgt nur dafür, dass sie beim nächsten Besuch noch da ist. Das ist für diese von dir gewünschte Funktion unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Du kannst die Auswahl jederzeit auf der Seite leeren oder in den Einstellungen deines Browsers löschen.",
    "page.datenschutz.linksH2": "Links zu Anbietern und Partnerprogramme",
    "page.datenschutz.linksBody": "Links zu Shops sind als Anzeige gekennzeichnet. Einige davon sind Partner-Links: Sie enthalten eine Kennung, an der der Shop erkennt, dass du über Peptide Compass gekommen bist. Kaufst du dort, erhalten wir unter Umständen eine Provision. Mit dem Klick verlässt du unsere Seite, ab dann gilt die Datenschutzerklärung des jeweiligen Shops. Wir erhalten von den Shops keine Daten, mit denen wir dich persönlich erkennen könnten.",
    "page.datenschutz.kontaktH2": "Kontakt per E-Mail",
    "page.datenschutz.kontaktBody": "Wenn du uns schreibst, verarbeiten wir deine E-Mail-Adresse und den Inhalt deiner Nachricht, um dir zu antworten (Art. 6 Abs. 1 lit. b und f DSGVO). Wir löschen die Daten, sobald deine Anfrage erledigt ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    "page.datenschutz.rechteH2": "Deine Rechte",
    "page.datenschutz.rechteBody": "Du hast das Recht auf Auskunft über deine gespeicherten Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21). Eine formlose E-Mail an die oben genannte Adresse genügt.",
    "page.datenschutz.beschwerdeBody": "Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel bei der Behörde an deinem Wohnort (Art. 77 DSGVO).",
    "page.datenschutz.stand": "Stand: September 2026",
    "page.datenschutz.ogTitle": "Peptide Compass · Datenschutz",
    "page.datenschutz.ogDescription": "Datenschutzerklärung von Peptide Compass: keine Cookies, kein Tracking. Welche Daten beim Hosting anfallen und welche Rechte du hast.",
    "page.datenschutz.verantwortlicherName": "Online Monkeys LLC",
    "page.datenschutz.verantwortlicherZeile1": "1309 Coffeen Avenue STE 1200",
    "page.datenschutz.verantwortlicherZeile2": "Sheridan, WY 82801, USA"
  });

  i18n.merge("en", {
    "page.datenschutz.title": "Peptide Compass · Privacy",
    "page.datenschutz.metaDescription": "Privacy policy of Peptide Compass: no cookies, no tracking. What data arises through hosting and what rights you have.",
    "page.datenschutz.heroEyebrow": "Mandatory information",
    "page.datenschutz.h1": "Privacy",
    "page.datenschutz.verantwortlicherLabel": "Controller per Art. 4 (7) GDPR",
    "page.datenschutz.kurzH2": "In short",
    "page.datenschutz.kurzBody": "Peptide Compass sets no cookies, uses no analytics or tracking tools and loads no content from third-party servers, so no external fonts, videos or ad networks. Personal data only arises where it is technically unavoidable: when you load the site through our hosting provider and when you send us an email.",
    "page.datenschutz.hostingH2": "Hosting and server logs",
    "page.datenschutz.hostingBody1": "The site is hosted on GitHub Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Whenever you load a page, your browser transmits technically necessary data to GitHub's servers: your IP address, date and time, the requested address, the previously visited page and your browser's identifier.",
    "page.datenschutz.hostingBody2": "GitHub processes this data to deliver the site and to fend off attacks. The legal basis is our legitimate interest in a secure, working website (Art. 6 (1) (f) GDPR). We have no access to these logs ourselves. The transfer to the USA relies on the EU-US Data Privacy Framework, under which GitHub is certified.",
    "page.datenschutz.hostingLink": "GitHub privacy statement",
    "page.datenschutz.speicherH2": "Cart optimizer",
    "page.datenschutz.speicherBody": "When you select products in the cart optimizer, your browser stores this selection locally on your device (localStorage). The selection is not transmitted to us or to third parties; it only makes sure the selection is still there on your next visit. This is strictly necessary for a function you requested (Section 25 (2) no. 2 TDDDG). You can clear the selection on the page at any time or delete it in your browser settings.",
    "page.datenschutz.linksH2": "Links to vendors and affiliate programmes",
    "page.datenschutz.linksBody": "Links to shops are labelled as ads. Some of them are affiliate links: they contain an identifier that tells the shop you came from Peptide Compass. If you buy there, we may receive a commission. By clicking, you leave our site, and from then on the shop's own privacy policy applies. We receive no data from the shops that would allow us to identify you personally.",
    "page.datenschutz.kontaktH2": "Contact by email",
    "page.datenschutz.kontaktBody": "When you write to us, we process your email address and the content of your message in order to reply (Art. 6 (1) (b) and (f) GDPR). We delete the data once your request is settled and no statutory retention obligations apply.",
    "page.datenschutz.rechteH2": "Your rights",
    "page.datenschutz.rechteBody": "You have the right of access to your stored data (Art. 15 GDPR), to rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and to object to processing based on legitimate interests (Art. 21). An informal email to the address above is enough.",
    "page.datenschutz.beschwerdeBody": "You can also lodge a complaint with a data protection supervisory authority, for example the authority where you live (Art. 77 GDPR).",
    "page.datenschutz.stand": "Last updated: September 2026",
    "page.datenschutz.ogTitle": "Peptide Compass · Privacy",
    "page.datenschutz.ogDescription": "Privacy policy of Peptide Compass: no cookies, no tracking. What data arises through hosting and what rights you have.",
    "page.datenschutz.verantwortlicherName": "Online Monkeys LLC",
    "page.datenschutz.verantwortlicherZeile1": "1309 Coffeen Avenue STE 1200",
    "page.datenschutz.verantwortlicherZeile2": "Sheridan, WY 82801, USA"
  });

})(window.PK.i18n);
