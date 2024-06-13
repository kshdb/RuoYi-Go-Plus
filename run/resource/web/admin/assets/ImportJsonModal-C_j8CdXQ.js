var y=Object.defineProperty,I=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var C=(o,e,a)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,c=(o,e)=>{for(var a in e||(e={}))E.call(e,a)&&C(o,a,e[a]);if(h)for(var a of h(e))j.call(e,a)&&C(o,a,e[a]);return o},i=(o,e)=>I(o,M(e));import{a as F}from"./useFormDesignState-B-wP0Kck.js";import{a as U,g as k}from"./index-BJ-Z-Vuw.js";import{C as D,M as J}from"./index-BhefpKLc.js";import{h as S,j as g}from"./entry/index-CMepwc5X-1716790511191.js";import{aF as w,M as O}from"./antd-BRjMhd0C.js";import{d as B,r as N,I as $,aa as r,_ as x,a8 as T,a9 as n,k as l,G as u,a0 as b,a3 as V,a4 as A}from"./vue-Bw3NQgLF.js";import"./useWindowSizeFn-Ba6K9eqp.js";const K=B({name:"ImportJsonModal",components:{CodeEditor:D,Upload:w,Modal:O},setup(){const{createMessage:o}=S(),e=N({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "输入框",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=F(),p=()=>{e.visible=!1},m=()=>{e.visible=!0},d=()=>{try{const s=JSON.parse(e.json);s.schemas&&U(s.schemas,t=>{k(t)}),a.setFormConfig(i(c({},s),{activeKey:1,currentItem:{component:""}})),p(),o.success("导入成功")}catch(s){o.error("导入失败，数据格式不对")}};return i(c({handleImportJson:d,beforeUpload:s=>{const t=new FileReader;return t.readAsText(s),t.onload=function(){e.json=this.result,d()},!1},handleCancel:p,showModal:m},$(e)),{MODE:J})}}),L=o=>(V("data-v-1cfcb536"),o=o(),A(),o),R=L(()=>b("p",{class:"hint-box"},"导入格式如下:",-1)),z={class:"v-json-box"};function G(o,e,a,p,m,d){const f=r("CodeEditor"),s=r("a-button"),t=r("Upload"),_=r("Modal");return x(),T(_,{title:"JSON数据",open:o.visible,onOk:o.handleImportJson,onCancel:o.handleCancel,cancelText:"关闭",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(s,{onClick:o.handleCancel},{default:n(()=>[u("取消")]),_:1},8,["onClick"]),l(t,{class:"upload-button",beforeUpload:o.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(s,{type:"primary"},{default:n(()=>[u("导入json文件")]),_:1})]),_:1},8,["beforeUpload"]),l(s,{type:"primary",onClick:o.handleImportJson},{default:n(()=>[u("确定")]),_:1},8,["onClick"])]),default:n(()=>[R,b("div",z,[l(f,{value:o.json,"onUpdate:value":e[0]||(e[0]=v=>o.json=v),ref:"myEditor",mode:o.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["open","onOk","onCancel"])}const oo=g(K,[["render",G],["__scopeId","data-v-1cfcb536"]]);export{oo as default};
