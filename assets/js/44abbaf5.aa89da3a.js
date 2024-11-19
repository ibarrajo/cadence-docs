"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[7682],{6513:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"java-client/starting-workflow-executions","title":"Starting workflows","description":"Creating a WorkflowClient","source":"@site/docs/04-java-client/04-starting-workflow-executions.md","sourceDirName":"04-java-client","slug":"/java-client/starting-workflow-executions","permalink":"/Cadence-Docs/docs/java-client/starting-workflow-executions","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/04-java-client/04-starting-workflow-executions.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"layout":"default","title":"Starting workflows","permalink":"/docs/java-client/starting-workflow-executions"},"sidebar":"docsSidebar","previous":{"title":"Implementing workflows","permalink":"/Cadence-Docs/docs/java-client/implementing-workflows"},"next":{"title":"Activity interface","permalink":"/Cadence-Docs/docs/java-client/activity-interface"}}');var r=n(4848),i=n(8453);const l={layout:"default",title:"Starting workflows",permalink:"/docs/java-client/starting-workflow-executions"},s="Starting workflow executions",a={},c=[{value:"Creating a WorkflowClient",id:"creating-a-workflowclient",level:2},{value:"Executing Workflows",id:"executing-workflows",level:2}];function w(e){const o={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"starting-workflow-executions",children:"Starting workflow executions"})}),"\n",(0,r.jsx)(o.h2,{id:"creating-a-workflowclient",children:"Creating a WorkflowClient"}),"\n",(0,r.jsxs)(o.p,{children:["A :workflow: interface that executes a :workflow: requires initializing a ",(0,r.jsx)(o.code,{children:"WorkflowClient"})," instance, creating\na client side stub to the :workflow:, and then calling a method annotated with @WorkflowMethod."]}),"\n",(0,r.jsxs)(o.p,{children:["A simple ",(0,r.jsx)(o.code,{children:"WorkflowClient"})," instance that utilises the :tchannel: communication protocol can be initialised as follows:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:"WorkflowClient workflowClient =\n        WorkflowClient.newInstance(\n            new WorkflowServiceTChannel(\n                ClientOptions.newBuilder().setHost(cadenceServiceHost).setPort(cadenceServicePort).build()),\n            WorkflowClientOptions.newBuilder().setDomain(domain).build());\n// Create a workflow stub.\nFileProcessingWorkflow workflow = workflowClient.newWorkflowStub(FileProcessingWorkflow.class);\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Alternatively, if wishing to create a ",(0,r.jsx)(o.code,{children:"WorkflowClient"})," that uses TLS, we can initialise a client that uses the gRPC communication protocol instead. First, additions will need to be made to the project's ",(0,r.jsx)(o.em,{children:"pom.xml"}),":"]}),"\n",(0,r.jsxs)("dependency",{children:[(0,r.jsx)("groupId",{children:"io.grpc"}),(0,r.jsx)("artifactId",{children:"grpc-netty"}),(0,r.jsx)("version",{children:"LATEST.RELEASE.VERSION"})]}),"\n",(0,r.jsxs)("dependency",{children:[(0,r.jsx)("groupId",{children:"io.netty"}),(0,r.jsx)("artifactId",{children:"netty-all"}),(0,r.jsx)("version",{children:"LATEST.RELEASE.VERSION"})]}),"\n",(0,r.jsxs)(o.p,{children:["Then, use the following client implementation; provide a TLS certificate with which the cluster has also been configured (replace ",(0,r.jsx)(o.code,{children:'"/path/to/cert/file"'})," in the sample):"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:'WorkflowClient workflowClient =\n        WorkflowClient.newInstance(\n            new Thrift2ProtoAdapter(\n                IGrpcServiceStubs.newInstance(\n                    ClientOptions.newBuilder().setGRPCChannel(\n                        NettyChannelBuilder.forAddress(cadenceServiceHost, cadenceServicePort)\n                            .useTransportSecurity()\n                            .defaultLoadBalancingPolicy("round_robin")\n                            .sslContext(GrpcSslContexts.forClient()\n                                .trustManager(new File("/path/to/cert/file"))\n                                .build()).build()).build())),\n            WorkflowClientOptions.newBuilder().setDomain(domain).build());\n// Create a workflow stub.\nFileProcessingWorkflow workflow = workflowClient.newWorkflowStub(FileProcessingWorkflow.class);\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Or, if you are using version prior to 3.0.0, a ",(0,r.jsx)(o.code,{children:"WorkflowClient"})," can be created as follows:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:"WorkflowClient workflowClient = WorkflowClient.newClient(cadenceServiceHost, cadenceServicePort, domain);\n// Create a workflow stub.\nFileProcessingWorkflow workflow = workflowClient.newWorkflowStub(FileProcessingWorkflow.class);\n"})}),"\n",(0,r.jsx)(o.h2,{id:"executing-workflows",children:"Executing Workflows"}),"\n",(0,r.jsx)(o.p,{children:"There are two ways to start :workflow_execution:: asynchronously and synchronously. Asynchronous start initiates a :workflow_execution: and immediately returns to the caller. This is the most common way to start :workflow:workflows: in production code. Synchronous invocation starts a :workflow:\nand then waits for its completion. If the process that started the :workflow: crashes or stops waiting, the :workflow: continues executing.\nBecause :workflow:workflows: are potentially long running, and crashes of clients happen, this is not very commonly found in production use."}),"\n",(0,r.jsx)(o.p,{children:"Asynchronous start:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:'// Returns as soon as the workflow starts.\nWorkflowExecution workflowExecution = WorkflowClient.start(workflow::processFile, workflowArgs);\n\nSystem.out.println("Started process file workflow with workflowId=\\"" + workflowExecution.getWorkflowId()\n                    + "\\" and runId=\\"" + workflowExecution.getRunId() + "\\"");\n'})}),"\n",(0,r.jsx)(o.p,{children:"Synchronous start:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:"// Start a workflow and then wait for a result.\n// Note that if the waiting process is killed, the workflow will continue execution.\nString result = workflow.processFile(workflowArgs);\n"})}),"\n",(0,r.jsxs)(o.p,{children:["If you need to wait for a :workflow: completion after an asynchronous start, the most straightforward way\nis to call the blocking version again. If ",(0,r.jsx)(o.code,{children:"WorkflowOptions.WorkflowIdReusePolicy"})," is not ",(0,r.jsx)(o.code,{children:"AllowDuplicate"}),", then instead\nof throwing ",(0,r.jsx)(o.code,{children:"DuplicateWorkflowException"}),", it reconnects to an existing :workflow: and waits for its completion.\nThe following example shows how to do this from a different process than the one that started the :workflow:. All this process\nneeds is a ",(0,r.jsx)(o.code,{children:"WorkflowID"}),"."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:"WorkflowExecution execution = new WorkflowExecution().setWorkflowId(workflowId);\nFileProcessingWorkflow workflow = workflowClient.newWorkflowStub(execution);\n// Returns result potentially waiting for workflow to complete.\nString result = workflow.processFile(workflowArgs);\n"})})]})}function d(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(w,{...e})}):w(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>s});var t=n(6540);const r={},i=t.createContext(r);function l(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);