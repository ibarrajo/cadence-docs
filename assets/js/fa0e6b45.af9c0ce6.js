"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[1328],{8094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"use-cases/batch-job","title":"Batch job","description":"A lot of batch jobs are not pure data manipulation programs. For those, the existing big data frameworks are the best fit.","source":"@site/docs/02-use-cases/06-batch-job.md","sourceDirName":"02-use-cases","slug":"/use-cases/batch-job","permalink":"/cadence-docs/docs/use-cases/batch-job","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/02-use-cases/06-batch-job.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"layout":"default","title":"Batch job","permalink":"/docs/use-cases/batch-job"},"sidebar":"docsSidebar","previous":{"title":"Storage scan","permalink":"/cadence-docs/docs/use-cases/partitioned-scan"},"next":{"title":"Infrastructure provisioning","permalink":"/cadence-docs/docs/use-cases/provisioning"}}');var n=a(4848),o=a(8453);const r={layout:"default",title:"Batch job",permalink:"/docs/use-cases/batch-job"},c="Batch job",i={},d=[];function l(e){const t={h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"batch-job",children:"Batch job"})}),"\n",(0,n.jsx)(t.p,{children:"A lot of batch jobs are not pure data manipulation programs. For those, the existing big data frameworks are the best fit.\nBut if processing a record requires external API calls that might fail and potentially take a long time, Cadence might be preferable."}),"\n",(0,n.jsx)(t.p,{children:"One of our internal Uber customer uses Cadence for end of month statement generation. Each statement requires calls to multiple\nmicroservices and some statements can be really large. Cadence was chosen because it provides hard guarantees around durability of the financial data and seamlessly deals with long running operations, retries, and intermittent failures."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>c});var s=a(6540);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);