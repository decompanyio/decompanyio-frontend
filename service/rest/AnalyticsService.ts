import AxiosService from './AxiosService'

let getAnalyticsExportUrl = 'analytics/export'
let getAnalyticsListUrl = 'analytics/list'

export default {
  GET: {
    analyticsList: data => {
      return new Promise((resolve, reject) => {
        AxiosService._requestGetWithHeader(
          getAnalyticsListUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      })
    },
    analyticsExport: data => {
      return new Promise((resolve, reject) => {
        AxiosService._requestGetWithHeader(
          getAnalyticsExportUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      })
    }
  },
  POST: {}
}
