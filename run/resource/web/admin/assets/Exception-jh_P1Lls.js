import{m as e,c as N,n as O,k as R,o as S,P as d}from"./entry/index-CMepwc5X-1716790511191.js";import{d as A,f as k,ao as G,c as f,u as s,k as r}from"./vue-Bw3NQgLF.js";import{B as P,ae as D}from"./antd-BRjMhd0C.js";const C="/admin/assets/no-data-BKo151DF.svg",h="/admin/assets/net-error-sXkbaH3y.svg",F=A({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=k(new Map),{query:p}=G(),o=N(),c=O(),{t}=R(),{prefixCls:E}=S("app-exception-page"),x=f(()=>{const{status:l}=p,{status:i}=n;return Number(l)||i}),_=f(()=>s(a).get(s(x))),T=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?T:u,handler:()=>n.full?o(d.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?T:u,handler:()=>n.full?o(d.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:C}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:h}),()=>{const{title:l,subTitle:i,btnText:b,icon:m,handler:g,status:y}=s(_)||{};return r(D,{class:E,status:y,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>b&&r(P,{type:"primary",onClick:g},{default:()=>b}),icon:()=>m?r("img",{src:m},null):null})}}});export{F as default};
