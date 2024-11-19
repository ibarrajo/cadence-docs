"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[3029],{3198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var r=t(3865),o=t(4848),i=t(8453);const a={title:"Implement a Cadence worker service from scratch",date:new Date("2023-07-05T00:00:00.000Z"),authors:"chopincode",tags:["deep-dive","introduction-to-cadence"]},c=void 0,s={authorsImageUrls:[void 0]},l=[];function d(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In the previous ",(0,o.jsx)(n.a,{href:"/Cadence-Docs/blog/2023/06/28/components-of-cadence-application-setup",children:"blog"}),", we have introduced three critical components for a Cadence application: the Cadence backend, domain, and worker. Among these, the worker service is the most crucial focus for developers as it hosts the activities and workflows of a Cadence application. In this blog, I will provide a short tutorial on how to implement a simple worker service from scratch in Go."]}),"\n",(0,o.jsx)(n.p,{children:"To finish this tutorial, there are two prerequisites you need to finish first"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Register a Cadence domain for your worker. For this tutorial, I've already registered a domain named ",(0,o.jsx)(n.code,{children:"test-domain"})]}),"\n",(0,o.jsx)(n.li,{children:"Start the Cadence backend server in background."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"To get started, let's simply use the native HTTP package built in Go to start a process listening to port 3000. You may customize the port for your worker, but the port you choose should not conflict with existing port for your Cadence backend."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"net/http"\n)\n\nfunc main(){\n\tfmt.Println("Cadence worker started at port 3000")\n\thttp.ListenAndServe(":3000", nil)\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Next, let's define some basic configurations for the worker. In real production environment, you may need to implement them in configurational languages, but in this tutorial, let's just hard code them for now."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Go",children:'var HostPort = "127.0.0.1:7933"\nvar Domain = "test-domain"\nvar TaskListName = "test-worker"\nvar ClientName = "test-worker"\nvar CadenceService = "cadence-frontend"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Note that the domain is what we've already registered in advance. We will need to use this domain to interact with Cadence CLI tool."}),"\n",(0,o.jsx)(n.p,{children:"Then let's write a simple function to build a Cadence client on gRPC in your worker, which will communicate with the Cadence backend continuously."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Go",children:'func buildCadenceClient() workflowserviceclient.Interface {\n    dispatcher := yarpc.NewDispatcher(yarpc.Config{\n\t\tName: ClientName,\n\t\tOutbounds: yarpc.Outbounds{\n\t\t  CadenceService: {Unary: grpc.NewTransport().NewSingleOutbound(HostPort)},\n\t\t},\n\t  })\n\t  if err := dispatcher.Start(); err != nil {\n\t\tpanic("Failed to start dispatcher")\n\t  }\n\n\t  clientConfig := dispatcher.ClientConfig(CadenceService)\n\n\t  return compatibility.NewThrift2ProtoAdapter(\n\t\tapiv1.NewDomainAPIYARPCClient(clientConfig),\n\t\tapiv1.NewWorkflowAPIYARPCClient(clientConfig),\n\t\tapiv1.NewWorkerAPIYARPCClient(clientConfig),\n\t\tapiv1.NewVisibilityAPIYARPCClient(clientConfig),\n\t  )\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Let's also build a logger to help us debug our application"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Go",children:'func buildLogger() *zap.Logger {\n    config := zap.NewDevelopmentConfig()\n    config.Level.SetLevel(zapcore.InfoLevel)\n\n    var err error\n    logger, err := config.Build()\n    if err != nil {\n        panic("Failed to setup logger")\n    }\n\n    return logger\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"With both client and logger helper function ready, let's write the function that starts our worker."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Go",children:'func startWorker(logger *zap.Logger, service workflowserviceclient.Interface) {\n    // TaskListName identifies set of client workflows, activities, and workers.\n    // It could be your group or client or application name.\n    workerOptions := worker.Options{\n        Logger:       logger,\n        MetricsScope: tally.NewTestScope(TaskListName, map[string]string{}),\n    }\n\n    worker := worker.New(\n        service,\n        Domain,\n        TaskListName,\n        workerOptions)\n    err := worker.Start()\n    if err != nil {\n        panic("Failed to start worker")\n    }\n\n    logger.Info("Started Worker.", zap.String("worker", TaskListName))\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now we have all components ready for the worker, let's put them together."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Go",children:'import (\n    "net/http"\n    "go.uber.org/cadence/.gen/go/cadence/workflowserviceclient"\n    "go.uber.org/cadence/compatibility"\n    "go.uber.org/cadence/worker"\n\n    apiv1 "github.com/cadence-workflow/cadence-idl/go/proto/api/v1"\n    "github.com/uber-go/tally"\n    "go.uber.org/zap"\n    "go.uber.org/zap/zapcore"\n    "go.uber.org/yarpc"\n    "go.uber.org/yarpc/transport/grpc"\n)\n\nvar HostPort = "127.0.0.1:7933"\nvar Domain = "test-domain"\nvar TaskListName = "test-worker"\nvar ClientName = "test-worker"\nvar CadenceService = "cadence-frontend"\n\nfunc main() {\n    startWorker(buildLogger(), buildCadenceClient())\n    http.ListenAndServe(":3000", nil)\n}\n\nfunc buildLogger() *zap.Logger {\n    config := zap.NewDevelopmentConfig()\n    config.Level.SetLevel(zapcore.InfoLevel)\n\n    var err error\n    logger, err := config.Build()\n    if err != nil {\n        panic("Failed to setup logger")\n    }\n\n    return logger\n}\n\nfunc buildCadenceClient() workflowserviceclient.Interface {\n    dispatcher := yarpc.NewDispatcher(yarpc.Config{\n\t\tName: ClientName,\n\t\tOutbounds: yarpc.Outbounds{\n\t\t  CadenceService: {Unary: grpc.NewTransport().NewSingleOutbound(HostPort)},\n\t\t},\n\t  })\n\t  if err := dispatcher.Start(); err != nil {\n\t\tpanic("Failed to start dispatcher")\n\t  }\n\n\t  clientConfig := dispatcher.ClientConfig(CadenceService)\n\n\t  return compatibility.NewThrift2ProtoAdapter(\n\t\tapiv1.NewDomainAPIYARPCClient(clientConfig),\n\t\tapiv1.NewWorkflowAPIYARPCClient(clientConfig),\n\t\tapiv1.NewWorkerAPIYARPCClient(clientConfig),\n\t\tapiv1.NewVisibilityAPIYARPCClient(clientConfig),\n\t  )\n}\n\nfunc startWorker(logger *zap.Logger, service workflowserviceclient.Interface) {\n    // TaskListName identifies set of client workflows, activities, and workers.\n    // It could be your group or client or application name.\n    workerOptions := worker.Options{\n        Logger:       logger,\n        MetricsScope: tally.NewTestScope(TaskListName, map[string]string{}),\n    }\n\n    worker := worker.New(\n        service,\n        Domain,\n        TaskListName,\n        workerOptions)\n    err := worker.Start()\n    if err != nil {\n        panic("Failed to start worker")\n    }\n\n    logger.Info("Started Worker.", zap.String("worker", TaskListName))\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Open a new terminal and start this server, you should see logs like"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'2023-07-03T11:46:46.266-0700    INFO    internal/internal_worker.go:826 Worker has no workflows registered, so workflow worker will not be started.     {"Domain": "test-domain", "TaskList": "test-worker", "WorkerID": "35987@uber-C02F18EQMD6R@test-worker@90c0260e-ba5c-4652-9f10-c6d1f9e29c1d"}\n2023-07-03T11:46:46.267-0700    INFO    internal/internal_worker.go:834 Started Workflow Worker {"Domain": "test-domain", "TaskList": "test-worker", "WorkerID": "35987@uber-C02F18EQMD6R@test-worker@90c0260e-ba5c-4652-9f10-c6d1f9e29c1d"}\n2023-07-03T11:46:46.267-0700    INFO    internal/internal_worker.go:838 Worker has no activities registered, so activity worker will not be started.    {"Domain": "test-domain", "TaskList": "test-worker", "WorkerID": "35987@uber-C02F18EQMD6R@test-worker@90c0260e-ba5c-4652-9f10-c6d1f9e29c1d"}\n2023-07-03T11:46:46.267-0700    INFO    cadence-worker/main.go:75       Started Worker. {"worker": "test-worker"}\n'})}),"\n",(0,o.jsx)(n.p,{children:"You may see these logs because your worker is successfully running but we haven't registered any workflows or activities to the worker. In the next tutorial, we will learn how to write a simple hello world workflow for your Cadence application."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(6540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}},3865:e=>{e.exports=JSON.parse('{"permalink":"/Cadence-Docs/blog/2023/07/05/implement-cadence-worker-from-scratch","editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/blog/2023-07-05-implement-cadence-worker-from-scratch.md","source":"@site/blog/2023-07-05-implement-cadence-worker-from-scratch.md","title":"Implement a Cadence worker service from scratch","description":"In the previous blog, we have introduced three critical components for a Cadence application: the Cadence backend, domain, and worker. Among these, the worker service is the most crucial focus for developers as it hosts the activities and workflows of a Cadence application. In this blog, I will provide a short tutorial on how to implement a simple worker service from scratch in Go.","date":"2023-07-05T00:00:00.000Z","tags":[{"inline":false,"label":"Deep Dives","permalink":"/Cadence-Docs/blog/tags/deep-dives","description":"Deep Dives tag description"},{"inline":false,"label":"Introduction to Cadence","permalink":"/Cadence-Docs/blog/tags/introduction-to-cadence","description":"Introduction to Cadence tag description"}],"readingTime":3.69,"hasTruncateMarker":true,"authors":[{"name":"Chris Qin","title":"Applications Developer @ Uber","url":"https://www.linkedin.com/in/chrisqin0610/","page":{"permalink":"/Cadence-Docs/blog/authors/chopincode"},"socials":{"linkedin":"https://www.linkedin.com/in/chrisqin0610/","github":"https://github.com/chopincode"},"imageURL":"https://github.com/chopincode.png","key":"chopincode"}],"frontMatter":{"title":"Implement a Cadence worker service from scratch","date":"2023-07-05T00:00:00.000Z","authors":"chopincode","tags":["deep-dive","introduction-to-cadence"]},"unlisted":false,"prevItem":{"title":"Bad practices and Anti-patterns with Cadence (Part 1)","permalink":"/Cadence-Docs/blog/2023/07/10/cadence-bad-practices-part-1"},"nextItem":{"title":"Understanding components of Cadence application","permalink":"/Cadence-Docs/blog/2023/06/28/components-of-cadence-application-setup"}}')}}]);