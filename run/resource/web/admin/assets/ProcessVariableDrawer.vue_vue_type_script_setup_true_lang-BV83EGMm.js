var m=(u,c,a)=>new Promise((o,n)=>{var p=e=>{try{r(a.next(e))}catch(s){n(s)}},l=e=>{try{r(a.throw(e))}catch(s){n(s)}},r=e=>e.done?o(e.value):Promise.resolve(e.value).then(p,l);r((a=a.apply(u,c)).next())});import{a as d,B as w}from"./index-BLDmWVyR.js";import{u as h}from"./useSize-CUNtmCvH.js";import{m as D}from"./index-DH8S7RKQ.js";import{D as g}from"./index-BVlzXcPd.js";import{u as _}from"./useDescription-DLkhA-M6.js";import{d as k,Z as b,a8 as y,a9 as B,k as R,u as t,ac as x}from"./vue-Cw15aJ-2.js";const L=k({__name:"ProcessVariableDrawer",setup(u){const c=h(600),[a,{drawerLoading:o}]=d(n);function n(r){return m(this,null,function*(){o(!0);const e=yield D(r),s=[],f={};e.forEach(i=>{f[i.key]=i.value,s.push({field:i.key,label:i.key})}),l({data:f,schema:s}),o(!1)})}const[p,{setDescProps:l}]=_({column:1,schema:[]});return(r,e)=>(b(),y(t(w),x(r.$attrs,{title:"流程变量",width:t(c),"show-footer":!1,onRegister:t(a)}),{default:B(()=>[R(t(g),{onRegister:t(p)},null,8,["onRegister"])]),_:1},16,["width","onRegister"]))}});export{L as _};