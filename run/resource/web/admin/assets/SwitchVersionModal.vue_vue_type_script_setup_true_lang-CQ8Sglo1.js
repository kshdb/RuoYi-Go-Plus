var p=(_,u,a)=>new Promise((r,l)=>{var c=e=>{try{n(a.next(e))}catch(i){l(i)}},f=e=>{try{n(a.throw(e))}catch(i){l(i)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(c,f);n((a=a.apply(_,u)).next())});import{a as I,B as k}from"./index-CMSTH4sS.js";import{u as x,_ as b}from"./useTable-BlleqRm-.js";import{_ as C}from"./index-Rv_3g2e8.js";import{g as R,m as B}from"./index-CigIE-O6.js";import{u as D}from"./useRender-C6p2srTi.js";import{d as M,f as S,_ as h,a8 as y,a9 as g,k as T,u as o,ac as v,ad as $}from"./vue-Bw3NQgLF.js";const j=M({name:"SwitchVersionModal",__name:"SwitchVersionModal",emits:["register","reload"],setup(_,{emit:u}){const a=u,r=S(""),[l,{modalLoading:c,closeModal:f}]=I(t=>p(this,null,function*(){c(!0);const{processDefinitionKey:d,processDefinitionId:m}=t;r.value=m;const s=yield R(d);i(s),c(!1)})),{renderTag:n}=D(),[e,{setTableData:i}]=x({showIndexColumn:!0,rowKey:"id",useSearchForm:!1,size:"small",pagination:!1,columns:[{dataIndex:"name",title:"流程名称"},{dataIndex:"key",title:"流程key"},{dataIndex:"version",title:"版本号",customRender({value:t}){return`v${t}.0`}},{dataIndex:"suspensionState",title:"流程状态",customRender({value:t}){return n(t)}},{dataIndex:"deploymentTime",title:"部署时间"}],showTableSetting:!1,actionColumn:{width:150,title:"操作",key:"action",fixed:"right"}});function w(t){return p(this,null,function*(){const d=t.id;yield B(o(r),d),a("reload"),f()})}return(t,d)=>(h(),y(o(k),$(t.$attrs,{title:"切换版本",width:1e3,onRegister:o(l)}),{footer:g(()=>[]),default:g(()=>[T(o(b),{onRegister:o(e)},{bodyCell:g(({column:m,record:s})=>[m&&s&&m.key==="action"?(h(),y(o(C),{key:0,stopButtonPropagation:"",actions:[{label:"切换",icon:"icon-park-outline:switch",popConfirm:{placement:"left",title:`是否确认切换版本为[v${s.version}.0]?`,confirm:w.bind(null,s)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"])]),_:1},16,["onRegister"]))}});export{j as _};