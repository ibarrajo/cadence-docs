"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[8067],{3952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"go-client/tracing","title":"Tracing and context propagation","description":"Tracing","source":"@site/docs/05-go-client/17-tracing.md","sourceDirName":"05-go-client","slug":"/go-client/tracing","permalink":"/ibarrajo/cadence-docs/docs/go-client/tracing","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/05-go-client/17-tracing.md","tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"layout":"default","title":"Tracing and context propagation","permalink":"/docs/go-client/tracing"},"sidebar":"docsSidebar","previous":{"title":"Distributed CRON","permalink":"/ibarrajo/cadence-docs/docs/go-client/distributed-cron"},"next":{"title":"Workflow Replay and Shadowing","permalink":"/ibarrajo/cadence-docs/docs/go-client/workflow-replay-shadowing"}}');var o=n(4848),a=n(8453);const i={layout:"default",title:"Tracing and context propagation",permalink:"/docs/go-client/tracing"},c="Tracing and context propagation",s={},d=[{value:"Tracing",id:"tracing",level:2},{value:"Context Propagation",id:"context-propagation",level:2},{value:"Server-Side Headers Support",id:"server-side-headers-support",level:3},{value:"Context Propagators",id:"context-propagators",level:3},{value:"Q &amp; A",id:"q--a",level:2},{value:"Is there a complete example?",id:"is-there-a-complete-example",level:3},{value:"Can I configure multiple context propagators?",id:"can-i-configure-multiple-context-propagators",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"tracing-and-context-propagation",children:"Tracing and context propagation"})}),"\n",(0,o.jsx)(t.h2,{id:"tracing",children:"Tracing"}),"\n",(0,o.jsxs)(t.p,{children:["The Go client provides distributed tracing support through ",(0,o.jsx)(t.a,{href:"https://opentracing.io/",children:"OpenTracing"}),". Tracing can be\nconfigured by providing an ",(0,o.jsx)(t.a,{href:"https://godoc.org/github.com/opentracing/opentracing-go#Tracer",children:"opentracing.Tracer"}),"\nimplementation in ",(0,o.jsx)(t.a,{href:"https://godoc.org/go.uber.org/cadence/internal#ClientOptions",children:"ClientOptions"}),"\nand ",(0,o.jsx)(t.a,{href:"https://godoc.org/go.uber.org/cadence/internal#WorkerOptions",children:"WorkerOptions"})," during client and worker instantiation,\nrespectively. Tracing allows\nyou to view the call graph of a workflow along with its activities, child workflows etc. For more details on how to\nconfigure and leverage tracing, see the ",(0,o.jsx)(t.a,{href:"https://opentracing.io/docs/getting-started/",children:"OpenTracing documentation"}),".\nThe OpenTracing support has been validated using ",(0,o.jsx)(t.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"}),", but other implementations\nmentioned ",(0,o.jsx)(t.a,{href:"https://opentracing.io/docs/supported-tracers/",children:"here"})," should also work. Tracing support utilizes generic context\npropagation support provided by the client."]}),"\n",(0,o.jsx)(t.h2,{id:"context-propagation",children:"Context Propagation"}),"\n",(0,o.jsxs)(t.p,{children:["We provide a standard way to propagate custom context across a workflow.\n",(0,o.jsx)(t.a,{href:"https://godoc.org/go.uber.org/cadence/internal#ClientOptions",children:"ClientOptions"})," and ",(0,o.jsx)(t.a,{href:"https://godoc.org/go.uber.org/cadence/internal#WorkerOptions",children:"WorkerOptions"}),"\nallow configuring a context propagator. The context propagator extracts and passes on information present in the ",(0,o.jsx)(t.code,{children:"context.Context"}),"\nand ",(0,o.jsx)(t.code,{children:"workflow.Context"})," objects across the workflow. Once a context propagator is configured, you should be able to access the required values\nin the context objects as you would normally do in Go.\nFor a sample, the Go client implements a ",(0,o.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-go-client/blob/master/internal/tracer.go",children:"tracing context propagator"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"server-side-headers-support",children:"Server-Side Headers Support"}),"\n",(0,o.jsx)(t.p,{children:"On the server side, Cadence provides a mechanism to propagate what it calls headers across different workflow\ntransitions."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"struct Header {\n    10: optional map<string, binary> fields\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The client leverages this to pass around selected context information. ",(0,o.jsx)(t.a,{href:"https://godoc.org/go.uber.org/cadence/internal#HeaderReader",children:"HeaderReader"}),"\nand ",(0,o.jsx)(t.a,{href:"https://godoc.org/go.uber.org/cadence/internal#HeaderWriter",children:"HeaderWriter"})," are interfaces\nthat allow reading and writing to the Cadence server headers. The client already provides ",(0,o.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-go-client/blob/master/internal/headers.go",children:"implementations"}),"\nfor these. ",(0,o.jsx)(t.code,{children:"HeaderWriter"})," sets a field in the header. Headers is a map, so setting a value for the the same key\nmultiple times will overwrite the previous values. ",(0,o.jsx)(t.code,{children:"HeaderReader"})," iterates through the headers map and runs the\nprovided handler function on each key/value pair, allowing you to deal with the fields you are interested in."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"type HeaderWriter interface {\n    Set(string, []byte)\n}\n\ntype HeaderReader interface {\n    ForEachKey(handler func(string, []byte) error) error\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"context-propagators",children:"Context Propagators"}),"\n",(0,o.jsx)(t.p,{children:"Context propagators require implementing the following four methods to propagate selected context across a workflow:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Inject"})," is meant to pick out the context keys of interest from a Go ",(0,o.jsx)(t.a,{href:"https://golang.org/pkg/context/#Context",children:"context.Context"})," object and write that into the\nheaders using the ",(0,o.jsx)(t.a,{href:"https://godoc.org/go.uber.org/cadence/internal#HeaderWriter",children:"HeaderWriter"})," interface"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"InjectFromWorkflow"})," is the same as above, but operates on a ",(0,o.jsx)(t.a,{href:"https://godoc.org/go.uber.org/cadence/internal#Context",children:"workflow.Context"})," object"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Extract"})," reads the headers and places the information of interest back into the ",(0,o.jsx)(t.a,{href:"https://golang.org/pkg/context/#Context",children:"context.Context"})," object"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"ExtractToWorkflow"})," is the same as above, but operates on a ",(0,o.jsx)(t.a,{href:"https://godoc.org/go.uber.org/cadence/internal#Context",children:"workflow.Context"})," object"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-go-client/blob/master/internal/tracer.go",children:"tracing context propagator"}),"\nshows a sample implementation of context propagation."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"type ContextPropagator interface {\n    Inject(context.Context, HeaderWriter) error\n\n    Extract(context.Context, HeaderReader) (context.Context, error)\n\n    InjectFromWorkflow(Context, HeaderWriter) error\n\n    ExtractToWorkflow(Context, HeaderReader) (Context, error)\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"q--a",children:"Q & A"}),"\n",(0,o.jsx)(t.h3,{id:"is-there-a-complete-example",children:"Is there a complete example?"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-samples/blob/master/cmd/samples/recipes/ctxpropagation/workflow.go",children:"context propagation sample"}),"\nconfigures a custom context propagator and shows context propagation of custom keys across a workflow and an activity."]}),"\n",(0,o.jsx)(t.h3,{id:"can-i-configure-multiple-context-propagators",children:"Can I configure multiple context propagators?"}),"\n",(0,o.jsx)(t.p,{children:"Yes, we recommended that you configure multiple context propagators with each propagator meant to propagate a particular type of context."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);