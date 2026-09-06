# PeptidKompass · Komponenten-Katalog

Ein System für alle 11 Seitentypen. **Keine neuen CSS-Regeln erfinden** — jede
Anforderung, die hier nicht passt, geht zurück an den web-designer statt sie
lokal zu lösen. Klassen kombinieren, nicht duplizieren. Tokens (Farbe/Type/
Spacing) stehen in `assets/css/system.css` Abschnitt 1 — dort ändern, nie
Werte hart in einer Seite eintippen.

Format je Komponente: Klasse(n) → Zweck → Markup-Snippet.

---

## Layout

| Klasse | Zweck |
|---|---|
| `.container` | Breite Sektion, max. 1280px, zentriert, seitliches Padding |
| `.container-narrow` | Textlastige Sektion (FAQ, Methodik, Rechtstexte), max. 1024px |
| `.section` | Vertikaler Sektionsabstand (96px, mobil 64px), Trennlinie zur vorherigen Sektion |
| `.section-tight` | Kompakter Sektionsabstand (48px), z. B. Kennzahlen direkt unter Hero |
| `.section-tinted` | Sektion mit `--surface`-Hintergrund + Card-Radius (alternierende Sektionen) |
| `.row-between` | Flex-Zeile, space-between, wrap — Titel+Link, Card mit Text+Button |
| `.grid-2` / `.grid-3` / `.grid-4` | Grid mit 2/3/4 Spalten, bricht automatisch auf Tablet/Mobile (siehe Media Queries) |

```html
<section class="section section-tinted container">
  <div class="row-between">
    <h2 class="section-title">Titel</h2>
    <a class="btn-link" href="…">Alle ansehen</a>
  </div>
  <div class="grid-4">…</div>
</section>
```

## Typografie

`.display` `.h1` `.h2` `.h3` `.text-small` `.text-caption` `.muted` `.eyebrow`
— siehe Type-Scale in system.css. Überschriften (`h1`-`h4`) haben Basis-Styles,
Utility-Klassen für abweichende Größen an anderen Elementen (z. B. `<p class="h2">`).

## .nav — Glas-Header + Mobile-Menü

```html
<header class="nav">
  <div class="nav-inner">
    <a class="nav-logo" href="index.html">PeptidKompass</a>
    <nav aria-label="Hauptnavigation">
      <ul class="nav-links"><li><a href="…">Punkt</a></li></ul>
    </nav>
    <div class="nav-cta"><a class="btn btn-primary" href="…">Anbieter finden</a></div>
    <button class="nav-hamburger" aria-controls="nav-menu" aria-expanded="false" aria-label="Menü öffnen">…</button>
  </div>
</header>
<div class="nav-menu" id="nav-menu">
  <div>
    <div class="nav-cta">…</div>
    <ul class="nav-menu-links"><li><a href="…">Punkt</a></li></ul>
  </div>
  <ul class="nav-menu-trust"><li><a href="…">Methodik</a></li></ul>
</div>
```
Aktiver Nav-Punkt: `aria-current="page"` auf dem `<a>` setzen. Toggle-Logik: `PK.initNav()` aufrufen.
Auf Unterseiten (`anbieter/`, `wirkstoffe/`) Hrefs mit `../` präfixen, CSS/JS-Pfade ebenso.

## .hero

```html
<section class="hero container">
  <div class="hero-eyebrow"><span class="eyebrow">Kicker</span></div>
  <h1 class="display">Headline</h1>
  <p>Subline</p>
  <picture class="hero-media"><img src="assets/img/….png" alt="" onerror="this.style.display='none'"></picture>
</section>
```
`.hero-media` zeigt einen CSS-Gradient-Fallback; das `<img>` blendet sich bei 404 selbst aus (`onerror`).

## .card / .vendor-card

