"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[6975],{5905:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var r=o(5105),n=o(4848),i=o(8453);const a={title:"Write your first workflow with Cadence",date:new Date("2023-07-16T00:00:00.000Z"),authors:"chopincode",tags:["deep-dive","introduction-to-cadence"]},c=void 0,s={authorsImageUrls:[void 0]},l=[];function d(e){const t={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We have covered ",(0,n.jsx)(t.a,{href:"/cadence-docs/blog/2023/06/28/components-of-cadence-application-setup",children:"basic components of Cadence"})," and ",(0,n.jsx)(t.a,{href:"/cadence-docs/blog/2023/07/05/implement-cadence-worker-from-scratch",children:"how to implement a Cadence worker on local environment"})," in previous blogs. In this blog, let's write your very first HelloWorld workflow with Cadence. I've started the Cadence backend server in background and registered a domain named ",(0,n.jsx)(t.code,{children:"test-domain"}),". You may use the code snippet for the worker service in ",(0,n.jsx)(t.a,{href:"/cadence-docs/blog/2023/07/05/implement-cadence-worker-from-scratch",children:"this blog"}),"  Let's first write a activity, which takes a single string argument and print a log in the console."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'func helloWorldActivity(ctx context.Context, name string) (string, error) {\n\tlogger := activity.GetLogger(ctx)\n\tlogger.Info("helloworld activity started")\n\treturn "Hello " + name + "!", nil\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Then let's write a workflow that invokes this activity"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'func helloWorldWorkflow(ctx workflow.Context, name string) error {\n\tao := workflow.ActivityOptions{\n\t\tScheduleToStartTimeout: time.Minute,\n\t\tStartToCloseTimeout:    time.Minute,\n\t\tHeartbeatTimeout:       time.Second * 20,\n\t}\n\tctx = workflow.WithActivityOptions(ctx, ao)\n\n\tlogger := workflow.GetLogger(ctx)\n\tlogger.Info("helloworld workflow started")\n\tvar helloworldResult string\n\terr := workflow.ExecuteActivity(ctx, helloWorldActivity, name).Get(ctx, &helloworldResult)\n\tif err != nil {\n\t\tlogger.Error("Activity failed.", zap.Error(err))\n\t\treturn err\n\t}\n\n\tlogger.Info("Workflow completed.", zap.String("Result", helloworldResult))\n\n\treturn nil\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Don't forget to register your workflow and activity to your worker in the ",(0,n.jsx)(t.code,{children:"init"})," function."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"func init() {\n    workflow.Register(helloWorldWorkflow)\n    activity.Register(helloWorldActivity)\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now restart your worker and you will only see logs like"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'2023-07-16T12:07:33.165-0700    INFO    internal/internal_worker.go:834 Started Workflow Worker     {"Domain": "test-domain", "TaskList": "test-worker", "WorkerID": "13585@uber-C02F18EQMD6R@test-worker@42f8a76f-cc42-4a0d-a001-7f7959d5d623"}\n2023-07-16T12:07:33.175-0700    INFO    internal/internal_worker.go:859 Started Activity Worker     {"Domain": "test-domain", "TaskList": "test-worker", "WorkerID": "13585@uber-C02F18EQMD6R@test-worker@42f8a76f-cc42-4a0d-a001-7f7959d5d623"}\n2023-07-16T12:07:33.175-0700    INFO    cadence-worker/code.go:84       Started Worker.     {"worker": "test-worker"}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Let's try to run a Cadence workflow using Cadence CLI."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cadence --env development --domain test-domain workflow start --et 60 --tl test-worker --workflow_type main.helloWorldWorkflow --input '\"World\"'\n"})}),"\n",(0,n.jsx)(t.p,{children:"You should see the Hello World log such like"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'2023-07-16T12:09:11.858-0700    INFO    cadence-worker/code.go:104      Workflow completed. {"Domain": "test-domain", "TaskList": "test-worker", "WorkerID": "13585@uber-C02F18EQMD6R@test-worker@42f8a76f-cc42-4a0d-a001-7f7959d5d623", "WorkflowType": "main.helloWorldWorkflow", "WorkflowID": "8cb7fb2a-243b-43f8-82d9-48d758c9d62f", "RunID": "3c070007-89c3-4e00-a039-19a86b2f9224", "Result": "Hello World!"}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Congratulations, you have successfully run your very first Cadence workflow."}),"\n",(0,n.jsxs)(t.p,{children:["For a bonus point, the Cadence team has also developed a demonstrative web dashboard to visualize the history of all workflows you have run when you start the Cadence server. Check ",(0,n.jsx)(t.a,{href:"http://localhost:8088",children:"http://localhost:8088"})," to see the dashboard like this."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cadencde-ui",src:o(7665).A+"",width:"3790",height:"674"})}),"\n",(0,n.jsxs)(t.p,{children:["This web portal persists all historical workflow you have run recently. Search for the domain you used for this tutorial. In our case, type ",(0,n.jsx)(t.code,{children:"test-domain"})," and hit enter. You may see a list of workflows with detailed information. Feel free to explore the web UI and raise your suggestions to our ",(0,n.jsx)(t.a,{href:"https://github.com/cadence-workflow/cadence-web",children:"Github repo"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cadence-ui-detailed",src:o(3794).A+"",width:"3790",height:"764"})}),"\n",(0,n.jsx)(t.p,{children:"For the incoming blogs, we will cover more advanced topics and use cases with Cadence."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7665:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/cadence_ui-7a1200a6a9f9d11aa28452f0cd539b71.png"},3794:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/cadence_ui_detailed-786dba0e7aa1f9048af4f0c1420c3ccf.png"},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>c});var r=o(6540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}},5105:e=>{e.exports=JSON.parse('{"permalink":"/cadence-docs/blog/2023/07/16/2023-07-16-write-your-first-workflow-with-cadence/write-your-first-workflow-with-cadence","editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/blog/2023-07-16-write-your-first-workflow-with-cadence/2023-07-16-write-your-first-workflow-with-cadence.md","source":"@site/blog/2023-07-16-write-your-first-workflow-with-cadence/2023-07-16-write-your-first-workflow-with-cadence.md","title":"Write your first workflow with Cadence","description":"We have covered basic components of Cadence and how to implement a Cadence worker on local environment in previous blogs. In this blog, let\'s write your very first HelloWorld workflow with Cadence. I\'ve started the Cadence backend server in background and registered a domain named test-domain. You may use the code snippet for the worker service in this blog  Let\'s first write a activity, which takes a single string argument and print a log in the console.","date":"2023-07-16T00:00:00.000Z","tags":[{"inline":false,"label":"Deep Dives","permalink":"/cadence-docs/blog/tags/deep-dives","description":"Deep Dives tag description"},{"inline":false,"label":"Introduction to Cadence","permalink":"/cadence-docs/blog/tags/introduction-to-cadence","description":"Introduction to Cadence tag description"}],"readingTime":2.075,"hasTruncateMarker":true,"authors":[{"name":"Chris Qin","title":"Applications Developer @ Uber","url":"https://www.linkedin.com/in/chrisqin0610/","page":{"permalink":"/cadence-docs/blog/authors/chopincode"},"socials":{"linkedin":"https://www.linkedin.com/in/chrisqin0610/","github":"https://github.com/chopincode"},"imageURL":"https://github.com/chopincode.png","key":"chopincode"}],"frontMatter":{"title":"Write your first workflow with Cadence","date":"2023-07-16T00:00:00.000Z","authors":"chopincode","tags":["deep-dive","introduction-to-cadence"]},"unlisted":false,"prevItem":{"title":"Cadence Community Spotlight Update - July 2023","permalink":"/cadence-docs/blog/2023/07/31/community-spotlight-july-2023"},"nextItem":{"title":"Bad practices and Anti-patterns with Cadence (Part 1)","permalink":"/cadence-docs/blog/2023/07/10/cadence-bad-practices-part-1"}}')}}]);