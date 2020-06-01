export default {
  getMyListFindMany: data =>
    `
    UserDocumentFavorite {
    findMany(
    filter: { userId: "${data.userId}" },
    skip: ${data.skip || 0},
    limit: 10,
    sort: USERID__CREATED_ASC
    ) {
      documentId
    }
  }`,
  getHistoryFindById: data =>
    `
    UserDocumentHistory {
    findMany(
    filter: { userId: "${data.userId}"},
    skip: ${data.skip || 0},
    limit: 10,
    sort: USERID__UPDATED_ASC
    ) {
      documentId
    }
  }`,
  getDocumentListByIds: data =>
    `Document {
    findByIds(_ids: [${data}]) {
      _id
      created
      state
      accountId
      documentId
      documentName
      documentSize
      title
      desc
      seoTitle
      useTracking
      forceTracking
      isDownload
      cc
      isPublic
      isBlocked
      isDeleted
      dimensions {
        width
        height
        type
      }
    }
  }
  DocumentFeatured {
    findByIds(_ids: [${data}]) {
      _id
      latestVoteAmount
    }
  }
  DocumentPopular {
    findByIds(_ids: [${data}]) {
      _id
      latestPageview
    }
  }`,
  getDocumentByFindOne: data =>
    `Document {    
    findOne(filter: { _id: "${data}" }) {
      _id
      created
      state
      accountId
      documentId
      documentName
      documentSize
      title
      desc
      seoTitle
      useTracking
      forceTracking
      isDownload
      cc
      isPublic
      isBlocked
      isDeleted
      dimensions {
        width
        height
        type
      }
    }
  }`,
  getDocumentFeaturedByFindOne: data =>
    `DocumentFeatured {
    findOne(filter: { _id: "${data}" }) {
      _id
      latestVoteAmount
    }
  }`,
  getDocumentPopularByFindOne: data =>
    `DocumentPopular {
    findOne(filter: { _id: "${data}" }) {
      _id
      latestPageview
    }
  }`,
  getUserByIds: data =>
    `  User {
      findByIds(_ids: [${data}]) {
      _id
      created
      username
      email
      picture
      local
      nickname
      family_name
    }
  }`,
  getProfileRewards: data =>
    `
  ProfileSummary {
    getLast6CreatorReward(userId: "${data}") {
      documentId
      activeDate
      pageview
      totalPageview
      royalty
    }
    getTodayEstimatedCreatorReward(userId: "${data}") {
      documentId
      activeDate
      pageview
      totalPageview
      royalty
    }
    getLast6CuratorReward(userId: "${data}") {
      voteDate
      documentId
      reward
    }
    getTodayEstimatedCuratorReward(userId: "${data}") {
      voteDate
      documentId
      reward
    }
  }
`,
  getDocumentVoteAmount: data =>
    `Curator {
    getTodayUserActiveVoteAmount(
      userId: "${data.userId}"
      documentId: "${data.documentId}"
    ) {
      activeDate
      documentId
      userId
      voteAmount
    }
    getTodayActiveVoteAmount(documentId: "${data.documentId}") {
      activeDate
      documentId
      voteAmount
    }
  }
      `,
  getCreatorRewards: data =>
    `Creator {
    determineCreatorRoyalty(
      documentId: "${data.documentId}"
    ) {
      activeDate
      userId
      documentId
      pageview
      totalPageview
      royalty
    }
  }`,
  getNDaysRoyalty: data =>
    `Creator {
    getNDaysRoyalty(
      documentId: "${data.documentId}"
      days: ${data.days}
    ) {
      activeDate
      documentId
      royalty
      pageview
      totalPageview
    }
  }`,
  getClaimableRoyalty: data =>
    `Creator  {
    getClaimableRoyalty(
      documentId: "${data.documentId}"
    ) {
      activeDate
      userId
      documentId
      pageview
      totalPageview
      royalty
    }
  }`,
  getClaimableReward: data =>
    `Curator {
    getClaimableReward(
      userId: "${data.userId}"
      documentId: "${data.documentId}"
    ) {
      voteDate
      activeDate
      documentId
      userId
      voteAmount
      reward
    }
  }`
}
