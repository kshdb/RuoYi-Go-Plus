import{k as a,d as b,_ as n,a8 as w,a9 as i,u as e,ad as T,f as _,w as M,y as S,aa as A,$ as d,F as V,ab as $,m as B,G as y,a1 as h,ac as N,A as O}from"./vue-Bw3NQgLF.js";import{B as F,u as U}from"./index-CMSTH4sS.js";import{D as P}from"./index-ByLT-Lkv.js";import{k as p,E as u,l as j}from"./entry/index-CMepwc5X-1716790511191.js";import{O as G,f as J}from"./antd-BRjMhd0C.js";import{u as X}from"./useDescription-Cm6mcuk5.js";import{u as q,_ as z}from"./useTable-BlleqRm-.js";import{_ as H}from"./index-Rv_3g2e8.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./useForm-uR1ZVBCA.js";import"./FormItem.vue_vue_type_script_lang-DAyz6oLf.js";import"./componentMap-DPcekmXH.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./onMountedOrActivated-B2y-oH2N.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-CwI952Jx.js";import"./download-CYeVxFqw.js";import"./useLoading-iCq4GOHr.js";const{t:s}=p();function L(){return[{dataIndex:"type",title:s("sys.errorLog.tableColumnType"),width:80,customRender:({text:t})=>{const r=t===u.VUE?"green":t===u.RESOURCE?"cyan":t===u.PROMISE?"blue":u.AJAX?"red":"purple";return a(G,{color:r},{default:()=>t})}},{dataIndex:"url",title:"URL",width:200},{dataIndex:"time",title:s("sys.errorLog.tableColumnDate"),width:160},{dataIndex:"file",title:s("sys.errorLog.tableColumnFile"),width:200},{dataIndex:"name",title:"Name",width:200},{dataIndex:"message",title:s("sys.errorLog.tableColumnMsg"),width:300},{dataIndex:"stack",title:s("sys.errorLog.tableColumnStackMsg")}]}function K(){return L().map(t=>({field:t.dataIndex,label:t.title}))}const Q=b({__name:"DetailModal",props:{info:{type:Object,default:null}},setup(t){const{t:r}=p(),[l]=X({column:2,schema:K()});return(o,f)=>(n(),w(e(F),T({width:800,title:e(r)("sys.errorLog.tableActionDesc")},o.$attrs),{default:i(()=>[a(e(P),{data:t.info,onRegister:e(l)},null,8,["data","onRegister"])]),_:1},16,["title"]))}}),W={class:"p-4"},Y=["src"],Le=b({__name:"index",setup(t){const r=_(),l=_([]),{t:o}=p(),f=j(),[C,{setTableData:E}]=q({title:o("sys.errorLog.tableTitle"),columns:L(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[k,{openModal:D}]=U();M(()=>f.getErrorLogInfoList,c=>{S(()=>{E(J(c))})},{immediate:!0});function I(c){r.value=c,D(!0)}function R(){throw new Error("fire vue error!")}function x(){l.value.push(`${new Date().getTime()}.png`)}return(c,Z)=>{const g=A("a-button");return n(),d("div",W,[(n(!0),d(V,null,$(l.value,m=>B((n(),d("img",{key:m,src:m,alt:""},null,8,Y)),[[O,!1]])),128)),a(Q,{info:r.value,onRegister:e(k)},null,8,["info","onRegister"]),a(e(z),{onRegister:e(C),class:"error-handle-table"},{toolbar:i(()=>[a(g,{onClick:R,type:"primary"},{default:i(()=>[y(h(e(o)("sys.errorLog.fireVueError")),1)]),_:1}),a(g,{onClick:x,type:"primary"},{default:i(()=>[y(h(e(o)("sys.errorLog.fireResourceError")),1)]),_:1})]),bodyCell:i(({column:m,record:v})=>[m.key==="action"?(n(),w(e(H),{key:0,actions:[{label:e(o)("sys.errorLog.tableActionDesc"),onClick:I.bind(null,v)}]},null,8,["actions"])):N("",!0)]),_:1},8,["onRegister"])])}}});export{Le as default};
