var p=(b,m,t)=>new Promise((f,a)=>{var c=e=>{try{n(t.next(e))}catch(o){a(o)}},u=e=>{try{n(t.throw(e))}catch(o){a(o)}},n=e=>e.done?f(e.value):Promise.resolve(e.value).then(c,u);n((t=t.apply(b,m)).next())});import{a as x,B as M}from"./index-BIkrAlj7.js";import{u as T,_ as A}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./componentMap-qA-f8iV4.js";import{f as R,h as B}from"./index-DH8S7RKQ.js";import{h as S}from"./entry/index-BbJQUQ84-1718268303552.js";import{d as V,a7 as F,Z as G,a8 as L,a9 as l,k as d,G as I,u as r,ac as N}from"./vue-Cw15aJ-2.js";import{P as j}from"./antd-DMGzOvrA.js";const k=[{value:"1",label:"站内信",disabled:!0},{value:"2",label:"邮箱"},{value:"3",label:"短信"}],Q=[{label:"taskId",component:"Input",field:"taskId",show:!1},{label:"消息提醒",field:"messageType",component:"CheckboxGroup",defaultValue:["1"],componentProps:{options:k}},{label:"审批意见",component:"InputTextArea",field:"message",componentProps:{placeholder:"输入审批意见",rows:3}},{label:"抄送",field:"wfCopyList",slot:"wfCopyList"},{label:"附件",field:"fileId",slot:"fileId"}],O=[{label:"taskId",component:"Input",field:"taskId",show:!1},{label:"消息提醒",field:"messageType",component:"CheckboxGroup",defaultValue:["1"],componentProps:{options:k}},{label:"驳回节点",component:"Select",field:"targetActivityId",required:!0},{label:"审批意见",component:"InputTextArea",field:"message",componentProps:{placeholder:"输入审批意见",rows:3}}],U=V({__name:"RejectModal",emits:["register","reload"],setup(b,{emit:m}){const t=m,[f,{modalLoading:a,closeModal:c}]=x(u);function u(s){return p(this,null,function*(){a(!0);const{taskId:h,processInstanceId:i}=s,v=(yield R(i)).map(_=>({label:_.nodeName,value:_.nodeId}));yield y({field:"targetActivityId",componentProps:{options:v}}),yield w({taskId:h}),a(!1)})}const[n,{validate:e,resetForm:o,setFieldsValue:w,updateSchema:y}]=T({labelWidth:100,name:"reject_modal",showActionButtonGroup:!1,schemas:O,baseColProps:{span:24}});function g(){return p(this,null,function*(){c(),yield o()})}const{createMessage:C}=S();function P(){return p(this,null,function*(){try{a(!0);const s=yield e();yield B(s),C.success("操作成功"),t("reload"),c(),o()}catch(s){}finally{a(!1)}})}return(s,h)=>{const i=F("a-button");return G(),L(r(M),N(s.$attrs,{title:"驳回",width:600,"can-fullscreen":!1,onRegister:r(f),onCancel:g}),{footer:l(()=>[d(i,{onClick:g},{default:l(()=>[I("取消")]),_:1}),d(r(j),{placement:"topRight",title:"确认驳回吗?","ok-text":"确认","cancel-text":"再想想",onConfirm:P},{default:l(()=>[d(i,{type:"primary",danger:""},{default:l(()=>[I("驳回")]),_:1})]),_:1})]),default:l(()=>[d(r(A),{onRegister:r(n)},null,8,["onRegister"])]),_:1},16,["onRegister"])}}});export{U as _,Q as m};
