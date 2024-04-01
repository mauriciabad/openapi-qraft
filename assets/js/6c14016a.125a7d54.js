"use strict";(self.webpackChunkopenapi_qraft_website=self.webpackChunkopenapi_qraft_website||[]).push([[2427],{3160:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(2540),a=t(3023),s=t(8296),l=t(2491);const i={sidebar_label:"getQueryKey"},u="getQueryKey(...)",o={id:"query-client/getQueryKey",title:"getQueryKey(...)",description:"The method provides a standardized way to generate QueryKey for Queries.",source:"@site/docs/query-client/getQueryKey.mdx",sourceDirName:"query-client",slug:"/query-client/getQueryKey",permalink:"/openapi-qraft/docs/query-client/getQueryKey",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenAPI-Qraft/openapi-qraft/edit/main/website/docs/query-client/getQueryKey.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"getQueryKey"},sidebar:"mainDocsSidebar",previous:{title:"getQueryData",permalink:"/openapi-qraft/docs/query-client/getQueryData"},next:{title:"getQueryState",permalink:"/openapi-qraft/docs/query-client/getQueryState"}},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}];function h(e){const r={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"getquerykey",children:"getQueryKey(...)"}),"\n",(0,n.jsxs)(r.p,{children:["The method provides a standardized way to generate ",(0,n.jsx)(r.code,{children:"QueryKey"})," for ",(0,n.jsx)(r.em,{children:"Queries"}),".\nSee TanStack ",(0,n.jsx)(r.a,{href:"https://tanstack.com/query/latest/docs/framework/react/guides/query-keys",children:(0,n.jsx)(r.em,{children:"Query Keys \ud83c\udf34"})})," guide for more information."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const queryKey = qraft.<service>.<operation>.getQueryKey(parameters);\n"})}),"\n",(0,n.jsx)(r.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"parameters: { path, query, header } | undefined"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Optional"}),", OpenAPI request parameters for the query, strictly-typed \u2728"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"parameters"})," will be used to generate the ",(0,n.jsx)(r.code,{children:"QueryKey"})]}),"\n",(0,n.jsxs)(r.li,{children:["If not specified, returns a ",(0,n.jsx)(r.code,{children:"QueryKey"})," with ",(0,n.jsx)(r.code,{children:"{}"})," as a ",(0,n.jsx)(r.em,{children:"Query"})," parameters"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"QueryKey"})," - a query key for the ",(0,n.jsx)(r.em,{children:"operation"})," ",(0,n.jsx)(r.em,{children:"parameters"})]}),"\n",(0,n.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"with-parameters",label:(0,n.jsxs)(r.span,{style:{verticalAlign:"middle"},children:["With ",(0,n.jsx)(r.code,{style:{display:"inline-block"},children:"parameters"})]}),default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"const queryKey = qraft.files.getFiles.getQueryKey({\n  header: { 'x-monite-version': '1.0.0' },\n  query: { id__in: ['1', '2'] },\n});\n\n// `queryKey` will be an array of objects\nexpect(queryKey).toEqual([\n  { method: 'get', url: '/files' },\n  {\n    header: { 'x-monite-version': '1.0.0' },\n    query: { id__in: ['1', '2'] }\n  }\n]);\n"})})}),(0,n.jsx)(l.A,{value:"without-parameters",label:(0,n.jsxs)(r.span,{style:{verticalAlign:"middle"},children:["Without ",(0,n.jsx)(r.code,{style:{display:"inline-block",textDecoration:"line-through"},children:"parameters"})]}),default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:"const queryKey = qraft.files.getFiles.getQueryKey();\n\n// `queryKey` will be an array of objects\nexpect(queryKey).toEqual([\n  { method: 'get', url: '/files' },\n  {}\n]);\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2491:(e,r,t)=>{t.d(r,{A:()=>l});t(3696);var n=t(1750);const a={tabItem:"tabItem_wHwb"};var s=t(2540);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:t,children:r})}},8296:(e,r,t)=>{t.d(r,{A:()=>q});var n=t(3696),a=t(1750),s=t(766),l=t(9519),i=t(4395),u=t(5043),o=t(4544),c=t(8708);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function y(e){let{queryString:r=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=h(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[o,d]=y({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=o??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(6681);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=t(2540);function g(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const r=e.currentTarget,t=u.indexOf(r),a=i[t].value;a!==n&&(o(r),l(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function j(e){const r=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...e,...r}),(0,x.jsx)(v,{...e,...r})]})}function q(e){const r=(0,f.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(r))}},3023:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var n=t(3696);const a={},s=n.createContext(a);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);