var p=(R,d,a)=>new Promise((y,_)=>{var C=m=>{try{u(a.next(m))}catch(f){_(f)}},c=m=>{try{u(a.throw(m))}catch(f){_(f)}},u=m=>m.done?y(m.value):Promise.resolve(m.value).then(C,c);u((a=a.apply(R,d)).next())});import{P as H}from"./index-DrfqwNLV.js";import{_ as J}from"./index-CwwL6bPg.js";import{b as Q,p as M,u as X,c as Y}from"./index-CigIE-O6.js";import{a as Z}from"./index-HlBkaR6C.js";import{u as ee,_ as te}from"./useTable-BlleqRm-.js";import{_ as b}from"./index-Rv_3g2e8.js";import{schemas as oe,columns as ae}from"./definition.data-DAtQVa5l.js";import{bp as ne,bj as ie,bq as se,c as le,I as v,h as re,j as ce}from"./entry/index-CMepwc5X-1716790511191.js";import{u as I}from"./index-CMSTH4sS.js";import{_ as me}from"./DeployModal.vue_vue_type_script_setup_true_lang-BuioaVay.js";import{_ as pe}from"./PreviewModal.vue_vue_type_script_setup_true_lang-ayK0IOb0.js";import{_ as de}from"./FormConfigModal.vue_vue_type_script_setup_true_lang-B7U_41GG.js";import{at as ue,au as N,y as fe}from"./antd-BRjMhd0C.js";import{d as ge,f as S,r as ye,o as _e,aa as he,_ as g,a8 as h,a9 as r,k as s,u as t,ad as ke,ac as k,al as we,am as Ce,G as w,a1 as P,$ as be,F as ve}from"./vue-Bw3NQgLF.js";import"./useContentViewHeight-xBSq9xFC.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./onMountedOrActivated-B2y-oH2N.js";import"./useForm-uR1ZVBCA.js";import"./FormItem.vue_vue_type_script_lang-DAyz6oLf.js";import"./componentMap-DPcekmXH.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-CwI952Jx.js";import"./download-CYeVxFqw.js";import"./useLoading-iCq4GOHr.js";import"./useRender-C6p2srTi.js";import"./index-BhefpKLc.js";import"./dict-C9gNHjAh.js";import"./index-Cvdu3VMw.js";import"./index-u_3lW7KD.js";import"./index-CU-vYa55.js";const Ie=ge({name:"ProcessDefinition",__name:"index",setup(R){const d=S(""),a=ye({tree:[],selectId:[]}),y=S(!0);function _(){return p(this,null,function*(){yield c()})}_e(()=>p(this,null,function*(){const e=yield Z();let n=ne(e,{id:"id",pid:"parentId"});n=[{categoryName:"根目录",id:0,children:n}],ie(n,l=>{l.icon="flat-color-icons:folder"}),se(n,"categoryName"," / "),a.tree=n,y.value=!1}));const[C,{reload:c,selected:u,getSelectRows:m}]=ee({rowSelection:{type:"checkbox"},title:"流程定义列表",showIndexColumn:!1,api:Q,rowKey:"id",useSearchForm:!0,formConfig:{schemas:oe,baseColProps:{xs:24,sm:24,md:24,lg:6},labelWidth:80,resetFunc:()=>p(this,null,function*(){a.selectId=[],d.value=""})},columns:ae,beforeFetch(e){return a.selectId.length===1&&(e.categoryCode=a.selectId[0]),e},actionColumn:{width:220,title:"操作",key:"action",fixed:"right"}}),[f,{openModal:T}]=I(),[D,{openModal:F}]=I(),[B,{openModal:L}]=I();function x(e,n){T(!0,{type:e,id:n.id})}function E(e){L(!0,e)}const K=le();function V(e){K(`/workflow/definition/history/${e.key}`)}function O(e){return p(this,null,function*(){const{deploymentId:n,id:l}=e;yield M(n,l),yield c()})}const{createMessage:$,createConfirm:j}=re();function U(){if(console.log(a.selectId),a.selectId.length!==1){$.warning("请在左侧选择要上传的分类");return}if(a.selectId.length===1&&!a.selectId[0]){$.warning("不可上传到根目录, 请选择子目录上传");return}const e=a.selectId[0];F(!0,e)}function A(e){return p(this,null,function*(){yield X(e.id),yield c()})}function G(e){const n=e.suspensionState=="1"?"暂停":"启动",l=e.suspensionState=="1"?"不允许":"允许",i=e.suspensionState=="1"?"挂起":"激活";return`${n}后，此流程下的所有任务都${l}往后流转, 您确定${i}【${e.name}】吗?`}function W(e){return p(this,null,function*(){yield Y(e.id),yield c()})}function q(){j({title:"提示",iconType:"warning",content:"确定要删除选中的流程定义吗?",okButtonProps:{type:"primary",danger:!0},onOk:()=>p(this,null,function*(){const e=m(),n=e.map(i=>i.deploymentId).join(","),l=e.map(i=>i.id).join(",");yield M(n,l),yield c()})})}return(e,n)=>{const l=he("a-button");return g(),h(t(H),{dense:""},{default:r(()=>[s(t(ue),null,{default:r(()=>[s(t(N),ke({xs:24,sm:24,md:24,lg:4},{class:"h-[calc(100vh-80px)]"}),{default:r(()=>[s(t(fe),{active:!0,paragraph:{rows:8},loading:y.value},{default:r(()=>[a.tree.length?(g(),h(t(J),{key:0,fieldNames:{title:"categoryName",key:"categoryCode"},"tree-data":a.tree,showLine:{showLeafIcon:!1},search:!0,searchValue:d.value,"onUpdate:searchValue":n[0]||(n[0]=i=>d.value=i),defaultExpandAll:"",onSelect:_,selectedKeys:a.selectId,"onUpdate:selectedKeys":n[1]||(n[1]=i=>a.selectId=i)},null,8,["tree-data","searchValue","selectedKeys"])):k("",!0)]),_:1},8,["loading"])]),_:1},16),s(t(N),we(Ce({xs:24,sm:24,md:24,lg:20})),{default:r(()=>[s(t(te),{onRegister:t(C)},{toolbar:r(()=>[s(l,{type:"primary",danger:"",disabled:!t(u),onClick:q},{default:r(()=>[w("删除")]),_:1},8,["disabled"]),s(l,{type:"primary",onClick:U},{default:r(()=>[w("部署")]),_:1})]),bodyCell:r(({column:i,record:o})=>[i&&o&&i.key==="resourceName"?(g(),h(l,{key:0,type:"link",onClick:z=>x("xml",o)},{default:r(()=>[w(P(o.resourceName),1)]),_:2},1032,["onClick"])):k("",!0),i&&o&&i.key==="diagramResourceName"?(g(),h(l,{key:1,type:"link",onClick:z=>x("image",o)},{default:r(()=>[w(P(o.diagramResourceName),1)]),_:2},1032,["onClick"])):k("",!0),i&&o&&i.key==="action"?(g(),be(ve,{key:2},[s(t(b),{stopButtonPropagation:"",actions:[{label:o.suspensionState==1?"挂起流程":"激活流程",icon:o.suspensionState==1?t(v).LOCK:t(v).UNLOCK,popConfirm:{placement:"left",title:G(o),confirm:A.bind(null,o)}},{label:"删除流程",icon:t(v).DELETE,danger:!0,popConfirm:{placement:"left",title:`是否确认删除[${o.name}] - [${o.key}]`,confirm:O.bind(null,o)}}]},null,8,["actions"]),s(t(b),{stopButtonPropagation:"",actions:[{label:"转换模型",icon:"lets-icons:transger",popConfirm:{placement:"left",title:`是否确认转换为模型[${o.name}] - [${o.key}]`,confirm:W.bind(null,o)}},{label:"历史版本",icon:"ic:sharp-history",onClick:V.bind(null,o)}]},null,8,["actions"]),s(t(b),{stopButtonPropagation:"",actions:[{label:"绑定业务",icon:"lets-icons:transger",onClick:E.bind(null,o)}]},null,8,["actions"])],64)):k("",!0)]),_:1},8,["onRegister"]),s(pe,{onRegister:t(f)},null,8,["onRegister"]),s(me,{onRegister:t(D),onReload:t(c)},null,8,["onRegister","onReload"]),s(de,{onRegister:t(B),onReload:t(c)},null,8,["onRegister","onReload"])]),_:1},16)]),_:1})]),_:1})}}}),st=ce(Ie,[["__scopeId","data-v-5a49a81c"]]);export{st as default};