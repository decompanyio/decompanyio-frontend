export default class DocumentPdfUrl {
  public pdfUrl: string

  public constructor(data) {
    this.pdfUrl = data && data.pdf ? data.pdf : ''
  }
}
