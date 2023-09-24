/*! For license information please see 446.15e71fd3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[446],{848:function(t,n,r){r.d(n,{f:function(){return c}});var e,o=r(168),i=r(5867).ZP.button(e||(e=(0,o.Z)(["\n  margin: 56px auto 0;\n  padding: 8px 16px;\n  border-radius: 12px;\n  background-color: RoyalBlue;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: yellow;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:is(:hover, :focus) {\n    background-color: #303f9f;\n    scale: 0.98;\n  }\n"]))),a=r(184),c=function(t){var n=t.onClick;return(0,a.jsx)(i,{type:"button",onClick:n,children:"Load more"})}},3585:function(t,n,r){r.d(n,{Z:function(){return m}});var e,o,i,a,c,u=r(7689),l=r(168),s=r(1087),p=r(5867),f=p.ZP.ul(e||(e=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: space-around;\n"]))),h=p.ZP.li(o||(o=(0,l.Z)(["\n  width: 200px;\n  border-radius: 8px;\n  padding: 3px;\n  box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);\n  transition: scale 150ms ease-in;\n  &:is(:hover, :focus) {\n    scale: 0.99;\n  }\n"]))),d=(0,p.ZP)(s.rU)(i||(i=(0,l.Z)(["\n  outline: none;\n"]))),x=p.ZP.img(a||(a=(0,l.Z)(["\n  width: 200px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n"]))),g=p.ZP.p(c||(c=(0,l.Z)(["\n  margin-top: 8px;\n  font-size: 18px;\n  margin-bottom: 8px;\n  text-align: center;\n  color: teal;\n"]))),y=r.p+"static/media/holding-blank-card.334011ee1e0183415599.jpg",v=r(184),m=function(t){var n=t.results,r=(0,u.TH)();return(0,v.jsx)(f,{children:n.map((function(t,n){var e=t.id,o=t.title,i=t.poster_path;return(0,v.jsx)(h,{children:(0,v.jsxs)(d,{to:"/movies/".concat(e),state:{from:r},children:[(0,v.jsx)(x,{src:i?"https://image.tmdb.org/t/p/w500/".concat(i):y,alt:o}),(0,v.jsx)(g,{children:o})]})},e+n)}))})}},298:function(t,n,r){r.r(n),r.d(n,{default:function(){return N}});var e,o,i,a,c,u,l=r(3433),s=r(5861),p=r(9439),f=r(2791),h=r(5667),d=r(1087),x=r(6492),g=r(168),y=r(5867),v=y.ZP.h1(e||(e=(0,g.Z)(["\n  color: blue;\n  margin-top: 15px;\n  margin-bottom: 15px;\n"]))),m=y.ZP.h2(o||(o=(0,g.Z)(["\n  text-align: center;\n  color: blue;\n  margin-top: 15px;\n  margin-bottom: 25px;\n"]))),b=y.ZP.div(i||(i=(0,g.Z)(["\n  margin-top: 32px;\n  display: flex;\n  gap: 60px;\n  justify-content: center;\n  align-items: center;\n"]))),w=r(3585),Z=r(741),j=y.ZP.form(a||(a=(0,g.Z)(["\n  display: flex;\n  width: 450px;\n\n  height: 48px;\n  border-radius: 12px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),L=y.ZP.input(c||(c=(0,g.Z)(["\n  font-size: 18px;\n  display: flex;\n  padding: 8px 12px;\n  align-items: center;\n  width: 100%;\n  background-color: #fff;\n  border-bottom-left-radius: 8px;\n  border-top-left-radius: 8px;\n  border-color: transparent;\n  overflow: hidden;\n  outline: none;\n"]))),k=y.ZP.button(u||(u=(0,g.Z)(["\n  width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-color: transparent;\n  opacity: 1;\n  border-bottom-right-radius: 8px;\n  border-top-right-radius: 8px;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  & svg {\n    font-size: 24px;\n    fill: #3f51b5;\n  }\n  &:hover {\n    opacity: 0.6;\n  }\n"]))),E=r(9126),_=r(184),P=function(){var t,n=(0,d.lr)(),r=(0,p.Z)(n,2),e=r[0],o=r[1],i=null!==(t=e.get("query"))&&void 0!==t?t:"";return(0,_.jsxs)(j,{onSubmit:function(t){t.preventDefault();var n=t.target.query.value.trim();""!==n?o({query:n}):(0,Z.U)("emptysearch","Enter data to Search")},children:[(0,_.jsx)(L,{defaultValue:i,type:"text",name:"query",placeholder:"Search movies..."}),(0,_.jsx)(k,{type:"submit",children:(0,_.jsx)(E.dVI,{})})]})},S=r(848);function O(){O=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,r){return t[n]=r}}function s(t,n,r,e){var i=n&&n.prototype instanceof g?n:g,a=Object.create(i.prototype),c=new S(e||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function p(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=s;var f="suspendedStart",h="executing",d="completed",x={};function g(){}function y(){}function v(){}var m={};l(m,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(N([])));w&&w!==r&&e.call(w,a)&&(m=w);var Z=v.prototype=g.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function L(t,n){function r(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&e.call(s,"__await")?n.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function k(n,r,e){var o=f;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=E(c,e);if(u){if(u===x)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===f)throw o=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=h;var l=p(n,r,e);if("normal"===l.type){if(o=e.done?d:"suspendedYield",l.arg===x)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(o=d,e.method="throw",e.arg=l.arg)}}}function E(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,E(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),x;var i=p(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,x;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,x):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,x)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(n){if(n||""===n){var r=n[a];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return y.prototype=v,o(Z,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(Z),t},n.awrap=function(t){return{__await:t}},j(L.prototype),l(L.prototype,c,(function(){return this})),n.AsyncIterator=L,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new L(s(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(Z),l(Z,u,"Generator"),l(Z,a,(function(){return this})),l(Z,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=N,S.prototype={constructor:S,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),l=e.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,x):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),x},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),x}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:N(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),x}},n}var N=function(){var t,n=(0,d.lr)(),r=(0,p.Z)(n,1)[0],e=null!==(t=r.get("query"))&&void 0!==t?t:"",o=(0,f.useState)([]),i=(0,p.Z)(o,2),a=i[0],c=i[1],u=(0,f.useState)(0),g=(0,p.Z)(u,2),y=g[0],j=g[1],L=(0,f.useState)(1),k=(0,p.Z)(L,2),E=k[0],N=k[1],T=(0,f.useState)(!1),F=(0,p.Z)(T,2),G=F[0],z=F[1];(0,f.useEffect)((function(){var t;e&&function(){(t=t||(0,s.Z)(O().mark((function t(){var n;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,z(!0),t.next=4,(0,x.Vu)(e,E);case 4:if(0!==(n=t.sent).total_results){t.next=8;break}return c([]),t.abrupt("return",(0,Z.U)("errorfound","Nothing found"));case 8:c((function(t){return[].concat((0,l.Z)(t),(0,l.Z)(n.results))})),j(n.total_results),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),(0,Z.U)("errorloading","OOPS! There was an error!");case 15:return t.prev=15,z(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})))).apply(this,arguments)}()}),[e,E,r]),(0,f.useEffect)((function(){console.log(E),console.log(y),1===E&&y&&(0,Z.U)("foundok","Found  ".concat(y," movies")),E>=y/20&&y&&(0,Z.U)("foundok","Search completed. There is nothing more.")}),[E,a.length,y]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(b,{children:[(0,_.jsx)(v,{children:"Search Films"}),(0,_.jsx)(P,{})]}),a.length>0&&(0,_.jsxs)(m,{children:["Searching results - Total found: ",y," movies"]}),a.length>0&&(0,_.jsx)(w.Z,{results:a}),y>a.length&&!G&&0!==a.length&&(0,_.jsx)(S.f,{onClick:function(){N((function(t){return t+1})),h.NY.scrollMore(500)}})]})}}}]);
//# sourceMappingURL=446.15e71fd3.chunk.js.map