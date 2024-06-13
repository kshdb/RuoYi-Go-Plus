var u=(e,c,o)=>new Promise((d,p)=>{var f=t=>{try{l(o.next(t))}catch(n){p(n)}},b=t=>{try{l(o.throw(t))}catch(n){p(n)}},l=t=>t.done?d(t.value):Promise.resolve(t.value).then(f,b);l((o=o.apply(e,c)).next())});import{u as N,_}from"./useForm-uR1ZVBCA.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./componentMap-DPcekmXH.js";import{m as w}from"./index-Bz-s2yf4.js";import{bp as v,bq as C,I}from"./entry/index-CMepwc5X-1716790511191.js";import{d as P,o as y,aa as S,_ as q,a8 as M,a9 as m,k as g,u as i,a0 as x,G as T,al as B,am as V}from"./vue-Bw3NQgLF.js";import{au as A,at as D}from"./antd-BRjMhd0C.js";const k=[{label:"基本信息",field:"Divider1",component:"Divider",colProps:{span:24}},{label:"表名称",field:"tableName",component:"Input",required:!0},{label:"表描述",field:"tableComment",component:"Input",required:!0},{label:"实体类名称",field:"className",component:"Input",required:!0},{label:"作者",field:"functionAuthor",component:"Input",required:!0},{label:"生成信息",field:"Divider2",component:"Divider",colProps:{span:24}},{label:"模板类型",field:"tplCategory",component:"Select",defaultValue:"crud",componentProps:{allowClear:!1,options:[{label:"单表(增删改查)",value:"crud"},{label:"树表(增删改查)",value:"tree"}]},required:!0},{label:"树编码字段",helpMessage:"树节点显示的编码字段名， 如: dept_id (相当于id)",field:"treeCode",component:"Select",componentProps:{allowClear:!1},required:!0,ifShow({values:e}){return e.tplCategory==="tree"}},{label:"树父编码字段",helpMessage:"树节点显示的父编码字段名， 如: parent_Id (相当于parentId)",field:"treeParentCode",component:"Select",componentProps:{allowClear:!1},required:!0,ifShow({model:e}){return e.tplCategory==="tree"}},{label:"树名称字段",helpMessage:"树节点的显示名称字段名， 如: dept_name (相当于label)",field:"treeName",component:"Select",componentProps:{allowClear:!1},required:!0,ifShow({model:e}){return e.tplCategory==="tree"}},{label:"生成包路径",field:"packageName",helpMessage:"生成在哪个java包下, 例如 com.ruoyi.system",component:"Input"},{label:"生成模块名",field:"moduleName",helpMessage:"可理解为子系统名，例如 system",component:"Input",required:!0},{label:"生成业务名",field:"businessName",helpMessage:"可理解为功能英文名，例如 user",component:"Input",required:!0},{label:"生成功能名",field:"functionName",helpMessage:"用作类描述，例如 用户",component:"Input",required:!0},{label:"上级菜单",field:"parentMenuId",defaultValue:0,component:"TreeSelect",componentProps:{allowClear:!1}},{label:"生成代码方式",field:"genType",helpMessage:"默认为zip压缩包下载, 也可以自定义生成路径",defaultValue:"0",component:"RadioButtonGroup",componentProps:{options:[{label:"zip压缩包",value:"0"},{label:"自定义路径",value:"1"}]}},{label:"代码生成路径",field:"genPath",component:"Input",defaultValue:"/",helpMessage:'输入绝对路径, 不支持"./"相对路径',ifShow({model:e}){return e.genType==="1"},rules:[{required:!0,message:"请输入合法的路径",pattern:/^(?:[a-zA-Z]:)?(?:\/|(?:\\|\/)[^\\\\/:*?"<>|\r\n]+)*(?:\\|\/)?$/,trigger:"blur"}]},{label:"备注",field:"remark",component:"InputTextArea",colProps:{span:24}}],j={class:"w-full flex justify-center"},K=P({name:"BaseSetting",__name:"BaseSetting",props:{value:{}},emits:["jumpto"],setup(e,{emit:c}){const o=e,d=c;function p(){return u(this,null,function*(){try{const a=yield n();d("jumpto",1,a)}catch(a){}})}y(()=>u(this,null,function*(){o.value!==void 0&&(yield t(o.value),yield f(),yield b())}));function f(){return u(this,null,function*(){const a=o.value.columns.map(r=>({label:r.columnName+" | "+r.columnComment,value:r.columnName}));yield h([{field:"treeCode",componentProps:{options:a}},{field:"treeParentCode",componentProps:{options:a}},{field:"treeName",componentProps:{options:a}}])})}function b(){return u(this,null,function*(){const a=yield w(),s=[{menuName:"根目录",menuId:0,fullName:"根目录",children:v(a,{id:"menuId",pid:"parentId"})}];C(s,"menuName"," / "),yield h({field:"parentMenuId",componentProps:{treeData:s,fieldNames:{label:"menuName",value:"menuId"},treeDefaultExpandAll:!1,treeNodeLabelProp:"fullName",treeLine:{showLeafIcon:!1},treeDefaultExpandedKeys:[0],listHeight:300}})})}const[l,{setFieldsValue:t,validate:n,updateSchema:h}]=N({labelAlign:"right",autoSubmitOnEnter:!0,labelWidth:150,schemas:k,baseColProps:{span:12},showActionButtonGroup:!1,showAdvancedButton:!1});return(a,r)=>{const s=S("a-button");return q(),M(i(D),{justify:"center"},{default:m(()=>[g(i(A),B(V({xs:24,sm:24,md:20,lg:16,xl:16})),{default:m(()=>[g(i(_),{onRegister:i(l)},{formFooter:m(()=>[x("div",j,[g(s,{type:"primary","post-icon":i(I).NEXT,onClick:p},{default:m(()=>[T("下一步")]),_:1},8,["post-icon"])])]),_:1},8,["onRegister"])]),_:1},16)]),_:1})}}});export{K as _};
