(function(){"use strict";var n={7252:function(n,t,e){var r=e(9242),o=e(3396);function a(n,t,e,r,a,u){const i=(0,o.up)("app-Lnb"),s=(0,o.up)("Content");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i),(0,o.Wm)(s)],64)}const u={class:"lnb"},i={class:"logo"},s=(0,o.Uk)("JW's COMPANY"),c=(0,o.uE)('<ul class="lnb-menu"><li><a href="/outer">Outer</a></li><li><a href="/top">Top</a></li><li><a href="/pants">Pants</a></li><li><a href="onepice">Onepiece</a></li><li><a href="shoes">Shoes</a></li><li><a href="bag">Bag</a></li></ul>',1);function l(n,t,e,r,a,l){const p=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",u,[(0,o._)("h1",i,[(0,o.Wm)(p,{to:"/"},{default:(0,o.w5)((()=>[s])),_:1})]),c])}var p={name:"app-lnb",props:{msg:String}},f=e(89);const v=(0,f.Z)(p,[["render",l]]);var d=v;const h={id:"content"};function m(n,t,e,r,a,u){const i=(0,o.up)("StatUser"),s=(0,o.up)("app-snb"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",h,[(0,o.Wm)(i),(0,o.Wm)(s),(0,o.Wm)(c)])}const b={class:"statUser"},g=(0,o._)("span",null,"김지웅님",-1),w=(0,o._)("span",null,"point : 150",-1),_=(0,o._)("span",null,[(0,o.Uk)("Coupon : "),(0,o._)("em",null,"5"),(0,o.Uk)("장")],-1),O=(0,o._)("a",{href:"#!"},"Logout",-1),k=[g,w,_,O];function U(n,t,e,r,a,u){return(0,o.wg)(),(0,o.iD)("div",b,k)}var W={name:"statUser",props:{}};const y=(0,f.Z)(W,[["render",U]]);var C=y;const D={class:"snb"},S={class:"snb-menu"},Z=(0,o.Uk)("반소매 티셔츠"),j=(0,o.Uk)("긴소매 티셔츠"),P=(0,o._)("li",null,[(0,o._)("a",{href:"#!"},"민소매 티셔츠")],-1),x=(0,o._)("li",null,[(0,o._)("a",{href:"#!"},"셔츠 / 블라우스")],-1),M=(0,o.uE)('<div class="snb-search"><div class="search"><input type="text"><button class="search-btn"><i class="bi bi-search"></i><span class="hidden">검색</span></button></div></div>',1);function T(n,t,e,r,a,u){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",D,[(0,o._)("ul",S,[(0,o._)("li",null,[(0,o.Wm)(i,{to:"/content1"},{default:(0,o.w5)((()=>[Z])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(i,{to:"/content2"},{default:(0,o.w5)((()=>[j])),_:1})]),P,x]),M])}var E={name:"Snb-menu"};const L=(0,f.Z)(E,[["render",T]]);var A=L,Y={name:"statUser",components:{StatUser:C,"app-snb":A}};const B=(0,f.Z)(Y,[["render",m]]);var F=B,H={name:"App",data(){return{best:0,rest:1}},components:{"app-Lnb":d,Content:F},created:()=>{},mounted:()=>{console.log((void 0).best),console.log((void 0).rest)}};const J=(0,f.Z)(H,[["render",a]]);var N=J,q=e(2483);function z(n,t,e,r,a,u){return(0,o.wg)(),(0,o.iD)("div",null," Main ")}var G={name:"MainContent"};const I=(0,f.Z)(G,[["render",z]]);var K=I;function Q(n,t,e,r,a,u){return(0,o.wg)(),(0,o.iD)("div",null," 123 ")}var R={name:"MyContent"};const V=(0,f.Z)(R,[["render",Q]]);var X=V;function $(n,t,e,r,a,u){return(0,o.wg)(),(0,o.iD)("div",null," 456 ")}var nn={name:"TestContent"};const tn=(0,f.Z)(nn,[["render",$]]);var en=tn;const rn={id:"content"};function on(n,t,e,r,a,u){const i=(0,o.up)("StatUser"),s=(0,o.up)("Snb"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",rn,[(0,o.Wm)(i),(0,o.Wm)(s),(0,o.Wm)(c)])}var an={name:"OuterPage",components:{StatUser:C,Snb:A}};const un=(0,f.Z)(an,[["render",on]]);var sn=un;const cn=[{path:"/",component:K},{path:"/outer",component:sn},{path:"/content1",component:X},{path:"/content2",component:en}],ln=(0,q.p7)({history:(0,q.PO)(),routes:cn});var pn=ln;(0,r.ri)(N).use(pn).mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,a){if(!r){var u=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],a=n[l][2];for(var i=!0,s=0;s<r.length;s++)(!1&a||u>=a)&&Object.keys(e.O).every((function(n){return e.O[n](r[s])}))?r.splice(s--,1):(i=!1,a<u&&(u=a));if(i){n.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[r,o,a]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,a,u=r[0],i=r[1],s=r[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(s)var l=s(e)}for(t&&t(r);c<u.length;c++)a=u[c],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(l)},r=self["webpackChunkshop"]=self["webpackChunkshop"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(7252)}));r=e.O(r)})();
//# sourceMappingURL=app.710c332d.js.map