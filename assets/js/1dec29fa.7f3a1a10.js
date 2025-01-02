"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[9612],{3209:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"workflow-troubleshooting/timeouts","title":"Timeouts","description":"A workflow could fail if an activity times out and will timeout when the entire workflow execution times out. Workflows or activities time out when their time to execute or time to start has been longer than their configured timeout. Some of the common causes for timeouts have been listed here.","source":"@site/docs/08-workflow-troubleshooting/01-timeouts.md","sourceDirName":"08-workflow-troubleshooting","slug":"/workflow-troubleshooting/timeouts","permalink":"/ibarrajo/cadence-docs/docs/workflow-troubleshooting/timeouts","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/08-workflow-troubleshooting/01-timeouts.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"layout":"default","title":"Timeouts","permalink":"/docs/workflow-troubleshooting/timeouts"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/ibarrajo/cadence-docs/docs/workflow-troubleshooting/"},"next":{"title":"Activity Failures","permalink":"/ibarrajo/cadence-docs/docs/workflow-troubleshooting/activity-failures"}}');var r=i(4848),n=i(8453);const a={layout:"default",title:"Timeouts",permalink:"/docs/workflow-troubleshooting/timeouts"},s="Timeouts",c={},l=[{value:"Missing Pollers",id:"missing-pollers",level:2},{value:"Tasklist backlog despite having pollers",id:"tasklist-backlog-despite-having-pollers",level:2},{value:"No heartbeat timeout or retry policy configured",id:"no-heartbeat-timeout-or-retry-policy-configured",level:2},{value:"Retry policy configured without setting heartbeat timeout",id:"retry-policy-configured-without-setting-heartbeat-timeout",level:2},{value:"Heartbeat timeout configured without a retry policy",id:"heartbeat-timeout-configured-without-a-retry-policy",level:2},{value:"Heartbeat timeout seen after configuring heartbeat timeout",id:"heartbeat-timeout-seen-after-configuring-heartbeat-timeout",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"timeouts",children:"Timeouts"})}),"\n",(0,r.jsx)(t.p,{children:"A workflow could fail if an activity times out and will timeout when the entire workflow execution times out. Workflows or activities time out when their time to execute or time to start has been longer than their configured timeout. Some of the common causes for timeouts have been listed here."}),"\n",(0,r.jsx)(t.h2,{id:"missing-pollers",children:"Missing Pollers"}),"\n",(0,r.jsx)(t.p,{children:"Cadence workers are part of the service that hosts and executes the workflow. They are of two types: activity worker and workflow worker. Each of these workers are responsible for having pollers which are go-routines that poll for activity tasks and decision tasks respectively from the Cadence server. Without pollers, the workflow cannot proceed with the execution."}),"\n",(0,r.jsx)(t.p,{children:"Mitigation: Make sure these workers are configured with the task lists that are used in the workflow and activities so the server can dispatch tasks to the cadence workers."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-samples/blob/master/cmd/samples/pageflow/main.go#L18",children:"Worker setup example"})}),"\n",(0,r.jsx)(t.h2,{id:"tasklist-backlog-despite-having-pollers",children:"Tasklist backlog despite having pollers"}),"\n",(0,r.jsx)(t.p,{children:"If a tasklist has pollers but the backlog continues to grow then it is a supply-demand issue. The workflow is growing faster than what the workers can handle. The server wants to dispatch more tasks to the workers but they are not able to keep up."}),"\n",(0,r.jsx)(t.p,{children:"Mitigation: Increase the number of cadence workers by horizontally scaling up the instances where the workflow is running."}),"\n",(0,r.jsx)(t.p,{children:"Optionally you can also increase the number of pollers per worker by providing this via worker options."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://pkg.go.dev/go.uber.org/cadence@v1.2.9/internal#WorkerOptions",children:"Link to options in go client"}),"\n",(0,r.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-java-client/blob/master/src/main/java/com/uber/cadence/internal/worker/PollerOptions.java#L124",children:"Link to options in java client"})]}),"\n",(0,r.jsx)(t.h2,{id:"no-heartbeat-timeout-or-retry-policy-configured",children:"No heartbeat timeout or retry policy configured"}),"\n",(0,r.jsx)(t.p,{children:"Activities time out StartToClose or ScheduleToClose if the activity took longer than the configured timeout."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://cadenceworkflow.io/docs/concepts/activities/#timeouts",children:"Link to description of timeouts"})}),"\n",(0,r.jsx)(t.p,{children:"For long running activities, while the activity is executing, the worker can die due to regular deployments or host restarts or failures. Cadence doesn't know about this and will wait for StartToClose or ScheduleToClose timeouts to kick in."}),"\n",(0,r.jsx)(t.p,{children:"Mitigation: Consider configuring heartbeat timeout and a retry policy"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-samples/blob/df6f7bdba978d6565ad78e9f86d9cd31dfac9f78/cmd/samples/expense/workflow.go#L23",children:"Example"}),"\n",(0,r.jsx)(t.a,{href:"https://cadenceworkflow.io/docs/concepts/activities/#retries",children:"Check retry policy for activity"})]}),"\n",(0,r.jsx)(t.p,{children:"For short running activities, heart beating is not required but maybe consider increasing the timeout value to suit the actual activity execution time."}),"\n",(0,r.jsx)(t.h2,{id:"retry-policy-configured-without-setting-heartbeat-timeout",children:"Retry policy configured without setting heartbeat timeout"}),"\n",(0,r.jsx)(t.p,{children:"Retry policies are configured so activities can be retried after timeouts or failures. For long-running activities, the worker can die while the activity is executing, e.g. due to regular deployments or host restarts or failures. Cadence doesn't know about this and will wait for StartToClose or ScheduleToClose timeouts to kick in. The retry is attempted only after this timeout. Configuring heartbeat timeout would cause the activity to timeout earlier so it can be retried on another worker."}),"\n",(0,r.jsx)(t.p,{children:"Mitigation: Consider configuring heartbeat timeout"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-samples/blob/df6f7bdba978d6565ad78e9f86d9cd31dfac9f78/cmd/samples/expense/workflow.go#L23",children:"Example"})}),"\n",(0,r.jsx)(t.h2,{id:"heartbeat-timeout-configured-without-a-retry-policy",children:"Heartbeat timeout configured without a retry policy"}),"\n",(0,r.jsx)(t.p,{children:"Heartbeat timeouts are used to detect when a worker died or restarted. With heartbeat timeout configured, the activity will timeout faster. But without a retry policy, it will not be scheduled again on a healthy worker."}),"\n",(0,r.jsx)(t.p,{children:"Mitigation: Consider adding retry policy to an activity"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://cadenceworkflow.io/docs/concepts/activities/#retries",children:"Check retry policy for activity"})}),"\n",(0,r.jsx)(t.h2,{id:"heartbeat-timeout-seen-after-configuring-heartbeat-timeout",children:"Heartbeat timeout seen after configuring heartbeat timeout"}),"\n",(0,r.jsx)(t.p,{children:"Activity has configured heartbeat timeout and the activity timed out with heart beat timeout. This is because the server did not receive a heart beat in the time interval configured as the heart beat timeout. This could happen if the activity is actually not executing or the activity is not sending periodic heartbeats. The first case is good since the activity now times out instead of being stuck until startToClose or scheduleToClose kicks in. The second case needs a fix."}),"\n",(0,r.jsx)(t.p,{children:"Mitigation: Once heartbeat timeout is configured in activity options, you need to make sure the activity periodically sends a heart beat to the server to make sure the server is aware of the activity being alive."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-samples/blob/df6f7bdba978d6565ad78e9f86d9cd31dfac9f78/cmd/samples/fileprocessing/activities.go#L111",children:"Example to send periodic heart beat"})}),"\n",(0,r.jsx)(t.p,{children:"In go client, there is an option to register the activity with auto heart beating so that it is done automatically"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://pkg.go.dev/go.uber.org/cadence@v1.2.9/internal#WorkerOptions",children:"Configuring auto heart beat during activity registration example"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var o=i(6540);const r={},n=o.createContext(r);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);