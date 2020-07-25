import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  Check,
  CheckPatch,
  Checks,
  FluxResponse,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  PostCheck,
} from './types'

export interface GetChecksRequest {
  offset?: number
  limit?: number
  /** Only show checks that belong to a specific organization ID. */
  orgID: string
}
export interface CreateCheckRequest {
  /** Check to create */
  body: PostCheck
}
export interface GetChecksIDRequest {
  /** The check ID. */
  checkID: string
}
export interface PutChecksIDRequest {
  /** The check ID. */
  checkID: string
  /** Check update to apply */
  body: Check
}
export interface PatchChecksIDRequest {
  /** The check ID. */
  checkID: string
  /** Check update to apply */
  body: CheckPatch
}
export interface DeleteChecksIDRequest {
  /** The check ID. */
  checkID: string
}
export interface GetChecksIDLabelsRequest {
  /** The check ID. */
  checkID: string
}
export interface PostChecksIDLabelsRequest {
  /** The check ID. */
  checkID: string
  /** Label to add */
  body: LabelMapping
}
export interface DeleteChecksIDLabelsIDRequest {
  /** The check ID. */
  checkID: string
  /** The ID of the label to delete. */
  labelID: string
}
export interface GetChecksIDQueryRequest {
  /** The check ID. */
  checkID: string
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecks
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/CreateCheck
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecksID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PutChecksID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchChecksID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteChecksID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecksIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostChecksIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteChecksIDLabelsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecksIDQuery
 */
export class ChecksAPI extends APIBase {
  /**
   * Creates ChecksAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    super(influxDB)
  }
  /**
   * Get all checks.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecks
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getChecks(
    request: GetChecksRequest,
    requestOptions?: RequestOptions
  ): Promise<Checks> {
    return this.request(
      'GET',
      `/api/v2/checks${this.queryString(request, [
        'offset',
        'limit',
        'orgID',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Add new check.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/CreateCheck
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  createCheck(
    request: CreateCheckRequest,
    requestOptions?: RequestOptions
  ): Promise<Check> {
    return this.request(
      'POST',
      `/api/v2/checks`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a check.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecksID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getChecksID(
    request: GetChecksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Check> {
    return this.request(
      'GET',
      `/api/v2/checks/${request.checkID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a check.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PutChecksID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  putChecksID(
    request: PutChecksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Check> {
    return this.request(
      'PUT',
      `/api/v2/checks/${request.checkID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update a check.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchChecksID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  patchChecksID(
    request: PatchChecksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Check> {
    return this.request(
      'PATCH',
      `/api/v2/checks/${request.checkID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a check.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteChecksID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteChecksID(
    request: DeleteChecksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/checks/${request.checkID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a check.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecksIDLabels
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getChecksIDLabels(
    request: GetChecksIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/checks/${request.checkID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a check.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostChecksIDLabels
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postChecksIDLabels(
    request: PostChecksIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/checks/${request.checkID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete label from a check.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteChecksIDLabelsID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteChecksIDLabelsID(
    request: DeleteChecksIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/checks/${request.checkID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * Get a check query.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetChecksIDQuery
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getChecksIDQuery(
    request: GetChecksIDQueryRequest,
    requestOptions?: RequestOptions
  ): Promise<FluxResponse> {
    return this.request(
      'GET',
      `/api/v2/checks/${request.checkID}/query`,
      request,
      requestOptions
    )
  }
}
