import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  NotificationEndpoint,
  NotificationEndpointUpdate,
  NotificationEndpoints,
  PostNotificationEndpoint,
} from './types'

export interface GetNotificationEndpointsRequest {
  offset?: number
  limit?: number
  /** Only show notification endpoints that belong to specific organization ID. */
  orgID: string
}
export interface CreateNotificationEndpointRequest {
  /** Notification endpoint to create */
  body: PostNotificationEndpoint
}
export interface GetNotificationEndpointsIDRequest {
  /** The notification endpoint ID. */
  endpointID: string
}
export interface PutNotificationEndpointsIDRequest {
  /** The notification endpoint ID. */
  endpointID: string
  /** A new notification endpoint to replace the existing endpoint with */
  body: NotificationEndpoint
}
export interface PatchNotificationEndpointsIDRequest {
  /** The notification endpoint ID. */
  endpointID: string
  /** Check update to apply */
  body: NotificationEndpointUpdate
}
export interface DeleteNotificationEndpointsIDRequest {
  /** The notification endpoint ID. */
  endpointID: string
}
export interface GetNotificationEndpointsIDLabelsRequest {
  /** The notification endpoint ID. */
  endpointID: string
}
export interface PostNotificationEndpointIDLabelsRequest {
  /** The notification endpoint ID. */
  endpointID: string
  /** Label to add */
  body: LabelMapping
}
export interface DeleteNotificationEndpointsIDLabelsIDRequest {
  /** The notification endpoint ID. */
  endpointID: string
  /** The ID of the label to delete. */
  labelID: string
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationEndpoints
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/CreateNotificationEndpoint
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationEndpointsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PutNotificationEndpointsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchNotificationEndpointsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteNotificationEndpointsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationEndpointsIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostNotificationEndpointIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteNotificationEndpointsIDLabelsID
 */
export class NotificationEndpointsAPI extends APIBase {
  /**
   * Creates NotificationEndpointsAPI
   * @param influxDB InfluxDB
   */
  constructor(influxDB: InfluxDB) {
    super(influxDB)
  }
  /**
   * Get all notification endpoints.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationEndpoints
   * @param request
   * @return promise of response
   */
  getNotificationEndpoints(
    request: GetNotificationEndpointsRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationEndpoints> {
    return this.request(
      'GET',
      `/api/v2/notificationEndpoints${this.queryString(request, [
        'offset',
        'limit',
        'orgID',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Add a notification endpoint.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/CreateNotificationEndpoint
   * @param request
   * @return promise of response
   */
  createNotificationEndpoint(
    request: CreateNotificationEndpointRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationEndpoint> {
    return this.request(
      'POST',
      `/api/v2/notificationEndpoints`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a notification endpoint.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationEndpointsID
   * @param request
   * @return promise of response
   */
  getNotificationEndpointsID(
    request: GetNotificationEndpointsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationEndpoint> {
    return this.request(
      'GET',
      `/api/v2/notificationEndpoints/${request.endpointID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a notification endpoint.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PutNotificationEndpointsID
   * @param request
   * @return promise of response
   */
  putNotificationEndpointsID(
    request: PutNotificationEndpointsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationEndpoint> {
    return this.request(
      'PUT',
      `/api/v2/notificationEndpoints/${request.endpointID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update a notification endpoint.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchNotificationEndpointsID
   * @param request
   * @return promise of response
   */
  patchNotificationEndpointsID(
    request: PatchNotificationEndpointsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<NotificationEndpoint> {
    return this.request(
      'PATCH',
      `/api/v2/notificationEndpoints/${request.endpointID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a notification endpoint.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteNotificationEndpointsID
   * @param request
   * @return promise of response
   */
  deleteNotificationEndpointsID(
    request: DeleteNotificationEndpointsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/notificationEndpoints/${request.endpointID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a notification endpoint.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetNotificationEndpointsIDLabels
   * @param request
   * @return promise of response
   */
  getNotificationEndpointsIDLabels(
    request: GetNotificationEndpointsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/notificationEndpoints/${request.endpointID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a notification endpoint.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostNotificationEndpointIDLabels
   * @param request
   * @return promise of response
   */
  postNotificationEndpointIDLabels(
    request: PostNotificationEndpointIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/notificationEndpoints/${request.endpointID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a notification endpoint.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteNotificationEndpointsIDLabelsID
   * @param request
   * @return promise of response
   */
  deleteNotificationEndpointsIDLabelsID(
    request: DeleteNotificationEndpointsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/notificationEndpoints/${request.endpointID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
}
