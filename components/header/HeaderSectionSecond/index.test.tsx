// @ts-ignore
import { render } from '@testing-library/react'
// @ts-ignore
import React from 'react'
import HeaderSectionSecond from './index'
import { psString } from '../../../utils/localization'
import { Provider } from 'react-redux'
import store from '../../../redux/store'

describe('<HeaderSectionSecond />', () => {
  it('LoginButton button component exists', () => {
    const tree = render(
      <Provider store={store}>
        <HeaderSectionSecond />
      </Provider>
    )
    tree.getByText(psString('sectionTop-login'))
  })
})
