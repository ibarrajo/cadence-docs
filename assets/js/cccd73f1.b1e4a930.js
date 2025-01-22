"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[9513],{462:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"get-started/index","title":"Overview","description":"A large number of use cases span beyond a single request-reply, require tracking of a complex state, respond to asynchronous events, and communicate to external unreliable dependencies.","source":"@site/docs/01-get-started/index.md","sourceDirName":"01-get-started","slug":"/get-started/","permalink":"/cadence-docs/docs/get-started/","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/01-get-started/index.md","tags":[],"version":"current","frontMatter":{"layout":"default","title":"Overview","description":"A large number of use cases span beyond a single request-reply, require tracking of a complex state, respond to asynchronous events, and communicate to external unreliable dependencies.","permalink":"/docs/get-started/"},"sidebar":"docsSidebar","next":{"title":"Server Installation","permalink":"/cadence-docs/docs/get-started/server-installation"}}');var n=a(4848),r=a(8453);const o={layout:"default",title:"Overview",description:"A large number of use cases span beyond a single request-reply, require tracking of a complex state, respond to asynchronous events, and communicate to external unreliable dependencies.",permalink:"/docs/get-started/"},c="Overview",i={},l=[{value:"What&#39;s Next",id:"whats-next",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"overview",children:"Overview"})}),"\n",(0,n.jsx)(t.p,{children:"A large number of use cases span beyond a single request-reply, require tracking\nof a complex state, respond to asynchronous events, and communicate to external unreliable dependencies.\nThe usual approach to building such applications is a hodgepodge of stateless services,\ndatabases, cron jobs, and queuing systems. This negatively impacts the developer productivity as most of the code is\ndedicated to plumbing, obscuring the actual business logic behind a myriad of low-level details. Such systems frequently have availability problems as it is hard to keep all the components healthy."}),"\n",(0,n.jsxs)(t.p,{children:["The Cadence solution is a ",(0,n.jsxs)(t.a,{href:"/docs/concepts/workflows",children:[(0,n.jsx)(t.em,{children:"fault-oblivious stateful"})," programming model"]})," that obscures most of the complexities of building scalable distributed applications. In essence, Cadence provides a durable virtual memory that is not\nlinked to a specific process, and preserves the full application state, including function stacks, with local variables across all sorts of host and software failures.\nThis allows you to write code using the full power of a programming language while Cadence takes care of durability, availability, and scalability of the application."]}),"\n",(0,n.jsxs)(t.p,{children:["Cadence consists of a programming framework (or client library) and a managed service (or backend).\nThe framework enables developers to author and coordinate tasks in familiar languages\n(",(0,n.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-go-client/",children:"Go"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-java-client",children:"Java"}),"\nare supported officially, and ",(0,n.jsx)(t.a,{href:"https://github.com/firdaus/cadence-python",children:"Python"})," and\n",(0,n.jsx)(t.a,{href:"https://github.com/coinbase/cadence-ruby",children:"Ruby"})," by the community)."]}),"\n",(0,n.jsxs)(t.p,{children:["You can also use ",(0,n.jsx)(t.a,{href:"https://github.com/indeedeng/iwf",children:"iWF"})," as a DSL framework on top of Cadence."]}),"\n",(0,n.jsxs)(t.p,{children:["The Cadence backend service is stateless and relies on a persistent store. Currently, Cassandra and MySQL/Postgres storages\nare supported. An adapter to any other database that provides multi-row single shard transactions\ncan be added. There are different service deployment models. At Uber, our team operates multitenant clusters\nthat are shared by hundreds of applications. See service ",(0,n.jsx)(t.a,{href:"/docs/concepts/topology",children:"topology"})," to understand the overall architecture. The GitHub repo for the Cadence server is ",(0,n.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence",children:"cadence-workflow/cadence"}),". The docker\nimage for the Cadence server is available on Docker Hub at\n",(0,n.jsx)(t.a,{href:"https://hub.docker.com/r/ubercadence/server",children:"ubercadence/server"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,n.jsxs)(t.p,{children:["Let's try with some sample workflows.\nTo start with, go to ",(0,n.jsx)(t.a,{href:"/docs/get-started/server-installation",children:"server installation"})," to install cadence locally, and run a HelloWorld sample with ",(0,n.jsx)(t.a,{href:"/docs/get-started/java-hello-world",children:"Java"})," or ",(0,n.jsx)(t.a,{href:"/docs/get-started/golang-hello-world",children:"Golang"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["When you have any trouble with the instructions, you can watch the ",(0,n.jsx)(t.a,{href:"/docs/get-started/video-tutorials",children:"video tutorials"}),", and reach out to us on ",(0,n.jsx)(t.a,{href:"http://t.uber.com/cadence-slack",children:"Slack Channel"}),", or raise any question on ",(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/tagged/cadence-workflow",children:"StackOverflow"})," or open an ",(0,n.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence/issues/new/choose",children:"Github issue"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>c});var s=a(6540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);