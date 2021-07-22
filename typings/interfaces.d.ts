import DocumentInfo from '../service/model/DocumentInfo'
import UserInfo from '../graphql/models/UserInfo'
import { MainState } from '../redux/main/reducer'
import { TrackingState } from '../redux/tracking/reducer'
import { ProfileState } from '../redux/profile/reducer'
import WalletHistoryData from '../service/model/WalletHistoryData'

export interface DocumentId {
  documentId: string
}

export interface pagination {
  pagination?: documentPaginationProps
}

export interface documentPagination {
  Document?: pagination
  DocumentPopular?: pagination
  DocumentFeatured?: pagination
  UserDocumentFavorite?: pagination
  UserDocumentHistory?: pagination
}

export interface documentPaginationProps {
  count: number
  items: { _id: string; accountId: string }[]
  pageInfo: {
    currentPage: number
    hasNextPage: boolean
    hasPreviousPage: boolean
    itemCount: number
    pageCount: number
    perPage: number
  }
}

export interface ContentsBookmarkProps {
  documentData: DocumentInfo
}

export interface ContentsListProps {
  tag: string
  path: string
}

export interface ParamsGetDocumentList {
  pageNo?: number
  username?: string
  tag?: string
  path?: string
  pageSize?: number
}

export interface ContentsItemProps {
  documentData: DocumentInfo
  documentRoyalty
}

export interface DocumentCardListProps {
  path: string
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
  owner: boolean | number
}

export interface ProfileCreatorClaimProps {
  documentData: DocumentInfo
  validClaimAmount: number
  owner?: boolean | number
}

export interface ProfileCuratorClaimProps extends ProfileCreatorClaimProps {}

export interface ProfileSummaryProps {
  profileInfo
  owner: boolean | number
}

export interface ProfileSummaryRewardsProps {
  reward
}

export interface ProfileSummaryAuthorProps {
  balance
  reward
  profileInfo
  owner: boolean | number
}

export interface ProfileTabProps {
  profileInfo
  owner: boolean | number
}

export interface ProfileUploadProps {
  profileInfo: UserInfo
  owner: boolean | number
}

export interface ProfileUploadTabItemProps {
  documentData: DocumentInfo
  profileInfo: UserInfo
  idx: number
  handleUploadSettings: () => void
  viewerOptionOpenedIdx: number
  owner: boolean | number
}

export interface ProfileMyListItemProps {
  documentData: DocumentInfo
  documentRoyalty
}

export interface ProfileHistoryItemProps {
  documentData: DocumentInfo
  documentRoyalty
}

export interface ProfileMyListThumbProps {
  documentData: DocumentInfo
}

export interface ProfileHistoryThumbProps {
  documentData: DocumentInfo
}

export interface ProfileMyListTitleProps {
  documentData: DocumentInfo
}

export interface ProfileHistoryTitleProps {
  documentData: DocumentInfo
}

export interface ProfileMyListDescProps {
  documentData: DocumentInfo
}

export interface ProfileHistoryDescProps {
  documentData: DocumentInfo
}

export interface ProfileMyListInfoProps {
  documentData: DocumentInfo
  documentRoyalty
}

export interface ProfileHistoryInfoProps {
  documentData: DocumentInfo
  documentRoyalty
}

export interface ProfileMyListTabProps {
  profileInfo
}

export interface ProfileHistoryTabProps {
  profileInfo
}

export interface ProfileUploadOptionProps {
  documentData
  idx: number
  handleUploadSettings: () => void
  viewerOptionOpenedIdx: number
  owner: boolean | number
}

export interface ProfileUploadThumbProps {
  documentData
  convertState: string
  username: string
}

export interface ProfileUploadTitleProps {
  documentData
  convertState: string
  username: string
}

export interface ProfileUploadDescProps {
  documentData
  convertState: string
  username: string
}

export interface ProfileUploadInfoProps {
  documentData
  owner: boolean | number
  convertState: string
}

