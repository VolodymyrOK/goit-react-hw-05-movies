/*! For license information please see 54.b6b5a9c6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[54],{9208:function(t,r,e){e.d(r,{Z:function(){return w}});var n,o,i,a,c,u=e(7689),s=e(168),l=e(1087),f=e(5867),h=f.ZP.ul(n||(n=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: space-around;\n"]))),p=f.ZP.li(o||(o=(0,s.Z)(["\n  width: 250px;\n  border-radius: 8px;\n  padding: 6px;\n  box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 2px 16px 3px rgba(0, 0, 0, 0.75);\n  transition: scale 150ms ease-in;\n  &:is(:hover, :focus) {\n    scale: 0.99;\n  }\n"]))),d=(0,f.ZP)(l.rU)(i||(i=(0,s.Z)(["\n  outline: none;\n"]))),g=f.ZP.img(a||(a=(0,s.Z)(["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n"]))),v=f.ZP.p(c||(c=(0,s.Z)(["\n  margin-top: 8px;\n  font-size: 24px;\n  margin-bottom: 8px;\n  text-align: center;\n  color: teal;\n"]))),y=e.p+"static/media/holding-blank-card.334011ee1e0183415599.jpg",x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,r){return t+=(r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_"}),"")},m=e(184),w=function(t){var r=t.results,e=(0,u.TH)();return(0,m.jsx)(h,{children:r.map((function(t){var r=t.id,n=t.title,o=t.poster_path;return(0,m.jsx)(p,{children:(0,m.jsxs)(d,{to:"/movies/".concat(r),state:{from:e},children:[(0,m.jsx)(g,{src:o?"https://image.tmdb.org/t/p/w500/".concat(o):y,alt:n}),(0,m.jsx)(v,{children:n})]})},x)}))})}},3495:function(t,r,e){e.r(r),e.d(r,{default:function(){return w}});var n,o,i=e(3433),a=e(5861),c=e(9439),u=e(2791),s=e(5667),l=e(6492),f=e(741),h=e(168),p=e(5867),d=p.ZP.h1(n||(n=(0,h.Z)(["\n  color: blue;\n  margin-top: 15px;\n  margin-bottom: 25px;\n"]))),g=e(9208),v=p.ZP.button(o||(o=(0,h.Z)(["\n  margin: 56px auto 0;\n  padding: 8px 16px;\n  border-radius: 12px;\n  background-color: RoyalBlue;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:is(:hover, :focus) {\n    background-color: #303f9f;\n    scale: 0.98;\n  }\n"]))),y=e(184),x=function(t){var r=t.onClick;return(0,y.jsx)(v,{type:"button",onClick:r,children:"Load more"})};function m(){m=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof v?r:v,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:Z(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h="suspendedStart",p="executing",d="completed",g={};function v(){}function y(){}function x(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==e&&n.call(L,a)&&(w=L);var j=x.prototype=v.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function Z(r,e,n){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function _(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,_(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return y.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:y,configurable:!0}),y.displayName=s(x,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},k(E.prototype),s(E.prototype,c,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=N,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:N(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}var w=function(){var t=(0,u.useState)([]),r=(0,c.Z)(t,2),e=r[0],n=r[1],o=(0,u.useState)(0),h=(0,c.Z)(o,2),p=h[0],v=h[1],w=(0,u.useState)(1),b=(0,c.Z)(w,2),L=b[0],j=b[1],k=(0,u.useState)(!1),E=(0,c.Z)(k,2),Z=E[0],_=E[1];(0,u.useEffect)((function(){var t;!function(){(t=t||(0,a.Z)(m().mark((function t(){var r;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,_(!0),t.next=4,(0,l.vw)(L);case 4:r=t.sent,n((function(t){return[].concat((0,i.Z)(t),(0,i.Z)(r.results))})),v(r.total_pages),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),(0,f.U)("errorloading","OOPS! There was an error!");case 12:return t.prev=12,_(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}()}),[L]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d,{children:"Trending today"}),e&&(0,y.jsx)(g.Z,{results:e}),p>e.length&&!Z&&(0,y.jsx)(x,{onClick:function(){j((function(t){return t+1})),s.NY.scrollMore(500)}})]})}}}]);
//# sourceMappingURL=54.b6b5a9c6.chunk.js.map