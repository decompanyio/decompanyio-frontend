import axios from "axios"
import * as qs from "qs"
import { APP_CONFIG } from "../../app.config"

export default {
  /**
   * @return {boolean}
   */
  DEBUG: () => false,

  getRootUrlWithApi: () => APP_CONFIG.domain().api + "/api/",
  getRootUrlWithWallet: () => APP_CONFIG.domain().wallet + "/api/",
  _request: function(url, type, data, success, failure, header) {
    if (this.DEBUG()) console.log("[request]\nurl: " + url + "\ndata: " + data)

    let _header = {}

    if (type !== "GET") _header = { "Content-Type": "application/json" }
    if (header) _header = Object.assign(header, _header)

    axios({
      method: type,
      url: url,
      data: data,
      headers: _header,
      withCredentials: true
    })
      .then(response => {
        if (this.DEBUG()) {
          console.log(
            "성공\nurl: " + url + "\nres:\n" + JSON.stringify(response.data)
          )
        }
        if (response.data.success && response.data.success === true) {
          success(response.data)
        }
        // 성공 alert
        else failure(response.data.message || response.data)
      })
      .catch(error => {
        if (error.response) {
          let status = error.response.status
          let headers = error.response.headers
          let data = error.response.data
          let statusText = error.response.statusText

          if (this.DEBUG()) {
            console.log(headers, data, status, statusText)
            console.log(
              "Error!\ncode:" +
                status +
                "\nmessage:" +
                statusText +
                "\nerror:" +
                error
            )
          }
          console.log("Status: " + status)
        } else if (error.request) console.log(error.request)
        else console.log("Error", error)

        console.log(error)
        failure(error)
      })
      .then()
  },
  _requestPlain: function(url, type, success, failure) {
    this._request(
      this.getRootUrlWithApi() + url,
      type,
      "",
      success,
      failure,
      false
    )
  },
  _requestWithUrlPram: function(url, type, data, success, failure) {
    data = data || {}
    let params = data ? "?" + qs.stringify(data) : ""
    this._request(
      this.getRootUrlWithApi() + url + params,
      type,
      "",
      success,
      failure,
      false
    )
  },
  _requestWithBody: function(url, type, data, success, failure) {
    let _data = data || {}

    this._request(
      this.getRootUrlWithApi() + url,
      type,
      JSON.stringify(_data),
      success,
      failure,
      false
    )
  },
  _requestWithHeader: function(url, type, data, success, failure) {
    const _header = data.header || {}
    const _data = data.data || {}
    this._request(
      this.getRootUrlWithApi() + url,
      type,
      _data,
      success,
      failure,
      _header
    )
  },
  _requestWithHeaderBody: function(url, type, data, success, failure) {
    const _header = data.header || {}
    const _data = data.data || {}
    this._request(
      this.getRootUrlWithApi() + url,
      type,
      JSON.stringify(_data),
      success,
      failure,
      _header
    )
  },
  _requestGetWithHeader: function(url, type, data, success, failure) {
    const _header = data.header || {}
    let _params = data.params ? "?" + qs.stringify(data.params) : ""

    this._request(
      this.getRootUrlWithApi() + url + _params,
      type,
      null,
      success,
      failure,
      _header
    )
  },
  _requestGetWithHeaderForWallet: function(url, type, data, success, failure) {
    const _header = data.header || {}
    let _params = data.params ? "?" + qs.stringify(data.params) : ""

    this._request(
      this.getRootUrlWithWallet() + url + _params,
      type,
      null,
      success,
      failure,
      _header
    )
  },
  _requestWithHeaderBodyForWallet: function(url, type, data, success, failure) {
    const _header = data.header || {}
    const _data = data.data || {}

    this._request(
      this.getRootUrlWithWallet() + url,
      type,
      JSON.stringify(_data),
      success,
      failure,
      _header
    )
  },
  _requestWithBodyForWallet: function(url, type, data, success, failure) {
    let _data = data || {}

    this._request(
      this.getRootUrlWithWallet() + url,
      type,
      JSON.stringify(_data),
      success,
      failure
    )
  }
}
