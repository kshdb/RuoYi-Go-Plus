var g=(a,o,s)=>new Promise((d,t)=>{var p=e=>{try{r(s.next(e))}catch(n){t(n)}},u=e=>{try{r(s.throw(e))}catch(n){t(n)}},r=e=>e.done?d(e.value):Promise.resolve(e.value).then(p,u);r((s=s.apply(a,o)).next())});import{a as L,B as b}from"./index-CMSTH4sS.js";import{aw as i,bo as U,b as v}from"./entry/index-CMepwc5X-1716790511191.js";import{aF as B,b8 as C}from"./antd-BRjMhd0C.js";import{d as x,f as y,_ as I,a8 as k,a9 as h,k as w,u as l,a0 as _,ad as F}from"./vue-Bw3NQgLF.js";function G(a){return i.get({url:"/wechat/list",params:a})}function N(a,o){return i.postWithMsg({url:"/wechat/remove/"+a+"?password="+o})}function O(a){return i.postWithMsg({url:"/wechat/upload",data:a,headers:{"Content-Type":U.FORM_DATA}})}function V(a,o){return i.postWithMsg({url:"/wechat/changeStatus?password="+o,data:a})}function j(){return i.get({url:"/currentGroupImgBase64"})}const R={class:"ant-upload-drag-icon"},S=_("p",{class:"ant-upload-text"},"点击或者拖拽到此处上传文件",-1),E=x({name:"WechatUploadModal",__name:"UploadModal",emits:["register","reload"],setup(a,{emit:o}){const s=B.Dragger,d=o,t=y([]),[p,{modalLoading:u,closeModal:r}]=L(),e=v("authPassword","");function n(){return g(this,null,function*(){try{if(u(!0),t.value.length!==1){r();return}const c={password:e.value,file:l(t)[0].originFileObj};yield O(c),d("reload"),r()}catch(c){}finally{f(),u(!1)}})}function f(){t.value=[]}return(c,m)=>(I(),k(l(b),F(c.$attrs,{title:"上传微信群图片",onRegister:l(p),onOk:n,onCancel:f}),{default:h(()=>[w(l(s),{fileList:t.value,"onUpdate:fileList":m[0]||(m[0]=M=>t.value=M),maxCount:1,showUploadList:!0,beforeUpload:()=>!1,accept:"image/*"},{default:h(()=>[_("p",R,[w(l(C))]),S]),_:1},8,["fileList"])]),_:1},16,["onRegister"]))}});export{E as _,V as a,N as b,j as c,G as w};
