/* ============================================================================
   PEPTIDKOMPASS · site.js
   ============================================================================
   Vanilla JS, kein Framework, kein Build-Schritt. Läuft unter file:// UND http.
   Erwartet, dass die Datendateien (data/site.js, data/vendors.js,
   data/peptides.js, data/batches.js, siehe data/SCHEMA.md) VOR dieser Datei
   eingebunden wurden und window.PK.{site,vendors,peptides,batches} befüllt
   haben. Dieses Skript ergänzt window.PK um Helfer-Funktionen; es überschreibt
   die Datenfelder nie.

   Sicherheitsregeln (bindend, Plan-v2 Annahme 19):
   - Daten aus JSON/JS-Quellen werden NUR per textContent/DOM-API eingesetzt,
     NIE per innerHTML.
   - affiliateUrl wird über PK.safeUrl() validiert: nur "#DEMO" oder
     "https://…" sind erlaubt, alles andere wird zu "#" + console.warn.

   INHALTSVERZEICHNIS
   -------------------
   PK.lang                  : aktive Sprache ("de"|"en"), ermittelt beim Laden
   PK.t()/PK.tx()/PK.tEnum(): i18n-Lookup (siehe assets/css/README.md)
   PK.langHref()            : Adresse auf eine Sprachfassung umrechnen
   PK.setLang()             : Sprache wechseln (Navigation auf /en/ bzw. /)
   PK.applyI18n()           : [data-i18n]/[data-i18n-attr] anwenden
   PK.initLangToggle()      : injiziert DE·EN-Toggle in jede .nav/.nav-menu
   PK.SCORE_WEIGHTS         : Gewichtung aus SCHEMA.md
   PK.computeScoreTotal()   : gewichteter Gesamt-Score aus 5 Kriterien
   PK.byNum()               : de-DE/en-US Zahlenformat je nach PK.lang
   PK.vendorBySlug()        : Lookup in window.PK.vendors
   PK.peptideBySlug()       : Lookup in window.PK.peptides
   PK.safeUrl()             : Whitelist für externe/Demo-Links
   PK.renderVendorCard()    : DOM-Node für eine Anbieter-Karte
   PK.renderScoreBar()      : DOM-Node für eine Score-Bar-Zeile
   PK.copyCode()            : Copy-Button-Handler für .code-box
   PK.initNav()             : Hamburger-Menü (Mobile-Vollbild)
   PK.initReveal()          : IntersectionObserver für .reveal
   PK.sortTable()           : Klick-Sortierung für .table
   PK.initDemoBanner()      : befüllt/zeigt .demo-banner
   PK.footerDisclaimer()    : befüllt [data-footer-disclaimer] aus PK.site
   PK.initParallax()        : Scroll-Parallax für .visual-parallax img (±40px)
   PK.initTilt()             : Hover-Kipp-Effekt für .tilt (nur hover:hover+pointer:fine)
   PK.initHeroVideo()       : Video-Loop im Hero : Fallback/Pause/Reduced-Motion
   PK.initHero3D()          : Maus-Parallax für die schwebenden Hero-Sprites
                              (.hero-3d-stage, assets/css/system.css 6b);
                              startet zusätzlich initHeroGlass() (privat)
   initHeroGlass()          : Glas-Refraktion für vial_b/mol_c (6b-glass,
                              privat, kein PK.*-Export außer dem Test-Hook
                              PK.hero3dSyncGlass für die Browser-Verifikation)
   (auto) Scroll-Hinweis „Wischen für mehr" für .table-wrap auf Mobile/Tablet
          : läuft selbstständig bei DOMContentLoaded, keine Seite ruft das auf.

   Init-Reihenfolge (Bildflächen/Motion, ergänzt die i18n-Pflichtreihenfolge
   aus assets/css/README.md): PK.initReveal() zuerst (die drei neuen Helfer
   setzen auf .reveal.is-visible bzw. sind davon unabhängig, aber initReveal
   ist ohnehin Teil des Pflicht-Bootstraps jeder Seite). Danach beliebige
   Reihenfolge: PK.initParallax(), PK.initTilt(), PK.initHeroVideo(),
   PK.initHero3D() : alle vier sind No-Ops, wenn ihre Zielklasse/ihr
   Zielelement auf der Seite nicht vorkommt, also unbedenklich auf jeder
   Seite aufzurufen.
   ============================================================================ */
