var J=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var B=(l,e,t)=>e in l?J(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,F=(l,e)=>{for(var t in e||(e={}))W.call(e,t)&&B(l,t,e[t]);if(C)for(var t of C(e))X.call(e,t)&&B(l,t,e[t]);return l},E=(l,e)=>K(l,Q(e));var p=(l,e,t)=>new Promise((d,v)=>{var I=c=>{try{g(t.next(c))}catch(f){v(f)}},b=c=>{try{g(t.throw(c))}catch(f){v(f)}},g=c=>c.done?d(c.value):Promise.resolve(c.value).then(I,b);g((t=t.apply(l,e)).next())});import{a as Y}from"./componentMap-DPcekmXH.js";import{u as Z,a as ee,b as ae,L as z,_ as te}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-Twa-pAtz.js";import{k as se,aB as ne,a as oe,_ as le,h as re}from"./entry/index-CMepwc5X-1716790511191.js";import{s as ie}from"./captcha-R_hS6ymY.js";import{ab as N,z as M,a1 as ce,A as ue,B as O}from"./antd-BRjMhd0C.js";import{d as de,f as _,r as T,c as me,u as a,w as fe,_ as y,$,k as o,a9 as i,a8 as R,F as ge,ab as pe,G as S,a1 as k,ac as U}from"./vue-Bw3NQgLF.js";const ve={key:0},x="000000",Le=de({__name:"MobileForm",setup(l){const e=N.Item,t=M.Option,{t:d}=se(),{handleBackLogin:v,getLoginState:I,setLoginState:b}=Z(),{getFormRules:g}=ee(),c=_(),f=_(!1),u=T({mobile:"15888888888",sms:"",tenantId:x}),{validForm:V,validate:A}=ae(c),L=me(()=>a(I)===z.MOBILE);fe(L,r=>p(this,null,function*(){r&&(m.loadSuccess||(yield D()))}));const m=T({tenantEnabled:!1,voList:[],loadSuccess:!1});function D(){return p(this,null,function*(){try{const r=yield ne(),{tenantEnabled:n,voList:s}=r;if(n){const H=s.length?s[0].tenantId:x;u.tenantId=H}Object.assign(m,r),m.loadSuccess=!0}catch(r){console.error("租户选择异常"),m.loadSuccess=!1}})}const G=oe(),{createMessage:w,notification:j}=re(),h=_(!1);function q(){return p(this,null,function*(){try{return yield A.value("mobile"),yield ie(u.mobile),w.success("发送短信验证码成功"),h.value=!0,!0}catch(r){return!1}})}function P(){return p(this,null,function*(){const r=yield V();if(r)try{f.value=!0;const n={phonenumber:r.mobile,smsCode:r.sms,grantType:"sms"};m.tenantEnabled?n.tenantId=u.tenantId:n.tenantId=x;const s=yield G.login(E(F({},n),{mode:"none"}));s&&j.success({message:d("sys.login.loginSuccessTitle"),description:`${d("sys.login.loginSuccessDesc")}: ${s.nickName}`,duration:3}),b(z.LOGIN)}catch(n){const s=n.message||d("sys.api.networkExceptionMsg");w.error(s)}finally{f.value=!1}})}return(r,n)=>L.value?(y(),$("div",ve,[o(te,{class:"enter-x"}),o(a(N),{name:"sms-login",class:"p-4 enter-x",model:u,rules:a(g),ref_key:"formRef",ref:c},{default:i(()=>[o(a(e),{class:"enter-x"},{default:i(()=>[o(a(ce),{message:"测试使用 并不会真的发送😅",type:"info"})]),_:1}),m.tenantEnabled?(y(),R(a(e),{key:0,name:"tenantId",class:"enter-x"},{default:i(()=>[o(a(M),{value:u.tenantId,"onUpdate:value":n[0]||(n[0]=s=>u.tenantId=s),size:"large"},{suffixIcon:i(()=>[o(le,{icon:"mdi:company"})]),default:i(()=>[(y(!0),$(ge,null,pe(m.voList,s=>(y(),R(a(t),{key:s.tenantId,value:s.tenantId},{default:i(()=>[S(k(s.companyName),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})):U("",!0),o(a(e),{name:"mobile",class:"enter-x"},{default:i(()=>[o(a(ue),{size:"large",value:u.mobile,"onUpdate:value":n[1]||(n[1]=s=>u.mobile=s),placeholder:a(d)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),o(a(e),{name:"sms",class:"enter-x"},{default:i(()=>[o(a(Y),{size:"large",class:"fix-auto-fill",value:u.sms,"onUpdate:value":n[2]||(n[2]=s=>u.sms=s),sendCodeApi:q,placeholder:"1234为正确"},null,8,["value"])]),_:1}),o(a(e),{class:"enter-x"},{default:i(()=>[o(a(O),{type:"primary",size:"large",block:"",onClick:P,loading:f.value,disabled:!m.loadSuccess||!h.value},{default:i(()=>[S(k(a(d)("sys.login.loginButton")),1)]),_:1},8,["loading","disabled"]),o(a(O),{size:"large",block:"",class:"mt-4",onClick:a(v)},{default:i(()=>[S(k(a(d)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])):U("",!0)}});export{Le as _};
