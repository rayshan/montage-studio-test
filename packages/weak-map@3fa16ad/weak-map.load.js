montageDefine("3fa16ad","weak-map",{dependencies:[],factory:function(e,t,n){(function(){"use strict";function e(t){t.permitHostObjects___&&t.permitHostObjects___(e)}function t(e){return!(e.substr(0,c.length)==c&&"___"===e.substr(e.length-3))}function r(e){if(e!==Object(e))throw new TypeError("Not an object: "+e);var t=e[u];if(t&&t.key===e)return t;if(!l(e))return void 0;var n=[],r=[];return t={key:e,gets:n,vals:r},o(e,u,{value:t,writable:!1,enumerable:!1,configurable:!1}),t}function i(e){return e.prototype=null,Object.freeze(e)}if("undefined"==typeof ses||!ses.ok||ses.ok()){if("undefined"!=typeof ses&&(ses.weakMapPermitHostObjects=e),"function"==typeof WeakMap){var a=WeakMap;if("undefined"==typeof navigator||!/Firefox/.test(navigator.userAgent))return n.exports=WeakMap,void 0}Object.prototype.hasOwnProperty;var s=Object.getOwnPropertyNames,o=Object.defineProperty,l=Object.isExtensible,c="weakmap:",u=c+"ident:"+Math.random()+"___";if("undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues&&"function"==typeof ArrayBuffer&&"function"==typeof Uint8Array){var h=new ArrayBuffer(25),d=new Uint8Array(h);crypto.getRandomValues(d),u=c+"rand:"+Array.prototype.map.call(d,function(e){return(e%36).toString(36)}).join("")+"___"}if(o(Object,"getOwnPropertyNames",{value:function(e){return s(e).filter(t)}}),"getPropertyNames"in Object){var p=Object.getPropertyNames;o(Object,"getPropertyNames",{value:function(e){return p(e).filter(t)}})}(function(){var e=Object.freeze;o(Object,"freeze",{value:function(t){return r(t),e(t)}});var t=Object.seal;o(Object,"seal",{value:function(e){return r(e),t(e)}});var n=Object.preventExtensions;o(Object,"preventExtensions",{value:function(e){return r(e),n(e)}})})();var f=function(){function e(t,n){var i,a,l=r(t);return l?(i=l.gets.indexOf(e),a=l.vals):(i=s.indexOf(t),a=o),i>=0?a[i]:n}function t(t){var n,i=r(t);return n=i?i.gets.indexOf(e):s.indexOf(t),n>=0}function n(t,n){var i,a=r(t);a?(i=a.gets.indexOf(e),i>=0?a.vals[i]=n:(a.gets.push(e),a.vals.push(n))):(i=s.indexOf(t),i>=0?o[i]=n:(s.push(t),o.push(n)))}function a(t){var n,i=r(t);return i?(n=i.gets.indexOf(e),n>=0&&(i.gets.splice(n,1),i.vals.splice(n,1))):(n=s.indexOf(t),n>=0&&(s.splice(n,1),o.splice(n,1))),!0}var s=[],o=[];return Object.create(f.prototype,{get___:{value:i(e)},has___:{value:i(t)},set___:{value:i(n)},delete___:{value:i(a)}})};f.prototype=Object.create(Object.prototype,{get:{value:function(e,t){return this.get___(e,t)},writable:!0,configurable:!0},has:{value:function(e){return this.has___(e)},writable:!0,configurable:!0},set:{value:function(e,t){this.set___(e,t)},writable:!0,configurable:!0},"delete":{value:function(e){return this.delete___(e)},writable:!0,configurable:!0}}),"function"==typeof a?function(){function t(){function t(e,t){return l?o.has(e)?o.get(e):l.get___(e,t):o.get(e,t)}function n(e){return o.has(e)||(l?l.has___(e):!1)}function r(e,t){if(c)try{o.set(e,t)}catch(n){l||(l=new f),l.set___(e,t)}else o.set(e,t)}function s(e){o["delete"](e),l&&l.delete___(e)}var o=new a,l=void 0,c=!1;return Object.create(f.prototype,{get___:{value:i(t)},has___:{value:i(n)},set___:{value:i(r)},delete___:{value:i(s)},permitHostObjects___:{value:i(function(t){if(t!==e)throw Error("bogus call to permitHostObjects___");c=!0})}})}t.prototype=f.prototype,n.exports=t,Object.defineProperty(WeakMap.prototype,"constructor",{value:WeakMap,enumerable:!1,configurable:!0,writable:!0})}():("undefined"!=typeof Proxy&&(Proxy=void 0),n.exports=f)}})()}});