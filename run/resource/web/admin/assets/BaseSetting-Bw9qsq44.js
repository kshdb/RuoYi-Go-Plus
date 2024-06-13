var U=Object.defineProperty,G=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var F=(e,o,t)=>o in e?U(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,k=(e,o)=>{for(var t in o||(o={}))$.call(o,t)&&F(e,t,o[t]);if(A)for(var t of A(o))V.call(o,t)&&F(e,t,o[t]);return e},B=(e,o)=>G(e,T(o));var c=(e,o,t)=>new Promise((p,m)=>{var f=a=>{try{u(t.next(a))}catch(r){m(r)}},d=a=>{try{u(t.throw(a))}catch(r){m(r)}},u=a=>a.done?p(a.value):Promise.resolve(a.value).then(f,d);u((t=t.apply(e,o)).next())});import{_ as L,u as q}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import{C as E}from"./componentMap-qA-f8iV4.js";import{D as M}from"./index-BVlzXcPd.js";import{a as j,h as O,l as W}from"./entry/index-BbJQUQ84-1718268303552.js";import{u as Z}from"./useLoading-D1in2ACg.js";import"./helper-CXVLNTBN.js";import"./index-BIkrAlj7.js";import{c as I}from"./rules-Boel_RXz.js";import{u as z,a as H,b as J}from"./index-D5-lyr0E.js";import{ar as K,as as Q,R as X,T as Y,y as x}from"./antd-DMGzOvrA.js";import{u as ee}from"./useDescription-DLkhA-M6.js";import{d as oe,f as te,o as ae,c as ne,a7 as l,Z as w,a8 as y,a9 as s,k as n,$ as D,ab as N,m as h,A as v,G as re}from"./vue-Cw15aJ-2.js";import"./FormItem.vue_vue_type_script_lang-C67_1cA1.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./index-DCvxWw7W.js";import"./useSortable-BTdBE9Oa.js";import"./download-DOz9ltI1.js";import"./copyTextToClipboard-uEEWQikS.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./style-CLEvKZSv.js";import"./useWindowSizeFn-BKs0NEK5.js";const se=[{field:"userId",component:"Input",required:!0,label:"用户ID",show:!1},{field:"nickName",component:"Input",required:!0,label:"昵称",colProps:{span:18}},{field:"email",component:"Input",rules:I("email",!0),label:"邮箱",colProps:{span:18}},{field:"phonenumber",component:"Input",rules:I("phone",!0),label:"联系电话",colProps:{span:18}},{field:"sex",component:"RadioButtonGroup",componentProps:{options:[{label:"男",value:"0"},{label:"女",value:"1"}]},label:"性别",colProps:{span:18}}],ie=[{label:"账号",field:"userName"},{label:"手机号码",field:"phonenumber",render(e){return e||"暂未设置手机号"}},{label:"邮箱",field:"email",render(e){return e||"暂未设置邮箱"}},{label:"部门",field:"deptName",render(e,o){if(o){const t=o.postGroup||"暂无岗位信息";let p=o.deptName||"暂无部门信息";return o.dept&&o.dept.deptName&&(p=o.dept.deptName),p+" / "+t}return""}},{label:"角色",field:"roleGroup"},{label:"登录IP",field:"loginIp"},{label:"上次登录时间",field:"loginDate"}],le=oe({components:{BasicForm:L,ARow:K,ACol:Q,ACard:X,CropperAvatar:E,Tooltip:Y,Description:M,Skeleton:x},setup(){const e=te(!0),{createConfirm:o}=O(),t=j(),[p,{setFieldsValue:m,validate:f}]=q({labelWidth:100,schemas:se,showActionButtonGroup:!1}),[d,{setDescProps:u}]=ee({schema:ie,column:1});function a(){return c(this,null,function*(){const{user:i,postGroup:S,roleGroup:P}=yield H(),R=B(k({},i),{postGroup:S,roleGroup:P});u({data:R}),yield m(i)})}ae(()=>c(this,null,function*(){yield a(),e.value=!1}));const r=ne(()=>{const{avatar:i}=t.getUserInfo;return i});function _(){return c(this,null,function*(){yield t.getUserInfoAction(),yield a()})}const[g,b]=Z({tip:"加载中..."});function C(){return c(this,null,function*(){try{const i=yield f();g(),o({title:"提示",iconType:"info",content:"是否更新个人基本信息",onOk:()=>c(this,null,function*(){yield J(i),yield _()})})}catch(i){}finally{b()}})}return{loading:e,avatar:r,register:p,updateUserInfo:_,userUpdateAvatar:z,handleSubmit:C,registerDescription:d}}}),pe={class:"change-avatar"},ue={class:"btn-submit"};function ce(e,o,t,p,m,f){const d=l("CropperAvatar"),u=l("Tooltip"),a=l("Skeleton"),r=l("a-col"),_=l("Description"),g=l("a-row"),b=l("ACard"),C=l("BasicForm"),i=l("a-button");return w(),y(g,{gutter:[24,15],class:"pr-2 pb-3"},{default:s(()=>[n(r,{xs:24,sm:24,md:12,lg:12},{default:s(()=>[n(b,{ref:"leftCardRef"},{default:s(()=>[D("div",pe,[n(g,{gutter:[0,20]},{default:s(()=>[n(r,{span:24,style:{display:"flex","justify-content":"center"}},{default:s(()=>[e.loading?N("",!0):(w(),y(u,{key:0,title:"点击上传头像"},{default:s(()=>[n(d,{uploadApi:e.userUpdateAvatar,value:e.avatar,showBtn:!1,onChange:e.updateUserInfo,width:"150"},null,8,["uploadApi","value","onChange"])]),_:1})),e.loading?(w(),y(a,{key:1,active:""})):N("",!0)]),_:1}),n(r,{span:24},{default:s(()=>[h(n(_,{onRegister:e.registerDescription},null,8,["onRegister"]),[[v,!e.loading]]),h(n(a,{active:""},null,512),[[v,e.loading]])]),_:1})]),_:1})])]),_:1},512)]),_:1}),n(r,{xs:24,sm:24,md:12,lg:12},{default:s(()=>[h(n(b,{style:{height:"464px"}},{default:s(()=>[n(C,{onRegister:e.register},null,8,["onRegister"]),D("div",ue,[n(i,{ghost:"",type:"primary","pre-icon":"icon-park-outline:update-rotation",onClick:e.handleSubmit},{default:s(()=>[re(" 更新基本信息 ")]),_:1},8,["onClick"])])]),_:1},512),[[v,!e.loading]]),h(n(a,{active:""},null,512),[[v,e.loading]])]),_:1})]),_:1})}const Te=W(le,[["render",ce],["__scopeId","data-v-b29a734b"]]);export{Te as default};
