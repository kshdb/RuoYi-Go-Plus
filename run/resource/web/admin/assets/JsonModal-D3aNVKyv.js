var f=Object.defineProperty,u=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var i=(s,e,o)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,c=(s,e)=>{for(var o in e||(e={}))v.call(e,o)&&i(s,o,e[o]);if(l)for(var o of l(e))_.call(e,o)&&i(s,o,e[o]);return s},p=(s,e)=>u(s,C(e));import J from"./PreviewCode-DxuCCtkA.js";import{r as h,b as w}from"./index-CI1L1GOb.js";import{M}from"./antd-DMGzOvrA.js";import{d as b,r as N,c as $,I as k,a7 as d,Z as x,a8 as y,a9 as O,k as P}from"./vue-Cw15aJ-2.js";import{l as j}from"./entry/index-BbJQUQ84-1718268303552.js";import"./index-Dx0uas1b.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./copyTextToClipboard-uEEWQikS.js";const B=b({name:"JsonModal",components:{PreviewCode:J,Modal:M},emits:["cancel"],setup(s,{emit:e}){const o=N({visible:!1,jsonData:{}}),n=t=>{w(t.schemas),o.jsonData=t,o.visible=!0},a=$(()=>JSON.stringify(h(o.jsonData),null,"	")),r=()=>{o.visible=!1,e("cancel")};return p(c({},k(o)),{editorJson:a,handleCancel:r,showModal:n})}});function D(s,e,o,n,a,r){const t=d("PreviewCode"),m=d("Modal");return x(),y(m,{title:"JSON数据",footer:null,open:s.visible,onCancel:s.handleCancel,destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:"850px"},{default:O(()=>[P(t,{editorJson:s.editorJson},null,8,["editorJson"])]),_:1},8,["open","onCancel"])}const z=j(B,[["render",D]]);export{z as default};