import{c as v}from"./index-CI1L1GOb.js";import{a as k}from"./useFormDesignState-DRetWqEf.js";import{_ as g,l as D}from"./entry/index-BbJQUQ84-1718268303552.js";import{d as I,c as _,a7 as $,Z as b,_ as B,$ as d,k as i,a1 as p,B as m}from"./vue-Cw15aJ-2.js";import"./antd-DMGzOvrA.js";const N=I({name:"FormNodeOperate",components:{Icon:g},props:{schema:{type:Object,default:()=>({})},currentItem:{type:Object,default:()=>({})}},setup(e){const{formConfig:o,formDesignMethods:s}=k();return{activeClass:_(()=>e.schema.key===e.currentItem.key?"active":"unactivated"),handleDelete:()=>{const n=t=>{t.some((l,a)=>{var c;const{component:y,key:h}=l;if(["Grid","Tabs"].includes(y)&&((c=l.columns)==null||c.forEach(r=>n(r.children))),h===e.currentItem.key){let r=t.length===1?{component:""}:t.length-1>a?t[a+1]:t[a-1];return s.handleSetSelectItem(r),v(t,a),!0}})};n(o.value.schemas)},handleCopy:()=>{s.handleCopy()}}}}),O={class:"copy-delete-box"};function F(e,o,s,u,f,C){const n=$("Icon");return b(),B("div",O,[d("a",{class:p(["copy",e.activeClass]),onClick:o[0]||(o[0]=m((...t)=>e.handleCopy&&e.handleCopy(...t),["stop"]))},[i(n,{icon:"ant-design:copy-outlined"})],2),d("a",{class:p(["delete",e.activeClass]),onClick:o[1]||(o[1]=m((...t)=>e.handleDelete&&e.handleDelete(...t),["stop"]))},[i(n,{icon:"ant-design:delete-outlined"})],2)])}const w=D(N,[["render",F]]);export{w as default};
