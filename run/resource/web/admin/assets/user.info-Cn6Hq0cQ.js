import{D as u}from"./dictEnum-DeC8h6ZR.js";import{u as c}from"./useRender-D1Q3fAQ3.js";import{j as n}from"./entry/index-BbJQUQ84-1718268303552.js";import{A as i}from"./antd-DMGzOvrA.js";import{k as t,G as a,i as p}from"./vue-Cw15aJ-2.js";import"./index-Dx0uas1b.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./dict-vVDMuEaq.js";function m(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!p(e)}function d(e){return t("div",{class:"flex flex-row flex-wrap gap-0.5"},[e.map(r=>t(i,{key:r},m(r)?r:{default:()=>[r]}))])}const{renderDict:b}=c(),k=[{label:"用户ID",field:"userId"},{label:"用户状态",field:"status",render(e){return b(e,u.NORMAL_DISABLE)}},{label:"用户信息",field:"nickName",render(e,r){const{userName:l,nickName:s,deptName:f="暂无部门信息"}=r;let o=f;return r.dept&&r.dept.deptName&&(o=r.dept.deptName),`${l} / ${s} / ${o}`}},{label:"手机号",field:"phonenumber",render(e){return e||"未设置手机号码"}},{label:"邮箱",field:"email",render(e){return e||"未设置邮箱地址"}},{label:"岗位",field:"postNames",render(e){return Array.isArray(e)&&e.length===0?"暂无信息":d(e)}},{label:"权限",field:"roleNames",render(e){return Array.isArray(e)&&e.length===0?"暂无信息":d(e)}},{label:"创建时间",field:"createTime"},{label:"上次登录IP",field:"loginIp",render(e){return e||t("span",{class:"text-orange-500"},[a("从未登录过")])}},{label:"上次登录时间",field:"loginDate",render(e){if(!e)return t("span",{class:"text-orange-500"},[a("从未登录过")]);n.locale("zh-cn");const r=n(new Date).diff(n(e),"second"),l=n.duration(r,"seconds").humanize();return t("div",{class:"flex gap-2"},[e,t(i,{bordered:!1,color:"cyan"},{default:()=>[l,a("前")]})])}},{label:"备注",field:"remark",render(e){return e||"无"}}];export{k as descSchema};
