"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[9961],{2496:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"go-client/workflow-non-deterministic-error","title":"Workflow Non-deterministic errors","description":"Root cause of non-deterministic errors","source":"@site/docs/05-go-client/19-workflow-non-deterministic-error.md","sourceDirName":"05-go-client","slug":"/go-client/workflow-non-deterministic-error","permalink":"/ibarrajo/cadence-docs/docs/go-client/workflow-non-deterministic-error","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/05-go-client/19-workflow-non-deterministic-error.md","tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"layout":"default","title":"Workflow Non-deterministic errors","permalink":"/docs/go-client/workflow-non-deterministic-errors"}}');var r=t(4848),s=t(8453);const o={layout:"default",title:"Workflow Non-deterministic errors",permalink:"/docs/go-client/workflow-non-deterministic-errors"},c="Workflow Non-deterministic errors",d={},l=[{value:"Root cause of non-deterministic errors",id:"root-cause-of-non-deterministic-errors",level:2},{value:"Decision tasks of workflow",id:"decision-tasks-of-workflow",level:2},{value:"Categories of non-deterministic errors",id:"categories-of-non-deterministic-errors",level:2},{value:"1. Missing decisions",id:"1-missing-decisions",level:3},{value:"2. Extra decisions",id:"2-extra-decisions",level:3},{value:"3. Mismatched decisions",id:"3-mismatched-decisions",level:3},{value:"4. Decision state machine panic",id:"4-decision-state-machine-panic",level:3},{value:"Common Q&amp;A",id:"common-qa",level:2},{value:"I want to change my workflow implementation. What code changes may produce non-deterministic errors?",id:"i-want-to-change-my-workflow-implementation-what-code-changes-may-produce-non-deterministic-errors",level:3},{value:"What are some changes that will NOT trigger non-deterministic errors?",id:"what-are-some-changes-that-will-not-trigger-non-deterministic-errors",level:3},{value:"I want to check if my code change will produce non-deterministic errors, how can I debug?",id:"i-want-to-check-if-my-code-change-will-produce-non-deterministic-errors-how-can-i-debug",level:3}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"workflow-non-deterministic-errors",children:"Workflow Non-deterministic errors"})}),"\n",(0,r.jsx)(i.h2,{id:"root-cause-of-non-deterministic-errors",children:"Root cause of non-deterministic errors"}),"\n",(0,r.jsx)(i.p,{children:"Cadence workflows are designed as long-running operations, and therefore the workflow code you write must be deterministic so that no matter how many time it is executed it always produce the same results."}),"\n",(0,r.jsx)(i.p,{children:"In production environment, your workflow code will run on a distributed system orchestrated by clusters of machines. However, machine failures are inevitable and can happen anytime to your workflow host. If you have a workflow running for long period of time, maybe months even years, and it fails due to loss of a host, it will be resumed on another machine and continue the rest of its execution."}),"\n",(0,r.jsxs)(i.p,{children:["Consider the following diagram where ",(0,r.jsx)(i.code,{children:"Workflow A"})," is running on ",(0,r.jsx)(i.code,{children:"Host A"})," but suddenly it crashes."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"change-workflow-ownership",src:t(4311).A+"",width:"716",height:"822"})}),"\n",(0,r.jsxs)(i.p,{children:["Workflow A then will be picked up by Host B and continues its execution. This process is called ",(0,r.jsx)("b",{children:"change of workflow ownership"}),". However, after Host B gains ownership of the Workflow A, it does not have any information about its historical executions. For example, Workflow A may have executed many activities and it fails. Host B needs to redo all its history until the moment of failure. The process of reconstructing history of a workflow is called ",(0,r.jsx)("b",{children:"history replay"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["In general, any errors occurs during the replay process are called ",(0,r.jsx)("b",{children:"non-deterministic errors"}),". We will explore different types of non-deterministic errors in sections below but first let's try to understand how Cadence is able to perform the replay of workflow in case of failure."]}),"\n",(0,r.jsx)(i.h2,{id:"decision-tasks-of-workflow",children:"Decision tasks of workflow"}),"\n",(0,r.jsx)(i.p,{children:"In the previous section, we learned that Cadence is able to replay workflow histories in case of failure. We will learn exactly how Cadence keeps track of histories and how they get replayed when necessary."}),"\n",(0,r.jsxs)(i.p,{children:["Workflow histories are built based on event-sourcing, and each history event are persisted in Cadence storage. In Cadence, we call these history events ",(0,r.jsx)("b",{children:"decision tasks"}),", the foundation of history replay. Most decision tasks have three status - ",(0,r.jsx)("b",{children:"Scheduled"}),", ",(0,r.jsx)("b",{children:"Started"}),", ",(0,r.jsx)("b",{children:"Completed"})," and we will go over decision tasks produced by each Cadence operation in section below."]}),"\n",(0,r.jsx)(i.p,{children:"When changing a workflow ownership of host and replaying a workflow, the decision tasks are downloaded from database and persisted in memory. Then during the workflow replaying process, if Cadence finds a decision task already exists for a particular step, it will immediately return the value of a decision task instead of rerunning the whole workflow logic. Let's take a look at the following simple workflow implementation and explicitly list all decision tasks produced by this workflow."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:"func SimpleWorkflow(ctx workflow.Context) error {\n\tao := workflow.ActivityOptions{\n\t\t...\n\t}\n\tctx = workflow.WithActivityOptions(ctx, ao)\n\n\tvar a int\n\terr := workflow.ExecuteActivity(ctx, ActivityA).Get(ctx, &a)\n\tif err != nil {\n\t\treturn err\n\t}\n\n\tworkflow.Sleep(time.Minute)\n\n\terr = workflow.ExecuteActivity(ctx, ActivityB, a).Get(ctx, nil)\n\tif err != nil {\n\t\treturn err\n\t}\n\n\tworkflow.Sleep(time.Hour)\n\treturn nil\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:"In this workflow, when it starts, it first execute ActivityA and then assign the result to an integer. It sleeps for one minute and then use the integer as an input argument to execute ActivityB. Finally it sleeps for one hour and completes."}),"\n",(0,r.jsx)(i.p,{children:"The following table lists the decision tasks stack produced by this workflow. It may look overwhelming first but if you associate each decision task with its corresponding Cadence operation, it becomes self-explanatory."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"ID"}),(0,r.jsx)(i.th,{children:"Decision Task Type"}),(0,r.jsx)(i.th,{children:"Explanation"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"1"}),(0,r.jsx)(i.td,{children:"WorkflowStarted"}),(0,r.jsx)(i.td,{children:"the recorded StartWorkflow call's data, which usually schedules a new decision task immediately"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"2"}),(0,r.jsx)(i.td,{children:"DecisionTaskScheduled"}),(0,r.jsx)(i.td,{children:"workflow worker polling for work"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"3"}),(0,r.jsx)(i.td,{children:"DecisionTaskStarted"}),(0,r.jsxs)(i.td,{children:["worker gets the type ",(0,r.jsx)(i.code,{children:"SimpleWorkflow"}),", lookup registred funcs, deserialize input, call it"]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"4"}),(0,r.jsx)(i.td,{children:"DecisionTaskCompleted"}),(0,r.jsx)(i.td,{children:"worker finishes"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"5"}),(0,r.jsx)(i.td,{children:"ActivityTaskScheduled"}),(0,r.jsx)(i.td,{children:"activity available for a worker"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"6"}),(0,r.jsx)(i.td,{children:"ActivityTaskStarted"}),(0,r.jsxs)(i.td,{children:["activity worker polls and gets type ",(0,r.jsx)(i.code,{children:"ActivityA"})," and do the job"]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"7"}),(0,r.jsx)(i.td,{children:"ActivityTaskCompleted"}),(0,r.jsx)(i.td,{children:"activity work completed with result of var a"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"8"}),(0,r.jsx)(i.td,{children:"DecisionTaskScheduled"}),(0,r.jsx)(i.td,{children:"triggered by ActivityCompleted. server schedule next task"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"9"}),(0,r.jsx)(i.td,{children:"DecisionTaskStarted"}),(0,r.jsx)(i.td,{})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"10"}),(0,r.jsx)(i.td,{children:"DecisionTaskCompleted"}),(0,r.jsx)(i.td,{})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"11"}),(0,r.jsx)(i.td,{children:"TimerStarted"}),(0,r.jsx)(i.td,{children:"decision scheduled a timer for 1 minute"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"12"}),(0,r.jsx)(i.td,{children:"TimerFired"}),(0,r.jsx)(i.td,{children:"fired after 1 minute"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"13"}),(0,r.jsx)(i.td,{children:"DecisionTaskScheduled"}),(0,r.jsx)(i.td,{children:"triggered by TimerFired"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"14"}),(0,r.jsx)(i.td,{children:"DecisionTaskStarted"}),(0,r.jsx)(i.td,{})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"15"}),(0,r.jsx)(i.td,{children:"DecisionTaskCompleted"}),(0,r.jsx)(i.td,{})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"16"}),(0,r.jsx)(i.td,{children:"ActivityTaskScheduled"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"ActivityB"})," scheduled by decision with param a"]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"17"}),(0,r.jsx)(i.td,{children:"ActivityTaskStarted"}),(0,r.jsx)(i.td,{children:"started by worker"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"18"}),(0,r.jsx)(i.td,{children:"ActivityTaskCompleted"}),(0,r.jsx)(i.td,{children:"completed with nil"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"19"}),(0,r.jsx)(i.td,{children:"DecisionTaskScheduled"}),(0,r.jsx)(i.td,{children:"triggered by ActivityCompleted"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"20"}),(0,r.jsx)(i.td,{children:"DecisionTaskStarted"}),(0,r.jsx)(i.td,{})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"21"}),(0,r.jsx)(i.td,{children:"DecisionTaskCompleted"}),(0,r.jsx)(i.td,{})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"22"}),(0,r.jsx)(i.td,{children:"TimerStarted"}),(0,r.jsx)(i.td,{children:"decision scheduled a timer for 1 hour"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"23"}),(0,r.jsx)(i.td,{children:"TimerFired"}),(0,r.jsx)(i.td,{children:"fired after 1 hour"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"24"}),(0,r.jsx)(i.td,{children:"DecisionTaskScheduled"}),(0,r.jsx)(i.td,{children:"triggered by TimerFired"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"25"}),(0,r.jsx)(i.td,{children:"DecisionTaskStarted"}),(0,r.jsx)(i.td,{})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"26"}),(0,r.jsx)(i.td,{children:"DecisionTaskCompleted"}),(0,r.jsx)(i.td,{})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"27"}),(0,r.jsx)(i.td,{children:"WorkflowCompleted"}),(0,r.jsx)(i.td,{children:"completed by decision (the function call returned)"})]})]})]}),"\n",(0,r.jsx)(i.p,{children:"As you may observe that this stack has strict orders. The whole point of the table above is that if the code you write involves some orchestration by Cadence, either your worker or Cadence server, they produce decision tasks. When your workflow gets replayed, it will strive to reconstruct this stack. Therefore, code changes to your workflow needs to make sure that they do not mess up with these decision tasks, which trigger non-deterministic errors. Then let's explore different types of non-deterministic errors and their root causes."}),"\n",(0,r.jsx)(i.h2,{id:"categories-of-non-deterministic-errors",children:"Categories of non-deterministic errors"}),"\n",(0,r.jsx)(i.p,{children:"Programmatically, Cadence surfaces 4 categories of non-deterministic errors. With understanding of decision tasks in the previous section and combining the error messages, you should be able to pinpoint what code changes may yield to non-deterministic errors."}),"\n",(0,r.jsx)(i.h3,{id:"1-missing-decisions",children:"1. Missing decisions"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:'fmt.Errorf("nondeterministic workflow: missing replay decision for %s", util.HistoryEventToString(e))\n'})}),"\n",(0,r.jsxs)(i.p,{children:["For source code click ",(0,r.jsx)(i.a,{href:"https://github.com/cadence-workflow/cadence-go-client/blob/e5081b085b0333bac23f198e57959681e0aee987/internal/internal_task_handlers.go#L1206",children:"here"})]}),"\n",(0,r.jsx)(i.p,{children:"This means after replay code, the decision is scheduled less than history events. Using the previous history as an example, when the workflow is waiting at the one hour timer(event ID 22), if we delete the line of :"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:"workflow.Sleep(time.Hour)\n"})}),"\n",(0,r.jsx)(i.p,{children:"and restart worker, then it will run into this error. Because in the history, the workflow has a timer event that is supposed to fire in one hour. However, during replay, there is no logic to schedule that timer."}),"\n",(0,r.jsx)(i.h3,{id:"2-extra-decisions",children:"2. Extra decisions"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:'fmt.Errorf("nondeterministic workflow: extra replay decision for %s", util.DecisionToString(d))\n'})}),"\n",(0,r.jsxs)(i.p,{children:["For source code click ",(0,r.jsx)(i.a,{href:"https://github.com/cadence-workflow/cadence-go-client/blob/e5081b085b0333bac23f198e57959681e0aee987/internal/internal_task_handlers.go#L1210",children:"here"})]}),"\n",(0,r.jsx)(i.p,{children:"This is basically the opposite of the previous case, which means that during replay, Cadence generates more decisions than those in history events. Using the previous history as an example, when the workflow is waiting at the one hour timer(event ID 22), if we change the line of:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:"err = workflow.ExecuteActivity(ctx, activityB, a).Get(ctx, nil)\n"})}),"\n",(0,r.jsx)(i.p,{children:"to"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:"fb := workflow.ExecuteActivity(ctx, activityB, a)\nfc := workflow.ExecuteActivity(ctx, activityC, a)\nerr = fb.Get(ctx,nil)\nif err != nil {\n\treturn err\n}\nerr = fc.Get(ctx,nil)\nif err != nil {\n\treturn err\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:"And restart worker, then it will run into this error. Because in the history, the workflow has scheduled only activityB after the one minute timer, however, during replay, there are two activities scheduled in a decision (in parallel)."}),"\n",(0,r.jsx)(i.h3,{id:"3-mismatched-decisions",children:"3. Mismatched decisions"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:'fmt.Errorf("nondeterministic workflow: history event is %s, replay decision is %s",util.HistoryEventToString(e), util.DecisionToString(d))\n'})}),"\n",(0,r.jsxs)(i.p,{children:["For source code click ",(0,r.jsx)(i.a,{href:"https://github.com/cadence-workflow/cadence-go-client/blob/e5081b085b0333bac23f198e57959681e0aee987/internal/internal_task_handlers.go#L1214",children:"here"})]}),"\n",(0,r.jsx)(i.p,{children:"This means after replay code, the decision scheduled is different than the one in history. Using the previous history as an example, when the workflow is waiting at the one hour timer(event ID 22),\nif we change the line of :"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:"err = workflow.ExecuteActivity(ctx, ActivityB, a).Get(ctx, nil)\n"})}),"\n",(0,r.jsx)(i.p,{children:"to"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:"err = workflow.ExecuteActivity(ctx, ActivityC, a).Get(ctx, nil)\n"})}),"\n",(0,r.jsx)(i.p,{children:"And restart worker, then it will run into this error. Because in the history, the workflow has scheduled ActivityB with input a, but during replay, it schedules ActivityC."}),"\n",(0,r.jsx)(i.h3,{id:"4-decision-state-machine-panic",children:"4. Decision state machine panic"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:'fmt.Sprintf("unknown decision %v, possible causes are nondeterministic workflow definition code"+" or incompatible change in the workflow definition", id)\n'})}),"\n",(0,r.jsxs)(i.p,{children:["For source code click ",(0,r.jsx)(i.a,{href:"https://github.com/cadence-workflow/cadence-go-client/blob/e5081b085b0333bac23f198e57959681e0aee987/internal/internal_decision_state_machine.go#L693",children:"here"})]}),"\n",(0,r.jsx)(i.p,{children:"This usually means workflow history is corrupted due to some bug. For example, the same activity can be scheduled and differentiated by activityID. So ActivityIDs for different activities are supposed to be unique in workflow history. If however we have an ActivityID collision, replay will run into this error."}),"\n",(0,r.jsx)(i.h2,{id:"common-qa",children:"Common Q&A"}),"\n",(0,r.jsx)(i.h3,{id:"i-want-to-change-my-workflow-implementation-what-code-changes-may-produce-non-deterministic-errors",children:"I want to change my workflow implementation. What code changes may produce non-deterministic errors?"}),"\n",(0,r.jsx)(i.p,{children:"As we discussed in previous sections, if your changes change decision tasks, then they will probably lead to non-deterministic errors.\nThese are some common changes that can be categorized by these previous 4 types mentioned above."}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Changing the order of executing Cadence defined operations, such as activities, timer, child workflows, signals, cancelRequest."}),"\n",(0,r.jsx)(i.li,{children:"Change the duration of a timer"}),"\n",(0,r.jsxs)(i.li,{children:["Use build-in goroutine of golang instead of using ",(0,r.jsx)(i.code,{children:"workflow.Go"})]}),"\n",(0,r.jsxs)(i.li,{children:["Use build-in channel of golang instead of using ",(0,r.jsx)(i.code,{children:"workflow.Channel"})]}),"\n",(0,r.jsxs)(i.li,{children:["Use build-in sleep function instead of using ",(0,r.jsx)(i.code,{children:"workflow.Sleep"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"what-are-some-changes-that-will-not-trigger-non-deterministic-errors",children:"What are some changes that will NOT trigger non-deterministic errors?"}),"\n",(0,r.jsx)(i.p,{children:"Code changes that are free of non-deterministic erorrs normally do not involve decision tasks in Cadence."}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["Activity input and output changes do not directly cause non-deterministic errors because the contents are not checked.  However, changes may produce serialization errors based on your data converter implementation (type or number-of-arg changes are particularly prone to problems, so we recommend you always use a single struct).  Cadence uses ",(0,r.jsx)(i.code,{children:"json.Marshal"})," and ",(0,r.jsx)(i.code,{children:"json.Unmarshal"})," (with ",(0,r.jsx)(i.code,{children:"Decoder.UseNumber()"}),") by default."]}),"\n",(0,r.jsx)(i.li,{children:"Code changes that does not modify history events are safe to be checked in. For example, logging or metrics implementations."}),"\n",(0,r.jsx)(i.li,{children:"Change of retry policies, as these are not compared.  Adding or removing retry policies is also safe.  Changes will only take effect on new calls however, not ones that have already been scheduled."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"i-want-to-check-if-my-code-change-will-produce-non-deterministic-errors-how-can-i-debug",children:"I want to check if my code change will produce non-deterministic errors, how can I debug?"}),"\n",(0,r.jsxs)(i.p,{children:["Cadence provides replayer test, which functions as an unit test on your local machine to replay your workflow history comparing to your potential code change. If you introduce a non-deterministic change and your history triggers it, the test should fail. Check out ",(0,r.jsx)(i.a,{href:"/ibarrajo/cadence-docs/docs/go-client/workflow-replay-shadowing",children:"this page"})," for more details."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},4311:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/change-workflow-ownership-22c8e7b0ae2dd75d6e1a81978fcb87f6.png"},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>c});var n=t(6540);const r={},s=n.createContext(r);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);