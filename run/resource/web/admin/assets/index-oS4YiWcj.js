var f=(g,i,o)=>new Promise((n,p)=>{var c=e=>{try{s(o.next(e))}catch(r){p(r)}},l=e=>{try{s(o.throw(e))}catch(r){p(r)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(c,l);s((o=o.apply(g,i)).next())});import{s as k,m as G}from"./entry/index-BbJQUQ84-1718268303552.js";import{a as V,B as b}from"./index-BIkrAlj7.js";import{u as M,_ as z}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./componentMap-qA-f8iV4.js";import{az as v}from"./antd-DMGzOvrA.js";import{d as D,f as y,Z as h,a8 as A,a9 as d,ac as I,u as t,k as x,_ as N,aa as P,ag as U,G as $,a0 as B,F as q}from"./vue-Cw15aJ-2.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./FormItem.vue_vue_type_script_lang-C67_1cA1.js";import"./helper-CXVLNTBN.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./index-DCvxWw7W.js";import"./useSortable-BTdBE9Oa.js";import"./download-DOz9ltI1.js";import"./useLoading-D1in2ACg.js";import"./copyTextToClipboard-uEEWQikS.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./style-CLEvKZSv.js";const ne=D({__name:"index",setup(g){const i=k(),o=v.Group,{t:n}=G(),[p,{closeModal:c}]=V(()=>f(this,null,function*(){S()})),l=y({development:"http://www.a.com",test:"http://www.b.com",prod:"http://www.c.com"}),s=y({display:"flex",height:"30px",lineHeight:"30px"}),[e,{validateFields:r,setFieldsValue:C}]=M({showActionButtonGroup:!1,schemas:[{field:"api",label:n("layout.header.dropdownChangeApi"),colProps:{span:24},defaultValue:"production",required:!0,slot:"api"}]}),F=()=>f(this,null,function*(){const a=yield r();i.setApiAddress({key:a.api,val:l.value[a.api]}),location.reload()}),R=()=>{c()},S=()=>{const{key:a=""}=i.getApiAddress;a&&C({api:a})};return(a,E)=>(h(),A(t(b),I({title:t(n)("layout.header.dropdownChangeApi")},a.$attrs,{onRegister:t(p),onOk:F,onCancel:R}),{default:d(()=>[x(t(z),{onRegister:t(e)},{api:d(({model:_,field:w})=>[x(t(o),{value:_[w],"onUpdate:value":u=>_[w]=u},{default:d(()=>[(h(!0),N(q,null,P(l.value,(u,m)=>(h(),A(t(v),{style:U(s.value),value:m,key:m},{default:d(()=>[$(B(m)+": "+B(u),1)]),_:2},1032,["style","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:1},8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{ne as default};