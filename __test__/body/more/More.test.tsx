// @ts-ignore
import { render } from '@testing-library/react'
// @ts-ignore
import React from 'react'
import store from '../../../redux/store'
import { Provider } from 'react-redux'
import Others from '../../../components/body/others/Others'

let tagList = [{ _id: 'test', value: 0 }]

describe('<Others />', () => {
  it('shows the props correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Others tagList={tagList} />
      </Provider>
    )
    tree.getByText('# test')
  })
})
