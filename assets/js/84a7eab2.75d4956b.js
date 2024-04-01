"use strict";(self.webpackChunkopenapi_qraft_website=self.webpackChunkopenapi_qraft_website||[]).push([[4305],{3776:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=s(2540),r=s(3023);const i={sidebar_label:"useSuspenseInfiniteQuery"},o="useSuspenseInfiniteQuery(...)",a={id:"hooks/useSuspenseInfiniteQuery",title:"useSuspenseInfiniteQuery(...)",description:"The Hook enables you to perform asynchronous data fetching operations with support for infinite scrolling scenarios.",source:"@site/docs/hooks/useSuspenseInfiniteQuery.mdx",sourceDirName:"hooks",slug:"/hooks/useSuspenseInfiniteQuery",permalink:"/openapi-qraft/docs/hooks/useSuspenseInfiniteQuery",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenAPI-Qraft/openapi-qraft/edit/main/website/docs/hooks/useSuspenseInfiniteQuery.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"useSuspenseInfiniteQuery"},sidebar:"mainDocsSidebar",previous:{title:"useQueries",permalink:"/openapi-qraft/docs/hooks/useQueries"},next:{title:"useSuspenseQueries",permalink:"/openapi-qraft/docs/hooks/useSuspenseQueries"}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const n={a:"a",code:"code",del:"del",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"usesuspenseinfinitequery",children:"useSuspenseInfiniteQuery(...)"}),"\n",(0,t.jsxs)(n.p,{children:["The Hook enables you to perform asynchronous data fetching operations with support for infinite scrolling scenarios.\nThe functionality is similar to the ",(0,t.jsx)(n.a,{href:"/openapi-qraft/docs/hooks/useInfiniteQuery",children:(0,t.jsx)(n.em,{children:"useInfiniteQuery"})})," hook, but with the added benefit\nof Suspense support.\nFor more detailed information, explore ",(0,t.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseInfiniteQuery",children:(0,t.jsx)(n.em,{children:"useSuspenseInfiniteQuery(...) \ud83c\udf34"})})," documentation for more details."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const query = qraft.<service>.<operation>.useSuspenseInfiniteQuery(\n  parameters,\n  suspenseInfiniteQueryOptions,\n  queryClient,\n)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"parameters: { path, query, header } | QueryKey | {}"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Required"})," and strictly-typed \u2728 parameters for the query"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"parameters"})," will be used to generate the ",(0,t.jsx)(n.code,{children:"QueryKey"})]}),"\n",(0,t.jsxs)(n.li,{children:["Instead of an object with ",(0,t.jsx)(n.code,{children:"{path, query, header}"}),", you can pass a ",(0,t.jsx)(n.code,{children:"QueryKey"})," as an array\nwhich is also strictly-typed \u2728"]}),"\n",(0,t.jsxs)(n.li,{children:["If operation does not require parameters, you must pass an empty object ",(0,t.jsx)(n.code,{children:"{}"})," for strictness"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"suspenseInfiniteQueryOptions?: UseSuspenseInfiniteQueryOptions"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Optional"}),", represents the options of the\n",(0,t.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseInfiniteQuery",children:(0,t.jsx)(n.em,{children:"useSuspenseInfiniteQuery(...) \ud83c\udf34"})}),"\nHook","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"queryOptions.queryFn"})," could be provided to override the default ",(0,t.jsx)(n.code,{children:"queryFn"})," used by Qraft"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.del,{children:(0,t.jsx)(n.code,{children:"queryOptions.queryKey"})})," is not allowed, as it will be generated from ",(0,t.jsx)(n.code,{children:"parameters"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"queryClient?: QueryClient"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Optional"})," ",(0,t.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/reference/QueryClient",children:(0,t.jsx)(n.em,{children:"QueryClient \ud83c\udf34"})})," to be used"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"If not provided"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"QraftContext.queryClient"})," will be used if available"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://tanstack.com/query/latest/docs/framework/react/reference/useQueryClient",children:(0,t.jsx)(n.em,{children:"useQueryClient() \ud83c\udf34"})}),"\nresult will be used as a fallback"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="src/PostList.tsx"',children:"import { Suspense } from 'react';\nimport { createAPIClient } from './api'; // generated by OpenAPI Qraft CLI\n\nconst qraft = createAPIClient();\n\nfunction PostList() {\n  /**\n   * `qraft.posts.getPosts.useSuspenseInfiniteQuery(...)` launches the initial fetch operation:\n   * ###\n   * GET /posts?limit=10&page=1\n   */\n  const infiniteQuery = qraft.posts.getPosts.useSuspenseInfiniteQuery(\n    { query: { limit: 10 } },\n    {\n      getNextPageParam: (lastPage, allPages, lastPageParams) => {\n        if (lastPage.length < 10) return; // if less than 10 items, there are no more pages\n        return {\n          query: {\n            page: Number(lastPageParams.query?.page) + 1,\n          },\n        };\n      },\n      initialPageParam: {\n        query: {\n          page: 1, // will be used in initial request\n        },\n      },\n    }\n  );\n\n  return (\n    <div>\n      {infiniteQuery.data.pages.map((page, pageIndex) => (\n        <ul key={pageIndex}>\n          {page.map((post) => (\n            <li key={post.id}>{post.title}</li>\n          ))}\n        </ul>\n      ))}\n      <button onClick={() => {\n        // \u2b07\ufe0e Initiates a GET request: GET /posts?limit=10&page=2\n        infiniteQuery.fetchNextPage()\n      }}>\n        Load More\n      </button>\n    </div>\n  );\n}\n\nexport default function() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <PostList />\n    </Suspense>\n  );\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(3696);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);