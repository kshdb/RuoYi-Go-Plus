var v=(_,C,m)=>new Promise((f,h)=>{var l=o=>{try{d(m.next(o))}catch(s){h(s)}},i=o=>{try{d(m.throw(o))}catch(s){h(s)}},d=o=>o.done?f(o.value):Promise.resolve(o.value).then(l,i);d((m=m.apply(_,C)).next())});import{a as P,B as V}from"./index-BIkrAlj7.js";import{u as $,_ as D}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./componentMap-qA-f8iV4.js";import{f as G,i as j,j as E}from"./index-DRTL1nQC.js";import{r as O,e as W}from"./index-CCBbV1HU.js";import{_ as Z}from"./index-BcLdq1Bd.js";import{e as q,m as z}from"./role.data-wz2Oc4N6.js";import{bC as H,bn as J,bD as Q}from"./entry/index-BbJQUQ84-1718268303552.js";import{ba as X,R as Y}from"./antd-DMGzOvrA.js";import{d as ee,f as p,c as te,y as ae,Z as S,a8 as R,a9 as k,k as g,u as r,ab as re,ac as oe}from"./vue-Cw15aJ-2.js";import"./useWindowSizeFn-BKs0NEK5.js";import"./FormItem.vue_vue_type_script_lang-C67_1cA1.js";import"./helper-CXVLNTBN.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-SetVOuUZ.js";import"./index-DCvxWw7W.js";import"./useSortable-BTdBE9Oa.js";import"./download-DOz9ltI1.js";import"./useLoading-D1in2ACg.js";import"./copyTextToClipboard-uEEWQikS.js";import"./onMountedOrActivated-CSHfHTyc.js";import"./style-CLEvKZSv.js";import"./dictEnum-DeC8h6ZR.js";import"./dict-vVDMuEaq.js";import"./useRender-D1Q3fAQ3.js";import"./index-Dx0uas1b.js";const se=1,Ue=ee({name:"RoleModal",__name:"RoleModal",emits:["register","reload"],setup(_,{emit:C}){const m=C,f=p(!1),h=te(()=>f.value?"编辑角色":"新增角色"),l=p([]),i=p(!1),d=p(),[o,{modalLoading:s,closeModal:T}]=P(e=>v(this,null,function*(){s(!0),i.value=!1;const{record:t,update:c}=e;if(f.value=c,c&&t){const a=yield G(t.roleId);i.value=!a.menuCheckStrictly,yield b(a);const u=yield O(a.roleId),{menus:M,checkedKeys:y}=u,L=I(M);if(l.value=L,a.menuCheckStrictly){const N=H(M,y);n.value=[...N,...y]}else n.value=y;yield b({menuIds:y})}else{const a=yield W(),u=I(a);l.value=u}ae(()=>{var a;(a=d.value)==null||a.filterByLevel(se)}),s(!1)}));function I(e){return J(e,t=>!q.includes(t.id),{id:"id",pid:"parentId",children:"children"})}const[x,{setFieldsValue:b,resetForm:F,validate:B}]=$({labelWidth:100,layout:"vertical",showActionButtonGroup:!1,baseColProps:{span:24},schemas:z}),n=p([]);function A(e,t){if(e instanceof Array){const c=t.halfCheckedKeys||[];n.value=[...c,...e]}else n.value=[...e.checked]}function U(e){if(e instanceof Array){const t=Q(l.value);e.length===0&&(n.value=[]),e.length===t.length&&(n.value=t)}}function K(){return v(this,null,function*(){try{s(!0);const e=yield B();e.menuCheckStrictly=!r(i),e.menuIds=[...r(n)],r(f)?yield j(e):yield E(e),yield w(),m("reload",T)}catch(e){}finally{s(!1)}})}function w(){return v(this,null,function*(){yield F(),n.value=[]})}return(e,t)=>(S(),R(r(V),oe(e.$attrs,{title:h.value,width:600,onRegister:r(o),onOk:K,onCancel:w}),{default:k(()=>[g(r(D),{onRegister:r(x)},{menuTree:k(({model:c,field:a})=>[g(r(X),null,{default:k(()=>[g(r(Y),{"body-style":{padding:0}},{default:k(()=>[l.value.length?(S(),R(r(Z),{key:0,ref_key:"roleTreeRef",ref:d,title:"菜单分配","tree-data":l.value,fieldNames:{title:"label",key:"id"},checkable:!0,selectable:!1,enableCustomTool:!0,checkStrictly:i.value,"onUpdate:checkStrictly":t[0]||(t[0]=u=>i.value=u),checkedKeys:c[a],"onUpdate:checkedKeys":u=>c[a]=u,onCheck:A,onChange:U},null,8,["tree-data","checkStrictly","checkedKeys","onUpdate:checkedKeys"])):re("",!0)]),_:2},1024)]),_:2},1024)]),_:1},8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{Ue as default};