```html
<div class="card">
  <p class="card-eyebrow">Label</p>
  <p class="card-title">Titel</p>
  <p class="card-body">Text</p>
</div>
<a class="card" href="…">…gleiche Struktur, ganze Karte klickbar…</a>
```
Für Anbieter-Karten **nicht** manuell bauen — `PK.renderVendorCard(vendor, basePath)` nutzen
(baut `.vendor-card` inkl. Score, Pills, internem Detail-Link und optionalem externem
Shop-Link mit `.badge-ad` + `rel="sponsored nofollow"` + `target="_blank"`).

## .pill (+ Varianten)

`.pill` (neutral) · `.pill-ok` (grün, z. B. RUO vorhanden) · `.pill-warn` (orange, z. B. Rabatt%)
· `.pill-info` (blau, z. B. CoA-Anzahl).

```html
<span class="pill pill-ok">RUO</span>
```

## .score-bar / .score-ring

```html
<div class="score-bar">
  <!-- pro Kriterium eine Zeile, per PK.renderScoreBar(label, value, max) erzeugt -->
</div>
```
`PK.renderScoreBar("Labor", 92)` liefert eine fertige `.score-bar-row`. Für den
Gesamt-Score in Kopfbereichen optional `.score-ring` (Conic-Gradient-Ring):

```html
<div class="score-ring" style="--pct:82"><span class="score-ring-value">82</span></div>
```

## .code-box

```html
<div class="code-box">
  <code data-code>RABATT10</code>
  <button class="btn btn-secondary" onclick="PK.copyCode(this)">Code kopieren</button>
  <span class="code-box-percent">-10%</span>
</div>
```

## .table (sortierbar)

```html
<div class="table-wrap">
  <table class="table">
    <thead><tr>
      <th data-sortable onclick="PK.sortTable(this.closest('table'),0)">Anbieter</th>
      <th data-sortable onclick="PK.sortTable(this.closest('table'),1)" data-sort="12.30">Preis/mg</th>
    </tr></thead>
    <tbody><tr><td>Nordlicht Research</td><td data-sort="12.30">12,30 €</td></tr></tbody>
  </table>
</div>
```
`data-sort` auf `<td>` ist optional, aber empfohlen für Preis-/Score-Spalten
(vermeidet Fehlparsen von Formatierungen wie „12,30 €“).

## .btn (+ Varianten) / .badge-ad

`.btn.btn-primary` (Haupt-CTA) · `.btn.btn-secondary` (sekundär) · `.btn-link` (Text-Link mit „›“).
Jeder externe/affiliate Link bekommt **zwingend** `.badge-ad` + `rel="sponsored nofollow"`
+ `target="_blank"` + `data-affiliate="true"`:

```html
<a class="btn btn-secondary ext-link" href="#DEMO" target="_blank" rel="sponsored nofollow" data-affiliate="true">
  Zum Shop<span class="badge-ad">Anzeige</span>
</a>
```
Href-Werte niemals hart eintippen aus Vendor-Daten — immer durch `PK.safeUrl(vendor.affiliateUrl)` schicken.

## .demo-banner

```html
<div class="demo-banner" data-demo-banner hidden>
  <span data-demo-banner-text>Demo-Daten — …</span>
</div>
```
`PK.initDemoBanner()` zeigt/versteckt und befüllt den Text aus `window.PK.site.demo`.

## .faq

```html
<div class="faq">
  <details><summary>Frage</summary><p>Antwort</p></details>
</div>
```
Reines HTML (`details`/`summary`), kein JS nötig. `+`-Icon dreht sich per CSS bei `[open]`.

## .footer

```html
<footer class="footer">
  <div class="footer-inner">
    <ul class="footer-links"><li><a href="…">Methodik</a></li></ul>
    <p class="footer-disclaimer" data-footer-disclaimer>Fallback-Text</p>
    <p class="footer-meta">© PeptidKompass · Demo-Projekt</p>
  </div>
</footer>
```
`PK.footerDisclaimer()` überschreibt den Fallback-Text mit `window.PK.site.disclaimer`.
Auf **jeder** Seite pflichtig (Annahme 10, ia.md Abschnitt 2).

