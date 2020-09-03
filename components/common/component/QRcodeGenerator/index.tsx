import React, { ReactElement } from 'react'
import QRCode from 'qrcode.react'

export default function QRcodeGenerator({ value }): ReactElement {
  return <QRCode value={value} />
}
