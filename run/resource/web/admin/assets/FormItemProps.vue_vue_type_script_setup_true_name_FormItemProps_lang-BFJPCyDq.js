import{a as b,c as _,d as h,e as C}from"./formItemPropsConfig-CDIdQY-I.js";import F from"./RuleProps-Ct_Yvhrf.js";import{a as U}from"./useFormDesignState-B-wP0Kck.js";import{ay as g,a8 as p,au as w,aw as x,a9 as q,A,ab as B,ba as D}from"./antd-BRjMhd0C.js";import{d as G,w as N,c as S,_ as a,$ as l,u as r,a8 as o,a9 as u,F as i,ab as v,aj as I,ad as f,ac as n,k,G as V,a1 as E,a2 as L}from"./vue-Bw3NQgLF.js";const j={class:"properties-content"},z={key:0,class:"properties-body"},M=G({__name:"FormItemProps",setup(R){const{formConfig:t}=U();N(()=>t.value,()=>{t.value.currentItem&&(t.value.currentItem.itemProps=t.value.currentItem.itemProps||{},t.value.currentItem.itemProps.labelCol=t.value.currentItem.itemProps.labelCol||{},t.value.currentItem.itemProps.wrapperCol=t.value.currentItem.itemProps.wrapperCol||{})},{deep:!0,immediate:!0});const m=c=>c&&D(c)?!c.includes(t.value.currentItem.component):!0,P=S(()=>b.filter(c=>m(c.exclude)));return(c,d)=>{var y;return a(),l("div",j,[(y=r(t).currentItem)!=null&&y.itemProps?(a(),l("div",z,[r(t).currentItem.key?(a(),o(r(B),{key:1,"label-align":"left",layout:"vertical"},{default:u(()=>[(a(!0),l(i,null,v(r(_),e=>(a(),l("div",{key:e.name},[m(e.exclude)?(a(),o(r(p),{key:0,label:e.label},{default:u(()=>[e.component?(a(),o(I(e.component),f({key:0,class:"component-props",ref_for:!0},e.componentProps,{value:r(t).currentItem[e.name],"onUpdate:value":s=>r(t).currentItem[e.name]=s}),null,16,["value","onUpdate:value"])):n("",!0)]),_:2},1032,["label"])):n("",!0)]))),128)),(a(!0),l(i,null,v(r(h),e=>(a(),l("div",{key:e.name},[m(e.exclude)?(a(),o(r(p),{key:0,label:e.label},{default:u(()=>[e.component?(a(),o(I(e.component),f({key:0,class:"component-props",ref_for:!0},e.componentProps,{value:r(t).currentItem.itemProps[e.name],"onUpdate:value":s=>r(t).currentItem.itemProps[e.name]=s}),null,16,["value","onUpdate:value"])):n("",!0)]),_:2},1032,["label"])):n("",!0)]))),128)),(a(!0),l(i,null,v(r(C),e=>(a(),l("div",{key:e.name},[m(e.exclude)?(a(),o(r(p),{key:0,label:e.label},{default:u(()=>[e.component?(a(),o(I(e.component),f({key:0,class:"component-props",ref_for:!0},e.componentProps,{value:r(t).currentItem.itemProps[e.name].span,"onUpdate:value":s=>r(t).currentItem.itemProps[e.name].span=s}),null,16,["value","onUpdate:value"])):n("",!0)]),_:2},1032,["label"])):n("",!0)]))),128)),P.value.length?(a(),o(r(p),{key:0,label:"控制属性"},{default:u(()=>[(a(!0),l(i,null,v(P.value,e=>(a(),o(r(w),{key:e.name},{default:u(()=>[k(r(x),{checked:r(t).currentItem.itemProps[e.name],"onUpdate:checked":s=>r(t).currentItem.itemProps[e.name]=s},{default:u(()=>[V(E(e.label),1)]),_:2},1032,["checked","onUpdate:checked"])]),_:2},1024))),128))]),_:1})):n("",!0),["Grid"].includes(r(t).currentItem.component)?n("",!0):(a(),o(r(p),{key:1,label:"是否必选"},{default:u(()=>[k(r(q),{checked:r(t).currentItem.itemProps.required,"onUpdate:checked":d[0]||(d[0]=e=>r(t).currentItem.itemProps.required=e)},null,8,["checked"]),r(t).currentItem.itemProps.required?(a(),o(r(A),{key:0,value:r(t).currentItem.itemProps.message,"onUpdate:value":d[1]||(d[1]=e=>r(t).currentItem.itemProps.message=e),placeholder:"请输入必选提示"},null,8,["value"])):n("",!0)]),_:1})),["Grid"].includes(r(t).currentItem.component)?n("",!0):(a(),o(r(p),{key:2,label:"校验规则",class:L({"form-rule-props":!!r(t).currentItem.itemProps.rules})},{default:u(()=>[k(F)]),_:1},8,["class"]))]),_:1})):(a(),o(r(g),{key:0,class:"hint-box",description:"未选择控件"}))])):n("",!0)])}}});export{M as _};
