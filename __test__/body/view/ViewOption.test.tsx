// @ts-ignore
import React from 'react'
import DocumentInfo from '../../../service/model/DocumentInfo'
import { Provider } from 'react-redux'
import store from '../../../redux/store'
import { mount } from 'enzyme'
import ViewOption from '../../../components/body/view/ViewOption'
import { act } from '@testing-library/react'

let documentData = new DocumentInfo({
  id: 'test1234',
  documentId: 'test1234'
})

describe('<ViewBookmark />', () => {
  it('shows option table correctly', async () => {
    let tree
    await act(async () => {
      tree = mount(
        <Provider store={store}>
          <ViewOption documentData={documentData} />
        </Provider>
      )
    })

    tree.find('#viewOptionBtn').simulate('click')
    expect(tree.find('#viewer-option-table').exists()).toEqual(true)
  })
  it('shows download button in option table correctly', async () => {
    let tree
    await act(async () => {
      tree = mount(
        <Provider store={store}>
          <ViewOption documentData={documentData} />
        </Provider>
      )
    })

    tree.find('#viewOptionBtn').simulate('click')
    expect(
      tree
        .find('i')
        .at(1)
        .text()
    ).toEqual('save_alt')
  })
})
