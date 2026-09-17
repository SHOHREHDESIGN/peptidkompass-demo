(function (PK) {
  'use strict';
  PK.applyI18n(); PK.initLangToggle(); PK.initNav(); PK.initNavDropdowns(); PK.initDemoBanner(); PK.footerDisclaimer();
  var peptide = document.getElementById('compare-peptide'), currency = document.getElementById('compare-currency'), size = document.getElementById('compare-size'), coa = document.getElementById('compare-coa'), sort = document.getElementById('compare-sort'), output = document.getElementById('compare-results'), count = document.getElementById('compare-count');
  var params = new URLSearchParams(location.search);
  (PK.peptides || []).slice().sort(function(a,b){return a.name.localeCompare(b.name);}).forEach(function(p){var o=document.createElement('option');o.value=p.slug;o.textContent=p.name;peptide.appendChild(o);});
  if((PK.peptides||[]).some(function(p){return p.slug===params.get('peptide');}))peptide.value=params.get('peptide');
  if(['EUR','USD','GBP','CHF'].includes(params.get('currency')))currency.value=params.get('currency');
  function node(tag, cls, text) {var e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
  function baseRows(){return (PK.products||[]).filter(function(p){return p.peptid===peptide.value && p.waehrung===currency.value && PK.isComparableProduct(p) && PK.isActiveVendor(PK.vendorBySlug(p.vendor));});}
  function sizes(){var old=size.value;size.textContent='';var all=node('option','',PK.t('page.vergleich.allSizes'));all.value='';size.appendChild(all);Array.from(new Set(baseRows().map(function(p){return p.mg;}))).sort(function(a,b){return a-b;}).forEach(function(mg){var o=node('option','',PK.byNum(mg)+' mg');o.value=String(mg);size.appendChild(o);});if(Array.from(size.options).some(function(o){return o.value===old;}))size.value=old;}
  function render(){
    output.textContent='';
    if(!peptide.value){count.textContent=PK.t('page.vergleich.choosePrompt');return;}
    var rows=baseRows().filter(function(p){return (!size.value||p.mg===Number(size.value))&&(!coa.checked||p.coa===true);});
    rows.sort(function(a,b){var x=sort.value==='pack'?a.preis:a.preis/a.mg, y=sort.value==='pack'?b.preis:b.preis/b.mg;return x-y||a.vendor.localeCompare(b.vendor)||a.mg-b.mg;});
    count.textContent=rows.length?PK.t('page.vergleich.count',{n:rows.length,v:new Set(rows.map(function(p){return p.vendor;})).size}):PK.t('page.vergleich.empty');
    rows.forEach(function(p){
      var v=PK.vendorBySlug(p.vendor), article=node('article','vendor-card comparison-product');
      article.appendChild(PK.renderLogo(v,{tone:'text',size:'card'}));
      var heading=node('h2','card-title',v.name);article.appendChild(heading);
      if(v.partner)article.appendChild(node('span','pill pill-info',PK.t('global.partner')));
      article.appendChild(node('p','',PK.peptideBySlug(p.peptid).name+' · '+PK.byNum(p.mg)+' mg'));
      article.appendChild(node('p','comparison-price',PK.byNum(p.preis,{minimumFractionDigits:2,maximumFractionDigits:2})+' '+p.waehrung));
      article.appendChild(node('p','text-small',PK.byNum(p.preis/p.mg,{minimumFractionDigits:2,maximumFractionDigits:2})+' '+p.waehrung+'/mg'));
      article.appendChild(node('p','text-small',PK.t('page.vergleich.coaLabel')+': '+PK.t(p.coa===true?'page.vergleich.coaYes':p.coa===false?'page.vergleich.coaNo':'global.na')));
      var delivery=v.versand||{};
      article.appendChild(node('p','text-small',PK.t('page.vergleich.deliveryLabel')+': '+(typeof delivery.tageMin==='number'&&typeof delivery.tageMax==='number'?PK.t('page.vergleich.deliveryDays',{min:delivery.tageMin,max:delivery.tageMax}):PK.t('global.na'))));
      PK.appendDisclosure(article,PK.t('global.audit.priceNote',{date:p.datum||v.preisStand||PK.t('global.na')}));
      var actions=node('div','vendor-card-actions'), profile=node('a','btn-link',PK.t('global.vendorCard.details'));profile.href='anbieter/'+encodeURIComponent(v.slug)+'.html';actions.appendChild(profile);
      var href=PK.productHref(p,v);
      if(href){var shop=node('a','btn btn-secondary ext-link',PK.t(PK.validHttpUrl(p.url)?'page.vergleich.productLink':'global.vendorCard.shopLink'));shop.href=href;shop.target='_blank';shop.rel='sponsored nofollow noopener';shop.appendChild(node('span','badge-ad',PK.t('global.badge.ad')));actions.appendChild(shop);}
      article.appendChild(actions);
      if(v.partner){var code=PK.renderCodeBox(v);if(code)article.appendChild(code);}
      output.appendChild(article);
    });
    var url=new URL(location.href);url.searchParams.set('peptide',peptide.value);url.searchParams.set('currency',currency.value);history.replaceState(null,'',url);
  }
  [peptide,currency].forEach(function(el){el.addEventListener('change',function(){size.value='';sizes();render();});});
  [size,coa,sort].forEach(function(el){el.addEventListener('change',render);});
  document.addEventListener('pk:langchange',function(){sizes();render();});
  sizes();render();
})(window.PK);
