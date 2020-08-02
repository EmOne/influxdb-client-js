<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client](./influxdb-client.md) &gt; [WriteRetryOptions](./influxdb-client.writeretryoptions.md) &gt; [writeFailed](./influxdb-client.writeretryoptions.writefailed.md)

## WriteRetryOptions.writeFailed() method

writeFailed is called to inform about write error

<b>Signature:</b>

```typescript
writeFailed(this: WriteApi, error: Error, lines: Array<string>, attempts: number): Promise<void> | void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  this | [WriteApi](./influxdb-client.writeapi.md) | the instance of the API that failed |
|  error | Error | write error |
|  lines | Array&lt;string&gt; | failed lines |
|  attempts | number | a number of failed attempts to write the lines |

<b>Returns:</b>

Promise&lt;void&gt; \| void

a Promise to force the API to use it as a result of the flush operation, void/undefined to continue with default retry mechanism
