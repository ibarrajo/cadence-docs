"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[7246],{266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"go-client/side-effect","title":"Side effect","description":"workflow.SideEffect is useful for short, nondeterministic code snippets, such as getting a random","source":"@site/docs/05-go-client/10-side-effect.md","sourceDirName":"05-go-client","slug":"/go-client/side-effect","permalink":"/docs/go-client/side-effect","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/05-go-client/10-side-effect.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"layout":"default","title":"Side effect","permalink":"/docs/go-client/side-effect"},"sidebar":"docsSidebar","previous":{"title":"Continue as new","permalink":"/docs/go-client/continue-as-new"},"next":{"title":"Queries","permalink":"/docs/go-client/queries"}}');var o=n(4848),i=n(8453);const s={layout:"default",title:"Side effect",permalink:"/docs/go-client/side-effect"},r="Side effect",d={},a=[];function f(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"side-effect",children:"Side effect"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"workflow.SideEffect"})," is useful for short, nondeterministic code snippets, such as getting a random\nvalue or generating a UUID. It executes the provided function once and records its result into the\n:workflow: history. ",(0,o.jsx)(t.code,{children:"workflow.SideEffect"}),' does not re-execute upon replay, but instead returns the\nrecorded result. It can be seen as an "inline" :activity:. Something to note about ',(0,o.jsx)(t.code,{children:"workflow.SideEffect"}),"\nis that, unlike the Cadence guarantee of at-most-once execution for :activity:activities:, there is no such\nguarantee with ",(0,o.jsx)(t.code,{children:"workflow.SideEffect"}),". Under certain failure conditions, ",(0,o.jsx)(t.code,{children:"workflow.SideEffect"})," can\nend up executing a function more than once."]}),"\n",(0,o.jsxs)(t.p,{children:["The only way to fail ",(0,o.jsx)(t.code,{children:"SideEffect"})," is to panic, which causes a :decision_task: failure. After the\ntimeout, Cadence reschedules and then re-executes the :decision_task:, giving ",(0,o.jsx)(t.code,{children:"SideEffect"})," another chance\nto succeed. Do not return any data from ",(0,o.jsx)(t.code,{children:"SideEffect"})," other than through its recorded return value."]}),"\n",(0,o.jsxs)(t.p,{children:["The following sample demonstrates how to use ",(0,o.jsx)(t.code,{children:"SideEffect"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"encodedRandom := SideEffect(func(ctx cadence.Context) interface{} {\n    return rand.Intn(100)\n})\n\nvar random int\nencodedRandom.Get(&random)\nif random < 50 {\n    ...\n} else {\n    ...\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var c=n(6540);const o={},i=c.createContext(o);function s(e){const t=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),c.createElement(i.Provider,{value:t},e.children)}}}]);