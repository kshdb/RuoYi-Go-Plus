var T=Object.defineProperty,V=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var M=(e,t,s)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_=(e,t)=>{for(var s in t||(t={}))G.call(t,s)&&M(e,s,t[s]);if(R)for(var s of R(t))L.call(t,s)&&M(e,s,t[s]);return e},I=(e,t)=>V(e,z(t));var P=(e,t,s)=>new Promise((h,d)=>{var g=l=>{try{f(s.next(l))}catch(c){d(c)}},p=l=>{try{f(s.throw(l))}catch(c){d(c)}},f=l=>l.done?h(l.value):Promise.resolve(l.value).then(g,p);f((s=s.apply(e,t)).next())});import{d as O,f as j,Z as Y,h as Z,_ as b,$ as E,k as q,a9 as w,a2 as F,aa as $,a8 as A,ac as H,a1 as S,G as J}from"./vue-Bw3NQgLF.js";import{_ as K,t as Q,o as U,s as W,c as X,k as x,R as ee,Y as te,z as ne,bn as ae,j as se}from"./entry/index-CMepwc5X-1716790511191.js";import{bh as D,l as re}from"./antd-BRjMhd0C.js";const oe=O({name:"LayoutBreadcrumb",components:{Icon:K,[D.name]:D},props:{theme:Q.oneOf(["dark","light"])},setup(){const e=j([]),{currentRoute:t}=Y(),{prefixCls:s}=U("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=W(),d=X(),{t:g}=x();Z(()=>P(this,null,function*(){var v,B,y;if(t.value.name===ee)return;const r=yield te(),n=t.value.matched,a=n==null?void 0:n[n.length-1];let o=t.value.path;a&&((v=a==null?void 0:a.meta)!=null&&v.currentActiveMenu)&&(o=a.meta.currentActiveMenu);const u=ne(r,o),m=r.filter(N=>N.path===u[0]),i=p(m,u);if(!i||i.length===0)return;const C=f(i);(B=t.value.meta)!=null&&B.currentActiveMenu&&C.push(I(_({},t.value),{name:((y=t.value.meta)==null?void 0:y.title)||t.value.name})),e.value=C}));function p(r,n){const a=[];return r.forEach(o=>{var u,m;n.includes(o.path)&&a.push(I(_({},o),{name:((u=o.meta)==null?void 0:u.title)||o.name})),(m=o.children)!=null&&m.length&&a.push(...p(o.children,n))}),a}function f(r){return ae(r,n=>{const{meta:a,name:o}=n;if(!a)return!!o;const{title:u,hideBreadcrumb:m,hideMenu:i}=a;return!(!u||m||i)}).filter(n=>{var a;return!((a=n.meta)!=null&&a.hideBreadcrumb)})}function l(r,n,a){a==null||a.preventDefault();const{children:o,redirect:u,meta:m}=r;if(o!=null&&o.length&&!u){a==null||a.stopPropagation();return}if(!(m!=null&&m.carryParam))if(u&&re(u))d(u);else{let i="";n.length===1?i=n[0]:i=`${n.slice(1).pop()||""}`,i=/^\//.test(i)?i:`/${i}`,d(i)}}function c(r,n){return r.indexOf(n)!==r.length-1}function k(r){var n;return r.icon||((n=r.meta)==null?void 0:n.icon)}return{routes:e,t:g,prefixCls:s,getIcon:k,getShowBreadCrumbIcon:h,handleClick:l,hasRedirect:c}}}),ce={key:1};function ie(e,t,s,h,d,g){const p=$("Icon"),f=$("router-link"),l=$("a-breadcrumb");return b(),E("div",{class:F([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[q(l,{routes:e.routes},{itemRender:w(({route:c,routes:k,paths:r})=>[e.getShowBreadCrumbIcon&&e.getIcon(c)?(b(),A(p,{key:0,icon:e.getIcon(c)},null,8,["icon"])):H("",!0),e.hasRedirect(k,c)?(b(),A(f,{key:2,to:"",onClick:n=>e.handleClick(c,r,n)},{default:w(()=>[J(S(e.t(c.name||c.meta.title)),1)]),_:2},1032,["onClick"])):(b(),E("span",ce,S(e.t(c.name||c.meta.title)),1))]),_:1},8,["routes"])],2)}const de=se(oe,[["render",ie]]);export{de as default};
