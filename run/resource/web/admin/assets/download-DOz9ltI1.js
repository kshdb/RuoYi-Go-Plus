var l=(e,o,t)=>new Promise((a,s)=>{var i=r=>{try{n(t.next(r))}catch(c){s(c)}},d=r=>{try{n(t.throw(r))}catch(c){s(c)}},n=r=>r.done?a(r.value):Promise.resolve(r.value).then(i,d);n((t=t.apply(e,o)).next())});import{U as u}from"./entry/index-BbJQUQ84-1718268303552.js";import{u as w}from"./useLoading-D1in2ACg.js";const[f,m]=w({tip:"下载文件中..."});function L(e,o,t=!0){return l(this,null,function*(){try{f();const a=yield e();b(a,o,t)}finally{m()}})}function b(e,o,t=!0){let a=o;t&&(a=`${o}-${new Date().getTime()}.xlsx`),p(e,a)}function p(e,o,t,a){const s=[e],i=new Blob(s,{type:t||"application/octet-stream"}),d=window.URL.createObjectURL(i),n=document.createElement("a");n.style.display="none",n.href=d,n.setAttribute("download",o),typeof n.download=="undefined"&&n.setAttribute("target","_blank"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(d)}function x({url:e,target:o="_blank",fileName:t}){const a=window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1,s=window.navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(window.navigator.userAgent))return!1;if(a||s){const i=document.createElement("a");if(i.href=e,i.target=o,i.download!==void 0&&(i.download=t||e.substring(e.lastIndexOf("/")+1,e.length)),document.createEvent){const d=document.createEvent("MouseEvents");return d.initEvent("click",!0,!0),i.dispatchEvent(d),!0}}return e.indexOf("?")===-1&&(e+="?download"),u(e,{target:o}),!0}export{x as a,L as b,p as d};
