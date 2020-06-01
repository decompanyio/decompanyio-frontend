import React, { ReactElement } from 'react'
import ContentsListItemMock from './ContentsListItemMock'

export default function(): ReactElement {
  return (
    <div>
      <ContentsListItemMock order={0} />
      <ContentsListItemMock order={1} />
      <ContentsListItemMock order={2} />
    </div>
  )
}
