var f=(_,i,o)=>new Promise((n,p)=>{var u=e=>{try{s(o.next(e))}catch(r){p(r)}},l=e=>{try{s(o.throw(e))}catch(r){p(r)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(u,l);s((o=o.apply(_,i)).next())});import{q as S,k as b}from"./entry/index-CMepwc5X-1716790511191.js";import{a as G,B as V}from"./index-CMSTH4sS.js";import{u as M,_ as $}from"./useForm-uR1ZVBCA.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./componentMap-DPcekmXH.js";import{aA as w}from"./antd-BRjMhd0C.js";import{d as q,f as y,_ as h,a8 as A,a9 as d,ad as D,u as a,k as x,$ as I,ab as N,ah as P,G as U,a1 as k,F as z}from"./vue-Bw3NQgLF.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./FormItem.vue_vue_type_script_lang-DAyz6oLf.js";import"./helper-CfJJkrf5.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./index-Rv_3g2e8.js";import"./useSortable-CwI952Jx.js";import"./download-CYeVxFqw.js";import"./useLoading-iCq4GOHr.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./onMountedOrActivated-B2y-oH2N.js";const ie=q({__name:"index",setup(_){const i=S(),o=w.Group,{t:n}=b(),[p,{closeModal:u}]=G(()=>f(this,null,function*(){R()})),l=y({development:"http://127.0.0.1:8080",test:"http://www.b.com",prod:"http://www.c.com"}),s=y({display:"flex",height:"30px",lineHeight:"30px"}),[e,{validateFields:r,setFieldsValue:B}]=M({showActionButtonGroup:!1,schemas:[{field:"api",label:n("layout.header.dropdownChangeApi"),colProps:{span:24},defaultValue:"production",required:!0,slot:"api"}]}),C=()=>f(this,null,function*(){const t=yield r();i.setApiAddress({key:t.api,val:l.value[t.api]}),location.reload()}),F=()=>{u()},R=()=>{const{key:t=""}=i.getApiAddress;t&&B({api:t})};return(t,E)=>(h(),A(a(V),D({title:a(n)("layout.header.dropdownChangeApi")},t.$attrs,{onRegister:a(p),onOk:C,onCancel:F}),{default:d(()=>[x(a($),{onRegister:a(e)},{api:d(({model:g,field:v})=>[x(a(o),{value:g[v],"onUpdate:value":c=>g[v]=c},{default:d(()=>[(h(!0),I(z,null,N(l.value,(c,m)=>(h(),A(a(w),{style:P(s.value),value:m,key:m},{default:d(()=>[U(k(m)+": "+k(c),1)]),_:2},1032,["style","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:1},8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{ie as default};
