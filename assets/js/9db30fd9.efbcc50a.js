"use strict";(self.webpackChunkopenapi_qraft_website=self.webpackChunkopenapi_qraft_website||[]).push([[8550],{5540:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=s(2540),t=s(3023);const i={sidebar_label:"useSuspenseQuery"},o="useSuspenseQuery(...)",l={id:"hooks/useSuspenseQuery",title:"useSuspenseQuery(...)",description:"See the useSuspenseQuery(...) \ud83c\udf34 documentation.",source:"@site/docs/hooks/useSuspenseQuery.mdx",sourceDirName:"hooks",slug:"/hooks/useSuspenseQuery",permalink:"/openapi-qraft/docs/hooks/useSuspenseQuery",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenAPI-Qraft/openapi-qraft/edit/main/website/docs/hooks/useSuspenseQuery.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"useSuspenseQuery"},sidebar:"mainDocsSidebar",previous:{title:"useSuspenseQueries",permalink:"/openapi-qraft/docs/hooks/useSuspenseQueries"},next:{title:"cancelQueries",permalink:"/openapi-qraft/docs/query-client/cancelQueries"}},a={},c=[{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}];function u(e){const n={a:"a",code:"code",del:"del",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"usesuspensequery",children:"useSuspenseQuery(...)"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery",children:(0,r.jsx)(n.em,{children:"useSuspenseQuery(...) \ud83c\udf34"})})," documentation."]}),"\n",(0,r.jsxs)(n.p,{children:["The Hook enables you to perform asynchronous data fetching operations,\nsimilar to ",(0,r.jsx)(n.a,{href:"/openapi-qraft/docs/hooks/useQuery",children:(0,r.jsx)(n.em,{children:"useQuery"})})," Hook, but with the added benefit of Suspense support.\nSee the TanStack ",(0,r.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery",children:(0,r.jsx)(n.em,{children:"useSuspenseQuery(...) \ud83c\udf34"})}),"\ndocumentation for more details."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const result = qraft.<service>.<operation>.useSuspenseQuery(\n  parameters,\n  queryOptions,\n  queryClient,\n)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"parameters: { path, query, header } | QueryKey | {}"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Required"}),", OpenAPI request parameters for the query, strictly-typed \u2728"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"parameters"})," will be used to generate the ",(0,r.jsx)(n.code,{children:"QueryKey"})]}),"\n",(0,r.jsxs)(n.li,{children:["Instead of an object with ",(0,r.jsx)(n.code,{children:"{path, query, header}"}),", you can pass a ",(0,r.jsx)(n.code,{children:"QueryKey"})," as an array\nwhich is also strictly-typed \u2728"]}),"\n",(0,r.jsxs)(n.li,{children:["If operation does not require parameters, you must pass an empty object ",(0,r.jsx)(n.code,{children:"{}"})," for strictness"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"queryOptions?: UseQueryOptions"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Optional"}),", represents the options of the ",(0,r.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery",children:(0,r.jsx)(n.em,{children:"useSuspenseQuery(...) \ud83c\udf34"})})," Hook","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"queryOptions.queryFn"})," could be provided to override the default ",(0,r.jsx)(n.code,{children:"queryFn"})," used by Qraft"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.del,{children:(0,r.jsx)(n.code,{children:"queryOptions.queryKey"})})," is not allowed, as it will be generated from ",(0,r.jsx)(n.code,{children:"parameters"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"queryClient?: QueryClient"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Optional"})," ",(0,r.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/reference/QueryClient",children:(0,r.jsx)(n.em,{children:"QueryClient \ud83c\udf34"})})," to be used"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"If not provided"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"QraftContext.queryClient"})," will be used if available"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/framework/react/reference/useQueryClient",children:(0,r.jsx)(n.em,{children:"useQueryClient() \ud83c\udf34"})}),"\nresult will be used as a fallback"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"TData"})," - the result from the query"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="src/ApprovalPolicyName.tsx"',children:'import  { Suspense } from \'react\';\nimport { createAPIClient } from \'./api\'; // generated by OpenAPI Qraft CLI\n\nconst qraft = createAPIClient();\n\nfunction ApprovalPolicyName() {\n  /**\n   * `<service>.<operation>.useSuspenseQuery(...)` initiates\n   * the request for data retrieval:\n   * ###\n   * GET /approval_policies/321?items_order=asc&items_order=desc\n   * x-monite-version: 1.0.0\n   */\n  const approvalPolicy =\n    qraft.approvalPolicies.getApprovalPoliciesId.useSuspenseQuery(\n      {\n        header: {\n          "x-monite-version": "1.0.0",\n        },\n        path: {\n          approval_policy_id: "123",\n        },\n        query: {\n          items_order: ["asc", "desc"],\n        },\n      },\n    );\n\n  return <div>Approval Policy: {approvalPolicy.name}</div>;\n}\n\nexport default function() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <ApprovalPolicyName />\n    </Suspense>\n  );\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(3696);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);