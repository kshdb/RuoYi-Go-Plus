var d=Object.defineProperty;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var f=(r,a,t)=>a in r?d(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,s=(r,a)=>{for(var t in a||(a={}))y.call(a,t)&&f(r,t,a[t]);if(c)for(var t of c(a))b.call(a,t)&&f(r,t,a[t]);return r};var _=(r,a,t)=>new Promise((i,u)=>{var l=o=>{try{e(t.next(o))}catch(n){u(n)}},m=o=>{try{e(t.throw(o))}catch(n){u(n)}},e=o=>o.done?i(o.value):Promise.resolve(o.value).then(l,m);e((t=t.apply(r,a)).next())});import{N as p}from"./entry/index-BbJQUQ84-1718268303552.js";import{y as S,u as O}from"./vue-Cw15aJ-2.js";function E(r,a){function t(){S(()=>_(this,null,function*(){if(r=O(r),!r)return;(yield p(()=>import("./sortable.esm-DFFrMEeC.js"),[])).default.create(r,s({animation:100,delay:400,delayOnTouchOnly:!0},a))}))}return{initSortable:t}}export{E as u};