import{P as u}from"./index-DrfqwNLV.js";import{u as d,_ as f}from"./useTable-BlleqRm-.js";import{_}from"./index-Rv_3g2e8.js";import{u as g}from"./useRender-C6p2srTi.js";import{D as y}from"./dictEnum-DeC8h6ZR.js";import{j as b}from"./index-D8V_F1G-.js";import{c as C,I}from"./entry/index-CMepwc5X-1716790511191.js";import{d as x,_ as a,a8 as s,a9 as m,k as h,u as e,ac as k}from"./vue-Bw3NQgLF.js";import"./useContentViewHeight-xBSq9xFC.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./antd-BRjMhd0C.js";import"./onMountedOrActivated-B2y-oH2N.js";import"./useForm-uR1ZVBCA.js";import"./FormItem.vue_vue_type_script_lang-DAyz6oLf.js";import"./componentMap-DPcekmXH.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./index-CMSTH4sS.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-CwI952Jx.js";import"./download-CYeVxFqw.js";import"./useLoading-iCq4GOHr.js";import"./index-BhefpKLc.js";import"./dict-C9gNHjAh.js";const{renderTag:w,renderDict:S}=g(),D=[{dataIndex:"processDefinitionName",title:"流程名称"},{dataIndex:"processDefinitionKey",title:"流程KEY"},{dataIndex:"name",title:"任务名称"},{dataIndex:"assigneeName",title:"办理人",customRender({value:t}){return w(t)}},{dataIndex:"businessStatus",title:"流程状态",customRender({value:t}){return S(t,y.WF_BUSINESS_STATUS)}}],E=[{field:"name",label:"任务名称",component:"Input"},{field:"processDefinitionName",label:"流程名称",component:"Input"},{field:"processDefinitionKey",label:"流程KEY",component:"Input"}],ee=x({__name:"taskCopyList",setup(t){const[p]=d({rowSelection:{type:"checkbox"},title:"我的抄送列表",showIndexColumn:!1,api:b,rowKey:"id",useSearchForm:!0,formConfig:{schemas:E,name:"taskCopyList",baseColProps:{xs:24,sm:24,md:24,lg:6},labelWidth:80},columns:D,actionColumn:{width:150,title:"操作",key:"action",fixed:"right"}}),c=C();function l(o){const i=o.wfNodeConfigVo.wfFormManageVo.router;c({path:i,query:{id:o.businessKey,type:"preview"}})}return(o,i)=>(a(),s(e(u),{dense:""},{default:m(()=>[h(e(f),{onRegister:e(p)},{bodyCell:m(({column:n,record:r})=>[n&&r&&n.key==="action"?(a(),s(e(_),{key:0,stopButtonPropagation:"",actions:[{label:"审批记录",icon:e(I).PREVIEW,onClick:l.bind(null,r)}]},null,8,["actions"])):k("",!0)]),_:1},8,["onRegister"])]),_:1}))}});export{ee as default};
