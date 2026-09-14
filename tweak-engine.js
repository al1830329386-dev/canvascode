!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){u.label=c[1];break}if(6===c[0]&&u.label<i[1]){u.label=i[1],i=c;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(c);break}i[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var r,i=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(r)});function o(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}var u=null;function c(t){return void 0===t&&(t={}),u||(u=t.includeStyleProperties?t.includeStyleProperties:o(window.getComputedStyle(document.documentElement)))}function a(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function s(t,e){void 0===e&&(e={});var n,r,i,o=e.width||(r=a(n=t,"border-left-width"),i=a(n,"border-right-width"),n.clientWidth+r+i),u=e.height||function(t){var e=a(t,"border-top-width"),n=a(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:o,height:u}}var l=16384;function f(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i),u=0;u<i;u+=1)o[u]=r.charCodeAt(u);n(new Blob([o],{type:e.type?e.type:"image/png"}))}))}function h(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){r.decode().then((function(){requestAnimationFrame((function(){return e(r)}))}))},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function d(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function v(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u;return n(this,(function(n){return e="http://www.w3.org/2000/svg",o=document.createElementNS(e,"svg"),u=document.createElementNS(e,"foreignObject"),o.setAttribute("width","".concat(r)),o.setAttribute("height","".concat(i)),o.setAttribute("viewBox","0 0 ".concat(r," ").concat(i)),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("externalResourcesRequired","true"),o.appendChild(u),u.appendChild(t),[2,d(o)]}))}))}var p=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||p(n,e))};function g(t,e,n,r){var i=".".concat(t,":").concat(e),o=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t,e){return c(e).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n,r);return document.createTextNode("".concat(i,"{").concat(o,"}"))}function m(t,e,n,r){var o=window.getComputedStyle(t,n),u=o.getPropertyValue("content");if(""!==u&&"none"!==u){var c=i();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var a=document.createElement("style");a.appendChild(g(c,n,o,r)),e.appendChild(a)}}var w="application/font-woff",y="image/jpeg",b={woff:w,woff2:w,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:y,jpeg:y,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function S(t){var e=function(t){var e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return b[e]||""}function E(t){return-1!==t.search(/^(data:)/)}function x(t,e){return"data:".concat(e,";base64,").concat(t)}function C(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,r)];case 1:if(404===(e=n.sent()).status)throw new Error('Resource "'.concat(e.url,'" not found'));return[4,e.blob()];case 2:return o=n.sent(),[2,new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(){try{t(i({res:e,result:r.result}))}catch(t){n(t)}},r.readAsDataURL(o)}))]}}))}))}var P={};function R(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u,c,a;return n(this,(function(n){switch(n.label){case 0:if(e=function(t,e,n){var r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?"[".concat(e,"]").concat(r):r}(t,r,i.includeQueryParams),null!=P[e])return[2,P[e]];i.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime()),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,C(t,i.fetchRequestInit,(function(t){var e=t.res,n=t.result;return r||(r=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return u=n.sent(),o=x(u,r),[3,4];case 3:return c=n.sent(),o=i.imagePlaceholder||"",a="Failed to fetch resource: ".concat(t),c&&(a="string"==typeof c?c:c.message),a&&console.warn(a),[3,4];case 4:return P[e]=o,[2,o]}}))}))}function T(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,h(e)]}))}))}function A(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return t.currentSrc?(e=document.createElement("canvas"),i=e.getContext("2d"),e.width=t.clientWidth,e.height=t.clientHeight,null==i||i.drawImage(t,0,0,e.width,e.height),[2,h(e.toDataURL())]):(o=t.poster,u=S(o),[4,R(o,u,r)]);case 1:return[2,h(n.sent())]}}))}))}function k(t,r){var i;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null===(i=null==t?void 0:t.contentDocument)||void 0===i?void 0:i.body)?[4,I(t.contentDocument.body,r,!0)]:[3,2];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return e.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var L=function(t){return null!=t.tagName&&"SVG"===t.tagName.toUpperCase()};function N(t,e,n){return p(e,Element)&&(function(t,e,n){var r=e.style;if(r){var i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):c(n).forEach((function(n){var o=i.getPropertyValue(n);if("font-size"===n&&o.endsWith("px")){var u=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o="".concat(u,"px")}p(t,HTMLIFrameElement)&&"display"===n&&"inline"===o&&(o="block"),"d"===n&&e.getAttribute("d")&&(o="path(".concat(e.getAttribute("d"),")")),r.setProperty(n,o,i.getPropertyPriority(n))}))}}(t,e,n),function(t,e,n){m(t,e,":before",n),m(t,e,":after",n)}(t,e,n),function(t,e){p(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),p(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(p(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function I(t,r,i){return e(this,void 0,void 0,(function(){return n(this,(function(u){return i||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return p(t,HTMLCanvasElement)?[2,T(t)]:p(t,HTMLVideoElement)?[2,A(t,r)]:p(t,HTMLIFrameElement)?[2,k(t,r)]:[2,t.cloneNode(L(t))]}))}))}(t,r)})).then((function(i){return function(t,r,i){var u,c;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return L(r)?[2,r]:(e=[],0===(e=null!=(a=t).tagName&&"SLOT"===a.tagName.toUpperCase()&&t.assignedNodes?o(t.assignedNodes()):p(t,HTMLIFrameElement)&&(null===(u=t.contentDocument)||void 0===u?void 0:u.body)?o(t.contentDocument.body.childNodes):o((null!==(c=t.shadowRoot)&&void 0!==c?c:t).childNodes)).length||p(t,HTMLVideoElement)?[2,r]:[4,e.reduce((function(t,e){return t.then((function(){return I(e,i)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve())]);case 1:return n.sent(),[2,r]}var a}))}))}(t,i,r)})).then((function(e){return N(t,e,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c,a,s,l,f,h,d,v,p;return n(this,(function(n){switch(n.label){case 0:if(0===(e=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];i={},p=0,n.label=1;case 1:return p<e.length?(o=e[p],(u=o.getAttribute("xlink:href"))?(c=t.querySelector(u),a=document.querySelector(u),c||!a||i[u]?[3,3]:(s=i,l=u,[4,I(a,r,!0)])):[3,3]):[3,4];case 2:s[l]=n.sent(),n.label=3;case 3:return p++,[3,1];case 4:if((f=Object.values(i)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),p=0;p<f.length;p++)v.appendChild(f[p]);t.appendChild(d)}return[2,t]}}))}))}(t,r)}))]:[2,null]}))}))}var D=/url\((['"]?)([^'"]+?)\1\)/g,H=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,M=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function F(t,r,i,o,u){return e(this,void 0,void 0,(function(){var e,c,a,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),e=i?function(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}(r,i):r,c=S(r),a=void 0,u?[4,u(e)]:[3,2];case 1:return s=n.sent(),a=x(s,c),[3,4];case 2:return[4,R(e,c,o)];case 3:a=n.sent(),n.label=4;case 4:return[2,t.replace((l=r,f=l.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1"),new RegExp("(url\\(['\"]?)(".concat(f,")(['\"]?\\))"),"g")),"$1".concat(a,"$3"))];case 5:return n.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function V(t){return-1!==t.search(D)}function q(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return V(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(M,(function(t){for(;;){var e=H.exec(t)||[],r=e[0],i=e[2];if(!i)return"";if(i===n)return"src: ".concat(r,";")}})):t}(t,i),o=function(t){var e=[];return t.replace(D,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!E(t)}))}(e),[2,o.reduce((function(t,e){return t.then((function(t){return F(t,e,r,i)}))}),Promise.resolve(e))]):[2,t]}))}))}function U(t,r,i){var o;return e(this,void 0,void 0,(function(){var e,u;return n(this,(function(n){switch(n.label){case 0:return(e=null===(o=r.style)||void 0===o?void 0:o.getPropertyValue(t))?[4,q(e,null,i)]:[3,2];case 1:return u=n.sent(),r.style.setProperty(t,u,r.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function j(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,U("background",t,r)];case 1:return n.sent()?[3,3]:[4,U("background-image",t,r)];case 2:n.sent(),n.label=3;case 3:return[4,U("mask",t,r)];case 4:return(i=n.sent())?[3,6]:[4,U("-webkit-mask",t,r)];case 5:i=n.sent(),n.label=6;case 6:return(e=i)?[3,8]:[4,U("mask-image",t,r)];case 7:e=n.sent(),n.label=8;case 8:return e?[3,10]:[4,U("-webkit-mask-image",t,r)];case 9:n.sent(),n.label=10;case 10:return[2]}}))}))}function O(t,r){return e(this,void 0,void 0,(function(){var e,i,o;return n(this,(function(n){switch(n.label){case 0:return(e=p(t,HTMLImageElement))&&!E(t.src)||p(t,SVGImageElement)&&!E(t.href.baseVal)?[4,R(i=e?t.src:t.href.baseVal,S(i),r)]:[2];case 1:return o=n.sent(),[4,new Promise((function(n,i){t.onload=n,t.onerror=r.onImageErrorHandler?function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{n(r.onImageErrorHandler.apply(r,t))}catch(t){i(t)}}:i;var u=t;u.decode&&(u.decode=n),"lazy"===u.loading&&(u.loading="eager"),e?(t.srcset="",t.src=o):t.href.baseVal=o}))];case 2:return n.sent(),[2]}}))}))}function B(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return e=o(t.childNodes),i=e.map((function(t){return z(t,r)})),[4,Promise.all(i).then((function(){return t}))];case 1:return n.sent(),[2]}}))}))}function z(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return p(t,Element)?[4,j(t,r)]:[3,4];case 1:return e.sent(),[4,O(t,r)];case 2:return e.sent(),[4,B(t,r)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}var W={};function $(t){return e(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return null!=(e=W[t])?[2,e]:[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return r=n.sent(),e={url:t,cssText:r},W[t]=e,[2,e]}}))}))}function G(t,r){return e(this,void 0,void 0,(function(){var i,o,u,c,a=this;return n(this,(function(s){return i=t.cssText,o=/url\(["']?([^"')]+)["']?\)/g,u=i.match(/url\([^)]+\)/g)||[],c=u.map((function(u){return e(a,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=u.replace(o,"$1")).startsWith("https://")||(e=new URL(e,t.url).href),[2,C(e,r.fetchRequestInit,(function(t){var e=t.result;return i=i.replace(u,"url(".concat(e,")")),[u,e]}))]}))}))})),[2,Promise.all(c).then((function(){return i}))]}))}))}function _(t){if(null==t)return[];for(var e=[],n=t.replace(/(\/\*[\s\S]*?\*\/)/gi,""),r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");;){if(null===(u=r.exec(n)))break;e.push(u[0])}n=n.replace(r,"");for(var i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,o=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");;){var u;if(null===(u=i.exec(n))){if(null===(u=o.exec(n)))break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(u[0])}return e}function J(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return e=[],i=[],t.forEach((function(e){if("cssRules"in e)try{o(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var o=n+1,u=$(t.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?o+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));i.push(u)}}))}catch(o){var n=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href&&i.push($(e.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){n.insertRule(t,n.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",o)}})),[2,Promise.all(i).then((function(){return t.forEach((function(t){if("cssRules"in t)try{o(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),e}))]}))}))}function Q(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return V(t.style.getPropertyValue("src"))}))}function X(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,J(o(t.ownerDocument.styleSheets),r)];case 1:return[2,Q(e.sent())]}}))}))}function K(t){return t.trim().replace(/["']/g,"")}function Y(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,X(t,r)];case 1:return e=n.sent(),i=function(t){var e=new Set;return function t(n){(n.style.fontFamily||getComputedStyle(n).fontFamily).split(",").forEach((function(t){e.add(K(t))})),Array.from(n.children).forEach((function(e){e instanceof HTMLElement&&t(e)}))}(t),e}(t),[4,Promise.all(e.filter((function(t){return i.has(K(t.style.fontFamily))})).map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return q(t.cssText,e,r)})))];case 2:return[2,n.sent().join("\n")]}}))}))}function Z(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c;return n(this,(function(n){switch(n.label){case 0:return null==r.fontEmbedCSS?[3,1]:(i=r.fontEmbedCSS,[3,5]);case 1:return r.skipFonts?(o=null,[3,4]):[3,2];case 2:return[4,Y(t,r)];case 3:o=n.sent(),n.label=4;case 4:i=o,n.label=5;case 5:return(e=i)&&(u=document.createElement("style"),c=document.createTextNode(e),u.appendChild(c),t.firstChild?t.insertBefore(u,t.firstChild):t.appendChild(u)),[2]}}))}))}function tt(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,I(t,r,!0)];case 1:return[4,Z(u=n.sent(),r)];case 2:return n.sent(),[4,z(u,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(u,r),[4,v(u,i,o)];case 4:return[2,n.sent()]}}))}))}function et(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u,c,a,f,d,v;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,tt(t,r)];case 1:return[4,h(n.sent())];case 2:return u=n.sent(),c=document.createElement("canvas"),a=c.getContext("2d"),f=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=r.canvasWidth||i,v=r.canvasHeight||o,c.width=d*f,c.height=v*f,r.skipAutoScale||function(t){(t.width>l||t.height>l)&&(t.width>l&&t.height>l?t.width>t.height?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l):t.width>l?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l))}(c),c.style.width="".concat(d),c.style.height="".concat(v),r.backgroundColor&&(a.fillStyle=r.backgroundColor,a.fillRect(0,0,c.width,c.height)),a.drawImage(u,0,0,c.width,c.height),[2,c]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Y(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[4,f(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=et,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,et(t,r)];case 1:return u=n.sent(),[2,u.getContext("2d").getImageData(0,0,i,o).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL()]}}))}))},t.toSvg=tt}));
//# sourceMappingURL=html-to-image.js.map


/**
 * CanvasCode v1.0.0 — Turn Any Webpage into an Interactive Figma/PPT Canvas
 * Visual Micro-Adjustments & Multimodal AI Prompt Compiler
 * 
 * Copyright (C) 2026 Allen (and CanvasCode Contributors)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Design: Linear / macOS Glassmorphism (Shadow DOM 隔离沙箱)
 * Core Features:
 * 1. 元素点选与自由拖拽平移 (120 FPS 显卡加速 + 磁吸对齐辅助线)
 * 2. PPT / Figma 级 8 控制手柄自由拉伸变形与 Shift 等比缩放
 * 3. 完整撤销/重做栈 (支持 Ctrl+Z / Ctrl+Y / 界面按钮)
 * 4. 键盘方向键像素级微调 (↑ ↓ ← → 支持 1px / Shift+10px)
 * 5. 业务与交互需求批注 (Comments & Intent Notes)
 * 6. Tailwind CSS 智能类名替换与多模态 Prompt 一键生成
 */

(function () {
  const HOST_ID = "ai-visual-tweak-host";

  // Toggle off if already exists
  const existing = document.getElementById(HOST_ID);
  if (existing) {
    if (existing.style.display === "none") {
      existing.style.display = "block";
      window.__aiVisualTweakActive = true;
      if (window.__aiShowToast) window.__aiShowToast("✨ AI 视觉微调已重新唤醒");
    } else {
      existing.style.display = "none";
      window.__aiVisualTweakActive = false;
    }
    return;
  }

  window.__aiVisualTweakActive = true;

  // Create Host and ShadowRoot
  const host = document.createElement("div");
  host.id = HOST_ID;
  host.style.cssText = "position: absolute; top: 0; left: 0; width: 0; height: 0; z-index: 2147483647;";
  document.body.appendChild(host);
  const shadow = host.attachShadow({ mode: "open" });

  // Styles for Shadow DOM (Linear / macOS Glass Aesthetics)
  const style = document.createElement("style");
  style.textContent = `
    * { box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "PingFang SC", sans-serif; }

    /* Overlay highlighter */
    .hover-box {
      position: fixed; pointer-events: none; border: 2px dashed #6366f1; background: rgba(99, 102, 241, 0.08);
      z-index: 2147483640; transition: all 0.05s ease-out; display: none; border-radius: 6px;
    }
    .hover-tag {
      position: absolute; top: -26px; left: 0; background: #4f46e5; color: #fff; font-size: 11px;
      font-weight: 600; padding: 3px 8px; border-radius: 5px; white-space: nowrap;
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25); letter-spacing: 0.2px;
    }

    /* Selected Box */
    .select-box {
      position: fixed; pointer-events: none; border: 2px solid #3b82f6; background: rgba(59, 130, 246, 0.06);
      z-index: 2147483641; display: none; border-radius: 6px; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
    }

    /* Drag Handle */
    .drag-handle {
      position: absolute; top: -32px; left: 0; background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: #fff; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 6px;
      cursor: grab; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
      user-select: none; pointer-events: auto; white-space: nowrap; transition: transform 0.1s;
    }
    .drag-handle:active { cursor: grabbing; transform: scale(0.97); }
    .drag-snap-pill {
      background: rgba(255,255,255,0.22); padding: 1px 6px; border-radius: 4px; font-size: 10px;
      cursor: pointer; transition: background 0.1s;
    }
    .drag-snap-pill:hover { background: rgba(255,255,255,0.35); }

    /* 8 PPT/Figma Style Resize Handles */
    .resize-handle {
      position: absolute; width: 9px; height: 9px; background: #ffffff;
      border: 1.5px solid #2563eb; border-radius: 2px;
      pointer-events: auto; z-index: 2147483643; box-shadow: 0 1px 4px rgba(0,0,0,0.22);
      box-sizing: border-box; transition: transform 0.1s, background-color 0.1s;
    }
    .resize-handle:hover {
      background: #2563eb; transform: scale(1.4);
    }
    .resize-handle.handle-nw { top: -5px; left: -5px; cursor: nwse-resize; }
    .resize-handle.handle-n  { top: -5px; left: calc(50% - 4.5px); cursor: ns-resize; }
    .resize-handle.handle-ne { top: -5px; right: -5px; cursor: nesw-resize; }
    .resize-handle.handle-e  { top: calc(50% - 4.5px); right: -5px; cursor: ew-resize; }
    .resize-handle.handle-se { bottom: -5px; right: -5px; cursor: nwse-resize; }
    .resize-handle.handle-s  { bottom: -5px; left: calc(50% - 4.5px); cursor: ns-resize; }
    .resize-handle.handle-sw { bottom: -5px; left: -5px; cursor: nesw-resize; }
    .resize-handle.handle-w  { top: calc(50% - 4.5px); left: -5px; cursor: ew-resize; }

    .tb-toggle-btn {
      font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 6px;
      border: 1px solid #cbd5e1; background: rgba(248, 250, 252, 0.9); color: #64748b; cursor: pointer;
      display: flex; align-items: center; gap: 3px; transition: all 0.15s; user-select: none;
      white-space: nowrap; flex-shrink: 0; line-height: 1.2;
    }
    .tb-toggle-btn.active {
      background: #e0e7ff; border-color: #a5b4fc; color: #4338ca; box-shadow: 0 1px 3px rgba(99,102,241,0.15);
    }
    .tb-toggle-btn:hover { border-color: #818cf8; }

    /* Alignment Smart Guide Lines */
    .guide-line {
      position: fixed; pointer-events: none; z-index: 2147483644; display: none;
    }
    .guide-line.vertical {
      width: 1px; top: 0; bottom: 0; border-left: 1.5px dashed #f43f5e; box-shadow: 0 0 6px rgba(244, 63, 94, 0.6);
    }
    .guide-line.horizontal {
      height: 1px; left: 0; right: 0; border-top: 1.5px dashed #f43f5e; box-shadow: 0 0 6px rgba(244, 63, 94, 0.6);
    }
    .guide-badge {
      position: absolute; background: #f43f5e; color: #fff; font-size: 10px; font-weight: 700; padding: 2px 6px;
      border-radius: 4px; white-space: nowrap; pointer-events: none; box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }

    /* Floating Toolbar (Glassmorphism) */
    .toolbar {
      position: fixed; z-index: 2147483646; background: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);
      color: #0f172a; border-radius: 16px; padding: 14px 16px;
      box-shadow: 0 20px 40px -15px rgba(0,0,0,0.18), 0 0 0 1px rgba(226, 232, 240, 0.85);
      display: none; flex-direction: column; gap: 10px; width: 360px; font-size: 13px;
      animation: fadeIn 0.15s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

    .tb-header {
      display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(226, 232, 240, 0.7);
      padding-bottom: 8px; cursor: move; user-select: none; gap: 8px;
    }
    .tb-title-group { display: flex; align-items: center; gap: 6px; flex: 1; min-width: 0; overflow: hidden; }
    .tb-tag-badge { background: #e0e7ff; color: #4338ca; font-size: 11px; font-weight: 700; padding: 2px 6px; border-radius: 4px; flex-shrink: 0; }
    .tb-title { font-weight: 700; color: #0f172a; font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; min-width: 0; }

    .tb-actions-top { display: flex; align-items: center; gap: 4px; flex-shrink: 0; white-space: nowrap; }
    .tb-icon-btn {
      cursor: pointer; color: #64748b; font-size: 13px; padding: 3px 6px; border-radius: 6px;
      background: transparent; border: none; transition: all 0.1s; display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .tb-icon-btn:hover { color: #0f172a; background: rgba(0,0,0,0.06); }
    .tb-icon-btn:disabled { opacity: 0.35; cursor: not-allowed; }

    /* Control Rows */
    .tb-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .tb-label { font-size: 12px; color: #64748b; font-weight: 600; min-width: 55px; }
    .tb-group { display: flex; gap: 5px; align-items: center; flex-wrap: wrap; }

    .tb-btn {
      background: rgba(248, 250, 252, 0.9); border: 1px solid #e2e8f0; border-radius: 7px; padding: 4px 8px;
      font-size: 12px; cursor: pointer; color: #334155; transition: all 0.1s; font-weight: 500; user-select: none;
    }
    .tb-btn:hover { background: #e0e7ff; border-color: #c7d2fe; color: #4338ca; }
    .tb-btn:active { transform: scale(0.96); }
    .tb-btn-danger:hover { background: #fee2e2; border-color: #fca5a5; color: #dc2626; }

    .color-swatch { width: 19px; height: 19px; border-radius: 50%; border: 1px solid rgba(0,0,0,0.12); cursor: pointer; flex-shrink: 0; transition: transform 0.1s; }
    .color-swatch:hover { transform: scale(1.2); }

    /* Comment textarea */
    .tb-comment-box {
      margin-top: 2px; padding-top: 8px; border-top: 1px dashed rgba(226, 232, 240, 0.8); display: flex; flex-direction: column; gap: 5px;
    }
    .tb-comment-title { font-size: 11px; font-weight: 700; color: #475569; display: flex; justify-content: space-between; }
    .tb-comment-input {
      width: 100%; border: 1px solid #cbd5e1; border-radius: 8px; padding: 7px 10px; font-size: 12px; resize: vertical; min-height: 48px;
      outline: none; background: #f8fafc; transition: all 0.15s; line-height: 1.4;
    }
    .tb-comment-input:focus { border-color: #6366f1; background: #fff; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }

    /* Bottom Global Dock (Pill & Panel) */
    .dock {
      position: fixed; bottom: 24px; right: 24px; z-index: 2147483645; display: flex; flex-direction: column;
      align-items: flex-end; gap: 10px;
    }

    .dock-pill {
      background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #fff; padding: 11px 20px;
      border-radius: 9999px; font-weight: 600; font-size: 13px; box-shadow: 0 10px 28px rgba(79, 70, 229, 0.4);
      cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
      user-select: none;
    }
    .dock-pill:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(79, 70, 229, 0.5); }
    .dock-pill:active { transform: translateY(0); }
    .dock-badge {
      background: #f43f5e; color: #fff; font-size: 11px; padding: 1px 7px; border-radius: 9999px; font-weight: 700;
    }

    .dock-panel {
      background: rgba(255, 255, 255, 0.94); backdrop-filter: blur(24px) saturate(180%);
      width: 380px; max-height: 540px; border-radius: 18px; box-shadow: 0 24px 48px -12px rgba(0,0,0,0.2), 0 0 0 1px rgba(226, 232, 240, 0.9);
      display: none; flex-direction: column; overflow: hidden; animation: fadeIn 0.15s ease-out;
    }

    .panel-header {
      padding: 14px 18px; background: rgba(248, 250, 252, 0.8); border-bottom: 1px solid #e2e8f0; display: flex;
      justify-content: space-between; align-items: center;
    }
    .panel-header h3 { margin: 0; font-size: 14px; font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 6px; }
    
    .panel-list {
      padding: 14px 18px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; flex: 1; max-height: 320px;
    }
    .empty-state { text-align: center; color: #94a3b8; font-size: 13px; padding: 28px 0; line-height: 1.6; }

    .diff-item {
      background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 12px; font-size: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.02);
    }
    .diff-item-title { font-weight: 600; color: #1e293b; margin-bottom: 5px; display: flex; justify-content: space-between; }
    .diff-prop { color: #64748b; margin-left: 6px; font-family: monospace; font-size: 11px; }
    .diff-tw { background: #ede9fe; color: #6d28d9; padding: 1px 6px; border-radius: 4px; font-size: 10px; margin-left: 5px; font-weight: 600; }
    .diff-comment { margin-top: 6px; padding: 5px 8px; background: #fffbeb; color: #b45309; border-radius: 6px; font-size: 11px; border: 1px solid #fef3c7; }

    .panel-actions {
      padding: 14px 18px; border-top: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 8px; background: rgba(255, 255, 255, 0.95);
    }
    .btn-primary {
      background: linear-gradient(135deg, #4f46e5, #6366f1); color: #fff; border: none; border-radius: 10px; padding: 11px 14px;
      font-weight: 600; font-size: 13px; cursor: pointer; text-align: center; transition: all 0.15s;
      display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
    }
    .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(79, 70, 229, 0.35); }
    .btn-primary:active { transform: translateY(0); }

    .btn-sub {
      background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; border-radius: 8px; padding: 7px 12px;
      font-weight: 500; font-size: 12px; cursor: pointer; text-align: center; transition: all 0.1s;
    }
    .btn-sub:hover { background: #e2e8f0; color: #0f172a; }

    /* Toast */
    .toast {
      position: fixed; top: 24px; left: 50%; transform: translateX(-50%); background: rgba(15, 23, 42, 0.92);
      backdrop-filter: blur(12px); color: #fff; padding: 10px 22px; border-radius: 9999px; font-size: 13px;
      font-weight: 600; z-index: 2147483647; display: none; box-shadow: 0 10px 28px rgba(0,0,0,0.25);
      animation: toastAnim 0.2s cubic-bezier(0.16, 1, 0.3, 1); letter-spacing: 0.2px;
    }
    @keyframes toastAnim { from { opacity: 0; transform: translate(-50%, -10px); } to { opacity: 1; transform: translate(-50%, 0); } }

    
    /* Screenshot Modal */
    .modal-backdrop {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(15, 23, 42, 0.65); backdrop-filter: blur(8px);
      z-index: 2147483647; display: none; align-items: center; justify-content: center;
      padding: 20px; animation: fadeIn 0.15s ease-out;
    }
    .modal-card {
      background: #ffffff; width: 100%; max-width: 640px; max-height: 90vh; border-radius: 20px;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3); display: flex; flex-direction: column; overflow: hidden;
      animation: zoomIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes zoomIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
    .modal-header {
      padding: 14px 20px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; display: flex;
      justify-content: space-between; align-items: center;
    }
    .modal-header h3 { margin: 0; font-size: 14px; font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 8px; }
    .modal-body {
      padding: 18px 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 14px;
    }
    .img-preview-box {
      width: 100%; max-height: 280px; border-radius: 12px; border: 1px solid #e2e8f0;
      background: #f1f5f9; overflow: hidden; display: flex; align-items: center; justify-content: center;
    }
    .img-preview-box img {
      max-width: 100%; max-height: 280px; object-fit: contain;
    }
    .prompt-preview-box {
      background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 12px;
      font-size: 11px; font-family: monospace; color: #334155; max-height: 100px; overflow-y: auto;
      white-space: pre-wrap; line-height: 1.4;
    }
    .modal-footer {
      padding: 12px 20px; border-top: 1px solid #e2e8f0; background: #f8fafc; display: flex;
      justify-content: space-between; align-items: center; gap: 8px; flex-wrap: wrap;
    }

    /* Keyboard Fine-Tune HUD */
    .tune-hud {
      position: fixed; bottom: 84px; right: 24px; background: rgba(15, 23, 42, 0.88); backdrop-filter: blur(8px);
      color: #38bdf8; font-family: monospace; font-size: 11px; font-weight: 600; padding: 5px 10px; border-radius: 6px;
      z-index: 2147483645; display: none; pointer-events: none;
    }
  `;
  shadow.appendChild(style);

  // Overlay Highlighter
  const hoverBox = document.createElement("div");
  hoverBox.className = "hover-box";
  const hoverTag = document.createElement("div");
  hoverTag.className = "hover-tag";
  hoverBox.appendChild(hoverTag);
  shadow.appendChild(hoverBox);

  // Selected Box & Drag Handle & 8 PPT-style Resize Handles
  const selectBox = document.createElement("div");
  selectBox.className = "select-box";
  const dragHandle = document.createElement("div");
  dragHandle.className = "drag-handle";
  dragHandle.innerHTML = `<span>✥ 拖拽 (吸附对齐)</span>`;
  selectBox.appendChild(dragHandle);

  const resizeHandleDirs = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
  resizeHandleDirs.forEach(dir => {
    const handle = document.createElement("div");
    handle.className = `resize-handle handle-${dir}`;
    handle.dataset.direction = dir;
    handle.title = "按住拖拽拉伸尺寸 (Shift 等比缩放)";
    selectBox.appendChild(handle);
  });

  shadow.appendChild(selectBox);

  // Smart Guide Lines
  const guideV = document.createElement("div");
  guideV.className = "guide-line vertical";
  const guideVBadge = document.createElement("div");
  guideVBadge.className = "guide-badge";
  guideV.appendChild(guideVBadge);
  shadow.appendChild(guideV);

  const guideH = document.createElement("div");
  guideH.className = "guide-line horizontal";
  const guideHBadge = document.createElement("div");
  guideHBadge.className = "guide-badge";
  guideH.appendChild(guideHBadge);
  shadow.appendChild(guideH);

  // Floating Element Toolbar
  const toolbar = document.createElement("div");
  toolbar.className = "toolbar";
  shadow.appendChild(toolbar);

  // Keyboard Fine-Tune HUD
  const tuneHud = document.createElement("div");
  tuneHud.className = "tune-hud";
  shadow.appendChild(tuneHud);

  // Global Dock Panel
  const dock = document.createElement("div");
  dock.className = "dock";
  dock.innerHTML = `
    <div class="dock-panel" id="dock-panel">
      <div class="panel-header">
        <h3>✨ CanvasCode 视觉规格书</h3>
        <div style="display:flex;gap:6px;align-items:center;">
          <button class="tb-icon-btn" id="dock-undo" title="撤销 (Ctrl+Z)">↩️</button>
          <button class="tb-icon-btn" id="dock-redo" title="重做 (Ctrl+Y)">↪️</button>
          <button class="tb-icon-btn" id="panel-close">✕</button>
        </div>
      </div>
      <div class="panel-list" id="panel-list">
        <div class="empty-state">
          鼠标点击页面任意组件开始微调<br/>
          <span style="font-size:11px;color:#cbd5e1">按住拖拽柄吸附 · 8个手柄自由拉伸尺寸 · 方向键微调</span>
        </div>
      </div>
      <div class="panel-actions">
        <button class="btn-primary" id="btn-copy-prompt">📋 一键复制 AI 修改指令 (Prompt)</button>
        <button class="btn-primary" style="background: linear-gradient(135deg, #0284c7, #2563eb);" id="btn-screenshot-all">📸 一键截图 + 图文一体导出</button>
        <div style="display: flex; gap: 8px;">
          <button class="btn-sub" style="flex:1" id="btn-reset-all">🔄 全部还原</button>
          <button class="btn-sub" style="flex:1" id="btn-exit">❌ 退出模式</button>
        </div>
      </div>
    </div>
    <div class="dock-pill" id="dock-pill">
      <span>✨ CanvasCode</span>
      <span class="dock-badge" id="dock-count" style="display:none">0</span>
    </div>
  `;
  shadow.appendChild(dock);

  // Screenshot Modal
  const modalBackdrop = document.createElement("div");
  modalBackdrop.className = "modal-backdrop";
  modalBackdrop.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <h3>📸 视觉改动截图与 Prompt 打包</h3>
        <span class="tb-close" id="modal-close">✕</span>
      </div>
      <div class="modal-body">
        <div style="font-size:12px;color:#64748b;line-height:1.5;">
          ✨ 已成功将页面当前调整后的视觉状态截图！你可以直接复制图片或保存文件，连同下方 Prompt 发送给 <strong>AI 编程助手</strong>，实现多模态精准编程！
        </div>
        <div class="img-preview-box">
          <img id="modal-img-preview" src="" alt="Screenshot" />
        </div>
        <div style="font-size:11px;font-weight:700;color:#475569;">📋 结构化修改指令 (Prompt 摘要)：</div>
        <div class="prompt-preview-box" id="modal-prompt-preview"></div>
      </div>
      <div class="modal-footer">
        <div style="display:flex;gap:6px;">
          <button class="btn-primary" style="padding:7px 12px;font-size:12px;" id="modal-copy-img">📋 复制图片</button>
          <button class="btn-sub" id="modal-download-img">💾 下载图片</button>
          <button class="btn-sub" id="modal-copy-text">📋 复制文字 Prompt</button>
        </div>
        <button class="btn-sub" id="modal-close-btn">完成</button>
      </div>
    </div>
  `;
  shadow.appendChild(modalBackdrop);


  // Toast
  const toast = document.createElement("div");
  toast.className = "toast";
  shadow.appendChild(toast);

  function showToast(msg) {
    toast.textContent = msg;
    toast.style.display = "block";
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => { toast.style.display = "none"; }, 2600);
  }
  window.__aiShowToast = showToast;

  // --- STATE ---
  let hoveredEl = null;
  let selectedEl = null;
  let isSnapEnabled = true; // Magnetic Snapping Toggle (true = Snap on, false = Freeform)
  const changes = new Map(); // el -> { selector, text, existingClasses, mods: {}, comment: "", dragOffset: {x,y} }

  function updateSnapUI() {
    if (dragHandle) {
      dragHandle.innerHTML = `<span>✥ 拖拽</span> <span class="drag-snap-pill" id="drag-snap-pill" title="点击切换磁吸对齐">${isSnapEnabled ? '🧲吸附开' : '🕊️自由'}</span>`;
      const pill = dragHandle.querySelector("#drag-snap-pill");
      if (pill) {
        pill.onmousedown = (e) => e.stopPropagation();
        pill.onclick = (e) => {
          e.stopPropagation();
          toggleSnap();
        };
      }
    }
    const tbBtn = shadow.getElementById("tb-toggle-snap");
    if (tbBtn) {
      tbBtn.className = `tb-toggle-btn ${isSnapEnabled ? 'active' : ''}`;
      tbBtn.innerHTML = isSnapEnabled ? `🧲 磁吸开` : `🕊️ 自由拖`;
    }
  }

  function toggleSnap() {
    isSnapEnabled = !isSnapEnabled;
    updateSnapUI();
    showToast(isSnapEnabled ? "🧲 磁吸吸附已开启 (靠近元素自动对齐)" : "🕊️ 自由拖拽已开启 (磁吸辅助线已关闭)");
  }

  // --- UNDO / REDO HISTORY SYSTEM ---
  const undoStack = [];
  const redoStack = [];

  function pushHistory(action) {
    undoStack.push(action);
    redoStack.length = 0; // Clear redo on new action
    updateHistoryButtons();
  }

  function undo() {
    if (undoStack.length === 0) {
      showToast("ℹ️ 没有可以撤销的操作了");
      return;
    }
    const action = undoStack.pop();
    redoStack.push(action);

    applyAction(action, true);
    updateHistoryButtons();
    updateDock();
    updateSelection();
    showToast(`↩️ 已撤销: ${action.label || '操作'}`);
  }

  function redo() {
    if (redoStack.length === 0) {
      showToast("ℹ️ 没有可以重做的操作了");
      return;
    }
    const action = redoStack.pop();
    undoStack.push(action);

    applyAction(action, false);
    updateHistoryButtons();
    updateDock();
    updateSelection();
    showToast(`↪️ 已重做: ${action.label || '操作'}`);
  }

  function applyAction(action, isUndo) {
    const el = action.el;
    if (!el || !el.isConnected) return;

    if (action.type === "style") {
      const val = isUndo ? action.prevVal : action.nextVal;
      el.style[action.prop] = val || "";
      const entry = initChangeEntry(el);
      if (isUndo && !action.prevVal) {
        delete entry.mods[action.prop];
        if (Object.keys(entry.mods).length === 0 && !entry.comment) changes.delete(el);
      } else {
        entry.mods[action.prop] = {
          original: action.original,
          current: val,
          label: action.label,
          tailwind: action.tailwind
        };
      }
    } else if (action.type === "drag") {
      const t = isUndo ? action.prevTranslate : action.nextTranslate;
      el.style.transform = (t.x === 0 && t.y === 0) ? "" : `translate3d(${t.x}px, ${t.y}px, 0)`;
      const entry = initChangeEntry(el);
      if (isUndo && t.x === 0 && t.y === 0) {
        delete entry.mods["transform"];
        entry.dragOffset = null;
        if (Object.keys(entry.mods).length === 0 && !entry.comment) changes.delete(el);
      } else {
        entry.dragOffset = { dx: t.x, dy: t.y, snapNote: action.snapNote };
        entry.mods["transform"] = {
          original: "none",
          current: `translate(${t.x}px, ${t.y}px)`,
          label: `位移 (${t.x > 0 ? '+' : ''}${t.x}px, ${t.y > 0 ? '+' : ''}${t.y}px)`,
          tailwind: `translate-x-[${t.x}px] translate-y-[${t.y}px]`,
          snapNote: action.snapNote || ""
        };
      }
    } else if (action.type === "comment") {
      const val = isUndo ? action.prevVal : action.nextVal;
      const entry = initChangeEntry(el);
      entry.comment = val;
      const fld = shadow.getElementById("tb-comment-field");
      if (fld && selectedEl === el) fld.value = val;
    } else if (action.type === "resize") {
      const w = isUndo ? action.prevWidth : action.nextWidth;
      const h = isUndo ? action.prevHeight : action.nextHeight;
      const t = isUndo ? action.prevTranslate : action.nextTranslate;
      el.style.width = w || "";
      el.style.height = h || "";
      if (t) {
        el.style.transform = (t.x === 0 && t.y === 0) ? "" : `translate3d(${t.x}px, ${t.y}px, 0)`;
      }
      const entry = initChangeEntry(el);
      if (isUndo && !action.prevWidth && !action.prevHeight) {
        delete entry.mods["width"];
        delete entry.mods["height"];
        if (Object.keys(entry.mods).length === 0 && !entry.comment) changes.delete(el);
      } else {
        if (w) {
          entry.mods["width"] = {
            original: action.origWidth || "auto",
            current: w,
            label: `宽度拉伸 (${w})`,
            tailwind: `w-[${w}]`
          };
        }
        if (h) {
          entry.mods["height"] = {
            original: action.origHeight || "auto",
            current: h,
            label: `高度拉伸 (${h})`,
            tailwind: `h-[${h}]`
          };
        }
      }
    }
  }

  function updateHistoryButtons() {
    const dockUndo = shadow.getElementById("dock-undo");
    const dockRedo = shadow.getElementById("dock-redo");
    if (dockUndo) dockUndo.disabled = undoStack.length === 0;
    if (dockRedo) dockRedo.disabled = redoStack.length === 0;

    const tbUndo = shadow.getElementById("tb-undo");
    const tbRedo = shadow.getElementById("tb-redo");
    if (tbUndo) tbUndo.disabled = undoStack.length === 0;
    if (tbRedo) tbRedo.disabled = redoStack.length === 0;
  }

  // --- TAILWIND MAPPER ---
  const TAILWIND_COLOR_MAP = {
    "#10b981": { name: "清新绿", bg: "bg-emerald-500", text: "text-emerald-500" },
    "#3b82f6": { name: "科技蓝", bg: "bg-blue-500", text: "text-blue-500" },
    "#8b5cf6": { name: "优雅紫", bg: "bg-purple-500", text: "text-purple-500" },
    "#f43f5e": { name: "珊瑚红", bg: "bg-rose-500", text: "text-rose-500" },
    "#0f172a": { name: "暗黑", bg: "bg-slate-900", text: "text-slate-900" },
    "#ffffff": { name: "纯白", bg: "bg-white", text: "text-white" },
    "transparent": { name: "透明", bg: "bg-transparent", text: "" }
  };

  function getTailwindHint(prop, val) {
    if (prop === "backgroundColor") {
      if (TAILWIND_COLOR_MAP[val]) return TAILWIND_COLOR_MAP[val].bg;
      return `bg-[${val}]`;
    }
    if (prop === "color") {
      if (TAILWIND_COLOR_MAP[val]) return TAILWIND_COLOR_MAP[val].text;
      return `text-[${val}]`;
    }
    if (prop === "borderRadius") {
      if (val === "9999px") return "rounded-full";
      if (val === "16px") return "rounded-2xl";
      if (val === "8px") return "rounded-lg";
      if (val === "0px") return "rounded-none";
    }
    if (prop === "width" && val === "100%") return "w-full";
    if (prop === "fontWeight" && (val === "700" || val === "bold")) return "font-bold";
    if (prop === "fontSize") {
      const sz = parseInt(val);
      if (sz >= 24) return "text-2xl";
      if (sz >= 20) return "text-xl";
      if (sz >= 18) return "text-lg";
      if (sz <= 12) return "text-xs";
      return "text-sm";
    }
    return "";
  }

  function getReadableSelector(el) {
    if (!el || !el.tagName) return "element";
    const tag = el.tagName.toLowerCase();
    const id = el.id ? `#${el.id}` : "";
    const classes = Array.from(el.classList || [])
      .filter(c => !c.startsWith("ai-tweak-"))
      .slice(0, 3)
      .map(c => `.${c}`)
      .join("");
    return `${tag}${id}${classes}`;
  }

  function getElementSummary(el) {
    const selector = getReadableSelector(el);
    const text = (el.innerText || el.textContent || "").trim().slice(0, 20).replace(/\s+/g, " ");
    return { selector, text: text ? `"${text}"` : "" };
  }

  function initChangeEntry(el) {
    if (!changes.has(el)) {
      const summary = getElementSummary(el);
      changes.set(el, {
        selector: summary.selector,
        textSnippet: summary.text,
        existingClasses: Array.from(el.classList || []).join(" "),
        mods: {},
        comment: "",
        dragOffset: null
      });
    }
    return changes.get(el);
  }

  function recordChange(el, prop, val, label) {
    const prevVal = el.style[prop];
    const tw = getTailwindHint(prop, val);

    pushHistory({
      type: "style",
      el,
      prop,
      prevVal,
      nextVal: val,
      original: window.getComputedStyle(el)[prop],
      label: label || prop,
      tailwind: tw
    });

    const entry = initChangeEntry(el);
    if (!entry.mods[prop]) {
      entry.mods[prop] = {
        original: window.getComputedStyle(el)[prop],
        current: val,
        label: label || prop,
        tailwind: tw
      };
    } else {
      entry.mods[prop].current = val;
      entry.mods[prop].tailwind = tw;
    }
    el.style[prop] = val;
    updateSelection();
    updateDock();
  }

  function recordComment(el, text) {
    const entry = initChangeEntry(el);
    const prevVal = entry.comment || "";
    if (prevVal === text.trim()) return;

    pushHistory({
      type: "comment",
      el,
      prevVal,
      nextVal: text.trim(),
      label: "修改需求批注"
    });

    entry.comment = text.trim();
    updateDock();
  }

  function recordDragPosition(el, dx, dy, snapNote) {
    const entry = initChangeEntry(el);
    const prevT = entry.dragOffset ? { ...entry.dragOffset } : { dx: 0, dy: 0, snapNote: "" };

    pushHistory({
      type: "drag",
      el,
      prevTranslate: { x: prevT.dx, y: prevT.dy },
      nextTranslate: { x: dx, y: dy },
      snapNote,
      label: `拖拽平移 (${dx > 0 ? '+' : ''}${dx}px, ${dy > 0 ? '+' : ''}${dy}px)`
    });

    entry.dragOffset = { dx, dy, snapNote };
    entry.mods["transform"] = {
      original: "none",
      current: `translate(${dx}px, ${dy}px)`,
      label: `拖拽平移 (${dx > 0 ? '+' : ''}${dx}px, ${dy > 0 ? '+' : ''}${dy}px)`,
      tailwind: `translate-x-[${dx}px] translate-y-[${dy}px]`,
      snapNote: snapNote || ""
    };
    updateDock();
  }

  function recordResize(el, newW, newH, prevW, prevH, origW, origH, nextT, prevT) {
    if (`${newW}px` === prevW && `${newH}px` === prevH) return;

    pushHistory({
      type: "resize",
      el,
      prevWidth: prevW,
      nextWidth: `${newW}px`,
      prevHeight: prevH,
      nextHeight: `${newH}px`,
      origWidth: origW,
      origHeight: origH,
      prevTranslate: prevT,
      nextTranslate: nextT,
      label: `尺寸拉伸 (${newW}×${newH}px)`
    });

    const entry = initChangeEntry(el);
    entry.mods["width"] = {
      original: origW || "auto",
      current: `${newW}px`,
      label: `宽度拉伸 (${newW}px)`,
      tailwind: `w-[${newW}px]`
    };
    entry.mods["height"] = {
      original: origH || "auto",
      current: `${newH}px`,
      label: `高度拉伸 (${newH}px)`,
      tailwind: `h-[${newH}px]`
    };
    updateDock();
  }

  function updateDock() {
    const list = shadow.getElementById("panel-list");
    const countBadge = shadow.getElementById("dock-count");
    let totalCount = 0;
    changes.forEach(c => {
      totalCount += Object.keys(c.mods).length + (c.comment ? 1 : 0);
    });

    if (totalCount > 0) {
      countBadge.textContent = totalCount;
      countBadge.style.display = "inline-block";
    } else {
      countBadge.style.display = "none";
    }

    if (changes.size === 0) {
      list.innerHTML = `
        <div class="empty-state">
          鼠标点击页面任意组件开始微调<br/>
          <span style="font-size:11px;color:#cbd5e1">按住拖拽柄吸附 · 8个手柄自由拉伸尺寸 · 方向键微调</span>
        </div>`;
      return;
    }

    list.innerHTML = "";
    changes.forEach((data, el) => {
      const item = document.createElement("div");
      item.className = "diff-item";
      let details = "";
      for (const [k, v] of Object.entries(data.mods)) {
        const twBadge = v.tailwind ? `<span class="diff-tw">${v.tailwind}</span>` : "";
        const snapBadge = v.snapNote ? `<div style="color:#f43f5e;font-size:10px;font-weight:600;margin-top:2px;">🧲 ${v.snapNote}</div>` : "";
        details += `<div>• ${v.label}: <span class="diff-prop">${v.current}</span> ${twBadge} ${snapBadge}</div>`;
      }
      const commentHtml = data.comment ? `<div class="diff-comment">💬 批注: ${data.comment}</div>` : "";

      item.innerHTML = `
        <div class="diff-item-title">
          <span>${data.selector} ${data.textSnippet}</span>
          <span style="color:#ef4444;cursor:pointer;font-weight:500;" class="revert-single">还原</span>
        </div>
        ${details}
        ${commentHtml}
      `;
      item.querySelector(".revert-single").addEventListener("click", () => {
        for (const [k, v] of Object.entries(data.mods)) {
          el.style[k] = "";
        }
        changes.delete(el);
        updateSelection();
        updateDock();
      });
      list.appendChild(item);
    });
  }

  // --- TOOLBAR DRAGGING & POSITIONING STATE ---
  let isToolbarDragging = false;
  let tbDragStartMouse = { x: 0, y: 0 };
  let tbDragStartPos = { top: 0, left: 0 };
  let customToolbarPos = null;

  toolbar.addEventListener("mousedown", (e) => {
    const header = e.target.closest(".tb-header");
    if (!header) return;
    if (e.target.closest("button") || e.target.closest("input") || e.target.closest("textarea") || e.target.closest(".color-swatch")) return;

    e.preventDefault();
    isToolbarDragging = true;
    tbDragStartMouse = { x: e.clientX, y: e.clientY };
    const rect = toolbar.getBoundingClientRect();
    tbDragStartPos = { top: rect.top, left: rect.left };
    toolbar.style.transition = "none";
  });

  toolbar.addEventListener("dblclick", (e) => {
    if (e.target.closest(".tb-header")) {
      customToolbarPos = null;
      updateSelection();
      showToast("🧭 工具栏已恢复自动防挡跟随");
    }
  });

  function updateSelection() {
    if (!selectedEl || !selectedEl.isConnected) {
      selectBox.style.display = "none";
      toolbar.style.display = "none";
      return;
    }
    const rect = selectedEl.getBoundingClientRect();
    selectBox.style.display = "block";
    selectBox.style.top = rect.top + "px";
    selectBox.style.left = rect.left + "px";
    selectBox.style.width = rect.width + "px";
    selectBox.style.height = rect.height + "px";

    if (isResizing) {
      toolbar.style.display = "none";
      return;
    }

    // Position toolbar
    toolbar.style.display = "flex";
    const tbW = toolbar.offsetWidth || 360;
    const tbH = toolbar.offsetHeight || 380;

    let tbTop, tbLeft;

    if (customToolbarPos) {
      // User has manually dragged toolbar: respect their position, clamped to screen
      tbTop = Math.max(10, Math.min(window.innerHeight - tbH - 10, customToolbarPos.top));
      tbLeft = Math.max(10, Math.min(window.innerWidth - tbW - 10, customToolbarPos.left));
    } else {
      // Intelligent collision avoidance: prevent covering the target element!
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceRight = window.innerWidth - rect.right;
      const spaceLeft = rect.left;

      if (spaceAbove >= tbH + 15) {
        // Preferred: place cleanly above element
        tbTop = rect.top - tbH - 12;
        tbLeft = rect.left;
      } else if (spaceBelow >= tbH + 15) {
        // Next best: place cleanly below element
        tbTop = rect.bottom + 12;
        tbLeft = rect.left;
      } else if (spaceRight >= tbW + 15) {
        // Side option: place to the right
        tbTop = Math.max(10, rect.top);
        tbLeft = rect.right + 12;
      } else if (spaceLeft >= tbW + 15) {
        // Side option: place to the left
        tbTop = Math.max(10, rect.top);
        tbLeft = rect.left - tbW - 12;
      } else {
        // Huge element covering most of the screen: pin to top-right corner to avoid covering center
        tbTop = 20;
        tbLeft = window.innerWidth - tbW - 20;
      }

      // Clamp within viewport
      tbLeft = Math.max(10, Math.min(window.innerWidth - tbW - 10, tbLeft));
      tbTop = Math.max(10, Math.min(window.innerHeight - tbH - 10, tbTop));
    }

    toolbar.style.top = `${tbTop}px`;
    toolbar.style.left = `${tbLeft}px`;
    updateHistoryButtons();
    updateSnapUI();
  }

  // --- DRAG & MAGNETIC SNAPPING ENGINE (120FPS with rAF & Zero Layout Thrashing) ---
  let isDragging = false;
  let dragStartMouse = { x: 0, y: 0 };
  let initialTranslate = { x: 0, y: 0 };
  let currentTranslate = { x: 0, y: 0 };
  let initialElementRect = null;
  let referenceBounds = [];
  let rafId = null;
  let pendingMouseX = 0;
  let pendingMouseY = 0;
  let pendingAltKey = false;

  function collectReferenceBounds(activeEl) {
    const bounds = [];
    const parent = activeEl.parentElement;
    const candidates = new Set();
    if (parent) {
      Array.from(parent.children).forEach(c => candidates.add(c));
    }
    document.querySelectorAll(".card, button, header, section, [id^='card'], [id^='cta'], h1, h2").forEach(el => candidates.add(el));

    candidates.forEach(el => {
      if (el === activeEl || activeEl.contains(el) || host.contains(el)) return;
      const r = el.getBoundingClientRect();
      if (r.width > 15 && r.height > 10 && r.bottom > 0 && r.top < window.innerHeight) {
        bounds.push({
          name: getReadableSelector(el),
          top: r.top,
          centerY: r.top + r.height / 2,
          bottom: r.bottom,
          left: r.left,
          centerX: r.left + r.width / 2,
          right: r.right
        });
      }
    });
    return bounds.slice(0, 25);
  }

  // --- RESIZE ENGINE (PPT / Figma 8-Handle Freeform Stretching) ---
  let isResizing = false;
  let resizeDir = "";
  let resizeStartMouse = { x: 0, y: 0 };
  let initialResizeSize = { w: 0, h: 0 };
  let initialResizeTranslate = { x: 0, y: 0 };
  let initialPrevStyle = { w: "", h: "" };
  let initialOrigSize = { w: "", h: "" };
  let currentResizeSize = { w: 0, h: 0 };
  let currentResizeTranslate = { x: 0, y: 0 };

  selectBox.addEventListener("mousedown", (e) => {
    const handle = e.target.closest(".resize-handle");
    if (!handle || !selectedEl) return;

    e.preventDefault();
    e.stopPropagation();

    isResizing = true;
    resizeDir = handle.dataset.direction;
    resizeStartMouse = { x: e.clientX, y: e.clientY };

    const rect = selectedEl.getBoundingClientRect();
    initialResizeSize = { w: rect.width, h: rect.height };
    currentResizeSize = { ...initialResizeSize };

    initialPrevStyle = {
      w: selectedEl.style.width,
      h: selectedEl.style.height
    };

    const comp = window.getComputedStyle(selectedEl);
    initialOrigSize = {
      w: comp.width,
      h: comp.height
    };

    if (comp.display === "inline") {
      selectedEl.style.display = "inline-block";
    }

    const tr = selectedEl.style.transform || "";
    const m = tr.match(/translate(?:3d)?\(([-0-9.]+)px,\s*([-0-9.]+)px/);
    if (m) {
      initialResizeTranslate = { x: parseFloat(m[1]), y: parseFloat(m[2]) };
    } else {
      initialResizeTranslate = { x: 0, y: 0 };
    }
    currentResizeTranslate = { ...initialResizeTranslate };

    toolbar.style.display = "none";
    showToast("📐 按住拖拽拉伸尺寸 (按住 Shift 可等比缩放)");
  });

  function handleResizeMove(e) {
    if (!isResizing || !selectedEl) return;

    const dx = e.clientX - resizeStartMouse.x;
    const dy = e.clientY - resizeStartMouse.y;

    let newW = initialResizeSize.w;
    let newH = initialResizeSize.h;
    let newX = initialResizeTranslate.x;
    let newY = initialResizeTranslate.y;

    const ratio = initialResizeSize.w / (initialResizeSize.h || 1);

    // Horizontal resize
    if (resizeDir.includes("e")) {
      newW = initialResizeSize.w + dx;
    } else if (resizeDir.includes("w")) {
      newW = initialResizeSize.w - dx;
      if (newW > 16) {
        newX = initialResizeTranslate.x + dx;
      }
    }

    // Vertical resize
    if (resizeDir.includes("s")) {
      newH = initialResizeSize.h + dy;
    } else if (resizeDir.includes("n")) {
      newH = initialResizeSize.h - dy;
      if (newH > 16) {
        newY = initialResizeTranslate.y + dy;
      }
    }

    // Shift key: lock aspect ratio (PPT behavior)
    if (e.shiftKey && resizeDir.length === 2) {
      if (Math.abs(dx) > Math.abs(dy)) {
        newH = newW / ratio;
      } else {
        newW = newH * ratio;
      }
    }

    newW = Math.max(16, Math.round(newW));
    newH = Math.max(16, Math.round(newH));

    currentResizeSize = { w: newW, h: newH };
    currentResizeTranslate = { x: Math.round(newX), y: Math.round(newY) };

    selectedEl.style.width = `${newW}px`;
    selectedEl.style.height = `${newH}px`;
    if (newX !== initialResizeTranslate.x || newY !== initialResizeTranslate.y) {
      selectedEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    }

    // Real-time update of selectBox
    const rect = selectedEl.getBoundingClientRect();
    selectBox.style.top = rect.top + "px";
    selectBox.style.left = rect.left + "px";
    selectBox.style.width = rect.width + "px";
    selectBox.style.height = rect.height + "px";

    // HUD Indicator
    tuneHud.textContent = `📐 尺寸: ${newW} × ${newH} px (w-[${newW}px] h-[${newH}px])${e.shiftKey ? ' [等比锁定]' : ''}`;
    tuneHud.style.display = "block";
  }

  function finishResize() {
    if (!isResizing) return;
    isResizing = false;

    if (selectedEl) {
      recordResize(
        selectedEl,
        currentResizeSize.w,
        currentResizeSize.h,
        initialPrevStyle.w,
        initialPrevStyle.h,
        initialOrigSize.w,
        initialOrigSize.h,
        currentResizeTranslate,
        initialResizeTranslate
      );
      updateSelection();
      showToast(`📐 尺寸拉伸完成: ${currentResizeSize.w} × ${currentResizeSize.h} px`);
    }

    setTimeout(() => {
      tuneHud.style.display = "none";
    }, 1500);
  }

  dragHandle.addEventListener("mousedown", (e) => {
    if (!selectedEl) return;
    e.preventDefault();
    e.stopPropagation();

    isDragging = true;
    dragStartMouse = { x: e.clientX, y: e.clientY };
    pendingMouseX = e.clientX;
    pendingMouseY = e.clientY;
    pendingAltKey = e.altKey;

    const tr = selectedEl.style.transform || "";
    const m = tr.match(/translate(?:3d)?\(([-0-9.]+)px,\s*([-0-9.]+)px/);
    if (m) {
      initialTranslate = { x: parseFloat(m[1]), y: parseFloat(m[2]) };
    } else {
      initialTranslate = { x: 0, y: 0 };
    }
    currentTranslate = { ...initialTranslate };

    initialElementRect = selectedEl.getBoundingClientRect();
    referenceBounds = collectReferenceBounds(selectedEl);

    toolbar.style.display = "none";
    selectedEl.style.willChange = "transform";
    selectBox.style.willChange = "transform";

    showToast(isSnapEnabled ? "🧲 磁吸吸附中 (按住Alt可临时自由平移)" : "🕊️ 自由拖拽中 (已关闭磁吸对齐)");
  });

  function renderDragFrame() {
    rafId = null;
    if (!isDragging || !selectedEl || !initialElementRect) return;

    const deltaX = pendingMouseX - dragStartMouse.x;
    const deltaY = pendingMouseY - dragStartMouse.y;

    let targetX = initialTranslate.x + deltaX;
    let targetY = initialTranslate.y + deltaY;

    const effectiveDeltaX = targetX - initialTranslate.x;
    const effectiveDeltaY = targetY - initialTranslate.y;
    const curLeft = initialElementRect.left + effectiveDeltaX;
    const curCenterX = curLeft + initialElementRect.width / 2;
    const curRight = curLeft + initialElementRect.width;
    const curTop = initialElementRect.top + effectiveDeltaY;
    const curCenterY = curTop + initialElementRect.height / 2;
    const curBottom = curTop + initialElementRect.height;

    const SNAP_DIST = 9;
    let snappedX = false;
    let snappedY = false;
    let activeSnapNote = "";

    const allowSnap = isSnapEnabled && !pendingAltKey;

    if (allowSnap) {
      // Vertical Guides (X)
      for (let i = 0; i < referenceBounds.length; i++) {
        const b = referenceBounds[i];
        if (Math.abs(curLeft - b.left) < SNAP_DIST) {
          targetX += (b.left - curLeft);
          guideV.style.display = "block";
          guideV.style.left = b.left + "px";
          guideVBadge.textContent = `与 ${b.name} 左对齐`;
          guideVBadge.style.top = Math.max(10, curTop) + "px";
          activeSnapNote = `与 ${b.name} 左侧对齐`;
          snappedX = true;
          break;
        }
        if (Math.abs(curCenterX - b.centerX) < SNAP_DIST) {
          targetX += (b.centerX - curCenterX);
          guideV.style.display = "block";
          guideV.style.left = b.centerX + "px";
          guideVBadge.textContent = `与 ${b.name} 水平居中`;
          guideVBadge.style.top = Math.max(10, curTop) + "px";
          activeSnapNote = `与 ${b.name} 水平居中对齐`;
          snappedX = true;
          break;
        }
        if (Math.abs(curRight - b.right) < SNAP_DIST) {
          targetX += (b.right - curRight);
          guideV.style.display = "block";
          guideV.style.left = b.right + "px";
          guideVBadge.textContent = `与 ${b.name} 右对齐`;
          guideVBadge.style.top = Math.max(10, curTop) + "px";
          activeSnapNote = `与 ${b.name} 右侧对齐`;
          snappedX = true;
          break;
        }
      }
      if (!snappedX) guideV.style.display = "none";

      // Horizontal Guides (Y)
      for (let i = 0; i < referenceBounds.length; i++) {
        const b = referenceBounds[i];
        if (Math.abs(curTop - b.top) < SNAP_DIST) {
          targetY += (b.top - curTop);
          guideH.style.display = "block";
          guideH.style.top = b.top + "px";
          guideHBadge.textContent = `与 ${b.name} 顶部对齐`;
          guideHBadge.style.left = Math.max(10, curLeft) + "px";
          activeSnapNote += (activeSnapNote ? " / " : "") + `与 ${b.name} 顶部对齐`;
          snappedY = true;
          break;
        }
        if (Math.abs(curCenterY - b.centerY) < SNAP_DIST) {
          targetY += (b.centerY - curCenterY);
          guideH.style.display = "block";
          guideH.style.top = b.centerY + "px";
          guideHBadge.textContent = `与 ${b.name} 垂直居中`;
          guideHBadge.style.left = Math.max(10, curLeft) + "px";
          activeSnapNote += (activeSnapNote ? " / " : "") + `与 ${b.name} 垂直居中对齐`;
          snappedY = true;
          break;
        }
      }
      if (!snappedY) guideH.style.display = "none";
    } else {
      guideV.style.display = "none";
      guideH.style.display = "none";
    }

    currentTranslate = { x: Math.round(targetX), y: Math.round(targetY) };
    selectedEl.__activeSnapNote = activeSnapNote;

    selectedEl.style.transform = `translate3d(${currentTranslate.x}px, ${currentTranslate.y}px, 0)`;
    selectBox.style.transform = `translate3d(${currentTranslate.x - initialTranslate.x}px, ${currentTranslate.y - initialTranslate.y}px, 0)`;
  }

  window.addEventListener("mousemove", (e) => {
    if (isResizing) {
      handleResizeMove(e);
      return;
    }
    if (isToolbarDragging) {
      const dx = e.clientX - tbDragStartMouse.x;
      const dy = e.clientY - tbDragStartMouse.y;
      const tbW = toolbar.offsetWidth || 360;
      const tbH = toolbar.offsetHeight || 380;
      let newTop = tbDragStartPos.top + dy;
      let newLeft = tbDragStartPos.left + dx;
      newTop = Math.max(10, Math.min(window.innerHeight - tbH - 10, newTop));
      newLeft = Math.max(10, Math.min(window.innerWidth - tbW - 10, newLeft));
      toolbar.style.top = `${newTop}px`;
      toolbar.style.left = `${newLeft}px`;
      customToolbarPos = { top: newTop, left: newLeft };
      return;
    }
    if (!isDragging) return;
    pendingMouseX = e.clientX;
    pendingMouseY = e.clientY;
    pendingAltKey = e.altKey;
    if (!rafId) {
      rafId = requestAnimationFrame(renderDragFrame);
    }
  }, { passive: true });

  window.addEventListener("mouseup", () => {
    if (isResizing) {
      finishResize();
    }
    if (isToolbarDragging) {
      isToolbarDragging = false;
    }
    if (!isDragging) return;
    isDragging = false;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    guideV.style.display = "none";
    guideH.style.display = "none";

    if (selectedEl) {
      selectedEl.style.willChange = "";
      selectBox.style.willChange = "";
      selectBox.style.transform = "none";

      recordDragPosition(selectedEl, currentTranslate.x, currentTranslate.y, selectedEl.__activeSnapNote);
      updateSelection();
      showToast(`🎯 位置已锁定 (${currentTranslate.x}px, ${currentTranslate.y}px)`);
    }
  });

  // --- KEYBOARD ARROW KEYS FINE-TUNING (1px / Shift+10px) & SHORTCUTS (Ctrl+Z / Ctrl+Y) ---
  window.addEventListener("keydown", (e) => {
    if (!window.__aiVisualTweakActive) return;

    // Check if user is typing in an input or textarea
    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
    const isEditingInput = activeTag === "input" || activeTag === "textarea" || (shadow.activeElement && shadow.activeElement.tagName.toLowerCase() === "textarea");

    // Escape key handling: close modals, deselect element, or close dock
    if (e.key === "Escape") {
      if (modalBackdrop && modalBackdrop.style.display === "flex") {
        modalBackdrop.style.display = "none";
        return;
      }
      if (dockPanel && dockPanel.style.display === "flex") {
        dockPanel.style.display = "none";
        return;
      }
      if (selectedEl) {
        selectedEl = null;
        updateSelection();
        showToast("已取消选择组件");
        return;
      }
    }

    // Ctrl + Z / Cmd + Z (Undo)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" && !e.shiftKey) {
      if (!isEditingInput) {
        e.preventDefault();
        undo();
        return;
      }
    }

    // Ctrl + Shift + Z / Ctrl + Y / Cmd + Shift + Z (Redo)
    if (((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "z") || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y")) {
      if (!isEditingInput) {
        e.preventDefault();
        redo();
        return;
      }
    }

    // Toggle Snapping with 'S' key
    if (!isEditingInput && e.key.toLowerCase() === "s" && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      toggleSnap();
      return;
    }

    // Delete / Backspace key: Quick delete/hide selected element (PPT/Figma style)
    if (selectedEl && !isEditingInput) {
      if (e.key === "Delete" || e.key === "Backspace") {
        e.preventDefault();
        const target = selectedEl;
        recordChange(target, "display", "none", "删除/隐藏该元素(hidden)");
        selectedEl = null;
        updateSelection();
        showToast("🗑️ 已删除/隐藏该组件 (按 Ctrl+Z 可撤销)");
        return;
      }
    }

    // Arrow keys fine-tuning on selected element
    if (selectedEl && !isEditingInput) {
      if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(e.key.toLowerCase())) {
        e.preventDefault();
        const step = e.shiftKey ? 10 : 1;

        // Current translate
        const tr = selectedEl.style.transform || "";
        let curX = 0, curY = 0;
        const m = tr.match(/translate(?:3d)?\(([-0-9.]+)px,\s*([-0-9.]+)px/);
        if (m) {
          curX = parseFloat(m[1]);
          curY = parseFloat(m[2]);
        }

        if (e.key.toLowerCase() === "arrowup") curY -= step;
        if (e.key.toLowerCase() === "arrowdown") curY += step;
        if (e.key.toLowerCase() === "arrowleft") curX -= step;
        if (e.key.toLowerCase() === "arrowright") curX += step;

        selectedEl.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
        recordDragPosition(selectedEl, curX, curY, `键盘微调 (${step}px)`);
        updateSelection();

        // Show HUD
        tuneHud.textContent = `📍 微调坐标: X:${curX > 0 ? '+' : ''}${curX}px, Y:${curY > 0 ? '+' : ''}${curY}px (步长 ${step}px)`;
        tuneHud.style.display = "block";
        clearTimeout(tuneHud._timer);
        tuneHud._timer = setTimeout(() => { tuneHud.style.display = "none"; }, 1500);
      }
    }
  });

  // --- TOOLBAR RENDERING (Polished macOS Glass Style) ---
  function renderToolbar(el) {
    const summary = getElementSummary(el);
    const style = window.getComputedStyle(el);
    const entry = initChangeEntry(el);

    toolbar.innerHTML = `
      <div class="tb-header" title="按住可拖动悬浮窗 · 双击恢复自动跟随">
        <div class="tb-title-group">
          <span style="font-size:12px;color:#94a3b8;cursor:move;" title="按住拖拽">⠿</span>
          <span class="tb-tag-badge">&lt;${el.tagName.toLowerCase()}&gt;</span>
          <div class="tb-title">${summary.selector} ${summary.text}</div>
        </div>
        <div class="tb-actions-top">
          <button class="tb-toggle-btn ${isSnapEnabled ? 'active' : ''}" id="tb-toggle-snap" title="点击切换磁吸吸附 (快捷键: 按 S 键，或拖拽时按住 Alt 临时自由移动)">
            ${isSnapEnabled ? '🧲 磁吸开' : '🕊️ 自由拖'}
          </button>
          <button class="tb-icon-btn" id="tb-undo" title="撤销 (Ctrl+Z)">↩️</button>
          <button class="tb-icon-btn" id="tb-redo" title="重做 (Ctrl+Y)">↪️</button>
          <button class="tb-icon-btn" id="tb-close" title="取消选择 (Esc)">✕</button>
        </div>
      </div>

      <!-- 尺寸 -->
      <div class="tb-row">
        <span class="tb-label">尺寸</span>
        <div class="tb-group">
          <button class="tb-btn" id="w-minus">-20px</button>
          <button class="tb-btn" id="w-plus">+20px</button>
          <button class="tb-btn" id="w-full">100%全宽</button>
          <button class="tb-btn" id="h-plus">高+10</button>
          <button class="tb-btn" id="sz-auto">自适应</button>
        </div>
      </div>

      <!-- 间距 -->
      <div class="tb-row">
        <span class="tb-label">间距</span>
        <div class="tb-group">
          <button class="tb-btn" id="m-plus">外边距+ (mt)</button>
          <button class="tb-btn" id="m-minus">外边距-</button>
          <button class="tb-btn" id="p-plus">内边距+ (px/py)</button>
          <button class="tb-btn" id="p-minus">内边距-</button>
        </div>
      </div>

      <!-- 背景颜色 -->
      <div class="tb-row">
        <span class="tb-label">背景色</span>
        <div class="tb-group" style="gap:6px;">
          <div class="color-swatch" style="background:#10b981" title="清新绿 (emerald-500)" data-color="#10b981"></div>
          <div class="color-swatch" style="background:#3b82f6" title="科技蓝 (blue-500)" data-color="#3b82f6"></div>
          <div class="color-swatch" style="background:#8b5cf6" title="优雅紫 (purple-500)" data-color="#8b5cf6"></div>
          <div class="color-swatch" style="background:#f43f5e" title="珊瑚红 (rose-500)" data-color="#f43f5e"></div>
          <div class="color-swatch" style="background:#0f172a" title="暗黑 (slate-900)" data-color="#0f172a"></div>
          <div class="color-swatch" style="background:#ffffff;border:1px solid #ccc" title="纯白 (white)" data-color="#ffffff"></div>
          <input type="color" id="bg-color-picker" style="width:20px;height:20px;padding:0;border:none;cursor:pointer;border-radius:50%;" value="#3b82f6" />
        </div>
      </div>

      <!-- 文字颜色与样式 -->
      <div class="tb-row">
        <span class="tb-label">文字</span>
        <div class="tb-group">
          <button class="tb-btn" id="txt-bigger">A+</button>
          <button class="tb-btn" id="txt-smaller">A-</button>
          <button class="tb-btn" id="txt-bold">加粗</button>
          <button class="tb-btn" id="txt-white" style="color:#000;background:#fff;border-color:#ccc">白字</button>
          <button class="tb-btn" id="txt-dark" style="color:#fff;background:#000">黑字</button>
          <button class="tb-btn" id="txt-edit">✏️ 改文案</button>
        </div>
      </div>

      <!-- 圆角与形态 -->
      <div class="tb-row">
        <span class="tb-label">圆角</span>
        <div class="tb-group">
          <button class="tb-btn" id="r-0">直角(0)</button>
          <button class="tb-btn" id="r-8">小圆(8px)</button>
          <button class="tb-btn" id="r-16">大圆(16px)</button>
          <button class="tb-btn" id="r-pill" style="color:#4f46e5;font-weight:700;">胶囊(全圆)</button>
        </div>
      </div>

      <!-- 排序与删除 -->
      <div class="tb-row" style="border-top:1px solid rgba(226, 232, 240, 0.7);padding-top:6px;">
        <span class="tb-label">排版</span>
        <div class="tb-group">
          <button class="tb-btn" id="move-prev">⬆ 前移</button>
          <button class="tb-btn" id="move-next">⬇ 后移</button>
          <button class="tb-btn" id="tb-screenshot-el" title="单独截取当前组件画面">📸 截取</button>
          <button class="tb-btn tb-btn-danger" id="hide-el">👁️ 隐藏/删除</button>
          <button class="tb-btn" id="revert-el">🔄 重置当前</button>
        </div>
      </div>

      <!-- 💬 需求与交互批注框 -->
      <div class="tb-comment-box">
        <div class="tb-comment-title">
          <span>💬 添加业务/交互需求批注：</span>
          <span style="font-weight:normal;color:#94a3b8;">自动合并到 Prompt</span>
        </div>
        <textarea class="tb-comment-input" id="tb-comment-field" placeholder="例如：点击弹出确认弹窗、增加加载动效、改从后端接口获取数据...">${entry.comment || ''}</textarea>
      </div>
    `;

    // Bind toolbar actions
    toolbar.querySelector("#tb-toggle-snap").onclick = () => toggleSnap();
    toolbar.querySelector("#tb-close").onclick = () => {
      selectedEl = null;
      updateSelection();
    };
    toolbar.querySelector("#tb-undo").onclick = () => undo();
    toolbar.querySelector("#tb-redo").onclick = () => redo();

    // Comment input
    const commentField = toolbar.querySelector("#tb-comment-field");
    commentField.oninput = (e) => {
      recordComment(el, e.target.value);
    };

    // Width / Height
    toolbar.querySelector("#w-plus").onclick = () => {
      const curW = parseInt(style.width) || el.offsetWidth;
      recordChange(el, "width", `${curW + 20}px`, "宽度增加20px");
    };
    toolbar.querySelector("#w-minus").onclick = () => {
      const curW = parseInt(style.width) || el.offsetWidth;
      recordChange(el, "width", `${Math.max(20, curW - 20)}px`, "宽度减少20px");
    };
    toolbar.querySelector("#w-full").onclick = () => {
      recordChange(el, "width", "100%", "宽度全宽(w-full)");
    };
    toolbar.querySelector("#h-plus").onclick = () => {
      const curH = parseInt(style.height) || el.offsetHeight;
      recordChange(el, "minHeight", `${curH + 15}px`, "最小高度增加");
    };
    toolbar.querySelector("#sz-auto").onclick = () => {
      recordChange(el, "width", "auto", "宽度自适应(w-auto)");
      recordChange(el, "height", "auto", "高度自适应");
    };

    // Margins / Paddings
    toolbar.querySelector("#m-plus").onclick = () => {
      const cur = parseInt(style.marginTop) || 0;
      recordChange(el, "marginTop", `${cur + 16}px`, "上外边距增大(mt)");
      recordChange(el, "marginBottom", `${cur + 16}px`, "下外边距增大(mb)");
    };
    toolbar.querySelector("#m-minus").onclick = () => {
      const cur = parseInt(style.marginTop) || 0;
      recordChange(el, "marginTop", `${Math.max(0, cur - 8)}px`, "上外边距缩小");
      recordChange(el, "marginBottom", `${Math.max(0, cur - 8)}px`, "下外边距缩小");
    };
    toolbar.querySelector("#p-plus").onclick = () => {
      const curP = parseInt(style.paddingTop) || 4;
      const curPl = parseInt(style.paddingLeft) || 8;
      recordChange(el, "padding", `${curP + 6}px ${curPl + 12}px`, "内边距整体增大(px/py)");
    };
    toolbar.querySelector("#p-minus").onclick = () => {
      const curP = parseInt(style.paddingTop) || 4;
      const curPl = parseInt(style.paddingLeft) || 8;
      recordChange(el, "padding", `${Math.max(0, curP - 4)}px ${Math.max(0, curPl - 6)}px`, "内边距整体缩小");
    };

    // Background color
    toolbar.querySelectorAll(".color-swatch").forEach(swatch => {
      swatch.onclick = () => {
        recordChange(el, "backgroundColor", swatch.dataset.color, "背景色调整");
      };
    });
    toolbar.querySelector("#bg-color-picker").oninput = (e) => {
      recordChange(el, "backgroundColor", e.target.value, "背景色自定义");
    };

    // Typography
    toolbar.querySelector("#txt-bigger").onclick = () => {
      const sz = parseInt(style.fontSize) || 14;
      recordChange(el, "fontSize", `${sz + 2}px`, "字号增大");
    };
    toolbar.querySelector("#txt-smaller").onclick = () => {
      const sz = parseInt(style.fontSize) || 14;
      recordChange(el, "fontSize", `${Math.max(10, sz - 2)}px`, "字号减小");
    };
    toolbar.querySelector("#txt-bold").onclick = () => {
      const isBold = style.fontWeight === "bold" || parseInt(style.fontWeight) >= 700;
      recordChange(el, "fontWeight", isBold ? "normal" : "700", isBold ? "字体常规" : "字体加粗(font-bold)");
    };
    toolbar.querySelector("#txt-white").onclick = () => {
      recordChange(el, "color", "#ffffff", "文字改为白色(text-white)");
    };
    toolbar.querySelector("#txt-dark").onclick = () => {
      recordChange(el, "color", "#0f172a", "文字改为深黑(text-slate-900)");
    };
    toolbar.querySelector("#txt-edit").onclick = () => {
      const originalText = el.innerText || "";
      const newText = prompt("编辑文案内容：", originalText);
      if (newText !== null && newText !== originalText) {
        recordChange(el, "innerText", newText, `文案修改为 "${newText}"`);
      }
    };

    // Radius
    toolbar.querySelector("#r-0").onclick = () => recordChange(el, "borderRadius", "0px", "直角(rounded-none)");
    toolbar.querySelector("#r-8").onclick = () => recordChange(el, "borderRadius", "8px", "圆角8px(rounded-lg)");
    toolbar.querySelector("#r-16").onclick = () => recordChange(el, "borderRadius", "16px", "大圆角16px(rounded-2xl)");
    toolbar.querySelector("#r-pill").onclick = () => recordChange(el, "borderRadius", "9999px", "胶囊全圆角(rounded-full)");

    // Ordering / Hiding
    toolbar.querySelector("#move-prev").onclick = () => {
      if (el.previousElementSibling) {
        el.parentNode.insertBefore(el, el.previousElementSibling);
        recordChange(el, "order", "-1", "元素顺序向前移动");
        updateSelection();
      }
    };
    toolbar.querySelector("#move-next").onclick = () => {
      if (el.nextElementSibling) {
        el.parentNode.insertBefore(el, el.nextElementSibling);
        recordChange(el, "order", "+1", "元素顺序向后移动");
        updateSelection();
      }
    };
    toolbar.querySelector("#hide-el").onclick = () => {
      recordChange(el, "display", "none", "隐藏/删除该元素(hidden)");
      selectedEl = null;
      updateSelection();
    };
    toolbar.querySelector("#tb-screenshot-el").onclick = () => takeScreenshot(el);
    toolbar.querySelector("#revert-el").onclick = () => {
      if (changes.has(el)) {
        const data = changes.get(el);
        for (const k of Object.keys(data.mods)) {
          el.style[k] = "";
        }
        changes.delete(el);
        updateSelection();
        updateDock();
        showToast("已重置当前元素");
      }
    };

    updateHistoryButtons();
  }

  // --- PROMPT COMPILER ---
  function generatePrompt() {
    if (changes.size === 0) {
      return "当前尚未对页面进行任何视觉微调或批注。请点击元素进行调整后再生成。";
    }

    let itemsMarkdown = "";
    let idx = 1;

    changes.forEach((data, el) => {
      itemsMarkdown += `\n#### ${idx}. 目标组件：\`${data.selector}\` ${data.textSnippet ? `(包含文本: ${data.textSnippet})` : ""}\n`;
      if (data.existingClasses) {
        itemsMarkdown += `- **当前类名参考**：\`${data.existingClasses}\`\n`;
      }

      for (const [prop, v] of Object.entries(data.mods)) {
        const tw = v.tailwind ? ` 👉 **建议 Tailwind 类名**: \`${v.tailwind}\`` : "";
        const snap = v.snapNote ? ` *(对齐: ${v.snapNote})*` : "";
        itemsMarkdown += `- **${v.label}**：从 \`${v.original || '默认'}\` 调整为 \`${v.current}\`${tw}${snap}\n`;
      }

      if (data.comment) {
        itemsMarkdown += `- 💡 **【自定义交互与业务需求批注】**：${data.comment}\n`;
      }
      idx++;
    });

    return `请根据我在界面上的可视化微调与批注，修改对应前端组件源码：

### 📋 页面调整与需求清单：
${itemsMarkdown}
### 🛠️ 代码更新原则：
1. **优先 Tailwind 规范**：若项目已使用 Tailwind CSS，请优先使用清单中推荐的类名（如 \`bg-emerald-500 rounded-full mt-4\`）替换旧类名，切勿硬写内联 \`style\`。
2. **位置与对齐**：对于拖拽微调的元素，请结合上下文（Flex/Grid 排版、Margin 外边距或相对定位）优雅落地对齐关系。
3. **落实需求批注**：请完整实现每个组件批注中要求的交互、动画或接口数据逻辑。
4. **保持功能完整**：保持原有的接口数据流、响应式适配和业务逻辑完好。`;
  }

  // --- MOUSE LISTENERS ---
  function onMouseMove(e) {
    if (!window.__aiVisualTweakActive || isDragging || isToolbarDragging || isResizing) return;
    const target = e.target;
    if (host.contains(target) || target === host) return;

    if (target === document.body || target === document.documentElement) {
      hoverBox.style.display = "none";
      return;
    }

    hoveredEl = target;
    const rect = target.getBoundingClientRect();
    hoverBox.style.display = "block";
    hoverBox.style.top = rect.top + "px";
    hoverBox.style.left = rect.left + "px";
    hoverBox.style.width = rect.width + "px";
    hoverBox.style.height = rect.height + "px";

    const summary = getElementSummary(target);
    hoverTag.textContent = `${summary.selector} (${Math.round(rect.width)}×${Math.round(rect.height)})`;
  }

  function onClick(e) {
    if (!window.__aiVisualTweakActive || isDragging || isToolbarDragging || isResizing) return;
    const target = e.target;
    if (host.contains(target) || target === host) return;

    // Clicking on body or html background deselects current component
    if (target === document.body || target === document.documentElement) {
      if (selectedEl) {
        e.preventDefault();
        e.stopPropagation();
        selectedEl = null;
        updateSelection();
        showToast("已取消选择组件");
      }
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    selectedEl = target;
    renderToolbar(selectedEl);
    updateSelection();
  }

  function onDblClick(e) {
    if (!window.__aiVisualTweakActive || isDragging || isToolbarDragging || isResizing) return;
    const target = e.target;
    if (host.contains(target) || target === host) return;
    if (target === document.body || target === document.documentElement) return;

    e.preventDefault();
    e.stopPropagation();

    // Fast text editing on double-click
    const originalText = (target.innerText || target.textContent || "").trim();
    const newText = prompt(`编辑 <${target.tagName.toLowerCase()}> 的文案内容：`, originalText);
    if (newText !== null && newText !== originalText) {
      recordChange(target, "innerText", newText, `文案修改为 "${newText}"`);
      showToast(`✏️ 文案已更新: "${newText}"`);
      updateSelection();
    }
  }

  window.addEventListener("mousemove", onMouseMove, true);
  window.addEventListener("click", onClick, true);
  window.addEventListener("dblclick", onDblClick, true);
  window.addEventListener("resize", () => { updateSelection(); });
  window.addEventListener("scroll", () => { updateSelection(); });

  // --- DOCK EVENTS ---
  const dockPill = shadow.getElementById("dock-pill");
  const dockPanel = shadow.getElementById("dock-panel");
  const panelClose = shadow.getElementById("panel-close");
  const dockUndo = shadow.getElementById("dock-undo");
  const dockRedo = shadow.getElementById("dock-redo");
  const btnCopyPrompt = shadow.getElementById("btn-copy-prompt");
  const btnResetAll = shadow.getElementById("btn-reset-all");
  const btnExit = shadow.getElementById("btn-exit");

  dockPill.onclick = () => {
    dockPanel.style.display = dockPanel.style.display === "flex" ? "none" : "flex";
  };
  panelClose.onclick = () => {
    dockPanel.style.display = "none";
  };

  dockUndo.onclick = () => undo();
  dockRedo.onclick = () => redo();

  
  // --- SCREENSHOT & MULTIMODAL EXPORT ENGINE ---
  let lastScreenshotBlob = null;
  let lastScreenshotDataUrl = "";

  async function takeScreenshot(targetNode) {
    showToast("📸 正在捕获视觉改动画面...");

    // Temporarily hide overlay UI during capture
    host.style.display = "none";
    
    try {
      // Allow DOM to settle for a frame
      await new Promise(r => requestAnimationFrame(r));
      
      const node = targetNode || document.body;
      const dataUrl = await window.htmlToImage.toPng(node, {
        pixelRatio: 1.5,
        skipFonts: true,
        filter: (el) => el.id !== HOST_ID
      });

      lastScreenshotDataUrl = dataUrl;
      const res = await fetch(dataUrl);
      lastScreenshotBlob = await res.blob();

      // Restore overlay UI
      host.style.display = "block";

      // Populate and show Modal
      const previewImg = shadow.getElementById("modal-img-preview");
      const previewText = shadow.getElementById("modal-prompt-preview");
      previewImg.src = dataUrl;
      previewText.textContent = generatePrompt();
      modalBackdrop.style.display = "flex";

      // Auto copy image to clipboard if supported
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': lastScreenshotBlob })
        ]);
        showToast("🎉 截图已自动复制到系统剪贴板！可直接在对话框 Ctrl+V 粘贴");
      } catch (clipErr) {
        showToast("📸 截图完成！可在弹窗中点击下载或复制");
      }
    } catch (err) {
      host.style.display = "block";
      console.error("Screenshot error:", err);
      showToast("⚠️ 截图生成异常: " + (err.message || err));
    }
  }

  // Modal event bindings
  shadow.getElementById("modal-close").onclick = () => { modalBackdrop.style.display = "none"; };
  shadow.getElementById("modal-close-btn").onclick = () => { modalBackdrop.style.display = "none"; };
  modalBackdrop.onclick = (e) => {
    if (e.target === modalBackdrop) modalBackdrop.style.display = "none";
  };

  shadow.getElementById("modal-copy-img").onclick = async () => {
    if (lastScreenshotBlob) {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': lastScreenshotBlob })
        ]);
        showToast("🎉 图片已成功复制到剪贴板！");
      } catch (err) {
        showToast("⚠️ 浏览器安全限制，请直接使用右侧下载按钮");
      }
    }
  };

  shadow.getElementById("modal-download-img").onclick = () => {
    if (lastScreenshotDataUrl) {
      const a = document.createElement("a");
      a.href = lastScreenshotDataUrl;
      a.download = `canvascode-${Date.now()}.png`;
      a.click();
      showToast("💾 截图图片已保存！");
    }
  };

  shadow.getElementById("modal-copy-text").onclick = () => {
    const promptText = generatePrompt();
    navigator.clipboard.writeText(promptText).then(() => {
      showToast("📋 文字 Prompt 已复制到剪贴板！");
    });
  };

  // Bind screenshot buttons
  const btnScreenshotAll = shadow.getElementById("btn-screenshot-all");
  if (btnScreenshotAll) {
    btnScreenshotAll.onclick = () => {
      dockPanel.style.display = "none";
      takeScreenshot(null); // Full page
    };
  }

  btnCopyPrompt.onclick = () => {
    const promptText = generatePrompt();
    navigator.clipboard.writeText(promptText).then(() => {
      showToast("🎉 AI 修改指令已复制到剪贴板！可直接粘贴至 AI 对话框");
    }).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = promptText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast("🎉 AI 修改指令已复制！");
    });
  };

  btnResetAll.onclick = () => {
    if (confirm("确定要放弃所有调整并还原吗？")) {
      changes.forEach((data, el) => {
        for (const k of Object.keys(data.mods)) {
          el.style[k] = "";
        }
      });
      changes.clear();
      undoStack.length = 0;
      redoStack.length = 0;
      selectedEl = null;
      updateSelection();
      updateDock();
      updateHistoryButtons();
      showToast("已还原所有改动");
    }
  };

  btnExit.onclick = () => {
    window.__aiVisualTweakActive = false;
    host.style.display = "none";
    hoverBox.style.display = "none";
    selectBox.style.display = "none";
    toolbar.style.display = "none";
    showToast("已退出可视化微调模式");
  };

  updateHistoryButtons();
  showToast("🚀 CanvasCode v1.0 已就绪！双击改字 · 8手柄拉伸 · Ctrl+Z撤销");
})();
