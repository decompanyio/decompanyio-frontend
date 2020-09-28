import AxiosService from './AxiosService'

let walletBalance = 'account/balance'
let walletAddress = 'account/address'
let walletCreate = 'account/create'
let walletWithdraw = 'account/withdraw'
let voteDocument = 'document/VoteModal'
let claimCreator = 'claim/royalty'
let claimCurator = 'claim/reward'

export default {
  GET: {
    walletAddress: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestGetWithHeaderForWallet(
          walletAddress,
          'GET',
          data,
          data => resolve(data),
          err => reject(err)
        )
      })
  },
  POST: {
    walletBalance: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithBodyForWallet(
          walletBalance,
          'POST',
          data,
          data => resolve(data),
          err => reject(err)
        )
      }),
    walletHistory: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithBodyForWallet(
          walletBalance,
          'POST',
          data,
          data => resolve(data),
          err => reject(err)
        )
      }),
    walletCreate: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithHeaderBodyForWallet(
          walletCreate,
          'POST',
          data,
          data => resolve(data),
          err => reject(err)
        )
      }),
    walletWithdraw: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithHeaderBodyForWallet(
          walletWithdraw,
          'POST',
          data,
          data => resolve(data),
          err => reject(err)
        )
      }),
    voteDocument: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithHeaderBodyForWallet(
          voteDocument,
          'POST',
          data,
          data => resolve(data),
          err => reject(err)
        )
      }),
    claimCreator: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithHeaderBodyForWallet(
          claimCreator,
          'POST',
          data,
          data => resolve(data),
          err => reject(err)
        )
      }),
    claimCurator: data =>
      new Promise((resolve, reject) => {
        AxiosService._requestWithHeaderBodyForWallet(
          claimCurator,
          'POST',
          data,
          data => resolve(data),
          err => reject(err)
        )
      })
  }
}
