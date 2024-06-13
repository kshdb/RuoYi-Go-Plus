var Ze=Object.defineProperty,et=Object.defineProperties;var tt=Object.getOwnPropertyDescriptors;var be=Object.getOwnPropertySymbols;var nt=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var Se=(e,t,a)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,P=(e,t)=>{for(var a in t||(t={}))nt.call(t,a)&&Se(e,a,t[a]);if(be)for(var a of be(t))lt.call(t,a)&&Se(e,a,t[a]);return e},ve=(e,t)=>et(e,tt(t));var Ce=(e,t,a)=>new Promise((b,d)=>{var S=g=>{try{i(a.next(g))}catch(C){d(C)}},n=g=>{try{i(a.throw(g))}catch(C){d(C)}},i=g=>g.done?b(g.value):Promise.resolve(g.value).then(S,n);i((a=a.apply(e,t)).next())});import{at as ct,d as fe,f as ee,ai as at,c as F,r as oe,w as H,_ as I,$ as U,a0 as ue,u as s,af as st,ac as O,a8 as ce,a9 as j,G as X,a1 as ae,a2 as Y,k as x,F as z,ab as rt,ad as Me,B as it,l as Ke,o as $e,y as ot,b as Oe,i as je,x as ut,g as dt,J as Q,h as R,m as Ae,A as Le}from"./vue-Bw3NQgLF.js";import{bk as ht,k as ft,aL as yt,_ as te,L as pt,bl as me,bm as kt,aE as gt,bn as xt,b5 as bt,bj as St,aO as _e,S as vt,b1 as Ee}from"./entry/index-CMepwc5X-1716790511191.js";import{b2 as Ct,b3 as Kt,b4 as At,ac as Lt,b5 as mt,v as Z,D as _t,aw as se,l as Et,f as de,as as Tt,b6 as wt,o as Bt,e as re,F as Dt,aC as It,ay as Te,az as Ft,t as Nt,ag as we}from"./antd-BRjMhd0C.js";function he(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((a,b)=>a+he(e,b),""):Object.keys(t).reduce((a,b)=>a+(t[b]?he(e,b):""),""):""}function Mt(e){return(t,a)=>(t&&typeof t!="string"&&(a=t,t=""),t=t?`${e}__${t}`:e,`${t}${he(t,a)}`)}function Pe(e){return[Mt(`${ht}-${e}`)]}const Be=Symbol(),De=Symbol();function $t(e,t){if(!Kt(e)||e[De])return e;const{values:a,required:b,default:d,type:S,validator:n}=e,i=a||n?g=>{let C=!1,K=[];if(a&&(K=[...a,d],C||(C=K.includes(g))),n&&(C||(C=n(g))),!C&&K.length>0){const o=[...new Set(K)].map(h=>JSON.stringify(h)).join(", ");ct(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${o}], got value ${JSON.stringify(g)}.`)}return C}:void 0;return{type:typeof S=="object"&&Object.getOwnPropertySymbols(S).includes(Be)&&S?S[Be]:S,required:!!b,default:d,validator:i,[De]:!0}}const Ot=e=>Ct(Object.entries(e).map(([t,a])=>[t,$t(a,t)]));var w=(e=>(e[e.SELECT_ALL=0]="SELECT_ALL",e[e.UN_SELECT_ALL=1]="UN_SELECT_ALL",e[e.EXPAND_ALL=2]="EXPAND_ALL",e[e.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",e[e.CHECK_STRICTLY=4]="CHECK_STRICTLY",e[e.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY",e))(w||{});const jt=["update:checkStrictly","update:expandedKeys","update:selectedKeys","update:value","change","check","update:searchValue"],Pt=Ot({value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:Boolean,search:Boolean,enableCustomTool:{type:Boolean,default:!1},searchValue:{type:String,default:""},checkStrictly:Boolean,clickRowToExpand:{type:Boolean,default:!1},checkable:Boolean,defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:Boolean,fieldNames:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:[Array,Object],default:()=>[]},beforeRightClick:{type:Function,default:void 0},rightMenuList:{type:Array},filterFn:{type:Function,default:void 0},highlight:{type:[Boolean,String],default:!1},expandOnSearch:Boolean,checkOnSearch:Boolean,selectedOnSearch:Boolean,loading:{type:Boolean,default:!1},treeWrapperClassName:String}),Ut={class:"flex flex-col rounded-lg"},Vt={key:2,class:"flex items-center flex-1 cursor-pointer justify-self-stretch"},Ht=ue("span",null," 节点状态: ",-1),Xt=fe({__name:"TreeHeader",props:{helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchText:{type:String,default:""},checkAll:{type:Function,default:void 0},expandAll:{type:Function,default:void 0},checkStrictly:{type:Boolean,default:!1},enableCustomTool:{type:Boolean,default:!1}},emits:["strictly-change","search"],setup(e,{emit:t}){const a=ee(""),[b]=Pe("tree-header"),d=e,S=t,n=at(),{t:i}=ft(),g=F(()=>["mr-1","w-full",{"ml-5":n.headerTitle||d.title}]),C=F(()=>{const{checkable:l}=d,v=[{label:i("component.tree.expandAll"),value:w.EXPAND_ALL},{label:i("component.tree.unExpandAll"),value:w.UN_EXPAND_ALL,divider:l}];return l?[{label:i("component.tree.selectAll"),value:w.SELECT_ALL},{label:i("component.tree.unSelectAll"),value:w.UN_SELECT_ALL,divider:l},...v,{label:i("component.tree.checkStrictly"),value:w.CHECK_STRICTLY},{label:i("component.tree.checkUnStrictly"),value:w.CHECK_UN_STRICTLY}]:v}),K=F(()=>d.checkStrictly?"节点独立":"节点关联"),o=oe({checkAll:!1,collapseAll:!1});function h(){var l;(l=d.expandAll)==null||l.call(d,o.collapseAll)}function r(){var l;(l=d.checkAll)==null||l.call(d,o.checkAll)}function y(){S("strictly-change",!d.checkStrictly)}const p=({key:l})=>{var v,E,N,W;switch(l){case w.SELECT_ALL:(v=d.checkAll)==null||v.call(d,!0);break;case w.UN_SELECT_ALL:(E=d.checkAll)==null||E.call(d,!1);break;case w.EXPAND_ALL:(N=d.expandAll)==null||N.call(d,!0);break;case w.UN_EXPAND_ALL:(W=d.expandAll)==null||W.call(d,!1);break;case w.CHECK_STRICTLY:S("strictly-change",!1);break;case w.CHECK_UN_STRICTLY:S("strictly-change",!0);break}};function f(l){S("search",l)}const u=pt(f,200);return H(()=>a.value,l=>{u(l)}),H(()=>d.searchText,l=>{l!==a.value&&(a.value=l)}),(l,v)=>(I(),U("div",Ut,[ue("div",{class:Y([s(b)(),"flex mb-1 px-2 py-1.5 items-center"])},[s(n).headerTitle?st(l.$slots,"headerTitle",{key:0}):O("",!0),!s(n).headerTitle&&l.title?(I(),ce(s(yt),{key:1,helpMessage:l.helpMessage},{default:j(()=>[X(ae(l.title),1)]),_:1},8,["helpMessage"])):O("",!0),l.search||l.toolbar?(I(),U("div",Vt,[l.search?(I(),U("div",{key:0,class:Y(g.value)},[x(s(At),{placeholder:s(i)("common.searchText"),size:"small",allowClear:"",value:a.value,"onUpdate:value":v[0]||(v[0]=E=>a.value=E)},null,8,["placeholder","value"])],2)):O("",!0),l.toolbar?(I(),ce(s(_t),{key:1,onClick:v[1]||(v[1]=it(()=>{},["prevent"]))},{overlay:j(()=>[x(s(Z),{onClick:p},{default:j(()=>[(I(!0),U(z,null,rt(C.value,E=>(I(),U(z,{key:E.value},[x(s(Lt),Me({ref_for:!0},{key:E.value}),{default:j(()=>[X(ae(E.label),1)]),_:2},1040),E.divider?(I(),ce(s(mt),{key:0})):O("",!0)],64))),128))]),_:1})]),default:j(()=>[x(te,{icon:"ion:ellipsis-vertical"})]),_:1})):O("",!0)])):O("",!0)],2),d.enableCustomTool?(I(),U("div",{key:0,class:Y([s(b)(),"flex flex-row gap-2 px-4 py-1.5"])},[Ht,ue("span",{class:Y(l.checkStrictly?"text-red-500":"text-blue-500")},ae(K.value),3)],2)):O("",!0),d.enableCustomTool?(I(),U("div",{key:1,class:Y([s(b)(),"flex flex-row gap-1 px-3 py-1.5 justify-between"])},[x(s(se),{checked:o.collapseAll,"onUpdate:checked":v[2]||(v[2]=E=>o.collapseAll=E),onChange:h},{default:j(()=>[X("展开/折叠")]),_:1},8,["checked"]),x(s(se),{checked:o.checkAll,"onUpdate:checked":v[3]||(v[3]=E=>o.checkAll=E),onChange:r},{default:j(()=>[X("全选/全不选")]),_:1},8,["checked"]),x(s(se),{checked:!d.checkStrictly,onChange:y},{default:j(()=>[X("父子节点关联")]),_:1},8,["checked"])],2)):O("",!0)]))}}),Yt=({icon:e})=>e?Et(e)?Ke(te,{icon:e,class:"mr-2"}):Ke(te):null;function Rt(e,t){function a(o){const h=[],r=o||s(e),{key:y,children:p}=s(t);if(!p||!y)return h;for(let f=0;f<r.length;f++){const u=r[f];h.push(u[y]);const l=u[p];l&&l.length&&h.push(...a(l))}return h}function b(o){const h=[],r=o||s(e),{key:y,children:p}=s(t);if(!p||!y)return h;for(let f=0;f<r.length;f++){const u=r[f];u.disabled!==!0&&u.selectable!==!1&&h.push(u[y]);const l=u[p];l&&l.length&&h.push(...b(l))}return h}function d(o,h){const r=[],y=h||s(e),{key:p,children:f}=s(t);if(!f||!p)return r;for(let u=0;u<y.length;u++){const l=y[u],v=l[f];o===l[p]?(r.push(l[p]),v&&v.length&&r.push(...a(v))):v&&v.length&&r.push(...d(o,v))}return r}function S(o,h,r){if(!o)return;const y=r||s(e),{key:p,children:f}=s(t);if(!(!f||!p))for(let u=0;u<y.length;u++){const l=y[u],v=l[f];if(l[p]===o){y[u]=P(P({},y[u]),h);break}else v&&v.length&&S(o,h,l[f])}}function n(o=1,h,r=1){if(!o)return[];const y=[],p=h||s(e)||[];for(let f=0;f<p.length;f++){const u=p[f],{key:l,children:v}=s(t),E=l?u[l]:"",N=v?u[v]:[];y.push(E),N&&N.length&&r<o&&(r+=1,y.push(...n(o,N,r)))}return y}function i({parentKey:o=null,node:h,push:r="push"}){const y=de(s(e));if(!o){y[r](h),e.value=y;return}const{key:p,children:f}=s(t);!f||!p||(me(y,u=>{if(u[p]===o)return u[f]=u[f]||[],u[f][r](h),!0}),e.value=y)}function g({parentKey:o=null,list:h,push:r="push"}){const y=de(s(e));if(!(!h||h.length<1))if(o){const{key:p,children:f}=s(t);if(!f||!p)return;me(y,u=>{if(u[p]===o){u[f]=u[f]||[];for(let l=0;l<h.length;l++)u[f][r](h[l]);return e.value=y,!0}})}else{for(let p=0;p<h.length;p++)y[r](h[p]);e.value=y;return}}function C(o,h){if(!o)return;const r=h||s(e),{key:y,children:p}=s(t);if(!(!p||!y))for(let f=0;f<r.length;f++){const u=r[f],l=u[p];if(u[y]===o){r.splice(f,1);break}else l&&l.length&&C(o,u[p])}}function K(o,h,r){if(!o&&o!==0)return null;const y=h||s(e),{key:p,children:f}=s(t);return p?(y.forEach(u=>{if(r!=null&&r.key||(r==null?void 0:r.key)===0)return r;if(u[p]===o){r=u;return}u[f]&&u[f].length&&(r=K(o,u[f],r))}),r||null):null}return{deleteNodeByKey:C,insertNodeByKey:i,insertNodesByKey:g,filterByLevel:n,updateNodeByKey:S,getAllKeys:a,getChildrenKeys:d,getEnabledKeys:b,getSelectedNode:K}}function zt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!je(e)}const ie="context-menu",Wt={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},Ie=e=>{const{item:t}=e;return x("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&x(te,{class:"mr-2",icon:t.icon},null),x("span",null,[t.label])])},Gt=fe({name:"ContextMenu",props:Wt,setup(e){const t=ee(null),a=ee(!1),b=F(()=>{const{axis:n,items:i,styles:g,width:C}=e,{x:K,y:o}=n||{x:0,y:0},h=(i||[]).length*40,r=C,y=document.body,p=y.clientWidth<K+r?K-r:K,f=y.clientHeight<o+h?o-h:o;return P({position:"absolute",width:`${C}px`,left:`${p+1}px`,top:`${f+1}px`,zIndex:9999},g)});$e(()=>{ot(()=>a.value=!0)}),Oe(()=>{const n=s(t);n&&document.body.removeChild(n)});function d(n,i){const{handler:g,disabled:C}=n;C||(a.value=!1,i==null||i.stopPropagation(),i==null||i.preventDefault(),g==null||g())}function S(n){return n.filter(g=>!g.hidden).map(g=>{const{disabled:C,label:K,children:o,divider:h=!1}=g,r={item:g,handler:d,showIcon:e.showIcon};return!o||o.length===0?x(z,null,[x(Z.Item,{disabled:C,class:`${ie}__item`,key:K},{default:()=>[x(Ie,r,null)]}),h?x(Tt,{key:`d-${K}`},null):null]):s(a)?x(Z.SubMenu,{key:K,disabled:C,popupClassName:`${ie}__popup`},{title:()=>x(Ie,r,null),default:()=>S(o)}):null})}return()=>{let n;if(!s(a))return null;const{items:i}=e;return x(Z,{inlineIndent:12,mode:"vertical",class:ie,ref:t,style:s(b)},zt(n=S(i))?n:{default:()=>[n]})}}}),V={domList:[],resolve:()=>{}},Jt=function(e){const{event:t}=e||{};if(t&&(t==null||t.preventDefault()),!!kt)return new Promise(a=>{const b=document.body,d=document.createElement("div"),S={};e.styles&&(S.styles=e.styles),e.items&&(S.items=e.items),e.event&&(S.customEvent=t,S.axis={x:t.clientX,y:t.clientY+b.scrollTop});const n=x(Gt,S);ut(n,d);const i=function(){V.resolve("")};V.domList.push(d);const g=function(){V.domList.forEach(C=>{try{C&&b.removeChild(C)}catch(K){}}),b.removeEventListener("click",i),b.removeEventListener("scroll",i)};V.resolve=function(C){g(),a(C)},g(),b.appendChild(d),b.addEventListener("click",i),b.addEventListener("scroll",i)})},Fe=function(){V&&(V.resolve(""),V.domList=[])};function qt(e=!0){return dt()&&e&&Oe(()=>{Fe()}),[Jt,Fe]}function Ne(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!je(e)}const nn=fe({name:"BasicTree",inheritAttrs:!1,props:Pt,emits:jt,setup(e,{attrs:t,slots:a,emit:b,expose:d}){const[S]=Pe("tree"),n=oe({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),i=oe({startSearch:!1,searchText:"",searchData:[]}),g=ee([]),[C]=qt(),K=F(()=>{const{fieldNames:c}=e;return P({children:"children",title:"title",key:"key"},c)}),o=F(()=>{let c=ve(P(P({blockNode:!0},t),e),{expandedKeys:n.expandedKeys,selectedKeys:n.selectedKeys,checkedKeys:n.checkedKeys,checkStrictly:n.checkStrictly,fieldNames:s(K),"onUpdate:expandedKeys":k=>{n.expandedKeys=k,b("update:expandedKeys",k)},"onUpdate:selectedKeys":k=>{n.selectedKeys=k,b("update:selectedKeys",k)},onCheck:(k,L)=>{let A=Q(n.checkedKeys);if(gt(A)&&i.startSearch){const _=L.node.eventKey;A=wt(A,E(_)),L.checked&&A.push(_),n.checkedKeys=A}else n.checkedKeys=k;const m=Q(n.checkedKeys);b("update:value",m),b("check",m,L)},onRightClick:Ve});return Bt(c,"treeData","class")}),h=F(()=>i.startSearch?i.searchData:s(g)),r=F(()=>!h.value||h.value.length===0),{deleteNodeByKey:y,insertNodeByKey:p,insertNodesByKey:f,filterByLevel:u,updateNodeByKey:l,getAllKeys:v,getChildrenKeys:E,getEnabledKeys:N,getSelectedNode:W}=Rt(g,K);function Ue(c,k){return!k&&e.renderIcon&&re(e.renderIcon)?e.renderIcon(c):k}function Ve(L){return Ce(this,arguments,function*({event:c,node:k}){var M;const{rightMenuList:A=[],beforeRightClick:m}=e;let _={event:c,items:[]};if(m&&re(m)){let B=yield m(k,c);Array.isArray(B)?_.items=B:Object.assign(_,B)}else _.items=A;(M=_.items)!=null&&M.length&&(_.items=_.items.filter(B=>!B.hidden),C(_))})}function He(){return s(g)}function G(c){n.expandedKeys=c}function Xe(){return n.expandedKeys}function ye(c){n.selectedKeys=c}function Ye(){return n.selectedKeys}function pe(c){n.checkedKeys=c}function Re(){return n.checkedKeys}function ke(c){n.checkedKeys=c?N():[]}function ne(c){n.expandedKeys=c?v():[]}function ze(c){n.checkStrictly=c,b("update:checkStrictly",c)}H(()=>e.searchValue,c=>{c!==i.searchText&&(i.searchText=c)},{immediate:!0}),H(()=>e.treeData,c=>{c&&le(i.searchText)});function le(c){if(c!==i.searchText&&(i.searchText=c),b("update:searchValue",c),!c){i.startSearch=!1;return}const{filterFn:k,checkable:L,expandOnSearch:A,checkOnSearch:m,selectedOnSearch:_}=s(e);i.startSearch=!0;const{title:M,key:B}=s(K),D=[];if(i.searchData=xt(s(g),T=>{var J,q;const $=k?k(c,T,s(K)):(q=(J=T[M])==null?void 0:J.includes(c))!=null?q:!1;return $&&D.push(T[B]),$},s(K)),A){const T=bt(i.searchData).map($=>$[B]);T&&T.length&&G(T)}m&&L&&D.length&&pe(D),_&&D.length&&ye(D)}function We(c,k){if(!(!e.clickRowToExpand||!k||k.length===0))if(!n.expandedKeys.includes(c))G([...n.expandedKeys,c]);else{const L=[...n.expandedKeys],A=L.findIndex(m=>m===c);A!==-1&&L.splice(A,1),G(L)}}R(()=>{g.value=e.treeData}),$e(()=>{const c=parseInt(e.defaultExpandLevel);c>0?n.expandedKeys=u(c):e.defaultExpandAll&&ne(!0)}),R(()=>{n.expandedKeys=e.expandedKeys}),R(()=>{n.selectedKeys=e.selectedKeys}),R(()=>{n.checkedKeys=e.checkedKeys}),H(()=>e.value,()=>{n.checkedKeys=Q(e.value||[])},{immediate:!0}),H(()=>n.checkedKeys,()=>{const c=Q(n.checkedKeys);b("update:value",c),b("change",c)}),R(()=>{n.checkStrictly=e.checkStrictly});const Ge={getTreeData:He,setExpandedKeys:G,getExpandedKeys:Xe,setSelectedKeys:ye,getSelectedKeys:Ye,setCheckedKeys:pe,getCheckedKeys:Re,insertNodeByKey:p,insertNodesByKey:f,deleteNodeByKey:y,updateNodeByKey:l,getSelectedNode:W,checkAll:ke,expandAll:ne,filterByLevel:c=>{n.expandedKeys=u(c)},setSearchValue:c=>{le(c)},getSearchValue:()=>i.searchText};function Je(c){const{actionList:k}=e;if(!(!k||k.length===0))return k.map((L,A)=>{var _;let m=!0;return re(L.show)?m=(_=L.show)==null?void 0:_.call(L,c):we(L.show)&&(m=L.show),m?x("span",{key:A,class:S("action")},[L.render(c)]):null})}const qe=F(()=>{const c=de(h.value);return St(c,(k,L)=>{var xe;const A=i.searchText,{highlight:m}=s(e),{title:_,key:M,children:B}=s(K),D=Ue(k,k.icon),T=Ft(k,_),$=A?T.indexOf(A):-1,J=i.startSearch&&!Nt(A)&&m&&$!==-1,q=`color: ${we(m)?"#f50":m}`,Qe=J?x("span",{class:(xe=s(o))!=null&&xe.blockNode?`${S("content")}`:""},[x("span",null,[T.substr(0,$)]),x("span",{style:q},[A]),x("span",null,[T.substr($+A.length)])]):T,ge=D?x(Yt,{icon:D},null):a.icon?x("span",{class:"mr-2"},[Ee(a,"icon")]):null;return k[_]=x("span",{class:`${S("title")}`,onClick:We.bind(null,k[M],k[B])},[a!=null&&a.title?x(z,null,[ge,Ee(a,"title",k)]):x(z,null,[ge,Qe,x("span",{class:S("actions")},[Je(k)])])]),k}),c});return d(Ge),()=>{let c,k;const{title:L,helpMessage:A,toolbar:m,search:_,checkable:M,enableCustomTool:B}=e,D=L||m||_||a.headerTitle,T={height:"calc(100% - 38px)"};return x("div",{class:[S(),"h-full","rounded-lg",t.class]},[D&&x(Xt,{checkable:M,checkAll:ke,expandAll:ne,title:L,search:_,toolbar:m,helpMessage:A,checkStrictly:n.checkStrictly,onStrictlyChange:ze,onSearch:le,searchText:i.searchText,enableCustomTool:B},Ne(c=_e(a))?c:{default:()=>[c]}),x(Dt,{wrapperClassName:s(e.treeWrapperClassName),spinning:s(e.loading),tip:"加载中..."},{default:()=>[Ae(x(vt,{style:T},{default:()=>[x(It,Me(s(o),{showIcon:!1,treeData:qe.value}),Ne(k=_e(a,["title"]))?k:{default:()=>[k]})]}),[[Le,!s(r)]]),Ae(x(Te,{image:Te.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[Le,s(r)]])]})])}}});export{nn as _};
