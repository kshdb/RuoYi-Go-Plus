import{d as C,c as g,_ as v,$ as m,k as l,a9 as a,u as e,G as o,m as x,A as U,ac as _,a8 as c}from"./vue-Bw3NQgLF.js";import{a as h}from"./useFormDesignState-B-wP0Kck.js";import{a8 as n,a6 as r,a5 as s,a4 as L,aI as y,au as f,aw as b,ab as w}from"./antd-BRjMhd0C.js";const G={class:"properties-content"},z={key:0},R=C({__name:"FormProps",setup(N){const{formConfig:t}=h();t.value=t.value||{labelCol:{span:24},wrapperCol:{span:24}};const k=p=>{p.target.value==="Grid"&&(t.value.layout="horizontal")},i=g(()=>t.value.labelLayout?Number(t.value.labelCol.span):0);return(p,u)=>(v(),m("div",G,[l(e(w),{class:"properties-body","label-align":"left",layout:"vertical"},{default:a(()=>[l(e(n),{label:"表单布局"},{default:a(()=>[l(e(r),{"button-style":"solid",value:e(t).layout,"onUpdate:value":u[0]||(u[0]=d=>e(t).layout=d)},{default:a(()=>[l(e(s),{value:"horizontal"},{default:a(()=>[o("水平")]),_:1}),l(e(s),{value:"vertical",disabled:e(t).labelLayout==="Grid"},{default:a(()=>[o(" 垂直 ")]),_:1},8,["disabled"]),l(e(s),{value:"inline",disabled:e(t).labelLayout==="Grid"},{default:a(()=>[o(" 行内 ")]),_:1},8,["disabled"])]),_:1},8,["value"])]),_:1}),l(e(n),{label:"标签布局"},{default:a(()=>[l(e(r),{buttonStyle:"solid",value:e(t).labelLayout,"onUpdate:value":u[1]||(u[1]=d=>e(t).labelLayout=d),onChange:k},{default:a(()=>[l(e(s),{value:"flex"},{default:a(()=>[o("固定")]),_:1}),l(e(s),{value:"Grid",disabled:e(t).layout!=="horizontal"},{default:a(()=>[o(" 栅格 ")]),_:1},8,["disabled"])]),_:1},8,["value"])]),_:1}),x(l(e(n),{label:"标签宽度（px）"},{default:a(()=>[l(e(L),{style:{width:"100%"},value:e(t).labelWidth,"onUpdate:value":u[2]||(u[2]=d=>e(t).labelWidth=d),min:0,step:1},null,8,["value"])]),_:1},512),[[U,e(t).labelLayout==="flex"]]),e(t).labelLayout==="Grid"?(v(),m("div",z,[l(e(n),{label:"labelCol"},{default:a(()=>[l(e(y),{value:i.value,"onUpdate:value":u[3]||(u[3]=d=>i.value=d),max:24},null,8,["value"])]),_:1}),l(e(n),{label:"wrapperCol"},{default:a(()=>[l(e(y),{value:i.value,"onUpdate:value":u[4]||(u[4]=d=>i.value=d),max:24},null,8,["value"])]),_:1}),l(e(n),{label:"标签对齐"},{default:a(()=>[l(e(r),{"button-style":"solid",value:e(t).labelAlign,"onUpdate:value":u[5]||(u[5]=d=>e(t).labelAlign=d)},{default:a(()=>[l(e(s),{value:"left"},{default:a(()=>[o("靠左")]),_:1}),l(e(s),{value:"right"},{default:a(()=>[o("靠右")]),_:1})]),_:1},8,["value"])]),_:1}),l(e(n),{label:"控件大小"},{default:a(()=>[l(e(r),{"button-style":"solid",value:e(t).size,"onUpdate:value":u[6]||(u[6]=d=>e(t).size=d)},{default:a(()=>[l(e(s),{value:"default"},{default:a(()=>[o("默认")]),_:1}),l(e(s),{value:"small"},{default:a(()=>[o("小")]),_:1}),l(e(s),{value:"large"},{default:a(()=>[o("大")]),_:1})]),_:1},8,["value"])]),_:1})])):_("",!0),l(e(n),{label:"表单属性"},{default:a(()=>[l(e(f),null,{default:a(()=>[e(t).layout=="horizontal"?(v(),c(e(b),{key:0,checked:e(t).colon,"onUpdate:checked":u[7]||(u[7]=d=>e(t).colon=d)},{default:a(()=>[o("label后面显示冒号")]),_:1},8,["checked"])):_("",!0)]),_:1}),l(e(f),null,{default:a(()=>[l(e(b),{checked:e(t).disabled,"onUpdate:checked":u[8]||(u[8]=d=>e(t).disabled=d)},{default:a(()=>[o("禁用")]),_:1},8,["checked"])]),_:1}),l(e(f),null,{default:a(()=>[l(e(b),{checked:e(t).hideRequiredMark,"onUpdate:checked":u[9]||(u[9]=d=>e(t).hideRequiredMark=d)},{default:a(()=>[o("隐藏必选标记")]),_:1},8,["checked"])]),_:1})]),_:1})]),_:1})]))}});export{R as _};
