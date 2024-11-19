"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[8363],{84:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"get-started/server-installation","title":"Server Installation","description":"To get started with Cadence, you need to set up three components successfully.","source":"@site/docs/01-get-started/01-server-installation.md","sourceDirName":"01-get-started","slug":"/get-started/server-installation","permalink":"/cadence-docs/docs/get-started/server-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/01-get-started/01-server-installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"layout":"default","title":"Server Installation","permalink":"/docs/get-started/installation"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/cadence-docs/docs/get-started/"},"next":{"title":"Java hello world","permalink":"/cadence-docs/docs/get-started/java-hello-world"}}');var t=s(4848),o=s(8453);const a={layout:"default",title:"Server Installation",permalink:"/docs/get-started/installation"},c="Install Cadence Service Locally",i={},l=[{value:"0. Prerequisite - Install docker",id:"0-prerequisite---install-docker",level:2},{value:"1. Run Cadence Server Using Docker Compose",id:"1-run-cadence-server-using-docker-compose",level:2},{value:"2. Register a Domain Using the CLI",id:"2-register-a-domain-using-the-cli",level:2},{value:"What&#39;s Next",id:"whats-next",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"install-cadence-service-locally",children:"Install Cadence Service Locally"})}),"\n",(0,t.jsx)(n.p,{children:"To get started with Cadence, you need to set up three components successfully."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A Cadence server hosting dependencies that Cadence relies on such as Cassandra, Elastic Search, etc"}),"\n",(0,t.jsx)(n.li,{children:"A Cadence domain for you workflow application"}),"\n",(0,t.jsx)(n.li,{children:"A Cadence worker service hosting your workflows"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"0-prerequisite---install-docker",children:"0. Prerequisite - Install docker"}),"\n",(0,t.jsxs)(n.p,{children:["Follow the Docker installation instructions found here: ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/installation/",children:"https://docs.docker.com/engine/installation/"})]}),"\n",(0,t.jsx)(n.h2,{id:"1-run-cadence-server-using-docker-compose",children:"1. Run Cadence Server Using Docker Compose"}),"\n",(0,t.jsx)(n.p,{children:"Download the Cadence docker-compose file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ncurl -O https://raw.githubusercontent.com/cadence-workflow/cadence/master/docker/docker-compose.yml && curl -O https://raw.githubusercontent.com/cadence-workflow/cadence/master/docker/prometheus/prometheus.yml\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then start Cadence Service by running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker-compose up\n"})}),"\n",(0,t.jsx)(n.p,{children:"Please keep this process running at background."}),"\n",(0,t.jsx)(n.h2,{id:"2-register-a-domain-using-the-cli",children:"2. Register a Domain Using the CLI"}),"\n",(0,t.jsxs)(n.p,{children:["In a new terminal, create a new domain called ",(0,t.jsx)(n.code,{children:"test-domain"})," (or choose whatever name you like) by running:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run --network=host --rm ubercadence/cli:master --do test-domain domain register -rd 1\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check that the domain is indeed registered:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"> docker run --network=host --rm ubercadence/cli:master --do test-domain domain describe\nName: test-domain\nDescription:\nOwnerEmail:\nDomainData: map[]\nStatus: REGISTERED\nRetentionInDays: 1\nEmitMetrics: false\nActiveClusterName: active\nClusters: active\nArchivalStatus: DISABLED\nBad binaries to reset:\n+-----------------+----------+------------+--------+\n| BINARY CHECKSUM | OPERATOR | START TIME | REASON |\n+-----------------+----------+------------+--------+\n+-----------------+----------+------------+--------+\n>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Please remember the domains you created because they will be used in your worker implementation and Cadence CLI  commands."}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,t.jsx)(n.p,{children:"So far you've successfully finished two prerequisites to your Cadence application. The next steps are to implement a simple worker service that hosts your workflows and to run your very first hello world Cadence workflow."}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"/docs/get-started/java-hello-world",children:"Java HelloWorld"})," or ",(0,t.jsx)(n.a,{href:"/docs/get-started/golang-hello-world",children:"Golang HelloWorld"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.p,{children:["There can be various reasons that ",(0,t.jsx)(n.code,{children:"docker-compose up"})," cannot succeed:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In case of the image being too old, update the docker image by ",(0,t.jsx)(n.code,{children:"docker pull ubercadence/server:master-auto-setup"})," and retry"]}),"\n",(0,t.jsxs)(n.li,{children:["In case of the local docker env is messed up: ",(0,t.jsx)(n.code,{children:"docker system prune --all"})," and retry (see ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/config/pruning/",children:"details about it"})," )"]}),"\n",(0,t.jsxs)(n.li,{children:["See logs of different container:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If Cassandra is not able to get up: ",(0,t.jsx)(n.code,{children:"docker logs -f docker_cassandra_1"})]}),"\n",(0,t.jsxs)(n.li,{children:["If Cadence is not able to get up: ",(0,t.jsx)(n.code,{children:"docker logs -f docker_cadence_1"})]}),"\n",(0,t.jsxs)(n.li,{children:["If Cadence Web is not able to get up: ",(0,t.jsx)(n.code,{children:"docker logs -f docker_cadence-web_1"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If the above is still not working, ",(0,t.jsx)(n.a,{href:"https://github.com/cadence-workflow/cadence/issues/new/choose",children:"open an issue in Server(main) repo"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var r=s(6540);const t={},o=r.createContext(t);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);