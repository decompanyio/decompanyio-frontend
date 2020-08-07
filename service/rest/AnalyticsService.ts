import AxiosService from './AxiosService'

let getAnalyticsExportUrl = 'ProfileAnalytics/export'
let getAnalyticsListUrl = 'ProfileAnalytics/list'

export default {
  GET: {
    analyticsList: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestGetWithHeader(
          getAnalyticsListUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      }),
    analyticsExport: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestGetWithHeader(
          getAnalyticsExportUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      })
  },
  POST: {}
}
