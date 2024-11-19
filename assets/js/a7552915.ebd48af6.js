"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[9520],{1735:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>s});const n=JSON.parse('{"id":"java-client/implementing-activities","title":"Implementing activities","description":"Activityactivityactivity implementation","source":"@site/docs/04-java-client/06-implementing-activities.md","sourceDirName":"04-java-client","slug":"/java-client/implementing-activities","permalink":"/Cadence-Docs/docs/java-client/implementing-activities","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/04-java-client/06-implementing-activities.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"layout":"default","title":"Implementing activities","permalink":"/docs/java-client/implementing-activities"}}');var a=i(4848),o=i(8453);const c={layout:"default",title:"Implementing activities",permalink:"/docs/java-client/implementing-activities"},l="Implementing activities",r={},s=[{value:"Accessing Activity Info",id:"accessing-activity-info",level:2},{value:"Asynchronous Activity Completion",id:"asynchronous-activity-completion",level:2},{value:"Activity Heart Beating",id:"activity-heart-beating",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"implementing-activities",children:"Implementing activities"})}),"\n",(0,a.jsxs)(t.p,{children:[":activity:Activity: implementation is an implementation of an :activity: interface. A single instance of the :activity:activities: implementation\nis shared across multiple simultaneous :activity: invocations. Therefore, the :activity: implementation code must be ",(0,a.jsx)(t.em,{children:"thread safe"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The values passed to :activity:activities: through invocation parameters or returned through a result value are recorded in the execution history.\nThe entire execution history is transferred from the Cadence service to :workflow_worker:workflow_workers: when a :workflow: state needs to recover.\nA large execution history can thus adversely impact the performance of your :workflow:. Therefore, be mindful of the amount of data you transfer via :activity: invocation parameters or return values. Otherwise, no additional limitations exist on :activity: implementations."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"public class FileProcessingActivitiesImpl implements FileProcessingActivities {\n\n    private final AmazonS3 s3Client;\n\n    private final String localDirectory;\n\n    void upload(String bucketName, String localName, String targetName) {\n        File f = new File(localName);\n        s3Client.putObject(bucket, remoteName, f);\n    }\n\n    String download(String bucketName, String remoteName, String localName) {\n        // Implementation omitted for brevity.\n        return downloadFileFromS3(bucketName, remoteName, localDirectory + localName);\n    }\n\n    String processFile(String localName) {\n        // Implementation omitted for brevity.\n        return compressFile(localName);\n    }\n\n    void deleteLocalFile(String fileName) {\n        File f = new File(localDirectory + fileName);\n        f.delete();\n    }\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"accessing-activity-info",children:"Accessing Activity Info"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.4.1/index.html?com/cadence-workflow/cadence/activity/Activity.html",children:"Activity"}),"\nclass provides static getters to access information about the :workflow: that invoked it. Note that this information is stored in a thread local variable. Therefore, calls to :activity:Activity: accessors succeed only in the thread that invoked the :activity: function."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'public class FileProcessingActivitiesImpl implements FileProcessingActivities {\n\n    @Override\n    public String download(String bucketName, String remoteName, String localName) {\n        log.info("domain=" +  Activity.getDomain());\n        WorkflowExecution execution = Activity.getWorkflowExecution();\n        log.info("workflowId=" + execution.getWorkflowId());\n        log.info("runId=" + execution.getRunId());\n        ActivityTask activityTask = Activity.getTask();\n        log.info("activityId=" + activityTask.getActivityId());\n        log.info("activityTimeout=" + activityTask.getStartToCloseTimeoutSeconds());\n        return downloadFileFromS3(bucketName, remoteName, localDirectory + localName);\n    }\n    ...\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"asynchronous-activity-completion",children:"Asynchronous Activity Completion"}),"\n",(0,a.jsx)(t.p,{children:"Sometimes an :activity: lifecycle goes beyond a synchronous method invocation. For example, a request can be put in a queue\nand later a reply comes and is picked up by a different :worker: process. The whole request-reply interaction can be modeled\nas a single Cadence :activity:."}),"\n",(0,a.jsxs)(t.p,{children:["To indicate that an :activity: should not be completed upon its method return, call ",(0,a.jsx)(t.code,{children:"Activity.doNotCompleteOnReturn()"})," from the\noriginal :activity: thread. Then later, when replies come, complete the :activity: using ",(0,a.jsx)(t.a,{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.4.1/index.html?com/cadence-workflow/cadence/client/ActivityCompletionClient.html",children:"ActivityCompletionClient"}),".\nTo correlate :activity: invocation with completion, use either ",(0,a.jsx)(t.code,{children:"TaskToken"})," or :workflow: and :activity: IDs."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'public class FileProcessingActivitiesImpl implements FileProcessingActivities {\n\n    public String download(String bucketName, String remoteName, String localName) {\n        byte[] taskToken = Activity.getTaskToken(); // Used to correlate reply.\n        asyncDownloadFileFromS3(taskToken, bucketName, remoteName, localDirectory + localName);\n        Activity.doNotCompleteOnReturn();\n        return "ignored"; // Return value is ignored when doNotCompleteOnReturn was called.\n    }\n    ...\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"When the download is complete, the download service potentially calls back from a different process:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"public <R> void completeActivity(byte[] taskToken, R result) {\n    completionClient.complete(taskToken, result);\n}\n\npublic void failActivity(byte[] taskToken, Exception failure) {\n    completionClient.completeExceptionally(taskToken, failure);\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"activity-heart-beating",children:"Activity Heart Beating"}),"\n",(0,a.jsxs)(t.p,{children:["Some :activity:activities: are long running. To react to a crash quickly, use a heartbeat mechanism.\nThe ",(0,a.jsx)(t.code,{children:"Activity.heartbeat"})," function lets the Cadence service know that the :activity: is still alive. You can piggyback\n",(0,a.jsx)(t.code,{children:"details"})," on an :activity: heartbeat. If an :activity: times out, the last value of ",(0,a.jsx)(t.code,{children:"details"})," is included\nin the ",(0,a.jsx)(t.code,{children:"ActivityTimeoutException"})," delivered to a :workflow:. Then the :workflow: can pass the details to\nthe next :activity: invocation. This acts as a periodic checkpoint mechanism for the progress of an :activity:."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"public class FileProcessingActivitiesImpl implements FileProcessingActivities {\n\n    @Override\n    public String download(String bucketName, String remoteName, String localName) {\n        InputStream inputStream = openInputStream(file);\n        try {\n            byte[] bytes = new byte[MAX_BUFFER_SIZE];\n            while ((read = inputStream.read(bytes)) != -1) {\n                totalRead += read;\n                f.write(bytes, 0, read);\n                /*\n                 * Let the service know about the download progress.\n                 */\n                Activity.heartbeat(totalRead);\n            }\n        } finally {\n            inputStream.close();\n        }\n    }\n    ...\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>l});var n=i(6540);const a={},o=n.createContext(a);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);