"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[3685],{6611:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"workflow-troubleshooting/activity-failures","title":"Activity Failures","description":"An activity fails when it encounters an error during its execution. This results in ActivityTaskFailed event in the workflow execution with some details of the error. The different kinds of errors that can be seen in activity failures are listed here.","source":"@site/docs/08-workflow-troubleshooting/02-activity-failures.md","sourceDirName":"08-workflow-troubleshooting","slug":"/workflow-troubleshooting/activity-failures","permalink":"/cadence-docs/docs/workflow-troubleshooting/activity-failures","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/08-workflow-troubleshooting/02-activity-failures.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"layout":"default","title":"Activity Failures","permalink":"/docs/workflow-troubleshooting/activity-failures"},"sidebar":"docsSidebar","previous":{"title":"Timeouts","permalink":"/cadence-docs/docs/workflow-troubleshooting/timeouts"},"next":{"title":"Contact us","permalink":"/cadence-docs/docs/about/"}}');var o=i(4848),n=i(8453);const s={layout:"default",title:"Activity Failures",permalink:"/docs/workflow-troubleshooting/activity-failures"},a="Activity failures",c={},l=[{value:"Panic errors",id:"panic-errors",level:2},{value:"Custom errors",id:"custom-errors",level:2},{value:"Generic errors",id:"generic-errors",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"activity-failures",children:"Activity failures"})}),"\n",(0,o.jsx)(t.p,{children:"An activity fails when it encounters an error during its execution. This results in ActivityTaskFailed event in the workflow execution with some details of the error. The different kinds of errors that can be seen in activity failures are listed here."}),"\n",(0,o.jsx)(t.h2,{id:"panic-errors",children:"Panic errors"}),"\n",(0,o.jsx)(t.p,{children:"Description: There is a issue in the activity code that is causing a panic."}),"\n",(0,o.jsx)(t.p,{children:"Mitigation: Panics are usually caused by nil pointer dereferences or out-of-range array access and should never be expected in a workflow. Check the stack trace provided in the error details to find where in the activity code, the panic is seen. Fix the rootcause of the panic."}),"\n",(0,o.jsx)(t.h2,{id:"custom-errors",children:"Custom errors"}),"\n",(0,o.jsx)(t.p,{children:"Description: This is a customised error returned by the activity."}),"\n",(0,o.jsx)(t.p,{children:"Mitigation: This is a way of facilitating error handling done within the activity code. Check your activity code to find where it returns a NewCustomError with some information. This is ideally an expected error scenario and should be handled within the workflow that executed the activity."}),"\n",(0,o.jsxs)(t.p,{children:["Read more about ",(0,o.jsx)(t.a,{href:"https://cadenceworkflow.io/docs/go-client/error-handling/",children:"error handling"})]}),"\n",(0,o.jsx)(t.h2,{id:"generic-errors",children:"Generic errors"}),"\n",(0,o.jsx)(t.p,{children:"Description: This is an error returned by the activity."}),"\n",(0,o.jsx)(t.p,{children:"Mitigation: This error is caused by something unexpected within the activity code, typically due to a downstream service that your activity communicates with. Cadence does not know anything about it and just puts all unknown errors in this category. Check your activity code to find the potential error cases. This is ideally an unexpected error scenario and should be debugged further to fix the rootcause."}),"\n",(0,o.jsxs)(t.p,{children:["Read more about ",(0,o.jsx)(t.a,{href:"https://cadenceworkflow.io/docs/go-client/error-handling/",children:"error handling"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var r=i(6540);const o={},n=r.createContext(o);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);