# Peptide Compass · Komponenten-Katalog

Ein System für alle 11 Seitentypen. **Keine neuen CSS-Regeln erfinden** : jede
Anforderung, die hier nicht passt, geht zurück an den web-designer statt sie
lokal zu lösen. Klassen kombinieren, nicht duplizieren. Tokens (Farbe/Type/
Spacing) stehen in `assets/css/system.css` Abschnitt 1 : dort ändern, nie
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
| `.row-between` | Flex-Zeile, space-between, wrap : Titel+Link, Card mit Text+Button |
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
: siehe Type-Scale in system.css. Überschriften (`h1`-`h4`) haben Basis-Styles,
Utility-Klassen für abweichende Größen an anderen Elementen (z. B. `<p class="h2">`).

## .nav : Glas-Header + Mobile-Menü

```html
<header class="nav">
  <div class="nav-inner">
    <a class="nav-logo" href="index.html">Peptide Compass</a>
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

### .hero-3d : schwebende Molekül-/Vial-Sprites (nur Startseite)

v2 (06.09., Vic-Feedback "alles mutiger: Moleküle in den Hintergrund, Vial +
Helix vorne größer, natürlicher verteilt, gleiche Belichtung"): DREI statt
zwei Ebenen-Layer, damit Vial + Helix vorne einen eigenen, stärkeren
Parallax-Faktor bekommen. Markup: `.hero-3d-stage` wrapt `.hero-copy`
(Eyebrow/H1/P/Suchleiste) und drei Geschwister-Layer `.hero-3d.hero-3d-back`
(z-index unter Text, Faktor .3), `.hero-3d.hero-3d-mid` (z-index unter Text,
Faktor .6, scharf) und `.hero-3d.hero-3d-front` (z-index über Text, Faktor 1).
Jedes Sprite: `.hero-3d-sprite` (Position/Tiefe/Kipp-Winkel über
`--x/--y/--z/--size/--tilt`, plus `data-sprite="…"` fürs responsive
Retargeting) > `.hero-3d-spin` (langsame Z-Rotation) > `<img>` (Schweben via
`pk-float`, `--fx/--fy/--rx/--ry/--dur/--delay`). `PK.initHero3D()` aufrufen
(Maus-Parallax, max ±26px, No-Op bei prefers-reduced-motion/Touch). Assets:
`assets/img/hero3d/*.png` (1024², `*_512.png`/`*_320.png` für `srcset`,
Belichtung angeglichen über `tools/normalize_sprites.py`, Referenz vial_a).

| Sprite (Datei) | Layer | Tiefe | Größe (Desktop) | Position (--x / --y) | --z | Faktor |
|---|---|---|---|---|---|---|
| mol_a.png (Kette) | back | back | 110px | 14% / 22% | −170px | .3 |
| mol_b.png (Ring) | back | back | 140px | 84% / 74% | −140px | .3 |
| drop.png | back | back | 80px | 66% / 12% | −155px | .3 |
| vial_a.png | mid | mid (scharf) | 200px, rotate −8° | 4% / 38% | −20px | .6 |
| vial_b.png | front | front | 230px | 20% / 78% | 60px | 1 |
| mol_c.png (Helix) | front | front | 290px | 74.5% / 36% | 80px | 1 |

Front-Sprites (vial_b, mol_c) überlappen bewusst den Rand von H1/Subline
(Glas-Look, ~8–12% Sprite-Breite auf H1-Zeile 1): Lesbarkeit per Screenshot
geprüft, nie mehr als 15% der H1-Fläche verdeckt.

Tablet (641–1023px): mol_c 220px @ 83%/36%, vial_b 160px @ 9%, vial_a 150px
@ 2%/38%, back-Moleküle proportional kleiner (`data-sprite`-Selektoren,
`!important` weil `--size`/`--x`/`--y` inline sitzen). **Wichtig:** die
Desktop-%-Werte NICHT einfach übernehmen: die H1-Type-Scale bleibt bis
1024px fix breit, aber die Bühne wird schmaler, also verschieben sich die
Überlapp-Verhältnisse stark (ungeprüft führte das bei 900px zu ~78%
H1-Overlap). Eigene, per Screenshot geeichte Tablet-Positionen sind daher
Pflicht, nicht optional.

Mobile (≤640px): nur noch mol_c (Helix, 150px @ 95%/8%, oben rechts) +
vial_b (110px @ 14%/86%, unten links) bleiben sichtbar: beide aber hinter
dem Text (`.hero-3d-front` bekommt dort `z-index:0`), alle anderen Sprites
(`.hero-3d-back`, `.hero-3d-mid`) sind `display:none`. Auf sehr schmalen
Viewports (390px) füllt die H1 fast die volle Bühnenbreite: der Helix sitzt
deshalb bewusst mehrheitlich ÜBER dem Text (nicht daneben) und ragt nur mit
der unteren Spitze leicht in die erste Zeile. `.hero{ overflow:hidden; }`
verhindert horizontales Scrollen durch die randnahen Front-Sprites.

#### Glas-Refraktion (06.09., Vic-Wunsch "man sieht die Schrift durch den
Helix hindurch, wenn er über dem Text liegt"): vial_b und mol_c bekommen
zusätzlich `.hero-glass` auf ihrem `.hero-3d-sprite`. Drei Ebenen
(system.css 6b-glass), unten nach oben:

1. **`.hero-glass-body`** (Kind von `.hero-3d-spin`, vor dem `<img>`):
   deckungsgleiches `<span>`, `mask-image` = dasselbe Sprite-PNG (inline
   gesetzt, siehe Pfad-Hinweis unten), `backdrop-filter:blur(1.6px)
   saturate(1.25) brightness(1.06)` + dezenter weiß/blauer Gradient. Zeigt
   den ECHTEN Inhalt dahinter (Text, Video) - das ist der eigentliche
   "Glas"-Effekt, browsernativ, kein JS nötig.
2. **`.hero-glass-refract`** (eigener Layer, kein Kind des Sprites): Klon
   von Eyebrow/H1/Subline aus `.hero-copy` (Suchleiste bewusst NICHT
   geklont), mit derselben Sprite-Maske zugeschnitten, innen leicht
   vergrößert+verschoben (`scale(1.045) translate(3px,-2px)`, Blur .35px,
   Farbe `color-mix(in srgb, var(--text) 78%, var(--accent))`, opacity
   .92) = die "gebrochene" Schrift im Glas. Äußerer Container bleibt
   deckungsgleich mit `.hero-copy` (Hitbox für Verifikation), die
   Verzerrung sitzt auf `.hero-glass-refract-inner` innen.
3. **`.hero-glass-rim`** (= Klasse auf dem Original-`<img>`): opacity .62,
   `mix-blend-mode:screen` (Dark: `plus-lighter`, opacity .5) für Kanten/
   Glanzlichter, sonst wirken a+b zu flach.

**Sync**: `PK.initHero3D()` ruft intern `initHeroGlass()` auf (site.js,
privat). Pro rAF-Frame wird NICHT die Wrapper-Transform-Matrix invertiert,
sondern `mask-position`/`mask-size` des Refract-Klons per
`getBoundingClientRect()` auf die aktuelle Sprite-Position nachgeführt
(Begründung: der Wrapper trägt Float+Spin+JS-Parallax gleichzeitig, die
kombinierte Matrix ist bei mehreren simultanen Animationen in Safari nicht
zuverlässig framegenau lesbar; `getBoundingClientRect` liest das bereits
aufgelöste Endergebnis, in beiden Engines synchron zum aktuellen Frame und
1:1 mit der QA-Rect-Prüfung verifizierbar). Alle Rect-Reads laufen vor den
Style-Writes (kein Layout-Thrashing); nur `alignBase()`
(Basis-Deckungsgleichheit mit `.hero-copy`) schreibt Geometrie
(left/top/width/height) und läuft nur bei Init/Resize/Sprachwechsel, nicht
pro Frame - der rAF-Loop selbst schreibt nur Maskeigenschaften (Paint,
kein Reflow). `PK.hero3dSyncGlass` ist ein Test-Hook: ruft `alignBase()` +
`trackMask()` direkt auf, für Verifikation ohne laufenden rAF (z. B. in
einer statischen Vorschau-Pane).

**Pfad-Gotcha**: `mask-image` wird NIE über `var(--gmask)` innerhalb von
system.css aufgelöst - ein relatives `url()` in einer Custom Property löst
sich beim Substituieren gegen das Stylesheet auf, in dem `var()` steht
(`assets/css/`), nicht gegen `index.html`. Body (statisch) und
Refract-Klon (JS) setzen `mask-image`/`-webkit-mask-image` deshalb inline
direkt am Element, genau wie die `src=`-Pfade der Sprites.

**Sprachwechsel**: `pk:langchange` löst `buildClones()` + `syncNow()` neu
aus (frischer Text aus dem bereits übersetzten `.hero-copy`). **Resize**:
`alignBase()` + `trackMask()`.

**Fallbacks**: `@supports not (backdrop-filter)` blendet `.hero-glass-body`
aus (nur Klon+Rim bleiben). `prefers-reduced-motion`: `initHeroGlass()`
richtet einmalig aus, startet aber keinen rAF-Loop (Sprites bewegen sich
nicht mehr). Mobile ≤640px: nur der Helix (mol_c) behält den Glas-Effekt,
vial_b fällt auf normales Sprite zurück (`.hero-glass-body` aus, Rim zurück
auf opacity 1/Normal-Blend, Refract-Klon `display:none`) - Punkt 3 im
Auftrag. Kontrast/Deckungs-Obergrenze der bestehenden Overlap-Regel (max.
15 % H1-Fläche) bleiben unverändert, weil `--x/--y/--size` der Sprites
nicht angetastet wurden.

## .card / .vendor-card

```html
<div class="card">
  <p class="card-eyebrow">Label</p>
  <p class="card-title">Titel</p>
  <p class="card-body">Text</p>
</div>
<a class="card" href="…">…gleiche Struktur, ganze Karte klickbar…</a>
```
Für Anbieter-Karten **nicht** manuell bauen : `PK.renderVendorCard(vendor, basePath)` nutzen
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
Href-Werte niemals hart eintippen aus Vendor-Daten : immer durch `PK.safeUrl(vendor.affiliateUrl)` schicken.

## .demo-banner

```html
<div class="demo-banner" data-demo-banner hidden>
  <span data-demo-banner-text>Demo-Daten : …</span>
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
    <p class="footer-meta">© Peptide Compass · Demo-Projekt</p>
  </div>
</footer>
```
`PK.footerDisclaimer()` überschreibt den Fallback-Text mit `window.PK.site.disclaimer`.
Auf **jeder** Seite pflichtig (Annahme 10, ia.md Abschnitt 2).

## .visual / .split / .tilt / .hero-media (Video) : Bildflächen & Motion

Apple-Produktseiten-Gefühl: je Sektion ein großes ruhiges Visual, Bewegung
reagiert auf Scroll, nichts blinkt oder pulsiert. Bilder/Video liefert der
Grafikdesigner unter den in `01_ux/`/Auftrag genannten Pfaden
(`assets/img/sec_*.jpg`, `assets/img/mol_<slug>.jpg`,
`assets/video/hero_loop.mp4` + `hero_poster.jpg`, alle 3:2 außer Banner);
solange sie fehlen, zeigt jede Fläche ihren CSS-Gradient-Fallback : kein
Layout-Sprung, weil die Größe über `aspect-ratio` am Container steht.

```html
<div class="visual">
  <img src="assets/img/sec_score.jpg" alt="" loading="lazy" onerror="this.style.display='none'">
</div>
```
Modifier: `.visual-parallax` (Bild bewegt sich beim Scrollen, ±40px, via
`PK.initParallax()`) · `.visual-kenburns` (Zoom 1.0→1.08/12s, startet mit
der umgebenden `.reveal`-Sektion, kein eigener JS-Beobachter nötig) ·
`.visual-banner` (schmales Breitformat, Anbieter-Detail-Kopf) ·
`.visual-thumb` (kleines Karten-Thumbnail, Wirkstoffe-Übersicht).

`will-change:transform` auf `.visual-parallax img` steht NICHT dauerhaft im
CSS : `PK.initParallax()` toggelt `.is-parallax-active` auf den Container,
solange er per IntersectionObserver als sichtbar geführt wird (system.css
Abschnitt 18); außerhalb des Viewports bleibt kein Compositing-Layer aktiv.

Dark Mode: `.visual` bekommt unter `prefers-color-scheme:dark` (und
`[data-theme="dark"]`, falls eine Seite das Attribut später setzt) einen
dezenten Innen-Ring (`box-shadow:0 0 0 1px rgba(255,255,255,.08) inset`) :
sonst schneiden helle Fotos hart auf reinem Schwarz (`body{background:#000}`)
ohne jede weiche Kante. Radius/Layout bleiben unverändert, Light Mode ist
davon nicht betroffen.

`.hero-media` nutzt `border-radius:24px` (nicht `--radius-card`/20px) :
folgt damit dem `.visual`-Bildsystem statt dem Card-Radius.

Above-the-fold-Banner (z. B. `.visual-banner` im ersten Viewport einer
Detailseite) bekommen `loading="eager" fetchpriority="high"` statt
`loading="lazy"` : LCP-Bild, kein Grund zum verzögerten Laden. Ein
anbieterspezifisches Banner-Bild (statt eines generischen Sektionsbilds)
wird aus dem Datensatz abgeleitet (z. B. `mol_<slug>.jpg` des ersten
Produkts) und braucht dafür einen datengetriebenen `alt`-Text über die
bestehende i18n-Konvention (`{name}`-Platzhalter, DE+EN) : kein
hartkodiertes generisches Bild mehr auf einer Template-Seite.

```html
<section class="section container reveal">
  <div class="split split-reverse">
    <div class="split-visual visual visual-parallax">
      <img src="assets/img/sec_calc.jpg" alt="" loading="lazy" onerror="this.style.display='none'">
    </div>
    <div class="split-text row-between">
      <div>…Eyebrow + Titel…</div>
      <a class="btn btn-secondary" href="…">…CTA…</a>
    </div>
  </div>
</section>
```
`.split` = Text + Visual nebeneinander, mobil gestapelt (≤900px).
`.split-reverse` tauscht die Spaltenreihenfolge (Visual zuerst) : Sektionen
abwechselnd normal/reverse anlegen, das ist der Apple-Rhythmus.

Die Textseite ist IMMER `.split-text` : kein `.card`, keine eigene Fläche/
kein eigenes Padding, nur der Layout-Slot. Führt die Textseite eine CTA
(Link/Button danaben), kommt zusätzlich `.row-between` dazu (`.split-text
row-between`), sonst bleibt `.split-text` allein. So sieht das Bild/Text-
Rahmen-Pairing über alle `.split`-Sektionen einer Seite gleich aus : eine
Sektion, die versehentlich `.card` bekommt, bricht diese Konsistenz sofort
sichtbar aus dem Rhythmus.

Mobil (≤900px): `.split-reverse .split-visual{ order:1; }` : Text steht
IMMER vor dem Bild, unabhängig von der DOM-Reihenfolge (bei `.split-reverse`
steht das Bild im Markup zuerst). Nie `order:0` setzen, das kehrt die reine
DOM-Reihenfolge nur zurück und reproduziert den Bild-vor-Text-Bug.

`.tilt` auf eine `.card`/`.vendor-card` setzen für einen dezenten
Hover-Kipp-Effekt (max. 4°, 6px Lift). `PK.initTilt()` einmal pro Seite
aufrufen : aktiviert sich nur bei `(hover:hover) and (pointer:fine)`, macht
also auf Touch nichts.

`.hero-media` trägt jetzt wahlweise ein `<video>` statt `<img>`:
```html
<div class="hero-media">
  <video class="hero-media-video" data-hero-video autoplay muted loop playsinline
         preload="metadata" poster="assets/video/hero_poster.jpg"
         data-fallback="assets/img/hero.jpg">
    <source src="assets/video/hero_loop.mp4" type="video/mp4">
  </video>
</div>
```
`PK.initHeroVideo()` aufrufen: ersetzt das Video bei
`prefers-reduced-motion` oder fehlendem `hero_loop.mp4` durch ein
statisches `<img>` (`data-fallback`), prüft das Poster einzeln nach,
pausiert das Video, sobald es aus dem Viewport scrollt, und spielt es bei
JEDEM Wiedereintritt erneut ab (`.play()`-Promise-Fehler abgefangen, kein
Fehlerzustand). Zusätzlich ein `visibilitychange`-Listener: kommt der Tab
aus dem Hintergrund zurück, während das Video noch im Viewport steht, wird
erneut `.play()` versucht (Browser pausieren Video oft beim Tab-Wechsel,
unabhängig vom Scroll-Zustand).

Init-Reihenfolge (ergänzt die Pflicht-Reihenfolge weiter unten):
`PK.initReveal()` **vor** `PK.initParallax()`/`PK.initTilt()`/
`PK.initHeroVideo()` : Reihenfolge unter den dreien selbst egal, sie sind
unabhängig. Alle drei sind No-Ops, wenn ihre Zielklasse auf der Seite
nicht vorkommt.

## .reveal : Scroll-Reveal

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

  // ZUERST: applyI18n()/initLangToggle() : vor allen Seiten-Renderern.
  PK.applyI18n();
  PK.initLangToggle();

  PK.initNav();
  PK.initReveal();
  PK.initDemoBanner();
  PK.footerDisclaimer();

  function render() {
    // hier: dynamische Inhalte bauen : PK.tx() für Freitext-Datenfelder,
    // PK.tEnum() für Enum-Werte, PK.t() für UI-Strings, PK.byNum() für Zahlen.
  }

  render();
  document.addEventListener("pk:langchange", render); // Pflicht bei dynamischem Inhalt
})();
```
Jede Seite mit dynamischem Inhalt (Anbieter-/Wirkstoff-Listen, Tabellen,
Rechner-Ausgabe) MUSS ihre Render-Logik in eine benannte Funktion packen und
auf `pk:langchange` erneut aufrufen : sonst bleibt der Inhalt beim
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

Kein Markup nötig : `PK.initLangToggle()` (Teil von Schritt 4) injiziert die
`.lang-toggle`-Pille automatisch in jede `.nav` (Desktop, ab 1024px) und jede
`.nav-menu` (Mobile-Vollbild). CSS-Klassen `.lang-toggle` /
`.lang-toggle button[aria-pressed="true"]` liegen in `system.css` (Abschnitt
"Sprachumschalter", direkt nach `.nav`) : nichts davon lokal duplizieren.

### 8. Zahlenformat

`PK.byNum()` schaltet automatisch zwischen `de-DE` und `en-US` (Tausender-/
Dezimaltrennzeichen) je nach `PK.lang` : nie `Intl.NumberFormat` selbst
aufrufen, immer `PK.byNum()`.

## Barrierefreiheit / Qualitäts-Checkliste je Seite

1. `:focus-visible` kommt automatisch : keine eigenen `outline:none` setzen.
2. Jeder externe Link: `.badge-ad` + `rel="sponsored nofollow"` + `target="_blank"` + `data-affiliate="true"`.
3. `data-footer-disclaimer` im Footer nicht vergessen.
4. Bilder/Icons ohne Bedeutung: `alt=""`.
5. Datentexte (Vendor-/Peptide-Felder) immer über `textContent`/DOM-API einsetzen, nie `innerHTML`.
6. Neue Seite? Erst hier + `data/SCHEMA.md` + `01_ux/ia.md` (Sektionsreihenfolge) prüfen, bevor etwas Neues gebaut wird.
7. Jede sichtbare Zeichenkette braucht `data-i18n`/`data-i18n-attr` + einen Eintrag in `data/i18n/<seite>.js` (DE UND EN) : siehe Abschnitt "i18n: So tagst du eine Seite" oben.

### Sprache per URL
`?lang=de` oder `?lang=en` an jede Seite anhängen: setzt die Sprache, speichert sie in localStorage und gewinnt über gespeicherte Wahl und Browsersprache. Für teilbare Links, Screenshots und Tests.

---

## Runde „Leben und Conversion" (06.09.): neue Komponenten

Grundlage: `data/SCHEMA.md` Abschnitt „Erweiterung v1.2" (bindender Vertrag
für `vendor.brand`, `data/reviews.js`, `data/i18n/conversion.js`). Neue
Tokens in system.css Abschnitt 1: `--accent-warm`/`--accent-warm-strong`/
`--accent-warm-bg` (Deals/Rabatt/Podium-CTA, NIE für normale Buttons/Links).
`--brand` ist KEIN globaler Token, sondern wird pro Karte inline gesetzt
(`el.style.setProperty("--brand", vendor.brand.farbe)`); fehlt `vendor.brand`,
bleibt die Variable undefiniert und jede Komponente fällt auf einen
neutralen Rand zurück (`var(--brand, var(--line-strong))`).

### Vendor-Brand: eingefärbte Mono-Maske + 3px-Rand

Runde "eingefärbte Mono-Maske" (07.09.2026, Vic: "Wir färben die Logos
selbst ein, sodass es immer passt"): ÜBERALL, wo ein Anbieter erscheint,
wird die Mono-Silhouette (`vendor.brand.logoMono`, Alphakanal-Silhouette
aus `tools/build_vendor_logos.py`) per CSS `mask-image` in der jeweils
passenden Farbe gerendert - kein farbiges `<img>` mehr, kein Dark-Mode-Chip
mehr. Einzige Ausnahme: ein optionales kleines farbiges Original im
Detail-Kopf (`.vendor-logo-color`, siehe unten).

`PK.renderLogo(vendor, opts)` baut den Logo-Slot für Vendor-Card, Podium,
Anbieter-Detail-Kopf und Vergleichstabelle: `<span class="vlogo" role="img"
aria-label="…">` mit inline `mask-image` auf `vendor.brand.logoMono`,
eingefärbt über `background-color` (CSS-Variable `--vlogo-color`, gesetzt
durch die Tone-Klasse). `opts`:
- `basePath` (Default `""`)
- `tone` (`"text"|"secondary"|"brand"|"white"`, Default `"text"`): `text`
  = `var(--text)` (Tabelle/Karte - kippt in Dark Mode automatisch auf Weiß,
  weil `--text` selbst umschaltet), `secondary` = `var(--text-secondary)`
  (Logo-Leiste), `brand` = `var(--brand)` (Podium/Detail-Kopf, bleibt in
  Dark Mode dieselbe Markenfarbe), `white` = fest `#fff`.
- `size` (`"xs"|"card"|"sm"|"podium"|"detail"`, Default `"card"`):
  Kontextgröße über `.vlogo--*` (system.css Abschnitt 7) - `xs` 24px
  (wirkstoffe/detail.html Anbieter-Tabelle), `card` 26px (Vendor-Card),
  `sm` 28px/max 120px breit (Vergleichstabelle + Mobile-Kartenansicht),
  `podium` 32px (zentriert), `detail` 44px (Anbieter-Detail-Kopf).

Fallback-Kette: `logoMono` fehlt/404 -> `vendor.brand.logoFallback`
(archivierte Wortmarke, `assets/img/logos/_wordmarks/<slug>.svg`, ebenfalls
als Maske) -> schlägt AUCH das fehl (oder fehlt `logoFallback`): Anbieter-
name als Text (`.brand-logo-fallback`), kein kaputtes Icon. `PK.renderVendorCard()`
ruft das automatisch auf und setzt den 3px-Farbrand oben (`.vendor-card{
border-top:3px solid var(--brand, var(--line-strong)); }`) sowie die
Score-Bandfarbe (`.vendor-card-score.score-band-*`, siehe unten).

```html
<div class="vendor-card" style="--brand:#1B4F8C;">
  <span class="vlogo vlogo--card vlogo--tone-text" role="img" aria-label="Logo Name"
        style="mask-image:url('assets/img/logos/slug_mono.png');-webkit-mask-image:url('assets/img/logos/slug_mono.png');"></span>
  …
</div>
```

Farbiges Original (`vendor.brand.logo`) wird NUR noch an einer Stelle
genutzt: als optionales kleines Bild rechts neben der Mono-Maske im
Anbieter-Detail-Kopf, Klasse `.vendor-logo-color` (28px, eigener heller
Chip `rgba(255,255,255,.92)` dahinter - einziger verbliebener Chip im
ganzen Projekt, weil ein beliebig farbiges Original sonst auf dunklem
Untergrund verschwinden könnte). Nur gezeigt, wenn `vendor.brand.logo !==
vendor.brand.logoFallback` (echtes Farblogo vorhanden, keine doppelte
Wortmarke) und die Datei lädt (404 entfernt das `<img>` wieder, siehe
anbieter/detail.html).

### Score-Bandfarben

`PK.scoreBand(score)` liefert `"good"` (≥80, grün) / `"mid"` (60-79, blau) /
`"low"` (<60, warm). Klasse immer `"score-band-" + PK.scoreBand(x)` auf das
Element mit der Score-Zahl (`.vendor-card-score`, `.score-ring-value`,
`.weights-ranking-score`) : EIN Helfer, überall gleiche Grenzwerte.

### `.logo-strip` : laufende Logo-Leiste

`PK.initLogoStrip(selector, opts)` befüllt `[data-logo-strip]`. Monochrom
über CSS `mask-image` + `background-color:var(--text-secondary)`, bei
Hover `var(--text)` (liest nur den Alpha-Kanal von `vendor.brand.logoMono`,
Fallback `brand.logo` - gleiche Tone-Logik wie `.vlogo--tone-secondary`
oben, eigene Klasse `.logo-strip-mask` statt `.vlogo` aus historischen
Gründen, gleiche Token): robuster als `<img>` + Filter und bleibt
`file://`-tauglich (kein `fetch`, anders als inline-SVG-Injection).
Pausiert bei Hover, Liste einmal dupliziert (`aria-hidden="true"` auf der
Kopie) für einen nahtlosen `translate3d`-Loop.
`prefers-reduced-motion`: Animation aus, Duplikat versteckt, `overflow-x:auto`
für manuelles Scrollen. Fehlt `vendor.brand`/die Logo-Datei: Fallback-Text
statt Maskenbox (`.logo-strip-item.is-fallback`).

```html
<div class="logo-strip" data-logo-strip aria-label="…"></div>
```

### `.podium` : Top-3-Anbieter

`PK.renderPodium(container, top3)` (`top3 = [Platz1, Platz2, Platz3]`) baut
3 `.podium-card`, Platz 1 optisch mittig und größer über CSS `order`
(DOM-Reihenfolge bleibt Platz2/Platz1/Platz3). Score-Ring füllt sich beim
Einblenden: `--pct` startet bei 0, springt beim Sichtbarwerden auf den
Score, animiert per CSS-`transition` auf der registrierten Custom Property
(`@property --pct`, system.css Abschnitt 19; ohne Support springt der Ring
direkt auf den Endwert, kein Fehlerzustand). Rabatt-Code-Box (`.code-box`)
nur, wenn `vendor.rabatt` gesetzt ist. CTA: `.btn-primary.podium-cta` +
`.badge-ad` + `rel="sponsored nofollow"`, auf Platz 1 in `--accent-warm`.

```html
<div class="podium" id="podium"></div>
<script>PK.renderPodium(document.getElementById("podium"), ranked.slice(0, 3));</script>
```

### `.weights` : Regler-Modul „Was ist dir wichtig"

`PK.initWeights(container)` erwartet 5 `<input class="weights-slider" type="range" min="0" max="3" step="0.1" data-crit="labor|recht|lieferung|sortiment|preis">`
plus `<span data-weight-pct="labor">` je Regler, eine `.weights-ranking`
(`<ol>`) und optional `.weights-reset-btn`. Default-Werte
(`PK.WEIGHTS_DEFAULT`, site.js) reproduzieren beim Normalisieren exakt die
SCHEMA-Gewichtung (labor 2.5, recht 2.5, lieferung 1.5, sortiment 1.5,
preis 2.0 → Summe 10 → 25/25/15/15/20 %). Gewichte werden relativ
normalisiert (Summe der Regler = 100 %, sichtbar über `.weights-pct`).
Ranking sortiert **absteigend** nach gewichtetem Score (höher = besser,
konsistent mit dem Rest der Seite) : Regler nur auf „Preis" ergibt die
Sortierung nach `vendor.score.preis`. Umsortierung per FLIP (alte
Zeilen-Position vor dem Reflow gemessen, `transform` weich auf 0
zurückgeführt), `prefers-reduced-motion` überspringt die Transition.
Reset stellt `PK.WEIGHTS_DEFAULT` wieder her.

```html
<div class="weights" id="weights">
  <div class="weights-sliders">
    <div class="weights-row">
      <div class="weights-row-head"><label for="w-labor">Labor</label><span class="weights-pct" data-weight-pct="labor">25%</span></div>
      <input class="weights-slider" type="range" id="w-labor" min="0" max="3" step="0.1" value="2.5" data-crit="labor">
    </div>
    <!-- … 4 weitere Regler … -->
    <button type="button" class="btn btn-secondary weights-reset-btn">Zurücksetzen</button>
  </div>
  <div class="weights-result">
    <p class="weights-result-title">Dein Ranking</p>
    <ol class="weights-ranking"></ol>
  </div>
</div>
<script>PK.initWeights(document.getElementById("weights"));</script>
```

### `.proof` : Zitat-Karten (Social Proof)

`PK.renderProof(sectionEl, opts)` liest `window.PK.reviews` (`data/reviews.js`).
`opts.vendorSlug` filtert auf einen Anbieter (Anbieter-Detail-Seite),
`opts.basePath` für den internen Link, `opts.demoNoteKey` für den i18n-Key
des Hinweistexts (Default `page.index.proofDemoNote`). **Fehlt
`window.PK.reviews` ODER ergibt der Filter keine Treffer: `sectionEl` wird
komplett versteckt** (`sectionEl.hidden = true`), kein leerer Abschnitt.
Avatar = Initialen in `var(--brand, var(--accent))`, Sterne als Unicode
(`★`/`☆`) mit `aria-label`, Text über `PK.tx(review, "text")`, Vendor-Name
verlinkt auf `anbieter/detail.html?slug=…`.

```html
<section class="section container reveal" id="proof-section">
  <p class="eyebrow">Erfahrungen</p>
  <h2 class="section-title">Was andere sagen</h2>
  <div class="proof-grid"></div>
  <p class="proof-note text-caption muted"></p>
</section>
<script>PK.renderProof(document.getElementById("proof-section"), { basePath: "" });</script>
```

### `.fresh` : Frische-Leiste

`PK.renderFresh(container)` berechnet aus `window.PK.batches` relativ zu
`window.PK.site.updated` (nicht zum echten „heute", Demo mit fixem
Stand-Datum): jüngste verifizierte Charge (`freshVerified`/`freshDaysAgo`/
`freshToday`), CoAs der letzten 7 Tage vor `updated`, Anbieter-Anzahl,
Score-Durchschnitt. Zahlen zählen über `.count-up` hoch (ruft
`PK.initCountUp(container)` intern selbst auf).

```html
<div class="fresh" id="fresh"></div>
<script>PK.renderFresh(document.getElementById("fresh"));</script>
```

### `.count-up` : generischer Zähl-Helfer

`PK.initCountUp(scope)` zählt jedes `[data-count-up][data-count-target]`
in `scope` (Default: ganzes Dokument) beim Einblenden easing-basiert von 0
zum Zielwert hoch (900ms, gleiches IntersectionObserver-+-Sofort-Check-
Fallback-Muster wie `PK.initReveal`, damit Elemente im/oberhalb des
Viewports auch ohne feuernden Observer zuverlässig zählen).
`prefers-reduced-motion`: sofort der Endwert. Erneuter Aufruf (z. B.
`pk:langchange`) zählt bereits gezählte Elemente NICHT erneut hoch,
formatiert den Endwert nur neu (`PK.byNum` je Locale). Genutzt von den
3 Hero-Kennzahlen (`index.html`) und `.fresh`.

```html
<div class="stat-value" data-count-up data-count-target="8">–</div>
<script>PK.initCountUp();</script>
```

### `.sticky-code-bar` : mobile Sticky-Leiste (Anbieter-Detail)

Fixes Bottom-Bar (`display:flex` nur ≤640px), erscheint nach 30% Scroll-
Fortschritt der Seite (`initStickyCodeBar()` in `anbieter/detail.html`,
seitenlokal, kein site.js-Helfer nötig), bleibt bis zum Schließen sichtbar
(kein Wiedererscheinen nach dem Schließen). Nur befüllt/eingeblendet, wenn
`vendor.rabatt.code` existiert, sonst `hidden`. Code + `.btn-primary.ext-link`
+ `.badge-ad` + Schließen-Button (`aria-label` über
`page.anbieter-detail.stickyClose`).

---

## Runde „UX-Fix" (06.09., `_gate/UX_audit_r1.html`): Vergleichstabelle + Mobile-Karten

### Kern-Spalten + `data-extra` + Kriterien-Toggle (`vergleich.html`)

BLOCKER-Fix (Befund 1): die Vergleichstabelle zeigt standardmäßig nur 7
Kern-Spalten (Anbieter, Gesamtscore, Preis/mg, CoAs, Versand, Rabatt,
Aktion). 7 weitere Spalten (Land, die 5 Teilscores Labor/Recht/Lieferung/
Sortiment/Preis, Zahlung) tragen `data-extra` auf `<th>` UND `<td>` und
sind per CSS ausgeblendet (`.table:not(.table--show-extra) [data-extra]`).
Ein Button (`.criteria-toggle`, `aria-pressed`) schaltet
`.table--show-extra` auf der Tabelle um; Zustand steht in der URL-Hash
(`#kriterien=alle`), damit ein geteilter Link die gewählte Ansicht
reproduziert. Bleiben im DOM (nur `display:none`), `PK.sortTable()`
funktioniert auf ihnen unverändert, sobald sie sichtbar sind.

```html
<th data-extra data-sortable onclick="PK.sortTable(this.closest('table'),1)">Land</th>
```

### `[data-sticky="left"/"right"]` : fixierte Kern-Spalten

Anbieter (erste Spalte) und Aktion (letzte Spalte) bleiben beim
horizontalen Scrollen der erweiterten Ansicht sichtbar
(`position:sticky`, eigene Flächenfarbe `var(--bg)`/`var(--surface)` im
Kopf + Hairline per `box-shadow`, kein Elevation-Schatten). Nur diese
zwei Spalten tragen das Attribut, alle anderen `.table`-Instanzen im
Projekt (Produkt-/Chargen-Tabellen) sind unberührt.

### `.compare-card` / `.compare-cards` : Mobile-Kartenansicht

Ersetzt (nicht nur scrollbar macht) die Tabelle unter 900px komplett,
`#vergleich-cards`, gebaut aus `renderCards()` in `vergleich.html`
(seitenlokal, kein site.js-Helfer). Eigene Klasse, **nicht** `.vendor-card`
(das Karten-Grid auf Start/Anbieter-Liste gehört einer parallelen
Session). Zeigt Score, Preis/mg, Rabatt (falls vorhanden), CTA – die vier
für die Kauf-Entscheidung relevanten Werte aus der UX-Research
(`UX_audit_r1.html`, Personas „Preisjägerin"/„Wiederkäufer"). Übernimmt
die aktuelle Tabellen-Sortierung (liest `data-vendor-slug` von den bereits
sortierten `<tr>`s), nicht nur die Default-Reihenfolge.

```html
<div class="compare-cards" id="vergleich-cards"></div>
```

### `.sticky-code-bar-close` / `-copy` / `-cta` : 44px Tap-Target

War 28px (`.sticky-code-bar-close`) bzw. ~33px (Copy/CTA-Buttons), jetzt
`44×44` bzw. `min-height:44px` (UX-Audit r1, „alle Tap-Targets ≥44px").
Passt ohne Bar-Vergrößerung, weil die Bar-Innenhöhe (`max-height:64px` −
`padding-block` 10px) bereits genau 44px beträgt.

---

## DESIGN.md-Mapping (Apple-Analyse, VoltAgent/MIT, 06.09.)

Angleichung an `DESIGN.md` mit 3 dokumentierten Ausnahmen: (a) Nav bleibt
hell/Glas statt Apples `{colors.surface-black}` ; (b) `--accent-warm` bleibt
ausschließlich Deals/Rabatt-Pills/Podium-CTA, nie normale Buttons/Links ;
(c) Vendor-Markenfarbe (`--brand`) nur 3px-Kante + Avatar, nie Fläche
(unverändert, `.vendor-card` liegt außerhalb dieses Umbaus).

| DESIGN.md-Token | Unser Name | Wert | Ausnahme/Hinweis |
|---|---|---|---|
| `{colors.primary}` Action Blue | `--accent` | `#0066cc` | war `#0071e3` (das war eigentlich primary-focus) |
| `{colors.primary-focus}` | `--focus-ring` | `#0071e3` | traf schon exakt, unverändert |
| `{colors.primary-on-dark}` Sky Link Blue | `--accent` (Dark Mode + `.section-dark`) | `#2997ff` | traf schon exakt |
| `{colors.canvas}` | `--bg`/`--surface-2` | `#ffffff` | traf schon exakt |
| `{colors.canvas-parchment}` | `--surface` | `#f5f5f7` | traf schon exakt |
| `{colors.ink}` | `--text` | `#1d1d1f` | traf schon exakt |
| `{colors.ink-muted-48}` | **nicht übernommen** | – | `#7a7a7a` fällt auf `--surface` auf 3.94:1 (AA-Fail bei 12-14px) : `--text-secondary` bleibt `#5c5c61` (6.1-6.65:1, AA-sicher) |
| `{colors.hairline}` | `--line` | `#e0e0e0` | war `#d2d2d7` |
| `{colors.surface-chip-translucent}` (Basis) | `--line-strong` | `#d2d2d7` | war `#b8b8bd` |
| `{colors.surface-tile-1/2}` | `.section-dark` (`--tile-bg`/`--surface`) | `#272729`/`#2a2a2c` | lokal re-scoped, kein globaler Dark-Mode-Umbau |
| `{colors.body-muted}` | `.section-dark`-`--text-secondary` | `#cccccc` | nur innerhalb `.section-dark` |
| Typografie-Hierarchie (hero-display/display-lg/body 17-1.47--0.374) | `--fs/--lh/--ls-display/h2/body` | siehe system.css §1 | body/h2 jetzt exakt, Rest proportional angeglichen |
| Gewichts-Leiter 300/400/600/700 (500 entfällt) | global | – | 2 Fundstellen `font-weight:500` (`.btn-link`, `.faq summary`) → 600 |
| `{rounded.sm}` | `--radius-sm` | `8px` | war `10px` |
| `.badge-ad` | `--radius-sm` | `8px` | war harter Wert `4px`, einziger Zwischenwert im System (Fix-Runde 4) : jetzt Teil der Radien-Grammatik statt Sonderfall |
| `{rounded.lg}` | `--radius-card` | `18px` | war `20px` (traf keine Apple-Stufe) |
| `{rounded.md}` (seltene Pearl-Ausnahme) | `--radius-input` | `11px` | war `12px`, jetzt bewusst die dokumentierte Ausnahme statt Zwischenwert |
| `{rounded.pill}` | `--radius-pill` | `9999px` | war `999px`, keine visuelle Änderung |
| Produkt-Schatten (einzige Schatten-Ausnahme) | `--shadow-product` | reserviert, ungenutzt | keine freistehenden Produkt-Renders im Bestand, nur Full-Bleed-Fotografie |
| Karten-/Button-Schatten entfernt | `.card`/`.podium-card`/`.lang-toggle` | – | Elevation jetzt über Hairline/Randkontrast/Flächenwechsel |
| Produkt-Tiles (voll, eckig) | `.section-tinted`/`.section-dark` | `border-radius:0`, Full-Bleed | 100vmax-Box-Shadow-Trick, KEINE HTML-Änderung nötig |
| `{component.button-primary-active}` `scale(.95)` | `.btn:active` | `scale(.95)` | war `scale(.97)` |
| `{component.global-nav}` Höhe 44px | `--nav-h` | `44px` | war `48px` |
| Touch-Target ≥44px | `.nav-hamburger` | `44×44px` | war `36×36px` |
| Container-Breiten (~1440/~980) | `--container-max`/`--container-narrow` | `1280px`/`980px` + `--container-pad` 48px ab 1024px | Ausnahme: 1280 statt 1440, damit Inhalte bei 1440-Viewports nicht am Rand kleben |
| Footer-Padding 64px | `.footer` | `padding-block:var(--sp-8)` | war `--sp-6`/48px |

**Bewusst NICHT übernommen:**
- `.tilt:hover`-Schatten bleibt (gemeinsame Komponente mit `.vendor-card`, das
  die parallele Session gerade bearbeitet: nicht angefasst, um keine
  Kollision zu riskieren).
- Footer-Spaltenlogik (Apple `dense-link` 17px/2.41 Zeilenhöhe für gestapelte
  Link-Spalten) : unser Footer ist ein einzeiliger Flex-Wrap-Link-Riegel, kein
  gestapeltes Spaltenlayout. Die extreme Zeilenhöhe passt strukturell nicht
  und würde die Footer-Links optisch über die Fließtext-Hierarchie heben.
  Größe/Farbe bleiben unverändert (`--fs-small`/`--text-secondary`).
- `{colors.ink-muted-48}` als generisches Sekundärtext-Token (siehe Tabelle
  oben, AA-Fail auf Parchment).
