var k=(T,B,c)=>new Promise((w,i)=>{var g=l=>{try{p(c.next(l))}catch(v){i(v)}},u=l=>{try{p(c.throw(l))}catch(v){i(v)}},p=l=>l.done?w(l.value):Promise.resolve(l.value).then(g,u);p((c=c.apply(T,B)).next())});import{P as A}from"./index-DrfqwNLV.js";import{d as E,ao as O,f as L,o as P,c as j,aa as z,_ as a,a8 as x,a9 as o,k as f,G as h,a1 as r,u as s,$ as m,ab as N,a0 as n,ac as _,F as D}from"./vue-Bw3NQgLF.js";import{g as G}from"./index-CU-vYa55.js";import{d as K}from"./download-CYeVxFqw.js";import{o as M}from"./index-JVPtXpd4.js";import{i as U}from"./entry/index-CMepwc5X-1716790511191.js";import{u as W}from"./useLoading-iCq4GOHr.js";import{n as F}from"./common-BAk3Wc0g.js";import{B as q}from"./index-Cvdu3VMw.js";import{O as I,$ as J,a0 as Q,U as X,a1 as Y,R as Z}from"./antd-BRjMhd0C.js";import"./useContentViewHeight-xBSq9xFC.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./onMountedOrActivated-B2y-oH2N.js";import"./index-u_3lW7KD.js";const tt={class:"flex flex-row mb-3"},et={class:"font-bold"},at={class:"flex flex-row justify-between"},ot={id:"left",class:"flex gap-2 items-center"},st={class:"flex flex-col gap-5px"},nt={id:"right"},lt={key:0,class:"text-gray-500"},rt={key:1,class:"text-gray-500"},ct={key:0,class:"py-5px"},it={key:1,class:"flex flex-row items-center"},ut=n("div",null,"附件: ",-1),dt=n("div",{class:"mb-2"},null,-1),ft={key:1},Dt=E({__name:"index",setup(T){const c=O().params.id||"0",w=[{key:"tab1",tab:"审批记录"},{key:"tab2",tab:"流程图"}],i=L("tab1"),g=L(!0),u=L([]);P(()=>k(this,null,function*(){const e=yield G(c);u.value=e.historyRecordList,g.value=!1}));const p=j(()=>{if(!u.value.length)return{label:"未知",value:"unknown",color:"default"};const e=u.value[0];return F.find(b=>b.value===e.status)});function l(e){return F.find(d=>d.value===e.status)}function v(e){return e?e.length<=2?e:e.substring(e.length-2):""}const[R,S]=W({tip:"下载文件中..."});function V(e){return k(this,null,function*(){try{R();const d=yield M(e.contentId);K(d,e.name)}finally{S()}})}const{closeCurrent:H}=U();function $(){return k(this,null,function*(){yield H()})}return(e,d)=>{const b=z("a-button");return a(),x(s(A),{title:"审批记录",contentFullHeight:"",fixedHeight:""},{tags:o(()=>{var t;return[f(s(I),{color:(t=p.value)==null?void 0:t.color},{default:o(()=>{var y;return[h(r((y=p.value)==null?void 0:y.label),1)]}),_:1},8,["color"])]}),default:o(()=>[f(s(Z),{class:"w-full h-full",loading:g.value,"tab-list":w,"active-tab-key":i.value,onTabChange:d[0]||(d[0]=t=>i.value=t)},{tabBarExtraContent:o(()=>[f(b,{onClick:$},{default:o(()=>[h("关闭页面")]),_:1})]),default:o(()=>[u.value.length&&i.value==="tab1"?(a(),x(s(J),{key:0,class:"pt-8px h-[calc(100vh-300px)] overflow-y-scroll px-16px"},{default:o(()=>[(a(!0),m(D,null,N(u.value,t=>(a(),x(s(Q),{key:t.id,color:"blue"},{default:o(()=>{var y;return[n("div",tt,[n("span",et,r(t.name),1)]),n("div",at,[n("div",ot,[f(s(X),{size:40,style:{"background-color":"#fde3cf",color:"#f56a00"}},{default:o(()=>[h(r(v(t.nickName)),1)]),_:2},1024),n("div",st,[n("span",null,r(t.nickName),1),n("div",null,[f(s(I),{color:(y=l(t))==null?void 0:y.color},{default:o(()=>[h(r(t.statusName),1)]),_:2},1032,["color"])])])]),n("div",nt,[t.endTime?(a(),m("div",lt,"完成: "+r(t.endTime),1)):_("",!0),t.runDuration?(a(),m("div",rt,"耗时: "+r(t.runDuration),1)):_("",!0)])]),t.comment?(a(),m("div",ct,[f(s(Y),{message:t.comment,type:"info"},null,8,["message"])])):_("",!0),t.attachmentList?(a(),m("div",it,[ut,(a(!0),m(D,null,N(t.attachmentList,C=>(a(),x(b,{type:"link",key:C.id,onClick:mt=>V(C)},{default:o(()=>[h(r(C.name),1)]),_:2},1032,["onClick"]))),128))])):_("",!0),dt]}),_:2},1024))),128))]),_:1})):_("",!0),i.value==="tab2"?(a(),m("div",ft,[f(s(q),{instanceId:s(c)},null,8,["instanceId"])])):_("",!0)]),_:1},8,["loading","active-tab-key"])]),_:1})}}});export{Dt as default};