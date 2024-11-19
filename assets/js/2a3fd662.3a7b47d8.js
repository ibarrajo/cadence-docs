"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[2813],{9556:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"concepts/task-lists","title":"Task lists","description":"When a invokes an, it sends the `ScheduleActivityTask` to the","source":"@site/docs/03-concepts/06-task-lists.md","sourceDirName":"03-concepts","slug":"/concepts/task-lists","permalink":"/Cadence-Docs/docs/concepts/task-lists","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/03-concepts/06-task-lists.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"layout":"default","title":"Task lists","permalink":"/docs/concepts/task-lists"},"sidebar":"docsSidebar","previous":{"title":"Deployment topology","permalink":"/Cadence-Docs/docs/concepts/topology"},"next":{"title":"Archival","permalink":"/Cadence-Docs/docs/concepts/archival"}}');var o=t(4848),n=t(8453);const a={layout:"default",title:"Task lists",permalink:"/docs/concepts/task-lists"},r="Task lists",c={},l=[];function d(e){const s={code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"task-lists",children:"Task lists"})}),"\n",(0,o.jsxs)(s.p,{children:["When a :workflow: invokes an :activity:, it sends the ",(0,o.jsx)(s.code,{children:"ScheduleActivityTask"})," :decision: to the\nCadence service. As a result, the service updates the :workflow: state and dispatches\nan :activity_task: to a :worker: that implements the :activity:.\nInstead of calling the :worker: directly, an intermediate queue is used. So the service adds an ",(0,o.jsx)(s.em,{children:":activity_task:"})," to this\nqueue and a :worker: receives the :task: using a long poll request.\nCadence calls this queue used to dispatch :activity_task:activity_tasks: an ",(0,o.jsx)(s.em,{children:":activity_task_list:"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Similarly, when a :workflow: needs to handle an external :event:, a :decision_task: is created.\nA :decision_task_list: is used to deliver it to the :workflow_worker: (also called ",(0,o.jsx)(s.em,{children:"decider"}),")."]}),"\n",(0,o.jsx)(s.p,{children:"While Cadence :task_list:task_lists: are queues, they have some differences from commonly used queuing technologies.\nThe main one is that they do not require explicit registration and are created on demand. The number of :task_list:task_lists:\nis not limited. A common use case is to have a :task_list: per :worker: process and use it to deliver :activity_task:activity_tasks:\nto the process. Another use case is to have a :task_list: per pool of :worker:workers:."}),"\n",(0,o.jsx)(s.p,{children:"There are multiple advantages of using a :task_list: to deliver :task:tasks: instead of invoking an :activity_worker: through a synchronous RPC:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:":worker:Worker: doesn't need to have any open ports, which is more secure."}),"\n",(0,o.jsx)(s.li,{children:":worker:Worker: doesn't need to advertise itself through DNS or any other network discovery mechanism."}),"\n",(0,o.jsx)(s.li,{children:"When all :worker:workers: are down, messages are persisted in a :task_list: waiting for the :worker:workers: to recover."}),"\n",(0,o.jsx)(s.li,{children:"A :worker: polls for a message only when it has spare capacity, so it never gets overloaded."}),"\n",(0,o.jsx)(s.li,{children:"Automatic load balancing across a large number of :worker:workers:."}),"\n",(0,o.jsx)(s.li,{children:":task_list:Task_lists: support server side throttling. This allows you to limit the :task: dispatch rate to the pool of :worker:workers: and still supports adding a :task: with a higher rate when spikes happen."}),"\n",(0,o.jsx)(s.li,{children:":task_list:Task_lists: can be used to route a request to specific pools of :worker:workers: or even a specific process."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var i=t(6540);const o={},n=i.createContext(o);function a(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);