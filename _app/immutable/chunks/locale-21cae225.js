import{S as g,i as p,s as v,I as y,K as T,L as S,M as w,f as C,t as x,ad as F,ae as I,a0 as O,a8 as j,q as B,r as L,b as q,u as K,h as N}from"./index-cb1ae286.js";import{d as f,w as d}from"./paths-ae9070e9.js";function m(s,t){return Array.isArray(t)?t.map(r=>_(s,r)):_(s,t)}function _(s,t){for(const r of s)if(r.hasMessage(t))return r;return null}class z extends Array{static from(t){return t instanceof this?t:new this(t)}}class h extends z{constructor(t){if(super(),Symbol.iterator in Object(t))this.iterator=t[Symbol.iterator]();else throw new TypeError("Argument must implement the iteration protocol.")}[Symbol.iterator](){const t=this;let r=0;return{next(){return t.length<=r&&t.push(t.iterator.next()),t[r++]}}}touchNext(t=1){let r=0;for(;r++<t;){const n=this[this.length-1];if(n&&n.done)break;this.push(this.iterator.next())}return this[this.length-1]}}function D(s){let t;const r=s[2].default,n=y(r,s,s[1],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,a){n&&n.m(e,a),t=!0},p(e,[a]){n&&n.p&&(!t||a&2)&&T(n,r,e,e[1],t?w(r,e[1],a,null):S(e[1]),null)},i(e){t||(C(n,e),t=!0)},o(e){x(n,e),t=!1},d(e){n&&n.d(e)}}}const E={};function X(){const s=F(E);if(!s){console.error("[svelte-fluent] <FluentProvider/> was not found in component hierarchy.");return}const{bundles:t,dispatch:r}=s,n=f(t,o=>l=>m(o,l)),e=f(t,o=>(l,u)=>{const c=m(o,l);if(c===null)return r("error",`[svelte-fluent] Translation missing: "${l}"`),{value:l,attributes:{}};const i=c.getMessage(l);if(i===null)return r("error",`[svelte-fluent] Translation missing: "${l}"`),{value:l,attributes:{}};const M=c.formatPattern(i.value,u),P=Object.fromEntries(Object.entries(i.attributes||{}).map(([k,A])=>[k,c.formatPattern(A,u)]));return{value:M,attributes:P}}),a=f(e,o=>(l,u)=>o(l,u).value);return{getBundle:n,getTranslation:e,translate:a}}function Y(s,t,r){let{$$slots:n={},$$scope:e}=t,{bundles:a=[]}=t;const{subscribe:o,set:l}=d(h.from(a));return I(E,{bundles:{subscribe:o},dispatch:O()}),s.$$set=u=>{"bundles"in u&&r(0,a=u.bundles),"$$scope"in u&&r(1,e=u.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&l(h.from(a))},[a,e,n]}class W extends g{constructor(t){super(),p(this,t,Y,D,v,{bundles:0})}}const G=s=>({text:s&1,attrs:s&1}),b=s=>({text:s[0].value,attrs:s[0].attributes});function H(s){let t=s[0].value+"",r;return{c(){r=B(t)},l(n){r=L(n,t)},m(n,e){q(n,r,e)},p(n,e){e&1&&t!==(t=n[0].value+"")&&K(r,t)},d(n){n&&N(r)}}}function J(s){let t;const r=s[6].default,n=y(r,s,s[5],b),e=n||H(s);return{c(){e&&e.c()},l(a){e&&e.l(a)},m(a,o){e&&e.m(a,o),t=!0},p(a,[o]){n?n.p&&(!t||o&33)&&T(n,r,a,a[5],t?w(r,a[5],o,G):S(a[5]),b):e&&e.p&&(!t||o&1)&&e.p(a,t?o:-1)},i(a){t||(C(e,a),t=!0)},o(a){x(e,a),t=!1},d(a){e&&e.d(a)}}}function Q(s,t,r){let n,e,{$$slots:a={},$$scope:o}=t,{id:l}=t,{args:u=null}=t;const{getTranslation:c}=X();return j(s,c,i=>r(4,e=i)),s.$$set=i=>{"id"in i&&r(2,l=i.id),"args"in i&&r(3,u=i.args),"$$scope"in i&&r(5,o=i.$$scope)},s.$$.update=()=>{s.$$.dirty&28&&r(0,n=e(l,u))},[n,c,l,u,e,o,a]}class Z extends g{constructor(t){super(),p(this,t,Q,J,v,{id:2,args:3})}}const $=d("pt"),R=d(),tt=f(R,s=>(t,r={})=>{const n=s.getMessage(t);return n!=null&&n.value?s.formatPattern(n.value,r):t});export{W as F,Z as L,R as b,$ as l,X as s,tt as t};
