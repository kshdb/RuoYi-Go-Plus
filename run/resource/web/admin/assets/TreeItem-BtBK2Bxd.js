import{bB as a}from"./entry/index-BbJQUQ84-1718268303552.js";import{A as n}from"./antd-DMGzOvrA.js";import{d as u,c as l,k as r}from"./vue-Cw15aJ-2.js";const s=u({name:"TreeItem",props:{data:{type:Object,required:!0}},setup(e){const o=l(()=>{if(a(e.data.path))return{text:"外链",color:"pink"};const t=e.data.menuType;return t==="M"?{text:"目录",color:"green"}:t==="C"?{text:"菜单",color:"blue"}:t==="F"?{text:"按钮",color:""}:{text:"未知",color:"error"}});return()=>r("div",{class:"flex gap-6px"},[r("span",null,[e.data.menuName]),r(n,{color:o.value.color},{default:()=>[o.value.text]})])}});export{s as default};
