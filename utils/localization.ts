import commonData from '../common/commonData'

const strings = new Map([
  // main
  [
    'main-banner-subj-1',
    {
      KOR: '찾고 계신 문서가 있나요?',
      ENG: 'Looking for any documents?'
    }
  ],
  [
    'main-banner-subj-2',
    {
      KOR: '무료료 문서를 다운로드하려면',
      ENG: 'To download documents for free,'
    }
  ],
  [
    'main-banner-subj-3',
    {
      KOR: '당신의 잠재 고객을 성장시키세요!',
      ENG: 'Grow your audience!'
    }
  ],
  [
    'main-banner-btn-1',
    {
      KOR: '지금 검색해보세요',
      ENG: 'SearchButton now!'
    }
  ],
  [
    'main-banner-btn-2',
    {
      KOR: '회원가입 하기',
      ENG: 'Join now!'
    }
  ],
  [
    'main-banner-btn-3',
    {
      KOR: '지금 업로드하세요',
      ENG: 'profileUpload now!'
    }
  ],
  [
    'main-banner-btn-4',
    {
      KOR: '상세보기',
      ENG: 'Learn more'
    }
  ],
  [
    'main-banner-explain-1',
    {
      KOR:
        '최신, 추천, 인기 문서를 둘러보세요. \n관심 분야의 문서를 보고 싶다면 태그 검색도 해보세요.',
      ENG:
        'Check out the Latest, Featured and Popular documents.\n You can also search for documents in a specific topic by using tags.'
    }
  ],
  [
    'main-banner-explain-2',
    {
      KOR:
        '구글 또는 링크드인 계정이 있다면, 몇 번의 클릭만으로 쉽게 가입할 수 있습니다. \n 로그인하면 다양한 문서를 무료로 다운로드할 수 있습니다.',
      ENG:
        'Use your Google or LinkedIn account to sign up. It takes just a few clicks. \n After login, you can download documents for free.'
    }
  ],
  [
    'main-banner-explain-3',
    {
      KOR:
        '귀하의 슬라이드를 업로드하고 이를 외부 채널에도 공유하십시요. \n 잠재 고객들을 추적하고 연락처를 수집할 수 있습니다. ',
      ENG:
        'profileUpload your slides and share them through external channels.\n Connect with your prospects and track their activities.\n'
    }
  ],
  [
    'main-see-all',
    {
      KOR: '더보기',
      ENG: 'See All'
    }
  ],
  [
    'main-Category-latest',
    {
      KOR: '최신문서',
      ENG: 'latest'
    }
  ],
  [
    'main-Category-featured',
    {
      KOR: '추천문서',
      ENG: 'featured'
    }
  ],
  [
    'main-Category-popular',
    {
      KOR: '인기문서',
      ENG: 'popular'
    }
  ],
  [
    'main-Category-mylist',
    {
      KOR: '내가 찜한 문서',
      ENG: 'my list'
    }
  ],
  [
    'main-Category-history',
    {
      KOR: '내가 본 문서',
      ENG: 'history'
    }
  ],
  [
    'main-event-1',
    {
      KOR: '2020년 현재 폴라리스쉐어 서비스는 베타시즌으로 운영되고 있습니다.',
      ENG: 'As of 2020, Polaris ShareModal is operated during the Beta Season.'
    }
  ],
  [
    'main-event-2',
    {
      KOR:
        '지금 베타시즌에 업로드하시는 사용자에게는 본 시즌 전 에어드랍을 통해',
      ENG: 'We are planning to offer'
    }
  ],
  [
    'main-event-3',
    {
      KOR: '어마어마한 혜택',
      ENG: 'tremendous benefits'
    }
  ],
  [
    'main-event-4',
    {
      KOR: '을 제공할 예정이오니 많은 이용 바랍니다.',
      ENG:
        'to users who profileUpload Beta Season through AirDrop, so please use it a lot.'
    }
  ],
  [
    'main-event-5',
    {
      KOR:
        '* 폴라리스오피스를 사용하시는 유저분은 폴라리스오피스를 통해서도 라이브러리를 업로드 하실 수 있습니다',
      ENG:
        '* Polaris Office users can profileUpload their MainThirdSectionLibrary through Polaris Office.'
    }
  ],
  [
    'main-sectionTop-search',
    {
      KOR: '검색',
      ENG: 'SearchButton'
    }
  ],
  [
    'main-visual-1',
    {
      KOR: 'PC에서 잠자고 있는 ',
      ENG: 'What is the value of'
    }
  ],
  [
    'main-visual-2',
    {
      KOR: '라이브러리',
      ENG: 'MainThirdSectionLibrary'
    }
  ],
  [
    'main-visual-3',
    {
      KOR: '의 가치는 얼마일까요',
      ENG: ' that I was sleeping on my PC'
    }
  ],
  [
    'main-visual-4',
    {
      KOR: ' 하러가기',
      ENG: ' '
    }
  ],
  [
    'main-visual-5',
    {
      KOR: '나의 ',
      ENG: 'my '
    }
  ],
  [
    'main-visual-6',
    {
      KOR: '당신이 잠든 순간에도',
      ENG: 'Even the moment you fall asleep, '
    }
  ],
  [
    'main-visual-7',
    {
      KOR: '라이브러리',
      ENG: 'MainThirdSectionLibrary'
    }
  ],
  [
    'main-visual-8',
    {
      KOR: '는 전세계에서 ',
      ENG: ' is subscribed worldwide'
    }
  ],
  [
    'main-visual-9',
    {
      KOR: '구독됩니다',
      ENG: ' '
    }
  ],
  [
    'main-visual-10',
    {
      KOR: ' ',
      ENG: 'Your '
    }
  ],
  [
    'main-sectionSecond-section',
    {
      KOR: '라이브러리를 손쉽게 공유하는 방법',
      ENG: 'Easily ShareModal'
    }
  ],
  [
    'main-insight-slider-1',
    {
      KOR:
        'PC 또는 클라우드와 같은 저장매체에 묵혀있는 파일을 업로드하고 보상 받을 수 있어요.',
      ENG:
        'profileUpload your files here from your PC, cloud, and other storage media for RewardCard.'
    }
  ],
  [
    'main-insight-slider-2',
    {
      KOR: "업로드한 파일을 '라이브러리'라고 불러요.",
      ENG: 'The uploaded file is called a MainThirdSectionLibrary.'
    }
  ],
  [
    'main-insight-slider-3',
    {
      KOR:
        "라이브러리를 공개하는게 고민되시면, '비공개'로 업로드 하시고 나중에 공개로 변경하셔도 돼요.",
      ENG:
        "If you're concerned about releasing your MainThirdSectionLibrary, \n" +
        'you can profileUpload it as a "private" and change it to a public one later.'
    }
  ],
  [
    'main-insight-slider-4',
    {
      KOR: '라이브러리를 공개하면 좋은 점!',
      ENG: 'Open MainThirdSectionLibrary Advantage!'
    }
  ],
  [
    'main-insight-slider-5',
    {
      KOR: '하나. 투표하거나 유료공개를 통해서 수익을 얻을 수 있어요.',
      ENG: 'One. You can make a profit by voting or public relations.'
    }
  ],
  [
    'main-insight-slider-5-b',
    {
      KOR: ' (향후 적용 예정)',
      ENG: ' (Coming soon)'
    }
  ],
  [
    'main-insight-slider-6',
    {
      KOR: '두울. 구글과 같은 검색서비스에도 공개되어 유명세를 누릴 수 있어요.',
      ENG:
        'Two. You can enjoy fame by being exposed to search services like Google.'
    }
  ],
  [
    'main-insight-slider-7',
    {
      KOR:
        '세엣. 독자들의 투표를 받거나 조회 등의 뜨거운 반응으로 추가 보상을 받을 수 있어요',
      ENG:
        'Three. You can get additional RewardCard for voting by users or for enthusiastic responses.'
    }
  ],
  [
    'main-insight-slider-8',
    {
      KOR: '"주식보다 뿌듯한 내 문서 보상"',
      ENG: '"MyAvatar MainThirdSectionLibrary show better profits than stocks"'
    }
  ],
  [
    'main-library-1',
    {
      KOR: '필요한 라이브러리를 사용하시고 평가해 주세요',
      ENG: 'Use the required MainThirdSectionLibrary and evaluate'
    }
  ],
  [
    'main-tag-1',
    {
      KOR: '실시간',
      ENG: ' '
    }
  ],
  [
    'main-tag-2',
    {
      KOR: '추천',
      ENG: 'HOT'
    }
  ],
  [
    'main-tag-3',
    {
      KOR: '태그',
      ENG: 'Tag'
    }
  ],

  // viewer page
  [
    'viewer-page-title-1',
    {
      KOR: '해당 링크로 이동',
      ENG: 'Link to this URL'
    }
  ],
  [
    'viewer-page-sns-linkedin',
    {
      KOR: '링크드인 공유하기',
      ENG: 'ShareModal with Linkedin'
    }
  ],
  [
    'viewer-page-sns-fb',
    {
      KOR: '페이스북 공유하기',
      ENG: 'ShareModal with Facebook'
    }
  ],
  [
    'viewer-page-sns-twitter',
    {
      KOR: '트위터 공유하기',
      ENG: 'ShareModal with Twitter'
    }
  ],
  [
    'viewer-page-cc-title',
    {
      KOR:
        '이 저작물은 Creative Commons Attribution 2.0 Generic License 에 따라 사용이 허가되었습니다.',
      ENG:
        'This work is licensed under a Creative Commons Attribution 2.0 Generic License.'
    }
  ],
  [
    'viewer-page-carousel-private',
    {
      KOR: '이 문서는 비공개 상태입니다.',
      ENG: 'This documents is private.'
    }
  ],
  [
    'viewer-page-carousel-slide-mode-manual',
    {
      KOR: '수동 전환 모드로 변경',
      ENG: 'Switch to Manual Slide Mode'
    }
  ],
  [
    'viewer-page-carousel-slide-mode-auto',
    {
      KOR: '자동 전환 모드로 변경',
      ENG: 'Switch to AutoCompleteInput Slide Mode'
    }
  ],

  // FAQ
  [
    'faq-question-1',
    {
      KOR: '폴라리스 쉐어란 무엇인가요?',
      ENG: 'What is Polaris ShareModal?'
    }
  ],
  [
    'faq-answer-1',
    {
      KOR:
        '폴라리스 쉐어는 활용되지 않고 저장되어 있는 수만은 문서와 지식들을 활용하여, 미래의 고객을 발굴하고, 전문가 네트워크를 구축하여 새로운 비즈니스 기회 창출에 기여하는 플랫폼입니다.',
      ENG:
        'Polaris ShareModal is a platform that creates new business opportunities by sharing idle documents stored in your PC, helping you find new prospects, and establish your own network of experts.'
    }
  ],
  [
    'faq-question-2',
    {
      KOR: '폴라리스 쉐어는 어떻게 동작하나요?',
      ENG: 'How does Polaris ShareModal work?'
    }
  ],
  [
    'faq-answer-2',
    {
      KOR:
        '수많은 저자들에 의해서 공유된 문서들은 전문가 그룹의 집단 지성에 의해 큐레이션됩니다. 이런 활동이 자발적으로 일어나게 하기 위해서 블록체인 기술을 활용합니다.',
      ENG:
        'Documents shared by creators are curated by a collective of expert groups. Blockchain technology is used to encourage participation.'
    }
  ],
  [
    'faq-question-3',
    {
      KOR: '게시물에 대해 투표하는 데 비용이 들지 않나요?',
      ENG: 'Does it cost anything to VoteModal on a post?'
    }
  ],
  [
    'faq-answer-3',
    {
      KOR:
        '투표 활동에는 비용이 들지 않습니다. 투표에 사용한 토큰은 투표 기간이 끝나면 보상과 함께 돌려받습니다. (다만, 블록체인에 투표 기록을 저장하는 경우 가스비가 발생할 수 있습니다)',
      ENG:
        'No, voting is free. The tokens used for voting will be returned to you with RewardCard when the voting ends. (However, it may cost you gas if you wish to record your voting history in the blockchain.)'
    }
  ],
  [
    'faq-question-4',
    {
      KOR: '폴라리스 쉐어에서 토큰을 받을 수 있는 방법이 있나요?',
      ENG: 'Can I get digital tokens from Polaris ShareModal? If so, how?'
    }
  ],
  [
    'faq-answer-4a',
    {
      KOR:
        '크리에이터 : 매일 페이지뷰 수에 따라서 일정량의 보상을 토큰으로 지급받습니다.',
      ENG:
        'Creator: You will get a certain amount of tokens based on the page views on a daily basis.'
    }
  ],
  [
    'faq-answer-4b',
    {
      KOR:
        '큐레이터 : 토큰을 사용하여 고품질의 문서에 투표하면 해당 문서의 페이지뷰 수에 따라서 토큰으로 보상이 지급되며, 투표 기간이 끝나면 보상과 투표한 토큰을 함께 지급받습니다. ',
      ENG:
        'Curator: If you VoteModal on documents with your tokens, you will get tokens based on their page views as well as the tokens you used to VoteModal.'
    }
  ],
  [
    'faq-answer-4c',
    {
      KOR:
        '이 외에도 추후 암호화폐 거래소를 통해서 토큰을 구매할 수 있을 예정입니다.',
      ENG:
        "Also, we're planning to provide a feature where you can purchase tokens through a cryptocurrency exchange."
    }
  ],
  [
    'faq-question-5',
    {
      KOR: '계정은 어떻게 만드나요?',
      ENG: 'How can I create an account?'
    }
  ],
  [
    'faq-answer-5a',
    {
      KOR:
        '구글이나 링크드인 등의 소셜 계정으로 로그인하여 계정을 생성하실 수 있습니다. ',
      ENG:
        'You can log in with your Google account or a social media account (e.g. LinkedIn) and create an account.'
    }
  ],
  [
    'faq-answer-5b',
    {
      KOR:
        '크리에이터 보상을 받거나 투표를 하거나 투표를 받으려면 메타마스크를 통해서 사용자 계정에 이더리움 계정을 연결하면 됩니다.',
      ENG:
        'To receive RewardCard as a creator, or VoteModal or get voted on, link your Ethereum account to your user account via MetaMask.'
    }
  ],
  [
    'faq-question-6',
    {
      KOR: '내 계정 메뉴에서 사용할 수 있는 정보는 무엇인가요?',
      ENG: 'What kind of information can I access from MyAvatar Account?'
    }
  ],
  [
    'faq-answer-6a',
    {
      KOR: '총 보유량 : 토큰 총 보유량',
      ENG: 'Total balance: Total amount of tokens you currently have '
    }
  ],
  [
    'faq-answer-6b',
    {
      KOR:
        '오늘 예상 수익 : 오늘 하루 동안 예상 수익 (전체 또는 각각의 Creator, Curator 보상금) ',
      ENG:
        'Estimated earnings for today: Estimated revenue generated today (total amount of reward for both Creator and Curator, or individually)'
    }
  ],
  [
    'faq-answer-6c',
    {
      KOR:
        '지난 7일 간 수익 : 최근 7일간의 예상 수익 (전체 또는 각각의 Creator, Curator 보상금)',
      ENG:
        'Revenue for the last 7 days: Estimated revenue generated for the last 7 days (total amount of reward for both Creator and Curator, or individually)'
    }
  ],
  [
    'faq-question-7',
    {
      KOR: '최근 보상을 보려면 어떻게 해야 하나요?',
      ENG: 'How can I check the last reward I received?'
    }
  ],
  [
    'faq-answer-7',
    {
      KOR:
        '내 이름을 클릭하여 프로필 페이지로 이동하여 지갑 및 보상 정보를 확인할 수 있습니다.',
      ENG:
        'Go to your profile page and check your wallet and reward information.'
    }
  ],
  [
    'faq-question-8',
    {
      KOR: '내 프로필에 무엇이 표시되나요?',
      ENG: 'What information does my profile show?'
    }
  ],
  [
    'faq-answer-8',
    {
      KOR: '프로필 사진과 사용자 이름이 표시됩니다.',
      ENG: 'It shows your username and profile image.'
    }
  ],
  [
    'faq-question-9',
    {
      KOR: '폴라리스 쉐어에 게시 할 수 있는 항목은 무엇인가요?',
      ENG: 'What can I post on Polaris ShareModal?'
    }
  ],
  [
    'faq-answer-9',
    {
      KOR: 'ppt/pptx 그리고 pdf 를 지원합니다.',
      ENG: 'ppt/pptx and pdf'
    }
  ],
  [
    'faq-question-10',
    {
      KOR: '얼마나 자주 게시 할 수 있나요?',
      ENG: 'How often can I post?'
    }
  ],
  [
    'faq-answer-10',
    {
      KOR:
        '현재는 제한이 없지만 향후 1주일에 문서 1개로 제한할 계획입니다. 일정량의 토큰을 예치하면 더 많은 문서를 등록할 수 있습니다. ',
      ENG:
        'There is currently no limit on the number of posts. However, we plan to set a limit of one document per week and to allow Others posts to be updated when the user deposits a set of tokens.'
    }
  ],
  [
    'faq-question-11',
    {
      KOR: '내가 게시 한 것을 삭제할 수 있나요?',
      ENG: 'Can I delete my posts?'
    }
  ],
  [
    'faq-answer-11',
    {
      KOR:
        '현재는 고객지원을 요청해서 삭제할 수 있습니다. 추후 문서 관리 기능을 업데이트할 계획입니다.',
      ENG:
        'Currently, you have to contact our customer support to delete your posts. We plan to update the document management capabilities in the future.'
    }
  ],
  [
    'faq-question-12',
    {
      KOR: '블럭 체인에 의해 생성되는 새로운 토큰은 몇 개인가요?',
      ENG: 'How many new tokens are generated by the blockchain?'
    }
  ],
  [
    'faq-answer-12',
    {
      KOR: '토큰의 전체 통화량은 백서에 정의한 수량으로 고정되어 있습니다. ',
      ENG:
        'The total amount of tokens in circulation is set to a fixed amount defined in the white paper.'
    }
  ],
  [
    'faq-question-13',
    {
      KOR: '보상 풀이 무엇인가요?',
      ENG: 'What is a reward pool?'
    }
  ],
  [
    'faq-answer-13',
    {
      KOR:
        '매일 백서에 정의된 양의 보상 토큰이 자동으로 편성되는데 이를 리워드 풀(reward pool)이라고 합니다. 이 토큰들은 크리에이터나 큐레이터 등의 기여도에 따라서 매일 배분됩니다. ',
      ENG:
        'A certain amount of tokens is automatically allocated on a daily basis to create a reward pool. These tokens are distributed among creators and curators based on the level of their contribution.'
    }
  ],
  [
    'faq-question-14',
    {
      KOR: '보상금은 저자와 큐레이터간에 어떻게 나누어 지나요?',
      ENG: 'How are tokens distributed between creators and curators?'
    }
  ],
  [
    'faq-answer-14',
    {
      KOR:
        '문서 별로 매일 발생한 페이지뷰에 따라서 보상 토큰이 배분되며, 이를 백서에서 정의한 비율로 creator와 curator들이 나누어 가지는데, curator 보상은 투표량에 비례해서 배분합니다. ',
      ENG:
        'Tokens are distributed between creators and curators based on their daily page views using the ratio set by the white paper. The curator reward is distributed based on the votes they received.'
    }
  ],
  [
    'faq-question-15',
    {
      KOR: '폴라(POLA)는 무엇인가요?',
      ENG: 'What is POLA?'
    }
  ],
  [
    'faq-answer-15',
    {
      KOR:
        '폴라리스 쉐어에서 사용할 수 있는 디지털 화폐로서 이더리움 네트워크와 여러 거래소에서 거래할 수 있는 ERC20 규격의 암호화폐입니다. ',
      ENG:
        'POLA is an ERC20 digital currency designed for use on the Ethereum platform and other exchanges.'
    }
  ],
  [
    'faq-question-16',
    {
      KOR: '크리에이터는 실시간으로 보상을 받나요?',
      ENG: 'Do creators receive their RewardCard in real time?'
    }
  ],
  [
    'faq-answer-16',
    {
      KOR: '크리에이터 보상은 매일 0시~0시10분 GMT+0 사이에 정산됩니다. ',
      ENG: 'Creators are paid between 12:00 a.m. and 12:10 a.m. (GMT+0) daily.'
    }
  ],
  [
    'faq-question-17',
    {
      KOR: '큐레이터는 언제 보상을 받을 수 있나요?',
      ENG: 'When do curators receive their RewardCard?'
    }
  ],
  [
    'faq-answer-17',
    {
      KOR:
        '큐레이터 보상은 투표일로 부터 1주+2일 후에 투표에 사용한 토큰과 함께 지급받을 수 있습니다. ',
      ENG:
        'Curators receive RewardCard along with the tokens they used to VoteModal after one week and two days from the VoteModal.'
    }
  ],
  [
    'faq-question-18',
    {
      KOR: '크리에이터와 큐레이터의 보상은 어떠한 차이가 있나요?',
      ENG: 'How do the RewardCard for creators differ from those for curators?'
    }
  ],
  [
    'faq-answer-18',
    {
      KOR:
        '크리에이터와 큐레이터들은 각각 문서 별로 매일 발생한 보상의 70%와 30%를 지급받습니다.',
      ENG:
        'Creators and curators receive 70% and 30% of the daily RewardCard generated for each document respectively.'
    }
  ],

  // user profile
  [
    'profile-error-1',
    {
      KOR: '유져네임을 입력해 주십시오.',
      ENG: 'Please enter a username.'
    }
  ],
  [
    'profile-error-2',
    {
      KOR: '오직 소문자와 숫자만 허용됩니다.',
      ENG:
        'Your username must be a combination of lowercase letters and numbers.'
    }
  ],
  [
    'profile-error-3',
    {
      KOR: '4~20자 이내의 영문과 숫자가 섞어 입력해 주십시오.',
      ENG:
        'It must be between 4 to 20 characters containing both letters and numbers.'
    }
  ],
  [
    'profile-edit',
    {
      KOR: '수정',
      ENG: 'Edit'
    }
  ],
  [
    'profile-total-balance',
    {
      KOR: '총 보유량 : ',
      ENG: 'Total balance :'
    }
  ],
  [
    'profile-estimated-earnings',
    {
      KOR: '오늘 예상 수익 : ',
      ENG: 'Estimated earnings for today :'
    }
  ],
  [
    'profile-revenue-7-days',
    {
      KOR: '지난 7일 간 수익 : ',
      ENG: 'Revenue for the last 7 days :'
    }
  ],
  [
    'profile-ProfileAuthor-RewardCard',
    {
      KOR: '크리에이터 보상',
      ENG: 'Creator RewardCard'
    }
  ],
  [
    'profile-curator-RewardCard',
    {
      KOR: '큐레이터 보상',
      ENG: 'Curator RewardCard'
    }
  ],
  [
    'profile-uploaded',
    {
      KOR: '업로드',
      ENG: 'Uploaded'
    }
  ],
  [
    'profile-voted',
    {
      KOR: '투표',
      ENG: 'Voted'
    }
  ],
  [
    'profile-ProfileAnalytics',
    {
      KOR: '통계분석',
      ENG: 'Analytics'
    }
  ],
  [
    'profile-total-documents',
    {
      KOR: '총 문서량 :',
      ENG: 'Total documents :'
    }
  ],
  [
    'profile-payout-txt-1',
    {
      KOR: '7일간 크리에이터 지급액 ',
      ENG: 'Creator payout'
    }
  ],
  [
    'profile-payout-txt-2',
    {
      KOR: '',
      ENG: 'in 7 days'
    }
  ],
  [
    'profile-payout-txt-3',
    {
      KOR: '7일간 큐레이터 지급액',
      ENG: 'Curator payout'
    }
  ],
  [
    'profile-err-1',
    {
      KOR: '존재하지 않는 계정입니다.',
      ENG: 'This account does not exist.'
    }
  ],

  // alert
  [
    'alert-2001',
    {
      KOR: '네트워크 오류가 발생했습니다.',
      ENG: 'A network error has occurred.'
    }
  ],
  [
    'alert-2002',
    {
      KOR: '잘못된 접근입니다.',
      ENG: 'Invalid access.'
    }
  ],
  [
    'alert-2003',
    {
      KOR: '로그인이 필요합니다.',
      ENG: 'You need to login sectionFirst.'
    }
  ],
  [
    'alert-2004',
    {
      KOR: '로그인 실패',
      ENG: 'LoginButton failed'
    }
  ],
  [
    'alert-2005',
    {
      KOR: '복사 성공',
      ENG: 'Copy Success'
    }
  ],
  [
    'alert-2006',
    {
      KOR: '새로운 콘텐트가 있습니다. 새로고침 해주세요.',
      ENG: 'New content is available, please refresh.'
    }
  ],
  [
    'alert-2007',
    {
      KOR: '복사 실패',
      ENG: 'Copy Failed'
    }
  ],
  [
    'alert-2021',
    {
      KOR: '이메일 검증 성공',
      ENG: 'The email address has been verified.'
    }
  ],
  [
    'alert-2022',
    {
      KOR: '이메일 검증 실패',
      ENG: 'The email address has been failed.'
    }
  ],
  [
    'alert-2023',
    {
      KOR: '이미 인증되었습니다.',
      ENG: 'Already verified.'
    }
  ],
  [
    'alert-2024',
    {
      KOR: '유효하지 않은 인증코드 입니다.',
      ENG: 'Invalid verification code.'
    }
  ],
  [
    'alert-2031',
    {
      KOR: '클레임 가능한 보상액이 0 원입니다.',
      ENG: 'Not enough RewardCard to ProfileUploadClaim.'
    }
  ],
  [
    'alert-2032',
    {
      KOR: '인출 요청 실패',
      ENG: 'Failed to claim.'
    }
  ],
  [
    'alert-2033',
    {
      KOR: '인출 성공',
      ENG: 'Successfully claim.'
    }
  ],
  [
    'alert-2071',
    {
      KOR: '업로드 실패',
      ENG: 'profileUpload failed'
    }
  ],
  [
    'alert-2072',
    {
      KOR: `비공개 문서 업로드는 ${commonData.privateDocumentLimit}개까지 허용됩니다.`,
      ENG: `You can upload up to ${commonData.privateDocumentLimit} private documents.`
    }
  ],
  [
    'alert-2073',
    {
      KOR: '문서 삭제 실패',
      ENG: 'Failed to delete documents'
    }
  ],
  [
    'alert-2074',
    {
      KOR: '비공개 문서 개수',
      ENG: 'Number of private documents'
    }
  ],
  [
    'alert-2074-sub-a',
    {
      KOR: `${commonData.privateDocumentLimit}개 중 `,
      ENG: ' '
    }
  ],
  [
    'alert-2074-sub-b',
    {
      KOR: ' 개',
      ENG: ` out of ${commonData.privateDocumentLimit}`
    }
  ],
  [
    'alert-2075',
    {
      KOR: '문서 컴파일 성공',
      ENG: 'Document compilation succeeded '
    }
  ],
  [
    'alert-2076',
    {
      KOR: '문서 삭제 성공',
      ENG: 'Successfully deleted documents'
    }
  ],
  [
    'alert-2077',
    {
      KOR: '문서 업로드 성공',
      ENG: 'Successfully uploaded documents'
    }
  ],
  [
    'alert-2078',
    {
      KOR: '문서 컴파일 실패',
      ENG: 'Document compile failed'
    }
  ],
  [
    'alert-2079',
    {
      KOR: '허용되지 않는 확장자 입니다.',
      ENG: 'This extension is not allowed.'
    }
  ],
  [
    'alert-2091',
    {
      KOR: '다운로드 실패',
      ENG: 'Download failed'
    }
  ],
  [
    'alert-2092',
    {
      KOR: '다운로드 실패',
      ENG: 'Document profileUpload failed'
    }
  ],
  [
    'alert-2093',
    {
      KOR: '투표 실패',
      ENG: 'Document VoteModal failed'
    }
  ],
  [
    'alert-2121',
    {
      KOR: '내가 찜한 목록에 등록하였습니다.',
      ENG: 'This document has been added to my list.'
    }
  ],
  [
    'alert-2122',
    {
      KOR: '내가 찜한 목록에 등록을 실패하였습니다.',
      ENG: 'Failed to add my list.'
    }
  ],
  [
    'alert-2123',
    {
      KOR: '내가 찜한 목록에서 삭제하였습니다.',
      ENG: 'Removed from add my list.'
    }
  ],
  [
    'alert-2124',
    {
      KOR: '내가 찜한 목록에서 삭제를 실패하였습니다.',
      ENG: 'Failed to remove from add my list.'
    }
  ],
  [
    'alert-2141',
    {
      KOR: '유저네임 수정을 성공하였습니다.',
      ENG: 'Successfully edited username.'
    }
  ],
  [
    'alert-2142',
    {
      KOR: '유저네임 수정을 실패하였습니다.',
      ENG: 'Failed to edit username.'
    }
  ],
  [
    'alert-2143',
    {
      KOR: '프로필 이미지 수정을 성공하였습니다.',
      ENG: 'Successfully edited profile image.'
    }
  ],
  [
    'alert-2144',
    {
      KOR: '프로필 이미지 수정을 실패하였습니다.',
      ENG: 'Failed to edit profile image.'
    }
  ],
  [
    'alert-2145',
    {
      KOR: '이미지 파일로 업로드 부탁드립니다.',
      ENG: 'Please profileUpload image file.'
    }
  ],
  [
    'alert-2151',
    {
      KOR: '검색 할 태그가 없습니다.',
      ENG: 'There are no tags to search.'
    }
  ],

  // Common
  [
    'common-modal-cancel',
    {
      KOR: '취소',
      ENG: 'Cancel'
    }
  ],
  [
    'common-modal-settings',
    {
      KOR: '설정',
      ENG: 'Settings'
    }
  ],
  [
    'common-modal-profileUpload',
    {
      KOR: '업로드',
      ENG: 'profileUpload'
    }
  ],
  [
    'common-modal-title',
    {
      KOR: '제목',
      ENG: 'ProfileUploadTitle'
    }
  ],
  [
    'common-modal-description',
    {
      KOR: '설명',
      ENG: 'Description'
    }
  ],
  [
    'common-modal-file',
    {
      KOR: '파일',
      ENG: 'File'
    }
  ],
  [
    'common-modal-tag',
    {
      KOR: '태그',
      ENG: 'Tags'
    }
  ],
  [
    'common-modal-status',
    {
      KOR: '상태',
      ENG: 'Status'
    }
  ],
  [
    'common-modal-option',
    {
      KOR: '옵션',
      ENG: 'Options'
    }
  ],
  [
    'common-modal-approve',
    {
      KOR: '승인',
      ENG: 'Approve'
    }
  ],
  [
    'common-modal-confirm',
    {
      KOR: '확인',
      ENG: 'Confirm'
    }
  ],
  [
    'common-modal-done',
    {
      KOR: '완료',
      ENG: 'Done'
    }
  ],
  [
    'common-modal-later',
    {
      KOR: '나중에',
      ENG: 'Later'
    }
  ],
  [
    'common-modal-copy',
    {
      KOR: '복사',
      ENG: 'Copy'
    }
  ],
  [
    'common-modal-publish',
    {
      KOR: '출판',
      ENG: 'PublishModal'
    }
  ],

  [
    'common-modal-deposit',
    {
      KOR: '입금',
      ENG: 'DepositModal'
    }
  ],
  [
    'common-modal-withdraw',
    {
      KOR: '출금',
      ENG: 'WithdrawModal'
    }
  ],
  [
    'common-modal-delete',
    {
      KOR: '삭제',
      ENG: 'Delete'
    }
  ],
  [
    'common-modal-Others-option',
    {
      KOR: '추가 옵션',
      ENG: 'More Options'
    }
  ],
  [
    'common-year',
    {
      KOR: '년',
      ENG: 'year'
    }
  ],
  [
    'common-month',
    {
      KOR: '개월',
      ENG: 'month'
    }
  ],
  [
    'common-day',
    {
      KOR: '일',
      ENG: 'day'
    }
  ],
  [
    'common-hour',
    {
      KOR: '시간',
      ENG: 'hour'
    }
  ],
  [
    'common-minute',
    {
      KOR: '분',
      ENG: 'minute'
    }
  ],
  [
    'common-sectionSecond',
    {
      KOR: '초',
      ENG: 'second'
    }
  ],
  [
    'common-times',
    {
      KOR: '',
      ENG: 's'
    }
  ],
  [
    'common-ago',
    {
      KOR: ' 전',
      ENG: ' ago'
    }
  ],
  [
    'title-placeholder',
    {
      KOR: '업로드 문서 제목',
      ENG: 'ProfileUploadTitle of the uploading document'
    }
  ],
  [
    'description-placeholder',
    {
      KOR: '업로드 문서 설명',
      ENG: 'Description of the uploading document'
    }
  ],
  [
    'file-placeholder',
    {
      KOR: '문서를 업로드 하려면 클릭하세요',
      ENG: 'Click here to profileUpload document'
    }
  ],

  // Approve modal
  [
    'approve-title',
    {
      KOR: 'POLA 승인',
      ENG: 'Approve POLA'
    }
  ],
  [
    'approve-explain-1',
    {
      KOR:
        'POLA를 사용하여 투표하려면, Polaris ShareModal 컨트랙트가 당신을 대신해서 POLA를 전송할 수 있도록 최초 한 번 승인해야 합니다. 승인이 완료되기 전까지는 귀하는 문서에 투표할 수 없습니다.',
      ENG:
        'To VoteModal on a document using your POLA, you must approve the Polaris ShareModal Contract to transfer your POLA on your behalf for the sectionFirst time. You will not be able to VoteModal on documents until approved.'
    }
  ],
  [
    'approve-explain-2',
    {
      KOR:
        "'Approve'를 클릭하고 나면, 투표를 완료하기 위해서 트랜잭션에 사인하라는 요청이 한 번 더 표시될 것입니다. ",
      ENG:
        "After clicking 'Approve,' you will be asked to sign a transaction to complete the VoteModal once again. "
    }
  ],

  // Cookie Policy modal
  [
    'cookie-policy-content',
    {
      KOR:
        '우리는 유저들에게 서비스를 제공하고 이를 개선하기 위해서 쿠키를 사용합니다. 우리 사이트를 사용함으로써 귀하는 쿠키 정책에 동의하게됩니다.',
      ENG:
        'We use cookies to improve your experience. By your continued use of this site, you accept our cookies policy.'
    }
  ],

  // Dollor Learn More modal
  [
    'dollar-learn-Others-subj',
    {
      KOR: 'POLA 테스트 토큰에 대한 중요 공지',
      ENG: 'Important notice about the POLA test token'
    }
  ],
  [
    'dollar-learn-Others-explain-1',
    {
      KOR:
        'Polaris ShareModal 알파 버전에서는 POLA 토큰을 테스트하여 응용 프로그램에서 올바르게 작동하는지 확인합니다.',
      ENG:
        'In the alpha version, POLA tokens are tested to ensure that the application program works as desired.'
    }
  ],
  [
    'dollar-learn-Others-explain-2',
    {
      KOR:
        '무료 POLA 테스트 토큰으로 Polaris ShareModal 서비스를 자유롭게 경험해보십시오. 테스트 기간이 끝나면 POLA 테스트 토큰도 만료됩니다.',
      ENG:
        'It is recommended to use free POLA test tokens to get a hands-on experience of the Polaris ShareModal service. Test tokens expire at the end of the test.'
    }
  ],
  [
    'dollar-learn-Others-explain-3',
    {
      KOR:
        '테스트에 적극적으로 참여하는 사용자는 상용 버전의 Polaris Share를 열 때 적절한 보상을 제공할 예정입니다.',
      ENG:
        'When the commercial version launches, users will be rewarded based on their participation in the test.'
    }
  ],
  [
    'dollar-learn-Others-btn',
    {
      KOR: '알겠습니다',
      ENG: 'I got it.'
    }
  ],

  // Edit Document modal
  [
    'edit-doc-error-1',
    {
      KOR: '제목은 한 글자 보다 길어야 합니다.',
      ENG: 'ProfileUploadTitle must be longer than 1 character.'
    }
  ],
  [
    'edit-doc-error-2',
    {
      KOR: '적어도 1개의 태그를 입력해야 합니다.',
      ENG: 'You must enter at least 1 tag.'
    }
  ],
  [
    'edit-doc-subj',
    {
      KOR: '업로드 문서 수정',
      ENG: 'Edit uploaded document'
    }
  ],
  [
    'doc-option-1',
    {
      KOR: '문서 열람 시 이메일 입력 팝업 표시',
      ENG: 'Enable pop-up window requesting email address.'
    }
  ],
  [
    'doc-option-2',
    {
      KOR: '문서 열람 시 이메일 입력 강제',
      ENG:
        'Require users to enter their email address when accessing the documents.'
    }
  ],
  [
    'doc-option-3',
    {
      KOR: '문서 내려받기 허용',
      ENG: 'Enable document downloads.'
    }
  ],
  [
    'edit-cc-license',
    {
      KOR: 'CC 라이센스',
      ENG: 'CC License'
    }
  ],
  [
    'doc-private',
    {
      KOR: '비공개',
      ENG: 'Private'
    }
  ],
  [
    'doc-public',
    {
      KOR: '공개',
      ENG: 'Public'
    }
  ],

  // RegBlockchain button
  [
    'register-btn',
    {
      KOR: '등록',
      ENG: 'Register'
    }
  ],

  // EmailModal modal - basic
  [
    'email-modal-basic-subj',
    {
      KOR: '이 문서의 내용이 도움이 되셨나요?',
      ENG: 'Was this document helpful to you?'
    }
  ],
  [
    'email-modal-basic--explain-1',
    {
      KOR:
        '아래 이메일 수신을 수락하시면 이 문서의 저자로부터 새로운 소식을 받아볼 수 있습니다.',
      ENG:
        'You may opt-in to receive the latest news from the creator of this document.'
    }
  ],

  // EmailModal modal - request
  [
    'email-modal-request-subj',
    {
      KOR: '이 문서의 내용이 도움이 되셨나요?',
      ENG: 'Was this document helpful to you?'
    }
  ],
  [
    'email-modal-request-explain-1',
    {
      KOR:
        '이 문서의 저자에게 귀하의 연락처를 남겨보세요. 저자로부터 새로운 소식을 받을 수 있습니다.',
      ENG:
        'Leave your contact information to receive the latest news from the creator of this document.'
    }
  ],
  [
    'email-modal-request-explain-2',
    {
      KOR:
        '입력하신 이메일은 폴라리스쉐어의 개인정보 처리 정책에 따라서 수집되고 활용됩니다.',
      ENG:
        "The email address you provided is collected and used in accordance with the Polaris ShareModal's Privacy Policy."
    }
  ],
  [
    'email-modal-request-btn',
    {
      KOR: '제출하고 수신 수락',
      ENG: 'Submit and Accept'
    }
  ],

  // EmailModal modal - force
  [
    'email-modal-force-subj',
    {
      KOR: '연락처를 남겨주세요.',
      ENG: 'Please leave your contact information.'
    }
  ],
  [
    'email-modal-force-explain-1',
    {
      KOR:
        '이 문서를 보시려면 귀하의 연락처를 남겨주세요. 저자로부터 새로운 소식을 받을 수 있습니다. ',
      ENG:
        'Please enter your contact information to view this document. You will receive the latest news from the creator.'
    }
  ],

  // EmailModal modal
  [
    'email-modal-subj-1',
    {
      KOR: '연락처를 남겨주세요.',
      ENG: 'Please leave your contact information.'
    }
  ],
  [
    'email-modal-subj-2',
    {
      KOR: '이 문서의 내용이 마음에 드시나요?',
      ENG: 'Do you like the contents of this documents?'
    }
  ],
  [
    'email-modal-explain-1',
    {
      KOR:
        '이 문서를 보시려면 귀하의 연락처를 남겨주세요. 저자로부터 새로운 소식을 받을 수 있습니다.',
      ENG:
        'Submit your email address and check the email message containing the registration link to proceed with the registration. The information you provided below can be viewed by the content creator.'
    }
  ],
  [
    'email-modal-explain-2',
    {
      KOR:
        '이 정보를 제출하는데 동의합니다. 제출된 데이터는 폴라리스 쉐어의 개인정보 처리 정책에 따라서 수집되고 활용됩니다.',
      ENG:
        'I agree to submit this information which will be collected and used in accordance with DeCompany’s Privacy Policy.'
    }
  ],
  [
    'email-modal-explain-3',
    {
      KOR: ' 폴라리스 쉐어의 개인정보 처리 정책 ',
      ENG: 'Polaris ShareModal’s privacy policy.'
    }
  ],
  [
    'email-modal-explain-4',
    {
      KOR:
        '이 문서의 저자에게 귀하의 연락처를 남겨보세요. 저자로부터 새로운 소식을 받을 수 있습니다.',
      ENG:
        'Please leave your contact information to the ProfileAuthor of this documents. You can receive new news from the ProfileAuthor.'
    }
  ],
  [
    'email-modal-error-1',
    {
      KOR: '이메일 양식에 맞지 않습니다.',
      ENG: 'Your email address is invalid.'
    }
  ],
  [
    'email-modal-btn-ok',
    {
      KOR: '제출',
      ENG: 'Submit'
    }
  ],
  [
    'email-modal-btn-cancel-1',
    {
      KOR: '다음에',
      ENG: 'Later'
    }
  ],
  [
    'email-modal-btn-cancel-2',
    {
      KOR: '돌아가기',
      ENG: 'Back'
    }
  ],

  // profileUpload Document modal
  [
    'profileUpload-doc-subj',
    {
      KOR: '문서 업로드',
      ENG: 'profileUpload document'
    }
  ],
  [
    'profileUpload-doc-check',
    {
      KOR: '문서 파일을 업로드 해주세요.',
      ENG: 'Please profileUpload a document file.'
    }
  ],
  [
    'profileUpload-doc-subj-2',
    {
      KOR: '문서 업로드 성공',
      ENG: 'Successfully uploaded'
    }
  ],
  [
    'profileUpload-doc-desc-2',
    {
      KOR:
        '현재 업로드된 문서는 Private(비공개) 상태입니다. 문서를 공개하려고 하신다면, Public(공개) 상태로 변경해 주시기 바랍니다.',
      ENG:
        'The uploaded document is set to Private. To allow public access, please change the setting to Public.'
    }
  ],
  [
    'profileUpload-doc-desc-3',
    {
      KOR: `현재 ${commonData.privateDocumentLimit}개의 비공개 문서를 보유중 입니다. 이후에 문서를 업로드하시려면, 보유하신 비공개 문서를 Public(공개) 상태로 변경해 주시기 바랍니다.`,
      ENG: `You currently have ${commonData.privateDocumentLimit} private documents. To upload your document later, please change it from Private to Public.`
    }
  ],
  [
    'profileUpload-doc-desc-4-a',
    {
      KOR: '현재 고객님의 비공개 문서는 ',
      ENG: 'You currently have '
    }
  ],
  [
    'profileUpload-doc-desc-4-b',
    {
      KOR: `개이며, 최대 ${commonData.privateDocumentLimit}개까지만 업로드할 수 있습니다.`,
      ENG: ` private documents, and you can only upload up to ${commonData.privateDocumentLimit} of them.`
    }
  ],

  // PrivateDocumentCountModal
  [
    'private-doc-modal-desc',
    {
      KOR: `현재 ${commonData.privateDocumentLimit}개의 비공개 문서를 보유중 입니다. 이후에 문서를 업로드하시려면, 보유하신 비공개 문서를 Public(공개) 상태로 변경해 주시기 바랍니다.`,
      ENG: `You currently have ${commonData.privateDocumentLimit} private documents. To upload your document later, please change it from Private to Public.`
    }
  ],
  [
    'private-doc-modal-subj',
    {
      KOR: '비공개 문서 보유 한도 초과',
      ENG: 'Exceeded private document retention limit'
    }
  ],
  [
    'private-doc-modal-btn',
    {
      KOR: '마이페이지로 이동',
      ENG: 'Link to MyAvatar page'
    }
  ],

  // VoteModal Document modal
  [
    'VoteModal-modal-title',
    {
      KOR: '문서에 투표하기',
      ENG: 'VoteModal on document'
    }
  ],
  [
    'VoteModal-modal-err-1',
    {
      KOR: '투표액은 0보다 큰 값이어야 합니다.',
      ENG: 'The amount for voting must be greater than zero.'
    }
  ],
  [
    'VoteModal-modal-err-2',
    {
      KOR: '투표액은 잔고보다 작은 값이어야 합니다.',
      ENG: 'The amount for voting must be less than the balance.'
    }
  ],
  [
    'VoteModal-modal-subj-1',
    {
      KOR: '1. 투표된 총 토큰량',
      ENG: '1. Total amount of tokens voted'
    }
  ],
  [
    'VoteModal-modal-subj-2',
    {
      KOR: '2. 사용 가능한 토큰량',
      ENG: '2. Amount of tokens available'
    }
  ],
  [
    'VoteModal-modal-subj-3',
    {
      KOR: '3. 투표로 예치할 토큰량을 입력하세요',
      ENG: '3. Enter the amount of tokens to VoteModal'
    }
  ],
  [
    'VoteModal-modal-note',
    {
      KOR: '알림: 투표에 사용된 토큰은 8일 후에 인출할 수 있습니다.',
      ENG:
        'Note: The tokens you used to VoteModal can be withdrawn after 8 days.'
    }
  ],
  [
    'VoteModal-modal-tooltip-1',
    {
      KOR: '이 문서에 투표하기',
      ENG: 'VoteModal on this document'
    }
  ],
  [
    'VoteModal-modal-tooltip-2',
    {
      KOR: '로그인 부탁드립니다',
      ENG: 'Please, login'
    }
  ],
  [
    'VoteModal-modal-tooltip-3',
    {
      KOR: '메타마스트 사용 부탁드립니다',
      ENG: 'Please, work with MetaMask'
    }
  ],
  [
    'VoteModal-modal-btn',
    {
      KOR: '투표',
      ENG: 'VoteModal'
    }
  ],
  [
    'VoteModal-modal-you',
    {
      KOR: '나',
      ENG: 'You'
    }
  ],
  [
    'VoteModal-modal-total',
    {
      KOR: '총액',
      ENG: 'Total'
    }
  ],

  // Copy modal
  [
    'share-modal-btn',
    {
      KOR: '공유',
      ENG: 'ShareModal'
    }
  ],
  [
    'share-modal-title',
    {
      KOR: '공유하기',
      ENG: 'ShareModal'
    }
  ],
  [
    'copy-short-url',
    {
      KOR: 'Short URL',
      ENG: 'Short URL'
    }
  ],
  [
    'copy-embed-url',
    {
      KOR: 'Embed URL',
      ENG: 'Embed URL'
    }
  ],
  [
    'tooltip-copy',
    {
      KOR: '문서 공유하기',
      ENG: 'ShareModal this document'
    }
  ],

  // ProfileAnalytics modal
  [
    'ProfileAnalytics-modal-title',
    {
      KOR: '분석하기',
      ENG: 'Analytics'
    }
  ],

  [
    'ProfileAnalytics-modal-btn',
    {
      KOR: '분석',
      ENG: 'Analytics'
    }
  ],
  [
    'tooltip-ProfileAnalytics',
    {
      KOR: '문서 분석하기',
      ENG: 'ProfileAnalytics this document'
    }
  ],

  // Download button
  [
    'download-btn',
    {
      KOR: '다운로드',
      ENG: 'Download'
    }
  ],
  [
    'tooltip-download',
    {
      KOR: '문서 다운로드하기',
      ENG: 'Download this document'
    }
  ],

  // tracking button
  [
    'tracking-btn',
    {
      KOR: '트랙킹',
      ENG: 'Tracking'
    }
  ],
  [
    'tooltip-tracking',
    {
      KOR: '잠재 고객 추적하기',
      ENG: 'Track activity of your audience'
    }
  ],

  // header
  [
    'sectionTop-Category-1',
    {
      KOR: '최신',
      ENG: 'LATEST'
    }
  ],
  [
    'sectionTop-Category-2',
    {
      KOR: '추천',
      ENG: 'FEATURED'
    }
  ],
  [
    'sectionTop-Category-3',
    {
      KOR: '인기',
      ENG: 'POPULAR'
    }
  ],

  // Content view Right
  [
    'see-also-text',
    {
      KOR: '관련 문서',
      ENG: 'See also'
    }
  ],

  // Payout information
  [
    'payout-text',
    {
      KOR: '크리에이터 지급액',
      ENG: 'Creator payout $'
    }
  ],
  [
    'payout-text-2',
    {
      KOR: '크리에이터 예상 지급액 ',
      ENG: 'Creator could be paid'
    }
  ],
  [
    'payout-registered',
    {
      KOR: '블록체인에 미등록',
      ENG: 'NOT REGISTERD TO THE BLOCKCHAIN'
    }
  ],

  // profile card
  [
    'profile-card-total-balance',
    {
      KOR: '총 보유액',
      ENG: 'Total Balance'
    }
  ],
  [
    'profile-card-my-page',
    {
      KOR: '마이 페이지',
      ENG: 'MyAvatar page'
    }
  ],
  [
    'profile-card-login',
    {
      KOR: '로그인',
      ENG: 'LoginButton'
    }
  ],
  [
    'profile-card-logout',
    {
      KOR: '로그아웃',
      ENG: 'Log out'
    }
  ],

  // Custom ProfileAnalyticsChart
  [
    'CustomChart-tracking-option-title',
    {
      KOR: '페이지당 총 소요시간',
      ENG: 'TOTAL TIME PER PAGE'
    }
  ],
  [
    'CustomChart-date',
    {
      KOR: '날짜',
      ENG: 'Date'
    }
  ],
  [
    'CustomChart-visit-count',
    {
      KOR: '방문자 수',
      ENG: 'Visit Count'
    }
  ],
  [
    'CustomChart-page',
    {
      KOR: '페이지',
      ENG: 'page'
    }
  ],
  [
    'CustomChart-time-spend-min',
    {
      KOR: '소요 시간 (분)',
      ENG: 'Time Spend (Min)'
    }
  ],

  // tracking AlertList
  [
    'tracking-list-option-hide',
    {
      KOR: '익명 숨김',
      ENG: 'Hide Anonymous'
    }
  ],
  [
    'tracking-list-option-show',
    {
      KOR: '익명 표시',
      ENG: 'Show Anonymous'
    }
  ],
  [
    'tracking-list-option-exclude',
    {
      KOR: '1 페이지 제외',
      ENG: 'Exclude only one page'
    }
  ],
  [
    'tracking-list-option-include',
    {
      KOR: '1 페이지 포함',
      ENG: 'Include only one page'
    }
  ],
  [
    'tracking-list-err-1',
    {
      KOR: '올바른 경로로 접근해주시기 바랍니다.',
      ENG: 'Please access through the correct path.'
    }
  ],
  [
    'tracking-list-export',
    {
      KOR: '내보내기',
      ENG: 'Export'
    }
  ],
  [
    'tracking-list-visitors',
    {
      KOR: '방문자 목록',
      ENG: 'Visitors'
    }
  ],
  [
    'tracking-list-anonymous',
    {
      KOR: '익명',
      ENG: 'Anonymous'
    }
  ],
  [
    'tracking-list-name',
    {
      KOR: '성명',
      ENG: 'Name'
    }
  ],
  [
    'tracking-list-views',
    {
      KOR: '조회수',
      ENG: 'Views'
    }
  ],
  [
    'tracking-list-last',
    {
      KOR: '최근 조회날짜',
      ENG: 'Last Viewed'
    }
  ],
  [
    'tracking-list-view-count',
    {
      KOR: '조회수',
      ENG: 'view count'
    }
  ],
  [
    'tracking-list-view-times',
    {
      KOR: '',
      ENG: 's'
    }
  ],
  [
    'tracking-list-viewed',
    {
      KOR: '열람률',
      ENG: 'Viewed'
    }
  ],
  [
    'tracking-list-no-data',
    {
      KOR: '데이터 없음',
      ENG: 'No data'
    }
  ],

  // tracking detail
  [
    'tracking-detail-back',
    {
      KOR: '방문자 리스트로 돌아가기',
      ENG: 'Back to visitor list'
    }
  ],

  // AutoCompleteInput AutoSuggestInput input
  [
    'auto-placeholder-1',
    {
      KOR: '태그 검색',
      ENG: 'MainFirstSectionTag SearchButton'
    }
  ],
  [
    'auto-placeholder-2',
    {
      KOR: '이름 검색',
      ENG: 'Name SearchButton'
    }
  ],

  // Dollar Policy modal
  [
    'dollar-policy-content',
    {
      KOR:
        '이곳에 표시된 달러 금액은 테스트 토큰이며 실제 금액이 아닌 오직 참조 값입니다.',
      ENG:
        'The dollar amount shown here is for test tokens. It is for reference purposes and does not reflect the actual amount.'
    }
  ],
  [
    'dollar-policy-learn-Others',
    {
      KOR: '상세 보기',
      ENG: 'view details'
    }
  ],

  // MenuAvatar
  [
    'MenuAvatar-3',
    {
      KOR: 'Linkedin 공식계정',
      ENG: 'Official Linkedin'
    }
  ],
  [
    'MenuAvatar-login',
    {
      KOR: '로그인',
      ENG: 'LoginButton'
    }
  ],
  [
    'MenuAvatar-sign-out',
    {
      KOR: '로그아웃',
      ENG: 'Log out'
    }
  ],
  [
    'MenuAvatar-5',
    {
      KOR: '연락처',
      ENG: 'Connect With Us'
    }
  ],

  // Guide
  [
    'guide-subj-main',
    {
      KOR: '유저 가이드',
      ENG: 'UserAvatar Guide'
    }
  ],
  [
    'guide-subj-1',
    {
      KOR: '문서업로드 하기',
      ENG: 'profileUpload documents'
    }
  ],
  [
    'guide-content-1',
    {
      KOR:
        '문서의 제목, 설명, 태그 등의 정보를 입력하고 업로드하면 문서가 공유됩니다.',
      ENG:
        'AddButton a title, description and tag, and profileUpload a document to share.'
    }
  ],
  [
    'guide-subj-2',
    {
      KOR: '문서 등록',
      ENG: 'Register documents'
    }
  ],
  [
    'guide-content-2',
    {
      KOR:
        '소셜 + 지갑 로그인 후 문서를 업로드하면 자동으로 문서 등록 절차를 진행하며, 문서가 등록되면 저자보상과 투표를 받을 수 있음 (7일간 투표량에 따라서 featured 탭 순위가 결정됨)',
      ENG:
        'Log into your social and wallet account, and profileUpload a document. It will be registered automatically and you will receive creator RewardCard and votes. (The ranking in the Featured tap is determined based on the votes received for the last 7 days.)'
    }
  ],
  [
    'guide-subj-3',
    {
      KOR: '크리에이터 보상금 산정하기',
      ENG: 'Calculate creator RewardCard'
    }
  ],
  [
    'guide-content-3',
    {
      KOR:
        '등록된 문서들에 대해서 매일 0시(GMT+0) 당일 전체 보상금의 70%를 문서 별 이전 하루 동안의 페이지뷰에 비례해서 배분 됩니다.',
      ENG:
        '70% of the total RewardCard is distributed per document based on its page views at 00:00 (GMT+0) on a daily basis.'
    }
  ],
  [
    'guide-subj-4',
    {
      KOR: '크리에이터 보상금 청구하기',
      ENG: 'ProfileUploadClaim creator RewardCard'
    }
  ],
  [
    'guide-content-4',
    {
      KOR:
        '마이 페이지의 uploaded 탭에서 문서 별로 ProfileUploadClaim 버튼을 클릭하면 지금까지 일별로 산정된 누적 보상금을 수령할 수 있습니다.',
      ENG:
        'Click on the ProfileUploadClaim button for each document in the Uploaded tab of the MyAvatar profile page to receive your RewardCard settled on a daily basis.'
    }
  ],
  [
    'guide-subj-5',
    {
      KOR: '토큰 보유량 확인 하기',
      ENG: 'Check token balance'
    }
  ],
  [
    'guide-content-5',
    {
      KOR:
        '마이 페이지 또는 메타마스크 등의 지갑에서 토큰 보유량을 확인할 수 있습니다.',
      ENG:
        'Check your token balance on MyAvatar profile page or MetaMask wallet.'
    }
  ],
  [
    'guide-subj-6',
    {
      KOR: '투표하기',
      ENG: 'VoteModal'
    }
  ],
  [
    'guide-content-6',
    {
      KOR:
        '문서 뷰어 페이지에서 투표하기 버튼을 클릭하고 해당 문서에 투표할 토큰수를 입력하여 투표하면 됩니다.',
      ENG:
        'Click on the VoteModal button on the document viewer page and enter the amount of tokens to VoteModal.'
    }
  ],
  [
    'guide-subj-7',
    {
      KOR: '투표금 예치 기간',
      ENG: 'Token deposit period '
    }
  ],
  [
    'guide-content-7',
    {
      KOR:
        '투표에 사용한 토큰은 투표한 날짜부터 1주+1일간 해당 문서에 귀속됩니다.',
      ENG:
        'The tokens you used for voting will be deposited to the document for one week and one day from the date of voting.'
    }
  ],
  [
    'guide-subj-8',
    {
      KOR: '큐레이터 보상금 산정하기',
      ENG: 'Calculate curator RewardCard'
    }
  ],
  [
    'guide-content-8',
    {
      KOR:
        '당일 페이지 뷰가 발생한 문서들에 대해서 매일 0시(GMT+0) 당일 전체 보상금의 30%를 문서 별 이전 하루 동안의 페이지뷰의 제곱에 비례해서 배분하고, 이를 다시 투표한 토큰수에 비례하여 배분됩니다.',
      ENG:
        '30% of the total RewardCard is distributed per document based on the square of its page views a day before, and is also distributed based on the tokens voted. '
    }
  ],
  [
    'guide-subj-9',
    {
      KOR: '큐레이터 보상금 청구하기',
      ENG: 'ProfileUploadClaim curator RewardCard'
    }
  ],
  [
    'guide-content-9',
    {
      KOR:
        '내 프로필 페이지의 voted 탭에서 문서 별로 ProfileUploadClaim 버튼을 클릭하면, 예치기간이 만료된 투표에 대해서 지금까지 정산 완료된 누적 보상금과 예치금을 수령할 수 있습니다.',
      ENG:
        'Click on the ProfileUploadClaim button in the Voted tab of the MyAvatar profile page to receive the total RewardCard you have earned through voting of which deposit period has expired.'
    }
  ],
  [
    'guide-subj-10',
    {
      KOR: '같은 저자의 문서',
      ENG: 'Documents uploaded by the same creator'
    }
  ],
  [
    'guide-content-10',
    {
      KOR:
        '문서 뷰어 페이지 내의 저자 이름을 클릭하여 저자 프로필 페이지로 이동한 후 uploaded 또는 voted 탭에서 열람할 문서를 클릭하시면 됩니다.',
      ENG:
        'Click on the name of creator on the document viewer page to go to their profile page where you can view documents in the uploaded or voted tab.'
    }
  ],
  [
    'guide-subj-11',
    {
      KOR: '유사한 주제의 문서',
      ENG: 'Documents on similar topics'
    }
  ],
  [
    'guide-content-11',
    {
      KOR:
        '문서 뷰어 페이지 내의 태그를 클릭하여 해당 태그의 문서 목록으로 이동한 후, 열람할 문서를 선택하시면 됩니다.',
      ENG:
        'Click on the tag on the document viewer page to access a list of documents with the same tag and select a document to view.'
    }
  ],
  [
    'guide-subj-12',
    {
      KOR: '다른 문서 탐색하기',
      ENG: 'Browse other documents'
    }
  ],
  [
    'guide-content-12',
    {
      KOR:
        '사이트 로고를 클릭하여 메인 페이지로 이동한 후 최신, 추천, 인기 문서 목록 열람 또는 태그 검색하시면 됩니다.',
      ENG:
        'Click on the site logo to go to the main page and check the list titled Latest, Recommended and Popular. You can also search documents using tags.'
    }
  ],
  [
    'guide-subj-13',
    {
      KOR: 'FooterSNS 공유하기',
      ENG: 'ShareModal on social media'
    }
  ],
  [
    'guide-content-13',
    {
      KOR:
        '문서 뷰어 페이지에서 공유하려는 소셜 매체의 아이콘을 클릭하여 내 소셜 매체에 문서를 포스팅하시면 됩니다.',
      ENG:
        'Click on the social media icon on the document viewer page and post a document on the social media website.'
    }
  ],
  [
    'guide-subj-14',
    {
      KOR: '문서 링크 공유하기',
      ENG: 'ShareModal document link'
    }
  ],
  [
    'guide-content-14',
    {
      KOR:
        '문서 뷰어 페이지에서 공유 버튼을 클릭하면 문서 공유창이 표시되며, 여기서 문서의 공유 링크를 복사한 후, 이메일 또는 메신저 등에 공유하시면 됩니다.',
      ENG:
        'Click on the ShareModal button on the document viewer page to open the window where you can copy the link to share it via email or messenger.'
    }
  ],
  [
    'guide-subj-15',
    {
      KOR: '외부 사이트에 문서 첨부',
      ENG: 'Attach documents to external site'
    }
  ],
  [
    'guide-content-15',
    {
      KOR:
        '문서 뷰어 페이지에서 공유 버튼을 클릭하면 문서 공유창이 표시되며, 여기서 Embed Code를 복사한 후, 공유할 사이트에 붙여넣기를 하시면 됩니다.',
      ENG:
        'Click on the ShareModal button on the document viewer page to open the window where you can copy the embedded code and paste it on the website to share it.'
    }
  ],

  // PublishModal modal
  [
    'tooltip-publish',
    {
      KOR: '출판하기',
      ENG: 'PublishModal this documents'
    }
  ],
  [
    'tooltip-deposit',
    {
      KOR: '입금하기',
      ENG: 'DepositModal'
    }
  ],
  [
    'publish-modal-title',
    {
      KOR: '문서 출판하기',
      ENG: 'PublishModal documents'
    }
  ],
  [
    'publish-modal-desc-1',
    {
      KOR:
        '현재 문서는 Public(공개) 상태로 전환 될것입니다. 문서를 블록체인에 등록해보세요. 전문가들이 당신의 문서를 투표하고, 조회수에 따라 크리에이터 보상도 받을 수 있습니다.',
      ENG:
        'This documents will be transitioned to the Public state. Register the documents in the block chain. Experts can VoteModal on your documents and receive creator RewardCard based on views.'
    }
  ],
  [
    'publish-modal-desc-2',
    {
      KOR:
        "현재 문서는 Public(공개) 상태로 전환 될것입니다. 계속해서 문서를 블록체인에 등록하시려면 약간의 가스비가 필요합니다. 메타마스크 팝업에서 '승인' 버튼을 클릭하면 등록됩니다. 문서가 체인에 등록되면 이후로는 수정할 수 없지만 크리에이터 보상과 추천을 받을 수 있습니다.",
      ENG:
        "The current document will be transitioned to the Public state. If you want to continue adding documents to the block chain, you will need a small gas bill. Click the 'OK' button in the meta mask popup to register. Once a document is registered in the chain, you will not be able to edit it later, but you can get creator compensation and referrals."
    }
  ],
  [
    'publish-modal-confirm-btn',
    {
      KOR: '공개 및 등록하기',
      ENG: 'PublishModal and Register'
    }
  ],
  [
    'publish-modal-publish-btn',
    {
      KOR: '출판하기',
      ENG: 'PublishModal'
    }
  ],

  // PublishModal modal Complete
  [
    'publish-modal-complete-title',
    {
      KOR: '귀하의 문서가 공개되었습니다!',
      ENG: 'Your document is published!'
    }
  ],
  [
    'publish-modal-complete-explain',
    {
      KOR:
        '이제 몇 시간 후부터는 검색엔진에서 당신의 문서가 검색될 것입니다. 외부에서 당신의 문서를 참조하는 링크가 많아지면 검색 결과의 상단에 노출되는데 도움이 됩니다.',
      ENG:
        'After a few hours, your document will be retrieved from the search engine. More links to your documents from outside can help you reach the ProfileAuthor of your search results.'
    }
  ],
  [
    'publish-modal-complete-subject',
    {
      KOR: '당신의 문서를 세상에 공유해보세요.',
      ENG: 'ShareModal your document with the world.'
    }
  ],
  [
    'publish-modal-complete-copy-url',
    {
      KOR: '문서 링크 복사하기',
      ENG: 'Copy document link'
    }
  ],
  [
    'publish-modal-complete-copied',
    {
      KOR: '복사완료!',
      ENG: 'Copied!'
    }
  ],

  // DepositModal modal
  [
    'deposit-modal-title',
    {
      KOR: '입금하기',
      ENG: 'DepositModal'
    }
  ],
  [
    'deposit-modal-copied',
    {
      KOR: '복사완료!',
      ENG: 'Copied!'
    }
  ],

  // WithdrawModal modal
  [
    'withdraw-modal-title',
    {
      KOR: '출금하기',
      ENG: 'WithdrawModal'
    }
  ],
  [
    'withdraw-modal-subj-1',
    {
      KOR: '총 잔액',
      ENG: 'Total balance'
    }
  ],
  [
    'withdraw-modal-subj-2',
    {
      KOR: '출금액',
      ENG: 'Amount'
    }
  ],
  [
    'withdraw-modal-err-1',
    {
      KOR: '출금액은 0보다 큰 값이어야 합니다.',
      ENG: 'The amount for withdrawing must be greater than zero.'
    }
  ],
  [
    'withdraw-modal-err-2',
    {
      KOR: '출금액은 잔고보다 작은 값이어야 합니다.',
      ENG: 'The amount for withdrawing must be less than the balance.'
    }
  ],

  // Delete Document modal
  [
    'delete-modal-title',
    {
      KOR: '문서 삭제하기',
      ENG: 'Delete documents'
    }
  ],
  [
    'delete-modal-desc',
    {
      KOR: '삭제시 재복구가 불가능합니다. 그래도 문서를 삭제하시겠습니까? ',
      ENG:
        'It can not be restored when deleted. Are you sure you want to delete the documents?'
    }
  ],

  // Creator ProfileUploadClaim
  [
    'claim-text',
    {
      KOR: '클레임',
      ENG: 'ProfileUploadClaim'
    }
  ],
  [
    'claim-msg-2',
    {
      KOR: '올바른 계정 로그인 필요',
      ENG: 'Please log in with the correct account.'
    }
  ],
  [
    'claim-btn-text-1',
    {
      KOR: '완료',
      ENG: 'Complete'
    }
  ],
  [
    'claim-btn-text-2',
    {
      KOR: '팬딩중',
      ENG: 'pending'
    }
  ],

  // Helmet title
  [
    'helmet-title-about-us',
    {
      KOR: '회사소개',
      ENG: 'About us'
    }
  ],
  [
    'helmet-title-guide',
    {
      KOR: '유저 가이드',
      ENG: 'UserAvatar Guide'
    }
  ],
  [
    'helmet-title-mylist',
    {
      KOR: '내가 찜한 문서',
      ENG: 'MyAvatar AlertList'
    }
  ],
  [
    'helmet-title-history',
    {
      KOR: '내가 본 문서',
      ENG: 'History'
    }
  ],
  [
    'helmet-title-terms',
    {
      KOR: '이용약관',
      ENG: 'Terms of Service'
    }
  ],
  [
    'helmet-title-privacy',
    {
      KOR: '개인정보처리방침',
      ENG: 'Privacy Policy'
    }
  ],
  [
    'helmet-title-latest',
    {
      KOR: '최신문서',
      ENG: 'Latest'
    }
  ],
  [
    'helmet-title-featured',
    {
      KOR: '추천문서',
      ENG: 'Featured'
    }
  ],
  [
    'helmet-title-popular',
    {
      KOR: '인기문서',
      ENG: 'Popular'
    }
  ],

  // away modal
  [
    'away-modal-desc-1',
    {
      KOR: '',
      ENG: 'You will change to AwayModal mode after'
    }
  ],
  [
    'away-modal-desc-2',
    {
      KOR: ' 초 뒤 자리비움 모드로 변경됩니다.',
      ENG: 'seconds.'
    }
  ],
  [
    'away-modal-away-mode',
    {
      KOR: '자리비움 모드',
      ENG: 'AWAY mode'
    }
  ],

  // bookmark
  [
    'bookmark-add',
    {
      KOR: '내가 찜한 문서에 추가',
      ENG: 'AddButton to MyAvatar AlertList'
    }
  ],
  [
    'bookmark-remove',
    {
      KOR: '내가 찜한 문서에서 삭제',
      ENG: 'Remove from MyAvatar AlertList'
    }
  ],

  // Content AddButton
  [
    'content-add-publish-btn',
    {
      KOR: '출판 시작하기',
      ENG: 'Start to publish'
    }
  ],
  [
    'content-add-drag-drop',
    {
      KOR: '드래그 앤 드롭 또는 클릭하여 파일 선택',
      ENG: 'Drag & Drop or Click to profileUpload document'
    }
  ],
  [
    'content-add-click',
    {
      KOR: '클릭하여 파일 선택',
      ENG: 'Click to profileUpload document'
    }
  ],
  [
    'content-add-write-contents',
    {
      KOR: '당신의 컨텐츠를 작성해보세요 . . .',
      ENG: 'Write your contents . . .'
    }
  ],
  [
    'content-add-post-add',
    {
      KOR: '새 글 작성',
      ENG: 'AddButton Post'
    }
  ],

  // Image Crop modal
  [
    'image-crop-modal-subject',
    {
      KOR: '프로필 사진 자르기',
      ENG: 'Crop profile image'
    }
  ],

  // Pagenation
  [
    'page-nation-title-prev',
    {
      KOR: '이전 목록으로',
      ENG: 'Go to previous list'
    }
  ],
  [
    'page-nation-title-next',
    {
      KOR: '다음 목록으로',
      ENG: 'Go to next list'
    }
  ],

  // Terms
  [
    'terms-title',
    {
      KOR: '이용약관',
      ENG: 'Terms of Service'
    }
  ],
  [
    'terms-desc-1',
    {
      KOR:
        'Polaris Share에 오신 것을 환영합니다! 귀하와 Decompany, Inc. ' +
        '(이하 "우리", "당사") 간의 본 계약 ("계약")은',
      ENG:
        'Welcome to Polaris ShareModal! This agreement (the “Agreement”) between you and Decompany, ' +
        'Inc.(“we”, “us”, “our”) sets out your rights to access and use of'
    }
  ],
  [
    'terms-desc-2',
    {
      KOR:
        '및 당사가 제공하는 기타 제품 또는 서비스에 대한 액세스 및 사용에 대한 귀하의 권리를 명시합니다. 서비스"). ' +
        '본 계약을 수락하고 회사, 조직, 정부 또는 기타 법인을 대신하여 서비스를 사용하는 경우, ' +
        '귀하는 귀하가 그렇게 할 권한이 있음을 진술하고 보증하며 그러한 단체를 본 계약에 구속 할 권한이 있습니다. ' +
        '서비스에 액세스함으로써 귀하는 본 계약을 읽고, 이해하고 수락한다는 데 동의합니다.',
      ENG:
        'and any other products or services provided by us (the “Service”). ' +
        'If you are accepting this Agreement and using the Services on behalf of a company, ' +
        'organization, government, or other legal entity, ' +
        'you represent and warrant that you are authorized to do so and have the authority to bind such entity to this Agreement. ' +
        'By accessing our Service, you agree that you have read, understood and accepted this Agreement.'
    }
  ],
  [
    'terms-desc-3',
    {
      KOR:
        '본 계약을 변경하기로 결정한 경우, 위의 "최종 업데이트"날짜를 업데이트하거나 ',
      ENG:
        'If we decide to make changes to this Agreement,' +
        'we will provide notice of those changes by updating the “Last Updated” date above or posting notice on '
    }
  ],
  [
    'terms-desc-4',
    {
      KOR:
        '에 공지함으로써 변경 사항에 대한 통지를 제공합니다. ' +
        '서비스를 계속 사용하면 변경 사항에 대한 수락 여부를 확인할 수 있습니다.',
      ENG:
        'Your continued use of the Service will confirm your acceptance of the changes.'
    }
  ],
  [
    'terms-1-title',
    {
      KOR: '1. 개인 정보 보호 정책',
      ENG: '1. Privacy Policy'
    }
  ],
  [
    'terms-1-desc',
    {
      KOR:
        '당사가 귀하에 관한 정보를 수집, 사용 및 공개하는 방법에 대한 정보는 개인 정보 보호 정책을 참조하십시오.',
      ENG:
        'Please refer to our Privacy Policy for information about how we' +
        'collect, use, and disclose information about you.'
    }
  ],
  [
    'terms-2-title',
    {
      KOR: '1. 자격',
      ENG: '2. Eligibility'
    }
  ],
  [
    'terms-2-desc',
    {
      KOR:
        '본 서비스는 13 세 미만의 사용자를 대상으로 하지 않으며 사용 대상이 아닙니다. ' +
        '본 서비스에 액세스하거나 사용하려면 13 세 이상이어야 합니다. 만 13 세에서 18 세 사이 (또는 귀하가 거주하는 법적 성년) 인 경우 ' +
        '본 계약에 구속되는 데 동의하는 부모 또는 법적 보호자의 감독하에 서비스에 액세스하거나 사용할 수 있습니다.',
      ENG:
        'The Service is not targeted toward, nor intended for use by, anyone' +
        'under the age of 13. You must be at least 13 years of age to access or' +
        'use of the Service. If you are between 13 and 18 years of age (or the' +
        'age of legal majority where you reside), you may only access or use' +
        'the Service under the supervision of a parent or legal guardian who' +
        'agrees to be bound by this Agreement.'
    }
  ],
  [
    'terms-3-title',
    {
      KOR: '3. 저작권 및 제한된 라이센스',
      ENG: '3. Copyright and Limited License'
    }
  ],
  [
    'terms-3-desc-1',
    {
      KOR:
        '당사는 당사가 제공하는 데이터, 텍스트, 사진, 이미지, 비디오, 오디오, 그래픽, 기사, 주석, 소프트웨어, 코드, 스크립트 및 ' +
        '기타 컨텐츠 또는 라이센스 제공자를 보유 할 수 있습니다. Polaris ShareModal 콘텐츠는 미국 및 외국의 저작권 및 기타 독점권을 포함한 지적 재산권 법률의 보호를 받습니다. ' +
        '본 계약서에 명시 적으로 명시된 경우를 제외하고 Polaris ShareModal Content 사용에 대한 명시 적 또는 묵시적 권리를 부여하지 않습니다.',
      ENG:
        'We may retain data, text, photographs, images, video, audio, graphics,' +
        'articles, comments, software, code, scripts, and other content' +
        'supplied by us. Except as explicitly stated in this Agreement, we do' +
        'not grant any express or implied rights to use Polaris ShareModal Content.'
    }
  ],
  [
    'terms-3-desc-2',
    {
      KOR:
        '귀하는 귀하의 개인적인 사용을 위해 서비스 및 Polaris ShareModal 컨텐츠에 액세스하고 이를 사용하기 위한 제한적, 비 독점적, 양도 불능 및 재사용 불가능한 라이센스를 부여 받습니다.  귀하는 자신이 생성하거나 소유 한 컨텐츠 ("귀하의 컨텐츠")에 대한 소유권 및 책임을 보유합니다. 자신을 만들지 않았거나 권리를 소유하지 않은 내용을 게시하는 경우 게시 한 모든 내용에 대한 책임은 귀하에게 있습니다. 게시 할 권리가있는 콘텐츠 만 제출할 것입니다. 귀하가 게시하는 컨텐츠와 관련된 제 3 자 라이센스를 완전히 준수해야합니다.',
      ENG:
        'You are granted a limited, non-exclusive, non-transferable, and' +
        'non-sublicensable license to access and use the Service and Polaris' +
        'ShareModal Content for your personal use. You retain ownership of and' +
        'responsibility for Content you create or own ("Your Content"). If' +
        "you're posting anything you did not create yourself or do not own the" +
        'rights to, you agree that you are responsible for any Content you' +
        'post; that you will only submit Content that you have the right to' +
        'post; and that you will fully comply with any sectionThird-party licenses' +
        'relating to Content you post.'
    }
  ],
  [
    'terms-4-title',
    {
      KOR: '4. 상표권 정책',
      ENG: '4. Trademark Policy'
    }
  ],
  [
    'terms-4-desc-1',
    {
      KOR:
        '"Polaris ShareModal", Polaris ShareModal 로고 및 서비스 상에 나타날 수 있는 기타 제품 또는 서비스 이름, 로고, ' +
        '슬로건은 당사의 상표이며, ' +
        '전부 또는 일부를 복사, 모방 또는 사용해서는 안됩니다. ' +
        '명시 적으로 허용되지 않거나 처음에 당사로부터 서면 허가를 받지 않은 경우. ',
      ENG:
        '“Polaris ShareModal,”, the Polaris ShareModal logo and any other product or' +
        'service names, logos, slogans that may appear on the Service are' +
        'trademarks of the company, and, may not be copied, imitated,' +
        'or used, in whole or in part, unless explicitly permitted or without' +
        'sectionFirst receiving written permission from us to do so. The look and feel' +
        'of '
    }
  ],
  [
    'terms-4-desc-2',
    {
      KOR:
        '및 서비스의 모양과 느낌은 저작권 당사에 의해 보호됩니다. 명시 적 서면 허가없이 HTML, CSS, Javascript 또는 시각적 디자인 요소 또는 개념의 일부를 복제, 복사 또는 재사용 할 수 없습니다.',
      ENG:
        'and the' +
        'Service is protected by copyright © Decompany, Inc. All rights' +
        'reserved. You may not duplicate, copy, or reuse any portion of the' +
        'HTML/CSS, Javascript, or visual design elements or concepts without' +
        'express written permission.'
    }
  ],
  [
    'terms-4-desc-3',
    {
      KOR:
        '당사 서비스에서 언급되거나 사용 된 기타 모든 상표, ' +
        '등록 상표, 제품 이름 및 회사 이름 또는 로고는 해당 소유자의 자산이며 해당 내용의 허가없이 전체 또는 부분적으로 복사, ' +
        '모방 또는 사용될 수 없습니다. 상표권자. 이름, 상표, 제조업체, 공급 업체 또는 다른 방법으로 제품, ' +
        '서비스, 프로세스 또는 기타 정보를 언급했다고 해서 우리에 의한 보증, 후원 또는 추천을 의미하지는 않습니다.',
      ENG:
        'All other trademarks, registered trademarks, product names and company' +
        'names or logos mentioned or used on our Service are the property of' +
        'their respective owners and may not be copied, imitated, or used, in' +
        'whole or in part, without the permission of the applicable trademark' +
        'holder. Reference to any products, services, processes or other' +
        'information by name, trademark, manufacturer, supplier or otherwise' +
        'does not constitute or imply endorsement, sponsorship, or' +
        'recommendation by us.'
    }
  ],
  [
    'terms-5-title',
    {
      KOR: '5. 위험의 가정, 책임의 한계.',
      ENG: '5. Assumption of Risk, Limitations on Liability.'
    }
  ],
  [
    'terms-5-desc-1',
    {
      KOR:
        '5.1. 귀하는 인터넷 기반 POLA 블록 체인 계정 서비스 이용과 관련된 위험이 있음을 인정하고 이에 동의합니다. 여기에는 하드웨어, 소프트웨어 및 인터넷 연결의 실패 위험, 악성 소프트웨어 도입 위험 및 제 3의 위험 - 귀하의 개인 키 ("개인 키")를 포함하되 이에 국한되지 않는 귀하의 계정에 저장되거나 연결된 개인 정보에 무단으로 액세스 할 수 있습니다. 귀하는 서비스 사용시 발생할 수 있는 통신 실패, 중단, 오류, 왜곡 또는 지연에 대해 당사가 책임지지 않음을 인정하고 인정합니다.',
      ENG:
        '5.1. You accept and acknowledge that there are risks associated with' +
        'utilizing an Internet-based POLA blockchain account service including,' +
        'but not limited to, the risk of failure of hardware, software and' +
        'Internet connections, the risk of malicious software introduction, and' +
        'the risk that sectionThird-parties may obtain unauthorized access to' +
        'information stored within or associated with your Account, including,' +
        'but not limited to your private key(s) (“Private Key”). You accept and' +
        'acknowledge that we will not be responsible for any communication' +
        'failures, disruptions, errors, distortions, or delays you may' +
        'experience when using the Services, however caused.'
    }
  ],
  [
    'terms-5-desc-2',
    {
      KOR:
        '5.2. 우리는 서비스의 내용, 서비스를 통해 액세스 할 수있는 정보 및 기능, 제 3 자 웹 사이트에 대한 하이퍼 링크 또는 관련된 보안 위반에 대해 어떠한 종류의 명시 적 또는 묵시적, 법정 또는 기타 어떠한 형태의 진술이나 보증도하지 않습니다. 서비스 또는 서비스와 연결된 모든 웹 사이트를 통한 정보의 전송.',
      ENG:
        '5.2. We make no representation or warranty of any kind, express or' +
        'implied, statutory, or otherwise, regarding the contents of the' +
        'Service, information and functions made accessible through the' +
        'Service, any hyperlinks to sectionThird-party websites, nor for any breach of' +
        'security associated with the transmission of information through the' +
        'Service or any website linked to by the Service.'
    }
  ],
  [
    'terms-5-desc-3',
    {
      KOR:
        '5.3. 우리는 다음과 같은 사항으로 인해 발생하는 손실, 손해 및 클레임을 포함하여 (단, 이에 국한되지는 않음) ' +
        '당사의 서비스 이용에 대한 손실에 대해 귀하에게 책임을 지지 않으며 그에 대해 책임을 지지 않습니다. ' +
        '잊어버린 암호, 잘못 구성된 거래 또는 잘못 입력 된 POLA 블록 체인 주소 (b) 서버 오류 또는 데이터 손실. ' +
        '(c) 손상된 계정 파일. (d) 애플리케이션에 대한 무단 액세스. ' +
        '(e) 바이러스, 피싱, 무차별 공격 또는 서비스 또는 서비스에 대한 기타 공격 수단의 사용을 포함하되 이에 국한되지 않는 ' +
        '제 3 자의 허가되지 않은 제 3 자 활동등.',
      ENG:
        '5.3. We will not be responsible or liable to you for any loss and take' +
        'no responsibility for and will not be liable to you for any use of our' +
        'Services, including but not limited to any losses, damages or claims' +
        'arising from: (a) UserAvatar error such as forgotten passwords, incorrectly' +
        'constructed transactions, or mistyped POLA blockchain addresses; (b)' +
        'Server failure or data loss; (c) Corrupted Account files; (d)' +
        'Unauthorized access to applications; (e) Any unauthorized sectionThird-party' +
        'activities, including without limitation the use of viruses, phishing,' +
        'brute forcing or other means of attack against the Service or Services.'
    }
  ],
  [
    'terms-5-desc-4',
    {
      KOR:
        '5.4. 우리는 서비스 또는 이를 사용할 수 있는 서버가 바이러스 나 오류가 없고, 내용이 정확하고, ' +
        '중단되지 않거나, 결함이 수정 될 것이라는 보증을 하지 않습니다. ' +
        '우리는 서비스에 포함 된 내용이나 정보에 의존하여 취한 조치 또는 모든 종류의 손실에 대해 귀하에게 어떠한 ' +
        '책임이나 의무도지지 않습니다.',
      ENG:
        '5.4. We make no warranty that the Service or the server that makes it' +
        'available, are free of viruses or errors, that its content is' +
        'accurate, that it will be uninterrupted, or that defects will be' +
        'corrected. We will not be responsible or liable to you for any loss of' +
        'any kind, from action taken, or taken in reliance on material, or' +
        'information, contained on the Service.'
    }
  ],
  [
    'terms-5-desc-5',
    {
      KOR:
        '5.5. 아래 6.1 조항에 의거하여 모든 면책, 보증, 조건 및 조건 (명시 적이든 묵시적이든)이 ' +
        '뉴욕 법에 따라 허용되는 한도까지 배제됩니다.',
      ENG:
        '5.5. We will not be liable, in contract, or tort (including, without' +
        'limitation, negligence), other than where we have been fraudulent or' +
        'made negligent misrepresentations.'
    }
  ],
  [
    'terms-5-desc-6',
    {
      KOR:
        '5.6. 우리는 사기성 또는 과실로 허위 진술 한 경우를 제외하고는 책임을 지지 않으며, ' +
        '계약 또는 불법 행위 (과실 포함)를 하지 않습니다.',
      ENG:
        '5.6. Nothing in this Agreement excludes or limits liability for death' +
        'or personal injury caused by negligence, fraudulent misrepresentation,' +
        'or any other liability which may not otherwise be limited or excluded' +
        'under United States law.'
    }
  ],
  [
    'terms-6-title',
    {
      KOR: '6. 제 3 자 서비스 및 컨텐츠에 대한 책임 없음',
      ENG: '6. No Liability for sectionThird-Party Services and Content'
    }
  ],
  [
    'terms-6-desc',
    {
      KOR:
        '6.1. 서비스 사용시, 귀하는 웹 페이지 및 해당 당사자의 서비스 ("제 3 자 콘텐츠")에 대한 링크를 포함하여 제 3자가 제공하는 서비스를 사용하거나 콘텐츠를 볼 수 있습니다. ' +
        '우리는 제 3 자 콘텐츠를 통제, 보증 또는 채택하지 않으며 귀하의 관할 지역에서 오도 된 정보, 불완전 정보, ' +
        '오류, 불쾌감, 외설적 인 내용 또는 기타 불쾌한 내용을 포함하여 제 3 자 콘텐츠에 대한 책임을 지지 않습니다. ' +
        '또한 그러한 제 3 자와의 거래 또는 서신은 전적으로 귀하와 제 3 자 사이에 있습니다. ' +
        '당사는 그러한 거래로 인해 발생하는 모든 유형의 손실이나 손해에 대해 책임을 지지 않으며 귀하는 ' +
        '제 3 자 콘텐츠 사용 및 제 3 자와의 상호 작용에 따른 위험 부담을 이해합니다.',
      ENG:
        '6.1. In using our Services, you may view content or utilize services' +
        'provided by sectionThird parties, including links to web pages and services' +
        'of such parties (“sectionThird-Party Content”). We do not control, endorse,' +
        'or adopt any sectionThird-Party Content and will have no responsibility for' +
        'sectionThird-Party Content including, without limitation, material that may' +
        'be misleading, incomplete, erroneous, offensive, indecent, or' +
        'otherwise objectionable in your jurisdiction. In addition, your' +
        'dealings or correspondence with such sectionThird parties are solely between' +
        'you and the sectionThird parties. We are not responsible or liable for any' +
        'loss or damage of any sort incurred because of any such dealings and' +
        'you understand that your use of sectionThird-Party Content, and your' +
        'interactions with sectionThird parties, is at your own risk.'
    }
  ],
  [
    'terms-7-title',
    {
      KOR: '7. 계정 등록',
      ENG: '7. Account Registration'
    }
  ],
  [
    'terms-7-desc-1',
    {
      KOR:
        '7.1. polarisshare.com에게 무료로 계정을 만들 수 있습니다. ' +
        '서비스의 일부를 사용하려면 POLA 블록 체인(“추후 서비스 예정”) 계정("계정")을 만들어야 합니다. ' +
        '귀하가 계정을 만들 때 귀하는 귀하의 계정에 대한 액세스 및 또는 통제를 상실 할 수 있으므로 다음주의 사항을 지켜야합니다. ' +
        '(b) 정확하고 정보를 제공하십시오. (c) 귀하의 계정 암호 및 귀하의 컴퓨터 및 계정에 대한 액세스를 보호하여 계정의 보안을 유지해야합니다. ' +
        '(e) 귀하의 계정과 관련된 보안 위반을 발견하거나 의심되는 경우 즉시 알려주십시오.',
      ENG:
        '7.1. You need not use a POLA blockchain account provided by us, and' +
        'you can create an account independently of the Service. If you would' +
        'like to use part of the Service, you must create a POLA blockchain' +
        'account (“Account”). When you create an Account, you are strongly' +
        'advised to take the following precautions, as failure to do so may' +
        'result in loss of access to, and/or control over, your Account: (b)' +
        'Provide accurate and truthful information; (c) maintain the security' +
        'of your Account by protecting your Account password and access to your' +
        'computer and your Account; (e) Promptly notify us if you discover or' +
        'otherwise suspect any security breaches related to your Account.'
    }
  ],
  [
    'terms-7-desc-2',
    {
      KOR:
        '7.2. 귀하는 귀하의 계정 하에서 발생하는 모든 활동에 대한 책임을 지고 법이 허용하는 한도 내에서 ' +
        '귀하의 계정에 대한 허가 된 또는 허가되지 않은 액세스의 모든 위험을 수락한다는 것을 수락하고 인정합니다.',
      ENG:
        '7.2. You hereby accept and acknowledge that you take responsibility' +
        'for all activities that occur under your Account and accept all risks' +
        'of any authorized or unauthorized access to your Account, to the' +
        'maximum extent permitted by law.'
    }
  ],
  [
    'terms-7-desc-3',
    {
      KOR:
        '7.3. 귀하는 암호가 진행되는 분야임을 인정하고 이해합니다. ' +
        '코드 크래킹이나 양자 컴퓨터 개발과 같은 기술 발전의 진전은 귀하가 사용하는 서비스 및 귀하의 계정에 위험을 초래할 수 있으며 ' +
        '이로 인해 귀하의 재산이 도난 또는 분실 될 수 있습니다. ' +
        '서비스를 사용하거나 Polaris share Content에 액세스함으로써 귀하는 이러한 내재 된 위험을 인정합니다.',
      ENG:
        '7.3. You acknowledge and understand that cryptography is a progressing' +
        'field. Advances in code cracking or technical advances such as the' +
        'development of quantum computers may present risks to the Services' +
        'that you use and your Account, which could result in the theft or loss' +
        'of your property. By using the Service or accessing Polaris ShareModal' +
        'Content, you acknowledge these inherent risks.'
    }
  ],
  [
    'terms-8-title',
    {
      KOR: '8. 서비스',
      ENG: '8. The Services'
    }
  ],
  [
    'terms-8-desc-1',
    {
      KOR:
        '8.1. 계정 및 개인 키. 서비스를 통해 계정을 만드는 데 동의하는 경우, 귀하에게 전적으로 제공되고 귀하가 전적으로 소유 한 암호화 개인 및 공개 키 쌍을 생성합니다. 단, 귀하의 비밀번호 나 비공개 키는 저장하지 마십시오. 우리는 결코 귀하의 개인 키에 접근 할 수 없으며 귀하를 대신하여 어떤 개인 키를 양육하지 않습니다. 그러므로 귀하의 계정에 연결된 개인 키 관리에 대한 책임을 지지 않습니다. 개인 키는 계정 이름과 고유하게 일치하며 해당 계정에서 POLA 이전을 승인하기 위해 계정과 관련하여 사용해야 합니다. 개인 키의 보안을 유지 관리하는 것은 전적으로 귀하의 책임입니다. 개인 키 액세스 정보는 안전하게 보관해야 합니다. 그렇게 하지 않으면 POLA에 통제가 상실 될 수 있습니다.',
      ENG:
        '8.1. As described in Others detail below, the Services, among other' +
        'things, provide software that facilitates the submission of POLA' +
        'blockchain transaction data to the POLA blockchain without requiring' +
        'you to access the POLA blockchain command line interface.'
    }
  ],
  [
    'terms-8-desc-2',
    {
      KOR:
        '8.2. 암호 검색이 없습니다. 우리는 귀하의 계정 암호 또는 개인 키를 받거나 저장하지 않습니다. 귀하의 개인 키는 귀하의 개인 키이며 귀하는 귀하의 개인 키를 안전하게 보관할 책임이 있습니다. 계정 암호 검색, 재설정 또는 복구를 지원할 수는 없습니다. 계정 암호를 기억하는 것은 전적으로 귀하의 책임입니다. 계정에 저장된 계정 및 암호 쌍의 백업을 안전하게 저장하지 않은 경우 계정 암호가 없는 경우 해당 계정과 연결된 DECL가 영구적으로 액세스 할 수 없게 됩니다.',
      ENG:
        '8.2. No Password Retrieval. We do not receive or store your Account' +
        'password or Private Keys. Your Private Key is your own and you are' +
        'solely responsible for their safekeeping. We cannot assist you with' +
        'Account password retrieval, reset, or recovery. You are solely' +
        'responsible for remembering your Account password. If you have not' +
        'safely stored a backup of any Account and password pairs maintained in' +
        'your Account, you accept and acknowledge that any POLA you have' +
        'associated with such Account will become permanently inaccessible if' +
        'you do not have your Account password.'
    }
  ],
  [
    'terms-8-desc-3',
    {
      KOR:
        '8.3. 업무. 제안 된 모든 POLA 블록 체인 거래는 POLA 블록 컨센서스 네트워크 (피어 - 투 - 피어 네트워크)를 통해 POLA 블록 체인에 확인 및 기록 되어야 하며, 이는 당사가 소유, 관리 또는 운영하지 않습니다. POLA 블록 체인은 독립적 인 제 3 자의 분산된 네트워크에 의해 운영됩니다. 우리는 POLA 블록 체인에 대한 통제권이 없으므로 귀하가 서비스를 통해 제출하는 거래 내역이 POLA 블록 체인에서 확인되도록 할 수는 없으며 보장 할 수도 없습니다. ',
      ENG:
        '8.3. Transactions. All proposed POLA blockchain transactions must be' +
        'confirmed and recorded in the POLA blockchain via the Polaris ShareModal' +
        'distributed consensus network (a peer-to-peer network), which is not' +
        'owned, controlled, or operated by us. The POLA blockchain is operated' +
        'by a decentralized network of independent sectionThird parties. We have no' +
        'control over the POLA blockchain and therefore cannot and will not' +
        'ensure that any transaction details you submit via the Services will' +
        'be confirmed on the POLA blockchain.'
    }
  ],
  [
    'terms-8-desc-4',
    {
      KOR:
        '8.4. POLA의 저장 또는 운송 금지. POLA 귀하가 관리하는 무형의 디지털 자산입니다. 이러한 자산은 POLA 블록 체인에서 유지 관리되는 소유권 레코드에 의해서만 존재합니다. 서비스는 POLA를 저장, 보내거나 받지 않습니다. POLA에서 발생할 수 있는 제목 이전은 서비스가 아닌 POLA 블록 체인에서 발생합니다. 당사는 POLA에서 서비스가 제목 또는 권리 이전에 영향을 미칠 수 있다고 보장하지 않습니다.',
      ENG:
        '8.4. No Storage or Transmission of POLA. POLA, in any of its forms' +
        '(POLA) is an intangible, digital asset controlled by you. These assets' +
        'exist only by virtue of the ownership record maintained on the POLA' +
        'blockchain. The Service does not store, send, or receive POLA. Any' +
        'transfer of title that might occur in any POLA, occurs on the POLA' +
        'blockchain and not within the Services. We do not guarantee that the' +
        'Service can affect the transfer of title or right in any POLA.'
    }
  ],
  [
    'terms-8-desc-5',
    {
      KOR:
        '8.5. 관계. 본 계약서의 어떠한 내용도 귀하와 당사 사이의 파트너십, 합작 투자, 대행사, 컨설팅 또는 신탁 통치를 의도하지도 않으며 작성하지도 않습니다.',
      ENG:
        '8.5. Relationship. Nothing in this Agreement is intended to nor shall' +
        'create any partnership, joint venture, agency, consultancy, or' +
        'trusteeship, between you and us.'
    }
  ],
  [
    'terms-8-desc-6',
    {
      KOR:
        '8.6. 정보의 정확성. 귀하는 서비스를 통해 귀하가 제공하는 모든 정보가 정확하고 완전 함을 진술하고 보증합니다. 귀하는 서비스를 통해 시작된 POLA blockchain 거래와 관련하여 귀하가 계정 이름을 잘못 입력하거나 잘못된 정보를 제공 한 경우와 같은 실수 나 누락에 대해 책임을 지지 않습니다. 서비스를 통해 거래 정보를 작성하기 전에 거래 세부 정보를 신중하게 검토하는 것이 좋습니다.',
      ENG:
        '8.6. Accuracy of Information. You represent and warrant that any' +
        'information you provide via the Services is accurate and complete. You' +
        'accept and acknowledge that we are not responsible for any errors or' +
        'omissions that you make in connection with any POLA blockchain' +
        'transaction initiated via the Services, for instance, if you mistype' +
        'an Account name or otherwise provide incorrect information. We' +
        'strongly encourage you to review your transaction details carefully' +
        'before completing them via the Services.'
    }
  ],
  [
    'terms-8-desc-7',
    {
      KOR:
        '8.7. 취소 또는 변경 금지. 일단 서비스 세부 사항이 서비스를 통해 POLA 블록 체인에 제출되면 서비스는 귀하가 거래 세부 사항을 취소하거나 달리 수정할 수 있도록 도와줄 수 없습니다. 우리는 POLA 블록 체인을 제어 할 수 없으며 취소 또는 수정 요청을 쉽게 할 수 없습니다.',
      ENG:
        '8.7. No Cancellations or Modifications. Once transaction details have' +
        'been submitted to the POLA blockchain via the Services, The Services' +
        'cannot assist you to cancel or otherwise modify your transaction' +
        'details. We have no control over the POLA blockchain and do not have' +
        'the ability to facilitate any cancellation or modification requests.'
    }
  ],
  [
    'terms-8-desc-8',
    {
      KOR:
        '8.8. 구실. 귀하가 서비스를 통해 거래 내역을 제출 한 거래에 대해 세금이 부과되는지 여부를 결정하는 것은 귀하의 책임이며 적절한 세무 기관에 보고하고 정확한 세금을 송금하는 것은 귀하의 책임입니다. 귀하는 POLA blockchain 거래에 세금이 적용되는지 또는 POLA blockchain 거래로 인해 발생하는 세금 징수, 보고, 원천 징수 또는 양도 여부에 대한 당사의 책임이 없음에 동의합니다.',
      ENG:
        '8.8. Taxes. It is your responsibility to determine what, if any, taxes' +
        'apply to the transactions you for which you have submitted transaction' +
        'details via the Services, and it is your responsibility to report and' +
        'remit the correct tax to the appropriate tax authority. You agree that' +
        'the we are not responsible for determining whether taxes apply to your' +
        'POLA blockchain transactions or for collecting, reporting,' +
        'withholding, or remitting any taxes arising from any POLA blockchain' +
        'transactions.'
    }
  ],
  [
    'terms-9-title',
    {
      KOR: '9. 서비스의 중단.',
      ENG: '9. Discontinuation of Services.'
    }
  ],
  [
    'terms-9-desc-1',
    {
      KOR:
        '9.1. 우리는 단독 재량으로 비용없이 사전 통지 여부에 상관없이 언제든지 서비스의 일부를 일시적 또는 영구적으로 수정 또는 중단 할 수 있습니다. 서비스 외부에서 귀하가 귀하의 계정에서 유지 관리하는 계정 및 개인 키의 백업을 저장하는 것은 전적으로 귀하의 책임입니다.',
      ENG:
        '9.1. We may, in our sole discretion and without cost to you, with or' +
        'without prior notice and at any time, modify or discontinue,' +
        'temporarily or permanently, any portion of our Services. You are' +
        'solely responsible for storing, outside of the Services, a backup of' +
        'any Account and Private Key that you maintain in your Account.'
    }
  ],
  [
    'terms-9-desc-2',
    {
      KOR:
        '9.2. 귀하가 서비스 외부에서 귀하의 계정 데이터를 백업하지 않는다면 귀하가 서비스를 중단하거나 폐지 할 경우 귀하의 계정에 유지 관리되는 모든 계좌와 관련된 POLA에 액세스하지 못할 수 있습니다.',
      ENG:
        '9.2. If you do not maintain a backup of your Account data outside of' +
        'the Services, you will be may not be able to access POLA, POLA Dollars' +
        'and POLA Power associated with any Account maintained in your Account' +
        'if we discontinue or deprecate the Services.'
    }
  ],
  [
    'terms-10-title',
    {
      KOR: '10. 서비스의 일시 중지 또는 해지.',
      ENG: '10. Suspension or Termination of Service.'
    }
  ],
  [
    'terms-10-desc-1',
    {
      KOR:
        '10.1. 당사는 단독 재량으로 귀하의 서비스 이용을 예고없이 즉시 중단하거나 종료 할 수 있으며,',
      ENG:
        '10.1. We may suspend or terminate your access to the Services in our' +
        'sole discretion, immediately and without prior notice, and delete or' +
        'deactivate your'
    }
  ],
  [
    'terms-10-desc-2',
    {
      KOR:
        '계정 및 모든 관련 정보와 파일을 비용없이 무료로 삭제하거나 비활성화 할 수 있습니다. 본 계약의 어떠한 조항도 위반할 수 없습니다. 계정 해지 시 귀하의 계정에 있는 금액에 액세스하려면 명령 행 API 또는 제 3 자 도구를 통해 POLA 블록 체인에 액세스 해야 하며 귀하의 계정 및 계정을 포함한 계정 데이터의 백업에 액세스 해야 합니다.',
      ENG:
        'account and' +
        'all related information and files in such without cost to you,' +
        'including, for instance, if you breach any term of this Agreement. In' +
        'the event of termination, your access to the funds in your account' +
        'will require you access to the POLA blockchain via the command line' +
        'API or sectionThird party tool, and will require you to have access to your' +
        'backup of your Account data including your Account and Private Keys.'
    }
  ],
  [
    'terms-11-title',
    {
      KOR: '11. 사용자 행동',
      ENG: '11. UserAvatar Conduct'
    }
  ],
  [
    'terms-11-desc-1',
    {
      KOR:
        '11.1. 서비스에 액세스하거나 사용할 때 귀하는 불법 행위를 저 지르지 않으며 본 서비스를 사용하는 동안 귀하의 행위에 대한 전적인 책임이 있음에 동의합니다. 전술 한 내용의 일반성을 제한하지 않고 귀하는 다음과 같은 행위를 하지 않을 것에 동의합니다.',
      ENG:
        '11.1. When accessing or using the Services, you agree that you will' +
        'not commit any unlawful act, and that you are solely responsible for' +
        'your conduct while using our Services. Without limiting the generality' +
        'of the foregoing, you agree that you will not:'
    }
  ],
  [
    'terms-11-desc-2',
    {
      KOR:
        '11.1.1. 다른 사용자가 당사 서비스를 완전히 즐기지 못하게 방해하거나 부정적인 영향을 미칠 수있는 방식으로 서비스를 사용하거나 어떤 방식으로 든 서비스의 손상, 사용 불능, 과부하 또는 손상을 초래할 수 있는 방식으로 서비스를 사용하는 행위',
      ENG:
        '11.1.1. Use of our Services in any manner that could interfere with,' +
        'disrupt, negatively affect, or inhibit other users from fully enjoying' +
        'our Services, or that could damage, disable, overburden, or impair the' +
        'functioning of our Services in any manner;'
    }
  ],
  [
    'terms-11-desc-3',
    {
      KOR:
        '11.1.2. Google의 서비스를 사용하여 불법 도박, 사기, 돈세탁 또는 테러 자금 조달 활동을 포함하여 (이에 국한되지 않음) 법률로 금지 된 활동에 대해 비용을 지불하거나 지원하거나 달리 참여하게 하십시오.',
      ENG:
        '11.1.2. Use our Services to pay for, support or otherwise engage in' +
        'any activity prohibited by law, including, but not limited to illegal' +
        'gambling, fraud, money-laundering, or terrorist financing activities.'
    }
  ],
  [
    'terms-11-desc-4',
    {
      KOR:
        '11.1.3. 허가없이 다른 사용자의 계정을 사용하거나 사용하려고 시도하십시오.',
      ENG:
        '11.1.3. Use or attempt to use another user’s Account without' +
        'authorization;'
    }
  ],
  [
    'terms-11-desc-5',
    {
      KOR:
        '11.1.4. 우리가 고용 한 컨텐츠 필터링 기술을 우회하거나 액세스 권한이 없는 서비스 또는 서비스 영역에 액세스하려고 시도하십시오.',
      ENG:
        '11.1.4. Attempt to circumvent any content filtering techniques we' +
        'employ, or attempt to access any service or area of our Services that' +
        'you are not authorized to access;'
    }
  ],
  [
    'terms-11-desc-6',
    {
      KOR:
        '11.1.5. 바이러스, 트로이 목마, 웜, 논리 폭탄 또는 기타 유해한 물질을 서비스에 소개하십시오.',
      ENG:
        '11.1.5. Introduce to the Services any virus, Trojan, worms, logic' +
        'bombs or other harmful material;'
    }
  ],
  [
    'terms-11-desc-7',
    {
      KOR:
        '11.1.6. 제 3 자에게 본 절에 의거하여 금지 된 활동을 하도록 권장하거나 유도하십시오.',
      ENG:
        '11.1.6. Encourage or induce any sectionThird-party to engage in any of the' +
        'activities prohibited under this FooterContainer.'
    }
  ],
  [
    'terms-12-title',
    {
      KOR: '12. 저작권 침해 신고, DMCA 및 게시 중단',
      ENG: '12. Copyright Complaints, the DMCA, and Takedowns'
    }
  ],
  [
    'terms-12-desc-1',
    {
      KOR:
        '12.1 디지털 밀레니엄 저작권법 (Digital Millennium Copyright Act, "DMCA")에 따른 합법적 인 요청에 응답하고, 우리는 타인의 저작권을 침해한다고 판단되는 서비스를 통해 제공된 사용자 콘텐츠에 대한 액세스를 제거 할 권리를 보유합니다. 귀하가 귀하의 저작권 권한을 침해하는 귀하의 서비스 내용을 알고 있다면 적절하게 포맷 된 DMCA 요청서 (17 USC § 512 참조)를 당사에 제출할 수 있습니다',
      ENG:
        '12.1 We will respond to legitimate requests under the Digital' +
        'Millennium Copyright Act ("DMCA"), and we retain the right to remove' +
        'access to user content provided via the Service that we deem to be' +
        'infringing the copyright of Others. If you become aware of user' +
        'content on the Service that infringes your copyright rights, you may' +
        'submit a properly formatted DMCA request (see 17 U.S.C. § 512) to' +
        'the company'
    }
  ],
  [
    'terms-12-desc-2',
    {
      KOR:
        '침해에 대한 허위 진술은 금전적 손해에 대한 책임을 초래할 수 있습니다. 귀하는 DMCA에 따라 조치를 취하기 전에 변호사와 상담할 수 있습니다. DMCA 요청은 아래 연락처 정보를 통해 Google에 전송 될 수 있습니다.',
      ENG:
        'Misrepresentations of infringement can result in liability for' +
        'monetary damages. You may want to consult an attorney before taking' +
        'any action pursuant to the DMCA. A DMCA request can be sent to us via' +
        'the contact information below:'
    }
  ],
  [
    'terms-12-desc-3',
    {
      KOR: '저작권 에이전트',
      ENG: 'Copyright Agent'
    }
  ],
  [
    'terms-12-desc-4',
    {
      KOR:
        '주소가 위치한 사법 구역에 대한 연방 지방 법원의 관할권에 또는 귀하의 주소가 미국 이외의 지역에 있는 경우, 서비스 제공 업체가있을 수있는 모든 사법 구역에 대해 귀하가 DMCA 512 (c) (1) (c) 항에 의거하여 통보를 한 사람 또는 그 사람의 대리인으로부터의 절차.',
      ENG:
        'consent to the jurisdiction of federal district court for the judicial' +
        'district in which the address is located, or if your address is' +
        'outside of the United States, for any judicial district in which the' +
        'service provider may be found, and that you will accept service of' +
        'process from the person who provided notification under DMCA 512' +
        'subsection (c)(1)(c) or an agent of such person.'
    }
  ],
  [
    'terms-12-desc-5',
    {
      KOR:
        '이의 제기 신청서를 받으면 불만 당사자에게 전달하고 영업일 기준 10 일 이내에 귀하의 콘텐츠를 복원할 것이라고 말합니다. 해당 당사자가 해당 기간이 만료되기 전에 귀하가 해당 콘텐츠를 귀하의 서비스 사용을 제한하라는 조치를 취했다는 것을 당사에 통보하지 않으면 당사는 사용자 콘텐츠를 사이트로 복원하는 것을 고려할 것입니다.',
      ENG:
        'Upon receiving a counter-notice we will forward it to the complaining' +
        'party and tell them we will restore your content within 10 business' +
        'days. If that party does not notify us that they have filed an action' +
        'to enjoin your use of that content on the Service before that period' +
        'passes, we will consider restoring your user content to the site.'
    }
  ],
  [
    'terms-12-desc-6',
    {
      KOR:
        '반복적 인 저작권 침해로 판단하는 사용자에게 서비스 사용을 거부하는 것이 Google의 정책입니다. Google은 재량에 따라 사용자가 다른 사람의 저작권 또는 기타 지적 재산권을 침해했다고 반복적으로 고소당한 경우와 같은 적절한 상황에서 이 정책을 적용합니다.',
      ENG:
        'It is our policy to deny use of the Service to users we identify as' +
        'repeat infringers. We apply this policy at our discretion and in' +
        'appropriate circumstances, such as when a user has repeatedly been' +
        'charged with infringing the copyrights or other intellectual property' +
        'rights of Others.'
    }
  ],
  [
    'terms-13-title',
    {
      KOR: '13. 손해 배상',
      ENG: '13. Indemnity'
    }
  ],
  [
    'terms-13-desc-1',
    {
      KOR:
        '귀하가 하는 모든 일과 귀하가 서비스에 제출하거나 게시하는 모든 정보는 귀하의 책임입니다. 면책은 기본적으로 법이나 제 3 자 또는 개인의 권리를 침해하는 콘텐츠 또는 행위에 대해 법적으로 책임을 지지 않는다고 말하는 방식입니다.',
      ENG:
        'All the things you do and all the information you submit or post to' +
        'the Service remain your responsibility. Indemnity is basically a way' +
        'of saying that you will not hold us legally liable for any of your' +
        'content or actions that infringe the law or the rights of a sectionThird' +
        'party or person in any way.'
    }
  ],
  [
    'terms-13-desc-2',
    {
      KOR:
        '특히 귀하는 당사, 계열사, 임원, 이사, 직원, 대리인 및 제 3 자 서비스 공급자를 변호인의 권리를 포함하여 청구, 비용, 손해, 손실, 경비 및 기타 책임으로부터 무해하고 방어하기로 동의합니다. 귀하의 서비스 액세스 또는 사용, 귀하의 본 이용 약관 위반 및 또는 제 3 자 또는 개인의 권리 침해로 인해 발생하는 비용, 비용 및 비용.',
      ENG:
        'Specifically, you agree to hold us, our affiliates, officers,' +
        'directors, employees, agents, and sectionThird-party service providers' +
        'harmless from and defend them against any claims, costs, damages,' +
        'losses, expenses, and any other liabilities, including attorneys’ fees' +
        'and costs, arising out of or related to your access to or use of the' +
        'Service, your violation of this user agreement, and/or your violation' +
        'of the rights of any sectionThird-party or person.'
    }
  ],
  [
    'terms-14-title',
    {
      KOR: '14. 면책 조항',
      ENG: '14. Disclaimers'
    }
  ],
  [
    'terms-14-desc',
    {
      KOR:
        '해당 법률에서 허용하는 최대 한도 내에서 서비스 및 Polaris ShareModal 컨텐츠는 상품성에 대한 묵시적 보증을 포함하여 (단, 이에 한하지 않음) 어떠한 종류의 명시 적 또는 묵시적 보증도없이 "있는 그대로"및 "있는 그대로"제공됩니다. 특정 목적에의 적합성, 소유권 및 비 침해에 관한 모든 보증 및 거래의 수행이나 사용 과정에서 암시하는 모든 보증을 포함합니다. 회사는 서비스 및 Polaris ShareModal 콘텐츠가 (a) 언제든지 또는 장소에서 안전하거나 이용 가능할 것임을 진술하거나 보증하지 않습니다. (b) 정확성, 완전성, 신뢰성, 최신 또는 오류가 없거나 결함이나 오류가 시정될 것입니다. (c) 바이러스 또는 기타 유해한 성분이 없다. 귀하가 서비스 및 Polaris ShareModal 컨텐츠를 사용하는 것은 전적으로 귀하의 책임입니다.',
      ENG:
        'To the fullest extent permitted by applicable law, the Service and the' +
        'Polaris ShareModal Content are provided on an “as is” and “as available”' +
        'basis, without warranties of any kind, either express or implied,' +
        'including, without limitation, implied warranties of merchantability,' +
        'fitness for a particular purpose, title and non-infringement and any' +
        'warranties implied by any course of performance or usage of trade. The' +
        'company does not represent or warrant that the Service and the Polaris' +
        'ShareModal Content: (a) will be secure or available at any time or' +
        'location; (b) are accurate, complete, reliable, current, or error-free' +
        'or that any defects or errors will be corrected; and (c) are free of' +
        'viruses or other harmful components. Your use of the Service and' +
        'Polaris ShareModal Content is solely at your own risk. Some jurisdictions' +
        'do not allow the disclaimer of implied terms in contracts with' +
        'consumers, so some or all of the disclaimers in this FooterContainer may not' +
        'apply to you.'
    }
  ],
  [
    'terms-15-title',
    {
      KOR: '15. 책임의 한계',
      ENG: '15. Limitation of liability'
    }
  ],
  [
    'terms-15-desc-1',
    {
      KOR:
        '당사는 해당 법률에서 허용하는 최대 한도 내에서 어떠한 특수한 간접적 인 책임도지지 않습니다. , 우발적, 결과적, 모범적 또는 징벌 적 손해, 계약 손실, 손해의 손실 또는 이익 손실 또는 데이터 손실을 포함하되 이에 국한되지 않는 모든 종류의 손해 제한적, 과실) 또는 달리 서비스 또는 콘텐츠의 사용 또는 사용 불가능으로 인해 발생하는 모든 손해에 대해 책임을 지지 않습니다. 해당 법률이 허용하는 최대 한도 내에서, 어떠한 경우에도 당사 또는 관련 당사자의 계약 상 책임, 보증, 불법 행위 (과실 포함, 능동, 수동 또는 귀속 여부)',
      ENG:
        'To the fullest extent permitted by applicable law, in no event shall' +
        'the company. or the any related party to the company' +
        'that includes but is not limited to, subsidiaries, vendors, or' +
        'contractors, be liable for any special, indirect, incidental,' +
        'consequential, exemplary or punitive damages, or any other damages of' +
        'any kind, including, but not limited to, loss of use, loss of profits' +
        'or loss of data, whether in an action in contract, tort (including,' +
        'but not limited to, negligence) or otherwise, arising out of, or in' +
        'any way connected with, the use of, or inability to use, the Service' +
        'or the Polaris ShareModal Content. To the fullest extent permitted by' +
        'applicable law, in no event shall the aggregate liability of DECOMPANY' +
        'GLOBAL, Inc. or any related party, whether in contract, warranty, tort' +
        '(including negligence, whether active, passive or imputed), product' +
        'liability, strict liability or other theory, arising out of or' +
        'relating to the use of or inability to use of the Service'
    }
  ],
  [
    'terms-15-desc-2',
    {
      KOR:
        '일부 관할지에서는 특정 손해의 배제 나 제한을 허용하지 않으므로 이 섹션의 일부 또는 전부가 귀하에게 적용되지 않을 수도 있습니다.',
      ENG:
        'Some jurisdictions do not allow the exclusion or limitation of certain' +
        'damages, so some or all of the exclusions and limitations in this' +
        'FooterContainer may not apply to you.'
    }
  ],
  [
    'terms-16-title',
    {
      KOR: '16. 서비스 변경',
      ENG: '16. Modifications to the Service'
    }
  ],
  [
    'terms-16-desc',
    {
      KOR:
        '우리는 사전 통지없이 서비스 또는 서비스의 기능 또는 부분을 일시적으로 또는 영구적으로 수정하거나 중단할 수 있는 권리를 보유합니다. 귀하는 서비스의 수정, 일시 중지 또는 중단에 대해 당사가 책임지지 않는다는 데 동의합니다.',
      ENG:
        'We reserve the right to modify or discontinue, temporarily or' +
        'permanently, the Service, or any features or portions of the Service,' +
        'without prior notice. You agree that we will not be liable for any' +
        'modification, suspension, or discontinuance of the Service.'
    }
  ],
  [
    'terms-17-title',
    {
      KOR: '17. 중재',
      ENG: '17. Arbitration'
    }
  ],
  [
    'terms-17-desc-1',
    {
      KOR:
        '당사와의 특정 분쟁을 중재해야 하며 당사로부터 구제 방법을 제한하기 때문에 다음 섹션을 주의 깊게 읽으십시오. 이 섹션 20에 동의하지 않으면 서비스 사용을 중단하십시오.',
      ENG:
        'Please read the following section carefully because it requires you to' +
        'arbitrate certain disputes with the company and limits the way' +
        'you can seek relief from the company. If you do not agree' +
        'with this FooterContainer 20, please discontinue using the Service.'
    }
  ],
  [
    'terms-17-desc-2',
    {
      KOR:
        '17.1. 중재 구속력. 일방 당사자가 소액 배상 청구 소송에서 개인 소송을 제기하거나 소송, 상표, 상호, 로고, 영업 비밀 또는 특허의 불법적 사용에 대한 금지 명령 또는 기타 공평한 구제를 요구하는 분쟁을 제외하고 귀하와 당사 (a) 법원에서이 계약 또는 당사 ( "분쟁"으로 통칭)에서 발생하는 모든 분쟁 또는 청구를 제기 할 권리를 포기합니다. (b) 귀하의 배심 재판을받을 권리를 포기하십시오. 대신, 귀하와 당사는 법적 분쟁을 결정하기보다는 분쟁을 검토하고 해결하기위한 최종적인 구속력 있는 결정을 내린 한 명 이상의 사람에게 분쟁을 위탁하는 구속력 있는 중재를 통해 분쟁을 중재합니다. 판사 또는 배심원).',
      ENG:
        '17.1. Binding Arbitration. Except for disputes in which either party' +
        'seeks to bring an individual action in small claims court or seeks' +
        'injunctive or other equitable relief for the alleged unlawful use of' +
        'copyrights, trademarks, trade names, logos, trade secrets or patents,' +
        'you and the company.: (a) waive your right to have any and' +
        'all disputes or Claims arising from this Agreement or DECOMPANY' +
        'GLOBAL, Inc. (collectively, “Disputes”) resolved in a court; and (b)' +
        'waive your right to a jury trial. Instead, you and the company ' +
        'will arbitrate Disputes through binding arbitration (which is the' +
        'referral of a Dispute to one or Others persons charged with reviewing' +
        'the Dispute and making a final and binding determination to resolve' +
        'it, instead of having the Dispute decided by a judge or jury in' +
        'court).'
    }
  ],
  [
    'terms-17-desc-3',
    {
      KOR:
        '17.2. 클래스 중재, 집단 소송 또는 대표 행동 금지. 귀하는 모든 분쟁이 귀하와 당사에게 개인적인 것이며 그러한 분쟁은 개별 중재를 통해서만 해결되며 계급 중재, 집단 소송 또는 기타 대표적인 소송으로 제기되지 않을 것에 동의합니다. 어느 당사자도 집단 중재 또는 다른 개인 또는 개인 집단의 대표로서 분쟁을 만들고 해결하려는 중재에 동의하지 않습니다. 또한, 귀하와 당사는 중재 내부 또는 외부, 또는 다른 개인 또는 개인 집단을 대표하여 분쟁을 계급 또는 다른 유형의 대표적 행동으로 제기할 수 없다는 데 동의합니다.',
      ENG:
        '17.2. No Class Arbitrations, Class Actions or Representative Actions.' +
        'You agree that any dispute is personal to you and the company ' +
        'and that any such dispute will be resolved solely through' +
        'individual arbitration and will not be brought as a class arbitration,' +
        'class action or any other type of representative proceeding. Neither' +
        'party agrees to class arbitration or to an arbitration in which an' +
        'individual makes and attempt to resolve a dispute as a representative' +
        'of another individual or group of individuals. Further, you and' +
        'the company agree that a dispute cannot be brought as a' +
        'class, or other type of representative action, whether within or' +
        'outside of arbitration, or on behalf of any other individual or group' +
        'of individuals.'
    }
  ],
  [
    'terms-17-desc-4',
    {
      KOR:
        '17.3. 연방 중재 법. 귀하는 본 계약이 주간 거래에 영향을 미치고 본 제 18 조의 집행 가능성이 연방 중재 법 (Federal Arbitration Act) 9 USC § 1 이하에 따라 실질적으로 및 절차 적으로 모두 해석되고 해석되며 시행 및 집행될 것에 동의합니다. (이하 "FAA")를 해당 법률에서 허용하는 최대한의 범위 내에서 준수해야합니다.',
      ENG:
        '17.3. Federal Arbitration Act. You agree that this Agreement affects' +
        'interstate commerce and that the enforceability of this FooterContainer 20' +
        'shall be governed by, construed, and enforced, both substantively and' +
        'procedurally, by the Federal Arbitration Act, 9 U.S.C. § 1 et seq.' +
        '(the “FAA”) to the maximum extent permitted by applicable law.'
    }
  ],
  [
    'terms-17-desc-5',
    {
      KOR:
        '17.4. 방법. 귀하는 당사자가 논쟁을 비공식적으로 해결할 수 있도록 당사자가 발생한지 30 일 이내에 서면으로 분쟁을 서면으로 통보한다는 데 동의합니다. 법률 고문은 ',
      ENG:
        '17.4. Process. You agree that you will notify us in writing of any' +
        'Dispute within thirty (30) days of when it arises so that the parties' +
        'can attempt, in good faith, to resolve the Dispute informally. notice' +
        'to the us shall be provided by sending an email to'
    }
  ],
  [
    'terms-17-desc-6',
    {
      KOR:
        '으로 전자 메일을 보내주십시오. 귀하의 통지에는 반드시 (1) 귀하의 이름, 우편 주소 및 이메일 주소; (2) 분쟁의 성격 또는 근거에 대한 설명; (3) 귀하가 찾고자 하는 구체적인 구제책. 통지를 받은 날로부터 30 일 이내에 분쟁을 해결하는 방법에 동의하지 않을 경우, 귀하 또는 당사는 본 제 20 조에 따라 적절한 경우 중재 절차를 시작하거나 법원에 청구할 수 있습니다. 귀하는 분쟁 발생 후 일 (1) 년 이내에 당사에 대한 중재 또는 청구가 시작되거나 제기되어야 한다는 데 동의합니다. 그렇지 않으면, 귀하는 청구가 영구적으로 금지된다는 것에 동의합니다 (귀하가 더 이상 분쟁과 관련한 클레임을 주장할 권리가 없음을 의미). 귀하는 다음을 읽고 이해했으며 동의합니다: (a) 뉴욕 주 뉴욕 카운티에서 중재가 이루어질 것입니다. (b) 중재는 JAMS의 규칙에 따라 단일 중재자가 기밀로 수행합니다. (c) 뉴욕의 주 법원 또는 연방 법원은 중재 판정의 집행과 중재의 대상이 아닌 당사자 간의 분쟁에 대한 배타적 인 관할권을 갖습니다. 분쟁이 소액 배상 청구 법정에서 요구되는 요건을 충족하는 경우 거주하는 카운티에 위치한 소액 배상 법원에서 분쟁을 소송할 수도 있습니다. 이해하고 동의해야 합니다. (a) 중재는 New York County, New York에서 발생합니다. (b) 중재는 JAMS의 규칙에 따라 단일 중재자가 기밀로 수행합니다. (c) 뉴욕의 주 법원 또는 연방 법원은 중재 판정의 집행과 중재의 대상이 아닌 당사자 간의 분쟁에 대한 배타적 인 관할권을 갖습니다. 분쟁이 소액 배상 청구 법정에서 요구되는 요건을 충족하는 경우 거주하는 카운티에 위치한 소액 배상 법원에서 분쟁을 소송할 수도 있습니다. 이해하고 동의해야합니다. (a) 중재는 New York County, New York에서 발생합니다. (b) 중재는 JAMS의 규칙에 따라 단일 중재자가 기밀로 수행합니다. (c) 뉴욕의 주 법원 또는 연방 법원은 중재 판정의 집행과 중재의 대상이 아닌 당사자 간의 분쟁에 대한 배타적 인 관할권을 갖습니다. 분쟁이 소액 배상 청구 법정에서 요구되는 요건을 충족하는 경우 거주하는 카운티에 위치한 소액 배상 법원에서 분쟁을 소송할 수도 있습니다. (c) 뉴욕의 주 법원 또는 연방 법원은 중재 판정의 집행과 중재의 대상이 아닌 당사자 간의 분쟁에 대한 배타적 인 관할권을 갖습니다. 분쟁이 소액 배상 청구 법정에서 요구되는 요건을 충족하는 경우 거주하는 카운티에 위치한 소액 배상 법원에서 분쟁을 소송할 수도 있습니다. (c) 뉴욕의 주 법원 또는 연방 법원은 중재 판정의 집행과 중재의 대상이 아닌 당사자 간의 분쟁에 대한 배타적 인 관할권을 갖습니다. 분쟁이 소액 배상 청구 법정에서 요구되는 요건을 충족하는 경우 거주하는 카운티에 위치한 소액 배상 법원에서 분쟁을 소송할 수도 있습니다.',
      ENG:
        '. Your notice must include: (1) your name, postal address, and email' +
        'address; (2) a description of the nature or basis of the Dispute; and' +
        '(3) the specific relief that you are seeking. If we cannot agree how' +
        'to resolve the Dispute within thirty (30) days of the us receiving the' +
        'notice, either you or the company. may, as appropriate pursuant' +
        'to this FooterContainer 20, commence an arbitration proceeding or file a claim' +
        'in court. You agree that any arbitration or claim against us must be' +
        'commenced or filed within one (1) year after the Dispute arose;' +
        'otherwise, you agree that the claim is permanently barred (which means' +
        'that you will no longer have the right to assert a claim regarding the' +
        'Dispute). You have read, understand, and agree that: (a) any' +
        'arbitration will occur in New York County, New York; (b) arbitration' +
        'will be conducted confidentially by a single arbitrator in accordance' +
        'with the rules of JAMS; and (c) the state or federal courts in New' +
        'York will have exclusive jurisdiction over the enforcement of an' +
        'arbitration award and over any Dispute between the parties that is not' +
        'subject to arbitration. You may also litigate a Dispute in small' +
        'claims court located in the county where you reside if the Dispute' +
        'meets the requirements to be heard in small claims court.'
    }
  ],
  [
    'terms-17-desc-7',
    {
      KOR:
        '17.5. 중재인 권한. FAA, 본 계약 및 적용 가능한 JAMS 규칙에 의해 제한되는 바와 같이, 중재자는 다음을 갖습니다: (a) 분쟁에 관한 모든 절차 적 및 실질적인 결정을 내리는 독점적 권한 및 관할권; (b) 법원에서 달리 구할 수있는 구제책을 부여할 권한. 중재인은 개인 중재를 실시할 수 있으며 둘 이상의 개인의 클레임을 통합하거나, 어떤 종류의 클래스 또는 대표 진행을 관장하거나 둘 이상의 개인이 관련된 모든 진행을 관장할 수 없습니다.',
      ENG:
        '17.5. Authority of Arbitrator. As limited by the FAA, this Agreement' +
        'and applicable JAMS rules, the arbitrator will have: (a) the exclusive' +
        'authority and jurisdiction to make all procedural and substantive' +
        'decisions regarding a Dispute; and (b) the authority to grant any' +
        'remedy that would otherwise be available in court. The arbitrator may' +
        'only conduct an individual arbitration and may not consolidate Others' +
        'than one individual’ s claims, preside over any type of class or' +
        'representative proceeding or preside over any proceeding involving' +
        'Others than one individual.'
    }
  ],
  [
    'terms-17-desc-8',
    {
      KOR: '17.6. JAMS의 규칙. JAMS의 규칙 및 추가 정보는 JAMS 웹 사이트 ',
      ENG:
        '17.6. Rules of JAMS. The rules of, and additional information about,' +
        'JAMS are available on the JAMS website at'
    }
  ],
  [
    'terms-17-desc-9',
    {
      KOR:
        '에서 볼 수 있으며 수시로 업데이트 될 수 있습니다. 본 계약의 준수에 동의함으로써 귀하는 다음 중 하나를 수행합니다. (a) 귀하가 JAMS 규칙을 읽고 이해했음을 인정하고 동의합니다. (b) JAMS의 규칙을 읽는 기회를 포기하고 JAMS의 규칙이 불공정하거나 어떠한 이유로도 적용해서는 안된다는 주장.',
      ENG:
        ', as may be updated from time to time. By agreeing to be bound by this' +
        'Agreement, you either: (a) acknowledge and agree that you have read' +
        'and understand the rules of JAMS; or (b) waive your opportunity to' +
        'read the rules of JAMS and any claim that the rules of JAMS are unfair' +
        'or should not apply for any reason.'
    }
  ],
  [
    'terms-17-desc-10',
    {
      KOR:
        '17.7. 분리 가능성. 이 제 18조의 조항, 조항 또는 조항이 유효하지 않거나 시행이 불가능할 경우 법률에서 요구하는 최소한의 범위 내에서 유지되어야 하며 기타 모든 조항, 조항 또는 조항은 유효하고 시행 가능합니다. 또한 18.2 항에 명시된 권리 포기는 본 계약의 다른 조항과 분리되며 해당 법률에서 금지하는 경우를 제외하고는 유효하고 시행 가능합니다.',
      ENG:
        '17.7. Severability. If any term, clause, or provision of this FooterContainer' +
        '20 is held invalid or unenforceable, it will be so held to the minimum' +
        'extent required by law and all other terms, clauses or provisions will' +
        'remain valid and enforceable. Further, the waivers set forth in' +
        'FooterContainer 20.2 are severable from the other provisions of this Agreement' +
        'and will remain valid and enforceable, except as prohibited by' +
        'applicable law.'
    }
  ],
  [
    'terms-18-title',
    {
      KOR: '18. 적용 법률 및 장소',
      ENG: '18. Applicable Law and Venue'
    }
  ],
  [
    'terms-18-desc',
    {
      KOR:
        '본 계약 및 서비스 및 Polaris ShareModal 컨텐츠에 대한 귀하의 액세스 및 사용은 법 조항의 상충에 의거하지 않고 뉴욕 법에 따라 규율 되고 해석됩니다. 제 18 조의 중재 조항이 적용되지 않고 소액 배상 청구 법정에서 분쟁을 청취 할 수 없는 경우 귀하는 이 계약 또는 본 계약과 관련하여 발생하는 법률 또는 형평상의 행위가 주에서만 소송 뉴욕 주 뉴욕 카운티에 소재한 연방 법원 및 귀하는 본 계약에서 발생하는 모든 소송, 소송 또는 소송에 대해 취소 불가능하고 무조건적으로 동의하고 해당 법원의 배타적 관할권에 복종해야 합니다.',
      ENG:
        'This Agreement and your access to and use of the Service and the' +
        'Polaris ShareModal Content will be governed by, and construed in accordance' +
        'with, the laws of New York, without resort to its conflict of law' +
        'provisions. To the extent the arbitration provision in FooterContainer 20 does' +
        'not apply and the Dispute cannot be heard in small claims court, you' +
        'agree that any action at law or in equity arising out of, or relating' +
        'to, this Agreement shall be filed only in the state and federal courts' +
        'located in New York County, New York and you hereby irrevocably and' +
        'unconditionally consent and submit to the exclusive jurisdiction of' +
        'such courts over any suit, action or proceeding arising out of this' +
        'Agreement.'
    }
  ],
  [
    'terms-19-title',
    {
      KOR: '19. 해지',
      ENG: '19. Termination'
    }
  ],
  [
    'terms-19-desc-1',
    {
      KOR: '당사는 사전 통보없이 ',
      ENG:
        'We reserve the right, without notice and in our sole discretion, to' +
        'terminate your license to access and use of the Service, which' +
        'includes,'
    }
  ],
  [
    'terms-19-desc-2',
    {
      KOR:
        '을 포함하여 서비스에 액세스하고 이를 사용하기 위한 귀하의 라이센스를 해지할 수 있는 권리를 당사의 재량에 따라 보유 할 권리를 보유하며, 귀하가 향후 서비스에 액세스하고 사용하는 것을 차단 또는 방지 할 권리를 보유합니다. 제공하십시오.',
      ENG:
        'and to block or prevent your future access to, and use of, the Service' +
        'that we provide.'
    }
  ],
  [
    'terms-20-title',
    {
      KOR: '20. 분리 가능성',
      ENG: '20. Severability'
    }
  ],
  [
    'terms-20-desc',
    {
      KOR:
        '본 계약의 조항, 조항 또는 조항이 불법이거나 효력이 없거나 시행 할 수 없는 이유로 간주되는 경우 해당 조항, 조항 또는 조항은 본 계약에서 분리 될 수 있는 것으로 간주되며 나머지 조항의 유효성 및 집행 가능성에는 영향을 미치지 않습니다.',
      ENG:
        'If any term, clause, or provision of this Agreement is deemed to be' +
        'unlawful, void or for any reason unenforceable, then that term, clause' +
        'or provision shall be deemed severable from this Agreement and shall' +
        'not affect the validity and enforceability of any remaining' +
        'provisions.'
    }
  ],
  [
    'terms-21-title',
    {
      KOR: '21. 변경 사항',
      ENG: '21. Changes'
    }
  ],
  [
    'terms-21-desc-1',
    {
      KOR:
        '본 계약은 본 서비스에 관한 귀하와 당사 간의 완전한 합의입니다. 이는 귀하와 당사 사이의 모든 이전 또는 현재 계약을 대체합니다. 우리는 언제든지이 사용자 계약을 수정할 수 있습니다. 귀하의 권리에 중대한 영향을 미치는 본 계약을 변경하는 경우, 우리는 통지를 제공하고이 개정판을 ',
      ENG:
        'This Agreement is the entire agreement between you and us concerning' +
        'the Service. It supersedes all prior or contemporaneous agreements' +
        'between you and us. We may modify this user agreement at any time. If' +
        'we make changes to this agreement that materially affect your rights,' +
        'we will provide notice and keep this edition available as an archive' +
        'on '
    }
  ],
  [
    'terms-21-desc-2',
    {
      KOR:
        '의 아카이브로 보관할 것입니다. 본 계약을 변경한 후에도 서비스를 계속 사용함으로써 귀하는 그러한 변경에 동의하는 것입니다.',
      ENG:
        'By' +
        'continuing to use the Services after a change to this agreement, you' +
        'agree to those changes.'
    }
  ],
  [
    'terms-22-title',
    {
      KOR: '22. 연락처 정보',
      ENG: '22. Contact Information'
    }
  ],
  [
    'terms-22-desc-1',
    {
      KOR: '당사에 대한 통지는 ',
      ENG: 'Notices to the company. should be directed to'
    }
  ],
  [
    'terms-22-desc-2',
    {
      KOR: '로 보내야합니다.',
      ENG: ' '
    }
  ],

  // Privacy policy
  [
    'privacy-desc',
    {
      KOR:
        'DECOMPANY Inc. (이하 "회사")는 Polaris ShareModal Service (이하 "서비스")에 저장된 개인 정보의 보호가 중요하다고 생각하기 때문에 항상 사용자의 개인 정보를 보호하기 위해 최선의 노력을 다합니다. 이 서비스는 2019 년 5 월 31 일부터 이 서비스가 정보를 수집하는 이유와 사용자 데이터의 수집 및 내용을 처리하기 위해 취해야 할 조치에 대해 설명합니다.',
      ENG:
        'DECOMPANY Inc. (hereinafter “Company”) always makes its best efforts to protect the personal information of its users as it considers the protection of personal information saved under Polaris ShareModal Service (hereinafter "Service") is significant. This Privacy Policy, effective from May 31, 2019 explains why this service collects information as well as what measures are taken to handle the collection and contents of user data.'
    }
  ],
  [
    'privacy-1-title',
    {
      KOR: '1. 개인 정보 수집 항목 및 수집 조치',
      ENG: '1. Personal Information Collection Items and Collection Measures'
    }
  ],
  [
    'privacy-1-desc-1',
    {
      KOR:
        '회사는 사용자에게 더 나은 서비스를 제공하기 위해 정보를 수집하고 저장합니다.',
      ENG:
        'The company collects and saves information to provide a better service to the users.'
    }
  ],
  [
    'privacy-1-desc-2',
    {
      KOR: 'A. 사용자가 제공 한 정보.',
      ENG: 'A. Information provided by users.'
    }
  ],
  [
    'privacy-1-desc-3',
    {
      KOR:
        '회원 가입시 다음 개인 정보를 수집하고 개인 및 회사 서비스를 위해 다음 항목을 수집합니다.',
      ENG:
        'When joining as a member, the following personal information is collected and also the following items are collected for personal and company services.'
    }
  ],
  [
    'privacy-1-desc-4',
    {
      KOR: '① 제작자 / 투표자 / 청중',
      ENG: '① Creator/Voter/Audiences'
    }
  ],
  [
    'privacy-1-desc-5',
    {
      KOR: '- 필수 : 이메일 주소, 비밀번호',
      ENG: '- Required: email address, password'
    }
  ],
  [
    'privacy-1-desc-6',
    {
      KOR: 'B. 서비스 이용 중 수집 된 정보.',
      ENG: 'B. Information collected during use of service.'
    }
  ],
  [
    'privacy-1-desc-7',
    {
      KOR: '① 장치 정보',
      ENG: '① Device information'
    }
  ],
  [
    'privacy-1-desc-8',
    {
      KOR:
        '회원의 장치 (모바일 / PC), OS 유형 및 버전, 브라우저 유형, 사용 내역, IP 주소, 쿠키, 액세스 토큰, 세션 ID, 국가, 언어, 입장 경로가 수집됩니다.',
      ENG:
        "A member's device (mobile/PC), OS type and version, browser type, usage history, IP address, cookies, access token, session ID, country, language, route of entry are collected."
    }
  ],
  [
    'privacy-1-desc-9',
    {
      KOR: '② 내용 정보',
      ENG: '② contents information'
    }
  ],
  [
    'privacy-1-desc-10',
    {
      KOR:
        '사용자의 Polaris Office 저장소에있는 파일과 내용은 사용자가 선택한 서비스를 위해 수집되며 다른 서비스 나 사용자에게 사용되거나 제 3 자에게 제공되지 않습니다.',
      ENG:
        "Files and their content in the user's Polaris Office storage are collected, which is intended for the service selected by the user, and will not be used for any other services or users or be provided to any sectionThird parties."
    }
  ],
  [
    'privacy-1-desc-11',
    {
      KOR: '③ 제 3 자 파트너 계정 정보',
      ENG: '③ A sectionThird party partner account information'
    }
  ],
  [
    'privacy-1-desc-12',
    {
      KOR:
        '사용자가 다른 사람이 Google, 링크드 인 또는 기타 서비스 제공 업체를 통해 자신의 개인 정보에 액세스하도록 허용하는 경우 서비스는 해당 정보를 서버에 저장하여 나중에 해당 정보에 액세스 할 수 있습니다.',
      ENG:
        'If the user allows Others to access to their own personal information via Google, Linkedin, or any other service provider, the service stores such information in the server, so that the user may access the information later.'
    }
  ],
  [
    'privacy-2-title',
    {
      KOR: '2. 개인 정보 수집의 목적 및 법적 근거',
      ENG:
        '2. Objectives of Personal Information Collection and its Legal Basis'
    }
  ],
  [
    'privacy-2-desc-1',
    {
      KOR:
        '회사는 다음과 같은 법적 배경을 바탕으로 사용자의 개인 정보를 처리합니다.',
      ENG:
        "The company processes the user's personal information based on the following legal backgrounds."
    }
  ],
  [
    'privacy-2-desc-2',
    {
      KOR: 'A. 데이터 주체의 동의',
      ENG: 'A. Consent by the data subject'
    }
  ],
  [
    'privacy-2-desc-3',
    {
      KOR:
        '회사는 그러한 조항에 동의하는 사용자에게 제품 제안 또는 마케팅 정보를 제공 할 수 있습니다. 이러한 정보는 이벤트 정보를 제공하거나 광고를 게시하기 위해 참조 될 수 있습니다. 사용자는 서비스 계정 설정의 서비스 / 이벤트 알림 옵션에서 이러한 정보의 수신을 거부 할 수 있습니다.',
      ENG:
        'The company may provide product offer or marketing information to users who agree to such provisions. Such information can be referred to for delivering event information or posting ads. UserAvatar may opt to deny reception of such information in the service/event notification option in the account setup of service.'
    }
  ],
  [
    'privacy-2-desc-4',
    {
      KOR: 'B. 계약 이행',
      ENG: 'B. Contract execution'
    }
  ],
  [
    'privacy-2-desc-5',
    {
      KOR:
        '회사는 사용자와의 계약 실행에 필요한 개인 정보를 처리 할 수 있습니다.',
      ENG:
        'The company can process the necessary personal information for contract execution with the user.'
    }
  ],
  [
    'privacy-2-desc-6',
    {
      KOR: '① 사용자 확인 의도 확인을 요청하고 새 계정을 만듭니다.',
      ENG:
        '① Request confirmation of user confirmation intention and create a new account.'
    }
  ],
  [
    'privacy-2-desc-7',
    {
      KOR:
        '② 권한이있는 사용자를 식별하고 불법 사용자 및 권한이없는 사용으로 인한 부정직 한 사용을 방지하기 위해 사용합니다.',
      ENG:
        '② Utilize to identify authorized users and prevent from a dishonest use by illegal users and unauthorized utilization.'
    }
  ],
  [
    'privacy-2-desc-8',
    {
      KOR:
        '③ 서비스 이용시 요청 된 문의 및 불만 처리 문제를 처리 한 후 사용자에게 다양한 서비스를 제공하고 알림을 배포하는 데 활용합니다.',
      ENG:
        '③ Utilize to provide various services to users and disseminate a notification after dealing with matters of inquiry and processing complaints requested during experience of the services.'
    }
  ],
  [
    'privacy-2-desc-9',
    {
      KOR:
        '④ 사용중인 특정 장치 또는 특정 액세스 경로의 파트너 관계로 인해 특별한 문제가있는 경우 파트너 서비스의 유효한 사용자임을 확인하는 데 사용합니다.\n',
      ENG:
        "④ Uses it to confirm that it is the valid user for the partner's service in case that there exists some special issues due to partnerships in a specific device in use or a specific route of access."
    }
  ],
  [
    'privacy-2-desc-10',
    {
      KOR: 'C. 회사의 법적 이익',
      ENG: 'C. Legal profits of the company'
    }
  ],
  [
    'privacy-2-desc-11',
    {
      KOR:
        '회사는 회사의 합법적 이익을 위해 필요한 개인 정보를 처리 할 수 있습니다.',
      ENG:
        'The company can process the necessary personal information for lawful profits of the company.'
    }
  ],
  [
    'privacy-2-desc-12',
    {
      KOR:
        '① 회사는 맞춤형 서비스 제공 및 신규 서비스 개발을 포함한 참고 자료로 패턴, 접근 빈도 및 서비스 이용을 분석하여 개인 정보를 이용하여 통계를 작성합니다.',
      ENG:
        '① The company uses personal information to create statistics by analyzing patterns, frequency of access, and use of service for a reference including provision of customized services and development of new services.'
    }
  ],
  [
    'privacy-2-desc-13',
    {
      KOR:
        '② 회사는 무료 서비스를 제공 할 때 서비스 회사 화면에 제휴사 또는 회사의 서비스와 관련된 다양한 광고를 게시 할 권리가 있습니다.',
      ENG:
        '② When providing free service, the company has the right to post various ads related to service of the partner company or the company on the service screen.'
    }
  ],
  [
    'privacy-3-title',
    {
      KOR: '3. 개인 정보의 보유 및 이용 기간',
      ENG: '3. Retention and Use Period of Personal Information'
    }
  ],
  [
    'privacy-3-desc-1',
    {
      KOR:
        'A. 회사는 서비스를 제공하면서 제한된 용량의 개인 정보를 사용합니다. 개인 정보는 i) 이용자가 개인 정보의 수집 및 이용에 대한 취소를 요구하고 동의를 철회 한 경우, ii) 개인 정보의 수집 및 이용 목적이 달성 된 시점, iii) 또는 이용 기간에 지체없이 삭제됩니다. 만료됩니다.',
      ENG:
        'A. The company uses personal information in a limited capacity while providing service. The personal information will be deleted without delay i) if users request for the cancellation and withdraw consent to the collection and use of personal information, ii) when the purpose of collection and use of personal information is accomplished, iii) or the period of use expires.'
    }
  ],
  [
    'privacy-3-desc-2',
    {
      KOR:
        'B. 회사는 개인 정보를 관련법이 허용하는 기간 동안 만 저장하며 저장된 정보를 다른 목적으로 사용하지 않습니다.',
      ENG:
        'B. The company stores the personal data only for the time period allowed by the relevant laws and never uses the stored information for ' +
        ' any other purposes.'
    }
  ],
  [
    'privacy-3-desc-3',
    {
      KOR: '① 전자 상거래에서의 소비자 보호 행위',
      ENG: '① The act of consumer protection in electronic commerce'
    }
  ],
  [
    'privacy-3-desc-4',
    {
      KOR: '- 계약 및 해지 기록 : 5 년',
      ENG: '- Contract and revocation records: 5 years'
    }
  ],
  [
    'privacy-3-desc-5',
    {
      KOR: '- 지불 및 자금 공급 기록 : 5 년',
      ENG: '- Payment and fund supply record: 5 years'
    }
  ],
  [
    'privacy-3-desc-6',
    {
      KOR: '- 소비자의 불만 또는 법적 분쟁 기록 : 3 년',
      ENG: "- Consumer's complaint or legal disputes record: 3 years"
    }
  ],
  [
    'privacy-3-desc-7',
    {
      KOR: '② 전자 상거래 법',
      ENG: '② Electronic commerce transaction act'
    }
  ],
  [
    'privacy-3-desc-8',
    {
      KOR: '- 전자 상거래 : 5 년',
      ENG: '- Electronic commerce record: 5 years'
    }
  ],
  [
    'privacy-3-desc-9',
    {
      KOR: '③ 통신 비밀 보호법',
      ENG: '③ Communication secret protection act'
    }
  ],
  [
    'privacy-3-desc-10',
    {
      KOR: '- 로그인 : 3 개월',
      ENG: '- LoginButton record: 3 months'
    }
  ],
  [
    'privacy-4-title',
    {
      KOR: '4. 개인 정보 처리 절차 및 조치',
      ENG: '4. Personal Information Disposal Procedures and Measures'
    }
  ],
  [
    'privacy-4-desc-1',
    {
      KOR: '개인 정보의 처분 절차 및 조치는 다음과 같습니다.',
      ENG:
        'The disposal procedures and measures of personal information are follows.'
    }
  ],
  [
    'privacy-4-desc-2',
    {
      KOR: 'A. 폐기 절차',
      ENG: 'A. Disposal procedures'
    }
  ],
  [
    'privacy-4-desc-3',
    {
      KOR:
        '내부 정책 또는 기타 법률에 따라 정보 보호 사유로 인해 사용자의 개인 정보가 일정 기간 동안 저장되고 목표가 달성되면 폐기됩니다.',
      ENG:
        "A user's personal information is stored for a certain time period due to the information protection reason according to the internal policy or other laws and then disposed once the goals are achieved."
    }
  ],
  [
    'privacy-4-desc-4',
    {
      KOR: 'B. 폐기 방법',
      ENG: 'B. Disposal measures'
    }
  ],
  [
    'privacy-4-desc-5',
    {
      KOR:
        '종이에 인쇄 된 개인 데이터는 파기 또는 소각으로 폐기 할 수 있으며 데이터의 복원을 방지하는 기술적 조치를 사용하여 개인 데이터의 전기적 형식을 삭제할 수 있습니다.',
      ENG:
        'The personal data printed on paper can be disposed by destruction or incineration and an electrical format of personal data can be deleted by using a technical measure that prevents restoration of data.'
    }
  ],
  [
    'privacy-5-title',
    {
      KOR: '5. 사용자의 권리',
      ENG: "5. UserAvatar's Rights"
    }
  ],
  [
    'privacy-5-desc-1',
    {
      KOR:
        '모든 사용자에게는 다음과 같은 권리가 있습니다 (14 세 미만의 어린이에 대한 법적 보호자).',
      ENG:
        'Every user has the following rights (legal guardian for a child below the age of 14)'
    }
  ],
  [
    'privacy-5-desc-2',
    {
      KOR: 'A. 정보를받을 권리',
      ENG: 'A. Rights to receive information'
    }
  ],
  [
    'privacy-5-desc-3',
    {
      KOR:
        '회사는 개인 정보를 처리하기 전에 법적 문제를 사용자에게 알리고 동의를 얻습니다.',
      ENG:
        'The company will notify the user of legal issues and obtain consent\n' +
        '          before processing the personal information.'
    }
  ],
  [
    'privacy-5-desc-4',
    {
      KOR:
        '개인 정보 처리의 전반적인 측면은 개인 정보 보호 정책에서 즉시 확인할 수 있습니다.',
      ENG:
        'The overall aspects of the personal data processing can be immediately\n' +
        '          checked on the privacy policy.'
    }
  ],
  [
    'privacy-5-desc-5',
    {
      KOR: 'B.보고 수정할 권리',
      ENG: 'B. Rights to view and correct'
    }
  ],
  [
    'privacy-5-desc-6',
    {
      KOR:
        '사용자는 『계정 설정』을 통해 개인 정보를 보거나 수정할 수 있습니다.',
      ENG:
        'A user can view or correct their personal information through 『account setting』.'
    }
  ],
  [
    'privacy-5-desc-7',
    {
      KOR: 'C. 동의 삭제 및 철회 권리',
      ENG: 'C. Rights to delete and revoke consents'
    }
  ],
  [
    'privacy-5-desc-8',
    {
      KOR:
        '① 이용자는 언제든지 『계정 설정』에서 개인 정보를 삭제하거나 개인 정보 수집 및 이용에 대한 동의를 철회 할 수 있습니다. 동의가 철회 될 때까지 동의에 따라 처리 된 모든 항목은 합법적 인 것으로 간주됩니다.',
      ENG:
        '① A user can delete their personal information in 『account setting』\n' +
        '          anytime or revoke consent on the personal information collection and\n' +
        '          use. Until the consent is revoked, all the items processed based on\n' +
        '          the consent are deemed to be lawful.'
    }
  ],
  [
    'privacy-5-desc-9',
    {
      KOR:
        '② 『계정 설정』에서 회원 탈퇴 메뉴를 이용하여 회원 탈퇴를 할 수 있습니다. 회원 탈퇴 후, 개인 정보는 ". 개인 정보의 보유 및 이용 기간"에 따라 처리됩니다.',
      ENG:
        '② A user can use the membership withdrawal MenuAvatar in 『account setting』\n' +
        '          to withdraw their membership. Once the membership is withdrawn, the\n' +
        '          personal information is processed according to ". Retention and Use\n' +
        '          Period of Personal Information."'
    }
  ],
  [
    'privacy-5-desc-10',
    {
      KOR: 'D. 데이터 전송 권한',
      ENG: 'D. Rights to transfer data'
    }
  ],
  [
    'privacy-5-desc-11',
    {
      KOR:
        '사용자는 『데이터 저장 및 전송』에서 자신의 데이터를 다운로드하여 다른 서비스 제공 업체에 전송할 수 있습니다.',
      ENG:
        'A user can download their own data in 『data saving and transfer』 and transfer it to other service provider.'
    }
  ],
  [
    'privacy-5-desc-12',
    {
      KOR: 'E. 이의 제기 권리',
      ENG: 'E. Rights to object'
    }
  ],
  [
    'privacy-5-desc-13',
    {
      KOR:
        "사용자는 직접 마케팅에 반대 할 권리가 있으며``계정 설정 ''에서 마케팅 이메일 수신 거부를 설정할 수 있습니다.",
      ENG:
        'A user has the right to object against direct marketing and can set rejection of marketing email receiving in 『account setting』.'
    }
  ],
  [
    'privacy-5-desc-14',
    {
      KOR:
        'F. EU 국가에 거주하는 경우 개인 데이터 처리와 관련하여 개인 정보 보호 감독 기관에 불만을 제기 할 권리.',
      ENG:
        'F. Rights to raise complaints to the privacy supervision authority in relation to personal data processing if they reside in EU countries.'
    }
  ],
  [
    'privacy-6-title',
    {
      KOR: '6. 개인 정보의 제 3 자 제공',
      ENG: '6. Provision of Personal Information to sectionThird Parties'
    }
  ],
  [
    'privacy-6-desc-1',
    {
      KOR: '회사는 다음과 같은 경우에 개인 정보를 제 3 자에게 제공합니다.',
      ENG:
        'The company supplies the personal information to a sectionThird party in the following cases of exceptions.'
    }
  ],
  [
    'privacy-6-desc-2',
    {
      KOR: 'A. 사용자에 의한 사전 계약',
      ENG: 'A. Agreement made by the users in advance'
    }
  ],
  [
    'privacy-6-desc-3',
    {
      KOR:
        '개인 정보가 제 3 자에게 제공 될 경우, 회사는 개인 정보, 목적, 품목, 소유 및 사용 기간을 사전에 수령 한 사람에게 통지 한 후 명시 적 및 개별적 계약을 요청합니다.',
      ENG:
        'When the personal data is provided for a sectionThird party, the company requests explicit and individual agreements after notifying a person who receives personal information, purpose, items, possession, and period of use in advance.'
    }
  ],
  [
    'privacy-6-desc-4',
    {
      KOR: 'B. 관련 법률에 특별한 규정이있는 경우.',
      ENG: 'B. In case that the relevant laws have special provisions for it.'
    }
  ],
  [
    'privacy-7-title',
    {
      KOR: '7. 개인 정보의 위탁 처리',
      ENG: '7. Commissioned Processing of Personal Information'
    }
  ],
  [
    'privacy-7-desc-1',
    {
      KOR:
        '고객 서비스는 모든 고객 지원 관련 문제의 품질과 신속성을 보장하기 위해 타사 회사에 위탁됩니다.',
      ENG:
        'Customer service is entrusted to a sectionThird party company to ensure the quality and promptness of all customer support related issues.'
    }
  ],
  [
    'privacy-7-desc-2',
    {
      KOR:
        '개인 정보에 관한 기관 및 위탁 업무는 다음과 같으며 위탁 계약이 만료 될 때까지 개인 정보를 보유합니다.',
      ENG:
        'The agencies and their entrusted tasks about personal information are as follows, and they retain personal information until the entrustment contract expires.'
    }
  ],
  [
    'privacy-7-desc-3',
    {
      KOR: 'A. 서비스',
      ENG: 'A. service'
    }
  ],
  [
    'privacy-7-desc-4',
    {
      KOR:
        '① Amazon Web Services, Inc. : 고객의 개인 정보 및 컨텐츠 저장을위한 퍼블릭 클라우드 서비스를 제공합니다.',
      ENG:
        "① Amazon Web Services, Inc. : Provide the public cloud service for customer's personal information and contents storage."
    }
  ],
  [
    'privacy-8-title',
    {
      KOR: '8. 자녀의 개인 정보',
      ENG: "8. Child's Personal Information"
    }
  ],
  [
    'privacy-8-desc-1',
    {
      KOR: '이 서비스는 14 세 미만의 어린이를 위한 것이 아닙니다.',
      ENG: 'The service is not intended for a child below 14 years old.'
    }
  ],
  [
    'privacy-8-desc-2',
    {
      KOR:
        '회사에서 14 세 미만 아동의 개인 정보가 수집 된 것을 발견하거나 법정 후견인이 해당 아동의 회원 탈퇴 (취소)를 요청하는 경우 회사는 즉시 이를 삭제하려고 시도합니다.',
      ENG:
        'If the company finds out that the personal information of a child below 14 years old is collected or if the legal guardian requests membership withdrawal(cancellation) of that child, then the company will immediately try to delete it.'
    }
  ],
  [
    'privacy-9-title',
    {
      KOR: '9. 자동화 된 개인 정보 수집 장비의 설치 및 고용 및 거부',
      ENG:
        '9. Installation/Employment of Automated Personal Information Collection Equipment and Refusal'
    }
  ],
  [
    'privacy-9-desc-1',
    {
      KOR:
        '회사는 개인화되고 맞춤화 된 서비스를 제공하기 위해 사용자 정보를 저장하고 제공하는 "쿠키"를 사용합니다.',
      ENG:
        'The company uses "Cookie" which saves and brings out user information in order to provide personalized and customized services.'
    }
  ],
  [
    'privacy-9-desc-2',
    {
      KOR:
        '회사에서 14 세 미만의 아동의 개인 정보가 수집 된 것을 발견하거나 법적 보호자가 해당 아동의 회원 탈퇴 (취소)를 요청하는 경우 회사는 즉시이를 삭제하려고 시도합니다.',
      ENG:
        'If the company finds out that the personal information of a child below 14 years old is collected or if the legal guardian requests membership withdrawal(cancellation) of that child, then the company will immediately try to delete it.'
    }
  ],
  [
    'privacy-9-desc-3',
    {
      KOR: 'A. 쿠키 란 무엇입니까?',
      ENG: 'A. What is a cookie?'
    }
  ],
  [
    'privacy-9-desc-4',
    {
      KOR:
        '쿠키는 웹 사이트가 운영하는 서버에서 사용자 브라우저로 보내는 텍스트 파일로 컴퓨터의 하드 디스크에 저장됩니다. 따라서 사용자가 웹 사이트를 방문하면 웹 사이트의 서버는 사용자의 하드 디스크에 저장된 쿠키 데이터를 읽고 사용자 환경 설정을 유지하고 사용자 지정된 서비스를 제공합니다. 쿠키는 개인을 자동 또는 능동적으로 식별하는 정보를 수집하지 않으므로 쿠키를 항상 삭제하거나 거부 할 수 있습니다.\n',
      ENG:
        'Cookie are diminutive text files - sending to user browser from the\n' +
        '          servers operated by the websites - saved in the computer’s hard-disk.\n' +
        "          So, if the users visit websites, the websites' servers read cookie\n" +
        "          data saved in users' hard-disks to maintain users' environment\n" +
        '          settings and provide customized services. The users can always deletes\n' +
        '          or denies to save cookie since the cookie does not collect information\n' +
        '          which identify individuals automatically nor actively.'
    }
  ],
  [
    'privacy-9-desc-5',
    {
      KOR: 'B. 쿠키 사용 목적',
      ENG: 'B. Purpose of using Cookie'
    }
  ],
  [
    'privacy-9-desc-6',
    {
      KOR:
        '이 회사는 쿠키를 통해 사용자가 선호하는 설정을 저장하여 사용자를 위해 더 빠른 웹 환경을 지원하고 편의성을 높이기 위해 서비스 개선에 사용합니다. 이 사고로 인해 사용자는 서비스를 쉽게 사용할 수 있습니다. 또한 쿠키를 통해 회사는 사용자의 웹 사이트 방문, 패턴 및 관심사를 이해함으로써 광고를 포함한 개인 맞춤형 서비스를 제공 할 수 있습니다.',
      ENG:
        'The company supports a faster Web environment for users by saving settings preferred by users via cookies and uses them for service improvements for increased convenience. Because of this incident, the users are able to use the service easily. In addition, cookies allow the company to provide a personal customized service, including advertisements, by understanding the users website visits, patterns, and interests.'
    }
  ],
  [
    'privacy-9-desc-7',
    {
      KOR: 'C. 쿠키 설치 및 고용 및 거부',
      ENG: 'C. Installation/employment of Cookie and denial'
    }
  ],
  [
    'privacy-9-desc-8',
    {
      KOR:
        '사용자는 쿠키 설치를 선택할 권리가 있습니다. 따라서 사용자는 웹 브라우저에서 옵션을 설정하여 모든 쿠키를 허용하거나 쿠키가 저장 될 때마다 확인을 수행하거나 쿠키 저장을 거부 할 수 있습니다. 그러나 쿠키 저장을 거부하면 웹 사용이 어려워지고 로그인이 필요한 일부 서비스를 사용하지 못할 수 있습니다.',
      ENG:
        'A user has the right to select cookie installation. Thus, a user can set the option on the web browser to allow every cookie or, perform confirmation each time a cookie is saved or reject saving of any cookie. But if they reject saving of any cookie, then the web use will become difficult and some of service requiring a log in may be unavailable.'
    }
  ],
  [
    'privacy-9-desc-9',
    {
      KOR: 'D. 다음 지침은 쿠키 설치 허용을 지정하는 지침을 제공합니다.',
      ENG:
        'D. Following directions will give a guidance to designate allowance of Cookie installation.'
    }
  ],
  [
    'privacy-9-desc-10',
    {
      KOR:
        '① Internet Explorer : 웹 브라우저 상단의 도구 메뉴 > 인터넷 옵션 > 개인 정보 > 설정',
      ENG:
        '① Internet Explorer: Tool MenuAvatar on upper side of web-browser > Internet TrackingOption > Personal Information > Setting'
    }
  ],
  [
    'privacy-9-desc-11',
    {
      KOR:
        '② Chrome : 웹 브라우저 오른쪽의 선택 메뉴 > 화면 하단의 확장 설정 선택 (단어가 다를 수 있음) > 개인 정보 내용 선택 버튼 > 쿠키',
      ENG:
        '② Chrome: Selection MenuAvatar on right side of web-browser > Selection of Extended Setting on bottom of screen (wording may differ) > Personal Information contents Selection button > Cookie'
    }
  ],
  [
    'privacy-10-title',
    {
      KOR: '10. 해외로의 개인 정보 전송 관련 문제',
      ENG: '10. Issues Related to Personal Information Transfer to Abroad'
    }
  ],
  [
    'privacy-10-desc-1',
    {
      KOR:
        'A. 회사가 수집 한 개인 정보는 다음 구역 내에서 처리 또는 저장되며 개인 정보 보호 정책에 지정된 목표에 대해서만 처리됩니다.',
      ENG:
        'A. The personal information collected by the company is processed or saved within the following districts and processed only for the goals specified in the privacy policy.'
    }
  ],
  [
    'privacy-10-desc-2',
    {
      KOR: '① 본사, 계열사 및 IT 서버 위치 : 한국',
      ENG: '① Location of main office, affiliates and IT server: Korea'
    }
  ],
  [
    'privacy-10-desc-3',
    {
      KOR: '② 위탁 업체 위치 (퍼블릭 클라우드 서비스 공급) : 미국',
      ENG:
        '② Location of consignment company (Public Cloud Service supply): USA'
    }
  ],
  [
    'privacy-10-desc-4',
    {
      KOR: 'B. 다음 EU 사용자의 개인 정보는 EU 외부로 전송됩니다.',
      ENG:
        "B. The following EU user's personal information is transferred out of EU."
    }
  ],
  [
    'privacy-10-desc-5',
    {
      KOR: '① 제작자 / 투표자 / 청중',
      ENG: '① Creator/Voter/Audiences'
    }
  ],
  [
    'privacy-10-desc-6',
    {
      KOR: '- 필수 : 이메일 주소, 비밀번호',
      ENG: '- Required: email address, password'
    }
  ],
  [
    'privacy-10-desc-7',
    {
      KOR:
        '다. 회사가 이용자의 개인 정보를 EU 외부로 이전하는 경우에는 개인 정보가 보호되며 EU의 일반 개인 정보 보호 규정 (GDPR)은 다음 기준에 따릅니다.',
      ENG:
        "C. In case that the company transfer the user's personal information out of EU, then the personal information is protected and the EU's general personal data protection regulation(GDPR) is complied with on the following basis."
    }
  ],
  [
    'privacy-10-desc-8',
    {
      KOR:
        '① EU와 미국, 스위스와 미국 사이의 개인 정보 보호 프레임 워크에서 인증 된 데이터 수신자를 지정합니다.',
      ENG:
        '① Designate the data recipient certified in the privacy shield framework between EU and USA and Swiss and USA.'
    }
  ],
  [
    'privacy-10-desc-9',
    {
      KOR:
        '효율적이고 안전한 데이터 관리를 위해 회사는 개인 정보 보호 인증을받은 회사를 사용하여 고객의 개인 정보와 데이터를 저장합니다.',
      ENG:
        "For efficient and safe data management, the company uses a company with privacy shield certifications to store the customer's personal information and data."
    }
  ],
  [
    'privacy-10-desc-10',
    {
      KOR: '② 데이터 주체와 계약 체결',
      ENG: '② Contract execution with the data subject'
    }
  ],
  [
    'privacy-10-desc-11',
    {
      KOR:
        '회사는 본사가있는 한국에서 서비스를 제공하며 EU에서는 지점을 운영하지 않습니다. 따라서 한국으로 개인 정보를 양도하는 것은 불가피하며, 동의하지 않으면 서비스가 제공되지 않습니다.',
      ENG:
        'The company provide service in Korea where the main office is located, and operates no branch in EU. Thus, transfer of personal information to Korea is unavoidable for service, and if you do not accept it, no service will be provided for you.'
    }
  ],
  [
    'privacy-10-desc-12',
    {
      KOR:
        '이 회사는 국제 표준 개인 정보 (ISO / IEC 27001) 인증을 받았으며 이를 바탕으로 한 정보 보호 관리 시스템에 따라 고객의 개인 정보와 내용을 안전하게 관리하고 있습니다.',
      ENG:
        "The company is certified with the international standard of personal information(ISO/IEC 27001) and the company is safely managing the customer's personal information and contents according to the information protection management system based on it."
    }
  ],
  [
    'privacy-11-title',
    {
      KOR: '11. 개인 정보 문의 고객 서비스',
      ENG: '11. Customer Service for Privacy Inquiries'
    }
  ],
  [
    'privacy-11-desc-1',
    {
      KOR:
        '개인 정보 보호에 대한 질문이나 문의 사항이 있으면 아래 정보를 사용하여 당사에 문의하십시오.',
      ENG:
        'If you have any questions or inquiries about privacy, contact us using the information below.'
    }
  ],
  [
    'privacy-11-desc-2',
    {
      KOR: '▶ DPO (Data Protection Officer) : ',
      ENG: '▶ DPO (Data Protection Officer) : '
    }
  ],
  [
    'privacy-11-desc-3',
    {
      KOR: '- 이메일 주소',
      ENG: '- EmailModal address:'
    }
  ],
  [
    'privacy-11-desc-4',
    {
      KOR:
        '프라이버시 문제와 관련하여 궁금한 점이 있으면 언제든지 문의하십시오. 회사는 사용자의 주장, 우려 또는 질문에 대한 솔루션을 제공하기 위해 노력할 것입니다.',
      ENG:
        'Please do not hesitate to contact us should you have any concerns or questions regarding privacy issues. The Company will endeavor to provide solutions to any claims, concerns, or questions from users.'
    }
  ],
  [
    'privacy-12-title',
    {
      KOR: '12. 개인 정보 보호 정책 변경',
      ENG: '12. Privacy Policy Changes'
    }
  ],
  [
    'privacy-12-desc-1',
    {
      KOR:
        '회사는 서비스 또는 법률의 변경 사항을 반영하기 위해 개인 정보 보호 정책을 수정할 수 있습니다. 현재 개인 정보 보호 정책에서 추가, 삭제 또는 수정하는 경우 회사는 필요한 경우 웹 사이트 또는 이메일에 이유와 세부 정보를 게시합니다.',
      ENG:
        'To reflect the changes in the service or the laws, the company can modify its privacy policy, In case of addition, deletion or modification in the current privacy policy, the company will post the reason and details on the web site or emails if necessary.'
    }
  ],
  [
    'privacy-13-title',
    {
      KOR: '13. 보안',
      ENG: '13. Security'
    }
  ],
  [
    'privacy-13-desc-1',
    {
      KOR:
        '이 회사는 서비스 사용자의 불법 액세스, 변경, 노출 또는 삭제로부터 정보를 보호하기 위해 노력하고 있습니다.',
      ENG:
        'The company devotes its effort to protect information from illegal\n' +
        '          access, change, exposure, or deletion for the service users.'
    }
  ],
  [
    'privacy-13-desc-2',
    {
      KOR:
        '서비스의 사용자 데이터에 액세스하기 위해 비밀번호를 의무화하고 유료 서비스를 지불하기 위해 입력 한 민감한 데이터 (신용 카드 정보 등)는 SSL로 암호화됩니다.',
      ENG:
        'The passwords are mandated to access user data for the service, and sensitive data (credit card information etc.) inputted to pay a charged service will be encrypted by SSL.'
    }
  ],
  [
    'privacy-13-desc-3',
    {
      KOR:
        '그럼에도 유무선 네트워크가 완벽한 보안을 제공하지 않기 때문에 사용자가 선택한 다른 사람에게 전송 된 정보가 완전히 안전하다는 보장은 없습니다. 따라서 물리적, 기술적 또는 관리적 안전 장치가 공격 및 파괴 될 수 있기 때문에 정보가 액세스, 노출, 변경 또는 손상 될 수 있습니다.',
      ENG:
        'Nevertheless, it is not guaranteed that the information sent to Others by your choice is completely safe because wired and wireless networks do not provide complete security. Accordingly, information being accessed, exposed, changed, or damaged is possible because physical, technical, or management safety devices may be attacked and destroyed.'
    }
  ],
  [
    'policy-1-title',
    {
      KOR: '개인 정보 정책',
      ENG: 'PRIVACY POLICY'
    }
  ],
  [
    'policy-1-desc-1',
    {
      KOR:
        'Polaris ShareModal ( "Polaris ShareModal")로 사업을하는 DECOMPANY Corporation은 귀하의 개인 정보를 보호하기 위해 노력합니다. 본 개인 정보 보호 정책은 Polaris Share가 관리하는 공개 웹 사이트 또는이 개인 정보 보호 정책에 연결된 권한 기반 서비스의 정보 관리 관행을 다루고 있습니다. 여기에는 다음 웹 사이트가 포함됩니다.',
      ENG:
        ' At DECOMPANY Corporation, doing business as Polaris ShareModal ("Polaris ShareModal"), we strive to protect the privacy of your information. This privacy statement covers the information management practices of Polaris ShareModal controlled public web sites or permission-based services that link to this privacy statement. These include the following websites:'
    }
  ],
  [
    'policy-1-desc-2',
    {
      KOR:
        'Polaris Share는 개인 정보를 요청하거나 제어하는 ​​모든 페이지에서이 개인 정보 보호 정책에 대한 링크를 제공합니다\n',
      ENG:
        'Polaris ShareModal provides a link to this privacy statement on all pages\n' +
        '          requesting or controlling personal information'
    }
  ],
  [
    'policy-1-desc-3',
    {
      KOR: '정보 : 우리가 수집하고 사용하는 방법',
      ENG: 'INFORMATION: WHAT WE COLLECT AND HOW IT IS USED'
    }
  ],
  [
    'policy-1-desc-4',
    {
      KOR:
        '웹 사이트 방문자 또는 고객이 Polaris ShareModal 서비스 또는 Polaris ShareModal 서비스를 사용하기위한 등록에 대한 추가 정보를 얻는 데 관심이있는 경우, Polaris Share는 당사자에게 이름 및 이메일 주소와 같은 연락처 정보를 제공하도록 요구할 수 있습니다.',
      ENG:
        "When a web site visitor or customer expresses interest in obtaining additional information about Polaris ShareModal's services or registers to use a Polaris ShareModal service, Polaris ShareModal may require the party to provide contact information, such as name, and email address."
    }
  ],
  [
    'policy-1-desc-5',
    {
      KOR:
        'Polaris Share의 권한 기반 서비스는 서비스에 의존하는 여러 비즈니스 트랜잭션에 참여한 참가자가 반복적으로 사용할 수 있도록 설계되었습니다. 이러한 서비스의 보안과 그 안에 포함 된 비즈니스 데이터의 핵심은 사용자의 가상 신원을 확인하는 것이이 서비스를 사용하는 데 필수적입니다. 서비스를 활용하고 보호하려면 참가자는 프로필 정보 (이름, 이메일 주소)를 제공해야합니다.',
      ENG:
        "Polaris ShareModal's permission-based services are designed to facilitate repeat use by participants involved in multiple business transactions relying upon the services. Key to the security of these services and the business data contained therein, verification of user’s virtual identity is fundamental to using this service. Participants must provide profile information (name, email address) in order to utilize and secure the services."
    }
  ],
  [
    'policy-1-desc-6',
    {
      KOR:
        '위에서 설명한대로 수집 된 프로필 정보 외에도 Polaris Share는 방문자의 IP 주소, 방문자가 Polaris ShareModal 웹 사이트에 액세스하는 웹 사이트 유형을 포함하되 이에 국한되지 않는 공개 웹 사이트 사용에 대한 익명 정보를 수집합니다. 웹 사이트에 액세스하는 데 사용되는 웹 브라우저, 방문 시간 및 조회 한 페이지 수 이 수집 된 정보는 개인을 개인적으로 식별하지 않으며 보안을 위해 특정 법적 요구 사항 및 웹 사이트 방문 통계 분석을 수행하기 위해 서비스를 운영해야합니다.',
      ENG:
        "In addition to the profile information collected as described above, Polaris ShareModal also collects anonymous information about the use of our public web site, including but not limited to a visitor's IP address, the websites from which visitors access the Polaris ShareModal web site, the type of web browsers used to access the website, the time of the visit, and the pages viewed. This collected information does not personally identify individuals and is required to operate the service, for security, to fulfill certain legal requirements and statistical analysis of web site visits."
    }
  ],
  [
    'policy-1-desc-7',
    {
      KOR: '쿠키',
      ENG: 'Cookies'
    }
  ],
  [
    'policy-1-desc-8',
    {
      KOR:
        '위에서 설명한 익명의 데이터를 수집하거나 권한 기반 서비스의 반복 사용자에게 더 나은 사용자 경험을 제공하기 위해 귀하의 선택에 따라 브라우저의 쿠키 파일에 남아있는 "쿠키"를 사용할 수 있습니다. 쿠키는 최신 브라우저가 웹 사이트와 상호 작용하는 데 사용하는 작은 텍스트 조각을 저장하는 데 널리 사용되는 메커니즘입니다. 귀하의 IP 주소는 귀하가 웹 사이트의 어떤 형태로든 정보를 제공하지 않으면 개인 정보와 연결되지 않습니다.',
      ENG:
        'In order to collect the anonymous data described above, or to provide a better user experience for repeat users of our permission-based services, we may use "cookies" that remain in the cookies file of your browser at your option. Cookies are a widely utilized mechanism for storing small pieces of text which modern browsers use to interact with web sites. Your IP address will not be linked to any personal information unless you provide that information through any form on the website.'
    }
  ],
  [
    'policy-1-desc-9',
    {
      KOR:
        'Google은 Google과 함께 웹 사이트를 방문하는 동안 사용자를 식별하고 보호하며 사용자의 행동을 강화하는 데 주력하는 쿠키를 사용합니다. Google은 지난 방문 정보를 사용하여 Google 및 Google 파트너 사이트에서의 광고 경험을 조정합니다.',
      ENG:
        'We, together with Google, also use cookies whose main objective is to identify and secure users and augment their behavior while on our website. We use information from past visits to tailor the advertisement experience on Google and Google partner sites.'
    }
  ],
  [
    'policy-1-desc-10',
    {
      KOR: 'Polaris 공유 서비스 사용',
      ENG: 'Polaris ShareModal Services Usage'
    }
  ],
  [
    'policy-1-desc-11',
    {
      KOR:
        '권한 기반 서비스를 제공함에 따라 Polaris Share는 참여한 서비스 및 작업에 대한 참가자의 액세스 기록을 유지하며, 자세한 사용자 활동보고 / 공유 분석 기능의 일부로 해당 볼트의 소유자가이를 이용할 수 있도록합니다. . Polaris Share는 또한 사용자를 보호하기 위해 사용자가 서비스에 액세스 할 수있는 IP 주소의 로그를 유지할 수 있습니다.',
      ENG:
        'In the provision of our permission-based services, Polaris ShareModal will maintain a history of participant access to the services and actions taken therein and make this available to the owner of a respective vault accordingly as part of our detailed user activity reporting / sharing ProfileAnalytics capabilities. Polaris ShareModal also may maintain a log of IP addresses from which users access the services to help secure our users.'
    }
  ],
  [
    'policy-1-desc-12',
    {
      KOR: '개인 정보의 이용',
      ENG: 'Use of Personal Information'
    }
  ],
  [
    'policy-1-desc-13',
    {
      KOR:
        'Polaris Share는 위의 수집 된 정보를 사용하여 제품 고객과 예비 고객에게 솔루션에 대해 알리고 고객이 요청한 서비스를 제공하며 고객이 서비스를 이용할 때 고객을 지원합니다. 예를 들어, 당사 웹 사이트에서 "연락처"양식을 당사 서비스에 대한 정보와 함께 작성하면 Polaris Share가 귀하에게 응답 할 수 있습니다. Polaris Share는 제품 업그레이드, 사용자 모범 사례, 업계 뉴스, 프로모션 또는 이벤트에 대한 정보를 제공하기 위해 자체 마케팅 목적으로 Polaris ShareModal 고객에 대한 데이터를 사용할 수도 있습니다.',
      ENG:
        'Polaris ShareModal uses the above collected information to inform our product customers and prospective customers about our solutions, to provide services requested by our customers, and to support our customers as they utilize our services. For example, Polaris ShareModal may respond to you, if you fill out a "Contact" form on our website, with information about our services. Polaris ShareModal may also use data about Polaris ShareModal customers for its own marketing purposes, in order to provide information about product upgrades, user best practices, industry news, promotions or events.'
    }
  ],
  [
    'policy-1-desc-14',
    {
      KOR: '정보 공유',
      ENG: 'Sharing Information'
    }
  ],
  [
    'policy-1-desc-15',
    {
      KOR:
        'Polaris Share는 귀하의 개인 데이터를 관련없는 제 3 자와 공유, 판매 또는 배포하지 않습니다. 모든 개인 데이터는 위에 요약 된 개인 데이터의 사용 사례를 직접 지원하는 제 3 자에게만 공개 될 수 있습니다. 각 볼트의 소유자는 자신의 데이터에 대한 액세스 제어를 유지해야하며 볼트와 관련된 개인 사용자 정보 및 사용자 활동에 액세스 할 수 있습니다. 이 정보는 Polaris ShareModal 서비스에 액세스하고 사용하는 데 필요하지만 각 볼트의 소유자가 관리합니다.',
      ENG:
        'Polaris ShareModal will not share, sell or distribute your personal data to unrelated sectionThird parties. All personal data may be disclosed only to sectionThird parties who directly support the use cases for personal data as summarized above. Owners of respective vaults are responsible for maintaining the access controls over their data and have access to personal user information and user activity related to their vault. This information is required to access and use the Polaris ShareModal services but is administered by the owner of each respective vault.'
    }
  ],
  [
    'policy-1-desc-16',
    {
      KOR: '데이터 보존',
      ENG: 'Data Retention'
    }
  ],
  [
    'policy-1-desc-17',
    {
      KOR:
        '서비스 사용과 관련된 다양한 데이터는 각 서비스 계약 기간 동안 Polaris Share에 의해 무기한 보유됩니다. Polaris ShareModal 소유자는 자체 관리 관행의 일부로 액세스 데이터 사본을 만들었을 수 있으며이 정책의 범위를 벗어납니다. 금융 거래와 관련된 추가 정보는 7 년 동안 유지됩니다.',
      ENG:
        'Various data related to the use of the service is retained indefinitely by Polaris ShareModal for the duration of each respective service contract. The Polaris ShareModal owner may have made copies of access data as part of their own respective management practices and are outside the purview of this policy. Additional information related to financial transactions is retained for a period of seven years.'
    }
  ],
  [
    'policy-1-desc-18',
    {
      KOR: '데이터 보안에 대한 헌신',
      ENG: 'Commitment to Data Security'
    }
  ],
  [
    'policy-1-desc-19',
    {
      KOR:
        '무단 액세스를 방지하고 데이터 무결성을 유지하며 정보를 올바르게 사용하기 위해 Polaris Share는 온라인으로 수집하거나 처리하는 정보를 보호하고 보호하기위한 광범위한 관리 및 기술 메커니즘을 마련했습니다. Polaris Share는 적용 가능한 모든 글로벌 보안 및 개인 정보 보호 규정을 준수하며 다양한 글로벌 및 산업 보안 및 개인 정보 인증, 프레임 워크 및 레지스트리에 자발적으로 참여합니다. 여기에는 Polaris Share를 지원하는 다양한 소프트웨어 및 서비스를 제공하는 공급 업체가 포함됩니다. 당사는 신중하게 선택하고 본 개인 정보 보호 정책, 보안 정책 및 동일한 높은 보안 및 개인 정보 보호 표준의 조항을 준수 할 계약 상 책임을집니다. 데이터 보안에 대한 추가 세부 사항은 Polaris 공유 보안 정책에 있습니다.',
      ENG:
        'To prevent unauthorized access, maintain data integrity, and ensure the correct use of information, Polaris ShareModal has instituted a wide array of administrative and technical mechanisms to secure and protect the information we collect or process online. Polaris ShareModal complies with all applicable global security and privacy regulations and voluntarily participates in various global and industry security and privacy certifications, frameworks and registries. This includes the vendors which provide various software and services that support Polaris ShareModal, whom we select carefully and hold them contractually responsible to adhere to the terms within this privacy policy, our security policy, and the same high security and privacy standards. Additional details regarding data security are found in the Polaris ShareModal Security Policy.'
    }
  ],
  [
    'policy-1-desc-20',
    {
      KOR: '정보 수정 및 업데이트',
      ENG: 'Correcting and Updating Your Information'
    }
  ],
  [
    'policy-1-desc-21',
    {
      KOR:
        'Polaris ShareModal 권한 기반 서비스 사용자는 서비스에 로그인하여 "기본 설정 : 프로파일"페이지를 선택하고 온라인 인터페이스를 사용하여 정보를 업데이트하여 프로파일 정보를 업데이트하거나 변경할 수 있습니다.  정보 업데이트, Polaris ShareModal 계정 중단, 개인 정보 반환을 원하는 조직은 이메일을 보내거나 질문을하거나 ',
      ENG:
        'Users of Polaris ShareModal permission-based services may update or change their profile information by logging into the service, selecting the "Preferences: profile" page, and updating information using the online interface. Organizations seeking to update information, to discontinue their Polaris ShareModal account, to have their private information returned to them please email, have questions, or need help should contact Polaris ShareModal by sending an email to'
    }
  ],
  [
    'policy-1-desc-22',
    {
      KOR:
        '로 이메일을 보내서 Polaris Share에 연락 해야합니다. Polaris ShareModal 권한 기반 서비스에 대한 액세스 또는 사용과 직접 관련이없는 Polaris Share의 메일 또는 이메일은',
      ENG:
        ', Should you decline to receive mail or email from Polaris ShareModal that does not relate directly to your access to or use of Polaris ShareModal permission-based services, please visit our'
    }
  ],
  [
    'policy-1-desc-23',
    {
      KOR: '구독 취소 페이지',
      ENG: 'unsubscribe page'
    }
  ],
  [
    'policy-1-desc-24',
    {
      KOR: ' 를 방문 하여 양식을 작성하십시오.',
      ENG: ' and fill out the form.'
    }
  ],
  [
    'policy-1-desc-25',
    {
      KOR: '당신의 수락',
      ENG: 'Your Acceptance'
    }
  ],
  [
    'policy-1-desc-26',
    {
      KOR:
        '당사 웹 사이트 및 / 또는 서비스를 사용함으로써 위에서 설명한 개인 정보 보호 정책에 동의한다는 의미입니다. 이 개인 정보 보호 정책에 대해 궁금한 점이 있으면 ',
      ENG:
        'By using our websites and/or services, you signify your agreement to the privacy polices described above. If you have any questions about this privacy statement, please email us at'
    }
  ],
  [
    'policy-1-desc-27',
    {
      KOR: '로 전자 메일을 보내주십시오',
      ENG: '.'
    }
  ],
  [
    'policy-1-desc-28',
    {
      KOR: '캘리포니아 주민',
      ENG: 'For California Residents'
    }
  ],
  [
    'policy-1-desc-29',
    {
      KOR:
        '캘리포니아 주민은 1 년에 한 번 Polaris Share가 제 3 자의 직접 마케팅 목적으로 전년도 동안 특정 정보를 공개 한 모든 제 3 자 목록을 요청하고 입수 할 수 있습니다. 캘리포니아 거주자이고 그러한 목록을 원하는 경우 ',
      ENG:
        'California residents can request and obtain from us once a year a list of all sectionThird parties to which Polaris ShareModal has disclosed certain information during the preceding calendar year for the sectionThird parties direct marketing purposes. If you are a California resident and want such a list, please contact us by email to'
    }
  ],
  [
    'policy-1-desc-30',
    {
      KOR: '로 이메일을 보내 문의하십시오.',
      ENG: '.'
    }
  ],
  [
    'policy-1-desc-31',
    {
      KOR: '미국 이외의 사용자에게 고지',
      ENG: 'notice to Users Outside the U.S.'
    }
  ],
  [
    'policy-1-desc-32',
    {
      KOR:
        '우리의 서비스는 미국 내에서 통제되고 운영됩니다. 귀하가 미국 이외의 지역에서 당사 서비스에 액세스하는 경우, 당사는 귀하로부터 수집 한 정보를 귀하의 모국 또는 관할 지역 이외의 데이터 센터로 전송할 수 있습니다. 특히, 귀하 또는 귀하의 서비스 제공 업체가 운영하는 미국에서 귀하의 정보가 전송되고 처리 될 것이며, 여기서 데이터 보호 및 기타 법률은 귀하의 관할 지역의 법률과 동일하지 않을 수 있습니다. Polaris ShareModal Services를 사용함으로써 귀하는 귀하의 정보가 미국으로 전송 및 사용되어 본 개인 정보 보호 정책에 명시된대로 처리 될 수 있다는 데 동의합니다.',
      ENG:
        'Our Services are controlled and operated within the United States. If you access our Services outside of the United States, we may transfer the information collected from you to data centers outside of your home country or jurisdiction. In particular, your information will be transferred to and processed in the United States where we or our service providers operate, where data protection and other laws may not be equivalent to those in your jurisdiction. By using the Polaris ShareModal Services, you agree that your information can be transferred to and used in the United States and handled as set forth in this Privacy Policy.'
    }
  ],
  [
    'policy-1-desc-33',
    {
      KOR: '일반 데이터 보호 규정 (GDPR)',
      ENG: 'GENERAL DATA PROTECTION REGULATION (GDPR)'
    }
  ],
  [
    'policy-1-desc-34',
    {
      KOR:
        'EU의 시민 또는 거주자로서 귀하의 개인 정보는 GDPR의 조건에 의해 보호됩니다. Polaris ShareModal 및 Polaris Share의 고객이 GDPR을 준수하려면 Polaris Share에 액세스하고 추가 개인 정보 보호 권한을 행사하기 위해 동의해야합니다. GDPR에 따라 확장 된 대부분의 조항은 아래 설명에 추가 옵션 및 기능과 함께 위의 설명에 설명되어 있습니다.',
      ENG:
        "As a citizen or resident of the EU, your personal data are protected by the terms of the GDPR. In order for Polaris ShareModal and Polaris ShareModal's customers to comply with the GDPR, you are required to grant consent in order to gain access to Polaris ShareModal and to exercise additional privacy rights. Most provisions extended under the GDPR are described in the statements above with additional options and features described below."
    }
  ],
  [
    'policy-1-desc-35',
    {
      KOR: 'GDPR 데이터 권리',
      ENG: 'GDPR Data Rights'
    }
  ],
  [
    'policy-1-desc-36',
    {
      KOR:
        'GDPR은 EU의 개인 또는 거주자에게 다음과 같은 데이터 권한을 제공합니다.',
      ENG:
        'The GDPR provides the following data rights for individual citizens or residents of the EU:'
    }
  ],
  [
    'policy-1-desc-37',
    {
      KOR: '1. 통보받을 권리',
      ENG: '1. The Right to Be Informed'
    }
  ],
  [
    'policy-1-desc-38',
    {
      KOR:
        '개인 정보를 위반 한 경우 사용자 프로필의 연락처 정보를 사용하여 알림을받습니다. 우리는 또한 귀하의 모국에 대한 적절한 개인 정보 보호 당국에 통지합니다.',
      ENG:
        'Should there be a breach of private information, you will be notified using the contact information in your user profile. We will also notify the appropriate privacy authority for your home country.'
    }
  ],
  [
    'policy-1-desc-39',
    {
      KOR: '2. 접근 권한',
      ENG: '2. The Right of Access'
    }
  ],
  [
    'policy-1-desc-40',
    {
      KOR:
        '사용자 프로필 정보 (위 참조)에 액세스하는 것 외에도 액세스 권한이있는 각 볼트의 소유자에게 연락하여 사용 이벤트를 얻을 수 있습니다. 이러한 액세스 이벤트 활성화와 관련된 기술 메커니즘에 대한 자세한 기록은 일반적으로 액세스 할 수 없습니다.',
      ENG:
        'In addition to accessing user profile information (see above), your use events may be obtained by contacting the owner of the respective vaults you have access to. Detailed records of technical mechanisms related to enabling those access events are not generally accessible.'
    }
  ],
  [
    'policy-1-desc-41',
    {
      KOR: '3. 정류의 권리',
      ENG: '3. The Right to Rectification'
    }
  ],
  [
    'policy-1-desc-42',
    {
      KOR:
        '사용자는 위의 정보 수정 및 업데이트에 설명 된대로 개인 정보에 액세스하고 업데이트 할 수 있습니다.',
      ENG:
        'Users may access and update personal information as detailed above\n' +
        '          under Correcting and Updating Your Information.'
    }
  ],
  [
    'policy-1-desc-43',
    {
      KOR: '4. 삭제할 권리',
      ENG: '4. The Right to Erasure'
    }
  ],
  [
    'policy-1-desc-44',
    {
      KOR:
        '사용자는 언제든지 Polaris ShareModal 서비스에서 자신을 제거하도록 선택할 수 있습니다. 사용자는 먼저 삭제 권한을 행사하기 위해 Polaris ShareModal 소유자 / 관리자에게 문의해야합니다. Polaris ShareModal 소유자 / 관리자에게 연락 할 수없는 경우 사용자는',
      ENG:
        'Users may at any time chose to remove themselves from the Polaris ShareModal service. Users should sectionFirst contact the Polaris ShareModal owner / administrator in order to exercise the right to erasure. In the eventthat the Polaris ShareModal owner / administrator cannot be reached, users can send an email to'
    }
  ],
  [
    'policy-1-desc-45',
    {
      KOR: ' 로 이메일을 보낼 수 있습니다.',
      ENG: '.'
    }
  ],
  [
    'policy-1-desc-46',
    {
      KOR: '5. 데이터 이식성에 대한 권리',
      ENG: '5. The Right to Data Portability'
    }
  ],
  [
    'policy-1-desc-47',
    {
      KOR:
        '사용자는 Polaris ShareModal 소유자 / 관리자에게 자신의 개인 정보 사본을 요청할 수 있지만 해당 요청은 해당 Polaris Share에 대해 공개 한 개인 정보 보호 정책에 명시된대로 해당 소유자의 각 권리 및 통제 대상이됩니다.',
      ENG:
        'Users may request copies of their personal information from a Polaris ShareModal owner / administrator but such requests are subject to the respective rights and control of that owner as may be stated within the privacy policy they have published for that Polaris ShareModal.'
    }
  ],
  [
    'policy-1-desc-48',
    {
      KOR: '6. 이의 제기 권리',
      ENG: '6. The Right to Object'
    }
  ],
  [
    'policy-1-desc-49',
    {
      KOR:
        '사용자는 먼저 Polaris ShareModal 소유자 / 관리자에게 연락하여 개인 정보 수집 및 사용에 반대 할 수 있습니다. Polaris ShareModal 소유자 / 관리자에게 연락 할 수없는 경우 사용자는 ',
      ENG:
        'Users may object to the collection and use of personal information by sectionFirst contacting the Polaris ShareModal owner / administrator. In the event that the Polaris ShareModal owner / administrator cannot be reached, users can send an email to'
    }
  ],
  [
    'policy-1-desc-50',
    {
      KOR: ' 로 이메일을 보낼 수 있습니다.',
      ENG: '.'
    }
  ],
  [
    'policy-1-desc-51',
    {
      KOR: '7. 자동화 된 의사 결정 및 프로파일 링과 관련된 권리',
      ENG: '7. Rights in Relation to Automated Decision Making and Profiling'
    }
  ],
  [
    'policy-1-desc-52',
    {
      KOR:
        '자동 의사 결정 및 프로파일 링은 Polaris ShareModal Services 사용에는 적용되지 않습니다.',
      ENG:
        'Automated decision making and profiling is not applicable to the use\n' +
        '          of Polaris ShareModal Services.'
    }
  ],
  [
    'policy-1-desc-53',
    {
      KOR: '8. 독립 중재 권',
      ENG: '8. Right to Independent Arbitration'
    }
  ],
  [
    'policy-1-desc-54',
    {
      KOR: '다른 방법으로 이의가 해결되지 않은 사용자는 ',
      ENG:
        'Users whose objections are not resolved by any other means, may contact'
    }
  ],
  [
    'policy-1-desc-55',
    {
      KOR: '국제 분쟁 해결 센터',
      ENG: 'the International Centre For Dispute Resolution'
    }
  ],
  [
    'policy-1-desc-56',
    {
      KOR:
        '에 연락 하여 구속력있는 중재를 불러와 Polaris Share가 개인에 대한 의무를 위반했는지 여부와 그러한 위반이 완전히 또는 부분적으로 해결되지 않은지 여부를 확인할 수 있습니다.',
      ENG:
        ' to invoke binding arbitration to determine whether Polaris ShareModal has violated its obligations to an individual and whether any such violation remains fully or partially un-remedied.'
    }
  ],
  [
    'policy-1-desc-57',
    {
      KOR: '운동 권리',
      ENG: 'Exercising Rights'
    }
  ],
  [
    'policy-1-desc-58',
    {
      KOR: '사용자는 위의 진술에 따라 또는 ',
      ENG:
        'Users may exercise rights related to the collection and use of personal information per the statements above or by email at'
    }
  ],
  [
    'policy-1-desc-59',
    {
      KOR:
        '로 이메일을 통해 개인 정보의 수집 및 사용과 관련된 권리를 행사할 수 있습니다.',
      ENG: '.'
    }
  ],
  [
    'policy-1-desc-60',
    {
      KOR: '동의 변경 / 철회',
      ENG: 'Changing / Withdrawing Consent'
    }
  ],
  [
    'policy-1-desc-61',
    {
      KOR: '사용자는 동의를 부여한 후 ',
      ENG:
        'After granting consent, users can subsequently change / withdraw their consent to the collection, use and storage of personal information by emailing'
    }
  ],
  [
    'policy-1-desc-62',
    {
      KOR:
        ' 로 이메일을 보내 개인 정보의 수집, 사용 및 저장에 대한 동의를 변경 / 철회 할 수 있습니다.',
      ENG: '.'
    }
  ],
  [
    'policy-1-desc-63',
    {
      KOR: '법적 근거',
      ENG: 'Legal Basis'
    }
  ],
  [
    'policy-1-desc-64',
    {
      KOR:
        '개인 정보의 수집 및 사용에 대한 법적 근거는 위의 진술에 자세히 설명되어 있으며 일반적으로 사용자의 명시적인 동의로 시작하여 Polaris ShareModal 서비스 계약 조건을 지원하고 Polaris ShareModal 서비스의 보안 기능을 지원하기위한 추가 요구 사항이 따릅니다. 법적인 이유로, 특히 GDPR 및 다양한 미국의 법령을 준수하기 위해 필요합니다.',
      ENG:
        'Legal basis for the collection and use of personal information is detailed in the above statements and generally starts with explicit consent by a user, followed by additional requirements to support the terms of the Polaris ShareModal service contracts, support the secure function of the Polaris ShareModal service, and as required for legal reasons, specifically to comply with the requirements of the GDPR and various US legal statutes.'
    }
  ],
  [
    'policy-1-desc-65',
    {
      KOR: '데이터 컨트롤러 / 프로세서',
      ENG: 'Data Controllers/Processors'
    }
  ],
  [
    'policy-1-desc-66',
    {
      KOR:
        'Polaris Share는 이러한 서비스를 사용하는 고객에게 개별 비즈니스 기능을 지원하는 서비스를 제공합니다. 이러한 Polaris ShareModal 소유자 / 관리자는이 서비스에 대한 사용자를 생성하여 해당 볼트와 관련된 특정 유형의 사용자 데이터에 대한 데이터 컨트롤러로 간주됩니다. 따라서 Polaris Share는 해당 데이터의 프로세서입니다. Polaris ShareModal 고객 (소유자 / 관리자)은이 범주의 데이터에 대한 책임을 공유하며 추가 GDPR 개인 정보 보호 자격이있는 사용자에 대한 의무를 이행 할 수있는 도구가 제공됩니다.',
      ENG:
        'Polaris ShareModal provides services to customers who use these services to in turn support their own individual business functions. These Polaris ShareModal owners / administrators create users for these services are considered data controllers for certain types of user data related to their respective vaults. Polaris ShareModal is thus the processor for that data. Polaris ShareModal customers (owners / administrators) share the responsibility for this Category of data and are provided the tools to fulfill that obligation for their users who are eligible for the additional GDPR privacy rights.'
    }
  ],
  [
    'policy-1-desc-67',
    {
      KOR:
        'Polaris ShareModal 고객은 서비스를 설정하고 유지하기 위해 Polaris Share와 개인 정보를 공유하며,이 정보를 위해 Polaris Share는 컨트롤러이며 서비스 계약의 일부로 계약 상 구속됩니다.',
      ENG:
        'Polaris ShareModal customers share personal information with Polaris ShareModal to establish and maintain services, and for this information Polaris ShareModal is the Controller and is bound contractually as part of the contract for services.'
    }
  ],
  [
    'policy-1-desc-68',
    {
      KOR:
        'Polaris ShareModal 서비스를 지원하는 제 3 자 제공 업체도 비슷한 방식으로 프로세서 및 하위 프로세서로서 책임을 공유합니다.',
      ENG:
        'Affiliated sectionThird party providers who in turn support the Polaris ShareModal service also share responsibility as Processors and Sub-Processors in a similar manner.'
    }
  ],
  [
    'policy-1-desc-69',
    {
      KOR:
        '지원 역할이 있거나 Polaris ShareModal 내에서 적용 가능한 개인 정보에 액세스 할 수있는 모든 당사자는 GDPR 원칙을 준수하도록 계약에 따라 적절하게 구속됩니다.',
      ENG:
        'All parties with support roles or access to applicable personal information within Polaris ShareModal, are appropriately bound by contract to be compliant with the GDPR principles.'
    }
  ],
  [
    'policy-1-desc-70',
    {
      KOR: 'GDPR 규정 준수 관리자 / 소유자를위한 도움말',
      ENG: 'Help for Admins / Owners with GDPR Compliance'
    }
  ],
  [
    'policy-1-desc-71',
    {
      KOR:
        'GDPR 규정 준수는 Polaris ShareModal 고객 (소유자 / 관리자)과 Polaris ShareModal 간의 공동 책임입니다. 소유자 / 관리자는 ',
      ENG:
        'GDPR compliance is a shared responsibility between Polaris ShareModal customers (owners / administrators) and Polaris ShareModal. Owners / administrators can request help from Polaris ShareModal for complying with GDPR compliance, including support for users who wish to exercise any of their rights under the GDPR, by sending an email to'
    }
  ],
  [
    'policy-1-desc-72',
    {
      KOR:
        ' 로 이메일을 보내서 GDPR에 따라 권리를 행사하려는 사용자에 대한 지원을 포함하여 GDPR 준수를 준수하기 위해 Polaris Share의 도움을 요청할 수 있습니다.',
      ENG: '.'
    }
  ],
  [
    'policy-1-desc-73',
    {
      KOR: 'Changes to This Privacy Statement',
      ENG: '본 개인 정보 보호 정책의 변경'
    }
  ],
  [
    'policy-1-desc-74',
    {
      KOR:
        '당사가 수집 및 유지 관리하는 모든 개인 정보 (해당 정보가 속한 사람을 식별하거나 식별하는 데 사용될 수있는 정보로 정의 됨)는 때때로 개정되는 본 개인 정보 보호 정책의 적용을받습니다. Polaris Share는 단독 재량에 따라 때때로 본 개인 정보 보호 정책을 변경할 수 있으며이 온라인 문서의 모든 변경 사항과이 문서에 대한 링크가있는 웹 페이지 바닥 글을 통해 통지 할 것입니다. 그러한 변경의 결과로 Polaris Share가 귀하의 개인 정보를 사용하도록 허용되는 방식을 변경하려는 경우, 위의 정보 수정 및 업데이트에 설명 된 절차에 따라 변경할 수 있습니다.',
      ENG:
        'All personal information (defined as any information that identifies or can be used to identify the person to whom such information pertains) that we collect and maintain will be subject to this privacy statement, as amended from time to time. Polaris ShareModal may change this privacy statement from time to time at its sole discretion and will provide notice of all changes in this online document and via the footer of the web pages with authorized links to this document. If as the result of such changes you want to alter the ways in which Polaris ShareModal is allowed to use your personal information, you can do so by following the procedure described under Correcting and updating your information, above.'
    }
  ],
  [
    '404-text',
    {
      KOR: '해당 페이지를 찾을 수 없습니다',
      ENG: 'This page could not be found'
    }
  ],
  [
    '404-button',
    {
      KOR: '메인으로 이동',
      ENG: 'Go to Main'
    }
  ],

  // main notice
  [
    'main-notice-text',
    {
      KOR:
        '폴라리스쉐어는 사용자가 파일형태로 저장하고 있는 지식이나 노하우를 라이브러리라고 부르며, 라이브러리를 자유롭게 공유하고 보상받는 새로운 개념의 플랫폼입니다.',
      ENG:
        "Polaris Share is a new concept platform that calls the knowledge or know-how that users have stored in files 'Library' and freely shares and rewards the Library."
    }
  ]
])

