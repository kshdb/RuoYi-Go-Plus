var r=(l,n,t)=>new Promise((o,a)=>{var c=e=>{try{i(t.next(e))}catch(s){a(s)}},p=e=>{try{i(t.throw(e))}catch(s){a(s)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(c,p);i((t=t.apply(l,n)).next())});import{u as m}from"./useECharts-TE-BkXVl.js";import{l as y}from"./api-C5dR7ucC.js";import{d,f,o as u,Z as g,_}from"./vue-Cw15aJ-2.js";const w=d({name:"LoginLine",__name:"loginLine",setup(l){const n=f(),{setOptions:t}=m(n);return u(()=>r(this,null,function*(){const o=yield y(),a={title:{text:"近一月登录量统计"},tooltip:{trigger:"axis"},legend:{},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!0},magicType:{type:["line","bar"]},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:o.date},yAxis:{type:"value"},series:[{name:"登录成功",type:"line",data:o.success,lineStyle:{color:"#3399CC"},itemStyle:{color:"#3399CC"}},{name:"登录失败",type:"line",data:o.fail,lineStyle:{color:"#CC6633"},itemStyle:{color:"#CC6633"}}]};t(a)})),(o,a)=>(g(),_("div",{ref_key:"loginLineRef",ref:n,class:"w-full h-180"},null,512))}});export{w as _};