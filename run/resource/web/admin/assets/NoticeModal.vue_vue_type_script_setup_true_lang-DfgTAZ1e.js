var I=(e,d,n)=>new Promise((m,a)=>{var p=t=>{try{r(n.next(t))}catch(l){a(l)}},s=t=>{try{r(n.throw(t))}catch(l){a(l)}},r=t=>t.done?m(t.value):Promise.resolve(t.value).then(p,s);r((n=n.apply(e,d)).next())});import{a as P,B as b}from"./index-CMSTH4sS.js";import{u as S,_ as E}from"./useForm-uR1ZVBCA.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./componentMap-DPcekmXH.js";import{aw as u}from"./entry/index-CMepwc5X-1716790511191.js";import{u as M}from"./useRender-C6p2srTi.js";import{g as T}from"./dict-C9gNHjAh.js";import{D as c}from"./dictEnum-DeC8h6ZR.js";import{d as N,c as R,f as x,_ as B,a8 as O,a9 as v,k as D,u as i,ad as V}from"./vue-Bw3NQgLF.js";function K(e){return u.get({url:"/system/notice/list",params:e})}function k(e){return u.get({url:"/system/notice/"+e})}function q(e){return u.postWithMsg({url:"/system/notice",data:e})}function A(e){return u.putWithMsg({url:"/system/notice",data:e})}function Q(e){return u.deleteWithMsg({url:"/system/notice/"+e})}const{renderDict:g}=M(),X=[{title:"公告标题",dataIndex:"noticeTitle"},{title:"公告类型",dataIndex:"noticeType",width:120,customRender:({value:e})=>g(e,c.NOTICE_TYPE)},{title:"状态",dataIndex:"status",width:120,customRender:({value:e})=>g(e,c.NOTICE_STATUS)},{title:"创建人",dataIndex:"createByName",width:150},{title:"创建时间",dataIndex:"createTime"}],Z=[{field:"noticeTitle",label:"公告标题",component:"Input"},{field:"createBy",label:"创建人",component:"Input"},{field:"noticeType",label:"公告类型",component:"Select",componentProps:{options:T(c.NOTICE_TYPE)}}],F=[{label:"公告ID",field:"noticeId",component:"Input",show:!1},{label:"公告标题",field:"noticeTitle",component:"Input",required:!0,colProps:{span:24}},{label:"公告状态",field:"status",component:"Select",defaultValue:"0",required:!0,componentProps:{allowClear:!1,options:T(c.NOTICE_STATUS)},colProps:{span:11}},{label:"公告类型",field:"noticeType",defaultValue:"1",component:"Select",required:!0,componentProps:{allowClear:!1,options:T(c.NOTICE_TYPE)},colProps:{span:11,offset:2}},{field:"noticeContent",label:"公告内容",component:"RichTextarea",required:!0,defaultValue:"",colProps:{span:24}}],ee=N({name:"NoticeModal",__name:"NoticeModal",emits:["register","reload"],setup(e,{emit:d}){const n=d,m=R(()=>a.value?"编辑公告":"新增公告"),a=x(!1),[p,{modalLoading:s,closeModal:r}]=P(o=>I(this,null,function*(){s(!0);const{record:f,update:h}=o;if(a.value=h,h&&f){const C=yield k(f.noticeId);yield l(C)}s(!1)})),[t,{setFieldsValue:l,validate:w,resetForm:_}]=S({layout:"vertical",labelWidth:80,name:"notice_modal",showActionButtonGroup:!1,schemas:F});function y(){return I(this,null,function*(){try{s(!0);const o=yield w();i(a)?yield A(o):yield q(o),n("reload"),r(),yield _()}catch(o){}finally{s(!1)}})}return(o,f)=>(B(),O(i(b),V(o.$attrs,{title:m.value,width:700,"can-fullscreen":!0,onRegister:i(p),onOk:y,onCancel:i(_)}),{default:v(()=>[D(i(E),{onRegister:i(t)},null,8,["onRegister"])]),_:1},16,["title","onRegister","onCancel"]))}});export{ee as _,Q as a,X as c,Z as f,K as n};
