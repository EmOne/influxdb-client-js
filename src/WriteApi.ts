import Point from './Point'

/**
 * The asynchronous buffering API to Write time-series data into InfluxDB 2.0.
 * <p>
 * The data are formatted in <a href="https://bit.ly/2QL99fu">Line Protocol</a>.
 * <p>
 */
export default interface WriteApi {
  /**
   * Instructs to use the following default tags  when writing points.
   * Not applicable for writing records/lines.
   * @param tags
   */
  useDefaultTags(tags: {[key: string]: string}): WriteApi

  /**
   * Write a line of <a href="https://bit.ly/2QL99fu">Line Protocol</a>.
   *
   * @param record line in InfluxDB Line Protocol.
   */
  writeRecord(record: string): void

  /**
   * Write lines of <a href="https://bit.ly/2QL99fu">Line Protocol</a>.
   *
   * @param records lines in InfluxDB Line Protocol
   */
  writeRecords(records: Array<string>): void

  /**
   * Write point.
   *
   * @param records lines in InfluxDB Line Protocol
   */
  writePoint(point: Point): void

  /**
   * Write points.
   *
   * @param records lines in InfluxDB Line Protocol
   */
  writePoints(points: ArrayLike<Point>): void

  /**
   * Flushes pending writes to the server.
   * @return completition promise
   */
  flush(): Promise<void>

  /**
   * Closes this writer, cancels retries of writes operations that failed.
   * @return completition promise
   */
  close(): Promise<void>

  /**
   * Unlike close, dispose simply quits without trying to send
   * the buffered data.
   */
  dispose(): void
}
