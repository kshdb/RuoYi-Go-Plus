var l=(y,t,a)=>new Promise((u,r)=>{var p=e=>{try{n(a.next(e))}catch(i){r(i)}},d=e=>{try{n(a.throw(e))}catch(i){r(i)}},n=e=>e.done?u(e.value):Promise.resolve(e.value).then(p,d);n((a=a.apply(y,t)).next())});import{P as T}from"./index-C4nZBquz.js";import{u as D,_ as S}from"./useTable-CNbfTOCZ.js";import{_ as $}from"./index-DCvxWw7W.js";import{r as P,a as B,b as V}from"./index-DRTL1nQC.js";import{k as E,I as K,h as L}from"./entry/index-BbJQUQ84-1718268303552.js";import{f as M,c as F,_ as G}from"./AssignRolesDrawer.vue_vue_type_script_setup_true_lang-DyNNgDTA.js";import{d as O,f as W,ao as Z,a7 as j,n as q,Z as m,a8 as c,a9 as s,k as h,G as C,m as k,u as o,ab as z}from"./vue-Cw15aJ-2.js";import{u as H}from"./index-BLDmWVyR.js";import"./useContentViewHeight-BDi3O9lC.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./antd-DMGzOvrA.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./useForm-BsovIqMX.js";import"./FormItem.vue_vue_type_script_lang-C67_1cA1.js";import"./componentMap-qA-f8iV4.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./copyTextToClipboard-uEEWQikS.js";import"./index-BIkrAlj7.js";import"./style-CLEvKZSv.js";import"./helper-CXVLNTBN.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-BTdBE9Oa.js";import"./download-DOz9ltI1.js";import"./useLoading-D1in2ACg.js";import"./useRender-D1Q3fAQ3.js";import"./index-Dx0uas1b.js";import"./dict-vVDMuEaq.js";import"./dictEnum-DeC8h6ZR.js";import"./useSize-CUNtmCvH.js";const xe=O({name:"AssignRoles",__name:"index",setup(y){const t=W("0"),a=Z();t.value=a.params.roleId;const[u,{reload:r,getSelectRowKeys:p,selected:d}]=D({rowSelection:{type:"checkbox"},title:"已分配的用户列表",showIndexColumn:!1,clickToRowSelect:!0,api:P,rowKey:"userId",useSearchForm:!0,formConfig:{schemas:M,baseColProps:{xs:24,sm:24,md:24,lg:6}},searchInfo:{roleId:t.value},columns:F,actionColumn:{title:"操作",key:"action",fixed:"right"}}),[n,{openDrawer:e}]=H();function i(){e(!0,{})}const{createConfirm:I}=L();function R(){I({iconType:"warning",title:"取消授权",content:"是否取消选中的授权?",onOk(){return l(this,null,function*(){const b=p();yield B(t.value,b),yield r()})}})}function v(w){return l(this,null,function*(){yield V({userId:w.userId,roleId:t.value}),yield r()})}const{closeCurrent:x}=E();function A(){return l(this,null,function*(){yield x()})}return(w,b)=>{const f=j("a-button"),g=q("auth");return m(),c(o(T),{dense:""},{default:s(()=>[h(o(S),{onRegister:o(u)},{toolbar:s(()=>[h(f,{onClick:A},{default:s(()=>[C("关闭页面")]),_:1}),k((m(),c(f,{disabled:!o(d),type:"error",onClick:R},{default:s(()=>[C("取消授权")]),_:1},8,["disabled"])),[[g,"system:role:edit"]]),k((m(),c(f,{type:"primary",onClick:i},{default:s(()=>[C("添加")]),_:1})),[[g,"system:role:edit"]])]),bodyCell:s(({column:N,record:_})=>[N.key==="action"?(m(),c(o($),{key:0,stopButtonPropagation:"",actions:[{label:"取消授权",icon:o(K).CANCEL,auth:"system:role:edit",popConfirm:{placement:"left",title:`是否取消授权用户[${_.userName} - ${_.nickName}]?`,confirm:v.bind(null,_)}}]},null,8,["actions"])):z("",!0)]),_:1},8,["onRegister"]),h(G,{onRegister:o(n),onReload:o(r)},null,8,["onRegister","onReload"])]),_:1})}}});export{xe as default};