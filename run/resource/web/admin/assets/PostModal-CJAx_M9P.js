var d=(u,p,a)=>new Promise((s,n)=>{var l=t=>{try{i(a.next(t))}catch(m){n(m)}},e=t=>{try{i(a.throw(t))}catch(m){n(m)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(l,e);i((a=a.apply(u,p)).next())});import{a as M,B}from"./index-BIkrAlj7.js";import{u as C,_ as b}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./componentMap-qA-f8iV4.js";import{p as k,a as v,b as y}from"./index-DGT8hE2-.js";import{m as F}from"./post.data-tw5vigc8.js";import{d as I,f as P,c as R,Z as x,a8 as A,a9 as S,k as U,u as r,ac as V}from"./vue-Cw15aJ-2.js";import"./entry/index-BbJQUQ84-1718268303552.js";import"./antd-DMGzOvrA.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./FormItem.vue_vue_type_script_lang-C67_1cA1.js";import"./helper-CXVLNTBN.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./index-DCvxWw7W.js";import"./useSortable-BTdBE9Oa.js";import"./download-DOz9ltI1.js";import"./useLoading-D1in2ACg.js";import"./copyTextToClipboard-uEEWQikS.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./style-CLEvKZSv.js";import"./dictEnum-DeC8h6ZR.js";import"./dict-vVDMuEaq.js";import"./useRender-D1Q3fAQ3.js";import"./index-Dx0uas1b.js";const it=I({name:"PostModal",__name:"PostModal",emits:["register","reload"],setup(u,{emit:p}){const a=p,s=P(!1),n=R(()=>s.value?"编辑岗位":"新增岗位"),[l,{modalLoading:e,closeModal:i}]=M(o=>d(this,null,function*(){e(!0);const{record:c,update:_}=o;if(s.value=_,_&&c){const w=yield k(c.postId);yield m(w)}e(!1)})),[t,{setFieldsValue:m,resetForm:f,validate:g}]=C({labelWidth:80,name:"post_modal",showActionButtonGroup:!1,baseColProps:{span:24},schemas:F});function h(){return d(this,null,function*(){try{e(!0);const o=yield g();r(s)?yield v(o):yield y(o),a("reload"),i(),yield f()}catch(o){}finally{e(!1)}})}return(o,c)=>(x(),A(r(B),V(o.$attrs,{title:n.value,onRegister:r(l),onOk:h,onCancel:r(f)}),{default:S(()=>[U(r(b),{onRegister:r(t)},null,8,["onRegister"])]),_:1},16,["title","onRegister","onCancel"]))}});export{it as default};
