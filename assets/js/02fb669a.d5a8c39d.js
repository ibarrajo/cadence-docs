"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[1839],{3839:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"concepts/workflows","title":"Workflows","description":"Overview","source":"@site/docs/03-concepts/01-workflows.md","sourceDirName":"03-concepts","slug":"/concepts/workflows","permalink":"/cadence-docs/docs/concepts/workflows","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/03-concepts/01-workflows.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"layout":"default","title":"Workflows","permalink":"/docs/concepts/workflows"}}');var o=t(4848),s=t(8453);const r={layout:"default",title:"Workflows",permalink:"/docs/concepts/workflows"},a="Fault-oblivious stateful workflow code",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Example",id:"example",level:2},{value:"State Recovery and Determinism",id:"state-recovery-and-determinism",level:2},{value:"ID Uniqueness",id:"id-uniqueness",level:2},{value:"Child Workflow",id:"child-workflow",level:2},{value:"Workflow Retries",id:"workflow-retries",level:2},{value:"How does workflow run",id:"how-does-workflow-run",level:2}];function d(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"fault-oblivious-stateful-workflow-code",children:"Fault-oblivious stateful workflow code"})}),"\n",(0,o.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(i.p,{children:["Cadence core abstraction is a ",(0,o.jsx)(i.strong,{children:"fault-oblivious stateful workflow"}),". The state of the workflow code, including local variables and threads it creates, is immune to process and Cadence service failures.\nThis is a very powerful concept as it encapsulates state, processing threads, durable timers and event handlers."]}),"\n",(0,o.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(i.p,{children:"Let's look at a use case. A customer signs up for an application with a trial period. After the period, if the customer has not cancelled, he should be charged once a month for the renewal. The customer has to be notified by email about the charges and should be able to cancel the subscription at any time."}),"\n",(0,o.jsx)(i.p,{children:"The business logic of this use case is not very complicated and can be expressed in a few dozen lines of code. But any practical implementation has to ensure that the business process is fault tolerant and scalable. There are various ways to approach the design of such a system."}),"\n",(0,o.jsx)(i.p,{children:"One approach is to center it around a database. An application process would periodically scan database tables for customers in specific states, execute necessary actions, and update the state to reflect that. While feasible, this approach has various drawbacks. The most obvious is that the state machine of the customer state quickly becomes extremely complicated. For example, charging a credit card or sending emails can fail due to a downstream system unavailability. The failed calls might need to be retried for a long time, ideally using an exponential retry policy. These calls should be throttled to not overload external systems. There should be support for poison pills to avoid blocking the whole process if a single customer record cannot be processed for whatever reason. The database-based approach also usually has performance problems. Databases are not efficient for scenarios that require constant polling for records in a specific state."}),"\n",(0,o.jsx)(i.p,{children:"Another commonly employed approach is to use a timer service and queues. Any update is pushed to a queue and then a worker that consumes from it updates a database and possibly pushes more messages in downstream queues. For operations that require scheduling, an external timer service can be used. This approach usually scales much better because a database is not constantly polled for changes. But it makes the programming model more complex and error prone as usually there is no transactional update between a queuing system and a database."}),"\n",(0,o.jsx)(i.p,{children:"With Cadence, the entire logic can be encapsulated in a simple durable function that directly implements the business logic. Because the function is stateful, the implementer doesn't need to employ any additional systems to ensure durability and fault tolerance."}),"\n",(0,o.jsx)(i.p,{children:"Here is an example workflow that implements the subscription management use case. It is in Java, but Go is also supported. The Python and .NET libraries are under active development."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"// This SubscriptionWorkflow interface is an example of defining a workflow in Cadence\npublic interface SubscriptionWorkflow {\n    @WorkflowMethod\n    void manageSubscription(String customerId);\n    @SignalMethod\n    void cancelSubscription();\n    @SignalMethod    \n    void updateBillingPeriodChargeAmount(int billingPeriodChargeAmount);\n    @QueryMethod    \n    String queryCustomerId();\n    @QueryMethod        \n    int queryBillingPeriodNumber();\n    @QueryMethod        \n    int queryBillingPeriodChargeAmount();\n}\n\n// Workflow implementation is independent from interface. That way, application that start/signal/query workflows only need to know the interface\npublic class SubscriptionWorkflowImpl implements SubscriptionWorkflow {\n\n    private int billingPeriodNum;\n    private boolean subscriptionCancelled;\n    private Customer customer;\n    \n    private final SubscriptionActivities activities =\n            Workflow.newActivityStub(SubscriptionActivities.class);\n\n    // This manageSubscription function is an example of a workflow using Cadence\n    @Override\n    public void manageSubscription(Customer customer) {\n        // Set the Workflow customer to class properties so that it can be used by other methods like Query/Signal\n        this.customer = customer;\n\n        // sendWelcomeEmail is an activity in Cadence. It is implemented in user code and Cadence executes this activity on a worker node when needed.\n        activities.sendWelcomeEmail(customer);\n\n        // for this example, there are a fixed number of periods in the subscription\n        // Cadence supports indefinitely running workflow but some advanced techniques are needed\n        while (billingPeriodNum < customer.getSubscription().getPeriodsInSubcription()) {\n\n            // Workflow.await tells Cadence to pause the workflow at this stage (saving it's state to the database)\n            // Execution restarts when the billing period time has passed or the subscriptionCancelled event is received , whichever comes first\n            Workflow.await(customer.getSubscription().getBillingPeriod(), () -> subscriptionCancelled);\n\n            if (subscriptionCancelled) {\n                activities.sendCancellationEmailDuringActiveSubscription(customer);\n                break;\n            }\n            \n            // chargeCustomerForBillingPeriod is another activity\n            // Cadence will automatically handle issues such as your billing service being unavailable at the time\n            // this activity is invoked\n            activities.chargeCustomerForBillingPeriod(customer, billingPeriodNum);\n\n            billingPeriodNum++;\n        }\n\n        if (!subscriptionCancelled) {\n            activities.sendSubscriptionOverEmail(customer);\n        }\n        \n        // the workflow is finished once this function returns\n    }\n\n    @Override\n    public void cancelSubscription() {\n        subscriptionCancelled = true;\n    }\n\n    @Override\n    public void updateBillingPeriodChargeAmount(int billingPeriodChargeAmount) {\n        customer.getSubscription().setBillingPeriodCharge(billingPeriodChargeAmount);\n    }\n\n    @Override\n    public String queryCustomerId() {\n        return customer.getId();\n    }\n\n    @Override\n    public int queryBillingPeriodNumber() {\n        return billingPeriodNum;\n    }\n\n    @Override\n    public int queryBillingPeriodChargeAmount() {\n        return customer.getSubscription().getBillingPeriodCharge();\n    }\n}\n\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Again, note that this code directly implements the business logic. If any of the invoked operations (aka activities) takes a long time, the code is not going to change. It is okay to block on ",(0,o.jsx)(i.code,{children:"chargeCustomerForBillingPeriod"})," for a day if the downstream processing service is down that long. The same way that blocking sleep for a billing period like 30 days is a normal operation inside the workflow code."]}),"\n",(0,o.jsx)(i.p,{children:"Cadence has practically no scalability limits on the number of open workflow instances. So even if your site has hundreds of millions of consumers, the above code is not going to change."}),"\n",(0,o.jsxs)(i.p,{children:['The commonly asked question by developers that learn Cadence is "How do I handle workflow_worker process failure/restart in my workflow"? The answer is that you do not. ',(0,o.jsx)(i.strong,{children:"The workflow code is completely oblivious to any failures and downtime of workers or even the Cadence service itself"}),". As soon as they are recovered and the workflow needs to handle some event, like timer or an activity completion, the current state of the workflow is fully restored and the execution is continued. The only reason for a workflow failure is the workflow business code throwing an exception, not underlying infrastructure outages."]}),"\n",(0,o.jsx)(i.p,{children:"Another commonly asked question is whether a worker can handle more workflow instances than its cache size or number of threads it can support. The answer is that a workflow, when in a blocked state, can be safely removed from a worker.\nLater it can be resurrected on a different or the same worker when the need (in the form of an external event) arises. So a single worker can handle millions of open workflow_executions, assuming it can handle the update rate."}),"\n",(0,o.jsx)(i.h2,{id:"state-recovery-and-determinism",children:"State Recovery and Determinism"}),"\n",(0,o.jsx)(i.p,{children:"The workflow state recovery utilizes event sourcing which puts a few restrictions on how the code is written. The main restriction is that the workflow code must be deterministic which means that it must produce exactly the same result if executed multiple times. This rules out any external API calls from the workflow code as external calls can fail intermittently or change its output any time. That is why all communication with the external world should happen through activities. For the same reason, workflow code must use Cadence APIs to get current time, sleep, and create new threads."}),"\n",(0,o.jsx)(i.p,{children:"To understand the Cadence execution model as well as the recovery mechanism, watch the following webcast. The animation covering recovery starts at 15:50."}),"\n",(0,o.jsx)("figure",{class:"video-container",children:(0,o.jsx)("iframe",{src:"https://www.youtube.com/embed/qce_AqCkFys?start=960",frameborder:"0",height:"315",allowfullscreen:!0,width:"560"})}),"\n",(0,o.jsx)(i.h2,{id:"id-uniqueness",children:"ID Uniqueness"}),"\n",(0,o.jsx)(i.p,{children:"Workflow_ID is assigned by a client when starting a workflow. It is usually a business level ID like customer ID or order ID."}),"\n",(0,o.jsxs)(i.p,{children:["Cadence guarantees that there could be only one workflow (across all workflow types) with a given ID open per domain at any time. An attempt to start a workflow with the same ID is going to fail with ",(0,o.jsx)(i.code,{children:"WorkflowExecutionAlreadyStarted"})," error."]}),"\n",(0,o.jsxs)(i.p,{children:["An attempt to start a workflow if there is a completed workflow with the same ID depends on a ",(0,o.jsx)(i.code,{children:"WorkflowIdReusePolicy"})," option:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"AllowDuplicateFailedOnly"})," means that it is allowed to start a workflow only if a previously executed workflow with the same ID failed."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"AllowDuplicate"})," means that it is allowed to start independently of the previous workflow completion status."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"RejectDuplicate"})," means that it is not allowed to start a workflow_execution using the same workflow_ID at all."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"TerminateIfRunning"})," means terminating the current running workflow if one exists, and start a new one."]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["The default is ",(0,o.jsx)(i.code,{children:"AllowDuplicateFailedOnly"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["To distinguish multiple runs of a workflow with the same workflow_ID, Cadence identifies a workflow with two IDs: ",(0,o.jsx)(i.code,{children:"Workflow ID"})," and ",(0,o.jsx)(i.code,{children:"Run ID"}),". ",(0,o.jsx)(i.code,{children:"Run ID"})," is a service-assigned UUID. To be precise, any workflow is uniquely identified by a triple: ",(0,o.jsx)(i.code,{children:"Domain Name"}),", ",(0,o.jsx)(i.code,{children:"Workflow ID"})," and ",(0,o.jsx)(i.code,{children:"Run ID"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"child-workflow",children:"Child Workflow"}),"\n",(0,o.jsxs)(i.p,{children:["A workflow can execute other workflows as ",(0,o.jsx)(i.code,{children:"child :workflow:workflows:"}),". A child workflow completion or failure is reported to its parent."]}),"\n",(0,o.jsx)(i.p,{children:"Some reasons to use child workflows are:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"A child workflow can be hosted by a separate set of workers which don't contain the parent workflow code. So it would act as a separate service that can be invoked from multiple other workflows."}),"\n",(0,o.jsx)(i.li,{children:"A single workflow has a limited size. For example, it cannot execute 100k activities. Child workflows can be used to partition the problem into smaller chunks. One parent with 1000 children each executing 1000 activities is 1 million executed activities."}),"\n",(0,o.jsx)(i.li,{children:"A child workflow can be used to manage some resource using its ID to guarantee uniqueness. For example, a workflow that manages host upgrades can have a child workflow per host (host name being a workflow_ID) and use them to ensure that all operations on the host are serialized."}),"\n",(0,o.jsx)(i.li,{children:"A child workflow can be used to execute some periodic logic without blowing up the parent history size. When a parent starts a child, it executes periodic logic calling that continues as many times as needed, then completes. From the parent point if view, it is just a single child workflow invocation."}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"The main limitation of a child workflow versus collocating all the application logic in a single workflow is lack of the shared state. Parent and child can communicate only through asynchronous signals. But if there is a tight coupling between them, it might be simpler to use a single workflow and just rely on a shared object state."}),"\n",(0,o.jsx)(i.p,{children:"We recommended starting from a single workflow implementation if your problem has bounded size in terms of number of executed activities and processed signals. It is more straightforward than multiple asynchronously communicating workflows."}),"\n",(0,o.jsx)(i.h2,{id:"workflow-retries",children:"Workflow Retries"}),"\n",(0,o.jsx)(i.p,{children:"Workflow code is unaffected by infrastructure level downtime and failures. But it still can fail due to business logic level failures. For example, an activity can fail due to exceeding the retry interval and the error is not handled by application code, or the workflow code having a bug."}),"\n",(0,o.jsxs)(i.p,{children:["Some workflows require a guarantee that they keep running even in presence of such failures. To support such use cases, an optional exponential ",(0,o.jsx)(i.em,{children:"retry policy"})," can be specified when starting a workflow. When it is specified, a workflow failure restarts a workflow from the beginning after the calculated retry interval. Following are the retry policy parameters:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"InitialInterval"})," is a delay before the first retry."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"BackoffCoefficient"}),". Retry policies are exponential. The coefficient specifies how fast the retry interval is growing. The coefficient of 1 means that the retry interval is always equal to the ",(0,o.jsx)(i.code,{children:"InitialInterval"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"MaximumInterval"})," specifies the maximum interval between retries. Useful for coefficients of more than 1."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"MaximumAttempts"})," specifies how many times to attempt to execute a workflow in the presence of failures. If this limit is exceeded, the workflow fails without retry. Not required if ",(0,o.jsx)(i.code,{children:"ExpirationInterval"})," is specified."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"ExpirationInterval"})," specifies for how long to attempt executing a workflow in the presence of failures. If this interval is exceeded, the workflow fails without retry. Not required if ",(0,o.jsx)(i.code,{children:"MaximumAttempts"})," is specified."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"NonRetryableErrorReasons"})," allows to specify errors that shouldn't be retried. For example, retrying invalid arguments error doesn't make sense in some scenarios."]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"how-does-workflow-run",children:"How does workflow run"}),"\n",(0,o.jsxs)(i.p,{children:["You may wonder how it works. Behind the scenes, workflow decision is driving the whole workflow running. It's the internal entities for client and server to run your workflows. If this is interesting to you, read this ",(0,o.jsx)(i.a,{href:"https://stackoverflow.com/questions/62904129/what-exactly-is-a-cadence-decision-task/63964726#63964726",children:"stack Overflow QA"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var n=t(6540);const o={},s=n.createContext(o);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);