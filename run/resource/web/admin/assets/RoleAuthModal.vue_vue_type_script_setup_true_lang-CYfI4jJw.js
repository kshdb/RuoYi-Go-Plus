var C=(_,y,n)=>new Promise((c,l)=>{var k=t=>{try{m(n.next(t))}catch(d){l(d)}},i=t=>{try{m(n.throw(t))}catch(d){l(d)}},m=t=>t.done?c(t.value):Promise.resolve(t.value).then(k,i);m((n=n.apply(_,y)).next())});import{a as D,B as F}from"./index-BIkrAlj7.js";import{u as K,_ as T}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./componentMap-qA-f8iV4.js";import{f as x,g as N,h as P}from"./index-DRTL1nQC.js";import{_ as U}from"./index-BcLdq1Bd.js";import{a as V}from"./role.data-wz2Oc4N6.js";import{bC as $,bD as G}from"./entry/index-BbJQUQ84-1718268303552.js";import{ba as L,R as E}from"./antd-DMGzOvrA.js";import{d as O,f as g,Z as b,a8 as S,a9 as h,k as v,u as s,ab as W,ac as Z}from"./vue-Cw15aJ-2.js";const oe=O({name:"RoleAuthModal",__name:"RoleAuthModal",emits:["register","reload"],setup(_,{emit:y}){const n=y,c=g([]),l=g(!1),[k,{modalLoading:i,closeModal:m}]=D(e=>C(this,null,function*(){i(!0);const{record:a}=e,o=yield x(a.roleId);l.value=!o.deptCheckStrictly,yield d(o);const p=yield N(o.roleId),{depts:u,checkedKeys:f}=p;if(c.value=u,o.deptCheckStrictly){const B=$(u,f,{pid:"parentId"});r.value=[...B,...f]}else r.value=f;yield d({deptIds:f}),i(!1)})),[t,{setFieldsValue:d,validate:w,resetForm:I}]=K({layout:"vertical",labelWidth:100,name:"role_modal",showActionButtonGroup:!1,baseColProps:{span:24},schemas:V}),r=g([]);function R(e,a){if(e instanceof Array){const o=a.halfCheckedKeys||[];r.value=[...o,...e]}else r.value=[...e.checked]}function A(e){if(e instanceof Array){const a=G(c.value);e.length===0&&(r.value=[]),e.length===a.length&&(r.value=a)}}function M(){return C(this,null,function*(){try{i(!0);const e=yield w();e.dataScope!=="2"?e.deptIds=[]:(e.deptCheckStrictly=!l.value,e.deptIds=r.value),yield P(e),n("reload"),m(),yield I()}catch(e){}finally{i(!1)}})}return(e,a)=>(b(),S(s(F),Z(e.$attrs,{title:"分配权限",width:600,"min-height":350,onRegister:s(k),onOk:M,onCancel:s(I)}),{default:h(()=>[v(s(T),{onRegister:s(t)},{deptTree:h(({model:o,field:p})=>[v(s(L),null,{default:h(()=>[v(s(E),{"body-style":{padding:0}},{default:h(()=>[c.value.length?(b(),S(s(U),{key:0,title:"部门分配",defaultExpandAll:"","tree-data":c.value,fieldNames:{title:"label",key:"id"},checkable:!0,selectable:!1,enableCustomTool:!0,checkStrictly:l.value,"onUpdate:checkStrictly":a[0]||(a[0]=u=>l.value=u),checkedKeys:o[p],"onUpdate:checkedKeys":u=>o[p]=u,onCheck:R,onChange:A},null,8,["tree-data","checkStrictly","checkedKeys","onUpdate:checkedKeys"])):W("",!0)]),_:2},1024)]),_:2},1024)]),_:1},8,["onRegister"])]),_:1},16,["onRegister","onCancel"]))}});export{oe as _};