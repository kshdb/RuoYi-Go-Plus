var g=(v,y,n)=>new Promise((c,l)=>{var k=t=>{try{m(n.next(t))}catch(d){l(d)}},i=t=>{try{m(n.throw(t))}catch(d){l(d)}},m=t=>t.done?c(t.value):Promise.resolve(t.value).then(k,i);m((n=n.apply(v,y)).next())});import{a as F,B as D}from"./index-CMSTH4sS.js";import{u as K,_ as T}from"./useForm-uR1ZVBCA.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./componentMap-DPcekmXH.js";import{f as x,g as N,h as P}from"./index-CYdIkwig.js";import{_ as U}from"./index-CwwL6bPg.js";import{a as V}from"./role.data-DFU5aoTG.js";import{bA as $,bB as G}from"./entry/index-CMepwc5X-1716790511191.js";import{b7 as L,R as E}from"./antd-BRjMhd0C.js";import{d as O,f as C,_ as b,a8 as S,a9 as h,k as _,u as s,ac as W,ad as j}from"./vue-Bw3NQgLF.js";const oe=O({name:"RoleAuthModal",__name:"RoleAuthModal",emits:["register","reload"],setup(v,{emit:y}){const n=y,c=C([]),l=C(!1),[k,{modalLoading:i,closeModal:m}]=F(e=>g(this,null,function*(){i(!0);const{record:a}=e,o=yield x(a.roleId);l.value=!o.deptCheckStrictly,yield d(o);const p=yield N(o.roleId),{depts:u,checkedKeys:f}=p;if(c.value=u,o.deptCheckStrictly){const M=$(u,f,{pid:"parentId"});r.value=[...M,...f]}else r.value=f;yield d({deptIds:f}),i(!1)})),[t,{setFieldsValue:d,validate:w,resetForm:I}]=K({layout:"vertical",labelWidth:100,name:"role_modal",showActionButtonGroup:!1,baseColProps:{span:24},schemas:V}),r=C([]);function A(e,a){if(e instanceof Array){const o=a.halfCheckedKeys||[];r.value=[...o,...e]}else r.value=[...e.checked]}function R(e){if(e instanceof Array){const a=G(c.value);e.length===0&&(console.log("取消全部"),r.value=[]),e.length===a.length&&(console.log("选择全部"),r.value=a)}}function B(){return g(this,null,function*(){try{i(!0);const e=yield w();e.dataScope!=="2"?e.deptIds=[]:(e.deptCheckStrictly=!l.value,e.deptIds=r.value),yield P(e),n("reload"),m(),yield I()}catch(e){}finally{i(!1)}})}return(e,a)=>(b(),S(s(D),j(e.$attrs,{title:"分配权限",width:600,"min-height":350,onRegister:s(k),onOk:B,onCancel:s(I)}),{default:h(()=>[_(s(T),{onRegister:s(t)},{deptTree:h(({model:o,field:p})=>[_(s(L),null,{default:h(()=>[_(s(E),{"body-style":{padding:0}},{default:h(()=>[c.value.length?(b(),S(s(U),{key:0,title:"部门分配",defaultExpandAll:"","tree-data":c.value,fieldNames:{title:"label",key:"id"},checkable:!0,selectable:!1,enableCustomTool:!0,checkStrictly:l.value,"onUpdate:checkStrictly":a[0]||(a[0]=u=>l.value=u),checkedKeys:o[p],"onUpdate:checkedKeys":u=>o[p]=u,onCheck:A,onChange:R},null,8,["tree-data","checkStrictly","checkedKeys","onUpdate:checkedKeys"])):W("",!0)]),_:2},1024)]),_:2},1024)]),_:1},8,["onRegister"])]),_:1},16,["onRegister","onCancel"]))}});export{oe as _};