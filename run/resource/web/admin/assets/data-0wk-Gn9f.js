import{u as s}from"./useRender-D1Q3fAQ3.js";import{D as m}from"./dictEnum-DeC8h6ZR.js";import{k as c,i as l}from"./vue-Cw15aJ-2.js";import{T as d}from"./antd-DMGzOvrA.js";import"./index-Dx0uas1b.js";import"./entry/index-BbJQUQ84-1718268303552.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./dict-vVDMuEaq.js";function u(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!l(e)}const{renderTag:o,renderDict:p}=s(),y=[{dataIndex:"processDefinitionName",title:"流程名称"},{dataIndex:"processDefinitionKey",title:"流程key"},{dataIndex:"name",title:"任务名称"},{dataIndex:"assigneeName",title:"办理人",customRender({record:e}){let t;if(e.assigneeName)return o(e.assigneeName);const{participantVo:n}=e;if(!n)return o("未选择","red");const{candidateName:i=[]}=n;if(i.length===1)return o(i[0]);const r=i.join(","),a=i[i.length-1];return c(d,{placement:"top",title:r},u(t=o(a))?t:{default:()=>[t]})}},{dataIndex:"businessStatus",title:"流程状态",customRender({value:e}){return p(e,m.WF_BUSINESS_STATUS)}},{dataIndex:"startTime",title:"创建时间",customRender({record:e}){const{createTime:t,startTime:n}=e;return t||n||""}}],D=[{field:"name",label:"流程名称",component:"Input"},{field:"key",label:"流程key",component:"Input"}];export{y as columns,D as schemas};