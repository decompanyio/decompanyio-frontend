import axios from "axios"
import shortid from "shortid"
import ReactGA from "react-ga"
import Common from "../common/common"
import { APP_CONFIG } from "../app.config"

type Type = {
  sid: any
  cid: any
  touchAt: any
}

let apiDomain = APP_CONFIG.domain().api
let trackingUrl = "/api/tracking/collect"

const makeId = () => shortid.generate()

export const setTrackingInfo = () =>
  new Promise(resolve => {
    let timestamp = Date.now()
    let trackingInfo: Type = { sid: null, cid: null, touchAt: null }

    try {
      trackingInfo = JSON.parse(localStorage.getItem("tracking_info") || "")
    } catch (e) {
      console.error(e)
    }

    if (!trackingInfo.sid) {
      trackingInfo = {
        sid: makeId(),
        cid: "",
        touchAt: timestamp
      }
    }

    // sid는 30분 지나면 새로 갱신함(이벤트마다 갱신됨)
    if (
      !trackingInfo.sid ||
      timestamp - trackingInfo.touchAt > 1000 * 60 * 30 /* 곱하기 30 min */
    ) {
      trackingInfo.sid = makeId()
    }

    ReactGA.ga(tracker => (trackingInfo.cid = tracker.get("clientId")))

    if (!trackingInfo.cid && APP_CONFIG.debug) {
      console.log("client id invalid on tracking")
    }

    localStorage.setItem("tracking_info", JSON.stringify(trackingInfo))
    resolve(trackingInfo)
  })

export const tracking = async (params, sidClear) => {
  if (APP_CONFIG.env !== "production" && APP_CONFIG.env !== "development") {
    return false
  }

  let timestamp = Date.now()
  let trackingInfo: any = await setTrackingInfo()

  return new Promise(resolve => {
    params.sid = trackingInfo.sid // session id
    params.cid = trackingInfo.cid // clinet id
    params.t = timestamp // touch time

    let querystring = Common.jsonToQueryString(params)
    let tracking = apiDomain + trackingUrl + querystring

    axios({
      method: "GET",
      url: tracking
    }).then(res => {
      if (sidClear) trackingInfo.sid = undefined

      // touchAt 현재 시간으로 갱신 후 localStorage에 저장
      trackingInfo.touchAt = timestamp
      localStorage.setItem("tracking_info", JSON.stringify(trackingInfo))
      resolve(res)
    })
  })
}
