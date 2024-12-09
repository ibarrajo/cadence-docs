"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[2779],{2123:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"concepts/queries","title":"Synchronous query","description":"Workflowworkflow_executionqueryworkflowqueryworkflow: type exposing different information to different external systems.","source":"@site/docs/03-concepts/04-queries.md","sourceDirName":"03-concepts","slug":"/concepts/queries","permalink":"/cadence-docs/docs/concepts/queries","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/03-concepts/04-queries.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"layout":"default","title":"Synchronous query","permalink":"/docs/concepts/queries"},"sidebar":"docsSidebar","previous":{"title":"Event handling","permalink":"/cadence-docs/docs/concepts/events"},"next":{"title":"Deployment topology","permalink":"/cadence-docs/docs/concepts/topology"}}');var r=o(4848),c=o(8453);const a={layout:"default",title:"Synchronous query",permalink:"/docs/concepts/queries"},s="Synchronous query",i={},l=[{value:"Stack Trace Query",id:"stack-trace-query",level:2}];function u(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"synchronous-query",children:"Synchronous query"})}),"\n",(0,r.jsx)(n.p,{children:"Workflow code is stateful with the Cadence framework preserving it over various software and hardware failures. The state is constantly mutated during workflow_execution. To expose this internal state to the external world Cadence provides a synchronous query feature. From the workflow implementer point of view the query is exposed as a synchronous callback that is invoked by external entities. Multiple such callbacks can be provided per workflow type exposing different information to different external systems."}),"\n",(0,r.jsxs)(n.p,{children:["To execute a query an external client calls a synchronous Cadence API providing ",(0,r.jsx)(n.em,{children:"domain, workflowID, query name"})," and optional ",(0,r.jsx)(n.em,{children:"query arguments"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Query callbacks must be read-only not mutating the workflow state in any way. The other limitation is that the query callback cannot contain any blocking code. Both above limitations rule out ability to invoke activities from the query handlers."}),"\n",(0,r.jsxs)(n.p,{children:["Cadence team is currently working on implementing ",(0,r.jsx)(n.em,{children:"update"})," feature that would be similar to query in the way it is invoked, but would support workflow state mutation and local_activity invocations. From user's point of view, ",(0,r.jsx)(n.em,{children:"update"})," is similar to signal + strong consistent query, but implemented in a much less expensive way in Cadence."]}),"\n",(0,r.jsx)(n.h2,{id:"stack-trace-query",children:"Stack Trace Query"}),"\n",(0,r.jsxs)(n.p,{children:["The Cadence client libraries expose some predefined queries out of the box. Currently the only supported built-in query is ",(0,r.jsx)(n.em,{children:"stack_trace"}),". This query returns stacks of all workflow owned threads. This is a great way to troubleshoot any workflow in production."]}),"\n",(0,r.jsx)(n.p,{children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$cadence --do samples-domain wf query -w <workflowID> -qt __stack_trace\n"coroutine 1 [blocked on selector-1.Select]:\\nmain.sampleSignalCounterWorkflow(0x1a99ae8, 0xc00009d700, 0x0, 0x0, 0x0)\\n\\t/Users/qlong/indeed/cadence-samples/cmd/samples/recipes/signalcounter/signal_counter_workflow.go:38 +0x1be\\nreflect.Value.call(0x1852ac0, 0x19cb608, 0x13, 0x1979180, 0x4, 0xc00045aa80, 0x2, 0x2, 0x2, 0x18, ...)\\n\\t/usr/local/Cellar/go/1.16.3/libexec/src/reflect/value.go:476 +0x8e7\\nreflect.Value.Call(0x1852ac0, 0x19cb608, 0x13, 0xc00045aa80, 0x2, 0x2, 0x1, 0x2, 0xc00045a720)\\n\\t/usr/local/Cellar/go/1.16.3/libexec/src/reflect/value.go:337 +0xb9\\ngo.uber.org/cadence/internal.(*workflowEnvironmentInterceptor).ExecuteWorkflow(0xc00045a720, 0x1a99ae8, 0xc00009d700, 0xc0001ca820, 0x20, 0xc00007fad0, 0x1, 0x1, 0x1, 0x1, ...)\\n\\t/Users/qlong/go/pkg/mod/go.uber.org/cadence@v0.17.1-0.20210708064625-c4a7e032cc13/internal/workflow.go:372 +0x2cb\\ngo.uber.org/cadence/internal.(*workflowExecutor).Execute(0xc000098d80, 0x1a99ae8, 0xc00009d700, 0xc0001b127e, 0x2, 0x2, 0xc00044cb01, 0xc000070101, 0xc000073738, 0x1729f25, ...)\\n\\t/Users/qlong/go/pkg/mod/go.uber.org/cadence@v0.17.1-0.20210708064625-c4a7e032cc13/internal/internal_worker.go:699 +0x28d\\ngo.uber.org/cadence/internal.(*syncWorkflowDefinition).Execute.func1(0x1a99ce0, 0xc00045a9f0)\\n\\t/Users/qlong/go/pkg/mod/go.uber.org/cadence@v0.17.1-0.20210708064625-c4a7e032cc13/internal/internal_workflow.go:466 +0x106"\n'})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>s});var t=o(6540);const r={},c=t.createContext(r);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);