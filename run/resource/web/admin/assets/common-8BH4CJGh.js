var n=(t,o,a)=>new Promise((s,c)=>{var d=i=>{try{e(a.next(i))}catch(r){c(r)}},f=i=>{try{e(a.throw(i))}catch(r){c(r)}},e=i=>i.done?s(i.value):Promise.resolve(i.value).then(d,f);e((a=a.apply(t,o)).next())});import{aU as g}from"./entry/index-BbJQUQ84-1718268303552.js";function l(t){return n(this,null,function*(){const o=yield g(t);window.location.href=o})}const y=[{key:"1",source:"taobao",title:"淘宝",description:"绑定淘宝账号",avatar:"ri:taobao-fill",color:"#ff4000"},{key:"2",source:"alipay",title:"支付宝",description:"绑定支付宝账号",avatar:"fa-brands:alipay",color:"#2eabff"},{key:"3",source:"ding",title:"钉钉",description:"绑定钉钉账号",avatar:"ri:dingding-fill",color:"#2eabff"},{key:"4",source:"gitee",title:"GITEE",description:"绑定GITEE账号",avatar:"simple-icons:gitee",color:"#c71d23",action:()=>l("gitee")},{key:"5",source:"github",title:"GITHUB",description:"绑定GITHUB账号",avatar:"mdi:github",color:"gray",action:()=>l("github")}];export{y as a};