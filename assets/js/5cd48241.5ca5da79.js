"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[3732],{5835:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"use-cases/provisioning","title":"Infrastructure provisioning","description":"Provisioning a new datacenter or a pool of machines in a public cloud is a potentially long running operation with","source":"@site/docs/02-use-cases/07-provisioning.md","sourceDirName":"02-use-cases","slug":"/use-cases/provisioning","permalink":"/Cadence-Docs/docs/use-cases/provisioning","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/02-use-cases/07-provisioning.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"layout":"default","title":"Infrastructure provisioning","permalink":"/docs/use-cases/provisioning"},"sidebar":"docsSidebar","previous":{"title":"Batch job","permalink":"/Cadence-Docs/docs/use-cases/batch-job"},"next":{"title":"Deployment","permalink":"/Cadence-Docs/docs/use-cases/deployment"}}');var i=o(4848),t=o(8453);const r={layout:"default",title:"Infrastructure provisioning",permalink:"/docs/use-cases/provisioning"},a="Infrastructure provisioning",c={},u=[];function l(e){const n={a:"a",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"infrastructure-provisioning",children:"Infrastructure provisioning"})}),"\n",(0,i.jsx)(n.p,{children:"Provisioning a new datacenter or a pool of machines in a public cloud is a potentially long running operation with\na lot of possibilities for intermittent failures. The scale is also a concern when tens or even hundreds of thousands of resources should be provisioned and configured. One useful feature for provisioning scenarios is Cadence support for routing :activity: execution to a specific process or host."}),"\n",(0,i.jsx)(n.p,{children:"A lot of operations require some sort of locking to ensure that no more than one mutation is executed on a resource at a time.\nCadence provides strong guarantees of uniqueness by business ID. This can be used to implement such locking behavior in a fault tolerant and scalable manner."}),"\n",(0,i.jsx)(n.p,{children:"Some real-world use cases:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://banzaicloud.com/blog/introduction-to-cadence/",children:"Using Cadence workflows to spin up Kubernetes, by Banzai Cloud"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=kDlrM6sgk2k&feature=youtu.be&t=1188",children:"Using Cadence to orchestrate cluster life cycle in HashiCorp Consul, by HashiCorp"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var s=o(6540);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);