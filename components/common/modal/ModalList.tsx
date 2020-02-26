import React from "react"
import { useSelector } from "react-redux"
import UploadDocumentModal from "./UploadDocumentModal"
import EditDocumentModal from "./EditDocumentModal"
import AwayModal from "./AwayModal"
import UploadCompleteModal from "./UploadCompleteModal"
import EmailModal from "./EmailModal"
import ShareModal from "./ShareModal"
import PrivateDocumentCountModal from "./PrivateDocumentCountModal"
import DeleteDocumentModal from "./DeleteDocumentModal"
import PublishModal from "./PublishModal"
import PublishCompleteModal from "./PublishCompleteModal"
import ImageCropModal from "./ImageCropModal"
import DollarLearnMoreModal from "./DollarLearnMoreModal"
import VoteModal from "./VoteModal"
import DepositModal from "./DepositModal"
import WithdrawModal from "./WithdrawModal"

export default function() {
  const modalCode = useSelector(state => state.main.modalCode)

  return (
    {
      // 문서 업로드 모달
      upload: <UploadDocumentModal />,

      // 문서 수정 모달
      edit: <EditDocumentModal />,

      // 자리 비움 모달
      away: <AwayModal />,

      // 업로드 완료 모달
      uploadComplete: <UploadCompleteModal />,

      // 이메일 모달
      email: <EmailModal />,

      // 공유 모달
      share: <ShareModal />,

      // 비공개 문서 개수
      privateDocumentCount: <PrivateDocumentCountModal />,

      // 비공개 문서 개수
      delete: <DeleteDocumentModal />,

      // 문서 출판 모달
      publish: <PublishModal />,

      // 이미지 자르기 모달
      imageCrop: <ImageCropModal />,

      // 달러 정책 설명 모달
      dollarLearnMore: <DollarLearnMoreModal />,

      // 문서 출판 완료 모달
      publishComplete: <PublishCompleteModal />,

      // 투표 모달
      vote: <VoteModal />,

      // 입금 모달
      deposit: <DepositModal />,

      // 출금 모달
      withdraw: <WithdrawModal />
    }[modalCode] || <div />
  )
}
