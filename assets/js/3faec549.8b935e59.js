"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[2559],{6885:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"operation-guide/migration","title":"Cluster Migration","description":"There could be some reasons that you need to migrate Cadence clusters:","source":"@site/docs/07-operation-guide/05-migration.md","sourceDirName":"07-operation-guide","slug":"/operation-guide/migration","permalink":"/cadence-docs/docs/operation-guide/migration","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/07-operation-guide/05-migration.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"layout":"default","title":"Cluster Migration","permalink":"/docs/operation-guide/migration"},"sidebar":"docsSidebar","previous":{"title":"Cluster Troubleshooting","permalink":"/cadence-docs/docs/operation-guide/troubleshooting"},"next":{"title":"Overview","permalink":"/cadence-docs/docs/workflow-troubleshooting/"}}');var a=r(4848),s=r(8453);const i={layout:"default",title:"Cluster Migration",permalink:"/docs/operation-guide/migration"},o="Migrate Cadence cluster.",l={},d=[{value:"Migrate with naive approach",id:"migrate-with-naive-approach",level:2},{value:"Migrate with Global Domain Replication feature",id:"migrate-with-global-domain-replication-feature",level:2},{value:"Step 0 - Verify clusters&#39; setup is correct",id:"step-0---verify-clusters-setup-is-correct",level:3},{value:"Step 1 - Connect the two clusters using global domain(replication) feature",id:"step-1---connect-the-two-clusters-using-global-domainreplication-feature",level:3},{value:"Step 2 - Test Replicating one domain",id:"step-2---test-replicating-one-domain",level:3},{value:"Step 3 - Start to replicate all domains",id:"step-3---start-to-replicate-all-domains",level:3},{value:"Step 4 - Complete the migration",id:"step-4---complete-the-migration",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"migrate-cadence-cluster",children:"Migrate Cadence cluster."})}),"\n",(0,a.jsx)(n.p,{children:"There could be some reasons that you need to migrate Cadence clusters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Migrate to different storage, for example from Postgres/MySQL to Cassandra, or using multiple SQL database as a sharded SQL cluster for Cadence"}),"\n",(0,a.jsx)(n.li,{children:"Split traffic"}),"\n",(0,a.jsx)(n.li,{children:"Datacenter migration"}),"\n",(0,a.jsx)(n.li,{children:"Scale up -- to change numOfHistoryShards."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Below is two different approaches for migrating a cluster."}),"\n",(0,a.jsx)(n.h2,{id:"migrate-with-naive-approach",children:"Migrate with naive approach"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Set up a new Cadence cluster"}),"\n",(0,a.jsx)(n.li,{children:"Connect client workers to both old and new clusters"}),"\n",(0,a.jsx)(n.li,{children:"Change workflow code to start new workflows only in the new cluster"}),"\n",(0,a.jsx)(n.li,{children:"Wait for all old workflows to finish in the old cluster"}),"\n",(0,a.jsx)(n.li,{children:"Shutdown the old Cadence cluster and stop the client workers from connecting to it."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"NOTE 1: With this approach, workflow history/visibility will not be migrated to new cluster."}),"\n",(0,a.jsx)(n.p,{children:"NOTE 2: This is the only way to migrate a local domain, because a local domain cannot be converted to a global domain, even after a cluster enables XDC feature."}),"\n",(0,a.jsxs)(n.p,{children:["NOTE 3: Starting from ",(0,a.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/releases/tag/v0.22.0",children:"version 0.22.0"}),", global domain is preferred/recommended. Please ensure you create and use global domains only.\nIf you are using local domains, an easy way is to create a global domain and migrate to the new global domain using the above steps."]}),"\n",(0,a.jsxs)(n.h2,{id:"migrate-with-global-domain-replication-feature",children:["Migrate with ",(0,a.jsx)(n.a,{href:"/docs/concepts/cross-dc-replication/#running-in-production",children:"Global Domain Replication"})," feature"]}),"\n",(0,a.jsxs)(n.p,{children:["NOTE 1: If a domain are NOT a global domain, you cannot use the XDC feature to migrate. The only way is to migrate in a ",(0,a.jsx)(n.a,{href:"migration#migrate-with-naive-approach",children:"naive approach"})]}),"\n",(0,a.jsx)(n.p,{children:"NOTE 2: Only migrating to the same numHistoryShards is allowed."}),"\n",(0,a.jsx)(n.h3,{id:"step-0---verify-clusters-setup-is-correct",children:"Step 0 - Verify clusters' setup is correct"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Make sure the new cluster doesn\u2019t already have the domain names that needs to be migrated (otherwise domain replication would fail)."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"To get all the domains from current cluster:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <currentClusterAddress> admin domain list\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then\nFor each global domain"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <newClusterAddress> --do <domain_name> domain describe\n"})}),"\n",(0,a.jsx)(n.p,{children:"to make sure it doesn't exist in the new cluster."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Target replication cluster should have numHistoryShards >= source cluster"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Target cluster should have the same search attributes enabled in dynamic configuration and in ElasticSearch."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Check the dynamic configuration to see if they have the same list of ",(0,a.jsx)(n.code,{children:"frontend.validSearchAttributes"}),". If any is missing in the new cluster, update the dynamic config for the new cluster."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Check results of the below command to make sure that the ES fields matched with the dynamic configuration"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -u <UNAME>:<PW> -X GET https://<ES_HOST_OF_NEW_CLUSTER>/cadence-visibility-index  -H 'Content-Type: application/json'| jq .\n"})}),"\n",(0,a.jsx)(n.p,{children:"If any search attribute is missing, add the missing search attributes to target cluster."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <newClusterAddress> adm cluster add-search-attr --search_attr_key <> --search_attr_type <>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"step-1---connect-the-two-clusters-using-global-domainreplication-feature",children:"Step 1 - Connect the two clusters using global domain(replication) feature"}),"\n",(0,a.jsx)(n.p,{children:"Include the Cluster Information for both the old and new clusters in the ClusterMetadata config of both clusters.\nExample config for currentCluster"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'dcRedirectionPolicy:\n  policy: "all-domain-apis-forwarding" # use selected-apis-forwarding if using older versions don\'t support this policy\n\nclusterMetadata:\n  enableGlobalDomain: true\n  failoverVersionIncrement: 10\n  masterClusterName: "<newClusterName>"\n  currentClusterName: "<currentClusterName>"\n  clusterInformation:\n    <currentClusterName>:\n      enabled: true\n      initialFailoverVersion: 1\n      rpcName: "cadence-frontend"\n      rpcAddress: "<currentClusterAddress>"\n    <newClusterName>:\n      enabled: true\n      initialFailoverVersion: 0\n      rpcName: "cadence-frontend"\n      rpcAddress: "<newClusterAddress>"\n'})}),"\n",(0,a.jsx)(n.p,{children:"for newClusterName:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'dcRedirectionPolicy:\n  policy: "all-domain-apis-forwarding"\n\nclusterMetadata:\n  enableGlobalDomain: true\n  failoverVersionIncrement: 10\n  masterClusterName: "<newClusterName>"\n  currentClusterName: "<newClusterName>"\n  clusterInformation:\n    <currentClusterName>:\n      enabled: true\n      initialFailoverVersion: 1\n      rpcName: "cadence-frontend"\n      rpcAddress: "<currentClusterAddress>"\n    <newClusterName>:\n      enabled: true\n      initialFailoverVersion: 0\n      rpcName: "cadence-frontend"\n      rpcAddress: "<newClusterAddress>"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Deploy the config.\nIn older versions(",(0,a.jsx)(n.code,{children:"<= v0.22"}),"), only ",(0,a.jsx)(n.code,{children:"selected-apis-forwarding"})," is supported. This would require you to deploy a different set of workflow/activity connected to the new Cadence cluster during migration, if high availability/seamless migration is required. Because ",(0,a.jsx)(n.code,{children:"selected-apis-forwarding"})," only forwarding the non-worker APIs."]}),"\n",(0,a.jsxs)(n.p,{children:["With ",(0,a.jsx)(n.code,{children:"all-domain-apis-forwarding"})," policy, all worker + non-worker APIs are forwarded by Cadence cluster. You don't need to make any deployment change to your workflow/activity workers during migration. Once migration, let all workers connect to the new Cadence cluster before removing/shutdown the old cluster."]}),"\n",(0,a.jsxs)(n.p,{children:["Therefore, it's recommended to upgrade your Cadence cluster to a higher version with ",(0,a.jsx)(n.code,{children:"all-domain-apis-forwarding"})," policy supported. The below steps assuming you are using this policy."]}),"\n",(0,a.jsx)(n.h3,{id:"step-2---test-replicating-one-domain",children:"Step 2 - Test Replicating one domain"}),"\n",(0,a.jsxs)(n.p,{children:["First of all, try replicating a single domain to make sure everything work. Here uses ",(0,a.jsx)(n.code,{children:"domain update"})," to failover, you can also use ",(0,a.jsx)(n.code,{children:"managed failover"})," feature to failover. You may use some testing domains for this like ",(0,a.jsx)(n.code,{children:"cadence-canary"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["2.1 Assuming the domain only contain ",(0,a.jsx)(n.code,{children:"currentCluster"})," in the cluster list, let's add the new cluster to the domain."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <currentClusterAddress> --do <domain_name> domain update --clusters <currentClusterName> <newClusterName>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Run the command below to refresh the domain after adding a new cluster to the cluster list; we need to update the active_cluster to the same value that it appears to be."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <currentClusterAddress> --do <domain_name> domain update --active_cluster <currentClusterName>\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"2.2 failover the domain to be active in new cluster"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <currentClusterAddress> --do workflow-prototype domain update --active_cluster <newClusterName>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Use the domain describe command to verify the entire domain is replicated to the new cluster."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <newClusterAddress> --do <domain_name> domain describe\n"})}),"\n",(0,a.jsx)(n.p,{children:"Find an open workflowID that we want to replicate (you can get it from the UI). Use this command to describe it to make sure it\u2019s open and running:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <initialClusterAddress> --do <domain_name> workflow describe --workflow_id <wfID>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Run a signal command against any workflow and check that it was replicated to the new cluster. Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <initialClusterAddress> --do <domain_name> workflow signal --workflow_id <wfID> --name <anything not functional, e.g. replicationTriggeringSignal>\n"})}),"\n",(0,a.jsx)(n.p,{children:"This command will send a noop signal to workflows to trigger a decision, which will trigger history replication if needed."}),"\n",(0,a.jsx)(n.p,{children:"Verify the workflow is replicated in the new cluster"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <newClusterAddress> --st <adminOperationToken> --do <domain_name> workflow describe --workflow_id <wfID>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Also compare the history between the two clusters:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <newClusterAddress> --do <domain_name> workflow show --workflow_id <wfID>\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <initialClusterAddress> --do <domain_name> workflow show --workflow_id <wfID>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"step-3---start-to-replicate-all-domains",children:"Step 3 - Start to replicate all domains"}),"\n",(0,a.jsxs)(n.p,{children:["You can repeat Step 2 for all the domains. Or you can use the managed failover feature to failover all the domains in the cluster with a single command. See more details in the ",(0,a.jsx)(n.a,{href:"/docs/concepts/cross-dc-replication",children:"global domain documentation"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Because replication cannot be triggered without a decision. Again best way is to send a garbage signal to all the workflows."}),"\n",(0,a.jsx)(n.p,{children:"If advanced visibility is enabled, then use batch signal command to start a batch job to trigger replication for all open workflows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <initialClusterAddress> --do <domain_name> workflow batch start --batch_type signal --query \u201cCloseTime = missing\u201d --signal_name <anything, e.g. xdcTest> --reason <anything> --input <anything> --yes\n"})}),"\n",(0,a.jsx)(n.p,{children:"Watch metrics & dashboard while this is happening. Also observe the signal batch job to make sure it's completed."}),"\n",(0,a.jsx)(n.h3,{id:"step-4---complete-the-migration",children:"Step 4 - Complete the migration"}),"\n",(0,a.jsx)(n.p,{children:"After a few days, make sure everything is stable on the new cluster. The old cluster should only be forwarding requests to new cluster."}),"\n",(0,a.jsx)(n.p,{children:"A few things need to do in order to shutdown the old cluster."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Migrate all applications to connect to the frontend of new cluster instead of relying on the forwarding"}),"\n",(0,a.jsx)(n.li,{children:"Watch metric dashboard to make sure no any traffic is happening on the old cluster"}),"\n",(0,a.jsx)(n.li,{children:"Delete the old cluster from domain cluster list. This needs to be done for every domain."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cadence --address <newHostAddress> --do <domain_name> domain update --clusters <newClusterName>\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Delete the old cluster from the configuration of the new cluster."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Once above is done, you can shutdown the old cluster safely."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);