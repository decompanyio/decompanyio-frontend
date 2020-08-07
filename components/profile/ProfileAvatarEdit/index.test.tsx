// @ts-ignore
import { render } from '@testing-library/react'
// @ts-ignore
import React from 'react'
import ProfileAvatarEdit from '../ProfileAvatarEdit'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import store from '../../../redux/store'

let owner: boolean

describe('<ProfileAvatarEdit />', () => {
  it('shows edit button correctly when owner TRUE', () => {
    owner = true
    const tree = render(
      <Provider store={store}>
        <ProfileAvatarEdit owner={owner} />
      </Provider>
    )
    tree.getByText('edit')
  })

  it('shows file input correctly when owner TRUE', () => {
    owner = true
    const tree = mount(
      <Provider store={store}>
        <ProfileAvatarEdit owner={owner} />
      </Provider>
    )
    expect(tree.find('#imgFile').exists()).toBeTruthy()
  })
})
