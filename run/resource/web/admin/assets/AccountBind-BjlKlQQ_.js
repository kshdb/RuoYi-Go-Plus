var I=(t,_,c)=>new Promise((f,m)=>{var b=s=>{try{i(c.next(s))}catch(u){m(u)}},r=s=>{try{i(c.throw(s))}catch(u){m(u)}},i=s=>s.done?f(s.value):Promise.resolve(s.value).then(b,r);i((c=c.apply(t,_)).next())});import{aw as w,_ as y,ax as L,h as $,j as D}from"./entry/index-CMepwc5X-1716790511191.js";import{_ as S,a as N,u as R}from"./useTable-BlleqRm-.js";import{_ as V}from"./index-Rv_3g2e8.js";import{a as z}from"./common-DAyXvPhm.js";import{W as T,R as U,a1 as j}from"./antd-BRjMhd0C.js";import{d as M,f as G,c as H,u as O,aa as n,_ as h,$ as P,k as d,a9 as p,a8 as B,ac as k,a0 as a,a1 as A,G as x,a3 as W,a4 as q}from"./vue-Bw3NQgLF.js";import"./useForm-uR1ZVBCA.js";import"./FormItem.vue_vue_type_script_lang-DAyz6oLf.js";import"./componentMap-DPcekmXH.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./index-CMSTH4sS.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./onMountedOrActivated-B2y-oH2N.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-CwI952Jx.js";import"./download-CYeVxFqw.js";import"./useLoading-iCq4GOHr.js";function J(){return w.get({url:"/system/social/list"})}const K=M({components:{List:T,ListItem:T.Item,Icon:y,BasicTable:S,TableAction:V,TableImg:N,Card:U,Alert:j},setup(){const[t,{reload:_}]=R({columns:[{dataIndex:"source",title:"绑定平台"},{dataIndex:"avatar",title:"头像"},{dataIndex:"userName",title:"账号"}],title:"账号绑定",api:J,pagination:!1,canResize:!1,showIndexColumn:!0,actionColumn:{key:"action",title:"操作"}}),{createConfirm:c,createMessage:f}=$();function m(e){f.info({content:`暂不支持绑定${e}`})}function b(e){c({title:"提示",iconType:"info",content:`是否解除绑定[${e.source}]平台的[${e.userName}]账号?`,onOk:()=>I(this,null,function*(){yield L(e.id),yield _()})})}const r=G([]),i=H(()=>{const e=[...z];return e.forEach(l=>{O(r).includes(l.source)?l.bound=!0:l.bound=!1}),e});function s(e){return e.bound?"已绑定":"绑定"}function u(e){r.value=e.items.map(l=>l.source.toLowerCase())}return{list:i,registerTable:t,handleAuthUnbinding:b,defaultTip:m,onFetchSuccess:u,buttonText:s}}}),v=t=>(W("data-v-a2da9322"),t=t(),q(),t),Q={class:"p-2"},X={class:"flex flex-row w-full items-center gap-4"},Y={class:""},Z={class:"flex flex-row flex-1 items-center justify-between"},tt={class:"flex flex-col"},et={class:"text-14px text-black/88 dark:text-white/85 mb-4px"},ot={class:"text-black/45 dark:text-white/45"},st=v(()=>a("p",null,[x("需要添加第三方账号在 "),a("span",{class:"font-bold"}," /src/views/auth/common.ts"),x(" 中accountBindList按模板添加 ")],-1)),at=v(()=>a("p",null,[x("添加对应模板后会在此处显示绑定, 但只有"),a("span",{class:"font-bold"},"实现了action才能在登录页显示")],-1));function nt(t,_,c,f,m,b){const r=n("TableImg"),i=n("TableAction"),s=n("BasicTable"),u=n("Icon"),e=n("a-button"),l=n("Card"),F=n("ListItem"),C=n("List"),E=n("Alert");return h(),P("div",null,[d(s,{onRegister:t.registerTable,onFetchSuccess:t.onFetchSuccess},{bodyCell:p(({column:o,record:g})=>[o.key==="avatar"?(h(),B(r,{key:0,imgList:[g.avatar]},null,8,["imgList"])):k("",!0),o.key==="action"?(h(),B(i,{key:1,actions:[{label:"解绑账号",onClick:t.handleAuthUnbinding.bind(null,g)}]},null,8,["actions"])):k("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),a("div",Q,[d(C,{grid:{gutter:8,xs:1,sm:1,md:2,lg:3,xl:3,xxl:5},"data-source":t.list},{renderItem:p(({item:o})=>[d(F,null,{default:p(()=>[d(l,null,{default:p(()=>[a("div",X,[a("div",Y,[o.avatar?(h(),B(u,{key:0,size:40,icon:o.avatar,color:o.color},null,8,["icon","color"])):k("",!0)]),a("div",Z,[a("div",tt,[a("h4",et,A(o.title),1),a("span",ot,A(o.description),1)]),d(e,{disabled:o.bound,type:"link",size:"small",onClick:g=>o.action?o.action():t.defaultTip(o.title)},{default:p(()=>[x(A(t.buttonText(o)),1)]),_:2},1032,["disabled","onClick"])])])]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"]),d(E,{message:"说明",type:"info"},{description:p(()=>[st,at]),_:1})])])}const Ct=D(K,[["render",nt],["__scopeId","data-v-a2da9322"]]);export{Ct as default};
