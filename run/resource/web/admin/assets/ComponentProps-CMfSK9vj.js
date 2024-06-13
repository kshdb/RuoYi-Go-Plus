var R=(e,r,n)=>new Promise((c,I)=>{var P=p=>{try{t(n.next(p))}catch(m){I(m)}},o=p=>{try{t(n.throw(p))}catch(m){I(m)}},t=p=>p.done?c(p.value):Promise.resolve(p.value).then(P,o);t((n=n.apply(e,r)).next())});import{_ as w}from"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import{a as G}from"./useFormDesignState-DRetWqEf.js";import V from"./FormOptions-C-GOUz-V.js";import{a as D,c as E}from"./index-CI1L1GOb.js";import{ax as B,E as O,a8 as U,a5 as z,a6 as L,av as $,z as H,a1 as W,a3 as Z,as as j,ar as q}from"./antd-DMGzOvrA.js";import{d as J,f as K,w as y,c as S,a7 as f,Z as a,_ as u,a8 as s,ab as b,k as v,a9 as i,F as C,aa as N,ai as M,ac as Y,G as Q,a0 as X}from"./vue-Cw15aJ-2.js";import{l as ee}from"./entry/index-BbJQUQ84-1718268303552.js";const oe=[{name:"disabled",label:"禁用"},{name:"autofocus",label:"自动获取焦点",includes:["Input","Select","InputTextArea","InputNumber","DatePicker","RangePicker","MonthPicker","TimePicker","Cascader","TreeSelect","Switch","AutoComplete","Slider"]},{name:"allowClear",label:"可清除",includes:["Input","Select","InputTextArea","InputNumber","DatePicker","RangePicker","MonthPicker","TimePicker","Cascader","TreeSelect","AutoComplete"]},{name:"fullscreen",label:"全屏",includes:["Calendar"]},{name:"showSearch",label:"可搜索",includes:["Select","TreeSelect","Cascader","Transfer"]},{name:"showTime",label:"显示时间",includes:["DatePicker","RangePicker","MonthPicker"]},{name:"range",label:"双向滑动",includes:[]},{name:"allowHalf",label:"允许半选",includes:["Rate"]},{name:"multiple",label:"多选",includes:["Select","TreeSelect","Upload"]},{name:"directory",label:"文件夹",includes:["Upload"]},{name:"withCredentials",label:"携带cookie",includes:["Upload"]},{name:"bordered",label:"是否有边框",includes:["Select","Input"]},{name:"defaultActiveFirstOption",label:"高亮第一个选项",component:"Checkbox",includes:["Select","AutoComplete"]},{name:"dropdownMatchSelectWidth",label:"下拉菜单和选择器同宽",component:"Checkbox",includes:["Select","TreeSelect","AutoComplete"]}],ne=[{name:"size",label:"尺寸",component:"RadioGroup",componentProps:{options:[{label:"默认",value:"default"},{label:"大",value:"large"},{label:"小",value:"small"}]},includes:["InputNumber","Input","Cascader","Button"]},{name:"placeholder",label:"占位符",component:"Input",componentProps:{placeholder:"请输入占位符"},includes:["AutoComplete","InputTextArea","InputNumber","Input","InputTextArea","Select","DatePicker","MonthPicker","TimePicker","TreeSelect","Cascader"]},{name:"style",label:"样式",component:"Input",componentProps:{placeholder:"请输入样式"}},{name:"open",label:"一直展开下拉菜单",component:"RadioGroup",componentProps:{options:[{label:"默认",value:void 0},{label:"是",value:!0},{label:"否",value:!1}]},includes:["Select","AutoComplete"]}],d={AutoComplete:[{name:"backfill",label:"自动回填",component:"Switch",componentProps:{span:8}},{name:"defaultOpen",label:"是否默认展开下拉菜单",component:"Checkbox"}],IconPicker:[{name:"mode",label:"模式",component:"RadioGroup",componentProps:{options:[{label:"ICONIFY",value:null},{label:"SVG",value:"svg"}]}}],Input:[{name:"type",label:"类型",component:"Select",componentProps:{options:[{value:"text",label:"文本"},{value:"search",label:"搜索"},{value:"number",label:"数字"},{value:"range",label:"数字范围"},{value:"password",label:"密码"},{value:"date",label:"日期"},{value:"datetime-local",label:"日期-无时区"},{value:"time",label:"时间"},{value:"month",label:"年月"},{value:"week",label:"星期"},{value:"email",label:"邮箱"},{value:"url",label:"URL"},{value:"tel",label:"电话号码"},{value:"file",label:"文件"},{value:"button",label:"按钮"},{value:"submit",label:"提交按钮"},{value:"reset",label:"重置按钮"},{value:"radio",label:"单选按钮"},{value:"checkbox",label:"复选框"},{value:"color",label:"颜色"},{value:"image",label:"图像"},{value:"hidden",label:"隐藏"}]}},{name:"defaultValue",label:"默认值",component:"Input",componentProps:{type:"text",placeholder:"请输入默认值"}},{name:"prefix",label:"前缀",component:"Input",componentProps:{type:"text",placeholder:"请输入前缀"}},{name:"suffix",label:"后缀",component:"Input",componentProps:{type:"text",placeholder:"请输入后缀"}},{name:"addonBefore",label:"前置标签",component:"Input",componentProps:{type:"text",placeholder:"请输入前置标签"}},{name:"addonAfter",label:"后置标签",component:"Input",componentProps:{type:"text",placeholder:"请输入后置标签"}},{name:"maxLength",label:"最大长度",component:"InputNumber",componentProps:{type:"text",placeholder:"请输入最大长度"}}],InputNumber:[{name:"defaultValue",label:"默认值",component:"InputNumber",componentProps:{placeholder:"请输入默认值"}},{name:"min",label:"最小值",component:"InputNumber",componentProps:{type:"text",placeholder:"请输入最小值"}},{name:"max",label:"最大值",component:"InputNumber",componentProps:{type:"text",placeholder:"请输入最大值"}},{name:"precision",label:"数值精度",component:"InputNumber",componentProps:{type:"text",placeholder:"请输入最大值"}},{name:"step",label:"步长",component:"InputNumber",componentProps:{type:"text",placeholder:"请输入步长"}},{name:"decimalSeparator",label:"小数点",component:"Input",componentProps:{type:"text",placeholder:"请输入小数点"}},{name:"addonBefore",label:"前置标签",component:"Input",componentProps:{type:"text",placeholder:"请输入前置标签"}},{name:"addonAfter",label:"后置标签",component:"Input",componentProps:{type:"text",placeholder:"请输入后置标签"}},{name:"controls",label:"是否显示增减按钮",component:"Checkbox"},{name:"keyboard",label:"是否启用键盘快捷行为",component:"Checkbox"},{name:"stringMode",label:"字符值模式",component:"Checkbox"},{name:"bordered",label:"是否有边框",component:"Checkbox"}],InputTextArea:[{name:"defaultValue",label:"默认值",component:"Input",componentProps:{type:"text",placeholder:"请输入默认值"}},{name:"maxlength",label:"最大长度",component:"InputNumber",componentProps:{placeholder:"请输入最大长度"}},{name:"minlength",label:"最小长度",component:"InputNumber",componentProps:{placeholder:"请输入最小长度"}},{name:"cols",label:"可见列数",component:"InputNumber",componentProps:{placeholder:"请输入可见列数",min:0}},{name:"rows",label:"可见行数",component:"InputNumber",componentProps:{placeholder:"请输入可见行数",min:0}},{name:"autosize",label:"自适应内容高度",component:"Checkbox"},{name:"showCount",label:"是否展示字数",component:"Checkbox"},{name:"readonly",label:"是否只读",component:"Checkbox"},{name:"spellcheck",label:"读写检查",component:"Checkbox"},{name:"autocomplete",label:"是否自动完成",component:"RadioGroup",componentProps:{options:[{label:"正常",value:null},{label:"开",value:"on"},{label:"关",value:"off"}]}},{name:"autocorrect",label:"是否自动纠错",component:"RadioGroup",componentProps:{options:[{label:"正常",value:null},{label:"开",value:"on"},{label:"关",value:"off"}]}}],Select:[{name:"mode",label:"选择模式（默认单选）",component:"RadioGroup",componentProps:{options:[{label:"单选",value:null},{label:"多选",value:"multiple"},{label:"标签",value:"tags"}]}},{name:"autoClearSearchValue",label:"是否在选中项后清空搜索框",component:"Checkbox"},{name:"labelInValue",label:"选项的label包装到value中",component:"Checkbox"},{name:"showArrow",label:"显示下拉小箭头",component:"Checkbox"},{name:"defaultOpen",label:"默认展开下拉菜单",component:"Checkbox"}],Checkbox:[{name:"indeterminate",label:"设置indeterminate状态",component:"Checkbox"}],CheckboxGroup:[],RadioGroup:[{name:"defaultValue",label:"默认值",component:"Input",componentProps:{placeholder:"请输入默认值"}},{name:"buttonStyle",label:"RadioButton的风格样式",component:"RadioGroup",componentProps:{options:[{label:"outline",value:"outline"},{label:"solid",value:"solid"}]}},{name:"optionType",label:"options类型",component:"RadioGroup",componentProps:{options:[{label:"默认",value:"default"},{label:"按钮",value:"button"}]}},{name:"size",label:"尺寸",component:"RadioGroup",componentProps:{options:[{label:"默认",value:"default"},{label:"大",value:"large"},{label:"小",value:"small"}]}}],DatePicker:[{name:"format",label:"展示格式（format）",component:"Input",componentProps:{placeholder:"YYYY-MM-DD"}},{name:"valueFormat",label:"绑定值格式（valueFormat）",component:"Input",componentProps:{placeholder:"YYYY-MM-DD"}}],RangePicker:[{name:"placeholder",label:"占位符",children:[{name:"",label:"",component:"Input"},{name:"",label:"",component:"Input"}]},{name:"format",label:"展示格式（format）",component:"Input",componentProps:{placeholder:"YYYY-MM-DD HH:mm:ss"}},{name:"valueFormat",label:"绑定值格式（valueFormat）",component:"Input",componentProps:{placeholder:"YYYY-MM-DD"}}],MonthPicker:[{name:"format",label:"展示格式（format）",component:"Input",componentProps:{placeholder:"YYYY-MM"}},{name:"valueFormat",label:"绑定值格式（valueFormat）",component:"Input",componentProps:{placeholder:"YYYY-MM"}}],TimePicker:[{name:"format",label:"展示格式（format）",component:"Input",componentProps:{placeholder:"YYYY-MM"}},{name:"valueFormat",label:"绑定值格式（valueFormat）",component:"Input",componentProps:{placeholder:"YYYY-MM"}}],Slider:[{name:"defaultValue",label:"默认值",component:"InputNumber",componentProps:{placeholder:"请输入默认值"}},{name:"min",label:"最小值",component:"InputNumber",componentProps:{placeholder:"请输入最小值"}},{name:"max",label:"最大值",component:"InputNumber",componentProps:{placeholder:"请输入最大值"}},{name:"step",label:"步长",component:"InputNumber",componentProps:{placeholder:"请输入步长"}},{name:"tooltipPlacement",label:"Tooltip 展示位置",component:"Select",componentProps:{options:[{value:"top",label:"上"},{value:"left",label:"左"},{value:"right",label:"右"},{value:"bottom",label:"下"},{value:"topLeft",label:"上右"},{value:"topRight",label:"上左"},{value:"bottomLeft",label:"右下"},{value:"bottomRight",label:"左下"},{value:"leftTop",label:"左下"},{value:"leftBottom",label:"左上"},{value:"rightTop",label:"右下"},{value:"rightBottom",label:"右上"}]}},{name:"tooltipVisible",label:"始终显示Tooltip",component:"Checkbox"},{name:"dots",label:"只能拖拽到刻度上",component:"Checkbox"},{name:"range",label:"双滑块模式",component:"Checkbox"},{name:"reverse",label:"反向坐标轴",component:"Checkbox"},{name:"vertical",label:"垂直方向",component:"Checkbox"},{name:"included",label:"值为包含关系",component:"Checkbox"}],Rate:[{name:"defaultValue",label:"默认值",component:"InputNumber",componentProps:{placeholder:"请输入默认值"}},{name:"character",label:"自定义字符",component:"Input",componentProps:{placeholder:"请输入自定义字符"}},{name:"count",label:"start 总数",component:"InputNumber",componentProps:{placeholder:"请输入自定义字符"}}],Switch:[{name:"checkedChildren",label:"选中时的内容",component:"Input",componentProps:{placeholder:"请输入选中时的内容"}},{name:"checkedValue",label:"选中时的值",component:"Input",componentProps:{placeholder:"请输入选中时的值"}},{name:"unCheckedChildren",label:"非选中时的内容",component:"Input",componentProps:{placeholder:"请输入非选中时的内容"}},{name:"unCheckedValue",label:"非选中时的值",component:"Input",componentProps:{placeholder:"请输入非选中时的值"}},{name:"loading",label:"加载中的开关",component:"Checkbox"},{name:"size",label:"尺寸",component:"RadioGroup",componentProps:{options:[{label:"默认",value:"default"},{label:"小",value:"small"}]}}],TreeSelect:[{name:"defaultValue",label:"默认值",component:"Input",componentProps:{placeholder:"请输入默认值"}},{name:"searchPlaceholder",label:"搜索框默认文字",component:"Input",componentProps:{placeholder:"请输入搜索框默认文字"}},{name:"treeNodeFilterProp",label:"输入项过滤对应的 treeNode 属性",component:"Input",componentProps:{defaultValue:"value"}},{name:"treeNodeLabelProp",label:"作为显示的 prop 设置",component:"Input",componentProps:{defaultValue:"title"}},{name:"popupClassName",label:"下拉菜单的 className 属性",component:"Input",componentProps:{placeholder:"请输入下拉菜单的 className 属性"}},{name:"labelInValue",label:"选项的label包装到value中",component:"Checkbox"},{name:"treeIcon",label:"展示TreeNode title前的图标",component:"Checkbox"},{name:"treeCheckable",label:"选项可勾选",component:"Checkbox"},{name:"treeCheckStrictly",label:"节点选择完全受控",component:"Checkbox"},{name:"treeDefaultExpandAll",label:"默认展开所有",component:"Checkbox"},{name:"treeLine",label:"是否展示线条样式",component:"Checkbox"},{name:"maxTagCount",label:"最多显示多少个 tag",component:"InputNumber",componentProps:{placeholder:"最多显示多少个 tag"}},{name:"size",label:"尺寸",component:"RadioGroup",componentProps:{options:[{label:"默认",value:"default"},{label:"小",value:"small"}]}}],Cascader:[{name:"expandTrigger",label:"次级展开方式(默认click)",component:"RadioGroup",componentProps:{options:[{label:"click",value:"click"},{label:"hover",value:"hover"}]}}],Button:[{name:"type",label:"类型",component:"RadioGroup",componentProps:{options:[{label:"default",value:"default"},{label:"primary",value:"primary"},{label:"danger",value:"danger"},{label:"dashed",value:"dashed"}]}},{name:"handle",label:"操作",component:"RadioGroup",componentProps:{options:[{label:"提交",value:"submit"},{label:"重置",value:"reset"}]}}],Upload:[{name:"action",label:"上传地址",component:"Input"},{name:"name",label:"附件参数名（name）",component:"Input"}],slot:[{name:"slotName",label:"插槽名称",component:"Input"}],Transfer:[{name:"oneWay",label:"展示为单向样式",component:"Checkbox"},{name:"pagination",label:"使用分页样式",component:"Checkbox"},{name:"showSelectAll",label:"展示全选勾选框",component:"Checkbox"}]};function k(e,r){e.forEach((n,c)=>{n.name==r&&e.splice(c,1)})}d.StrengthMeter=d.Input;d.StrengthMeter.push({name:"visibilityToggle",label:"是否显示切换按钮",component:"Checkbox"});k(d.StrengthMeter,"type");k(d.StrengthMeter,"prefix");k(d.StrengthMeter,"defaultValue");k(d.StrengthMeter,"suffix");const A=d,le=(e,r)=>{const n=e.findIndex(c=>c.name===r);if(e[n]&&e[n].componentProps)return e[n].componentProps},ae={RadioGroup:(e,r)=>{const n=le(r,"size");n&&(e.optionType&&e.optionType!="button"?(n.disabled=!0,e.size=null):n.disabled=!1)}},te=J({name:"ComponentProps",components:{FormOptions:V,Empty:B,Input:O,Form:U,FormItem:z,Switch:L,Checkbox:$,Select:H,InputNumber:W,RadioGroup:Z,RadioButtonGroup:w,Col:j,Row:q},setup(){const e=K([]),r=o=>o?o.includes(n.value.currentItem.component):!0,{formConfig:n}=G();n.value.currentItem&&(n.value.currentItem.componentProps=n.value.currentItem.componentProps||{}),y(()=>{var o;return(o=n.value.currentItem)==null?void 0:o.field},(o,t)=>{n.value.schemas&&D(n.value.schemas,p=>{if(p.link){const m=p.link.findIndex(x=>x===t);m!==-1&&E(p.link,m)}})}),y(()=>n.value.currentItem&&n.value.currentItem.component,()=>{e.value=[],oe.forEach(o=>{o.category="control",o.includes?o.includes.includes(n.value.currentItem.component)&&e.value.push(o):e.value.push(o)}),ne.forEach(o=>{o.category="input",o.includes?o.includes.includes(n.value.currentItem.component)&&e.value.push(o):o.exclude&&o.exclude.includes(n.value.currentItem.component)||e.value.push(o)}),A[n.value.currentItem.component]&&A[n.value.currentItem.component].forEach(o=>R(this,null,function*(){o.component&&(["Switch","Checkbox","Radio"].includes(o.component)?(o.category="control",e.value.push(o)):(o.category="input",e.value.push(o)))}))},{immediate:!0});const c=S(()=>e.value.filter(o=>o.category=="control")),I=S(()=>e.value.filter(o=>o.category=="input"));y(()=>n.value.currentItem.componentProps,()=>{const o=ae[n.value.currentItem.component];o&&o(n.value.currentItem.componentProps,e.value)},{immediate:!0,deep:!0});const P=S(()=>n.value.schemas&&n.value.schemas.filter(o=>o.key!==n.value.currentItem.key).map(({label:o,field:t})=>({label:o+"/"+t,value:t})));return{formConfig:n,showControlAttrs:r,linkOptions:P,controlOptions:c,inputOptions:I}}}),pe={class:"properties-content"},re={key:0,class:"properties-body"},ce={key:0},me={key:0};function ue(e,r,n,c,I,P){const o=f("Empty"),t=f("FormItem"),p=f("Checkbox"),m=f("Col"),x=f("Select"),T=f("FormOptions"),F=f("Form");return a(),u("div",pe,[e.formConfig.currentItem?(a(),u("div",re,[e.formConfig.currentItem.key?b("",!0):(a(),s(o,{key:0,class:"hint-box",description:"未选择组件"})),v(F,{"label-align":"left",layout:"vertical"},{default:i(()=>[e.formConfig.currentItem&&e.formConfig.currentItem.componentProps?(a(),u("div",ce,[(a(!0),u(C,null,N(e.inputOptions,l=>(a(),s(t,{key:l.name,label:l.label},{default:i(()=>[l.children?(a(),u("div",me,[(a(!0),u(C,null,N(l.children,(h,g)=>(a(),u(C,{key:g},[h.component?(a(),s(M(h.component),Y({key:0,ref_for:!0},h.componentProps,{value:e.formConfig.currentItem.componentProps[l.name][g],"onUpdate:value":_=>e.formConfig.currentItem.componentProps[l.name][g]=_}),null,16,["value","onUpdate:value"])):b("",!0)],64))),128))])):l.component?(a(),s(M(l.component),Y({key:1,class:"component-prop",ref_for:!0},l.componentProps,{value:e.formConfig.currentItem.componentProps[l.name],"onUpdate:value":h=>e.formConfig.currentItem.componentProps[l.name]=h}),null,16,["value","onUpdate:value"])):b("",!0)]),_:2},1032,["label"]))),128)),v(t,{label:"控制属性"},{default:i(()=>[(a(!0),u(C,null,N(e.controlOptions,l=>(a(),s(m,{key:l.name},{default:i(()=>[e.showControlAttrs(l.includes)?(a(),s(p,Y({key:0,ref_for:!0},l.componentProps,{checked:e.formConfig.currentItem.componentProps[l.name],"onUpdate:checked":h=>e.formConfig.currentItem.componentProps[l.name]=h}),{default:i(()=>[Q(X(l.label),1)]),_:2},1040,["checked","onUpdate:checked"])):b("",!0)]),_:2},1024))),128))]),_:1})])):b("",!0),v(t,{label:"关联字段"},{default:i(()=>[v(x,{mode:"multiple",value:e.formConfig.currentItem.link,"onUpdate:value":r[0]||(r[0]=l=>e.formConfig.currentItem.link=l),options:e.linkOptions},null,8,["value","options"])]),_:1}),["Select","CheckboxGroup","RadioGroup","TreeSelect","Cascader","AutoComplete"].includes(e.formConfig.currentItem.component)?(a(),s(t,{key:1,label:"选项"},{default:i(()=>[v(T)]),_:1})):b("",!0),["Grid"].includes(e.formConfig.currentItem.component)?(a(),s(t,{key:2,label:"栅格"},{default:i(()=>[v(T)]),_:1})):b("",!0)]),_:1})])):b("",!0)])}const Pe=ee(te,[["render",ue]]);export{Pe as default};
