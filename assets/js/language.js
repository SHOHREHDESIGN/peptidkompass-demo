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
    // / is the neutral entry; /index.html explicitly requests German.
    if (code === 'de' && path === '/') path = '/index.html';
    if (code !== 'de' && path === '/index.html') path = '/';
    url.pathname = (code === 'de' ? '' : '/' + code) + path;
    url.searchParams.delete('lang');
    return url.pathname + url.search + url.hash;
  }
  function save(code) {
    if (codes.indexOf(code) < 0) return;
    try { global.localStorage.setItem('pk_lang', code); } catch (e) { /* Private browsing still works. */ }
  }
  var api = { codes: codes, names: names, supported: supported, preferred: preferred, route: route, save: save };
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
  // A shared deep link is never overridden, including by a saved preference.
  if (url.pathname === '/') {
    var saved = null;
    try { saved = global.localStorage.getItem('pk_lang'); } catch (e) { /* Optional preference. */ }
    var chosen = preferred(global.navigator.languages || [global.navigator.language], saved);
    if (chosen !== 'de') global.location.replace(route(url.href, chosen));
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
