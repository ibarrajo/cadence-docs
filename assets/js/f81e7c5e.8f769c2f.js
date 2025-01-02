"use strict";(self.webpackChunkcadence=self.webpackChunkcadence||[]).push([[5351],{9540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"go-client/workflow-testing","title":"Testing","description":"The Cadence Go client library provides a test framework to facilitate testing implementations.","source":"@site/docs/05-go-client/13-workflow-testing.md","sourceDirName":"05-go-client","slug":"/go-client/workflow-testing","permalink":"/ibarrajo/cadence-docs/docs/go-client/workflow-testing","draft":false,"unlisted":false,"editUrl":"https://github.com/cadence-workflow/Cadence-Docs/tree/master/docs/05-go-client/13-workflow-testing.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"layout":"default","title":"Testing","permalink":"/docs/go-client/workflow-testing"},"sidebar":"docsSidebar","previous":{"title":"Async activity completion","permalink":"/ibarrajo/cadence-docs/docs/go-client/activity-async-completion"},"next":{"title":"Versioning","permalink":"/ibarrajo/cadence-docs/docs/go-client/workflow-versioning"}}');var s=n(4848),o=n(8453);const r={layout:"default",title:"Testing",permalink:"/docs/go-client/workflow-testing"},l="Testing",c={},a=[{value:"Setup",id:"setup",level:2},{value:"A Simple Test",id:"a-simple-test",level:2},{value:"Activity mocking and overriding",id:"activity-mocking-and-overriding",level:2},{value:"Testing signals",id:"testing-signals",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"testing",children:"Testing"})}),"\n",(0,s.jsx)(t.p,{children:"The Cadence Go client library provides a test framework to facilitate testing workflow implementations.\nThe framework is suited for implementing unit tests as well as functional tests of the workflow logic."}),"\n",(0,s.jsxs)(t.p,{children:["The following code implements unit tests for the ",(0,s.jsx)(t.code,{children:"SimpleWorkflow"})," sample:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package sample\n\nimport (\n    "errors"\n    "testing"\n\n    "github.com/stretchr/testify/mock"\n    "github.com/stretchr/testify/suite"\n\n    "go.uber.org/cadence"\n    "go.uber.org/cadence/testsuite"\n)\n\ntype UnitTestSuite struct {\n    suite.Suite\n    testsuite.WorkflowTestSuite\n\n    env *testsuite.TestWorkflowEnvironment\n}\n\nfunc (s *UnitTestSuite) SetupTest() {\n    s.env = s.NewTestWorkflowEnvironment()\n}\n\nfunc (s *UnitTestSuite) AfterTest(suiteName, testName string) {\n    s.env.AssertExpectations(s.T())\n}\n\nfunc (s *UnitTestSuite) Test_SimpleWorkflow_Success() {\n    s.env.ExecuteWorkflow(SimpleWorkflow, "test_success")\n\n    s.True(s.env.IsWorkflowCompleted())\n    s.NoError(s.env.GetWorkflowError())\n}\n\nfunc (s *UnitTestSuite) Test_SimpleWorkflow_ActivityParamCorrect() {\n    s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(\n        func(ctx context.Context, value string) (string, error) {\n            s.Equal("test_success", value)\n            return value, nil\n        }\n    )\n    s.env.ExecuteWorkflow(SimpleWorkflow, "test_success")\n\n    s.True(s.env.IsWorkflowCompleted())\n    s.NoError(s.env.GetWorkflowError())\n}\n\nfunc (s *UnitTestSuite) Test_SimpleWorkflow_ActivityFails() {\n    s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(\n        "", errors.New("SimpleActivityFailure"))\n    s.env.ExecuteWorkflow(SimpleWorkflow, "test_failure")\n\n    s.True(s.env.IsWorkflowCompleted())\n\n    s.NotNil(s.env.GetWorkflowError())\n    s.True(cadence.IsGenericError(s.env.GetWorkflowError()))\n    s.Equal("SimpleActivityFailure", s.env.GetWorkflowError().Error())\n}\n\nfunc TestUnitTestSuite(t *testing.T) {\n    suite.Run(t, new(UnitTestSuite))\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(t.p,{children:['To run unit tests, we first define a "test suite" struct that absorbs both the\nbasic suite functionality from ',(0,s.jsx)(t.a,{href:"https://godoc.org/github.com/stretchr/testify/suite",children:"testify"}),"\nvia ",(0,s.jsx)(t.code,{children:"suite.Suite"})," and the suite functionality from the Cadence test framework via\n",(0,s.jsx)(t.code,{children:"cadence.WorkflowTestSuite"}),". Because every test in this test suite will test our workflow, we\nadd a property to our struct to hold an instance of the test environment. This allows us to initialize\nthe test environment in a setup method. For testing workflows, we use a ",(0,s.jsx)(t.code,{children:"cadence.TestWorkflowEnvironment"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Next, we implement a ",(0,s.jsx)(t.code,{children:"SetupTest"})," method to setup a new test environment before each test. Doing so\nensures that each test runs in its own isolated sandbox. We also implement an ",(0,s.jsx)(t.code,{children:"AfterTest"})," function\nwhere we assert that all mocks we set up were indeed called by invoking ",(0,s.jsx)(t.code,{children:"s.env.AssertExpectations(s.T())"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:['Finally, we create a regular test function recognized by "go test" and pass the struct to ',(0,s.jsx)(t.code,{children:"suite.Run"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"a-simple-test",children:"A Simple Test"}),"\n",(0,s.jsx)(t.p,{children:"The most simple test case we can write is to have the test environment execute the workflow and then\nevaluate the results."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'func (s *UnitTestSuite) Test_SimpleWorkflow_Success() {\n    s.env.ExecuteWorkflow(SimpleWorkflow, "test_success")\n\n    s.True(s.env.IsWorkflowCompleted())\n    s.NoError(s.env.GetWorkflowError())\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Calling ",(0,s.jsx)(t.code,{children:"s.env.ExecuteWorkflow(...)"})," executes the workflow logic and any invoked activities inside the\ntest process. The first parameter of ",(0,s.jsx)(t.code,{children:"s.env.ExecuteWorkflow(...)"})," contains the workflow functions,\nand any subsequent parameters contain values for custom input parameters declared by the workflow\nfunction."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Note that unless the activity invocations are mocked or activity implementation\nreplaced (see ",(0,s.jsx)(t.a,{href:"#activity-mocking-and-overriding",children:"Activity mocking and overriding"}),"), the test environment\nwill execute the actual activity code including any calls to outside services."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["After executing the workflow in the above example, we assert that the workflow ran through completion\nvia the call to ",(0,s.jsx)(t.code,{children:"s.env.IsWorkflowComplete()"}),". We also assert that no errors were returned by asserting\non the return value of ",(0,s.jsx)(t.code,{children:"s.env.GetWorkflowError()"}),". If our workflow returned a value, we could have\nretrieved that value via a call to ",(0,s.jsx)(t.code,{children:"s.env.GetWorkflowResult(&value)"})," and had additional asserts on that\nvalue."]}),"\n",(0,s.jsx)(t.h2,{id:"activity-mocking-and-overriding",children:"Activity mocking and overriding"}),"\n",(0,s.jsx)(t.p,{children:"When running unit tests on workflows, we want to test the workflow logic in isolation. Additionally,\nwe want to inject activity errors during our test runs. The test framework provides two mechanisms\nthat support these scenarios: activity mocking and activity overriding. Both of these mechanisms allow\nyou to change the behavior of activities invoked by your workflow without the need to modify the actual\nworkflow code."}),"\n",(0,s.jsx)(t.p,{children:'Let\'s take a look at a test that simulates a test that fails via the "activity mocking" mechanism.'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'func (s *UnitTestSuite) Test_SimpleWorkflow_ActivityFails() {\n    s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(\n        "", errors.New("SimpleActivityFailure"))\n    s.env.ExecuteWorkflow(SimpleWorkflow, "test_failure")\n\n    s.True(s.env.IsWorkflowCompleted())\n\n    s.NotNil(s.env.GetWorkflowError())\n    _, ok := s.env.GetWorkflowError().(*cadence.GenericError)\n    s.True(ok)\n    s.Equal("SimpleActivityFailure", s.env.GetWorkflowError().Error())\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This test simulates the execution of the activity ",(0,s.jsx)(t.code,{children:"SimpleActivity"})," that is invoked by our workflow\n",(0,s.jsx)(t.code,{children:"SimpleWorkflow"})," returning an error. We accomplish this by setting up a mock on the test environment\nfor the ",(0,s.jsx)(t.code,{children:"SimpleActivity"})," that returns an error."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(\n    "", errors.New("SimpleActivityFailure"))\n'})}),"\n",(0,s.jsx)(t.p,{children:"With the mock set up we can now execute the workflow via the s.env.ExecuteWorkflow(...) method and\nassert that the workflow completed successfully and returned the expected error."}),"\n",(0,s.jsx)(t.p,{children:"Simply mocking the execution to return a desired value or error is a pretty powerful mechanism to\nisolate workflow logic. However, sometimes we want to replace the activity with an alternate implementation\nto support a more complex test scenario. Let's assume we want to validate that the activity gets called\nwith the correct parameters."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'func (s *UnitTestSuite) Test_SimpleWorkflow_ActivityParamCorrect() {\n    s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(\n        func(ctx context.Context, value string) (string, error) {\n            s.Equal("test_success", value)\n            return value, nil\n        }\n    )\n    s.env.ExecuteWorkflow(SimpleWorkflow, "test_success")\n\n    s.True(s.env.IsWorkflowCompleted())\n    s.NoError(s.env.GetWorkflowError())\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In this example, we provide a function implementation as the parameter to ",(0,s.jsx)(t.code,{children:"Return"}),". This allows us to\nprovide an alternate implementation for the activity ",(0,s.jsx)(t.code,{children:"SimpleActivity"}),". The framework will execute this\nfunction whenever the activity is invoked and pass on the return value from the function as the result\nof the activity invocation. Additionally, the framework will validate that the signature of the \u201cmock\u201d\nfunction matches the signature of the original activity function."]}),"\n",(0,s.jsx)(t.p,{children:"Since this can be an entire function, there is no limitation as to what we can do here. In this\nexample, we assert that the \u201cvalue\u201d param has the same content as the value param we passed to the workflow."}),"\n",(0,s.jsx)(t.h2,{id:"testing-signals",children:"Testing signals"}),"\n",(0,s.jsxs)(t.p,{children:["To test signals we can use the functions ",(0,s.jsx)(t.code,{children:"s.env.SignalWorkflow"}),", and ",(0,s.jsx)(t.code,{children:"s.env.SignalWorkflowByID"}),". These\nfunctions needs to be called inside ",(0,s.jsx)(t.code,{children:"s.env.RegisterDelayedCallback"}),", as the signal should be send while the\nworkflow is running. It is important to register the signal before calling ",(0,s.jsx)(t.code,{children:"s.env.ExecuteWorkflow"}),", otherwise\nthe signal will not be send."]}),"\n",(0,s.jsxs)(t.p,{children:["If our workflow is waiting for a signal with name ",(0,s.jsx)(t.code,{children:"signalName"})," we can register\nto send this signal ",(0,s.jsx)(t.em,{children:"before"})," the workflow is executed like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'func (s *UnitTestSuite) Test_SimpleWorkflow_Signal() {\n    // Send the signal\n\ts.env.RegisterDelayedCallback(func() {\n\t\ts.env.SignalWorkflow(signalName, signalData)\n\t}, time.Minute*10)\n\n    // Execute the workflow\n    s.env.ExecuteWorkflow(SimpleWorkflow, "test_success")\n\n    s.True(s.env.IsWorkflowCompleted())\n    s.NoError(s.env.GetWorkflowError())\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Note that the ",(0,s.jsx)(t.code,{children:"s.env.RegisterDelayedCallback"})," function does not actually wait 10 minutes in the unit test\ninstead the cadence test framework uses an internal clock which knows which event is the next, and executes it\nimmediately."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);