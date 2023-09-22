/*! For license information please see 446.3b1f18ee.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[446],{848:function(t,r,n){n.d(r,{f:function(){return c}});var e,o=n(168),i=n(5867).ZP.button(e||(e=(0,o.Z)(["\n  margin: 56px auto 0;\n  padding: 8px 16px;\n  border-radius: 12px;\n  background-color: RoyalBlue;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:is(:hover, :focus) {\n    background-color: #303f9f;\n    scale: 0.98;\n  }\n"]))),a=n(184),c=function(t){var r=t.onClick;return(0,a.jsx)(i,{type:"button",onClick:r,children:"Load more"})}},9208:function(t,r,n){n.d(r,{Z:function(){return b}});var e,o,i,a,c,u=n(7689),l=n(168),s=n(1087),p=n(5867),f=p.ZP.ul(e||(e=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: space-around;\n"]))),h=p.ZP.li(o||(o=(0,l.Z)(["\n  width: 250px;\n  border-radius: 8px;\n  padding: 6px;\n  box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);\n  transition: scale 150ms ease-in;\n  &:is(:hover, :focus) {\n    scale: 0.99;\n  }\n"]))),d=(0,p.ZP)(s.rU)(i||(i=(0,l.Z)(["\n  outline: none;\n"]))),x=p.ZP.img(a||(a=(0,l.Z)(["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n"]))),g=p.ZP.p(c||(c=(0,l.Z)(["\n  margin-top: 8px;\n  font-size: 24px;\n  margin-bottom: 8px;\n  text-align: center;\n  color: teal;\n"]))),y=n.p+"static/media/holding-blank-card.334011ee1e0183415599.jpg",v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,r){return t+=(r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_"}),"")},m=n(184),b=function(t){var r=t.results,n=(0,u.TH)();return(0,m.jsx)(f,{children:r.map((function(t){var r=t.id,e=t.title,o=t.poster_path;return(0,m.jsx)(h,{children:(0,m.jsxs)(d,{to:"/movies/".concat(r),state:{from:n},children:[(0,m.jsx)(x,{src:o?"https://image.tmdb.org/t/p/w500/".concat(o):y,alt:e}),(0,m.jsx)(g,{children:e})]})},v)}))})}},298:function(t,r,n){n.r(r),n.d(r,{default:function(){return S}});var e,o,i,a,c,u=n(3433),l=n(5861),s=n(9439),p=n(2791),f=n(5667),h=n(1087),d=n(6492),x=n(168),g=n(5867),y=g.ZP.h1(e||(e=(0,x.Z)(["\n  color: blue;\n  margin-top: 15px;\n  margin-bottom: 25px;\n"]))),v=g.ZP.h2(o||(o=(0,x.Z)(["\n  color: blue;\n  margin-top: 15px;\n  margin-bottom: 25px;\n"]))),m=n(9208),b=n(741),w=g.ZP.form(i||(i=(0,x.Z)(["\n  display: flex;\n  width: 400px;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),Z=g.ZP.input(a||(a=(0,x.Z)(["\n  font-size: 18px;\n  display: flex;\n  padding: 8px 12px;\n  align-items: center;\n  width: 100%;\n  background-color: #fff;\n  border-bottom-right-radius: 8px;\n  border-top-right-radius: 8px;\n  border-color: transparent;\n  overflow: hidden;\n  outline: none;\n"]))),j=g.ZP.button(c||(c=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-color: transparent;\n  opacity: 1;\n  border-bottom-left-radius: 8px;\n  border-top-left-radius: 8px;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  & svg {\n    font-size: 24px;\n    fill: #3f51b5;\n  }\n  &:hover {\n    opacity: 0.6;\n  }\n"]))),L=n(184),k=function(){var t,r=(0,h.lr)(),n=(0,s.Z)(r,2),e=n[0],o=n[1],i=null!==(t=e.get("query"))&&void 0!==t?t:"";return(0,L.jsxs)(w,{onSubmit:function(t){t.preventDefault();var r=t.target.query.value.trim();""!==r?o({query:r}):(0,b.U)("emptysearch","Enter data to Search")},children:[(0,L.jsx)(Z,{defaultValue:i,type:"text",name:"query",placeholder:"Search movies..."}),(0,L.jsx)(j,{type:"submit",children:"Search"})]})},E=n(848);function _(){_=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,n){return t[r]=n}}function s(t,r,n,e){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new O(e||[]);return o(a,"_invoke",{value:k(t,n,c)}),a}function p(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var f="suspendedStart",h="executing",d="completed",x={};function g(){}function y(){}function v(){}var m={};l(m,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(N([])));w&&w!==n&&e.call(w,a)&&(m=w);var Z=v.prototype=g.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function n(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&e.call(s,"__await")?r.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,n,e){var o=f;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=E(c,e);if(u){if(u===x)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===f)throw o=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=h;var l=p(r,n,e);if("normal"===l.type){if(o=e.done?d:"suspendedYield",l.arg===x)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(o=d,e.method="throw",e.arg=l.arg)}}}function E(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,E(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),x;var i=p(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,x;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,x):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,x)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(r){if(r||""===r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return y.prototype=v,o(Z,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(Z),t},r.awrap=function(t){return{__await:t}},j(L.prototype),l(L.prototype,c,(function(){return this})),r.AsyncIterator=L,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new L(s(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(Z),l(Z,u,"Generator"),l(Z,a,(function(){return this})),l(Z,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=N,O.prototype={constructor:O,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),l=e.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,x):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),x},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),x}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:N(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),x}},r}var S=function(){var t,r=(0,h.lr)(),n=(0,s.Z)(r,1)[0],e=null!==(t=n.get("query"))&&void 0!==t?t:"",o=(0,p.useState)([]),i=(0,s.Z)(o,2),a=i[0],c=i[1],x=(0,p.useState)(0),g=(0,s.Z)(x,2),w=g[0],Z=g[1],j=(0,p.useState)(1),S=(0,s.Z)(j,2),P=S[0],O=S[1],N=(0,p.useState)(!1),T=(0,s.Z)(N,2),F=T[0],G=T[1];(0,p.useEffect)((function(){var t;e&&function(){(t=t||(0,l.Z)(_().mark((function t(){var r;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,G(!0),t.next=4,(0,d.Vu)(e,P);case 4:if(0!==(r=t.sent).total_results){t.next=8;break}return c([]),t.abrupt("return",(0,b.U)("errorfound","Nothing found"));case 8:c((function(t){return[].concat((0,u.Z)(t),(0,u.Z)(r.results))})),Z(r.total_results),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),(0,b.U)("errorloading","OOPS! There was an error!");case 15:return t.prev=15,G(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})))).apply(this,arguments)}()}),[e,P,n]),(0,p.useEffect)((function(){(0!==a.length||0!==w)&&a.length<w&&(0,b.U)("foundok","Found ".concat(a.length," movies out of ").concat(w)),a.length===w&&0!==w&&(0,b.U)("foundok","Search completed. There is nothing more.")}),[a.length,w]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(y,{children:"Search Films"}),(0,L.jsx)(k,{}),a.length>0&&(0,L.jsxs)(v,{children:["Searching results - Total found: ",w," movies"]}),a.length>0&&(0,L.jsx)(m.Z,{results:a}),w>a.length&&!F&&0!==a.length&&(0,L.jsx)(E.f,{onClick:function(){O((function(t){return t+1})),f.NY.scrollMore(500)}})]})}}}]);
//# sourceMappingURL=446.3b1f18ee.chunk.js.map