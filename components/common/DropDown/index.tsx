import React, { ReactElement } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { DropdownProps } from '../../../typings/interfaces'

export default function DropDown({
  options,
  placeholder,
  className,
  arrowClassName,
  menuClassName,
  onChange
}: DropdownProps): ReactElement {
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
