<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [DbrpsAPI](./influxdb-client-apis.dbrpsapi.md) &gt; [patchDBRPID](./influxdb-client-apis.dbrpsapi.patchdbrpid.md)

## DbrpsAPI.patchDBRPID() method

Update a database retention policy mapping. See [https://v2.docs.influxdata.com/v2.0/api/\#operation/PatchDBRPID](https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDBRPID)

<b>Signature:</b>

```typescript
patchDBRPID(request: PatchDBRPIDRequest, requestOptions?: RequestOptions): Promise<DBRP>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [PatchDBRPIDRequest](./influxdb-client-apis.patchdbrpidrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | optional transport options |

<b>Returns:</b>

Promise&lt;[DBRP](./influxdb-client-apis.dbrp.md)<!-- -->&gt;

promise of response
