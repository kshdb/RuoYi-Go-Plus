var d=(f,r,t)=>new Promise((u,a)=>{var l=e=>{try{s(t.next(e))}catch(o){a(o)}},i=e=>{try{s(t.throw(e))}catch(o){a(o)}},s=e=>e.done?u(e.value):Promise.resolve(e.value).then(l,i);s((t=t.apply(f,r)).next())});import{i as g,c as C}from"./entry/index-CMepwc5X-1716790511191.js";import{ae as _,y as b}from"./antd-BRjMhd0C.js";import{d as v,f as x,o as B,aa as G,_ as c,a8 as p,a9 as n,u as m,k as y,G as k}from"./vue-Bw3NQgLF.js";const T=v({__name:"GenResult",props:{success:{type:Boolean,default:!0},errMsg:{default:""}},emits:["jumpto"],setup(f,{emit:r}){const{closeCurrent:t}=g(),u=r,a=x(!0),l=C();function i(){return d(this,null,function*(){yield t(),l("/tool/gen")})}return B(()=>{a.value=!1}),(s,e)=>{const o=G("a-button");return c(),p(m(b),{loading:a.value},{default:n(()=>[s.success?(c(),p(m(_),{key:0,status:"success",title:"修改成功"},{extra:n(()=>[y(o,{type:"primary",onClick:i},{default:n(()=>[k(" 关闭 ")]),_:1})]),_:1})):(c(),p(m(_),{key:1,status:"error",title:"修改失败","sub-title":s.errMsg},{extra:n(()=>[y(o,{type:"primary",onClick:e[0]||(e[0]=M=>u("jumpto",0))},{default:n(()=>[k(" 返回重试 ")]),_:1})]),_:1},8,["sub-title"]))]),_:1},8,["loading"])}}});export{T as _};
