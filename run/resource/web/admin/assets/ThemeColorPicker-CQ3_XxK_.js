import{o as l}from"./entry/index-CMepwc5X-1716790511191.js";import{b as p}from"./index-CTZ5YzzH.js";import{aV as u}from"./antd-BRjMhd0C.js";import{d,_ as n,$ as s,F as f,ab as k,a2 as m,u as t,ah as C,k as _}from"./vue-Bw3NQgLF.js";import"./createAsyncComponent-vQ6eTu1D.js";import"./index-CuaDnMjz.js";import"./useContentViewHeight-xBSq9xFC.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./useSortable-CwI952Jx.js";import"./index-ov0mgIjt.js";const h=["onClick"],S=d({name:"ThemeColorPicker",__name:"ThemeColorPicker",props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(r){const o=r,{prefixCls:a}=l("setting-theme-picker");function c(i){o.event&&p(o.event,i)}return(i,y)=>(n(),s("div",{class:m(t(a))},[(n(!0),s(f,null,k(r.colorList||[],e=>(n(),s("span",{key:e,onClick:v=>c(e),class:m([`${t(a)}__item`,{[`${t(a)}__item--active`]:r.def===e}]),style:C({background:e})},[_(t(u))],14,h))),128))],2))}});export{S as default};