var p=(u,c,a)=>new Promise((n,r)=>{var d=e=>{try{i(a.next(e))}catch(l){r(l)}},o=e=>{try{i(a.throw(e))}catch(l){r(l)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(d,o);i((a=a.apply(u,c)).next())});import{a as h,B as b}from"./index-BIkrAlj7.js";import{u as T,_ as w}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./componentMap-qA-f8iV4.js";import{e as M,f as x,g as k}from"./dictType-DlPairOY.js";import{d as B,f as C,c as v,Z as F,a8 as N,a9 as R,k as A,u as s,ac as S}from"./vue-Cw15aJ-2.js";const O=[{title:"字典名称",dataIndex:"dictName"},{title:"字典类型",dataIndex:"dictType"},{title:"备注",dataIndex:"remark"},{title:"创建时间",dataIndex:"createTime"}],W=[{field:"dictName",label:"字典名称",component:"Input"},{field:"dictType",label:"字典类型",component:"Input"}],q=[{field:"dictId",label:"字典编号",component:"Input",show:!1},{label:"字典名称",field:"dictName",component:"Input",required:!0,helpMessage:"字典的名称"},{label:"字典类型",field:"dictType",component:"Input",required:!0,helpMessage:"使用英文/下划线命名, 如:sys_normal_disable"},{label:"备注",field:"remark",component:"InputTextArea"}],Z=B({name:"DictTypeModal",__name:"DictTypeModal",emits:["register","reload"],setup(u,{emit:c}){const a=c,n=C(!1),r=v(()=>n.value?"编辑字典类型":"新增字典类型"),[d,{modalLoading:o,closeModal:i}]=h(t=>p(this,null,function*(){o(!0);const{record:m,update:_}=t;if(n.value=_,_&&m){const g=yield M(m.dictId);yield l(g)}o(!1)})),[e,{setFieldsValue:l,resetForm:f,validate:I}]=T({labelWidth:100,name:"dict_type_modal",showActionButtonGroup:!1,baseColProps:{span:24},schemas:q});function y(){return p(this,null,function*(){try{o(!0);const t=yield I();s(n)?yield x(t):yield k(t),a("reload"),i(),yield f()}catch(t){}finally{o(!1)}})}return(t,m)=>(F(),N(s(b),S(t.$attrs,{title:r.value,onRegister:s(d),onOk:y,onCancel:s(f)}),{default:R(()=>[A(s(w),{onRegister:s(e)},null,8,["onRegister"])]),_:1},16,["title","onRegister","onCancel"]))}});export{Z as _,O as c,W as f};