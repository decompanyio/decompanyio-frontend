// @ts-ignore
import { render } from '@testing-library/react'
// @ts-ignore
import React from 'react'
import store from '../../../redux/store'
import { Provider } from 'react-redux'
import More from '../../../components/body/more/More'

let tagList = [{ _id: 'test', value: 0 }]

describe('<More />', () => {
  it('shows the props correctly', () => {
    const tree = render(
      <Provider store={store}>
        <More tagList={tagList} />
      </Provider>
    )
    tree.getByText('# test')
  })
})
