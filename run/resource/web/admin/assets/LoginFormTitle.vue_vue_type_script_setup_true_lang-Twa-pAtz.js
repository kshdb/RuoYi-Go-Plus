var w=Object.defineProperty;var h=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var v=(e,o,s)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,P=(e,o)=>{for(var s in o||(o={}))S.call(o,s)&&v(e,s,o[s]);if(h)for(var s of h(o))x.call(o,s)&&v(e,s,o[s]);return e};var p=(e,o,s)=>new Promise((t,r)=>{var u=n=>{try{m(s.next(n))}catch(g){r(g)}},_=n=>{try{m(s.throw(n))}catch(g){r(g)}},m=n=>n.done?t(n.value):Promise.resolve(n.value).then(u,_);m((s=s.apply(e,o)).next())});import{k as O}from"./entry/index-CMepwc5X-1716790511191.js";import"./componentMap-DPcekmXH.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./index-CMSTH4sS.js";import{c as b}from"./rules-Boel_RXz.js";import{f as E,c,u as l,d as C,_ as B,$ as G,a1 as j}from"./vue-Bw3NQgLF.js";var a=(e=>(e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e[e.RESET_PASSWORD=2]="RESET_PASSWORD",e[e.MOBILE=3]="MOBILE",e[e.QR_CODE=4]="QR_CODE",e))(a||{});const y=E(0);function L(){function e(t){y.value=t}const o=c(()=>y.value);function s(){e(0)}return{setLoginState:e,getLoginState:o,handleBackLogin:s}}function V(e){const o=c(()=>{var r;const t=l(e);return(r=t==null?void 0:t.validate)!=null?r:u=>Promise.resolve()});function s(){return p(this,null,function*(){const t=l(e);return t?yield t.validate():void 0})}return{validate:o,validForm:s}}function $(e){const{t:o}=O(),s=c(()=>F(o("sys.login.accountPlaceholder"))),t=c(()=>F(o("sys.login.passwordPlaceholder"))),r=c(()=>F(o("sys.login.smsPlaceholder"))),u=c(()=>F(o("sys.login.smsPlaceholder"))),_=c(()=>b("phone",!0)),m=(i,d)=>p(this,null,function*(){return d?Promise.resolve():Promise.reject(o("sys.login.policyPlaceholder"))}),n=i=>(d,R)=>p(this,null,function*(){return R?R!==i?Promise.reject(o("sys.login.diffPwd")):Promise.resolve():Promise.reject(o("sys.login.passwordPlaceholder"))});return{getFormRules:c(()=>{const i=l(s),d=l(t),R=l(u),I=l(_),T=l(r),f={sms:R,mobile:I};switch(l(y)){case 1:return P({account:i,password:d,confirmPassword:[{validator:n(e==null?void 0:e.password),trigger:"change"}],policy:[{validator:m,trigger:"change"}]},f);case 2:return P({account:i},f);case 3:return f;default:return{account:i,password:d,code:T}}})}}function F(e){return[{required:!0,message:e,trigger:"change"}]}const k={class:"mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"},z=C({__name:"LoginFormTitle",setup(e){const{t:o}=O(),{getLoginState:s}=L(),t=c(()=>({[a.RESET_PASSWORD]:o("sys.login.forgetFormTitle"),[a.LOGIN]:o("sys.login.signInFormTitle"),[a.REGISTER]:o("sys.login.signUpFormTitle"),[a.MOBILE]:o("sys.login.mobileSignInFormTitle"),[a.QR_CODE]:o("sys.login.qrSignInFormTitle")})[l(s)]);return(r,u)=>(B(),G("h2",k,j(t.value),1))}});export{a as L,z as _,$ as a,V as b,L as u};
