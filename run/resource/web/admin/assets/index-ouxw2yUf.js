var k=(h,u,o)=>new Promise((d,s)=>{var f=t=>{try{a(o.next(t))}catch(n){s(n)}},m=t=>{try{a(o.throw(t))}catch(n){s(n)}},a=t=>t.done?d(t.value):Promise.resolve(t.value).then(f,m);a((o=o.apply(h,u)).next())});import{P as T}from"./index-C4nZBquz.js";import{u as $,_ as D}from"./useTable-CNbfTOCZ.js";import{_ as N}from"./index-DCvxWw7W.js";import{n as V,f as B,c as S,a as w,_ as W}from"./NoticeModal.vue_vue_type_script_setup_true_lang-tDrES-gn.js";import{u as R}from"./index-BIkrAlj7.js";import{_ as L}from"./NoticePreviewModal.vue_vue_type_script_setup_true_lang-9kFBPuNn.js";import{I as _}from"./entry/index-BbJQUQ84-1718268303552.js";import{d as A,a7 as F,n as G,Z as p,a8 as c,a9 as r,k as y,u as e,m as x,G as E,ab as K}from"./vue-Cw15aJ-2.js";import"./useContentViewHeight-BDi3O9lC.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./antd-DMGzOvrA.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./useForm-BsovIqMX.js";import"./FormItem.vue_vue_type_script_lang-C67_1cA1.js";import"./componentMap-qA-f8iV4.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./copyTextToClipboard-uEEWQikS.js";import"./style-CLEvKZSv.js";import"./helper-CXVLNTBN.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-BTdBE9Oa.js";import"./download-DOz9ltI1.js";import"./useLoading-D1in2ACg.js";import"./useRender-D1Q3fAQ3.js";import"./index-Dx0uas1b.js";import"./dict-vVDMuEaq.js";import"./dictEnum-DeC8h6ZR.js";const ge=A({name:"Notice",__name:"index",setup(h){const[u,{reload:o,multipleRemove:d,selected:s}]=$({rowSelection:{type:"checkbox"},title:"通知公告列表",showIndexColumn:!0,api:V,rowKey:"noticeId",useSearchForm:!0,formConfig:{schemas:B,labelWidth:80,name:"notice",baseColProps:{xs:24,sm:24,md:24,lg:6}},columns:S,actionColumn:{width:230,title:"操作",key:"action",fixed:"right"}}),[f,{openModal:m}]=R(),[a,{openModal:t}]=R();function n(i){m(!0,{record:i,update:!0})}function P(i){t(!0,i)}function I(){m(!0,{update:!1})}function M(i){return k(this,null,function*(){yield w([i.noticeId]),yield o()})}return(i,g)=>{const b=F("a-button"),C=G("auth");return p(),c(e(T),{dense:""},{default:r(()=>[y(e(D),{onRegister:e(u)},{toolbar:r(()=>[x((p(),c(b,{type:"primary",danger:"",onClick:g[0]||(g[0]=v=>e(d)(e(w))),disabled:!e(s)},{default:r(()=>[E("删除")]),_:1},8,["disabled"])),[[C,"system:notice:remove"]]),x((p(),c(b,{type:"primary",onClick:I},{default:r(()=>[E("新增")]),_:1})),[[C,"system:notice:add"]])]),bodyCell:r(({column:v,record:l})=>[v.key==="action"?(p(),c(e(N),{key:0,stopButtonPropagation:"",actions:[{label:"预览",icon:e(_).PREVIEW,type:"primary",ghost:!0,auth:"system:notice:list",onClick:P.bind(null,l)},{label:"修改",icon:e(_).EDIT,type:"primary",ghost:!0,auth:"system:notice:edit",onClick:n.bind(null,l)},{label:"删除",icon:e(_).DELETE,type:"primary",danger:!0,ghost:!0,auth:"system:notice:remove",popConfirm:{placement:"left",title:`是否删除公告[${l.noticeTitle}]?`,confirm:M.bind(null,l)}}]},null,8,["actions"])):K("",!0)]),_:1},8,["onRegister"]),y(W,{onRegister:e(f),onReload:e(o)},null,8,["onRegister","onReload"]),y(L,{onRegister:e(a)},null,8,["onRegister"])]),_:1})}}});export{ge as default};
