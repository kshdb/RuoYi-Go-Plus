var d=(p,m,o)=>new Promise((l,c)=>{var u=a=>{try{s(o.next(a))}catch(i){c(i)}},r=a=>{try{s(o.throw(a))}catch(i){c(i)}},s=a=>a.done?l(a.value):Promise.resolve(a.value).then(u,r);s((o=o.apply(p,m)).next())});import{a as N,B as _}from"./index-BIkrAlj7.js";import{u as C,_ as x}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./componentMap-qA-f8iV4.js";import{c as M,a as S,b as v,d as B}from"./index-C0XwB-DV.js";import{bw as F,bx as L}from"./entry/index-BbJQUQ84-1718268303552.js";import{d as k,f as q,c as P,Z as R,a8 as T,a9 as A,k as V,u as n,ac as D}from"./vue-Cw15aJ-2.js";const H=[{dataIndex:"categoryName",title:"分类名称"},{dataIndex:"categoryCode",title:"分类编码"},{dataIndex:"sortNum",title:"排序"}],J=[{field:"categoryName",label:"分类名称",component:"Input"},{field:"categoryCode",label:"分类编码",component:"Input"}],U=[{field:"id",label:"id",component:"Input",show:!1},{field:"parentId",label:"父级分类",required:!0,defaultValue:0,component:"TreeSelect"},{field:"categoryName",label:"分类名称",component:"Input",required:!0},{field:"categoryCode",label:"分类编码",component:"Input",required:!0},{field:"sortNum",label:"排序",component:"InputNumber",required:!1}],K=k({name:"CategoryModal",__name:"CategoryModal",emits:["register","reload"],setup(p,{emit:m}){const o=m,l=q(!1),c=P(()=>l.value?"编辑流程分类":"新增流程分类"),[u,{modalLoading:r,closeModal:s}]=N(t=>d(this,null,function*(){r(!0);const{id:e,update:y}=t;if(l.value=y,y&&e){const w=yield M(e);yield f(w)}else yield f({parentId:e!=null?e:0});yield a(),r(!1)}));function a(){return d(this,null,function*(){const t=yield S();let e=F(t,{id:"id",pid:"parentId"});e=[{categoryName:"根目录",id:0,children:e}],L(e,"categoryName"," / "),yield I({field:"parentId",componentProps:{treeData:e,treeLine:{showLeafIcon:!1},fieldNames:{label:"categoryName",value:"id"},treeDefaultExpandAll:!0,treeNodeLabelProp:"fullName"}})})}const[i,{updateSchema:I,setFieldsValue:f,resetForm:g,validate:b}]=C({labelWidth:100,name:"category_modal",showActionButtonGroup:!1,schemas:U,baseColProps:{span:24}});function h(){return d(this,null,function*(){try{r(!0);const t=yield b();n(l)?yield v(t):yield B(t),o("reload"),s(),yield g()}catch(t){}finally{r(!1)}})}return(t,e)=>(R(),T(n(_),D(t.$attrs,{title:c.value,width:600,"min-height":350,onRegister:n(u),onOk:h,onCancel:n(g)}),{default:A(()=>[V(n(x),{onRegister:n(i)},null,8,["onRegister"])]),_:1},16,["title","onRegister","onCancel"]))}});export{K as _,H as c,J as f};
