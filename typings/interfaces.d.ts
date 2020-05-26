import DocumentInfo from '../service/model/DocumentInfo'
import DocumentList from '../service/model/DocumentList'
import UserInfo from '../service/model/UserInfo'
import { MainState } from '../redux/main/reducer'
import { TrackingState } from '../redux/tracking/reducer'
import TagListItem from '../service/model/TagListItem';

export interface DocumentId {
  documentId: string
}

export interface ContentsBookmarkProps {
  documentData: DocumentInfo
  bookmarkList: DocumentId[]
  path: string
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

export interface ContentsListItemProps {
  documentData: DocumentInfo
  path: string
  bookmarkList: DocumentId[]
}

export interface DocumentCardListProps {
  path: string
}

export interface OthersProps {
  tagList: TagListItem[]
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

export interface ProfileSummaryRewardsProps {
  reward
}

export interface ProfileSummaryAuthorProps {
  balance
  reward
  profileInfo
  owner
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
  mylist
  click?: any
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

export interface DocumentCardApolloProps {
  userId: string
  documentId: string
}

export interface QueryDocumentCardInfo {
  document: any
  user: any
  creator: any
}

export interface TrackingExportBtnProps {
  documentData
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

export interface MainInitState {
  initComplete: boolean
  myInfo: UserInfo
  alertCode: number
  alertData: {}
  tagList: []
  modalCode: string
  modalData?: {}
  isMobile: false
}

export interface TrackingInitState {
  showAnonymous: boolean
  showOnePage: boolean
}

// redux 도메인 추가 시, interface 도 함께 추가해 주어야 합니다.
export interface StateProps {
  tracking: TrackingState
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