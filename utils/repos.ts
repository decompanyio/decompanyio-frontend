import { AUTH_APIS } from "./auth"
import axios from "axios"
import ReactGA from "react-ga"

import AuthService from "service/rest/AuthService"
import DocService from "service/rest/DocService"
import TrackingService from "service/rest/TrackingService"
import TagService from "service/rest/TagService"
import WalletService from "service/rest/WalletService"
import AnalyticsService from "service/rest/AnalyticsService"

import graphql from "service/graphql/graphql"
import mutations from "../service/graphql/mutations"
import queries from "service/graphql/queries"

import DocumentList from "service/model/DocumentList"
import Document from "service/model/Document"
import AccountInfo from "service/model/AccountInfo"
import DocumentDownload from "service/model/DocumentDownload"
import UserInfo from "service/model/UserInfo"
import TagList from "service/model/TagList"
import TrackingList from "service/model/TrackingList"
import TrackingExport from "service/model/TrackingExport"
import TrackingInfo from "service/model/TrackingInfo"
import DocumentInfo from "service/model/DocumentInfo"
import CuratorDocuments from "service/model/CuratorDocuments"
import AnalyticsList from "../service/model/AnalyticsList"
import AnalysticsExport from "service/model/AnalysticsExport"
import UserProfile from "service/model/UserProfile"
import WalletBalance from "../service/model/WalletBalance"
import WalletCreate from "../service/model/WalletCreate"
import ProfileRewards from "service/model/ProfileRewards"
import ClaimableRoyalty from "../service/model/ClaimableRoyalty"
import ClaimableReward from "../service/model/ClaimableReward"
import DocumentPdfUrl from "../service/model/DocumentPdfUrl"

let instance: any

export const init = () => {
  repos.ref()
  return repos
}

