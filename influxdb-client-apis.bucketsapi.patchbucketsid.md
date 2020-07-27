<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [BucketsAPI](./influxdb-client-apis.bucketsapi.md) &gt; [patchBucketsID](./influxdb-client-apis.bucketsapi.patchbucketsid.md)

## BucketsAPI.patchBucketsID() method

Update a bucket. See [https://v2.docs.influxdata.com/v2.0/api/\#operation/PatchBucketsID](https://v2.docs.influxdata.com/v2.0/api/#operation/PatchBucketsID)

<b>Signature:</b>

```typescript
patchBucketsID(request: PatchBucketsIDRequest, requestOptions?: RequestOptions): Promise<Bucket>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [PatchBucketsIDRequest](./influxdb-client-apis.patchbucketsidrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | optional transport options |

<b>Returns:</b>

Promise&lt;[Bucket](./influxdb-client-apis.bucket.md)<!-- -->&gt;

promise of response
