"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[4950],{5770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"go-client/create-workflows","title":"Creating workflows","description":"The is the implementation of the coordination logic. The Cadence programming framework","source":"@site/docs/05-go-client/02-create-workflows.md","sourceDirName":"05-go-client","slug":"/go-client/create-workflows","permalink":"/docs/go-client/create-workflows","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/05-go-client/02-create-workflows.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"layout":"default","title":"Creating workflows","permalink":"/docs/go-client/create-workflows"},"sidebar":"docsSidebar","previous":{"title":"Worker service","permalink":"/docs/go-client/workers"},"next":{"title":"Starting workflows","permalink":"/docs/go-client/02.5-starting-workflows"}}');var o=t(4848),i=t(8453);const s={layout:"default",title:"Creating workflows",permalink:"/docs/go-client/create-workflows"},a="Creating workflows",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Declaration",id:"declaration",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Special Cadence client library functions and types",id:"special-cadence-client-library-functions-and-types",level:3},{value:"Failing a workflow",id:"failing-a-workflow",level:3},{value:"Registration",id:"registration",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"creating-workflows",children:"Creating workflows"})}),"\n",(0,o.jsx)(n.p,{children:"The workflow is the implementation of the coordination logic. The Cadence programming framework\n(aka client library) allows you to write the workflow coordination logic as simple procedural code\nthat uses standard Go data modeling. The client library takes care of the communication between\nthe worker service and the Cadence service, and ensures state persistence between events even in\ncase of worker failures. Furthermore, any particular execution is not tied to a particular worker\nmachine. Different steps of the coordination logic can end up executing on different worker\ninstances, with the framework ensuring that the necessary state is recreated on the worker executing\nthe step."}),"\n",(0,o.jsxs)(n.p,{children:["However, in order to facilitate this operational model, both the Cadence programming framework and\nthe managed service impose some requirements and restrictions on the implementation of the\ncoordination logic. The details of these requirements and restrictions are described in the\n",(0,o.jsx)(n.strong,{children:"Implementation"})," section below."]}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"The sample code below shows a simple implementation of a workflow that executes one activity. The\nworkflow also passes the sole parameter it receives as part of its initialization as a parameter\nto the activity."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package sample\n\nimport (\n    "time"\n\n    "go.uber.org/cadence/workflow"\n)\n\nfunc init() {\n    workflow.Register(SimpleWorkflow)\n}\n\nfunc SimpleWorkflow(ctx workflow.Context, value string) error {\n    ao := workflow.ActivityOptions{\n        TaskList:               "sampleTaskList",\n        ScheduleToCloseTimeout: time.Second * 60,\n        ScheduleToStartTimeout: time.Second * 60,\n        StartToCloseTimeout:    time.Second * 60,\n        HeartbeatTimeout:       time.Second * 10,\n        WaitForCancellation:    false,\n    }\n    ctx = workflow.WithActivityOptions(ctx, ao)\n\n    future := workflow.ExecuteActivity(ctx, SimpleActivity, value)\n    var result string\n    if err := future.Get(ctx, &result); err != nil {\n        return err\n    }\n    workflow.GetLogger(ctx).Info("Done", zap.String("result", result))\n    return nil\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"declaration",children:"Declaration"}),"\n",(0,o.jsx)(n.p,{children:"In the Cadence programing model, a workflow is implemented with a function. The function declaration\nspecifies the parameters the workflow accepts as well as any values it might return."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func SimpleWorkflow(ctx workflow.Context, value string) error\n"})}),"\n",(0,o.jsx)(n.p,{children:"Let\u2019s deconstruct the declaration above:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The first parameter to the function is ",(0,o.jsx)(n.strong,{children:"ctx workflow.Context"}),". This is a required parameter for\nall workflow functions and is used by the Cadence client library to pass execution context.\nVirtually all the client library functions that are callable from the workflow functions require\nthis ",(0,o.jsx)(n.strong,{children:"ctx"})," parameter. This ",(0,o.jsx)(n.strong,{children:"context"})," parameter is the same concept as the standard\n",(0,o.jsx)(n.strong,{children:"context.Context"})," provided by Go. The only difference between ",(0,o.jsx)(n.strong,{children:"workflow.Context"})," and\n",(0,o.jsx)(n.strong,{children:"context.Context"})," is that the ",(0,o.jsx)(n.strong,{children:"Done()"})," function in ",(0,o.jsx)(n.strong,{children:"workflow.Context"})," returns\n",(0,o.jsx)(n.strong,{children:"workflow.Channel"})," instead the standard go ",(0,o.jsx)(n.strong,{children:"chan"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The second parameter, ",(0,o.jsx)(n.strong,{children:"string"}),", is a custom workflow parameter that can be used to pass data\ninto the workflow on start. A workflow can have one or more such parameters. All parameters to a\nworkflow function must be serializable, which essentially means that params can\u2019t be channels,\nfunctions, variadic, or unsafe pointers."]}),"\n",(0,o.jsxs)(n.li,{children:["Since it only declares error as the return value, this means that the workflow does not return a\nvalue. The ",(0,o.jsx)(n.strong,{children:"error"})," return value is used to indicate an error was encountered during execution\nand the workflow should be terminated."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(n.p,{children:"In order to support the synchronous and sequential programming model for the workflow\nimplementation, there are certain restrictions and requirements on how the workflow implementation\nmust behave in order to guarantee correctness. The requirements are that:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Execution must be deterministic"}),"\n",(0,o.jsx)(n.li,{children:"Execution must be idempotent"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"A straightforward way to think about these requirements is that the workflow code is as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Workflow code can only read and manipulate local state or state received as return values from\nCadence client library functions."}),"\n",(0,o.jsx)(n.li,{children:"Workflow code should not affect changes in external systems other than through invocation\nof activities."}),"\n",(0,o.jsxs)(n.li,{children:["Workflow code should interact with ",(0,o.jsx)(n.strong,{children:"time"})," only through the functions provided by the Cadence\nclient library (i.e. ",(0,o.jsx)(n.strong,{children:"workflow.Now()"}),", ",(0,o.jsx)(n.strong,{children:"workflow.Sleep()"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["Workflow code should not create and interact with goroutines directly, it should instead use the\nfunctions provided by the Cadence client library (i.e., ",(0,o.jsx)(n.strong,{children:"workflow.Go()"})," instead of ",(0,o.jsx)(n.strong,{children:"go"}),",\n",(0,o.jsx)(n.strong,{children:"workflow.Channel"})," instead of ",(0,o.jsx)(n.strong,{children:"chan"}),", ",(0,o.jsx)(n.strong,{children:"workflow.Selector"})," instead of ",(0,o.jsx)(n.strong,{children:"select"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["Workflow code should do all logging via the logger provided by the Cadence client library\n(i.e., ",(0,o.jsx)(n.strong,{children:"workflow.GetLogger()"}),")."]}),"\n",(0,o.jsx)(n.li,{children:"Workflow code should not iterate over maps using range because the order of map iteration is randomized."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Now that we have laid the ground rules, we can take a look at some of the special functions and types\nused for writing Cadence workflows and how to implement some common patterns."}),"\n",(0,o.jsx)(n.h3,{id:"special-cadence-client-library-functions-and-types",children:"Special Cadence client library functions and types"}),"\n",(0,o.jsx)(n.p,{children:"The Cadence client library provides a number of functions and types as alternatives to some native\nGo functions and types. Usage of these replacement functions/types is necessary in order to ensure\nthat the workflow code execution is deterministic and repeatable within an execution context."}),"\n",(0,o.jsx)(n.p,{children:"Coroutine related constructs:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"workflow.Go"})," : This is a replacement for the the ",(0,o.jsx)(n.strong,{children:"go"})," statement."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"workflow.Channel"})," : This is a replacement for the native ",(0,o.jsx)(n.strong,{children:"chan"})," type. Cadence provides\nsupport for both buffered and unbuffered channels."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"workflow.Selector"})," : This is a replacement for the ",(0,o.jsx)(n.strong,{children:"select"})," statement."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Time related functions:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"workflow.Now()"})," : This is a replacement for ",(0,o.jsx)(n.strong,{children:"time.Now()"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"workflow.Sleep()"})," : This is a replacement for ",(0,o.jsx)(n.strong,{children:"time.Sleep()"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"failing-a-workflow",children:"Failing a workflow"}),"\n",(0,o.jsxs)(n.p,{children:["To mark a workflow as failed, all that needs to happen is for the workflow function to return an\nerror via the ",(0,o.jsx)(n.strong,{children:"err"})," return value."]}),"\n",(0,o.jsx)(n.h2,{id:"registration",children:"Registration"}),"\n",(0,o.jsx)(n.p,{children:"For some client code to be able to invoke a workflow type, the worker process needs to be aware of\nall the implementations it has access to. A workflow is registered with the following call:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"workflow.Register(SimpleWorkflow)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This call essentially creates an in-memory mapping inside the worker process between the fully\nqualified function name and the implementation. It is safe to call this registration method from\nan ",(0,o.jsx)(n.strong,{children:"init()"})," function. If the worker receives tasks for a workflow type it does not know, it will\nfail that task. However, the failure of the task will not cause the entire workflow to fail."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);