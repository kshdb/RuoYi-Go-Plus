var k=(v,_,t)=>new Promise((y,m)=>{var h=o=>{try{r(t.next(o))}catch(s){m(s)}},l=o=>{try{r(t.throw(o))}catch(s){m(s)}},r=o=>o.done?y(o.value):Promise.resolve(o.value).then(h,l);r((t=t.apply(v,_)).next())});import{P as D}from"./index-DrfqwNLV.js";import{u as E,_ as M}from"./useTable-BlleqRm-.js";import{_ as Y}from"./index-Rv_3g2e8.js";import{d as I,e as $,f as w,g as N}from"./index-fDNDlwjn.js";import{f as P,c as S,_ as B}from"./ConfigModal.vue_vue_type_script_setup_true_lang-BbK_tVo7.js";import{u as V}from"./index-CMSTH4sS.js";import{b as L}from"./download-CYeVxFqw.js";import{I as R}from"./entry/index-CMepwc5X-1716790511191.js";import{ad as W}from"./antd-BRjMhd0C.js";import{d as q,aa as A,n as F,_ as i,a8 as n,a9 as a,k as x,u as e,m as u,G as g,ac as G}from"./vue-Bw3NQgLF.js";import"./useContentViewHeight-xBSq9xFC.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./onMountedOrActivated-B2y-oH2N.js";import"./useForm-uR1ZVBCA.js";import"./FormItem.vue_vue_type_script_lang-DAyz6oLf.js";import"./componentMap-DPcekmXH.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-CwI952Jx.js";import"./useRender-C6p2srTi.js";import"./index-BhefpKLc.js";import"./dict-C9gNHjAh.js";import"./dictEnum-DeC8h6ZR.js";import"./useLoading-iCq4GOHr.js";const he=q({name:"Config",__name:"index",setup(v){const[_,{reload:t,multipleRemove:y,selected:m}]=E({rowSelection:{type:"checkbox"},title:"参数列表",showIndexColumn:!1,api:I,rowKey:"configId",useSearchForm:!0,formConfig:{schemas:P,labelWidth:80,name:"config",baseColProps:{xs:24,sm:24,md:24,lg:6},fieldMapToTime:[["createTime",["params[beginTime]","params[endTime]"],["YYYY-MM-DD 00:00:00","YYYY-MM-DD 23:59:59"]]]},columns:S,actionColumn:{width:200,title:"操作",key:"action",fixed:"right"}}),[h,{openModal:l}]=V();function r(){return k(this,null,function*(){yield N(),yield t()})}function o(c){l(!0,{record:c,update:!0})}function s(){l(!0,{update:!1})}function T(c){return k(this,null,function*(){yield w([c.configId]),yield t()})}return(c,p)=>{const d=A("a-button"),f=F("auth");return i(),n(e(D),{dense:""},{default:a(()=>[x(e(M),{onRegister:e(_)},{toolbar:a(()=>[x(e(W),null,{default:a(()=>[u((i(),n(d,{onClick:r},{default:a(()=>[g("刷新缓存")]),_:1})),[[f,"system:config:query"]]),u((i(),n(d,{class:"<sm:hidden",onClick:p[0]||(p[0]=b=>e(L)(e($),"参数数据"))},{default:a(()=>[g("导出")]),_:1})),[[f,"system:config:export"]]),u((i(),n(d,{class:"<sm:hidden",type:"primary",danger:"",onClick:p[1]||(p[1]=b=>e(y)(e(w))),disabled:!e(m)},{default:a(()=>[g("删除")]),_:1},8,["disabled"])),[[f,"system:config:remove"]]),u((i(),n(d,{type:"primary",onClick:s},{default:a(()=>[g("新增")]),_:1})),[[f,"system:config:add"]])]),_:1})]),bodyCell:a(({column:b,record:C})=>[b.key==="action"?(i(),n(e(Y),{key:0,stopButtonPropagation:"",actions:[{label:"修改",icon:e(R).EDIT,type:"primary",ghost:!0,auth:"system:config:edit",onClick:o.bind(null,C)},{label:"删除",icon:e(R).DELETE,type:"primary",danger:!0,ghost:!0,auth:"system:config:remove",popConfirm:{placement:"left",title:`是否删除[${C.configName}]?`,confirm:T.bind(null,C)}}]},null,8,["actions"])):G("",!0)]),_:1},8,["onRegister"]),x(B,{onRegister:e(h),onReload:e(t)},null,8,["onRegister","onReload"])]),_:1})}}});export{he as default};