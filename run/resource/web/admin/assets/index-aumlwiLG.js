import{aw as t}from"./entry/index-CMepwc5X-1716790511191.js";import{d as s}from"./index-Rv_3g2e8.js";function o(){return t.get({url:"/system/user/profile"})}function n(e){return t.putWithMsg({url:"/system/user/profile",data:e})}function f(e){return t.put({url:"/system/user/profile/updatePwd",data:e},{encrypt:!0})}function p(e){let{file:r}=e;const{filename:u}=e;return!u&&r instanceof Blob&&(r=new File([r],`${s()}.png`)),t.uploadFile({url:"/system/user/profile/avatar",timeout:30*1e3},{file:r,name:"avatarfile",filename:u})}export{o as a,n as b,f as c,p as u};