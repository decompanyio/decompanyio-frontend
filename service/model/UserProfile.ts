export default class UserProfile {
  public picture: string
  public signedUploadUrl: string

  public constructor(data) {
    this.signedUploadUrl =
      data && data.signedUploadUrl ? data.signedUploadUrl : ''
    this.picture = data && data.picture ? data.picture : ''
  }
}
