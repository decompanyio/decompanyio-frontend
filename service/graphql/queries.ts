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
      ethAccount
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
      ethAccount
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
      ethAccount
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
      reward
    }
    getTodayEstimatedCreatorReward(userId: "${data}") {
      documentId
      activeDate
      pageview
      totalPageview
      reward
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
      userId: "${data.userId}"
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
  getCuratorRewards: data =>
    `Curator  {
    determineCuratorReward(
      userId: "${data.userId}"
      documentId: "${data.documentId}"
    ) {
      voteDate
      activeDate
      userId
      documentId
      reward
    }
  }`
};
