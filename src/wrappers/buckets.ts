import { Bucket, BucketsApi, Organization } from "../api";

export default class {
  private service: BucketsApi;

  constructor(basePath: string) {
    this.service = new BucketsApi({basePath});
  }

  public async get(id: string): Promise<Bucket> {
    const {data} = await this.service.bucketsBucketIDGet(id);

    return data;
  }

  public async getAllByOrg(org: string): Promise<Bucket[]> {
    const {data: {buckets}} = await this.service.bucketsGet(undefined, undefined, undefined, org);

    return buckets || [];
  }

  public async create(bucket: Bucket): Promise<Bucket> {
    const {data} = await this.service.bucketsPost(bucket);

    return data;
  }

  public async update(id: string, bucket: Partial<Bucket>): Promise<Bucket> {
    const original = await this.get(id);
    const {data} = await this.service.bucketsBucketIDPatch(id, {...original, ...bucket});

    return data;
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.bucketsBucketIDDelete(id);

    return data;
  }
}
