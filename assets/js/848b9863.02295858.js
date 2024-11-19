"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[7207],{4738:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"java-client/workers","title":"Worker service","description":"A or service is a service that hosts the and implementations. The polls the Cadence service fortaskstask, and communicates execution results back to the Cadence service.Worker: services are developed, deployed, and operated by Cadence customers.","source":"@site/docs/04-java-client/09-workers.md","sourceDirName":"04-java-client","slug":"/java-client/workers","permalink":"/Cadence-Docs/docs/java-client/workers","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/04-java-client/09-workers.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"layout":"default","title":"Worker service","permalink":"/docs/java-client/workers"},"sidebar":"docsSidebar","previous":{"title":"Distributed CRON","permalink":"/Cadence-Docs/docs/java-client/distributed-cron"},"next":{"title":"Signals","permalink":"/Cadence-Docs/docs/java-client/signals"}}');var o=r(4848),s=r(8453);const a={layout:"default",title:"Worker service",permalink:"/docs/java-client/workers"},i="Worker service",c={},l=[];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"worker-service",children:"Worker service"})}),"\n",(0,o.jsxs)(t.p,{children:["A :worker: or ",(0,o.jsx)(t.em,{children:":worker: service"})," is a service that hosts the :workflow: and :activity: implementations. The :worker: polls the ",(0,o.jsx)(t.em,{children:"Cadence service"})," for :task:tasks:, performs those :task:tasks:, and communicates :task: execution results back to the ",(0,o.jsx)(t.em,{children:"Cadence service"}),". :worker:Worker: services are developed, deployed, and operated by Cadence customers."]}),"\n",(0,o.jsx)(t.p,{children:"You can run a Cadence :worker: in a new or an existing service. Use the framework APIs to start the Cadence :worker: and link in all :activity: and :workflow: implementations that you require the service to execute."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"  WorkerFactory factory = WorkerFactory.newInstance(workflowClient,\n          WorkerFactoryOptions.newBuilder()\n                  .setMaxWorkflowThreadCount(1000)\n                  .setStickyCacheSize(100)\n                  .setDisableStickyExecution(false)\n                  .build());\n  Worker worker = factory.newWorker(TASK_LIST,\n          WorkerOptions.newBuilder()\n                  .setMaxConcurrentActivityExecutionSize(100)\n                  .setMaxConcurrentWorkflowExecutionSize(100)\n                  .build());\n\n    // Workflows are stateful. So you need a type to create instances.\n    worker.registerWorkflowImplementationTypes(GreetingWorkflowImpl.class);\n    // Activities are stateless and thread safe. So a shared instance is used.\n    worker.registerActivitiesImplementations(new GreetingActivitiesImpl());\n    // Start listening to the workflow and activity task lists.\n    factory.start();\n"})}),"\n",(0,o.jsx)(t.p,{children:"The code is slightly different if you are using client version prior to 3.0.0:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"Worker.Factory factory = new Worker.Factory(DOMAIN,\n            new Worker.FactoryOptions.Builder()\n                    .setMaxWorkflowThreadCount(1000)\n                    .setCacheMaximumSize(100)\n                    .setDisableStickyExecution(false)\n                    .build());\n    Worker worker = factory.newWorker(TASK_LIST,\n            new WorkerOptions.Builder()\n                    .setMaxConcurrentActivityExecutionSize(100)\n                    .setMaxConcurrentWorkflowExecutionSize(100)\n                    .build());\n    // Workflows are stateful. So you need a type to create instances.\n    worker.registerWorkflowImplementationTypes(GreetingWorkflowImpl.class);\n    // Activities are stateless and thread safe. So a shared instance is used.\n    worker.registerActivitiesImplementations(new GreetingActivitiesImpl());\n    // Start listening to the workflow and activity task lists.\n    factory.start();\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://www.javadoc.io/static/com.uber.cadence/cadence-client/2.7.9-alpha/com/cadence-workflow/cadence/worker/WorkerFactoryOptions.html",children:"WorkerFactoryOptions"})," includes those that need to be shared across workers on the hosts like thread pool, sticky cache."]}),"\n",(0,o.jsxs)(t.p,{children:["In ",(0,o.jsx)(t.a,{href:"https://www.javadoc.io/static/com.uber.cadence/cadence-client/2.7.9-alpha/com/cadence-workflow/cadence/worker/WorkerOptions.Builder.html",children:"WorkerOptions"})," you can customize things like pollerOptions, activities per second."]})]})}function k(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(6540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);