## .reveal — Scroll-Reveal

Klasse `.reveal` auf jede Sektion, die beim Scrollen einblenden soll, plus
`PK.initReveal()` einmal pro Seite aufrufen. Respektiert `prefers-reduced-motion`
automatisch (kein JS-Check nötig in der Seite selbst).

## Stat-Kennzahlen

```html
<div class="stat-grid">
  <div class="stat"><div class="stat-value">8</div><div class="stat-label">geprüfte Anbieter</div></div>
</div>
```

## i18n: So tagst du eine Seite (DE/EN, Plan Zweisprachigkeit)

Referenzmuster: `index.html` + `data/i18n/index.js` + `assets/js/site.js`
(Abschnitt "i18n CORE"). Jede der 5 Worker-Seiten folgt EXAKT diesem Muster,
keine Abweichungen, keine neuen Mechaniken erfinden.

### 1. Script-Reihenfolge im `<head>`/Body-Ende

```html
<script src="data/site.js"></script>
<script src="data/vendors.js"></script>
<script src="data/peptides.js"></script>
<script src="data/batches.js"></script>
<script src="data/i18n/global.js"></script>
<script src="data/i18n/<seitenname>.js"></script>
<script src="assets/js/site.js"></script>
```
`global.js` IMMER zuerst, dein Seiten-Wörterbuch danach, `site.js` zuletzt.
Unterseiten (`anbieter/`, `wirkstoffe/`) präfixen alle Pfade mit `../`.

### 2. Statischen Text taggen

```html
<h1 class="display" data-i18n="page.vergleich.h1">Anbieter im Vergleich</h1>
<input placeholder="Suchen" aria-label="Suche"
       data-i18n-attr="placeholder:page.vergleich.searchPlaceholder,aria-label:page.vergleich.searchAriaLabel">
<meta name="description" data-i18n="page.vergleich.metaDescription" content="…">
<title data-i18n="page.vergleich.title">…</title>
```
`data-i18n` setzt `textContent` (bei `<meta>`/`<title>` automatisch `content`
bzw. Text, PK.applyI18n() unterscheidet selbst). `data-i18n-attr` setzt
beliebige Attribute, mehrere Paare kommagetrennt `attr:key,attr2:key2`.

### 3. Seiten-Wörterbuch anlegen: `data/i18n/<seitenname>.js`

Kopiere `data/i18n/index.js` als Vorlage. Schlüssel-Präfix
`page.<seitenname>.<element>`, IMMER `i18n.merge("de", {…})` UND
`i18n.merge("en", {…})` befüllen (nie nur eine Sprache). EN-Ton: kurz, ruhig,
keine Ausrufezeichen, "Research use only" statt Heilversprechen.

### 4. Pflicht-Init-Reihenfolge im Seiten-Bootstrap-Script

```js
(function () {
  if (!window.PK) { console.warn("PK fehlt. Datendateien nicht geladen?"); return; }

  // ZUERST: applyI18n()/initLangToggle() — vor allen Seiten-Renderern.
  PK.applyI18n();
  PK.initLangToggle();

  PK.initNav();
  PK.initReveal();
  PK.initDemoBanner();
  PK.footerDisclaimer();

  function render() {
    // hier: dynamische Inhalte bauen — PK.tx() für Freitext-Datenfelder,
    // PK.tEnum() für Enum-Werte, PK.t() für UI-Strings, PK.byNum() für Zahlen.
  }

  render();
  document.addEventListener("pk:langchange", render); // Pflicht bei dynamischem Inhalt
})();
```
Jede Seite mit dynamischem Inhalt (Anbieter-/Wirkstoff-Listen, Tabellen,
Rechner-Ausgabe) MUSS ihre Render-Logik in eine benannte Funktion packen und
auf `pk:langchange` erneut aufrufen — sonst bleibt der Inhalt beim
Sprachwechsel in der alten Sprache stehen.

