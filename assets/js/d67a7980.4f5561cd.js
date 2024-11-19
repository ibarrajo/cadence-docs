"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[5733],{608:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"go-client/workflow-versioning","title":"Versioning","description":"The definition code of a Cadence must be deterministic because Cadence uses sourcing","source":"@site/docs/05-go-client/14-workflow-versioning.md","sourceDirName":"05-go-client","slug":"/go-client/workflow-versioning","permalink":"/cadence-docs/docs/go-client/workflow-versioning","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/05-go-client/14-workflow-versioning.md","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"layout":"default","title":"Versioning","permalink":"/docs/go-client/workflow-versioning"},"sidebar":"docsSidebar","previous":{"title":"Testing","permalink":"/cadence-docs/docs/go-client/workflow-testing"},"next":{"title":"Sessions","permalink":"/cadence-docs/docs/go-client/sessions"}}');var r=o(4848),i=o(8453);const c={layout:"default",title:"Versioning",permalink:"/docs/go-client/workflow-versioning"},s="Versioning",l={},a=[{value:"workflow.GetVersion()",id:"workflowgetversion",level:2},{value:"Sanity checking",id:"sanity-checking",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"versioning",children:"Versioning"})}),"\n",(0,r.jsx)(t.p,{children:"The definition code of a Cadence :workflow: must be deterministic because Cadence uses :event: sourcing\nto reconstruct the :workflow: state by replaying the saved history :event: data on the :workflow:\ndefinition code. This means that any incompatible update to the :workflow: definition code could cause\na non-deterministic issue if not handled correctly."}),"\n",(0,r.jsx)(t.h2,{id:"workflowgetversion",children:"workflow.GetVersion()"}),"\n",(0,r.jsx)(t.p,{children:"Consider the following :workflow: definition:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'func MyWorkflow(ctx workflow.Context, data string) (string, error) {\n    ao := workflow.ActivityOptions{\n        ScheduleToStartTimeout: time.Minute,\n        StartToCloseTimeout:    time.Minute,\n    }\n    ctx = workflow.WithActivityOptions(ctx, ao)\n    var result1 string\n    err := workflow.ExecuteActivity(ctx, ActivityA, data).Get(ctx, &result1)\n    if err != nil {\n        return "", err\n    }\n    var result2 string\n    err = workflow.ExecuteActivity(ctx, ActivityB, result1).Get(ctx, &result2)\n    return result2, err\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Now let's say we have replaced ActivityA with ActivityC, and deployed the updated code. If there\nis an existing :workflow_execution: that was started by the original version of the :workflow: code, where\nActivityA had already completed and the result was recorded to history, the new version of the :workflow:\ncode will pick up that :workflow_execution: and try to resume from there. However, the :workflow: will fail\nbecause the new code expects a result for ActivityC from the history data, but instead it gets the\nresult for ActivityA. This causes the :workflow: to fail on the non-deterministic error."}),"\n",(0,r.jsxs)(t.p,{children:["Thus we use ",(0,r.jsx)(t.code,{children:"workflow.GetVersion()."})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'var err error\nv := workflow.GetVersion(ctx, "Step1", workflow.DefaultVersion, 1)\nif v == workflow.DefaultVersion {\n    err = workflow.ExecuteActivity(ctx, ActivityA, data).Get(ctx, &result1)\n} else {\n    err = workflow.ExecuteActivity(ctx, ActivityC, data).Get(ctx, &result1)\n}\nif err != nil {\n    return "", err\n}\n\nvar result2 string\nerr = workflow.ExecuteActivity(ctx, ActivityB, result1).Get(ctx, &result2)\nreturn result2, err\n'})}),"\n",(0,r.jsxs)(t.p,{children:["When ",(0,r.jsx)(t.code,{children:"workflow.GetVersion()"})," is run for the new :workflow_execution:, it records a marker in the :workflow:\nhistory so that all future calls to ",(0,r.jsx)(t.code,{children:"GetVersion"})," for this change ID--",(0,r.jsx)(t.code,{children:"Step 1"})," in the example--on this\n:workflow_execution: will always return the given version number, which is ",(0,r.jsx)(t.code,{children:"1"})," in the example."]}),"\n",(0,r.jsx)(t.p,{children:"If you make an additional change, such as replacing ActivityC with ActivityD, you need to\nadd some additional code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'v := workflow.GetVersion(ctx, "Step1", workflow.DefaultVersion, 2)\nif v == workflow.DefaultVersion {\n    err = workflow.ExecuteActivity(ctx, ActivityA, data).Get(ctx, &result1)\n} else if v == 1 {\n    err = workflow.ExecuteActivity(ctx, ActivityC, data).Get(ctx, &result1)\n} else {\n    err = workflow.ExecuteActivity(ctx, ActivityD, data).Get(ctx, &result1)\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Note that we have changed ",(0,r.jsx)(t.code,{children:"maxSupported"})," from 1 to 2. A :workflow: that had already passed this\n",(0,r.jsx)(t.code,{children:"GetVersion()"})," call before it was introduced will return ",(0,r.jsx)(t.code,{children:"DefaultVersion"}),". A :workflow: that was run\nwith ",(0,r.jsx)(t.code,{children:"maxSupported"})," set to 1, will return 1. New :workflow:workflows: will return 2."]}),"\n",(0,r.jsx)(t.p,{children:"After you are sure that all of the :workflow_execution:workflow_executions: prior to version 1 have completed, you can\nremove the code for that version. It should now look like the following:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'v := workflow.GetVersion(ctx, "Step1", 1, 2)\nif v == 1 {\n    err = workflow.ExecuteActivity(ctx, ActivityC, data).Get(ctx, &result1)\n} else {\n    err = workflow.ExecuteActivity(ctx, ActivityD, data).Get(ctx, &result1)\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You'll note that ",(0,r.jsx)(t.code,{children:"minSupported"})," has changed from ",(0,r.jsx)(t.code,{children:"DefaultVersion"})," to ",(0,r.jsx)(t.code,{children:"1"}),". If an older version of the\n:workflow_execution: history is replayed on this code, it will fail because the minimum expected version\nis 1. After you are sure that all of the :workflow_execution:workflow_executions: for version 1 have completed, then you\ncan remove 1 so that your code would look like the following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'_ := workflow.GetVersion(ctx, "Step1", 2, 2)\nerr = workflow.ExecuteActivity(ctx, ActivityD, data).Get(ctx, &result1)\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Note that we have preserved the call to ",(0,r.jsx)(t.code,{children:"GetVersion()"}),". There are two reasons to preserve this call:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"This ensures that if there is a :workflow_execution: still running for an older version, it will\nfail here and not proceed."}),"\n",(0,r.jsxs)(t.li,{children:["If you need to make additional changes for ",(0,r.jsx)(t.code,{children:"Step1"}),", such as changing ActivityD to ActivityE, you\nonly need to update ",(0,r.jsx)(t.code,{children:"maxVersion"})," from 2 to 3 and branch from there."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You only need to preserve the first call to ",(0,r.jsx)(t.code,{children:"GetVersion()"})," for each ",(0,r.jsx)(t.code,{children:"changeID"}),". All subsequent calls to\n",(0,r.jsx)(t.code,{children:"GetVersion()"})," with the same change ID are safe to remove. If necessary, you can remove the first\n",(0,r.jsx)(t.code,{children:"GetVersion()"})," call, but you need to ensure the following:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"All executions with an older version are completed."}),"\n",(0,r.jsxs)(t.li,{children:["You can no longer use ",(0,r.jsx)(t.code,{children:"Step1"})," for the changeID. If you need to make changes to that same part in\nthe future, such as change from ActivityD to ActivityE, you would need to use a different changeID\nlike ",(0,r.jsx)(t.code,{children:"Step1-fix2"}),", and start minVersion from DefaultVersion again. The code would look like the\nfollowing:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'v := workflow.GetVersion(ctx, "Step1-fix2", workflow.DefaultVersion, 1)\nif v == workflow.DefaultVersion {\n    err = workflow.ExecuteActivity(ctx, ActivityD, data).Get(ctx, &result1)\n} else {\n    err = workflow.ExecuteActivity(ctx, ActivityE, data).Get(ctx, &result1)\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Upgrading a :workflow: is straightforward if you don't need to preserve your currently running\n:workflow_execution:workflow_executions:. You can simply terminate all of the currently running :workflow_execution:workflow_executions: and\nsuspend new ones from being created while you deploy the new version of your :workflow: code, which does\nnot use ",(0,r.jsx)(t.code,{children:"GetVersion()"}),", and then resume :workflow: creation. However, that is often not the case, and\nyou need to take care of the currently running :workflow_execution:workflow_executions:, so using ",(0,r.jsx)(t.code,{children:"GetVersion()"})," to update\nyour code is the method to use."]}),"\n",(0,r.jsxs)(t.p,{children:["However, if you want your currently running :workflow:workflows: to proceed based on the current :workflow: logic,\nbut you want to ensure new :workflow:workflows: are running on new logic, you can define your :workflow: as a\nnew ",(0,r.jsx)(t.code,{children:"WorkflowType"}),", and change your start path (calls to ",(0,r.jsx)(t.code,{children:"StartWorkflow()"}),") to start the new :workflow:\ntype."]}),"\n",(0,r.jsx)(t.h2,{id:"sanity-checking",children:"Sanity checking"}),"\n",(0,r.jsx)(t.p,{children:"The Cadence client SDK performs a sanity check to help prevent obvious incompatible changes.\nThe sanity check verifies whether a :decision: made in replay matches the :event: recorded in history,\nin the same order. The :decision: is generated by calling any of the following methods:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"workflow.ExecuteActivity()"}),"\n",(0,r.jsx)(t.li,{children:"workflow.ExecuteChildWorkflow()"}),"\n",(0,r.jsx)(t.li,{children:"workflow.NewTimer()"}),"\n",(0,r.jsx)(t.li,{children:"workflow.Sleep()"}),"\n",(0,r.jsx)(t.li,{children:"workflow.SideEffect()"}),"\n",(0,r.jsx)(t.li,{children:"workflow.RequestCancelWorkflow()"}),"\n",(0,r.jsx)(t.li,{children:"workflow.SignalExternalWorkflow()"}),"\n",(0,r.jsx)(t.li,{children:"workflow.UpsertSearchAttributes()"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Adding, removing, or reordering any of the above methods triggers the sanity check and results in\na non-deterministic error."}),"\n",(0,r.jsxs)(t.p,{children:["The sanity check does not perform a thorough check. For example, it does not check on the :activity:'s\ninput arguments or the timer duration. If the check is enforced on every property, then it becomes\ntoo restricted and harder to maintain the :workflow: code. For example, if you move your :activity: code\nfrom one package to another package, that changes the ",(0,r.jsx)(t.code,{children:"ActivityType"}),", which technically becomes a different\n:activity:. But, we don't want to fail on that change, so we only check the function name part of the\n",(0,r.jsx)(t.code,{children:"ActivityType"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>c,x:()=>s});var n=o(6540);const r={},i=n.createContext(r);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);