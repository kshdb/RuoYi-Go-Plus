import{d as f}from"./vuedraggable.umd-BNYp9-k3.js";import g from"./LayoutItem-BvMLo7-v.js";import{a as h}from"./useFormDesignState-B-wP0Kck.js";import{ab as v,ay as _,f as C}from"./antd-BRjMhd0C.js";import{d as y,c as S,aa as r,_ as E,$ as F,m as I,A as b,k as s,a9 as c,a0 as D,al as A,am as k}from"./vue-Bw3NQgLF.js";import{j as V}from"./entry/index-CMepwc5X-1716790511191.js";import"./FormNode-C6x746ot.js";import"./FormNodeOperate-DQVuwNtR.js";import"./index-BJ-Z-Vuw.js";import"./index-CDSmCEJt.js";import"./formItemConfig-PNYTjfJQ.js";import"./componentMap-DPcekmXH.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./index-Rv_3g2e8.js";import"./index-CMSTH4sS.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./useSortable-CwI952Jx.js";import"./download-CYeVxFqw.js";import"./useLoading-iCq4GOHr.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./onMountedOrActivated-B2y-oH2N.js";const $=y({name:"FormComponentPanel",components:{LayoutItem:g,draggable:f,Form:v,Empty:_},emits:["handleSetSelectItem"],setup(o,{emit:a}){const{formConfig:e}=h(),i=({newIndex:t})=>{e.value.schemas=e.value.schemas||[];const m=e.value.schemas;m[t]=C(m[t]),a("handleSetSelectItem",m[t])},l=t=>{a("handleSetSelectItem",e.value.schemas[t.oldIndex])},p=S(()=>e.value.layout==="horizontal"?"Col":"div");return{addItem:i,handleDragStart:l,formConfig:e,layoutTag:p}}}),B={class:"form-panel v-form-container"},P={class:"draggable-box"};function L(o,a,e,i,l,p){const t=r("Empty"),m=r("LayoutItem"),d=r("draggable"),u=r("Form");return E(),F("div",B,[I(s(t,{class:"empty-text",description:"从左侧选择控件添加"},null,512),[[b,o.formConfig.schemas.length===0]]),s(u,A(k(o.formConfig)),{default:c(()=>[D("div",P,[s(d,{class:"list-main ant-row",group:"form-draggable","component-data":{name:"list",tag:"div",type:"transition-group"},ghostClass:"moving",animation:180,handle:".drag-move",modelValue:o.formConfig.schemas,"onUpdate:modelValue":a[0]||(a[0]=n=>o.formConfig.schemas=n),"item-key":"key",onAdd:o.addItem,onStart:o.handleDragStart},{item:c(({element:n})=>[s(m,{class:"drag-move",schema:n,data:o.formConfig,"current-item":o.formConfig.currentItem||{}},null,8,["schema","data","current-item"])]),_:1},8,["modelValue","onAdd","onStart"])])]),_:1},16)])}const eo=V($,[["render",L],["__scopeId","data-v-e8f4c48e"]]);export{eo as default};