### 5. Datenfelder übersetzen: `PK.tx(obj, feld)`

```js
title.textContent = p.name || "";          // Name bleibt gleich (kein _en)
body.textContent = PK.tx(p, "kurz");       // "kurz" bzw. "kurz_en" falls vorhanden
eyebrow.textContent = PK.tEnum("kategorie", p.kategorie); // Enum-Map
```
Funktioniert auch, solange `_en`-Felder in den Datendateien noch fehlen
(Fallback DE). Erlaubte `_en`-Suffixe (siehe `data/SCHEMA.md`):
`kurz_en`, `beschreibung_en`, `hinweise_en`, `staerken_en`, `schwaechen_en`,
`lagerung_en`, `disclaimer_en`, `claim_en`, `affiliateNote_en`.

### 6. Enum-Werte übersetzen: `PK.tEnum(group, value)`

Enum-Rohwerte aus `data/SCHEMA.md` werden NIE direkt angezeigt, sondern immer
über `PK.tEnum()` gemappt (Wörterbuch liegt in `data/i18n/global.js`):

| group | Werte | Beispiel |
|---|---|---|
| `land` | DE, AT, CH, EU, INT | `PK.tEnum("land", vendor.land)` |
| `kategorie` | Regeneration, Stoffwechsel, Wachstumshormon-Achse, Haut & Kosmetik, Kognition, Sonstige | `PK.tEnum("kategorie", peptide.kategorie)` |
| `studienlage` | präklinisch, frühe klinische Studien, klinisch untersucht | `PK.tEnum("studienlage", peptide.studienlage)` |
| `coaStatus` | verifiziert, shop-eigen, fehlt | `PK.tEnum("coaStatus", batch.coaStatus)` |
| `zahlung` | Karte, SEPA, PayPal, Krypto | `vendor.zahlung.map(function(z){ return PK.tEnum("zahlung", z); })` |

### 7. Sprachumschalter

Kein Markup nötig — `PK.initLangToggle()` (Teil von Schritt 4) injiziert die
`.lang-toggle`-Pille automatisch in jede `.nav` (Desktop, ab 1024px) und jede
`.nav-menu` (Mobile-Vollbild). CSS-Klassen `.lang-toggle` /
`.lang-toggle button[aria-pressed="true"]` liegen in `system.css` (Abschnitt
"Sprachumschalter", direkt nach `.nav`) — nichts davon lokal duplizieren.

### 8. Zahlenformat

`PK.byNum()` schaltet automatisch zwischen `de-DE` und `en-US` (Tausender-/
Dezimaltrennzeichen) je nach `PK.lang` — nie `Intl.NumberFormat` selbst
aufrufen, immer `PK.byNum()`.

## Barrierefreiheit / Qualitäts-Checkliste je Seite

1. `:focus-visible` kommt automatisch — keine eigenen `outline:none` setzen.
2. Jeder externe Link: `.badge-ad` + `rel="sponsored nofollow"` + `target="_blank"` + `data-affiliate="true"`.
3. `data-footer-disclaimer` im Footer nicht vergessen.
4. Bilder/Icons ohne Bedeutung: `alt=""`.
5. Datentexte (Vendor-/Peptide-Felder) immer über `textContent`/DOM-API einsetzen, nie `innerHTML`.
6. Neue Seite? Erst hier + `data/SCHEMA.md` + `01_ux/ia.md` (Sektionsreihenfolge) prüfen, bevor etwas Neues gebaut wird.
7. Jede sichtbare Zeichenkette braucht `data-i18n`/`data-i18n-attr` + einen Eintrag in `data/i18n/<seite>.js` (DE UND EN) — siehe Abschnitt "i18n: So tagst du eine Seite" oben.

### Sprache per URL
`?lang=de` oder `?lang=en` an jede Seite anhängen: setzt die Sprache, speichert sie in localStorage und gewinnt über gespeicherte Wahl und Browsersprache. Für teilbare Links, Screenshots und Tests.
