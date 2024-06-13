var _=(x,c,o)=>new Promise((w,u)=>{var h=i=>{try{l(o.next(i))}catch(m){u(m)}},v=i=>{try{l(o.throw(i))}catch(m){u(m)}},l=i=>i.done?w(i.value):Promise.resolve(i.value).then(h,v);l((o=o.apply(x,c)).next())});import{P as I}from"./index-C4nZBquz.js";import{u as P,_ as S}from"./useTable-CNbfTOCZ.js";import{_ as T}from"./index-DCvxWw7W.js";import{l as D,e as R,r as C}from"./api-o0nwNarG.js";import{b as $}from"./download-DOz9ltI1.js";import{f as B,c as V}from"./leave.data-EdLlua-d.js";import{c as q,I as f}from"./entry/index-BbJQUQ84-1718268303552.js";import{c as A}from"./index-m3nShAF-.js";import{d as N,a7 as G,n as L,Z as r,a8 as p,a9 as s,k as W,u as a,m as y,G as g,ab as z}from"./vue-Cw15aJ-2.js";import"./useContentViewHeight-BDi3O9lC.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./antd-DMGzOvrA.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./useForm-BsovIqMX.js";import"./FormItem.vue_vue_type_script_lang-C67_1cA1.js";import"./componentMap-qA-f8iV4.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./copyTextToClipboard-uEEWQikS.js";import"./index-BIkrAlj7.js";import"./style-CLEvKZSv.js";import"./helper-CXVLNTBN.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-BTdBE9Oa.js";import"./useLoading-D1in2ACg.js";import"./useRender-D1Q3fAQ3.js";import"./index-Dx0uas1b.js";import"./dict-vVDMuEaq.js";import"./dictEnum-DeC8h6ZR.js";const kt=N({name:"Leave",__name:"index",setup(x){const[c,{reload:o,multipleRemove:w,selected:u}]=P({rowSelection:{type:"checkbox",getCheckboxProps:e=>({disabled:e.status==="invalid"||e.status==="finish"||e.status==="waiting"||e.status==="termination"})},title:"请假列表",titleHelpMessage:["先到流程定义部署 [后端根目录/script/bpmn/模型.zip] 后再使用!","切换不同类型的流程(会签/普通)等, 到[流程定义-绑定业务]设置表名为[test_leave]"],api:D,showIndexColumn:!1,rowKey:"id",useSearchForm:!0,formConfig:{schemas:B,name:"leave",baseColProps:{xs:24,sm:24,md:24,lg:6}},columns:V,actionColumn:{width:200,title:"操作",key:"action",fixed:"right"}});function h(e){i({path:"/workflow/leaveEdit/index",query:{id:e.id,type:"update"}})}function v(){i({path:"/workflow/leaveEdit/index",query:{type:"add"}})}function l(e){return _(this,null,function*(){yield C([e.id]),yield o()})}const i=q();function m(e){const n=e.id;i({path:"/workflow/leaveEdit/index",query:{id:n,type:"preview"}})}function E(e){return _(this,null,function*(){yield A(e.id),yield o()})}return(e,n)=>{const k=G("a-button"),b=L("auth");return r(),p(a(I),{dense:""},{default:s(()=>[W(a(S),{onRegister:a(c)},{toolbar:s(()=>[y((r(),p(k,{class:"<sm:hidden",onClick:n[0]||(n[0]=d=>a($)(a(R),"请假信息"))},{default:s(()=>[g("导出")]),_:1})),[[b,"workflow:leave:export"]]),y((r(),p(k,{class:"<sm:hidden",type:"primary",danger:"",onClick:n[1]||(n[1]=d=>a(w)(a(C))),disabled:!a(u)},{default:s(()=>[g("删除")]),_:1},8,["disabled"])),[[b,"workflow:leave:remove"]]),y((r(),p(k,{type:"primary",onClick:v},{default:s(()=>[g("新增")]),_:1})),[[b,"workflow:leave:add"]])]),bodyCell:s(({column:d,record:t})=>[d&&t&&d.key==="action"?(r(),p(a(T),{key:0,stopButtonPropagation:"",actions:[{label:"修改",icon:a(f).EDIT,auth:"workflow:leave:edit",onClick:h.bind(null,t),ifShow:t.status!=="invalid"&&t.status!=="finish"&&t.status!=="waiting"&&t.status!=="termination"},{label:"记录",icon:a(f).PREVIEW,auth:"workflow:leave:list",onClick:m.bind(null,t),ifShow:t.status!=="draft"&&t.status!=="cancel"},{label:"撤销",icon:a(f).EDIT,danger:!0,auth:"workflow:leave:edit",ifShow:t.status==="waiting",popConfirm:{placement:"left",title:"是否撤销当前申请?",confirm:E.bind(null,t)}},{label:"删除",icon:a(f).DELETE,danger:!0,auth:"workflow:leave:remove",ifShow:t.status!=="invalid"&&t.status!=="finish"&&t.status!=="waiting"&&t.status!=="termination",popConfirm:{placement:"left",title:`是否删除请假[${t.id}]?`,confirm:l.bind(null,t)}}]},null,8,["actions"])):z("",!0)]),_:1},8,["onRegister"])]),_:1})}}});export{kt as default};
