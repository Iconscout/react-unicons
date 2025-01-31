import * as React from 'react'
import { IconProps } from '../index'

const UilSignal = ({
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
      d: 'M6,15a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V16A1,1,0,0,0,6,15Zm4-3a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V13A1,1,0,0,0,10,12Zm8-8a1,1,0,0,0-1,1V19a1,1,0,0,0,2,0V5A1,1,0,0,0,18,4ZM14,8a1,1,0,0,0-1,1V19a1,1,0,0,0,2,0V9A1,1,0,0,0,14,8Z'
    })
  )
}

export default UilSignal