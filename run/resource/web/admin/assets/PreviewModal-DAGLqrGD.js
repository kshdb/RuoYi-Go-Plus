var C=(M,k,c)=>new Promise((x,i)=>{var p=l=>{try{s(c.next(l))}catch(v){i(v)}},u=l=>{try{s(c.throw(l))}catch(v){i(v)}},s=l=>l.done?x(l.value):Promise.resolve(l.value).then(p,u);s((c=c.apply(M,k)).next())});import{a as B,B as D}from"./index-BIkrAlj7.js";import{p as F}from"./index-CJ9RCuM1.js";import{M as n,C as S}from"./index-Dx0uas1b.js";import{c as V}from"./copyTextToClipboard-uEEWQikS.js";import{_ as j}from"./index-BcLdq1Bd.js";import{d as E,f,y as g,Z as q,a8 as A,a9 as O,$ as W,k as T,u as h,ac as $}from"./vue-Cw15aJ-2.js";import{l as H}from"./entry/index-BbJQUQ84-1718268303552.js";import"./antd-DMGzOvrA.js";import"./useWindowSizeFn-BKs0NEK5.js";const N={class:"h-full w-full flex flex-row gap-3"},X=E({name:"CodePreviewModal",__name:"PreviewModal",setup(M){const k=[{key:"java",value:"skill-icons:java-light"},{key:"xml",value:"tabler:file-type-xml"},{key:"sql",value:"carbon:sql"},{key:"ts",value:"skill-icons:typescript"},{key:"vue",value:"logos:vue"},{key:"folder",value:"flat-color-icons:folder"}];function c(e){const t="bx:file",a="flat-color-icons:folder";if(e.endsWith(".vm")){const o=e.slice(0,-3),y=k.find(d=>o.endsWith(d.key));return y?y.value:t}return a}function x(e){const t=[];for(const a of e){let o=t;const y=a.split("/");let d="";for(let r of y){r.endsWith(".vm")?(d+=r,r=r.slice(0,-3)):d+=r+"/";let _=o.find(b=>b.title===r);_||(_={children:[],title:r,key:d,icon:c(d)},o.push(_)),o=_.children}}return t}const i=f(),p=f([]),u=f("左侧选择进行预览"),s=f({}),l=f("代码预览"),[v,{modalLoading:w}]=B(e=>C(this,null,function*(){try{w(!0);const t=yield F(e);s.value=t;const a=x(Object.keys(t));p.value=a,g(()=>{var o;(o=i.value)==null||o.expandAll(!0)})}catch(t){}finally{w(!1)}}));function L(){V(u.value,"复制成功")}const m=f(n.HTML);function I(e){const a=[{type:".ts",mode:n.TYPESCRIPT},{type:".java",mode:n.JAVA},{type:".xml",mode:n.XML},{type:"sql",mode:n.SQL},{type:".vue",mode:n.VUE}].find(o=>e.includes(o.type));a?m.value=a.mode:m.value=n.HTML}function P(e){const[t=""]=e,a=s.value[t];a&&(I(t),u.value=a,l.value="代码预览: "+t.replace(".vm",""))}function R(){u.value="左侧选择进行预览",s.value={},p.value=[],l.value="代码预览",m.value=n.XML,g(()=>{var e;(e=i.value)==null||e.setSelectedKeys([])})}return(e,t)=>(q(),A(h(D),$(e.$attrs,{okText:"复制代码",title:l.value,canFullscreen:!1,defaultFullscreen:!0,onRegister:h(v),onOk:L,onCancel:R}),{default:O(()=>[W("div",N,[T(h(j),{class:"w-350px h-full",ref_key:"treeRef",ref:i,treeData:p.value,onSelect:P},null,8,["treeData"]),T(h(S),{class:"w-full h-full",value:u.value,mode:m.value,readonly:""},null,8,["value","mode"])])]),_:1},16,["title","onRegister"]))}}),le=H(X,[["__scopeId","data-v-7cb433c8"]]);export{le as default};
