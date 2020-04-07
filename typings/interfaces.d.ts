import DocumentInfo from '../service/model/DocumentInfo'
import DocumentList from '../service/model/DocumentList'
import UserInfo from '../service/model/UserInfo'

export interface DocumentId {
  documentId: string
}

export interface ContentsBookmarkProps {
  documentData: DocumentInfo
  bookmarkList: DocumentId[]
  path: string
}

export interface ContentsListProps {
  documentList: DocumentList
  tag: string
  path: string
}

export interface ContentsListResultListSet {
  listData: []
  isEndPage: boolean
}

export interface ParamsGetDocumentList {
  pageNo?: number
  username?: string
  email?: string
  tag?: string
  path?: string
  pageSize?: number
}

export interface ContentsListItemProps {
  documentData: DocumentInfo
  path: string
  bookmarkList: DocumentId[]
}

export interface MainListProps {
  path: string
}

export interface MoreProps {
  tagList: []
}

export interface DateSet {
  year: number
  week: number
}

export interface ProfileAnalyticsChartProps {
  idx: number
  spreadItem: number
  weekBtnClick: Function
  exportBtnClick: Function
  dateSet: DateSet
  analyticsList: any
  chartFlag: boolean
  result: any
}

export interface ProfileAnalyticsTabProps {
  profileInfo: UserInfo
}

export interface ProfileAvatarEditProps {
  owner: boolean
}

export interface ProfileCreatorClaimProps {
  documentData: DocumentInfo
  validClaimAmount: number
}

export interface ProfileCuratorClaimProps extends ProfileCreatorClaimProps {}

export interface ProfileSummaryProps {
  profileInfo
  owner: boolean
}

export interface ProfileTabProps {
  profileInfo
  owner: boolean
}

export interface ProfileUploadProps {
  profileInfo
  owner: boolean
}

export interface ProfileUploadTabItemProps {
  documentData
  idx: number
  handleUploadSettings: () => void
  viewerOptionOpenedIdx: number
  owner: boolean
}

export interface ProfileVoteProps {
  documentData
}

export interface ProfileVoteTabProps {
  profileInfo
  owner: boolean
}

export interface ProfileVoteTabItemProps {
  documentData
  owner: boolean
}

export interface TrackingAuthorProps {
  documentData
  ratio: number
}

export interface TrackingListProps {
  documentData
}

export interface TrackingDetailItemProps {
  mapData
  documentData
  text
}

export interface TrackingDetailListProps {
  cid
  documentData
  text
}

export interface ViewBookmarkProps {
  documentData
  mylist
  click
}

export interface ViewFullscreenBtnProps {
  documentData
  ratio: number
  readPage: number
}

export interface ViewInfoBoxProps {
  documentData
}

export interface ViewOptionProps {
  documentData
}

export interface ViewSeeAlsoProps {
  documentData
}

export interface ViewToolBoxProps {
  documentData
}

export interface AlertProps {
  code: number
  alertData
  close
}

export interface MyAvatarProps {
  croppedArea
  size: number
  picture: string
  click?: () => void
}

export interface UserAvatarProps {
  croppedArea
  size: number
  picture: string
}

export interface SearchBtnProps {
  click?: () => void
}

export interface ToTopBtnProps {
  prevScrollPos: number
}

export interface DocumentCardProps {
  documentData
}

export interface ProfileCardProps {
  click: () => void
}

export interface CustromChartProps {
  subject
  chartData
  week
  year
}

export interface ContentsListItemMockProps {
  order: number
}

export interface DocumentCardMockProps {
  order: number
}

export interface UploadProgressModalProps {
  percentage: number
}

export interface DeletedPageProps {
  errMessage?: string
}

export interface NotFoundPageProps {
  errMessage?: string
}

export interface DropZoneProps {
  handleFileChange
  fileInfoError
}

export interface PaginationProps {
  totalCount: number
  pageCount: number
  selectedPage?: number // url parameter 에 page 추가 됐을시 사용
  click: (page: number) => void
}

export interface MenuProps {
  setMenuClose
}

export interface MenuAvatarProps {
  identification: string
}

export interface HeaderSectionFirstProps {
  path: string
}

export interface HeaderProps {
  title: string
  path: string
  metaData
}

export interface MetaProps {
  title: string
  metaData
}

export interface InitState {
  initComplete: boolean
  myInfo: UserInfo
  alertCode: number
  alertData: {}
  tagList: []
  modalCode: string
  modalData?: {}
  isMobile: false
}