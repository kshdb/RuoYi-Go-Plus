import{u as s}from"./useRender-D1Q3fAQ3.js";import{j as l}from"./entry/index-BbJQUQ84-1718268303552.js";import{D as p}from"./dictEnum-DeC8h6ZR.js";const r=[{label:"事假",value:"1"},{label:"调休",value:"2"},{label:"病假",value:"3"},{label:"婚假",value:"4"}],f=[{label:"请假天数",field:"startLeaveDays",component:"Input",componentProps:{placeholder:"输入天数"}},{label:"至",field:"endLeaveDays",component:"Input",componentProps:{placeholder:"输入天数"}}],{renderTag:o,renderDict:i}=s(),b=[{title:"请假类型",dataIndex:"leaveType",customRender({value:a}){var t;const e=((t=r.find(n=>n.value==a))==null?void 0:t.label)||"未知";return o(e,"blue")}},{title:"开始时间",dataIndex:"startDate"},{title:"结束时间",dataIndex:"startDate"},{title:"请假天数",dataIndex:"leaveDays",customRender({value:a}){return o(`${a}天`,"green")}},{title:"请假原因",dataIndex:"remark"},{title:"流程状态",dataIndex:"status",customRender({value:a}){return i(a,p.WF_BUSINESS_STATUS)}}],v=[{label:"id",field:"id",component:"Input",show:!1},{label:"请假类型",field:"leaveType",component:"Select",componentProps:{options:r,allowClear:!1},required:!0},{label:"请假时间",field:"dateTime",component:"RangePicker",required:!0,componentProps({formModel:a}){return{onChange(e){if(!e){a.leaveDays=void 0;return}const t=l(e[0]),d=l(e[1]).diff(t,"day");a.leaveDays=d},disabledDate(e){return e=e.add(1,"day"),e&&e<l().endOf("day")}}}},{label:"请假天数",field:"leaveDays",component:"InputNumber",componentProps:{disabled:!0,placeholder:"从日期选择器选择"}},{label:"请假原因",field:"remark",component:"InputTextArea",componentProps:{rows:3}}];export{b as c,f,r as l,v as m};