"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[3364],{2855:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"java-client/implementing-workflows","title":"Implementing workflows","description":"A implementation implements a interface. Each time a new is started,","source":"@site/docs/04-java-client/03-implementing-workflows.md","sourceDirName":"04-java-client","slug":"/java-client/implementing-workflows","permalink":"/Cadence-Docs/docs/java-client/implementing-workflows","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/04-java-client/03-implementing-workflows.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"layout":"default","title":"Implementing workflows","permalink":"/docs/java-client/implementing-workflows"},"sidebar":"docsSidebar","previous":{"title":"Workflow interface","permalink":"/Cadence-Docs/docs/java-client/workflow-interface"},"next":{"title":"Starting workflows","permalink":"/Cadence-Docs/docs/java-client/starting-workflow-executions"}}');var t=i(4848),s=i(8453);const l={layout:"default",title:"Implementing workflows",permalink:"/docs/java-client/implementing-workflows"},a="Implementing workflows",r={},c=[{value:"Calling Activities",id:"calling-activities",level:2},{value:"Calling Activities Asynchronously",id:"calling-activities-asynchronously",level:2},{value:"Workflow Implementation Constraints",id:"workflow-implementation-constraints",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"implementing-workflows",children:"Implementing workflows"})}),"\n",(0,t.jsxs)(n.p,{children:["A :workflow: implementation implements a :workflow: interface. Each time a new :workflow_execution: is started,\na new instance of the :workflow: implementation object is created. Then, one of the methods\n(depending on which :workflow: type has been started) annotated with ",(0,t.jsx)(n.code,{children:"@WorkflowMethod"})," is invoked. As soon as this method\nreturns, the :workflow_execution: is closed. While :workflow_execution: is open, it can receive calls to :signal: and :query: methods.\nNo additional calls to :workflow: methods are allowed. The :workflow: object is stateful, so :query: and :signal: methods\ncan communicate with the other parts of the :workflow: through :workflow: object fields."]}),"\n",(0,t.jsx)(n.h2,{id:"calling-activities",children:"Calling Activities"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Workflow.newActivityStub"})," returns a client-side stub that implements an :activity: interface.\nIt takes :activity: type and :activity: options as arguments. :activity:Activity: options are needed only if some of the required\ntimeouts are not specified through the ",(0,t.jsx)(n.code,{children:"@ActivityMethod"})," annotation."]}),"\n",(0,t.jsx)(n.p,{children:"Calling a method on this interface invokes an :activity: that implements this method.\nAn :activity: invocation synchronously blocks until the :activity: completes, fails, or times out. Even if :activity:\nexecution takes a few months, the :workflow: code still sees it as a single synchronous invocation.\nIt doesn't matter what happens to the processes that host the :workflow:. The business logic code\njust sees a single method call."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class FileProcessingWorkflowImpl implements FileProcessingWorkflow {\n\n    private final FileProcessingActivities activities;\n\n    public FileProcessingWorkflowImpl() {\n        this.activities = Workflow.newActivityStub(FileProcessingActivities.class);\n    }\n\n    @Override\n    public void processFile(Arguments args) {\n        String localName = null;\n        String processedName = null;\n        try {\n            localName = activities.download(args.getSourceBucketName(), args.getSourceFilename());\n            processedName = activities.processFile(localName);\n            activities.upload(args.getTargetBucketName(), args.getTargetFilename(), processedName);\n        } finally {\n            if (localName != null) { // File was downloaded.\n                activities.deleteLocalFile(localName);\n            }\n            if (processedName != null) { // File was processed.\n                activities.deleteLocalFile(processedName);\n            }\n        }\n    }\n    ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"If different :activity:activities: need different options, like timeouts or a :task_list:, multiple client-side stubs can be created\nwith different options."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public FileProcessingWorkflowImpl() {\n    ActivityOptions options1 = new ActivityOptions.Builder()\n             .setTaskList("taskList1")\n             .build();\n    this.store1 = Workflow.newActivityStub(FileProcessingActivities.class, options1);\n\n    ActivityOptions options2 = new ActivityOptions.Builder()\n             .setTaskList("taskList2")\n             .build();\n    this.store2 = Workflow.newActivityStub(FileProcessingActivities.class, options2);\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"calling-activities-asynchronously",children:"Calling Activities Asynchronously"}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes :workflow:workflows: need to perform certain operations in parallel.\nThe ",(0,t.jsx)(n.code,{children:"Async"})," class static methods allow you to invoke any :activity: asynchronously. The calls return a ",(0,t.jsx)(n.code,{children:"Promise"})," result immediately.\n",(0,t.jsx)(n.code,{children:"Promise"})," is similar to both Java ",(0,t.jsx)(n.code,{children:"Future"})," and ",(0,t.jsx)(n.code,{children:"CompletionStage"}),". The ",(0,t.jsx)(n.code,{children:"Promise"})," ",(0,t.jsx)(n.code,{children:"get"})," blocks until a result is available.\nIt also exposes the ",(0,t.jsx)(n.code,{children:"thenApply"})," and ",(0,t.jsx)(n.code,{children:"handle"})," methods. See the ",(0,t.jsx)(n.code,{children:"Promise"})," JavaDoc for technical details about differences with ",(0,t.jsx)(n.code,{children:"Future"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To convert a synchronous call:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"String localName = activities.download(sourceBucket, sourceFile);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To asynchronous style, the method reference is passed to ",(0,t.jsx)(n.code,{children:"Async.function"})," or ",(0,t.jsx)(n.code,{children:"Async.procedure"}),"\nfollowed by :activity: arguments:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Promise<String> localNamePromise = Async.function(activities::download, sourceBucket, sourceFile);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then to wait synchronously for the result:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"String localName = localNamePromise.get();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here is the above example rewritten to call download and upload in parallel on multiple files:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public void processFile(Arguments args) {\n    List<Promise<String>> localNamePromises = new ArrayList<>();\n    List<String> processedNames = null;\n    try {\n        // Download all files in parallel.\n        for (String sourceFilename : args.getSourceFilenames()) {\n            Promise<String> localName = Async.function(activities::download,\n                args.getSourceBucketName(), sourceFilename);\n            localNamePromises.add(localName);\n        }\n        // allOf converts a list of promises to a single promise that contains a list\n        // of each promise value.\n        Promise<List<String>> localNamesPromise = Promise.allOf(localNamePromises);\n\n        // All code until the next line wasn't blocking.\n        // The promise get is a blocking call.\n        List<String> localNames = localNamesPromise.get();\n        processedNames = activities.processFiles(localNames);\n\n        // Upload all results in parallel.\n        List<Promise<Void>> uploadedList = new ArrayList<>();\n        for (String processedName : processedNames) {\n            Promise<Void> uploaded = Async.procedure(activities::upload,\n                args.getTargetBucketName(), args.getTargetFilename(), processedName);\n            uploadedList.add(uploaded);\n        }\n        // Wait for all uploads to complete.\n        Promise<?> allUploaded = Promise.allOf(uploadedList);\n        allUploaded.get(); // blocks until all promises are ready.\n    } finally {\n        for (Promise<String> localNamePromise : localNamePromises) {\n            // Skip files that haven't completed downloading.\n            if (localNamePromise.isCompleted()) {\n                activities.deleteLocalFile(localNamePromise.get());\n            }\n        }\n        if (processedNames != null) {\n            for (String processedName : processedNames) {\n                activities.deleteLocalFile(processedName);\n            }\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"workflow-implementation-constraints",children:"Workflow Implementation Constraints"}),"\n",(0,t.jsxs)(n.p,{children:["Cadence uses the ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/event-sourcing",children:"Microsoft Azure Event Sourcing pattern"})," to recover\nthe state of a :workflow: object including its threads and local variable values.\nIn essence, every time a :workflow: state has to be restored, its code is re-executed from the beginning. When replaying, side\neffects (such as :activity: invocations) are ignored because they are already recorded in the :workflow: :event_history:.\nWhen writing :workflow: logic, the replay is not visible, so the code should be written since it executes only once.\nThis design puts the following constraints on the :workflow: implementation:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Do not use any mutable global variables because multiple instances of :workflow:workflows: are executed in parallel."}),"\n",(0,t.jsx)(n.li,{children:"Do not call any non-deterministic functions like non seeded random or UUID.randomUUID() directly from the :workflow: code."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Always do the following in :workflow:workflows::"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Don\u2019t perform any IO or service calls as they are not usually deterministic. Use :activity:activities: for this."}),"\n",(0,t.jsxs)(n.li,{children:["Only use ",(0,t.jsx)(n.code,{children:"Workflow.currentTimeMillis()"})," to get the current time inside a :workflow:."]}),"\n",(0,t.jsxs)(n.li,{children:["Do not use native Java ",(0,t.jsx)(n.code,{children:"Thread"})," or any other multi-threaded classes like ",(0,t.jsx)(n.code,{children:"ThreadPoolExecutor"}),". Use ",(0,t.jsx)(n.code,{children:"Async.function"})," or ",(0,t.jsx)(n.code,{children:"Async.procedure"}),"\nto execute code asynchronously."]}),"\n",(0,t.jsxs)(n.li,{children:["Don't use any synchronization, locks, and other standard Java blocking concurrency-related classes besides those provided\nby the Workflow class. There is no need in explicit synchronization because multi-threaded code inside a :workflow: is\nexecuted one thread at a time and under a global lock.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Call ",(0,t.jsx)(n.code,{children:"WorkflowThread.sleep"})," instead of ",(0,t.jsx)(n.code,{children:"Thread.sleep"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"Promise"})," and ",(0,t.jsx)(n.code,{children:"CompletablePromise"})," instead of ",(0,t.jsx)(n.code,{children:"Future"})," and ",(0,t.jsx)(n.code,{children:"CompletableFuture"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"WorkflowQueue"})," instead of ",(0,t.jsx)(n.code,{children:"BlockingQueue"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"Workflow.getVersion"})," when making any changes to the :workflow: code. Without this, any deployment of updated :workflow: code\nmight break already open :workflow:workflows:."]}),"\n",(0,t.jsx)(n.li,{children:"Don\u2019t access configuration APIs directly from a :workflow: because changes in the configuration might affect a :workflow_execution: path.\nPass it as an argument to a :workflow: function or use an :activity: to load it."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[":workflow:Workflow: method arguments and return values are serializable to a byte array using the provided\n",(0,t.jsx)(n.a,{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.4.1/index.html?com/cadence-workflow/cadence/converter/DataConverter.html",children:"DataConverter"}),"\ninterface. The default implementation uses JSON serializer, but you can use any alternative serialization mechanism."]}),"\n",(0,t.jsx)(n.p,{children:"The values passed to :workflow:workflows: through invocation parameters or returned through a result value are recorded in the execution history.\nThe entire execution history is transferred from the Cadence service to :workflow_worker:workflow_workers: with every :event: that the :workflow: logic needs to process.\nA large execution history can thus adversely impact the performance of your :workflow:.\nTherefore, be mindful of the amount of data that you transfer via :activity: invocation parameters or return values.\nOtherwise, no additional limitations exist on :activity: implementations."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var o=i(6540);const t={},s=o.createContext(t);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);