var b=(x,v,l)=>new Promise((_,r)=>{var e=t=>{try{a(l.next(t))}catch(o){r(o)}},g=t=>{try{a(l.throw(t))}catch(o){r(o)}},a=t=>t.done?_(t.value):Promise.resolve(t.value).then(e,g);a((l=l.apply(x,v)).next())});import{P as J}from"./index-DrfqwNLV.js";import{_ as M}from"./BaseSetting.vue_vue_type_script_setup_true_lang-DRZiqJVV.js";import h from"./GenConfig-zFC4wsFH.js";import{_ as j}from"./GenResult.vue_vue_type_script_setup_true_lang-CuexKjap.js";import{d as P,Z as R,f as I,o as S,r as V,_ as p,a8 as f,a9 as w,a0 as E,k as d,u as c,ac as k}from"./vue-Bw3NQgLF.js";import{g as D,e as T}from"./index-CT23NofX.js";import{i as U,j as $}from"./entry/index-CMepwc5X-1716790511191.js";import{X as C,Y as L}from"./antd-BRjMhd0C.js";import"./useContentViewHeight-xBSq9xFC.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./onMountedOrActivated-B2y-oH2N.js";import"./useForm-uR1ZVBCA.js";import"./FormItem.vue_vue_type_script_lang-DAyz6oLf.js";import"./componentMap-DPcekmXH.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./index-Rv_3g2e8.js";import"./index-CMSTH4sS.js";import"./useSortable-CwI952Jx.js";import"./download-CYeVxFqw.js";import"./useLoading-iCq4GOHr.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./index-Bz-s2yf4.js";import"./genConfig.data-CHn_gqW7.js";import"./dictType-Dhwzk5lb.js";import"./index-C7Pg2pwq.js";const O={class:"flex flex-row items-center justify-center"},Q={class:"mt-5"},W=P({name:"EditGenerate",__name:"EditGenerate",setup(x){const{currentRoute:v}=R(),_=v.value.params.tableId,r=I(0),e=I(),{setTitle:g}=U();S(()=>b(this,null,function*(){const o=yield D(_);e.value=o.info,g("修改生成配置: "+o.info.tableName)}));const a=V({success:!0,errMsg:""});function t(o,n){return b(this,null,function*(){var m;if(r.value=o,n&&e.value&&Object.assign(e.value,n),c(r)===2)try{const i=c(e);if(i&&i.tplCategory==="tree"){const{treeCode:u,treeName:s,treeParentCode:y}=i;i.params={treeCode:u,treeName:s,treeParentCode:y}}if(i){const u=s=>s?"1":"0";i.columns.forEach(s=>{const{insert:y,edit:N,list:q,query:B,required:G}=s;s.isInsert=u(y),s.isEdit=u(N),s.isList=u(q),s.isQuery=u(B),s.isRequired=u(G)})}yield T(i),a.success=!0}catch(i){a.success=!1,a.errMsg=(m=i.message)!=null?m:"未知错误"}})}return(o,n)=>(p(),f(c(J),{contentBackground:"",dense:"","content-class":"p-5"},{default:w(()=>[E("div",O,[d(c(L),{class:"w-fit",current:r.value},{default:w(()=>[d(c(C),{title:"生成信息"}),d(c(C),{title:"字段信息",disabled:""}),d(c(C),{title:"完成",disabled:""})]),_:1},8,["current"])]),E("div",Q,[e.value&&r.value===0?(p(),f(M,{key:0,value:e.value,"onUpdate:value":n[0]||(n[0]=m=>e.value=m),onJumpto:t},null,8,["value"])):k("",!0),e.value&&r.value===1?(p(),f(h,{key:1,value:e.value,"onUpdate:value":n[1]||(n[1]=m=>e.value=m),onJumpto:t},null,8,["value"])):k("",!0),e.value&&r.value===2?(p(),f(j,{key:2,success:a.success,"err-msg":a.errMsg,onJumpto:t},null,8,["success","err-msg"])):k("",!0)])]),_:1}))}}),ke=$(W,[["__scopeId","data-v-ebeeca71"]]);export{ke as default};
