var f=(t,i,a)=>new Promise((l,o)=>{var d=e=>{try{c(a.next(e))}catch(n){o(n)}},m=e=>{try{c(a.throw(e))}catch(n){o(n)}},c=e=>e.done?l(e.value):Promise.resolve(e.value).then(d,m);c((a=a.apply(t,i)).next())});import{a as h,B as M}from"./index-BIkrAlj7.js";import{u as S,_ as v}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./componentMap-qA-f8iV4.js";import{aA as u}from"./entry/index-BbJQUQ84-1718268303552.js";import{d as B,f as w,Z as C,a8 as R,a9 as F,k as I,u as r,ac as $}from"./vue-Cw15aJ-2.js";function G(){return u.get({url:"/system/websocket/status"})}function A(t){return u.postWithMsg({url:"/system/websocket/send",data:{message:t}})}function K(t,i){return u.postWithMsg({url:`/system/websocket/send/${t}`,data:{message:i}})}function H(){return u.get({url:"/system/websocket/list"})}function N(t){return u.post({url:"/system/websocket/testEncrypt",data:{message:t}},{encrypt:!0,isTransformResponse:!1})}const O=B({__name:"SendMsgModal",emits:["register","reload"],setup(t,{emit:i}){const a=i,l=w(!0),o=w("发送全体消息"),[d,{modalLoading:m,closeModal:c}]=h(s=>f(this,null,function*(){const{type:p,nickname:k="",sessionKey:_=0}=s;p===1?(l.value=!1,o.value=`发送给${k}的消息`,y({sessionKey:_})):(l.value=!0,o.value="发送全体消息")})),[e,{resetForm:n,validate:g,setFieldsValue:y}]=S({labelWidth:100,showActionButtonGroup:!1,baseColProps:{span:24},schemas:[{field:"msg",component:"Input",label:"消息内容",required:!0},{field:"sessionKey",component:"Input",label:"消息内容",required:!1,show:!1}]});function b(){return f(this,null,function*(){try{m(!0);const s=yield g();r(l)?yield A(s.msg):yield K(s.sessionKey,s.msg),a("reload"),c(),yield n()}catch(s){}finally{m(!1)}})}return(s,p)=>(C(),R(r(M),$(s.$attrs,{width:500,title:o.value,onRegister:r(d),onOk:b,onCancel:r(n)}),{default:F(()=>[I(r(v),{onRegister:r(e)},null,8,["onRegister"])]),_:1},16,["title","onRegister","onCancel"]))}});export{O as _,G as a,N as t,H as w};