---
layout: default
title: Activity overview
permalink: /docs/go-client/activities
---

# Activity overview

An :activity: is the implementation of a particular :task: in the business logic.

:activity:Activities: are implemented as functions. Data can be passed directly to an :activity: via function
parameters. The parameters can be either basic types or structs, with the only requirement being that
the parameters must be serializable. Though it is not required, we recommend that the first parameter
of an :activity: function is of type `context.Context`, in order to allow the :activity: to interact with
other framework methods. The function must return an `error` value, and can optionally return a result
value. The result value can be either a basic type or a struct with the only requirement being that
it is serializable.

The values passed to :activity:activities: through invocation parameters or returned through the result value
are recorded in the execution history. The entire execution history is transferred from the Cadence
service to :workflow_worker:workflow_workers: with every :event: that the :workflow: logic needs to process. A large execution
history can thus adversely impact the performance of your :workflow:. Therefore, be mindful of the amount
of data you transfer via :activity: invocation parameters or return values. Otherwise, no additional
limitations exist on :activity: implementations.

## Overview

The following example demonstrates a simple :activity: that accepts a string parameter, appends a word
to it, and then returns a result.

```go
package simple

import (
    "context"

    "go.uber.org/cadence/activity"
    "go.uber.org/zap"
)

func init() {
    activity.Register(SimpleActivity)
}

// SimpleActivity is a sample Cadence activity function that takes one parameter and
// returns a string containing the parameter value.
func SimpleActivity(ctx context.Context, value string) (string, error) {
    activity.GetLogger(ctx).Info("SimpleActivity called.", zap.String("Value", value))
    return "Processed: " + value, nil
}
```
Let's take a look at each component of this activity.

### Declaration

In the Cadence programing model, an :activity: is implemented with a function. The function declaration specifies the parameters the :activity: accepts as well as any values it might return. An :activity: function can take zero or many :activity: specific parameters and can return one or two values. It must always at least return an error value. The :activity: function can accept as parameters and return as results any serializable type.

`func SimpleActivity(ctx context.Context, value string) (string, error)`

The first parameter to the function is context.Context. This is an optional parameter and can be omitted. This parameter is the standard Go context.
The second string parameter is a custom :activity: specific parameter that can be used to pass data into the :activity: on start. An :activity: can have one or more such parameters. All parameters to an :activity: function must be serializable, which essentially means that params can’t be channels, functions, variadic, or unsafe pointers.
The :activity: declares two return values: string and error. The string return value is used to return the result of the :activity:. The error return value is used to indicate that an error was encountered during execution.

### Implementation

You can write :activity: implementation code in the same way that you would any other Go service code.
Additionally, you can use the usual loggers and metrics controllers, and the standard Go concurrency
constructs.

#### Heart Beating

For long-running :activity:activities:, Cadence provides an API for the :activity: code to report both liveness and
progress back to the Cadence managed service.

```go
progress := 0
for hasWork {
    // Send heartbeat message to the server.
    cadence.RecordActivityHeartbeat(ctx, progress)
    // Do some work.
    ...
    progress++
}
```
When an :activity: times out due to a missed heartbeat, the last value of the details (`progress` in the
above sample) is returned from the `cadence.ExecuteActivity` function as the details field of `TimeoutError`
with `TimeoutType_HEARTBEAT`.

New **auto heartbeat** option in [Cadence Go Client 0.17.0 release](https://github.com/cadence-workflow/cadence-go-client/releases/tag/v0.17.0):
In case you don't need to report progress, but still want to report liveness of your worker through heartbeating for your long running activities, there's a new auto-heartbeat option that you can enable when you register your activity. When this option is enabled Cadence library will do the heartbeat for you in the background.

```go
	RegisterActivityOptions struct {
		...
		// Automatically send heartbeats for this activity at an interval that is less than the HeartbeatTimeout.
		// This option has no effect if the activity is executed with a HeartbeatTimeout of 0.
		// Default: false
		EnableAutoHeartbeat bool
	}
```

You can also heartbeat an :activity: from an external source:

```go
// Instantiate a Cadence service client.
cadence.Client client = cadence.NewClient(...)

// Record heartbeat.
err := client.RecordActivityHeartbeat(taskToken, details)
```
The parameters of the `RecordActivityHeartbeat` function are:

* `taskToken`: The value of the binary `TaskToken` field of the `ActivityInfo` struct retrieved inside
the :activity:.
* `details`: The serializable payload containing progress information.

#### Cancellation

When an :activity: is cancelled, or its :workflow_execution: has completed or failed, the context passed
into its function is cancelled, which sets its channel’s closed state to `Done`. An :activity: can use that
to perform any necessary cleanup and abort its execution. Cancellation is only delivered to :activity:activities:
that call `RecordActivityHeartbeat`.

### Registration

To make the :activity: visible to the :worker: process hosting it, the :activity: must be registered via a
call to `activity.Register`.

```go
func init() {
    activity.Register(SimpleActivity)
}
```
This call creates an in-memory mapping inside the :worker: process between the fully qualified function
name and the implementation. If a :worker: receives a request to start an :activity: execution for an
:activity: type it does not know, it will fail that request.

## Failing an Activity

To mark an :activity: as failed, the :activity: function must return an error via the `error` return value.
