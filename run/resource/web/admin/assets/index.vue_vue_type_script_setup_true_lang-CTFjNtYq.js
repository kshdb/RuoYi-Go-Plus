var c=(C,R,p)=>new Promise((m,n)=>{var w=u=>{try{g(p.next(u))}catch(M){n(M)}},N=u=>{try{g(p.throw(u))}catch(M){n(M)}},g=u=>u.done?m(u.value):Promise.resolve(u.value).then(w,N);g((p=p.apply(C,R)).next())});import{u as v}from"./index-BIkrAlj7.js";import{u as ge,_ as Ie}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./componentMap-qA-f8iV4.js";import{_ as ke,m as ve}from"./RejectModal.vue_vue_type_script_setup_true_lang-BLpwfAdl.js";import{ab as Me,e as _e,k as xe,I as be,h as he}from"./entry/index-BbJQUQ84-1718268303552.js";import D from"./index-BsD3RzB-.js";import{g as ye,c as Ce,t as Re,a as we,d as Ne,b as Te,e as De}from"./index-DH8S7RKQ.js";import Se from"./DeleteMultiInstanceModal-B4C_d8R1.js";import Ae from"./index-UH6lRBqh.js";import{A as Ue,aE as Ee,P as F,aa as $e}from"./antd-DMGzOvrA.js";import{d as Be,f as h,o as Fe,a7 as Ve,Z as y,_ as S,k as t,a9 as o,$ as x,F as V,aa as Oe,a8 as Pe,G as r,a0 as O,u as l,ab as je}from"./vue-Cw15aJ-2.js";const qe={class:"flex flex-col gap-4px"},ze=x("p",{class:"mt-4"},[r(" 请上传 大小不超过 "),x("span",{class:"text-red-500"},"20MB"),r(" 格式为 "),x("span",{class:"text-red-500"},"doc/xls/ppt/txt/pdf/xlsx/docx/zip"),r(" 的文件 ")],-1),Ge=".doc,.docx,.xls,.xlsx,.ppt, .pptx, .pdf, .txt, .zip",sa=Be({name:"ApprovalContent",__name:"index",props:{taskId:{type:String,required:!0}},emits:["register","reload"],setup(C,{emit:R}){const p=R,m=C,n=h(null);Fe(()=>c(this,null,function*(){yield u({taskId:m.taskId});const a=yield ye(m.taskId);n.value=a}));const[w,{resetFields:N,getFieldsValue:g,setFieldsValue:u}]=ge({name:"approval_content",schemas:ve,showActionButtonGroup:!1,labelWidth:100,baseColProps:{span:24}}),{apiUrl:M,clientId:P}=Me(),j=`${M}/resource/oss/upload`,q={Authorization:"Bearer "+_e(),clientId:P},_=h([]),b=h([]),{createMessage:A,createConfirm:z}=he();function G(a){const e=a.file,i=e==null?void 0:e.status;if(i==="done"){const{response:s}=e,{code:I,msg:f="服务器错误",data:k}=s;if(I===200){const{ossId:T}=k;_.value.push(T)}else A.error(f)}if(i==="removed"){const{response:s}=e,{code:I,msg:f="服务器错误",data:k}=s;if(I===200){const{ossId:T}=k,B=_.value.indexOf(T);B!==-1&&_.value.splice(B,1)}else A.error(f)}}const[L,{openModal:W}]=v();function Z(){W(!0)}const[H,{openModal:J}]=v();function K(){if(!n.value)return;const a=n.value.processInstanceId,e=m.taskId;J(!0,{taskId:e,processInstanceId:a})}function Q(a){b.value=a.map(e=>({userId:e.userId,userName:e.userName,nickName:e.nickName}))}const d=h(!1);function X(){return c(this,null,function*(){try{d.value=!0;const a=g();a.fileId=_.value.join(","),a.wfCopyList=b.value,yield Ce(a),yield $(),p("reload")}catch(a){}finally{d.value=!1}})}function Y(){return c(this,null,function*(){try{d.value=!0;const a=g(),e={taskId:m.taskId,comment:a.message};yield Re(e),yield $(),p("reload")}catch(a){}finally{d.value=!1}})}const[ee,{openModal:ae}]=v();function te(){return c(this,null,function*(){ae(!0)})}function U(a,e,i){if(Array.isArray(e)&&e.length===0)return;const s=e[0];z({title:"提示",iconType:"warning",content:`是否${a}给用户[${s.nickName}]?`,onOk(){return c(this,null,function*(){const f={nickName:s.nickName,userId:s.userId,taskId:m.taskId},k=g();k.message&&(f.comment=k.message),yield i(f),p("reload")})}})}function ne(a){U("委托",a,Te)}const[se,{openModal:oe}]=v();function le(){return c(this,null,function*(){oe(!0)})}function ie(a){U("转办",a,De)}const{refreshPage:E}=xe(),[re,{openModal:de}]=v();function ce(){n.value&&de(!0,n.value.id)}function ue(a){return c(this,null,function*(){!n.value||!a.length||(yield we({taskId:n.value.id,assignees:a.map(e=>e.userId),assigneeNames:a.map(e=>e.nickName)}),yield E())})}const[pe,{openModal:fe}]=v();function me(a){return c(this,null,function*(){n.value&&(yield Ne({taskId:n.value.id,taskIds:a.map(e=>e.id),executionIds:a.map(e=>e.executionId),assigneeIds:a.map(e=>e.assignee),assigneeNames:a.map(e=>e.assigneeName)}),yield E())})}function $(){return c(this,null,function*(){yield N(),_.value=[],b.value=[],n.value=null})}return(a,e)=>{const i=Ve("a-button");return y(),S("div",null,[t(l(Ie),{onRegister:l(w)},{wfCopyList:o(()=>[x("div",qe,[x("div",null,[(y(!0),S(V,null,Oe(b.value,s=>(y(),Pe(l(Ue),{key:s.userId},{default:o(()=>[r(O(s.nickName)+"/"+O(s.userName),1)]),_:2},1024))),128))]),t(i,{class:"w-fit","pre-icon":"bi:cc-square-fill",onClick:Z},{default:o(()=>[r("选择抄送人")]),_:1})])]),fileId:o(({model:s,field:I})=>[t(l(Ee),{"file-list":s[I],"onUpdate:fileList":f=>s[I]=f,name:"file",multiple:!0,action:j,headers:q,accept:Ge,onChange:G},{default:o(()=>[t(i,{"pre-icon":l(be).UPLOAD},{default:o(()=>[r("上传附件")]),_:1},8,["pre-icon"])]),_:2},1032,["file-list","onUpdate:fileList"]),ze]),_:1},8,["onRegister"]),t(l($e),{class:"ml-100px"},{default:o(()=>[t(l(F),{placement:"top",title:"确认提交吗?","ok-text":"确认","cancel-text":"再想想",onConfirm:X},{default:o(()=>[t(i,{disabled:d.value},{default:o(()=>[r("通过")]),_:1},8,["disabled"])]),_:1}),n.value&&n.value.multiInstance?(y(),S(V,{key:0},[t(i,{disabled:d.value,onClick:ce},{default:o(()=>[r("加签")]),_:1},8,["disabled"]),t(i,{disabled:d.value,onClick:e[0]||(e[0]=s=>l(fe)(!0,n.value.id))},{default:o(()=>[r("减签")]),_:1},8,["disabled"])],64)):je("",!0),t(i,{disabled:d.value,onClick:te},{default:o(()=>[r("委托")]),_:1},8,["disabled"]),t(i,{disabled:d.value,onClick:le},{default:o(()=>[r("转办")]),_:1},8,["disabled"]),t(i,{disabled:d.value,onClick:K},{default:o(()=>[r("驳回")]),_:1},8,["disabled"]),t(l(F),{placement:"top",title:"确认终止吗?","ok-text":"确认","cancel-text":"再想想",onConfirm:Y},{default:o(()=>[t(i,{disabled:d.value},{default:o(()=>[r("终止")]),_:1},8,["disabled"])]),_:1})]),_:1}),t(D,{onRegister:l(L),onSelectDone:Q},null,8,["onRegister"]),t(ke,{onRegister:l(H),onReload:e[1]||(e[1]=s=>a.$emit("reload"))},null,8,["onRegister"]),t(D,{multiple:!1,onRegister:l(ee),onSelectDone:ne},null,8,["onRegister"]),t(D,{multiple:!1,onRegister:l(se),onSelectDone:ie},null,8,["onRegister"]),t(Ae,{onRegister:l(re),onSelectDone:ue},null,8,["onRegister"]),t(l(Se),{onRegister:l(pe),onSelectDone:me},null,8,["onRegister"])])}}});export{sa as _};