export interface ProfilePublishBtnProps {
  documentData
  convertState: string
}

export interface ProfileVoteTabProps {
  profileInfo
  owner: boolean | number
}

export interface ProfileVoteTabItemProps {
  documentData
  owner: boolean | number
}

export interface ProfileWalletHistoryItemProps {
  historyData: WalletHistoryData
}

export interface TrackingAuthorProps {
  documentData
  ratio: number
}

export interface TrackingListProps {
  documentData
}

export interface TrackingListItemProps {
  documentData
  listItemData
  idx: number
}

export interface TrackingDetailItemProps {
  mapData
  documentData
  text
}

export interface TrackingDetailListProps {
  cid: string
  documentData
  text
  user: string
}

export interface ViewBookmarkProps {
  documentData
}

export interface ViewFullscreenBtnProps {
  documentData
  ratio: number
  readPage: number
}

export interface ViewContainerProps {
  documentData
  ratio: number
  readPage: number
  text
  thumbnailList: string[]
}

export interface ViewPdfViewerProps {
  documentData
  pageChange
  ratio: number
  readPage: number
  text
  thumbnailList: string[]
}

export interface ViewDescBoxProps {
  documentData
}

export interface ViewContainerWrapper {
  seoTitle: string
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
  path?: string
  size?: string
}

export interface ToTopBtnProps {
  prevScrollPos: number
}

export interface DocumentCardProps {
  userId: string
  documentId: string
  authRequired: boolean
}

export interface QueryDocumentCardInfo {
  document: any
  user: any
  creator: any
}

export interface TrackingExportBtnProps {
  documentData
}

export interface ProfileContainerProps {
  identifier: string
  owner: boolean | number
}

export interface ProfileCardProps {
  click: () => void
}

export interface CustomChartProps {
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

export interface HeaderProps {
  title: string
  path: string
  metaData
}

export interface MetaProps {
  title: string
  metaData
}

export interface MainInitState {
  initComplete: boolean
  myInfo: UserInfo
  alertCode: number
  alertData: {}
  tagList: []
  modalCode: string
  modalData?: {}
  isMobile: boolean
  isTablet: boolean
}

export interface TrackingInitState {
  showAnonymous: boolean
  showOnePage: boolean
}

export interface ProfileInitState {
  withdrawPending: boolean
}

// redux 도메인 추가 시, interface 도 함께 추가해 주어야 합니다.
export interface StateProps {
  tracking: TrackingState
  profile: ProfileState
  main: MainState
}

export interface getDocumentListByIdsQuery {
  Document
  DocumentFeatured
  DocumentPopular
}

export interface getDocumentListByIdsMultipleQuery {
  Document
  DocumentFeatured
  DocumentPopular
}

export interface getProfileRewardsQuery {
  ProfileSummary
}

export interface DropdownProps {
  options: string[]
  placeholder: string
  className: string
  arrowClassName?: string
  menuClassName?: string
  onChange
}

export interface MainHexSliderItemProps {
  activeIndex: number
  slideIndex: number
  documentData: DocumentInfo
  documentRoyalty
}

export interface MainRecentItemProps {
  documentData: DocumentInfo
}

export interface MainTopListItemProps {
  userId: string
  documentId: string
}

export interface contentsListIDList {
  account: string[]
  document: string[]
}

export interface mainHexSliderListIDList {
  account: string[]
  document: string[]
}

export interface recentListIDList {
  account: string[]
  document: string[]
}

export interface documentTopIDList {
  account: string[]
  document: string[]
}

export interface AutoSuggestInputProps {
  search: Function
  enter?: Function
  type: string
  getNameList?: any
  placeholder?: string
}

export interface headerSectionFirstProps {
  path?: string
}

export interface MainThirdSectionTopItemProps {
  documentData: DocumentInfo
  documentRoyalty
}

export interface HeaderTagProps {
  path: string
  title: string
}
