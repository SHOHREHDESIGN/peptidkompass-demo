/* Shared local dictionaries. No translation requests or geolocation at runtime. */
(function () {
  'use strict';
  var PK = window.PK = window.PK || {};
  var dictionary = PK.localeTexts;
  if (!dictionary) return;
  var seen = new WeakMap();
  var properNames = new Set(PK.localeProperNames || ['Peptide Compass']);
  var protectedKeys = new Set('slug id vendor peptid kategorie status land laender waehrung type typ studientyp studienlage zahlung coaStatus code labor datum stand datePublished dateModified url href website affiliateUrl quelle quellen doi pmid cas formel sequenz link quelleUrl bild'.split(' '));
  var templates = [];
  var lang = (document.documentElement.getAttribute('data-page-language') || document.documentElement.lang || 'en').toLowerCase();
  function escape(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  // Platzhalter mit Zahlenbedeutung duerfen nur Ziffern aufnehmen. Sonst fing "{n} questions" bereits
  // uebersetzten Text ("Foire aux questions") ab und drehte die Woerter erneut um.
  var numericTokens = new Set(['n','shown','total','min','max','v','count','p','nr','score','rank','studien','wirkstoffe','betrag','mg']);
  // Datums-Platzhalter: ISO-Daten (2026-09-15) erscheinen in den Sprachfassungen lokal formatiert (z. B. 15 septembre 2026).
  var dateTokens = new Set(['date','datum','updated','stand']);
  PK.formatVar = function (name, value) {
    if (!dateTokens.has(name) || typeof value !== 'string') return value;
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
    if (!m) return value;
    var date = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    // Ungueltige Kalenderdaten (2026-02-31) nie in ein anderes Datum umrechnen
    if (date.getUTCFullYear() !== +m[1] || date.getUTCMonth() !== +m[2] - 1 || date.getUTCDate() !== +m[3]) return value;
    try { return new Intl.DateTimeFormat(PK.locale || lang, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date); } catch (e) { return value; }
  };
  var translatedValues = new Set();
  Object.keys(dictionary).forEach(function (key) { if (!/\{\w+\}/.test(dictionary[key])) translatedValues.add(String(dictionary[key]).trim()); });
  Object.keys(dictionary).sort(function (a, b) { return b.length - a.length; }).forEach(function (key) {
    if (!/\{\w+\}/.test(key)) return;
    var tokens = [], cursor = 0, pattern = '^';
    key.replace(/\{(\w+)\}/g, function (token, name, at) {
      pattern += escape(key.slice(cursor, at)) + (numericTokens.has(name) ? '(\\d[\\d.,]*|–|-)' : '(.+?)');
      tokens.push(name); cursor = at + token.length;
    });
    pattern += escape(key.slice(cursor)) + '$';
    templates.push({ pattern: new RegExp(pattern), tokens: tokens, text: dictionary[key] });
  });
  // Pluralmarken in Uebersetzungen: [[n|Form1|Form2]] (Sprachen mit zwei Formen) oder
  // [[n|Form1|Form2|Form3]] (Polnisch: 1 | 2-4 | 5+). Die Zahl kommt aus dem Platzhalter {n}.
  function pluralIndex(count, forms) {
    if (lang === 'pl' && forms >= 3) {
      if (count === 1) return 0;
      var t = count % 10, h = count % 100;
      return (t >= 2 && t <= 4 && !(h >= 12 && h <= 14)) ? 1 : 2;
    }
    if (lang === 'fr') return count < 2 ? 0 : 1;
    return count === 1 ? 0 : 1;
  }
  PK.plural = function (str, values) {
    if (typeof str !== 'string' || str.indexOf('[[') < 0) return str;
    return str.replace(/\[\[(\w+)\|([^\]]*)\]\]/g, function (all, name, list) {
      var forms = list.split('|'), raw = values && values[name];
      var count = parseInt(String(raw === undefined ? '' : raw).replace(/[^\d]/g, ''), 10);
      if (isNaN(count)) return forms[forms.length - 1];
      return forms[Math.min(pluralIndex(count, forms.length), forms.length - 1)];
    });
  };
  function text(value) {
    if (typeof value !== 'string') return value;
    var trimmed = value.trim();
    if (properNames.has(trimmed)) return value;
    // Schon uebersetzter Text (Wert irgendeines Eintrags) bleibt stehen - VOR dem Schluessel-Lookup. Sonst wird er ein zweites Mal
    // uebersetzt, sobald derselbe String auch als Quelltext-Schluessel existiert (IT "Ratgeber"->"Guide"->"Guida",
    // "Hinweise"->"Note"->"Nota"; FR/NL/IT "Peptid"->"Peptide"->"Peptides"/"Peptiden"/"Peptidi"). Rohe Quelltexte gleicher Schreibweise
    // liefern die Skripte nicht (geprueft: keine solchen Literale in assets/js und den Detail-Vorlagen); die Seiten sind beim Build uebersetzt.
    if (translatedValues.has(trimmed)) return value;
    var translated = dictionary[trimmed];
    if (translated === undefined) {
      for (var i = 0; i < templates.length; i++) {
        var match = trimmed.match(templates[i].pattern);
        if (!match) continue;
        var values = {};
        translated = templates[i].text;
        templates[i].tokens.forEach(function (name, index) { values[name] = match[index + 1]; translated = translated.split('{' + name + '}').join(PK.formatVar(name, match[index + 1])); });
        translated = PK.plural(translated, values);
        break;
      }
    }
    return translated === undefined ? value : value.replace(trimmed, translated);
  }
  PK.localizeValue = function localize(value) {
    if (Array.isArray(value)) return value.map(localize);
    if (value && typeof value === 'object') {
      var result = {};
      Object.keys(value).forEach(function (key) { result[key] = protectedKeys.has(key) ? value[key] : localize(value[key]); });
      return result;
    }
    return text(value);
  };
  function translateNode(node) {
    if (node.nodeType !== 3 || !node.parentElement || node.parentElement.closest('script,style,code,pre,[data-language-picker],[translate="no"],.nav-logo')) return;
    if (seen.get(node) === node.nodeValue) return;
    var translated = text(node.nodeValue);
    if (translated !== node.nodeValue) node.nodeValue = translated;
    seen.set(node, node.nodeValue);
  }
  PK.localizeDOM = function (root) {
    if (!root) return;
    if (root.nodeType === 3) { translateNode(root); return; }
    var walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var current;
    while ((current = walk.nextNode())) translateNode(current);
    var elements = root.querySelectorAll ? Array.from(root.querySelectorAll('[alt],[title],[placeholder],[aria-label]')) : [];
    if (root.nodeType === 1) elements.push(root);
    elements.forEach(function (el) {
      if (el.closest('[data-language-picker],[translate="no"],.nav-logo')) return;
      ['alt','title','placeholder','aria-label'].forEach(function (attr) {
        var old = el.getAttribute(attr);
        if (old !== null) { var next = text(old); if (next !== old) el.setAttribute(attr, next); }
      });
    });
  };
  function start() {
    PK.localizeDOM(document.body);
    new MutationObserver(function (records) {
      records.forEach(function (record) {
        if (record.type === 'characterData') translateNode(record.target);
        else if (record.type === 'attributes') PK.localizeDOM(record.target);
        else record.addedNodes.forEach(PK.localizeDOM);
      });
    }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['alt','title','placeholder','aria-label'] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
