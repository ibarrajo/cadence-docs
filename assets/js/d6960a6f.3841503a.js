"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[5557],{5234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var o=n(3865),c=n(4848),i=n(8453);const r={title:"Implement a Cadence worker service from scratch",date:new Date("2023-07-05T00:00:00.000Z"),authors:"chopincode",tags:["deep-dive","introduction-to-cadence"]},a=void 0,s={authorsImageUrls:[void 0]},d=[];function l(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:["In the previous ",(0,c.jsx)(t.a,{href:"/cadence-docs/blog/2023/06/28/components-of-cadence-application-setup",children:"blog"}),", we have introduced three critical components for a Cadence application: the Cadence backend, domain, and worker. Among these, the worker service is the most crucial focus for developers as it hosts the activities and workflows of a Cadence application. In this blog, I will provide a short tutorial on how to implement a simple worker service from scratch in Go."]}),"\n",(0,c.jsx)(t.p,{children:"To finish this tutorial, there are two prerequisites you need to finish first"}),"\n",(0,c.jsxs)(t.ol,{children:["\n",(0,c.jsxs)(t.li,{children:["Register a Cadence domain for your worker. For this tutorial, I've already registered a domain named ",(0,c.jsx)(t.code,{children:"test-domain"})]}),"\n",(0,c.jsx)(t.li,{children:"Start the Cadence backend server in background."}),"\n"]}),"\n",(0,c.jsx)(t.p,{children:"To get started, let's simply use the native HTTP package built in Go to start a process listening to port 3000. You may customize the port for your worker, but the port you choose should not conflict with existing port for your Cadence backend."}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"net/http"\n)\n\nfunc main(){\n\tfmt.Println("Cadence worker started at port 3000")\n\thttp.ListenAndServe(":3000", nil)\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(6540);const c={},i=o.createContext(c);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(i.Provider,{value:t},e.children)}},3865:e=>{e.exports=JSON.parse('{"permalink":"/cadence-docs/blog/2023/07/05/implement-cadence-worker-from-scratch","editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/blog/2023-07-05-implement-cadence-worker-from-scratch.md","source":"@site/blog/2023-07-05-implement-cadence-worker-from-scratch.md","title":"Implement a Cadence worker service from scratch","description":"In the previous blog, we have introduced three critical components for a Cadence application: the Cadence backend, domain, and worker. Among these, the worker service is the most crucial focus for developers as it hosts the activities and workflows of a Cadence application. In this blog, I will provide a short tutorial on how to implement a simple worker service from scratch in Go.","date":"2023-07-05T00:00:00.000Z","tags":[{"inline":false,"label":"Deep Dives","permalink":"/cadence-docs/blog/tags/deep-dives","description":"Deep Dives tag description"},{"inline":false,"label":"Introduction to Cadence","permalink":"/cadence-docs/blog/tags/introduction-to-cadence","description":"Introduction to Cadence tag description"}],"readingTime":3.69,"hasTruncateMarker":true,"authors":[{"name":"Chris Qin","title":"Applications Developer @ Uber","url":"https://www.linkedin.com/in/chrisqin0610/","page":{"permalink":"/cadence-docs/blog/authors/chopincode"},"socials":{"linkedin":"https://www.linkedin.com/in/chrisqin0610/","github":"https://github.com/chopincode"},"imageURL":"https://github.com/chopincode.png","key":"chopincode"}],"frontMatter":{"title":"Implement a Cadence worker service from scratch","date":"2023-07-05T00:00:00.000Z","authors":"chopincode","tags":["deep-dive","introduction-to-cadence"]},"unlisted":false,"prevItem":{"title":"Bad practices and Anti-patterns with Cadence (Part 1)","permalink":"/cadence-docs/blog/2023/07/10/cadence-bad-practices-part-1"},"nextItem":{"title":"Understanding components of Cadence application","permalink":"/cadence-docs/blog/2023/06/28/components-of-cadence-application-setup"}}')}}]);