"use strict";(self.webpackChunkopenapi_qraft_website=self.webpackChunkopenapi_qraft_website||[]).push([[488],{9322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(2540),a=n(3023),s=n(8296),l=n(2491);const i={sidebar_label:"setQueryData"},c="setQueryData(...)",u={id:"query-client/setQueryData",title:"setQueryData(...)",description:"The method enables direct access to the QueryClient cache to set the data for a specific Query.",source:"@site/docs/query-client/setQueryData.mdx",sourceDirName:"query-client",slug:"/query-client/setQueryData",permalink:"/openapi-qraft/docs/query-client/setQueryData",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenAPI-Qraft/openapi-qraft/edit/main/website/docs/query-client/setQueryData.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"setQueryData"},sidebar:"mainDocsSidebar",previous:{title:"setInfiniteQueryData",permalink:"/openapi-qraft/docs/query-client/setInfiniteQueryData"}},o={},d=[{value:"Arguments",id:"arguments",level:2},{value:"Arguments",id:"arguments-1",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"setquerydata",children:"setQueryData(...)"}),"\n",(0,r.jsxs)(t.p,{children:["The method enables direct access to the ",(0,r.jsx)(t.code,{children:"QueryClient"})," cache to set the data for a specific ",(0,r.jsx)(t.em,{children:"Query"}),".\nSee the TanStack ",(0,r.jsx)(t.a,{href:"https://tanstack.com/query/latest/docs/reference/QueryClient#queryclientsetquerydata",children:(0,r.jsx)(t.em,{children:"queryClient.setQueryData \ud83c\udf34"})})," documentation."]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"without-options",label:(0,r.jsxs)(t.span,{style:{verticalAlign:"middle"},children:["Without ",(0,r.jsx)(t.code,{children:"options"})]}),default:!0,children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const data = qraft.<service>.<operation>.setQueryData(\n  parameters,\n  data,\n  queryClient\n);\n"})}),(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"parameters: { path, query, header } | QueryKey"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Required"})," parameters to set the data in the ",(0,r.jsx)(t.em,{children:"Query Cache"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Instead of an object with ",(0,r.jsx)(t.code,{children:"{path, query, header}"}),", you can pass a ",(0,r.jsx)(t.code,{children:"QueryKey"})," as an array\nwhich is also strictly-typed \u2728"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"data: TData"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Required"})," data to set in the cache"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"queryClient: QueryClient"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Required"})," ",(0,r.jsx)(t.code,{children:"QueryClient"})," instance to use"]}),"\n"]}),"\n"]}),"\n"]})]}),(0,r.jsxs)(l.A,{value:"with-options",label:(0,r.jsxs)(t.span,{style:{verticalAlign:"middle"},children:["With ",(0,r.jsx)(t.code,{children:"options"})]}),children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const data = qraft.<service>.<operation>.setQueryData(\n  parameters,\n  data,\n  options,\n  queryClient\n);\n"})}),(0,r.jsx)(t.h2,{id:"arguments-1",children:"Arguments"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"parameters: { path, query, header } | QueryKey"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Required"})," parameters to set the data in the ",(0,r.jsx)(t.em,{children:"Query Cache"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Instead of an object with ",(0,r.jsx)(t.code,{children:"{path, query, header}"}),", you can pass a ",(0,r.jsx)(t.code,{children:"QueryKey"})," as an array\nwhich is also strictly-typed \u2728"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"data: TData"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Required"})," data to set in the cache"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"options: SetQueryDataOptions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Optional"})," options to set the data in the cache"]}),"\n",(0,r.jsxs)(t.li,{children:["See the TanStack ",(0,r.jsx)(t.a,{href:"https://tanstack.com/query/latest/docs/reference/QueryClient#queryclientsetquerydata",children:(0,r.jsx)(t.em,{children:"queryClient.setQueryData \ud83c\udf34"})})," documentation."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"queryClient: QueryClient"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Required"})," ",(0,r.jsx)(t.code,{children:"QueryClient"})," instance to use"]}),"\n"]}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:["The data from the updater or ",(0,r.jsx)(t.code,{children:"undefined"})," if it returns nothing, strictly-typed \u2728"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"without-options",label:(0,r.jsxs)(t.span,{style:{verticalAlign:"middle"},children:["Without ",(0,r.jsx)(t.code,{children:"options"})]}),children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const parameters = { path: { petId: 123 } };\n\nqraft.pet.getPetById.setQueryData(\n  parameters,\n  { id: 123, name: 'Rex' },\n  queryClient\n);\n\nconst pet = qraft.pet.getPetById.getQueryData(\n  parameters,\n  queryClient\n);\n\nexpect(pet).toEqual({\n  id: 123,\n  name: 'Rex',\n});\n"})})}),(0,r.jsx)(l.A,{value:"with-options",label:(0,r.jsxs)(t.span,{style:{verticalAlign:"middle"},children:["With ",(0,r.jsx)(t.code,{children:"options"})]}),children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const pet = qraft.pet.getPetById.setQueryData(\n  { path: { petId: 123 } },\n  { id: 123, name: 'Rex' },\n  { updatedAt: Date.now() - 60_000 },\n  queryClient\n);\n"})})}),(0,r.jsxs)(l.A,{value:"with-query-key",label:(0,r.jsxs)(t.span,{style:{verticalAlign:"middle"},children:["With ",(0,r.jsx)(t.code,{children:"QueryKey"})]}),children:[(0,r.jsxs)(t.p,{children:["It's also possible to use a ",(0,r.jsx)(t.code,{children:"QueryKey"})," as an array instead of an object with ",(0,r.jsx)(t.code,{children:"{path, query, header}"}),":"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const pet = qraft.pet.getPetById.setQueryData(\n  [\n    { method: 'get', url: '/pet/{petId}' },\n    { petId: 123 },\n  ],\n  { id: 123, name: 'Rex' },\n  queryClient\n);\n"})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2491:(e,t,n)=>{n.d(t,{A:()=>l});n(3696);var r=n(1750);const a={tabItem:"tabItem_wHwb"};var s=n(2540);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},8296:(e,t,n)=>{n.d(t,{A:()=>q});var r=n(3696),a=n(1750),s=n(766),l=n(9519),i=n(4395),c=n(5043),u=n(4544),o=n(8708);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=x({queryString:n,groupId:a}),[y,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,o.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),j=(()=>{const e=u??y;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(6681);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var f=n(2540);function b(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),o=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:o,...s,className:(0,a.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=y(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...e,...t}),(0,f.jsx)(g,{...e,...t})]})}function q(e){const t=(0,m.A)();return(0,f.jsx)(v,{...e,children:d(e.children)},String(t))}},3023:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(3696);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);