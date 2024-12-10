"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[5620],{8146:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"go-client/error-handling","title":"Error handling","description":"An, or child, might fail and you could handle errors differently based on different","source":"@site/docs/05-go-client/07-error-handling.md","sourceDirName":"05-go-client","slug":"/go-client/error-handling","permalink":"/cadence-docs/docs/go-client/error-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/05-go-client/07-error-handling.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"layout":"default","title":"Error handling","permalink":"/docs/go-client/error-handling"},"sidebar":"docsSidebar","previous":{"title":"Activity and workflow retries","permalink":"/cadence-docs/docs/go-client/retries"},"next":{"title":"Signals","permalink":"/cadence-docs/docs/go-client/signals"}}');var t=n(4848),a=n(8453);const c={layout:"default",title:"Error handling",permalink:"/docs/go-client/error-handling"},s="Error handling",i={},l=[];function d(e){const r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"error-handling",children:"Error handling"})}),"\n",(0,t.jsxs)(r.p,{children:["An activity, or child workflow, might fail and you could handle errors differently based on different\nerror cases. If the activity returns an error as ",(0,t.jsx)(r.code,{children:"errors.New()"})," or ",(0,t.jsx)(r.code,{children:"fmt.Errorf()"}),", those errors will\nbe converted to ",(0,t.jsx)(r.code,{children:"workflow.GenericError"}),". If the activity returns an error as\n",(0,t.jsx)(r.code,{children:"cadence.NewCustomError(\u201cerr-reason\u201d, details)"}),", that error will be converted to ",(0,t.jsx)(r.code,{children:"*cadence.CustomError"}),".\nThere are other types of errors such as ",(0,t.jsx)(r.code,{children:"workflow.TimeoutError"}),", ",(0,t.jsx)(r.code,{children:"workflow.CanceledError"})," and\n",(0,t.jsx)(r.code,{children:"workflow.PanicError"}),". Following is an example of what your error code might look like:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'err := workflow.ExecuteActivity(ctx, YourActivityFunc).Get(ctx, nil)\nswitch err := err.(type) {\n    case *cadence.CustomError:\n        switch err.Reason() {\n            case "err-reason-a":\n                // Handle error-reason-a.\n                var details YourErrorDetailsType\n                err.Details(&details)\n                // Deal with details.\n            case "err-reason-b":\n                // Handle error-reason-b.\n            default:\n                // Handle all other error reasons.\n        }\n    case *workflow.GenericError:\n        switch err.Error() {\n            case "err-msg-1":\n                // Handle error with message "err-msg-1".\n            case "err-msg-2":\n                // Handle error with message "err-msg-2".\n            default:\n                // Handle all other generic errors.\n        }\n    case *workflow.TimeoutError:\n        switch err.TimeoutType() {\n            case shared.TimeoutTypeScheduleToStart:\n                // Handle ScheduleToStart timeout.\n            case shared.TimeoutTypeStartToClose:\n                // Handle StartToClose timeout.\n            case shared.TimeoutTypeHeartbeat:\n                // Handle heartbeat timeout.\n            default:\n        }\n    case *workflow.PanicError:\n        // Handle panic error.\n    case *cadence.CanceledError:\n        // Handle canceled error.\n    default:\n        // All other cases (ideally, this should not happen).\n}\n'})})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>s});var o=n(6540);const t={},a=o.createContext(t);function c(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);