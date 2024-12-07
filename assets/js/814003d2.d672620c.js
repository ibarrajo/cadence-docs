"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[751],{5092:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"concepts/archival","title":"Archival","description":"Archivalworkflow","source":"@site/docs/03-concepts/07-archival.md","sourceDirName":"03-concepts","slug":"/concepts/archival","permalink":"/cadence-docs/docs/concepts/archival","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/03-concepts/07-archival.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"layout":"default","title":"Archival","permalink":"/docs/concepts/archival"},"sidebar":"docsSidebar","previous":{"title":"Task lists","permalink":"/cadence-docs/docs/concepts/task-lists"},"next":{"title":"Cross DC replication","permalink":"/cadence-docs/docs/concepts/cross-dc-replication"}}');var a=n(4848),t=n(8453);const o={layout:"default",title:"Archival",permalink:"/docs/concepts/archival"},s="Archival",l={},c=[{value:"Concepts",id:"concepts",level:2},{value:"Configuring Archival",id:"configuring-archival",level:2},{value:"Cluster Level Archival Config",id:"cluster-level-archival-config",level:3},{value:"Domain Level Archival Config",id:"domain-level-archival-config",level:3},{value:"Running Locally",id:"running-locally",level:2},{value:"Running in Production",id:"running-in-production",level:2},{value:"FAQ",id:"faq",level:2},{value:"When does archival happen?",id:"when-does-archival-happen",level:3},{value:"What&#39;s the query syntax for visibility archival?",id:"whats-the-query-syntax-for-visibility-archival",level:3},{value:"How does archival interact with global domains?",id:"how-does-archival-interact-with-global-domains",level:3},{value:"Can I specify multiple archival URIs?",id:"can-i-specify-multiple-archival-uris",level:3},{value:"How does archival work with PII?",id:"how-does-archival-work-with-pii",level:3},{value:"Planned Future Work",id:"planned-future-work",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"archival",children:"Archival"})}),"\n",(0,a.jsx)(i.p,{children:"Archival is a feature that automatically moves workflow histories (history archival) and visibility records (visibility archival) from persistence to a secondary data store after the retention period, thus allowing users to keep workflow history and visibility records as long as necessary without overwhelming Cadence primary data store. There are two reasons you may consider turning on archival for your domain:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Compliance:"})," For legal reasons histories may need to be stored for a long period of time."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Debugging:"})," Old histories can still be accessed for debugging."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"The current implementation of the Archival feature has two limitations:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"RunID Required:"})," In order to retrieve an archived workflow history, both workflowID and runID are required."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Best Effort:"})," It is possible that a history or visibility record is deleted from Cadence primary persistence without being archived first. These cases are rare but are possible with the current state of archival. Please check the FAQ section for how to get notified when this happens."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"concepts",children:"Concepts"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Archiver:"})," Archiver is the component that is responsible for archiving and retrieving workflow histories and visibility records.  Its interface is generic and supports different kinds of archival locations: local file system, S3, Kafka, etc. Check ",(0,a.jsx)(i.a,{href:"https://github.com/cadence-workflow/cadence/blob/master/common/archiver/README.md",children:"this README"})," if you would like to add a new archiver implementation for your data store."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"URI:"})," An URI is used to specify the archival location. Based on the scheme part of an URI, the corresponding archiver will be selected by the system to perform the archival operation."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"configuring-archival",children:"Configuring Archival"}),"\n",(0,a.jsx)(i.p,{children:"Archival is controlled by both domain level config and cluster level config. History and visibility archival have separate domain/cluster configs, but they share the same purpose."}),"\n",(0,a.jsx)(i.h3,{id:"cluster-level-archival-config",children:"Cluster Level Archival Config"}),"\n",(0,a.jsx)(i.p,{children:"A Cadence cluster can be in one of three archival states:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Disabled:"})," No archivals will occur and the archivers will be not initialized on service startup."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Paused:"})," This state is not yet implemented. Currently setting cluster to paused is the same as setting it to disabled."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Enabled:"})," Archivals will occur."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Enabling the cluster for archival simply means workflow histories will be archived. There is another config which controls whether archived histories or visibility records can be accessed. Both configs have defaults defined in the static yaml and can be overwritten via dynamic config. Note, however, dynamic config will take effect only when archival is enabled in static yaml."}),"\n",(0,a.jsx)(i.h3,{id:"domain-level-archival-config",children:"Domain Level Archival Config"}),"\n",(0,a.jsx)(i.p,{children:"A domain includes two pieces of archival related config:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Status:"})," Either enabled or disabled. If a domain is in the disabled state, no archivals will occur for that domain."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"URI:"})," The scheme and location where histories or visibility records will be archived to. When a domain enables archival for the first time URI is set and can never be changed. If URI is not specified when first enabling a domain for archival, a default URI from the static config will be used."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"running-locally",children:"Running Locally"}),"\n",(0,a.jsx)(i.p,{children:"You can follow the steps below to run and test the archival feature locally:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.code,{children:"./cadence-server start"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.code,{children:"./cadence --do samples-domain domain register --gd false --history_archival_status enabled --visibility_archival_status enabled --retention 0"})}),"\n",(0,a.jsxs)(i.li,{children:["Run the ",(0,a.jsx)(i.a,{href:"https://github.com/cadence-workflow/cadence-samples",children:"helloworld cadence-sample"})," by following the README"]}),"\n",(0,a.jsx)(i.li,{children:"Copy the workflowID the completed workflow from log output"}),"\n",(0,a.jsxs)(i.li,{children:["Retrieve runID through archived visibility record ",(0,a.jsx)(i.code,{children:"./cadence --do samples-domain wf listarchived -q 'WorkflowID = \"<workflowID>\"'"})]}),"\n",(0,a.jsxs)(i.li,{children:["Retrieve archived history ",(0,a.jsx)(i.code,{children:"./cadence --do samples-domain wf show --wid <workflowID> --rid <runID>"})]}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["In step 2, we registered a new domain and enabled both history and visibility archival feature for that domain. Since we didn't provide an archival URI when registering the new domain, the default URI specified in ",(0,a.jsx)(i.code,{children:"config/development.yaml"})," is used. The default URI is ",(0,a.jsx)(i.code,{children:"file:///tmp/cadence_archival/development"})," for history archival and ",(0,a.jsx)(i.code,{children:'"file:///tmp/cadence_vis_archival/development"'})," for visibility archival. You can find the archived workflow history under the ",(0,a.jsx)(i.code,{children:"/tmp/cadence_archival/development"})," directory and archived visibility record under the ",(0,a.jsx)(i.code,{children:"/tmp/cadence_vis_archival/development"})," directory."]}),"\n",(0,a.jsx)(i.h2,{id:"running-in-production",children:"Running in Production"}),"\n",(0,a.jsxs)(i.p,{children:["Cadence supports uploading workflow histories to Google Cloud and Amazon S3 for archival in production.\nCheck documentation in ",(0,a.jsx)(i.a,{href:"https://github.com/cadence-workflow/cadence/tree/master/common/archiver/gcloud",children:"GCloud archival component"})," and ",(0,a.jsx)(i.a,{href:"https://github.com/cadence-workflow/cadence/tree/master/common/archiver/s3store",children:"S3 archival component"}),"."]}),"\n",(0,a.jsx)(i.p,{children:"Below is an example of Amazon S3 archival configuration:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-yaml",children:'archival:\n  history:\n    status: "enabled"\n    enableRead: true\n    provider:\n      s3store:\n        region: "us-east-2"\n  visibility:\n    status: "enabled"\n    enableRead: true\n    provider:\n      s3store:\n        region: "us-east-2"\ndomainDefaults:\n  archival:\n    history:\n      status: "enabled"\n      URI: "s3://put-name-of-your-s3-bucket-here"\n    visibility:\n      status: "enabled"\n      URI: "s3://put-name-of-your-s3-bucket-here" # most proably the same as the previous URI\n'})}),"\n",(0,a.jsx)(i.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(i.h3,{id:"when-does-archival-happen",children:"When does archival happen?"}),"\n",(0,a.jsx)(i.p,{children:"In theory, we would like both history and visibility archival happen after workflow closes and retention period passes. However, due to some limitations in the implementation, only history archival happens after the retention period, while visibility archival happens immediately after workflow closes. Please treat this as an implementation details inside Cadence and do not relay on this fact. Archived data should only be checked after the retention period, and we may change the way we do visibility archival in the future."}),"\n",(0,a.jsx)(i.h3,{id:"whats-the-query-syntax-for-visibility-archival",children:"What's the query syntax for visibility archival?"}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"listArchived"})," CLI command and API accept a SQL-like query for retrieving archived visibility records, similar to how the ",(0,a.jsx)(i.code,{children:"listWorkflow"})," command works. Unfortunately, since different Archiver implementations have very different capability, there's currently no universal query syntax that works for all Archiver implementations. Please check the README (for example, ",(0,a.jsx)(i.a,{href:"https://github.com/cadence-workflow/cadence/tree/master/common/archiver/s3store",children:"S3"})," and ",(0,a.jsx)(i.a,{href:"https://github.com/cadence-workflow/cadence/tree/master/common/archiver/gcloud",children:"GCP"}),") of the Archiver used by your domain for the supported query syntax and limitations."]}),"\n",(0,a.jsx)(i.h3,{id:"how-does-archival-interact-with-global-domains",children:"How does archival interact with global domains?"}),"\n",(0,a.jsx)(i.p,{children:"If you have a global domain, when archival occurs it will first run on the active cluster and some time later it will run on the standby cluster when replication happens.\nFor history archival, Cadence will check if upload operation has been performed and skip duplicate efforts.\nFor visibility archival, there's no such check and duplicated visibility records will be uploaded. Depending on the Archiver implementation, those duplicated upload may consume more space in the underlying storage and duplicated entries may be returned."}),"\n",(0,a.jsx)(i.h3,{id:"can-i-specify-multiple-archival-uris",children:"Can I specify multiple archival URIs?"}),"\n",(0,a.jsx)(i.p,{children:"Each domain can only have one URI for history archival and one URI for visibility archival. Different domains, however, can have different URIs (with different schemes)."}),"\n",(0,a.jsx)(i.h3,{id:"how-does-archival-work-with-pii",children:"How does archival work with PII?"}),"\n",(0,a.jsx)(i.p,{children:"No cadence workflow should ever operate on clear text PII. Cadence can be thought of as a database and just as one would not store PII in a database PII should not be stored in Cadence. This is even more important when archival is enabled because these histories can be kept forever."}),"\n",(0,a.jsx)(i.h2,{id:"planned-future-work",children:"Planned Future Work"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Support retriving archived workflow histories without providing runID."}),"\n",(0,a.jsx)(i.li,{children:"Provide guarantee that no history or visibility record is deleted from primary persistence before being archived."}),"\n",(0,a.jsxs)(i.li,{children:["Implement ",(0,a.jsx)(i.strong,{children:"Paused"})," state. In this state no archivals will occur but histories or visibility record also will not be deleted from persistence.\nOnce enabled again from paused state, all skipped archivals will occur."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>s});var r=n(6540);const a={},t=r.createContext(a);function o(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);