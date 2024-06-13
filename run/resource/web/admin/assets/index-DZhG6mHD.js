var u=(x,b,i)=>new Promise((s,f)=>{var h=n=>{try{m(i.next(n))}catch(d){f(d)}},g=n=>{try{m(i.throw(n))}catch(d){f(d)}},m=n=>n.done?s(n.value):Promise.resolve(n.value).then(h,g);m((i=i.apply(x,b)).next())});import{P as I}from"./index-C4nZBquz.js";import{i as M,bJ as N,bG as V,bK as L,bL as D,bM as B,I as k,bN as G,h as K}from"./entry/index-BbJQUQ84-1718268303552.js";import{u as U,_ as W}from"./useTable-CNbfTOCZ.js";import{_ as A}from"./index-DCvxWw7W.js";import{T as F}from"./TableSwitch-Dq-a_0E1.js";import{f as J,c as Z}from"./tenant.data-DPEsi-Rf.js";import{b as j}from"./download-DOz9ltI1.js";import q from"./TenantDrawer-BPik86Ca.js";import{u as z}from"./index-BLDmWVyR.js";import{p as S}from"./index-BwotnLdp.js";import{d as H,a7 as O,n as Q,Z as r,a8 as l,a9 as p,k as v,u as e,m as C,G as T,ab as P}from"./vue-Cw15aJ-2.js";import"./useContentViewHeight-BDi3O9lC.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./antd-DMGzOvrA.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./useForm-BsovIqMX.js";import"./FormItem.vue_vue_type_script_lang-C67_1cA1.js";import"./componentMap-qA-f8iV4.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./copyTextToClipboard-uEEWQikS.js";import"./index-BIkrAlj7.js";import"./style-CLEvKZSv.js";import"./helper-CXVLNTBN.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-BTdBE9Oa.js";import"./rules-Boel_RXz.js";import"./useLoading-D1in2ACg.js";import"./useSize-CUNtmCvH.js";const Re=H({name:"Tenant",__name:"index",setup(x){const{hasPermission:b}=M(),[i,{reload:s,selected:f,multipleRemove:h}]=U({rowSelection:{type:"checkbox",getCheckboxProps:a=>({disabled:a.id===1})},title:"租户列表",rowKey:"id",showIndexColumn:!1,useSearchForm:!0,formConfig:{schemas:J,baseColProps:{xs:24,sm:24,md:24,lg:6},name:"tenant",labelWidth:100,fieldMapToTime:[["createTime",["params[beginTime]","params[endTime]"],["YYYY-MM-DD 00:00:00","YYYY-MM-DD 23:59:59"]]]},columns:Z,api:N,actionColumn:{width:260,fixed:"right",title:"操作",key:"action"}}),[g,{openDrawer:m}]=z(),{createMessage:n}=K();function d(){return u(this,null,function*(){const a=yield S();if(!a.length){n.warning("请先创建租户套餐后重试");return}m(!0,{update:!1,tenantPackageList:a})})}function R(a){return u(this,null,function*(){const o=yield S();m(!0,{update:!0,record:a,tenantPackageList:o})})}function Y(a){return u(this,null,function*(){const{tenantId:o,packageId:c="0"}=a;yield G(o,c),yield s()})}const{initTenant:$}=V();function E(a){return u(this,null,function*(){yield D([a.id]),yield s(),yield $()})}return(a,o)=>{const c=O("a-button"),w=Q("auth");return r(),l(e(I),{dense:""},{default:p(()=>[v(e(W),{onRegister:e(i)},{toolbar:p(()=>[C((r(),l(c,{class:"<sm:hidden",onClick:o[0]||(o[0]=y=>e(j)(e(L),"租户信息"))},{default:p(()=>[T("导出")]),_:1})),[[w,"system:tenant:export"]]),C((r(),l(c,{class:"<sm:hidden",type:"primary",danger:"",disabled:!e(f),onClick:o[1]||(o[1]=y=>e(h)(e(D)))},{default:p(()=>[T("删除")]),_:1},8,["disabled"])),[[w,"system:tenant:remove"]]),C((r(),l(c,{type:"primary",onClick:d},{default:p(()=>[T("新增")]),_:1})),[[w,"system:tenant:add"]])]),bodyCell:p(({column:y,record:t})=>[y.key==="status"?(r(),l(e(F),{key:0,modelValue:t.status,"onUpdate:modelValue":_=>t.status=_,disabled:t.id===1||!e(b)("system:tenant:edit"),api:()=>e(B)(t),"custom-content":_=>`确认${_}租户[${t.companyName}]吗?`,reload:e(s)},null,8,["modelValue","onUpdate:modelValue","disabled","api","custom-content","reload"])):P("",!0),y.key==="action"?(r(),l(e(A),{key:1,actions:[{label:"修改",icon:e(k).EDIT,type:"primary",ghost:!0,auth:"system:tenant:edit ",onClick:R.bind(null,t),ifShow:t.id!==1},{label:"同步",icon:e(k).SYNC,type:"primary",color:"success",ghost:!0,auth:"system:tenant:edit ",popConfirm:{title:`是否同步[${t.companyName}]的套餐?`,placement:"left",confirm:Y.bind(null,t)},ifShow:t.id!==1},{label:"删除",icon:e(k).DELETE,type:"primary",danger:!0,ghost:!0,auth:"system:tenant:delete",ifShow:t.id!==1,popConfirm:{title:`是否删除租户[${t.companyName} - ID: ${t.tenantId}]?`,placement:"left",confirm:E.bind(null,t)}}]},null,8,["actions"])):P("",!0)]),_:1},8,["onRegister"]),v(q,{onRegister:e(g),onReload:e(s)},null,8,["onRegister","onReload"])]),_:1})}}});export{Re as default};
