var H=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var E=(l,e,t)=>e in l?H(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,F=(l,e)=>{for(var t in e||(e={}))Q.call(e,t)&&E(l,t,e[t]);if(C)for(var t of C(e))W.call(e,t)&&E(l,t,e[t]);return l},B=(l,e)=>J(l,K(e));var p=(l,e,t)=>new Promise((d,v)=>{var I=c=>{try{g(t.next(c))}catch(f){v(f)}},_=c=>{try{g(t.throw(c))}catch(f){v(f)}},g=c=>c.done?d(c.value):Promise.resolve(c.value).then(I,_);g((t=t.apply(l,e)).next())});import{a as X}from"./componentMap-qA-f8iV4.js";import{u as Y,a as ee,b as ae,L as z,_ as te}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-CnUuUGo-.js";import{m as se,aE as ne,a as oe,_ as le,h as re}from"./entry/index-BbJQUQ84-1718268303552.js";import{s as ie}from"./captcha-BOwx-rNG.js";import{a8 as N,z as M,aq as ce,E as ue,B as O}from"./antd-DMGzOvrA.js";import{d as de,f as b,r as T,c as me,u as a,w as fe,Z as y,_ as R,k as o,a9 as i,a8 as U,F as ge,aa as pe,G as S,a0 as k,ab as V}from"./vue-Cw15aJ-2.js";const ve={key:0},x="000000",Le=de({__name:"MobileForm",setup(l){const e=N.Item,t=M.Option,{t:d}=se(),{handleBackLogin:v,getLoginState:I,setLoginState:_}=Y(),{getFormRules:g}=ee(),c=b(),f=b(!1),u=T({mobile:"15888888888",sms:"",tenantId:x}),{validForm:$,validate:D}=ae(c),L=me(()=>a(I)===z.MOBILE);fe(L,r=>p(this,null,function*(){r&&(m.loadSuccess||(yield q()))}));const m=T({tenantEnabled:!1,voList:[],loadSuccess:!1});function q(){return p(this,null,function*(){try{const r=yield ne(),{tenantEnabled:n,voList:s}=r;if(n){const Z=s.length?s[0].tenantId:x;u.tenantId=Z}Object.assign(m,r),m.loadSuccess=!0}catch(r){m.loadSuccess=!1}})}const A=oe(),{createMessage:w,notification:G}=re(),h=b(!1);function j(){return p(this,null,function*(){try{return yield D.value("mobile"),yield ie(u.mobile),w.success("发送短信验证码成功"),h.value=!0,!0}catch(r){return!1}})}function P(){return p(this,null,function*(){const r=yield $();if(r)try{f.value=!0;const n={phonenumber:r.mobile,smsCode:r.sms,grantType:"sms"};m.tenantEnabled?n.tenantId=u.tenantId:n.tenantId=x;const s=yield A.login(B(F({},n),{mode:"none"}));s&&G.success({message:d("sys.login.loginSuccessTitle"),description:`${d("sys.login.loginSuccessDesc")}: ${s.nickName}`,duration:3}),_(z.LOGIN)}catch(n){const s=n.message||d("sys.api.networkExceptionMsg");w.error(s)}finally{f.value=!1}})}return(r,n)=>L.value?(y(),R("div",ve,[o(te,{class:"enter-x"}),o(a(N),{name:"sms-login",class:"p-4 enter-x",model:u,rules:a(g),ref_key:"formRef",ref:c},{default:i(()=>[o(a(e),{class:"enter-x"},{default:i(()=>[o(a(ce),{message:"测试使用 并不会真的发送😅",type:"info"})]),_:1}),m.tenantEnabled?(y(),U(a(e),{key:0,name:"tenantId",class:"enter-x"},{default:i(()=>[o(a(M),{value:u.tenantId,"onUpdate:value":n[0]||(n[0]=s=>u.tenantId=s),size:"large"},{suffixIcon:i(()=>[o(le,{icon:"mdi:company"})]),default:i(()=>[(y(!0),R(ge,null,pe(m.voList,s=>(y(),U(a(t),{key:s.tenantId,value:s.tenantId},{default:i(()=>[S(k(s.companyName),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})):V("",!0),o(a(e),{name:"mobile",class:"enter-x"},{default:i(()=>[o(a(ue),{size:"large",value:u.mobile,"onUpdate:value":n[1]||(n[1]=s=>u.mobile=s),placeholder:a(d)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),o(a(e),{name:"sms",class:"enter-x"},{default:i(()=>[o(a(X),{size:"large",class:"fix-auto-fill",value:u.sms,"onUpdate:value":n[2]||(n[2]=s=>u.sms=s),sendCodeApi:j,placeholder:"1234为正确"},null,8,["value"])]),_:1}),o(a(e),{class:"enter-x"},{default:i(()=>[o(a(O),{type:"primary",size:"large",block:"",onClick:P,loading:f.value,disabled:!m.loadSuccess||!h.value},{default:i(()=>[S(k(a(d)("sys.login.loginButton")),1)]),_:1},8,["loading","disabled"]),o(a(O),{size:"large",block:"",class:"mt-4",onClick:a(v)},{default:i(()=>[S(k(a(d)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])):V("",!0)}});export{Le as _};
