var T=(C,m,s)=>new Promise((u,d)=>{var k=a=>{try{l(s.next(a))}catch(p){d(p)}},f=a=>{try{l(s.throw(a))}catch(p){d(p)}},l=a=>a.done?u(a.value):Promise.resolve(a.value).then(k,f);l((s=s.apply(C,m)).next())});import{P as I}from"./index-DrfqwNLV.js";import{u as N,_ as P}from"./useTable-BlleqRm-.js";import{_ as B}from"./index-Rv_3g2e8.js";import{a as F,e as L,f as M}from"./index-HlBkaR6C.js";import{b as V}from"./download-CYeVxFqw.js";import{f as z,c as G,_ as K}from"./CategoryModal.vue_vue_type_script_setup_true_lang-Ed43JBTH.js";import{u as O}from"./index-CMSTH4sS.js";import{b as W,bp as j,bz as q,I as x}from"./entry/index-CMepwc5X-1716790511191.js";import{d as H,aa as J,n as Q,_ as y,a8 as b,a9 as n,k as c,u as t,ae as U,G as w,m as A,ac as X,y as Y}from"./vue-Bw3NQgLF.js";import{a1 as Z}from"./antd-BRjMhd0C.js";import"./useContentViewHeight-xBSq9xFC.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./onMountedOrActivated-B2y-oH2N.js";import"./useForm-uR1ZVBCA.js";import"./FormItem.vue_vue_type_script_lang-DAyz6oLf.js";import"./componentMap-DPcekmXH.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-CwI952Jx.js";import"./useLoading-iCq4GOHr.js";const ve=H({name:"Category",__name:"index",setup(C){const m=W("category.read",!1),[s,{getRawDataSource:u,expandRows:d,collapseRows:k,expandAll:f,collapseAll:l,reload:a}]=N({title:"流程分类列表",isTreeTable:!0,showTableSetting:!0,api:F,pagination:!1,rowKey:"id",afterFetch(o){const e=j(o,{id:"id",pid:"parentId"});return q(e),e},useSearchForm:!0,formConfig:{schemas:z,baseColProps:{xs:24,sm:24,md:24,lg:6}},columns:G,actionColumn:{title:"操作",key:"action",fixed:"right"}});function p(){const o=u();o instanceof Array&&(o.forEach(e=>{e.expand=!0}),Y(f))}const[R,{openModal:h}]=O();function D(o){const{id:e}=o;h(!0,{id:e,update:!0})}function _(o){h(!0,{id:o,update:!1})}function S(o){return T(this,null,function*(){yield M([o]),yield a()})}function v(o){const e=u();if(e instanceof Array)switch(o){case"expandAll":e.forEach(r=>{r.expand=!0}),f();break;case"collapseAll":e.forEach(r=>{r.expand=!1}),l();break}}function $(o){const{id:e}=o;o.expand===!0?(k([e]),o.expand=!1):(d([e]),o.expand=!0)}return(o,e)=>{const r=J("a-button"),E=Q("auth");return y(),b(t(I),{dense:""},{default:n(()=>[c(t(P),{onRegister:t(s),onFetchSuccess:p,onRowDbClick:$},U({toolbar:n(()=>[c(r,{onClick:e[1]||(e[1]=i=>v("expandAll"))},{default:n(()=>[w("展开")]),_:1}),c(r,{onClick:e[2]||(e[2]=i=>v("collapseAll"))},{default:n(()=>[w("折叠")]),_:1}),A((y(),b(r,{onClick:e[3]||(e[3]=i=>t(V)(t(L),"流程分类"))},{default:n(()=>[w("导出")]),_:1})),[[E,"workflow:category:export"]]),A((y(),b(r,{type:"primary",onClick:e[4]||(e[4]=i=>_(0))},{default:n(()=>[w(" 新增 ")]),_:1})),[[E,"workflow:category:add"]])]),bodyCell:n(({column:i,record:g})=>[i.key==="action"?(y(),b(t(B),{key:0,stopButtonPropagation:"",actions:[{label:"修改",icon:t(x).EDIT,type:"primary",ghost:!0,auth:"workflow:category:edit",onClick:D.bind(null,g)},{label:"新增",icon:t(x).ADD,type:"primary",color:"success",ghost:!0,auth:"workflow:category:add",onClick:_.bind(null,g.id)},{label:"删除",icon:t(x).DELETE,type:"primary",danger:!0,ghost:!0,auth:"workflow:category:remove",popConfirm:{title:`是否删除分类[${g.categoryName}]`,placement:"left",confirm:S.bind(null,g.id)}}]},null,8,["actions"])):X("",!0)]),_:2},[t(m)?void 0:{name:"headerTop",fn:n(()=>[c(t(Z),{class:"h-30px",message:"提示: 双击行可展开/折叠内容",type:"info",banner:"",closable:"",onClose:e[0]||(e[0]=i=>m.value=!0)})]),key:"0"}]),1032,["onRegister"]),c(K,{onRegister:t(R),onReload:t(a)},null,8,["onRegister","onReload"])]),_:1})}}});export{ve as default};