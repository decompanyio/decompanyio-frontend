import AxiosService from './AxiosService'

let trackingInfoUrl = 'tracking/info'
let trackingListUrl = 'tracking/list'
let trackingCollectUrl = 'tracking/collect'
let trackingConfirmUrl = 'tracking/confirm'
let getTrackingExportUrl = 'tracking/export'

export default {
  GET: {
    trackingInfo: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestGetWithHeader(
          trackingInfoUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      }),
    trackingList: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestGetWithHeader(
          trackingListUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      }),
    trackingExport: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestGetWithHeader(
          getTrackingExportUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      }),
    trackingCollect: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithUrlParam(
          trackingCollectUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      })
  },
  POST: {
    trackingConfirm: data => {
      return new Promise((resolve, reject) =>
        AxiosService._requestWithBody(
          trackingConfirmUrl,
          'POST',
          data,
          data => resolve(data),
          err => reject(err)
        )
      )
    }
  }
}
