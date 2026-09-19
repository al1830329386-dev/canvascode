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
      if (window.__aiShowToast) window.__aiShowToast("微调模式已恢复");
    } else {
      existing.style.display = "none";
      window.__aiVisualTweakActive = false;
    }
    return;
  }

  window.__aiVisualTweakActive = true;
  window.__canvascodeToggle = function() {
    const el = document.getElementById(HOST_ID);
    if (!el) return;
    if (el.style.display === "none") {
      el.style.display = "block";
      window.__aiVisualTweakActive = true;
      if (window.__aiShowToast) window.__aiShowToast("微调模式已恢复");
    } else {
      el.style.display = "none";
      window.__aiVisualTweakActive = false;
    }
  };

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
      transition: outline 0.15s ease;
    }
    .select-box.pulse {
      animation: selectBoxPulse 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes selectBoxPulse {
      0% { transform: scale(1.03); box-shadow: 0 0 0 8px rgba(99, 102, 241, 0.65); border-color: #6366f1; }
      50% { transform: scale(1.01); box-shadow: 0 0 0 12px rgba(99, 102, 241, 0.28); border-color: #818cf8; }
      100% { transform: scale(1); box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2); border-color: #3b82f6; }
    }

    /* 4 Border Drag Edges (PPT Style: Top, Right, Bottom, Left) */
    .border-edge {
      position: absolute; pointer-events: auto; z-index: 2147483642;
      cursor: move; box-sizing: border-box;
      transition: background 0.15s ease;
    }
    .border-edge.edge-top {
      top: -6px; left: 0; right: 0; height: 12px;
    }
    .border-edge.edge-bottom {
      bottom: -6px; left: 0; right: 0; height: 12px;
    }
    .border-edge.edge-left {
      left: -6px; top: 0; bottom: 0; width: 12px;
    }
    .border-edge.edge-right {
      right: -6px; top: 0; bottom: 0; width: 12px;
    }
    .border-edge::after {
      content: ''; position: absolute; inset: 0;
      border-radius: 4px;
      transition: background 0.15s ease;
      pointer-events: none;
    }
    .border-edge:hover::after {
      background: rgba(59, 130, 246, 0.28);
      box-shadow: 0 0 10px rgba(59, 130, 246, 0.45);
    }
    .border-edge:active {
      cursor: grabbing;
    }
    .border-edge:active::after {
      background: rgba(37, 99, 235, 0.55);
    }

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

    /* Floating Toolbar (Classic Office / Word Professional Layout) */
    .toolbar {
      position: fixed; z-index: 2147483646; background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(28px) saturate(190%); -webkit-backdrop-filter: blur(28px) saturate(190%);
      color: #0f172a; border-radius: 16px; padding: 12px 14px;
      box-shadow: 0 24px 50px -12px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(226, 232, 240, 0.9);
      display: none; flex-direction: column; gap: 7px; width: 396px; font-size: 12px;
      animation: fadeIn 0.15s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

    .tb-header {
      display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(226, 232, 240, 0.85);
      padding-bottom: 8px; user-select: none; gap: 8px;
    }
    .tb-title-group { display: flex; align-items: center; gap: 6px; flex: 1; min-width: 0; overflow: hidden; }
    .tb-drag-grip {
      font-size: 13px; color: #94a3b8; cursor: move; padding: 2px 4px; border-radius: 4px;
      transition: all 0.1s; user-select: none; flex-shrink: 0;
    }
    .tb-drag-grip:hover { color: #475569; background: rgba(0,0,0,0.06); }
    .tb-comp-name-chip {
      display: inline-flex; align-items: center; gap: 5px; cursor: pointer;
      padding: 2px 7px; border-radius: 6px; transition: all 0.15s ease;
      background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.22);
      max-width: 135px; overflow: hidden;
    }
    .tb-comp-name-chip:hover {
      background: #e0e7ff; border-color: #6366f1; transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(99, 102, 241, 0.2);
    }
    .tb-comp-name-chip:active { transform: scale(0.96); }
    .tb-tag-badge {
      background: linear-gradient(135deg, #4f46e5, #6366f1); color: #ffffff;
      font-size: 10px; font-weight: 700; padding: 1px 5px; border-radius: 4px; flex-shrink: 0; font-family: monospace;
    }
    .tb-title { font-weight: 700; color: #0f172a; font-size: 11.5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; min-width: 0; }
    .tb-copy-hint {
      font-size: 9.5px; color: #4338ca; background: #c7d2fe; padding: 1px 4px; border-radius: 4px; font-weight: 700; white-space: nowrap; display: none;
    }
    .tb-comp-name-chip:hover .tb-copy-hint { display: inline-block; }

    .tb-parent-btn {
      font-size: 10.5px; font-weight: 700; color: #4338ca; background: #e0e7ff;
      border: 1px solid #c7d2fe; border-radius: 6px; padding: 2.5px 6px;
      cursor: pointer; transition: all 0.12s; flex-shrink: 0; white-space: nowrap;
      display: inline-flex; align-items: center; gap: 2px;
    }
    .tb-parent-btn:hover { background: #c7d2fe; color: #3730a3; transform: translateY(-1px); }
    .tb-parent-btn:active { transform: scale(0.96); }
    .tb-parent-btn:disabled { opacity: 0.35; cursor: not-allowed; }

    .tb-actions-top { display: flex; align-items: center; gap: 3px; flex-shrink: 0; white-space: nowrap; }
    .tb-icon-btn {
      cursor: pointer; color: #64748b; font-size: 13px; padding: 3px 5px; border-radius: 6px;
      background: transparent; border: none; transition: all 0.1s; display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .tb-icon-btn:hover { color: #0f172a; background: rgba(0,0,0,0.06); }
    .tb-icon-btn:disabled { opacity: 0.3; cursor: not-allowed; }

    /* Word / Office Style Logical Group Box */
    .word-group-box {
      background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px;
      padding: 6px 9px 7px; display: flex; flex-direction: column; gap: 5px;
      box-shadow: 0 1px 2px rgba(15, 23, 42, 0.02);
    }
    .word-group-header {
      display: flex; align-items: center; justify-content: space-between;
      font-size: 10.5px; font-weight: 700; color: #475569;
      border-bottom: 1px solid #edf2f7; padding-bottom: 3px;
      user-select: none; letter-spacing: 0.2px;
    }
    .word-group-badge {
      font-size: 9px; font-weight: 600; color: #6366f1; background: #eef2ff;
      padding: 1px 5px; border-radius: 4px;
    }
    .word-control-row {
      display: flex; align-items: center; justify-content: space-between; gap: 6px; min-height: 25px;
    }
    .word-sublabel {
      font-size: 10.5px; font-weight: 700; color: #64748b; flex-shrink: 0; min-width: 44px; user-select: none;
    }
    .tb-font-size-val {
      font-size: 11px; font-weight: 700; color: #4338ca; padding: 0 4px; min-width: 32px; text-align: center;
      user-select: none;
    }

    /* Arrange Ribbon Grid */
    .word-arrange-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px;
    }
    .word-arrange-btn {
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1px;
      padding: 5px 3px; border-radius: 7px; background: #ffffff; border: 1px solid #e2e8f0;
      color: #334155; font-size: 11px; font-weight: 600; cursor: pointer; transition: all 0.12s ease;
      user-select: none; box-shadow: 0 1px 2px rgba(0,0,0,0.03); line-height: 1.15;
    }
    .word-arrange-btn .btn-icon { font-size: 13px; line-height: 1; }
    .word-arrange-btn .btn-subtext { font-size: 9px; color: #94a3b8; font-weight: 500; }
    .word-arrange-btn:hover {
      background: #e0e7ff; border-color: #c7d2fe; color: #4338ca; transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(99, 102, 241, 0.18);
    }
    .word-arrange-btn:hover .btn-subtext { color: #6366f1; }
    .word-arrange-btn:active { transform: scale(0.96); }
    .word-arrange-btn.btn-danger:hover {
      background: #fee2e2; border-color: #fca5a5; color: #dc2626;
    }
    .word-arrange-btn.btn-danger:hover .btn-subtext { color: #ef4444; }

    /* Polished Control Rows */
    .tb-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 28px; }
    .tb-label {
      font-size: 11px; font-weight: 700; color: #64748b; width: 44px;
      text-transform: uppercase; letter-spacing: 0.3px; flex-shrink: 0; user-select: none;
    }
    .tb-controls { display: flex; align-items: center; gap: 5px; flex: 1; min-width: 0; }

    /* Button Styles */
    .tb-btn {
      background: #ffffff; border: 1px solid #e2e8f0; border-radius: 7px; padding: 3.5px 7.5px;
      font-size: 11.5px; cursor: pointer; color: #334155; transition: all 0.12s ease; font-weight: 500;
      user-select: none; display: inline-flex; align-items: center; justify-content: center; gap: 3px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.02); white-space: nowrap; flex-shrink: 0; line-height: 1.2;
    }
    .tb-btn:hover { background: #e0e7ff; border-color: #c7d2fe; color: #4338ca; transform: translateY(-1px); }
    .tb-btn:active { transform: scale(0.96); }
    .tb-btn-primary {
      background: #eef2ff; border-color: #c7d2fe; color: #4f46e5; font-weight: 600;
    }
    .tb-btn-primary:hover {
      background: #4f46e5; border-color: #4f46e5; color: #ffffff; box-shadow: 0 2px 8px rgba(79, 70, 229, 0.28);
    }
    .tb-btn-danger:hover { background: #fee2e2; border-color: #fca5a5; color: #dc2626; }

    /* Stepper Pill Box */
    .tb-stepper-box {
      display: inline-flex; align-items: center; background: #f8fafc; border: 1px solid #e2e8f0;
      border-radius: 7px; overflow: hidden; padding: 2px; gap: 2px; flex-shrink: 0;
    }
    .tb-stepper-name {
      font-size: 10.5px; font-weight: 700; color: #64748b; padding: 0 5px; user-select: none; white-space: nowrap;
    }
    .tb-step-btn {
      background: #ffffff; border: 1px solid #e2e8f0; border-radius: 5px; font-size: 11px;
      font-weight: 600; color: #334155; padding: 2px 7px; cursor: pointer; transition: all 0.1s;
      user-select: none; white-space: nowrap; line-height: 1.2;
    }
    .tb-step-btn:hover { background: #e0e7ff; color: #4338ca; border-color: #c7d2fe; }
    .tb-step-btn:active { transform: scale(0.95); }

    /* Palette Row */
    .color-palette-row {
      display: flex; align-items: center; justify-content: space-between; flex: 1; min-width: 0;
    }
    .color-swatch {
      width: 20px; height: 20px; border-radius: 50%; cursor: pointer; border: 1.5px solid rgba(0,0,0,0.12);
      box-shadow: 0 1px 3px rgba(0,0,0,0.08); transition: transform 0.12s ease, box-shadow 0.12s ease; flex-shrink: 0;
    }
    .color-swatch:hover { transform: scale(1.22); box-shadow: 0 2px 8px rgba(0,0,0,0.22); }
    
    .txt-color-swatch {
      width: 19px; height: 19px; border-radius: 50%; cursor: pointer; border: 1.5px solid rgba(0,0,0,0.12);
      box-shadow: 0 1px 3px rgba(0,0,0,0.08); transition: transform 0.12s ease, box-shadow 0.12s ease; flex-shrink: 0;
    }
    .txt-color-swatch:hover { transform: scale(1.22); box-shadow: 0 2px 8px rgba(0,0,0,0.22); }
    
    .custom-color-picker-wrapper {
      position: relative; width: 20px; height: 20px; border-radius: 50%; overflow: hidden; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
      border: 1.5px solid rgba(0,0,0,0.15); box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      transition: transform 0.12s; flex-shrink: 0;
    }
    .custom-color-picker-wrapper:hover { transform: scale(1.22); box-shadow: 0 2px 8px rgba(0,0,0,0.25); }
    .custom-color-picker-wrapper input[type="color"] {
      position: absolute; inset: -10px; opacity: 0; width: 40px; height: 40px; cursor: pointer;
    }

    /* Slider Box */
    .tb-slider-box { display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0; }
    .tb-range-slider {
      flex: 1; -webkit-appearance: none; appearance: none; height: 6px;
      border-radius: 6px; background: #e2e8f0; outline: none; cursor: pointer;
      transition: background 0.15s ease;
    }
    .tb-range-slider::-webkit-slider-thumb {
      -webkit-appearance: none; appearance: none; width: 16px; height: 16px;
      border-radius: 50%; background: #4f46e5; cursor: pointer;
      box-shadow: 0 1px 4px rgba(79, 70, 229, 0.4); transition: transform 0.1s ease, background-color 0.1s ease;
    }
    .tb-range-slider::-webkit-slider-thumb:hover { transform: scale(1.2); background: #4338ca; }
    .tb-range-slider::-webkit-slider-thumb:active { transform: scale(1.05); background: #3730a3; }
    .tb-range-slider::-moz-range-thumb {
      width: 16px; height: 16px; border: none;
      border-radius: 50%; background: #4f46e5; cursor: pointer;
      box-shadow: 0 1px 4px rgba(79, 70, 229, 0.4);
    }
    .tb-val-badge {
      font-size: 11px; font-weight: 700; color: #4338ca; background: #e0e7ff;
      padding: 2px 7px; border-radius: 6px; min-width: 38px; text-align: center;
      font-variant-numeric: tabular-nums; user-select: none; flex-shrink: 0;
    }

    /* Comment Box */
    .tb-comment-box {
      margin-top: 2px; padding-top: 7px; border-top: 1px dashed rgba(226, 232, 240, 0.85);
      display: flex; flex-direction: column; gap: 4px;
    }
    .tb-comment-title {
      font-size: 11px; font-weight: 700; color: #475569; display: flex; justify-content: space-between; align-items: center;
    }
    .tb-comment-sub { font-weight: normal; color: #94a3b8; font-size: 10.5px; }
    .tb-comment-input {
      width: 100%; border: 1px solid #cbd5e1; border-radius: 8px; padding: 6px 9px; font-size: 11.5px;
      resize: vertical; min-height: 44px; outline: none; background: #f8fafc; transition: all 0.15s; line-height: 1.4;
    }
    .tb-comment-input:focus { border-color: #6366f1; background: #fff; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }

    /* Bottom Global Dock (Pill & Panel) */
    .dock {
      position: fixed; bottom: 46px; right: 20px; z-index: 2147483645; display: flex; flex-direction: column;
      align-items: flex-end; gap: 10px;
    }

    .dock-pill {
      background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #fff; padding: 10px 18px;
      border-radius: 9999px; font-weight: 600; font-size: 13px; box-shadow: 0 10px 28px rgba(79, 70, 229, 0.4);
      cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.15s cubic-bezier(0.16, 1, 0.3, 1);
      user-select: none; border: 1px solid transparent;
    }
    .dock-pill:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(79, 70, 229, 0.5); }
    .dock-pill:active { transform: translateY(0); }
    .dock-pill.paused {
      background: #0f172a; color: #cbd5e1; border: 1px solid #334155; box-shadow: 0 6px 20px rgba(0,0,0,0.25);
    }
    .dock-pill.paused:hover {
      background: #1e293b; color: #ffffff; border-color: #64748b;
    }
    .dock-status-dot {
      width: 8px; height: 8px; border-radius: 50%; display: inline-block; flex-shrink: 0;
    }
    .dock-status-dot.active { background: #10b981; box-shadow: 0 0 8px #10b981; }
    .dock-status-dot.paused { background: #94a3b8; }
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

  // Selected Box & Drag Handle & 8 PPT-style Resize Handles & 4 Border Drag Edges
  const selectBox = document.createElement("div");
  selectBox.className = "select-box";

  // 4 PPT-style Border Drag Edges (Top, Right, Bottom, Left)
  const borderEdgeDirs = ["top", "right", "bottom", "left"];
  const borderEdges = [];
  borderEdgeDirs.forEach(edgeDir => {
    const edge = document.createElement("div");
    edge.className = `border-edge edge-${edgeDir}`;
    edge.dataset.edge = edgeDir;
    edge.title = "按住边框直接拖拽平移 (PPT 模式 · 支持磁吸对齐)";
    selectBox.appendChild(edge);
    borderEdges.push(edge);
  });

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
        <h3>修改记录与规格</h3>
        <div style="display:flex;gap:6px;align-items:center;">
          <button class="tb-icon-btn" id="dock-undo" title="撤销 (Ctrl+Z)">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>
          </button>
          <button class="tb-icon-btn" id="dock-redo" title="重做 (Ctrl+Y)">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13"/></svg>
          </button>
          <button class="tb-icon-btn" id="panel-close" title="收起面板">✕</button>
        </div>
      </div>
      <div class="panel-settings-bar" style="padding: 9px 18px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 12px; font-weight: 600; color: #475569;">磁吸对齐</span>
        <button class="tb-toggle-btn active" id="dock-toggle-snap" title="拖拽时靠近周围元素自动吸附 (快捷键: S)">
          已开启
        </button>
      </div>
      <div class="panel-list" id="panel-list">
        <div class="empty-state">
          点击页面组件开始调整<br/>
          <span style="font-size:11px;color:#94a3b8">四周任意边框拖拽 · 8个手柄拉伸尺寸 · 方向键像素微调</span>
        </div>
      </div>
      <div class="panel-actions">
        <button class="btn-primary" id="btn-copy-prompt">复制修改 Prompt</button>
        <button class="btn-primary" style="background: #0284c7;" id="btn-screenshot-all">导出截图与 Prompt</button>
        <div style="display: flex; gap: 8px;">
          <button class="btn-sub" style="flex:1" id="btn-reset-all">全部重置</button>
          <button class="btn-sub" style="flex:1" id="btn-exit" title="暂停微调模式，恢复正常浏览">暂停微调</button>
        </div>
      </div>
    </div>
    <div class="dock-pill" id="dock-pill" title="微调模式状态开关：点击可切换开启/暂停或展开面板">
      <span class="dock-status-dot active"></span>
      <span id="dock-status-text">CanvasCode (运行中)</span>
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
        <h3>导出修改记录与截图</h3>
        <span class="tb-close" id="modal-close">✕</span>
      </div>
      <div class="modal-body">
        <div style="font-size:12px;color:#64748b;line-height:1.5;">
          页面当前修改状态已完成截图。可复制图像或下载，结合下方 Prompt 指令更新代码。
        </div>
        <div class="img-preview-box">
          <img id="modal-img-preview" src="" alt="Screenshot" />
        </div>
        <div style="font-size:11px;font-weight:700;color:#475569;">Prompt 摘要：</div>
        <div class="prompt-preview-box" id="modal-prompt-preview"></div>
      </div>
      <div class="modal-footer">
        <div style="display:flex;gap:6px;">
          <button class="btn-primary" style="padding:7px 14px;font-size:12px;" id="modal-copy-img">复制图片</button>
          <button class="btn-sub" id="modal-download-img">下载图片</button>
          <button class="btn-sub" id="modal-copy-text">复制 Prompt</button>
        </div>
        <button class="btn-sub" id="modal-close-btn">关闭</button>
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
    const dockSnapBtn = shadow.getElementById("dock-toggle-snap");
    if (dockSnapBtn) {
      dockSnapBtn.className = `tb-toggle-btn ${isSnapEnabled ? 'active' : ''}`;
      dockSnapBtn.textContent = isSnapEnabled ? `已开启` : `已关闭`;
      dockSnapBtn.style.color = isSnapEnabled ? '#4338ca' : '#64748b';
      dockSnapBtn.style.background = isSnapEnabled ? '#e0e7ff' : '#f1f5f9';
      dockSnapBtn.style.borderColor = isSnapEnabled ? '#a5b4fc' : '#cbd5e1';
    }
    window.dispatchEvent(new CustomEvent("canvascode:snapChanged", { detail: { isSnapEnabled } }));
  }

  function toggleSnap() {
    isSnapEnabled = !isSnapEnabled;
    updateSnapUI();
    showToast(isSnapEnabled ? "已开启磁吸对齐" : "已关闭磁吸对齐");
  }
  window.__canvascodeToggleSnap = toggleSnap;

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
      showToast("无撤销历史");
      return;
    }
    const action = undoStack.pop();
    redoStack.push(action);

    applyAction(action, true);
    updateHistoryButtons();
    updateDock();
    updateSelection();
    showToast(`已撤销: ${action.label || '操作'}`);
  }

  function redo() {
    if (redoStack.length === 0) {
      showToast("无重做历史");
      return;
    }
    const action = redoStack.pop();
    undoStack.push(action);

    applyAction(action, false);
    updateHistoryButtons();
    updateDock();
    updateSelection();
    showToast(`已重做: ${action.label || '操作'}`);
  }

  function applyAction(action, isUndo) {
    const el = action.el;
    if (!el || !el.isConnected) return;

    if (action.type === "style") {
      const val = isUndo ? action.prevVal : action.nextVal;
      if (action.prop === "innerText") {
        el.innerText = val || "";
      } else {
        el.style[action.prop] = val || "";
      }
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
      if (selectedEl === el && action.prop === "borderRadius" && toolbar) {
        const rSlider = toolbar.querySelector("#r-slider");
        const rValBadge = toolbar.querySelector("#r-val-badge");
        if (rSlider && rValBadge) {
          const curR = parseInt(val) || 0;
          if (val === "9999px" || curR >= 999) {
            rSlider.value = 64;
            rValBadge.textContent = "全圆";
          } else {
            rSlider.value = Math.min(64, curR);
            rValBadge.textContent = `${curR}px`;
          }
        }
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
    } else if (action.type === "order") {
      const targetSibling = isUndo ? action.prevNextSibling : action.nextNextSibling;
      if (action.parent && action.el) {
        if (targetSibling && targetSibling.parentElement === action.parent) {
          action.parent.insertBefore(action.el, targetSibling);
        } else {
          action.parent.appendChild(action.el);
        }
      }
      triggerOrderPulse();
    }
  }

  function triggerOrderPulse() {
    if (selectBox) {
      selectBox.classList.remove("pulse");
      void selectBox.offsetWidth;
      selectBox.classList.add("pulse");
      setTimeout(() => selectBox.classList.remove("pulse"), 500);
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

    try {
      window.dispatchEvent(new CustomEvent("canvascode:historyChanged", {
        detail: { canUndo: undoStack.length > 0, canRedo: redoStack.length > 0 }
      }));
    } catch (e) {}
  }

  window.__canvascodeUndo = undo;
  window.__canvascodeRedo = redo;

  // --- TAILWIND MAPPER ---
  const TAILWIND_COLOR_MAP = {
    "#10b981": { name: "清新绿", bg: "bg-emerald-500", text: "text-emerald-500" },
    "#059669": { name: "翡翠绿", bg: "bg-emerald-600", text: "text-emerald-600" },
    "#3b82f6": { name: "科技蓝", bg: "bg-blue-500", text: "text-blue-500" },
    "#2563eb": { name: "品牌蓝", bg: "bg-blue-600", text: "text-blue-600" },
    "#8b5cf6": { name: "优雅紫", bg: "bg-purple-500", text: "text-purple-500" },
    "#7c3aed": { name: "高贵紫", bg: "bg-violet-600", text: "text-violet-600" },
    "#f43f5e": { name: "珊瑚红", bg: "bg-rose-500", text: "text-rose-500" },
    "#dc2626": { name: "正红", bg: "bg-red-600", text: "text-red-600" },
    "#f59e0b": { name: "暖阳橙", bg: "bg-amber-500", text: "text-amber-500" },
    "#d97706": { name: "活力橙", bg: "bg-amber-600", text: "text-amber-600" },
    "#0f172a": { name: "暗黑", bg: "bg-slate-900", text: "text-slate-900" },
    "#475569": { name: "中灰", bg: "bg-slate-600", text: "text-slate-600" },
    "#64748b": { name: "次级灰", bg: "bg-slate-500", text: "text-slate-500" },
    "#ffffff": { name: "纯白", bg: "bg-white", text: "text-white" },
    "#f8fafc": { name: "浅灰", bg: "bg-slate-50", text: "text-slate-50" },
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
    const isText = prop === "innerText";
    const prevVal = isText ? (el.innerText || el.textContent || "") : el.style[prop];
    const tw = isText ? "" : getTailwindHint(prop, val);
    const originalVal = isText ? prevVal : window.getComputedStyle(el)[prop];

    pushHistory({
      type: "style",
      el,
      prop,
      prevVal,
      nextVal: val,
      original: originalVal,
      label: label || prop,
      tailwind: tw
    });

    const entry = initChangeEntry(el);
    if (!entry.mods[prop]) {
      entry.mods[prop] = {
        original: originalVal,
        current: val,
        label: label || prop,
        tailwind: tw
      };
    } else {
      entry.mods[prop].current = val;
      entry.mods[prop].tailwind = tw;
    }
    if (isText) {
      el.innerText = val;
    } else {
      el.style[prop] = val;
    }
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
    if (prevT.dx === dx && prevT.dy === dy) return;

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
        const snapBadge = v.snapNote ? `<div style="color:#f43f5e;font-size:10px;font-weight:600;margin-top:2px;">[对齐] ${v.snapNote}</div>` : "";
        details += `<div>• ${v.label}: <span class="diff-prop">${v.current}</span> ${twBadge} ${snapBadge}</div>`;
      }
      const commentHtml = data.comment ? `<div class="diff-comment">批注: ${data.comment}</div>` : "";

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
    if (typeof notifyStudioState === "function") notifyStudioState();
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
      showToast("工具栏已恢复自动跟随");
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
    if (typeof notifyStudioSelection === "function") notifyStudioSelection(selectedEl);

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
    if (handle && selectedEl) {

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
    showToast("按住手柄调整尺寸（Shift 等比缩放）");
    return;
  }

  const edge = e.target.closest(".border-edge");
  if (edge && selectedEl) {
    startDragMove(e);
    return;
  }
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
    tuneHud.textContent = `尺寸: ${newW} × ${newH} px${e.shiftKey ? ' [等比锁定]' : ''}`;
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
      showToast(`尺寸: ${currentResizeSize.w} × ${currentResizeSize.h} px`);
    }

    setTimeout(() => {
      tuneHud.style.display = "none";
    }, 1500);
  }

  function startDragMove(e) {
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
    document.body.style.cursor = "grabbing";

    showToast(isSnapEnabled ? "拖拽平移中（Alt 自由移动）" : "自由拖拽平移中");
  }

  borderEdges.forEach(edge => {
    edge.addEventListener("mousedown", startDragMove);
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
    document.body.style.cursor = "";
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
      showToast(`已移动至 (${currentTranslate.x}px, ${currentTranslate.y}px)`);
    }
  });

  // --- KEYBOARD ARROW KEYS FINE-TUNING (1px / Shift+10px) & SHORTCUTS (Ctrl+Z / Ctrl+Y) ---
  window.addEventListener("keydown", (e) => {
    if (!window.__aiVisualTweakActive) return;
    if (inlineEditingEl) return; // Allow normal typing in inline text edit mode

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
        recordChange(target, "display", "none", "隐藏该组件(hidden)");
        selectedEl = null;
        updateSelection();
        showToast("已隐藏组件 (Ctrl+Z 可撤销)");
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
        tuneHud.textContent = `坐标: X:${curX > 0 ? '+' : ''}${curX}px, Y:${curY > 0 ? '+' : ''}${curY}px (${step}px)`;
        tuneHud.style.display = "block";
        clearTimeout(tuneHud._timer);
        tuneHud._timer = setTimeout(() => { tuneHud.style.display = "none"; }, 1500);
      }
    }
  });

  // --- LAYER Z-INDEX STACKING (100% Keeps Position In Place / 保持在原处不动) ---
  function moveElementZIndex(el, direction) {
    if (!el || !el.isConnected) return;

    const comp = window.getComputedStyle(el);
    const isStatic = comp.position === "static";

    // In standard CSS, z-index only takes effect on positioned elements (relative/absolute/sticky/fixed)
    if (isStatic) {
      recordChange(el, "position", "relative", "相对定位 (保持原位启用图层)");
    }

    let curZ = parseInt(comp.zIndex);
    if (isNaN(curZ)) curZ = 0;

    // Scan sibling elements to calculate smart z-index step
    let siblings = [];
    if (el.parentElement) {
      siblings = Array.from(el.parentElement.children).filter(c => c !== el);
    }
    let maxSiblingZ = 0;
    let minSiblingZ = 0;
    siblings.forEach(s => {
      const sz = parseInt(window.getComputedStyle(s).zIndex);
      if (!isNaN(sz)) {
        if (sz > maxSiblingZ) maxSiblingZ = sz;
        if (sz < minSiblingZ) minSiblingZ = sz;
      }
    });

    let nextZ;
    if (direction === 1) {
      // Bring Forward (上移一层 / 浮于上方)
      nextZ = curZ <= maxSiblingZ ? maxSiblingZ + 1 : curZ + 1;
      if (nextZ <= 0) nextZ = 1;
    } else {
      // Send Backward (下移一层 / 沉于下方)
      nextZ = curZ > minSiblingZ ? Math.min(curZ - 1, minSiblingZ) : curZ - 1;
      if (curZ === 0) nextZ = -1;
    }

    recordChange(el, "zIndex", `${nextZ}`, direction === 1 ? `图层上移 (z-index: ${nextZ})` : `图层下移 (z-index: ${nextZ})`);
    el.style.zIndex = nextZ;

    triggerOrderPulse();
    updateSelection();
    updateDock();

    if (direction === 1) {
      showToast(`图层上移 (z-index: ${nextZ})`);
    } else {
      showToast(`图层下移 (z-index: ${nextZ})`);
    }
  }

  // --- DOM ELEMENT REORDERING (With Smart Parent Bubbling & Animation) ---
  function moveElementOrder(el, direction) {
    if (!el || !el.isConnected) return;

    let target = el;
    let moved = false;
    let oldParent = target.parentElement;
    let oldNextSibling = target.nextElementSibling;

    if (direction === -1) {
      // Move Previous / Bring Forward
      if (target.previousElementSibling) {
        target.previousElementSibling.before(target);
        moved = true;
      } else if (oldParent && oldParent !== document.body && oldParent !== document.documentElement && oldParent.previousElementSibling) {
        // Smart bubble to parent container if target has no previous sibling
        oldParent.previousElementSibling.before(oldParent);
        target = oldParent;
        selectedEl = target;
        renderToolbar(target);
        moved = true;
        showToast(`已选中并前移父级容器: <${target.tagName.toLowerCase()}>`);
      }
    } else {
      // Move Next / Send Backward
      if (target.nextElementSibling) {
        target.nextElementSibling.after(target);
        moved = true;
      } else if (oldParent && oldParent !== document.body && oldParent !== document.documentElement && oldParent.nextElementSibling) {
        // Smart bubble to parent container if target has no next sibling
        oldParent.nextElementSibling.after(oldParent);
        target = oldParent;
        selectedEl = target;
        renderToolbar(target);
        moved = true;
        showToast(`已选中并后移父级容器: <${target.tagName.toLowerCase()}>`);
      }
    }

    if (moved) {
      const newNextSibling = target.nextElementSibling;
      const newParent = target.parentElement;

      // Push history action
      pushHistory({
        type: "order",
        el: target,
        parent: newParent,
        prevNextSibling: oldNextSibling,
        nextNextSibling: newNextSibling,
        label: direction === -1 ? "前移一层" : "后移一层"
      });

      // Record to changes map
      const entry = initChangeEntry(target);
      entry.mods["order"] = {
        original: "默认排列位置",
        current: direction === -1 ? "向前调换位置 (DOM 节点前移)" : "向后调换位置 (DOM 节点后移)",
        label: direction === -1 ? "组件顺序向前移动" : "组件顺序向后移动",
        tailwind: "order / DOM 顺序重排"
      };

      triggerOrderPulse();
      updateSelection();
      updateDock();

      if (target === el) {
        showToast(direction === -1 ? "已向前移动组件顺序" : "已向后移动组件顺序");
      }
    } else {
      showToast("已处于同级边缘，无法继续移动");
    }
  }

  // --- TOOLBAR RENDERING (Classic Office / Word Ribbon Layout) ---
  function renderToolbar(el) {
    const summary = getElementSummary(el);
    const style = window.getComputedStyle(el);
    const entry = initChangeEntry(el);
    const currentFontSize = parseInt(style.fontSize) || 14;
    const isBold = style.fontWeight === "bold" || parseInt(style.fontWeight) >= 700;

    toolbar.innerHTML = `
      <!-- Toolbar Header -->
      <div class="tb-header" title="按住可拖动悬浮窗 · 双击恢复自动跟随">
        <div class="tb-title-group">
          <span class="tb-drag-grip" title="按住拖拽悬浮窗位置">⠿</span>
          <div class="tb-comp-name-chip" id="tb-copy-comp-name" title="点击复制选择器 (${summary.selector})">
            <span class="tb-tag-badge">&lt;${el.tagName.toLowerCase()}&gt;</span>
            <div class="tb-title">${summary.selector}</div>
            <span class="tb-copy-hint">复制</span>
          </div>
          <button class="tb-parent-btn" id="tb-select-parent" title="向上选中外层父容器">↑ 父级</button>
          <button class="tb-parent-btn" id="tb-select-child" title="向下选中内部子元素">↓ 子级</button>
        </div>
        <div class="tb-actions-top">
          <button class="tb-icon-btn" id="tb-undo" title="撤销 (Ctrl+Z)">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>
          </button>
          <button class="tb-icon-btn" id="tb-redo" title="重做 (Ctrl+Y)">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13"/></svg>
          </button>
          <button class="tb-icon-btn" id="tb-close" title="取消选择 (Esc)">✕</button>
        </div>
      </div>

      <!-- 1. 文字样式 -->
      <div class="word-group-box">
        <div class="word-group-header">
          <span>文字样式</span>
          <span class="word-group-badge">Font</span>
        </div>
        <div class="word-control-row">
          <div class="tb-stepper-box">
            <span class="tb-stepper-name">字号</span>
            <button class="tb-step-btn" id="txt-smaller" title="字号减小 2px">A⁻</button>
            <span class="tb-font-size-val" id="txt-size-val">${currentFontSize}px</span>
            <button class="tb-step-btn" id="txt-bigger" title="字号增大 2px">A⁺</button>
          </div>
          <button class="tb-btn ${isBold ? 'tb-btn-primary' : ''}" id="txt-bold" title="切换加粗 (font-bold)" style="font-weight:700; padding:3px 10px;">加粗</button>
        </div>
        <div class="word-control-row">
          <span class="word-sublabel">文字颜色</span>
          <div class="txt-color-palette" style="display:flex; align-items:center; gap:5px; flex:1; justify-content:flex-end;">
            <div class="txt-color-swatch" style="background:#0f172a;" title="深黑 (slate-900)" data-color="#0f172a"></div>
            <div class="txt-color-swatch" style="background:#475569;" title="中灰 (slate-600)" data-color="#475569"></div>
            <div class="txt-color-swatch" style="background:#ffffff; border:1.5px solid #cbd5e1;" title="纯白 (white)" data-color="#ffffff"></div>
            <div class="txt-color-swatch" style="background:#2563eb;" title="蓝色 (blue-600)" data-color="#2563eb"></div>
            <div class="txt-color-swatch" style="background:#059669;" title="绿色 (emerald-600)" data-color="#059669"></div>
            <div class="txt-color-swatch" style="background:#7c3aed;" title="紫色 (violet-600)" data-color="#7c3aed"></div>
            <div class="txt-color-swatch" style="background:#dc2626;" title="红色 (rose-600)" data-color="#dc2626"></div>
            <div class="txt-color-swatch" style="background:#d97706;" title="橙色 (amber-600)" data-color="#d97706"></div>
            <div class="custom-color-picker-wrapper" title="自定义文字颜色">
              <input type="color" id="txt-color-picker" value="#0f172a" />
            </div>
          </div>
        </div>
      </div>

      <!-- 2. 外观与背景 -->
      <div class="word-group-box">
        <div class="word-group-header">
          <span>外观与背景</span>
          <span class="word-group-badge">Appearance</span>
        </div>
        <div class="word-control-row">
          <span class="word-sublabel">背景底色</span>
          <div class="color-palette-row" style="display:flex; align-items:center; gap:5px; flex:1; justify-content:flex-end;">
            <div class="color-swatch" style="background:#ffffff; border:1.5px solid #cbd5e1;" title="纯白 (white)" data-color="#ffffff"></div>
            <div class="color-swatch" style="background:#f8fafc; border:1.5px solid #cbd5e1;" title="浅灰 (slate-50)" data-color="#f8fafc"></div>
            <div class="color-swatch" style="background:#0f172a;" title="深色 (slate-900)" data-color="#0f172a"></div>
            <div class="color-swatch" style="background:#3b82f6;" title="蓝色 (blue-500)" data-color="#3b82f6"></div>
            <div class="color-swatch" style="background:#10b981;" title="绿色 (emerald-500)" data-color="#10b981"></div>
            <div class="color-swatch" style="background:#8b5cf6;" title="紫色 (purple-500)" data-color="#8b5cf6"></div>
            <div class="color-swatch" style="background:#f43f5e;" title="红色 (rose-500)" data-color="#f43f5e"></div>
            <div class="color-swatch" style="background:#f59e0b;" title="橙色 (amber-500)" data-color="#f59e0b"></div>
            <div class="custom-color-picker-wrapper" title="自定义背景颜色">
              <input type="color" id="bg-color-picker" value="#3b82f6" />
            </div>
          </div>
        </div>
        <div class="word-control-row">
          <span class="word-sublabel">圆角弧度</span>
          <div class="tb-controls tb-slider-box">
            <input type="range" class="tb-range-slider" id="r-slider" min="0" max="64" value="0" step="1" title="滑动调整圆角弧度 (0~64px)" />
            <span class="tb-val-badge" id="r-val-badge">0px</span>
            <button class="tb-btn" id="r-pill" style="padding:2.5px 7px;font-size:11px;color:#4f46e5;font-weight:700;" title="设为全圆角胶囊形态 (rounded-full)">全圆</button>
          </div>
        </div>
      </div>

      <!-- 3. 尺寸与间距 -->
      <div class="word-group-box">
        <div class="word-group-header">
          <span>尺寸与间距</span>
          <span class="word-group-badge">Layout</span>
        </div>
        <!-- 尺寸行：宽 [-][+]、高 [-][+]、100%宽、自适应 -->
        <div class="word-control-row">
          <div class="tb-stepper-box">
            <span class="tb-stepper-name">宽</span>
            <button class="tb-step-btn" id="w-minus" title="宽度减少 20px">－</button>
            <button class="tb-step-btn" id="w-plus" title="宽度增加 20px">＋</button>
          </div>
          <div class="tb-stepper-box">
            <span class="tb-stepper-name">高</span>
            <button class="tb-step-btn" id="h-minus" title="高度减少 20px">－</button>
            <button class="tb-step-btn" id="h-plus" title="高度增加 20px">＋</button>
          </div>
          <button class="tb-btn" id="w-full" title="设置宽度 100% 全宽 (w-full)">100%宽</button>
          <button class="tb-btn" id="sz-auto" title="宽高设为内容自适应 (w-auto / h-auto)">自适应</button>
        </div>
        <!-- 间距行：外距 [-][+]、内距 [-][+]、0外距、0内距 -->
        <div class="word-control-row">
          <div class="tb-stepper-box">
            <span class="tb-stepper-name">外距</span>
            <button class="tb-step-btn" id="m-minus" title="外边距减少 8px">－</button>
            <button class="tb-step-btn" id="m-plus" title="外边距增加 16px">＋</button>
          </div>
          <div class="tb-stepper-box">
            <span class="tb-stepper-name">内距</span>
            <button class="tb-step-btn" id="p-minus" title="内边距减少 4px">－</button>
            <button class="tb-step-btn" id="p-plus" title="内边距增加 8px">＋</button>
          </div>
          <button class="tb-btn" id="m-zero" title="外边距清零 (m-0)">0外距</button>
          <button class="tb-btn" id="p-zero" title="内边距清零 (p-0)">0内距</button>
        </div>
      </div>

      <!-- 4. 图层与排列 -->
      <div class="word-group-box">
        <div class="word-group-header">
          <span>图层与排列</span>
          <span class="word-group-badge">Layers</span>
        </div>
        <div class="word-arrange-grid">
          <button class="word-arrange-btn" id="layer-up" title="图层上移一层 (z-index +1)，保持在原处绝对不动">
            <span class="btn-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </span>
            <span>上移一层</span>
            <span class="btn-subtext">保持原位</span>
          </button>
          <button class="word-arrange-btn" id="layer-down" title="图层下移一层 (z-index -1)，保持在原处绝对不动">
            <span class="btn-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </span>
            <span>下移一层</span>
            <span class="btn-subtext">保持原位</span>
          </button>
          <button class="word-arrange-btn" id="move-swap" title="在网格/列表中与相邻组件调换位置">
            <span class="btn-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>
            </span>
            <span>对调位置</span>
            <span class="btn-subtext">相邻互换</span>
          </button>
          <button class="word-arrange-btn" id="tb-screenshot-el" title="截取当前组件图像">
            <span class="btn-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </span>
            <span>组件截图</span>
            <span class="btn-subtext">导出图像</span>
          </button>
          <button class="word-arrange-btn" id="revert-el" title="重置当前组件样式">
            <span class="btn-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </span>
            <span>重置样式</span>
            <span class="btn-subtext">恢复初始</span>
          </button>
          <button class="word-arrange-btn btn-danger" id="hide-el" title="隐藏此组件">
            <span class="btn-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
            </span>
            <span>隐藏组件</span>
            <span class="btn-subtext">隐藏</span>
          </button>
        </div>
      </div>

      <!-- 5. 需求批注 -->
      <div class="word-group-box">
        <div class="word-group-header">
          <span>需求批注</span>
          <span class="word-group-badge" style="background:#f1f5f9; color:#475569;">Prompt</span>
        </div>
        <textarea class="tb-comment-input" id="tb-comment-field" placeholder="输入对此组件的交互或业务逻辑要求，将随 Prompt 一并导出...">${entry.comment || ''}</textarea>
      </div>
    `;

    // Copy component name on chip click
    const copyChip = toolbar.querySelector("#tb-copy-comp-name");
    if (copyChip) {
      copyChip.onclick = (e) => {
        e.stopPropagation();
        const selectorText = summary.selector;
        navigator.clipboard.writeText(selectorText).then(() => {
          showToast(`已复制选择器: ${selectorText}`);
        }).catch(() => {
          const ta = document.createElement("textarea");
          ta.value = selectorText;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          showToast(`已复制选择器: ${selectorText}`);
        });
      };
    }

    // Select Parent container button
    const selectParentBtn = toolbar.querySelector("#tb-select-parent");
    if (selectParentBtn) {
      if (!el.parentElement || el.parentElement === document.body || el.parentElement === document.documentElement) {
        selectParentBtn.disabled = true;
        selectParentBtn.style.opacity = "0.4";
        selectParentBtn.style.cursor = "not-allowed";
      } else {
        selectParentBtn.onclick = (e) => {
          e.stopPropagation();
          const parent = el.parentElement;
          selectedEl = parent;
          renderToolbar(parent);
          updateSelection();
          showToast(`已选中父级: <${parent.tagName.toLowerCase()}> ${parent.className ? '.' + parent.className.split(' ')[0] : ''}`);
        };
      }
    }

    // Select Child element button (Cycles through children)
    const selectChildBtn = toolbar.querySelector("#tb-select-child");
    if (selectChildBtn) {
      const validChildren = Array.from(el.children || []).filter(c => {
        return c.nodeType === 1 && 
               !c.hasAttribute("data-canvascode-ignore") &&
               !c.classList.contains("canvascode-host") &&
               !['SCRIPT', 'STYLE', 'LINK', 'BR'].includes(c.tagName);
      });

      if (validChildren.length === 0) {
        selectChildBtn.disabled = true;
        selectChildBtn.style.opacity = "0.4";
        selectChildBtn.style.cursor = "not-allowed";
        selectChildBtn.title = "当前元素内无子组件";
      } else {
        selectChildBtn.onclick = (e) => {
          e.stopPropagation();
          let nextIdx = 0;
          if (el.__lastChildIdx !== undefined) {
            nextIdx = (el.__lastChildIdx + 1) % validChildren.length;
          }
          el.__lastChildIdx = nextIdx;
          const targetChild = validChildren[nextIdx];

          selectedEl = targetChild;
          renderToolbar(targetChild);
          updateSelection();
          const tag = targetChild.tagName.toLowerCase();
          const cls = targetChild.className ? '.' + targetChild.className.split(' ')[0] : '';
          const countInfo = validChildren.length > 1 ? ` (${nextIdx + 1}/${validChildren.length})` : '';
          showToast(`已选中子级: <${tag}> ${cls}${countInfo}`);
        };
      }
    }

    // Bind toolbar top actions
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

    // Width / Height (宽 / 高 加减按钮)
    toolbar.querySelector("#w-plus").onclick = () => {
      const curW = parseInt(style.width) || el.offsetWidth;
      recordChange(el, "width", `${curW + 20}px`, "宽度增加20px");
    };
    toolbar.querySelector("#w-minus").onclick = () => {
      const curW = parseInt(style.width) || el.offsetWidth;
      recordChange(el, "width", `${Math.max(20, curW - 20)}px`, "宽度减少20px");
    };
    toolbar.querySelector("#h-plus").onclick = () => {
      const curH = parseInt(style.height) || el.offsetHeight;
      recordChange(el, "minHeight", `${curH + 20}px`, "高度增加20px");
      recordChange(el, "height", `${curH + 20}px`, "高度增加20px");
    };
    toolbar.querySelector("#h-minus").onclick = () => {
      const curH = parseInt(style.height) || el.offsetHeight;
      recordChange(el, "minHeight", `${Math.max(20, curH - 20)}px`, "高度减少20px");
      recordChange(el, "height", `${Math.max(20, curH - 20)}px`, "高度减少20px");
    };
    toolbar.querySelector("#w-full").onclick = () => {
      recordChange(el, "width", "100%", "宽度全宽(w-full)");
    };
    toolbar.querySelector("#sz-auto").onclick = () => {
      recordChange(el, "width", "auto", "宽度自适应(w-auto)");
      recordChange(el, "height", "auto", "高度自适应(h-auto)");
    };

    // Margins / Paddings (外距 / 内距 加减按钮与清零)
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
    const mZeroBtn = toolbar.querySelector("#m-zero");
    if (mZeroBtn) {
      mZeroBtn.onclick = () => {
        recordChange(el, "marginTop", "0px", "外边距清零(mt-0)");
        recordChange(el, "marginBottom", "0px", "外边距清零(mb-0)");
        recordChange(el, "marginLeft", "0px", "外边距清零");
        recordChange(el, "marginRight", "0px", "外边距清零");
        showToast("已将外边距清零 (m-0)");
      };
    }

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
    const pZeroBtn = toolbar.querySelector("#p-zero");
    if (pZeroBtn) {
      pZeroBtn.onclick = () => {
        recordChange(el, "padding", "0px", "内边距清零(p-0)");
        showToast("已将内边距清零 (p-0)");
      };
    }

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
    const sizeValBadge = toolbar.querySelector("#txt-size-val");
    toolbar.querySelector("#txt-bigger").onclick = () => {
      const sz = parseInt(style.fontSize) || 14;
      const nextSz = sz + 2;
      recordChange(el, "fontSize", `${nextSz}px`, "字号增大");
      if (sizeValBadge) sizeValBadge.textContent = `${nextSz}px`;
    };
    toolbar.querySelector("#txt-smaller").onclick = () => {
      const sz = parseInt(style.fontSize) || 14;
      const nextSz = Math.max(10, sz - 2);
      recordChange(el, "fontSize", `${nextSz}px`, "字号减小");
      if (sizeValBadge) sizeValBadge.textContent = `${nextSz}px`;
    };
    toolbar.querySelector("#txt-bold").onclick = () => {
      const currentlyBold = style.fontWeight === "bold" || parseInt(style.fontWeight) >= 700;
      recordChange(el, "fontWeight", currentlyBold ? "normal" : "700", currentlyBold ? "字体常规" : "字体加粗(font-bold)");
      const btn = toolbar.querySelector("#txt-bold");
      if (btn) btn.classList.toggle("tb-btn-primary", !currentlyBold);
    };
    toolbar.querySelectorAll(".txt-color-swatch").forEach(swatch => {
      swatch.onclick = () => {
        recordChange(el, "color", swatch.dataset.color, `文字颜色调整 (${swatch.title})`);
      };
    });
    const txtColorPicker = toolbar.querySelector("#txt-color-picker");
    if (txtColorPicker) {
      txtColorPicker.oninput = (e) => {
        recordChange(el, "color", e.target.value, "文字颜色自定义");
      };
    }

    // Radius Slider Logic
    const rSlider = toolbar.querySelector("#r-slider");
    const rValBadge = toolbar.querySelector("#r-val-badge");
    const rPillBtn = toolbar.querySelector("#r-pill");

    const compStyle = window.getComputedStyle(el);
    const compRadius = parseInt(compStyle.borderRadius) || 0;
    const isPill = compStyle.borderRadius === "9999px" || compRadius >= 999;

    if (isPill) {
      rSlider.value = 64;
      rValBadge.textContent = "全圆";
    } else {
      rSlider.value = Math.min(64, compRadius);
      rValBadge.textContent = `${compRadius}px`;
    }

    // Real-time visual feedback while dragging slider
    rSlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      el.style.borderRadius = `${val}px`;
      rValBadge.textContent = `${val}px`;
      updateSelection();
    });

    // Commit change to history stack and AI prompt on release
    rSlider.addEventListener("change", (e) => {
      const val = parseInt(e.target.value);
      let tailwind = `rounded-[${val}px]`;
      if (val === 0) tailwind = "rounded-none";
      else if (val === 8) tailwind = "rounded-lg";
      else if (val === 12) tailwind = "rounded-xl";
      else if (val === 16) tailwind = "rounded-2xl";
      else if (val === 24) tailwind = "rounded-3xl";

      recordChange(el, "borderRadius", `${val}px`, `圆角调整为 ${val}px (${tailwind})`);
      updateSelection();
      showToast(`圆角已设为: ${val}px`);
    });

    // One-click full pill button
    rPillBtn.onclick = () => {
      rSlider.value = 64;
      rValBadge.textContent = "全圆";
      recordChange(el, "borderRadius", "9999px", "全圆角 (rounded-full)");
      updateSelection();
      showToast("已设为全圆角");
    };

    // Layer Z-Index (100% Keeps In Place / 保持在原处绝对不动)
    const layerUpBtn = toolbar.querySelector("#layer-up");
    if (layerUpBtn) {
      layerUpBtn.onclick = () => moveElementZIndex(el, 1);
    }
    const layerDownBtn = toolbar.querySelector("#layer-down");
    if (layerDownBtn) {
      layerDownBtn.onclick = () => moveElementZIndex(el, -1);
    }
    // Swap position in layout flow (with adjacent card/container)
    const moveSwapBtn = toolbar.querySelector("#move-swap");
    if (moveSwapBtn) {
      moveSwapBtn.onclick = () => moveElementOrder(el, 1);
    }
    // Fallbacks for any legacy bindings
    const movePrevBtn = toolbar.querySelector("#move-prev");
    if (movePrevBtn) {
      movePrevBtn.onclick = () => moveElementZIndex(el, 1);
    }
    const moveNextBtn = toolbar.querySelector("#move-next");
    if (moveNextBtn) {
      moveNextBtn.onclick = () => moveElementZIndex(el, -1);
    }
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
        const tw = v.tailwind ? ` (建议 Tailwind: \`${v.tailwind}\`)` : "";
        const snap = v.snapNote ? ` *(对齐: ${v.snapNote})*` : "";
        itemsMarkdown += `- **${v.label}**：从 \`${v.original || '默认'}\` 调整为 \`${v.current}\`${tw}${snap}\n`;
      }

      if (data.comment) {
        itemsMarkdown += `- **需求批注**：${data.comment}\n`;
      }
      idx++;
    });

    return `请根据界面上的可视化调整与批注，修改对应前端组件源码：

### 界面调整与需求清单：
${itemsMarkdown}
### 代码更新规范：
1. **优先 Tailwind 规范**：若项目已使用 Tailwind CSS，请优先使用推荐类名替换旧类名，避免内联 style。
2. **布局与对齐**：对于拖拽调整的元素，请结合上下文（Flex/Grid 排版、Margin 外边距或定位）规范实现对齐。
3. **落实需求批注**：请完整实现各个组件批注中要求的交互、动画或数据逻辑。
4. **保持功能完整**：保持原有的数据流、响应式适配和业务逻辑完好。`;
  }

  // --- INLINE WYSIWYG DIRECT TEXT EDITING (PPT / Figma in-place style) ---
  let inlineEditingEl = null;
  let inlineEditingOriginalText = "";

  function startInlineTextEdit(target) {
    if (!target) return;
    if (inlineEditingEl) finishInlineTextEdit(true);

    inlineEditingEl = target;
    inlineEditingOriginalText = (target.innerText || target.textContent || "").trim();

    // Hide selection box, toolbar and hover highlight during editing
    if (selectBox) selectBox.style.display = "none";
    if (toolbar) toolbar.style.display = "none";
    if (hoverBox) hoverBox.style.display = "none";

    target.contentEditable = "true";
    target.spellcheck = false;
    target.style.outline = "2px dashed #6366f1";
    target.style.outlineOffset = "3px";
    target.style.cursor = "text";
    target.focus();

    // Select text for quick inline replacement
    try {
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(target);
      sel.removeAllRanges();
      sel.addRange(range);
    } catch (err) {}

    showToast("进入文本编辑模式（Enter 保存，Esc 取消）");

    function onInlineKeyDown(e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        finishInlineTextEdit(true);
      } else if (e.key === "Escape") {
        e.preventDefault();
        finishInlineTextEdit(false);
      }
    }

    function onInlineBlur() {
      setTimeout(() => {
        if (inlineEditingEl === target) {
          finishInlineTextEdit(true);
        }
      }, 120);
    }

    target._canvascodeKeyDown = onInlineKeyDown;
    target._canvascodeBlur = onInlineBlur;
    target.addEventListener("keydown", onInlineKeyDown);
    target.addEventListener("blur", onInlineBlur, { once: true });
  }

  function finishInlineTextEdit(save = true) {
    if (!inlineEditingEl) return;
    const el = inlineEditingEl;
    inlineEditingEl = null;

    if (el._canvascodeKeyDown) {
      el.removeEventListener("keydown", el._canvascodeKeyDown);
      delete el._canvascodeKeyDown;
    }
    if (el._canvascodeBlur) {
      el.removeEventListener("blur", el._canvascodeBlur);
      delete el._canvascodeBlur;
    }

    el.contentEditable = "false";
    el.style.outline = "";
    el.style.outlineOffset = "";
    el.style.cursor = "";

    if (save) {
      const currentText = (el.innerText || el.textContent || "").trim();
      if (currentText !== inlineEditingOriginalText) {
        recordChange(el, "innerText", currentText, `文案修改为 "${currentText}"`);
        showToast(`文本已更新: "${currentText}"`);
      }
    } else {
      el.innerText = inlineEditingOriginalText;
      showToast("已取消文案编辑");
    }

    selectedEl = el;
    renderToolbar(selectedEl);
    updateSelection();
  }

  // --- MOUSE LISTENERS ---
  function onMouseMove(e) {
    if (inlineEditingEl) {
      hoverBox.style.display = "none";
      return;
    }
    if (!window.__aiVisualTweakActive || isDragging || isToolbarDragging || isResizing) return;
    const target = e.target;
    if (host.contains(target) || target === host) return;
    if (target.closest && target.closest("[data-canvascode-ignore]")) {
      hoverBox.style.display = "none";
      return;
    }

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
    if (inlineEditingEl) {
      if (e.target === inlineEditingEl || inlineEditingEl.contains(e.target)) {
        return;
      }
      finishInlineTextEdit(true);
    }
    if (!window.__aiVisualTweakActive || isDragging || isToolbarDragging || isResizing) return;
    const target = e.target;
    if (host.contains(target) || target === host) return;
    if (target.closest && target.closest("[data-canvascode-ignore]")) return;

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
    if (target.closest && target.closest("[data-canvascode-ignore]")) return;
    if (target === document.body || target === document.documentElement) return;

    e.preventDefault();
    e.stopPropagation();

    // Start direct in-place editing!
    startInlineTextEdit(target);
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
  function setTweakActiveMode(active) {
    const newState = typeof active === "boolean" ? active : !window.__aiVisualTweakActive;
    window.__aiVisualTweakActive = newState;

    if (!newState) {
      if (selectedEl) {
        selectedEl = null;
        updateSelection();
      }
      hoverBox.style.display = "none";
      selectBox.style.display = "none";
      toolbar.style.display = "none";
      dockPanel.style.display = "none";

      dockPill.classList.add("paused");
      dockPill.innerHTML = `
        <span class="dock-status-dot paused"></span>
        <span>微调模式 (已暂停)</span>
      `;
      dockPill.title = "当前处于浏览模式，点击开启微调";
      showToast("已暂停微调模式");
    } else {
      dockPill.classList.remove("paused");
      dockPill.innerHTML = `
        <span class="dock-status-dot active"></span>
        <span>CanvasCode (运行中)</span>
        <span class="dock-badge" id="dock-count" style="${changes.size > 0 ? '' : 'display:none'}">${changes.size}</span>
      `;
      dockPill.title = "微调模式运行中，点击展开规格面板";
      showToast("微调模式已开启");
    }

    window.dispatchEvent(new CustomEvent("canvascode:activeChanged", { detail: { active: newState } }));
  }

  window.__canvascodeSetMode = setTweakActiveMode;

  dockPill.onclick = () => {
    if (!window.__aiVisualTweakActive) {
      setTweakActiveMode(true);
    } else {
      dockPanel.style.display = dockPanel.style.display === "flex" ? "none" : "flex";
    }
  };
  panelClose.onclick = () => {
    dockPanel.style.display = "none";
  };

  dockUndo.onclick = () => undo();
  dockRedo.onclick = () => redo();

  const dockSnapBtn = shadow.getElementById("dock-toggle-snap");
  if (dockSnapBtn) {
    dockSnapBtn.onclick = () => toggleSnap();
  }
  updateSnapUI();

  
  // --- SCREENSHOT & MULTIMODAL EXPORT ENGINE ---
  let lastScreenshotBlob = null;
  let lastScreenshotDataUrl = "";

  async function takeScreenshot(targetNode) {
    showToast("正在生成截图...");

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
        showToast("截图已复制到剪贴板");
      } catch (clipErr) {
        showToast("截图已生成，可在弹窗中查看");
      }
    } catch (err) {
      host.style.display = "block";
      console.error("Screenshot error:", err);
      showToast("截图生成失败: " + (err.message || err));
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
        showToast("图片已复制到剪贴板");
      } catch (err) {
        showToast("剪贴板写入受限，请使用下载按钮");
      }
    }
  };

  shadow.getElementById("modal-download-img").onclick = () => {
    if (lastScreenshotDataUrl) {
      const a = document.createElement("a");
      a.href = lastScreenshotDataUrl;
      a.download = `canvascode-${Date.now()}.png`;
      a.click();
      showToast("截图已保存");
    }
  };

  shadow.getElementById("modal-copy-text").onclick = () => {
    const promptText = generatePrompt();
    navigator.clipboard.writeText(promptText).then(() => {
      showToast("Prompt 已复制到剪贴板");
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
      showToast("Prompt 已复制到剪贴板");
    }).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = promptText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast("Prompt 已复制到剪贴板");
    });
  };

  btnResetAll.onclick = () => {
    if (confirm("确定要放弃所有调整并重置吗？")) {
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
      showToast("已重置所有改动");
    }
  };

  btnExit.onclick = () => {
    setTweakActiveMode(false);
  };

  // --- STUDIO DESKTOP WORKBENCH BRIDGE ---
  function notifyStudioSelection(el) {
    if (!el) return;
    try {
      const rect = el.getBoundingClientRect();
      const cs = window.getComputedStyle(el);
      const summary = getElementSummary(el);
      const detail = {
        tagName: el.tagName.toLowerCase(),
        id: el.id || "",
        className: el.className || "",
        width: rect.width,
        height: rect.height,
        margin: cs.margin,
        padding: cs.padding,
        fontSize: cs.fontSize,
        borderRadius: cs.borderRadius,
        bgColorHex: cs.backgroundColor || "#ffffff",
        textColorHex: cs.color || "#000000",
        selector: summary.selector
      };
      window.dispatchEvent(new CustomEvent("canvascode:elementSelected", { detail }));
      if (window.parent && window.parent !== window) {
        window.parent.dispatchEvent(new CustomEvent("canvascode:elementSelected", { detail }));
      }
    } catch (err) {}
  }

  function notifyStudioState() {
    try {
      const historyList = [];
      changes.forEach((val) => {
        const modSummaries = Object.values(val.mods || {}).map(m => m.label || m.tailwind).join(", ");
        const tailwindList = Object.values(val.mods || {}).map(m => m.tailwind).filter(Boolean).join(" ");
        historyList.push({
          selector: val.selector,
          summary: modSummaries || "样式已调整",
          tailwindClasses: tailwindList
        });
      });
      const detail = {
        canUndo: undoStack.length > 0,
        canRedo: redoStack.length > 0,
        history: historyList
      };
      window.dispatchEvent(new CustomEvent("canvascode:stateChanged", { detail }));
      if (window.parent && window.parent !== window) {
        window.parent.dispatchEvent(new CustomEvent("canvascode:stateChanged", { detail }));
      }
    } catch (err) {}
  }

  window.__canvascodeApplyInspectorUpdate = function(props) {
    if (!selectedEl) return;
    if (props.width) selectedEl.style.width = props.width;
    if (props.height) selectedEl.style.height = props.height;
    if (props.backgroundColor) selectedEl.style.backgroundColor = props.backgroundColor;
    if (props.borderRadius) selectedEl.style.borderRadius = props.borderRadius;
    if (props.fontSize) selectedEl.style.fontSize = props.fontSize;
    if (props.color) selectedEl.style.color = props.color;
    updateSelection();
    updateDock();
  };

  window.__canvascodeToggleSnap = function(enabled) {
    if (typeof enabled === "boolean") {
      isSnapEnabled = enabled;
    } else {
      isSnapEnabled = !isSnapEnabled;
    }
    updateSnapUI();
    showToast(isSnapEnabled ? "已开启磁吸对齐" : "已关闭磁吸对齐 (自由移动)");
  };

  window.__canvascodeUndo = undo;
  window.__canvascodeRedo = redo;
  window.__canvascodeResetSelection = () => {
    selectedEl = null;
    if (selectBox) selectBox.style.display = "none";
    if (toolbar) toolbar.style.display = "none";
  };
  window.__canvascodeTriggerExport = () => {
    const btn = shadow.getElementById("dock-screenshot");
    if (btn) btn.click();
  };
  window.__canvascodeResetAll = () => {
    btnResetAll.click();
  };

  updateHistoryButtons();
  showToast("CanvasCode 已就绪");
})();

