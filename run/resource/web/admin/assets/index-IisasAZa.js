var y=(g,p,o)=>new Promise((c,s)=>{var d=t=>{try{i(o.next(t))}catch(n){s(n)}},l=t=>{try{i(o.throw(t))}catch(n){s(n)}},i=t=>t.done?c(t.value):Promise.resolve(t.value).then(d,l);i((o=o.apply(g,p)).next())});import{P as x}from"./index-DrfqwNLV.js";import{u as w,_ as E}from"./useTable-BlleqRm-.js";import{_ as R}from"./index-Rv_3g2e8.js";import{t as D,f as I,c as P,_ as A,a as B}from"./TreeModal.vue_vue_type_script_setup_true_lang-BamPBcGr.js";import{u as M}from"./index-CMSTH4sS.js";import{bp as N,bz as V,I as k}from"./entry/index-CMepwc5X-1716790511191.js";import{d as $,aa as F,n as L,_ as h,a8 as C,a9 as r,k as m,u as e,G as b,m as S,ac as z}from"./vue-Bw3NQgLF.js";import"./useContentViewHeight-xBSq9xFC.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./antd-BRjMhd0C.js";import"./onMountedOrActivated-B2y-oH2N.js";import"./useForm-uR1ZVBCA.js";import"./FormItem.vue_vue_type_script_lang-DAyz6oLf.js";import"./componentMap-DPcekmXH.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-CwI952Jx.js";import"./download-CYeVxFqw.js";import"./useLoading-iCq4GOHr.js";const pe=$({name:"Tree",__name:"index",setup(g){const[p,{reload:o,expandAll:c,collapseAll:s}]=w({api:D,title:"测试树列表",showIndexColumn:!1,isTreeTable:!0,pagination:!1,rowKey:"id}",afterFetch(a){const u=N(a,{id:"id",pid:"parentId"});return V(u),u},useSearchForm:!0,formConfig:{schemas:I,baseColProps:{span:8}},columns:P,actionColumn:{width:200,title:"操作",key:"action",fixed:"right"}}),[d,{openModal:l}]=M();function i(a){l(!0,{record:a,update:!0})}function t(){l(!0,{update:!1})}function n(a){return y(this,null,function*(){yield B(a.id),yield o()})}return(a,u)=>{const f=F("a-button"),T=L("auth");return h(),C(e(x),{dense:""},{default:r(()=>[m(e(E),{onRegister:e(p)},{toolbar:r(()=>[m(f,{onClick:e(c)},{default:r(()=>[b("展开")]),_:1},8,["onClick"]),m(f,{onClick:e(s)},{default:r(()=>[b("折叠")]),_:1},8,["onClick"]),S((h(),C(f,{type:"primary",onClick:t},{default:r(()=>[b("新增")]),_:1})),[[T,"demo:tree:add"]])]),bodyCell:r(({column:v,record:_})=>[v.key==="action"?(h(),C(e(R),{key:0,stopButtonPropagation:"",actions:[{label:"修改",icon:e(k).EDIT,type:"primary",ghost:!0,auth:"demo:tree:edit",onClick:i.bind(null,_)},{label:"删除",icon:e(k).DELETE,type:"primary",danger:!0,ghost:!0,auth:"demo:tree:remove",popConfirm:{placement:"left",title:"是否删除测试树["+_.id+"]?",confirm:n.bind(null,_)}}]},null,8,["actions"])):z("",!0)]),_:1},8,["onRegister"]),m(A,{onRegister:e(d),onReload:e(o)},null,8,["onRegister","onReload"])]),_:1})}}});export{pe as default};
