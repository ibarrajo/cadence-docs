"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[4344],{5101:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var t=o(9390),i=o(4848),a=o(8453);const s={title:"Zonal Isolation for Cadence Workflows",subtitle:"test",date:new Date("2024-10-14T00:00:00.000Z"),authors:"shaddoll",tags:["deep-dive","cadence-operations"]},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"What is Zonal Isolation for Cadence Workflows?",id:"what-is-zonal-isolation-for-cadence-workflows",level:2},{value:"How Zonal Isolation Works in Cadence?",id:"how-zonal-isolation-works-in-cadence",level:2},{value:"Architecture",id:"architecture",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Determine the zone of a workflow and workers",id:"determine-the-zone-of-a-workflow-and-workers",level:4},{value:"How to dispatch tasks to workers from the same zone?",id:"how-to-dispatch-tasks-to-workers-from-the-same-zone",level:4},{value:"How to handle workflows from a drained zone?",id:"how-to-handle-workflows-from-a-drained-zone",level:4},{value:"How to drain a zone explicitly?",id:"how-to-drain-a-zone-explicitly",level:5},{value:"How to enable Zonal Isolation?",id:"how-to-enable-zonal-isolation",level:2},{value:"Server Update",id:"server-update",level:3},{value:"SDK Update",id:"sdk-update",level:3},{value:"How to drain a zone explicitly?",id:"how-to-drain-a-zone-explicitly-1",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Status at Uber",id:"status-at-uber",level:2},{value:"Next Step",id:"next-step",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"At Uber, we want to achieve regional resilience such that losing a zone within a region can be tolerated without requiring a cross-region failover. We also want to make sure that losing a zone only affects a subset of workload, at most, rather than everything. However, in Cadence-based systems, the workload in a region is distributed randomly across all workers in the region at a \u201ctask-level granularity\u201d, which means a workflow may be worked on by any worker in the region where the domain is active. To achieve this goal, we introduced Zonal Isolation for Cadence Workflows - a feature designed to pin workflows to the zone they are started in, so that zonal isolation can be achieved at a workflow-level."}),"\n",(0,i.jsx)(n.h2,{id:"what-is-zonal-isolation-for-cadence-workflows",children:"What is Zonal Isolation for Cadence Workflows?"}),"\n",(0,i.jsx)(n.p,{children:"At high-level, Zonal Isolation for Cadence Workflows can be thought in 2 levels:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Task-level isolation:"})," All decision tasks and activity tasks of a workflow are only processed by workers from the zone where the workflow was started"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Infrastructure-level isolation:"})," Within a regional Cadence cluster, workflows are handled by server instances in the same zone where they were started, and the corresponding data is stored in that zone as well."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Infrastructure-level isolation is quite challenging to implement as it requires significant changes to the core design of the Cadence server. Due to the complexity involved, support for this feature is not planned for the foreseeable future."}),"\n",(0,i.jsx)(n.p,{children:"As a result, the focus remains on achieving task-level zonal isolation outside the Cadence server, which offers a more practical and immediate way to improve system resilience. It provides the capability of ensuring that an unhealthy zone (i.e. bad deployment of workers) only affect a subset of workflows (started from a certain zone) rather than every workflow in a Cadence domain."}),"\n",(0,i.jsx)(n.h2,{id:"how-zonal-isolation-works-in-cadence",children:"How Zonal Isolation Works in Cadence?"}),"\n",(0,i.jsx)(n.h3,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsxs)(n.p,{children:["Here is what the architecture of a zonally isolated Cadence-based system looks like:\n",(0,i.jsx)(n.img,{alt:"zonal isolation overview",src:o(3905).A+"",width:"1600",height:"896"}),"\n",(0,i.jsx)(n.em,{children:(0,i.jsx)("p",{children:"Fig: Workflows started in one zone are only dispatched to workers from the same zone. Colors to emphasize pinning."})})]}),"\n",(0,i.jsx)(n.h3,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.h4,{id:"determine-the-zone-of-a-workflow-and-workers",children:"Determine the zone of a workflow and workers"}),"\n",(0,i.jsx)(n.p,{children:"To ensure that tasks are dispatched to workers in the same zone as the workflows, we must identify the origin zone of both. The zone of a workflow is determined by the origin zone of the StartWorkflowExecution request, while the zone of workers is determined by the origin zone of the PollForDecisionTask and PollForActivityTask requests. There are three possible ways to determine the origin zone for these requests:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Uber's Approach:"})," Let Cadence SDK set the origin zone in the headers of the requests before sending the request to Cadence."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Preferred Approach:"})," Get the origin zone of the requests from headers set by network infrastructure."]}),"\n",(0,i.jsx)(n.li,{children:"Determine the origin zone of the requests from the zone of the cadence-frontend instance receiving the request, if the network layer has already achieved zonal isolation."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The 2nd approach is the ideal one, but Uber's network infrastructure doesn't provide such headers and the network layer is not ready for zonal isolation. As a result, we adopt the 1st approach. At Uber, we have internal libraries in Go and Java acting as wrappers around Cadence SDK injecting necessary configurations. These libraries have been updated to include the origin zone in the request headers using a header called ",(0,i.jsx)(n.code,{children:"cadence-client-isolation-group"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"how-to-dispatch-tasks-to-workers-from-the-same-zone",children:"How to dispatch tasks to workers from the same zone?"}),"\n",(0,i.jsxs)(n.p,{children:["To implement task-level isolation, we introduce a new dimension to the tasklist \u2014 ",(0,i.jsx)(n.strong,{children:"isolation group"}),". When a workflow is initiated, the origin zone of the workflow is stored in the database. Each time a decision or activity task is dispatched to cadence-matching, the workflow's origin zone is used as the isolation group for that task."]}),"\n",(0,i.jsxs)(n.p,{children:["When a worker sends a ",(0,i.jsx)(n.code,{children:"PollForDecisionTask"})," or ",(0,i.jsx)(n.code,{children:"PollForActivityTask"})," request to cadence-matching, the request is labeled with the worker's isolation group (i.e., the worker's zone). Tasks are then dispatched only to poller requests that have the same isolation group, ensuring that tasks are processed by workers in the same zone as the workflow's origin."]}),"\n",(0,i.jsx)(n.h4,{id:"how-to-handle-workflows-from-a-drained-zone",children:"How to handle workflows from a drained zone?"}),"\n",(0,i.jsx)(n.p,{children:"In the event of an outage, such as a bad deployment, customers may want to drain workers from a specific zone to mitigate the impact. There are two types of drains that can occur:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Implicit drain:"})," Workers from a zone completely stop operating, either due to failures or manual shutdowns."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Explicit drain:"})," Customers explicitly mark workers from a zone as drained."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Within cadence-matching, a list of pollers is maintained for each tasklist, tracking the zone from which the pollers originate. An implicit drain can be detected by checking whether there are any active pollers from a particular zone. If a zone is drained (either explicitly or implicitly), workflows that were started in that zone will be reassigned and spread to workers in the remaining healthy zones."}),"\n",(0,i.jsx)(n.h5,{id:"how-to-drain-a-zone-explicitly",children:"How to drain a zone explicitly?"}),"\n",(0,i.jsx)(n.p,{children:"Explicitly draining a zone can be done at two levels:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Domain-level drain:"})," This applies to a specific domain, allowing the zone to be drained only for workflows within that domain."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Cluster-level drain:"})," This applies to the entire Cadence cluster, draining the zone for all domains and workflows within the cluster."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For domain-level drain, the draining status is stored in ",(0,i.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v1.2.13/schema/cassandra/cadence/schema.cql#L412",children:(0,i.jsx)(n.code,{children:"domains"})})," table. For cluster-level drain, the status is stored in ",(0,i.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v1.2.13/schema/cassandra/cadence/schema.cql#L498",children:(0,i.jsx)(n.code,{children:"cluster_config"})})," table."]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-enable-zonal-isolation",children:"How to enable Zonal Isolation?"}),"\n",(0,i.jsx)(n.h3,{id:"server-update",children:"Server Update"}),"\n",(0,i.jsxs)(n.p,{children:["In order to enable this feature, please upgrade Cadence server to ",(0,i.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/releases/tag/v1.2.1",children:"v1.2.1"})," or later."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE:"})," If you're not using the provided main binary located in ",(0,i.jsx)(n.code,{children:"cmd/server"}),", you must adopt this ",(0,i.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v1.2.1/common/rpc/middleware.go#L188",children:"middleware"}),". Depends on the appoach to ",(0,i.jsx)(n.a,{href:"#determine-the-zone-of-a-workflow-and-workers",children:"determine the origin zone of requests"}),", you can adopt this ",(0,i.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v1.2.1/common/rpc/middleware.go#L229",children:"middleware"})," or build your own middleware using ",(0,i.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v1.2.1/common/partition/context.go#L42",children:(0,i.jsx)(n.code,{children:"partition.ContextWithConfig"})})," function to inject origin zone into the context."]}),"\n",(0,i.jsx)(n.p,{children:"This feature is controlled by 2 dynamic config properties."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"system.allIsolationGroups"}),": This property provides the list of available zones within a region."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"system.enableTasklistIsolation"}),": This property enables Zonal Isolation at domain level.\nIt\u2019s important to note that any update to the ",(0,i.jsx)(n.code,{children:"system.allIsolationGroups"})," property requires a restart of the cadence-matching service for the changes to take effect. This ensures that the new zone configuration is properly loaded and applied. However, the ",(0,i.jsx)(n.code,{children:"system.enableTasklistIsolation"})," property can be updated dynamically without requiring a restart, making it more flexible for enabling or disabling Zonal Isolation on a per-domain basis."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An example configuration using the file based dynamic configuration could look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'system.allIsolationGroups:\n- value: []\n  constraints: {}\n- value: ["dca1", "dca2", "dca3"]\n  constraints:\n    clusterName: prod-dca\n- value: ["phx1", "phx2", "phx3"]\n  constraints:\n    clusterName: prod-phx\nsystem.enableTasklistIsolation:\n- value: false\n  constraints: {}\n- value: true\n  constraints:\n    domainName: samples-domain\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the Cadence cluster spans two regions, each containing three zones: ",(0,i.jsx)(n.code,{children:"dca1"}),", ",(0,i.jsx)(n.code,{children:"dca2"}),", ",(0,i.jsx)(n.code,{children:"dca3"})," in the ",(0,i.jsx)(n.code,{children:"dca"})," region and ",(0,i.jsx)(n.code,{children:"phx1"}),", ",(0,i.jsx)(n.code,{children:"phx2"}),", ",(0,i.jsx)(n.code,{children:"phx3"})," in the ",(0,i.jsx)(n.code,{children:"phx"})," region. Zonal isolation is enabled only for the ",(0,i.jsx)(n.code,{children:"samples-domain"}),", while it remains disabled for other domains."]}),"\n",(0,i.jsx)(n.h3,{id:"sdk-update",children:"SDK Update"}),"\n",(0,i.jsxs)(n.p,{children:["NOTE: This update is only necessary if you're using the 1st approach to ",(0,i.jsx)(n.a,{href:"#determine-the-zone-of-a-workflow-and-workers",children:"determine the origin zone of requests"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To support Zonal Isolation, please upgrade your SDK versions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Go SDK:"})," Upgrade to ",(0,i.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence-go-client/releases/tag/v1.0.2",children:"v1.0.2"})," or later."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Java SDK:"})," Upgrade to ",(0,i.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence-java-client/releases/tag/v3.9.0",children:"v3.9.0"})," or later."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For Java SDK users"}),", set the ",(0,i.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence-java-client/blob/v3.9.0/src/main/java/com/uber/cadence/serviceclient/ClientOptions.java#L83",children:(0,i.jsx)(n.code,{children:"isolationGroup"})})," field to the zone of the instance when creating ",(0,i.jsx)(n.code,{children:"serviceClient"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For Go SDK users"}),", set the ",(0,i.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence-go-client/blob/v1.0.2/internal/worker.go#L132",children:(0,i.jsx)(n.code,{children:"isolationGroup"})})," field to the zone of the instance when creating ",(0,i.jsx)(n.code,{children:"Worker"}),". Additionally, you need to use ",(0,i.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence-go-client/blob/v1.0.2/isolationgroup/wrapper.go#L29C39-L29C70",children:"this method"})," to wrap ",(0,i.jsx)(n.code,{children:"workflowserviceclient.Interface"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-drain-a-zone-explicitly-1",children:"How to drain a zone explicitly?"}),"\n",(0,i.jsxs)(n.p,{children:["Drains can be done via the ",(0,i.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence-idl/blob/50a4ee241e50c6baab8e5d47540b176c5ee022a4/proto/cadence-workflow/cadence/admin/v1/service.proto#L125",children:"Admin APIs"})," of cadence-frontend or CLI."]}),"\n",(0,i.jsx)(n.p,{children:"You can check the help message for the CLI by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cadence admin isolation-groups -h\n"})}),"\n",(0,i.jsx)(n.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,i.jsx)(n.p,{children:"A new metric is introduced to help detect the leakage of tasks and skewness of traffic."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"isolation_task_matches_per_tl"}),": This is a counter that counts the number of tasks polled by workers. The metric is tagged with the domain, tasklist name, tasklist type, the origin zone of the workflow and the origin zone of the worker polling the task."]}),"\n",(0,i.jsx)(n.p,{children:"This metric can be used in the following ways:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Detecting task leakage:"})," By grouping tasks based on the origin zones of both the workflows and workers, you can identify tasks that have leaked, i.e., tasks assigned to workers in zones different from the workflow's origin zone."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Identifying traffic skewness:"})," By grouping tasks based solely on the origin zones of workflows, you can determine if traffic is disproportionately distributed among the zones, helping to detect any uneven load or traffic imbalance across zones."]}),"\n",(0,i.jsx)(n.h2,{id:"status-at-uber",children:"Status at Uber"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We launched this feature at Uber in July 2023. More than 100 domains have Zonal Isolation enabled."}),"\n",(0,i.jsxs)(n.li,{children:["However, as of 2024, the rollout of Zonal Isolation is paused due to a traffic skewness issue:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Some customers have highly skewed traffic that some zones have more workflows than other zones, but the number of workers are evenly distributed in all zones. Enabling Zonal Isolation for the customers will decrease the utilization of their workers and may cause high latency for the customers."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"next-step",children:"Next Step"}),"\n",(0,i.jsxs)(n.p,{children:["Currently, Zonal Isolation is implemented as ",(0,i.jsx)(n.strong,{children:"hard isolation"}),", where tasks are strictly limited to the same zone as the originating workflow. To address the traffic skewness issue, we are working on iterating this feature to introduce ",(0,i.jsx)(n.strong,{children:"soft isolation"}),". This relaxed version will allow for some task leakage between zones if traffic skewness is detected, ensuring better worker utilization and reducing latency."]}),"\n",(0,i.jsx)(n.p,{children:"This enhancement is one of our major ongoing projects, and we plan to share more details in a future blog post once it is launched."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3905:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/zone-isolation-3dab642dc554611aa31e398f4f020d63.png"},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var t=o(6540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}},9390:e=>{e.exports=JSON.parse('{"permalink":"/Cadence-Docs/blog/zonal-isolation-v1/zonal-isolation-v1","editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/blog/zonal-isolation-v1/zonal-isolation-v1.md","source":"@site/blog/zonal-isolation-v1/zonal-isolation-v1.md","title":"Zonal Isolation for Cadence Workflows","description":"At Uber, we want to achieve regional resilience such that losing a zone within a region can be tolerated without requiring a cross-region failover. We also want to make sure that losing a zone only affects a subset of workload, at most, rather than everything. However, in Cadence-based systems, the workload in a region is distributed randomly across all workers in the region at a \u201ctask-level granularity\u201d, which means a workflow may be worked on by any worker in the region where the domain is active. To achieve this goal, we introduced Zonal Isolation for Cadence Workflows - a feature designed to pin workflows to the zone they are started in, so that zonal isolation can be achieved at a workflow-level.","date":"2024-10-14T00:00:00.000Z","tags":[{"inline":false,"label":"Deep Dives","permalink":"/Cadence-Docs/blog/tags/deep-dives","description":"Deep Dives tag description"},{"inline":false,"label":"Cadence Operations","permalink":"/Cadence-Docs/blog/tags/cadence-operations","description":"Cadence Operations tag description"}],"readingTime":7.985,"hasTruncateMarker":true,"authors":[{"name":"Zijian Chen","title":"Software Engineer @ Uber","url":"https://www.linkedin.com/in/zijian-chen-5868938b/","page":{"permalink":"/Cadence-Docs/blog/authors/shaddoll"},"socials":{"linkedin":"https://www.linkedin.com/in/zijian-chen-5868938b/","github":"https://github.com/Shaddoll"},"imageURL":"https://github.com/Shaddoll.png","key":"shaddoll"}],"frontMatter":{"title":"Zonal Isolation for Cadence Workflows","subtitle":"test","date":"2024-10-14T00:00:00.000Z","authors":"shaddoll","tags":["deep-dive","cadence-operations"]},"unlisted":false,"prevItem":{"title":"Cadence Repositories Have Moved!","permalink":"/Cadence-Docs/blog/2024/11/18/cadence-workflows-github-organization"},"nextItem":{"title":"Announcement: Cadence Helm Charts v0 Release","permalink":"/Cadence-Docs/blog/2024/10/01/announcing-cadence-helm-charts-v0"}}')}}]);