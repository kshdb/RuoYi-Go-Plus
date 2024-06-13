import"./componentMap-DPcekmXH.js";import{I as t}from"./entry/index-CMepwc5X-1716790511191.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./index-CMSTH4sS.js";import{c as n}from"./rules-Boel_RXz.js";import{g as o}from"./dict-C9gNHjAh.js";import{D as e}from"./dictEnum-DeC8h6ZR.js";import{u as l}from"./useRender-C6p2srTi.js";const{renderDict:a}=l(),h=[{dataIndex:"userName",title:"点位编号"},{dataIndex:"nickName",title:"点位名称"},{dataIndex:"status",title:"运行状态",customRender({value:s}){return a(s,e.NORMAL_DISABLE)}}],S=[{field:"nickName",label:"点位编号",component:"Input",componentProps:{placeholder:"请输入点位编号"}},{field:"userName",label:"点位名称",component:"Input",componentProps:{placeholder:"请输入点位名称"}},{field:"status",label:"运行状态",component:"Select",componentProps:{placeholder:"请选择运行状态",options:o(e.NORMAL_DISABLE)}}],{renderIcon:r}=l(),P=[{label:"用户ID",field:"userId",component:"Input",show:!1},{label:"用户账号",field:"userName",component:"Input",required:!0},{label:"用户密码",field:"password",component:"StrengthMeter",componentProps:{placeholder:"输入密码, 长度5-20"},rules:[{required:!0,message:"输入密码, 长度5-20",min:5,max:20,trigger:"blur"}]},{label:"用户昵称",field:"nickName",component:"Input",required:!0},{label:"归属部门",field:"deptId",required:!0,component:"TreeSelect",helpMessage:["注意绑定的角色要带相应的部门权限, 否则无法正常登录"]},{label:"手机号",field:"phonenumber",component:"Input",rules:n("phone"),renderComponentContent(){return{addonBefore:()=>r(t.PHONE)}}},{label:"邮箱",field:"email",component:"Input",rules:n("email"),renderComponentContent(){return{addonBefore:()=>r(t.EMAIL)}}},{label:"用户性别",field:"sex",defaultValue:"0",component:"RadioButtonGroup",componentProps:{options:o(e.SYS_USER_SEX)},colProps:{span:12}},{label:"状态",field:"status",defaultValue:"0",component:"RadioButtonGroup",componentProps:{options:o(e.NORMAL_DISABLE)},colProps:{span:12}},{label:"岗位",field:"postIds",slot:"postIds"},{label:"角色",field:"roleIds",slot:"roleIds"},{label:"备注",field:"remark",component:"InputTextArea",componentProps:{rows:3}}],N=[{field:"userId",component:"Input",label:"用户ID",defaultValue:-1,required:!0,show:!1},{field:"password",component:"StrengthMeter",label:"新的密码",componentProps:{placeholder:"请输入新的密码, 密码长度为5 - 20"},rules:[{required:!0,min:5,max:20,message:"密码长度为5 - 20"}]}];export{h as c,P as d,N as r,S as s};