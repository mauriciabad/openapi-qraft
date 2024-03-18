"use strict";(self.webpackChunkopenapi_qraft_website=self.webpackChunkopenapi_qraft_website||[]).push([[546],{9154:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(2540),r=s(3023);const i={sidebar_label:"useIsFetching"},l="useIsFetching(...)",c={id:"hooks/useIsFetching",title:"useIsFetching(...)",description:"The Hook enables you to monitor the number of queries,",source:"@site/docs/hooks/useIsFetching.mdx",sourceDirName:"hooks",slug:"/hooks/useIsFetching",permalink:"/openapi-qraft/docs/hooks/useIsFetching",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenAPI-Qraft/openapi-qraft/edit/main/website/docs/hooks/useIsFetching.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"useIsFetching"},sidebar:"mainDocsSidebar",previous:{title:"useInfiniteQuery",permalink:"/openapi-qraft/docs/hooks/useInfiniteQuery"},next:{title:"useMutationState",permalink:"/openapi-qraft/docs/hooks/useMutationState"}},o={},a=[{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"useisfetching",children:"useIsFetching(...)"}),"\n",(0,t.jsxs)(n.p,{children:["The Hook enables you to monitor the number of queries,\nmatching the provided filters. This can be useful for creating loading indicators\nor performing other actions based on whether any requests are currently in progress.\nSee the TanStack ",(0,t.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/framework/react/reference/useIsFetching",children:(0,t.jsx)(n.em,{children:"useIsFetching(...) \ud83c\udf34"})})," documentation for more details."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const queriesAmount = qraft.<service>.<operation>.useIsFetching(\n  filters,\n  queryClient,\n)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filters?: QueryFiltersByParameters | QueryFiltersByQueryKey"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Optional"}),", represents the ",(0,t.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/framework/react/guides/filters#query-filters",children:(0,t.jsx)(n.em,{children:"Query Filters \ud83c\udf34"})}),"\nto be used, strictly-typed \u2728"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filters.parameters: Record<'path' | 'query' | 'header', Record<string, any>>"})," will be used for filtering queries by parameters"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filters.queryKey: QueryKey"})," will be used for filtering queries by instead of parameters","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filters.queryKey"})," and ",(0,t.jsx)(n.code,{children:"filters.parameters"})," are mutually exclusive"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filters.predicate?: (query: Query) => boolean"})," will be used for filtering queries by custom predicate"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"queryClient?: QueryClient"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Optional"})," ",(0,t.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/reference/QueryClient",children:(0,t.jsx)(n.em,{children:"QueryClient \ud83c\udf34"})})," to be used"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"If not provided"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"QraftContext.queryClient"})," will be used if available"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/framework/react/reference/useQueryClient",children:(0,t.jsx)(n.em,{children:"useQueryClient() \ud83c\udf34"})}),"\nresult will be used as a fallback"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"queriesAmount: number"}),": The number of queries that are matching the provided filters."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="src/FetchStatus.tsx"',children:"function FetchStatus() {\n  // Checks all queries `GET /entities`\n  const fetchingTotal = qraft.entities.getEntities.useIsFetching();\n\n  // Checks all queries `GET /entities/3e3e-3e3e-3e3e` and `x-monite-version: 2023-09-01` header\n  const specificQueryKeyTotal = qraft.entities.getEntities.useIsFetching({\n    parameters: {\n      header: {\n        'x-monite-version': '2023-09-01',\n      },\n      path: {\n        entity_id: '3e3e-3e3e-3e3e',\n      },\n    },\n  });\n\n  return (\n    <>\n      {!!fetchingTotal && <div>Number of queries: {fetchingTotal}...</div>}\n      {!!specificQueryKeyTotal && <div>Loading specific query...</div>}\n    </>\n  );\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},3023:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(3696);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);