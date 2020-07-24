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
      ENG: 'Search now!'
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
      ENG: 'Upload now!'
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
        'Upload your slides and share them through external channels.\n Connect with your prospects and track their activities.\n'
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
    'main-category-latest',
    {
      KOR: '최신문서',
      ENG: 'latest'
    }
  ],
  [
    'main-category-featured',
    {
      KOR: '추천문서',
      ENG: 'featured'
    }
  ],
  [
    'main-category-popular',
    {
      KOR: '인기문서',
      ENG: 'popular'
    }
  ],
  [
    'main-category-mylist',
    {
      KOR: '내가 찜한 문서',
      ENG: 'my list'
    }
  ],
  [
    'main-category-history',
    {
      KOR: '내가 본 문서',
      ENG: 'history'
    }
  ],
  [
    'main-event-1',
    {
      KOR: '2020년 현재 폴라리스쉐어 서비스는 베타시즌으로 운영되고 있습니다.',
      ENG: 'As of 2020, Polaris Share is operated during the Beta Season.'
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
        'to users who upload Beta Season through AirDrop, so please use it a lot.'
    }
  ],
  [
    'main-event-5',
    {
      KOR:
        '* 폴라리스오피스를 사용하시는 유저분은 폴라리스오피스를 통해서도 라이브러리를 업로드 하실 수 있습니다',
      ENG:
        '* Polaris Office users can upload their Library through Polaris Office.'
    }
  ],
  [
    'main-header-search',
    {
      KOR: '검색',
      ENG: 'Search'
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
      ENG: 'Library'
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
      ENG: 'Library'
    }
  ],
  [
    'main-visual-8',
    {
      KOR: '는 전세계에서',
      ENG: ' is subscribed worldwide'
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
      KOR: 'Your',
      ENG: ' '
    }
  ],
  [
    'main-second-section',
    {
      KOR: '라이브러리를 손쉽게 공유하는 방법',
      ENG: 'Easily Share'
    }
  ],
  [
    'main-insight-slider-1',
    {
      KOR:
        'PC 또는 클라우드와 같은 저장매체에 묵혀있는 파일을 업로드하고 보상 받을 수 있어요.',
      ENG:
        'Upload your files here from your PC, cloud, and other storage media for rewards.'
    }
  ],
  [
    'main-insight-slider-2',
    {
      KOR: "업로드한 파일을 '라이브러리'라고 불러요.",
      ENG: 'The uploaded file is called a Library.'
    }
  ],
  [
    'main-insight-slider-3',
    {
      KOR:
        "라이브러리를 공개하는게 고민되시면, '비공개'로 업로드 하시고 나중에 공개로 변경하셔도 돼요.",
      ENG:
        "If you're concerned about releasing your Library, \n" +
        'you can upload it as a "private" and change it to a public one later.'
    }
  ],
  [
    'main-insight-slider-4',
    {
      KOR: '라이브러리를 공개하면 좋은 점!',
      ENG: 'Open Library Advantage!'
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
      KOR: '(향후 적용 예정)',
      ENG: '( Coming soon)'
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
        'Three. You can get additional rewards for voting by users or for enthusiastic responses.'
    }
  ],
  [
    'main-insight-slider-8',
    {
      KOR: '"주식보다 뿌듯한 내 문서 보상"',
      ENG: '"My Library show better profits than stocks"'
    }
  ],
  [
    'main-library-1',
    {
      KOR: '필요한 라이브러리를 사용하시고 평가해 주세요',
      ENG: 'Use the required Library and evaluate'
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
      ENG: 'Share with Linkedin'
    }
  ],
  [
    'viewer-page-sns-fb',
    {
      KOR: '페이스북 공유하기',
      ENG: 'Share with Facebook'
    }
  ],
  [
    'viewer-page-sns-twitter',
    {
      KOR: '트위터 공유하기',
      ENG: 'Share with Twitter'
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
      ENG: 'Switch to Auto Slide Mode'
    }
  ],

  // About us
  [
    'about-main-subj',
    {
      KOR: '지식노동자들을 위한 전혀 새로운 일하는 방법',
      ENG: 'A whole new way to share knowledge'
    }
  ],
  [
    'about-main-explain',
    {
      KOR:
        '폴라리스 쉐어에서 문서를 공유하여 잠재 고객을 발굴하고, 공유한 문서의 유효 조회수에 따른 보상도 받으세요.',
      ENG:
        "'Share your documents on Polaris Share, find new prospects, and get rewards based on views."
    }
  ],
  [
    'about-first-section-subj',
    {
      KOR: '왜 폴라리스 쉐어를 사용해야 하는가?',
      ENG: 'Why Polaris Share?'
    }
  ],
  [
    'about-first-section-explain',
    {
      KOR:
        '우리는 수년간 전세계 고객들을 대상으로 Polaris Office 를 서비스하면서 수많은 문서와 지식들이 활용되지 못하고 있음을 발견했습니다. 이 문제를 해결하기 위해서 우리는 Polaris Share를 만들 것입니다. Polaris Share는 지식 생산자와 소비자를 연결하여 탈중앙화된 인센티브 기반의 지식 거래 시스템을 구축합니다. 우리는 회사에서 전문가를 고용하지 않고도 전세계에서 가장 필요한 기술을 가진 사람과 일할 수 있는 환경을 제공하고, 동시에 개인이 특정 회사에 고용되지 않고도 원하는만큼 일하고 정당한 보수를 받을 수 있는 일하는 환경을 만들어 나가고자 합니다. ',
      ENG:
        "While providing the Polaris Office solution around the world over the years, we realized that there are so much knowledge and documents that haven't send the light of day. To tap into this potential, we decided to create Polaris Share, a decentralized and incentive-based knowledge trading system, by connecting creators and consumers. The platform is designed to create an environment where not only where corporates can still work with experts all over the world without hiring them but individuals can also be fairly compensated for what they offer without being committed to a particular employer."
    }
  ],
  [
    'about-service',
    {
      KOR: '서비스',
      ENG: 'Service'
    }
  ],
  [
    'about-second-section-explain',
    {
      KOR:
        '폴라리스 쉐어는 단순한 문서 공유 서비스를 넘어서서 전문가들에 의한 큐레이션과 거래 시스템을 제공합니다. 서비스 내의 다양한 기여 활동에 대해서 적절한 보상을 지급함으로써 자발적인 참여를 유도하여 탈중앙화된 지속 가능한 시스템을 구축했습니다. 이와 같은 지식 거래 생태계에서 지식 생산자는 자유롭게 일하고 적절한 대가를 받을 수 있으며, 지식 소비자는 고품질의 지식을 저렴한 비용으로 소비할 수 있습니다.',
      ENG:
        'Beyond a simple document sharing service, Polaris Share offers a specialized curation and trading service. By compensating various types of contributions to the service, we have built a decentralized and sustainable system that promotes user engagement. Based on this knowledge training ecosystem, creators can work freely and get fair compensation for their contributions while consumers can access an extensive knowledge base at a low cost.'
    }
  ],
  [
    'about-vision',
    {
      KOR: '비전',
      ENG: 'Vision'
    }
  ],
  [
    'about-third-section-explain',
    {
      KOR: '탈중앙화되고 인센티브가 주어지는 전문가 지식 거래 시스템',
      ENG:
        'Decentralized and Incentive-based Professional Knowledge Trading System'
    }
  ],
  [
    'about-third-section-chap-subj-1',
    {
      KOR: '지식의 가치',
      ENG: 'Value of knowledge'
    }
  ],
  [
    'about-third-section-chap-explain-1',
    {
      KOR:
        '폴라리스 쉐어는 문서 및 네트워크에 저장된 지식의 가치를 지식의 생산자와 우리 생태계를 유지하는 활동에 기여한 사용자들에게 돌려드립니다.',
      ENG:
        'Polaris Share returns value created from sharing knowledge stored in documents and the network with creators and users who contribute to maintaining our ecosystem.'
    }
  ],
  [
    'about-third-section-chap-subj-2',
    {
      KOR: '무료 또는 저렴한 수수료',
      ENG: 'Free or small fee'
    }
  ],
  [
    'about-third-section-chap-explain-2',
    {
      KOR:
        '지식 생산자는 폴라리스 쉐어에서 문서를 공유하거나 판매함으로써 무료 또는 매우 적은 수수료만으로 수익을 얻을 수 있습니다. ',
      ENG:
        'Knowledge creators generate revenue by sharing their documents for free or with a small fee through Polaris Share.'
    }
  ],
  [
    'about-third-section-chap-subj-3',
    {
      KOR: '고품질의 컨텐츠',
      ENG: 'High quality content'
    }
  ],
  [
    'about-third-section-chap-explain-3',
    {
      KOR:
        '일반 대중들은 지식 생산자들에 의해서 공유된 고품질의 다양한 컨텐츠를 소비하고 활용할 수 있습니다. ',
      ENG:
        'People can access and use an extensive amount of high-quality content shared by creators.'
    }
  ],
  [
    'about-ps-team',
    {
      KOR: '폴라리스 쉐어 팀',
      ENG: 'Polaris Share Team'
    }
  ],

  // FAQ
  [
    'faq-question-1',
    {
      KOR: '폴라리스 쉐어란 무엇인가요?',
      ENG: 'What is Polaris Share?'
    }
  ],
  [
    'faq-answer-1',
    {
      KOR:
        '폴라리스 쉐어는 활용되지 않고 저장되어 있는 수만은 문서와 지식들을 활용하여, 미래의 고객을 발굴하고, 전문가 네트워크를 구축하여 새로운 비즈니스 기회 창출에 기여하는 플랫폼입니다.',
      ENG:
        'Polaris Share is a platform that creates new business opportunities by sharing idle documents stored in your PC, helping you find new prospects, and establish your own network of experts.'
    }
  ],
  [
    'faq-question-2',
    {
      KOR: '폴라리스 쉐어는 어떻게 동작하나요?',
      ENG: 'How does Polaris Share work?'
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
      ENG: 'Does it cost anything to vote on a post?'
    }
  ],
  [
    'faq-answer-3',
    {
      KOR:
        '투표 활동에는 비용이 들지 않습니다. 투표에 사용한 토큰은 투표 기간이 끝나면 보상과 함께 돌려받습니다. (다만, 블록체인에 투표 기록을 저장하는 경우 가스비가 발생할 수 있습니다)',
      ENG:
        'No, voting is free. The tokens used for voting will be returned to you with rewards when the voting ends. (However, it may cost you gas if you wish to record your voting history in the blockchain.)'
    }
  ],
  [
    'faq-question-4',
    {
      KOR: '폴라리스 쉐어에서 토큰을 받을 수 있는 방법이 있나요?',
      ENG: 'Can I get digital tokens from Polaris Share? If so, how?'
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
        'Curator: If you vote on documents with your tokens, you will get tokens based on their page views as well as the tokens you used to vote.'
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
        'To receive rewards as a creator, or vote or get voted on, link your Ethereum account to your user account via MetaMask.'
    }
  ],
  [
    'faq-question-6',
    {
      KOR: '내 계정 메뉴에서 사용할 수 있는 정보는 무엇인가요?',
      ENG: 'What kind of information can I access from My Account?'
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
      ENG: 'What can I post on Polaris Share?'
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
        'There is currently no limit on the number of posts. However, we plan to set a limit of one document per week and to allow others posts to be updated when the user deposits a set of tokens.'
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
      ENG: 'Do creators receive their rewards in real time?'
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
      ENG: 'When do curators receive their rewards?'
    }
  ],
  [
    'faq-answer-17',
    {
      KOR:
        '큐레이터 보상은 투표일로 부터 1주+2일 후에 투표에 사용한 토큰과 함께 지급받을 수 있습니다. ',
      ENG:
        'Curators receive rewards along with the tokens they used to vote after one week and two days from the vote.'
    }
  ],
  [
    'faq-question-18',
    {
      KOR: '크리에이터와 큐레이터의 보상은 어떠한 차이가 있나요?',
      ENG: 'How do the rewards for creators differ from those for curators?'
    }
  ],
  [
    'faq-answer-18',
    {
      KOR:
        '크리에이터와 큐레이터들은 각각 문서 별로 매일 발생한 보상의 70%와 30%를 지급받습니다.',
      ENG:
        'Creators and curators receive 70% and 30% of the daily rewards generated for each document respectively.'
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
        'Your username must be a combination of lowercase letters and numbers.'
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
    'profile-author-rewards',
    {
      KOR: '크리에이터 보상',
      ENG: 'Creator rewards'
    }
  ],
  [
    'profile-curator-rewards',
    {
      KOR: '큐레이터 보상',
      ENG: 'Curator rewards'
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
    'profile-analytics',
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

  // Alert
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
      ENG: 'You need to login first.'
    }
  ],
  [
    'alert-2004',
    {
      KOR: '로그인 실패',
      ENG: 'Login failed'
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
      ENG: 'Not enough rewards to Claim.'
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
      ENG: 'Upload failed'
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
      ENG: 'Document Upload failed'
    }
  ],
  [
    'alert-2093',
    {
      KOR: '투표 실패',
      ENG: 'Document Vote failed'
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
      ENG: 'Please upload image file.'
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
    'common-modal-upload',
    {
      KOR: '업로드',
      ENG: 'Upload'
    }
  ],
  [
    'common-modal-title',
    {
      KOR: '제목',
      ENG: 'Title'
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
      ENG: 'Publish'
    }
  ],

  [
    'common-modal-deposit',
    {
      KOR: '입금',
      ENG: 'Deposit'
    }
  ],
  [
    'common-modal-withdraw',
    {
      KOR: '출금',
      ENG: 'Withdraw'
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
    'common-modal-others-option',
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
    'common-second',
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
      ENG: 'Title of the uploading document'
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
      ENG: 'Click here to upload document'
    }
  ],

  // Approve Modal
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
        'POLA를 사용하여 투표하려면, Polaris Share 컨트랙트가 당신을 대신해서 POLA를 전송할 수 있도록 최초 한 번 승인해야 합니다. 승인이 완료되기 전까지는 귀하는 문서에 투표할 수 없습니다.',
      ENG:
        'To vote on a document using your POLA, you must approve the Polaris Share Contract to transfer your POLA on your behalf for the first time. You will not be able to vote on documents until approved.'
    }
  ],
  [
    'approve-explain-2',
    {
      KOR:
        "'Approve'를 클릭하고 나면, 투표를 완료하기 위해서 트랜잭션에 사인하라는 요청이 한 번 더 표시될 것입니다. ",
      ENG:
        "After clicking 'Approve,' you will be asked to sign a transaction to complete the vote once again. "
    }
  ],

  // Cookie Policy Modal
  [
    'cookie-policy-content',
    {
      KOR:
        '우리는 유저들에게 서비스를 제공하고 이를 개선하기 위해서 쿠키를 사용합니다. 우리 사이트를 사용함으로써 귀하는 쿠키 정책에 동의하게됩니다.',
      ENG:
        'We use cookies to improve your experience. By your continued use of this site, you accept our cookies policy.'
    }
  ],

  // Dollor Learn More Modal
  [
    'dollar-learn-others-subj',
    {
      KOR: 'POLA 테스트 토큰에 대한 중요 공지',
      ENG: 'Important notice about the POLA test token'
    }
  ],
  [
    'dollar-learn-others-explain-1',
    {
      KOR:
        'Polaris Share 알파 버전에서는 POLA 토큰을 테스트하여 응용 프로그램에서 올바르게 작동하는지 확인합니다.',
      ENG:
        'In the alpha version, POLA tokens are tested to ensure that the application program works as desired.'
    }
  ],
  [
    'dollar-learn-others-explain-2',
    {
      KOR:
        '무료 POLA 테스트 토큰으로 Polaris Share 서비스를 자유롭게 경험해보십시오. 테스트 기간이 끝나면 POLA 테스트 토큰도 만료됩니다.',
      ENG:
        'It is recommended to use free POLA test tokens to get a hands-on experience of the Polaris Share service. Test tokens expire at the end of the test.'
    }
  ],
  [
    'dollar-learn-others-explain-3',
    {
      KOR:
        '테스트에 적극적으로 참여하는 사용자는 상용 버전의 Polaris Share를 열 때 적절한 보상을 제공할 예정입니다.',
      ENG:
        'When the commercial version launches, users will be rewarded based on their participation in the test.'
    }
  ],
  [
    'dollar-learn-others-btn',
    {
      KOR: '알겠습니다',
      ENG: 'I got it.'
    }
  ],

  // Edit Document Modal
  [
    'edit-doc-error-1',
    {
      KOR: '제목은 한 글자 보다 길어야 합니다.',
      ENG: 'Title must be longer than 1 character.'
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

  // RegBlockchain Button
  [
    'register-btn',
    {
      KOR: '등록',
      ENG: 'Register'
    }
  ],

  // Email modal - basic
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

  // Email modal - request
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
        "The email address you provided is collected and used in accordance with the Polaris Share's Privacy Policy."
    }
  ],
  [
    'email-modal-request-btn',
    {
      KOR: '제출하고 수신 수락',
      ENG: 'Submit and Accept'
    }
  ],

  // Email modal - force
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

  // Email modal
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
      ENG: 'Polaris Share’s privacy policy.'
    }
  ],
  [
    'email-modal-explain-4',
    {
      KOR:
        '이 문서의 저자에게 귀하의 연락처를 남겨보세요. 저자로부터 새로운 소식을 받을 수 있습니다.',
      ENG:
        'Please leave your contact information to the author of this documents. You can receive new news from the author.'
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

  // Upload Document Modal
  [
    'upload-doc-subj',
    {
      KOR: '문서 업로드',
      ENG: 'Upload document'
    }
  ],
  [
    'upload-doc-check',
    {
      KOR: '문서 파일을 업로드 해주세요.',
      ENG: 'Please upload a document file.'
    }
  ],
  [
    'upload-doc-subj-2',
    {
      KOR: '문서 업로드 성공',
      ENG: 'Successfully uploaded'
    }
  ],
  [
    'upload-doc-desc-2',
    {
      KOR:
        '현재 업로드된 문서는 Private(비공개) 상태입니다. 문서를 공개하려고 하신다면, Public(공개) 상태로 변경해 주시기 바랍니다.',
      ENG:
        'The uploaded document is set to Private. To allow public access, please change the setting to Public.'
    }
  ],
  [
    'upload-doc-desc-3',
    {
      KOR: `현재 ${commonData.privateDocumentLimit}개의 비공개 문서를 보유중 입니다. 이후에 문서를 업로드하시려면, 보유하신 비공개 문서를 Public(공개) 상태로 변경해 주시기 바랍니다.`,
      ENG: `You currently have ${commonData.privateDocumentLimit} private documents. To upload your document later, please change it from Private to Public.`
    }
  ],
  [
    'upload-doc-desc-4-a',
    {
      KOR: '현재 고객님의 비공개 문서는 ',
      ENG: 'You currently have '
    }
  ],
  [
    'upload-doc-desc-4-b',
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
      ENG: 'Link to My page'
    }
  ],

  // Vote Document Modal
  [
    'vote-modal-title',
    {
      KOR: '문서에 투표하기',
      ENG: 'Vote on document'
    }
  ],
  [
    'vote-modal-err-1',
    {
      KOR: '투표액은 0보다 큰 값이어야 합니다.',
      ENG: 'The amount for voting must be greater than zero.'
    }
  ],
  [
    'vote-modal-err-2',
    {
      KOR: '투표액은 잔고보다 작은 값이어야 합니다.',
      ENG: 'The amount for voting must be less than the balance.'
    }
  ],
  [
    'vote-modal-subj-1',
    {
      KOR: '1. 투표된 총 토큰량',
      ENG: '1. Total amount of tokens voted'
    }
  ],
  [
    'vote-modal-subj-2',
    {
      KOR: '2. 사용 가능한 토큰량',
      ENG: '2. Amount of tokens available'
    }
  ],
  [
    'vote-modal-subj-3',
    {
      KOR: '3. 투표로 예치할 토큰량을 입력하세요',
      ENG: '3. Enter the amount of tokens to vote'
    }
  ],
  [
    'vote-modal-note',
    {
      KOR: '알림: 투표에 사용된 토큰은 8일 후에 인출할 수 있습니다.',
      ENG: 'Note: The tokens you used to vote can be withdrawn after 8 days.'
    }
  ],
  [
    'vote-modal-tooltip-1',
    {
      KOR: '이 문서에 투표하기',
      ENG: 'Vote on this document'
    }
  ],
  [
    'vote-modal-tooltip-2',
    {
      KOR: '로그인 부탁드립니다',
      ENG: 'Please, login'
    }
  ],
  [
    'vote-modal-tooltip-3',
    {
      KOR: '메타마스트 사용 부탁드립니다',
      ENG: 'Please, work with MetaMask'
    }
  ],
  [
    'vote-modal-btn',
    {
      KOR: '투표',
      ENG: 'Vote'
    }
  ],
  [
    'vote-modal-you',
    {
      KOR: '나',
      ENG: 'You'
    }
  ],
  [
    'vote-modal-total',
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
      ENG: 'Share'
    }
  ],
  [
    'share-modal-title',
    {
      KOR: '공유하기',
      ENG: 'Share'
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
      ENG: 'Share this document'
    }
  ],

  // Analytics modal
  [
    'analytics-modal-title',
    {
      KOR: '분석하기',
      ENG: 'Analytics'
    }
  ],

  [
    'analytics-modal-btn',
    {
      KOR: '분석',
      ENG: 'Analytics'
    }
  ],
  [
    'tooltip-analytics',
    {
      KOR: '문서 분석하기',
      ENG: 'Analytics this document'
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

  // Tracking button
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

  // Header
  [
    'header-category-1',
    {
      KOR: '최신',
      ENG: 'LATEST'
    }
  ],
  [
    'header-category-2',
    {
      KOR: '추천',
      ENG: 'FEATURED'
    }
  ],
  [
    'header-category-3',
    {
      KOR: '인기',
      ENG: 'POPULAR'
    }
  ],
  [
    'header-login',
    {
      KOR: '로그인',
      ENG: 'Log in'
    }
  ],

  // Content View Right
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

  // Profile card
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
      ENG: 'My page'
    }
  ],
  [
    'profile-card-login',
    {
      KOR: '로그인',
      ENG: 'Login'
    }
  ],
  [
    'profile-card-logout',
    {
      KOR: '로그아웃',
      ENG: 'Log out'
    }
  ],

  // Custom Chart
  [
    'chart-tracking-option-title',
    {
      KOR: '페이지당 총 소요시간',
      ENG: 'TOTAL TIME PER PAGE'
    }
  ],
  [
    'chart-date',
    {
      KOR: '날짜',
      ENG: 'Date'
    }
  ],
  [
    'chart-visit-count',
    {
      KOR: '방문자 수',
      ENG: 'Visit Count'
    }
  ],
  [
    'chart-page',
    {
      KOR: '페이지',
      ENG: 'Page'
    }
  ],
  [
    'chart-time-spend-min',
    {
      KOR: '소요 시간 (분)',
      ENG: 'Time Spend (Min)'
    }
  ],

  // Tracking List
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
      ENG: 'View count'
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

  // Tracking detail
  [
    'tracking-detail-back',
    {
      KOR: '방문자 리스트로 돌아가기',
      ENG: 'Back to visitor list'
    }
  ],

  // Auto Suggest Input
  [
    'auto-placeholder-1',
    {
      KOR: '태그 검색',
      ENG: 'Tag Search'
    }
  ],
  [
    'auto-placeholder-2',
    {
      KOR: '이름 검색',
      ENG: 'Name Search'
    }
  ],

  // Dollar Policy Modal
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
    'dollar-policy-learn-others',
    {
      KOR: '상세 보기',
      ENG: 'View details'
    }
  ],

  // Menu
  [
    'menu-1',
    {
      KOR: '회사소개',
      ENG: 'About Us'
    }
  ],
  [
    'menu-2',
    {
      KOR: '유저 가이드',
      ENG: 'User Guide'
    }
  ],
  [
    'menu-3',
    {
      KOR: 'Linkedin 공식계정',
      ENG: 'Official Linkedin'
    }
  ],
  [
    'menu-4',
    {
      KOR: '백서',
      ENG: 'Whitepaper'
    }
  ],
  [
    'menu-login',
    {
      KOR: '로그인',
      ENG: 'Login'
    }
  ],
  [
    'menu-sign-out',
    {
      KOR: '로그아웃',
      ENG: 'Log out'
    }
  ],
  [
    'menu-5',
    {
      KOR: '연락처',
      ENG: 'Connect With Us'
    }
  ],

  // Footer
  [
    'footer-1',
    {
      KOR: '회사소개',
      ENG: 'About us'
    }
  ],
  [
    'footer-2',
    {
      KOR: '유저 가이드',
      ENG: 'User Guide'
    }
  ],
  [
    'footer-3',
    {
      KOR: '이용약관',
      ENG: 'Terms of Service'
    }
  ],
  [
    'footer-4',
    {
      KOR: '개인정보처리방침',
      ENG: 'Privacy Policy'
    }
  ],
  [
    'footer-5',
    {
      KOR: '백서',
      ENG: 'Whitepaper'
    }
  ],

  // Guide
  [
    'guide-subj-main',
    {
      KOR: '유저 가이드',
      ENG: 'User Guide'
    }
  ],
  [
    'guide-subj-1',
    {
      KOR: '문서업로드 하기',
      ENG: 'Upload documents'
    }
  ],
  [
    'guide-content-1',
    {
      KOR:
        '문서의 제목, 설명, 태그 등의 정보를 입력하고 업로드하면 문서가 공유됩니다.',
      ENG: 'Add a title, description and tag, and upload a document to share.'
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
        'Log into your social and wallet account, and upload a document. It will be registered automatically and you will receive creator rewards and votes. (The ranking in the Featured tap is determined based on the votes received for the last 7 days.)'
    }
  ],
  [
    'guide-subj-3',
    {
      KOR: '크리에이터 보상금 산정하기',
      ENG: 'Calculate creator rewards'
    }
  ],
  [
    'guide-content-3',
    {
      KOR:
        '등록된 문서들에 대해서 매일 0시(GMT+0) 당일 전체 보상금의 70%를 문서 별 이전 하루 동안의 페이지뷰에 비례해서 배분 됩니다.',
      ENG:
        '70% of the total rewards is distributed per document based on its page views at 00:00 (GMT+0) on a daily basis.'
    }
  ],
  [
    'guide-subj-4',
    {
      KOR: '크리에이터 보상금 청구하기',
      ENG: 'Claim creator rewards'
    }
  ],
  [
    'guide-content-4',
    {
      KOR:
        '마이 페이지의 uploaded 탭에서 문서 별로 Claim 버튼을 클릭하면 지금까지 일별로 산정된 누적 보상금을 수령할 수 있습니다.',
      ENG:
        'Click on the Claim button for each document in the Uploaded tab of the My Profile page to receive your rewards settled on a daily basis.'
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
      ENG: 'Check your token balance on My Profile page or MetaMask wallet.'
    }
  ],
  [
    'guide-subj-6',
    {
      KOR: '투표하기',
      ENG: 'Vote'
    }
  ],
  [
    'guide-content-6',
    {
      KOR:
        '문서 뷰어 페이지에서 투표하기 버튼을 클릭하고 해당 문서에 투표할 토큰수를 입력하여 투표하면 됩니다.',
      ENG:
        'Click on the Vote button on the document viewer page and enter the amount of tokens to vote.'
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
      ENG: 'Calculate curator rewards'
    }
  ],
  [
    'guide-content-8',
    {
      KOR:
        '당일 페이지 뷰가 발생한 문서들에 대해서 매일 0시(GMT+0) 당일 전체 보상금의 30%를 문서 별 이전 하루 동안의 페이지뷰의 제곱에 비례해서 배분하고, 이를 다시 투표한 토큰수에 비례하여 배분됩니다.',
      ENG:
        '30% of the total rewards is distributed per document based on the square of its page views a day before, and is also distributed based on the tokens voted. '
    }
  ],
  [
    'guide-subj-9',
    {
      KOR: '큐레이터 보상금 청구하기',
      ENG: 'Claim curator rewards'
    }
  ],
  [
    'guide-content-9',
    {
      KOR:
        '내 프로필 페이지의 voted 탭에서 문서 별로 Claim 버튼을 클릭하면, 예치기간이 만료된 투표에 대해서 지금까지 정산 완료된 누적 보상금과 예치금을 수령할 수 있습니다.',
      ENG:
        'Click on the Claim button in the Voted tab of the My Profile page to receive the total rewards you have earned through voting of which deposit period has expired.'
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
      KOR: 'SNS 공유하기',
      ENG: 'Share on social media'
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
      ENG: 'Share document link'
    }
  ],
  [
    'guide-content-14',
    {
      KOR:
        '문서 뷰어 페이지에서 공유 버튼을 클릭하면 문서 공유창이 표시되며, 여기서 문서의 공유 링크를 복사한 후, 이메일 또는 메신저 등에 공유하시면 됩니다.',
      ENG:
        'Click on the Share button on the document viewer page to open the window where you can copy the link to share it via email or messenger.'
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
        'Click on the Share button on the document viewer page to open the window where you can copy the embedded code and paste it on the website to share it.'
    }
  ],

  // Publish Modal
  [
    'tooltip-publish',
    {
      KOR: '출판하기',
      ENG: 'Publish this documents'
    }
  ],
  [
    'tooltip-deposit',
    {
      KOR: '입금하기',
      ENG: 'Deposit'
    }
  ],
  [
    'publish-modal-title',
    {
      KOR: '문서 출판하기',
      ENG: 'Publish documents'
    }
  ],
  [
    'publish-modal-desc-1',
    {
      KOR:
        '현재 문서는 Public(공개) 상태로 전환 될것입니다. 문서를 블록체인에 등록해보세요. 전문가들이 당신의 문서를 투표하고, 조회수에 따라 크리에이터 보상도 받을 수 있습니다.',
      ENG:
        'This documents will be transitioned to the Public state. Register the documents in the block chain. Experts can vote on your documents and receive creator rewards based on views.'
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
      ENG: 'Publish and Register'
    }
  ],
  [
    'publish-modal-publish-btn',
    {
      KOR: '출판하기',
      ENG: 'Publish'
    }
  ],

  // Publish Modal Complete
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
        'After a few hours, your document will be retrieved from the search engine. More links to your documents from outside can help you reach the author of your search results.'
    }
  ],
  [
    'publish-modal-complete-subject',
    {
      KOR: '당신의 문서를 세상에 공유해보세요.',
      ENG: 'Share your document with the world.'
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

  // Deposit Modal
  [
    'deposit-modal-title',
    {
      KOR: '입금하기',
      ENG: 'Deposit'
    }
  ],
  [
    'deposit-modal-copied',
    {
      KOR: '복사완료!',
      ENG: 'Copied!'
    }
  ],

  // Withdraw Modal
  [
    'withdraw-modal-title',
    {
      KOR: '출금하기',
      ENG: 'Withdraw'
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

  // Delete Document Modal
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

  // Creator Claim
  [
    'claim-text',
    {
      KOR: '클레임',
      ENG: 'Claim'
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
      ENG: 'User Guide'
    }
  ],
  [
    'helmet-title-mylist',
    {
      KOR: '내가 찜한 문서',
      ENG: 'My List'
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
      ENG: 'You will change to Away mode after'
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
      ENG: 'Add to My List'
    }
  ],
  [
    'bookmark-remove',
    {
      KOR: '내가 찜한 문서에서 삭제',
      ENG: 'Remove from My List'
    }
  ],

  // Content Add
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
      ENG: 'Drag & Drop or Click to upload document'
    }
  ],
  [
    'content-add-click',
    {
      KOR: '클릭하여 파일 선택',
      ENG: 'Click to upload document'
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
      ENG: 'Add Post'
    }
  ],

  // Image Crop Modal
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
        'Polaris Share에 오신 것을 환영합니다! 귀하와 Polaris Share, Inc. ' +
        '(이하 "우리", "당사") 간의 본 계약 ("계약")은',
      ENG:
        'Welcome to Polaris Share! This agreement (the “Agreement”) between you and Polaris Share, ' +
        'Inc.(“we”, “us”, “our”) sets out your rights to access and use of'
    }
  ],
  [
    'terms-desc-2',
    {
      KOR:
        '및 당사가 제공하는 기타 제품 또는 서비스에 대한 액세스 및 사용에 대한 귀하의 권리를 명시합니다. 서비스"). ' +
        '본 계약을 수락하고 회사, 조직, 정부 또는 기타 법인을 대신하여 서비스를 사용하는 경우, ' +
        '귀하는 귀하가 그렇게 할 권한이 있음을 진술하고 보증하며 그러한 단체를 본 계약에 구속 할 권한이 있습니다. ' +
        '서비스에 액세스함으로써 귀하는 본 계약을 읽고, 이해하고 수락한다는 데 동의합니다.',
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
        '본 계약을 변경하기로 결정한 경우, 위의 "최종 업데이트"날짜를 업데이트하거나 ',
      ENG:
        'If we decide to make changes to this Agreement,' +
        'we will provide notice of those changes by updating the “Last Updated” date above or posting notice on '
    }
  ],
  [
    'terms-desc-4',
    {
      KOR:
        '에 공지함으로써 변경 사항에 대한 통지를 제공합니다. ' +
        '서비스를 계속 사용하면 변경 사항에 대한 수락 여부를 확인할 수 있습니다.',
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
        '당사가 귀하에 관한 정보를 수집, 사용 및 공개하는 방법에 대한 정보는 개인 정보 보호 정책을 참조하십시오.',
      ENG:
        'Please refer to our Privacy Policy for information about how we' +
        'collect, use, and disclose information about you.'
    }
  ],
  [
    'terms-2-title',
    {
      KOR: '1. 자',
      ENG: '2. Eligibility'
    }
  ],
  [
    'terms-2-desc',
    {
      KOR:
        '본 서비스는 13 세 미만의 사용자를 대상으로 하지 않으며 사용 대상이 아닙니다. ' +
        '본 서비스에 액세스하거나 사용하려면 13 세 이상이어야 합니다. 만 13 세에서 18 세 사이 (또는 귀하가 거주하는 법적 성년) 인 경우 ' +
        '본 계약에 구속되는 데 동의하는 부모 또는 법적 보호자의 감독하에 서비스에 액세스하거나 사용할 수 있습니다.',
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
      KOR: '3. 저작권 및 제한된 라이센스',
      ENG: '3. Copyright and Limited License'
    }
  ],
  [
    'terms-3-desc-1',
    {
      KOR:
        '당사는 당사가 제공하는 데이터, 텍스트, 사진, 이미지, 비디오, 오디오, 그래픽, 기사, 주석, 소프트웨어, 코드, 스크립트 및 ' +
        '기타 컨텐츠 또는 라이센스 제공자를 보유 할 수 있습니다. Polaris Share 콘텐츠는 미국 및 외국의 저작권 및 기타 독점권을 포함한 지적 재산권 법률의 보호를 받습니다. ' +
        '본 계약서에 명시 적으로 명시된 경우를 제외하고 Polaris Share Content 사용에 대한 명시 적 또는 묵시적 권리를 부여하지 않습니다.',
      ENG:
        'We may retain data, text, photographs, images, video, audio, graphics,' +
        'articles, comments, software, code, scripts, and other content' +
        'supplied by us. Except as explicitly stated in this Agreement, we do' +
        'not grant any express or implied rights to use Polaris Share Content.'
    }
  ],
  [
    'terms-3-desc-2',
    {
      KOR:
        '귀하는 귀하의 개인적인 사용을 위해 서비스 및 Polaris Share 컨텐츠에 액세스하고 이를 사용하기 위한 제한적, 비 독점적, 양도 불능 및 재사용 불가능한 라이센스를 부여 받습니다.  귀하는 자신이 생성하거나 소유 한 컨텐츠 ("귀하의 컨텐츠")에 대한 소유권 및 책임을 보유합니다. 자신을 만들지 않았거나 권리를 소유하지 않은 내용을 게시하는 경우 게시 한 모든 내용에 대한 책임은 귀하에게 있습니다. 게시 할 권리가있는 콘텐츠 만 제출할 것입니다. 귀하가 게시하는 컨텐츠와 관련된 제 3 자 라이센스를 완전히 준수해야합니다.',
      ENG:
        'You are granted a limited, non-exclusive, non-transferable, and' +
        'non-sublicensable license to access and use the Service and Polaris' +
        'Share Content for your personal use. You retain ownership of and' +
        'responsibility for Content you create or own ("Your Content"). If' +
        "you're posting anything you did not create yourself or do not own the" +
        'rights to, you agree that you are responsible for any Content you' +
        'post; that you will only submit Content that you have the right to' +
        'post; and that you will fully comply with any third-party licenses' +
        'relating to Content you post.'
    }
  ],
  [
    'terms-4-title',
    {
      KOR: '4. 상표권 정책',
      ENG: '4. Trademark Policy'
    }
  ],
  [
    'terms-4-desc-1',
    {
      KOR:
        '"Polaris Share", Polaris Share 로고 및 서비스 상에 나타날 수 있는 기타 제품 또는 서비스 이름, 로고, ' +
        '슬로건은 Polaris Share, Inc.의 상표이며, ' +
        '전부 또는 일부를 복사, 모방 또는 사용해서는 안됩니다. ' +
        '명시 적으로 허용되지 않거나 처음에 당사로부터 서면 허가를 받지 않은 경우. ',
      ENG:
        '“Polaris Share,”, the Polaris Share logo and any other product or' +
        'service names, logos, slogans that may appear on the Service are' +
        'trademarks of Polaris Share, Inc., and, may not be copied, imitated,' +
        'or used, in whole or in part, unless explicitly permitted or without' +
        'first receiving written permission from us to do so. The look and feel' +
        'of '
    }
  ],
  [
    'terms-4-desc-2',
    {
      KOR:
        '및 서비스의 모양과 느낌은 저작권 © Polaris Share, Inc.에 의해 보호됩니다. 명시 적 서면 허가없이 HTML, CSS, Javascript 또는 시각적 디자인 요소 또는 개념의 일부를 복제, 복사 또는 재사용 할 수 없습니다.',
      ENG:
        'and the' +
        'Service is protected by copyright © Polaris Share, Inc. All rights' +
        'reserved. You may not duplicate, copy, or reuse any portion of the' +
        'HTML/CSS, Javascript, or visual design elements or concepts without' +
        'express written permission.'
    }
  ],
  [
    'terms-4-desc-3',
    {
      KOR:
        '당사 서비스에서 언급되거나 사용 된 기타 모든 상표, ' +
        '등록 상표, 제품 이름 및 회사 이름 또는 로고는 해당 소유자의 자산이며 해당 내용의 허가없이 전체 또는 부분적으로 복사, ' +
        '모방 또는 사용될 수 없습니다. 상표권자. 이름, 상표, 제조업체, 공급 업체 또는 다른 방법으로 제품, ' +
        '서비스, 프로세스 또는 기타 정보를 언급했다고 해서 우리에 의한 보증, 후원 또는 추천을 의미하지는 않습니다.',
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
      KOR: '5. 위험의 가정, 책임의 한계.',
      ENG: '5. Assumption of Risk, Limitations on Liability.'
    }
  ],
  [
    'terms-5-desc-1',
    {
      KOR:
        '5.1. 귀하는 인터넷 기반 POLA 블록 체인 계정 서비스 이용과 관련된 위험이 있음을 인정하고 이에 동의합니다. 여기에는 하드웨어, 소프트웨어 및 인터넷 연결의 실패 위험, 악성 소프트웨어 도입 위험 및 제 3의 위험 - 귀하의 개인 키 ("개인 키")를 포함하되 이에 국한되지 않는 귀하의 계정에 저장되거나 연결된 개인 정보에 무단으로 액세스 할 수 있습니다. 귀하는 서비스 사용시 발생할 수 있는 통신 실패, 중단, 오류, 왜곡 또는 지연에 대해 당사가 책임지지 않음을 인정하고 인정합니다.',
      ENG:
        '5.1. You accept and acknowledge that there are risks associated with' +
        'utilizing an Internet-based POLA blockchain account service including,' +
        'but not limited to, the risk of failure of hardware, software and' +
        'Internet connections, the risk of malicious software introduction, and' +
        'the risk that third-parties may obtain unauthorized access to' +
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
        '5.2. 우리는 서비스의 내용, 서비스를 통해 액세스 할 수있는 정보 및 기능, 제 3 자 웹 사이트에 대한 하이퍼 링크 또는 관련된 보안 위반에 대해 어떠한 종류의 명시 적 또는 묵시적, 법정 또는 기타 어떠한 형태의 진술이나 보증도하지 않습니다. 서비스 또는 서비스와 연결된 모든 웹 사이트를 통한 정보의 전송.',
      ENG:
        '5.2. We make no representation or warranty of any kind, express or' +
        'implied, statutory, or otherwise, regarding the contents of the' +
        'Service, information and functions made accessible through the' +
        'Service, any hyperlinks to third-party websites, nor for any breach of' +
        'security associated with the transmission of information through the' +
        'Service or any website linked to by the Service.'
    }
  ],
  [
    'terms-5-desc-3',
    {
      KOR:
        '5.3. 우리는 다음과 같은 사항으로 인해 발생하는 손실, 손해 및 클레임을 포함하여 (단, 이에 국한되지는 않음) ' +
        '당사의 서비스 이용에 대한 손실에 대해 귀하에게 책임을 지지 않으며 그에 대해 책임을 지지 않습니다. ' +
        '잊어버린 암호, 잘못 구성된 거래 또는 잘못 입력 된 POLA 블록 체인 주소 (b) 서버 오류 또는 데이터 손실. ' +
        '(c) 손상된 계정 파일. (d) 애플리케이션에 대한 무단 액세스. ' +
        '(e) 바이러스, 피싱, 무차별 공격 또는 서비스 또는 서비스에 대한 기타 공격 수단의 사용을 포함하되 이에 국한되지 않는 ' +
        '제 3 자의 허가되지 않은 제 3 자 활동등.',
      ENG:
        '5.3. We will not be responsible or liable to you for any loss and take' +
        'no responsibility for and will not be liable to you for any use of our' +
        'Services, including but not limited to any losses, damages or claims' +
        'arising from: (a) User error such as forgotten passwords, incorrectly' +
        'constructed transactions, or mistyped POLA blockchain addresses; (b)' +
        'Server failure or data loss; (c) Corrupted Account files; (d)' +
        'Unauthorized access to applications; (e) Any unauthorized third-party' +
        'activities, including without limitation the use of viruses, phishing,' +
        'brute forcing or other means of attack against the Service or Services.'
    }
  ],
  [
    'terms-5-desc-4',
    {
      KOR:
        '5.4. 우리는 서비스 또는 이를 사용할 수 있는 서버가 바이러스 나 오류가 없고, 내용이 정확하고, ' +
        '중단되지 않거나, 결함이 수정 될 것이라는 보증을 하지 않습니다. ' +
        '우리는 서비스에 포함 된 내용이나 정보에 의존하여 취한 조치 또는 모든 종류의 손실에 대해 귀하에게 어떠한 ' +
        '책임이나 의무도지지 않습니다.',
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
        '5.5. 아래 6.1 조항에 의거하여 모든 면책, 보증, 조건 및 조건 (명시 적이든 묵시적이든)이 ' +
        '뉴욕 법에 따라 허용되는 한도까지 배제됩니다.',
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
        '5.6. 우리는 사기성 또는 과실로 허위 진술 한 경우를 제외하고는 책임을 지지 않으며, ' +
        '계약 또는 불법 행위 (과실 포함)를 하지 않습니다.',
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
      KOR: '6. 제 3 자 서비스 및 컨텐츠에 대한 책임 없음',
      ENG: '6. No Liability for Third-Party Services and Content'
    }
  ],
  [
    'terms-6-desc',
    {
      KOR:
        '6.1. 서비스 사용시, 귀하는 웹 페이지 및 해당 당사자의 서비스 ("제 3 자 콘텐츠")에 대한 링크를 포함하여 제 3자가 제공하는 서비스를 사용하거나 콘텐츠를 볼 수 있습니다. ' +
        '우리는 제 3 자 콘텐츠를 통제, 보증 또는 채택하지 않으며 귀하의 관할 지역에서 오도 된 정보, 불완전 정보, ' +
        '오류, 불쾌감, 외설적 인 내용 또는 기타 불쾌한 내용을 포함하여 제 3 자 콘텐츠에 대한 책임을 지지 않습니다. ' +
        '또한 그러한 제 3 자와의 거래 또는 서신은 전적으로 귀하와 제 3 자 사이에 있습니다. ' +
        '당사는 그러한 거래로 인해 발생하는 모든 유형의 손실이나 손해에 대해 책임을 지지 않으며 귀하는 ' +
        '제 3 자 콘텐츠 사용 및 제 3 자와의 상호 작용에 따른 위험 부담을 이해합니다.',
      ENG:
        '6.1. In using our Services, you may view content or utilize services' +
        'provided by third parties, including links to web pages and services' +
        'of such parties (“Third-Party Content”). We do not control, endorse,' +
        'or adopt any Third-Party Content and will have no responsibility for' +
        'Third-Party Content including, without limitation, material that may' +
        'be misleading, incomplete, erroneous, offensive, indecent, or' +
        'otherwise objectionable in your jurisdiction. In addition, your' +
        'dealings or correspondence with such third parties are solely between' +
        'you and the third parties. We are not responsible or liable for any' +
        'loss or damage of any sort incurred because of any such dealings and' +
        'you understand that your use of Third-Party Content, and your' +
        'interactions with third parties, is at your own risk.'
    }
  ],
  [
    'terms-7-title',
    {
      KOR: '7. 계정 등록',
      ENG: '7. Account Registration'
    }
  ],
  [
    'terms-7-desc-1',
    {
      KOR:
        '7.1. polarisshare.com에게 무료로 계정을 만들 수 있습니다. ' +
        '서비스의 일부를 사용하려면 POLA 블록 체인(“추후 서비스 예정”) 계정("계정")을 만들어야 합니다. ' +
        '귀하가 계정을 만들 때 귀하는 귀하의 계정에 대한 액세스 및 또는 통제를 상실 할 수 있으므로 다음주의 사항을 지켜야합니다. ' +
        '(b) 정확하고 정보를 제공하십시오. (c) 귀하의 계정 암호 및 귀하의 컴퓨터 및 계정에 대한 액세스를 보호하여 계정의 보안을 유지해야합니다. ' +
        '(e) 귀하의 계정과 관련된 보안 위반을 발견하거나 의심되는 경우 즉시 알려주십시오.',
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
        '7.2. 귀하는 귀하의 계정 하에서 발생하는 모든 활동에 대한 책임을 지고 법이 허용하는 한도 내에서 ' +
        '귀하의 계정에 대한 허가 된 또는 허가되지 않은 액세스의 모든 위험을 수락한다는 것을 수락하고 인정합니다.',
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
        '7.3. 귀하는 암호가 진행되는 분야임을 인정하고 이해합니다. ' +
        '코드 크래킹이나 양자 컴퓨터 개발과 같은 기술 발전의 진전은 귀하가 사용하는 서비스 및 귀하의 계정에 위험을 초래할 수 있으며 ' +
        '이로 인해 귀하의 재산이 도난 또는 분실 될 수 있습니다. ' +
        '서비스를 사용하거나 Polaris share Content에 액세스함으로써 귀하는 이러한 내재 된 위험을 인정합니다.',
      ENG:
        '7.3. You acknowledge and understand that cryptography is a progressing' +
        'field. Advances in code cracking or technical advances such as the' +
        'development of quantum computers may present risks to the Services' +
        'that you use and your Account, which could result in the theft or loss' +
        'of your property. By using the Service or accessing Polaris Share' +
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
        '8.1. 계정 및 개인 키. 서비스를 통해 계정을 만드는 데 동의하는 경우, 귀하에게 전적으로 제공되고 귀하가 전적으로 소유 한 암호화 개인 및 공개 키 쌍을 생성합니다. 단, 귀하의 비밀번호 나 비공개 키는 저장하지 마십시오. 우리는 결코 귀하의 개인 키에 접근 할 수 없으며 귀하를 대신하여 어떤 개인 키를 양육하지 않습니다. 그러므로 귀하의 계정에 연결된 개인 키 관리에 대한 책임을 지지 않습니다. 개인 키는 계정 이름과 고유하게 일치하며 해당 계정에서 POLA 이전을 승인하기 위해 계정과 관련하여 사용해야 합니다. 개인 키의 보안을 유지 관리하는 것은 전적으로 귀하의 책임입니다. 개인 키 액세스 정보는 안전하게 보관해야 합니다. 그렇게 하지 않으면 POLA에 통제가 상실 될 수 있습니다.',
      ENG:
        '8.1. As described in others detail below, the Services, among other' +
        'things, provide software that facilitates the submission of POLA' +
        'blockchain transaction data to the POLA blockchain without requiring' +
        'you to access the POLA blockchain command line interface.'
    }
  ],
  [
    'terms-8-desc-2',
    {
      KOR:
        '8.2. 암호 검색이 없습니다. 우리는 귀하의 계정 암호 또는 개인 키를 받거나 저장하지 않습니다. 귀하의 개인 키는 귀하의 개인 키이며 귀하는 귀하의 개인 키를 안전하게 보관할 책임이 있습니다. 계정 암호 검색, 재설정 또는 복구를 지원할 수는 없습니다. 계정 암호를 기억하는 것은 전적으로 귀하의 책임입니다. 계정에 저장된 계정 및 암호 쌍의 백업을 안전하게 저장하지 않은 경우 계정 암호가 없는 경우 해당 계정과 연결된 DECL가 영구적으로 액세스 할 수 없게 됩니다.',
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
        '8.3. 업무. 제안 된 모든 POLA 블록 체인 거래는 POLA 블록 컨센서스 네트워크 (피어 - 투 - 피어 네트워크)를 통해 POLA 블록 체인에 확인 및 기록 되어야 하며, 이는 당사가 소유, 관리 또는 운영하지 않습니다. POLA 블록 체인은 독립적 인 제 3 자의 분산된 네트워크에 의해 운영됩니다. 우리는 POLA 블록 체인에 대한 통제권이 없으므로 귀하가 서비스를 통해 제출하는 거래 내역이 POLA 블록 체인에서 확인되도록 할 수는 없으며 보장 할 수도 없습니다. ',
      ENG:
        '8.3. Transactions. All proposed POLA blockchain transactions must be' +
        'confirmed and recorded in the POLA blockchain via the Polaris Share' +
        'distributed consensus network (a peer-to-peer network), which is not' +
        'owned, controlled, or operated by us. The POLA blockchain is operated' +
        'by a decentralized network of independent third parties. We have no' +
        'control over the POLA blockchain and therefore cannot and will not' +
        'ensure that any transaction details you submit via the Services will' +
        'be confirmed on the POLA blockchain.'
    }
  ],
  [
    'terms-8-desc-4',
    {
      KOR:
        '8.4. POLA의 저장 또는 운송 금지. POLA 귀하가 관리하는 무형의 디지털 자산입니다. 이러한 자산은 POLA 블록 체인에서 유지 관리되는 소유권 레코드에 의해서만 존재합니다. 서비스는 POLA를 저장, 보내거나 받지 않습니다. POLA에서 발생할 수 있는 제목 이전은 서비스가 아닌 POLA 블록 체인에서 발생합니다. 당사는 POLA에서 서비스가 제목 또는 권리 이전에 영향을 미칠 수 있다고 보장하지 않습니다.',
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
        '8.5. 관계. 본 계약서의 어떠한 내용도 귀하와 당사 사이의 파트너십, 합작 투자, 대행사, 컨설팅 또는 신탁 통치를 의도하지도 않으며 작성하지도 않습니다.',
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
        '8.6. 정보의 정확성. 귀하는 서비스를 통해 귀하가 제공하는 모든 정보가 정확하고 완전 함을 진술하고 보증합니다. 귀하는 서비스를 통해 시작된 POLA blockchain 거래와 관련하여 귀하가 계정 이름을 잘못 입력하거나 잘못된 정보를 제공 한 경우와 같은 실수 나 누락에 대해 책임을 지지 않습니다. 서비스를 통해 거래 정보를 작성하기 전에 거래 세부 정보를 신중하게 검토하는 것이 좋습니다.',
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
        '8.7. 취소 또는 변경 금지. 일단 서비스 세부 사항이 서비스를 통해 POLA 블록 체인에 제출되면 서비스는 귀하가 거래 세부 사항을 취소하거나 달리 수정할 수 있도록 도와줄 수 없습니다. 우리는 POLA 블록 체인을 제어 할 수 없으며 취소 또는 수정 요청을 쉽게 할 수 없습니다.',
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
        '8.8. 구실. 귀하가 서비스를 통해 거래 내역을 제출 한 거래에 대해 세금이 부과되는지 여부를 결정하는 것은 귀하의 책임이며 적절한 세무 기관에 보고하고 정확한 세금을 송금하는 것은 귀하의 책임입니다. 귀하는 POLA blockchain 거래에 세금이 적용되는지 또는 POLA blockchain 거래로 인해 발생하는 세금 징수, 보고, 원천 징수 또는 양도 여부에 대한 당사의 책임이 없음에 동의합니다.',
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
      KOR: '9. 서비스의 중단.',
      ENG: '9. Discontinuation of Services.'
    }
  ],
  [
    'terms-9-desc-1',
    {
      KOR:
        '9.1. 우리는 단독 재량으로 비용없이 사전 통지 여부에 상관없이 언제든지 서비스의 일부를 일시적 또는 영구적으로 수정 또는 중단 할 수 있습니다. 서비스 외부에서 귀하가 귀하의 계정에서 유지 관리하는 계정 및 개인 키의 백업을 저장하는 것은 전적으로 귀하의 책임입니다.',
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
        '9.2. 귀하가 서비스 외부에서 귀하의 계정 데이터를 백업하지 않는다면 귀하가 서비스를 중단하거나 폐지 할 경우 귀하의 계정에 유지 관리되는 모든 계좌와 관련된 POLA에 액세스하지 못할 수 있습니다.',
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
      KOR: '10. 서비스의 일시 중지 또는 해지.',
      ENG: '10. Suspension or Termination of Service.'
    }
  ],
  [
    'terms-10-desc-1',
    {
      KOR:
        '10.1. 당사는 단독 재량으로 귀하의 서비스 이용을 예고없이 즉시 중단하거나 종료 할 수 있으며,',
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
        '계정 및 모든 관련 정보와 파일을 비용없이 무료로 삭제하거나 비활성화 할 수 있습니다. 본 계약의 어떠한 조항도 위반할 수 없습니다. 계정 해지 시 귀하의 계정에 있는 금액에 액세스하려면 명령 행 API 또는 제 3 자 도구를 통해 POLA 블록 체인에 액세스 해야 하며 귀하의 계정 및 계정을 포함한 계정 데이터의 백업에 액세스 해야 합니다.',
      ENG:
        'account and' +
        'all related information and files in such without cost to you,' +
        'including, for instance, if you breach any term of this Agreement. In' +
        'the event of termination, your access to the funds in your account' +
        'will require you access to the POLA blockchain via the command line' +
        'API or third party tool, and will require you to have access to your' +
        'backup of your Account data including your Account and Private Keys.'
    }
  ],
  [
    'terms-11-title',
    {
      KOR: '11. 사용자 행동',
      ENG: '11. User Conduct'
    }
  ],
  [
    'terms-11-desc-1',
    {
      KOR:
        '11.1. 서비스에 액세스하거나 사용할 때 귀하는 불법 행위를 저 지르지 않으며 본 서비스를 사용하는 동안 귀하의 행위에 대한 전적인 책임이 있음에 동의합니다. 전술 한 내용의 일반성을 제한하지 않고 귀하는 다음과 같은 행위를 하지 않을 것에 동의합니다.',
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
        '11.1.1. 다른 사용자가 당사 서비스를 완전히 즐기지 못하게 방해하거나 부정적인 영향을 미칠 수있는 방식으로 서비스를 사용하거나 어떤 방식으로 든 서비스의 손상, 사용 불능, 과부하 또는 손상을 초래할 수 있는 방식으로 서비스를 사용하는 행위',
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
        '11.1.2. Google의 서비스를 사용하여 불법 도박, 사기, 돈세탁 또는 테러 자금 조달 활동을 포함하여 (이에 국한되지 않음) 법률로 금지 된 활동에 대해 비용을 지불하거나 지원하거나 달리 참여하게 하십시오.',
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
        '11.1.3. 허가없이 다른 사용자의 계정을 사용하거나 사용하려고 시도하십시오.',
      ENG:
        '11.1.3. Use or attempt to use another user’s Account without' +
        'authorization;'
    }
  ],
  [
    'terms-11-desc-5',
    {
      KOR:
        '11.1.4. 우리가 고용 한 컨텐츠 필터링 기술을 우회하거나 액세스 권한이 없는 서비스 또는 서비스 영역에 액세스하려고 시도하십시오.',
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
        '11.1.5. 바이러스, 트로이 목마, 웜, 논리 폭탄 또는 기타 유해한 물질을 서비스에 소개하십시오.',
      ENG:
        '11.1.5. Introduce to the Services any virus, Trojan, worms, logic' +
        'bombs or other harmful material;'
    }
  ],
  [
    'terms-11-desc-7',
    {
      KOR:
        '11.1.6. 제 3 자에게 본 절에 의거하여 금지 된 활동을 하도록 권장하거나 유도하십시오.',
      ENG:
        '11.1.6. Encourage or induce any third-party to engage in any of the' +
        'activities prohibited under this Section.'
    }
  ],
  [
    'terms-12-title',
    {
      KOR: '12. 저작권 침해 신고, DMCA 및 게시 중단',
      ENG: '12. Copyright Complaints, the DMCA, and Takedowns'
    }
  ],
  [
    'terms-12-desc-1',
    {
      KOR:
        '12.1 디지털 밀레니엄 저작권법 (Digital Millennium Copyright Act, "DMCA")에 따른 합법적 인 요청에 응답하고, 우리는 타인의 저작권을 침해한다고 판단되는 서비스를 통해 제공된 사용자 콘텐츠에 대한 액세스를 제거 할 권리를 보유합니다. 귀하가 귀하의 저작권 권한을 침해하는 귀하의 서비스 내용을 알고 있다면 적절하게 포맷 된 DMCA 요청서 (17 USC § 512 참조)를 Polaris Share, Inc.에 제출할 수 있습니다',
      ENG:
        '12.1 We will respond to legitimate requests under the Digital' +
        'Millennium Copyright Act ("DMCA"), and we retain the right to remove' +
        'access to user content provided via the Service that we deem to be' +
        'infringing the copyright of others. If you become aware of user' +
        'content on the Service that infringes your copyright rights, you may' +
        'submit a properly formatted DMCA request (see 17 U.S.C. § 512) to' +
        'Polaris Share, Inc.'
    }
  ],
  [
    'terms-12-desc-2',
    {
      KOR:
        '침해에 대한 허위 진술은 금전적 손해에 대한 책임을 초래할 수 있습니다. 귀하는 DMCA에 따라 조치를 취하기 전에 변호사와 상담할 수 있습니다. DMCA 요청은 아래 연락처 정보를 통해 Google에 전송 될 수 있습니다.',
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
      KOR: '저작권 에이전트',
      ENG: 'Copyright Agent'
    }
  ],
  [
    'terms-12-desc-4',
    {
      KOR:
        '주소가 위치한 사법 구역에 대한 연방 지방 법원의 관할권에 또는 귀하의 주소가 미국 이외의 지역에 있는 경우, 서비스 제공 업체가있을 수있는 모든 사법 구역에 대해 귀하가 DMCA 512 (c) (1) (c) 항에 의거하여 통보를 한 사람 또는 그 사람의 대리인으로부터의 절차.',
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
        '이의 제기 신청서를 받으면 불만 당사자에게 전달하고 영업일 기준 10 일 이내에 귀하의 콘텐츠를 복원할 것이라고 말합니다. 해당 당사자가 해당 기간이 만료되기 전에 귀하가 해당 콘텐츠를 귀하의 서비스 사용을 제한하라는 조치를 취했다는 것을 당사에 통보하지 않으면 당사는 사용자 콘텐츠를 사이트로 복원하는 것을 고려할 것입니다.',
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
        '반복적 인 저작권 침해로 판단하는 사용자에게 서비스 사용을 거부하는 것이 Google의 정책입니다. Google은 재량에 따라 사용자가 다른 사람의 저작권 또는 기타 지적 재산권을 침해했다고 반복적으로 고소당한 경우와 같은 적절한 상황에서 이 정책을 적용합니다.',
      ENG:
        'It is our policy to deny use of the Service to users we identify as' +
        'repeat infringers. We apply this policy at our discretion and in' +
        'appropriate circumstances, such as when a user has repeatedly been' +
        'charged with infringing the copyrights or other intellectual property' +
        'rights of others.'
    }
  ],
  [
    'terms-13-title',
    {
      KOR: '13. 손해 배상',
      ENG: '13. Indemnity'
    }
  ],
  [
    'terms-13-desc-1',
    {
      KOR:
        '귀하가 하는 모든 일과 귀하가 서비스에 제출하거나 게시하는 모든 정보는 귀하의 책임입니다. 면책은 기본적으로 법이나 제 3 자 또는 개인의 권리를 침해하는 콘텐츠 또는 행위에 대해 법적으로 책임을 지지 않는다고 말하는 방식입니다.',
      ENG:
        'All the things you do and all the information you submit or post to' +
        'the Service remain your responsibility. Indemnity is basically a way' +
        'of saying that you will not hold us legally liable for any of your' +
        'content or actions that infringe the law or the rights of a third' +
        'party or person in any way.'
    }
  ],
  [
    'terms-13-desc-2',
    {
      KOR:
        '특히 귀하는 당사, 계열사, 임원, 이사, 직원, 대리인 및 제 3 자 서비스 공급자를 변호인의 권리를 포함하여 청구, 비용, 손해, 손실, 경비 및 기타 책임으로부터 무해하고 방어하기로 동의합니다. 귀하의 서비스 액세스 또는 사용, 귀하의 본 이용 약관 위반 및 또는 제 3 자 또는 개인의 권리 침해로 인해 발생하는 비용, 비용 및 비용.',
      ENG:
        'Specifically, you agree to hold us, our affiliates, officers,' +
        'directors, employees, agents, and third-party service providers' +
        'harmless from and defend them against any claims, costs, damages,' +
        'losses, expenses, and any other liabilities, including attorneys’ fees' +
        'and costs, arising out of or related to your access to or use of the' +
        'Service, your violation of this user agreement, and/or your violation' +
        'of the rights of any third-party or person.'
    }
  ],
  [
    'terms-14-title',
    {
      KOR: '14. 면책 조항',
      ENG: '14. Disclaimers'
    }
  ],
  [
    'terms-14-desc',
    {
      KOR:
        '해당 법률에서 허용하는 최대 한도 내에서 서비스 및 Polaris Share 컨텐츠는 상품성에 대한 묵시적 보증을 포함하여 (단, 이에 한하지 않음) 어떠한 종류의 명시 적 또는 묵시적 보증도없이 "있는 그대로"및 "있는 그대로"제공됩니다. 특정 목적에의 적합성, 소유권 및 비 침해에 관한 모든 보증 및 거래의 수행이나 사용 과정에서 암시하는 모든 보증을 포함합니다. 회사는 서비스 및 Polaris Share 콘텐츠가 (a) 언제든지 또는 장소에서 안전하거나 이용 가능할 것임을 진술하거나 보증하지 않습니다. (b) 정확성, 완전성, 신뢰성, 최신 또는 오류가 없거나 결함이나 오류가 시정될 것입니다. (c) 바이러스 또는 기타 유해한 성분이 없다. 귀하가 서비스 및 Polaris Share 컨텐츠를 사용하는 것은 전적으로 귀하의 책임입니다.',
      ENG:
        'To the fullest extent permitted by applicable law, the Service and the' +
        'Polaris Share Content are provided on an “as is” and “as available”' +
        'basis, without warranties of any kind, either express or implied,' +
        'including, without limitation, implied warranties of merchantability,' +
        'fitness for a particular purpose, title and non-infringement and any' +
        'warranties implied by any course of performance or usage of trade. The' +
        'company does not represent or warrant that the Service and the Polaris' +
        'Share Content: (a) will be secure or available at any time or' +
        'location; (b) are accurate, complete, reliable, current, or error-free' +
        'or that any defects or errors will be corrected; and (c) are free of' +
        'viruses or other harmful components. Your use of the Service and' +
        'Polaris Share Content is solely at your own risk. Some jurisdictions' +
        'do not allow the disclaimer of implied terms in contracts with' +
        'consumers, so some or all of the disclaimers in this Section may not' +
        'apply to you.'
    }
  ],
  [
    'terms-15-title',
    {
      KOR: '15. 책임의 한계',
      ENG: '15. Limitation of liability'
    }
  ],
  [
    'terms-15-desc-1',
    {
      KOR:
        'Polaris Share, Inc. 는 해당 법률에서 허용하는 최대 한도 내에서 어떠한 특수한 간접적 인 책임도지지 않습니다. , 우발적, 결과적, 모범적 또는 징벌 적 손해, 계약 손실, 손해의 손실 또는 이익 손실 또는 데이터 손실을 포함하되 이에 국한되지 않는 모든 종류의 손해 제한적, 과실) 또는 달리 서비스 또는 콘텐츠의 사용 또는 사용 불가능으로 인해 발생하는 모든 손해에 대해 책임을 지지 않습니다. 해당 법률이 허용하는 최대 한도 내에서, 어떠한 경우에도 Polaris Share, Inc. 또는 관련 당사자의 계약 상 책임, 보증, 불법 행위 (과실 포함, 능동, 수동 또는 귀속 여부)',
      ENG:
        'To the fullest extent permitted by applicable law, in no event shall' +
        'Polaris Share, Inc. or the any related party to Polaris Share,' +
        'Inc., that includes but is not limited to, subsidiaries, vendors, or' +
        'contractors, be liable for any special, indirect, incidental,' +
        'consequential, exemplary or punitive damages, or any other damages of' +
        'any kind, including, but not limited to, loss of use, loss of profits' +
        'or loss of data, whether in an action in contract, tort (including,' +
        'but not limited to, negligence) or otherwise, arising out of, or in' +
        'any way connected with, the use of, or inability to use, the Service' +
        'or the Polaris Share Content. To the fullest extent permitted by' +
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
        '일부 관할지에서는 특정 손해의 배제 나 제한을 허용하지 않으므로 이 섹션의 일부 또는 전부가 귀하에게 적용되지 않을 수도 있습니다.',
      ENG:
        'Some jurisdictions do not allow the exclusion or limitation of certain' +
        'damages, so some or all of the exclusions and limitations in this' +
        'Section may not apply to you.'
    }
  ],
  [
    'terms-16-title',
    {
      KOR: '16. 서비스 변경',
      ENG: '16. Modifications to the Service'
    }
  ],
  [
    'terms-16-desc',
    {
      KOR:
        '우리는 사전 통지없이 서비스 또는 서비스의 기능 또는 부분을 일시적으로 또는 영구적으로 수정하거나 중단할 수 있는 권리를 보유합니다. 귀하는 서비스의 수정, 일시 중지 또는 중단에 대해 당사가 책임지지 않는다는 데 동의합니다.',
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
        'Polaris Share, Inc.와의 특정 분쟁을 중재해야 하며 Polaris Share, Inc.로부터 구제 방법을 제한하기 때문에 다음 섹션을 주의 깊게 읽으십시오. 이 섹션 20에 동의하지 않으면 서비스 사용을 중단하십시오.',
      ENG:
        'Please read the following section carefully because it requires you to' +
        'arbitrate certain disputes with Polaris Share, Inc. and limits the way' +
        'you can seek relief from Polaris Share, Inc. If you do not agree' +
        'with this Section 20, please discontinue using the Service.'
    }
  ],
  [
    'terms-17-desc-2',
    {
      KOR:
        '17.1. 중재 구속력. 일방 당사자가 소액 배상 청구 소송에서 개인 소송을 제기하거나 소송, 상표, 상호, 로고, 영업 비밀 또는 특허의 불법적 사용에 대한 금지 명령 또는 기타 공평한 구제를 요구하는 분쟁을 제외하고 귀하와 Polaris Share, Inc. (a) 법원에서이 계약 또는 Polaris Share, Inc. ( "분쟁"으로 통칭)에서 발생하는 모든 분쟁 또는 청구를 제기 할 권리를 포기합니다. (b) 귀하의 배심 재판을받을 권리를 포기하십시오. 대신, 귀하와 Polaris Share, Inc.는 법적 분쟁을 결정하기보다는 분쟁을 검토하고 해결하기위한 최종적인 구속력 있는 결정을 내린 한 명 이상의 사람에게 분쟁을 위탁하는 구속력 있는 중재를 통해 분쟁을 중재합니다. 판사 또는 배심원).',
      ENG:
        '17.1. Binding Arbitration. Except for disputes in which either party' +
        'seeks to bring an individual action in small claims court or seeks' +
        'injunctive or other equitable relief for the alleged unlawful use of' +
        'copyrights, trademarks, trade names, logos, trade secrets or patents,' +
        'you and Polaris Share, Inc.: (a) waive your right to have any and' +
        'all disputes or Claims arising from this Agreement or DECOMPANY' +
        'GLOBAL, Inc. (collectively, “Disputes”) resolved in a court; and (b)' +
        'waive your right to a jury trial. Instead, you and Polaris Share,' +
        'Inc. will arbitrate Disputes through binding arbitration (which is the' +
        'referral of a Dispute to one or others persons charged with reviewing' +
        'the Dispute and making a final and binding determination to resolve' +
        'it, instead of having the Dispute decided by a judge or jury in' +
        'court).'
    }
  ],
  [
    'terms-17-desc-3',
    {
      KOR:
        '17.2. 클래스 중재, 집단 소송 또는 대표 행동 금지. 귀하는 모든 분쟁이 귀하와 Polaris Share, Inc.에게 개인적인 것이며 그러한 분쟁은 개별 중재를 통해서만 해결되며 계급 중재, 집단 소송 또는 기타 대표적인 소송으로 제기되지 않을 것에 동의합니다. 어느 당사자도 집단 중재 또는 다른 개인 또는 개인 집단의 대표로서 분쟁을 만들고 해결하려는 중재에 동의하지 않습니다. 또한, 귀하와 Polaris Share, Inc.는 중재 내부 또는 외부, 또는 다른 개인 또는 개인 집단을 대표하여 분쟁을 계급 또는 다른 유형의 대표적 행동으로 제기할 수 없다는 데 동의합니다.',
      ENG:
        '17.2. No Class Arbitrations, Class Actions or Representative Actions.' +
        'You agree that any dispute is personal to you and Polaris Share,' +
        'Inc. and that any such dispute will be resolved solely through' +
        'individual arbitration and will not be brought as a class arbitration,' +
        'class action or any other type of representative proceeding. Neither' +
        'party agrees to class arbitration or to an arbitration in which an' +
        'individual makes and attempt to resolve a dispute as a representative' +
        'of another individual or group of individuals. Further, you and' +
        'Polaris Share, Inc. agree that a dispute cannot be brought as a' +
        'class, or other type of representative action, whether within or' +
        'outside of arbitration, or on behalf of any other individual or group' +
        'of individuals.'
    }
  ],
  [
    'terms-17-desc-4',
    {
      KOR:
        '17.3. 연방 중재 법. 귀하는 본 계약이 주간 거래에 영향을 미치고 본 제 18 조의 집행 가능성이 연방 중재 법 (Federal Arbitration Act) 9 USC § 1 이하에 따라 실질적으로 및 절차 적으로 모두 해석되고 해석되며 시행 및 집행될 것에 동의합니다. (이하 "FAA")를 해당 법률에서 허용하는 최대한의 범위 내에서 준수해야합니다.',
      ENG:
        '17.3. Federal Arbitration Act. You agree that this Agreement affects' +
        'interstate commerce and that the enforceability of this Section 20' +
        'shall be governed by, construed, and enforced, both substantively and' +
        'procedurally, by the Federal Arbitration Act, 9 U.S.C. § 1 et seq.' +
        '(the “FAA”) to the maximum extent permitted by applicable law.'
    }
  ],
  [
    'terms-17-desc-5',
    {
      KOR:
        '17.4. 방법. 귀하는 당사자가 논쟁을 비공식적으로 해결할 수 있도록 당사자가 발생한지 30 일 이내에 서면으로 분쟁을 서면으로 통보한다는 데 동의합니다. 법률 고문은 ',
      ENG:
        '17.4. Process. You agree that you will notify us in writing of any' +
        'Dispute within thirty (30) days of when it arises so that the parties' +
        'can attempt, in good faith, to resolve the Dispute informally. Notice' +
        'to the us shall be provided by sending an email to'
    }
  ],
  [
    'terms-17-desc-6',
    {
      KOR:
        '으로 전자 메일을 보내주십시오. 귀하의 통지에는 반드시 (1) 귀하의 이름, 우편 주소 및 이메일 주소; (2) 분쟁의 성격 또는 근거에 대한 설명; (3) 귀하가 찾고자 하는 구체적인 구제책. 통지를 받은 날로부터 30 일 이내에 분쟁을 해결하는 방법에 동의하지 않을 경우, 귀하 또는 Polaris Share, Inc.는 본 제 20 조에 따라 적절한 경우 중재 절차를 시작하거나 법원에 청구할 수 있습니다. 귀하는 분쟁 발생 후 일 (1) 년 이내에 당사에 대한 중재 또는 청구가 시작되거나 제기되어야 한다는 데 동의합니다. 그렇지 않으면, 귀하는 청구가 영구적으로 금지된다는 것에 동의합니다 (귀하가 더 이상 분쟁과 관련한 클레임을 주장할 권리가 없음을 의미). 귀하는 다음을 읽고 이해했으며 동의합니다: (a) 뉴욕 주 뉴욕 카운티에서 중재가 이루어질 것입니다. (b) 중재는 JAMS의 규칙에 따라 단일 중재자가 기밀로 수행합니다. (c) 뉴욕의 주 법원 또는 연방 법원은 중재 판정의 집행과 중재의 대상이 아닌 당사자 간의 분쟁에 대한 배타적 인 관할권을 갖습니다. 분쟁이 소액 배상 청구 법정에서 요구되는 요건을 충족하는 경우 거주하는 카운티에 위치한 소액 배상 법원에서 분쟁을 소송할 수도 있습니다. 이해하고 동의해야 합니다. (a) 중재는 New York County, New York에서 발생합니다. (b) 중재는 JAMS의 규칙에 따라 단일 중재자가 기밀로 수행합니다. (c) 뉴욕의 주 법원 또는 연방 법원은 중재 판정의 집행과 중재의 대상이 아닌 당사자 간의 분쟁에 대한 배타적 인 관할권을 갖습니다. 분쟁이 소액 배상 청구 법정에서 요구되는 요건을 충족하는 경우 거주하는 카운티에 위치한 소액 배상 법원에서 분쟁을 소송할 수도 있습니다. 이해하고 동의해야합니다. (a) 중재는 New York County, New York에서 발생합니다. (b) 중재는 JAMS의 규칙에 따라 단일 중재자가 기밀로 수행합니다. (c) 뉴욕의 주 법원 또는 연방 법원은 중재 판정의 집행과 중재의 대상이 아닌 당사자 간의 분쟁에 대한 배타적 인 관할권을 갖습니다. 분쟁이 소액 배상 청구 법정에서 요구되는 요건을 충족하는 경우 거주하는 카운티에 위치한 소액 배상 법원에서 분쟁을 소송할 수도 있습니다. (c) 뉴욕의 주 법원 또는 연방 법원은 중재 판정의 집행과 중재의 대상이 아닌 당사자 간의 분쟁에 대한 배타적 인 관할권을 갖습니다. 분쟁이 소액 배상 청구 법정에서 요구되는 요건을 충족하는 경우 거주하는 카운티에 위치한 소액 배상 법원에서 분쟁을 소송할 수도 있습니다. (c) 뉴욕의 주 법원 또는 연방 법원은 중재 판정의 집행과 중재의 대상이 아닌 당사자 간의 분쟁에 대한 배타적 인 관할권을 갖습니다. 분쟁이 소액 배상 청구 법정에서 요구되는 요건을 충족하는 경우 거주하는 카운티에 위치한 소액 배상 법원에서 분쟁을 소송할 수도 있습니다.',
      ENG:
        '. Your notice must include: (1) your name, postal address, and email' +
        'address; (2) a description of the nature or basis of the Dispute; and' +
        '(3) the specific relief that you are seeking. If we cannot agree how' +
        'to resolve the Dispute within thirty (30) days of the us receiving the' +
        'notice, either you or Polaris Share, Inc. may, as appropriate pursuant' +
        'to this Section 20, commence an arbitration proceeding or file a claim' +
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
        '17.5. 중재인 권한. FAA, 본 계약 및 적용 가능한 JAMS 규칙에 의해 제한되는 바와 같이, 중재자는 다음을 갖습니다: (a) 분쟁에 관한 모든 절차 적 및 실질적인 결정을 내리는 독점적 권한 및 관할권; (b) 법원에서 달리 구할 수있는 구제책을 부여할 권한. 중재인은 개인 중재를 실시할 수 있으며 둘 이상의 개인의 클레임을 통합하거나, 어떤 종류의 클래스 또는 대표 진행을 관장하거나 둘 이상의 개인이 관련된 모든 진행을 관장할 수 없습니다.',
      ENG:
        '17.5. Authority of Arbitrator. As limited by the FAA, this Agreement' +
        'and applicable JAMS rules, the arbitrator will have: (a) the exclusive' +
        'authority and jurisdiction to make all procedural and substantive' +
        'decisions regarding a Dispute; and (b) the authority to grant any' +
        'remedy that would otherwise be available in court. The arbitrator may' +
        'only conduct an individual arbitration and may not consolidate others' +
        'than one individual’ s claims, preside over any type of class or' +
        'representative proceeding or preside over any proceeding involving' +
        'others than one individual.'
    }
  ],
  [
    'terms-17-desc-8',
    {
      KOR: '17.6. JAMS의 규칙. JAMS의 규칙 및 추가 정보는 JAMS 웹 사이트 ',
      ENG:
        '17.6. Rules of JAMS. The rules of, and additional information about,' +
        'JAMS are available on the JAMS website at'
    }
  ],
  [
    'terms-17-desc-9',
    {
      KOR:
        '에서 볼 수 있으며 수시로 업데이트 될 수 있습니다. 본 계약의 준수에 동의함으로써 귀하는 다음 중 하나를 수행합니다. (a) 귀하가 JAMS 규칙을 읽고 이해했음을 인정하고 동의합니다. (b) JAMS의 규칙을 읽는 기회를 포기하고 JAMS의 규칙이 불공정하거나 어떠한 이유로도 적용해서는 안된다는 주장.',
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
        '17.7. 분리 가능성. 이 제 18조의 조항, 조항 또는 조항이 유효하지 않거나 시행이 불가능할 경우 법률에서 요구하는 최소한의 범위 내에서 유지되어야 하며 기타 모든 조항, 조항 또는 조항은 유효하고 시행 가능합니다. 또한 18.2 항에 명시된 권리 포기는 본 계약의 다른 조항과 분리되며 해당 법률에서 금지하는 경우를 제외하고는 유효하고 시행 가능합니다.',
      ENG:
        '17.7. Severability. If any term, clause, or provision of this Section' +
        '20 is held invalid or unenforceable, it will be so held to the minimum' +
        'extent required by law and all other terms, clauses or provisions will' +
        'remain valid and enforceable. Further, the waivers set forth in' +
        'Section 20.2 are severable from the other provisions of this Agreement' +
        'and will remain valid and enforceable, except as prohibited by' +
        'applicable law.'
    }
  ],
  [
    'terms-18-title',
    {
      KOR: '18. 적용 법률 및 장소',
      ENG: '18. Applicable Law and Venue'
    }
  ],
  [
    'terms-18-desc',
    {
      KOR:
        '본 계약 및 서비스 및 Polaris Share 컨텐츠에 대한 귀하의 액세스 및 사용은 법 조항의 상충에 의거하지 않고 뉴욕 법에 따라 규율 되고 해석됩니다. 제 18 조의 중재 조항이 적용되지 않고 소액 배상 청구 법정에서 분쟁을 청취 할 수 없는 경우 귀하는 이 계약 또는 본 계약과 관련하여 발생하는 법률 또는 형평상의 행위가 주에서만 소송 뉴욕 주 뉴욕 카운티에 소재한 연방 법원 및 귀하는 본 계약에서 발생하는 모든 소송, 소송 또는 소송에 대해 취소 불가능하고 무조건적으로 동의하고 해당 법원의 배타적 관할권에 복종해야 합니다.',
      ENG:
        'This Agreement and your access to and use of the Service and the' +
        'Polaris Share Content will be governed by, and construed in accordance' +
        'with, the laws of New York, without resort to its conflict of law' +
        'provisions. To the extent the arbitration provision in Section 20 does' +
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
      KOR: '당사는 사전 통보없이 ',
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
        '을 포함하여 서비스에 액세스하고 이를 사용하기 위한 귀하의 라이센스를 해지할 수 있는 권리를 당사의 재량에 따라 보유 할 권리를 보유하며, 귀하가 향후 서비스에 액세스하고 사용하는 것을 차단 또는 방지 할 권리를 보유합니다. 제공하십시오.',
      ENG:
        'and to block or prevent your future access to, and use of, the Service' +
        'that we provide.'
    }
  ],
  [
    'terms-20-title',
    {
      KOR: '20. 분리 가능성',
      ENG: '20. Severability'
    }
  ],
  [
    'terms-20-desc',
    {
      KOR:
        '본 계약의 조항, 조항 또는 조항이 불법이거나 효력이 없거나 시행 할 수 없는 이유로 간주되는 경우 해당 조항, 조항 또는 조항은 본 계약에서 분리 될 수 있는 것으로 간주되며 나머지 조항의 유효성 및 집행 가능성에는 영향을 미치지 않습니다.',
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
      KOR: '21. 변경 사항',
      ENG: '21. Changes'
    }
  ],
  [
    'terms-21-desc-1',
    {
      KOR:
        '본 계약은 본 서비스에 관한 귀하와 당사 간의 완전한 합의입니다. 이는 귀하와 당사 사이의 모든 이전 또는 현재 계약을 대체합니다. 우리는 언제든지이 사용자 계약을 수정할 수 있습니다. 귀하의 권리에 중대한 영향을 미치는 본 계약을 변경하는 경우, 우리는 통지를 제공하고이 개정판을 ',
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
        '의 아카이브로 보관할 것입니다. 본 계약을 변경한 후에도 서비스를 계속 사용함으로써 귀하는 그러한 변경에 동의하는 것입니다.',
      ENG:
        'By' +
        'continuing to use the Services after a change to this agreement, you' +
        'agree to those changes.'
    }
  ],
  [
    'terms-22-title',
    {
      KOR: '22. 연락처 정보',
      ENG: '22. Contact Information'
    }
  ],
  [
    'terms-22-desc-1',
    {
      KOR: 'Polaris Share, Inc.에 대한 통지는 ',
      ENG: 'Notices to Polaris Share, Inc. should be directed to'
    }
  ],
  [
    'terms-22-desc-2',
    {
      KOR: '로 보내야합니다.',
      ENG: ' '
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
    }
  ],
  [
    '',
    {
      KOR: '',
      ENG: ''
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
  return Lang.EN
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
