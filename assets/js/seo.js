/* Language routes and progressive enhancement for the static SEO build. */
(function () {
  'use strict';
  var lang = document.documentElement.getAttribute('data-page-language') || 'de';
  var state = document.getElementById('seo-page-data');
  if (state) {
    var meta = JSON.parse(state.textContent);
    document.title = meta.title;
    var description = document.querySelector('meta[name="description"]');
    if (description) description.content = meta.description;
  }
  function localized(href, targetLang) {
    var url = new URL(href, document.baseURI);
    if (url.origin !== location.origin && url.origin !== 'https://peptidkompass.com') return href;
    if (!/\/$|\.html$/.test(url.pathname)) return href;
    url.pathname = (targetLang === 'en' ? '/en' : '') + url.pathname.replace(/^\/en(?=\/)/, '');
    url.searchParams.delete('lang');
    return url.pathname + url.search + url.hash;
  }
  function syncLinks(root) {
    var links = root.querySelectorAll ? root.querySelectorAll('a[href]') : [];
    links.forEach(function (a) {
      var old = a.getAttribute('href');
      if (!old || old.charAt(0) === '#' || /^(mailto:|tel:|javascript:)/i.test(old)) return;
      var next = localized(old, a.getAttribute('data-lang') || lang);
      if (next !== old) a.setAttribute('href', next);
    });
  }
  function finish() {
    syncLinks(document);
    var dynamic = document.querySelector('#pk-content, #detail-content, #ratgeber-content');
    if (dynamic && !dynamic.hidden && dynamic.textContent.trim()) {
      document.querySelectorAll('[data-seo-fallback]').forEach(function (s) { s.hidden = true; });
      document.querySelectorAll('[data-seo-guide-shell]').forEach(function (s) { s.hidden = false; });
    }
    document.querySelectorAll('.reveal').forEach(function (s) { s.classList.add('is-visible'); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', finish);
  else finish();
  // New search, filter and menu results keep the page language too.
  new MutationObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.addedNodes.forEach(function (node) {
        if (node.nodeType !== 1) return;
        if (node.matches('a[href]')) syncLinks(node.parentNode);
        else syncLinks(node);
      });
    });
  }).observe(document.body, { childList: true, subtree: true });
  // Historical shared ?lang= links now resolve to stable language URLs.
  var requested = new URL(location.href).searchParams.get('lang');
  if (requested === 'de' || requested === 'en') {
    location.replace(localized(location.href, requested));
  }
})();
