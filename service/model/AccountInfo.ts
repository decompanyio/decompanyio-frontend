export default class AccountInfo {
  user: any;
  deck: any;
  gas: any;
  privateDocumentCount: number;

  constructor(data: any) {
    this.user = data && data.user ? data.user : {};
    this.deck = data && data.deck ? data.deck : [];
    this.gas = data && data.gas ? data.gas : [];
    this.privateDocumentCount =
      data && data.privateDocumentCount ? data.privateDocumentCount : 0;
  }
}
