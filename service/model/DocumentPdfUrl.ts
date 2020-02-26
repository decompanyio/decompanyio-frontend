export default class DocumentPdfUrl {
  pdfUrl: string

  constructor(data: any) {
    this.pdfUrl = data && data.pdf ? data.pdf : ""
  }
}
