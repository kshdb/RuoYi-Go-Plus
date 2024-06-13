import"./componentMap-DPcekmXH.js";import"./entry/index-CMepwc5X-1716790511191.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./index-CMSTH4sS.js";import{c as t}from"./rules-Boel_RXz.js";import{n}from"./antd-BRjMhd0C.js";const s=[{title:"租户编号",dataIndex:"tenantId"},{title:"租户名称",dataIndex:"companyName"},{title:"联系人",dataIndex:"contactUserName"},{title:"联系电话",dataIndex:"contactPhone"},{title:"到期时间",dataIndex:"expireTime",customRender({value:e}){return e||"无期限"}},{title:"租户状态",dataIndex:"status"}],i=[{field:"tenantId",label:"租户编号",component:"Input"},{field:"companyName",label:"租户名称",component:"Input"},{field:"contactUserName",label:"联系人",component:"Input"},{field:"contactPhone",label:"联系电话",component:"Input"}],o=n(new Date).add(365,"days").startOf("day").format("YYYY-MM-DD HH:mm:ss"),u=[{field:"id",label:"id",component:"Input",show:!1},{field:"tenantId",label:"租户编号",component:"Input",show:!1},{field:"companyName",label:"企业名称",component:"Input",required:!0},{field:"contactUserName",label:"联系人",component:"Input",required:!0},{field:"contactPhone",label:"联系电话",component:"Input",rules:t("phone",!0)},{field:"username",label:"用户账号",component:"Input",required:!0,ifShow:({model:e})=>!e.tenantId},{field:"password",label:"用户密码",component:"InputPassword",required:!0,ifShow:({model:e})=>!e.tenantId},{field:"packageId",label:"租户套餐",component:"Select"},{field:"expireTime",label:"过期时间",helpMessage:["已经设置过期时间不允许重置为'无期限'","即在开通时未设置无期限 以后都不允许设置"],component:"DatePicker",defaultValue:o,componentProps:{showTime:!0,format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss"}},{field:"accountCount",label:"用户数量",component:"InputNumber",defaultValue:-1,helpMessage:"-1不限制用户数量",componentProps:{min:-1},renderComponentContent({model:e}){return{addonBefore:()=>e.accountCount==-1?"不限制数量":"输入数量"}}},{field:"domain",label:"绑定域名",component:"Input",helpMessage:["可填写域名/端口, 不需要http(s)://","填写域名如: www.test.com 或者 www.test.com:8080","填写ip:端口如: 127.0.0.1:8080"]},{field:"address",label:"企业地址",component:"Input"},{field:"licenseNumber",label:"企业代码",component:"Input"},{field:"intro",label:"企业介绍",component:"InputTextArea"},{field:"remark",label:"备注",component:"InputTextArea"},{field:"status",label:"状态",component:"Select",defaultValue:"0",show:!1}];export{s as c,i as f,u as m};