(function (global) {
  "use strict";

  var PK = global.PK = global.PK || {};

  /* ---------------------------------------------------------------------
     i18n CORE (Plan-v2 Zweisprachigkeit DE/EN)
     ---------------------------------------------------------------------
     Wörterbücher kommen aus data/i18n/global.js (+ data/i18n/<seite>.js),
     die VOR dieser Datei eingebunden sein müssen und window.PK.i18n =
     { de:{}, en:{} } per PK.i18n.merge() befüllen. Flache String-Keys,
     Konvention "global.<bereich>.<element>" / "page.<seite>.<element>" :
     siehe assets/css/README.md Abschnitt "i18n: So tagst du eine Seite".
     --------------------------------------------------------------------- */
  PK.i18n = PK.i18n || { de: {}, en: {} };

  /**
   * PK.lang
   * Ermittlung beim Laden (einmalig, synchron): localStorage "pk_lang" →
   * sonst navigator.language beginnt mit "de" → "de", sonst "en". Setzt
   * sofort <html lang> (Element existiert schon, Script lädt am Body-Ende).
   */
  // A URL has one stable language, independent of browser and saved preferences.
  PK.lang = /^\/en(?:\/|$)/.test(global.location.pathname) ? "en" : "de";
  if (global.document && document.documentElement) {
    document.documentElement.setAttribute("lang", PK.lang);
  }

  /**
   * PK.t(key, vars)
   * Übersetzungs-Lookup: PK.lang → Fallback "de" → Fallback der rohe Key
   * selbst (damit ein fehlender Schlüssel sichtbar bleibt statt leer zu
   * verschwinden). vars ersetzt "{name}"-Platzhalter im Ergebnis-String.
   */
  PK.t = function (key, vars) {
    var lang = PK.lang || "de";
    var dict = (PK.i18n && PK.i18n[lang]) || {};
    var str = dict[key];
    if (str === undefined && lang !== "de") {
      str = (PK.i18n.de || {})[key];
    }
    if (str === undefined) str = key;
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        str = str.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
      });
    }
    return str;
  };

  /**
   * PK.tx(obj, field)
   * Datenfeld-Übersetzung (Konvention "<feld>_en" in data/vendors.js,
   * data/peptides.js, data/site.js). Liefert obj[field+"_en"] bei
   * PK.lang==="en" falls vorhanden, sonst IMMER obj[field] (Fallback DE,
   * funktioniert auch bevor die _en-Felder befüllt sind).
   */
  PK.tx = function (obj, field) {
    if (!obj) return "";
    if (PK.lang === "en" && obj[field + "_en"]) return obj[field + "_en"];
    return obj[field] || "";
  };

  /**
   * PK.tEnum(group, value)
   * Übersetzt einen Enum-Rohwert aus data/SCHEMA.md (land, kategorie,
   * studienlage, coaStatus, zahlung) über den Schlüssel
   * "global.enum.<group>.<value>". Kein Treffer → roher Wert zurück
   * (nie der Schlüssel-String selbst, das wäre sichtbarer Datenmüll).
   */
  PK.tEnum = function (group, value) {
    if (value === undefined || value === null || value === "") return "";
    var key = "global.enum." + group + "." + value;
    var translated = PK.t(key);
    return translated === key ? value : translated;
  };

  /**
   * PK.langHref(lang, href)
   * Rechnet eine beliebige Adresse auf die Sprachfassung um: EN liegt unter
   * /en/..., DE auf der Wurzel. Reine Funktion ohne Seiteneffekt, damit der
   * Selbsttest sie prüfen kann, ohne dass die Seite wegnavigiert.
   * Ein altes ?lang= aus Bestandslinks fällt dabei weg.
   */
  PK.langHref = function (lang, href) {
    var url = new URL(href, "https://peptidkompass.local");
    var rest = url.pathname.replace(/^\/en(?=\/|$)/, "");
    url.pathname = (lang === "en" ? "/en" : "") + rest;
    if (!url.pathname) url.pathname = "/";
    url.searchParams.delete("lang");
    return url.pathname + url.search + url.hash;
  };

  /**
   * PK.setLang(lang)
   * Wechselt die Sprache durch Navigation auf die Sprachfassung derselben
   * Seite (siehe PK.langHref). Kein localStorage, kein "pk:langchange":
   * die Zielseite lädt ihre Sprache selbst aus dem Pfad.
   */
  PK.setLang = function (lang) {
    global.location.assign(PK.langHref(lang, global.location.href));
  };

  /**
   * PK.applyI18n()
   * Wendet Übersetzungen auf alle [data-i18n]/[data-i18n-attr]-Elemente an.
   * [data-i18n] auf <meta>/<title> setzt "content" statt textContent auf
   * <meta>; alles andere textContent. [data-i18n-attr="attr:key,attr2:key2"]
   * setzt beliebige Attribute (placeholder, aria-label, …).
   * MUSS von jeder Seite VOR den eigenen Seiten-Renderern aufgerufen werden
   * (Init-Reihenfolge, siehe README) : läuft nicht automatisch bei
   * DOMContentLoaded, weil Seiten-Inline-Skripte meist vorher schon laufen.
   */
  PK.applyI18n = function () {
    var lang = PK.lang || "de";
    if (document.documentElement) document.documentElement.setAttribute("lang", lang);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      if (!key) continue;
      var value = PK.t(key);
      if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else {
        el.textContent = value;
      }
    }

    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    for (var j = 0; j < attrNodes.length; j++) {
      var attrEl = attrNodes[j];
      var spec = attrEl.getAttribute("data-i18n-attr");
      if (!spec) continue;
      spec.split(",").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length !== 2) return;
        var attrName = parts[0].trim();
        var attrKey = parts[1].trim();
        if (!attrName || !attrKey) return;
        attrEl.setAttribute(attrName, PK.t(attrKey));
      });
    }
  };

  /**
   * PK.initLangToggle()
   * Injiziert automatisch einen DE·EN-Toggle (.lang-toggle, zwei Buttons
   * mit aria-pressed) in jede .nav (Desktop-Header, per CSS < 1024px
   * ausgeblendet) und in jede .nav-menu (Mobile-Vollbild, immer sichtbar
   * sobald das Menü offen ist). Idempotent: läuft mehrfach ohne Duplikate.
   * Muss NACH dem Seiten-HTML, aber vor/mit PK.applyI18n() laufen, damit
   * der injizierte Toggle selbst übersetzt ist.
   */
  PK.initLangToggle = function () {
    var navs = document.querySelectorAll(".nav");
    for (var i = 0; i < navs.length; i++) {
      var inner = navs[i].querySelector(".nav-inner");
      if (!inner || inner.querySelector(".lang-toggle")) continue;
      var toggle = buildToggle();
      var hamburger = inner.querySelector(".nav-hamburger");
      if (hamburger) inner.insertBefore(toggle, hamburger); else inner.appendChild(toggle);
    }

    var menus = document.querySelectorAll(".nav-menu");
    for (var k = 0; k < menus.length; k++) {
      var menu = menus[k];
      if (menu.querySelector(".lang-toggle")) continue;
      var menuToggle = buildToggle();
      menuToggle.classList.add("lang-toggle--menu");
      var cta = menu.querySelector(".nav-cta");
      if (cta && cta.parentNode) {
        cta.parentNode.insertBefore(menuToggle, cta.nextSibling);
      } else {
        menu.appendChild(menuToggle);
      }
    }

    syncPressedState();
    if (!PK._langToggleBound) {
      document.addEventListener("pk:langchange", syncPressedState);
      PK._langToggleBound = true;
    }

    function buildToggle() {
      var wrap = document.createElement("div");
      wrap.className = "lang-toggle";
      wrap.setAttribute("role", "group");
      wrap.setAttribute("data-i18n-attr", "aria-label:global.langToggle.ariaLabel");
      wrap.setAttribute("aria-label", PK.t("global.langToggle.ariaLabel"));
      ["de", "en"].forEach(function (code) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.setAttribute("data-lang", code);
        btn.setAttribute("aria-pressed", String(PK.lang === code));
        btn.textContent = code.toUpperCase();
        btn.addEventListener("click", function () { PK.setLang(this.getAttribute("data-lang")); });
        wrap.appendChild(btn);
      });
      return wrap;
    }

    function syncPressedState() {
      var buttons = document.querySelectorAll(".lang-toggle button[data-lang]");
      for (var b = 0; b < buttons.length; b++) {
        buttons[b].setAttribute("aria-pressed", String(buttons[b].getAttribute("data-lang") === PK.lang));
      }
    }
  };

  /* ---------------------------------------------------------------------
     Score-Gewichtung (data/SCHEMA.md → vendor.gesamt)
     --------------------------------------------------------------------- */
  PK.SCORE_WEIGHTS = {
    labor: 0.25,
    recht: 0.25,
    lieferung: 0.15,
    sortiment: 0.15,
    preis: 0.20
  };

  /**
   * PK.computeScoreTotal(score)
   * Berechnet den gewichteten Gesamt-Score (0-100, gerundet) aus einem
   * score-Objekt { labor, recht, lieferung, sortiment, preis }. Kriterien mit
   * Wert null/undefined gelten als NICHT belegt und fließen nicht ein; die
   * PK.SCORE_WEIGHTS der belegten Kriterien werden auf Summe 1 renormiert
   * (data/SCHEMA.md, Erweiterung v2 "Score-Regel"). Sind ALLE Kriterien
   * unbelegt, liefert die Funktion null (kein Score, nicht 0) statt einer
   * erfundenen Zahl. Bei vollständig belegtem score-Objekt (alle 5 Kriterien
   * Zahlen) ist das Ergebnis identisch zur reinen v1-Gewichtungsformel.
   * Nutzt PK.SCORE_WEIGHTS, Gewichte NIE hier oder anderswo duplizieren.
   */
  PK.computeScoreTotal = function (score) {
    if (!score || typeof score !== "object") return null;
    var w = PK.SCORE_WEIGHTS;
    var total = 0;
    var usedWeight = 0;
    Object.keys(w).forEach(function (key) {
      var v = score[key];
      if (typeof v === "number" && isFinite(v)) {
        total += v * w[key];
        usedWeight += w[key];
      }
    });
    if (usedWeight <= 0) return null;
    return Math.round(total / usedWeight);
  };

  /**
   * PK.computeDatenbasis(score)
   * Zählt die belegten (nicht-null) Kriterien in einem score-Objekt (0-5).
   * Rein informativ/für Validierung; die UI liest vendor.datenbasis primär
   * direkt aus den Daten (data/SCHEMA.md v2), diese Funktion dient als
   * Gegenprobe (data/validate.html, tests/selftest.html).
   */
  PK.computeDatenbasis = function (score) {
    if (!score || typeof score !== "object") return 0;
    var w = PK.SCORE_WEIGHTS;
    var n = 0;
    Object.keys(w).forEach(function (key) {
      var v = score[key];
      if (typeof v === "number" && isFinite(v)) n++;
    });
    return n;
  };

  /**
   * PK.byNum(n, opts)
   * Formatiert eine Zahl im de-DE Format (Punkt=Tausender, Komma=Dezimal).
   * opts wird an Intl.NumberFormat durchgereicht (Default: max. 2 Nachkommastellen).
   * Nicht-Zahlen/NaN/Infinity liefern "".
   */
  PK.byNum = function (n, opts) {
    if (typeof n !== "number" || !isFinite(n)) return "";
    var locale = PK.lang === "en" ? "en-US" : "de-DE";
    try {
      return new Intl.NumberFormat(locale, opts || { maximumFractionDigits: 2 }).format(n);
    } catch (e) {
      return String(n);
    }
  };

  /**
   * PK.vendorBySlug(slug) → vendor-Objekt oder null.
   */
  PK.vendorBySlug = function (slug) {
    var list = (global.PK && global.PK.vendors) || [];
    if (!Array.isArray(list)) return null;
    for (var i = 0; i < list.length; i++) {
      if (list[i] && list[i].slug === slug) return list[i];
    }
    return null;
  };

  /**
   * PK.peptideBySlug(slug) → peptide-Objekt oder null.
   */
  PK.peptideBySlug = function (slug) {
    var list = (global.PK && global.PK.peptides) || [];
    if (!Array.isArray(list)) return null;
    for (var i = 0; i < list.length; i++) {
      if (list[i] && list[i].slug === slug) return list[i];
    }
    return null;
  };

  /**
   * PK.slugFromPath() → Slug aus dem aktuellen Dateinamen (statische
   * Wirkstoff-/Anbieter-Seiten, tools/build_static_pages.py) oder "".
   * "detail" und "index" sind KEINE Content-Slugs, sondern die Routing-
   * Dateien selbst (Legacy-?slug=-Seite bzw. Übersichtsseite) - dort greift
   * stattdessen der ?slug=-Query-Parameter (siehe wirkstoffe/detail.html,
   * anbieter/detail.html).
   */
  PK.slugFromPath = function () {
    var path = (global.location && global.location.pathname) || "";
    var last = path.split("/").pop() || "";
    var base = last.replace(/\.html$/i, "");
    if (!base || base === "detail" || base === "index") return "";
    return base;
  };

  /**
   * PK.safeUrl(url)
   * Whitelist für Link-Ziele: nur "#DEMO" (exakt) oder "https://…" sind
   * erlaubt. Alles andere (http://, javascript:, data:, leer, …) wird
   * verworfen: Rückgabe "#", console.warn mit dem Original-Wert.
   */
  /**
   * PK.vendorHref(vendor)
   * Ziel des "Zum Anbieter"-Buttons: bevorzugt der eigene Affiliate-Link
   * (vendor.affiliateLink, aus dem Partner-Dashboard, mit Tracking), sonst
   * die normale Shop-Website (vendor.affiliateUrl). Nie erfinden.
   */
  PK.vendorHref = function (vendor) {
    if (!vendor) return "#";
    return vendor.affiliateLink || vendor.affiliateUrl || "#";
  };

  PK.safeUrl = function (url) {
    if (url === "#DEMO") return url;
    if (typeof url === "string" && /^https:\/\//.test(url)) return url;
    console.warn("PK.safeUrl: unzulässige URL verworfen ->", url);
    return "#";
  };

  /**
   * PK.renderVendorCard(vendor, basePath)
   * Baut eine .vendor-card als DOM-Node (keine innerHTML-Einsetzung von
   * Daten). basePath ist der relative Pfad-Präfix zu den internen Seiten
   * (z. B. "" im Root, "../" unter anbieter/wirkstoffe).
   * Karte selbst verlinkt intern zum Anbieter-Detail; falls vendor.affiliateUrl
   * gesetzt ist, wird zusätzlich ein externer "Zum Shop"-Link mit
   * .badge-ad + rel="sponsored nofollow" + target="_blank" ergänzt.
   */
  /**
   * PK.renderCodeBox(vendor)
   * Kompakte Code-Box (Code + Kopieren + Prozent oder Hinweis) fuer Karten,
   * Vergleichstabelle und Mobile-Karten. Liefert null, wenn kein Code.
   */
  PK.renderCodeBox = function (vendor) {
    if (!vendor || !vendor.rabatt || !vendor.rabatt.code) return null;
    var cbox = document.createElement("div");
    cbox.className = "code-box code-box-compact";
    var codeEl = document.createElement("code");
    codeEl.setAttribute("data-code", "");
    codeEl.textContent = vendor.rabatt.code;
    cbox.appendChild(codeEl);
    var copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "btn btn-secondary";
    copyBtn.textContent = PK.t("global.copyCode");
    copyBtn.addEventListener("click", function () { PK.copyCode(copyBtn); });
    cbox.appendChild(copyBtn);
    if (typeof vendor.rabatt.prozent === "number") {
      var pct = document.createElement("span");
      pct.className = "code-box-percent";
      pct.textContent = "-" + PK.byNum(vendor.rabatt.prozent) + "%";
      cbox.appendChild(pct);
    } else if (vendor.rabatt.hinweis) {
      var hint = document.createElement("span");
      hint.className = "code-box-hint";
      hint.textContent = PK.tx(vendor.rabatt, "hinweis");
      cbox.appendChild(hint);
    }
    return cbox;
  };

  PK.renderVendorCard = function (vendor, basePath) {
    var bp = basePath || "";
    var card = document.createElement("div");
    card.className = "vendor-card";
    if (vendor.brand && vendor.brand.farbe) card.style.setProperty("--brand", vendor.brand.farbe);

    card.appendChild(PK.renderLogo(vendor, { basePath: bp, tone: "text", size: "card" }));

    var head = document.createElement("div");
    head.className = "vendor-card-head";

    var nameWrap = document.createElement("div");
    var name = document.createElement("p");
    name.className = "vendor-card-name";
    name.textContent = vendor.name || "";
    var land = document.createElement("p");
    land.className = "vendor-card-land";
    land.textContent = PK.tEnum("land", vendor.land);
    nameWrap.appendChild(name);
    nameWrap.appendChild(land);

    var score = document.createElement("div");
    var gesamt = typeof vendor.gesamt === "number" ? vendor.gesamt : PK.computeScoreTotal(vendor.score);
    score.className = "vendor-card-score score-band-" + PK.scoreBand(gesamt);
    score.textContent = typeof gesamt === "number" ? PK.byNum(gesamt) : PK.t("global.na");

    head.appendChild(nameWrap);
    head.appendChild(score);

    var badges = document.createElement("div");
    badges.className = "vendor-card-badges";
    badges.appendChild(makePill(PK.vendorStatusLabel(vendor), "pill-info"));
    if (vendor.rechtsrahmen && vendor.rechtsrahmen.ruo) {
      badges.appendChild(makePill(PK.t("global.vendorCard.ruo"), "pill-ok"));
    }
    if (vendor.coa && vendor.coa.anzahl) {
      badges.appendChild(makePill(PK.t("global.vendorCard.coaChecked", { n: vendor.coa.anzahl }), "pill-info"));
    } else if (vendor.coa && vendor.coa.oeffentlich === true) {
      badges.appendChild(makePill(PK.t("global.vendorCard.coaPublic"), "pill-info"));
    }
    // Rabatt-Pill: Prozent nur zeigen, wenn belegt (Zahl). Ist nur ein Code
    // ohne Prozentsatz hinterlegt (data/SCHEMA.md v2.1, Partner-Vendoren),
    // NIE "-null%" rendern, sondern eine neutrale "Code"-Pill.
    if (vendor.rabatt && typeof vendor.rabatt.prozent === "number") {
      badges.appendChild(makePill("-" + PK.byNum(vendor.rabatt.prozent) + "%", "pill-warn"));
    } else if (vendor.rabatt && vendor.rabatt.code) {
      badges.appendChild(makePill(PK.t("global.vendorCard.rabattCode"), "pill-warn"));
    }
    // Partner-Pill (data/SCHEMA.md v2.1): nur bei belegter Affiliate-
    // Partnerschaft (vendor.partner === true), nie spekulativ.
    if (vendor.partner === true) {
      badges.appendChild(makePill(PK.t("global.partner"), "pill-info"));
    }
    // Datenbasis-Pill (data/SCHEMA.md v2): "Score aus n von 5 Kriterien",
    // zeigt sichtbar, worauf der Gesamt-Score beruht (nie verschweigen,
    // dass Sortiment/Preis mangels Produktdaten unbewertet sind).
    if (typeof vendor.datenbasis === "number") {
      badges.appendChild(makePill(PK.t("global.vendorCard.datenbasis", { n: vendor.datenbasis }), "pill-info"));
    }


    var actions = document.createElement("div");
    actions.className = "vendor-card-actions";

    var detailLink = document.createElement("a");
    detailLink.className = "btn-link";
    detailLink.href = bp + "anbieter/" + encodeURIComponent(vendor.slug || "") + ".html";
    detailLink.textContent = PK.t("global.vendorCard.details");
    actions.appendChild(detailLink);

    if (vendor.affiliateUrl && PK.isActiveVendor(vendor)) {
      var shopLink = document.createElement("a");
      shopLink.className = "btn btn-secondary ext-link";
      shopLink.href = PK.safeUrl(PK.vendorHref(vendor));
      shopLink.target = "_blank";
      shopLink.rel = "sponsored nofollow";
      shopLink.setAttribute("data-affiliate", "true");
      shopLink.appendChild(document.createTextNode(PK.t("global.vendorCard.shopLink")));
      var badgeAd = document.createElement("span");
      badgeAd.className = "badge-ad";
      badgeAd.textContent = PK.tx(global.PK.site, "affiliateNote") || PK.t("global.badge.ad");
      shopLink.appendChild(badgeAd);
      actions.appendChild(shopLink);
    }

    card.appendChild(head);
    card.appendChild(badges);
    var cbox = PK.renderCodeBox(vendor);
    if (cbox) card.appendChild(cbox);
    card.appendChild(actions);
    PK.appendDisclosure(card, PK.t("global.audit.stand", {date:(vendor.recherche || {}).stand || vendor.stand || PK.t("global.na")}));
    return card;

    function makePill(text, variant) {
      var p = document.createElement("span");
      p.className = "pill " + variant;
      p.textContent = text;
      return p;
    }
  };

  /**
   * PK.renderScoreBar(label, value, max)
   * Baut eine .score-bar-row als DOM-Node: Label · Track+Fill · Wert.
   * max ist optional (Default 100). value===null/undefined (Kriterium nicht
   * belegt, data/SCHEMA.md v2): Fill bleibt bei 0%, Wert zeigt PK.t("global.na")
   * statt "0" - eine fehlende Datenbasis ist kein schlechter Score.
   */
  PK.renderScoreBar = function (label, value, max) {
    var m = typeof max === "number" ? max : 100;
    var belegt = typeof value === "number" && isFinite(value);
    var v = belegt ? value : 0;
    var pct = belegt && m > 0 ? Math.max(0, Math.min(100, (v / m) * 100)) : 0;

    var row = document.createElement("div");
    row.className = "score-bar-row" + (belegt ? "" : " score-bar-row--na");

    var lbl = document.createElement("span");
    lbl.className = "score-bar-label";
    lbl.textContent = label || "";

    var track = document.createElement("div");
    track.className = "score-bar-track";
    var fill = document.createElement("div");
    fill.className = "score-bar-fill";
    fill.style.width = "0%";
    track.appendChild(fill);
    // Fill im nächsten Frame setzen, damit die CSS-Transition greift.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { fill.style.width = pct + "%"; });
    });

    var val = document.createElement("span");
    val.className = "score-bar-value" + (belegt ? "" : " score-band-na");
    val.textContent = belegt ? PK.byNum(v) : PK.t("global.na");

    row.appendChild(lbl);
    row.appendChild(track);
    row.appendChild(val);
    return row;
  };

  /**
   * PK.copyCode(btn)
   * Kopiert den Text des Geschwister-Elements [data-code] innerhalb
   * derselben .code-box in die Zwischenablage. Zeigt kurzes "Kopiert"-
   * Feedback am Button. Fallback über execCommand für Umgebungen ohne
   * navigator.clipboard (z. B. manche file://-Kontexte).
   */
  PK.copyCode = function (btn) {
    if (!btn) return;
    var box = btn.closest(".code-box");
    var codeEl = box ? box.querySelector("[data-code]") : null;
    // Fallback ohne .code-box-Vorfahr (sticky-code-bar, Fix-Runde 3, Befund 7):
    // [data-code] im selben Elternelement, damit die Bar nicht künstlich in
    // eine .code-box gewrappt werden muss (deren Border/Background-Styling
    // würde die Sticky-Bar-Optik überschreiben).
    if (!codeEl && btn.parentElement) codeEl = btn.parentElement.querySelector("[data-code]");
    var text = codeEl ? codeEl.textContent.trim() : "";
    if (!text) return;

    var done = function (ok) {
      var original = btn.getAttribute("data-original-label") || btn.textContent;
      btn.setAttribute("data-original-label", original);
      // aria-live VOR der Textänderung setzen (UX-Audit r1, Punkt "Copy-Buttons
      // mit aria-live-Rückmeldung"): ein Live-Region-Attribut, das im selben
      // Tick wie der Textwechsel gesetzt wird, kommt bei manchen Screenreadern
      // zu spät, weil der Knoten erst danach als Live-Region registriert wird.
      btn.setAttribute("aria-live", "polite");
      btn.textContent = ok ? PK.t("global.codeBox.copied") : PK.t("global.codeBox.error");
      setTimeout(function () { btn.textContent = original; }, 1600);
    };

    if (global.navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }

    function fallbackCopy(str, cb) {
      try {
        var ta = document.createElement("textarea");
        ta.value = str;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand("copy");
        document.body.removeChild(ta);
        cb(ok);
      } catch (e) {
        console.warn("PK.copyCode: Kopieren fehlgeschlagen", e);
        cb(false);
      }
    }
  };

  /**
   * PK.initNav()
   * Aktiviert den Hamburger-Toggle für .nav-menu (Mobile-Vollbild).
   * Erwartet: .nav-hamburger[aria-controls="<id von .nav-menu>"].
   * Schließt bei Klick auf einen Menü-Link, Klick außerhalb und Escape.
   */
  PK.initNav = function () {
    var toggle = document.querySelector(".nav-hamburger");
    if (!toggle) return;
    var menuId = toggle.getAttribute("aria-controls");
    var menu = menuId ? document.getElementById(menuId) : document.querySelector(".nav-menu");
    if (!menu) return;

    function open() {
      menu.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-open");
    }
    function close() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
    function toggleMenu() {
      if (menu.classList.contains("is-open")) close(); else open();
    }

    /**
     * Setzt --header-h auf die tatsächliche untere Kante von .nav
     * (Demo-Banner ist normaler Fluss vor .nav, .nav selbst ist sticky top:0 :
     * getBoundingClientRect().bottom liefert daher in jedem Scroll-Zustand die
     * korrekte Header-Gesamthöhe, ob Banner gerade sichtbar ist oder nicht).
     * Behebt BLOCKER 1 aus REVIEW_design_typo.md (Menü-Overlap unter Banner).
     */
    function updateHeaderHeight() {
      var nav = document.querySelector(".nav");
      var h = nav ? Math.ceil(nav.getBoundingClientRect().bottom) : 0;
      if (!h) {
        var navH = getComputedStyle(document.documentElement).getPropertyValue("--nav-h");
        h = parseInt(navH, 10) || 48;
      }
      document.documentElement.style.setProperty("--header-h", h + "px");
    }

    toggle.addEventListener("click", function () {
      if (!menu.classList.contains("is-open")) updateHeaderHeight();
      toggleMenu();
    });
    global.addEventListener("resize", function () {
      if (menu.classList.contains("is-open")) updateHeaderHeight();
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  };

  /**
   * PK.initNavDropdowns()
   * Baut aus den bestehenden flachen Links in JEDEM .nav-links (Desktop)
   * und .nav-menu-links (Mobile-Vollbild) drei Gruppen-Dropdowns:
   *   - "Wirkstoffe" : Mega-Menü, Spalten je Kategorie (window.PK.nav.peptides)
   *   - "Anbieter"   : Top-5 nach Gesamtscore + "Alle Anbieter"/"Vergleich"/"Deals"
   *   - "Prüfen"     : fasst die bisherigen Einzel-Links "Rechner" und
   *                    "Charge prüfen" an der Position von "Rechner" zusammen,
   *                    der "Charge prüfen"-Listenpunkt wird entfernt.
   * Erwartet window.PK.nav aus data/nav.js (VOR site.js geladen, siehe
   * assets/css/README.md) : No-Op mit console.warn, falls das fehlt, damit
   * eine Seite ohne den Script-Tag nicht crasht, sondern nur die flache Nav
   * behält.
   *
   * Barrierefreiheit/Öffnen-Logik (Auftrag: "Hover UND Klick/Focus, schließt
   * bei Escape und Klick außerhalb"): jede Gruppe bekommt einen <button
   * aria-haspopup="true" aria-expanded="…"> statt des bisherigen <a> (die
   * Navigation zur Übersichtsseite läuft stattdessen über den "Alle …"-Link
   * im Panel, genau wie im chemverify-Vorbild, _research/
   * chemverify_navigation_2026-09-14.md). Hover öffnet rein über CSS
   * (:hover/:focus-within auf .nav-item-dropdown, system.css Abschnitt 5b) -
   * das funktioniert auch für die absolut positionierte Panel-Fläche, weil
   * sie ein DOM-Nachfahre des <li> bleibt (CSS :hover folgt dem DOM-Baum,
   * nicht dem visuellen Layout). JS ergänzt: Klick-Toggle (Touch/Mobile hat
   * kein Hover), aria-expanded-Pflege bei Hover UND Klick (damit
   * Screenreader den Zustand bekommen, den :hover allein nicht liefert),
   * Escape (schließt + Fokus zurück auf den Trigger) und Klick außerhalb.
   * Aktiver Zustand: übernimmt aria-current="page" vom ursprünglichen Link
   * auf den neuen Trigger (aria-current="true", gültiger ARIA-Token) : bleibt
   * so auf Wirkstoffe/Anbieter-Index UND -Detailseiten korrekt (die
   * bestehenden Nav-Markups setzen aria-current bereits auf beiden), ebenso
   * auf den einzelnen Prüfen-Unterpunkten.
   */
  PK.initNavDropdowns = function () {
    var nav = global.PK && global.PK.nav;
    if (!nav || !Array.isArray(nav.peptides) || !Array.isArray(nav.vendors)) {
      console.warn("PK.initNavDropdowns: window.PK.nav fehlt. data/nav.js vor assets/js/site.js einbinden (siehe assets/css/README.md).");
      return;
    }

    var CAT_ORDER = ["Regeneration", "Stoffwechsel", "Wachstumshormon-Achse", "Haut & Kosmetik", "Kognition", "Immunsystem", "Sonstige"];
    var groups = []; // { li, trigger, panel } : für Escape/Klick-außerhalb/Resize

    document.querySelectorAll(".nav-links, .nav-menu-links").forEach(function (list) {
      var basePath = basePathFor();
      buildLinkGroup(list, "wirkstoffe/index.html", "global.nav.wirkstoffe", "nav-dropdown--mega", function (inner) {
        buildWirkstoffePanel(inner, basePath);
      });
      buildLinkGroup(list, "anbieter/index.html", "global.nav.anbieter", "nav-dropdown--anbieter", function (inner) {
        buildAnbieterPanel(inner, basePath);
      });
      buildPruefenGroup(list, basePath);
      buildLernenGroup(list, basePath);
    });

    if (!groups.length) return;
    bindGlobalClose();

    /* .nav-logo zeigt zuverlässig das Pfad-Präfix: "index.html" im Root,
       "../index.html" unter anbieter/wirkstoffe (siehe assets/css/README.md
       "Unterseiten präfixen alle Hrefs mit ../"). Robuster als der erste
       gefundene Nav-Link, weil "Anbieter"/"Wirkstoffe" auf ihrer jeweils
       EIGENEN Indexseite selbst unpräfixiert sind (aria-current-Link). */
    function basePathFor() {
      return /\/(anbieter|wirkstoffe|ratgeber)\//.test(global.location.pathname) ? "../" : "";
    }

    /* Auf anbieter/index.html, anbieter/detail.html, wirkstoffe/index.html und
       wirkstoffe/detail.html ist der jeweils EIGENE Gruppen-Link (aria-current)
       unpräfixiert ("index.html", siehe Kommentar zu basePathFor oben) statt
       "anbieter/index.html"/"wirkstoffe/index.html" wie auf allen anderen
       Seiten. Ohne diesen Ausgleich findet findLinkLi() den Link auf genau
       diesen 4 Seiten nicht : Wirkstoffe/Anbieter bleiben dort ein flacher
       Link statt Dropdown. currentSection() liest dafür den echten Ordner aus
       location.pathname (robust gegen den Seiteninhalt, anders als
       basePathFor(), das nur Root vs. Unterseite unterscheidet, nicht welche). */
    function currentSection() {
      var path = global.location.pathname;
      if (/\/wirkstoffe\/[^/]*$/.test(path)) return "wirkstoffe/";
      if (/\/anbieter\/[^/]*$/.test(path)) return "anbieter/";
      return "";
    }

    function normalizedHref(a) {
      var url = new URL(a.getAttribute("href") || "", document.baseURI);
      return url.pathname.replace(/^\/en(?=\/)/, "").replace(/^\//, "").replace(/\/$/, "/index.html");
    }

    function findLinkLi(list, suffix) {
      var links = list.querySelectorAll(":scope > li > a");
      for (var i = 0; i < links.length; i++) {
        if (normalizedHref(links[i]) === suffix) return links[i];
      }
      return null;
    }

    function caretIcon() {
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 12 12");
      svg.setAttribute("class", "nav-trigger-caret");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "1.6");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      svg.setAttribute("aria-hidden", "true");
      var poly = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      poly.setAttribute("points", "2.5 4.5 6 8 9.5 4.5");
      svg.appendChild(poly);
      return svg;
    }

    function makeTrigger(list, labelKey, isCurrent) {
      var trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = list.classList.contains("nav-menu-links") ? "nav-trigger nav-trigger--menu" : "nav-trigger";
      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");
      if (isCurrent) trigger.setAttribute("aria-current", "true");
      var label = document.createElement("span");
      label.setAttribute("data-i18n", labelKey);
      label.textContent = PK.t(labelKey);
      trigger.appendChild(label);
      trigger.appendChild(caretIcon());
      return trigger;
    }

    function makePanel(extraClass) {
      var panel = document.createElement("div");
      panel.className = "nav-dropdown " + extraClass;
      var inner = document.createElement("div");
      inner.className = "nav-dropdown-inner";
      panel.appendChild(inner);
      return { panel: panel, inner: inner };
    }

    function buildLinkGroup(list, suffix, labelKey, extraClass, fillFn) {
      var origLink = findLinkLi(list, suffix);
      if (!origLink) return;
      var li = origLink.closest("li");
      var isCurrent = origLink.getAttribute("aria-current") === "page";

      var trigger = makeTrigger(list, labelKey, isCurrent);
      var built = makePanel(extraClass);
      fillFn(built.inner);

      li.textContent = ""; // ersetzt nur das statische <a>-Markup, keine Daten
      li.classList.add("nav-item-dropdown");
      li.appendChild(trigger);
      li.appendChild(built.panel);

      bindGroup(li, trigger, built.panel);
    }

    function buildWirkstoffePanel(inner, basePath) {
      var byCategory = {};
      nav.peptides.forEach(function (p) {
        (byCategory[p.kategorie] = byCategory[p.kategorie] || []).push(p);
      });

      var grid = document.createElement("div");
      grid.className = "nav-mega-grid";
      CAT_ORDER.forEach(function (cat) {
        var items = byCategory[cat];
        if (!items || !items.length) return;
        var col = document.createElement("div");
        col.className = "nav-mega-col";
        var title = document.createElement("p");
        title.className = "nav-mega-col-title";
        title.setAttribute("data-i18n", "global.enum.kategorie." + cat);
        title.textContent = PK.t("global.enum.kategorie." + cat);
        col.appendChild(title);
        var ul = document.createElement("ul");
        items.forEach(function (p) {
          var li2 = document.createElement("li");
          var a = document.createElement("a");
          a.href = basePath + "wirkstoffe/" + encodeURIComponent(p.slug) + ".html";
          a.textContent = p.name;
          li2.appendChild(a);
          ul.appendChild(li2);
        });
        col.appendChild(ul);
        grid.appendChild(col);
      });
      inner.appendChild(grid);
      inner.appendChild(makeFoot([["global.nav.alleWirkstoffe", basePath + "wirkstoffe/index.html"], ["global.nav.studien", basePath + "studien.html"]]));
    }

    function buildAnbieterPanel(inner, basePath) {
      var ul = document.createElement("ul");
      ul.className = "nav-dropdown-vendors";
      nav.vendors.forEach(function (v) {
        var li2 = document.createElement("li");
        var a = document.createElement("a");
        a.href = basePath + "anbieter/" + encodeURIComponent(v.slug) + ".html";

        var nameWrap = document.createElement("span");
        nameWrap.className = "nav-dropdown-vendor-name";
        nameWrap.appendChild(document.createTextNode(v.name));
        if (v.partner) {
          var pill = document.createElement("span");
          pill.className = "pill pill-info";
          pill.setAttribute("data-i18n", "global.partner");
          pill.textContent = PK.t("global.partner");
          nameWrap.appendChild(pill);
        }

        var score = document.createElement("span");
        var hasScore = typeof v.gesamt === "number";
        score.className = "nav-dropdown-vendor-score" + (hasScore ? " score-band-" + PK.scoreBand(v.gesamt) : "");
        score.textContent = hasScore ? PK.byNum(v.gesamt) : PK.t("global.na");

        a.appendChild(nameWrap);
        a.appendChild(score);
        li2.appendChild(a);
        ul.appendChild(li2);
      });
      inner.appendChild(ul);
      inner.appendChild(makeFoot([
        ["global.nav.alleAnbieter", basePath + "anbieter/index.html"],
        ["global.nav.vergleich", basePath + "vergleich.html"],
        ["global.nav.deals", basePath + "deals.html"]
      ]));
    }

    function makeFoot(pairs) {
      var foot = document.createElement("div");
      foot.className = "nav-dropdown-foot";
      pairs.forEach(function (pair) {
        var a = document.createElement("a");
        a.className = "btn-link";
        a.href = pair[1];
        a.setAttribute("data-i18n", pair[0]);
        a.textContent = PK.t(pair[0]);
        foot.appendChild(a);
      });
      return foot;
    }

    function buildPruefenGroup(list, basePath) {
      var rechnerLink = findLinkLi(list, "rechner.html");
      var chargeLink = findLinkLi(list, "charge-pruefen.html");
      if (!rechnerLink || !chargeLink) return;
      var rechnerLi = rechnerLink.closest("li");
      var chargeLi = chargeLink.closest("li");
      var isCurrent = rechnerLink.getAttribute("aria-current") === "page" || chargeLink.getAttribute("aria-current") === "page" || /\/warenkorb\.html$/.test(global.location.pathname);

      var trigger = makeTrigger(list, "global.nav.pruefen", isCurrent);
      var built = makePanel("nav-dropdown--pruefen");

      var ul = document.createElement("ul");
      ul.className = "nav-dropdown-list";
      [
        { href: "charge-pruefen.html", titleKey: "global.nav.chargePruefen", descKey: "global.nav.chargePruefenDesc", current: chargeLink.getAttribute("aria-current") === "page" },
        { href: "rechner.html", titleKey: "global.nav.rechner", descKey: "global.nav.rechnerDesc", current: rechnerLink.getAttribute("aria-current") === "page" },
        { href: "warenkorb.html", titleKey: "global.nav.warenkorb", descKey: "global.nav.warenkorbDesc", current: /\/warenkorb\.html$/.test(global.location.pathname) }
      ].forEach(function (item) {
        var li2 = document.createElement("li");
        var a = document.createElement("a");
        a.href = basePath + item.href;
        if (item.current) a.setAttribute("aria-current", "page");
        var t = document.createElement("span");
        t.className = "nav-dropdown-item-title";
        t.setAttribute("data-i18n", item.titleKey);
        t.textContent = PK.t(item.titleKey);
        var d = document.createElement("span");
        d.className = "nav-dropdown-item-desc";
        d.setAttribute("data-i18n", item.descKey);
        d.textContent = PK.t(item.descKey);
        a.appendChild(t);
        a.appendChild(d);
        li2.appendChild(a);
        ul.appendChild(li2);
      });
      built.inner.appendChild(ul);

      rechnerLi.textContent = "";
      rechnerLi.classList.add("nav-item-dropdown");
      rechnerLi.appendChild(trigger);
      rechnerLi.appendChild(built.panel);

      chargeLi.parentNode.removeChild(chargeLi);

      bindGroup(rechnerLi, trigger, built.panel);
    }

    /* "Lernen": neue Gruppe (kein bestehender Einzel-Link), eingefügt vor
       "Deals". Einträge: Ratgeber (Blog, 15.09.), Studien-Hub, FAQ, Peptid
       1x1, Methodik. Ratgeber steht als ERSTER Eintrag (Auftrag "Ratgeber-
       Ausbau" 15.09.). */
    function buildLernenGroup(list, basePath) {
      var dealsLink = findLinkLi(list, "deals.html");
      if (!dealsLink) return;
      var dealsLi = dealsLink.closest("li");
      var path = global.location.pathname;
      var items = [
        { href: "ratgeber/index.html", titleKey: "global.nav.ratgeber", descKey: "global.nav.ratgeberDesc" },
        { href: "studien.html", titleKey: "global.nav.studienKurz", descKey: "global.nav.studienDesc" },
        { href: "faq.html", titleKey: "global.nav.faq", descKey: "global.nav.faqDesc" },
        { href: "peptid-1x1.html", titleKey: "global.nav.peptid1x1", descKey: "global.nav.peptid1x1Desc" },
        { href: "methodik.html", titleKey: "global.nav.methodik", descKey: "global.nav.methodikDesc" }
      ];
      items.forEach(function (item) {
        // Ratgeber hat Unterseiten (ratgeber/<slug>.html) : "aktiv" gilt für
        // den gesamten Pfad /ratgeber/, nicht nur exakt index.html (anders
        // als die übrigen, einzelnen Lernen-Seiten ohne eigene Unterseiten).
        item.current = item.href === "ratgeber/index.html"
          ? /\/ratgeber\//.test(path)
          : new RegExp("/" + item.href.replace(".", "\\.") + "$").test(path);
      });
      var isCurrent = items.some(function (item) { return item.current; });

      var li = document.createElement("li");
      var trigger = makeTrigger(list, "global.nav.lernen", isCurrent);
      var built = makePanel("nav-dropdown--pruefen");
      var ul = document.createElement("ul");
      ul.className = "nav-dropdown-list";
      items.forEach(function (item) {
        var li2 = document.createElement("li");
        var a = document.createElement("a");
        a.href = basePath + item.href;
        if (item.current) a.setAttribute("aria-current", "page");
        var t = document.createElement("span");
        t.className = "nav-dropdown-item-title";
        t.setAttribute("data-i18n", item.titleKey);
        t.textContent = PK.t(item.titleKey);
        var d = document.createElement("span");
        d.className = "nav-dropdown-item-desc";
        d.setAttribute("data-i18n", item.descKey);
        d.textContent = PK.t(item.descKey);
        a.appendChild(t);
        a.appendChild(d);
        li2.appendChild(a);
        ul.appendChild(li2);
      });
      built.inner.appendChild(ul);
      li.classList.add("nav-item-dropdown");
      li.appendChild(trigger);
      li.appendChild(built.panel);
      dealsLi.parentNode.insertBefore(li, dealsLi);
      bindGroup(li, trigger, built.panel);
    }

    function matchesDesktop() {
      return global.matchMedia && global.matchMedia("(min-width:1024px)").matches;
    }

    function setOpen(g, open) {
      g.li.classList.toggle("is-open", open);
      g.trigger.setAttribute("aria-expanded", String(open));
      if (!open) { g.panel.classList.remove("nav-dropdown--right"); return; }
      if (!matchesDesktop()) return;
      // Overflow-Check erst NACH dem Öffnen (Layout muss stehen) : klappt
      // das Panel rechts aus dem Viewport, auf rechtsbündig umschalten.
      g.panel.classList.remove("nav-dropdown--right");
      var rect = g.panel.getBoundingClientRect();
      var vw = global.innerWidth || document.documentElement.clientWidth;
      if (rect.right > vw - 12) g.panel.classList.add("nav-dropdown--right");
    }

    function closeAll() {
      groups.forEach(function (g) { setOpen(g, false); });
    }

    function bindGroup(li, trigger, panel) {
      var g = { li: li, trigger: trigger, panel: panel };
      groups.push(g);

      // Klick: mit der Maus ist das Panel per CSS-Hover ohnehin sichtbar,
      // deshalb hält ein Mausklick es offen (kein Toggle gegen den Hover-
      // Zustand, QA r11 MAJOR 1). Tastatur/Touch (kein Hover) toggeln.
      var lastPointer = "mouse";
      trigger.addEventListener("pointerdown", function (e) { lastPointer = e.pointerType || "mouse"; });
      trigger.addEventListener("click", function (e) {
        var viaKeyboard = e.detail === 0;
        var hoverCapable = !viaKeyboard && lastPointer === "mouse" && matchesDesktop();
        var willOpen = hoverCapable ? true : !li.classList.contains("is-open");
        li.classList.remove("is-suppressed");
        closeAll();
        setOpen(g, willOpen);
        if (!willOpen) li.classList.add("is-suppressed");
      });
      // Nach Escape/Schließen per Tastatur bleibt der Fokus auf dem Trigger;
      // :focus-within würde das Panel sonst sofort wieder zeigen (QA r11
      // BLOCKER). is-suppressed unterdrückt Hover/Focus-Anzeige, bis die
      // Maus das Element verlässt oder der Fokus es verlässt.
      li.addEventListener("mouseleave", function () { li.classList.remove("is-suppressed"); });
      li.addEventListener("focusin", function () {
        if (matchesDesktop() && !li.classList.contains("is-suppressed")) setOpen(g, true);
      });
      li.addEventListener("focusout", function (e) {
        if (!li.contains(e.relatedTarget)) {
          li.classList.remove("is-suppressed");
          if (matchesDesktop() && !li.matches(":hover")) setOpen(g, false);
        }
      });
      if (panel && !panel.id) panel.id = "nav-dropdown-" + groups.length;
      if (panel && panel.id) trigger.setAttribute("aria-controls", panel.id);
      // Hover-Zustand zusätzlich für aria-expanded pflegen (die eigentliche
      // Sichtbarkeit übernimmt CSS :hover, siehe system.css 5b) : ein reiner
      // Maus-Hover soll für Screenreader denselben Zustand melden wie Klick.
      li.addEventListener("mouseenter", function () {
        if (matchesDesktop() && !li.classList.contains("is-suppressed")) setOpen(g, true);
      });
      li.addEventListener("mouseleave", function () {
        if (matchesDesktop()) setOpen(g, false);
      });
    }

    function bindGlobalClose() {
      document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;
        var openGroup = groups.filter(function (g) {
          return g.li.classList.contains("is-open") || (matchesDesktop() &&
            (g.li.matches(":hover") || g.li.contains(document.activeElement)));
        });
        if (!openGroup.length) return;
        var focused = document.activeElement;
        closeAll();
        openGroup.forEach(function (g) {
          g.li.classList.add("is-suppressed");
          if (g.panel.contains(focused) || g.trigger === focused) g.trigger.focus();
        });
      });
      document.addEventListener("click", function (e) {
        groups.forEach(function (g) {
          if (!g.li.contains(e.target)) setOpen(g, false);
        });
      });
      global.addEventListener("resize", closeAll);
    }
  };

  /**
   * PK.initReveal()
   * IntersectionObserver für alle .reveal-Elemente: fügt .is-visible hinzu,
   * sobald das Element in den Viewport kommt (einmalig, dann unobserve).
   * Respektiert prefers-reduced-motion: zeigt in dem Fall alle Elemente
   * sofort ohne Beobachtung/Animation.
   */
  PK.initReveal = function () {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    var reduced = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in global)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    els.forEach(function (el) { io.observe(el); });

    /* Sicherheitsnetz: Elemente im oder oberhalb des Viewports sofort zeigen
       (auch wenn der Observer nicht feuert, z. B. in versteckten Tabs), und
       beim Scrollen manuell nachziehen, falls der Observer ausfaellt. */
    var fallback = function () {
      var vh = global.innerHeight || 800;
      els.forEach(function (el) {
        if (el.classList.contains("is-visible")) return;
        var top = el.getBoundingClientRect().top;
        if (top < vh * 1.05) { el.classList.add("is-visible"); io.unobserve(el); }
      });
    };
    fallback();
    global.addEventListener("scroll", fallback, { passive: true });
    global.addEventListener("resize", fallback);
    document.addEventListener("visibilitychange", fallback);
  };

  /**
   * PK.sortTable(table, colIdx)
   * Sortiert die <tbody>-Zeilen einer .table nach der Spalte colIdx.
   * Sortier-Priorität je Zelle: data-sort-Attribut (roher Vergleichswert)
   * > numerischer Parse des Textinhalts (de-DE Komma wird zu Punkt) >
   * String-Vergleich (localeCompare "de"). Toggelt Richtung bei erneutem
   * Aufruf auf derselben Spalte, setzt aria-sort auf dem zugehörigen <th>.
   */
  PK.sortTable = function (table, colIdx) {
    if (!table) return;
    var tbody = table.tBodies[0];
    if (!tbody) return;
    var rows = Array.prototype.slice.call(tbody.rows);

    var currentCol = table.getAttribute("data-sort-col");
    var currentDir = table.getAttribute("data-sort-dir") || "asc";
    var dir = (currentCol === String(colIdx) && currentDir === "asc") ? "desc" : "asc";

    function cellValue(row) {
      var cell = row.cells[colIdx];
      if (!cell) return "";
      if (cell.hasAttribute("data-sort")) return cell.getAttribute("data-sort");
      return cell.textContent.trim();
    }

    rows.sort(function (a, b) {
      var va = cellValue(a), vb = cellValue(b);
      var na = parseFloat(String(va).replace(/\./g, "").replace(",", "."));
      var nb = parseFloat(String(vb).replace(/\./g, "").replace(",", "."));
      var cmp;
      if (!isNaN(na) && !isNaN(nb) && va !== "" && vb !== "") {
        cmp = na - nb;
      } else {
        cmp = String(va).localeCompare(String(vb), "de");
      }
      return dir === "asc" ? cmp : -cmp;
    });

    rows.forEach(function (row) { tbody.appendChild(row); });

    table.setAttribute("data-sort-col", String(colIdx));
    table.setAttribute("data-sort-dir", dir);

    var headers = table.querySelectorAll("thead th");
    headers.forEach(function (th, i) {
      if (i === colIdx) {
        th.setAttribute("aria-sort", dir === "asc" ? "ascending" : "descending");
      } else {
        th.removeAttribute("aria-sort");
      }
    });
  };

  /**
   * PK.initDemoBanner()
   * Zeigt/befüllt jedes Element mit [data-demo-banner]. Steuerung über
   * window.PK.site.launchMode ("preview"|"live", Auftrag Teil B7, 14.09.):
   * "live" blendet den Banner komplett aus, alles andere (inkl. fehlendem
   * Feld) zeigt ihn wie bisher. site.demo bleibt für anderes im Einsatz
   * (z. B. vendor.demo-Semantik), steuert den Banner ab jetzt NICHT mehr.
   * Fällt window.PK.site komplett, zeigt einen generischen Fallback-Text
   * (+ console.warn, damit ein fehlender Datensatz sichtbar ist statt
   * still zu verschwinden).
   */
  PK.initDemoBanner = function () {
    var banners = document.querySelectorAll("[data-demo-banner]");
    if (!banners.length) return;
    var site = global.PK && global.PK.site;

    function render() {
      var text;
      if (site && site.launchMode === "live") {
        text = null; // live → Banner bleibt versteckt
      } else if (site) {
        text = PK.t("global.demoBanner.text");
      } else {
        console.warn("PK.initDemoBanner: window.PK.site fehlt, zeige Fallback-Text");
        text = PK.t("global.demoBanner.text");
      }
      banners.forEach(function (el) {
        if (text === null) { el.hidden = true; return; }
        el.hidden = false;
        var rest = el.querySelector("[data-demo-banner-text]");
        if (rest) {
          rest.textContent = text;
          // Partnercode als eigenes Element hinter dem Hinweis, einmal
          // angelegt und danach nur noch neu beschriftet (Sprachwechsel).
          var codeVal = PK.t("global.demoBanner.code");
          var codeEl = el.querySelector(".topbar-code");
          if (codeVal && codeVal !== "global.demoBanner.code") {
            if (!codeEl) {
              codeEl = document.createElement("span");
              codeEl.className = "topbar-code";
              el.appendChild(codeEl);
            }
            codeEl.textContent = codeVal;
          } else if (codeEl) {
            codeEl.remove();
          }
        } else {
          // Dauerhafter Zweck- und Schutzhinweis (21.09.): kein Label-Praefix
          // mehr. Der Partnercode steht als eigenes, optisch abgesetztes
          // Element daneben, damit Pflichthinweis und Werbung nicht zu einem
          // Satz verschmelzen.
          el.textContent = "";
          var note = document.createElement("span");
          note.className = "topbar-note";
          note.textContent = text;
          el.appendChild(note);
          var codeText = PK.t("global.demoBanner.code");
          if (codeText && codeText !== "global.demoBanner.code") {
            var sep = document.createElement("span");
            sep.className = "topbar-code";
            sep.textContent = codeText;
            el.appendChild(sep);
          }
        }
      });
    }

    render();
    if (!PK._demoBannerBound) {
      document.addEventListener("pk:langchange", render);
      PK._demoBannerBound = true;
    }
  };

  /**
   * PK.footerDisclaimer()
   * Befüllt jedes Element mit [data-footer-disclaimer] mit
   * window.PK.site.disclaimer (textContent, nie innerHTML). Fällt auf einen
   * Standardtext zurück, falls die Datendatei fehlt, und warnt in der Konsole.
   */
  PK.footerDisclaimer = function () {
    var targets = document.querySelectorAll("[data-footer-disclaimer]");
    if (!targets.length) return;
    var site = global.PK && global.PK.site;

    function render() {
      var text = site && PK.tx(site, "disclaimer");
      if (!text) {
        console.warn("PK.footerDisclaimer: window.PK.site.disclaimer fehlt, nutze Fallback");
        text = "Alle genannten Substanzen sind ausschließlich für Forschungszwecke bestimmt. Keine medizinische Beratung, keine Empfehlung zur Anwendung am Menschen. Nur für Personen ab 18 Jahren.";
      }
      targets.forEach(function (el) { el.textContent = text; });
    }

    render();
    if (!PK._footerDisclaimerBound) {
      document.addEventListener("pk:langchange", render);
      PK._footerDisclaimerBound = true;
    }
  };

  /**
   * PK.initParallax()
   * Scroll-Parallax für jedes .visual-parallax: verschiebt das innere
   * <img>/<video> per translate3d (max ±40px) je nach Position relativ zur
   * Viewport-Mitte. rAF-gedrosselt, ein einziger scroll-Listener (passive)
   * treibt alle Elemente; ein IntersectionObserver hält nur die aktuell
   * sichtbaren Elemente in der Update-Liste, damit auf langen Seiten nicht
   * nutzlos für Elemente weit außerhalb des Viewports gerechnet wird.
   * No-Op ohne .visual-parallax-Elemente, ohne IntersectionObserver-Support
   * oder bei prefers-reduced-motion (keine Bewegung, CSS-Vorskalierung
   * reicht als ruhiger Zustand).
   */
  PK.initParallax = function () {
    var els = document.querySelectorAll(".visual-parallax");
    if (!els.length) return;
    var reduced = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in global)) return;

    var MAX_PX = 40;
    var active = [];

    function mediaEl(container) { return container.querySelector("img, video"); }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var idx = active.indexOf(entry.target);
        if (entry.isIntersecting) {
          if (idx === -1) active.push(entry.target);
          /* is-parallax-active gated Motion-Frames UND will-change (system.css
             Abschnitt 18) : nur solange der Container wirklich sichtbar ist,
             kein dauerhafter Compositing-Layer. Fix-Runde 2, Befund 6. */
          entry.target.classList.add("is-parallax-active");
        } else if (idx > -1) {
          active.splice(idx, 1);
          var img = mediaEl(entry.target);
          if (img) img.style.transform = "";
          entry.target.classList.remove("is-parallax-active");
        }
      });
    }, { rootMargin: "15% 0px" });
    els.forEach(function (el) { io.observe(el); });

    var ticking = false;
    function update() {
      var vh = global.innerHeight || 800;
      active.forEach(function (el) {
        var img = mediaEl(el);
        if (!img) return;
        var rect = el.getBoundingClientRect();
        var center = rect.top + rect.height / 2;
        var progress = Math.max(-1, Math.min(1, (center - vh / 2) / (vh / 2)));
        var y = (-progress * MAX_PX).toFixed(1);
        img.style.transform = "translate3d(0," + y + "px,0) scale(1.15)";
      });
      ticking = false;
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      global.requestAnimationFrame(update);
    }
    global.addEventListener("scroll", onScroll, { passive: true });
    global.addEventListener("resize", onScroll);
    onScroll();
  };

  /**
   * PK.initTilt()
   * Dezenter Karten-Hover für jedes .tilt: max. 4° Rotation (X/Y je nach
   * Zeigerposition in der Karte) + 6px Lift. Nur aktiv bei
   * "(hover:hover) and (pointer:fine)" (echte Maus, kein Touch/Trackpad-
   * Ersatzgeste) und nie bei prefers-reduced-motion. pointerleave setzt
   * die Karte weich zurück auf die Ruhelage. Idempotent (data-tilt-bound):
   * Seiten mit dynamisch nachgebauten Karten (z. B. bei "pk:langchange")
   * dürfen PK.initTilt() beliebig oft erneut aufrufen, ohne doppelte
   * Listener auf bereits gebundenen Karten zu erzeugen.
   */
  PK.initTilt = function () {
    var els = document.querySelectorAll(".tilt");
    if (!els.length) return;
    var canHover = global.matchMedia && global.matchMedia("(hover:hover) and (pointer:fine)").matches;
    var reduced = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;

    var MAX_DEG = 4;
    var LIFT_PX = 6;

    els.forEach(function (el) {
      if (el.dataset.tiltBound) return;
      el.dataset.tiltBound = "1";
      el.addEventListener("pointermove", function (e) {
        var rect = el.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        var rotY = (px * MAX_DEG * 2).toFixed(2);
        var rotX = (-py * MAX_DEG * 2).toFixed(2);
        el.style.transform = "translateY(-" + LIFT_PX + "px) rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
      });
      el.addEventListener("pointerleave", function () {
        el.style.transform = "";
      });
    });
  };

  /**
   * PK.initHeroVideo()
   * Aktiviert das Hero-Video ([data-hero-video]): pausiert außerhalb des
   * Viewports (IntersectionObserver), prüft das poster-Bild separat nach
   * (Image-Preload) und fällt auf data-fallback zurück, falls es fehlt,
   * und ersetzt das <video> komplett durch ein statisches <img
   * data-fallback> bei prefers-reduced-motion oder wenn keine Quelle lädt
   * (video "error"-Event). No-Op ohne [data-hero-video] auf der Seite.
   */
  PK.initHeroVideo = function () {
    var video = document.querySelector("[data-hero-video]");
    if (!video) return;
    var fallback = video.getAttribute("data-fallback") || video.getAttribute("poster") || "";
    var reduced = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function replaceWithFallbackImage() {
      if (!video || !video.parentNode) return;
      var img = document.createElement("img");
      img.className = video.className;
      img.src = fallback;
      img.alt = "";
      img.loading = "eager";
      video.parentNode.replaceChild(img, video);
      video = null;
    }

    if (reduced) { replaceWithFallbackImage(); return; }

    video.addEventListener("error", replaceWithFallbackImage);
    /* Sicherheitsnetz: ein 404 auf ein verschachteltes <source> feuert nicht
       zuverlässig ein "error"-Event auf <video> selbst (browserabhängig) -
       stattdessen bleibt networkState auf NETWORK_NO_SOURCE (3) hängen.
       Kurz nachschauen, ob überhaupt Daten angekommen sind (readyState 0
       nach dem Ladeversuch = keine brauchbare Quelle gefunden). */
    global.setTimeout(function () {
      if (video && video.networkState === 3 && video.readyState === 0) {
        replaceWithFallbackImage();
      }
    }, 1500);

    var posterSrc = video.getAttribute("poster");
    if (posterSrc && fallback && posterSrc !== fallback) {
      var probe = new Image();
      probe.onerror = function () { if (video) video.setAttribute("poster", fallback); };
      probe.src = posterSrc;
    }

    /* inViewport hält den zuletzt vom IO gemeldeten Sichtbarkeitsstatus fest,
       damit visibilitychange (Tab-Wechsel) weiß, ob ein Wieder-Play überhaupt
       gerechtfertigt ist : ohne eigenen zweiten Viewport-Check. */
    var inViewport = false;

    function tryPlay() {
      if (!video) return;
      var p = video.play();
      if (p && p.catch) p.catch(function () { /* Autoplay verweigert, kein Fehlerzustand */ });
    }

    if ("IntersectionObserver" in global) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!video) return;
          inViewport = entry.isIntersecting;
          if (inViewport) {
            /* Bei JEDEM Wiedereintritt erneut play() : Fix-Runde 2, Befund/
               Punkt 3 (QA r4: Resume-nach-Scroll inkonsistent). */
            tryPlay();
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.1 });
      io.observe(video);
    }

    /* Tab-Wechsel/Minimieren pausiert das Video im Hintergrund browserseitig;
       zurück im Tab UND noch im Viewport: erneut play() versuchen. */
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible" && inViewport) {
        tryPlay();
      }
    });
  };

  /**
   * PK.initHero3D()
   * Maus-Parallax für die schwebenden Molekül-/Vial-Sprites im Hero
   * (assets/css/system.css Abschnitt 6b, .hero-3d-stage): pointermove über
   * der Bühne verschiebt drei Layer (.hero-3d-back/-mid/-front) entgegen-
   * gesetzt zur Zeigerposition, hinten am schwächsten (30%), Vial-Mitte
   * mittel (60%), vorne am stärksten (100%), max ±26px, rAF-gedrosselt.
   * pointerleave gleitet weich auf 0 zurück (.is-releasing schaltet kurz
   * eine CSS-Transition frei, pointermove nimmt sie sofort wieder raus für
   * 1:1-Tracking ohne Lag). will-change nur während echter Bewegung
   * (.is-parallax-active, wie PK.initParallax).
   * No-Op bei prefers-reduced-motion (Sprites bleiben komplett statisch,
   * auch das CSS-Float ist dann per Media Query aus) und auf Touch/ohne
   * echten Zeiger ((hover:hover) and (pointer:fine) schlägt fehl) : dort
   * bleibt nur das CSS-Schweben aktiv, keine Parallax-Bindung nötig.
   */
  /**
   * initHeroGlass(stage, reduced)
   * Glas-Refraktion für die zwei Front-Sprites mit Klasse .hero-glass
   * (vial_b, mol_c; system.css 6b-glass). Baut je Sprite einen
   * aria-hidden Klon von .hero-copy (Eyebrow/H1/Subline), maskiert ihn
   * mit demselben Sprite-PNG und hält die Maske jeden Frame auf der
   * aktuellen Sprite-Position synchron.
   *
   * Sync-Variante (Auftrag erlaubt Matrix-Inversion ODER mask-position-
   * Tracking, "nimm was in Chrome+Safari sauber läuft"): gewählt wurde
   * mask-position/-size per getBoundingClientRect, NICHT die Inverse der
   * Wrapper-Transform-Matrix. Begründung: der Sprite-Wrapper trägt
   * gleichzeitig zwei CSS-Keyframe-Animationen (Float auf dem <img>, Spin
   * auf .hero-3d-spin) PLUS eine JS-getriebene translate3d-Parallax auf
   * dem Eltern-Layer (.hero-3d-front) - drei Transform-Quellen, die sich
   * erst im Compositor zur finalen Matrix summieren. getComputedStyle
   * müsste diese kombinierte Matrix pro Frame lesen und per DOMMatrix
   * invertieren; Safari berichtet den Wert bei mehreren gleichzeitig
   * laufenden Animationen nachweislich nicht immer synchron zum selben
   * Frame wie Chrome (Rundungs-/Timing-Drift, besonders bei matrix3d aus
   * 3D-Transforms wie translateZ/rotateZ hier). getBoundingClientRect
   * dagegen liest das bereits vom Browser aufgelöste Endergebnis (Layout-
   * Pixel), ist in beiden Engines synchron zum aktuellen Frame und lässt
   * sich 1:1 mit derselben Methode verifizieren, die auch die QA-Abnahme
   * nutzt (Rect-Vergleich). Alle Reads laufen VOR den Writes (kein
   * Layout-Thrashing): erst stageRect/copyRect/alle sprite-Rects lesen,
   * dann erst Styles setzen.
   */
  function initHeroGlass(stage, reduced) {
    var copy = stage.querySelector(".hero-copy");
    var sprites = Array.prototype.slice.call(stage.querySelectorAll(".hero-3d-front .hero-glass"));
    if (!copy || !sprites.length) return;

    var supportsMask = global.CSS && global.CSS.supports &&
      (global.CSS.supports("mask-image", "url(x.png)") || global.CSS.supports("-webkit-mask-image", "url(x.png)"));
    if (!supportsMask) return; // ohne Masking kein Klon möglich; Body/Rim (CSS) bleiben regulär

    var entries = []; // {sprite, refract}

    function buildClones() {
      entries.forEach(function (e) {
        if (e.refract && e.refract.parentNode) e.refract.parentNode.removeChild(e.refract);
      });
      entries = [];
      /* Text-Refraktion deaktiviert (Vic 14.09.: Doppelbild wirkte fehlerhaft).
         Glas-Körper (backdrop-filter) und Rim bleiben. */
      if (PK.HERO_GLASS_REFRACT !== true) return;
      sprites.forEach(function (sprite) {
        var refract = document.createElement("div");
        refract.className = "hero-glass-refract";
        refract.setAttribute("aria-hidden", "true");
        refract.setAttribute("data-sprite", sprite.getAttribute("data-sprite") || "");
        // mask-image bewusst NICHT über var(--gmask) im Stylesheet (löst
        // relative url()s gegen system.css statt gegen index.html auf,
        // siehe Kommentar dort) - hier direkt inline gesetzt, wie src= auf
        // den <img>-Sprites, damit derselbe Dokument-Pfad greift.
        var maskUrl = sprite.style.getPropertyValue("--gmask").trim();
        refract.style.webkitMaskImage = maskUrl;
        refract.style.maskImage = maskUrl;

        // Nur Eyebrow/H1/Subline klonen (Auftrag), NICHT die Suchleiste:
        // ein Formular-Klon wäre unnötiges DOM-Gewicht und optisch nie
        // sichtbar (die Maske deckt ohnehin nur die kleine Sprite-Fläche).
        var inner = document.createElement("div");
        inner.className = "hero-glass-refract-inner";
        Array.prototype.forEach.call(copy.children, function (node) {
          if (node.classList && node.classList.contains("search-bar")) return;
          var clone = node.cloneNode(true);
          clone.removeAttribute("id");
          inner.appendChild(clone);
        });
        refract.appendChild(inner);

        // Direkt nach .hero-copy einfügen: painted über dem echten Text,
        // unter .hero-3d-front (dessen z-index:2 sticht per Stacking-
        // Context, unabhängig von der DOM-Reihenfolge, weiterhin).
        stage.insertBefore(refract, copy.nextSibling);
        entries.push({ sprite: sprite, refract: refract });
      });
    }

    // Grundausrichtung: Klon-Box deckungsgleich mit .hero-copy (Resize/
    // Sprachwechsel). Layout-Writes (left/top/width/height) bewusst hier
    // isoliert, NICHT im rAF-Tracking unten (das schreibt nur Maskeigen-
    // schaften, keine Geometrie -> kein Reflow pro Frame).
    function alignBase() {
      var stageRect = stage.getBoundingClientRect();
      var copyRect = copy.getBoundingClientRect();
      entries.forEach(function (e) {
        var r = e.refract;
        r.style.left = (copyRect.left - stageRect.left) + "px";
        r.style.top = (copyRect.top - stageRect.top) + "px";
        r.style.width = copyRect.width + "px";
        r.style.height = copyRect.height + "px";
      });
    }

    // Pro Frame: nur Maskeigenschaften (Paint/Compositing, kein Reflow).
    // Alle Rect-Reads zuerst, dann alle Style-Writes gebündelt.
    function trackMask() {
      var copyRect = copy.getBoundingClientRect();
      var reads = entries.map(function (e) {
        if (e.refract.offsetParent === null) return null; // Mobile: vial_b ausgeblendet, Rect sparen
        return e.sprite.getBoundingClientRect();
      });
      entries.forEach(function (e, i) {
        var sRect = reads[i];
        if (!sRect) return;
        var r = e.refract;
        var mx = sRect.left - copyRect.left;
        var my = sRect.top - copyRect.top;
        r.style.setProperty("--gsize", sRect.width + "px " + sRect.height + "px");
        r.style.setProperty("--gmx", mx + "px");
        r.style.setProperty("--gmy", my + "px");
        r.style.setProperty("--gx", (mx + sRect.width / 2) + "px");
        r.style.setProperty("--gy", (my + sRect.height / 2) + "px");
      });
    }

    function syncNow() {
      alignBase();
      trackMask();
    }

    buildClones();
    syncNow();

    document.addEventListener("pk:langchange", function () {
      buildClones();
      syncNow();
    });
    global.addEventListener("resize", function () {
      alignBase();
      trackMask();
    });

    // Test-Hook: rAF feuert in der statischen Vorschau-Pane nicht, die
    // Verifikation ruft diese Funktion deshalb direkt auf.
    PK.hero3dSyncGlass = syncNow;

    if (reduced) return; // statisch, kein Dauer-Loop nötig (Sprites bewegen sich nicht)

    var visible = true;
    if ("IntersectionObserver" in global) {
      var io = new IntersectionObserver(function (ents) { visible = ents[0].isIntersecting; });
      io.observe(stage);
    }

    var raf = null;
    function loop() {
      if (visible && document.visibilityState === "visible") trackMask();
      raf = global.requestAnimationFrame(loop);
    }
    raf = global.requestAnimationFrame(loop);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState !== "visible") {
        if (raf) { global.cancelAnimationFrame(raf); raf = null; }
      } else if (!raf) {
        raf = global.requestAnimationFrame(loop);
      }
    });
  }

  PK.initHero3D = function () {
    var stage = document.querySelector(".hero-3d-stage");
    if (!stage) return;
    var back = stage.querySelector(".hero-3d-back");
    var mid = stage.querySelector(".hero-3d-mid");
    var front = stage.querySelector(".hero-3d-front");
    if (!back && !mid && !front) return;

    var reduced = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Glas-Refraktion unabhängig von Hover-Fähigkeit initialisieren: Float/
    // Spin laufen per CSS-Keyframe auch auf Touch-Geräten ohne Maus weiter,
    // nur die Maus-Parallax unten braucht (hover:hover)+(pointer:fine).
    initHeroGlass(stage, reduced);

    if (reduced) return;

    var canHover = global.matchMedia && global.matchMedia("(hover:hover) and (pointer:fine)").matches;
    if (!canHover) return;

    var MAX_PX = 26;
    var BACK_FACTOR = 0.3;
    var MID_FACTOR = 0.6;
    var FRONT_FACTOR = 1;
    var layers = [back, mid, front].filter(Boolean);

    var targetX = 0, targetY = 0; // -1..1, Zeigerposition relativ zur Bühnenmitte
    var ticking = false;
    var active = false;
    var releaseTimer = null;

    function setActive(on) {
      if (active === on) return;
      active = on;
      layers.forEach(function (layer) { layer.classList.toggle("is-parallax-active", on); });
    }

    function apply() {
      var bx = (-targetX * MAX_PX * BACK_FACTOR).toFixed(1);
      var by = (-targetY * MAX_PX * BACK_FACTOR).toFixed(1);
      var mx = (-targetX * MAX_PX * MID_FACTOR).toFixed(1);
      var my = (-targetY * MAX_PX * MID_FACTOR).toFixed(1);
      var fx = (targetX * MAX_PX * FRONT_FACTOR).toFixed(1);
      var fy = (targetY * MAX_PX * FRONT_FACTOR).toFixed(1);
      if (back) back.style.transform = "translate3d(" + bx + "px," + by + "px,0)";
      if (mid) mid.style.transform = "translate3d(" + mx + "px," + my + "px,0)";
      if (front) front.style.transform = "translate3d(" + fx + "px," + fy + "px,0)";
      ticking = false;
    }

    function queue() {
      if (ticking) return;
      ticking = true;
      global.requestAnimationFrame(apply);
    }

    function clearRelease() {
      layers.forEach(function (layer) { layer.classList.remove("is-releasing"); });
      if (releaseTimer) { global.clearTimeout(releaseTimer); releaseTimer = null; }
    }

    stage.addEventListener("pointermove", function (e) {
      clearRelease();
      var rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      targetX = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width - 0.5) * 2));
      targetY = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height - 0.5) * 2));
      setActive(true);
      queue();
    });

    stage.addEventListener("pointerleave", function () {
      targetX = 0; targetY = 0;
      layers.forEach(function (layer) { layer.classList.add("is-releasing"); });
      queue();
      setActive(false);
      releaseTimer = global.setTimeout(clearRelease, 650);
    });
  };

  /* =========================================================================
     RUNDE „LEBEN UND CONVERSION" (06.09.): Logo, Logo-Leiste, Podium,
     Gewichtungs-Regler, Social Proof, Frische-Leiste, Count-up.
     Grundlage: data/SCHEMA.md Abschnitt "Erweiterung v1.2".
     Sicherheitsregeln gelten unverändert: nie innerHTML mit Daten, nur
     PK.safeUrl() für affiliateUrl, nur textContent für Datenfelder.
     ========================================================================= */

  /**
   * PK.scoreBand(score)
   * Bandfarbe für eine Score-Zahl: >=80 "good" (grün), 60-79 "mid" (blau),
   * <60 "low" (warm). null/undefined/NaN (kein Score, data/SCHEMA.md v2)
   * liefert "na" (neutral, NIE "low" - fehlende Daten sind kein schlechter
   * Score). Liefert nur das Suffix, Aufrufer setzt "score-band-"+x.
   */
  PK.scoreBand = function (score) {
    if (typeof score !== "number" || !isFinite(score)) return "na";
    if (score >= 80) return "good";
    if (score >= 60) return "mid";
    return "low";
  };

  /**
   * PK.renderLogo(vendor, opts)
   * Baut den Logo-Slot (Vendor-Card, Podium, Anbieter-Detail-Kopf,
   * Vergleichstabelle): <span class="vlogo" role="img" aria-label="…">
   * mit CSS mask-image auf vendor.brand.logoMono (schwarze Silhouette aus
   * dem Alphakanal, tools/build_vendor_logos.py) - eingefärbt per
   * background-color über eine Tone-Klasse (Runde "eingefärbte Mono-
   * Maske", 07.09.2026: "Wir färben die Logos selbst ein, sodass es immer
   * passt" statt farbiges Original + Dark-Mode-Chip).
   * Fallback-Kette: logoMono fehlt ODER schlägt fehl (404) -> weicht auf
   * vendor.brand.logoFallback aus (Wortmarke, assets/img/logos/
   * _wordmarks/<slug>.svg, ebenfalls als Maske) -> schlägt AUCH das fehl
   * (oder fehlt logoFallback): Anbietername als Text (kein kaputtes
   * Icon, ersetzt den <span> komplett). Vendors ohne eigenes logoMono
   * haben brand.logoMono bereits undefined UND brand.logo==logoFallback
   * (avellon-peptides/dn-lab-research/sera-lab/ppx-at) - dann startet
   * direkt bei logoFallback, kein doppelter Versuch derselben URL.
   * opts: {
   *   basePath (Default ""),
   *   tone ("text"|"secondary"|"brand"|"white", Default "text"): Tabelle/
   *     Karte = text (kippt in Dark Mode automatisch auf Weiß, weil
   *     --text selbst umschaltet, system.css Abschnitt 1), Podium/
   *     Detail-Kopf = brand (Markenfarbe, bleibt in Dark Mode gleich).
   *   size ("xs"|"card"|"sm"|"podium"|"detail", Default "card"): Kontext-
   *     größe, siehe .vlogo--* in system.css Abschnitt 7.
   * }
   *
   * Breiten-Fix "Logo-Seitenverhältnis" (07.09.2026): .vlogo hatte bisher
   * eine FESTE Breite je Kontext (CSS .vlogo--*), in die mask-size:contain
   * das Logo einpasste - bei schmalen/quadratischen Marken (particle-
   * peptides, europa-peptide, biocollex, hydro-research u.a.) blieb der
   * Großteil dieser Box leer, das Logo wirkte winzig. vendor.brand.logoRatio
   * (Breite/Höhe der ECHTEN, eng zugeschnittenen Mono-Silhouette, siehe
   * tools/build_vendor_logos.py) erlaubt jetzt, die Breite passend zur
   * festen CSS-Höhe zu berechnen (Höhe×Ratio), geklemmt auf [28px,
   * Kontext-Max] - VLOGO_MAXWIDTH unten. Fehlt logoRatio (Fallback-Vendors
   * ohne eigenes Mono-Logo): keine Inline-Breite gesetzt, CSS-Breite bleibt
   * wie bisher (bisheriges Verhalten, kein Regressionsrisiko für Vendors
   * ohne echte Bilddaten).
   */
  var VLOGO_HEIGHT = { card: 26, sm: 28, xs: 24, podium: 32, detail: 44, logoStrip: 40 };
  var VLOGO_MAXWIDTH = { card: 110, sm: 120, xs: 120, podium: 140, detail: 200, logoStrip: 160 };
  var VLOGO_MINWIDTH = 28;

  function vlogoWidthFromRatio(sizeKey, ratio) {
    if (typeof ratio !== "number" || !isFinite(ratio) || ratio <= 0) return null;
    var height = VLOGO_HEIGHT[sizeKey];
    var maxWidth = VLOGO_MAXWIDTH[sizeKey];
    if (!height || !maxWidth) return null;
    var w = Math.round(height * ratio);
    if (w < VLOGO_MINWIDTH) w = VLOGO_MINWIDTH;
    if (w > maxWidth) w = maxWidth;
    return w;
  }

  PK.renderLogo = function (vendor, opts) {
    var o = opts || {};
    var bp = o.basePath || "";
    var tone = o.tone || "text";
    var sizeKey = o.size || "card";
    var sizeClass = "vlogo--" + sizeKey;

    var hasBrand = !!(vendor && vendor.brand);
    var maskPath = hasBrand ? (vendor.brand.logoMono || vendor.brand.logoFallback) : null;
    if (!maskPath) {
      var textOnly = document.createElement("span");
      textOnly.className = "brand-logo-fallback";
      textOnly.textContent = (vendor && vendor.name) || "";
      return textOnly;
    }

    var el = document.createElement("span");
    el.className = "vlogo " + sizeClass + " vlogo--tone-" + tone + ((vendor.brand.logoRatio && vendor.brand.logoRatio < 1.3) ? " vlogo--square" : "");
    el.setAttribute("role", "img");
    el.setAttribute("aria-label", PK.t("global.brand.logoAlt", { name: vendor.name || "" }));

    var ratioWidth = vlogoWidthFromRatio(sizeKey, vendor.brand.logoRatio);
    if (ratioWidth) el.style.width = ratioWidth + "px";

    var fallbackPath = vendor.brand.logoFallback;
    var triedFallback = !fallbackPath || fallbackPath === maskPath;

    function setMask(path) {
      var url = bp + path;
      el.style.maskImage = "url('" + url + "')";
      el.style.webkitMaskImage = "url('" + url + "')";
    }

    function textFallback() {
      var fb = document.createElement("span");
      fb.className = "brand-logo-fallback";
      fb.textContent = vendor.name || "";
      if (el.parentNode) el.parentNode.replaceChild(fb, el);
    }

    setMask(maskPath);
    // Kein <img error>-Event auf einem maskierten <span> möglich -> Probe
    // per unsichtbarem Image() (gleiches Muster wie PK.initLogoStrip()
    // unten) prüft, ob die Datei wirklich lädt (404 o.ä.).
    var probe = new Image();
    probe.onerror = function () {
      if (!triedFallback) {
        triedFallback = true;
        setMask(fallbackPath);
        var probe2 = new Image();
        probe2.onerror = textFallback;
        probe2.src = bp + fallbackPath;
        return;
      }
      textFallback();
    };
    probe.src = bp + maskPath;

    return el;
  };

  /**
   * PK.initLogoStrip(selector, opts)
   * Baut die horizontale Logo-Leiste in [data-logo-strip] (oder dem
   * übergebenen selector). Monochrom über CSS mask-image (system.css
   * Abschnitt 19): funktioniert unabhängig davon, wie die SVG-Datei intern
   * gefüllt ist, und bleibt file://-tauglich (kein fetch nötig). Fehlt
   * vendor.brand: Fallback zeigt den Namen als Text. Dupliziert die Liste
   * einmal (aria-hidden auf der Kopie) für einen nahtlosen CSS-Loop.
   * Idempotent, baut bei jedem Aufruf (auch bei "pk:langchange", wegen der
   * übersetzten aria-label-Texte) neu.
   */
  PK.initLogoStrip = function (selector, opts) {
    var el = document.querySelector(selector || "[data-logo-strip]");
    if (!el) return;
    var o = opts || {};
    var bp = o.basePath || "";
    var vendors = Array.isArray(global.PK.vendors) ? global.PK.vendors : [];
    if (!vendors.length) return;

    el.textContent = "";
    var track = document.createElement("div");
    track.className = "logo-strip-track";

    function buildItem(vendor, hidden) {
      var item = document.createElement("div");
      item.className = "logo-strip-item";
      if (hidden) item.setAttribute("aria-hidden", "true");

      var hasLogo = !!(vendor.brand && vendor.brand.logo);
      if (hasLogo) {
        // Mono-Variante bevorzugt (brand.logoMono, schwarze Silhouette aus
        // dem Alphakanal - Runde "echte Anbieter-Logos", 07.09.): garantiert
        // sauberen Alphakanal fürs mask-image, unabhängig von Format/Güte
        // des farbigen Originals (PNG/JPG/SVG). Fehlt logoMono (Fallback-
        // Vendors ohne eigenes Logo): fällt auf brand.logo zurück, dessen
        // Alphakanal (Wortmark-SVG) genauso maskefähig ist.
        var url = bp + (vendor.brand.logoMono || vendor.brand.logo);
        var mask = document.createElement("div");
        mask.className = "logo-strip-mask";
        // Gleicher Breiten-Fix wie PK.renderLogo (siehe Kommentar dort,
        // "Logo-Seitenverhältnis" 07.09.2026): Leiste-Höhe fix 40px (CSS
        // .logo-strip-mask), Breite aus logoRatio, geklemmt [28, 160]px.
        var stripWidth = vlogoWidthFromRatio("logoStrip", vendor.brand.logoRatio);
        if (stripWidth) mask.style.width = stripWidth + "px";
        // mask-image direkt inline setzen (nicht über die --logo-url-Variable
        // in system.css) : ein url() innerhalb einer CSS-Custom-Property wird
        // relativ zu dem Stylesheet aufgelöst, in dem der var()-Verweis steht
        // (hier assets/css/system.css), NICHT relativ zum Dokument, das die
        // Variable setzt. Inline gesetzte url()-Werte lösen dagegen korrekt
        // relativ zur aktuellen Seite auf (Fix-Runde 1, Verifikation 06.09.:
        // 404 auf assets/css/assets/img/logos/… ohne diesen Fix).
        mask.style.maskImage = "url('" + url + "')";
        mask.style.webkitMaskImage = "url('" + url + "')";
        if (!hidden) {
          mask.setAttribute("role", "img");
          mask.setAttribute("aria-label", PK.t("global.brand.logoAlt", { name: vendor.name || "" }));
        }
        item.appendChild(mask);
        var probe = new Image();
        probe.onerror = function () { item.classList.add("is-fallback"); };
        probe.src = url;
      } else {
        item.classList.add("is-fallback");
      }
      var text = document.createElement("span");
      text.className = "logo-strip-fallback-text";
      text.textContent = vendor.name || "";
      item.appendChild(text);
      return item;
    }

    vendors.forEach(function (v) { track.appendChild(buildItem(v, false)); });
    vendors.forEach(function (v) { track.appendChild(buildItem(v, true)); }); // Duplikat für nahtlosen Loop

    el.appendChild(track);
  };

  /**
   * PK.renderPodium(container, top3)
   * Baut die 3 Podium-Karten (Platz 1 mittig, größer über CSS-order).
   * top3 = [Platz1-Vendor, Platz2-Vendor, Platz3-Vendor]. Score-Ring füllt
   * sich beim Einblenden (--pct 0 -> Gesamt-Score, CSS-Transition über
   * @property --pct, system.css Abschnitt 19); nutzt dasselbe IO+Fallback-
   * Muster wie PK.initReveal (Sofort-Check für Elemente im Viewport), damit
   * die Füllung auch ohne feuernden IntersectionObserver zuverlässig den
   * Endwert erreicht. Rabatt-Code nur, wenn vendor.rabatt gesetzt ist.
   */
  PK.renderPodium = function (container, top3) {
    if (!container || !Array.isArray(top3)) return;
    container.textContent = "";

    var rankClass = ["podium-rank1", "podium-rank2", "podium-rank3"];
    var rankLabelKey = ["page.index.podiumRank1", "page.index.podiumRank2", "page.index.podiumRank3"];
    var badgeText = PK.tx(global.PK.site, "affiliateNote") || PK.t("global.badge.ad");
    var ringEls = [];

    // DOM-Reihenfolge Platz 2, Platz 1, Platz 3 : CSS-order (system.css)
    // stellt Platz 1 optisch in die Mitte, unabhängig von der DOM-Reihenfolge.
    [0, 1, 2].forEach(function (idx) {
      var vendor = top3[idx];
      if (!vendor) return;

      var card = document.createElement("div");
      card.className = "podium-card " + rankClass[idx];
      if (vendor.brand && vendor.brand.farbe) card.style.setProperty("--brand", vendor.brand.farbe);

      var rankEl = document.createElement("p");
      rankEl.className = "podium-rank";
      rankEl.textContent = PK.t(rankLabelKey[idx]);
      card.appendChild(rankEl);

      card.appendChild(PK.renderLogo(vendor, { tone: "brand", size: "podium" }));

      var name = document.createElement("p");
      name.className = "podium-name";
      name.textContent = vendor.name || "";
      card.appendChild(name);

      var gesamt = typeof vendor.gesamt === "number" ? vendor.gesamt : PK.computeScoreTotal(vendor.score);
      var ring = document.createElement("div");
      ring.className = "podium-score";
      ring.style.setProperty("--pct", "0");
      
      var ringVal = document.createElement("span");
      ringVal.className = "podium-score-value";
      ringVal.textContent = PK.byNum(gesamt) + "/100";
      ring.appendChild(ringVal);
      card.appendChild(ring);
      ringEls.push({ el: ring, pct: gesamt });

      if (vendor.rabatt && vendor.rabatt.code) {
        // Prozent nur zeigen, wenn belegt (Zahl) - sonst NIE "Spart null %"
        // rendern, sondern den Hinweistext (data/SCHEMA.md v2.1).
        if (typeof vendor.rabatt.prozent === "number") {
          var save = document.createElement("p");
          save.className = "podium-save";
          save.textContent = PK.t("page.index.podiumSaves", { p: PK.byNum(vendor.rabatt.prozent) });
          card.appendChild(save);
        } else if (vendor.rabatt.hinweis) {
          var hint = document.createElement("p");
          hint.className = "podium-save";
          hint.textContent = PK.tx(vendor.rabatt, "hinweis");
          card.appendChild(hint);
        }

        var codeWrap = document.createElement("div");
        codeWrap.className = "podium-code code-box";
        var codeEl = document.createElement("code");
        codeEl.setAttribute("data-code", "");
        codeEl.textContent = vendor.rabatt.code || "";
        var copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.className = "btn btn-secondary";
        copyBtn.textContent = PK.t("page.index.podiumCopyButton");
        copyBtn.addEventListener("click", function () { PK.copyCode(copyBtn); });
        codeWrap.appendChild(codeEl);
        codeWrap.appendChild(copyBtn);
        card.appendChild(codeWrap);
      }

      var cta = document.createElement("a");
      cta.className = "btn btn-secondary ext-link podium-cta";
      cta.href = PK.safeUrl(PK.vendorHref(vendor));
      cta.target = "_blank";
      cta.rel = "sponsored nofollow";
      cta.setAttribute("data-affiliate", "true");
      cta.appendChild(document.createTextNode(PK.t("page.index.podiumCta")));
      var badge = document.createElement("span");
      badge.className = "badge-ad";
      badge.textContent = badgeText;
      cta.appendChild(badge);
      card.appendChild(cta);
      var details = document.createElement("a"); details.className="btn-link"; details.href="anbieter/"+encodeURIComponent(vendor.slug)+".html"; details.textContent=PK.t("global.vendorCard.details"); card.appendChild(details);
      PK.appendDisclosure(card,PK.t("global.vendorCard.datenbasis",{n:vendor.datenbasis}));
      PK.appendDisclosure(card,PK.t("global.audit.stand",{date:(vendor.recherche||{}).stand||vendor.stand||PK.t("global.na")}));
      if(vendor.partner) PK.appendDisclosure(card,PK.t("global.partner"));

      container.appendChild(card);
    });

    var reduced = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in global) || !ringEls.length) {
      ringEls.forEach(function (r) { r.el.style.setProperty("--pct", String(r.pct)); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var match = null;
        for (var i = 0; i < ringEls.length; i++) { if (ringEls[i].el === entry.target) { match = ringEls[i]; break; } }
        if (match && entry.isIntersecting) {
          io.unobserve(entry.target);
          entry.target.style.setProperty("--pct", String(match.pct));
        }
      });
    }, { threshold: 0.3 });
    ringEls.forEach(function (r) { io.observe(r.el); });

    var fallbackCheck = function () {
      var vh = global.innerHeight || 800;
      ringEls.forEach(function (r) {
        if (r.el.style.getPropertyValue("--pct") !== "0") return;
        var top = r.el.getBoundingClientRect().top;
        if (top < vh * 1.05) { io.unobserve(r.el); r.el.style.setProperty("--pct", String(r.pct)); }
      });
    };
    fallbackCheck();
    global.addEventListener("scroll", fallbackCheck, { passive: true });
    global.addEventListener("resize", fallbackCheck);
  };

  /**
   * PK.initWeights(container)
   * Regler-Modul "Was ist dir wichtig": 5 Range-Slider (0-3, Default =
   * SCHEMA-Gewichtung linear skaliert *10, siehe PK.WEIGHTS_DEFAULT) +
   * Live-Ranking aller window.PK.vendors. Gewichte werden relativ
   * normalisiert (Summe der Regler = 100%), Anzeige-Prozent live pro
   * Regler. Ranking sortiert absteigend nach gewichtetem Score (höher =
   * besser, konsistent mit dem Rest der Seite: Regler nur auf "Preis" =>
   * Ranking entspricht der Sortierung nach vendor.score.preis). Umsortierung
   * per FLIP-Transition (Positionen vor/nach dem Reflow gemessen, respektiert
   * prefers-reduced-motion). Reset-Button stellt die Default-Regler wieder
   * her. Idempotent über container.dataset.weightsBound.
   */
  PK.WEIGHTS_DEFAULT = { labor: 2.5, recht: 2.5, lieferung: 1.5, sortiment: 1.5, preis: 2.0 };

  PK.initWeights = function (container) {
    if (!container) return;
    if (container.dataset.weightsBound === "1") {
      // Bereits gebunden (z. B. erneuter Aufruf bei "pk:langchange"): die
      // renderRanking()-Closure der ERSTEN Bindung liegt auf dem Element
      // (container._pkWeightsRender), NICHT hier neu aufrufbar : sliders/
      // rankingList dieser Funktionsinstanz wären noch undefined.
      if (typeof container._pkWeightsRender === "function") container._pkWeightsRender();
      return;
    }
    container.dataset.weightsBound = "1";

    var sliders = Array.prototype.slice.call(container.querySelectorAll(".weights-slider"));
    var rankingList = container.querySelector(".weights-ranking");
    var resetBtn = container.querySelector(".weights-reset-btn");
    if (!sliders.length || !rankingList) return;

    function currentWeights() {
      var w = {};
      sliders.forEach(function (s) { w[s.getAttribute("data-crit")] = parseFloat(s.value) || 0; });
      return w;
    }

    // Track-Füllstand (system.css .weights-slider, --fill in %) : Regler
    // min=0/max=3 sind fix im Markup, hier trotzdem aus dem Element gelesen
    // statt hartkodiert, falls ein Regler künftig andere Grenzen bekommt.
    function updateFill(slider) {
      var min = parseFloat(slider.min) || 0;
      var max = parseFloat(slider.max) || 1;
      var val = parseFloat(slider.value) || 0;
      var pct = max > min ? ((val - min) / (max - min)) * 100 : 0;
      slider.style.setProperty("--fill", Math.max(0, Math.min(100, pct)) + "%");
    }

    function updatePercentLabels(w) {
      var sum = Object.keys(w).reduce(function (s, k) { return s + w[k]; }, 0);
      sliders.forEach(function (s) {
        var crit = s.getAttribute("data-crit");
        var pct = sum > 0 ? (w[crit] / sum) * 100 : 0;
        var pctText = PK.byNum(Math.round(pct)) + "%";
        var pctEl = container.querySelector('[data-weight-pct="' + crit + '"]');
        if (pctEl) pctEl.textContent = pctText;
        // aria-valuetext (UX-Audit r1, "Weights-Slider: Live-Prozentwert nicht
        // für Screenreader"): native Range-Inputs lesen nur den Rohwert 0-3
        // vor, nicht den auf 100% normalisierten Prozentwert im separaten
        // <span data-weight-pct>. aria-valuetext überschreibt die Ansage mit
        // dem für die Entscheidung relevanten Prozentwert.
        s.setAttribute("aria-valuetext", pctText);
      });
    }

    function renderRanking() {
      var w = currentWeights();
      var sum = Object.keys(w).reduce(function (s, k) { return s + w[k]; }, 0);
      var norm = sum > 0 ? w : PK.WEIGHTS_DEFAULT;

      // Schema v2.3 (15.09., Auftrag "peptidkompass UI v2.3"): nicht-rankbare
      // Vendoren (rankbar===false) fließen nicht ins Regler-Ranking ein -
      // fehlendes Feld zählt als rankbar (Vendor vor der v2.3-Migration,
      // kein Ausschluss). Einzige Stelle, an der site.js für diesen Auftrag
      // angefasst wird (Podium bleibt seitenlokal in index.html gefiltert).
      var vendors = (Array.isArray(global.PK.vendors) ? global.PK.vendors : []).filter(function (v) { return v.rankbar !== false; });
      // Pro Vendor NUR über dessen belegte Kriterien renormieren (data/
      // SCHEMA.md v2, "Regler: nur bewertete Kriterien gewichten") - ein
      // Vendor ohne Sortiment/Preis-Daten wird nicht mit s[crit]||0 auf 0
      // abgestraft, sondern aus den Reglern seiner belegten Kriterien
      // gerankt. Kein einziges belegtes Kriterium -> weighted=null.
      var ranked = vendors.map(function (v) {
        var s = v.score || {};
        var total = 0, usedWeight = 0;
        Object.keys(norm).forEach(function (crit) {
          var val = s[crit];
          if (typeof val === "number" && isFinite(val)) {
            total += val * norm[crit];
            usedWeight += norm[crit];
          }
        });
        return { vendor: v, weighted: usedWeight > 0 ? (total / usedWeight) : null };
      }).sort(function (a, b) {
        // null (kein bewertetes Kriterium) immer zuletzt, unabhängig von der
        // sonstigen Sortierrichtung (data/SCHEMA.md v2).
        if (a.weighted === null && b.weighted === null) return 0;
        if (a.weighted === null) return 1;
        if (b.weighted === null) return -1;
        return b.weighted - a.weighted;
      });

      // FLIP: alte Positionen der bestehenden Zeilen (Key = vendor.slug) messen.
      var reduced = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var oldRects = {};
      if (!reduced) {
        rankingList.querySelectorAll("[data-vendor-slug]").forEach(function (row) {
          oldRects[row.getAttribute("data-vendor-slug")] = row.getBoundingClientRect();
        });
      }

      rankingList.textContent = "";
      ranked.forEach(function (entry, i) {
        var row = document.createElement("li");
        row.className = "weights-ranking-row";
        row.setAttribute("data-vendor-slug", entry.vendor.slug || "");

        var num = document.createElement("span");
        num.className = "weights-ranking-num";
        num.textContent = PK.byNum(i + 1) + ".";

        var name = document.createElement("span");
        name.className = "weights-ranking-name";
        name.textContent = entry.vendor.name || "";

        var score = document.createElement("span");
        score.className = "weights-ranking-score score-band-" + PK.scoreBand(entry.weighted);
        score.textContent = entry.weighted !== null ? PK.byNum(Math.round(entry.weighted)) : PK.t("global.na");

        row.appendChild(num);
        row.appendChild(name);
        row.appendChild(score);
        rankingList.appendChild(row);
      });

      if (!reduced) {
        rankingList.querySelectorAll("[data-vendor-slug]").forEach(function (row) {
          var slug = row.getAttribute("data-vendor-slug");
          var oldRect = oldRects[slug];
          if (!oldRect) return;
          var newRect = row.getBoundingClientRect();
          var dy = oldRect.top - newRect.top;
          if (!dy) return;
          row.style.transition = "none";
          row.style.transform = "translateY(" + dy + "px)";
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              row.style.transition = "";
              row.style.transform = "";
            });
          });
        });
      }

      updatePercentLabels(w);
    }

    sliders.forEach(function (s) {
      updateFill(s);
      s.addEventListener("input", function () { updateFill(s); renderRanking(); });
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        sliders.forEach(function (s) {
          var crit = s.getAttribute("data-crit");
          s.value = String(PK.WEIGHTS_DEFAULT[crit]);
          updateFill(s);
        });
        renderRanking();
      });
    }

    container._pkWeightsRender = renderRanking;
    renderRanking();
  };

  /**
   * PK.renderProof(sectionEl, opts)
   * Baut die Zitat-Karten aus window.PK.reviews in sectionEl (erwartet ein
   * Kind-Element mit Klasse .proof-grid; wird angelegt, falls es fehlt).
   * Fehlen die Reviews (Datei noch nicht geliefert oder Array leer) oder
   * gibt opts.vendorSlug gefiltert keine Treffer: sectionEl wird komplett
   * versteckt (Fallback laut Auftrag). opts: { basePath, vendorSlug (nur
   * Reviews dieses Anbieters, für die Detailseite), limit }.
   */
  PK.renderProof = function (sectionEl, opts) {
    if (!sectionEl) return;
    var o = opts || {};
    var bp = o.basePath || "";
    var all = Array.isArray(global.PK.reviews) ? global.PK.reviews : [];
    var reviews = o.vendorSlug ? all.filter(function (r) { return r.vendorSlug === o.vendorSlug; }) : all;
    // Neueste zuerst (ISO-Datumsstrings sortieren lexikalisch korrekt) : nötig
    // seit opts.limit existiert, sonst würde ein "nur 6"-Aufruf (Startseite,
    // Fix-Runde 3) die ersten 6 Array-Einträge zeigen statt der 6 jüngsten.
    reviews = reviews.slice().sort(function (a, b) { return (b.datum || "") < (a.datum || "") ? -1 : (b.datum || "") > (a.datum || "") ? 1 : 0; });
    if (o.limit) reviews = reviews.slice(0, o.limit);

    if (!reviews.length) {
      sectionEl.hidden = true;
      return;
    }
    sectionEl.hidden = false;

    var grid = sectionEl.querySelector(".proof-grid");
    if (!grid) {
      grid = document.createElement("div");
      grid.className = "proof-grid";
      sectionEl.appendChild(grid);
    }
    grid.textContent = "";

    reviews.forEach(function (r) {
      var vendor = PK.vendorBySlug(r.vendorSlug);
      var card = document.createElement("div");
      card.className = "card proof-card";
      if (vendor && vendor.brand && vendor.brand.farbe) card.style.setProperty("--brand", vendor.brand.farbe);

      var head = document.createElement("div");
      head.className = "proof-head";

      var avatar = document.createElement("div");
      avatar.className = "proof-avatar";
      avatar.setAttribute("aria-hidden", "true");
      avatar.textContent = r.initialen || "";
      head.appendChild(avatar);

      var starsWrap = document.createElement("div");
      var stars = document.createElement("p");
      stars.className = "proof-stars";
      var n = Number(r.sterne) || 0;
      stars.textContent = "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);
      stars.setAttribute("aria-label", n + "/5");
      starsWrap.appendChild(stars);
      head.appendChild(starsWrap);
      card.appendChild(head);

      var text = document.createElement("p");
      text.className = "proof-text";
      text.textContent = PK.tx(r, "text");
      card.appendChild(text);

      var meta = document.createElement("div");
      meta.className = "proof-meta";

      var vendorLink = document.createElement("a");
      vendorLink.className = "proof-vendor btn-link";
      if (vendor) {
        vendorLink.href = bp + "anbieter/" + encodeURIComponent(vendor.slug || "") + ".html";
        vendorLink.textContent = vendor.name || "";
      } else {
        vendorLink.href = "#";
        vendorLink.textContent = r.vendorSlug || "";
      }
      meta.appendChild(vendorLink);

      var date = document.createElement("span");
      date.className = "proof-date";
      date.textContent = r.datum || "";
      meta.appendChild(date);

      card.appendChild(meta);
      grid.appendChild(card);
    });

    var note = sectionEl.querySelector(".proof-note");
    if (note) note.textContent = PK.t(o.demoNoteKey || "page.index.proofDemoNote");
  };

  /**
   * PK.renderFresh(container, opts)
   * Baut die Frische-Leiste (3-4 Kacheln) aus window.PK.batches, relativ
   * zu window.PK.site.updated (nicht zum echten "heute", Demo-Projekt mit
   * fixem Stand-Datum). Signale: jüngste verifizierte Charge ("vor n Tagen"),
   * CoAs der letzten 7 Tage vor updated, Anbieter-Anzahl, Score-Durchschnitt.
   * Zahlen bekommen [data-count-up]/[data-count-target] und werden über
   * PK.initCountUp() hochgezählt (hier direkt mit aufgerufen, scope=container).
   */
  PK.renderFresh = function (container, opts) {
    if (!container) return;
    var o = opts || {};
    var batches = Array.isArray(global.PK.batches) ? global.PK.batches : [];
    var vendors = Array.isArray(global.PK.vendors) ? global.PK.vendors : [];
    var updatedStr = (global.PK.site && global.PK.site.updated) || "";
    var updated = updatedStr ? new Date(updatedStr + "T00:00:00Z") : null;

    container.textContent = "";

    var dates=batches.map(function(b){return b.erfasst||"";}).filter(Boolean).sort();
    if(dates.length)container.appendChild(buildTile(dates[dates.length-1],PK.t("global.audit.collected"),null));
    container.appendChild(buildTile(null,PK.t("global.audit.batchCount"),batches.length));
    container.appendChild(buildTile(null,PK.t("global.audit.activeCount"),vendors.filter(PK.isActiveVendor).length));
    PK.initCountUp(container);

    function buildTile(topText, label, countTarget) {
      var tile = document.createElement("div");
      tile.className = "fresh-tile";
      var value = document.createElement("div");
      value.className = "fresh-value";
      if (countTarget !== null) {
        value.setAttribute("data-count-up", "");
        value.setAttribute("data-count-target", String(countTarget));
        value.textContent = PK.byNum(countTarget);
      } else {
        value.textContent = topText || "";
      }
      var lbl = document.createElement("div");
      lbl.className = "fresh-label";
      // Platzhalter "{n}" durch den bereits gerenderten Zähl-Wert ersetzen,
      // sobald der Text keinen eigenen data-count-up-Wert trägt (Label bleibt
      // Text, nur die Kachel-Value zählt hoch).
      lbl.textContent = countTarget !== null ? label.replace("{n}", PK.byNum(countTarget)) : label;
      tile.appendChild(value);
      tile.appendChild(lbl);
      return tile;
    }
  };

  /**
   * PK.initCountUp(scope)
   * Generischer Zähl-Helfer für [data-count-up][data-count-target]
   * innerhalb scope (Default: ganzes Dokument). Zählt easing-basiert von 0
   * zum Zielwert beim Einblenden (IntersectionObserver + Sofort-Check-
   * Fallback wie PK.initReveal, damit Elemente im/oberhalb des Viewports
   * auch ohne feuernden Observer zuverlässig zählen). prefers-reduced-motion:
   * springt sofort auf den Endwert. Erneuter Aufruf (z. B. "pk:langchange")
   * zählt bereits gezählte Elemente NICHT erneut hoch, formatiert den
   * Endwert nur neu (PK.byNum je Locale).
   */
  PK.initCountUp = function (scope) {
    var root = scope || document;
    var els = Array.prototype.slice.call(root.querySelectorAll("[data-count-up]"));
    if (!els.length) return;
    var reduced = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function finalize(el, target) {
      el.textContent = PK.byNum(Math.round(target));
      el.dataset.counted = "done";
    }
    function animate(el, target) {
      var start = null;
      var DUR = 900;
      function frame(ts) {
        if (start === null) start = ts;
        var p = Math.min(1, (ts - start) / DUR);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = PK.byNum(Math.round(target * eased));
        if (p < 1) { global.requestAnimationFrame(frame); } else { finalize(el, target); }
      }
      global.requestAnimationFrame(frame);
    }

    var pending = [];
    els.forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count-target"));
      if (!isFinite(target)) return;
      if (el.dataset.counted === "done") { el.textContent = PK.byNum(Math.round(target)); return; }
      if (reduced || !("IntersectionObserver" in global)) { finalize(el, target); return; }
      if (el.dataset.countBound !== "1") { el.dataset.countBound = "1"; el.textContent = "0"; }
      pending.push(el);
    });

    if (reduced || !("IntersectionObserver" in global) || !pending.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var target = parseFloat(entry.target.getAttribute("data-count-target"));
        io.unobserve(entry.target);
        if (isFinite(target)) animate(entry.target, target);
      });
    }, { threshold: 0.4 });
    pending.forEach(function (el) { io.observe(el); });

    var fallbackCheck = function () {
      var vh = global.innerHeight || 800;
      pending.forEach(function (el) {
        if (el.dataset.counted === "done") return;
        var target = parseFloat(el.getAttribute("data-count-target"));
        if (!isFinite(target)) return;
        var top = el.getBoundingClientRect().top;
        if (top < vh * 1.05) { io.unobserve(el); animate(el, target); }
      });
    };
    fallbackCheck();
    global.addEventListener("scroll", fallbackCheck, { passive: true });
    global.addEventListener("resize", fallbackCheck);
    document.addEventListener("visibilitychange", fallbackCheck);
  };

  /**
   * Scroll-Hinweis für .table-wrap (Befund 2, REVIEW_design_typo.md):
   * fügt bei Bedarf ein <p class="table-scroll-hint"> nach jedem .table-wrap
   * ein und blendet es nur ein, solange die Tabelle tatsächlich breiter ist
   * als ihr sichtbarer Container (per CSS zusätzlich auf ≤1023px begrenzt).
   * Läuft automatisch, keine Seite muss das aufrufen oder duplizieren.
   */
  function initTableScrollHints() {
    var wraps = document.querySelectorAll(".table-wrap");
    if (!wraps.length) return;

    wraps.forEach(function (wrap) {
      function update() {
        var scrollable = wrap.scrollWidth > wrap.clientWidth + 1;
        var hint = wrap.nextElementSibling;
        if (!hint || !hint.classList.contains("table-scroll-hint")) {
          hint = document.createElement("p");
          hint.className = "table-scroll-hint text-caption";
          wrap.insertAdjacentElement("afterend", hint);
        }
        hint.textContent = PK.t("global.table.scrollHint");
        hint.hidden = !scrollable;
      }
      update();
      global.addEventListener("resize", update);
      document.addEventListener("pk:langchange", update);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTableScrollHints);
  } else {
    initTableScrollHints();
  }

  // Shared display rules. Missing facts remain missing; no score inputs are changed.
  PK.isActiveVendor = function (v) { return !!v && v.status === "aktiv" && v.rankbar !== false; };
  PK.vendorStatusLabel = function (v) {
    return PK.t("global.audit." + ({ aktiv: "active", inaktiv: "inactive", "zu-pruefen": "review", "kein-shop": "noShop" }[v.status] || "review"));
  };
  PK.validHttpUrl = function (value) {
    if (typeof value !== "string" || /[\s<>]/.test(value)) return "";
    try { var u = new URL(value); return /^(https?:)$/.test(u.protocol) && !u.username && !u.password ? u.href : ""; }
    catch (e) { return ""; }
  };
  PK.isComparableProduct = function (p) {
    if (!p || p.geschaetzt || !(p.mg > 0) || !(p.preis > 0)) return false;
    // A known combination product cannot represent either individual compound.
    return !/cjc[^/]*ipamorelin|ipamorelin[^/]*cjc|\/[^/]*(?:blend|combo|stack)[^/]*(?:\/|$)/i.test(p.url || "");
  };
  PK.productHref = function (p, v) { return PK.validHttpUrl(p && p.url) || PK.validHttpUrl(PK.vendorHref(v)); };
  PK.researchPublishable = function (entry) {
    return !!entry && !!PK.validHttpUrl(entry.quelle) && !!entry.datum &&
      !/in dieser Session|in this session|WebSearch|Browser-Tool|per Mail|via email|Vorrecherche|previous research session/i.test(entry.text || "");
  };
  PK.appendDisclosure = function (element, text) {
    var p = document.createElement("p"); p.className = "text-small muted"; p.textContent = text; element.appendChild(p); return p;
  };
  PK.initSiteSearch = function () {
    var form = document.getElementById("site-search"), results = document.getElementById("search-results");
    if (!form || !results) return;
    var input = form.querySelector("input"), heading = results.querySelector("h2"), count = results.querySelector("[role=status]"), list = results.querySelector(".search-result-list");
    var normalize = function (s) { return String(s || "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, ""); };
    var submitted = false;
    function render(moveFocus) {
      if (!submitted) return;
      var q = input.value.trim().slice(0,120), needle = normalize(q);
      list.textContent = ""; results.hidden = false;
      heading.textContent = PK.t("global.audit.searchHeading");
      var matches = [];
      if (needle) {
        (PK.vendors || []).forEach(function(v) { if (normalize(v.name + " " + v.slug).includes(needle)) matches.push({name:v.name,href:"anbieter/"+encodeURIComponent(v.slug)+".html",kind:PK.t("global.audit.vendors"),detail:PK.vendorStatusLabel(v)}); });
        (PK.peptides || []).forEach(function(p) { if (normalize(p.name+" "+p.slug+" "+(p.synonyme||[]).join(" ")).includes(needle)) matches.push({name:p.name,href:"wirkstoffe/"+encodeURIComponent(p.slug)+".html",kind:PK.t("global.audit.peptides"),detail:PK.t("global.audit.genericSafety")}); });
      }
      count.textContent = !needle ? PK.t("global.audit.searchPrompt") : matches.length ? PK.t("global.audit.searchCount",{n:matches.length,query:q}) : PK.t("global.audit.searchEmpty");
      matches.forEach(function(m) {
        var li=document.createElement("li"), a=document.createElement("a"), detail=document.createElement("p");
        a.className="btn-link";a.href=m.href;a.textContent=m.name;
        detail.className="text-small muted";detail.textContent=m.kind+" · "+m.detail;
        li.appendChild(a);li.appendChild(detail);list.appendChild(li);
      });
      if (moveFocus) { heading.focus(); results.scrollIntoView({block:"start",behavior:"auto"}); }
    }
    form.addEventListener("submit",function(e) { e.preventDefault();submitted=true;var url=new URL(location.href);url.searchParams.set("q",input.value.trim().slice(0,120));history.replaceState(null,"",url);render(true); });
    document.addEventListener("pk:langchange",function(){render(false);});
    var initial=new URL(location.href).searchParams.get("q");
    if(initial){input.value=initial;submitted=true;render(false);}
  };

  // Shop-source links follow the same disclosure rule as purchase links.
  PK.discloseShopLinks = function () {
    var hosts = {};
    (PK.vendors || []).forEach(function(v) { [v.website,v.affiliateUrl,v.affiliateLink].forEach(function(h){var clean=PK.validHttpUrl(h);if(clean)hosts[new URL(clean).hostname.replace(/^www\./,"")]=true;}); });
    (PK.products || []).forEach(function(p){var clean=PK.validHttpUrl(p.url);if(clean)hosts[new URL(clean).hostname.replace(/^www\./,"")]=true;});
    document.querySelectorAll('a[href^="http"]').forEach(function(a) {
      var clean=PK.validHttpUrl(a.getAttribute("href")); if(!clean)return;
      if(!hosts[new URL(clean).hostname.replace(/^www\./,"")])return;
      a.rel="sponsored nofollow noopener";
      var oldBadge=a.querySelector(".badge-ad");if(oldBadge && oldBadge.textContent!==PK.t("global.badge.ad"))oldBadge.textContent=PK.t("global.badge.ad");
      if(!a.querySelector(".badge-ad")){var badge=document.createElement("span");badge.className="badge-ad";badge.textContent=PK.t("global.badge.ad");a.appendChild(document.createTextNode(" "));a.appendChild(badge);}
    });
  };
  document.addEventListener("DOMContentLoaded",function(){
    PK.discloseShopLinks();
    var queued=false;
    new MutationObserver(function(){if(queued)return;queued=true;requestAnimationFrame(function(){queued=false;PK.discloseShopLinks();});}).observe(document.body,{childList:true,subtree:true});
  });

})(window);
