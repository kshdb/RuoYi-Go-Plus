var y=(x,f,o)=>new Promise((h,d)=>{var m=a=>{try{l(o.next(a))}catch(p){d(p)}},b=a=>{try{l(o.throw(a))}catch(p){d(p)}},l=a=>a.done?h(a.value):Promise.resolve(a.value).then(m,b);l((o=o.apply(x,f)).next())});import{P}from"./index-C4nZBquz.js";import{u as R,_ as S}from"./useTable-CNbfTOCZ.js";import{_ as T}from"./index-DCvxWw7W.js";import{c as D,d as I,e as k}from"./index-BG1aTYCU.js";import{b as $}from"./download-DOz9ltI1.js";import{formSchemas as V,columns as q}from"./purchase.data-DrRrrmUP.js";import{c as A,I as c}from"./entry/index-BbJQUQ84-1718268303552.js";import{c as B}from"./index-m3nShAF-.js";import{d as N,a7 as G,n as L,Z as r,a8 as u,a9 as s,k as W,u as i,m as g,G as C,ab as F}from"./vue-Cw15aJ-2.js";import"./useContentViewHeight-BDi3O9lC.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./antd-DMGzOvrA.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./useForm-BsovIqMX.js";import"./FormItem.vue_vue_type_script_lang-C67_1cA1.js";import"./componentMap-qA-f8iV4.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./copyTextToClipboard-uEEWQikS.js";import"./index-BIkrAlj7.js";import"./style-CLEvKZSv.js";import"./helper-CXVLNTBN.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-BTdBE9Oa.js";import"./useLoading-D1in2ACg.js";import"./useRender-D1Q3fAQ3.js";import"./index-Dx0uas1b.js";import"./dict-vVDMuEaq.js";import"./dictEnum-DeC8h6ZR.js";const wt=N({name:"Purchase",__name:"index",setup(x){const[f,{reload:o,multipleRemove:h,selected:d}]=R({rowSelection:{type:"checkbox",getCheckboxProps:e=>({disabled:e.status==="invalid"||e.status==="finish"||e.status==="waiting"||e.status==="termination"})},title:"采购申请列表",api:D,showIndexColumn:!1,rowKey:"id",useSearchForm:!0,formConfig:{schemas:V,baseColProps:{xs:24,sm:24,md:24,lg:6}},columns:q,actionColumn:{width:200,title:"操作",key:"action",fixed:"right"}}),m=A();function b(e){m({path:"/demo/purchaseEdit/index",query:{id:e.id,type:"update"}})}function l(){m({path:"/demo/purchaseEdit/index",query:{type:"add"}})}function a(e){return y(this,null,function*(){yield k([e.id]),yield o()})}function p(e){const n=e.id;m({path:"/demo/purchaseEdit/index",query:{id:n,type:"preview"}})}function E(e){return y(this,null,function*(){yield B(e.id),yield o()})}return(e,n)=>{const v=G("a-button"),w=L("auth");return r(),u(i(P),{title:"子表单流程测试",content:"非官方功能",dense:""},{default:s(()=>[W(i(S),{onRegister:i(f)},{toolbar:s(()=>[g((r(),u(v,{onClick:n[0]||(n[0]=_=>i($)(i(I),"采购申请数据"))},{default:s(()=>[C("导出")]),_:1})),[[w,"demo:purchase:export"]]),g((r(),u(v,{type:"primary",danger:"",onClick:n[1]||(n[1]=_=>i(h)(i(k))),disabled:!i(d)},{default:s(()=>[C("删除")]),_:1},8,["disabled"])),[[w,"demo:purchase:remove"]]),g((r(),u(v,{type:"primary",onClick:l},{default:s(()=>[C("新增")]),_:1})),[[w,"demo:purchase:add"]])]),bodyCell:s(({column:_,record:t})=>[_.key==="action"?(r(),u(i(T),{key:0,stopButtonPropagation:"",actions:[{label:"修改",icon:i(c).EDIT,auth:"demo:leave:edit",onClick:b.bind(null,t),ifShow:t.status!=="invalid"&&t.status!=="finish"&&t.status!=="waiting"&&t.status!=="termination"},{label:"记录",icon:i(c).PREVIEW,auth:"demo:leave:list",onClick:p.bind(null,t),ifShow:t.status!=="draft"&&t.status!=="cancel"},{label:"撤销",icon:i(c).EDIT,danger:!0,auth:"demo:leave:edit",ifShow:t.status==="waiting",popConfirm:{placement:"left",title:"是否撤销当前申请?",confirm:E.bind(null,t)}},{label:"删除",icon:i(c).DELETE,danger:!0,auth:"demo:leave:remove",ifShow:t.status!=="invalid"&&t.status!=="finish"&&t.status!=="waiting"&&t.status!=="termination",popConfirm:{placement:"left",title:`是否删除请假[${t.id}]?`,confirm:a.bind(null,t)}}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"])]),_:1})}}});export{wt as default};