import AxiosService from './AxiosService'

let getDocumentUrl = 'document/info'
let getDocumentListUrl = 'document/list'
let voteDocumentUrl = 'document/VoteModal'
let documentDownloadUrl = 'document/download'
let registerDocumentInfoUrl = 'document/regist'
let updateDocumentUrl = 'document/update'
let documentPdfUrl = 'document/pdf'
let getCuratorDocumentsUrl = 'curator/document/list'

export default {
  GET: {
    document: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithUrlParam(
          getDocumentUrl + '/' + data,
          'GET',
          null,
          data => resolve(data),
          err => reject(err)
        )
      }),
    documentList: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithUrlParam(
          getDocumentListUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      }),
    documentDownload: data => {
      return new Promise((resolve, reject) => {
        AxiosService._requestWithUrlParam(
          documentDownloadUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      })
    },
    curatorDocuments: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithUrlParam(
          getCuratorDocumentsUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      }),
    documentPdfUrl: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithUrlParam(
          documentPdfUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      })
  },
  POST: {
    sendVoteInfo: (data, callback, error) => {
      AxiosService._requestWithUrlParam(
        voteDocumentUrl,
        'POST',
        data,
        data => callback(data),
        err => error(err)
      )
    },
    registerDocument: (data, callback, error) => {
      AxiosService._requestWithHeaderBody(
        registerDocumentInfoUrl,
        'POST',
        data,
        data => callback(data),
        err => error(err)
      )
    },
    updateDocument: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithHeaderBody(
          updateDocumentUrl,
          'POST',
          data,
          data => resolve(data),
          err => reject(err)
        )
      })
  }
}
