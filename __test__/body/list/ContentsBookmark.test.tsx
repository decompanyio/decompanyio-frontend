// @ts-ignore
import { render } from '@testing-library/react'
// @ts-ignore
import React from 'react'
import ContentsBookmark from '../../../components/body/list/ContentsBookmark'
import DocumentInfo from '../../../service/model/DocumentInfo'
import { DocumentId } from '../../../typings/interfaces'
import store from '../../../redux/store'
import { Provider } from 'react-redux'

let bookmarkList: DocumentId[]
let path = ''
let documentData = new DocumentInfo({ id: 'test1234' })

describe('<ContentsBookmark />', () => {
  it('show icons correctly when bookmark flag is TRUE', () => {
    bookmarkList = [{ documentId: 'test1234' }]

    const tree = render(
      <Provider store={store}>
        <ContentsBookmark
          bookmarkList={bookmarkList}
          documentData={documentData}
          path={path}
        />
      </Provider>
    )
    tree.getByText('bookmark')
  })

  it('show icons correctly when bookmark flag is FALSE', () => {
    bookmarkList = [{ documentId: '' }]

    const tree = render(
      <Provider store={store}>
        <ContentsBookmark
          bookmarkList={bookmarkList}
          documentData={documentData}
          path={path}
        />
      </Provider>
    )
    tree.getByText('bookmark_border')
  })
})
