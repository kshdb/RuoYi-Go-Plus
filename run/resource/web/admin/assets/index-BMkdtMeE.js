var p=(d,I,n)=>new Promise((m,a)=>{var g=r=>{try{u(n.next(r))}catch(c){a(c)}},k=r=>{try{u(n.throw(r))}catch(c){a(c)}},u=r=>r.done?m(r.value):Promise.resolve(r.value).then(g,k);u((n=n.apply(d,I)).next())});import{a as K,B as O}from"./index-CMSTH4sS.js";import{_ as P}from"./index-CwwL6bPg.js";import{d as U,u as A}from"./index-Cm0AtxlD.js";import{u as E,_ as $}from"./useTable-BlleqRm-.js";import"./index-Rv_3g2e8.js";import{D as j}from"./dictEnum-DeC8h6ZR.js";import{u as z}from"./useRender-C6p2srTi.js";import{bj as q,j as G}from"./entry/index-CMepwc5X-1716790511191.js";import{au as _,y as W,O as H,U as b,at as J}from"./antd-BRjMhd0C.js";import{d as Q,f as S,r as X,o as Y,_ as l,a8 as f,a9 as o,k as h,u as t,ad as R,ac as v,al as Z,am as ee,$ as D,ab as te,G as ae,a1 as re,F as C}from"./vue-Bw3NQgLF.js";import"./useWindowSizeFn-Ba6K9eqp.js";import"./useForm-uR1ZVBCA.js";import"./FormItem.vue_vue_type_script_lang-DAyz6oLf.js";import"./componentMap-DPcekmXH.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DgvCFV63.js";import"./copyTextToClipboard-BLtSw0o7.js";import"./onMountedOrActivated-B2y-oH2N.js";import"./helper-CfJJkrf5.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BxZ9HtKh.js";import"./sortable.esm-DFFrMEeC.js";import"./useSortable-CwI952Jx.js";import"./download-CYeVxFqw.js";import"./useLoading-iCq4GOHr.js";import"./index-BhefpKLc.js";import"./dict-C9gNHjAh.js";const{renderDict:se}=z(),oe=[{dataIndex:"userName",title:"名称"},{dataIndex:"nickName",title:"昵称"},{dataIndex:"avatar",title:"头像",width:80},{dataIndex:"deptName",title:"部门"},{dataIndex:"phonenumber",title:"手机号"},{dataIndex:"status",title:"状态",customRender({value:d}){return se(d,j.NORMAL_DISABLE)}},{dataIndex:"createTime",title:"创建时间"}],le=[{field:"userName",label:"用户账号",component:"Input"},{field:"phonenumber",label:"手机号码",component:"Input"}],ne=Q({name:"UserSelectModal",__name:"index",props:{multiple:{type:Boolean,required:!1,default:!0}},emits:["register","selectDone"],setup(d,{emit:I}){const n=d,m=S(""),a=X({tree:[],selectDeptId:[]}),g=S(!0);function k(){return p(this,null,function*(){yield r()})}Y(()=>p(this,null,function*(){const e=yield U();q(e,i=>{i.icon="el:group"}),a.tree=e,g.value=!1}));const[u,{reload:r,getSelectRows:c,setSelectedRows:w,setSelectedRowKeys:T}]=E({rowSelection:{type:"checkbox"},showSelectionBar:!0,clickToRowSelect:!0,clearSelectOnPageChange:!1,showIndexColumn:!1,size:"small",api:A,rowKey:"userId",useSearchForm:!0,formConfig:{schemas:le,name:"user",baseColProps:{xs:24,sm:24,md:24,lg:8},labelWidth:80,resetFunc:()=>p(this,null,function*(){a.selectDeptId=[],m.value="",yield r()})},columns:oe,beforeFetch(e){return a.selectDeptId.length===1&&(e.deptId=a.selectDeptId[0]),e}}),[N,{closeModal:M}]=K(B);function B(e){return p(this,null,function*(){e&&e.length&&T(e)})}const F=I;function L(){F("selectDone",c()),M(),y()}function y(){w([])}function V(e){n.multiple||w([e])}return(e,i)=>(l(),f(t(O),R(e.$attrs,{title:"用户选择",defaultFullscreen:"",canFullscreen:!1,onRegister:t(N),onOk:L,onCancel:y}),{default:o(()=>[h(t(J),null,{default:o(()=>[h(t(_),R({xs:24,sm:24,md:24,lg:4},{class:"h-[calc(100vh-80px)]"}),{default:o(()=>[h(t(W),{active:!0,paragraph:{rows:8},loading:g.value},{default:o(()=>[a.tree.length?(l(),f(t(P),{key:0,fieldNames:{title:"label",key:"id"},"tree-data":a.tree,showLine:{showLeafIcon:!1},search:!0,searchValue:m.value,"onUpdate:searchValue":i[0]||(i[0]=s=>m.value=s),defaultExpandAll:"",onSelect:k,selectedKeys:a.selectDeptId,"onUpdate:selectedKeys":i[1]||(i[1]=s=>a.selectDeptId=s)},null,8,["tree-data","searchValue","selectedKeys"])):v("",!0)]),_:1},8,["loading"])]),_:1},16),h(t(_),Z(ee({xs:24,sm:24,md:24,lg:20})),{default:o(()=>[h(t($),{onRegister:t(u),onRowClick:V},{tableTitle:o(()=>[(l(!0),D(C,null,te(t(c)(),s=>(l(),f(t(H),{key:s.userId},{default:o(()=>[ae(re(s.nickName),1)]),_:2},1024))),128))]),bodyCell:o(({column:s,record:x})=>[s&&x&&s.dataIndex==="avatar"?(l(),D(C,{key:0},[x.avatar?(l(),f(t(b),{key:0,src:x.avatar},null,8,["src"])):(l(),f(t(b),{key:1,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}))],64)):v("",!0)]),_:1},8,["onRegister"])]),_:1},16)]),_:1})]),_:1},16,["onRegister"]))}}),Le=G(ne,[["__scopeId","data-v-de3d4718"]]);export{Le as default};