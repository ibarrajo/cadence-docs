"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[22],{2863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"go-client/queries","title":"Queries","description":"If a has been stuck at a state for longer than an expected period of time, you","source":"@site/docs/05-go-client/11-queries.md","sourceDirName":"05-go-client","slug":"/go-client/queries","permalink":"/cadence-docs/docs/go-client/queries","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/05-go-client/11-queries.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"layout":"default","title":"Queries","permalink":"/docs/go-client/queries"},"sidebar":"docsSidebar","previous":{"title":"Side effect","permalink":"/cadence-docs/docs/go-client/side-effect"},"next":{"title":"Async activity completion","permalink":"/cadence-docs/docs/go-client/activity-async-completion"}}');var i=t(4848),o=t(8453);const s={layout:"default",title:"Queries",permalink:"/docs/go-client/queries"},c="Queries",a={},l=[{value:"Consistent Query",id:"consistent-query",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"queries",children:"Queries"})}),"\n",(0,i.jsx)(n.p,{children:"If a workflow_execution has been stuck at a state for longer than an expected period of time, you\nmight want to query the current call stack. You can use the Cadence CLI to perform this query. For\nexample:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"cadence-cli --domain samples-domain workflow query -w my_workflow_id -r my_run_id -qt __stack_trace"})}),"\n",(0,i.jsxs)(n.p,{children:["This command uses ",(0,i.jsx)(n.code,{children:"__stack_trace"}),", which is a built-in query type supported by the Cadence client\nlibrary. You can add custom query types to handle queries such as querying the current state of a\nworkflow, or querying how many activities the workflow has completed. To do this, you need to set\nup a query handler using ",(0,i.jsx)(n.code,{children:"workflow.SetQueryHandler"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The handler must be a function that returns two values:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"A serializable result"}),"\n",(0,i.jsx)(n.li,{children:"An error"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The handler function can receive any number of input parameters, but all input parameters must be\nserializable. The following sample code sets up a query handler that handles the query type of\n",(0,i.jsx)(n.code,{children:"current_state"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func MyWorkflow(ctx workflow.Context, input string) error {\n    currentState := "started" // This could be any serializable struct.\n    err := workflow.SetQueryHandler(ctx, "current_state", func() (string, error) {\n        return currentState, nil\n    })\n    if err != nil {\n        currentState = "failed to register query handler"\n        return err\n    }\n    // Your normal workflow code begins here, and you update the currentState as the code makes progress.\n    currentState = "waiting timer"\n    err = NewTimer(ctx, time.Hour).Get(ctx, nil)\n    if err != nil {\n        currentState = "timer failed"\n        return err\n    }\n\n    currentState = "waiting activity"\n    ctx = WithActivityOptions(ctx, myActivityOptions)\n    err = ExecuteActivity(ctx, MyActivity, "my_input").Get(ctx, nil)\n    if err != nil {\n        currentState = "activity failed"\n        return err\n    }\n    currentState = "done"\n    return nil\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can now query ",(0,i.jsx)(n.code,{children:"current_state"})," by using the "]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"cadence-cli --domain samples-domain workflow query -w my_workflow_id -r my_run_id -qt current_state"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also issue a query from code using the ",(0,i.jsx)(n.code,{children:"QueryWorkflow()"})," API on a Cadence client object."]}),"\n",(0,i.jsx)(n.h2,{id:"consistent-query",children:"Consistent Query"}),"\n",(0,i.jsx)(n.p,{children:"Query has two consistency levels, eventual and strong. Consider if you were to signal a workflow and then\nimmediately query the "}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"cadence-cli --domain samples-domain workflow signal -w my_workflow_id -r my_run_id -n signal_name -if ./input.json"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"cadence-cli --domain samples-domain workflow query -w my_workflow_id -r my_run_id -qt current_state"})}),"\n",(0,i.jsx)(n.p,{children:"In this example if signal were to change workflow state, query may or may not see that state update reflected\nin the query result. This is what it means for query to be eventually consistent."}),"\n",(0,i.jsx)(n.p,{children:"Query has another consistency level called strong consistency. A strongly consistent query is guaranteed\nto be based on workflow state which includes all events that came before the query was issued. An event\nis considered to have come before a query if the call creating the external event returned success before\nthe query was issued. External events which are created while the query is outstanding may or may not\nbe reflected in the workflow state the query result is based on."}),"\n",(0,i.jsx)(n.p,{children:"In order to run consistent query through the CLI do the following:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"cadence-cli --domain samples-domain workflow query -w my_workflow_id -r my_run_id -qt current_state --qcl strong"})}),"\n",(0,i.jsx)(n.p,{children:"In order to run a query using the go client do the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"resp, err := cadenceClient.QueryWorkflowWithOptions(ctx, &client.QueryWorkflowWithOptionsRequest{\n    WorkflowID:            workflowID,\n    RunID:                 runID,\n    QueryType:             queryType,\n    QueryConsistencyLevel: shared.QueryConsistencyLevelStrong.Ptr(),\n})\n"})}),"\n",(0,i.jsx)(n.p,{children:"When using strongly consistent query you should expect higher latency than eventually consistent query."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);