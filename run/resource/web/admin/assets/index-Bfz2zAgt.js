var w=(a,f,i)=>new Promise((g,c)=>{var _=o=>{try{s(i.next(o))}catch(l){c(l)}},b=o=>{try{s(i.throw(o))}catch(l){c(l)}},s=o=>o.done?g(o.value):Promise.resolve(o.value).then(_,b);s((i=i.apply(a,f)).next())});import{P as T}from"./index-DrfqwNLV.js";import{u as D,_ as I}from"./useTable-BlleqRm-.js";import{_ as M}from"./index-Rv_3g2e8.js";import{aw as d,I as Y,h as R}from"./entry/index-CMepwc5X-1716790511191.js";import{u as L}from"./index-ov0mgIjt.js";import{b as P}from"./download-CYeVxFqw.js";import{formSchemas as $,columns as B}from"./operlog.data-B0kTnWye.js";import{_ as E}from"./InfoDrawer.vue_vue_type_script_setup_true_lang-BBCUos2F.js";import{ad as S}from"./antd-BRjMhd0C.js";import{d as W,aa as N,n as V,_ as p,a8 as u,a9 as n,k as C,u as e,m as k,G as y,ac as A,f as O}from"./vue-Bw3NQgLF.js";import"./useContentViewHeight-xBSq9xFC.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./onMountedOrActivated-B2y-oH2N.js";import"./useForm-uR1ZVBCA.js";import"./FormItem.vue_vue_type_script_lang-DAyz6oLf.js";import"./componentMap-DPcekmXH.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./index-CMSTH4sS.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-CwI952Jx.js";import"./useLoading-iCq4GOHr.js";import"./useRender-C6p2srTi.js";import"./index-BhefpKLc.js";import"./dict-C9gNHjAh.js";import"./dictEnum-DeC8h6ZR.js";import"./index-ByLT-Lkv.js";import"./useSize-tRF5RUOv.js";import"./useDescription-Cm6mcuk5.js";function F(a){return d.get({url:"/monitor/operlog/list",params:a})}function G(a){return d.deleteWithMsg({url:"/monitor/operlog/"+a})}function H(){return d.deleteWithMsg({url:"/monitor/operlog/clean"})}function K(){return d.post({url:"/monitor/operlog/export",responseType:"blob"},{isTransformResponse:!1})}const xe=W({name:"Operlog",__name:"index",setup(a){const[f,{openDrawer:i}]=L(),[g,{multipleRemove:c,reload:_,selected:b}]=D({rowSelection:{type:"checkbox"},title:"操作日志列表",showIndexColumn:!1,api:F,rowKey:"operId",useSearchForm:!0,formConfig:{schemas:$,labelWidth:80,baseColProps:{xs:24,sm:24,md:24,lg:6},fieldMapToTime:[["createTime",["params[beginTime]","params[endTime]"],["YYYY-MM-DD 00:00:00","YYYY-MM-DD 23:59:59"]]]},columns:B,actionColumn:{width:120,title:"操作",key:"action",fixed:"right"}});function s(t){i(!0,t)}const{createConfirm:o}=R();function l(){let t=O(5);const r=setInterval(()=>{t.value--,t.value===0&&(m.update({okButtonProps:{disabled:!1,type:"primary",danger:!0}}),clearInterval(r))},1e3),m=o({iconType:"warning",title:"提示",content:"是否要清空全部日志内容?",okButtonProps:{disabled:!0},okText(){return t.value===0?"确认":`等待${t.value}秒`},onOk:()=>w(this,null,function*(){yield H(),yield _()}),onCancel(){clearInterval(r)}})}return(t,r)=>{const m=N("a-button"),v=V("auth");return p(),u(e(T),{dense:""},{default:n(()=>[C(e(I),{onRegister:e(g)},{toolbar:n(()=>[C(e(S),null,{default:n(()=>[k((p(),u(m,{onClick:l},{default:n(()=>[y("清空")]),_:1})),[[v,"monitor:operlog:remove"]]),k((p(),u(m,{class:"<sm:hidden",onClick:r[0]||(r[0]=h=>e(P)(e(K),"操作日志"))},{default:n(()=>[y("导出")]),_:1})),[[v,"monitor:operlog:export"]]),k((p(),u(m,{class:"<sm:hidden",type:"primary",danger:"",disabled:!e(b),onClick:r[1]||(r[1]=h=>e(c)(e(G)))},{default:n(()=>[y("删除")]),_:1},8,["disabled"])),[[v,"monitor:operlog:remove"]])]),_:1})]),bodyCell:n(({column:h,record:x})=>[h.key==="action"?(p(),u(e(M),{key:0,stopButtonPropagation:"",actions:[{label:"详情",icon:e(Y).DETAIL,type:"primary",ghost:!0,onClick:s.bind(null,x)}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister"]),C(E,{onRegister:e(f)},null,8,["onRegister"])]),_:1})}}});export{xe as default};
