import * as React from 'react'
import { IconProps } from '../index'

const UilDocumentLayoutLeft = ({
  color = 'currentColor',
  size = 24,
  ...props
}: IconProps) => {
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: color,
      ...props
    },
    React.createElement('path', {
      d: 'M3,12H9a1,1,0,0,0,1-1V5A1,1,0,0,0,9,4H3A1,1,0,0,0,2,5v6A1,1,0,0,0,3,12ZM4,6H8v4H4Zm9,2h8a1,1,0,0,0,0-2H13a1,1,0,0,0,0,2Zm0,10H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2Zm8-4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z'
    })
  )
}

export default UilDocumentLayoutLeft