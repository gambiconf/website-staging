import{S as K,i as Q,s as Y,P as Ma,k as f,l as u,m as p,h as c,b as U,X as Oa,Y as Ua,Z as Wa,f as S,t as k,a7 as qe,o as Za,v as Fa,a as m,c as h,n as l,H as s,C as J,q as G,x as C,r as M,y as D,G as Me,z as V,A as z}from"../../chunks/index-32db9dad.js";import{s as Ja,L as Z,t as Oe}from"../../chunks/locale-ce23669c.js";import{a as Qt,b as ja}from"../../chunks/paths-5333605f.js";import{F as Ka,a as Qa}from"../../chunks/fa-layers-0c97a4f5.js";import{W as Ue}from"../../chunks/Window-838e4edd.js";const Ya=/<|&#?\w+;/,es={"http://www.w3.org/1999/xhtml":["em","strong","small","s","cite","q","dfn","abbr","data","time","code","var","samp","kbd","sub","sup","i","b","u","mark","bdi","bdo","span","br","wbr"]},ts={"http://www.w3.org/1999/xhtml":{global:["title","aria-label","aria-valuetext"],a:["download"],area:["download","alt"],input:["alt","placeholder"],menuitem:["label"],menu:["label"],optgroup:["label"],option:["label"],track:["label"],img:["alt"],textarea:["placeholder"],th:["abbr"]},"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul":{global:["accesskey","aria-label","aria-valuetext","label","title","tooltiptext"],description:["value"],key:["key","keycode"],label:["value"],textbox:["placeholder","value"]}};function qa(o,e){const{value:a}=e;if(typeof a=="string")if(o.localName==="title"&&o.namespaceURI==="http://www.w3.org/1999/xhtml")o.textContent=a;else if(!Ya.test(a))o.textContent=a;else{const t=o.ownerDocument.createElementNS("http://www.w3.org/1999/xhtml","template");t.innerHTML=a,as(t.content,o)}Ha(e,o)}function as(o,e){for(const a of o.childNodes)if(a.nodeType!==a.TEXT_NODE){if(a.hasAttribute("data-l10n-name")){const t=rs(e,a);o.replaceChild(t,a);continue}if(ns(a)){const t=ls(a);o.replaceChild(t,a);continue}console.warn(`An element of forbidden type "${a.localName}" was found in the translation. Only safe text-level elements and elements with data-l10n-name are allowed.`),o.replaceChild(Kt(a),a)}e.textContent="",e.appendChild(o)}function ss(o,e){if(!o)return!1;for(let a of o)if(a.name===e)return!0;return!1}function Ha(o,e){const a=e.hasAttribute("data-l10n-attrs")?e.getAttribute("data-l10n-attrs").split(",").map(t=>t.trim()):null;for(const t of Array.from(e.attributes))Ga(t.name,e,a)&&!ss(o.attributes,t.name)&&e.removeAttribute(t.name);if(o.attributes)for(const t of Array.from(o.attributes))Ga(t.name,e,a)&&e.getAttribute(t.name)!==t.value&&e.setAttribute(t.name,t.value)}function rs(o,e){const a=e.getAttribute("data-l10n-name"),t=o.querySelector(`[data-l10n-name="${a}"]`);if(!t)return console.warn(`An element named "${a}" wasn't found in the source.`),Kt(e);if(t.localName!==e.localName)return console.warn(`An element named "${a}" was found in the translation but its type ${e.localName} didn't match the element found in the source (${t.localName}).`),Kt(e);o.removeChild(t);const r=t.cloneNode(!1);return Ba(e,r)}function ls(o){const e=o.ownerDocument.createElement(o.localName);return Ba(o,e)}function Kt(o){return o.ownerDocument.createTextNode(o.textContent)}function ns(o){const e=es[o.namespaceURI];return e&&e.includes(o.localName)}function Ga(o,e,a=null){if(a&&a.includes(o))return!0;const t=ts[e.namespaceURI];if(!t)return!1;const r=o.toLowerCase(),n=e.localName;if(t.global.includes(r))return!0;if(!t[n])return!1;if(t[n].includes(r))return!0;if(e.namespaceURI==="http://www.w3.org/1999/xhtml"&&n==="input"&&r==="value"){const i=e.type.toLowerCase();if(i==="submit"||i==="button"||i==="reset")return!0}return!1}function Ba(o,e){return e.textContent=o.textContent,Ha(o,e),e}function os(o){let e,a;const t=o[7].default,r=Ma(t,o,o[6],null);return{c(){e=f("span"),r&&r.c()},l(n){e=u(n,"SPAN",{});var i=p(e);r&&r.l(i),i.forEach(c)},m(n,i){U(n,e,i),r&&r.m(e,null),o[8](e),a=!0},p(n,[i]){r&&r.p&&(!a||i&64)&&Oa(r,t,n,n[6],a?Wa(t,n[6],i,null):Ua(n[6]),null)},i(n){a||(S(r,n),a=!0)},o(n){k(r,n),a=!1},d(n){n&&c(e),r&&r.d(n),o[8](null)}}}function cs(o,e,a){let t,r,{$$slots:n={},$$scope:i}=e,{id:g}=e,{args:d=null}=e,v,P;const{getTranslation:y}=Ja();qe(o,y,_=>a(5,r=_));function N(_){if(_&&v&&P){const T=v.cloneNode(!0);qa(T,_),P.parentNode.replaceChild(T,P),P=T}}Za(()=>{const _=new MutationObserver(()=>{N(t)});return v&&t&&(P=v.cloneNode(!0),qa(P,t),v.parentNode.replaceChild(P,v),_.observe(v,{attributes:!0,characterData:!0,childList:!0,subtree:!0})),()=>{_.disconnect(),P&&P.parentNode.replaceChild(v,P)}});function I(_){Fa[_?"unshift":"push"](()=>{v=_,a(0,v)})}return o.$$set=_=>{"id"in _&&a(2,g=_.id),"args"in _&&a(3,d=_.args),"$$scope"in _&&a(6,i=_.$$scope)},o.$$.update=()=>{o.$$.dirty&44&&a(4,t=r(g,d)),o.$$.dirty&16&&N(t)},[v,y,g,d,t,r,i,n,I]}class Re extends K{constructor(e){super(),Q(this,e,cs,os,Y,{id:2,args:3})}}function is(o){let e,a,t,r,n,i;return{c(){e=f("div"),a=f("span"),t=m(),r=f("span"),n=m(),i=f("span"),this.h()},l(g){e=u(g,"DIV",{class:!0});var d=p(e);a=u(d,"SPAN",{class:!0}),p(a).forEach(c),t=h(d),r=u(d,"SPAN",{class:!0}),p(r).forEach(c),n=h(d),i=u(d,"SPAN",{class:!0}),p(i).forEach(c),d.forEach(c),this.h()},h(){l(a,"class","svelte-1m8fwia"),l(r,"class","svelte-1m8fwia"),l(i,"class","svelte-1m8fwia"),l(e,"class","svelte-1m8fwia")},m(g,d){U(g,e,d),s(e,a),s(e,t),s(e,r),s(e,n),s(e,i)},p:J,i:J,o:J,d(g){g&&c(e)}}}class jt extends K{constructor(e){super(),Q(this,e,null,is,Y,{})}}function fs(o){let e,a,t;const r=o[2].default,n=Ma(r,o,o[1],null);return{c(){e=f("div"),a=f("a"),n&&n.c(),this.h()},l(i){e=u(i,"DIV",{class:!0});var g=p(e);a=u(g,"A",{href:!0,target:!0,rel:!0,class:!0});var d=p(a);n&&n.l(d),d.forEach(c),g.forEach(c),this.h()},h(){l(a,"href",o[0]),l(a,"target","_blank"),l(a,"rel","noopener noreferrer"),l(a,"class","svelte-1xox6rv"),l(e,"class","button svelte-1xox6rv")},m(i,g){U(i,e,g),s(e,a),n&&n.m(a,null),t=!0},p(i,[g]){n&&n.p&&(!t||g&2)&&Oa(n,r,i,i[1],t?Wa(r,i[1],g,null):Ua(i[1]),null),(!t||g&1)&&l(a,"href",i[0])},i(i){t||(S(n,i),t=!0)},o(i){k(n,i),t=!1},d(i){i&&c(e),n&&n.d(i)}}}function us(o,e,a){let{$$slots:t={},$$scope:r}=e,{url:n}=e;return o.$$set=i=>{"url"in i&&a(0,n=i.url),"$$scope"in i&&a(1,r=i.$$scope)},[n,r,t]}class ps extends K{constructor(e){super(),Q(this,e,us,fs,Y,{url:0})}}function $s(o){let e,a;return e=new Z({props:{id:"hero--twitter-cta"}}),{c(){C(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,r){V(e,t,r),a=!0},p:J,i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){z(e,t)}}}function ds(o){let e,a,t,r,n,i,g,d,v,P,y,N,I,_,T,R,x,L,W,w,b,O,E,A,F;return _=new Z({props:{id:"hero--subtitle"}}),L=new Z({props:{id:"hero--date"}}),b=new Z({props:{id:"hero--location"}}),A=new ps({props:{url:"https://twitter.com/gambiconf",$$slots:{default:[$s]},$$scope:{ctx:o}}}),{c(){e=f("section"),a=f("div"),t=m(),r=f("div"),n=f("div"),i=f("img"),d=m(),v=f("div"),P=f("h1"),y=G("GambiConf"),N=m(),I=f("p"),C(_.$$.fragment),T=m(),R=f("h4"),x=f("span"),C(L.$$.fragment),W=m(),w=f("p"),C(b.$$.fragment),O=m(),E=f("div"),C(A.$$.fragment),this.h()},l(q){e=u(q,"SECTION",{class:!0});var X=p(e);a=u(X,"DIV",{class:!0}),p(a).forEach(c),t=h(X),r=u(X,"DIV",{class:!0});var B=p(r);n=u(B,"DIV",{class:!0});var ee=p(n);i=u(ee,"IMG",{src:!0,alt:!0,class:!0}),ee.forEach(c),d=h(B),v=u(B,"DIV",{class:!0});var j=p(v);P=u(j,"H1",{class:!0});var re=p(P);y=M(re,"GambiConf"),re.forEach(c),N=h(j),I=u(j,"P",{class:!0});var ae=p(I);D(_.$$.fragment,ae),ae.forEach(c),j.forEach(c),T=h(B),R=u(B,"H4",{class:!0});var le=p(R);x=u(le,"SPAN",{class:!0});var se=p(x);D(L.$$.fragment,se),se.forEach(c),le.forEach(c),W=h(B),w=u(B,"P",{class:!0});var ne=p(w);D(b.$$.fragment,ne),ne.forEach(c),O=h(B),E=u(B,"DIV",{class:!0});var te=p(E);D(A.$$.fragment,te),te.forEach(c),B.forEach(c),X.forEach(c),this.h()},h(){l(a,"class","background-overlay svelte-1wrrtlp"),Me(i.src,g=`${Qt}/mambi.png`)||l(i,"src",g),l(i,"alt","GambiConf's mascot. An anthropomorphic orange monkey using a neck scarf with the flag of the European Union"),l(i,"class","svelte-1wrrtlp"),l(n,"class","mascot svelte-1wrrtlp"),l(P,"class","svelte-1wrrtlp"),l(I,"class","svelte-1wrrtlp"),l(v,"class","title svelte-1wrrtlp"),l(x,"class","svelte-1wrrtlp"),l(R,"class","date svelte-1wrrtlp"),l(w,"class","location svelte-1wrrtlp"),l(E,"class","action svelte-1wrrtlp"),l(r,"class","message svelte-1wrrtlp"),l(e,"class","svelte-1wrrtlp")},m(q,X){U(q,e,X),s(e,a),s(e,t),s(e,r),s(r,n),s(n,i),s(r,d),s(r,v),s(v,P),s(P,y),s(v,N),s(v,I),V(_,I,null),s(r,T),s(r,R),s(R,x),V(L,x,null),s(r,W),s(r,w),V(b,w,null),s(r,O),s(r,E),V(A,E,null),F=!0},p(q,[X]){const B={};X&1&&(B.$$scope={dirty:X,ctx:q}),A.$set(B)},i(q){F||(S(_.$$.fragment,q),S(L.$$.fragment,q),S(b.$$.fragment,q),S(A.$$.fragment,q),F=!0)},o(q){k(_.$$.fragment,q),k(L.$$.fragment,q),k(b.$$.fragment,q),k(A.$$.fragment,q),F=!1},d(q){q&&c(e),z(_),z(L),z(b),z(A)}}}class ms extends K{constructor(e){super(),Q(this,e,null,ds,Y,{})}}var Xa={};(function(o){Object.defineProperty(o,"__esModule",{value:!0});var e="fas",a="paper-plane",t=512,r=512,n=[61913],i="f1d8",g="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z";o.definition={prefix:e,iconName:a,icon:[t,r,n,i,g]},o.faPaperPlane=o.definition,o.prefix=e,o.iconName=a,o.width=t,o.height=r,o.ligatures=n,o.unicode=i,o.svgPathData=g,o.aliases=n})(Xa);function hs(o){let e,a;return e=new Qa({props:{color:"#0271b8",icon:Xa.faPaperPlane}}),{c(){C(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,r){V(e,t,r),a=!0},p:J,i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){z(e,t)}}}function vs(o){let e;return{c(){e=f("a"),this.h()},l(a){e=u(a,"A",{"data-l10n-name":!0,href:!0,target:!0,rel:!0}),p(e).forEach(c),this.h()},h(){l(e,"data-l10n-name","link"),l(e,"href","https://threadreaderapp.com/thread/1518259526243393536.html"),l(e,"target","_blank"),l(e,"rel","noopener")},m(a,t){U(a,e,t)},p:J,d(a){a&&c(e)}}}function gs(o){let e,a,t,r,n,i,g,d,v,P,y,N,I,_,T,R,x,L,W;return r=new Ka({props:{size:"4x",$$slots:{default:[hs]},$$scope:{ctx:o}}}),d=new Z({props:{id:"call-for-proposal--body-paragraph-1"}}),y=new Re({props:{id:"call-for-proposal--body-paragraph-2",$$slots:{default:[vs]},$$scope:{ctx:o}}}),_=new Z({props:{id:"call-for-proposal--body-paragraph-3"}}),L=new Z({props:{id:"call-for-proposal--cta"}}),{c(){e=f("div"),a=f("div"),t=f("div"),C(r.$$.fragment),n=m(),i=f("div"),g=f("p"),C(d.$$.fragment),v=m(),P=f("p"),C(y.$$.fragment),N=m(),I=f("p"),C(_.$$.fragment),T=m(),R=f("div"),x=f("a"),C(L.$$.fragment),this.h()},l(w){e=u(w,"DIV",{class:!0});var b=p(e);a=u(b,"DIV",{class:!0});var O=p(a);t=u(O,"DIV",{class:!0});var E=p(t);D(r.$$.fragment,E),E.forEach(c),n=h(O),i=u(O,"DIV",{});var A=p(i);g=u(A,"P",{class:!0});var F=p(g);D(d.$$.fragment,F),F.forEach(c),v=h(A),P=u(A,"P",{class:!0});var q=p(P);D(y.$$.fragment,q),q.forEach(c),N=h(A),I=u(A,"P",{class:!0});var X=p(I);D(_.$$.fragment,X),X.forEach(c),A.forEach(c),O.forEach(c),T=h(b),R=u(b,"DIV",{class:!0});var B=p(R);x=u(B,"A",{class:!0,href:!0});var ee=p(x);D(L.$$.fragment,ee),ee.forEach(c),B.forEach(c),b.forEach(c),this.h()},h(){l(t,"class","icon svelte-co66os"),l(g,"class","svelte-co66os"),l(P,"class","svelte-co66os"),l(I,"class","svelte-co66os"),l(a,"class","row svelte-co66os"),l(x,"class","button-cfp svelte-co66os"),l(x,"href",`${ja}/cfp`),l(R,"class","button svelte-co66os"),l(e,"class","content svelte-co66os")},m(w,b){U(w,e,b),s(e,a),s(a,t),V(r,t,null),s(a,n),s(a,i),s(i,g),V(d,g,null),s(i,v),s(i,P),V(y,P,null),s(i,N),s(i,I),V(_,I,null),s(e,T),s(e,R),s(R,x),V(L,x,null),W=!0},p(w,b){const O={};b&2&&(O.$$scope={dirty:b,ctx:w}),r.$set(O);const E={};b&2&&(E.$$scope={dirty:b,ctx:w}),y.$set(E)},i(w){W||(S(r.$$.fragment,w),S(d.$$.fragment,w),S(y.$$.fragment,w),S(_.$$.fragment,w),S(L.$$.fragment,w),W=!0)},o(w){k(r.$$.fragment,w),k(d.$$.fragment,w),k(y.$$.fragment,w),k(_.$$.fragment,w),k(L.$$.fragment,w),W=!1},d(w){w&&c(e),z(r),z(d),z(y),z(_),z(L)}}}function _s(o){let e,a;return e=new Ue({props:{title:o[0]("call-for-proposal--title"),$$slots:{default:[gs]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,r){V(e,t,r),a=!0},p(t,[r]){const n={};r&1&&(n.title=t[0]("call-for-proposal--title")),r&2&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){z(e,t)}}}function ws(o,e,a){let t;return qe(o,Oe,r=>a(0,t=r)),[t]}class bs extends K{constructor(e){super(),Q(this,e,ws,_s,Y,{})}}function Es(o){let e,a,t,r,n,i,g,d,v,P,y,N,I,_,T,R,x,L,W,w,b,O,E,A,F,q,X,B,ee,j,re,ae,le,se,ne,te,We,He,oe,Be,Xe,ce,Ze,Fe,ie,Je,je,fe,Ke,Qe,ue,Ye,et,pe,tt,at,$e,st,rt,de,lt,nt,me,ot,ct,he,it,ft,ve,ut,pt,ge,$t,dt,_e,mt,ht,we,vt,gt,be,_t,wt,Ee,bt,Et,Ae,At,Nt,Ne,Pt,yt,Pe,St,kt,ye,It,Ct,Se,Dt,Vt,ke,zt,Lt,Ie,Tt,xt,Ce,Rt,qt,De,Gt,Mt,Ve,Ot,Ut,ze,Wt,Ht,Le,Bt,Xt,Te,Zt,Ft,xe,Jt,Ge;return t=new Z({props:{id:"calendar--month"}}),i=new Z({props:{id:"calendar--sunday"}}),v=new Z({props:{id:"calendar--monday"}}),N=new Z({props:{id:"calendar--tuesday"}}),T=new Z({props:{id:"calendar--wednesday"}}),L=new Z({props:{id:"calendar--thursday"}}),b=new Z({props:{id:"calendar--friday"}}),A=new Z({props:{id:"calendar--saturday"}}),{c(){e=f("div"),a=f("div"),C(t.$$.fragment),r=m(),n=f("span"),C(i.$$.fragment),g=m(),d=f("span"),C(v.$$.fragment),P=m(),y=f("span"),C(N.$$.fragment),I=m(),_=f("span"),C(T.$$.fragment),R=m(),x=f("span"),C(L.$$.fragment),W=m(),w=f("span"),C(b.$$.fragment),O=m(),E=f("span"),C(A.$$.fragment),F=m(),q=f("span"),X=m(),B=f("span"),ee=m(),j=f("span"),re=m(),ae=f("span"),le=m(),se=f("span"),ne=m(),te=f("span"),We=G("1"),He=m(),oe=f("span"),Be=G("2"),Xe=m(),ce=f("span"),Ze=G("3"),Fe=m(),ie=f("span"),Je=G("4"),je=m(),fe=f("span"),Ke=G("5"),Qe=m(),ue=f("span"),Ye=G("6"),et=m(),pe=f("span"),tt=G("7"),at=m(),$e=f("span"),st=G("8"),rt=m(),de=f("span"),lt=G("9"),nt=m(),me=f("span"),ot=G("10"),ct=m(),he=f("span"),it=G("11"),ft=m(),ve=f("span"),ut=G("12"),pt=m(),ge=f("span"),$t=G("13"),dt=m(),_e=f("span"),mt=G("14"),ht=m(),we=f("span"),vt=G("15"),gt=m(),be=f("span"),_t=G("16"),wt=m(),Ee=f("span"),bt=G("17"),Et=m(),Ae=f("span"),At=G("18"),Nt=m(),Ne=f("span"),Pt=G("19"),yt=m(),Pe=f("span"),St=G("20"),kt=m(),ye=f("span"),It=G("21"),Ct=m(),Se=f("span"),Dt=G("22"),Vt=m(),ke=f("span"),zt=G("23"),Lt=m(),Ie=f("span"),Tt=G("24"),xt=m(),Ce=f("span"),Rt=G("25"),qt=m(),De=f("span"),Gt=G("26"),Mt=m(),Ve=f("span"),Ot=G("27"),Ut=m(),ze=f("span"),Wt=G("28"),Ht=m(),Le=f("span"),Bt=G("29"),Xt=m(),Te=f("span"),Zt=G("30"),Ft=m(),xe=f("span"),Jt=G("31"),this.h()},l(H){e=u(H,"DIV",{class:!0});var $=p(e);a=u($,"DIV",{class:!0});var Yt=p(a);D(t.$$.fragment,Yt),Yt.forEach(c),r=h($),n=u($,"SPAN",{class:!0});var ea=p(n);D(i.$$.fragment,ea),ea.forEach(c),g=h($),d=u($,"SPAN",{class:!0});var ta=p(d);D(v.$$.fragment,ta),ta.forEach(c),P=h($),y=u($,"SPAN",{class:!0});var aa=p(y);D(N.$$.fragment,aa),aa.forEach(c),I=h($),_=u($,"SPAN",{class:!0});var sa=p(_);D(T.$$.fragment,sa),sa.forEach(c),R=h($),x=u($,"SPAN",{class:!0});var ra=p(x);D(L.$$.fragment,ra),ra.forEach(c),W=h($),w=u($,"SPAN",{class:!0});var la=p(w);D(b.$$.fragment,la),la.forEach(c),O=h($),E=u($,"SPAN",{class:!0});var na=p(E);D(A.$$.fragment,na),na.forEach(c),F=h($),q=u($,"SPAN",{class:!0}),p(q).forEach(c),X=h($),B=u($,"SPAN",{class:!0}),p(B).forEach(c),ee=h($),j=u($,"SPAN",{class:!0}),p(j).forEach(c),re=h($),ae=u($,"SPAN",{class:!0}),p(ae).forEach(c),le=h($),se=u($,"SPAN",{class:!0}),p(se).forEach(c),ne=h($),te=u($,"SPAN",{class:!0});var oa=p(te);We=M(oa,"1"),oa.forEach(c),He=h($),oe=u($,"SPAN",{class:!0});var ca=p(oe);Be=M(ca,"2"),ca.forEach(c),Xe=h($),ce=u($,"SPAN",{class:!0});var ia=p(ce);Ze=M(ia,"3"),ia.forEach(c),Fe=h($),ie=u($,"SPAN",{class:!0});var fa=p(ie);Je=M(fa,"4"),fa.forEach(c),je=h($),fe=u($,"SPAN",{class:!0});var ua=p(fe);Ke=M(ua,"5"),ua.forEach(c),Qe=h($),ue=u($,"SPAN",{class:!0});var pa=p(ue);Ye=M(pa,"6"),pa.forEach(c),et=h($),pe=u($,"SPAN",{class:!0});var $a=p(pe);tt=M($a,"7"),$a.forEach(c),at=h($),$e=u($,"SPAN",{class:!0});var da=p($e);st=M(da,"8"),da.forEach(c),rt=h($),de=u($,"SPAN",{class:!0});var ma=p(de);lt=M(ma,"9"),ma.forEach(c),nt=h($),me=u($,"SPAN",{class:!0});var ha=p(me);ot=M(ha,"10"),ha.forEach(c),ct=h($),he=u($,"SPAN",{class:!0});var va=p(he);it=M(va,"11"),va.forEach(c),ft=h($),ve=u($,"SPAN",{class:!0});var ga=p(ve);ut=M(ga,"12"),ga.forEach(c),pt=h($),ge=u($,"SPAN",{class:!0});var _a=p(ge);$t=M(_a,"13"),_a.forEach(c),dt=h($),_e=u($,"SPAN",{class:!0});var wa=p(_e);mt=M(wa,"14"),wa.forEach(c),ht=h($),we=u($,"SPAN",{class:!0});var ba=p(we);vt=M(ba,"15"),ba.forEach(c),gt=h($),be=u($,"SPAN",{class:!0});var Ea=p(be);_t=M(Ea,"16"),Ea.forEach(c),wt=h($),Ee=u($,"SPAN",{class:!0});var Aa=p(Ee);bt=M(Aa,"17"),Aa.forEach(c),Et=h($),Ae=u($,"SPAN",{class:!0});var Na=p(Ae);At=M(Na,"18"),Na.forEach(c),Nt=h($),Ne=u($,"SPAN",{class:!0});var Pa=p(Ne);Pt=M(Pa,"19"),Pa.forEach(c),yt=h($),Pe=u($,"SPAN",{class:!0});var ya=p(Pe);St=M(ya,"20"),ya.forEach(c),kt=h($),ye=u($,"SPAN",{class:!0});var Sa=p(ye);It=M(Sa,"21"),Sa.forEach(c),Ct=h($),Se=u($,"SPAN",{class:!0});var ka=p(Se);Dt=M(ka,"22"),ka.forEach(c),Vt=h($),ke=u($,"SPAN",{class:!0});var Ia=p(ke);zt=M(Ia,"23"),Ia.forEach(c),Lt=h($),Ie=u($,"SPAN",{class:!0});var Ca=p(Ie);Tt=M(Ca,"24"),Ca.forEach(c),xt=h($),Ce=u($,"SPAN",{class:!0});var Da=p(Ce);Rt=M(Da,"25"),Da.forEach(c),qt=h($),De=u($,"SPAN",{class:!0});var Va=p(De);Gt=M(Va,"26"),Va.forEach(c),Mt=h($),Ve=u($,"SPAN",{class:!0});var za=p(Ve);Ot=M(za,"27"),za.forEach(c),Ut=h($),ze=u($,"SPAN",{class:!0});var La=p(ze);Wt=M(La,"28"),La.forEach(c),Ht=h($),Le=u($,"SPAN",{class:!0});var Ta=p(Le);Bt=M(Ta,"29"),Ta.forEach(c),Xt=h($),Te=u($,"SPAN",{class:!0});var xa=p(Te);Zt=M(xa,"30"),xa.forEach(c),Ft=h($),xe=u($,"SPAN",{class:!0});var Ra=p(xe);Jt=M(Ra,"31"),Ra.forEach(c),$.forEach(c),this.h()},h(){l(a,"class","month svelte-1mip3s1"),l(n,"class","svelte-1mip3s1"),l(d,"class","svelte-1mip3s1"),l(y,"class","svelte-1mip3s1"),l(_,"class","svelte-1mip3s1"),l(x,"class","svelte-1mip3s1"),l(w,"class","svelte-1mip3s1"),l(E,"class","svelte-1mip3s1"),l(q,"class","svelte-1mip3s1"),l(B,"class","svelte-1mip3s1"),l(j,"class","svelte-1mip3s1"),l(ae,"class","svelte-1mip3s1"),l(se,"class","svelte-1mip3s1"),l(te,"class","svelte-1mip3s1"),l(oe,"class","highlighted-day svelte-1mip3s1"),l(ce,"class","highlighted-day svelte-1mip3s1"),l(ie,"class","svelte-1mip3s1"),l(fe,"class","svelte-1mip3s1"),l(ue,"class","svelte-1mip3s1"),l(pe,"class","svelte-1mip3s1"),l($e,"class","svelte-1mip3s1"),l(de,"class","svelte-1mip3s1"),l(me,"class","svelte-1mip3s1"),l(he,"class","svelte-1mip3s1"),l(ve,"class","svelte-1mip3s1"),l(ge,"class","svelte-1mip3s1"),l(_e,"class","svelte-1mip3s1"),l(we,"class","svelte-1mip3s1"),l(be,"class","svelte-1mip3s1"),l(Ee,"class","svelte-1mip3s1"),l(Ae,"class","svelte-1mip3s1"),l(Ne,"class","svelte-1mip3s1"),l(Pe,"class","svelte-1mip3s1"),l(ye,"class","svelte-1mip3s1"),l(Se,"class","svelte-1mip3s1"),l(ke,"class","svelte-1mip3s1"),l(Ie,"class","svelte-1mip3s1"),l(Ce,"class","svelte-1mip3s1"),l(De,"class","svelte-1mip3s1"),l(Ve,"class","svelte-1mip3s1"),l(ze,"class","svelte-1mip3s1"),l(Le,"class","svelte-1mip3s1"),l(Te,"class","svelte-1mip3s1"),l(xe,"class","svelte-1mip3s1"),l(e,"class","root svelte-1mip3s1")},m(H,$){U(H,e,$),s(e,a),V(t,a,null),s(e,r),s(e,n),V(i,n,null),s(e,g),s(e,d),V(v,d,null),s(e,P),s(e,y),V(N,y,null),s(e,I),s(e,_),V(T,_,null),s(e,R),s(e,x),V(L,x,null),s(e,W),s(e,w),V(b,w,null),s(e,O),s(e,E),V(A,E,null),s(e,F),s(e,q),s(e,X),s(e,B),s(e,ee),s(e,j),s(e,re),s(e,ae),s(e,le),s(e,se),s(e,ne),s(e,te),s(te,We),s(e,He),s(e,oe),s(oe,Be),s(e,Xe),s(e,ce),s(ce,Ze),s(e,Fe),s(e,ie),s(ie,Je),s(e,je),s(e,fe),s(fe,Ke),s(e,Qe),s(e,ue),s(ue,Ye),s(e,et),s(e,pe),s(pe,tt),s(e,at),s(e,$e),s($e,st),s(e,rt),s(e,de),s(de,lt),s(e,nt),s(e,me),s(me,ot),s(e,ct),s(e,he),s(he,it),s(e,ft),s(e,ve),s(ve,ut),s(e,pt),s(e,ge),s(ge,$t),s(e,dt),s(e,_e),s(_e,mt),s(e,ht),s(e,we),s(we,vt),s(e,gt),s(e,be),s(be,_t),s(e,wt),s(e,Ee),s(Ee,bt),s(e,Et),s(e,Ae),s(Ae,At),s(e,Nt),s(e,Ne),s(Ne,Pt),s(e,yt),s(e,Pe),s(Pe,St),s(e,kt),s(e,ye),s(ye,It),s(e,Ct),s(e,Se),s(Se,Dt),s(e,Vt),s(e,ke),s(ke,zt),s(e,Lt),s(e,Ie),s(Ie,Tt),s(e,xt),s(e,Ce),s(Ce,Rt),s(e,qt),s(e,De),s(De,Gt),s(e,Mt),s(e,Ve),s(Ve,Ot),s(e,Ut),s(e,ze),s(ze,Wt),s(e,Ht),s(e,Le),s(Le,Bt),s(e,Xt),s(e,Te),s(Te,Zt),s(e,Ft),s(e,xe),s(xe,Jt),Ge=!0},p:J,i(H){Ge||(S(t.$$.fragment,H),S(i.$$.fragment,H),S(v.$$.fragment,H),S(N.$$.fragment,H),S(T.$$.fragment,H),S(L.$$.fragment,H),S(b.$$.fragment,H),S(A.$$.fragment,H),Ge=!0)},o(H){k(t.$$.fragment,H),k(i.$$.fragment,H),k(v.$$.fragment,H),k(N.$$.fragment,H),k(T.$$.fragment,H),k(L.$$.fragment,H),k(b.$$.fragment,H),k(A.$$.fragment,H),Ge=!1},d(H){H&&c(e),z(t),z(i),z(v),z(N),z(T),z(L),z(b),z(A)}}}class As extends K{constructor(e){super(),Q(this,e,null,Es,Y,{})}}function Ns(o){let e;return{c(){e=f("a"),this.h()},l(a){e=u(a,"A",{"data-l10n-name":!0,href:!0}),p(e).forEach(c),this.h()},h(){l(e,"data-l10n-name","link"),l(e,"href","https://www.youtube.com/@gambiconf")},m(a,t){U(a,e,t)},p:J,d(a){a&&c(e)}}}function Ps(o){let e,a,t,r,n,i,g,d,v,P,y;return t=new As({}),g=new Z({props:{id:"where-and-when--body-paragraph-1"}}),P=new Re({props:{id:"where-and-when--body-paragraph-2",$$slots:{default:[Ns]},$$scope:{ctx:o}}}),{c(){e=f("div"),a=f("div"),C(t.$$.fragment),r=m(),n=f("div"),i=f("p"),C(g.$$.fragment),d=m(),v=f("p"),C(P.$$.fragment),this.h()},l(N){e=u(N,"DIV",{class:!0});var I=p(e);a=u(I,"DIV",{class:!0});var _=p(a);D(t.$$.fragment,_),_.forEach(c),r=h(I),n=u(I,"DIV",{});var T=p(n);i=u(T,"P",{class:!0});var R=p(i);D(g.$$.fragment,R),R.forEach(c),d=h(T),v=u(T,"P",{class:!0});var x=p(v);D(P.$$.fragment,x),x.forEach(c),T.forEach(c),I.forEach(c),this.h()},h(){l(a,"class","calendar svelte-1g3eevd"),l(i,"class","svelte-1g3eevd"),l(v,"class","svelte-1g3eevd"),l(e,"class","content svelte-1g3eevd")},m(N,I){U(N,e,I),s(e,a),V(t,a,null),s(e,r),s(e,n),s(n,i),V(g,i,null),s(n,d),s(n,v),V(P,v,null),y=!0},p(N,I){const _={};I&2&&(_.$$scope={dirty:I,ctx:N}),P.$set(_)},i(N){y||(S(t.$$.fragment,N),S(g.$$.fragment,N),S(P.$$.fragment,N),y=!0)},o(N){k(t.$$.fragment,N),k(g.$$.fragment,N),k(P.$$.fragment,N),y=!1},d(N){N&&c(e),z(t),z(g),z(P)}}}function ys(o){let e,a;return e=new Ue({props:{title:o[0]("where-and-when--title"),$$slots:{default:[Ps]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,r){V(e,t,r),a=!0},p(t,[r]){const n={};r&1&&(n.title=t[0]("where-and-when--title")),r&2&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){z(e,t)}}}function Ss(o,e,a){let t;return qe(o,Oe,r=>a(0,t=r)),[t]}class ks extends K{constructor(e){super(),Q(this,e,Ss,ys,Y,{})}}function Is(o){let e,a,t,r;return{c(){e=f("a"),a=f("img"),this.h()},l(n){e=u(n,"A",{href:!0,target:!0,rel:!0});var i=p(e);a=u(i,"IMG",{src:!0,alt:!0,class:!0}),i.forEach(c),this.h()},h(){Me(a.src,t=o[1].src.replace(/\p{C}/gu,""))||l(a,"src",t),l(a,"alt",r=o[1].alt),l(a,"class","svelte-yo1xk0"),l(e,"href","https://docs.google.com/presentation/d/1beZavMrKfFFwblVRevZbxyq9UH4rS717q9oJrTVOCxI/edit?usp=sharing"),l(e,"target","_blank"),l(e,"rel","noopener")},m(n,i){U(n,e,i),s(e,a)},p(n,i){i&2&&!Me(a.src,t=n[1].src.replace(/\p{C}/gu,""))&&l(a,"src",t),i&2&&r!==(r=n[1].alt)&&l(a,"alt",r)},d(n){n&&c(e)}}}function Cs(o){let e,a,t;return a=new Z({props:{id:"partners--become-a-partner",args:{assets:Qt},$$slots:{default:[Is,({attrs:r})=>({1:r}),({attrs:r})=>r?2:0]},$$scope:{ctx:o}}}),{c(){e=f("div"),C(a.$$.fragment),this.h()},l(r){e=u(r,"DIV",{class:!0});var n=p(e);D(a.$$.fragment,n),n.forEach(c),this.h()},h(){l(e,"class","content svelte-yo1xk0")},m(r,n){U(r,e,n),V(a,e,null),t=!0},p(r,n){const i={};n&6&&(i.$$scope={dirty:n,ctx:r}),a.$set(i)},i(r){t||(S(a.$$.fragment,r),t=!0)},o(r){k(a.$$.fragment,r),t=!1},d(r){r&&c(e),z(a)}}}function Ds(o){let e,a;return e=new Ue({props:{title:o[0]("partners--title"),$$slots:{default:[Cs]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,r){V(e,t,r),a=!0},p(t,[r]){const n={};r&1&&(n.title=t[0]("partners--title")),r&4&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){a||(S(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){z(e,t)}}}function Vs(o,e,a){let t;return qe(o,Oe,r=>a(0,t=r)),[t]}class zs extends K{constructor(e){super(),Q(this,e,Vs,Ds,Y,{})}}function Ls(o){let e,a,t;return{c(){e=f("a"),a=m(),t=f("a"),this.h()},l(r){e=u(r,"A",{"data-l10n-name":!0,href:!0,target:!0,rel:!0}),p(e).forEach(c),a=h(r),t=u(r,"A",{"data-l10n-name":!0,href:!0,target:!0,rel:!0}),p(t).forEach(c),this.h()},h(){l(e,"data-l10n-name","link-talk-water"),l(e,"href","https://www.youtube.com/watch?v=UWiXNTdmL2Q"),l(e,"target","_blank"),l(e,"rel","noopener"),l(t,"data-l10n-name","link-talk-satellite"),l(t,"href","https://www.youtube.com/watch?v=6msRiv4PJVk"),l(t,"target","_blank"),l(t,"rel","noopener")},m(r,n){U(r,e,n),U(r,a,n),U(r,t,n)},p:J,d(r){r&&c(e),r&&c(a),r&&c(t)}}}function Ts(o){let e,a,t,r,n,i,g;return{c(){e=f("a"),a=m(),t=f("a"),r=m(),n=f("a"),i=m(),g=f("a"),this.h()},l(d){e=u(d,"A",{"data-l10n-name":!0,href:!0,target:!0,rel:!0}),p(e).forEach(c),a=h(d),t=u(d,"A",{"data-l10n-name":!0,href:!0,target:!0,rel:!0}),p(t).forEach(c),r=h(d),n=u(d,"A",{"data-l10n-name":!0,href:!0,target:!0,rel:!0}),p(n).forEach(c),i=h(d),g=u(d,"A",{"data-l10n-name":!0,href:!0,target:!0,rel:!0}),p(g).forEach(c),this.h()},h(){l(e,"data-l10n-name","link-bangbangcon"),l(e,"href","https://bangbangcon.com/"),l(e,"target","_blank"),l(e,"rel","noopener"),l(t,"data-l10n-name","link-sigbovik"),l(t,"href","http://sigbovik.org/"),l(t,"target","_blank"),l(t,"rel","noopener"),l(n,"data-l10n-name","link-gambiconf-2021"),l(n,"href","https://gambiconf.dev/2021"),l(n,"target","_blank"),l(n,"rel","noopener"),l(g,"data-l10n-name","link-gambiconf-2022"),l(g,"href","https://gambiconf.dev/2022"),l(g,"target","_blank"),l(g,"rel","noopener")},m(d,v){U(d,e,v),U(d,a,v),U(d,t,v),U(d,r,v),U(d,n,v),U(d,i,v),U(d,g,v)},p:J,d(d){d&&c(e),d&&c(a),d&&c(t),d&&c(r),d&&c(n),d&&c(i),d&&c(g)}}}function xs(o){let e;return{c(){e=f("a"),this.h()},l(a){e=u(a,"A",{"data-l10n-name":!0,href:!0,target:!0,rel:!0}),p(e).forEach(c),this.h()},h(){l(e,"data-l10n-name","link-1"),l(e,"href","https://macabeus.medium.com/gambiconf-why-do-we-need-a-new-tech-event-4ff3302cf3d"),l(e,"target","_blank"),l(e,"rel","noopener")},m(a,t){U(a,e,t)},p:J,d(a){a&&c(e)}}}function Rs(o){let e,a,t,r,n,i,g,d,v,P,y,N,I,_,T,R,x,L,W;return i=new Z({props:{id:"row-what-is-gambiconf--body-paragraph-1"}}),v=new Re({props:{id:"row-what-is-gambiconf--body-paragraph-2",$$slots:{default:[Ls]},$$scope:{ctx:o}}}),N=new Z({props:{id:"row-what-is-gambiconf--body-paragraph-3"}}),T=new Re({props:{id:"row-what-is-gambiconf--body-paragraph-4",$$slots:{default:[Ts]},$$scope:{ctx:o}}}),L=new Re({props:{id:"row-what-is-gambiconf--body-paragraph-5",$$slots:{default:[xs]},$$scope:{ctx:o}}}),{c(){e=f("div"),a=f("img"),r=m(),n=f("p"),C(i.$$.fragment),g=m(),d=f("p"),C(v.$$.fragment),P=m(),y=f("p"),C(N.$$.fragment),I=m(),_=f("p"),C(T.$$.fragment),R=m(),x=f("p"),C(L.$$.fragment),this.h()},l(w){e=u(w,"DIV",{class:!0});var b=p(e);a=u(b,"IMG",{class:!0,src:!0,alt:!0}),r=h(b),n=u(b,"P",{class:!0});var O=p(n);D(i.$$.fragment,O),O.forEach(c),g=h(b),d=u(b,"P",{class:!0});var E=p(d);D(v.$$.fragment,E),E.forEach(c),P=h(b),y=u(b,"P",{class:!0});var A=p(y);D(N.$$.fragment,A),A.forEach(c),I=h(b),_=u(b,"P",{class:!0});var F=p(_);D(T.$$.fragment,F),F.forEach(c),R=h(b),x=u(b,"P",{class:!0});var q=p(x);D(L.$$.fragment,q),q.forEach(c),b.forEach(c),this.h()},h(){l(a,"class","icon svelte-1iah3q4"),Me(a.src,t=`${Qt}/favicon.png`)||l(a,"src",t),l(a,"alt","GambiConf icon"),l(n,"class","svelte-1iah3q4"),l(d,"class","svelte-1iah3q4"),l(y,"class","svelte-1iah3q4"),l(_,"class","svelte-1iah3q4"),l(x,"class","svelte-1iah3q4"),l(e,"class","content svelte-1iah3q4")},m(w,b){U(w,e,b),s(e,a),s(e,r),s(e,n),V(i,n,null),s(e,g),s(e,d),V(v,d,null),s(e,P),s(e,y),V(N,y,null),s(e,I),s(e,_),V(T,_,null),s(e,R),s(e,x),V(L,x,null),W=!0},p(w,b){const O={};b&2&&(O.$$scope={dirty:b,ctx:w}),v.$set(O);const E={};b&2&&(E.$$scope={dirty:b,ctx:w}),T.$set(E);const A={};b&2&&(A.$$scope={dirty:b,ctx:w}),L.$set(A)},i(w){W||(S(i.$$.fragment,w),S(v.$$.fragment,w),S(N.$$.fragment,w),S(T.$$.fragment,w),S(L.$$.fragment,w),W=!0)},o(w){k(i.$$.fragment,w),k(v.$$.fragment,w),k(N.$$.fragment,w),k(T.$$.fragment,w),k(L.$$.fragment,w),W=!1},d(w){w&&c(e),z(i),z(v),z(N),z(T),z(L)}}}function qs(o){let e,a,t;return a=new Ue({props:{title:o[0]("row-what-is-gambiconf--title"),$$slots:{default:[Rs]},$$scope:{ctx:o}}}),{c(){e=f("div"),C(a.$$.fragment),this.h()},l(r){e=u(r,"DIV",{id:!0});var n=p(e);D(a.$$.fragment,n),n.forEach(c),this.h()},h(){l(e,"id","about")},m(r,n){U(r,e,n),V(a,e,null),t=!0},p(r,[n]){const i={};n&1&&(i.title=r[0]("row-what-is-gambiconf--title")),n&2&&(i.$$scope={dirty:n,ctx:r}),a.$set(i)},i(r){t||(S(a.$$.fragment,r),t=!0)},o(r){k(a.$$.fragment,r),t=!1},d(r){r&&c(e),z(a)}}}function Gs(o,e,a){let t;return qe(o,Oe,r=>a(0,t=r)),[t]}class Ms extends K{constructor(e){super(),Q(this,e,Gs,qs,Y,{})}}function Os(o){let e,a,t,r,n,i,g,d,v,P,y,N,I,_,T,R,x,L,W,w,b,O;return e=new ms({}),i=new Ms({}),v=new jt({}),y=new ks({}),_=new jt({}),R=new bs({}),W=new jt({}),b=new zs({}),{c(){C(e.$$.fragment),a=m(),t=f("div"),r=f("div"),n=m(),C(i.$$.fragment),g=m(),d=f("div"),C(v.$$.fragment),P=m(),C(y.$$.fragment),N=m(),I=f("div"),C(_.$$.fragment),T=m(),C(R.$$.fragment),x=m(),L=f("div"),C(W.$$.fragment),w=m(),C(b.$$.fragment),this.h()},l(E){D(e.$$.fragment,E),a=h(E),t=u(E,"DIV",{class:!0});var A=p(t);r=u(A,"DIV",{class:!0}),p(r).forEach(c),n=h(A),D(i.$$.fragment,A),g=h(A),d=u(A,"DIV",{class:!0});var F=p(d);D(v.$$.fragment,F),F.forEach(c),P=h(A),D(y.$$.fragment,A),N=h(A),I=u(A,"DIV",{class:!0});var q=p(I);D(_.$$.fragment,q),q.forEach(c),T=h(A),D(R.$$.fragment,A),x=h(A),L=u(A,"DIV",{class:!0});var X=p(L);D(W.$$.fragment,X),X.forEach(c),w=h(A),D(b.$$.fragment,A),A.forEach(c),this.h()},h(){l(r,"class","hero-margin"),l(d,"class","bullters-gutter-wrapper svelte-d67tpp"),l(I,"class","bullters-gutter-wrapper svelte-d67tpp"),l(L,"class","bullters-gutter-wrapper svelte-d67tpp"),l(t,"class","wrapper-content svelte-d67tpp")},m(E,A){V(e,E,A),U(E,a,A),U(E,t,A),s(t,r),s(t,n),V(i,t,null),s(t,g),s(t,d),V(v,d,null),s(t,P),V(y,t,null),s(t,N),s(t,I),V(_,I,null),s(t,T),V(R,t,null),s(t,x),s(t,L),V(W,L,null),s(t,w),V(b,t,null),O=!0},p:J,i(E){O||(S(e.$$.fragment,E),S(i.$$.fragment,E),S(v.$$.fragment,E),S(y.$$.fragment,E),S(_.$$.fragment,E),S(R.$$.fragment,E),S(W.$$.fragment,E),S(b.$$.fragment,E),O=!0)},o(E){k(e.$$.fragment,E),k(i.$$.fragment,E),k(v.$$.fragment,E),k(y.$$.fragment,E),k(_.$$.fragment,E),k(R.$$.fragment,E),k(W.$$.fragment,E),k(b.$$.fragment,E),O=!1},d(E){z(e,E),E&&c(a),E&&c(t),z(i),z(v),z(y),z(_),z(R),z(W),z(b)}}}class Zs extends K{constructor(e){super(),Q(this,e,null,Os,Y,{})}}export{Zs as default};
