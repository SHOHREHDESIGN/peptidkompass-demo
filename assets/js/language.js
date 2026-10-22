/* Explicit language URLs always win. Auto-selection is limited to the neutral home. */
(function (global) {
  'use strict';
  var codes = ['de', 'en', 'fr', 'es', 'it', 'nl', 'pl'];
  var names = { de: 'Deutsch', en: 'English', fr: 'Français', es: 'Español', it: 'Italiano', nl: 'Nederlands', pl: 'Polski' };
  var prefix = /^\/(en|fr|es|it|nl|pl)(?=\/|$)/;
  function supported(value) {
    if (typeof value !== 'string') return null;
    var code = value.toLowerCase().split(/[-_]/)[0];
    return codes.indexOf(code) >= 0 ? code : null;
  }
  function preferred(languages, saved) {
    if (codes.indexOf(saved) >= 0) return saved;
    for (var i = 0; i < (languages || []).length; i++) {
      var match = supported(languages[i]);
      if (match) return match;
    }
    return 'en';
  }
  function route(href, code, base) {
    if (codes.indexOf(code) < 0) return href;
    var url = new URL(href, base || global.location.href);
    var origin = new URL(base || global.location.href).origin;
    if (url.origin !== origin && url.origin !== 'https://peptidkompass.com') return href;
    if (!/(?:\/|\.html)$/.test(url.pathname)) return href;
    var path = url.pathname.replace(prefix, '') || '/';
    // / is the German home (canonical since 22.10.2026); /index.html is an alias.
    if (code !== 'de' && path === '/index.html') path = '/';
    url.pathname = (code === 'de' ? '' : '/' + code) + path;
    url.searchParams.delete('lang');
    return url.pathname + url.search + url.hash;
  }
  function save(code) {
    if (codes.indexOf(code) < 0) return;
    try { global.localStorage.setItem('pk_lang', code); } catch (e) { /* Private browsing still works. */ }
  }
  var hints = {
    en: ['This page is also available in English', 'Close'],
    fr: ['Cette page existe aussi en français', 'Fermer'],
    es: ['Esta página también está disponible en español', 'Cerrar'],
    it: ['Questa pagina è disponibile anche in italiano', 'Chiudi'],
    nl: ['Deze pagina is ook beschikbaar in het Nederlands', 'Sluiten'],
    pl: ['Ta strona jest dostępna także po polsku', 'Zamknij']
  };
  var api = { codes: codes, names: names, hints: hints, supported: supported, preferred: preferred, route: route, save: save };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  global.PKLanguage = api;
  if (!global.document) return;
  var url = new URL(global.location.href);
  var explicit = url.searchParams.get('lang');
  if (codes.indexOf(explicit) >= 0) {
    save(explicit);
    global.location.replace(route(url.href, explicit));
    return;
  }
  var current = (url.pathname.match(prefix) || [null, 'de'])[1];
  document.documentElement.lang = current;
  document.documentElement.setAttribute('data-page-language', current);
  // A shared deep link is never overridden. On the German home only a saved choice
  // redirects; a browser language merely offers a hint, so crawlers always see German.
  if (url.pathname === '/') {
    var saved = null;
    try { saved = global.localStorage.getItem('pk_lang'); } catch (e) { /* Optional preference. */ }
    if (codes.indexOf(saved) >= 0 && saved !== 'de') {
      global.location.replace(route(url.href, saved));
      return;
    }
    var offer = saved === 'de' ? 'de' : preferred(global.navigator.languages || [global.navigator.language], null);
    if (offer !== 'de') document.addEventListener('DOMContentLoaded', function () {
      var bar = document.createElement('div');
      bar.className = 'language-hint';
      bar.setAttribute('lang', offer);
      var link = document.createElement('a');
      link.setAttribute('data-lang', offer);
      link.setAttribute('href', route(url.href, offer));
      link.textContent = hints[offer][0];
      var close = document.createElement('button');
      close.type = 'button';
      close.setAttribute('aria-label', hints[offer][1]);
      close.textContent = '×';
      close.addEventListener('click', function () { save('de'); bar.remove(); });
      bar.appendChild(link);
      bar.appendChild(close);
      document.body.insertBefore(bar, document.body.firstChild);
    });
  }
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[data-lang]');
    if (link && codes.indexOf(link.getAttribute('data-lang')) >= 0) {
      var target = link.getAttribute('data-lang');
      save(target);
      link.setAttribute('href', route(global.location.href, target));
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('details.language-picker[open]').forEach(function (picker) {
      picker.open = false; picker.querySelector('summary').focus();
    });
  });
})(typeof window !== 'undefined' ? window : globalThis);
