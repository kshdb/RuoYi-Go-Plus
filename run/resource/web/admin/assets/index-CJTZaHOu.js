import{aA as o}from"./entry/index-BbJQUQ84-1718268303552.js";function a(r){return o.get({url:"/workflow/formManage/list",params:r})}function n(){return o.get({url:"/workflow/formManage/list/selectList"})}function t(){return o.post({url:"/workflow/formManage/export",responseType:"blob"},{isTransformResponse:!1})}function f(r){return o.get({url:`/workflow/formManage/${r}`})}function s(r){return o.postWithMsg({url:"/workflow/formManage",data:r})}function u(r){return o.putWithMsg({url:"/workflow/formManage",data:r})}function w(r){return o.deleteWithMsg({url:`/workflow/formManage/${r.join(",")}`})}export{f as a,u as b,s as c,a as d,t as e,w as f,n as w};