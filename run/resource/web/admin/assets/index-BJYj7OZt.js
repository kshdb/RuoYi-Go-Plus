import{aw as n}from"./entry/index-CMepwc5X-1716790511191.js";function r(t){return n.get({url:"/system/tenant/list",params:t})}function u(){return n.post({url:"/system/tenant/export",responseType:"blob"},{isTransformResponse:!1})}function o(t){return n.get({url:"/system/tenant/"+t})}function c(t){return n.postWithMsg({url:"/system/tenant",data:t},{encrypt:!0})}function i(t){return n.putWithMsg({url:"/system/tenant",data:t})}function p(t){return n.putWithMsg({url:"/system/tenant/changeStatus",data:t})}function f(t){return n.deleteWithMsg({url:"/system/tenant/"+t})}function g(t,e,s=!0){return n.get({url:"/system/tenant/syncTenantPackage",params:{tenantId:t,packageId:e}},{successMessageMode:s?"message":"none"})}export{i as a,c as b,r as c,u as d,f as e,p as f,g,o as t};
