"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[1337],{9976:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"go-client/sessions","title":"Sessions","description":"The session framework provides a straightforward interface for scheduling multipleactivitiesworkertask_list: name. It also includes features like concurrent session limitation and worker failure detection.","source":"@site/docs/05-go-client/15-sessions.md","sourceDirName":"05-go-client","slug":"/go-client/sessions","permalink":"/cadence-docs/docs/go-client/sessions","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/05-go-client/15-sessions.md","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"layout":"default","title":"Sessions","permalink":"/docs/go-client/sessions"},"sidebar":"docsSidebar","previous":{"title":"Versioning","permalink":"/cadence-docs/docs/go-client/workflow-versioning"},"next":{"title":"Distributed CRON","permalink":"/cadence-docs/docs/go-client/distributed-cron"}}');var i=n(4848),o=n(8453);const r={layout:"default",title:"Sessions",permalink:"/docs/go-client/sessions"},a="Sessions",c={},l=[{value:"Use Cases",id:"use-cases",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Sample Code",id:"sample-code",level:3},{value:"Session Metadata",id:"session-metadata",level:2},{value:"Concurrent Session Limitation",id:"concurrent-session-limitation",level:2},{value:"Recreate Session",id:"recreate-session",level:2},{value:"Q &amp; A",id:"q--a",level:2},{value:"Is there a complete example?",id:"is-there-a-complete-example",level:3},{value:"What happens to my activity if the worker dies?",id:"what-happens-to-my-activity-if-the-worker-dies",level:3},{value:"Is the concurrent session limitation per process or per host?",id:"is-the-concurrent-session-limitation-per-process-or-per-host",level:3},{value:"Future Work",id:"future-work",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"sessions",children:"Sessions"})}),"\n",(0,i.jsxs)(s.p,{children:["The session framework provides a straightforward interface for scheduling multiple :activity:activities: on a single :worker: without requiring you to manually specify the :task_list: name. It also includes features like ",(0,i.jsx)(s.strong,{children:"concurrent session limitation"})," and ",(0,i.jsx)(s.strong,{children:"worker failure detection"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"File Processing"}),": You may want to implement a :workflow: that can download a file, process it, and then upload the modified version. If these three steps are implemented as three different :activity:activities:, all of them should be executed by the same :worker:."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Machine Learning Model Training"}),": Training a machine learning model typically involves three stages: download the data set, optimize the model, and upload the trained parameter. Since the models may consume a large amount of resources (GPU memory for example), the number of models processed on a host needs to be limited."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsxs)(s.p,{children:["Before using the session framework to write your :workflow: code, you need to configure your :worker: to process sessions. To do that, set the ",(0,i.jsx)(s.code,{children:"EnableSessionWorker"})," field of ",(0,i.jsx)(s.code,{children:"worker.Options"})," to ",(0,i.jsx)(s.code,{children:"true"})," when starting your :worker:."]}),"\n",(0,i.jsxs)(s.p,{children:["The most important APIs provided by the session framework are ",(0,i.jsx)(s.code,{children:"workflow.CreateSession()"})," and ",(0,i.jsx)(s.code,{children:"workflow.CompleteSession()"}),". The basic idea is that all the :activity:activities: executed within a session will be processed by the same :worker: and these two APIs allow you to create new sessions and close them after all :activity:activities: finish executing."]}),"\n",(0,i.jsx)(s.p,{children:"Here's a more detailed description of these two APIs:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:"type SessionOptions struct {\n    // ExecutionTimeout: required, no default.\n    //     Specifies the maximum amount of time the session can run.\n    ExecutionTimeout time.Duration\n\n    // CreationTimeout: required, no default.\n    //     Specifies how long session creation can take before returning an error.\n    CreationTimeout  time.Duration\n}\n\nfunc CreateSession(ctx Context, sessionOptions *SessionOptions) (Context, error)\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"CreateSession()"})," takes in ",(0,i.jsx)(s.code,{children:"workflow.Context"}),", ",(0,i.jsx)(s.code,{children:"sessionOptions"})," and returns a new context which contains metadata information of the created session (referred to as the ",(0,i.jsx)(s.strong,{children:"session context"})," below). When it's called, it will check the :task_list: name specified in the ",(0,i.jsx)(s.code,{children:"ActivityOptions"})," (or in the ",(0,i.jsx)(s.code,{children:"StartWorkflowOptions"})," if the :task_list: name is not specified in ",(0,i.jsx)(s.code,{children:"ActivityOptions"}),"), and create the session on one of the :worker:workers: which is polling that :task_list:."]}),"\n",(0,i.jsxs)(s.p,{children:["The returned session context should be used to execute all :activity:activities: belonging to the session. The context will be cancelled if the :worker: executing this session dies or ",(0,i.jsx)(s.code,{children:"CompleteSession()"})," is called. When using the returned session context to execute :activity:activities:, a ",(0,i.jsx)(s.code,{children:"workflow.ErrSessionFailed"})," error may be returned if the session framework detects that the :worker: executing this session has died. The failure of your :activity:activities: won't affect the state of the session, so you still need to handle the errors returned from your :activity:activities: and call ",(0,i.jsx)(s.code,{children:"CompleteSession()"})," if necessary."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"CreateSession()"})," will return an error if the context passed in already contains an open session. If all the :worker:workers: are currently busy and unable to handle new sessions, the framework will keep retrying until the ",(0,i.jsx)(s.code,{children:"CreationTimeout"})," you specified in ",(0,i.jsx)(s.code,{children:"SessionOptions"})," has passed before returning an error (check the ",(0,i.jsx)(s.strong,{children:"Concurrent Session Limitation"})," section for more details)."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:"func CompleteSession(ctx Context)\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"CompleteSession()"})," releases the resources reserved on the :worker:, so it's important to call it as soon as you no longer need the session. It will cancel the session context and therefore all the :activity:activities: using that session context. Note that it's safe to call ",(0,i.jsx)(s.code,{children:"CompleteSession()"})," on a failed session, meaning that you can call it from a ",(0,i.jsx)(s.code,{children:"defer"})," function after the session is successfully created."]}),"\n",(0,i.jsx)(s.h3,{id:"sample-code",children:"Sample Code"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:"func FileProcessingWorkflow(ctx workflow.Context, fileID string) (err error) {\n    ao := workflow.ActivityOptions{\n        ScheduleToStartTimeout: time.Second * 5,\n        StartToCloseTimeout:    time.Minute,\n    }\n    ctx = workflow.WithActivityOptions(ctx, ao)\n\n    so := &workflow.SessionOptions{\n        CreationTimeout:  time.Minute,\n        ExecutionTimeout: time.Minute,\n    }\n    sessionCtx, err := workflow.CreateSession(ctx, so)\n    if err != nil {\n        return err\n    }\n    defer workflow.CompleteSession(sessionCtx)\n\n    var fInfo *fileInfo\n    err = workflow.ExecuteActivity(sessionCtx, downloadFileActivityName, fileID).Get(sessionCtx, &fInfo)\n    if err != nil {\n        return err\n    }\n\n    var fInfoProcessed *fileInfo\n    err = workflow.ExecuteActivity(sessionCtx, processFileActivityName, *fInfo).Get(sessionCtx, &fInfoProcessed)\n    if err != nil {\n        return err\n    }\n\n    return workflow.ExecuteActivity(sessionCtx, uploadFileActivityName, *fInfoProcessed).Get(sessionCtx, nil)\n}\n"})}),"\n",(0,i.jsx)(s.h2,{id:"session-metadata",children:"Session Metadata"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:"type SessionInfo struct {\n    // A unique ID for the session\n    SessionID         string\n\n    // The hostname of the worker that is executing the session\n    HostName          string\n\n    // ... other unexported fields\n}\n\nfunc GetSessionInfo(ctx Context) *SessionInfo\n"})}),"\n",(0,i.jsxs)(s.p,{children:["The session context also stores some session metadata, which can be retrieved by the ",(0,i.jsx)(s.code,{children:"GetSessionInfo()"})," API. If the context passed in doesn't contain any session metadata, this API will return a ",(0,i.jsx)(s.code,{children:"nil"})," pointer."]}),"\n",(0,i.jsx)(s.h2,{id:"concurrent-session-limitation",children:"Concurrent Session Limitation"}),"\n",(0,i.jsxs)(s.p,{children:["To limit the number of concurrent sessions running on a :worker:, set the ",(0,i.jsx)(s.code,{children:"MaxConcurrentSessionExecutionSize"})," field of ",(0,i.jsx)(s.code,{children:"worker.Options"})," to the desired value. By default this field is set to a very large value, so there's no need to manually set it if no limitation is needed."]}),"\n",(0,i.jsxs)(s.p,{children:["If a :worker: hits this limitation, it won't accept any new ",(0,i.jsx)(s.code,{children:"CreateSession()"})," requests until one of the existing sessions is completed. ",(0,i.jsx)(s.code,{children:"CreateSession()"})," will return an error if the session can't be created within ",(0,i.jsx)(s.code,{children:"CreationTimeout"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"recreate-session",children:"Recreate Session"}),"\n",(0,i.jsxs)(s.p,{children:["For long-running sessions, you may want to use the ",(0,i.jsx)(s.code,{children:"ContinueAsNew"})," feature to split the :workflow: into multiple runs when all :activity:activities: need to be executed by the same :worker:. The ",(0,i.jsx)(s.code,{children:"RecreateSession()"}),"  API is designed for such a use case."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:"func RecreateSession(ctx Context, recreateToken []byte, sessionOptions *SessionOptions) (Context, error)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Its usage is the same as ",(0,i.jsx)(s.code,{children:"CreateSession()"})," except that it also takes in a ",(0,i.jsx)(s.code,{children:"recreateToken"}),", which is needed to create a new session on the same :worker: as the previous one. You can get the token by calling the ",(0,i.jsx)(s.code,{children:"GetRecreateToken()"})," method of the ",(0,i.jsx)(s.code,{children:"SessionInfo"})," object."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:"token := workflow.GetSessionInfo(sessionCtx).GetRecreateToken()\n"})}),"\n",(0,i.jsx)(s.h2,{id:"q--a",children:"Q & A"}),"\n",(0,i.jsx)(s.h3,{id:"is-there-a-complete-example",children:"Is there a complete example?"}),"\n",(0,i.jsxs)(s.p,{children:["Yes, the ",(0,i.jsx)(s.a,{href:"https://github.com/cadence-workflow/cadence-samples/blob/master/cmd/samples/fileprocessing/workflow.go",children:"file processing example"})," in the cadence-sample repo has been updated to use the session framework."]}),"\n",(0,i.jsx)(s.h3,{id:"what-happens-to-my-activity-if-the-worker-dies",children:"What happens to my activity if the worker dies?"}),"\n",(0,i.jsxs)(s.p,{children:["If your :activity: has already been scheduled, it will be cancelled. If not, you will get a ",(0,i.jsx)(s.code,{children:"workflow.ErrSessionFailed"})," error when you call ",(0,i.jsx)(s.code,{children:"workflow.ExecuteActivity()"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"is-the-concurrent-session-limitation-per-process-or-per-host",children:"Is the concurrent session limitation per process or per host?"}),"\n",(0,i.jsx)(s.p,{children:"It's per :worker: process, so make sure there's only one :worker: process running on the host if you plan to use that feature."}),"\n",(0,i.jsx)(s.h2,{id:"future-work",children:"Future Work"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://github.com/cadence-workflow/cadence-go-client/issues/775",children:"Support automatic session re-establishing"})}),"\nRight now a session is considered failed if the :worker: process dies. However, for some use cases, you may only care whether :worker: host is alive or not. For these uses cases, the session should be automatically re-established if the :worker: process is restarted."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://github.com/cadence-workflow/cadence-go-client/issues/776",children:"Support fine-grained concurrent session limitation"})}),"\nThe current implementation assumes that all sessions are consuming the same type of resource and there's only one global limitation. Our plan is to allow you to specify what type of resource your session will consume and enforce different limitations on different types of resources."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var t=n(6540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);