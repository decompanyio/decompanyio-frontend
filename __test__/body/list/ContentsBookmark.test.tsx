// @ts-ignore
import { render } from '@testing-library/react'
// @ts-ignore
import React from 'react'
import ContentsBookmark from '../../../components/body/list/ContentsBookmark'
import DocumentInfo from '../../../service/model/DocumentInfo'

let bookmarkList: {}[]
let path = ''
let documentData = new DocumentInfo({ documentId: 'test1234' })

describe('<ContentsBookmark />', () => {
  it('show icons correctly when bookmark flag is TRUE', () => {
    bookmarkList = [{ documentList: 'test1234' }]

    const tree = render(
      <ContentsBookmark
        bookmarkList={bookmarkList}
        documentData={documentData}
        path={path}
      />
    )
    tree.getByText('bookmark')
  })

  it('show icons correctly when bookmark flag is FALSE', () => {
    const tree = render(
      <ContentsBookmark
        bookmarkList={bookmarkList}
        documentData={documentData}
        path={path}
      />
    )
    tree.getByText('bookmark_border')
  })
})
