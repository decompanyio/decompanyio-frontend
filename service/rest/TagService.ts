import AxiosService from './AxiosService'

let tagListUrl = 'tags'

export default {
  GET: {
    tagList: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithUrlParam(
          tagListUrl,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      })
  }
}
