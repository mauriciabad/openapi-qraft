"use strict";(self.webpackChunkopenapi_qraft_website=self.webpackChunkopenapi_qraft_website||[]).push([[122],{8840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(2540),a=n(3023),o=n(8296),s=n(2491);const i={sidebar_position:2,sidebar_label:"createAPIClient"},l="createAPIClient(...)",c={id:"codegen/create-api-client-function",title:"createAPIClient(...)",description:"Qraft CLI generates a helper function createAPIClient(...), which creates a Qraft API client with",source:"@site/docs/codegen/create-api-client-function.mdx",sourceDirName:"codegen",slug:"/codegen/create-api-client-function",permalink:"/openapi-qraft/docs/codegen/create-api-client-function",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenAPI-Qraft/openapi-qraft/edit/main/website/docs/codegen/create-api-client-function.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"createAPIClient"},sidebar:"mainDocsSidebar",previous:{title:"CLI",permalink:"/openapi-qraft/docs/codegen/cli"},next:{title:"QraftContext",permalink:"/openapi-qraft/docs/hooks/qraft-context"}},u={},d=[{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"createapiclient",children:"createAPIClient(...)"}),"\n",(0,r.jsxs)(t.p,{children:["Qraft CLI generates a helper function ",(0,r.jsx)(t.code,{children:"createAPIClient(...)"}),", which creates a Qraft API client with\nthe necessary context for React Hooks."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { createAPIClient } from './api'\n\nconst qraft = createAPIClient({\n  context,\n})\n"})}),"\n",(0,r.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"options?: QraftClientOptions"})," - ",(0,r.jsx)(t.strong,{children:"Optional"})," options to be used by the Qraft API client","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"options.context?: Context<QraftContextValue>"})," - ",(0,r.jsx)(t.strong,{children:"Optional"})," custom Context to be used by Qraft Hooks.\nIf not provided, a ",(0,r.jsx)(t.em,{children:"default"})," ",(0,r.jsx)(t.code,{children:"QraftContext"})," will be used. The custom Context must be used\nwhen multiple Qraft API clients for the multiple OpenAPIs are used in the same application.\nIn case if you are going to publish your API client as a library, it's ",(0,r.jsx)(t.em,{children:"highly"})," recommended to use a custom Context."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"qraft"})," - The Qraft API client with the necessary context for Qraft Hooks.\nIt contains all the methods to interact with the API grouped in services."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(s.A,{value:"basic",label:"Basic",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="src/fetch-queries.ts"',children:"import { requestFn } from '@openapi-qraft/react';\nimport { createAPIClient } from './api';\n\nimport { QueryClient, dehydrate } from '@tanstack/react-query';\n\nconst queryClient = new QueryClient();\n\n// \u2b07\ufe0e Create a Qraft API client\nconst qraft = createAPIClient()\n\nconst parameters = {\n  path: { petId: 1 },\n};\n\n// \u2b07\ufe0e Fetch the `getPetById` query with the `queryClient`\nconst pet = await qraft.pet.getPetById.fetchQuery(\n  {\n    parameters,\n    requestFn: requestFn,\n    baseUrl: 'https://api.sandbox.monite.com/v1',\n  },\n  queryClient\n);\n\nconsole.log(pet.name); // `pet` is the result of the `getPetById` request\n\ndehydrate(queryClient); // Dehydrate the `queryClient` to be used for SSR\n"})})}),(0,r.jsxs)(s.A,{value:"custom-provider",label:(0,r.jsxs)(t.span,{style:{verticalAlign:"middle"},children:["Custom ",(0,r.jsx)(t.code,{children:"context"})]}),children:[(0,r.jsxs)(t.p,{children:["With the ",(0,r.jsx)(t.code,{children:"options.context"}),", you can specify a custom ",(0,r.jsx)(t.em,{children:"Context"})," to be used by the Qraft API client.\nIt's useful if you want to publish your ",(0,r.jsx)(t.strong,{children:"API client as an NPM library"}),". In this case, you **must provide\na custom ",(0,r.jsx)(t.em,{children:"Context"})," instead of ",(0,r.jsx)(t.code,{children:"QraftContext"}),", to prevent conflicts with other API clients in the same application.\nThe client can use the standard ",(0,r.jsx)(t.code,{children:"QueryClient"})," from the ",(0,r.jsx)(t.code,{children:"<QueryClientProvider/>"})," of TanStack,\nor even ",(0,r.jsx)(t.code,{children:"<QraftContext/>"})," from client's application. That's why the ",(0,r.jsx)(t.code,{children:"queryClient"})," must be also provided\nto the custom Qraft ",(0,r.jsx)(t.em,{children:"Context"})," ",(0,r.jsx)(t.code,{children:"value"}),"."]}),(0,r.jsxs)(o.A,{children:[(0,r.jsx)(s.A,{value:"custom-api-provider",label:(0,r.jsx)(t.code,{children:"src/CustomAPIProvider.ts"}),default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="src/CustomAPIProvider.ts"',children:"import { QraftContextValue, requestFn } from '@openapi-qraft/react';\nimport { createAPIClient } from './api';\n\nimport React, { createContext, useMemo, useEffect, useContext } from \"react\";\nimport { QueryClient } from '@tanstack/react-query'\n\n// \u2b07\ufe0e Create a custom Context with the `QraftContextValue` type\nconst CustomQraftContext = createContext<QraftContextValue>(undefined);\n\nexport function createCustomAPIClient() {\n  // \u2b07\ufe0e Create a Qraft API client with the custom Context\n  return createAPIClient({ context: CustomQraftContext });\n}\n\nexport function CustomAPIProvider({ children }: { children: React.ReactNode }) {\n  const queryClient = useMemo(() => new QueryClient(), []);\n\n  useEffect(() => {\n    // \u2b07\ufe0e Mount and unmount the `queryClient`,\n    //   so you will NOT be needed to use `<QueryClientProvider/>` from TanStack\n    queryClient.mount();\n    return () => {\n      queryClient.unmount();\n    };\n  }, [queryClient]);\n\n  return (\n    <CustomQraftContext.Provider\n      value={{\n        queryClient, // \u2b05\ufe0e specify the `queryClient` to be used by the Hooks\n        requestFn,\n        baseUrl: 'https://api.sandbox.monite.com/v1',\n      }}\n    >\n      {children}\n    </CustomQraftContext.Provider>\n  );\n}\n"})})}),(0,r.jsx)(s.A,{value:"custom-api-provider-app",label:(0,r.jsx)(t.code,{children:"src/App.tsx"}),children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="src/App.tsx"',children:"import { createCustomAPIClient, CustomAPIProvider } from './CustomAPIProvider'\n\nconst qraft = createCustomAPIClient()\n\nexport default function App() {\n  // \u2b07\ufe0e with the `CustomAPIProvider` you don't need to use`<QueryClientProvider />` from TanStack\n  // because the `queryClient` is already provided by the `<CustomAPIProvider/>`\n  return (\n    <CustomAPIProvider>\n      <ExampleComponent />\n    </CustomAPIProvider>\n  )\n}\n\nfunction ExampleComponent() {\n  const { data: pet } = qraft.pet.getPetById.useQuery({ parameters: { petId: 1 } })\n\n  return (\n    <div>\n      {pet && <h2>{pet.name}</h2>}\n    </div>\n  )\n}\n"})})})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["You can call the ",(0,r.jsx)(t.code,{children:"createAPIClient(...)"})," function multiple times, inside the ",(0,r.jsx)(t.em,{children:"Components"}),",\nserver side code, or create an external file to ",(0,r.jsx)(t.em,{children:"export"})," the ",(0,r.jsx)(t.code,{children:"qraft"})," object. All methods are valid \u2714\ufe0e\nas long as you provide the same ",(0,r.jsx)(t.code,{children:"options"}),"."]})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2491:(e,t,n)=>{n.d(t,{A:()=>s});n(3696);var r=n(1750);const a={tabItem:"tabItem_wHwb"};var o=n(2540);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},8296:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(3696),a=n(1750),o=n(766),s=n(9519),i=n(4395),l=n(5043),c=n(4544),u=n(8708);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=m({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,o]),tabValues:o}}var x=n(6681);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var C=n(2540);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,C.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,C.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,C.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=f(e);return(0,C.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,C.jsx)(v,{...e,...t}),(0,C.jsx)(y,{...e,...t})]})}function I(e){const t=(0,x.A)();return(0,C.jsx)(g,{...e,children:d(e.children)},String(t))}},3023:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(3696);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);