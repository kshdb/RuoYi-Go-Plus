import{u as s}from"./useECharts-zJE5eqwz.js";import{t as i,j as c}from"./entry/index-CMepwc5X-1716790511191.js";import{d as m,f as d,w as p,o as u,_ as f,$ as l}from"./vue-Bw3NQgLF.js";import"./antd-BRjMhd0C.js";const _=m({name:"CommandChart",props:{data:i.array.def([])},setup(t){const a=d(),{setOptions:o}=s(a);p(()=>t.data,()=>{a.value&&e(t.data)},{immediate:!0}),u(()=>{e(t.data)});function e(n){o({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"命令",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:n,animationEasing:"cubicInOut",animationDuration:1e3}]})}return{commandRef:a}}}),h={ref:"commandRef",class:"w-full h-100"};function C(t,a,o,e,n,r){return f(),l("div",h,null,512)}const g=c(_,[["render",C]]);export{g as default};