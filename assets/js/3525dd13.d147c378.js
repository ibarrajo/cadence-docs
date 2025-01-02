"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[7240],{5477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"concepts/events","title":"Event handling","description":"Fault-oblivious statefulworkflowssignal about an external. A is always point to point destined to a specific instance.Signals: are always processed in the order in which they are received.","source":"@site/docs/03-concepts/03-events.md","sourceDirName":"03-concepts","slug":"/concepts/events","permalink":"/cadence-docs/docs/concepts/events","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/03-concepts/03-events.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"layout":"default","title":"Event handling","permalink":"/docs/concepts/events"},"sidebar":"docsSidebar","previous":{"title":"Activities","permalink":"/cadence-docs/docs/concepts/activities"},"next":{"title":"Synchronous query","permalink":"/cadence-docs/docs/concepts/queries"}}');var s=n(4848),o=n(8453);const i={layout:"default",title:"Event handling",permalink:"/docs/concepts/events"},r="Event handling",c={},l=[{value:"Event Aggregation and Correlation",id:"event-aggregation-and-correlation",level:2},{value:"Human Tasks",id:"human-tasks",level:2},{value:"Process Execution Alteration",id:"process-execution-alteration",level:2},{value:"Synchronization",id:"synchronization",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"event-handling",children:"Event handling"})}),"\n",(0,s.jsx)(t.p,{children:"Fault-oblivious stateful workflows can be signalled about an external event. A signal is always point to point destined to a specific workflow instance. Signals are always processed in the order in which they are received."}),"\n",(0,s.jsx)(t.p,{children:"There are multiple scenarios for which signals are useful."}),"\n",(0,s.jsx)(t.h2,{id:"event-aggregation-and-correlation",children:"Event Aggregation and Correlation"}),"\n",(0,s.jsx)(t.p,{children:"Cadence is not a replacement for generic stream processing engines like Apache Flink or Apache Spark. But in certain scenarios it is a better fit. For example, when all events that should be aggregated and correlated are always applied to some business entity with a clear ID. And then when a certain condition is met, actions should be executed."}),"\n",(0,s.jsx)(t.p,{children:"The main limitation is that a single Cadence workflow has a pretty limited throughput, while the number of workflows is practically unlimited. So if you need to aggregate events per customer, and your application has 100 million customers and each customer doesn't generate more than 20 events per second, then Cadence would work fine. But if you want to aggregate all events for US customers then the rate of these events would be beyond the single workflow capacity."}),"\n",(0,s.jsx)(t.p,{children:"For example, an IoT device generates events and a certain sequence of events indicates that the device should be reprovisioned. A workflow instance per device would be created and each instance would manage the state machine of the device and execute reprovision activity when necessary."}),"\n",(0,s.jsxs)(t.p,{children:["Another use case is a customer loyalty program. Every time a customer makes a purchase, an event is generated into Apache Kafka for downstream systems to process. A loyalty service Kafka consumer receives the event and signals a customer workflow about the purchase using the Cadence ",(0,s.jsx)(t.code,{children:"signalWorkflowExecution"})," API. The workflow accumulates the count of the purchases. If a specified threshold is achieved, the workflow executes an activity that notifies some external service that the customer has reached the next level of loyalty program. The workflow also executes activities to periodically message the customer about their current status."]}),"\n",(0,s.jsx)(t.h2,{id:"human-tasks",children:"Human Tasks"}),"\n",(0,s.jsx)(t.p,{children:"A lot of business processes involve human participants. The standard Cadence pattern for implementing an external interaction is to execute an activity that creates a human task in an external system. It can be an email with a form, or a record in some external database, or a mobile app notification. When a user changes the status of the task, a signal is sent to the corresponding workflow. For example, when the form is submitted, or a mobile app notification is acknowledged. Some tasks have multiple possible actions like claim, return, complete, reject. So multiple signals can be sent in relation to it."}),"\n",(0,s.jsx)(t.h2,{id:"process-execution-alteration",children:"Process Execution Alteration"}),"\n",(0,s.jsx)(t.p,{children:"Some business processes should change their behavior if some external event has happened. For example, while executing an order shipment workflow, any change in item quantity could be delivered in a form of a signal."}),"\n",(0,s.jsx)(t.p,{children:"Another example is a service deployment workflow. While rolling out new software version to a Kubernetes cluster some problem was identified. A signal can be used to ask the workflow to pause while the problem is investigated. Then either a continue or a rollback signal can be used to execute the appropriate action."}),"\n",(0,s.jsx)(t.h2,{id:"synchronization",children:"Synchronization"}),"\n",(0,s.jsxs)(t.p,{children:["Cadence workflows are strongly consistent so they can be used as a synchronization point for executing actions. For example, there is a requirement that all messages for a single user are processed sequentially but the underlying messaging infrastructure can deliver them in parallel. The Cadence solution would be to have a workflow per user and signal it when an event is received. Then the workflow would buffer all signals in an internal data structure and then call an activity for every signal received. See the following ",(0,s.jsx)(t.a,{href:"https://stackoverflow.com/a/56615120/1664318",children:"Stack Overflow answer"})," for an example."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(6540);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);