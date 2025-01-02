"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[573],{7919:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"operation-guide/setup","title":"Cluster Configuration","description":"This section will help to understand what you need for setting up a Cadence cluster.","source":"@site/docs/07-operation-guide/01-setup.md","sourceDirName":"07-operation-guide","slug":"/operation-guide/setup","permalink":"/ibarrajo/cadence-docs/docs/operation-guide/setup","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/07-operation-guide/01-setup.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"layout":"default","title":"Cluster Configuration","permalink":"/docs/operation-guide/setup"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/ibarrajo/cadence-docs/docs/operation-guide/"},"next":{"title":"Cluster Maintenance","permalink":"/ibarrajo/cadence-docs/docs/operation-guide/maintain"}}');var t=i(4848),s=i(8453);const r={layout:"default",title:"Cluster Configuration",permalink:"/docs/operation-guide/setup"},c="Cluster Configuration",a={},d=[{value:"Static configuration",id:"static-configuration",level:2},{value:"Configuration Directory and Files",id:"configuration-directory-and-files",level:3},{value:"Combining Configuration Files",id:"combining-configuration-files",level:4},{value:"Using Environment Variables",id:"using-environment-variables",level:4},{value:"Understand the basic static configuration",id:"understand-the-basic-static-configuration",level:3},{value:"The full list of static configuration",id:"the-full-list-of-static-configuration",level:3},{value:"Dynamic Configuration",id:"dynamic-configuration",level:2},{value:"How to update Dynamic Configuration",id:"how-to-update-dynamic-configuration",level:3},{value:"File-based client",id:"file-based-client",level:4},{value:"Config store client",id:"config-store-client",level:4},{value:"Other Advanced Features",id:"other-advanced-features",level:2},{value:"Deployment &amp; Release",id:"deployment--release",level:2},{value:"Stress/Bench Test a cluster",id:"stressbench-test-a-cluster",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"cluster-configuration",children:"Cluster Configuration"})}),"\n",(0,t.jsx)(n.p,{children:"This section will help to understand what you need for setting up a Cadence cluster."}),"\n",(0,t.jsx)(n.p,{children:"You should understand some basic static configuration of Cadence cluster."}),"\n",(0,t.jsx)(n.p,{children:'There are also many other configuration called "Dynamic Configuration" for fine tuning the cluster. The default values are good to go for small clusters.'}),"\n",(0,t.jsx)(n.p,{children:"Cadence\u2019s minimum dependency is a database(Cassandra or SQL based like MySQL/Postgres). Cadence uses it for persistence. All instances of Cadence clusters are stateless."}),"\n",(0,t.jsx)(n.p,{children:"For production you also need a metric server(Prometheus/Statsd/M3/etc)."}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.a,{href:"/docs/operation-guide/setup/#other-advanced-features",children:"advanced features"})," Cadence depends on others like Elastisearch/OpenSearch+Kafka if you need ",(0,t.jsx)(n.a,{href:"/docs/concepts/search-workflows/",children:"Advanced visibility feature to search workflows"}),". Cadence will depends on a blob store like S3 if you need to enable ",(0,t.jsx)(n.a,{href:"/docs/concepts/archival/",children:"archival feature"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"static-configuration",children:"Static configuration"}),"\n",(0,t.jsx)(n.h3,{id:"configuration-directory-and-files",children:"Configuration Directory and Files"}),"\n",(0,t.jsxs)(n.p,{children:["The default directory for configuration files is named ",(0,t.jsx)(n.strong,{children:"config/"}),". This directory contains various configuration files, but not all files will necessarily be used in every scenario."]}),"\n",(0,t.jsx)(n.h4,{id:"combining-configuration-files",children:"Combining Configuration Files"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Base Configuration: The ",(0,t.jsx)(n.code,{children:"base.yaml"})," file is always loaded first, providing a common configuration that applies to all environments."]}),"\n",(0,t.jsxs)(n.li,{children:["Runtime Environment File: The second file to be loaded is specific to the runtime environment. The environment name can be specified through the ",(0,t.jsx)(n.code,{children:"$CADENCE_ENVIRONMENT"})," environment variable or passed as a command-line argument. If neither option is specified, ",(0,t.jsx)(n.code,{children:"development.yaml"})," is used by default."]}),"\n",(0,t.jsxs)(n.li,{children:["Availability Zone File: If an availability zone is specified (either through the ",(0,t.jsx)(n.code,{children:"$CADENCE_AVAILABILITY_ZONE"}),' environment variable or as a command-line argument), a file named after the zone will be merged. For example, if you specify "az1" as the zone, ',(0,t.jsx)(n.code,{children:"production_az1.yaml"})," will be used as well."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To merge ",(0,t.jsx)(n.code,{children:"base.yaml"}),", ",(0,t.jsx)(n.code,{children:"production.yaml"}),", and ",(0,t.jsx)(n.code,{children:"production_az1.yaml"}),' files, you need to specify "production" as the runtime environment and "az1" as the zone.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-log",children:"// base.yaml -> production.yaml -> production_az1.yaml = final configuration\n"})}),"\n",(0,t.jsx)(n.h4,{id:"using-environment-variables",children:"Using Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["Configuration values can be provided using environment variables with a specific syntax.\n",(0,t.jsx)(n.code,{children:"$VAR"}),": This notation will be replaced with the value of the specified environment variable. If the environment variable is not set, the value will be left blank.\nYou can declare a default value using the syntax ",(0,t.jsx)(n.code,{children:"{$VAR:default}"}),". This means that if the environment variable VAR is not set, the default value will be used instead."]}),"\n",(0,t.jsxs)(n.p,{children:["Note: If you want to include the ",(0,t.jsx)(n.code,{children:"$"})," symbol literally in your configuration file (without interpreting it as an environment variable substitution), escape it by using $$. This will prevent it from being replaced by an environment variable value."]}),"\n",(0,t.jsx)(n.h3,{id:"understand-the-basic-static-configuration",children:"Understand the basic static configuration"}),"\n",(0,t.jsx)(n.p,{children:"There are quite many configs in Cadence. Here are the most basic configuration that you should understand."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Config name"}),(0,t.jsx)(n.th,{children:"Explanation"}),(0,t.jsx)(n.th,{children:"Recommended value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numHistoryShards"}),(0,t.jsxs)(n.td,{children:["This is the most important one in Cadence config.It will be a fixed number in the cluster forever. The only way to change it is to migrate to another cluster. Refer to Migrate cluster section. ",(0,t.jsx)("br",{}),"   ",(0,t.jsx)("br",{})," Some facts about it: ",(0,t.jsx)("br",{})," 1. Each workflow will be mapped to a single shard. Within a shard, all the workflow creation/updates are serialized.  ",(0,t.jsx)("br",{})," 2. Each shard will be assigned to only one History node to own the shard, using a Consistent Hashing Ring. Each shard will consume a small amount of memory/CPU to do background processing. Therefore, a single History node cannot own too many shards. You may need to figure out a good number range based on your instance size(memory/CPU).  ",(0,t.jsx)("br",{})," 3. Also, you can\u2019t add an infinite number of nodes to a cluster because this config is fixed. When the number of History nodes is closed or equal to numHistoryShards, there will be some History nodes that have no shards assigned to it. This will be wasting resources.   ",(0,t.jsx)("br",{})," ",(0,t.jsx)("br",{})," Based on above, you don\u2019t want to have a small number of shards which will limit the maximum size of your cluster. You also don\u2019t want to have a too big number, which will require you to have a quite big initial size of the cluster.  ",(0,t.jsx)("br",{}),"  Also, typically a production cluster will start with a smaller number and then we add more nodes/hosts to it. But to keep high availability, it\u2019s recommended to use at least 4 nodes for each service(Frontend/History/Matching) at the beginning."]}),(0,t.jsxs)(n.td,{children:["1K~16K depending on the size ranges of the cluster you expect to run, and the instance size. ",(0,t.jsx)(n.strong,{children:"Typically 2K for SQL based persistence, and 8K for Cassandra based."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ringpop"}),(0,t.jsxs)(n.td,{children:["This is the config to let all nodes of all services connected to each other. ALL the bootstrap nodes MUST be reachable by ringpop when a service is starting up, within a MaxJoinDuration. defaultMaxJoinDuration is 2 minutes. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," It\u2019s not required that bootstrap nodes need to be Frontend/History or Matching. In fact, it can be running none of them as long as it runs Ringpop protocol."]}),(0,t.jsxs)(n.td,{children:["For dns mode: Recommended to put the DNS of Frontend service ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," For hosts or hostfile mode: A list of Frontend service node addresses if using hosts mode. Make sure all the bootstrap nodes are reachable at startup."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"publicClient"}),(0,t.jsxs)(n.td,{children:["The Cadence Frontend service addresses that internal Cadence system(like system workflows) need to talk to. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," After connected, all nodes in Ringpop will form a ring with identifiers of what service they serve. Ideally Cadence should be able to get Frontend address from there. But Ringpop doesn\u2019t expose this API yet."]}),(0,t.jsxs)(n.td,{children:["Recommended be DNS of Frontend service, so that requests will be distributed to all Frontend nodes.  ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Using localhost+Port or local container IP address+Port will not work if the IP/container is not running frontend"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"services.NAME.rpc"}),(0,t.jsxs)(n.td,{children:["Configuration of how to listen to network ports and serve traffic. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," bindOnLocalHost",":true"," will bind on 127.0.0.1. It\u2019s mostly for local development. In production usually you have to specify the IP that containers will use by using bindOnIP ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," NAME is the matter for the \u201c--services\u201d option in the server startup command."]}),(0,t.jsx)(n.td,{children:"Name: Use as recommended in development.yaml. bindOnIP : an IP address that the container will serve the traffic with"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"services.NAME.pprof"}),(0,t.jsx)(n.td,{children:"Golang profiling service , will bind on the same IP as RPC"}),(0,t.jsx)(n.td,{children:"a port that you want to serve pprof request"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"services.Name.metrics"}),(0,t.jsx)(n.td,{children:"See Metrics&Logging section"}),(0,t.jsx)(n.td,{children:"cc"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clusterMetadata"}),(0,t.jsxs)(n.td,{children:["Cadence cluster configuration. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"enableGlobalDomain\uff1atrue will enable Cadence Cross datacenter replication(aka XDC) feature.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"failoverVersionIncrement: This decides the maximum clusters that you will have replicated to each other at the same time. For example 10 is sufficient for most cases.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"masterClusterName: a master cluster must be one of the enabled clusters, usually the very first cluster to start. It is only meaningful for internal purposes.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"currentClusterName: current cluster name using this config file. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"clusterInformation is a map from clusterName to the cluster configure ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"initialFailoverVersion: each cluster must use a different value from 0 to failoverVersionIncrement-1. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"rpcName: must be \u201ccadence-frontend\u201d. Can be improved in this issue. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"rpcAddress: the address to talk to the Frontend of the cluster for inter-cluster replication. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Note that even if you don\u2019t need XDC replication right now, if you want to migrate data stores in the future, you should enable xdc from every beginning. You just need to use the same name of cluster for both masterClusterName and  currentClusterName. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," Go to ",(0,t.jsx)(n.a,{href:"/docs/concepts/cross-dc-replication/#running-in-production",children:"cross dc replication"})," for how to configure replication in production"]}),(0,t.jsx)(n.td,{children:"As explanation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dcRedirectionPolicy"}),(0,t.jsx)(n.td,{children:"For allowing forwarding frontend requests from passive cluster to active clusters."}),(0,t.jsx)(n.td,{children:"\u201cselected-apis-forwarding\u201d"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"archival"}),(0,t.jsxs)(n.td,{children:["This is for archival history feature, skip if you don\u2019t need it. Go to ",(0,t.jsx)(n.a,{href:"/docs/concepts/archival/#running-in-production",children:"workflow archival"})," for how to configure archival in production"]}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"blobstore"}),(0,t.jsx)(n.td,{children:"This is also for archival history feature Default cadence server is using file based blob store implementation."}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"domainDefaults"}),(0,t.jsx)(n.td,{children:"default config for each domain. Right now only being used for Archival feature."}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dynamicconfig (previously known as dynamicConfigClient)"}),(0,t.jsxs)(n.td,{children:["Dynamic config is a config manager that enables you to change configs without restarting servers. It\u2019s a good way for Cadence to keep high availability and make things easy to configure. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"By default Cadence server uses ",(0,t.jsx)(n.code,{children:"filebased"})," client which allows you to override default configs using a YAML file. However, this approach can be cumbersome in production environment because it's the operator's responsibility to sync the YAML files across Cadence nodes. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Therefore, we provide another option, ",(0,t.jsx)(n.code,{children:"configstore"})," client, that stores config changes in the persistent data store for Cadence (e.g., Cassandra database) rather than the YAML file. This approach shifts the responsibility of syncing config changes from the operator to Cadence service. You can use Cadence CLI commands to list/get/update/restore config changes. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"You can also implement the dynamic config interface if you have a better way to manage configs."]}),(0,t.jsx)(n.td,{children:"Same as the sample development config"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"persistence"}),(0,t.jsxs)(n.td,{children:["Configuration for data store / persistence layer. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Values of DefaultStore VisibilityStore AdvancedVisibilityStore should be keys of map DataStores. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"DefaultStore is for core Cadence functionality. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"VisibilityStore is for basic visibility feature ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"AdvancedVisibilityStore is for advanced visibility",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," Go to ",(0,t.jsx)(n.a,{href:"/docs/concepts/search-workflows/#running-in-production",children:"advanced visibility"})," for detailed configuration of advanced visibility. See ",(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/master/docs/persistence.md",children:"persistence documentation"})," about using different database for Cadence"]}),(0,t.jsx)(n.td,{children:"As explanation"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"the-full-list-of-static-configuration",children:"The full list of static configuration"}),"\n",(0,t.jsx)(n.p,{children:"Starting from v0.21.0, all the static configuration are defined by GoDocs in details."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Version"}),(0,t.jsx)(n.th,{children:"GoDocs Link"}),(0,t.jsx)(n.th,{children:"Github Link"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.21.0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.21.0/common/config#Config",children:"Configuration Docs"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v0.21.0/common/config/config.go#L37",children:"Configuration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["...",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.21.0?tab=versions",children:"other higher versions"})]}),(0,t.jsx)(n.td,{children:"...Replace the version in the URL of v0.21.0"}),(0,t.jsx)(n.td,{children:"...Replace the version in the URL of v0.21.0"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"For earlier versions, you can find all the configurations similarly:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Version"}),(0,t.jsx)(n.th,{children:"GoDocs Link"}),(0,t.jsx)(n.th,{children:"Github Link"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.20.0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.20.0/common/service/config#Config",children:"Configuration Docs"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v0.20.0/common/service/config/config.go#L37",children:"Configuration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.19.2"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.19.2/common/service/config#Config",children:"Configuration Docs"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v0.19.2/common/service/config/config.go#L37",children:"Configuration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.18.2"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.18.2/common/service/config#Config",children:"Configuration Docs"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v0.18.2/common/service/config/config.go#L37",children:"Configuration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.17.0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.17.0/common/service/config#Config",children:"Configuration Docs"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v0.17.0/common/service/config/config.go#L37",children:"Configuration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["...",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.20.0?tab=versions",children:"other lower versions"})]}),(0,t.jsx)(n.td,{children:"...Replace the version in the URL of v0.20.0"}),(0,t.jsx)(n.td,{children:"...Replace the version in the URL of v0.20.0"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"dynamic-configuration",children:"Dynamic Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Dynamic configuration is for fine tuning a Cadence cluster."}),"\n",(0,t.jsx)(n.p,{children:"There are a lot more dynamic configurations than static configurations. Most of the default values are good for small clusters. As a cluster is scaled up, you may look for tuning it for the optimal performance."}),"\n",(0,t.jsxs)(n.p,{children:["Starting from v0.21.0 with this ",(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/pull/4156/files",children:"change"}),", all the dynamic configuration are well defined by GoDocs."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Version"}),(0,t.jsx)(n.th,{children:"GoDocs Link"}),(0,t.jsx)(n.th,{children:"Github Link"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.21.0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.21.0/common/dynamicconfig#Key",children:"Dynamic Configuration Docs"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v0.21.0/common/dynamicconfig/constants.go#L58",children:"Dynamic Configuration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["...",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.21.0?tab=versions",children:"other higher versions"})]}),(0,t.jsx)(n.td,{children:"...Replace the version in the URL of v0.21.0"}),(0,t.jsx)(n.td,{children:"...Replace the version in the URL of v0.21.0"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"For earlier versions, you can find all the configurations similarly:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Version"}),(0,t.jsx)(n.th,{children:"GoDocs Link"}),(0,t.jsx)(n.th,{children:"Github Link"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.20.0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.20.0/common/service/dynamicconfig#Key",children:"Dynamic Configuration Docs"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v0.20.0/common/service/dynamicconfig/constants.go#L53",children:"Dynamic Configuration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.19.2"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.19.2/common/service/dynamicconfig#Key",children:"Dynamic Configuration Docs"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v0.19.2/common/service/dynamicconfig/constants.go#L53",children:"Dynamic Configuration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.18.2"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.18.2/common/service/dynamicconfig#Key",children:"Dynamic Configuration Docs"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v0.18.2/common/service/dynamicconfig/constants.go#L53",children:"Dynamic Configuration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.17.0"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.17.0/common/service/dynamicconfig#Key",children:"Dynamic Configuration Docs"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/v0.17.0/common/service/dynamicconfig/constants.go#L53",children:"Dynamic Configuration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["...",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.20.0?tab=versions",children:"other lower versions"})]}),(0,t.jsx)(n.td,{children:"...Replace the version in the URL of v0.20.0"}),(0,t.jsx)(n.td,{children:"...Replace the version in the URL of v0.20.0"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:['However, the GoDocs in earlier versions don\'t contain detailed information. You need to look it up the newer version of GoDocs.\nFor example, search for "EnableGlobalDomain" in Dynamic Configuration ',(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/blob/667b7c68e67682a8d23f4b8f93e91a791313d8d6/common/dynamicconfig/constants.go",children:"Comments in v0.21.0"})," or ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/cadence-workflow/cadence@v0.21.0/common/dynamicconfig#Key",children:"Docs of v0.21.0"}),", as the usage of DynamicConfiguration never changes."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"KeyName"})," is the key that you will use in the dynamicconfig yaml content"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default value"})," is the default value"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Value type"})," indicates the type that you should change the yaml value of:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Int should be integer like 123"}),"\n",(0,t.jsx)(n.li,{children:"Float should be number like 123.4"}),"\n",(0,t.jsx)(n.li,{children:"Duration should be Golang duration like: 10s, 2m, 5h for 10 seconds, 2 minutes and 5 hours."}),"\n",(0,t.jsx)(n.li,{children:"Bool should be true or false"}),"\n",(0,t.jsx)(n.li,{children:"Map should be map of yaml"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Allowed filters"})," indicates what kinds of filters you can set as constraints with the dynamic configuration.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DomainName"})," can be used with ",(0,t.jsx)(n.code,{children:"domainName"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"N/A"})," means no filters can be set. The config will be global."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example, if you want to change the ratelimiting for List API, below is the config:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-clike",children:"// FrontendVisibilityListMaxQPS is max qps frontend can list open/close workflows\n// KeyName: frontend.visibilityListMaxQPS\n// Value type: Int\n// Default value: 10\n// Allowed filters: DomainName\nFrontendVisibilityListMaxQPS\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then you can add the config like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'frontend.visibilityListMaxQPS:\n  - value: 1000\n  constraints:\n    domainName: "domainA"\n  - value: 2000\n  constraints:\n    domainName: "domainB"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You will expect to see ",(0,t.jsx)(n.code,{children:"domainA"})," will be able to perform 1K List operation per second, while ",(0,t.jsx)(n.code,{children:"domainB"})," can perform 2K per second."]}),"\n",(0,t.jsx)(n.p,{children:"NOTE 1: the size related configuration numbers are based on byte."}),"\n",(0,t.jsxs)(n.p,{children:["NOTE 2: for ",(0,t.jsx)(n.code,{children:"<frontend,history,matching>.persistenceMaxQPS"})," versus ",(0,t.jsx)(n.code,{children:"<frontend,history,matching>.persistenceGlobalMaxQPS"})," ---  persistenceMaxQPS is local for single node while persistenceGlobalMaxQPS is global for all node. persistenceGlobalMaxQPS is preferred if set as greater than zero. But by default it is zero so persistenceMaxQPS is being used."]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-update-dynamic-configuration",children:"How to update Dynamic Configuration"}),"\n",(0,t.jsx)(n.h4,{id:"file-based-client",children:"File-based client"}),"\n",(0,t.jsx)(n.p,{children:"By default, Cadence uses file-based client to manage dynamic configurations. Following are the approaches to changing dynamic configs using a yaml file."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Local docker-compose by mounting volume: 1. Change the dynamic configs in ",(0,t.jsx)(n.code,{children:"cadence/config/dynamicconfig/development.yaml"}),". 2. Update the ",(0,t.jsx)(n.code,{children:"cadence"})," section in the docker compose file and mount ",(0,t.jsx)(n.code,{children:"dynamicconfig"})," folder to host machine like the following:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'cadence:\n  image: ubercadence/server:master-auto-setup\n  ports:\n    # ...(don\'t change anything here)\n  environment:\n    # ...(don\'t change anything here)\n    - "DYNAMIC_CONFIG_FILE_PATH=/etc/custom-dynamicconfig/development.yaml"\n  volumes:\n    - "/Users/<?>/cadence/config/dynamicconfig:/etc/custom-dynamicconfig"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Local docker-compose by logging into the container: run ",(0,t.jsx)(n.code,{children:"docker exec -it docker_cadence_1 /bin/bash"})," to login your container. Then ",(0,t.jsx)(n.code,{children:"vi config/dynamicconfig/development.yaml"})," to make any change. After you changed the config, use ",(0,t.jsx)(n.code,{children:"docker restart docker_cadence_1"})," to restart the cadence instance. Note that you can also use this approach to change static config, but it must be changed through ",(0,t.jsx)(n.code,{children:"config/config_template.yaml"})," instead of ",(0,t.jsx)(n.code,{children:"config/docker.yaml"})," because ",(0,t.jsx)(n.code,{children:"config/docker.yaml"})," is generated on startup."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In production cluster: Follow this example of Helm Chart to deploy Cadence, update dynamic config ",(0,t.jsx)(n.a,{href:"https://github.com/banzaicloud/banzai-charts/blob/be57e81c107fd2ccdfc6cf95dccf6cbab226920c/cadence/templates/server-configmap.yaml#L170",children:"here"})," and restart the cluster."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["DEBUG: How to make sure your updates on dynamicconfig is loaded? for example, if you added the following to ",(0,t.jsx)(n.code,{children:"development.yaml"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"frontend.visibilityListMaxQPS:\n  - value: 10000\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After restarting Cadence instances, execute a command like this to let Cadence load the config(it's lazy loading when using it).\n",(0,t.jsx)(n.code,{children:"cadence --domain <> workflow list"})]}),"\n",(0,t.jsx)(n.p,{children:"Then you should see the logs like below"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-log",children:'cadence_1        | {"level":"info","ts":"2021-05-07T18:43:07.869Z","msg":"First loading dynamic config","service":"cadence-frontend","key":"frontend.visibilityListMaxQPS,domainName:sample,clusterName:primary","value":"10000","default-value":"10","logging-call-at":"config.go:93"}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"config-store-client",children:"Config store client"}),"\n",(0,t.jsxs)(n.p,{children:["You can set the ",(0,t.jsx)(n.code,{children:"dynamicconfig"})," client in the static configuration to ",(0,t.jsx)(n.code,{children:"configstore"})," in order to store config changes in a database, as shown below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'dynamicconfig:\n  client: configstore\n  configstore:\n    pollInterval: "10s"\n    updateRetryAttempts: 2\n    FetchTimeout: "2s"\n    UpdateTimeout: "2s"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you are still using the deprecated config ",(0,t.jsx)(n.code,{children:"dynamicConfigClient"})," like below, you need to replace it with the new ",(0,t.jsx)(n.code,{children:"dynamicconfig"})," as shown above to use ",(0,t.jsx)(n.code,{children:"configstore"})," client."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'dynamicConfigClient:\n  filepath: "/etc/cadence/config/dynamicconfig/config.yaml"\n  pollInterval: "10s"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["After changing the client to ",(0,t.jsx)(n.code,{children:"configstore"})," and restarting Cadence, you can manage dynamic configs using ",(0,t.jsx)(n.code,{children:"cadence admin config"})," CLI commands. You may need to set your custom dynamic configs again as the previous configs are not automatically migrated from the YAML file to the database."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cadence admin config listdc"})," lists all dynamic config overrides"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cadence admin config getdc --dynamic_config_name <dynamic config keyname>"})," gets the value of a specific dynamic config"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cadence admin config updc --dynamic_config_name <dynamic config keyname> --dynamic_config_value '{\"Value\": <new value>}'"})," updates the value of a specific dynamic config"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cadence admin config resdc --dynamic_config_name <dynamic config keyname>"})," restores a specific dynamic config to its default value"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"other-advanced-features",children:"Other Advanced Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"/docs/concepts/search-workflows/#running-in-production",children:"advanced visibility"})," for how to configure advanced visibility in production."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"/docs/concepts/archival/#running-in-production",children:"workflow archival"})," for how to configure archival in production."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"/docs/concepts/cross-dc-replication/#running-in-production",children:"cross dc replication"})," for how to configure replication in production."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deployment--release",children:"Deployment & Release"}),"\n",(0,t.jsxs)(n.p,{children:["Kubernetes is the most popular way to deploy Cadence cluster. And easiest way is to use ",(0,t.jsx)(n.a,{href:"https://github.com/banzaicloud/banzai-charts/tree/master/cadence",children:"Cadence Helm Charts"})," that maintained by a community project."]}),"\n",(0,t.jsxs)(n.p,{children:["If you are looking for deploying Cadence using other technologies, then it's reccomended to use Cadence docker images. You can use offical ones, or you may customize it based on what you need. See ",(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/tree/master/docker#using-docker-image-for-production",children:"Cadence docker package"})," for how to run the images."]}),"\n",(0,t.jsxs)(n.p,{children:["It's always recommended to use the latest release. See ",(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/releases",children:"Cadence release pages"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Please subscribe the release of project by :"}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence",children:"https://github.com/cadence-workflow/cadence"}),' -> Click the right top "Watch" button -> Custom -> "Release".']}),"\n",(0,t.jsxs)(n.p,{children:["And see ",(0,t.jsx)(n.a,{href:"/docs/operation-guide/maintain/#upgrading-server",children:"how to upgrade a Cadence cluster"})]}),"\n",(0,t.jsx)(n.h2,{id:"stressbench-test-a-cluster",children:"Stress/Bench Test a cluster"}),"\n",(0,t.jsxs)(n.p,{children:["It's recommended to run bench test on your cluster following this ",(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/tree/master/bench",children:"package"})," to see the maximum throughput that it can take, whenever you change some setup."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var o=i(6540);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);