export const repos = {
  ref() {
    // 자기 참조
    instance = this
  },
  init() {
    // Google Analytics 초기화
    let gaId =
      process.env.NODE_ENV_SUB === "production"
        ? "UA-140503497-1"
        : "UA-129300994-1"
    if (
      process.env.NODE_ENV_SUB === "production" ||
      process.env.NODE_ENV_SUB === "development"
    ) {
      ReactGA.initialize(gaId, {
        debug: false
      })
    }

    ReactGA.pageview(window.location.pathname + window.location.search)

    // 로그인 체크
    if (AUTH_APIS.isAuthenticated()) AUTH_APIS.scheduleRenewal()
    else AUTH_APIS.clearSession()

    return Promise.resolve(true)
  },
  Common: {
    checkNone(res) {
      if (res.length === 0) {
        throw new Error("handled")
      } else return res
    }
  },
  Account: {
    getProfileInfo(params) {
      return AuthService.GET.profileGet(params)
        .then((result: any) => new UserInfo(result.user))
        .catch(err => err)
    },
    async getAccountInfo() {
      const data = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        }
      }

      return AuthService.GET.accountInfo(data)
        .then((result: any) => new AccountInfo(result))
        .catch(err => {
          AUTH_APIS.logout()
          return err
        })
    },
    async updateUsername(username: string) {
      const _data = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        data: { username: username }
      }
      AuthService.POST.accountUpdate(_data)
        .then(() => AUTH_APIS.renewSession())
        .catch(err => err)
    },
    profileImageUpload(params) {
      return new Promise((resolve, reject) => {
        if (params.file == null) {
          return console.error("file object is null", params)
        }

        axios
          .put(params.signedUrl, params.file)
          .then(response => resolve(response))
          .catch(err => reject(err))
      })
    },
    async updateProfileImage(data: any) {
      return new Promise(async (resolve, reject) => {
        const _data = {
          header: {
            Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
              (res: any) => res.idToken
            )}`
          },
          data: data
        }
        AuthService.POST.accountUpdate(_data)
          .then(() => resolve(AUTH_APIS.renewSession()))
          .catch(err => reject(err))
      })
    },
    async getProfileImageUploadUrl() {
      const _data = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        }
      }

      return AuthService.POST.profileImageUpdate(_data)
        .then(result => new UserProfile(result))
        .catch(err => err)
    }
  },
  Document: {
    async registerDocument(
      args: any,
      progress: any,
      callback: any,
      error: any
    ) {
      let fileInfo = args.fileInfo
      let user = args.userInfo
      let ethAccount = args.ethAccount
      let tags = args.tags
      let title = args.title
      let desc = args.desc
      let useTracking = args.useTracking
      let forceTracking = args.forceTracking
      let isDownload = args.isDownload
      let cc = args.cc

      const data = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        data: {
          filename: fileInfo.file.name,
          size: fileInfo.file.size,
          username: user.userName,
          sub: user.sub,
          ethAccount: ethAccount,
          title: title,
          desc: desc,
          tags: tags,
          useTracking: useTracking,
          forceTracking: forceTracking,
          isDownload: isDownload,
          isPublic: false,
          cc: cc
        }
      }

      if (!fileInfo.file) {
        return console.error(
          "The registration value(file or metadata) is invalid.",
          fileInfo
        )
      }

      DocService.POST.registerDocument(
        data,
        (res: any) => {
          if (res && res.success && !res.code) {
            let documentId = res.documentId
            let owner = res.accountId
            let signedUrl = res.signedUrl

            this.documentUpload({
              file: fileInfo.file,
              fileid: documentId,
              fileindex: 1,
              ext: fileInfo.ext,
              owner: owner,
              signedUrl: signedUrl,
              callback: progress
            })
              .then(() => callback(res))
              .catch((err: any) => error(err))
          } else callback(res)
        },
        err => error(err)
      )
    },
    documentUpload(params) {
      if (params.file == null || params.fileid == null || params.ext == null) {
        return console.error("file object is null", params)
      }

      const config = {
        onUploadProgress: e => {
          if (e.load !== null && params.callback !== null) {
            // console.log('onUploadProgress : ' + e.loaded + '/' + e.total);
            params.callback(e)
          }
        }
      }
      return axios.put(params.signedUrl, params.file, config)
    },
    async getDocument(seoTitle: string) {
      return DocService.GET.document(seoTitle)
        .then((res: any) => {
          if (!res.message) return new Document(res)
          else throw new Error(res.message)
        })
        .catch(err => err)
    },
    async getDocuments(data: any) {
      const params = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        params: {
          pageSize: data.pageSize,
          pageNo: data.pageNo
        }
      }

      return DocService.GET.documents(params)
        .then(result => new DocumentList(result))
        .catch(err => err)
    },
    async getDocumentList(params: any) {
      return DocService.GET.documentList(params)
        .then(result => new DocumentList(result))
        .catch(err => err)
    },
    async getDocumentVoteAmount(data: any) {
      return instance.Query.getDocumentVoteAmount(data).then(res => {
        let totalVoteAmount = res.getTodayActiveVoteAmount.reduce(
          (a, b) => Number(a.voteAmount || b.voteAmount || 0),
          0
        )
        let myVoteAmount = res.getTodayUserActiveVoteAmount.reduce(
          (a, b) => Number(a.voteAmount || b.voteAmount || 0),
          0
        )

        return { totalVoteAmount, myVoteAmount }
      })
    },
    getDocumentDownloadUrl(params: any) {
      return DocService.GET.documentDownload(params)
        .then(result => new DocumentDownload(result))
        .catch(err => err)
    },
    async updateDocument(data: any) {
      const _data = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        data: {
          documentId: data.documentId,
          desc: data.desc,
          title: data.title,
          tags: data.tags,
          useTracking: data.useTracking,
          forceTracking: data.forceTracking,
          isDownload: data.isDownload,
          cc: data.cc
        }
      }
      return DocService.POST.updateDocument(_data)
        .then((rst: any) => new DocumentInfo(rst.result))
        .catch(error => console.error(error))
    },
    async getTagList(path: String) {
      return TagService.GET.tagList({ t: path })
        .then(result => new TagList(result))
        .catch(err => err)
    },
    async deleteDocument(data: any) {
      const _data = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        data: data
      }
      return DocService.POST.updateDocument(_data)
        .then((rst: any) => new DocumentInfo(rst.result))
        .catch(error => console.error(error))
    },
    async publishDocument(data: any) {
      const _data = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        data: data
      }

      return DocService.POST.updateDocument(_data)
        .then((rst: any) => new DocumentInfo(rst.result))
        .catch(error => console.error(error))
    },
    async getCuratorDocuments(params: any) {
      return DocService.GET.curatorDocuments(params)
        .then(result => new CuratorDocuments(result))
        .catch(err => err)
    },
    getMyList: async data =>
      instance.Query.getMyListFindMany(data)
        .then(res => instance.Common.checkNone(res))
        .then(res => res.map(v => '"' + v.documentId + '"'))
        .then(res => instance.Query.getDocumentListByIds(res))
        .then(res => {
          let resultData = res
          resultData.Document.findByIds = res.Document.findByIds.filter(l => {
            let latestArr = res.DocumentFeatured.findByIds.filter(
              f => f._id === l._id
            )[0]
            return latestArr
              ? (l.latestVoteAmount = latestArr.latestVoteAmount)
              : true
          })
          return resultData
        })
        .then(res => {
          let resultData = res
          resultData.Document.findByIds = res.Document.findByIds.filter(l => {
            let latestArr = res.DocumentPopular.findByIds.filter(
              p => p._id === l._id
            )[0]
            return latestArr
              ? (l.latestPageview = latestArr.latestPageview)
              : true
          })
          return resultData.Document.findByIds
        })
        .then(async res => {
          let ids = res.map(v => '"' + v.accountId + '"')
          let userData = await instance.Query.getUserByIds(ids)
          return {
            resultList: res.filter(v => {
              let idx = -1
              userData.map((u, i) =>
                idx === -1 && u._id === v.accountId ? (idx = i) : -1
              )
              return idx !== -1 ? (v.author = userData[idx]) : v
            })
          }
        }),
    getHistory: async data =>
      instance.Query.getHistoryFindById(data)
        .then(res => instance.Common.checkNone(res))
        .then(res => res.map(v => v.documentId))
        .then(res => instance.Query.getDocumentListByIdsMultiple(res))
        .then(res => {
          const resultData = Object({
            Document: [],
            DocumentFeatured: [],
            DocumentPopular: []
          })
          let arrLength = Object.keys(res).length / 3
          for (let i = 0; i < arrLength; ++i) {
            if (res["latest_" + i].findOne) {
              resultData.Document.push(res["latest_" + i].findOne)
            }
            if (res["featured_" + i].findOne) {
              resultData.DocumentFeatured.push(res["featured_" + i].findOne)
            }
            if (res["popular_" + i].findOne) {
              resultData.DocumentPopular.push(res["popular_" + i].findOne)
            }
          }
          return resultData
        })
        .then(res => {
          let resultData = res
          resultData.Document = res.Document.filter(l => {
            let latestArr = res.DocumentFeatured.filter(f => f._id === l._id)[0]
            return latestArr
              ? (l.latestVoteAmount = latestArr.latestVoteAmount)
              : true
          })
          return resultData
        })
        .then(res => {
          let resultData = res
          resultData.Document = res.Document.filter(l => {
            let latestArr = res.DocumentPopular.filter(p => p._id === l._id)[0]
            return latestArr
              ? (l.latestPageview = latestArr.latestPageview)
              : true
          })
          return resultData.Document
        })
        .then(async res => {
          let ids = res.map(v => '"' + v.accountId + '"')
          let userData = await instance.Query.getUserByIds(ids)
          return {
            resultList: res.filter(v => {
              let idx = -1
              userData.map((u, i) =>
                idx === -1 && u._id === v.accountId ? (idx = i) : -1
              )
              return idx !== -1 ? (v.author = userData[idx]) : v
            })
          }
        }),
    async getCreatorRewards(documentId: string, userId: string) {
      return instance.Query.getCreatorRewards({ documentId, userId }).then(
        (res: any) => Number(res.determineCreatorRoyalty || 0)
      )
    },
    async getCuratorRewards(documentId: string, userId: string) {
      return instance.Query.getCuratorRewards({ documentId, userId }).then(
        (res: any) => Number(res.determineCreatorRoyalty || 0)
      )
    },
    async getClaimableRoyalty(documentId: string, userId: string) {
      return instance.Query.getClaimableRoyalty({ documentId, userId }).then(
        (res: any) =>
          new ClaimableRoyalty(res ? res.getClaimableRoyalty[0] : null)
      )
    },
    async getClaimableReward(documentId: string, userId: string) {
      return instance.Query.getClaimableReward({ documentId, userId }).then(
        (res: any) =>
          new ClaimableReward(
            res && res.length > 0 ? res.getClaimableReward[0] : null
          )
      )
    },
    async getDocumentPdfUrl(data: any) {
      return DocService.GET.documentPdfUrl({ documentId: data }).then(
        (result: any) => new DocumentPdfUrl(result)
      )
    }
  },
  Tracking: {
    async getTrackingList(data: any) {
      const params = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        params: data
      }
      return TrackingService.GET.trackingList(params).then(
        (res: any) => new TrackingList(res)
      )
    },
    async getTrackingInfo(data: any) {
      const params = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        params: {
          cid: data.cid,
          documentId: data.documentId,
          include: data.include,
          anonymous: data.anonymous
        }
      }
      return TrackingService.GET.trackingInfo(params).then(
        (res: any) => new TrackingInfo(res)
      )
    },
    async getTrackingExport(documentId: string) {
      const params = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        params: { documentId: documentId }
      }

      return TrackingService.GET.trackingExport(params).then(
        (result: any) => new TrackingExport(result)
      )
    },
    postTrackingConfirm(data) {
      return TrackingService.POST.trackingConfirm(data)
    }
  },
  Analytics: {
    async getAnalyticsList(params: any) {
      const _params = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        params: {
          userId: null,
          week: params.week,
          year: params.year,
          documentId: params.documentId
        }
      }
      return AnalyticsService.GET.analyticsList(_params).then((result: any) => {
        return new AnalyticsList(result)
      })
    },
    async getAnalyticsExport(data: any) {
      const params = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        params: {
          documentId: data.documentId,
          year: data.year,
          week: data.week
        }
      }

      return AnalyticsService.GET.analyticsExport(params).then(
        (result: any) => new AnalysticsExport(result)
      )
    }
  },
  Wallet: {
    async getWalletBalance(data: any) {
      return WalletService.POST.walletBalance(data)
        .then(result => new WalletBalance(result))
        .catch(err => err)
    },
    async createWallet() {
      const params = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        }
      }

      return WalletService.POST.walletCreate(params)
        .then(result => {
          return new WalletCreate(result)
        })
        .catch(err => err)
    },
    async walletWithdraw(data: any) {
      const params = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        data: data
      }

      return WalletService.POST.walletWithdraw(params)
        .then(result => {
          return new WalletCreate(result)
        })
        .catch(err => err)
    },
    async voteDocument(data: any) {
      const params = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        data: data
      }

      return WalletService.POST.voteDocument(params)
        .then(result => result)
        .catch(err => err)
    },
    async claimCreator(data: any) {
      const params = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        data: data
      }

      return WalletService.POST.claimCreator(params)
        .then(result => result)
        .catch(err => err)
    },
    async claimCurator(data: any) {
      const params = {
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        data: data
      }

      return WalletService.POST.claimCurator(params)
        .then(result => result)
        .catch(err => err)
    },
    async getProfileRewards(data: any) {
      return instance.Query.getProfileRewards(data).then(
        res => new ProfileRewards(res.ProfileSummary)
      )
    }
  },
  Mutation: {
    addMyList: async (data: any) =>
      graphql({
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        mutation: mutations.addMyList(data)
      }).then(res => res),
    removeMyList: async (data: any) =>
      graphql({
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        mutation: mutations.removeMyList(data)
      }).then(res => res),
    addHistory: async (data: any) =>
      graphql({
        header: {
          Authorization: `Bearer ${await AUTH_APIS.renewSessionPromise().then(
            (res: any) => res.idToken
          )}`
        },
        mutation: mutations.addHistory(data)
      }).then(res => res)
  },
  Query: {
    getDocumentVoteAmount: async (data: any) =>
      graphql({
        query: queries.getDocumentVoteAmount(data)
      }).then((res: any) => res.Curator),
    getMyListFindMany: async (data: any) =>
      graphql({
        query: queries.getMyListFindMany(data)
      }).then((res: any) => res.UserDocumentFavorite.findMany),
    getHistoryFindById: async (data: any) =>
      graphql({
        query: queries.getHistoryFindById(data)
      }).then((res: any) => res.UserDocumentHistory.findMany),
    getDocumentListByIds: async (data: any) =>
      graphql({
        query: queries.getDocumentListByIds(data)
      }).then(res => res),
    getDocumentListByIdsMultiple: async (data: any) =>
      graphql({
        query: data.map(
          (v, i) =>
            `\nlatest_` +
            i +
            `: ` +
            queries.getDocumentByFindOne(v) +
            `\nfeatured_` +
            i +
            `: ` +
            queries.getDocumentFeaturedByFindOne(v) +
            `\npopular_` +
            i +
            `: ` +
            queries.getDocumentPopularByFindOne(v)
        )
      }).then(res => res),
    getUserByIds: async (data: any) =>
      graphql({
        query: queries.getUserByIds(data)
      }).then((res: any) => res.User.findByIds),
    getProfileRewards: async (data: any) =>
      graphql({
        query: queries.getProfileRewards(data)
      }).then(res => res),
    getCreatorRewards: async (data: any) =>
      graphql({
        query: queries.getCreatorRewards(data)
      }).then((res: any) => res.Creator),
    getCuratorRewards: async (data: any) =>
      graphql({
        query: queries.getCuratorRewards(data)
      }).then((res: any) => res.Curator),
    getClaimableRoyalty: async (data: any) =>
      graphql({
        query: queries.getClaimableRoyalty(data)
      }).then((res: any) => res.Creator),
    getClaimableReward: async (data: any) =>
      graphql({
        query: queries.getClaimableReward(data)
      }).then((res: any) => res.Curator)
  }
}

export default init()
