var y=Object.defineProperty,E=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var C=(o,e,a)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,c=(o,e)=>{for(var a in e||(e={}))M.call(e,a)&&C(o,a,e[a]);if(h)for(var a of h(e))U.call(e,a)&&C(o,a,e[a]);return o},i=(o,e)=>E(o,I(e));import{a as j}from"./useFormDesignState-DRetWqEf.js";import{a as k,g as D}from"./index-CI1L1GOb.js";import{C as F,M as J}from"./index-Dx0uas1b.js";import{h as S,l as g}from"./entry/index-BbJQUQ84-1718268303552.js";import{aE as w,M as O}from"./antd-DMGzOvrA.js";import{d as B,r as N,I as $,a7 as r,Z as x,a8 as T,a9 as n,k as l,G as u,$ as b,a2 as V,a3 as A}from"./vue-Cw15aJ-2.js";import"./useWindowSizeFn-BKs0NEK5.js";const K=B({name:"ImportJsonModal",components:{CodeEditor:F,Upload:w,Modal:O},setup(){const{createMessage:o}=S(),e=N({visible:!1,json:`{
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
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=j(),p=()=>{e.visible=!1},m=()=>{e.visible=!0},d=()=>{try{const s=JSON.parse(e.json);s.schemas&&k(s.schemas,t=>{D(t)}),a.setFormConfig(i(c({},s),{activeKey:1,currentItem:{component:""}})),p(),o.success("导入成功")}catch(s){o.error("导入失败，数据格式不对")}};return i(c({handleImportJson:d,beforeUpload:s=>{const t=new FileReader;return t.readAsText(s),t.onload=function(){e.json=this.result,d()},!1},handleCancel:p,showModal:m},$(e)),{MODE:J})}}),L=o=>(V("data-v-1cfcb536"),o=o(),A(),o),R=L(()=>b("p",{class:"hint-box"},"导入格式如下:",-1)),z={class:"v-json-box"};function G(o,e,a,p,m,d){const f=r("CodeEditor"),s=r("a-button"),t=r("Upload"),_=r("Modal");return x(),T(_,{title:"JSON数据",open:o.visible,onOk:o.handleImportJson,onCancel:o.handleCancel,cancelText:"关闭",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(s,{onClick:o.handleCancel},{default:n(()=>[u("取消")]),_:1},8,["onClick"]),l(t,{class:"upload-button",beforeUpload:o.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(s,{type:"primary"},{default:n(()=>[u("导入json文件")]),_:1})]),_:1},8,["beforeUpload"]),l(s,{type:"primary",onClick:o.handleImportJson},{default:n(()=>[u("确定")]),_:1},8,["onClick"])]),default:n(()=>[R,b("div",z,[l(f,{value:o.json,"onUpdate:value":e[0]||(e[0]=v=>o.json=v),ref:"myEditor",mode:o.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["open","onOk","onCancel"])}const oo=g(K,[["render",G],["__scopeId","data-v-1cfcb536"]]);export{oo as default};
