var I=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var n=(e,o,t)=>o in e?I(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,i=(e,o)=>{for(var t in o||(o={}))F.call(o,t)&&n(e,t,o[t]);if(a)for(var t of a(o))k.call(o,t)&&n(e,t,o[t]);return e},p=(e,o)=>g(e,C(o));import v from"./FormNodeOperate-BTzUMw5N.js";import{a as N}from"./useFormDesignState-DRetWqEf.js";import S from"./index-C0fvYitS.js";import{d as b,r as y,I as V,a7 as c,Z as $,_ as B,$ as f,k as l,a0 as O,a1 as _,B as D}from"./vue-Cw15aJ-2.js";import{l as w}from"./entry/index-BbJQUQ84-1718268303552.js";import"./index-CI1L1GOb.js";import"./antd-DMGzOvrA.js";import"./formItemConfig-CgstiCFe.js";import"./componentMap-qA-f8iV4.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./index-DCvxWw7W.js";import"./index-BIkrAlj7.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./useSortable-BTdBE9Oa.js";import"./download-DOz9ltI1.js";import"./useLoading-D1in2ACg.js";import"./copyTextToClipboard-uEEWQikS.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./style-CLEvKZSv.js";const M=b({name:"FormNode",components:{VFormItem:S,FormNodeOperate:v},props:{schema:{type:Object,required:!0}},setup(e){const{formConfig:o,formDesignMethods:t}=N(),r=y({}),m=()=>{t.handleSetSelectItem(e.schema)};return p(i({},V(r)),{handleSelectItem:m,formConfig:o})}}),j={class:"form-item-box"},q={class:"show-key-box"};function z(e,o,t,r,m,E){var s;const d=c("VFormItem"),h=c("FormNodeOperate");return $(),B("div",{class:_(["drag-move-box",{active:e.schema.key===((s=e.formConfig.currentItem)==null?void 0:s.key)}]),onClick:o[0]||(o[0]=D((...u)=>e.handleSelectItem&&e.handleSelectItem(...u),["stop"]))},[f("div",j,[l(d,{formConfig:e.formConfig,schema:e.schema},null,8,["formConfig","schema"])]),f("div",q,O(e.schema.label+(e.schema.field?"/"+e.schema.field:"")),1),l(h,{schema:e.schema,currentItem:e.formConfig.currentItem},null,8,["schema","currentItem"])],2)}const me=w(M,[["render",z]]);export{me as default};