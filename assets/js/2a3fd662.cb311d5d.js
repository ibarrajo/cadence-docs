"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[2813],{9556:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"concepts/task-lists","title":"Task lists","description":"When a invokes an, it sends the `ScheduleActivityTask` to the","source":"@site/docs/03-concepts/06-task-lists.md","sourceDirName":"03-concepts","slug":"/concepts/task-lists","permalink":"/cadence-docs/docs/concepts/task-lists","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/03-concepts/06-task-lists.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"layout":"default","title":"Task lists","permalink":"/docs/concepts/task-lists"},"sidebar":"docsSidebar","previous":{"title":"Deployment topology","permalink":"/cadence-docs/docs/concepts/topology"},"next":{"title":"Archival","permalink":"/cadence-docs/docs/concepts/archival"}}');var i=t(4848),o=t(8453);const a={layout:"default",title:"Task lists",permalink:"/docs/concepts/task-lists"},r="Task lists",c={},l=[];function d(e){const s={code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"task-lists",children:"Task lists"})}),"\n",(0,i.jsxs)(s.p,{children:["When a workflow invokes an activity, it sends the ",(0,i.jsx)(s.code,{children:"ScheduleActivityTask"})," decision to the\nCadence service. As a result, the service updates the workflow state and dispatches\nan activity_task to a worker that implements the activity.\nInstead of calling the worker directly, an intermediate queue is used. So the service adds an ",(0,i.jsx)(s.em,{children:"activity_task"})," to this\nqueue and a worker receives the task using a long poll request.\nCadence calls this queue used to dispatch activity_tasks an ",(0,i.jsx)(s.em,{children:"activity_task_list"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Similarly, when a workflow needs to handle an external event, a decision_task is created.\nA decision_task_list is used to deliver it to the workflow_worker (also called ",(0,i.jsx)(s.em,{children:"decider"}),")."]}),"\n",(0,i.jsx)(s.p,{children:"While Cadence task_lists are queues, they have some differences from commonly used queuing technologies.\nThe main one is that they do not require explicit registration and are created on demand. The number of task_lists\nis not limited. A common use case is to have a task_list per worker process and use it to deliver activity_tasks\nto the process. Another use case is to have a task_list per pool of workers."}),"\n",(0,i.jsx)(s.p,{children:"There are multiple advantages of using a task_list to deliver tasks instead of invoking an activity_worker through a synchronous RPC:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Worker doesn't need to have any open ports, which is more secure."}),"\n",(0,i.jsx)(s.li,{children:"Worker doesn't need to advertise itself through DNS or any other network discovery mechanism."}),"\n",(0,i.jsx)(s.li,{children:"When all workers are down, messages are persisted in a task_list waiting for the workers to recover."}),"\n",(0,i.jsx)(s.li,{children:"A worker polls for a message only when it has spare capacity, so it never gets overloaded."}),"\n",(0,i.jsx)(s.li,{children:"Automatic load balancing across a large number of workers."}),"\n",(0,i.jsx)(s.li,{children:"Task_lists support server side throttling. This allows you to limit the task dispatch rate to the pool of workers and still supports adding a task with a higher rate when spikes happen."}),"\n",(0,i.jsx)(s.li,{children:"Task_lists can be used to route a request to specific pools of workers or even a specific process."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var n=t(6540);const i={},o=n.createContext(i);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);