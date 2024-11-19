"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[1662],{1241:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"use-cases/periodic-execution","title":"Periodic execution","description":"Periodic execution, frequently referred to as distributed cron, is when you execute business logic periodically. The advantage of Cadence for these scenarios is that it guarantees execution, sophisticated error handling, retry policies, and visibility into execution history.","source":"@site/docs/02-use-cases/01-periodic-execution.md","sourceDirName":"02-use-cases","slug":"/use-cases/periodic-execution","permalink":"/docs/use-cases/periodic-execution","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/02-use-cases/01-periodic-execution.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"layout":"default","title":"Periodic execution","permalink":"/docs/use-cases/periodic-execution"},"sidebar":"docsSidebar","previous":{"title":"Introduction","permalink":"/docs/use-cases/"},"next":{"title":"Orchestration","permalink":"/docs/use-cases/orchestration"}}');var r=t(4848),n=t(8453);const s={layout:"default",title:"Periodic execution",permalink:"/docs/use-cases/periodic-execution"},c="Periodic execution (aka Distributed Cron)",a={},d=[];function u(e){const i={a:"a",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"periodic-execution-aka-distributed-cron",children:"Periodic execution (aka Distributed Cron)"})}),"\n",(0,r.jsx)(i.p,{children:"Periodic execution, frequently referred to as distributed cron, is when you execute business logic periodically. The advantage of Cadence for these scenarios is that it guarantees execution, sophisticated error handling, retry policies, and visibility into execution history."}),"\n",(0,r.jsx)(i.p,{children:"Another important dimension is scale. Some use cases require periodic execution for a large number of entities.\nAt Uber, there are applications that create periodic :workflow:workflows: per customer.\nImagine 100+ million parallel cron jobs that don't require a separate batch processing framework."}),"\n",(0,r.jsx)(i.p,{children:"Periodic execution is often part of other use cases. For example, once a month report generation is a periodic service orchestration. Or an event-driven :workflow: that accumulates loyalty points for a customer and applies those points once a month."}),"\n",(0,r.jsx)(i.p,{children:"There are many real-world examples of Cadence periodic executions. Such as the following:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["An Uber backend service that recalculates various statistics for each ",(0,r.jsx)(i.a,{href:"https://eng.uber.com/h3/",children:"hex"})," in each city once a minute."]}),"\n",(0,r.jsx)(i.li,{children:"Monthly Uber for Business report generation."}),"\n"]})]})}function l(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>c});var o=t(6540);const r={},n=o.createContext(r);function s(e){const i=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:i},e.children)}}}]);