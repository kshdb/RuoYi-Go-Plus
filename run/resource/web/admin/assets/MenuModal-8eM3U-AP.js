var l=(h,p,r)=>new Promise((s,u)=>{var c=e=>{try{o(r.next(e))}catch(i){u(i)}},f=e=>{try{o(r.throw(e))}catch(i){u(i)}},o=e=>e.done?s(e.value):Promise.resolve(e.value).then(c,f);o((r=r.apply(h,p)).next())});import{a as N,B as T}from"./index-CMSTH4sS.js";import{u as v,_ as L}from"./useForm-uR1ZVBCA.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import{bp as B,bq as F,aT as R,b as S}from"./entry/index-CMepwc5X-1716790511191.js";import"./componentMap-DPcekmXH.js";import{a as k,m as x,b as A,c as C}from"./index-Bz-s2yf4.js";import{m as P}from"./menu.data-B4OZZc82.js";import{d as D,f as E,c as U,_ as V,a8 as $,a9 as q,k as G,u as n,ad as H}from"./vue-Bw3NQgLF.js";import"./antd-BRjMhd0C.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./FormItem.vue_vue_type_script_lang-DAyz6oLf.js";import"./helper-CfJJkrf5.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./index-Rv_3g2e8.js";import"./useSortable-CwI952Jx.js";import"./download-CYeVxFqw.js";import"./useLoading-iCq4GOHr.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./onMountedOrActivated-B2y-oH2N.js";import"./useRender-C6p2srTi.js";import"./index-BhefpKLc.js";import"./dict-C9gNHjAh.js";import"./dictEnum-DeC8h6ZR.js";const fe=D({name:"MenuModal",__name:"MenuModal",emits:["reload","register"],setup(h,{emit:p}){const r=p,s=E(!1),u=U(()=>s.value?"修改菜单":"添加菜单"),[c,{validate:f,setFieldsValue:o,resetForm:e,updateSchema:i}]=v({schemas:P,showActionButtonGroup:!1,labelWidth:100,name:"menu_modal"}),[w,{modalLoading:d,closeModal:I}]=N(a=>l(this,null,function*(){d(!0);const{record:t,update:m}=a;if(s.value=m,t&&t.parentId&&(yield o({parentId:t.parentId})),m&&t){const y=yield k(t.menuId);yield o(y)}yield M(),d(!1)}));function M(){return l(this,null,function*(){const a=yield x(),m=[{menuName:"根目录",menuId:0,children:B(a,{id:"menuId",pid:"parentId"})}];F(m,"menuName"," / "),yield i({field:"parentId",componentProps:{treeData:m,fieldNames:{label:"menuName",value:"menuId"},treeDefaultExpandAll:!1,treeNodeLabelProp:"fullName",treeLine:{showLeafIcon:!1},treeDefaultExpandedKeys:[0],listHeight:300}})})}const{refreshMenu:_}=R(),g=S("refreshMenu",!0);function b(){return l(this,null,function*(){try{d(!0);const a=yield f();n(s)?yield A(a):yield C(a),yield e(),r("reload",()=>l(this,null,function*(){I(),g.value&&(yield _())}))}catch(a){}finally{d(!1)}})}return(a,t)=>(V(),$(n(T),H(a.$attrs,{title:u.value,width:700,onRegister:n(w),onOk:b,onCancel:n(e)}),{default:q(()=>[G(n(L),{onRegister:n(c)},null,8,["onRegister"])]),_:1},16,["title","onRegister","onCancel"]))}});export{fe as default};
