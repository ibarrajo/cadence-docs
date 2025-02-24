"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[207],{2826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"workflow-troubleshooting/retries","title":"Retries","description":"Cadence has a retry feature where a retry policy can be configured so that an activity or a workflow will be retried when it fails or times out.","source":"@site/docs/08-workflow-troubleshooting/03-retries.md","sourceDirName":"08-workflow-troubleshooting","slug":"/workflow-troubleshooting/retries","permalink":"/cadence-docs/docs/workflow-troubleshooting/retries","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/08-workflow-troubleshooting/03-retries.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"layout":"default","title":"Retries","permalink":"/docs/workflow-troubleshooting/retries"},"sidebar":"docsSidebar","previous":{"title":"Activity Failures","permalink":"/cadence-docs/docs/workflow-troubleshooting/activity-failures"},"next":{"title":"Cadence Service","permalink":"/cadence-docs/docs/releases/cadence"}}');var o=r(4848),n=r(8453);const s={layout:"default",title:"Retries",permalink:"/docs/workflow-troubleshooting/retries"},a="Retries",l={},c=[{value:"Workflow execution history of retries",id:"workflow-execution-history-of-retries",level:2},{value:"Configuration of activity retries and workflow retries",id:"configuration-of-activity-retries-and-workflow-retries",level:2},{value:"MaximumAttempts set to 1",id:"maximumattempts-set-to-1",level:2},{value:"ExpirationIntervalInSeconds less than InitialIntervalInSeconds",id:"expirationintervalinseconds-less-than-initialintervalinseconds",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"retries",children:"Retries"})}),"\n",(0,o.jsx)(t.p,{children:"Cadence has a retry feature where a retry policy can be configured so that an activity or a workflow will be retried when it fails or times out."}),"\n",(0,o.jsxs)(t.p,{children:["Read more about ",(0,o.jsx)(t.a,{href:"https://cadenceworkflow.io/docs/concepts/activities/#retries",children:"activity retries"})," and ",(0,o.jsx)(t.a,{href:"https://cadenceworkflow.io/docs/concepts/workflows/#workflow-retries",children:"workflow retries"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"workflow-execution-history-of-retries",children:"Workflow execution history of retries"}),"\n",(0,o.jsx)(t.p,{children:"One thing to note is how activity retries and workflow retries are shown in the Cadence Web UI. Information about activity retries is not stored in Cadence. Only the last attempt is shown with the attempt number."}),"\n",(0,o.jsxs)(t.p,{children:["Moreover, attempt number starts from 0, so ",(0,o.jsx)(t.code,{children:"Attempt: 0"})," refers to the first and original attempt, ",(0,o.jsx)(t.code,{children:"Attempt: 1"})," refers to the second attempt or first retried attempt."]}),"\n",(0,o.jsx)(t.p,{children:"For workflow retries, when a workflow fails or times out and is retried, it completes the previous execution with a ContinuedAsNew event and a new execution is started with Attempt 1. The ContinuedAsNew event holds the details of the failure reason."}),"\n",(0,o.jsx)(t.h2,{id:"configuration-of-activity-retries-and-workflow-retries",children:"Configuration of activity retries and workflow retries"}),"\n",(0,o.jsx)(t.p,{children:"Some of the configurable values could be misconfigured and as a result will not have the intended behaviour. These are listed here."}),"\n",(0,o.jsx)(t.h2,{id:"maximumattempts-set-to-1",children:"MaximumAttempts set to 1"}),"\n",(0,o.jsx)(t.p,{children:"In both activity retries and workflow retries it is sufficient to mention a maximum number of attempts or an expiration interval. However, the maximum number of attempts counts the original attempt of the activity also. As a result, setting maximum number of attempts to 1 means the activity or workflow will not be retried."}),"\n",(0,o.jsx)(t.h2,{id:"expirationintervalinseconds-less-than-initialintervalinseconds",children:"ExpirationIntervalInSeconds less than InitialIntervalInSeconds"}),"\n",(0,o.jsx)(t.p,{children:"In both activity retries and workflow retries it is sufficient to specify a maximum number of attempts or an expiration interval. The first retry attempt waits for the InitialIntervalInSeconds before starting and when an expiration interval is set lower than the initial interval, the retry policy becomes invalid and the activity or workflow will not be retried."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var i=r(6540);const o={},n=i.createContext(o);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);