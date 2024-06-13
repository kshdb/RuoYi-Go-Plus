var d=(o,s,n)=>new Promise((i,c)=>{var u=t=>{try{r(n.next(t))}catch(m){c(m)}},p=t=>{try{r(n.throw(t))}catch(m){c(m)}},r=t=>t.done?i(t.value):Promise.resolve(t.value).then(u,p);r((n=n.apply(o,s)).next())});import{a as P,B as y}from"./index-BIkrAlj7.js";import{u as B,_ as I}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./componentMap-qA-f8iV4.js";import{u as _}from"./useRender-D1Q3fAQ3.js";import{f as L,b as k,c as C}from"./index-CnJarzSv.js";import{a as D}from"./index-C0XwB-DV.js";import{bw as S,bx as T}from"./entry/index-BbJQUQ84-1718268303552.js";import{d as v,f as F,c as R,Z as A,a8 as E,a9 as $,k as U,u as l,ac as V}from"./vue-Cw15aJ-2.js";const{renderTag:q}=_(),ee=[{dataIndex:"name",title:"模型名称"},{dataIndex:"key",title:"模型key"},{dataIndex:"version",title:"版本号",customRender({value:o}){return q(`V${o}.0`,"blue")}},{dataIndex:"metaInfo",title:"备注"},{dataIndex:"createTime",title:"创建时间"},{dataIndex:"lastUpdateTime",title:"更新时间"}],te=[{field:"name",label:"模型名称",component:"Input"},{field:"key",label:"模型key",component:"Input"}],X=[{label:"id",field:"id",component:"Input",show:!1},{label:"xml",field:"xml",component:"Input",show:!1},{label:"流程分类",field:"categoryCode",component:"TreeSelect",required:!0,defaultValue:"ALL"},{label:"模型名称",field:"name",component:"Input",required:!0,componentProps:{showCount:!0,maxlength:20}},{label:"模型key",field:"key",component:"Input",required:!0,componentProps:{showCount:!0,maxlength:20}},{label:"备注",field:"description",component:"InputTextArea",componentProps:{rows:3,showCount:!0,maxlength:200}}];function O(o,s){return`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" targetNamespace="http://www.flowable.org/processdef">
  <process id="${s}" name="${o}">
    <startEvent id="startNode1" name="开始" />
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_flow">
    <bpmndi:BPMNPlane id="BPMNPlane_flow" bpmnElement="T-2d89e7a3-ba79-4abd-9f64-ea59621c258c">
      <bpmndi:BPMNShape id="BPMNShape_startNode1" bpmnElement="startNode1" bioc:stroke="">
        <omgdc:Bounds x="240" y="200" width="30" height="30" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="242" y="237" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>`}const ae=v({name:"ModelModal",__name:"ModelModal",emits:["register","reload"],setup(o,{emit:s}){const n=s,i=F(!1),c=R(()=>i.value?"编辑模型":"新增模型"),[u,{modalLoading:p,closeModal:r}]=P(e=>d(this,null,function*(){const{id:a,update:g}=e;if(i.value=g,g){const N=yield L(a);yield t(!0),yield x(N)}else yield t(!1);yield m()}));function t(e){return d(this,null,function*(){yield w([{field:"name",componentProps:{disabled:e}},{field:"key",componentProps:{disabled:e}}])})}function m(){return d(this,null,function*(){const e=yield D();let a=S(e,{id:"id",pid:"parentId"});a=[{categoryName:"根目录",categoryCode:"ALL",id:0,children:a}],T(a,"categoryName"," / "),yield w({field:"categoryCode",componentProps:{treeData:a,treeLine:{showLeafIcon:!1},fieldNames:{label:"categoryName",value:"categoryCode"},treeDefaultExpandAll:!0,treeNodeLabelProp:"fullName"}})})}const[h,{resetForm:f,validate:b,updateSchema:w,setFieldsValue:x}]=B({labelWidth:100,name:"model_modal",showActionButtonGroup:!1,schemas:X,baseColProps:{span:24}});function M(){return d(this,null,function*(){try{p(!0);const e=yield b();l(i)?yield k(e):(e.xml=O(e.name,e.key),yield C(e)),n("reload"),r(),yield f()}catch(e){}finally{p(!1)}})}return(e,a)=>(A(),E(l(y),V(e.$attrs,{title:c.value,width:600,"min-height":350,onRegister:l(u),onOk:M,onCancel:l(f)}),{default:$(()=>[U(l(I),{onRegister:l(h)},null,8,["onRegister"])]),_:1},16,["title","onRegister","onCancel"]))}});export{ae as _,ee as c,te as s};