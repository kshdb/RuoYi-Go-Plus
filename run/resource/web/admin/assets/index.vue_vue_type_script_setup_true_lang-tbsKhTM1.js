var h=(L,I,c)=>new Promise((b,p)=>{var k=o=>{try{u(c.next(o))}catch(f){p(f)}},v=o=>{try{u(c.throw(o))}catch(f){p(f)}},u=o=>o.done?b(o.value):Promise.resolve(o.value).then(k,v);u((c=c.apply(L,I)).next())});import{a as D,u as E,B as j}from"./index-BIkrAlj7.js";import{u as q,_ as W}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./componentMap-qA-f8iV4.js";import{ab as Z,e as H,I as J,h as K}from"./entry/index-BbJQUQ84-1718268303552.js";import Q from"./index-BsD3RzB-.js";import{c as X}from"./index-DH8S7RKQ.js";import{P as Y,A as ee,aE as se}from"./antd-DMGzOvrA.js";import{d as ae,f as F,a7 as te,Z as M,a8 as R,a9 as a,k as l,G as r,u as n,$ as x,_ as oe,aa as ne,a0 as S,F as le,ac as re}from"./vue-Cw15aJ-2.js";const ie=[{value:"1",label:"站内信",disabled:!0},{value:"2",label:"邮箱"},{value:"3",label:"短信"}],ce=[{label:"taskId",component:"Input",field:"taskId",show:!1},{label:"消息提醒",field:"messageType",component:"CheckboxGroup",defaultValue:["1"],componentProps:{options:ie}},{label:"抄送",field:"wfCopyList",slot:"wfCopyList"},{label:"附件",field:"fileId",slot:"fileId"}],de={class:"flex flex-col gap-4px"},pe=x("p",{class:"mt-4"},[r(" 请上传 大小不超过 "),x("span",{class:"text-red-500"},"20MB"),r(" 格式为 "),x("span",{class:"text-red-500"},"doc/xls/ppt/txt/pdf/xlsx/docx/zip"),r(" 的文件 ")],-1),ue=".doc,.docx,.xls,.xlsx,.ppt, .pptx, .pdf, .txt, .zip",Ce=ae({name:"PreSubmitModal",__name:"index",emits:["register","reload"],setup(L,{emit:I}){const c=I,[b,{closeModal:p}]=D(e=>h(this,null,function*(){yield o({taskId:e})})),[k,{resetFields:v,getFieldsValue:u,setFieldsValue:o}]=q({name:"pre_submit",schemas:ce,showActionButtonGroup:!1,labelWidth:100,baseColProps:{span:24}}),{apiUrl:f,clientId:P}=Z(),T=`${f}/resource/oss/upload`,V={Authorization:"Bearer "+H(),clientId:P},m=F([]),_=F([]),{createMessage:B}=K();function O(e){const s=e.file,i=s==null?void 0:s.status;if(i==="done"){const{response:t}=s,{code:d,msg:g="服务器错误",data:w}=t;if(d===200){const{ossId:y}=w;m.value.push(y)}else B.error(g)}if(i==="removed"){const{response:t}=s,{code:d,msg:g="服务器错误",data:w}=t;if(d===200){const{ossId:y}=w,U=m.value.indexOf(y);U!==-1&&m.value.splice(U,1)}else B.error(g)}}const[A,{openModal:G}]=E();function $(){const e=_.value.map(s=>s.userId);G(!0,e)}function z(e){_.value=e.map(s=>({userId:s.userId,userName:s.userName,nickName:s.nickName}))}function N(){return h(this,null,function*(){const e=u();e.fileId=m.value.join(","),e.wfCopyList=_.value,yield X(e),p(),yield C(),c("reload")})}function C(){return h(this,null,function*(){yield v(),m.value=[],_.value=[],p()})}return(e,s)=>{const i=te("a-button");return M(),R(n(j),re(e.$attrs,{title:"提示",width:600,"can-fullscreen":!1,onRegister:n(b),onOk:N,onCancel:C}),{footer:a(()=>[l(i,{onClick:C},{default:a(()=>[r("取消")]),_:1}),l(n(Y),{placement:"topRight",title:"确认提交吗?","ok-text":"确认","cancel-text":"再想想",onConfirm:N},{default:a(()=>[l(i,{type:"primary"},{default:a(()=>[r("提交")]),_:1})]),_:1})]),default:a(()=>[l(n(W),{onRegister:n(k)},{wfCopyList:a(()=>[x("div",de,[x("div",null,[(M(!0),oe(le,null,ne(_.value,t=>(M(),R(n(ee),{key:t.userId},{default:a(()=>[r(S(t.nickName)+"/"+S(t.userName),1)]),_:2},1024))),128))]),l(i,{class:"w-fit","pre-icon":"bi:cc-square-fill",onClick:$},{default:a(()=>[r(" 选择抄送人 ")]),_:1})])]),fileId:a(({model:t,field:d})=>[l(n(se),{"file-list":t[d],"onUpdate:fileList":g=>t[d]=g,name:"file",multiple:!0,action:T,headers:V,accept:ue,onChange:O},{default:a(()=>[l(i,{"pre-icon":n(J).UPLOAD},{default:a(()=>[r("上传附件")]),_:1},8,["pre-icon"])]),_:2},1032,["file-list","onUpdate:fileList"]),pe]),_:1},8,["onRegister"]),l(Q,{onRegister:n(A),onSelectDone:z},null,8,["onRegister"])]),_:1},16,["onRegister"])}}});export{Ce as _};
