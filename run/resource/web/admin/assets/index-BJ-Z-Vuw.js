var d=(n,e,s)=>new Promise((t,i)=>{var r=c=>{try{o(s.next(c))}catch(a){i(a)}},u=c=>{try{o(s.throw(c))}catch(a){i(a)}},o=c=>c.done?t(c.value):Promise.resolve(c.value).then(r,u);o((s=s.apply(n,e)).next())});import{ba as l,f as p,bb as f,Q as y,e as g}from"./antd-BRjMhd0C.js";function q(n){if(n&&n.component){const e=f(`${v(n.component)}_`);return n.key=e,n.field=e,!0}return f("key_")}function A(n,e){let s=[];if(l(n)){if(y(e))s=n.splice(e,1);else{const t=n.findIndex(e);t!==-1&&(s=n.splice(t,1))}return s.shift()}}function v(n){return n.replace(/([A-Z])/g,"_$1").toLowerCase()}function h(n,e){if(!l(n))return;const s=t=>{t.forEach(i=>{var r;["Grid"].includes(i.component)?(r=i.columns)==null||r.forEach(u=>s(u.children)):e(i)})};s(n)}const F=(n,e)=>{let s;const t=i=>i.some(r=>{var o;const{component:u}=r;return["Grid"].includes(u)?(o=r.columns)==null?void 0:o.some(c=>t(c.children)):(e(r)&&(s=r),e(r))});return t(n),s},x=n=>{const e=p(n);return delete e.currentItem,delete e.activeKey,e.schemas&&h(e.schemas,s=>{delete s.icon,delete s.key}),e},E=n=>d(void 0,null,function*(){try{return g(n)?yield n():n}catch(e){return[]}}),_=n=>{h(n,e=>{"required"in e&&(!l(e.rules)&&(e.rules=[]),e.rules.push({required:!0,message:e.message}),delete e.required,delete e.message)})};export{h as a,_ as b,A as c,F as f,q as g,E as h,x as r};
