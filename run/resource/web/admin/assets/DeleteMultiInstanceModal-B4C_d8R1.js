var i=(p,l,o)=>new Promise((r,t)=>{var c=e=>{try{a(o.next(e))}catch(n){t(n)}},m=e=>{try{a(o.throw(e))}catch(n){t(n)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(c,m);a((o=o.apply(p,l)).next())});import{a as M,B as y}from"./index-BIkrAlj7.js";import{i as h}from"./index-DH8S7RKQ.js";import{u as I,_ as b}from"./useTable-CNbfTOCZ.js";import"./index-DCvxWw7W.js";import{d as C,k as d,ac as D}from"./vue-Cw15aJ-2.js";import"./entry/index-BbJQUQ84-1718268303552.js";import"./antd-DMGzOvrA.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./useForm-BsovIqMX.js";import"./FormItem.vue_vue_type_script_lang-C67_1cA1.js";import"./componentMap-qA-f8iV4.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./copyTextToClipboard-uEEWQikS.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./style-CLEvKZSv.js";import"./helper-CXVLNTBN.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-BTdBE9Oa.js";import"./download-DOz9ltI1.js";import"./useLoading-D1in2ACg.js";const J=C({name:"DeleteMultiInstanceModal",emits:["selectDone","register"],setup(p,{attrs:l,emit:o}){const[r,{modalLoading:t,closeModal:c}]=M(m);function m(s){return i(this,null,function*(){t(!0);const w=yield h(s);e(w),t(!1)})}const[a,{setTableData:e,getSelectRows:n,setSelectedRowKeys:f}]=I({showIndexColumn:!0,showTableSetting:!1,pagination:!1,size:"small",canResize:!1,rowKey:"assignee",clickToRowSelect:!0,columns:[{title:"任务名称",dataIndex:"name"},{title:"办理人",dataIndex:"assigneeName"}],rowSelection:{type:"checkbox"}});function g(){return i(this,null,function*(){try{t(!0);const s=n();if(!s.length)return;u(),o("selectDone",s)}catch(s){}finally{t(!1)}})}function u(){return i(this,null,function*(){c(),f([])})}return()=>d(y,D(l,{title:"减签人员",width:600,onRegister:r,onOk:g,onCancel:u}),{default:()=>[d(b,{onRegister:a},null)]})}});export{J as default};
