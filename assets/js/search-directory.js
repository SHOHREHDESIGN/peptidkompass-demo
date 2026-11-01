/* Progressive enhancement: all supplier records are readable without scripting. */
(function () {
  'use strict';
  var table=document.getElementById('sc-vendor-table');
  if(!table)return;
  var search=document.getElementById('sc-vendor-search');
  var status=document.getElementById('sc-vendor-status');
  var destination=document.getElementById('sc-vendor-destination');
  var rows=Array.from(table.querySelectorAll('tbody tr'));
  function render(){
    var count=0,term=search.value.trim().toLowerCase();
    rows.forEach(function(row){
      var active=row.dataset.vendorStatus==='aktiv';
      var show=row.dataset.vendorName.includes(term) && (status.value==='all'||(status.value==='aktiv'?active:!active)) && (destination.value==='all'||row.dataset.destinations.split(' ').includes(destination.value));
      row.hidden=!show;if(show)count++;
    });
    document.getElementById('sc-vendor-count').textContent=count+' of '+rows.length+' supplier records';
    document.getElementById('sc-vendor-empty').hidden=count!==0;
  }
  search.addEventListener('input',render);
  status.addEventListener('change',render);
  destination.addEventListener('change',render);
  document.getElementById('sc-vendor-reset').addEventListener('click',function(){search.value='';status.value='all';destination.value='all';render();});
  document.querySelector('[data-directory-controls]').hidden=false;
  render();
})();