export enum Lang {
  EN = 'EN',
  KO = 'KO',
  HK = 'HK',
  ZH = 'ZH'
}

function getCookie(cname) {
  let name = cname + '='
  if (typeof document !== 'undefined') {
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
  }
  return ''
}

function setCookie(cname, cvalue, exdays) {
  let d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + d.toUTCString()
  if (typeof document !== 'undefined') {
    document.cookie = cname + '=' + cvalue + '; ' + expires + '; path=/;'
  }
}

function deleteCookie(name) {
  if (typeof document !== 'undefined') {
    if (getCookie(name)) {
      document.cookie = name + '=;expires=Thu, 01-Jan-70 00:00:01 GMT'
    }
  }
}

function checkLocale(): Lang {
  let cookieLang = getCookie('language')

  // 쿠키 값이 있을 때
  if (cookieLang !== '') {
    switch (cookieLang) {
      case 'en':
        return Lang.EN

      case 'ko':
      default:
        return Lang.KO
    }
  }

  // 없을 때
  return Lang.KO
}

// let currentLang: Lang = Lang.EN;
let currentLang: Lang = checkLocale()

export function psGetLang(): Lang {
  return currentLang
}

export function psSetLang(lang: Lang) {
  currentLang = lang

  deleteCookie('language')

  switch (lang) {
    case Lang.EN:
      setCookie('language', 'en', 30)
      window.location.reload()
      break

    case Lang.KO:
    default:
      setCookie('language', 'ko', 30)
      window.location.reload()
      break
  }
}

export function psString(key: string): string {
  const _string = strings.get(key)
  if (_string !== undefined && _string !== null) {
    switch (currentLang) {
      case Lang.EN:
        if (_string.ENG === '') return _string.KOR
        return _string.ENG

      case Lang.KO:
      default:
        return _string.KOR
    }
  } else {
    return '.' + key
  }
}
