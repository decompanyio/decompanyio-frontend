import common from '../common/common'
import { APP_CONFIG } from '../app.config'

// CSS 목록
let init =
  'text-shadow: 2px 2px 2px #3681fe;color:#3681fe;font-size:40px;font-weight:bold;' // 초기화
let success = 'color:green;font-weight:bold;' // 성공
let failed = 'color:red:font-weight:bold;' // 실패
let component =
  'font-size:20px;font-weight:bold;background:#4d4d4d;color:white;border-radius:3px;padding:0 10px;margin:40px 0 10px 0' // 컴포넌트
// let objTitle = 'font-weight:bold;color:purple' // 오브젝트 제목
let categories = 'font-weight:bold;text-transform: uppercase;' // 카테고리

type ErrorProps = boolean

export default {
  Common: {
    getReward: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('User Reward SETTING : %c COMPLETE', success)
        else console.log('User Reward SETTING : %c FAILED', failed, err)
      } // else "Do something!"
    },
    getBalance: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('Balance SETTING : %c COMPLETE', success)
        else console.log('Balance SETTING : %c FAILED', failed, err)
      } // else "Do something!"
    }
  },

  // Layout.tsx
  Layout: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) {
          console.log(
            '%cPOLARIS SHARE %c' + common.getVersion(),
            init,
            init + 'font-size:25px !important;'
          )
          console.log('%cLayout.tsx', component)
        }
      } // else "Do something!"
    },
    setTagList: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('Tag List SETTING : %c COMPLETE', success)
        else console.log('Tag List SETTING : %c FAILED', failed, err)
      } // else "Do something!"
    },
    setIsMobile: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) {
          console.log('Mobile Environment SETTING : %c COMPLETE', success)
        } else {
          console.log('Mobile Environment SETTING : %c FAILED', failed, err)
        }
      } // else "Do something!"
    },
    setMyInfo: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) {
          console.log('User Information SETTING : %c COMPLETE', success)
        } else console.log('User Information SETTING : %c FAILED', failed, err)
      } // else "Do something!"
    },
    handleResize: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) {
          console.log('Scroll Event Listener START : %c COMPLETE', success)
        } else {
          console.log('Scroll Event Listener START : %c FAILED', failed, err)
        }
      } // else "Do something!"
    },
    handleResizeEnd: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) {
          console.log('Scroll Event Listener END : %c COMPLETE', success)
        } else {
          console.log('Scroll Event Listener END : %c FAILED', failed, err)
        }
      } // else "Do something!"
    },
    handleKeydown: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) {
          console.log('KeyDown Event Listener START : %c COMPLETE', success)
        } else {
          console.log('KeyDown Event Listener START : %c FAILED', failed, err)
        }
      } // else "Do something!"
    },
    handleKeydownEnd: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) {
          console.log('KeyDown Event Listener END : %c COMPLETE', success)
        } else {
          console.log('KeyDown Event Listener END : %c FAILED', failed, err)
        }
      } // else "Do something!"
    },
    handleMousemove: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) {
          console.log('MouseMove Event Listener START : %c COMPLETE', success)
        } else {
          console.log('MouseMove Event Listener START : %c FAILED', failed, err)
        }
      } // else "Do something!"
    },
    handleMousemoveEnd: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) {
          console.log('MouseMove Event Listener END : %c COMPLETE', success)
        } else {
          console.log('MouseMove Event Listener END : %c FAILED', failed, err)
        }
      } // else "Do something!"
    },
    handleScroll: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) {
          console.log('Scroll Event Listener START : %c COMPLETE', success)
        } else {
          console.log('Scroll Event Listener START : %c FAILED', failed, err)
        }
      } // else "Do something!"
    },
    handleScrollEnd: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) {
          console.log('Scroll Event Listener END : %c COMPLETE', success)
        } else {
          console.log('Scroll Event Listener END : %c FAILED', failed, err)
        }
      } // else "Do something!"
    }
  },

  // Header.tsx
  Header: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('%cHeader.tsx', component)
      } // else "Do something!"
    }
  },

  // Main.tsx
  Main: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('%cMain.tsx', component)
      } // else "Do something!"
    }
  },

  // DocumentCardList.tsx
  DocumentCardList: {
    getDocuments: (path: string, err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) {
          console.log(
            '%c"' + path + '" %cDocument List SETTING : %c COMPLETE',
            categories,
            '',
            success
          )
        } else {
          console.log(
            '%c"' + path + '" %cDocument List SETTING : %c FAILED',
            categories,
            '',
            failed,
            err
          )
        }
      } // else "Do something!"
    }
  },

  // ContentList.tsx
  ContentList: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('%cContentList.tsx', component)
      } // else "Do something!"
    },
    fetchDocuments: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('Document List FETCHING : %c COMPLETE', success)
        else console.log('Document List FETCHING : %c FAILED', failed, err)
      } // else "Do something!"
    }
  },

  // ViewContainer.tsx
  ViewContainer: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('%ViewContainer.tsx', component)
      } // else "Do something!"
    }
  },

  // ViewPdfViewer.tsx
  ViewPdfViewer: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('%ViewPdfViewer.tsx', component)
      } // else "Do something!"
    }
  },

  // ProfileCard.tsx
  ProfileCard: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('%ProfileCard.tsx', component)
      } // else "Do something!"
    }
  },

  // ProfileSummary.tsx
  ProfileSummary: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('%ProfileSummary.tsx', component)
      } // else "Do something!"
    }
  },

  // ProfileUploadTab.tsx
  ProfileUploadTab: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('%ProfileUploadTab.tsx', component)
      } // else "Do something!"
    }
  },

  // WithdrawModal.tsx
  WithdrawModal: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('%ProfileUploadTab.tsx', component)
      } // else "Do something!"
    },
    walletWithdraw: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('Wallet WITHDRAW : %c COMPLETE', success)
        else console.log('Wallet WITHDRAW : %c FAILED', failed, err)
      } // else "Do something!"
    }
  },

  // EditDocumentModal.tsx
  EditDocumentModal: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('%EditDocumentModal.tsx', component)
      } // else "Do something!"
    },
    updateDocument: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('Document UPDATE : %c COMPLETE', success)
        else console.log('Document UPDATE : %c FAILED', failed, err)
      } // else "Do something!"
    }
  },

  // DeleteDocumentModal.tsx
  DeleteDocumentModal: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('%DeleteDocumentModal.tsx', component)
      } // else "Do something!"
    },
    updateDocument: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('Document UPDATE : %c COMPLETE', success)
        else console.log('Document UPDATE : %c FAILED', failed, err)
      } // else "Do something!"
    }
  },

  // VoteModal.tsx
  VoteModal: {
    init: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('%VoteModal.tsx', component)
      } // else "Do something!"
    },
    voteDocument: (err?: ErrorProps): void => {
      if (APP_CONFIG.debug) {
        if (!err) console.log('Document Voting : %c COMPLETE', success)
        else console.log('Document Voting : %c FAILED', failed, err)
      } // else "Do something!"
    }
  }
}
