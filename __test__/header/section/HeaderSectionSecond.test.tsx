// @ts-ignore
import { render } from '@testing-library/react'
// @ts-ignore
import React from 'react'
import HeaderSectionSecond from '../../../components/header/section/HeaderSectionSecond'
import { psString } from '../../../utils/localization'
import { Provider } from 'react-redux'
import store from '../../../redux/store'

describe('<HeaderSectionSecond />', () => {
  it('Login Button component exists', () => {
    const tree = render(
      <Provider store={store}>
        <HeaderSectionSecond />
      </Provider>
    )
    tree.getByText(psString('header-login'))
  })
})
