// @ts-ignore
import React from 'react'
import DocumentCard from '../../../components/common/card/DocumentCard'
import DocumentInfo from '../../../service/model/DocumentInfo'
import { Provider } from 'react-redux'
import store from '../../../redux/store'
// @ts-ignore
import { mount, shallow } from 'enzyme'
import common from '../../../common/common'
import { act } from '@testing-library/react'

let documentData = new DocumentInfo({
  id: 'test1234',
  documentId: 'test1234'
})
let imgSrc = common.getThumbnail(
  documentData.documentId,
  640,
  1,
  documentData.documentName
)
describe('<DocumentCard />', () => {
  it('shows the props correctly', async () => {
    let tree
    await act(async () => {
      tree = mount(
        <Provider store={store}>
          <DocumentCard documentData={documentData} />
        </Provider>
      )
    })

    expect(tree.find('img').exists()).toEqual(true)
    expect(
      tree
        .find('img')
        .at(0)
        .prop('src')
    ).toEqual(imgSrc)
  })
})
