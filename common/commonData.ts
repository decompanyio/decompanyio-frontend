export default {
  // 기본 로그인 플랫폼
  defaultLoginPlatform: 'google',

  // 공통 타이틀
  commonTitle: ' | Polaris Share',

  // 공식 메일
  commonMail: 'connect@polarishare.com',

  // 메인 페이지 카테고리 리스트
  pathArr: ['mylist', 'popular', 'featured', 'latest', 'history'],

  // 태그 리스트 목업
  tagList: [
    'art',
    'beauty',
    'style',
    'literature',
    'culture',
    'entertainment',
    'food',
    'photography',
    'social',
    'design',
    'business',
    'economy',
    'leadership',
    'marketing',
    'etc',
    'programming',
    'cybersecurity',
    'academia',
    'science',
    'technology',
    'health',
    'travel',
    'pets',
    'psychology',
    'self',
    'sexuality',
    'education',
    'environment',
    'law',
    'history',
    'language',
    'media',
    'philosophy',
    'politics',
    'religion',
    'society',
    'world'
  ],

  // 메타 데이터 기본값
  metaData: {
    title: 'Polaris Share',
    extension: '',
    tag: '',
    seoTitle: 'Polaris Share',
    description: 'Sharing knowledge in new ways',
    twitter: {
      card: 'summary_large_image',
      site: '@Polaris Share',
      title: 'Polaris Share',
      description: 'Sharing knowledge in new ways',
      image: 'https://www.polarishare.com/logo.png',
      url: 'https://www.polarishare.com'
    },
    og: {
      /*eslint-disable @typescript-eslint/camelcase*/
      site_name: 'Polaris Share',
      image_width: '720',
      image_height: '498',
      /*eslint-disable @typescript-eslint/camelcase*/
      type: 'website',
      title: 'Polaris Share',
      description: 'Sharing knowledge in new ways',
      image: 'https://www.polarishare.com/logo.png',
      url: 'https://www.polarishare.com'
    }
  },

  // TODO 리워드풀 변경시 값 변경 또는 추가 작업 필요 합니다.
  // 크리에이터 리워드 풀
  creatorDailyRewardPool: Number(115068493148000000000000),

  // 큐레이터 리워드 풀
  curatorDailyRewardPool: Number(49315068492000000000000),

  // 트랙킹 딜레이 시간 : 3초
  trackingDelayTime: 3000,

  // alert 창 종료 시간: 7초
  alertRemainTime: 7000,

  // MyAvatar page 리스트 개수
  myPageListSize: 10,

  // common 리스트 개수
  commonPageListSize: 10,

  // 비공개 문서 보유 개수
  privateDocumentLimit: 10,

  // royalty 계산 기준일
  royaltyCalculatedDate: 7,

  // Style 설정
  style: {
    md: {
      max: {
        width: 767
      },
      min: {
        width: 768
      }
    },
    common: {
      margin: 15 // common margin
    },
    container: {
      width: 1280 // common container width
    }
  },

  dummyImage: {
    gray: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D'
  },

  familySite: ['www.polarishare.io', 'www.polarisoffice.com', 'English'],
  familySiteUrl: ['https://polarishare.io', 'https://www.polarisoffice.com'],

  whitepaperURL: {
    ko:
      'https://s3.ap-northeast-2.amazonaws.com/about.polarishare.com/POLARIS+SHARE+1.1_whitepaper_KOR.pdf',
    en:
      'https://s3.ap-northeast-2.amazonaws.com/about.polarishare.com/POLARIS+SHARE+1.1_whitepaper_ENG.pdf'
  },

  etherscanURL : {
    mainnet: 'https://etherscan.io/',
    ropsten: 'https://ropsten.etherscan.io/'
  }
}
