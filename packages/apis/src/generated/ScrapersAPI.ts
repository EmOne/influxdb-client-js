import {APIBase, RequestOptions} from '../APIBase'
import {
  AddResourceMemberRequestBody,
  Label,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  ResourceMember,
  ResourceMembers,
  ResourceOwner,
  ResourceOwners,
  ScraperTargetRequest,
  ScraperTargetResponse,
  ScraperTargetResponses,
} from './types'

export interface GetScrapersRequest {
  /** Specifies the name of the scraper target. */
  name?: string
  /** List of scraper target IDs to return. If both `id` and `owner` are specified, only `id` is used. */
  id?: any
  /** Specifies the organization ID of the scraper target. */
  orgID?: string
  /** Specifies the organization name of the scraper target. */
  org?: string
}
export interface PostScrapersRequest {
  /** Scraper target to create */
  body: ScraperTargetRequest
}
export interface GetScrapersIDRequest {
  /** The scraper target ID. */
  scraperTargetID: string
}
export interface PatchScrapersIDRequest {
  /** The scraper target ID. */
  scraperTargetID: string
  /** Scraper target update to apply */
  body: ScraperTargetRequest
}
export interface DeleteScrapersIDRequest {
  /** The scraper target ID. */
  scraperTargetID: string
}
export interface GetScrapersIDLabelsRequest {
  /** The scraper target ID. */
  scraperTargetID: string
}
export interface PostScrapersIDLabelsRequest {
  /** The scraper target ID. */
  scraperTargetID: string
  /** Label to add */
  body: LabelMapping
}
export interface PatchScrapersIDLabelsIDRequest {
  /** The scraper target ID. */
  scraperTargetID: string
  /** The label ID. */
  labelID: string
  /** Label update to apply */
  body: Label
}
export interface DeleteScrapersIDLabelsIDRequest {
  /** The scraper target ID. */
  scraperTargetID: string
  /** The label ID. */
  labelID: string
}
export interface GetScrapersIDMembersRequest {
  /** The scraper target ID. */
  scraperTargetID: string
}
export interface PostScrapersIDMembersRequest {
  /** The scraper target ID. */
  scraperTargetID: string
  /** User to add as member */
  body: AddResourceMemberRequestBody
}
export interface DeleteScrapersIDMembersIDRequest {
  /** The ID of member to remove. */
  userID: string
  /** The scraper target ID. */
  scraperTargetID: string
}
export interface GetScrapersIDOwnersRequest {
  /** The scraper target ID. */
  scraperTargetID: string
}
export interface PostScrapersIDOwnersRequest {
  /** The scraper target ID. */
  scraperTargetID: string
  /** User to add as owner */
  body: AddResourceMemberRequestBody
}
export interface DeleteScrapersIDOwnersIDRequest {
  /** The ID of owner to remove. */
  userID: string
  /** The scraper target ID. */
  scraperTargetID: string
}
/**
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapers
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapers
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchScrapersID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDLabels
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDLabels
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchScrapersIDLabelsID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDLabelsID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDMembers
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDMembers
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDMembersID
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDOwners
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDOwners
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDOwnersID
 */
export class ScrapersAPI extends APIBase {
  /**
   * Creates ScrapersAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Get all scraper targets.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapers
   * @param request
   * @return promise of response
   */
  getScrapers(
    request?: GetScrapersRequest,
    requestOptions?: RequestOptions
  ): Promise<ScraperTargetResponses> {
    return this.request(
      'GET',
      `/api/v2/scrapers${this.queryString(request, [
        'name',
        'id',
        'orgID',
        'org',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapers
   * @param request
   * @return promise of response
   */
  postScrapers(
    request: PostScrapersRequest,
    requestOptions?: RequestOptions
  ): Promise<ScraperTargetResponse> {
    return this.request(
      'POST',
      `/api/v2/scrapers`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a scraper target by ID.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersID
   * @param request
   * @return promise of response
   */
  getScrapersID(
    request: GetScrapersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<ScraperTargetResponse> {
    return this.request(
      'GET',
      `/api/v2/scrapers/${request.scraperTargetID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchScrapersID
   * @param request
   * @return promise of response
   */
  patchScrapersID(
    request: PatchScrapersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<ScraperTargetResponse> {
    return this.request(
      'PATCH',
      `/api/v2/scrapers/${request.scraperTargetID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersID
   * @param request
   * @return promise of response
   */
  deleteScrapersID(
    request: DeleteScrapersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/scrapers/${request.scraperTargetID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDLabels
   * @param request
   * @return promise of response
   */
  getScrapersIDLabels(
    request: GetScrapersIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/scrapers/${request.scraperTargetID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDLabels
   * @param request
   * @return promise of response
   */
  postScrapersIDLabels(
    request: PostScrapersIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/scrapers/${request.scraperTargetID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update a label on a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchScrapersIDLabelsID
   * @param request
   * @return promise of response
   */
  patchScrapersIDLabelsID(
    request: PatchScrapersIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'PATCH',
      `/api/v2/scrapers/${request.scraperTargetID}/labels/${request.labelID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDLabelsID
   * @param request
   * @return promise of response
   */
  deleteScrapersIDLabelsID(
    request: DeleteScrapersIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/scrapers/${request.scraperTargetID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all users with member privileges for a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDMembers
   * @param request
   * @return promise of response
   */
  getScrapersIDMembers(
    request: GetScrapersIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.request(
      'GET',
      `/api/v2/scrapers/${request.scraperTargetID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDMembers
   * @param request
   * @return promise of response
   */
  postScrapersIDMembers(
    request: PostScrapersIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.request(
      'POST',
      `/api/v2/scrapers/${request.scraperTargetID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDMembersID
   * @param request
   * @return promise of response
   */
  deleteScrapersIDMembersID(
    request: DeleteScrapersIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/scrapers/${request.scraperTargetID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetScrapersIDOwners
   * @param request
   * @return promise of response
   */
  getScrapersIDOwners(
    request: GetScrapersIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.request(
      'GET',
      `/api/v2/scrapers/${request.scraperTargetID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostScrapersIDOwners
   * @param request
   * @return promise of response
   */
  postScrapersIDOwners(
    request: PostScrapersIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.request(
      'POST',
      `/api/v2/scrapers/${request.scraperTargetID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a scraper target.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteScrapersIDOwnersID
   * @param request
   * @return promise of response
   */
  deleteScrapersIDOwnersID(
    request: DeleteScrapersIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/scrapers/${request.scraperTargetID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
}
