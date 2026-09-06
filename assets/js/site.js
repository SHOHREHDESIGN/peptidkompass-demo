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
   PK.setLang()             : Sprache wechseln + Event "pk:langchange"
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
   (auto) Scroll-Hinweis „Wischen für mehr" für .table-wrap auf Mobile/Tablet
          : läuft selbstständig bei DOMContentLoaded, keine Seite ruft das auf.
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
  PK.lang = (function () {
    /* 1) URL-Parameter ?lang=de|en (teilbare Links), wird persistiert */
    var m = /[?&]lang=(de|en)\b/i.exec((global.location && location.search) || "");
    if (m) {
      var fromUrl = m[1].toLowerCase();
      try { global.localStorage && global.localStorage.setItem("pk_lang", fromUrl); } catch (e) { /* ignorieren */ }
      return fromUrl;
    }
    /* 2) gespeicherte Wahl, 3) Browsersprache */
    var stored = null;
    try { stored = global.localStorage && global.localStorage.getItem("pk_lang"); } catch (e) { /* privater Modus o.ä. */ }
    if (stored === "de" || stored === "en") return stored;
    var nav = (global.navigator && (navigator.language || navigator.userLanguage)) || "";
    return /^de/i.test(nav) ? "de" : "en";
  })();
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
   * PK.setLang(lang)
   * Wechselt die Sprache: speichert in localStorage, setzt <html lang>,
   * ruft PK.applyI18n() und feuert "pk:langchange" (detail:{lang}) für
   * Seiten-Renderer, die dynamische Inhalte neu bauen müssen.
   */
  PK.setLang = function (lang) {
    lang = (lang === "en") ? "en" : "de";
    PK.lang = lang;
    try { global.localStorage && global.localStorage.setItem("pk_lang", lang); } catch (e) { /* ignorieren */ }
    document.documentElement.setAttribute("lang", lang);
    PK.applyI18n();
    document.dispatchEvent(new CustomEvent("pk:langchange", { detail: { lang: lang } }));
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
   * score-Objekt { labor, recht, lieferung, sortiment, preis }.
   * Nutzt PK.SCORE_WEIGHTS, Gewichte NIE hier oder anderswo duplizieren.
   */
  PK.computeScoreTotal = function (score) {
    if (!score || typeof score !== "object") return 0;
    var w = PK.SCORE_WEIGHTS;
    var total = 0;
    Object.keys(w).forEach(function (key) {
      var v = Number(score[key]);
      if (isFinite(v)) total += v * w[key];
    });
    return Math.round(total);
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
   * PK.safeUrl(url)
   * Whitelist für Link-Ziele: nur "#DEMO" (exakt) oder "https://…" sind
   * erlaubt. Alles andere (http://, javascript:, data:, leer, …) wird
   * verworfen: Rückgabe "#", console.warn mit dem Original-Wert.
   */
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
  PK.renderVendorCard = function (vendor, basePath) {
    var bp = basePath || "";
    var card = document.createElement("div");
    card.className = "vendor-card";

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
    score.className = "vendor-card-score";
    var gesamt = typeof vendor.gesamt === "number" ? vendor.gesamt : PK.computeScoreTotal(vendor.score);
    score.textContent = PK.byNum(gesamt);

    head.appendChild(nameWrap);
    head.appendChild(score);

    var badges = document.createElement("div");
    badges.className = "vendor-card-badges";
    if (vendor.rechtsrahmen && vendor.rechtsrahmen.ruo) {
      badges.appendChild(makePill(PK.t("global.vendorCard.ruo"), "pill-ok"));
    }
    if (vendor.coa && vendor.coa.anzahl) {
      badges.appendChild(makePill(PK.t("global.vendorCard.coaChecked", { n: vendor.coa.anzahl }), "pill-info"));
    }
    if (vendor.rabatt && vendor.rabatt.prozent) {
      badges.appendChild(makePill("-" + PK.byNum(vendor.rabatt.prozent) + "%", "pill-warn"));
    }

    var actions = document.createElement("div");
    actions.className = "vendor-card-actions";

    var detailLink = document.createElement("a");
    detailLink.className = "btn-link";
    detailLink.href = bp + "anbieter/detail.html?slug=" + encodeURIComponent(vendor.slug || "");
    detailLink.textContent = PK.t("global.vendorCard.details");
    actions.appendChild(detailLink);

    if (vendor.affiliateUrl) {
      var shopLink = document.createElement("a");
      shopLink.className = "btn btn-secondary ext-link";
      shopLink.href = PK.safeUrl(vendor.affiliateUrl);
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
    card.appendChild(actions);
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
   * max ist optional (Default 100).
   */
  PK.renderScoreBar = function (label, value, max) {
    var m = typeof max === "number" ? max : 100;
    var v = Number(value) || 0;
    var pct = m > 0 ? Math.max(0, Math.min(100, (v / m) * 100)) : 0;

    var row = document.createElement("div");
    row.className = "score-bar-row";

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
    val.className = "score-bar-value";
    val.textContent = PK.byNum(v);

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
    var text = codeEl ? codeEl.textContent.trim() : "";
    if (!text) return;

    var done = function (ok) {
      var original = btn.getAttribute("data-original-label") || btn.textContent;
      btn.setAttribute("data-original-label", original);
      btn.textContent = ok ? PK.t("global.codeBox.copied") : PK.t("global.codeBox.error");
      btn.setAttribute("aria-live", "polite");
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
   * Zeigt/befüllt jedes Element mit [data-demo-banner]. Nutzt
   * window.PK.site.demo/name falls vorhanden, sonst einen generischen
   * Fallback-Text (+ console.warn, damit ein fehlender Datensatz sichtbar
   * ist statt still zu verschwinden).
   */
  PK.initDemoBanner = function () {
    var banners = document.querySelectorAll("[data-demo-banner]");
    if (!banners.length) return;
    var site = global.PK && global.PK.site;

    function render() {
      var text;
      if (site && site.demo) {
        text = PK.t("global.demoBanner.text");
      } else if (site) {
        text = null; // demo:false → Banner bleibt versteckt
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
        } else {
          el.textContent = "";
          var b = document.createElement("strong");
          b.textContent = PK.t("global.demoBanner.label");
          el.appendChild(b);
          el.appendChild(document.createTextNode(": " + text));
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

})(window);
