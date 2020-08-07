// @ts-ignore
import { render } from '@testing-library/react'
// @ts-ignore
import React from 'react'
import ContentsBookmark from './index'
import DocumentInfo from '../../../service/model/DocumentInfo'
import store from '../../../redux/store'
import { Provider } from 'react-redux'

let bookmarkFlag = false
let path = ''
let documentData = new DocumentInfo({ id: 'test1234' })

describe('<ContentsBookmark />', () => {
  it('show icons correctly when bookmark flag is TRUE', () => {
    bookmarkFlag = true

    const tree = render(
      <Provider store={store}>
        <ContentsBookmark
          bookmarkFlagData={bookmarkFlag}
          documentData={documentData}
          path={path}
        />
      </Provider>
    )
    tree.getByText('bookmark')
  })

  it('show icons correctly when bookmark flag is FALSE', () => {
    bookmarkFlag = false

    const tree = render(
      <Provider store={store}>
        <ContentsBookmark
          bookmarkFlagData={bookmarkFlag}
          documentData={documentData}
          path={path}
        />
      </Provider>
    )
    tree.getByText('bookmark_border')
  })
})
