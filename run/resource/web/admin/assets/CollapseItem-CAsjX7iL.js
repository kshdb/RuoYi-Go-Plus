import{d as u}from"./vuedraggable.umd-BNYp9-k3.js";import{_ as f,o as g,j as h}from"./entry/index-CMepwc5X-1716790511191.js";import{d as C,r as I,aa as r,_,$,k as d,a9 as v,a0 as b,G as k,a1 as y,ad as A,a2 as S}from"./vue-Bw3NQgLF.js";import"./antd-BRjMhd0C.js";const D=C({name:"CollapseItem",components:{draggable:u,Icon:f},props:{list:{type:[Array],default:()=>[]},handleListPush:{type:Function,default:null}},setup(e,{emit:t}){const{prefixCls:s}=g("form-design-collapse-item"),n=I({});return{prefixCls:s,state:n,handleStart:(a,o)=>{t("start",o[a.oldIndex].component)},handleAdd:a=>{console.log(a)},cloneItem:a=>e.handleListPush(a)}}}),B=["onDragstart","onClick"];function N(e,t,s,n,i,p){const l=r("Icon"),a=r("draggable");return _(),$("div",{class:S(e.prefixCls)},[d(a,A({tag:"ul","model-value":e.list},{group:{name:"form-draggable",pull:"clone",put:!1},sort:!1,clone:e.cloneItem,animation:180,ghostClass:"moving"},{"item-key":"type",onStart:t[0]||(t[0]=o=>e.handleStart(o,e.list)),onAdd:e.handleAdd}),{item:v(({element:o,index:c})=>[b("li",{class:"bs-box text-ellipsis",onDragstart:m=>e.$emit("add-attrs",e.list,c),onClick:m=>e.$emit("handle-list-push",o)},[d(l,{icon:o.icon},null,8,["icon"]),k(" "+y(o.label),1)],40,B)]),_:1},16,["model-value","onAdd"])],2)}const w=h(D,[["render",N],["__scopeId","data-v-fd323b31"]]);export{w as default};
