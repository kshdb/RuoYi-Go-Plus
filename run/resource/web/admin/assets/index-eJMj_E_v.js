var l=(C,b,m)=>new Promise((g,c)=>{var d=n=>{try{s(m.next(n))}catch(u){c(u)}},r=n=>{try{s(m.throw(n))}catch(u){c(u)}},s=n=>n.done?g(n.value):Promise.resolve(n.value).then(d,r);s((m=m.apply(C,b)).next())});import{P as x}from"./index-C4nZBquz.js";import{g as M,p as O,u as P,c as B}from"./index-C2Dnm87M.js";import{u as K,_ as E}from"./useTable-CNbfTOCZ.js";import{_ as I}from"./index-DCvxWw7W.js";import{columns as L}from"./definition.data-_N5vyh0o.js";import{k as V,I as w,h as W}from"./entry/index-BbJQUQ84-1718268303552.js";import{d as z,ao as A,o as F,a7 as G,Z as f,a8 as y,a9 as k,k as T,G as $,a0 as v,ab as _,u as i}from"./vue-Cw15aJ-2.js";import{u as H}from"./index-BIkrAlj7.js";import U from"./PreviewModal-C9idMr_i.js";import"./useContentViewHeight-BDi3O9lC.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./antd-DMGzOvrA.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./useForm-BsovIqMX.js";import"./FormItem.vue_vue_type_script_lang-C67_1cA1.js";import"./componentMap-qA-f8iV4.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./copyTextToClipboard-uEEWQikS.js";import"./style-CLEvKZSv.js";import"./helper-CXVLNTBN.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-BTdBE9Oa.js";import"./download-DOz9ltI1.js";import"./useLoading-D1in2ACg.js";import"./useRender-D1Q3fAQ3.js";import"./index-Dx0uas1b.js";import"./dict-vVDMuEaq.js";import"./index-BQijfeh-.js";import"./index-DeqOXDrL.js";import"./index-m3nShAF-.js";const vt=z({name:"WorkflowDefinitionHistoryPage",__name:"index",emits:["register","preview"],setup(C){const m=A().params.key||"0";F(()=>l(this,null,function*(){yield r()}));const[g,{setTableData:c}]=K({showIndexColumn:!1,rowKey:"id",useSearchForm:!1,columns:L,actionColumn:{width:300,title:"操作",key:"action",fixed:"right"},showTableSetting:!1,pagination:!1,inset:!0,size:"small"}),{setTitle:d}=V();function r(){return l(this,null,function*(){const t=yield M(m);if(c(t),t&&t.length){const{name:a}=t[0];d("历史记录: "+a)}})}const{createConfirm:s}=W();function n(t){return l(this,null,function*(){s({iconType:"warning",title:"提示",content:`是否确认删除[${t.name}] - [${t.key}]`,onOk:()=>l(this,null,function*(){const{deploymentId:a,id:p}=t;yield O(a,p),yield r()})})})}function u(t){const a=t.suspensionState=="1"?"暂停":"启动",p=t.suspensionState=="1"?"不允许":"允许",o=t.suspensionState=="1"?"挂起":"激活";s({iconType:"warning",title:"提示",content:`${a}后，此流程下的所有任务都${p}往后流转，您确定${o}【${t.name}】吗？`,onOk:()=>l(this,null,function*(){yield P(t.id),yield r()})})}function S(t){s({iconType:"info",title:"提示",content:`是否确认转换为模型[${t.name}] - [${t.key}]`,onOk:()=>l(this,null,function*(){yield B(t.id),yield r()})})}const[D,{openModal:N}]=H();function h(t,a){N(!0,{type:t,id:a.id})}return(t,a)=>{const p=G("a-button");return f(),y(i(x),null,{default:k(()=>[T(i(E),{onRegister:i(g)},{bodyCell:k(({column:o,record:e})=>[o&&e&&o.key==="resourceName"?(f(),y(p,{key:0,type:"link",onClick:R=>h("xml",e)},{default:k(()=>[$(v(e.resourceName),1)]),_:2},1032,["onClick"])):_("",!0),o&&e&&o.key==="diagramResourceName"?(f(),y(p,{key:1,type:"link",onClick:R=>h("image",e)},{default:k(()=>[$(v(e.diagramResourceName),1)]),_:2},1032,["onClick"])):_("",!0),o&&e&&o.key==="action"?(f(),y(i(I),{key:2,stopButtonPropagation:"",dropDownBtnDisplay:"",actions:[{label:e.suspensionState==1?"挂起流程":"激活流程",icon:e.suspensionState==1?i(w).LOCK:i(w).UNLOCK,onClick:u.bind(null,e)},{label:"转换模型",icon:"lets-icons:transger",onClick:S.bind(null,e)},{label:"删除",icon:i(w).DELETE,danger:!0,onClick:n.bind(null,e)}]},null,8,["actions"])):_("",!0)]),_:1},8,["onRegister"]),T(U,{onRegister:i(D)},null,8,["onRegister"])]),_:1})}}});export{vt as default};
