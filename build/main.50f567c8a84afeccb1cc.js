(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,l,a){},QfWi:function(n,l,a){"use strict";a.r(l);a("JBxO"),a("FdtR"),a("L1EO");var e=a("doM3"),t=a.n(e),o={cardContainer:document.querySelector("js-card-container")};fetch("https://restcountries.eu/rest/v2/name/ukraine").then((function(n){return n.json()})).then((function(n){console.log(n);var l=t()(n);console.log(l),o.cardContainer.innerHTML(l)})).catch((function(n){console.log(n)}))},doM3:function(n,l,a){var e=a("mp5j");n.exports=(e.default||e).template({1:function(n,l,a,e,t){var o,c=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"            <li>\r\n                "+n.escapeExpression("function"==typeof(o=null!=(o=c(a,"name")||(null!=l?c(l,"name"):l))?o:n.hooks.helperMissing)?o.call(null!=l?l:n.nullContext||{},{name:"name",hash:{},data:t,loc:{start:{line:10,column:16},end:{line:10,column:24}}}):o)+"\r\n            </li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,l,a,e,t){var o,c,r=null!=l?l:n.nullContext||{},i=n.hooks.helperMissing,u="function",s=n.escapeExpression,p=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<div class="card">\r\n    <div class="card-body">\r\n        <h1 class="card-title">'+s(typeof(c=null!=(c=p(a,"name")||(null!=l?p(l,"name"):l))?c:i)===u?c.call(r,{name:"name",hash:{},data:t,loc:{start:{line:3,column:31},end:{line:3,column:39}}}):c)+'</h1>\r\n        <p class="card-text">Capital: '+s(typeof(c=null!=(c=p(a,"capital")||(null!=l?p(l,"capital"):l))?c:i)===u?c.call(r,{name:"capital",hash:{},data:t,loc:{start:{line:4,column:38},end:{line:4,column:49}}}):c)+'</p>\r\n        <p class="card-text">Popuiation: '+s(typeof(c=null!=(c=p(a,"population")||(null!=l?p(l,"population"):l))?c:i)===u?c.call(r,{name:"population",hash:{},data:t,loc:{start:{line:5,column:41},end:{line:5,column:55}}}):c)+'</p>\r\n        <p class="card-text">Languages:</p>\r\n        <ul>\r\n'+(null!=(o=p(a,"each").call(r,null!=l?p(l,"languages"):l,{name:"each",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t,loc:{start:{line:8,column:12},end:{line:12,column:21}}}))?o:"")+'        </ul>\r\n    </div>\r\n\r\n    <div class="card -img">\r\n        <img src="'+s(typeof(c=null!=(c=p(a,"flag")||(null!=l?p(l,"flag"):l))?c:i)===u?c.call(r,{name:"flag",hash:{},data:t,loc:{start:{line:17,column:18},end:{line:17,column:26}}}):c)+'" alt="'+s(typeof(c=null!=(c=p(a,"name")||(null!=l?p(l,"name"):l))?c:i)===u?c.call(r,{name:"name",hash:{},data:t,loc:{start:{line:17,column:33},end:{line:17,column:41}}}):c)+'">\r\n    </div>\r\n\r\n</div>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.50f567c8a84afeccb1cc.js.map