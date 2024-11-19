"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[3087],{1592:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"java-client/signals","title":"Signals","description":"Signalsworkflow:. Previously, you had","source":"@site/docs/04-java-client/10-signals.md","sourceDirName":"04-java-client","slug":"/java-client/signals","permalink":"/Cadence-Docs/docs/java-client/signals","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/04-java-client/10-signals.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"layout":"default","title":"Signals","permalink":"/docs/java-client/signals"},"sidebar":"docsSidebar","previous":{"title":"Worker service","permalink":"/Cadence-Docs/docs/java-client/workers"},"next":{"title":"Queries","permalink":"/Cadence-Docs/docs/java-client/queries"}}');var a=o(4848),l=o(8453);const i={layout:"default",title:"Signals",permalink:"/docs/java-client/signals"},r="Signals",s={},c=[{value:"Implement Signal Handler in Workflow",id:"implement-signal-handler-in-workflow",level:2},{value:"Signal From Command Line",id:"signal-from-command-line",level:2},{value:"SignalWithStart From Command Line",id:"signalwithstart-from-command-line",level:2},{value:"Signal from user/application code",id:"signal-from-userapplication-code",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"signals",children:"Signals"})}),"\n",(0,a.jsx)(n.p,{children:":signal:Signals: provide a mechanism to send data directly to a running :workflow:. Previously, you had\ntwo options for passing data to the :workflow: implementation:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Via start parameters"}),"\n",(0,a.jsx)(n.li,{children:"As return values from :activity:activities:"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"With start parameters, we could only pass in values before :workflow_execution: began."}),"\n",(0,a.jsx)(n.p,{children:"Return values from :activity:activities: allowed us to pass information to a running :workflow:, but this\napproach comes with its own complications. One major drawback is reliance on polling. This means\nthat the data needs to be stored in a third-party location until it's ready to be picked up by\nthe :activity:. Further, the lifecycle of this :activity: requires management, and the :activity:\nrequires manual restart if it fails before acquiring the data."}),"\n",(0,a.jsx)(n.p,{children:":signal:Signals:, on the other hand, provide a fully asynchronous and durable mechanism for providing data to\na running :workflow:. When a :signal: is received for a running :workflow:, Cadence persists the :event:\nand the payload in the :workflow: history. The :workflow: can then process the :signal: at any time\nafterwards without the risk of losing the information. The :workflow: also has the option to stop\nexecution by blocking on a :signal: channel."}),"\n",(0,a.jsx)(n.h2,{id:"implement-signal-handler-in-workflow",children:"Implement Signal Handler in Workflow"}),"\n",(0,a.jsxs)(n.p,{children:["See the below example from ",(0,a.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence-java-samples/blob/master/src/main/java/com/uber/cadence/samples/hello/HelloSignal.java",children:"sample"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public interface HelloWorld {\n    @WorkflowMethod\n    void sayHello(String name);\n\n    @SignalMethod\n    void updateGreeting(String greeting);\n}\n\npublic static class HelloWorldImpl implements HelloWorld {\n\n    private String greeting = "Hello";\n\n    @Override\n    public void sayHello(String name) {\n        int count = 0;\n        while (!"Bye".equals(greeting)) {\n            logger.info(++count + ": " + greeting + " " + name + "!");\n            String oldGreeting = greeting;\n            Workflow.await(() -> !Objects.equals(greeting, oldGreeting));\n        }\n        logger.info(++count + ": " + greeting + " " + name + "!");\n    }\n\n    @Override\n    public void updateGreeting(String greeting) {\n        this.greeting = greeting;\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:['The :workflow: interface now has a new method annotated with @SignalMethod. It is a callback method that is invoked\nevery time a new :signal: of "HelloWorld::updateGreeting" is delivered to a :workflow:. The :workflow: interface can have only\none @WorkflowMethod which is a ',(0,a.jsx)(n.em,{children:"main"})," function of the :workflow: and as many :signal: methods as needed."]}),"\n",(0,a.jsxs)(n.p,{children:["The updated :workflow: implementation demonstrates a few important Cadence concepts. The first is that :workflow: is stateful and can\nhave fields of any complex type. Another is that the ",(0,a.jsx)(n.code,{children:"Workflow.await"})," function that blocks until the function it receives as a parameter evaluates to true. The condition is going to be evaluated only on :workflow: state changes, so it is not a busy wait in traditional sense."]}),"\n",(0,a.jsx)(n.h2,{id:"signal-from-command-line",children:"Signal From Command Line"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'cadence: docker run --network=host --rm ubercadence/cli:master --do test-domain workflow start  --workflow_id "HelloSignal" --tasklist HelloWorldTaskList --workflow_type HelloWorld::sayHello --execution_timeout 3600 --input \\"World\\"\nStarted Workflow Id: HelloSignal, run Id: 6fa204cb-f478-469a-9432-78060b83b6cd\n'})}),"\n",(0,a.jsx)(n.p,{children:"Program output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"16:53:56.120 [workflow-root] INFO  c.u.c.samples.hello.GettingStarted - 1: Hello World!\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's send a :signal: using :CLI::"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'cadence: docker run --network=host --rm ubercadence/cli:master --do test-domain workflow signal --workflow_id "HelloSignal" --name "HelloWorld::updateGreeting" --input \\"Hi\\"\nSignal workflow succeeded.\n'})}),"\n",(0,a.jsx)(n.p,{children:"Program output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"16:53:56.120 [workflow-root] INFO  c.u.c.samples.hello.GettingStarted - 1: Hello World!\n16:54:57.901 [workflow-root] INFO  c.u.c.samples.hello.GettingStarted - 2: Hi World!\n"})}),"\n",(0,a.jsx)(n.p,{children:"Try sending the same :signal: with the same input again. Note that the output doesn't change. This happens because the await condition\ndoesn't unblock when it sees the same value. But a new greeting unblocks it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'cadence: docker run --network=host --rm ubercadence/cli:master --do test-domain workflow signal --workflow_id "HelloSignal" --name "HelloWorld::updateGreeting" --input \\"Welcome\\"\nSignal workflow succeeded.\n'})}),"\n",(0,a.jsx)(n.p,{children:"Program output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"16:53:56.120 [workflow-root] INFO  c.u.c.samples.hello.GettingStarted - 1: Hello World!\n16:54:57.901 [workflow-root] INFO  c.u.c.samples.hello.GettingStarted - 2: Hi World!\n16:56:24.400 [workflow-root] INFO  c.u.c.samples.hello.GettingStarted - 3: Welcome World!\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now shut down the :worker: and send the same :signal: again:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'cadence: docker run --network=host --rm ubercadence/cli:master --do test-domain workflow signal --workflow_id "HelloSignal" --name "HelloWorld::updateGreeting" --input \\"Welcome\\"\nSignal workflow succeeded.\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note that sending :signal:signals: as well as starting :workflow:workflows: does not need a :worker: running. The requests are queued inside the Cadence service."}),"\n",(0,a.jsx)(n.p,{children:"Now bring the :worker: back. Note that it doesn't log anything besides the standard startup messages.\nThis occurs because it ignores the queued :signal: that contains the same input as the current value of greeting.\nNote that the restart of the :worker: didn't affect the :workflow_execution:. It is still blocked on the same line of code as before the failure.\nThis is the most important feature of Cadence. The :workflow: code doesn't need to deal with :worker: failures at all. Its state is fully recovered to its current state that includes all the local variables and threads."}),"\n",(0,a.jsx)(n.p,{children:"Let's look at the line where the :workflow: is blocked:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'> docker run --network=host --rm ubercadence/cli:master --do test-domain workflow stack --workflow_id "Hello2"\nQuery result:\n"workflow-root: (BLOCKED on await)\ncom.uber.cadence.internal.sync.SyncDecisionContext.await(SyncDecisionContext.java:546)\ncom.uber.cadence.internal.sync.WorkflowInternal.await(WorkflowInternal.java:243)\ncom.uber.cadence.workflow.Workflow.await(Workflow.java:611)\ncom.uber.cadence.samples.hello.GettingStarted$HelloWorldImpl.sayHello(GettingStarted.java:32)\nsun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\nsun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)"\n'})}),"\n",(0,a.jsx)(n.p,{children:'Yes, indeed the :workflow: is blocked on await. This feature works for any open :workflow:, greatly simplifying troubleshooting in production.\nLet\'s complete the :workflow: by sending a :signal: with a "Bye" greeting:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"16:58:22.962 [workflow-root] INFO  c.u.c.samples.hello.GettingStarted - 4: Bye World!\n"})}),"\n",(0,a.jsx)(n.p,{children:"Note that the value of the count variable was not lost during the restart."}),"\n",(0,a.jsx)(n.p,{children:"Also note that while a single :worker: instance is used for this\nwalkthrough, any real production deployment has multiple :worker: instances running. So any :worker: failure or restart does not delay any\n:workflow_execution: because it is just migrated to any other available :worker:."}),"\n",(0,a.jsx)(n.h2,{id:"signalwithstart-from-command-line",children:"SignalWithStart From Command Line"}),"\n",(0,a.jsxs)(n.p,{children:["You may not know if a :workflow: is running and can accept a :signal:.\nThe signalWithStart feature allows you to send a :signal: to the current :workflow: instance if one exists or to create a new\nrun and then send the :signal:. ",(0,a.jsx)(n.code,{children:"SignalWithStartWorkflow"})," therefore doesn't take a :run_ID: as a\nparameter."]}),"\n",(0,a.jsxs)(n.p,{children:["Learn more from the ",(0,a.jsx)(n.code,{children:"--help"})," manual:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run --network=host --rm ubercadence/cli:master --do test-domain workflow signalwithstart -h\nNAME:\n   cadence workflow signalwithstart - signal the current open workflow if exists, or attempt to start a new run based on IDResuePolicy and signals it\n\nUSAGE:\n   cadence workflow signalwithstart [command options] [arguments...]\n...\n...\n...\n"})}),"\n",(0,a.jsx)(n.h2,{id:"signal-from-userapplication-code",children:"Signal from user/application code"}),"\n",(0,a.jsx)(n.p,{children:"You may want to signal workflows without running the command line."}),"\n",(0,a.jsxs)(n.p,{children:["The\n",(0,a.jsx)(n.a,{href:"https://www.javadoc.io/doc/com.uber.cadence/cadence-client/latest/com/cadence-workflow/cadence/client/WorkflowClient.html",children:"WorkflowClient"})," API allows you to send signal (or SignalWithStartWorkflow) from outside of the workflow\nto send a :signal: to the current :workflow:."]}),"\n",(0,a.jsxs)(n.p,{children:["Note that when using ",(0,a.jsx)(n.code,{children:"newWorkflowStub"})," to signal a workflow, you MUST NOT passing WorkflowOptions."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://www.javadoc.io/static/com.uber.cadence/cadence-client/2.7.9-alpha/com/cadence-workflow/cadence/client/WorkflowClient.html#newWorkflowStub-java.lang.Class-com.uber.cadence.client.WorkflowOptions-",children:"WorkflowStub"})," with WorkflowOptions is only for starting workflows."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://www.javadoc.io/static/com.uber.cadence/cadence-client/2.7.9-alpha/com/cadence-workflow/cadence/client/WorkflowClient.html#newWorkflowStub-java.lang.Class-java.lang.String-",children:"WorkflowStub"})," without WorkflowOptions is for signal or ",(0,a.jsx)(n.a,{href:"/docs/java-client/queries",children:"query"})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var t=o(6540);const a={},l=t.createContext(a);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);