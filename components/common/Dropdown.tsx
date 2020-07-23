import React, { ReactElement } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { DropdownProps } from '../../typings/interfaces'
//import * as styles from '../../public/static/styles/scss/index.scss'

export default function({
  options,
  placeholder,
  className,
  arrowClassName,
  menuClassName,
  onChange
}: DropdownProps): ReactElement {
  //const defaultOption = options.length > 0 ? options[0] : ''

  return (
    <Dropdown
      className={className}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      arrowClassName={arrowClassName}
      menuClassName={menuClassName}
    />
  )
}
