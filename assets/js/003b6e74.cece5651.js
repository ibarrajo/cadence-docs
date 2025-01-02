"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[7562],{9430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"go-client/distributed-cron","title":"Distributed CRON","description":"It is relatively straightforward to turn any Cadence into a Cron. All you need","source":"@site/docs/05-go-client/16-distributed-cron.md","sourceDirName":"05-go-client","slug":"/go-client/distributed-cron","permalink":"/cadence-docs/docs/go-client/distributed-cron","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/05-go-client/16-distributed-cron.md","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"layout":"default","title":"Distributed CRON","permalink":"/docs/go-client/distributed-cron"},"sidebar":"docsSidebar","previous":{"title":"Sessions","permalink":"/cadence-docs/docs/go-client/sessions"},"next":{"title":"Tracing and context propagation","permalink":"/cadence-docs/docs/go-client/tracing"}}');var o=n(4848),s=n(8453);const i={layout:"default",title:"Distributed CRON",permalink:"/docs/go-client/distributed-cron"},l="Distributed CRON",c={},a=[{value:"Convert existing cron workflow",id:"convert-existing-cron-workflow",level:2},{value:"Retrieve last successful result",id:"retrieve-last-successful-result",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"distributed-cron",children:"Distributed CRON"})}),"\n",(0,o.jsxs)(t.p,{children:["It is relatively straightforward to turn any Cadence workflow into a Cron workflow. All you need\nis to supply a cron schedule when starting the workflow using the CronSchedule\nparameter of\n",(0,o.jsx)(t.a,{href:"https://godoc.org/go.uber.org/cadence/internal#StartWorkflowOptions",children:"StartWorkflowOptions"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["You can also start a workflow using the Cadence CLI with an optional cron schedule using the ",(0,o.jsx)(t.code,{children:"--cron"})," argument."]}),"\n",(0,o.jsx)(t.p,{children:"For workflows with CronSchedule:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'Cron schedule is based on UTC time. For example cron schedule "15 8 * * *"\nwill run daily at 8:15am UTC. Another example "*/2 * * * 5-6" will schedule a workflow every two minutes on fridays\nand saturdays.'}),"\n",(0,o.jsx)(t.li,{children:"If a workflow failed and a RetryPolicy is supplied to the StartWorkflowOptions\nas well, the workflow will retry based on the RetryPolicy. While the workflow is\nretrying, the server will not schedule the next cron run."}),"\n",(0,o.jsx)(t.li,{children:"Cadence server only schedules the next cron run after the current run is\ncompleted. If the next schedule is due while a workflow is running (or retrying),\nthen it will skip that schedule."}),"\n",(0,o.jsx)(t.li,{children:"Cron workflows will not stop until they are terminated or cancelled."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Cadence supports the standard cron spec:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"// CronSchedule - Optional cron schedule for workflow. If a cron schedule is specified, the workflow will run\n// as a cron based on the schedule. The scheduling will be based on UTC time. The schedule for next run only happen\n// after the current run is completed/failed/timeout. If a RetryPolicy is also supplied, and the workflow failed\n// or timed out, the workflow will be retried based on the retry policy. While the workflow is retrying, it won't\n// schedule its next run. If next schedule is due while the workflow is running (or retrying), then it will skip that\n// schedule. Cron workflow will not stop until it is terminated or cancelled (by returning cadence.CanceledError).\n// The cron spec is as following:\n// \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute (0 - 59)\n// \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour (0 - 23)\n// \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of the month (1 - 31)\n// \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 month (1 - 12)\n// \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of the week (0 - 6) (Sunday to Saturday)\n// \u2502 \u2502 \u2502 \u2502 \u2502\n// \u2502 \u2502 \u2502 \u2502 \u2502\n// * * * * *\nCronSchedule string\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Cadence also supports more ",(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format",children:"advanced cron expressions"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://crontab.guru/",children:"crontab guru site"})," is useful for testing your cron expressions."]}),"\n",(0,o.jsx)(t.h2,{id:"convert-existing-cron-workflow",children:"Convert existing cron workflow"}),"\n",(0,o.jsxs)(t.p,{children:["Before CronSchedule was available, the previous approach to implementing cron\nworkflows was to use a delay timer as the last step and then return\n",(0,o.jsx)(t.code,{children:"ContinueAsNew"}),". One problem with that implementation is that if the workflow\nfails or times out, the cron would stop."]}),"\n",(0,o.jsxs)(t.p,{children:["To convert those workflows to make use of Cadence CronSchedule, all you need is to\nremove the delay timer and return without using\n",(0,o.jsx)(t.code,{children:"ContinueAsNew"}),". Then start the workflow with the desired CronSchedule."]}),"\n",(0,o.jsx)(t.h2,{id:"retrieve-last-successful-result",children:"Retrieve last successful result"}),"\n",(0,o.jsxs)(t.p,{children:["Sometimes it is useful to obtain the progress of previous successful runs.\nThis is supported by two new APIs in the client library:\n",(0,o.jsx)(t.code,{children:"HasLastCompletionResult"})," and ",(0,o.jsx)(t.code,{children:"GetLastCompletionResult"}),". Below is an example of how\nto use this in Go:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"func CronWorkflow(ctx workflow.Context) (CronResult, error) {\n    startTimestamp := time.Time{} // By default start from 0 time.\n    if workflow.HasLastCompletionResult(ctx) {\n        var progress CronResult\n        if err := workflow.GetLastCompletionResult(ctx, &progress); err == nil {\n            startTimestamp = progress.LastSyncTimestamp\n        }\n    }\n    endTimestamp := workflow.Now(ctx)\n\n    // Process work between startTimestamp (exclusive), endTimestamp (inclusive).\n    // Business logic implementation goes here.\n\n    result := CronResult{LastSyncTimestamp: endTimestamp}\n    return result, nil\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Note that this works even if one of the cron schedule runs failed. The\nnext schedule will still get the last successful result if it ever successfully\ncompleted at least once. For example, for a daily cron workflow, if the first day\nrun succeeds and the second day fails, then the third day run will still get\nthe result from first day's run using these APIs."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);