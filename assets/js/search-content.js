/* Shared chrome for fully static editorial pages. No content re-rendering. */
(function () {
  'use strict';
  if (!window.PK) return;
  PK.applyI18n();
  PK.initLangToggle();
  PK.initNav();
  PK.initNavDropdowns();
  PK.initReveal();
  PK.initDemoBanner();
  PK.footerDisclaimer();
})();
