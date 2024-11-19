"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[4713],{6462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"java-client/side-effect","title":"Side Effect","description":"Side Effect allow workflow executes the provided function once, records its result into the workflow history.","source":"@site/docs/04-java-client/16-side-effect.md","sourceDirName":"04-java-client","slug":"/java-client/side-effect","permalink":"/cadence-docs/docs/java-client/side-effect","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/04-java-client/16-side-effect.md","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"layout":"default","title":"Side Effect","permalink":"/docs/java-client/side-effect"},"sidebar":"docsSidebar","previous":{"title":"Continue As New","permalink":"/cadence-docs/docs/java-client/continue-as-new"},"next":{"title":"Testing","permalink":"/cadence-docs/docs/java-client/testing"}}');var o=t(4848),r=t(8453);const c={layout:"default",title:"Side Effect",permalink:"/docs/java-client/side-effect"},a="Side Effect",s={},d=[{value:"Mutable Side Effect",id:"mutable-side-effect",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"side-effect",children:"Side Effect"})}),"\n",(0,o.jsx)(n.p,{children:"Side Effect allow workflow executes the provided function once, records its result into the workflow history.\nThe recorded result on history will be returned without executing the provided function during replay. This\nguarantees the deterministic requirement for workflow as the exact same result will be returned\nin replay. Common use case is to run some short non-deterministic code in workflow, like\ngetting random number. The only way to fail SideEffect is to panic which causes decision task\nfailure. The decision task after timeout is rescheduled and re-executed giving SideEffect\nanother chance to succeed."}),"\n",(0,o.jsx)(n.p,{children:"!!Caution: do not use sideEffect function to modify any workflow state. Only use the\nSideEffect's return value. For example this code is BROKEN:"}),"\n",(0,o.jsx)(n.p,{children:"Bad example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:" AtomicInteger random = new AtomicInteger();\n Workflow.sideEffect(() -> {\n        random.set(random.nextInt(100));\n        return null;\n });\n // random will always be 0 in replay, thus this code is non-deterministic\n if random.get() < 50 {\n        ....\n } else {\n        ....\n }\n"})}),"\n",(0,o.jsx)(n.p,{children:"On replay the provided function is not executed, the random will always be 0, and the workflow\ncould takes a different path breaking the determinism."}),"\n",(0,o.jsx)(n.p,{children:"Here is the correct way to use sideEffect:"}),"\n",(0,o.jsx)(n.p,{children:"Good example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:" int random = Workflow.sideEffect(Integer.class, () -> random.nextInt(100));\n if random < 50 {\n        ....\n } else {\n        ....\n }\n"})}),"\n",(0,o.jsx)(n.p,{children:"If function throws any exception it is not delivered to the workflow code. It is wrapped in\nan Error causing failure of the current decision."}),"\n",(0,o.jsx)(n.h2,{id:"mutable-side-effect",children:"Mutable Side Effect"}),"\n",(0,o.jsx)(n.p,{children:"MutableSideEffect is similar to sideEffect, in allowing\ncalls of non-deterministic functions from workflow code.\nThe difference is that every sideEffect call in non-replay mode results in a new\nmarker event recorded into the history. However, mutableSideEffect only records a new\nmarker if a value has changed. During the replay, mutableSideEffect will not execute\nthe function again, but it will return the exact same value as it was returning during the\nnon-replay run."}),"\n",(0,o.jsx)(n.p,{children:"One good use case of mutableSideEffect is to access a dynamically changing config\nwithout breaking determinism. Even if called very frequently the config value is recorded only\nwhen it changes not causing any performance degradation due to a large history size."}),"\n",(0,o.jsx)(n.p,{children:"!!Caution: do not use mutableSideEffect function to modify any workflow sate. Only use\nthe mutableSideEffect's return value."}),"\n",(0,o.jsx)(n.p,{children:"If function throws any exception it is not delivered to the workflow code. It is wrapped in\nan Error causing failure of the current decision."})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);