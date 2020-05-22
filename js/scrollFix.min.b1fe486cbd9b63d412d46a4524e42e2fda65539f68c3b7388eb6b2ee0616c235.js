var scrollingKateX=(function(){var getComputedStyle=document.body&&document.body.currentStyle?function(elem){return elem.currentStyle;}:function(elem){return document.defaultView.getComputedStyle(elem,null);};function getActualCss(elem,style){return getComputedStyle(elem)[style];}
function isXScrollable(elem){return elem.offsetWidth<elem.scrollWidth&&autoOrScroll(getActualCss(elem,'overflow-x'));}
function isYScrollable(elem){return elem.offsetHeight<elem.scrollHeight&&autoOrScroll(getActualCss(elem,'overflow-y'));}
function autoOrScroll(text){return text=='scroll'||text=='auto';}
function hasScroller(elem){return isXScrollable(elem);}
return function(){return[].filter.call(document.querySelectorAll('.katex-display'),hasScroller);};})();var katexResizer=(function(){return function(){var tries=1000;var interval=setInterval(function(){if(tries===0){clearInterval(interval);}
var scrollingElems=scrollingKateX();if(scrollingElems){clearInterval(interval);scrollingElems.forEach(elem=>{var tag=elem.querySelector('.tag');if(tag&&tag.style){tag.style.setProperty('right','initial');}});}
--tries;},100);}})();katexResizer();window.addEventListener('resize',katexResizer);