var y=(g,p,o)=>new Promise((c,s)=>{var d=t=>{try{i(o.next(t))}catch(n){s(n)}},m=t=>{try{i(o.throw(t))}catch(n){s(n)}},i=t=>t.done?c(t.value):Promise.resolve(t.value).then(d,m);i((o=o.apply(g,p)).next())});import{P as w}from"./index-C4nZBquz.js";import{u as x,_ as E}from"./useTable-CNbfTOCZ.js";import{_ as R}from"./index-DCvxWw7W.js";import{t as D,f as I,c as A,_ as P,a as B}from"./TreeModal.vue_vue_type_script_setup_true_lang-FCpOT5lV.js";import{u as M}from"./index-BIkrAlj7.js";import{bw as N,bA as V,I as k}from"./entry/index-BbJQUQ84-1718268303552.js";import{d as $,a7 as F,n as L,Z as h,a8 as C,a9 as r,k as l,u as e,G as b,m as S,ab as G}from"./vue-Cw15aJ-2.js";import"./useContentViewHeight-BDi3O9lC.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./antd-DMGzOvrA.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./useForm-BsovIqMX.js";import"./FormItem.vue_vue_type_script_lang-C67_1cA1.js";import"./componentMap-qA-f8iV4.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./copyTextToClipboard-uEEWQikS.js";import"./style-CLEvKZSv.js";import"./helper-CXVLNTBN.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-BTdBE9Oa.js";import"./download-DOz9ltI1.js";import"./useLoading-D1in2ACg.js";const ce=$({name:"Tree",__name:"index",setup(g){const[p,{reload:o,expandAll:c,collapseAll:s}]=x({api:D,title:"测试树列表",showIndexColumn:!1,isTreeTable:!0,pagination:!1,rowKey:"id}",afterFetch(a){const u=N(a,{id:"id",pid:"parentId"});return V(u),u},useSearchForm:!0,formConfig:{schemas:I,baseColProps:{span:8}},columns:A,actionColumn:{width:200,title:"操作",key:"action",fixed:"right"}}),[d,{openModal:m}]=M();function i(a){m(!0,{record:a,update:!0})}function t(){m(!0,{update:!1})}function n(a){return y(this,null,function*(){yield B(a.id),yield o()})}return(a,u)=>{const f=F("a-button"),T=L("auth");return h(),C(e(w),{dense:""},{default:r(()=>[l(e(E),{onRegister:e(p)},{toolbar:r(()=>[l(f,{onClick:e(c)},{default:r(()=>[b("展开")]),_:1},8,["onClick"]),l(f,{onClick:e(s)},{default:r(()=>[b("折叠")]),_:1},8,["onClick"]),S((h(),C(f,{type:"primary",onClick:t},{default:r(()=>[b("新增")]),_:1})),[[T,"demo:tree:add"]])]),bodyCell:r(({column:v,record:_})=>[v.key==="action"?(h(),C(e(R),{key:0,stopButtonPropagation:"",actions:[{label:"修改",icon:e(k).EDIT,type:"primary",ghost:!0,auth:"demo:tree:edit",onClick:i.bind(null,_)},{label:"删除",icon:e(k).DELETE,type:"primary",danger:!0,ghost:!0,auth:"demo:tree:remove",popConfirm:{placement:"left",title:"是否删除测试树["+_.id+"]?",confirm:n.bind(null,_)}}]},null,8,["actions"])):G("",!0)]),_:1},8,["onRegister"]),l(P,{onRegister:e(d),onReload:e(o)},null,8,["onRegister","onReload"])]),_:1})}}});export{ce as default};