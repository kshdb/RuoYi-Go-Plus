import{aw as e}from"./entry/index-CMepwc5X-1716790511191.js";function t(o){return e.get({url:"/workflow/model/list",params:o})}function r(o){return e.get({url:"/workflow/model/getInfo/"+o})}function f(o){return e.postWithMsg({url:"/workflow/model/save",data:o})}function n(o){return e.putWithMsg({url:"/workflow/model/update",data:o})}function u(o){return e.deleteWithMsg({url:`/workflow/model/${o}`})}function s(o){return e.postWithMsg({url:`/workflow/model/modelDeploy/${o}`})}function d(o){return e.get({url:`/workflow/model/export/zip/${o.join(",")}`,responseType:"blob"},{isTransformResponse:!1})}function w(o){return e.putWithMsg({url:"/workflow/model/editModelXml",data:o})}export{w as a,n as b,f as c,t as d,u as e,r as f,s as g,d as h};
