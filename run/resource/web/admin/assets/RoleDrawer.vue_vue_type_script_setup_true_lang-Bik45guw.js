var v=(g,k,u)=>new Promise((d,h)=>{var C=s=>{try{n(u.next(s))}catch(f){h(f)}},l=s=>{try{n(u.throw(s))}catch(f){h(f)}},n=s=>s.done?d(s.value):Promise.resolve(s.value).then(C,l);n((u=u.apply(g,k)).next())});import{a as P,B as V}from"./index-BLDmWVyR.js";import{u as W,_ as $}from"./useForm-BsovIqMX.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B6-8R5aw.js";import"./componentMap-qA-f8iV4.js";import{f as G,i as O,j}from"./index-DRTL1nQC.js";import{r as E,e as Z}from"./index-CCBbV1HU.js";import{_ as q}from"./index-BcLdq1Bd.js";import{e as z,m as H}from"./role.data-wz2Oc4N6.js";import{bC as J,bn as Q,bD as X}from"./entry/index-BbJQUQ84-1718268303552.js";import{u as Y}from"./useSize-CUNtmCvH.js";import{ba as ee,R as ae}from"./antd-DMGzOvrA.js";import{d as te,f as m,c as re,y as se,Z as D,a8 as x,a9 as w,k as _,u as r,ab as ne,ac as oe}from"./vue-Cw15aJ-2.js";const le=1,_e=te({name:"RoleDrawer",__name:"RoleDrawer",emits:["register","reload"],setup(g,{emit:k}){const u=k,d=m(!1),h=Y(700),C=re(()=>d.value?"编辑角色":"新增角色"),l=m([]),n=m(!1),s=m(),[f,{drawerLoading:p,closeDrawer:T}]=P(e=>v(this,null,function*(){p(!0),n.value=!1;const{record:a,update:i}=e;if(d.value=i,i&&a){const t=yield G(a.roleId);n.value=!t.menuCheckStrictly,yield b(t);const c=yield E(t.roleId),{menus:R,checkedKeys:y}=c,L=I(R);if(l.value=L,t.menuCheckStrictly){const N=J(R,y);o.value=[...N,...y]}else o.value=y;yield b({menuIds:y})}else{const t=yield Z(),c=I(t);l.value=c}se(()=>{var t;(t=s.value)==null||t.filterByLevel(le)}),p(!1)}));function I(e){return Q(e,a=>!z.includes(a.id),{id:"id",pid:"parentId",children:"children"})}const[F,{setFieldsValue:b,resetForm:M,validate:B}]=W({labelWidth:100,layout:"vertical",name:"role_drawer",showActionButtonGroup:!1,baseColProps:{span:24},schemas:H}),o=m([]);function A(e,a){if(e instanceof Array){const i=a.halfCheckedKeys||[];o.value=[...i,...e]}else o.value=[...e.checked]}function U(e){if(e instanceof Array){const a=X(l.value);e.length===0&&(o.value=[]),e.length===a.length&&(o.value=a)}}function K(){return v(this,null,function*(){try{p(!0);const e=yield B();e.menuCheckStrictly=!r(n),e.menuIds=[...r(o)],r(d)?yield O(e):yield j(e),u("reload"),T(),yield S()}catch(e){}finally{p(!1)}})}function S(){return v(this,null,function*(){yield M(),o.value=[]})}return(e,a)=>(D(),x(r(V),oe(e.$attrs,{title:C.value,width:r(h),"show-footer":!0,onRegister:r(f),onOk:K,onClose:S}),{default:w(()=>[_(r($),{onRegister:r(F)},{menuTree:w(({model:i,field:t})=>[_(r(ee),null,{default:w(()=>[_(r(ae),{"body-style":{padding:0}},{default:w(()=>[l.value.length?(D(),x(r(q),{key:0,ref_key:"roleTreeRef",ref:s,title:"菜单分配","tree-data":l.value,fieldNames:{title:"label",key:"id"},checkable:!0,selectable:!1,enableCustomTool:!0,checkStrictly:n.value,"onUpdate:checkStrictly":a[0]||(a[0]=c=>n.value=c),checkedKeys:i[t],"onUpdate:checkedKeys":c=>i[t]=c,onCheck:A,onChange:U},null,8,["tree-data","checkStrictly","checkedKeys","onUpdate:checkedKeys"])):ne("",!0)]),_:2},1024)]),_:2},1024)]),_:1},8,["onRegister"])]),_:1},16,["title","width","onRegister"]))}});export{_e as _};
