(()=>{(function(){function t(){for(var n=arguments.length,o=0;o<n;o++){var i=o<0||arguments.length<=o?void 0:arguments[o];i.nodeType===1||i.nodeType===11?this.appendChild(i):this.appendChild(document.createTextNode(String(i)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function r(){for(var n=this.parentNode,o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];var a=i.length;if(n)for(a||n.removeChild(this);a--;){var u=i[a];typeof u!="object"?u=this.ownerDocument.createTextNode(u):u.parentNode&&u.parentNode.removeChild(u),a?n.insertBefore(this.previousSibling,u):n.replaceChild(u,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=r,DocumentFragment.prototype.replaceWith=r))})();function _t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function at(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ct(t,e,r){return e&&at(t.prototype,e),r&&at(t,r),t}function Nt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function lt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function ut(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?lt(Object(r),!0).forEach(function(n){Nt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):lt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function dt(t,e){return kt(t)||Mt(t,e)||pt(t,e)||jt()}function O(t){return Rt(t)||Dt(t)||pt(t)||Pt()}function Rt(t){if(Array.isArray(t))return J(t)}function kt(t){if(Array.isArray(t))return t}function Dt(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function Mt(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var r=[],n=!0,o=!1,i=void 0;try{for(var c=t[Symbol.iterator](),a;!(n=(a=c.next()).done)&&(r.push(a.value),!(e&&r.length===e));n=!0);}catch(u){o=!0,i=u}finally{try{!n&&c.return!=null&&c.return()}finally{if(o)throw i}}return r}}function pt(t,e){if(t){if(typeof t=="string")return J(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return J(t,e)}}function J(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Pt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(function(r,n){var o=Object.getOwnPropertyDescriptor(Object(t),n),i=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(r,n,i||o)},{})}function q(t){return typeof t=="string"}function tt(t){return Array.isArray(t)}function F(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=D(t),r;return e.types!==void 0?r=e.types:e.split!==void 0&&(r=e.split),r!==void 0&&(e.types=(q(r)||tt(r)?String(r):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(t.position)),e}function et(t){var e=q(t)||tt(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function X(t){return t!==null&&typeof t=="object"}function Wt(t){return X(t)&&/^(1|3|11)$/.test(t.nodeType)}function Bt(t){return typeof t=="number"&&t>-1&&t%1===0}function $t(t){return X(t)&&Bt(t.length)}function P(t){return tt(t)?t:t==null?[]:$t(t)?Array.prototype.slice.call(t):[t]}function ft(t){var e=t;return q(t)&&(/^(#[a-z]\w+)$/.test(t.trim())?e=document.getElementById(t.trim().slice(1)):e=document.querySelectorAll(t)),P(e).reduce(function(r,n){return[].concat(O(r),O(P(n).filter(Wt)))},[])}var Ht=Object.entries,Y="_splittype",L={},Gt=0;function _(t,e,r){if(!X(t))return console.warn("[data.set] owner is not an object"),null;var n=t[Y]||(t[Y]=++Gt),o=L[n]||(L[n]={});return r===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(L[n]=ut(ut({},o),e)):e!==void 0&&(o[e]=r),r}function M(t,e){var r=X(t)?t[Y]:null,n=r&&L[r]||{};return e===void 0?n:n[e]}function ht(t){var e=t&&t[Y];e&&(delete t[e],delete L[e])}function Ut(){Object.keys(L).forEach(function(t){delete L[t]})}function qt(){Ht(L).forEach(function(t){var e=dt(t,2),r=e[0],n=e[1],o=n.isRoot,i=n.isSplit;(!o||!i)&&(L[r]=null,delete L[r])})}function Ft(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",r=t?String(t):"";return r.trim().replace(/\s+/g," ").split(e)}var rt="\\ud800-\\udfff",gt="\\u0300-\\u036f\\ufe20-\\ufe23",vt="\\u20d0-\\u20f0",yt="\\ufe0e\\ufe0f",Yt="[".concat(rt,"]"),V="[".concat(gt).concat(vt,"]"),Z="\\ud83c[\\udffb-\\udfff]",Xt="(?:".concat(V,"|").concat(Z,")"),bt="[^".concat(rt,"]"),At="(?:\\ud83c[\\udde6-\\uddff]){2}",Et="[\\ud800-\\udbff][\\udc00-\\udfff]",mt="\\u200d",Tt="".concat(Xt,"?"),St="[".concat(yt,"]?"),zt="(?:"+mt+"(?:"+[bt,At,Et].join("|")+")"+St+Tt+")*",Kt=St+Tt+zt,Jt="(?:".concat(["".concat(bt).concat(V,"?"),V,At,Et,Yt].join("|"),`
)`),Vt=RegExp("".concat(Z,"(?=").concat(Z,")|").concat(Jt).concat(Kt),"g"),Zt=[mt,rt,gt,vt,yt],Qt=RegExp("[".concat(Zt.join(""),"]"));function te(t){return t.split("")}function wt(t){return Qt.test(t)}function ee(t){return t.match(Vt)||[]}function re(t){return wt(t)?ee(t):te(t)}function ne(t){return t==null?"":String(t)}function oe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t=ne(t),t&&q(t)&&!e&&wt(t)?re(t):t.split(e)}function Q(t,e){var r=document.createElement(t);return e&&Object.keys(e).forEach(function(n){var o=e[n],i=q(o)?o.trim():o;i===null||i===""||(n==="children"?r.append.apply(r,O(P(i))):r.setAttribute(n,i))}),r}var nt={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function ie(t,e){e=D(nt,e);var r=et(e.types),n=e.tagName,o=t.nodeValue,i=document.createDocumentFragment(),c=[],a=[];return/^\s/.test(o)&&i.append(" "),c=Ft(o).reduce(function(u,v,b,A){var E,h;return r.chars&&(h=oe(v).map(function(m){var l=Q(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:m});return _(l,"isChar",!0),a=[].concat(O(a),[l]),l})),r.words||r.lines?(E=Q(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?h:v}),_(E,{isWord:!0,isWordStart:!0,isWordEnd:!0}),i.appendChild(E)):h.forEach(function(m){i.appendChild(m)}),b<A.length-1&&i.append(" "),r.words?u.concat(E):u},[]),/\s$/.test(o)&&i.append(" "),t.replaceWith(i),{words:c,chars:a}}function Ot(t,e){var r=t.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(r))return n;if(r===3&&/\S/.test(t.nodeValue))return ie(t,e);var o=P(t.childNodes);if(o.length&&(_(t,"isSplit",!0),!M(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var i=t.nextSibling,c=t.previousSibling,a=t.textContent||"",u=i?i.textContent:" ",v=c?c.textContent:" ";_(t,{isWordEnd:/\s$/.test(a)||/^\s/.test(u),isWordStart:/^\s/.test(a)||/\s$/.test(v)})}return o.reduce(function(b,A){var E=Ot(A,e),h=E.words,m=E.chars;return{words:[].concat(O(b.words),O(h)),chars:[].concat(O(b.chars),O(m))}},n)}function se(t,e,r,n){if(!r.absolute)return{top:e?t.offsetTop:null};var o=t.offsetParent,i=dt(n,2),c=i[0],a=i[1],u=0,v=0;if(o&&o!==document.body){var b=o.getBoundingClientRect();u=b.x+c,v=b.y+a}var A=t.getBoundingClientRect(),E=A.width,h=A.height,m=A.x,l=A.y,T=l+a-v,x=m+c-u;return{width:E,height:h,top:T,left:x}}function xt(t){M(t).isWord?(ht(t),t.replaceWith.apply(t,O(t.childNodes))):P(t.children).forEach(function(e){return xt(e)})}var ae=function(){return document.createDocumentFragment()};function ce(t,e,r){var n=et(e.types),o=e.tagName,i=t.getElementsByTagName("*"),c=[],a=[],u=null,v,b,A,E=[],h=t.parentElement,m=t.nextElementSibling,l=ae(),T=window.getComputedStyle(t),x=T.textAlign,U=parseFloat(T.fontSize),W=U*.2;return e.absolute&&(A={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},b=t.offsetWidth,v=t.offsetHeight,_(t,{cssWidth:t.style.width,cssHeight:t.style.height})),P(i).forEach(function(g){var p=g.parentElement===t,y=se(g,p,e,r),w=y.width,k=y.height,I=y.top,N=y.left;/^br$/i.test(g.nodeName)||(n.lines&&p&&((u===null||I-u>=W)&&(u=I,c.push(a=[])),a.push(g)),e.absolute&&_(g,{top:I,left:N,width:w,height:k}))}),h&&h.removeChild(t),n.lines&&(E=c.map(function(g){var p=Q(o,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(x,"; width: 100%;")});_(p,"isLine",!0);var y={height:0,top:1e4};return l.appendChild(p),g.forEach(function(w,k,I){var N=M(w),B=N.isWordEnd,H=N.top,K=N.height,st=I[k+1];y.height=Math.max(y.height,K),y.top=Math.min(y.top,H),p.appendChild(w),B&&M(st).isWordStart&&p.append(" ")}),e.absolute&&_(p,{height:y.height,top:y.top}),p}),n.words||xt(l),t.replaceChildren(l)),e.absolute&&(t.style.width="".concat(t.style.width||b,"px"),t.style.height="".concat(v,"px"),P(i).forEach(function(g){var p=M(g),y=p.isLine,w=p.top,k=p.left,I=p.width,N=p.height,B=M(g.parentElement),H=!y&&B.isLine;g.style.top="".concat(H?w-B.top:w,"px"),g.style.left=y?"".concat(A.left,"px"):"".concat(k-(H?A.left:0),"px"),g.style.height="".concat(N,"px"),g.style.width=y?"".concat(A.width,"px"):"".concat(I,"px"),g.style.position="absolute"})),h&&(m?h.insertBefore(t,m):h.appendChild(t)),E}var G=D(nt,{}),Ct=function(){ct(t,null,[{key:"clearData",value:function(){Ut()}},{key:"setDefaults",value:function(r){return G=D(G,F(r)),nt}},{key:"revert",value:function(r){ft(r).forEach(function(n){var o=M(n),i=o.isSplit,c=o.html,a=o.cssWidth,u=o.cssHeight;i&&(n.innerHTML=c,n.style.width=a||"",n.style.height=u||"",ht(n))})}},{key:"create",value:function(r,n){return new t(r,n)}},{key:"data",get:function(){return L}},{key:"defaults",get:function(){return G},set:function(r){G=D(G,F(r))}}]);function t(e,r){_t(this,t),this.isSplit=!1,this.settings=D(G,F(r)),this.elements=ft(e),this.split()}return ct(t,[{key:"split",value:function(r){var n=this;this.revert(),this.elements.forEach(function(c){_(c,"html",c.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var o=[window.pageXOffset,window.pageYOffset];r!==void 0&&(this.settings=D(this.settings,F(r)));var i=et(this.settings.types);i.none||(this.elements.forEach(function(c){_(c,"isRoot",!0);var a=Ot(c,n.settings),u=a.words,v=a.chars;n.words=[].concat(O(n.words),O(u)),n.chars=[].concat(O(n.chars),O(v))}),this.elements.forEach(function(c){if(i.lines||n.settings.absolute){var a=ce(c,n.settings,o);n.lines=[].concat(O(n.lines),O(a))}}),this.isSplit=!0,window.scrollTo(o[0],o[1]),qt())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}();var S=function(t,e){let r=typeof t;return typeof e!="string"||e.trim()===""?t:e==="true"&&r==="boolean"?!0:e==="false"&&r==="boolean"?!1:isNaN(e)&&r==="string"?e:!isNaN(e)&&r==="number"?+e:t};var z=function(t,e="lines, words"){if(t)return typeSplit=new Ct(t,{types:e}),typeSplit},j=function(t,e,r){if(!t||!e||!r){console.error(`GSAP checkBreakpoints Error in ${e}`);return}let{isMobile:n,isTablet:o,isDesktop:i,reduceMotion:c}=r.conditions;if(n===void 0||o===void 0||i===void 0){console.error("GSAP Match Media Conditions Not Defined");return}let a=`data-ix-${e}-desktop`,u=`data-ix-${e}-tablet`,v=`data-ix-${e}-mobile`,b=`data-ix-${e}-run`;return runAll=S(!0,t.getAttribute(b)),runMobile=S(!0,t.getAttribute(v)),runTablet=S(!0,t.getAttribute(u)),runDesktop=S(!0,t.getAttribute(a)),!(runAll===!1||runMobile===!1&&n||runTablet===!1&&o||runDesktop===!1&&i)},ot=function(t){let e=t,r={left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",full:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};return t==="left"&&(e=r.left),t==="right"&&(e=r.right),t==="top"&&(e=r.top),t==="bottom"&&(e=r.bottom),t==="full"&&(e=r.full),e};var it=function(t){let e="scrollin",r="data-ix-scrollin",n="heading",o="item",i="container",c="stagger",a="rich-text",u="image-wrap",v="image",b="line",A="data-ix-scrollin-toggle-actions",E="data-ix-scrollin-scrub",h="data-ix-scrollin-start",m="data-ix-scrollin-end",l="data-ix-scrollin-direction",T="data-ix-scrollin-stagger",g="power1.out",p=function(s){let f={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%"};return f.toggleActions=S(f.toggleActions,s.getAttribute(A)),f.scrub=S(f.scrub,s.getAttribute(E)),f.start=S(f.start,s.getAttribute(h)),f.end=S(f.end,s.getAttribute(m)),gsap.timeline({defaults:{duration:.6,ease:g},scrollTrigger:{trigger:s,start:f.start,end:f.end,toggleActions:f.toggleActions,scrub:f.scrub}})},y=function(s,f,d={}){let C={opacity:0,y:"2rem"},R={opacity:1,y:"0rem"};return d.stagger&&(R.stagger={each:d.stagger,from:"start"}),d.stagger==="small"&&(R.stagger={each:.1,from:"start"}),d.stagger==="large"&&(R.stagger={each:.3,from:"start"}),f.fromTo(s,C,R)},w=function(s){s.classList.contains("w-richtext")&&(s=s.firstChild);let f=z(s);if(!f)return;let d=p(s),C=y(f.words,d,{stagger:"small"});ScrollTrigger.create({trigger:s,start:"top bottom",end:"bottom top",onLeave:R=>f.revert()})},k=function(s){if(s)if(s.classList.contains("w-richtext")){let f=gsap.utils.toArray(s.children);if(f.length===0)return;f.forEach(d=>{let C=p(d),R=y(d,C)})}else{let f=p(s),d=y(s,f)}},I=function(s){if(!s)return;let f=s.firstChild,d=p(s);d.fromTo(f,{scale:1.2},{scale:1,duration:1}),d.fromTo(s,{scale:.9},{scale:1,duration:1},"<")},N=function(s){if(!s)return;let f=S("left",s.getAttribute(l)),d=ot(f),C=ot("full");p(s).fromTo(s,{clipPath:d},{clipPath:C})},B=function(s){if(!s)return;let f=gsap.utils.toArray(s.children);f.length!==0&&f.forEach(d=>{let C=p(d),R=y(d,C)})},H=function(s){if(!s)return;let f=S(.3,s.getAttribute(T)),d=gsap.utils.toArray(s.children);if(d.length===0)return;let C=p(s),R=y(d,C,{stagger:f})},K=function(s){if(!s)return;let f=gsap.utils.toArray(s.children);f.length!==0&&f.forEach(d=>{let C=d.tagName;["H1","H2","H3","H4","H5","H6"].includes(C)&&w(d),C==="FIGURE"?I(d):k(d)})};gsap.utils.toArray(`[${r}]`).forEach(s=>{if(!s||j(s,e,t)===!1)return;let d=s.getAttribute(r);d===n&&w(s),d===o&&k(s),d===v&&I(s),d===b&&N(s),d===i&&B(s),d===c&&H(s),d===a&&K(s)})};var Lt=function(t){let e="load",r="data-ix-load",n="heading",o="item",i="image",c="stagger",a="data-ix-load-position",u="<0.2",v=gsap.utils.toArray(`[${r}]`);if(v.length===0)return;let b=gsap.timeline({paused:!0,defaults:{ease:"power1.out",duration:.8}}),A=function(l){l.classList.contains("w-richtext")&&(l.style.opacity="1",l=l.firstChild);let T=z(l);if(!T)return;let x=S("<",l.getAttribute(a));b.set(l,{opacity:1}),b.fromTo(T.words,{opacity:0,y:"50%",rotateX:45},{opacity:1,y:"0%",rotateX:0,stagger:{each:.1,from:"left"}},x)},E=function(l){let T=S(u,l.getAttribute(a));b.fromTo(l,{opacity:0,scale:.7},{opacity:1,scale:1},T)},h=function(l){let T=S(u,l.getAttribute(a));b.fromTo(l,{opacity:0,y:"2rem"},{opacity:1,y:"0rem"},T)},m=function(l){if(!l)return;let T=gsap.utils.toArray(l.children);T.length!==0&&T.forEach((x,U)=>{U===0&&(l.style.opacity=1),h(x)})};return v.forEach(l=>{if(!l||j(l,e,t)===!1)return;let x=l.getAttribute(r);x===n&&A(l),x===i&&E(l),x===o&&h(l),x===c&&m(l)}),b.play(0),b};var It=function(t){let e="cursor",r='[data-ix-cursor="wrap"]',n='[data-ix-cursor="inner"]',o='[data-ix-cursor="outer"]',i='[data-ix-cursor="dot"]',c='[data-ix-cursor="hover"]',a='[data-ix-cursor="no-hover"]',u='[data-ix-cursor="disable"]',A="is-hover",E=document.querySelector(r),h=document.querySelector(n),m=document.querySelector(o);if(!E||!h||"ontouchstart"in window||navigator.maxTouchPoints||j(E,e,t)===!1)return;(function(){gsap.utils.toArray(`${c}, :is(a, button, input):not(${a})`).forEach(g=>{!g||!h||(g.addEventListener("mouseover",function(p){h.classList.add(A),m.classList.add(A)}),g.addEventListener("mouseleave",function(p){h.classList.remove(A),m.classList.remove(A)}))})})(),function(){[...document.querySelectorAll(u)].forEach(g=>{!g||!h||(g.addEventListener("mouseover",function(p){console.log("disblaed"),E.style.opacity="0"}),g.addEventListener("mouseleave",function(p){E.style.opacity="1"}))})}(),function(){gsap.set(h,{xPercent:-50,yPercent:-50}),gsap.set(m,{xPercent:-50,yPercent:-50});let W=gsap.quickTo(h,"x",{duration:.01,ease:"none"}),g=gsap.quickTo(h,"y",{duration:.01,ease:"none"}),p=gsap.quickTo(m,"x",{duration:.4,ease:"power3"}),y=gsap.quickTo(m,"y",{duration:.4,ease:"power3"});window.addEventListener("mousemove",w=>{W(w.clientX),g(w.clientY),p(w.clientX),y(w.clientY)})}()};document.addEventListener("DOMContentLoaded",function(){console.log("Local Script"),gsap.ScrollTrigger!==void 0&&gsap.registerPlugin(ScrollTrigger),gsap.Flip!==void 0&&gsap.registerPlugin(Flip);function t(){let o=$(".header_background-image-wrapper"),i=$(".header_background-image");if(!i||!o)return;gsap.timeline({scrollTrigger:{trigger:o,start:"top top",end:"bottom top",ease:"none",scrub:1},defaults:{duration:1,ease:"none"}}).to(i,{scale:1.5})}function e(){let o=document.querySelector(".pager-wrapper"),i=document.querySelector(".navbar_fill");if(!o||!i)return;gsap.timeline({scrollTrigger:{trigger:o,start:"top top",end:"top -100px",ease:"none",scrub:1},defaults:{duration:1,ease:"none"}}).from(i,{opacity:0})}(function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},i=>{let{isMobile:c,isTablet:a,isDesktop:u,reduceMotion:v}=i.conditions;Lt(i),it(i),It(i),t(),e(),v||it(i)})})(),function(){let o="[data-ix-reset]",i="data-ix-reset-time";document.querySelectorAll(o).forEach(function(a){a.addEventListener("click",function(u){if(ScrollTrigger.refresh(),a.hasAttribute(i)){let v=S(1e3,a.getAttribute(i));setTimeout(()=>{ScrollTrigger.refresh()},v)}})})}()});})();
