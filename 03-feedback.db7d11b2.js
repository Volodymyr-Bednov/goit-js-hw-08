function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,i,r,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(h,t),l?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function h(){var e=v();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?m(n,r-(e-c)):n}(e))}function w(e){return f=void 0,p&&o?y(e):(o=i=void 0,a)}function T(){var e=v(),n=O(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},T.flush=function(){return void 0===f?a:w(v())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector("form.feedback-form");y.addEventListener("input",(e=>{const t=e.target;let n=O();n||(n={}),n[t.name]=t.value,j(n)}));const j=e(t)((e=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);document.addEventListener("DOMContentLoaded",(()=>{const e=O();if(!e)return h("","");h(e.email,e.message)})),y.addEventListener("submit",(e=>{e.preventDefault();const t=O();t&&(h("",""),console.log(t),localStorage.removeItem("feedback-form-state"))}));const O=()=>JSON.parse(localStorage.getItem("feedback-form-state")),h=(e,t)=>{y.email.value=e,y.message.value=t};
//# sourceMappingURL=03-feedback.db7d11b2.js.map
