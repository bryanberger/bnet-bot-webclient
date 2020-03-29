abstract class RequestId {
  public static _id = 0

  public static id(): number {
    return ++this._id
  }
}

export default RequestId
