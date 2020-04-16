// @ts-ignore
import React from 'react'
import DocumentInfo from '../../../service/model/DocumentInfo'
import ViewBookmark from '../../../components/body/view/ViewBookmark'
import { Provider } from 'react-redux'
import store from '../../../redux/store'
import { mount } from 'enzyme'

let documentData = new DocumentInfo({
  id: 'test1234',
  documentId: 'test1234'
})

describe('<ViewBookmark />', () => {
  it('show icons correctly when bookmark flag is TRUE', () => {
    let mylist = {
      id: 'test1234',
      documentId: 'test1234'
    }

    const tree = mount(
      <Provider store={store}>
        <ViewBookmark documentData={documentData} mylist={mylist} />
      </Provider>
    )

    expect(tree.html()).toEqual('<div></div>')
  })
})
